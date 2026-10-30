(()=>{
 const previous=render;
 let observedFooter=null;
 const measure=()=>{const h=document.querySelector('body>header'),f=document.querySelector('.site-footer');if(h)document.documentElement.style.setProperty('--theory-header466',Math.ceil(h.getBoundingClientRect().height)+'px');if(f)document.documentElement.style.setProperty('--theory-footer466',Math.ceil(f.getBoundingClientRect().height)+'px')};
 const observer=new ResizeObserver(measure);
 const header=document.querySelector('body>header');if(header)observer.observe(header);
 function update(){
  let panel=$('moduleNavigation476');if(panel?.tagName==='DETAILS'){const box=document.createElement('section');box.id=panel.id;while(panel.firstChild)box.append(panel.firstChild);panel.replaceWith(box);panel=box}if(panel)panel.open=true;
  const nav=$('modules');nav.setAttribute('aria-label',T('Modules — défilement indépendant','Modules — independent scrolling'));nav.tabIndex=0;
  const footer=document.querySelector('.site-footer');if(footer!==observedFooter){if(observedFooter)observer.unobserve(observedFooter);if(footer)observer.observe(footer);observedFooter=footer}measure();
 }
 let last=current;
 render=function(){previous();update();if(last!==current){$('content').scrollTop=0;last=current}};update();
})();
