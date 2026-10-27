# NanoBioMat — Audit ergonomique global

Date : 26 octobre 2026. Référence : V4.23 livrée ; version publique annoncée par VERSION.json : V4.22 lors du contrôle. La V4.24 jointe ajoute la traçabilité de conception et cet audit. Elle conserve le parcours cellulaire de V4.23.

## Conclusion

La structure répond à la vocation du site : rendre la recherche visible, avec un poids comparable au nanomagnétisme et à la nanomédecine, et proposer une passerelle vers l’enseignement. Une refonte générale n’est pas nécessaire. Les améliorations prioritaires concernent l’accès rapide aux modules, le contrôle du mouvement et la lisibilité des schémas sur petits écrans.

Cette évaluation est une revue experte documentée, pas une étude auprès d’utilisateurs ni une certification WCAG/RGAA. Aucun score global chiffré n’est attribué : il masquerait les différences entre le site éditorial et les modules interactifs.

## Périmètre et méthode

- Analyse structurelle des 32 pages éditoriales FR/EN : titre principal, identifiants, images, chemins de liens et ressources locaux. Le fichier de validation Google est exclu des critères éditoriaux.
- Lecture des contenus des principales rubriques, des styles et des comportements JavaScript communs.
- Contrôle dans le navigateur : accueil FR, Recherche, Publications, fenêtre Conception, parcours cellulaire et interactions dipolaires.
- Contrôle de mise en page à 390 px dans deux cadres de navigation : accueil et module cellulaire. Il s’agit d’un viewport étroit réel, pas d’un test sur iPhone/Safari ou sur écran tactile physique.
- Test du menu étroit ; recherche de publications, absence de résultat et réinitialisation ; fermeture de Conception par Échap et retour du focus.
- Mesure de géométrie et couleurs calculées dans le navigateur. Pas de test exhaustif de tous les contrastes, lecteurs d’écran, zoom 200/400 %, liens externes ou performances sur réseau mobile.
- Sources ergonomiques consultées et appliquées : [S1–S5] ci-dessous. Les guides Nantes Université mentionnés dans le site préexistant n’ont pas été relus dans ce nouvel audit.

## Points solides à conserver

1. L’accueil nomme immédiatement « Nanomagnétisme et nanomédecine ». Les objectifs sont formulés en termes de recherche, sans classement explicite des visiteurs par public.
2. Les trois axes disposent d’un numéro, d’un titre et d’une couleur. La couleur n’est donc pas le seul repère.
3. Les 32 pages ont un seul h1. Aucun identifiant dupliqué ni image dépourvue d’attribut alt n’a été détecté. Cela ne valide pas à lui seul la qualité de chaque texte alternatif.
4. Aucun chemin local manquant n’a été détecté dans les liens et ressources HTML inspectés. La résolution de toutes les ancres et les liens externes restent hors de ce contrôle.
5. Les trois actions de chaque axe ont la même géométrie : 80 px de hauteur, texte 17 px, dans le viewport de bureau testé. Contrastes blanc/fond calculés : bleu 7,06:1 ; violet 6,05:1 ; vert 5,29:1 (arrondis). Ces combinaisons dépassent 4,5:1 ; ce résultat n’est pas un verdict sur tout le site.
6. Les filtres de publications passent de 12 résultats à zéro puis reviennent à 12 avec la réinitialisation. Le message d’absence de résultat est visible.
7. Les fenêtres utilisent dialog/showModal. Le contrôle Conception se ferme avec Échap et rend le focus au déclencheur.
8. À 390 px, le menu principal se replie et s’ouvre correctement. Le code remet le pied de page dans le flux sous 1 050 px ; il n’occupe donc pas une bande fixe sur petit écran.
9. Le parcours cellulaire dispose de six étapes, d’un arrêt automatique, d’un titre courant et de commandes de navigation. Les textes explicatifs et références restent disponibles.

## Actions prioritaires

