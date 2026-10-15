// Executes the actual site.js in a minimal DOM simulation.
// This verifies state and calculations, NOT rendering, native controls or browser accessibility.
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const fixtures = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const source = fs.readFileSync(path.join(root, 'site/site.js'), 'utf8');
const results = [];
class Node {
  constructor(n, parent=null) {
    this.tag=n.tag;this.attrs={...n.attrs};this.parent=parent;this.own=n.text;this.handlers={};this.hidden='hidden' in this.attrs;this.disabled='disabled' in this.attrs;this.value=this.attrs.value||'';
    this.children=n.children.map(c=>new Node(c,this));this.dataset={};
    for (const [k,v] of Object.entries(this.attrs)) if(k.startsWith('data-')) this.dataset[k.slice(5).replace(/-([a-z])/g,(_,c)=>c.toUpperCase())]=v;
    this.classes=new Set((this.attrs.class||'').split(/\s+/).filter(Boolean));
    this.classList={add:(v)=>this.classes.add(v),remove:(v)=>this.classes.delete(v),toggle:(v,on)=>{if(on??!this.classes.has(v))this.classes.add(v);else this.classes.delete(v);},contains:(v)=>this.classes.has(v)};
    if(this.tag==='option')this.value=this.attrs.value??this.own;
    if(this.tag==='select')this.options=this.children.filter(c=>c.tag==='option');
  }
  get textContent(){return this.own+this.children.map(c=>c.textContent).join(' ');}
  set textContent(v){this.own=v;this.children=[];}
  getAttribute(k){return this.attrs[k]??null;}
  setAttribute(k,v){this.attrs[k]=v;}
  addEventListener(k,f){(this.handlers[k]??=[]).push(f);}
  emit(k,extras={}){const event={target:this,preventDefault(){},...extras};for(const f of this.handlers[k]||[])f(event);}
  focus(){this.focused=true;}
  closest(tag){return this.tag===tag?this:this.parent?.closest(tag);}
  nodes(){return [this,...this.children.flatMap(c=>c.nodes())];}
  querySelectorAll(selector){return this.nodes().filter(n=>selector.startsWith('#')?n.attrs.id===selector.slice(1):selector.startsWith('.')?n.classes.has(selector.slice(1)):selector.startsWith('[')?selector.slice(1,-1) in n.attrs:n.tag===selector);}
  querySelector(selector){return this.querySelectorAll(selector)[0]||null;}
}
function setup(filename,search='',mobile=true){
  const document=new Node(fixtures[filename]);document.body=document.querySelector('body');
  const media={matches:mobile,handlers:{},addEventListener(k,f){this.handlers[k]=f;}};
  const window={matchMedia:()=>media,location:{search}};
  vm.runInNewContext(source,{document,window,URLSearchParams,console});
  return {document,media,q:s=>document.querySelector(s),qa:s=>document.querySelectorAll(s)};
}
function test(name,fn){try{fn();results.push({name,status:'PASS'});}catch(e){results.push({name,status:'FAIL',message:e.message});}}
test('Every page executes site.js without exception',()=>{for(const f of Object.keys(fixtures))setup(f);});
test('Mobile menu opens, Escape closes and returns focus',()=>{const x=setup('index.html');x.q('.menu-toggle').emit('click');assert.equal(x.q('.menu-toggle').getAttribute('aria-expanded'),'true');assert(x.q('#nav-menu').classes.has('open'));x.document.emit('keydown',{key:'Escape'});assert.equal(x.q('.menu-toggle').getAttribute('aria-expanded'),'false');assert(x.q('.menu-toggle').focused);});
test('Menu closes on navigation and viewport change',()=>{const x=setup('index.html');x.q('.menu-toggle').emit('click');x.q('#nav-menu').emit('click',{target:x.q('#nav-menu').children[0]});assert(!x.q('#nav-menu').classes.has('open'));x.q('.menu-toggle').emit('click');x.media.handlers.change();assert(!x.q('#nav-menu').classes.has('open'));});
test('Without JavaScript, all ten links and five publication cards exist in HTML',()=>{
  for(const f of Object.keys(fixtures)) {
    const d=new Node(fixtures[f]);
    assert.equal(d.querySelector('#nav-menu').children.length,10);
    assert(!d.querySelector('body').classes.has('nav-ready'));
  }
  const d=new Node(fixtures['publications.html']);
  assert.equal(d.querySelectorAll('.publication-card').length,5);
  for(const p of d.querySelectorAll('.publication-card'))assert(!p.hidden);
});

