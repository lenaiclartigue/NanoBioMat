# Tests effectivement réalisés — V2.1, 15 octobre 2026

## Contrôles de cette révision

| Contrôle | Résultat et périmètre |
|---|---|
| Génération | Dix pages produites avec la bibliothèque standard Python. |
| Syntaxe JavaScript | `node --check` passe pour `site.js` et `analytics.js`. |
| Liens et structure | Aucune cible locale ou ancre manquante ; un h1 par page ; aucun ID dupliqué ; attribut alt sur les images. |
| Export | Aucun fichier orphelin ; quinze PNG ; aucun schéma retiré, document interne, ancienne archive ou source map dans `site/`. `.nojekyll` est vide. |
| Confidentialité | Marqueurs des contenus sensibles retirés absents du HTML/CSS/JS ; aucun chunk texte/EXIF dans les PNG. Contrôle ciblé, pas certification exhaustive. |
| Retrait des modules | Aucun formulaire, champ, select, SVG scientifique ou canvas dans les pages. Ancien JavaScript supprimé. |
| Intégration | Les dix pages chargent directement uniquement `site.js` et `analytics.js`. Aucune balise HTML ne charge de ressource distante. Le script tiers est créé conditionnellement. |
| CSP | Domaines autorisés limités aux deux domaines nécessaires de Simple Analytics ; aucun unsafe-inline ou unsafe-eval. Vérification textuelle, pas application navigateur. |
| Logique | Huit groupes passent dans un DOM minimal simulé, avec le vrai JavaScript local. Voir `NAVIGATION_ANALYTICS_CHECKS.json`. |

Les huit groupes couvrent : menu sur dix pages ; ouverture/Échap/focus ; fermeture sur lien et changement de largeur simulé ; navigation et cinq fiches présentes sans JavaScript ; chargement asynchrone sur les dix URL publiques et l’accueil ; treize adresses exclues ; absence de double insertion ; impossibilité d’activer la collecte par paramètres d’URL locale ou de test.

Adresses exclues testées : fichier local, localhost, bouclage IPv4/IPv6, prévisualisation, `/NanoBioMat-test/`, `/NanoBioMat-test/site/`, autre site du même domaine, HTTP, port non standard, pages non répertoriées. Les tests vérifient la décision locale de créer le script et ses attributs. **Le script du fournisseur n’a pas été exécuté, aucune visite fictive n’a été envoyée et la réception dans le compte n’a pas été testée.**

## Contrôle complémentaire

Les quinze images et sept fichiers de contenu sont identiques octet par octet à la V2. Accolades CSS équilibrées. La tentative de parsing CSS par tinycss2 a échoué car le module n’est pas installé ; aucune dépendance ajoutée et aucun parsing CSS complet revendiqué. Voir `ADDITIONAL_CHECKS.json`.

## Limites navigateur

Aucun test dans Chromium, Firefox, Edge ou Safari pour cette révision. L’environnement géré ne fournit pas la capacité de contrôle navigateur requise par le workflow Sites ; aucun serveur de prévisualisation n’a été lancé. Le blocage de V2 n’a pas été contourné.

Restent à tester : affichage 360/768/1440 px, zoom 200 %, débordements, focus réel, clavier, lecteur d’écran, tactile, console/réseau, file://, serveur local, sous-répertoire, mode sans JavaScript, application de la CSP et collecte réelle après publication autorisée.

## Protocole futur

1. Ouvrir les dix pages localement avec et sans JavaScript ; vérifier images, liens, bibliographie et menu.
2. Contrôler les trois largeurs, zoom, focus, Échap et lien d’évitement. Les modules retirés ne doivent laisser ni bouton ni espace réservé.
3. Contrôler dans Réseau l’absence de requête Simple Analytics en local et sur `/NanoBioMat-test/`.
4. Après accord de publication, vérifier URL finales, chargement du script, requête de collecte et réception dans le compte. Le site doit rester utilisable si le service est bloqué.
5. Revoir les liens externes : les lectures de V2 étaient partielles et ne constituent pas un audit actuel.

## Héritage

Les deux ZIP avaient été ouverts et comparés en V2 (`SOURCE_COMPARISON.json`). Les quinze PNG assainis sont repris à l’identique. Le rapport de contraste de la palette (`CONTRAST_CHECKS.json`) est hérité et n’a pas été recalculé ; ce n’est pas un audit navigateur. Les anciens tests des modules retirés ne sont plus livrés.
