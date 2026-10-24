#!/usr/bin/env python3
"""Rebuild bilingual news pages, RSS feeds and search metadata.
Run from any directory: python3 tools/build_news.py
Edit news-data.json to add an item. Copy an existing item's structure;
use YYYY-MM-DD when known, or YYYY-MM for an announcement dated by month.
body_html is trusted site-author content, with links/assets relative to
its language directory (../ for shared assets on French pages).
"""
from pathlib import Path
from html import escape
from urllib.parse import urlsplit
from datetime import datetime,timezone
from email.utils import format_datetime
import json,re,xml.etree.ElementTree as ET
ROOT=Path(__file__).resolve().parents[1]
BASE='https://lenaiclartigue.github.io/NanoBioMat/'
posts=json.loads((ROOT/'news-data.json').read_text())
assert len({p['id'] for p in posts})==len(posts),'Duplicate post id'
assert len({p['slug'] for p in posts})==len(posts),'Duplicate post slug'
posts.sort(key=lambda p:p['date'],reverse=True)
labels={
'en':{'title':'News & scientific updates','lead':'Group news, research highlights and new resources.','rss':'Subscribe via RSS','hint':'Copy this feed address into your RSS reader to follow new updates.','filter':'Filter updates','all':'All updates','group':'Group life','projects':'Projects','publications':'Publications','resources':'Learning resources','science':'Scientific insights','read':'Read more','back':'All updates','copy':'Copy RSS address','copied':'Address copied','share':'Copy article link','empty':'No updates in this category yet.'},
'fr':{'title':'Actualités et éclairages scientifiques','lead':'Vie du groupe, nouvelles scientifiques et ressources à découvrir.','rss':'S’abonner au flux RSS','hint':'Copiez l’adresse de ce flux dans votre lecteur RSS pour suivre les nouveautés.','filter':'Filtrer les actualités','all':'Toutes les actualités','group':'Vie du groupe','projects':'Projets','publications':'Publications','resources':'Ressources pédagogiques','science':'Éclairages scientifiques','read':'Lire la suite','back':'Toutes les actualités','copy':'Copier l’adresse RSS','copied':'Adresse copiée','share':'Copier le lien de l’article','empty':'Aucune actualité dans cette catégorie pour le moment.'}}
def text(s):return re.sub('<[^>]+>','',s)
def page(template,main,title,description):
 s=re.sub(r'<main\b.*?</main>',lambda m:main,template,flags=re.S)
 s=re.sub(r'<title>.*?</title>',lambda m:'<title>'+escape(title)+' | NanoBioMat</title>',s)
 s=re.sub(r'<meta name="description" content="[^"]*">',lambda m:'<meta name="description" content="'+escape(description,quote=True)+'">',s)
 return s
def credit_overlay(d):
 credit=d.get('image_credit','')
 return '<span class="photo-credit photo-credit-overlay">'+escape(credit)+'</span>' if credit else ''

