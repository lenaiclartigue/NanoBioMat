from pathlib import Path
import numpy as np,json,colorsys
root=Path('theory-v05');specs=[('1AO6','A','Albumin',197),('2L7B','A','ApoE',24),('1HZH','HKLM','IgG',272),('8VXJ','C','ApoAI',147),('1RHP','ABCD','PF4',342),('3GHG','ABCDEF','Fibrinogen',45)]
syms=[];meta=[]
for id,chains,name,hue in specs:
 pts=[];seen=set()
 for l in (root/'work'/f'{id}.pdb').read_text().splitlines():
  if l.startswith('ENDMDL'):break
  if l.startswith('ATOM') and l[12:16].strip()=='CA' and l[21] in chains and l[16] in [' ','A']:
   key=(l[21],l[22:27])
   if key not in seen:pts.append([float(l[30:38]),float(l[38:46]),float(l[46:54])]);seen.add(key)
 p=np.array(pts);p-=p.mean(0);_,_,v=np.linalg.svd(p,full_matrices=False);p=p@v.T;p[:,1]*=-1
 shapes=[]
 for x,y,z in sorted(p,key=lambda v:v[2]):
  light=32+35*(z-p[:,2].min())/(np.ptp(p[:,2]) or 1);col=lambda L:'#'+''.join(f'{int(v*255):02x}' for v in colorsys.hls_to_rgb(hue/360,L/100,.37));shapes.append(f'<circle cx="{x:.2f}" cy="{y:.2f}" r="3.1" fill="{col(light)}" stroke="{col(light-8)}" stroke-width=".35"/>')
 symbol='<symbol id="protein'+name+'" viewBox="-250 -250 500 500">'+''.join(shapes)+'</symbol>';syms.append(symbol)
 (root/'dist/assets'/f'protein-{id}.svg').write_text('<svg xmlns="http://www.w3.org/2000/svg" viewBox="-250 -250 500 500">'+''.join(shapes)+'</svg>')
 meta.append({'pdb':id,'chains':chains,'name':name,'C_alpha_count':len(p),'projected_extent_nm':(np.ptp(p,axis=0)/10).round(2).tolist(),'model':1,'projection':'PCA, orthographic; same angstrom scale; no unresolved segments invented'})
(root/'dist/assets/protein-symbols.svg').write_text(''.join(syms));(root/'dist/assets/protein-provenance.json').write_text(json.dumps(meta,indent=2));print(meta)
