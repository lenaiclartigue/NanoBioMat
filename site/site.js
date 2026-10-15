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
