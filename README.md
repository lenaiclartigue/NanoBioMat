# NanoBioMat — V4.9

Base du correctif : V4.8, vérifiée sur le site public le 25 octobre 2026.

## Corrections scientifiques et visuelles

- Progression : moments atomiques internes, somme vectorielle, puis approximation du spin géant. Les schémas de Néel et Brown ne montrent ensuite qu’un moment par nanoparticule.
- Néel : corps fixe, moment mobile. Brown : corps et moment tournent ensemble. La vitesse d’animation reste illustrative.
- Première aimantation : champ porté jusqu’à 6 HK. Au-delà de la table initiale (1,2 HK), le minimum d’énergie SW est calculé, sans écrêtage du champ. Pour les paramètres par défaut, M/Ms passe de 0,942 à 1,2 HK à 0,998 à 6 HK.
- Référence de Langevin explicitée et tracée séparément. Elle décrit l’équilibre sans anisotropie ni interactions. La distribution de taille est pondérée par le volume. Le modèle SW à deux états n’est pas une solution thermique exacte, notamment à faible barrière.
- Équations composées en LaTeX avec KaTeX 0.16.22 puis incorporées en MathML. Aucun CDN ni connexion requis. Sources LaTeX : theory-preview/source/theory-v05/work/equations.tex.json. Les chaînes MathML sont intégrées aux fichiers JS/HTML.
- Cellule : invagination, fermeture, maturation du compartiment porteur, fusion lysosomale. Douze particules restent dans la lumière du compartiment. Elles se dispersent ensuite vers la périphérie avant leur érosion.
- La marginalisation concerne ici la périphérie lysosomale. La proximité de ferritine chargée en fer s’appuie sur les figures 5–7 de Lartigue et al., ACS Nano 2013, 7, 3939–3952, DOI 10.1021/nn305719y. Le transfert local est une proposition mécanistique, représentée en pointillé. Aucun mécanisme d’arrivée de l’apoferritine n’est inventé.
- Versions française et anglaise actualisées. Schémas SVG régénérés.

## Installation

Décompresser le correctif V4.8 vers V4.9. Copier son contenu à la racine du dépôt GitHub en conservant les sous-dossiers et en remplaçant les fichiers homonymes.
Aucun fichier fonctionnel à supprimer.
Nettoyage facultatif : INSTALLATION-V4.8.txt et MANIFEST-V4.8.json.
Le correctif contient uniquement les fichiers ajoutés ou modifiés. L’archive complète sert à l’archivage.
Aucun déploiement effectué par l’assistant.

## Vérifications

Depuis theory-preview/source/ :
python3 theory-v05/work/build.py
node theory-v05/work/test.js
node theory-v05/work/test-playback.js
node magnetisme-v03/work/test.js
node magnetisme-v03/work/test-saturation.js

140 états graphiques FR/EN ; 40 cas lecture/pause/remise à zéro ; régression sur la progression macrospin et le confinement des 12 particules ; limites de Langevin, saturation SW, symétrie en champ et pondération en volume.
Contrôles navigateur : Néel/Brown et équations, invagination, marginalisation et ferritine, première aimantation en anglais (500 mT, M/Ms = 0,998 aux paramètres par défaut).
Les schémas sont des illustrations de mécanismes. Ils ne constituent ni des trajectoires calculées ni des reconstructions atomistiques.

Pour publier après reconstruction : copier theory-v05/dist/index.html vers theory-preview/index.html. Le modèle numérique intégré est aussi fourni dans theory-preview/measurements.html et source/magnetisme-v03/dist/index.html.