const analytics=fs.readFileSync(path.join(root,'site/analytics.js'),'utf8');
function analyticsContext(url) {
  const inserted=[];
  const document={
    getElementById(id){return inserted.find(s=>s.id===id)||null;},
    createElement(tag){assert.equal(tag,'script');return {attrs:{},setAttribute(k,v){this.attrs[k]=v;}};},
    head:{appendChild(script){inserted.push(script);}}
  };
  const context={document,window:{location:new URL(url)}};
  return {inserted,run(){vm.runInNewContext(analytics,context);}};
}
test('All ten intended public pages and the home directory load analytics asynchronously',()=>{
  for(const page of ['',...Object.keys(fixtures)]) {
    const c=analyticsContext('https://lenaiclartigue.github.io/NanoBioMat/'+page);c.run();
    assert.equal(c.inserted.length,1);
    assert.equal(c.inserted[0].src,'https://scripts.simpleanalyticscdn.com/latest.js');
    assert.equal(c.inserted[0].async,true);
    assert.equal(c.inserted[0].attrs['data-ignore-metrics'],'utm');
    assert(!('data-collect-dnt' in c.inserted[0].attrs));
    assert(!('data-hostname' in c.inserted[0].attrs));
  }
});
const excluded=[
  'file:///C:/NanoBioMat/site/index.html',
  'http://localhost:8000/index.html',
  'http://127.0.0.1:8000/NanoBioMat/index.html',
  'http://[::1]:8000/NanoBioMat/index.html',
  'https://preview.example/NanoBioMat/index.html',
  'https://lenaiclartigue.github.io/NanoBioMat-test/index.html',
  'https://lenaiclartigue.github.io/NanoBioMat-test/site/index.html',
  'https://lenaiclartigue.github.io/thermo/index.html',
  'https://lenaiclartigue.github.io/index.html',
  'http://lenaiclartigue.github.io/NanoBioMat/index.html',
  'https://lenaiclartigue.github.io:8000/NanoBioMat/index.html',
  'https://lenaiclartigue.github.io/NanoBioMat/draft.html',
  'https://lenaiclartigue.github.io/NanoBioMat/private/index.html'
];
test('Local files, loopback, test repositories, other sites and non-listed pages load no third-party script',()=>{
  for(const url of excluded){const c=analyticsContext(url);c.run();assert.equal(c.inserted.length,0,url);}
});
test('Repeated initialization cannot insert the analytics script twice',()=>{
  const c=analyticsContext('https://lenaiclartigue.github.io/NanoBioMat/');c.run();c.run();assert.equal(c.inserted.length,1);
});
test('Existing anchors and query strings do not override the production restriction',()=>{
  for(const url of ['file:///C:/site/index.html?hostname=lenaiclartigue.github.io',
    'https://lenaiclartigue.github.io/NanoBioMat-test/?path=/NanoBioMat/']) {
    const c=analyticsContext(url);c.run();assert.equal(c.inserted.length,0);
  }
  const c=analyticsContext('https://lenaiclartigue.github.io/NanoBioMat/publications.html?utm_source=example#cooperative-2012');
  c.run();assert.equal(c.inserted.length,1);
});
const report={date:'2026-10-15',scope:'Local JavaScript execution in a simulated DOM. No browser, network request or Simple Analytics dashboard verification.',excluded_urls_tested:excluded.length,results};
fs.writeFileSync(path.join(root,'review/NAVIGATION_ANALYTICS_CHECKS.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));if(results.some(r=>r.status==='FAIL'))process.exitCode=1;
