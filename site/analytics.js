"use strict";

// Load the requested analytics service only on the intended public site.
// Local files, private previews, test repositories and other sites remain excluded.
(() => {
  const publicOrigin = 'https://lenaiclartigue.github.io';
  const publicPath = '/NanoBioMat/';
  const publicPages = new Set([
    '', 'index.html', 'research.html', 'projects.html', 'team.html',
    'collaborations.html', 'facilities.html', 'publications.html',
    'teaching.html', 'news.html', 'contact.html'
  ]);
  const location = window.location;
  if (location.origin !== publicOrigin || !location.pathname.startsWith(publicPath)) return;
  if (!publicPages.has(location.pathname.slice(publicPath.length))) return;
  if (document.getElementById('simple-analytics')) return;

  const script = document.createElement('script');
  script.id = 'simple-analytics';
  script.async = true;
  script.src = 'https://scripts.simpleanalyticscdn.com/latest.js';
  script.referrerPolicy = 'no-referrer';
  script.setAttribute('data-ignore-metrics', 'utm');
  document.head.appendChild(script);
})();
