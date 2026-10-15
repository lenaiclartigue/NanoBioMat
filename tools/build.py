#!/usr/bin/env python3
"""Build NanoBioMat's ten static pages. Python 3 standard library only."""
import html
import json
import re
import struct
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / 'site'
CONTENT = ROOT / 'content'
PAGES = [
    ('index', 'Home', '', ''),
    ('research', 'Research', 'Research', 'Magnetic nanoparticles, their collective properties and their interactions with biological environments.'),
    ('projects', 'Projects', 'Research projects', 'Institutional information and general research directions across current and recent projects.'),
    ('team', 'Team', 'People & supervision', 'The researchers, staff and doctoral projects contributing to NanoBioMat.'),
    ('collaborations', 'Collaborations', 'Working across disciplines', 'National and international collaborations in magnetic nanoparticles, chemistry, biophysics and biological evaluation.'),
    ('facilities', 'Facilities', 'Techniques & expertise', 'Synthesis, formulation and characterization, supported by local and collaborative research platforms.'),
    ('publications', 'Publications', 'Publications & patent', 'A selected reading list, with direct links to the published records and the broader HAL profile.'),
    ('teaching', 'Teaching', 'Teaching chemistry', 'Undergraduate and master’s teaching, from physical chemistry to nanomaterials and scientific computing.'),
    ('news', 'News', 'News from NanoBioMat', 'Research activity, conferences and institutional updates.'),
    ('contact', 'Contact', 'Start a conversation', 'Research collaborations, scientific questions and academic enquiries.'),
]
PUBS = json.loads((CONTENT / 'publications.json').read_text())
TOPICS = {'magnetism': 'Magnetism', 'imaging': 'Imaging', 'biointerfaces': 'Biological interfaces', 'formulation': 'Formulation'}
esc = html.escape

def publication_card(p, compact=False):
    if compact:
        return f'<article class="publication-brief"><p class="pub-meta">{p["year"]} · {esc(p["type"])}</p><h3><a href="publications.html#{p["id"]}">{esc(p["title"])}</a></h3><p class="small">{esc(p["authors"])}</p></article>'
    link = f'<a href="https://doi.org/{esc(p["doi"])}">DOI: {esc(p["doi"])} <span aria-hidden="true">↗</span></a>' if p['doi'] else '<span class="small">French patent record</span>'
    source = f'<a href="{esc(p["source"])}">Bibliographic source <span aria-hidden="true">↗</span></a>' if p['source'] else ''
    lang = ' lang="fr"' if p['type']=='Patent' else ''
    note = '<p>'+esc(p['note'])+'</p>' if p.get('note') else ''
    return f'''<article class="publication-card" id="{p['id']}"><div class="pub-year">{p['year']}</div><div><p class="pub-meta">{p['type']} · {TOPICS[p['topic']]}</p><h2{lang}>{esc(p['title'])}</h2><p>{esc(p['authors'])}</p><p class="journal">{esc(p['journal'])}</p>{note}<div class="actions pub-links">{link}{source}</div></div></article>'''

def publications():
    return '''<div class="profile-strip"><span>For the broader publication record</span><a href="https://cv.hal.science/lenaic-lartigue">Lénaïc Lartigue on HAL ↗</a><a href="https://orcid.org/0000-0002-4662-4789">ORCID ↗</a></div>
<p class="small selection-note">Selected publications and a patent are listed below, most recent first. This is not a complete bibliography; see HAL for the broader record.</p><div id="publication-list">''' + ''.join(publication_card(p) for p in sorted(PUBS,key=lambda p:-p['year'])) + '</div>'

def projects():
    cards=[]
    for p in json.loads((CONTENT/'projects.json').read_text()):
        slug=re.sub('[^a-z0-9]+','-',p['name'].lower()).strip('-')
        period=f'<p class="pub-meta">{esc(p["period"])}</p>' if p['period'] else ''
        cards.append(f'<article class="project-card" id="{slug}"><div>{period}<h2>{esc(p["name"])}</h2><p>{esc(p["description"])}</p><p class="small">{esc(p["funder"])}</p></div><img src="{p["logo"]}" alt="{esc(p["funder"])}" loading="lazy"></article>')
    return '<div class="project-list">'+''.join(cards)+'</div><p class="notice">Looking for complementary expertise? <a href="collaborations.html">Explore the collaboration network.</a></p>'

