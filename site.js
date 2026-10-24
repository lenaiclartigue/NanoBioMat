"use strict";

// Progressive enhancement: all reading content and links exist in the HTML.
(() => {
  const one = selector => document.querySelector(selector);
  const menu = one('#nav-menu');
  const toggle = one('.menu-toggle');
  const mobile = window.matchMedia('(max-width: 1050px)');
  if (menu && toggle) {
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('open');
    };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('open', open);
    });
    menu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && mobile.matches && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu(); toggle.focus();
      }
    });
    mobile.addEventListener('change', closeMenu);
    toggle.hidden = false;
    document.body.classList.add('nav-ready');
  }
})();

// Local filtering of the selected records; no requests or tracking events.
(() => {
  const controls = document.querySelector('.publication-controls');
  if (!controls) return;
  const search = document.querySelector('#pub-search');
  const type = document.querySelector('#pub-type');
  const topic = document.querySelector('#pub-topic');
  const reset = document.querySelector('#pub-reset');
  const count = document.querySelector('#pub-count');
  const empty = document.querySelector('#pub-empty');
  const cards = [...document.querySelectorAll('.publication-card')];
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const entries = cards.map(card => ({card, text: normalize(card.textContent)}));
  const filter = () => {
    const words = normalize(search.value).trim().split(/\s+/).filter(Boolean);
    let shown = 0;
    entries.forEach(({card, text}) => {
      const match = words.every(word => text.includes(word)) &&
        (!type.value || card.dataset.type === type.value) &&
        (!topic.value || card.dataset.topic === topic.value);
      card.hidden = !match;
      shown += Number(match);
    });
    document.querySelectorAll('.publication-group').forEach(group => {
      group.hidden = !group.querySelector('.publication-card:not([hidden])');
    });
    count.textContent = document.documentElement.lang === 'fr' ? `${shown} référence(s) affichée(s) sur ${cards.length}.` : `${shown} of ${cards.length} selected entries shown.`;
    empty.hidden = shown !== 0;
  };
  const clear = () => { search.value = ''; type.value = ''; topic.value = ''; filter(); };
  const revealAnchor = () => {
    let id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
    const target = cards.find(card => card.id === id);
    if (target && target.hidden) { clear(); target.scrollIntoView(); }
  };
  search.addEventListener('input', filter);
  type.addEventListener('change', filter);
  topic.addEventListener('change', filter);
  reset.addEventListener('click', () => { clear(); search.focus(); });
  window.addEventListener('hashchange', revealAnchor);
  controls.hidden = false;
  filter();
})();

// Preserve a section anchor when switching between matching pages.
document.querySelectorAll('.language-switch a').forEach(link => {
  if (window.location.hash) link.href += window.location.hash;
});

// Footer information opens above the page; details remain usable without JS.
(() => {
  if (typeof HTMLDialogElement === 'undefined') return;
  const french = document.documentElement.lang === 'fr';
  document.querySelectorAll('.footer-notice').forEach(details => {
    const summary = details.querySelector('summary');
    const content = details.querySelector('.notice-content');
    if (!summary || !content) return;
    const dialog = document.createElement('dialog');
    dialog.className = 'notice-dialog';
    const heading = content.querySelector('h2');
    if (heading) {
      heading.id = `${details.id}-dialog-title`;
      dialog.setAttribute('aria-labelledby', heading.id);
    } else {
      dialog.setAttribute('aria-label', summary.textContent.trim());
    }
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'notice-dialog-close';
    close.textContent = french ? 'Fermer ×' : 'Close ×';
    close.setAttribute('aria-label', french ? 'Fermer la fenêtre' : 'Close dialog');
    dialog.append(close, content);
    document.body.append(dialog);
    summary.setAttribute('aria-haspopup', 'dialog');
    const open = () => {
      if (dialog.open) return;
      dialog.showModal();
      document.documentElement.classList.add('notice-modal-open');
      close.focus();
    };
    summary.addEventListener('click', event => { event.preventDefault(); open(); });
    close.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      const rect = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right ||
          event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
    });
    dialog.addEventListener('close', () => {
      document.documentElement.classList.remove('notice-modal-open');
      summary.focus({preventScroll: true});
    });
    // Retain direct links to the existing footer information anchors.
    const reveal = () => { if (window.location.hash === `#${details.id}`) open(); };
    window.addEventListener('hashchange', reveal);
    reveal();
  });
})();


