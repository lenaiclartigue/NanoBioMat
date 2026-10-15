# Simple Analytics — intégration du 15 octobre 2026

## Fonctionnement

Ajout demandé par l’utilisateur. `site/analytics.js` charge le script officiel de manière asynchrone, exclusivement sur `https://lenaiclartigue.github.io/NanoBioMat/` et les dix pages prévues. Origine HTTPS, préfixe et nom de page sont vérifiés avant tout chargement tiers. Les fichiers locaux, serveurs locaux, prévisualisations, `/NanoBioMat-test/` et pages non répertoriées sont exclus.

Aucun framework, paquet npm, serveur, clé API ou nom de domaine fictif n’est ajouté. Le script `latest.js` est celui de l’installation standard du fournisseur et peut évoluer à distance. C’est la seule nouvelle dépendance externe de fonctionnement, justifiée par la demande de mesure d’audience. Le site demeure lisible si elle échoue.

## Paramètres

- Mesure standard des visites ; aucun événement de clic personnalisé, aucun script d’événements automatiques.
- Paramètres UTM ignorés ; aucune métadonnée scientifique ni contenu de page ajouté manuellement.
- Réglage Do Not Track par défaut conservé ; aucun contournement de bloqueur.
- Aucun pixel noscript, afin de conserver l’absence de collecte locale sans JavaScript.
- CSP autorisant uniquement les domaines de script et de collecte nécessaires.
- Politique de référent same-origin : conservation de la navigation interne, aucun chemin transmis par un lien vers un tiers.
- Mention Audience measurement dans Contact, lien Privacy en pied de page. Le fournisseur indique ne pas utiliser de cookies ; aucune certification juridique n’est déduite.

## Tableau de bord

Le domaine attendu est **lenaiclartigue.github.io**, comme pour les autres sites éventuellement suivis sur ce domaine. Les pages de recherche se distinguent par **`/NanoBioMat/…`**. Utiliser les filtres de pages pour consulter ce trafic. Cette intégration ne modifie aucun autre site.

L’absence de visite après consultation locale ou sur le dépôt de test est normale : le suivi y est volontairement inactif. Ne pas élargir le réglage à toutes les adresses pour débloquer un test. Les constantes de destination sont dans `analytics.js`.

Après publication autorisée, vérifier le domaine du compte, consulter une page publique puis contrôler la réception. Un bloqueur ou Do Not Track peut empêcher la comptabilisation. Aucun accès au compte ou test réel de collecte n’a été effectué ici ; seule la décision du chargeur local a été testée par simulation.

## Sources officielles consultées

- [Script et intégration JavaScript](https://docs.simpleanalytics.com/script)
- [CSP](https://docs.simpleanalytics.com/csp)
- [Exclusion de métriques](https://docs.simpleanalytics.com/ignore-metrics)
- [Collecte](https://docs.simpleanalytics.com/what-we-collect)
- [Do Not Track](https://docs.simpleanalytics.com/dnt)
- [Filtres](https://docs.simpleanalytics.com/filters)

Consultation le 15 octobre 2026. Aucune donnée non publiée incluse dans les recherches.
