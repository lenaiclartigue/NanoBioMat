# NanoBioMat V4.22 — 26 octobre 2026

## Installation
Le site public est en V4.20. VERSION.json et l’index théorique ont été vérifiés ; cet index est identique octet par octet à la livraison V4.20.
Le correctif est cumulatif V4.20 → V4.22 : il comprend V4.21. Décompresser et déposer le contenu à la racine du dépôt GitHub, en conservant les sous-dossiers et en remplaçant les homonymes. Ne pas déposer le ZIP lui-même comme seul fichier.
Aucun fichier fonctionnel à supprimer manuellement. Les anciennes notices INSTALLATION-V*.txt et MANIFEST-V*.json peuvent être retirées facultativement. Les anciens rapports d’audit peuvent être conservés pour la traçabilité.
L’archive complète conserve les sources et tous les fichiers du site. Aucun déploiement effectué.

## Changements
- Recoupement des trois axes avec les publications ciblées des corpus IONP et nanomédecine : voir AUDIT-SCIENTIFIQUE-V4.22.md et .csv (28 points). Il ne s’agit pas d’une lecture exhaustive de tous les articles.
- Correction de l’interprétation de ΔM ; précision de la loi de relaxivité de Vuong et Sandre ; cohérence des volumes et masses dans l’hyperthermie ; équation FORC normalisée.
- Correction du devenir du fer : apoferritine en milieux citrate et acétate ; distinction FeII/FeIII.
- Exemples nanomédecine de Francia et Aliyandi, distingués des résultats IONPs de Portilla.
- Champ ZFC/FC de 0,1 mT ; distribution lognormale mieux intégrée ; modèle à barrière critique expliqué ; références Tournus–Tamion et Livesey.
- Inclus depuis V4.21 : Espace équipe / Team workspace dans le menu, après Contact et avant EN/FR sur écran large, ainsi que les corrections Ashby/Tenzer/Hirsch/Portilla.

## Contrôles
21 modules FR/EN, références, équations MathML ; 16 scénarios lecture/pause/réinitialisation ; 8 vues des modèles magnétiques ; interactions à distance variable ; dissolution/cages de ferritine. Tests numériques des limites de Langevin, de la pondération lognormale et des cas SW à 0°, 45°, 90° et axes aléatoires. Contrôle visuel de la page de relaxivité dans le navigateur.
La distribution étendue conserve une très faible fraction de grands objets bloqués à 600 K dans le cas médian 14 nm : convergence ZFC/FC à 0,017 % près. Pour 10 nm, les deux branches coïncident à haute température. La pente analytique faible champ de la lognormale est retrouvée à 0,065 % près.

## Points ouverts
ALF-II : formulation exacte à identifier. Espace équipe : services privés non activés. Les animations illustrent des mécanismes ; elles ne constituent pas une calibration expérimentale des cinétiques.

## Reconstruction
Depuis theory-preview/source : python theory-v05/work/build.py ; copier theory-v05/dist/index.html vers theory-preview/index.html.
