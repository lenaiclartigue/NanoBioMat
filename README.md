# NanoBioMat — V4.16 · 26 octobre 2026

## Installation
Le site public a été contrôlé : VERSION.json annonce V4.14 et theory-preview/index.html est identique octet pour octet à l’archive V4.14. Le correctif V4.14 → V4.16 est cumulatif et inclut V4.15. Il convient aussi si V4.15 vient d’être déposée. Aucun déploiement effectué par l’assistant.

Décompresser le correctif puis copier son contenu à la racine du dépôt, en conservant les sous-dossiers et en remplaçant les fichiers homonymes. Les fichiers inchangés ne sont pas dans le correctif.

Supprimer manuellement le dossier theory-preview/svg/ : anciens exports autonomes, sans rôle dans le fonctionnement des animations. Ne pas supprimer theory-preview/source/.
Nettoyage des notices obsolètes : INSTALLATION-V4.14.txt, MANIFEST-V4.14.json ; si V4.15 a été déposée, INSTALLATION-V4.15.txt et MANIFEST-V4.15.json également. La liste exacte de reconstruction depuis V4.14 figure ci-dessous.

## Contenu FR / EN
21 modules : 10 Particules, 3 Assemblages, 8 Interfaces biologiques.

Ordre de l’axe 1 : phases et sites des oxydes de fer ; monodomaine ; rotation cohérente et macrospin ; anisotropie ; Stoner–Wohlfarth ; Néel et Brown ; superparamagnétisme et blocage ; ZFC/FC ; M(H) ; Langevin.

- Nouveau module Superparamagnétisme et blocage : température et temps d’observation réglables. Comparaison τN / tm, TB, courbe exponentielle de relaxation de l’aimantation moyenne. Cœurs immobilisés monodisperses, K = 20 kJ/m³, diamètre 21 nm, τ0 = 10⁻⁹ s : paramètres illustratifs déclarés, non mesures d’un échantillon. Formules MathML. L’ordre ferrimagnétique interne subsiste.
- Nouveau module Phases et sites : magnétite, maghémite, coordination A/B, valences, lacunes octaédriques dans le modèle idéal, ferrimagnétisme, bilans ioniques colinéaires normalisés à O4. Les coordinations 4 et 6 et les distances Fe–O sont calculées à partir du CIF COD 9007644. La maghémite est documentée par COD 9017489 (P4332), avec mention des autres ordres de lacunes possibles. Les paramètres de maille sont attribués à des entrées, non présentés comme universels. Les liens depuis Research FR/EN ouvrent ce module en premier.
- Définitions de M, H, B, K, V, MS/MR/HC ; clarification de la référence Brown 1963. ZFC : distribution de TB et rôle du temps. Langevin : moments indépendants à l’équilibre, anisotropie négligée.
- ΔM : sigles, protocole, normalisation et distinction tendance collective / échange microscopique. FORC : Hr, Hc, Hu, rho et références fondatrices visibles.
- Couronne : scène unique avec globules rouges biconcaves, IONP, protéines et membrane. Quatre étapes et pauses conservées. Les 4555 cercles des six protéines ont été remplacés par 12 contours vectoriels issus des mêmes projections PDB (413180 → 9852 octets pour la banque de formes). Rafraîchissement limité à environ 30 images/s. Les objets nanométriques sont agrandis, leur nombre n’est pas une concentration.
- IRM : T1, T2, T2*, origine protonique du vecteur ; loi d’échelle de Vuong et al. expliquée et distinction entre moyenne par diffusion et déphasage statique.
- Interfaces : taille, forme, revêtement et cinétique de la couronne ; portée des expériences historiques explicitée. MPI : lien avec Langevin et dynamique. Hyperthermie : ajout de Carrey et al. et temps effectif des deux voies indépendantes.

## Références ajoutées
Néel 1948 (ferrimagnétisme), Langevin 1905, Bean et Livingston 1959, Mørup 2010, Henkel 1964, Kelly 1989, Pike 1999, Roberts 2000, Cedervall 2007, Lundqvist 2008, Chithrani 2006, Champion et Mitragotri 2006, Carrey 2011, Fleet 1981, Greaves 1983, Shmakov 1995. DOI cliquables près des modules. La référence de Néel 1948 distingue la 12e série du tome 3 (confondus dans certaines métadonnées).

