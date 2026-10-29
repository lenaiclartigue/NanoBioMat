/* Complete module picker; footer clearance tracks its real rendered height. */
(()=>{
const previous=render;
let observedFooter=null;
const measure=()=>{const footer=document.querySelector('.site-footer');if(footer)document.documentElement.style.setProperty('--theory-footer466',Math.ceil(footer.getBoundingClientRect().height)+'px')};
const observer=new ResizeObserver(measure);
function update(){
 const select=$('moduleSelect');select.replaceChildren();
 domains453.forEach((names,index)=>{const group=document.createElement('optgroup');group.label=T(...names);Object.keys(D).filter(k=>domain453(k)===index).forEach(k=>{const option=document.createElement('option');option.value=k;option.textContent=T(...D[k].n);group.append(option)});select.append(group)});
 select.value=current;select.onchange=e=>chooseModule(e.target.value);
 $('moduleSelectLabel').textContent=T('Tous les modules — choisir une explication','All modules — choose an explanation');
 const footer=document.querySelector('.site-footer');if(footer!==observedFooter){observer.disconnect();if(footer)observer.observe(footer);observedFooter=footer}measure();
}
render=function(){previous();update()};update();
})();