for lang in ['en','fr']:
 folder=ROOT/'fr' if lang=='fr' else ROOT
 prefix='fr/' if lang=='fr' else '';L=labels[lang]
 template=(folder/'news.html').read_text()
 rss=ET.Element('rss',version='2.0');channel=ET.SubElement(rss,'channel')
 for tag,value in [('title','NanoBioMat — '+L['title']),('link',BASE+prefix+'news.html'),('description',L['lead']),('language',lang)]:ET.SubElement(channel,tag).text=value
 cards=[]
 for p in posts:
  d=p['languages'][lang];filename='news-'+p['slug']+'.html';url=BASE+prefix+filename
  image=d.get('thumbnail',d.get('image',''));image_html='<img src="'+escape(image,quote=True)+'" alt="'+escape(d.get('image_alt',''),quote=True)+'" loading="lazy">' if image else ''
  zoom_label='Agrandir' if lang=='fr' else 'Enlarge'
  attrs=' data-image-caption="'+escape(d['image_caption'],quote=True)+'" data-image-credit="'+escape(d.get('image_credit',''),quote=True)+'"'
  zoom='<figure class="update-figure"><a class="update-image image-zoom" href="'+escape(d['image'],quote=True)+'"'+attrs+' aria-label="'+zoom_label+' : '+escape(d['image_caption'],quote=True)+'">'+image_html+credit_overlay(d)+'</a><figcaption><a class="image-zoom zoom-hint" href="'+escape(d['image'],quote=True)+'"'+attrs+' aria-label="'+zoom_label+' : '+escape(d['image_caption'],quote=True)+'">'+zoom_label+'</a></figcaption></figure>'
  cards.append('<article class="update-card" id="'+p['id']+'" data-category="'+p['category']+'">'+zoom+'<div class="update-copy"><p class="eyebrow">'+escape(d['category_label'])+'</p><time datetime="'+p['date']+'">'+d['date_label']+'</time><h2><a href="'+filename+'">'+escape(d['title'])+'</a></h2><p>'+escape(d['summary'])+'</p><a href="'+filename+'">'+L['read']+'<span class="sr-only"> : '+escape(d['title'])+'</span> →</a></div></article>')
  if p['id']=='patent':
   cards[-1]=cards[-1].replace('</div></article>', '<a class="news-patent-link" href="https://patents.google.com/patent/EP4525838A1/en" target="_blank" rel="noopener noreferrer">EP4525838A1 — Google Patents</a></div></article>')
  main='<main id="main-content" tabindex="-1" class="update-detail"><header class="page-heading"><p class="eyebrow"><a href="news.html">'+L['back']+'</a> / '+escape(d['category_label'])+'</p><h1>'+escape(d['title'])+'</h1><p class="update-date"><time datetime="'+p['date']+'">'+d['date_label']+'</time></p></header><article class="update-body">'+d['body_html']+'</article><div class="actions update-sharing"><a href="news.html">← '+L['back']+'</a><button type="button" class="text-copy" data-copy-url="'+url+'" data-copied="'+L['copied']+'">'+L['share']+'</button><span class="copy-status" role="status"></span></div></main>'
  out=page(template,main,d['title'],d['summary'])
  # Language switch and alternate URLs point to the same article in each language.
  out=out.replace('href="news.html" lang=', 'href="'+filename+'" lang=')
  out=out.replace('href="fr/news.html" lang=', 'href="fr/'+filename+'" lang=')
  out=out.replace('href="../news.html" lang=', 'href="../'+filename+'" lang=')
  out=re.sub(r'(<link rel="alternate" hreflang="(?:en|fr)" href=")([^"]*)news.html',lambda m:m[1]+m[2]+filename,out)
  (folder/filename).write_text(out)
  item=ET.SubElement(channel,'item')
  for tag,value in [('title',d['title']),('link',url),('description',d['summary']),('category',L.get(p['category'],p['category']))]:ET.SubElement(item,tag).text=value
  ET.SubElement(item,'guid',isPermaLink='true').text=url
  # Avoid inventing a publication day for month-only historical announcements.
  if len(p['date'])==10:ET.SubElement(item,'pubDate').text=format_datetime(datetime.strptime(p['date'],'%Y-%m-%d').replace(tzinfo=timezone.utc),usegmt=True)
 ET.indent(rss);ET.ElementTree(rss).write(folder/'feed.xml',encoding='utf-8',xml_declaration=True)
 options=''.join('<option value="'+k+'">'+L[k]+'</option>' for k in ['group','projects','publications','resources','science'] if any(p['category']==k for p in posts))
 main='<main id="main-content" tabindex="-1"><header class="page-heading"><p class="eyebrow">NanoBioMat / '+('Actualités' if lang=='fr' else 'News')+'</p><h1>'+L['title']+'</h1><p class="lead">'+L['lead']+'</p></header><aside class="rss-subscription"><div><a href="feed.xml" class="rss-link">'+L['rss']+'</a><p>'+L['hint']+'</p></div><button class="text-copy" type="button" data-copy-url="'+BASE+prefix+'feed.xml" data-copied="'+L['copied']+'">'+L['copy']+'</button><span class="copy-status" role="status"></span></aside><div class="update-controls" hidden><label for="update-category">'+L['filter']+'</label><select id="update-category"><option value="">'+L['all']+'</option>'+options+'</select></div><section class="updates-list" aria-label="'+L['title']+'">'+''.join(cards)+'</section><p id="updates-empty" hidden role="status">'+L['empty']+'</p></main>'
 (folder/'news.html').write_text(page(template,main,L['title'],L['lead']))
 # Keep the home-page news in sync with the two latest published entries.
 home=folder/'index.html';hs=home.read_text();briefs=[]
 for p in posts[:2]:
  d=p['languages'][lang];filename='news-'+p['slug']+'.html'
  zl='Agrandir' if lang=='fr' else 'Enlarge'
  attrs=' data-image-caption="'+escape(d['image_caption'],quote=True)+'" data-image-credit="'+escape(d.get('image_credit',''),quote=True)+'"'
  briefs.append('<article class="news-brief"><a class="news-thumbnail image-zoom" href="'+escape(d['image'],quote=True)+'"'+attrs+' aria-label="'+zl+' : '+escape(d['image_caption'],quote=True)+'"><img src="'+escape(d.get('thumbnail',d['image']),quote=True)+'" alt="'+escape(d['image_alt'],quote=True)+'" loading="lazy">'+credit_overlay(d)+'</a><time datetime="'+p['date']+'">'+d['date_label']+'</time><h3><a href="'+filename+'">'+escape(d['title'])+'</a></h3><p>'+escape(d['summary'])+'</p></article>')
 hs=re.sub(r'(<section class="section-block" aria-labelledby="news-title">.*?<div class="two-columns">).*?(</div>\s*<a class="text-link")',lambda m:m[1]+''.join(briefs)+m[2],hs,flags=re.S)
 home.write_text(hs)
