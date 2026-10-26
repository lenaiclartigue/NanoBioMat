# Espace équipe — préparation fonctionnelle

État : page d’entrée publique de préparation uniquement. Ni authentification ni base de données activées.

## Architecture proposée
Le site public conserve sa fonction de vitrine. Le lien Espace équipe conduira à une application authentifiée, hébergée séparément. Privilégier une solution institutionnelle et l’identité Nantes Université si elles sont disponibles.
Un masquage de lien, une page noindex ou un mot de passe JavaScript ne protège pas les données. Le serveur devra contrôler chaque accès.

## Premier périmètre
1. Inventaire : produit, identifiant CAS si applicable, fournisseur/référence, lot, quantité/unité, emplacement, responsable, date d’ouverture, échéance, lien/document FDS. Historique des mouvements et corrections.
2. Suite Nano : choisir un module, importer des données, régler les paramètres, lancer un calcul, consulter et exporter le résultat. Associer à chaque résultat la version du programme et les paramètres.
3. Protocoles : documents versionnés, responsable, date de révision.

## Déploiement des modules Python
Conserver les modules dans un dépôt versionné. Séparer interface et fonctions scientifiques. Tester un jeu de référence avant chaque mise à jour. Les calculs longs passent dans une file de travaux, avec limites de ressources et isolation. Ne pas accepter du code Python arbitraire depuis le navigateur dans une première version.
Chaque résultat conserve la version du code et des dépendances. Une nouvelle version ne réécrit pas les résultats archivés.

## Accès et pérennité
Rôles lecteur, contributeur, administrateur ; comptes individuels. Sauvegardes automatiques et restauration testée. Exports de l’inventaire et des résultats pour éviter une dépendance à l’application.
Aucune donnée interne ne doit être placée dans le dépôt public du site.

## À réunir pour construire
- L’offre d’hébergement/authentification disponible auprès de l’établissement.
- La version source actuelle de Suite Nano, ses dépendances et un jeu de données de démonstration.
- La structure de l’inventaire existant, avec un exemple fictif ou anonymisé.
- Les membres/rôles souhaités et les besoins de stockage/calcul.
