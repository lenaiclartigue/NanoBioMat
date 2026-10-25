# NanoBioMat — Magnétisme interactif V0.3

Maquette de discussion FR/EN, 25 octobre 2026. Les textes et les modèles restent à valider ensemble avant de créer les boutons « Bases théoriques » dans Recherche. Le site public n’a pas été déployé ni sa navigation changée.

## Ce qui est livré

Six explorations avec animation manuelle, pause, curseur de progression et export CSV : ZFC/FC ; cycle M(H) ; première aimantation ; IRM(H), DCD(H), ΔM(H) et diagramme de Henkel ; relaxation IRM(t)/DCD(t) ; famille FORC et densité théorique.

Le lien Python dans le HTML télécharge le script autonome embarqué. Il calcule des courbes et propose un ajustement sur données **synthétiques**, avec K seul ajusté. Il ne s’agit pas d’un logiciel validé pour exploiter les expériences du laboratoire.

## Choix scientifiques à relire

- Une flèche = le macrospin (moment résultant) d’une nanoparticule. Pas une représentation de spins atomiques indépendants.
- Pour les IONPs ferrimagnétiques, employer « moment bloqué » puis « régime superparamagnétique ». Le changement à TB n’est pas une disparition de l’ordre ferrimagnétique interne.
- FC : refroidissement sous champ, à partir d’un équilibre supposé à 400 K. Les moments ne sont pas tous saturés dans un faible champ. Le réchauffement après FC est un protocole distinct, non implémenté dans cette maquette.
- TB* : estimation monodisperse à champ nul pour 100 s ; elle n’est pas assimilée au pic ZFC d’une distribution ni à la température d’irréversibilité.
- Le rapport MR/Ms = 0,5 est celui de Stoner–Wohlfarth idéal, axes aléatoires en 3D, sans interactions, sans activation thermique. Le champ maximum de 1,2 HK donne une approche de la saturation, pas un alignement parfaitement parallèle de tous les moments.
- Les courbes thermiques utilisent les minima et barrières de l’énergie uniaxiale SW, avec des taux de Néel. Les fluctuations intrapuits, les interactions, la relaxation brownienne et les variations de Ms/K avec T sont omises. Les faibles barrières sont hors du domaine de bonne précision. Le modèle n’est pas une implémentation exacte des articles de Tournus.
- K est une anisotropie uniaxiale effective positive, pas le coefficient cubique K1 négatif de la magnétite.
- IRM(H)/DCD(H) : mesures à champ nul après préparation en champ. IRM(t)/DCD(t) : relaxation après retrait du champ. ΔM n’est pas appliqué à des traces temporelles arbitraires.
- ΔM et Henkel montrent ici la **référence sans interactions**. Les écarts expérimentaux et leurs signes sont expliqués, mais aucun modèle d’interactions n’est ajusté.
- FORC : modèle illustratif de Preisach. La carte est la densité théorique qui génère les courbes, pas un traitement de données bruitées ni une mesure unique des interactions.

## Source HDR

Référence de sélection : `Presentation HDR(3).pptx` (77 diapositives, avec étapes d’apparition).
Diapositives 6–7 : macrospin ; 15–16 : anisotropie et grandeurs ; 20 : effet taille ; 25 et 27–28 : interactions ; 66 : IRM/DCD/ΔM.
Les animations sont des constructions nouvelles fondées sur des modèles explicités. Elles ne sont pas des tracés extraits des mesures HDR. Les comparaisons nanoframboises/nanogrenades ne sont pas reprises. Les fichiers PPTX d’origine ne sont pas modifiés et ne sont pas inclus dans l’archive du site.

## Références et outils

- Stoner & Wohlfarth, 1948 : https://doi.org/10.1098/rsta.1948.0007
- Wohlfarth, 1958 : https://doi.org/10.1063/1.1723232
- Tournus & Bonet, 2011 : https://doi.org/10.1016/j.jmmm.2010.11.056 ; corrigendum JMMM 324 (2012) 656 : https://www.sciencedirect.com/science/article/pii/S0304885311006883
- Tournus & Tamion, 2011 : https://doi.org/10.1016/j.jmmm.2010.11.057
- Hillion, Tamion, Tournus et al., 2013 : https://doi.org/10.1103/PhysRevB.88.094419
- Lartigue et al., JACS 2011 : https://doi.org/10.1021/ja111448t
- Lartigue et al., ACS Nano 2012 : https://doi.org/10.1021/nn304477s
- Traitement FORC : https://doi.org/10.1029/2020JB020418
- MagnetoPy : https://rinehartgroup.github.io/MagnetoPy/api/zfcfc/
- Stoner / modèles d’ajustement : https://stoner-pythoncode.readthedocs.io/en/stable/analysis-fitting.html
- FORCsensei : https://github.com/FORCaist/forcsensei
- SciPy : https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.least_squares.html

## Contrôles réalisés

Syntaxe JavaScript ; MR/Ms numérique = 0,4999999998 ; symétrie de la rémanence négative ; bornes des aimantations ; convergence ZFC/FC à haute température pour les paramètres par défaut ; relation de Wohlfarth ; saturation du modèle FORC ; effets de température. Script Python exécuté : récupération du K synthétique à environ 19 999 J/m³ pour 20 000 J/m³ injectés, V et tau0 fixés (contrôle du code, pas validation expérimentale). Les courbes Python et JavaScript utilisent la même table d’énergie.

Navigation, animation, curseurs, affichage de Henkel, langue anglaise et mise en page sur une largeur de 390 px contrôlés dans un navigateur. Aucun test sur un téléphone physique.

## Raccordement prévu à Recherche après validation

Axe Particles : ZFC/FC, M(H), première aimantation (avec l’anisotropie et LaMer dans le parcours plus large).
Axe Assemblies : IRM/DCD, ΔM/Henkel, FORC (avec les interactions).
Le présent module ne modifie pas encore les contenus nanomédecine/IRM/hyperthermie/MPI/photothermie de l’axe Biological interfaces.
