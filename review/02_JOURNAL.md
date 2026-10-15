# Journal des modifications — V2.1 locale, 15 octobre 2026

## Livraison courante

- Copie séparée de la V2 ; archive et répertoire V2 conservés.
- Conservation de l’identité, de la palette, des polices, de la mise en page, des images, des dix destinations et de la navigation mobile.
- Suppression complète des trois modules scientifiques de Research : perspectives, Langevin, parcours de nanoprecipitation. Suppression de leur HTML, SVG, JavaScript, génération numérique et CSS dédiés ; aucun panneau caché conservé.
- Remplacement du bandeau de l’accueil par des liens vers recherche, publications et techniques. Correction des ancres et suppression du lien à filtre thématique.
- Publications en liste chronologique statique : mêmes quatre articles et même brevet. Filtres et recherche supprimés.
- Remplacement de `interactions.js` par `site.js`, limité au menu mobile.
- Ajout de `analytics.js` sur les dix pages. Chargement asynchrone du script officiel Simple Analytics limité à l’origine HTTPS et aux dix chemins publics prévus. Aucun chargement tiers sur fichier local, serveur local, copie de test, autre site ou page non répertoriée.
- Aucun identifiant secret, suivi de clic personnalisé, pixel sans JavaScript ou contournement des bloqueurs. La collecte UTM est désactivée. Le réglage Do Not Track par défaut du fournisseur est conservé.
- Politique CSP ajustée uniquement pour le domaine des scripts et celui de collecte Simple Analytics ; ni script inline ni `unsafe-eval`. Referrer Policy réglée à `same-origin` pour préserver les référents de navigation interne et éviter de transmettre les chemins aux sites tiers.
- Ajout d’une brève mention Audience measurement dans Contact et d’un lien Privacy en pied de page.
- Ajout de `.nojekyll` pour un futur hébergement statique GitHub Pages. Aucun workflow ou service de déploiement ajouté.
- Contrôles et documentation actualisés. Aucun nouveau contenu scientifique, aucune nouvelle image, aucun instrument ou résultat ajouté. Les restrictions MAGNETIMA restent appliquées.
- Aucun accès au compte Simple Analytics ni au dépôt GitHub ; aucune publication ni migration effectuée par l’assistant.

## Historique de la V2 — remplacé pour les interactions et l’analytique

Les lignes suivantes décrivent la livraison précédente et sa provenance, pas les fonctions de la V2.1.


## Assainissement

- Retrait physique du schéma MAGNETIMA, de toutes ses références, des panneaux WP et de leur logique JavaScript.
- Remplacement des annonces et de la fiche du projet par une information institutionnelle minimale, sans reprise des détails retirés. Phrase proposée : « MAGNETIMA is an ANR-funded research project in magnetic nanomedicine. » Accord requis avant diffusion, y compris pour la date de l’annonce.
- Généralisation de passages associés dans Research, Collaborations, Facilities, Team et SUPERFERATITE ; aucune précision issue d’autres conversations ajoutée.
- Remplacement de l’explorateur composite de la V1 par un dessin comparant seulement des particules séparées et un regroupement. Aucun assemblage de composants fonctionnels ni architecture de projet.
- Exclusion des deux photographies de conférence comportant des diapositives lisibles, en attendant validation de leurs contenus.
- Exclusion du fond illustratif, de l’image d’annonce du site et de la première page scannée du brevet. Le brevet et les actualités utiles sont conservés sous forme textuelle.
- Réencodage des quinze images conservées sans métadonnées EXIF/XMP/texte ; limitation de dimensions pour l’affichage. Pas de modification scientifique des pixels des micrographies autre que le redimensionnement de `ionp-synthesis.png` de 1280×1024 à 960×768 ; `nanoassemblies-sem.png` conserve ses dimensions 768×726 et ses pixels.
- Aucune archive ancienne, sauvegarde, source sensible, capture interne ou histoire Git dans le paquet livré.

## Pages

| Page | Évolution |
|---|---|
| Home | Nouvelle hiérarchie, trois entrées de recherche, micrographie avec légende, sélection de publications et actualités, liens vers les interactions. |
| Research | Textes historiques utiles conservés ou généralisés ; trois perspectives ; Langevin en SVG vectoriel plutôt que Canvas ; variables, hypothèses, valeurs et remise à zéro ; formulation illustrée sans protocole. |
| Projects | Sept fiches conservées, données centralisées ; MAGNETIMA réduit au minimum proposé ; périodes historiques restantes sans attribution automatique de statut courant. |
| Team | Personnes, portraits et périodes conservés. « Current PhD students » devient « Doctoral projects » : aucun nouveau statut attribué à Anna. Un intitulé de projet ancien est généralisé, à valider. |
| Collaborations | Sept collaborations conservées, descriptions de certains axes rendues générales ; liens institutionnels conservés. |
| Facilities | Techniques existantes conservées ; rappel du mélange d’accès locaux et par plateformes. Aucun achat, marque ou nouvel instrument ajouté. |
| Publications | Quatre références publiques ajoutées, brevet conservé, vrai lien HAL, filtres et recherche combinables ; cinq fiches au total. |
| Teaching | Huit enseignements et leurs niveaux conservés, habillage harmonisé. |
| News | Quatre actualités conservées ; MAGNETIMA minimal ; photos de diapositives exclues ; formulations promotionnelles retirées. |
| Contact | Coordonnées et identifiants hérités conservés ; lien HAL remplacé par le CV HAL retrouvé. |

## Comportements et entretien

Menu amélioré progressivement : les liens existent avant JavaScript ; fermeture avec Échap et retour du focus prévu dans le code. Boutons de sélection avec état pressé ; séquence avec précédent/suivant et bornes ; filtre insensible aux accents. Les panneaux et la bibliographie sont tous présents sans JavaScript. Aucun résultat important ne dépend d’un survol.

Les images ont des dimensions dans le HTML et un chargement différé hors éléments prioritaires. Le tracé de Langevin est vectoriel et un tableau fournit les valeurs aux deux bornes et à zéro. La préférence de mouvement réduit désactive le défilement fluide. Une politique de ressources bloque les connexions de scripts et ressources tierces ; elle ne remplace pas une authentification.

Le générateur centralise les éléments communs aux dix pages, et les fiches Projects/Publications utilisent des JSON. Tous les fichiers livrés sont utilisables pour reprendre le travail sans les archives historiques. Les modifications ont été enregistrées dans des commits locaux ; aucun push n’a été effectué.
