const fs=require('fs'),vm=require('vm'),assert=require('assert');
const elems={};function el(){return {innerHTML:'',textContent:'',style:{},setAttribute(){},appendChild(){},querySelectorAll(){return[]},querySelector(){return null}};}
const doc={getElementById:id=>elems[id]||(elems[id]=el()),documentElement:{},createElementNS:()=>el(),body:el(),addEventListener(){}};
const context={document:doc,ASSETS:{proteins:fs.readFileSync('theory-v05/dist/assets/protein-symbols.svg','utf8'),'cij-fr':fs.readFileSync('theory-v05/dist/assets/cij-fr.svg','utf8'),'cij-en':fs.readFileSync('theory-v05/dist/assets/cij-en.svg','utf8')},cancelAnimationFrame(){},requestAnimationFrame(){},console};
vm.createContext(context);vm.runInContext(fs.readFileSync('theory-v05/dist/resources.js','utf8'),context);vm.runInContext(fs.readFileSync('theory-v05/dist/vector.js','utf8'),context);vm.runInContext(fs.readFileSync('theory-v05/dist/app.js','utf8'),context);
const result=vm.runInContext(`(()=>{let cases=0;for(const language of ['fr','en']){lang=language;for(const[k,m]of Object.entries(D)){if(m.kind==='curves')continue;current=k;axis=m.a;values={};render();if(!m.lead||!m.limits||m.steps.some(s=>s.length!==4))throw Error('Missing bilingual content '+k);for(const q of [0,.2,.5,.8,1]){u=q;draw();if(/(?:cx|cy|x|y|x1|y1|x2|y2|r|d)="[^"]*(?:NaN|undefined|Infinity)/.test($('stage').innerHTML))throw Error('Invalid geometry '+k);cases++;}}}return{modules:Object.keys(D).length,geometryCases:cases};})()`,context);
// Physical identities underlying the interactive examples.
const kb=1.380649e-23,V=d=>Math.PI/6*(d*1e-9)**3;
const tau=(d,K,T)=>1e-9*Math.exp(K*1000*V(d)/(kb*T));
assert(tau(18,20,300)>tau(14,20,300));assert(tau(14,30,300)>tau(14,20,300));assert(tau(14,20,350)<tau(14,20,300));
assert(Math.abs(1-Math.exp(-1)-.6321205588)<1e-9);assert(Math.abs(Math.exp(-1)-.3678794412)<1e-9);
const ed=(r,a)=>-2*Math.cos(a)/r**3;assert(ed(2,0)<0&&ed(2,Math.PI)>0);assert(Math.abs(ed(4,0)/ed(2,0)-1/8)<1e-12);
console.log(JSON.stringify({...result,physicalIdentities:'passed'}));

const exportedFigures=vm.runInContext(`(()=>{let out=[];for(const language of ['fr','en']){lang=language;for(const[k,m]of Object.entries(D)){if(m.kind==='curves')continue;current=k;axis=m.a;values={};render();u=.76;draw();let svg=$('stage').innerHTML.replace(/(<svg[^>]*>)/,'$1'+VECTOR_DEFS);out.push({name:k+'-'+lang+'.svg',svg});}}return out})()`,context);
fs.mkdirSync('theory-v05/dist/svg',{recursive:true});for(const f of exportedFigures){assert(!/<image\b|data:image\/(png|jpeg|webp)/i.test(f.svg),f.name);fs.writeFileSync('theory-v05/dist/svg/'+f.name,(f.svg.includes('xmlns:xlink=')?f.svg:f.svg.replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ')).replace(/<use href="([^"]+)"/g,'<use href="$1" xlink:href="$1"'));}console.log('28 standalone vector diagrams exported');
// Regression: the explanation starts with internal moments and ends with one macrospin.
vm.runInContext(`current='macrospin';lang='fr';if(!macroScene(0).includes('data-internal-spin'))throw Error('Missing atomic moments');if(macroScene(.9).includes('data-internal-spin'))throw Error('Internal spins leaked into giant-spin stage');if(!macroScene(.9).includes('data-macrospin="single"'))throw Error('Missing macrospin');for(let t=1/3;t<=1;t+=.01){const g=fateGeometry(t);const rr=18*(1-g.redistribution)+(g.r-12)*g.redistribution;if(rr+4.8>=g.r-5)throw Error('Cargo crosses compartment membrane');if((fateScene(t).match(/data-cargo=/g)||[]).length!==12)throw Error('Cargo count changed');}`,context);
console.log('Macrospin progression and 12-particle compartment containment passed');
