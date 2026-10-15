# Validations restantes et migration future

## Décisions éditoriales

- [x] Conserver la nouvelle ergonomie, appréciée par l’utilisateur le 15 octobre ; différer les modules interactifs.
- [x] Préparer Simple Analytics, demandé le 15 octobre.
- [ ] Valider le rendu navigateur de cette révision et la réception réelle d’une visite après une publication autorisée.
- [ ] Autoriser explicitement ou modifier la phrase minimale : « MAGNETIMA is an ANR-funded research project in magnetic nanomedicine. » Confirmer aussi la mention ANR et la date de l’annonce. Aucun accord de diffusion n’est déduit de cette copie locale.
- [ ] Confirmer les statuts, périodes et intitulés des personnes/projets, notamment Anna Hlukhaniuk. La rubrique neutre « Doctoral projects » évite une attribution prématurée de statut.
- [ ] Confirmer les reformulations prudentes des collaborations et des projets anciens. Aucun détail supprimé ne sera réintroduit automatiquement.
- [ ] Valider les quatre références proposées comme sélection et choisir d’éventuelles publications plus récentes à ajouter à partir de sources publiques.
- [ ] Confirmer la notice du brevet auprès de l’INPI si l’on souhaite en développer la présentation.
- [ ] Identifier les deux micrographies : auteur, échantillon, publication éventuelle, crédit et autorisation. Elles sont conservées pour revue locale ; elles ne sont pas validées pour diffusion.
- [ ] Confirmer les droits d’usage des portraits et logos, et décider du retour éventuel des photos de conférence après inspection de leurs diapositives.
- [ ] Préciser, si souhaité, l’accès local ou par plateforme pour chacune des techniques. Aucun instrument précis n’a été ajouté.
- [ ] Exécuter les tests navigateur bloqués, dont 360/768/1440 px, sans JavaScript, clavier, mobile, console et sous-répertoire.

## Ce qui est déjà acquis pour la copie

Les dix destinations sont conservées ; le site reste en anglais. Les archives historiques restent séparées et inchangées. Le schéma sensible, les détails de WP et les textes associés retirés ne sont pas présents dans l’export. Les images, polices et contenus sont locaux. Simple Analytics est la seule dépendance tierce, chargée exclusivement sur les URL publiques prévues. Les commandes de génération sont documentées. Aucun déploiement, aucune migration, aucun partage public et aucun push vers un dépôt distant n’ont été effectués.

## Migration — uniquement après accord explicite

Cette procédure n’a pas été exécutée. Le site en ligne n’a pas été inspecté pendant cette session. Il faut vérifier son état et sa configuration réels au moment d’agir ; l’archive historique n’en est pas une garantie.

1. Après validation éditoriale et navigateur, identifier précisément le dépôt, la branche et le dossier servis par l’hébergement existant. Ne pas changer d’hébergeur par défaut.
2. Sauvegarder la version effectivement publiée et son identifiant de commit dans un stockage privé. Les anciennes ressources éventuellement sensibles ne doivent pas être conservées dans un répertoire accessible par le web.
3. Garder le dépôt privé de travail contenant `content/`, `review/` et `tools/` séparé. Ne pas le rendre public : supprimer un fichier ne retire pas son historique Git. Préparer un export de `site/` seul et une liste exacte des fichiers à ajouter, remplacer ou supprimer. Vérifier les liens relatifs dans `/NanoBioMat/` et le fonctionnement du serveur réel.
4. Refaire le contrôle de confidentialité sur l’arbre final complet, y compris les ressources non référencées. Un déploiement qui ne fait qu’ajouter les nouveaux fichiers pourrait laisser les anciennes images accessibles ; les suppressions doivent donc être explicites.
5. Soumettre cet export concret et la liste des suppressions à l’accord de migration. Retirer `noindex,nofollow` seulement si la diffusion et l’indexation sont approuvées. Simple Analytics est autorisé dans la copie depuis le 15 octobre ; confirmer l’adresse de destination et tester son intégration après le déploiement autorisé. Aucun autre accès externe implicite.
6. Déployer la version approuvée, puis contrôler les dix pages, les liens, le menu mobile, la mesure d’audience, les ressources retirées et l’absence d’éléments internes exposés.

## Retour arrière

Préparer avant migration une version stable **assainie** ou une page institutionnelle minimale. Ne pas republier automatiquement l’ancienne archive si elle contient les ressources retirées pour confidentialité. Un retour arrière doit préserver cette contrainte, puis être contrôlé sur les URL des ressources supprimées.

L’archive originale contient des éléments sensibles. Si le site en ligne lui correspond, il peut être concerné ; cette correspondance n’a pas été vérifiée ici. Toute intervention sur le site public reste une action distincte, soumise à ton accord.
