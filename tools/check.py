#!/usr/bin/env python3
"""Static export checks; optional DOM fixtures for the JS logic harness.
No browser engine is involved. Uses only the Python standard library.
"""
import argparse
import json
import re
import struct
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT/'site'
class Parser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root={'tag':'document','attrs':{},'children':[],'text':''};self.stack=[self.root]
    def handle_starttag(self,tag,attrs):
        node={'tag':tag,'attrs':dict(attrs),'children':[],'text':''};self.stack[-1]['children'].append(node)
        if tag not in {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}:self.stack.append(node)
    def handle_startendtag(self,tag,attrs):
        self.handle_starttag(tag,attrs)
        if self.stack[-1]['tag']==tag:self.stack.pop()
    def handle_endtag(self,tag):
        for i in range(len(self.stack)-1,0,-1):
            if self.stack[i]['tag']==tag:self.stack=self.stack[:i];break
    def handle_data(self,text):self.stack[-1]['text']+=text
def walk(node):
    yield node
    for child in node['children']:yield from walk(child)
def png_chunks(path):
    data=path.read_bytes();assert data[:8]==b'\x89PNG\r\n\x1a\n';pos=8;chunks=[]
    while pos<len(data):
        length=struct.unpack('>I',data[pos:pos+4])[0];name=data[pos+4:pos+8].decode('ascii');chunks.append(name);pos+=length+12
    return sorted(set(chunks))
def check(fixtures=None):
    trees={};errors=[];refs=set();external=set();pages={};assets={}
    for p in sorted(SITE.glob('*.html')):
        parser=Parser();parser.feed(p.read_text());trees[p.name]=parser.root
    for filename,tree in trees.items():
        nodes=list(walk(tree));ids=Counter(n['attrs'].get('id') for n in nodes if n['attrs'].get('id'))
        for ident,n in ids.items():
            if n>1:errors.append(f'{filename}: duplicate ID {ident}')
        if sum(n['tag']=='h1' for n in nodes)!=1:errors.append(f'{filename}: expected one h1')
        scripts=[n['attrs'].get('src') for n in nodes if n['tag']=='script']
        if scripts!=['site.js','analytics.js']:errors.append(f'{filename}: unexpected scripts {scripts}')
        csp=next((n['attrs'].get('content','') for n in nodes if n['attrs'].get('http-equiv')=='Content-Security-Policy'),'')
        for part in ["script-src 'self' https://scripts.simpleanalyticscdn.com", 'connect-src https://queue.simpleanalyticscdn.com']:
            if part not in csp:errors.append(f'{filename}: missing analytics CSP permission')
        if 'unsafe-inline' in csp or 'unsafe-eval' in csp:errors.append(f'{filename}: unnecessarily broad CSP')
        if any(n['tag'] in ['form','input','select','canvas','svg'] for n in nodes):errors.append(f'{filename}: scientific or filtering controls remain')
        images=[n for n in nodes if n['tag']=='img']
        for n in images:
            if 'alt' not in n['attrs']:errors.append(f'{filename}: missing image alt')
        for n in nodes:
            for attr in ['href','src','poster']:
                value=n['attrs'].get(attr)
                if not value:continue
                u=urlsplit(value)
                if u.scheme:
                    if u.scheme=='https':external.add(value)
                    if attr in ['src','poster']:errors.append(f'{filename}: remote resource {value}')
                    continue
                target=(SITE/unquote(u.path)).resolve() if u.path else SITE/filename
                if not target.is_relative_to(SITE.resolve()):errors.append(f'{filename}: resource leaves export')
                refs.add(target.name)
                if not target.exists():errors.append(f'{filename}: missing target {value}')
                elif u.fragment and target.name in trees and not any(n['attrs'].get('id')==unquote(u.fragment) for n in walk(trees[target.name])):errors.append(f'{filename}: missing anchor {value}')
        pages[filename]={'images':len(images),'links':sum(n['tag']=='a' for n in nodes),'ids':len(ids)}
    for p in SITE.glob('*.png'):
        chunks=png_chunks(p);assets[p.name]={'bytes':p.stat().st_size,'chunks':chunks}
        if any(c in chunks for c in ['tEXt','zTXt','iTXt','eXIf']):errors.append(f'{p.name}: metadata chunk')
    banned=['magnetima-nanoassembly','panel-wp','data-wp','tolerogenic','autoimmune hepatitis','anti-inflammatory drug','methylprednisolone','CYCERON']
    for p in SITE.iterdir():
        if p.name != '.nojekyll' and p.suffix not in ['.html','.css','.js','.png']:errors.append(f'Unexpected export file: {p.name}')
        if p.suffix in ['.html','.css','.js']:
            text=p.read_text().lower()
            for phrase in banned:
                if phrase.lower() in text:errors.append(f'{p.name}: removed-content marker {phrase}')
    orphan=sorted(p.name for p in SITE.iterdir() if p.name not in refs and p.suffix!='.html' and p.name!='.nojekyll')
    errors += [f'Orphan resource: {p}' for p in orphan]
    report={'scope':'Static checks, not browser tests','page_count':len(trees),'pages':pages,'errors':errors,'orphan_files':orphan,'images':assets,'external_links':sorted(external),'total_bytes':sum(p.stat().st_size for p in SITE.iterdir())}
    if len(trees)!=10:errors.append('Expected 10 pages')
    (ROOT/'review/STATIC_CHECKS.json').write_text(json.dumps(report,indent=2,ensure_ascii=False))
    if fixtures:Path(fixtures).write_text(json.dumps(trees,ensure_ascii=False))
    print(json.dumps({'pages':len(trees),'errors':errors,'orphan_files':orphan,'bytes':report['total_bytes']},indent=2))
    return bool(errors)
if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('--fixtures');args=p.parse_args();raise SystemExit(check(args.fixtures))
