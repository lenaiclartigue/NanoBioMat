const fs=require('fs'),vm=require('vm'),assert=require('assert');const helper=fs.readFileSync('theory-v05/work/test-playback.js','utf8');eval(helper.slice(helper.indexOf('function environment()'),helper.indexOf('\nlet env=')));
const env=environment();delete env.ctx.window;env.ctx.ASSETS={proteins:fs.readFileSync('theory-v05/dist/assets/protein-symbols.svg','utf8'),'cij-fr':'','cij-en':''};vm.createContext(env.ctx);for(const name of ['resources.js','vector.js','app.js'])vm.runInContext(fs.readFileSync('theory-v05/dist/'+name,'utf8'),env.ctx);
for(const language of ['fr','en']){
vm.runInContext(`lang='${language}';current='corona';axis=2;u=0;values={};render()`,env.ctx);
for(const target of [.25,.5,.75,1]){env.els.play.onclick();assert(vm.runInContext('playing',env.ctx));env.tick(10000);assert.equal(vm.runInContext('u',env.ctx),target);assert(!vm.runInContext('playing',env.ctx));}
assert(!fs.readFileSync('theory-v05/work/template.html','utf8').includes('id="source"')); assert(!env.els.references.innerHTML.includes('python-chimie'));assert(env.els.references.innerHTML.includes('10.1002/jbm.820030106'));assert(env.els.references.innerHTML.includes('10.1021/cr100440g'));
assert(env.els.stage.innerHTML.includes('data-red-cell="biconcave"'));assert((env.els.stage.innerHTML.match(/data-plasma-protein/g)||[]).length>100);
vm.runInContext("current='interactions';axis=1;values={};render()",env.ctx);assert.equal(vm.runInContext('values.gap',env.ctx),60);assert.equal(vm.runInContext('pairParameters(60).lambda',env.ctx),0);assert.equal(vm.runInContext('pairParameters(60).j',env.ctx),0);assert(vm.runInContext('pairParameters(10).lambda>pairParameters(30).lambda',env.ctx));
vm.runInContext("current='heat';axis=2;render()",env.ctx);assert(env.els.references.innerHTML.includes('10.1038/nnano.2011.95'));assert(env.els.references.innerHTML.includes('10.1021/ja067457e'));
}
console.log('V4.15: four automatic checkpoints FR/EN, dense PDB proteins, biconcave cells, isolated endpoint, hidden exports and historical references passed');
