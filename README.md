# NanoBioMat — V4.14

## Installation
Version publique V4.12 vérifiée le 26 octobre 2026. Le fichier public theory-preview/index.html correspond exactement (SHA-256) à l’archive V4.12. Correctif cumulatif V4.12 → V4.14 : les corrections V4.13 sont incluses.
Copier le contenu du correctif à la racine du dépôt GitHub en conservant les sous-dossiers. Remplacer les fichiers homonymes. Aucun déploiement effectué.
Supprimer manuellement les anciens exports suivants :
- theory-preview/svg/assembly-en.svg
- theory-preview/svg/assembly-fr.svg
- theory-preview/svg/heat-en.svg
- theory-preview/svg/heat-fr.svg
- theory-preview/svg/lamer-en.svg
- theory-preview/svg/lamer-fr.svg
- theory-preview/svg/mpi-en.svg
- theory-preview/svg/mpi-fr.svg
- theory-preview/svg/photo-en.svg
- theory-preview/svg/photo-fr.svg
- theory-preview/svg/relaxivity-en.svg
- theory-preview/svg/relaxivity-fr.svg

Nettoyage facultatif : INSTALLATION-V4.12.txt, MANIFEST-V4.12.json et, si présents, INSTALLATION-V4.13.txt, MANIFEST-V4.13.json. Les anciens delivery-fr.svg et delivery-en.svg peuvent aussi être supprimés s’ils subsistent.

## Changements FR / EN
- Suppression du module Flash nanoprecipitation dans Assemblages.
- Interactions : fluctuations automatiques des moments, sans Start. Seule la distance entre surfaces varie. Le modèle plan inclut les gradients dipolaires et le bruit thermique. Un couplage d’échange ferromagnétique est supposé au contact magnétique direct, sans couche isolante. Aucune distance universelle de 2 nm n’est proposée. Le modèle n’affirme pas un ralentissement universel par les interactions.
- Une seule activité IRM / DCD / ΔM : référence sans interaction, écart positif, écart négatif. Les courbes pédagogiques construites respectent ΔM = mDCD − (1 − 2mIRM). Normalisation par la rémanence à saturation. Le signe seul n’identifie pas sans ambiguïté un mécanisme microscopique. Les anciennes vues numériques ne proposent plus que FORC.
- Retrait des mentions « for review ».
- Eau/relaxivité, MPI, hyperthermie et photothermie : fiches de lecture statiques avec phénomènes, équations MathML, variables, limites et références. L’animation IRM T1/T2 est conservée.
- Hyperthermie : aire du cycle, réponse linéaire de Rosensweig, SAR, ILP et repère historique d’Atkinson–Brezovich. Le produit Hf est contextualisé ; il ne constitue pas une limite universelle de sécurité.
- Module Développements industriels dédié : Ferabright, Magnetic Insight, Nanotherm Therapeutics et Magtrace. Liens retirés de la liste de la page Recherche et remplacés par un accès à ce module. Pas de partenariat implicite.

## Sources
Manuscrit HDR_LARTIGUE_2025(2).pdf consulté : pages imprimées 35–38 et 91–92, références 90–92, 126–142 et 215–221. Le manuscrit privé n’est pas intégré à cette archive publique.
Références historiques et théoriques : Dias/Lauterbur, Roch/Muller/Gillis, Gleich/Weizenecker, Gilchrist, Jordan, Rosensweig, Atkinson/Brezovich/Chakraborty, Hergt, Kallumadil, Shen, Plan Sangnier et Roper. DOI cliquables dans chaque fiche.
Deux corrections bibliographiques par rapport au manuscrit : Dias 1986, DOI 10.1002/mrm.1910030218 ; Jordan 1993, DOI original 10.3109/02656739309061478 (et non DOI de la réédition 2009).
Photothermie : bilan thermique global ; la référence Roper décrit une méthode calorimétrique initialement appliquée à l’or, sans attribuer un mécanisme plasmonique d’or aux IONPs.

## Vérifications
19 modules ; 90 états graphiques FR/EN ; 18 exports SVG ; 10 cas de fiches bilingues ; 16 cas lecture/pause/reset ; 8 cas d’interface magnétique. Identité ΔM, signes, bornes et contact d’échange vérifiés. Démarrage automatique des interactions, variation de distance et arrêt lors du changement de module vérifiés. Tests Stoner–Wohlfarth, Langevin et ZFC conservés et réussis. Contrôle visuel des interactions, de ΔM et de la fiche hyperthermie.
Reconstruction depuis theory-preview/source :
python3 theory-v05/work/build.py
node theory-v05/work/test.js
node theory-v05/work/test-playback.js
node theory-v05/work/test-foundations.js
node theory-v05/work/test-live-interactions.js
Copier dist/index.html vers theory-preview/index.html. Publier uniquement les exports SVG des modules actifs ; exclure lamer, assembly, relaxivity, mpi, heat, photo et delivery.

## Historique — consignes remplacées par V4.14 ci-dessus

# NanoBioMat — V4.13

## Installation

