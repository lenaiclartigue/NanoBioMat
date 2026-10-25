# NanoBioMat — V4.10

## Équipements et recherche

Schéma de nanoprécipitation retiré de Facilities / Équipements, ainsi que le texte descriptif associé au schéma. La photographie du montage, les vidéos et les références sont conservées.
Hyperthermie : seule la première photo, celle du module adiabatique en solution, reste dans Facilities. La seconde photo, montrant le module pour petit animal, est placée sous le titre de l’axe 3, Interfaces biologiques. Crédit, légende et agrandissement en fenêtre conservés. Changements en français et en anglais.

## Installation

La version publique vérifiée le 25 octobre 2026 est V4.8. Le correctif est cumulatif V4.8 vers V4.10 : il inclut les corrections V4.9 décrites ci-dessous. Il convient aussi si V4.9 vient d’être installée.
Copier le contenu du correctif à la racine du dépôt en conservant les sous-dossiers et en remplaçant les fichiers homonymes.
Aucun fichier fonctionnel à supprimer. Les images déplacées restent nécessaires.
Nettoyage facultatif : INSTALLATION-V4.8.txt, MANIFEST-V4.8.json et, s’ils existent, INSTALLATION-V4.9.txt et MANIFEST-V4.9.json.
Aucun déploiement effectué.
Les quatre pages ont été contrôlées : présence des images attendues, retrait du schéma, conservation des crédits et liens d’agrandissement, validité des chemins locaux.

## Corrections scientifiques de V4.9 conservées

- Progression : moments atomiques internes, somme vectorielle, puis approximation du spin géant. Les schémas de Néel et Brown ne montrent ensuite qu’un moment par nanoparticule.
- Néel : corps fixe, moment mobile. Brown : corps et moment tournent ensemble. La vitesse d’animation reste illustrative.
- Première aimantation : champ porté jusqu’à 6 HK. Au-delà de la table initiale (1,2 HK), le minimum d’énergie SW est calculé, sans écrêtage du champ. Pour les paramètres par défaut, M/Ms passe de 0,942 à 1,2 HK à 0,998 à 6 HK.
- Référence de Langevin explicitée et tracée séparément. Elle décrit l’équilibre sans anisotropie ni interactions. La distribution de taille est pondérée par le volume. Le modèle SW à deux états n’est pas une solution thermique exacte, notamment à faible barrière.
- Équations composées en LaTeX avec KaTeX 0.16.22 puis incorporées en MathML. Aucun CDN ni connexion requis. Sources LaTeX : theory-preview/source/theory-v05/work/equations.tex.json. Les chaînes MathML sont intégrées aux fichiers JS/HTML.
- Cellule : invagination, fermeture, maturation du compartiment porteur, fusion lysosomale. Douze particules restent dans la lumière du compartiment. Elles se dispersent ensuite vers la périphérie avant leur érosion.
- La marginalisation concerne ici la périphérie lysosomale. La proximité de ferritine chargée en fer s’appuie sur les figures 5–7 de Lartigue et al., ACS Nano 2013, 7, 3939–3952, DOI 10.1021/nn305719y. Le transfert local est une proposition mécanistique, représentée en pointillé. Aucun mécanisme d’arrivée de l’apoferritine n’est inventé.
- Versions française et anglaise actualisées. Schémas SVG régénérés.

