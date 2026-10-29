/* One bibliography, outside teaching panels, at the end of each module. */
(()=>{
const css=document.createElement('style');css.textContent=`#moduleReferences467{margin:28px 0 18px;padding:16px 0 0;border:0;border-top:1px solid #dbe3e7;background:none;box-shadow:none;color:#66717a;font:13px/1.6 Arial,sans-serif}#moduleReferences467 h3,#moduleReferences467 h4{font-size:13px;color:#66717a;margin:0 0 8px;font-weight:600}#moduleReferences467 h4{margin-top:15px}#moduleReferences467 ul{padding-left:20px;margin:5px 0}#moduleReferences467 li{margin:7px 0}#moduleReferences467 a,#moduleReferences467 a:visited{color:#1769aa!important;text-decoration:underline;font-size:13px}#moduleReferences467 p{font-size:13px}`;document.head.append(css);
let groups=[],serial=0;
const isRef=e=>/^(reference publications?|publications? de référence|références bibliographiques)(\s|$)/i.test(e.textContent.trim());
function group(title,nodes){if(!nodes.length)return;let html=nodes.map(n=>n.outerHTML).join('');if(!html.trim())return;groups.push({title,html});nodes.forEach(n=>n.remove());}
function collect(root,defaultTitle){
 const heads=[...root.querySelectorAll('h2,h3,h4,strong')].filter(isRef);
 for(const h of heads){if(!h.isConnected||h.closest('#moduleReferences467')||h.closest('[hidden]')||h.closest('[data-inline-references]'))continue;
 const section=h.closest('.source465,.ref-block,.study-references,.refs464');
 let title=h.closest('.card')?.querySelector('h2')?.textContent||section?.parentElement?.querySelector('h3,h4')?.textContent;
 if(section?.id==='references')title=T('Mécanismes et données de référence','Mechanisms and reference data');else if(section?.classList.contains('source465'))title=T('Schéma','Diagram');else if(!title||isRef({textContent:title}))title=defaultTitle;
 const nodes=[];let n=h.nextElementSibling;
 while(n&&!/^H[1-4]$/.test(n.tagName)&&!n.matches('section,details,nav,button,iframe')){let next=n.nextElementSibling;if(n.matches('ul,ol,p,div')&&(n.querySelector('a')||n.matches('ul,ol')))nodes.push(n);else break;n=next;}
 group(title,nodes);h.remove();if(section&&section.id!=='references'&&!section.textContent.trim())section.remove();
 }
}
function finish(){
 collect($('content'),T('Module','Module'));
 for(const frame of $('content').querySelectorAll('iframe')){try{const doc=frame.contentDocument;if(doc?.body){if([...doc.body.querySelectorAll('h3,strong')].some(isRef))groups=groups.filter(g=>g.title!==T('Modèle interactif','Interactive model'));collect(doc.body,T('Modèle interactif','Interactive model'));if(!frame._refObserver467){const obs=new MutationObserver(ms=>{if(ms.some(m=>[...m.addedNodes].some(n=>n.nodeType===1&&(isRef(n)||[...n.querySelectorAll('h3,strong')].some(isRef)))))setTimeout(finish,0)});obs.observe(doc.body,{childList:true,subtree:true});frame._refObserver467=obs;}}}catch(e){}}
 const main=$('references');if(main){main.hidden=false;main.querySelectorAll(':scope > details,:scope > section,:scope > p,:scope > div').forEach(n=>{if(n.textContent.trim())main.before(n)});main.hidden=!main.textContent.trim();}
 let out=$('moduleReferences467');if(!out){out=document.createElement('section');out.id='moduleReferences467';}
 out.replaceChildren();const h=document.createElement('h3');h.textContent=T('Publications de référence','Reference publications');out.append(h);
 const merged=[];for(const g of groups){let old=merged.find(x=>x.title===g.title);if(old)old.html+=g.html;else merged.push({...g})}const seen=new Set();for(const g of merged){const box=document.createElement('div');box.innerHTML=g.html;box.querySelectorAll(':scope > p,:scope > div').forEach(p=>{const ul=document.createElement('ul');p.innerHTML.split(/<br\s*\/?\s*>/i).filter(x=>x.trim()).forEach(x=>{const li=document.createElement('li');li.innerHTML=x;ul.append(li)});p.replaceWith(ul)});box.querySelectorAll('li').forEach(li=>{const key=li.textContent.replace(/\s+/g,' ').trim();if(seen.has(key))li.remove();else seen.add(key)});if(!box.textContent.trim())continue;
 // Keep citation text grey; use a separate, blue DOI when the whole citation was linked.
 box.querySelectorAll('a').forEach(a=>{if(a.href.includes('doi.org/')&&!/^doi\s*:/i.test(a.textContent)&&a.textContent.length>50){const cite=document.createElement('span');cite.innerHTML=a.innerHTML;a.before(cite,document.createTextNode(' '));a.textContent='doi: '+a.href.split('doi.org/')[1];}});
 if(merged.length>1){const sub=document.createElement('h4');sub.textContent=g.title;out.append(sub)}out.append(box);
 }
 out.hidden=out.children.length<=1;const pager=$('content').querySelector('.module-pager');if(pager)pager.before(out);else $('content').append(out);
}
const before=render;render=function(){serial++;groups=[];$('moduleReferences467')?.remove();if(!$('references')){const r=document.createElement('div');r.id='references';$('content').querySelector('.module-pager').before(r)}$('references').replaceChildren();before();if(current==='interactions')$('heading').querySelector('h2').textContent=T('Comment la distance modifie-t-elle les interactions magnétiques ?','How does distance change magnetic interactions?');const id=serial;finish();$('content').querySelectorAll('iframe').forEach(f=>f.addEventListener('load',()=>{if(serial===id){finish();setTimeout(()=>{if(serial===id)finish()},250)}}));[150,600,1600].forEach(ms=>setTimeout(()=>{if(serial===id)finish()},ms));};render();
})();
