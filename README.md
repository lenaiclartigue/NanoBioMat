# NanoBioMat — V4.12

## Modifications

Interactions magnétiques : deux moments géants soumis à des fluctuations thermiques. La distance entre surfaces règle le couplage dipolaire. Un réglage séparé impose un échange ferromagnétique au contact. Aucun seuil universel de 2 nm. Aucun ralentissement universel imposé.
Couronne : transport dans le plasma, adsorption et échanges, rencontre avec une cellule. Scénario Vroman sélectionnable, non présenté comme universel. Structures PDB conservées et citées. Abondances, affinités, temps et dimensions illustratifs ; aucune composition mesurée de nos formulations n’est revendiquée.
Le module final sur les ligands est retiré. Les liens industriels apparaissent sous IRM, MPI et hyperthermie, ainsi que dans Recherche / Interfaces biologiques. Le dispositif Nanotherm est indiqué comme expérimental.
IRM : impulsion idéale de 90°, puis récupération de Mz et décroissance simultanée de Mxy. Repère tournant et temps affiché après le pulse. L’échelle temporelle avance non linéairement pour montrer T1 et T2. Le vecteur représente les protons, non le moment d’une IONP.
Le schéma Eau, IONPs et relaxivité est statique. Les facettes/chevrons des représentations de cœurs sont supprimés.
FR et EN mises à jour. Les corrections de V4.11 sont incluses.

## Hypothèses du modèle dipolaire

Deux moments de norme constante, diamètre de cœur 12 nm, Ms = 480 kA/m, T = 300 K. Rotations dans un plan, sans anisotropie, corps fixes. U/kBT = lambda[cos(a-b) - 3 cos(a)cos(b)] - j cos(a-b). lambda = mu0 mu²/(4 pi kBT r³), r = diamètre + distance entre surfaces. j = 20 uniquement lorsque l’échange est explicitement activé au contact.
Intégration d’une dynamique rotationnelle suramortie avec bruit thermique gaussien ; temps réduit sans calibration en secondes. Ce modèle illustre les corrélations, sans prédire le temps de relaxation d’un échantillon réel. Le couplage d’échange choisi est ferromagnétique ; il ne représente pas toutes les interfaces.

## Sources ajoutées

https://doi.org/10.1002/advs.202203397
https://doi.org/10.1039/D0CP04377J
https://doi.org/10.1021/am503909q
https://doi.org/10.1038/nnano.2016.269
https://pubmed.ncbi.nlm.nih.gov/22342465/ (USPIO sans effet Vroman classique dans les conditions étudiées)
IRM : https://doi.org/10.3390/nano10010028
Les références et liens PDB accompagnent les modules. Les liens industriels sont des exemples et n’indiquent pas de partenariat avec NanoBioMat.

## Installation

Site public V4.10 vérifié le 26 octobre 2026. Correctif cumulatif V4.10 vers V4.12, incluant V4.11. Copier le contenu du correctif à la racine du dépôt, en conservant les sous-dossiers et en remplaçant les fichiers homonymes. Aucun déploiement effectué par l’assistant.
Supprimer manuellement les deux anciens exports du module retiré :
- theory-preview/svg/delivery-fr.svg
- theory-preview/svg/delivery-en.svg
Nettoyage facultatif : INSTALLATION-V4.10.txt, MANIFEST-V4.10.json, et les équivalents V4.11 s’ils ont été ajoutés.

## Vérifications

140 états graphiques FR/EN ; 28 SVG vectoriels exportés ; 30 cas lecture/pause/reset ; 8 cas FR/EN des modèles de magnétisme. Vérification de la loi dipolaire r^-3, de l’échange réservé au contact, de la corrélation des moments sous échange, et de Mz/M0 = 1-exp(-1) à t=T1. Contrôle visuel des vues agrandies IRM et couronne.
Reconstruction depuis theory-preview/source : python3 theory-v05/work/build.py ; node theory-v05/work/test.js. Copier ensuite theory-v05/dist/index.html vers theory-preview/index.html et les exports dist/svg vers theory-preview/svg, sauf les anciens fichiers delivery.

## Historique V4.11

# NanoBioMat — V4.11

## Progression de l’axe Particules

