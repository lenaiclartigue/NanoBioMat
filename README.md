# NanoBioMat — V4.3-preview

25 octobre 2026. Base publique vérifiée : V4.0.

## Cette livraison

Les pages research.html et fr/research.html utilisent des textes courts et
factuels. Les questions et leurs réponses deviennent des phrases déclaratives.
Les introductions, explications et limites des bases théoriques sont simplifiées.
Les fiches de ressources suivent la même ligne rédactionnelle.
Les titres et les légendes courtes peuvent rester nominaux.
Les schémas, calculs, paramètres et liens scientifiques sont conservés.

Les textes de Recherche figurent dans TEXTES-RECHERCHE-V4.3-preview.md.
Les nouveaux textes restent proposés à la relecture.
Aucun déploiement n’a été effectué.

## Installer

Le correctif inclut toutes les nouveautés depuis V4.0, dont les bases
théoriques de V4.2. Il ne se limite pas aux différences depuis V4.2.
Décompresser puis copier son contenu à la racine du dépôt.
Conserver les sous-dossiers. Ne pas déposer seulement le fichier ZIP.

FICHIERS À SUPPRIMER DEPUIS V4.0 : AUCUN.

Si V4.1-preview ou V4.2-preview ont été déposées entre-temps, leurs anciens
fichiers INSTALLATION et MANIFEST peuvent être supprimés. L’ancien dossier
theory-preview/source/ peut être remplacé par celui de cette archive.
Ne pas supprimer les autres dossiers du site.

## Consulter les bases théoriques

Ouvrir theory-preview/index.html. La page est autonome et bilingue.
Elle contient les animations, les ressources et les exports SVG.
Les pages Recherche publiques ne proposent pas encore de lien vers cette
maquette. Elle porte noindex. Ce paramètre ne protège pas son accès :
elle reste accessible par son URL si elle est déposée sur GitHub Pages.

## Vérifications

Les pages index.html, research.html, fr/research.html et style.css du site
en ligne correspondaient à la base V4.0 le 25 octobre 2026.
Le correctif appliqué à cette base produit exactement l’archive complète.
Les liens et identifiants des pages Recherche sont conservés.
Les tests graphiques et numériques passent.

## Sources

Les sources sont dans theory-preview/source/.
Depuis ce dossier : python3 theory-v05/work/build.py
La page reconstruite est theory-v05/dist/index.html.
Les contrôles sont node theory-v05/work/test.js et
node magnetisme-v03/work/test.js.
Le document LECTURE-SCIENTIFIQUE.md précise les hypothèses et les crédits.
Les licences des ressources tierces restent applicables.
La version apparaît ici et dans VERSION.json.
