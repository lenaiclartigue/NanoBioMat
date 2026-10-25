# NanoBioMat — V4.5

25 octobre 2026. Correctif cumulatif depuis la base publique V4.0.

## Couleurs des rubriques — V4.5

Une couleur identifie chacune des 11 rubriques sur les 30 pages publiques
françaises et anglaises. Elle apparaît dans l’onglet actif, le titre de page,
le filet d’en-tête et les actions principales. Les articles héritent de leur rubrique.
Les axes scientifiques conservent leur bleu, violet et vert dans Recherche,
Publications et les bases théoriques.
L’onglet actif reste souligné et identifié par aria-current.
La charte et les références ergonomiques sont dans CHARTE-NAVIGATION-V4.5.md.
Les nouvelles paires de couleurs de texte ont un contraste d’au moins 4,5:1.
Le contenu et les destinations des liens des 30 pages sont préservés.
Contrôles visuels : Enseignement sur ordinateur, Projets et menu ouvert à
390 px. Aucun débordement horizontal observé sur cette page mobile.
Ces vérifications ne constituent pas un audit WCAG complet.

## Navigation et bases théoriques

Les trois axes disposent de cartes entièrement cliquables sur l’accueil et
Recherche. Un code couleur les suit dans les bases théoriques :
01 Particules : bleu ; 02 Assemblages : violet ; 03 Interfaces biologiques : vert.
Les numéros, noms et états sélectionnés complètent les couleurs.
Chaque axe de Recherche ouvre directement ses explications interactives.
Les 20 modules FR/EN, leurs sources, animations et exports SVG sont inclus.
La navigation comporte un retour à Recherche, un choix de module et des
boutons précédent/suivant. Sur mobile, une liste remplace le menu latéral.
Les textes courts FR/EN de V4.3 sont conservés.
Le dossier theory-preview est conservé pour préserver les chemins existants.
La page principale des bases théoriques ne porte plus noindex.

## Installation

Décompresser le correctif puis copier son contenu à la racine du dépôt GitHub.
Conserver les dossiers. Ne pas déposer seulement le ZIP.
Aucun fichier du site V4.0 n’est à supprimer.
Les anciens fichiers INSTALLATION-V4.x-preview.txt et MANIFEST-V4.x-preview.json
peuvent être retirés si une version intermédiaire a été installée.
Aucun déploiement n’a été effectué.

## Vérifications

Base publique contrôlée le 25 octobre 2026 (voir verification/live-version-check.json).
Le correctif appliqué à V4.0 reconstitue exactement l’archive complète.
Tests : 20 modules, 140 états graphiques, identités physiques validées.
Navigation testée dans le navigateur : accès direct à l’axe 2, changement de
langue, module suivant et choix d’un module sur écran de largeur 390 px.
Aucun débordement horizontal observé dans ce contrôle mobile.

## Sources

Depuis theory-preview/source : python3 theory-v05/work/build.py
Tests : node theory-v05/work/test.js
Le résultat est theory-v05/dist/index.html, à copier vers theory-preview/index.html.
Les références et limites scientifiques accompagnent chaque module.
Les licences des ressources tierces restent applicables.