// Match content clearances to the actual fixed bars, including mobile menus.
(() => {
 const header = document.querySelector('.site-header');
 const footer = document.querySelector('.site-footer');
 const measure = () => {
  if (header) document.documentElement.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`);
  if (footer) document.documentElement.style.setProperty('--footer-height', `${getComputedStyle(footer).position === 'fixed' ? footer.getBoundingClientRect().height : 0}px`);
 };
 measure();
 if (typeof ResizeObserver !== 'undefined') {
  const observer = new ResizeObserver(measure);
  if (header) observer.observe(header);
  if (footer) observer.observe(footer);
 }
 window.addEventListener('resize', measure);
 window.addEventListener('load', measure);
})();

// News categories and copying subscription/article addresses.
(() => {
 const filter = document.querySelector('#update-category');
 const cards = [...document.querySelectorAll('.update-card')];
 const empty = document.querySelector('#updates-empty');
 const apply = () => {
  let shown = 0;
  cards.forEach(card => { card.hidden = !!filter.value && card.dataset.category !== filter.value; if (!card.hidden) shown++; });
  if (empty) empty.hidden = shown !== 0;
 };
 if (filter) {
  document.querySelector('.update-controls').hidden = false;
  filter.addEventListener('change', apply);
  window.addEventListener('hashchange', () => { filter.value = ''; apply(); });
 }
 document.querySelectorAll('[data-copy-url]').forEach(button => {
  button.addEventListener('click', async () => {
   const status = button.parentElement.querySelector('.copy-status');
   try {
    if (!navigator.clipboard) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(button.dataset.copyUrl);
    if (status) status.textContent = button.dataset.copied;
   } catch {
    if (status) status.textContent = button.dataset.copyUrl;
   }
  });
 });
})();

// Shared image viewer for equipment, news lists, articles and home-page news.
(() => {
 if (typeof HTMLDialogElement === 'undefined') return;
 const links = [...document.querySelectorAll('.image-zoom')];
 if (!links.length) return;
 const french = document.documentElement.lang === 'fr';
 const dialog = document.createElement('dialog');
 dialog.className = 'image-dialog';
 dialog.setAttribute('aria-label', french ? 'Image agrandie' : 'Enlarged image');
 dialog.setAttribute('aria-describedby', 'image-dialog-caption');
 const close = document.createElement('button');
 close.type = 'button'; close.className = 'notice-dialog-close';
 close.textContent = french ? 'Fermer ×' : 'Close ×';
 close.setAttribute('aria-label', french ? 'Fermer la fenêtre' : 'Close dialog');
 const img = document.createElement('img');
 const credit = document.createElement('p');credit.className = 'image-credit';
 const stage = document.createElement('div'); stage.className = 'image-dialog-stage';
 const caption = document.createElement('p'); caption.className = 'image-dialog-caption';
 caption.id = 'image-dialog-caption';
 stage.append(img, credit); dialog.append(close, stage, caption);document.body.append(dialog);
 let trigger = null;
 links.forEach(link => {
  link.setAttribute('aria-haspopup','dialog');
  link.addEventListener('click', event => {
   event.preventDefault();trigger = link;
   img.src = link.href;
   img.alt = link.querySelector('img')?.alt || link.dataset.imageCaption || '';
   caption.textContent = link.dataset.imageCaption || img.alt;
   credit.textContent = link.dataset.imageCredit || '';
   credit.hidden = !credit.textContent;
   dialog.showModal();document.documentElement.classList.add('notice-modal-open');close.focus();
  });
 });
 close.addEventListener('click', () => dialog.close());
 dialog.addEventListener('click', event => {
  const r = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom)) dialog.close();
 });
 dialog.addEventListener('close', () => {
  document.documentElement.classList.remove('notice-modal-open');
  if (trigger) trigger.focus({preventScroll:true});
 });
})();
