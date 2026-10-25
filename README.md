# NanoBioMat — V4.6

## Modifications

Numéros 01, 02 et 03 agrandis dans des cadres de la couleur de leur axe.
Ils sont appliqués à l’accueil, Recherche et au menu des bases théoriques.
Sur ordinateur, les cadres font 72 × 72 px et les chiffres 38 px.
Sur mobile, les cadres restent visibles : 64 px sur le site et 56 px dans le menu interactif.

Les trois actions de chaque axe utilisent le même composant : fond coloré,
largeur égale, même hauteur, même police, mêmes bordures et espacement.
Le sous-titre du bouton Bases théoriques est retiré.
Les libellés et la mise en page s’adaptent au français et à l’anglais.

## Installer le correctif

Base : V4.5, confirmée par le VERSION.json du site en ligne le 25 octobre 2026.
Décompresser le correctif V4.5 vers V4.6 et copier son contenu à la racine du dépôt.
Conserver les sous-dossiers. Seuls les fichiers ajoutés ou modifiés sont inclus.
Aucun fichier fonctionnel à supprimer.
Nettoyage facultatif des anciens documents : INSTALLATION-V4.5.txt et MANIFEST-V4.5.json.
Le correctif appliqué à l’archive V4.5 puis ce nettoyage reconstitue exactement le complet V4.6.
Aucun déploiement effectué par l’assistant.

## Contrôles

Sur ordinateur : les trois boutons anglais mesurent chacun 218 × 80 px dans
la fenêtre de contrôle. Sur mobile : les trois boutons français mesurent
chacun 335 × 60 px. Les badges du menu interactif mobile font 56 × 56 px.
Les destinations des liens de Recherche sont conservées.
Les textes scientifiques, calculs et ressources ne sont pas modifiés.

## Recommandations consultées

- W3C WAI — Target Size (Minimum) : https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- Nielsen Norman Group — Consistency and Standards : https://www.nngroup.com/articles/consistency-and-standards/

Application : cibles suffisamment grandes et espacées, composants visuellement
cohérents. Les dimensions retenues relèvent du choix de mise en page ; les recommandations
ne prescrivent pas une taille particulière pour les numéros.

La charte de couleurs V4.5 reste applicable. Les sources des bases théoriques
sont dans theory-preview/source/ ; depuis ce dossier, reconstruire avec
python3 theory-v05/work/build.py puis copier theory-v05/dist/index.html vers theory-preview/index.html.
