const fs=require('fs'),vm=require('vm'),assert=require('assert');
function environment(){const els={};let raf=null,interval=null;function element(id){let html='';return {id,value:'',style:{setProperty(){}},textContent:'',setAttribute(){},appendChild(){},addEventListener(){},querySelectorAll(){return[]},querySelector(){return null},get innerHTML(){return html},set innerHTML(s){html=s;for(const m of s.matchAll(/<(input|select)[^>]*id="([^"]+)"[^>]*>/g)){const e=get(m[2]),v=m[0].match(/value="([^"]*)"/);if(v)e.value=v[1];else if(m[1]==='select'){const part=s.slice(m.index).split('</select>')[0];e.value=(part.match(/<option value="([^"]+)"/)||[])[1]||'';}}}}}function get(id){return els[id]||(els[id]=element(id))}const ctx={URLSearchParams,location:{search:''},document:{getElementById:get,documentElement:{style:{setProperty(){}}},createElementNS:()=>element(''),body:element('body'),addEventListener(){}},console,performance:{now:()=>0},requestAnimationFrame:f=>(raf=f,1),cancelAnimationFrame:()=>{raf=null},setInterval:f=>(interval=f,1),clearInterval:()=>{interval=null},parent:{},window:{addEventListener(){}}};return {ctx,els,tick:t=>{assert(raf);raf(t)},interval:()=>{assert(interval);interval()}}}
let env=environment();delete env.ctx.window;env.ctx.ASSETS={proteins:fs.readFileSync('theory-v05/dist/assets/protein-symbols.svg','utf8'),'cij-fr':fs.readFileSync('theory-v05/dist/assets/cij-fr.svg','utf8'),'cij-en':fs.readFileSync('theory-v05/dist/assets/cij-en.svg','utf8')};vm.createContext(env.ctx);for(const n of ['resources.js','vector.js','typography.js','pedagogy.js','app.js'])vm.runInContext(fs.readFileSync('theory-v05/dist/'+n,'utf8'),env.ctx);

for(const language of ['fr','en']){
vm.runInContext(`lang='${language}';current='fate';axis=2;u=0;render()`,env.ctx);
for(let i=0;i<6;i++){
 env.els.play.onclick();env.tick((i+1)*100000);
 assert(!vm.runInContext('playing',env.ctx),'auto pause');
 assert(Math.abs(vm.runInContext('u',env.ctx)-(i+1)/6)<1e-9);
 assert.equal(vm.runInContext('fateStageIndex(u)',env.ctx),i);
 assert(!/NaN|undefined/.test(env.els.stage.innerHTML));
}
vm.runInContext('navigateFateStage(-1)',env.ctx);assert.equal(vm.runInContext('fateStageIndex(u)',env.ctx),4);
vm.runInContext('navigateFateStage(1)',env.ctx);assert.equal(vm.runInContext('fateStageIndex(u)',env.ctx),5);
vm.runInContext("resourceAxis='0';resourceType='all';resourceQuery='NEMAD';filterResources()",env.ctx);assert(env.els.resourceCards.innerHTML.includes('NEMAD'));
vm.runInContext("resourceAxis='2';resourceQuery='caNanoLab';filterResources()",env.ctx);assert(env.els.resourceCards.innerHTML.includes('caNanoLab'));
}
assert.equal(vm.runInContext('fateGeometry(.4).x',env.ctx),690);
assert(vm.runInContext('fateGeometry(.65).x',env.ctx)<690);
console.log('V4.23: six pauses, bilingual navigation, finite SVG, compartment trajectory and resource filters passed');