1. Monodomaine : schéma statique, domaines et paroi. Monodomaine ne signifie pas nécessairement bloqué.
2. Rotation cohérente : moments internes tournant collectivement, opposition ferrimagnétique conservée, puis moment résultant et spin géant.
3. Stoner–Wohlfarth : curseur d’angle champ/axe facile (0–90°), cycle complet recalculé. Minimum local métastable suivi jusqu’à sa disparition ; anisotropie uniaxiale, T = 0, sans interactions.
4. Axes facile et difficile, K et V : axes nommés et associés aux minima (0°, 180°) et au maximum (90°) du potentiel uniaxial à champ nul. Chevron supprimé.
5. Néel et Brown : un seul moment par nanoparticule, corps fixe ou tournant avec le moment.
6. ZFC/FC : 18 particules réparties en trois classes de tailles, corps fixes ; petits moments débloqués avant les grands au réchauffement. Sens inverse pour la FC. Commande « Maintenir la température » pour observer le contraste bloqué/fluctuant. Les trajectoires de moments sont illustratives, non calculées.
7. Lecture de M(H) : cycle complet sans commande de lecture. MS, MR, HC et MR/MS explicités. Comparaison SW bloqué / réponse de Langevin réversible. MR/MS = 0,5 concerne les axes uniaxiaux aléatoires en 3D, sans interactions.
8. Première aimantation : Langevin seul, sans lecture automatique. Diamètre, dispersion et température réglables. Équilibre superparamagnétique supposé, moments sans interactions, anisotropie négligée. Aucune garantie de déblocage d’un échantillon réel à partir de ces paramètres seuls.
9. Nucléation et croissance : module de LaMer conservé.

Le lien depuis Recherche mène au module Monodomaine. Les anciennes URL des modules restent valides. Les versions FR et EN sont mises à jour.

## Modèles et limites

Le cycle SW d’angle donné est obtenu par recherche des minima de E/KV = sin²(φ−α) − 2h cosφ. Le minimum suivi dépend de l’histoire du champ. Les orientations aléatoires utilisent 32 directions uniformes en cosα. Le cas α = 0° est analytique ; α = 90° est réversible, même sans activation thermique. Un cycle fermé ne démontre donc pas à lui seul le superparamagnétisme.
La courbe verte du comparatif M(H) utilise L(8h) : HK sert seulement d’échelle commune, pas d’anisotropie imposée au modèle de Langevin.
La première aimantation calcule une moyenne de Langevin pondérée par le volume pour une distribution lognormale en nombre. MS,cœur = 480 kA/m. Distribution tronquée à ±2 écarts-types en ln(d), puis renormalisée.
Les ZFC/FC utilisent l’approximation de barrière critique (référence ci-dessous), K et MS constants, μ0H = 1 mT, τ0 = 10⁻9 s. En dessous de TB, la ZFC utilise la réponse bloquée de faible champ ; la FC conserve la valeur acquise à TB. Au-dessus, la réponse est approchée par Langevin. σln(d) = 0,15. Ce modèle pédagogique ne remplace pas un ajustement cinétique complet. Le maximum ZFC n’est pas une température de blocage commune à toutes les tailles.
Les fluctuations graphiques ralentissent les retournements et conservent une préférence pour les directions faciles. Le déblocage n’est pas assimilé systématiquement à une rotation isotrope libre.

## Sources

Stoner & Wohlfarth (1948) : https://doi.org/10.1098/rsta.1948.0007
Beyond the blocking model to fit nanoparticle ZFC/FC magnetisation curves (2018) : https://doi.org/10.1038/s41598-018-29501-8
Nonequilibrium dynamics of magnetic nanoparticles with applications in biomedicine : https://pmc.ncbi.nlm.nih.gov/articles/PMC7746587/
Les références, hypothèses et liens Python sont également accessibles dans les modules.

## Installation

Version publique V4.10 vérifiée le 26 octobre 2026. Décompresser le correctif puis copier son contenu à la racine du dépôt GitHub, en conservant les sous-dossiers et en remplaçant les fichiers homonymes.
Aucun fichier fonctionnel à supprimer. Nettoyage facultatif : INSTALLATION-V4.10.txt et MANIFEST-V4.10.json.
Les corrections précédentes, y compris les photos de Facilities et de l’axe 3, sont conservées.
Aucun déploiement effectué par l’assistant.

## Vérifications et reconstruction

Depuis theory-preview/source/ :
python3 theory-v05/work/build.py
node theory-v05/work/test.js
node theory-v05/work/test-foundations.js
node theory-v05/work/test-playback.js

150 états graphiques FR/EN et 30 exports SVG. Tests des moments internes puis du macrospin, du confinement intracellulaire, des limites de Langevin, du rapport MR/MS et de HC dans SW, de l’ordre des TB et de la convergence ZFC/FC. Huit cas d’interface FR/EN pour les quatre nouveaux modules numériques. Lecture/pause/reset pour les animations conservées ; ZFC/FC testée avec température fixe et moments bloqués/mobiles.
Contrôles navigateur : cycle SW à 90°, axes facile/difficile à θ = 90°, fluctuations ZFC à 65 K (petites particules mobiles, deux autres classes bloquées).
Les nouveaux modèles et interfaces sont dans theory-v05/dist/foundations-*. Les équations sont déjà composées en MathML ; les sources LaTeX sont dans work/foundations-equations.tex.json. La reconstruction ne nécessite aucun CDN ni bibliothèque mathématique externe.
Après reconstruction, copier theory-v05/dist/index.html dans theory-preview/index.html. Les exports SVG sont produits par test.js.
