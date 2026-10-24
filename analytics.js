"use strict";

// Load the requested analytics service only on the intended public site.
// Local files, private previews, test repositories and other sites remain excluded.
(() => {
  const publicOrigin = 'https://lenaiclartigue.github.io';
  const publicPath = '/NanoBioMat/';
  const publicPages = new Set([
  "",
  "collaborations.html",
  "contact.html",
  "facilities.html",
  "fr/collaborations.html",
  "fr/contact.html",
  "fr/facilities.html",
  "fr/index.html",
  "fr/news-brevet-curcumine.html",
  "fr/news-lea-ponroy-photonano26.html",
  "fr/news-magnetima-anr.html",
  "fr/news-marie-lea-lalanne-she.html",
  "fr/news.html",
  "fr/outreach.html",
  "fr/projects.html",
  "fr/publications.html",
  "fr/research.html",
  "fr/teaching.html",
  "fr/team.html",
  "index.html",
  "news-brevet-curcumine.html",
  "news-lea-ponroy-photonano26.html",
  "news-magnetima-anr.html",
  "news-marie-lea-lalanne-she.html",
  "news.html",
  "outreach.html",
  "projects.html",
  "publications.html",
  "research.html",
  "teaching.html",
  "team.html"
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
