"use strict";

// Progressive enhancement: all reading content and links exist in the HTML.
(() => {
  const one = selector => document.querySelector(selector);
  const menu = one('#nav-menu');
  const toggle = one('.menu-toggle');
  const mobile = window.matchMedia('(max-width: 760px)');
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
    count.textContent = `${shown} of ${cards.length} selected entries shown.`;
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
