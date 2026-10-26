# NanoBioMat V4.18 — 26 octobre 2026

Installation : correctif cumulatif depuis V4.16, version publique vérifiée (VERSION.json et index théorique identique à l’archive V4.16). Il inclut le retrait du module industriel effectué en V4.17 et convient aussi si V4.17 a été déposée depuis cette vérification.
Copier le contenu du correctif à la racine du dépôt en conservant les sous-dossiers. Remplacer les fichiers homonymes. Aucun fichier fonctionnel à supprimer.
Nettoyage facultatif des notices : INSTALLATION-V4.16.txt et MANIFEST-V4.16.json ; INSTALLATION-V4.17.txt et MANIFEST-V4.17.json si présents. Ne pas supprimer theory-preview/source/.

## Modifications FR / EN
- 19 modules : 9 Particules, 3 Assemblages, 7 Interfaces biologiques.
- Superparamagnétisme et blocage fusionné avec ZFC/FC. Définition des deux temps avant le protocole. Suppression de la courbe exponentielle et de ses deux curseurs séparés. Les anciens liens #particles/superpara ouvrent #particles/zfc.
- Titre français : Relaxations de Néel et brownienne.
- Typographie scientifique : indices dans les textes, légendes SVG, lectures numériques et vues intégrées ; exposants des ions/unités reconnus. Les formules MathML et les liens sont préservés. Les autres pages du site ont été inspectées pour les mêmes notations brutes.
- Couronne : titre lié à l’étape courante, pauses aux quatre étapes conservées. Distribution pseudo-aléatoire reproductible des protéines, sans réseau ni rééchantillonnage à chaque image. Même scène que les hématies et la nanoparticule.
- Mélange pédagogique de trois espèces : albumine, IgG, fibrinogène. Concentrations choisies 40, 10 et 3 g/L ; masses moléculaires arrondies 66,5, 150 et 340 kDa. Conversion concentration/massse molaire puis normalisation entre ces trois espèces ; 133/15/2 silhouettes sur 150. Ce sous-ensemble ne prétend pas reproduire tout le protéome. Le repère IgG provient de sérum adulte, déclaré dans le tableau ; il sert à choisir un ordre de grandeur. La composition de la couronne est distincte du mélange en solution, sans classement universel d’affinité.
- Encarts dépliables : protéines du sang ; voies d’internalisation ; compartiments, pH, ions et force ionique. Valeurs contextualisées, citations à proximité. Aucune affectation automatique d’une voie d’entrée à une taille de particule.
- Maintien de la suppression du module Applications and industrial developments et des liens Research FR/EN.

## Sources consultées pour les nouveaux encarts
- BioNumbers BNID 100940 : albumine plasmatique humaine 39–55 g/L ; source Flindt, Amazing Numbers in Biology, 2006, p.220. https://bionumbers.hms.harvard.edu/bionumber.aspx?id=100940
- Mayo Clinic : IgG sérique adulte 767–1590 mg/dL = 7,67–15,90 g/L. https://www.mayocliniclabs.com/test-catalog/Overview/800053
- Mayo Clinic : fibrinogène plasmatique 200–393 mg/dL = 2,00–3,93 g/L. https://www.mayocliniclabs.com/test-catalog/overview/40937
- PDB : 1AO6, 1HZH, 3GHG pour les trois silhouettes affichées. Coordonnées et simplification V4.16 conservées ; aucune image lourde supplémentaire.
- Anderson & Anderson 2002 : https://doi.org/10.1074/mcp.R200007-MCP200
- Vroman & Adams 1969 : https://doi.org/10.1002/jbm.820030106
- Rejman et al. 2004 : billes latex, cellules B16, seuil expérimental et non universel. https://doi.org/10.1042/BJ20031253
- Racoosin & Swanson 1992 : https://doi.org/10.1242/jcs.102.4.867
- Champion & Mitragotri 2006 : https://doi.org/10.1073/pnas.0600997103
- Rink et al. 2005 : https://doi.org/10.1016/j.cell.2005.06.043
- BioNumbers BNID 108100 / Paroutis et al. 2004 figure 1 : exemples précoce 6,3 ; tardif 6,0 ; lysosome 5,5. https://bionumbers.hms.harvard.edu/bionumber.aspx?id=108100
- Ohkuma & Poole 1978 : lysosomes de macrophages pH 4,7–4,8. https://doi.org/10.1073/pnas.75.7.3327
- Sonawane & Verkman 2003 : J774, endosomes précoces/recyclage Cl− 20→41 mM et pH 6,91→6,05 ; voie tardive Cl− 28→58 mM, pH 6,85→5,20. Temps/protocole précisés. https://doi.org/10.1083/jcb.200211098
- Chakraborty et al. 2017 : lysosomes J774A.1 et THP-1 non traités ~118 mM Cl−. https://doi.org/10.7554/eLife.28862
- IUPAC Gold Book I03180 : force ionique sur base concentration, I = 1/2 somme(ci zi²). Une concentration de chlorure seule ne donne pas la force ionique totale. https://goldbook.iupac.org/terms/view/I03180

## Vérifications
Construction autonome HTML sans PNG/JPEG embarqué. Sept suites Node réussies : géométrie (90 états), 16 cas lecture/pause/reset, modèles magnétiques, 8 vues FR/EN, interactions, couronne, cristallographie et nouvelles fonctionnalités. Vérification navigateur : ouverture des encarts, titre de la troisième étape, ancien lien superpara redirigé vers ZFC, module 7/9, lecture ZFC avançant de 5 à 87 K puis pause, indices HTML/SVG.
Les exports générés par les tests ne sont pas inclus dans le site.
Reconstruction depuis theory-preview/source : python theory-v05/work/build.py. Copier dist/index.html vers theory-preview/index.html. Tests : node theory-v05/work/test*.js (exécuter les sept fichiers individuellement, hors glob dans un unique appel Node).
