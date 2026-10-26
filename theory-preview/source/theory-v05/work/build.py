from pathlib import Path
import json
p=Path('theory-v05');assets={'proteins':(p/'dist/assets/protein-symbols.svg').read_text()}
for lang in ['fr','en']:assets['cij-'+lang]=(p/f'dist/assets/cij-{lang}.svg').read_text()
foundation=(p/'work/foundations-template.html').read_text().replace('/*MODEL*/',(p/'dist/foundations-model.js').read_text()).replace('/*UI*/','const FORMULAS='+(p/'dist/foundations-equations.json').read_text()+';\n'+(p/'dist/foundations-ui.js').read_text())
(p/'dist/foundations.html').write_text(foundation)
assets['foundations']=(p/'dist/foundations.html').read_text()
assets['curves']=(p/'dist/measurements.html').read_text()
(p/'dist/measurements.html').write_text(assets['curves'])
html=(p/'work/template.html').read_text()
for tag,data in [('STYLE',(p/'dist/style.css').read_text()),('ASSETS',json.dumps(assets).replace('</','<\\/')),('RESOURCES',(p/'dist/resources.js').read_text()),('VECTOR',(p/'dist/vector.js').read_text()),('APP',(p/'dist/app.js').read_text())]:html=html.replace('/*'+tag+'*/',data)
(p/'dist/index.html').write_text(html)
assert 'data:image/png' not in html and 'data:image/jpeg' not in html
print('Built',len(html.encode()),'bytes, no embedded PNG/JPEG')
