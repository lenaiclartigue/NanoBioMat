/* V4.74: common navigation, stable titles and concise contexts. */
(()=>{
const questions={monodomain:['Quand une particule est-elle monodomaine ?','When is a particle single-domain?'],rem:['Que révèlent les courbes de rémanence sur le couplage ?','What do remanence curves reveal about coupling?'],forc:['Que révèle une carte FORC sur les interactions ?','What does a FORC map reveal about interactions?']};
const css=document.createElement('style');css.textContent=`#modules button{min-height:48px!important;flex-shrink:0!important}#controls label{line-height:1.5}#controls input[type=range]{min-height:30px}#controls output{font-variant-numeric:tabular-nums}.ref-heading{font-size:14px!important}#content{min-width:0}#content math{max-width:100%;overflow-x:auto}#content img,#content svg{max-width:100%}#content iframe{max-width:100%}`;document.head.append(css);
// Context tables remain accessible through the documentary tools.
if(typeof NB_CONTEXT!=='undefined')NB_CONTEXT.mapping.relax=['hydrodynamic','viscosity'];
function tidy(){
const blocks=[...document.querySelectorAll('#content .study-content')];const seen=new Map();for(const b of blocks){const key=b.textContent.replace(/\s+/g,'').trim();if(key.length<180)continue;const old=seen.get(key);if(old){const remove=old.closest('#pedagogy')?old:b;const parent=remove.parentElement;remove.remove();if(parent&&parent.matches('details,section')&&!parent.querySelector('p,table,math,ul,ol'))parent.remove();if(remove===old)seen.set(key,b)}else seen.set(key,b)}
const h=$('heading')?.querySelector('h2');if(h&&questions[current])h.textContent=T(...questions[current]);document.title=(h?.textContent||T('Bases théoriques','Theoretical background'))+' · NanoBioMat';
if(current==='relax')$('math').hidden=true;
const nav=$('modules');if(!nav)return;
document.getElementById('moduleScroll474')?.remove();
let panel=document.getElementById('moduleNavigation476');
if(!panel){panel=document.createElement('details');panel.id='moduleNavigation476';panel.open=innerWidth>850;const summary=document.createElement('summary');panel.append(summary);nav.before(panel);panel.append(nav);}
panel.querySelector('summary').textContent=T('Choisir un module','Choose a module')+' · '+nav.children.length;
nav.querySelectorAll('button').forEach(b=>{if(b.getAttribute('aria-pressed')==='true')b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')});
const design=document.querySelectorAll('a[href="https://www.w3.org/WAI/fundamentals/accessibility-principles/"]');design.forEach(a=>{const list=a.closest('ul');if(!list||list.querySelector('[data-audit474]'))return;for(const [url,name] of [['https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum','W3C WAI — Target Size (Minimum)'],['https://www.nngroup.com/articles/consistency-and-standards/','Nielsen Norman Group — Consistency and Standards']]){const li=document.createElement('li');li.dataset.audit474='1';const link=document.createElement('a');link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.textContent=name;li.append(link);list.append(li)}});
}
const previous=render;render=function(){previous();tidy()};render();
})();