Version publique V4.12 vérifiée le 26 octobre 2026. Le fichier public theory-preview/index.html correspond exactement (SHA-256) à l’archive complète V4.12. Ce correctif contient uniquement les fichiers modifiés depuis V4.12.
Copier le contenu à la racine du dépôt GitHub, conserver les sous-dossiers et remplacer les fichiers homonymes. Aucun déploiement effectué par l’assistant.
Supprimer manuellement les exports de Nucléation / croissance retiré :
- theory-preview/svg/lamer-fr.svg
- theory-preview/svg/lamer-en.svg
Nettoyage facultatif : INSTALLATION-V4.12.txt et MANIFEST-V4.12.json.
Si les anciens exports delivery-fr.svg et delivery-en.svg sont encore présents dans theory-preview/svg, ils peuvent aussi être supprimés, comme indiqué dans V4.12.

## Changements FR / EN

- Suppression de « A single-domain core can be blocked or superparamagnetic » et de la phrase « Prescribed rotation illustrates the model; positions are not crystallographic », ainsi que des traductions françaises.
- Introduction des domaines et déplacement de paroi, puis monodomaine. La notion de superparamagnétisme est définie dans le module Néel–Brown avant les modules ZFC/FC et M(H).
- Suppression des curseurs K, diamètre et température dans Axes facile/difficile et Néel–Brown. Suppression des curseurs viscosité et épaisseur hydrodynamique du schéma qualitatif Néel–Brown. Les valeurs calculées qui en dépendaient sont retirées ; les formules symboliques restent visibles. Seule l’immobilisation est réglable et bloque effectivement la rotation du corps.
- Lire un cycle M(H) : axes faciles aléatoires en 3D uniquement, sans sélecteur. MR/MS = 0,5. Le module distinct Stoner–Wohlfarth conserve son curseur d’angle.
- Suppression du module Nucléation / croissance.
- Conditions du modèle SW explicites : monodomaine avec rotation cohérente ; anisotropie uniaxiale ; interactions dipolaires négligeables. Calcul à température nulle.
- Reprise SVG des deux schémas fournis le 26 octobre : image(20261026-072328).png et image(20261026-072337).png. Sphères sombres, flèches blanches, ellipse et agrandissements. Les deux agrandissements montrent deux instants d’une rotation cohérente. Le schéma Néel–Brown distingue le retournement interne de la rotation du corps, avec un repère fixé à la sphère. Les flèches opposées dans les agrandissements conservent l’ordre ferrimagnétique. Ce sont des dessins vectoriels animés adaptés, non des images matricielles intégrées.

## Références et notation

Monodomaine : J. Frenkel, J. Dorfman, Nature 1930, 126, 274–275. https://doi.org/10.1038/126274a0
Domaines : C. Kittel, Phys. Rev. 1946, 70, 965–971. https://doi.org/10.1103/PhysRev.70.965
Rotation cohérente : E. C. Stoner, E. P. Wohlfarth, Phil. Trans. R. Soc. A 1948, 240, 599–642. https://doi.org/10.1098/rsta.1948.0007
Dynamique : L. Néel, Ann. Géophys. 1949, 5, 99–136. https://hal.science/hal-03070532
Régimes et cycles : C. P. Bean, J. Appl. Phys. 1955, 26, 1381–1383. https://doi.org/10.1063/1.1721912
Brown 1963 est conservé pour les fluctuations thermiques du moment ; Rosensweig 2002 accompagne les expressions des relaxations interne et brownienne.
Les références des vues numériques sont maintenant propres au module, au lieu d’une liste commune.
L’estimation dc ≈ 18 sqrt(AK)/(mu0 MS²) est composée en MathML, avec une racine carrée. A est la rigidité d’échange en J/m, K une densité d’énergie en J/m³ et MS une aimantation en A/m. Le coefficient dépend des hypothèses du modèle ; ce n’est pas une limite universelle de taille pour les IONPs. L’emploi moderne de cette expression est également documenté par Materials 2019, 12, 2663, https://doi.org/10.3390/ma12172663 ; elle n’est pas présentée comme une transcription littérale de Kittel 1946.

## Vérifications

20 modules, 130 états graphiques FR/EN, 26 exports SVG. 30 cas lecture/pause/reset et 8 cas d’interface numérique FR/EN. Contrôles des curseurs retirés, des phrases retirées, de l’immobilisation du corps, du maintien des retournements de Néel et du symbole racine. Tests numériques SW et Langevin inchangés et réussis.
Contrôle visuel des vues agrandies Rotation cohérente et Néel–Brown. Reprise des références contrôlée sur les pages Nature, APS, AIP et les métadonnées HAL ; pas de revendication d’accès intégral à tous les articles historiques.
Reconstruction depuis theory-preview/source :
python3 theory-v05/work/build.py
node theory-v05/work/test.js
node theory-v05/work/test-playback.js
node theory-v05/work/test-foundations.js
Copier ensuite theory-v05/dist/index.html vers theory-preview/index.html et les SVG dist/svg vers theory-preview/svg, en excluant les anciens exports lamer et delivery.

## Historique des versions antérieures (consignes remplacées par V4.13 ci-dessus)

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