## Attribution des données
- PDB : 1AO6, 2L7B, 1HZH, 8VXJ, 1RHP, 3GHG, coordonnées Cα projetées ; liens visibles sous la scène, provenance des chaînes conservée dans assets/protein-provenance.json. Contours simplifiés pour l’affichage, pas de détail atomique revendiqué.
- BioNumbers : BNID 108239, hématie humaine 7,7 µm (moyenne de 8 mesures) ; BNID 112585 pour le repère de bicouche lipidique du module cellulaire.
- NIST CODATA 2022 : kB exact 1,380649 × 10⁻²³ J/K, cité auprès des modèles et dans les vues numériques.
- NIST Chemistry WebBook : Fe3O4, CAS 1317-61-9, masse molaire 231,533 g/mol.
- IUPAC Gold Book M03690 : ordre magnétique, utilisé pour le ferrimagnétisme et sa distinction du blocage.
- COD 9007644 : Fleet 1981, a = 8,3941 Å, Fd-3m ; lecture du CIF distribué dans le dépôt Avogadro à partir du COD. COD 9017489 : Shmakov et al. 1995, a = 8,3474 Å, P4332 ; CIF lu sur le miroir COD de l’Université de Grenade. Les fichiers et les distances vérifiées sont conservés dans work/data-v416/.
- MAGNDATA : ressource pour poursuivre l’étude ; aucun moment numérique ni fichier mcif de cette base n’a été utilisé dans cette version. La fiche le précise. Le bilan de moments exposé est celui du modèle ionique de Néel, pas une extraction de MAGNDATA.
- CRC/ICSD/ICDD : ressources bibliographiques ; aucune donnée sous licence n’est attribuée à une consultation non effectuée.

## Vérifications
21 modules ; 90 états graphiques ; 16 cas lecture/pause/recommencement ; 8 vues numériques FR/EN ; contrôles de la limite isolée, du contact, des pauses à 25/50/75/100 %, des références, de TB et de la dépendance au temps de mesure. Les coordinations cristallines donnent 4 oxygènes à 1,8886 Å et 6 à 2,0582 Å. Contrôle FR/EN des deux nouveaux modules et des annotations. Navigation et lecture de la couronne, changement de température, équations et module cristallographique inspectés dans le navigateur. Les performances sur chaque téléphone ne sont pas garanties par ces vérifications.

Reconstruction : depuis theory-preview/source, lancer python3 theory-v05/work/build.py puis les tests test.js, test-playback.js, test-foundations.js, test-live-interactions.js, test-v415.js et test-v416.js avec Node. Copier theory-v05/dist/index.html vers theory-preview/index.html après reconstruction. Les SVG autonomes générés par test.js ne doivent pas être remis dans theory-preview/svg/.

## Suppressions pour reconstruire exactement le complet depuis V4.14
- INSTALLATION-V4.14.txt
- MANIFEST-V4.14.json
- theory-preview/svg/anisotropy-en.svg
- theory-preview/svg/anisotropy-fr.svg
- theory-preview/svg/corona-en.svg
- theory-preview/svg/corona-fr.svg
- theory-preview/svg/fate-en.svg
- theory-preview/svg/fate-fr.svg
- theory-preview/svg/interactions-en.svg
- theory-preview/svg/interactions-fr.svg
- theory-preview/svg/macrospin-en.svg
- theory-preview/svg/macrospin-fr.svg
- theory-preview/svg/monodomain-en.svg
- theory-preview/svg/monodomain-fr.svg
- theory-preview/svg/mri-en.svg
- theory-preview/svg/mri-fr.svg
- theory-preview/svg/protein-1AO6.svg
- theory-preview/svg/protein-1HZH.svg
- theory-preview/svg/protein-1RHP.svg
- theory-preview/svg/protein-2L7B.svg
- theory-preview/svg/protein-3GHG.svg
- theory-preview/svg/protein-8VXJ.svg
- theory-preview/svg/relax-en.svg
- theory-preview/svg/relax-fr.svg
- theory-preview/svg/rem-en.svg
- theory-preview/svg/rem-fr.svg