# Standard metadata for every public page, including bilingual alternatives.
page_metadata=json.loads((ROOT/'page-metadata.json').read_text())
for p in ROOT.rglob('*.html'):
 rel=p.relative_to(ROOT).as_posix();s=p.read_text();lang='fr' if rel.startswith('fr/') else 'en'
 if s.strip().startswith('google-site-verification:'):continue
 s=re.sub(r'<meta name="robots"[^>]*>','',s)
 s=re.sub(r'<link rel="canonical"[^>]*>','',s)
 s=re.sub(r'<meta (?:property="og:[^"]+"|name="twitter:[^"]+")[^>]*>','',s)
 s=re.sub(r'<link rel="alternate"[^>]*type="application/rss\+xml"[^>]*>','',s)
 s=re.sub(r'<link rel="alternate" hreflang="[^"]+"[^>]*>','',s)
 metadata=page_metadata.get(p.name,{}).get(lang)
 if metadata:
  s=re.sub(r'<title>.*?</title>',lambda m:'<title>'+escape(metadata['title'])+'</title>',s,flags=re.S)
  s=re.sub(r'<meta name="description" content="[^"]*">',lambda m:'<meta name="description" content="'+escape(metadata['description'],quote=True)+'">',s)
 title=re.search(r'<title>(.*?)</title>',s,re.S)[1]
 desc=re.search(r'<meta name="description" content="([^"]*)"',s)[1]
 filename=p.name
 tags='<link rel="canonical" href="'+BASE+rel+'">'
 for ln,pr in [('en',''),('fr','fr/')]:tags+='<link rel="alternate" hreflang="'+ln+'" href="'+BASE+pr+filename+'">'
 tags+='<link rel="alternate" type="application/rss+xml" title="NanoBioMat RSS ('+lang+')" href="'+('' if lang=='en' else '')+'feed.xml">'
 for prop,value in [('og:type','article' if filename.startswith('news-') else 'website'),('og:title',title),('og:description',desc),('og:url',BASE+rel),('og:image',BASE+'nanoassemblies-sem.png'),('og:site_name','NanoBioMat')]:tags+='<meta property="'+prop+'" content="'+value+'">'
 tags+='<meta name="twitter:card" content="summary_large_image">'
 s=s.replace('</head>',tags+'</head>')
 # Announce new tabs to assistive technology, preserving link names.
 def external_link(match):
  tag,body=match.group(1),match.group(2)
  if 'target="_blank"' not in tag:return match.group(0)
  suffix=' (nouvel onglet)' if lang=='fr' else ' (new tab)'
  if 'external-announcement' in body:return match.group(0)
  aria=re.search(r'aria-label="([^"]*)"',tag)
  if aria:tag=tag.replace(aria[0],'aria-label="'+aria[1]+suffix+'"')
  tag=re.sub(r'\s+title="[^"]*"','',tag)
  tag=tag[:-1]+' title="'+('Ouvre un nouvel onglet' if lang=='fr' else 'Opens a new tab')+'">'
  body=re.sub(r'<span aria-hidden="true">↗</span>','',body).replace('↗','')
  marker='<span class="external-announcement">'
  if not aria:marker+='<span class="sr-only">'+suffix+'</span>'
  marker+='</span>'
  return tag+body+marker+'</a>'
 s=re.sub(r'(<a\b[^>]*>)(.*?)</a>',external_link,s,flags=re.S)

 s=re.sub(r'style\.css\?v=[^" ]+', 'style.css?v=3.32',s)
 s=re.sub(r'site\.js\?v=[^" ]+', 'site.js?v=3.32',s)

 # Keep intrinsic dimensions consistent with optimized local assets.
 def image_dimensions(match):
  tag=match[0];src=re.search(r'src="([^"]+)"',tag)
  if not src or src[1].startswith(('http:','https:','data:')):return tag
  asset=p.parent/src[1].split('?')[0]
  try:
   from PIL import Image
   with Image.open(asset) as im:w,h=im.size
  except (OSError,ValueError):return tag
  tag=re.sub(r'\s+(?:width|height)="[^"]*"','',tag)
  return tag[:-1]+f' width="{w}" height="{h}">'
 s=re.sub(r'<img\b[^>]*>',image_dimensions,s)

 p.write_text(s)
ns='http://www.sitemaps.org/schemas/sitemap/0.9';ET.register_namespace('',ns)
sm=ET.Element('{'+ns+'}urlset')
for p in sorted(ROOT.rglob('*.html')):
 if p.read_text().strip().startswith('google-site-verification:'):continue
 u=ET.SubElement(sm,'{'+ns+'}url');ET.SubElement(u,'{'+ns+'}loc').text=BASE+p.relative_to(ROOT).as_posix()
ET.indent(sm);ET.ElementTree(sm).write(ROOT/'sitemap.xml',encoding='utf-8',xml_declaration=True)
print(f'Built {len(posts)} bilingual updates, 2 RSS feeds and sitemap for {len(sm)} pages.')