def decorate_fragment(text):
    # Stable cross-page anchors for inherited people; source HTML remains easy to edit.
    for title,slug in [('Lénaïc Lartigue','lenaic-lartigue'),('Léa Ponroy','lea-ponroy'),('Marie-Léa Lalanne','marie-lea-lalanne'),('Anna Hlukhaniuk','anna-hlukhaniuk')]:
        text=text.replace(f'<h3>{title}</h3>',f'<h3 id="{slug}">{title}</h3>')
    return text

for slug,label,title,lead in PAGES:
    content=publications() if slug=='publications' else projects() if slug=='projects' else decorate_fragment((CONTENT/(slug+'.html')).read_text())
    content=content.replace('{{featured_publications}}','<div class="publication-grid">'+''.join(publication_card(p,True) for p in [PUBS[0],PUBS[2],PUBS[3]])+'</div>')
    def dimensions(match):
        tag=match.group(0)
        src=re.search(r'src="([^"]+)"',tag)
        if src and 'width=' not in tag:
            image=SITE/src.group(1)
            if image.suffix=='.png' and image.exists():
                w,h=struct.unpack('>II',image.read_bytes()[16:24])
                tag=tag.replace('<img ',f'<img width="{w}" height="{h}" ',1)
        return tag
    content=re.sub(r'<img\b[^>]*>',dimensions,content)
    nav=''.join(f'<a href="{s}.html"'+(' aria-current="page"' if s==slug else '')+f'>{l}</a>' for s,l,_,_ in PAGES)
    pagehead='' if slug=='index' else f'<header class="page-heading"><p class="eyebrow">NanoBioMat / {label}</p><h1>{title}</h1><p class="lead">{lead}</p></header>'
    desc=lead or 'NanoBioMat: magnetic nanoparticles and nanomedicine research at CEISAM, Nantes Université.'
    document=f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{label+' | ' if slug!='index' else ''}NanoBioMat · Magnetic nanoparticles &amp; nanomedicine</title><meta name="description" content="{esc(desc,quote=True)}"><meta name="theme-color" content="#124957"><meta name="robots" content="noindex,nofollow"><meta name="referrer" content="same-origin"><meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data: https://queue.simpleanalyticscdn.com; script-src 'self' https://scripts.simpleanalyticscdn.com; style-src 'self'; connect-src https://queue.simpleanalyticscdn.com; object-src 'none'; base-uri 'none'; form-action 'none'"><link rel="icon" href="logo-nanobiomat.png"><link rel="stylesheet" href="style.css"><script src="site.js" defer></script><script src="analytics.js" defer></script></head>
<body class="page-{slug}"><a class="skip-link" href="#main-content">Skip to content</a><header class="site-header"><div class="brand-row"><a class="brand" href="index.html" aria-label="NanoBioMat home"><img src="logo-nanobiomat.png" alt="NanoBioMat" width="110" height="79"><span>Magnetic nanoparticles<br><strong>&amp; nanomedicine</strong></span></a><p class="institution">Nantes Université<br>CEISAM UMR 6230</p><button type="button" class="menu-toggle" aria-expanded="false" aria-controls="nav-menu" hidden>Menu <span aria-hidden="true">☰</span></button></div><nav aria-label="Main navigation" id="nav-menu">{nav}</nav></header>
<main id="main-content" tabindex="-1">{pagehead}{content}</main><footer class="site-footer"><div><strong>NanoBioMat</strong><p>Magnetic nanoparticles &amp; nanomedicine<br>CEISAM UMR 6230 · Nantes Université</p></div><div><a href="contact.html">Contact</a><a href="team.html">Team</a><a href="publications.html">Publications</a><a href="contact.html#privacy">Privacy</a></div><p class="copyright">© Lénaïc Lartigue</p></footer></body></html>'''
    (SITE/(slug+'.html')).write_text(document,encoding='utf-8')
print('Built 10 static pages; no network access or third-party build package required.')