| ID | Priorité et statut | Constat | Action proposée | Critère de réussite | Source |
|---|---|---|---|---|---|
| E01 | P1 — observé | Le module dipolaire lance le mouvement automatiquement ; le bloc de lecture/pause est masqué. | Ajouter une commande Pause/Reprendre discrète. Conserver le réglage direct de distance, sans imposer un bouton Démarrer. Respecter la préférence de réduction du mouvement. | Le visiteur peut figer et reprendre la scène sans changer de module. | S1, S2 |
| E02 | P1 — mesuré | À 390 px, le haut du schéma cellulaire est à environ 1 117 px du haut de la page. | Sur une entrée directe dans un module, amener le lecteur au titre du module ; compacter l’introduction ou prévoir un lien « Aller au module ». Conserver les trois couleurs. | Le titre et l’accès à la scène sont atteints sans franchir plusieurs blocs introductifs. Tester 390 et 320 px. | S1, S2 |
| E03 | P1 — code confirmé | Les SVG gardent une largeur minimale de 620 px sous 760 px ; ils débordent horizontalement dans leur cadre. | Repenser les vues étroites : vue d’ensemble, zoom explicite et défilement signalé. Éviter de réduire simplement les textes. | La scène reste compréhensible et manipulable au clavier et sur écran étroit. Le défilement 2D peut être justifié pour un diagramme ; il ne constitue pas automatiquement une non-conformité. | S1 |
| E04 | P2 — observé | Le menu de bureau présente 12 destinations au même niveau. Il reste lisible mais demande un balayage important. | Conserver l’emplacement demandé pour Espace équipe. Évaluer des regroupements de rubriques secondaires seulement après validation éditoriale. | Un visiteur trouve Recherche, Publications et Contact rapidement lors d’un essai de tâches. | S2 |
| E05 | P2 — observé | Le texte de nuances biologiques se répète sous chaque étape cellulaire, en plus des encarts. | Conserver une phrase d’explication par étape ; déplacer le contexte commun dans un encart dépliable. Garder les informations scientifiques et les références. | Une seule idée principale est immédiatement lisible sous chaque scène. | S2 |
| E06 | P2 — mesuré | Sur bureau, en-tête et pied fixes occupent environ 62 + 85 px. | Conserver le principe demandé. Vérifier les ancres, le focus et les écrans peu hauts ; compacter les éléments secondaires si nécessaire. | Aucun titre ou contrôle focalisé n’est caché par une barre, notamment à fort zoom. | S1 |
| E07 | P2 — mesure de fichiers | L’application théorique est un HTML d’environ 1,63 Mo non compressé ; l’illustration MAGNETIMA fait 1,48 Mo. | Mesurer le chargement sur réseau limité. Prévoir formats et tailles d’images adaptés ; envisager un chargement différé des contenus théoriques secondaires. | Comparer avant/après avec les mêmes conditions. Ne pas confondre poids du fichier et lenteur réelle. | S5 |
| E08 | P2 — appréciation experte | Les trois boutons de chaque axe sont cohérents mais tous très dominants visuellement. | Conserver leurs dimensions et leur aspect homogènes, conformément à la préférence exprimée. Tester une hauteur et une densité légèrement moindres si besoin. | La cohérence demeure ; les boutons ne concurrencent plus les explications. Pas de règle imposant une taille universelle. | S3 |
| E09 | P2 — contenu observé | Espace équipe mène à une page « en préparation ». | Maintenir un état explicite et éviter tout contrôle qui suggère une connexion déjà opérationnelle. | Le visiteur comprend immédiatement que les services privés ne sont pas ouverts. | S2 |
| E10 | P3 — à tester | Les objectifs chercheurs/étudiants/public sont couverts, mais aucun test utilisateur n’a été réalisé ici. | Organiser trois tâches courtes : trouver un équipement et un contact ; comprendre un mécanisme ; retrouver une publication d’un axe. | Observer les erreurs et hésitations, puis ajuster à partir des résultats. | S2 |

P1 : traiter en premier. P2 : amélioration utile. P3 : consolidation. Les priorités indiquent un impact attendu, pas une non-conformité réglementaire automatiquement établie.

## Revue par rubrique

