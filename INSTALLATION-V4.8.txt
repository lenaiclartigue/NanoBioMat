# NanoBioMat — V4.8

## Lecture et représentations

Le premier module restait graphiquement immobile pendant environ 65 % de sa
séquence, bien que la progression avance. Les schémas de surface et du montage
CIJ étaient statiques malgré leur commande de lecture. Ces cas sont corrigés.
Une première image évoluée est produite dès le clic. Lecture, pause et remise
à zéro sont testées pour les 20 modules dans les deux langues.
Les commandes sont au-dessus des figures pour que le clic ne masque pas le dessin.

La représentation du macrospin est organisée en trois panneaux : nanoparticule,
ordre ferrimagnétique et somme vectorielle. La rotation collective est visible
dès le début. Les sous-réseaux restent opposés ; les positions ne décrivent pas
une maille cristallographique.
La surface fonctionnalisée remplace les pièces de puzzle par un cœur, des groupes
d’ancrage et des chaînes. Les formes protéiques PDB existantes sont conservées.
Le dessin CIJ est conservé : l’animation montre l’ordre du procédé, pas un calcul
d’écoulement. Les lignes de champ dipolaire se construisent progressivement,
sans déplacer les moments imposés par les curseurs.
Le schéma MPI utilise une section de champ et une zone de champ faible mobile.
Les schémas cellulaires conservent leurs organites et leur trajet annoté, avec
une palette plus sobre et des particules retravaillées.
Les courbes de LaMer, d’anisotropie et d’IRM ont des graduations plus explicites.
La lecture IRM emploie une progression logarithmique du temps pour rendre
visibles à la fois T2 et T1 ; les axes des courbes restent linéaires et le temps
physique est affiché. Le cycle d’hyperthermie montre l’aire et un tracé progressif.
Les six protocoles magnétiques conservent leurs modèles numériques ; leur
lecture démarre immédiatement, avec un rendu graphique harmonisé.

Les dessins restent des schémas de mécanismes, pas des reconstructions atomistiques.
Les références et limites accompagnent les modules. Les schémas existants issus
des sources HDR et PDB ont été réutilisés ; cette livraison ne revendique pas
une nouvelle vérification des planches originales de l’HDR.

## Installation

Base V4.7 confirmée sur le site le 25 octobre 2026.
Décompresser le correctif puis copier son contenu à la racine du dépôt.
Conserver les sous-dossiers. Seuls les fichiers ajoutés ou modifiés sont fournis.
Aucun fichier fonctionnel à supprimer. Nettoyage facultatif :
INSTALLATION-V4.7.txt et MANIFEST-V4.7.json.
Le correctif et ce nettoyage reconstituent exactement l’archive complète V4.8
à partir de l’archive complète V4.7. Aucun déploiement effectué par l’assistant.

## Vérification

Depuis theory-preview/source/ :
- python3 theory-v05/work/build.py
- node theory-v05/work/test.js : 140 états graphiques ; identités physiques.
- node theory-v05/work/test-playback.js : 40 cas lecture/pause/remise à zéro,
  couvrant 20 modules FR/EN ; événement de clic et ordonnanceur testés avec un
  double de DOM, y compris vérification d’un changement de la première image.
- node magnetisme-v03/work/test.js : rémanence SW aléatoire 0,5 ; ZFC/FC ;
  relation de Wohlfarth ; FORC ; première aimantation et effet thermique.
Contrôles de navigateur : macrospin, cycle M(H), devenir intracellulaire.
28 exports SVG FR/EN sont régénérés dans theory-preview/svg/.
Pour publier une reconstruction, copier theory-v05/dist/index.html vers
 theory-preview/index.html.

## Source en ligne vérifiée pendant cette révision

RCSB PDB, albumine humaine 1AO6 : https://www.rcsb.org/structure/1AO6
Les autres identifiants PDB et les publications sont documentés dans les modules.