| Rubrique | Appréciation et suite recommandée |
|---|---|
| Accueil | Objectif clair, texte raisonnablement court, recherche mise en avant. Sur mobile, le premier accès à Recherche est visible avant l’image. Préserver cet ordre. |
| Recherche | Trois axes et actions homogènes. Le passage vers les bases théoriques doit arriver au contenu concerné sans détour visuel. |
| Bases théoriques | Contenu riche, références et étapes utiles. Priorités E01–E03 et E05. Contrôler aussi l’ordre du focus après changement de module et les annonces de progression, sans lecture vocale à chaque image. |
| Projets | Résumés brefs et liens vers les financeurs. Harmoniser la façon d’annoncer les documents PDF et les pages institutionnelles. Les liens source doivent rester explicites. |
| Équipe / collaborations | Informations de personnes et partenaires accessibles. Vérifier régulièrement les statuts et éviter les répétitions de coordonnées ; cet audit ne vérifie pas leur actualité administrative. |
| Équipements | Photos et agrandissements cohérents avec le but de collaboration. Garder la distinction matériel local / plateforme partenaire et les légendes techniques. |
| Publications | Recherche, filtres et DOI utiles. Conserver les groupes par axe et le lien HAL pour le corpus plus large. Le nombre de résultats est explicite. |
| Vie du laboratoire | Actualités et RSS compréhensibles. Maintenir les catégories et un titre d’action explicite pour la copie du flux. La fréquence des nouvelles est une décision éditoriale. |
| Enseignement | Bonne passerelle vers les deux sites de cours. Conserver l’indication de langue et de niveau. |
| Médiation | L’atelier scolaire est clairement identifié. Les contenus grand public sur magnétisme/nanomédecine peuvent être enrichis progressivement ; ne pas afficher des parcours inexistants. |
| Contact | Coordonnées et profils académiques directement accessibles. La fenêtre Conception fonctionne au clavier dans le cas testé. |
| Espace équipe | État préparatoire lisible. Ne pas faire passer cette page pour un intranet opérationnel. |

## Références de conception et traçabilité

- **S1 — W3C, WCAG 2.2 Quick Reference.** https://www.w3.org/WAI/WCAG22/quickref/ — repères utilisés : contraste, redistribution du contenu, clavier, mouvement, focus non masqué, taille des cibles. Le minimum 24 × 24 CSS px comporte des exceptions ; 44 px est un objectif renforcé, pas une obligation universelle AA.
- **S2 — Nielsen Norman Group, 10 Usability Heuristics.** https://www.nngroup.com/articles/ten-usability-heuristics/ — état visible, contrôle utilisateur, cohérence, reconnaissance et sobriété.
- **S3 — GOV.UK Design System, Button.** https://design-system.service.gov.uk/components/button/ — libellés d’action et hiérarchie des actions. Il s’agit de conseils de conception, pas d’une charte graphique à reproduire.
- **S4 — W3C WAI, Dialog (Modal) Pattern.** https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/ — entrée du focus, Échap et retour au déclencheur.
- **S5 — web.dev, Web Vitals.** https://web.dev/articles/vitals — chargement, réactivité et stabilité visuelle. Aucun résultat LCP/INP/CLS de terrain n’a été mesuré ici ; aucun score Lighthouse n’est revendiqué.

Ces cinq sources ont été consultées pour ce nouvel audit. Elles sont ajoutées à la fenêtre Conception/Design sur les 32 pages éditoriales, avec leur usage. Les sources scientifiques (NovoMag, NEMAD, PDB, COD, etc.) restent dans les ressources et références des modules. Un site simplement découvert ou non exploité n’a pas à être présenté comme une référence de conception.

## Livraison et limites

V4.24 : ajout des sources de conception et du présent audit ; conservation intégrale des changements V4.23. Les recommandations E01–E10 restent à mettre en œuvre ou à tester. Cette livraison ne modifie pas la navigation ou les animations auditées.

Le correctif est cumulatif depuis V4.22, version vérifiée en ligne. Il peut aussi être appliqué à V4.23. Aucun fichier à supprimer. Aucun déploiement effectué.
