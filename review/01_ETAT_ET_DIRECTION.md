# État de départ et direction — actualisation V2.1 du 15 octobre 2026

## Sources effectivement examinées

Les quatre documents demandés ont été lus avant modification. Les deux documents déposés séparément sont identiques à ceux de la passation. Les deux ZIP internes ont été ouverts, contrôlés par CRC, extraits dans des répertoires distincts et leur HTML, CSS, JavaScript et inventaire d’images examinés. Une planche des 21 images de la V1 a été examinée visuellement ; elle reste hors livraison.

| Source | SHA-256 | Fichiers |
|---|---|---:|
| Original `NanoBioMat-main.zip` | `f3db7b07b7f7ecaa5d93cd92014086cd6da58b67b444b3acdbf6aa3836b8a871` | 34 |
| Prototype `NanoBioMat-preview-complet.zip` | `43cc79c8f7233e998d10ab2b46115aaa3b149a8c409619109f5cdfa1b63936c9` | 34 |

L’original est la référence historique. La V1 comporte dix pages, un schéma SVG 2D, un calcul de Langevin, quatre étapes textuelles et une recherche dans une seule fiche de brevet. Elle ne contient ni 3D, ni calcul de pertes magnétiques, ni import HAL. Ses images sont celles de l’original, hors doublon JPG. Ces constats ont été vérifiés dans le code.

## Comparaison de sites scientifiques publics

Consultation pendant la session de reprise du 14 octobre 2026. Périmètre : pages et structure de contenu réellement obtenues par le lecteur web ; aucune mesure de performance, aucun audit visuel multi-écrans et aucun essai de leurs interactions. Les conséquences ci-dessous sont des choix de conception, pas des résultats de tests utilisateurs. Aucun contenu graphique de ces sites n’a été copié.

| Site consulté | Observation vérifiable | Conséquence proposée pour NanoBioMat |
|---|---|---|
| [Groupe de Nguyễn T. K. Thanh — Publications](https://ntk-thanh.co.uk/publications/) | Accès direct au profil Scholar et production scientifique organisée par catégories. La page contient une liste longue. | Donner des références et des accès aux profils dès Publications ; présenter une sélection statique, sans prétendre reproduire la bibliographie complète. Les filtres proposés en V2 sont retirés à la demande du 15 octobre. |
| [NABI — accueil](https://nabi.u-paris-sciences.fr/) et [People](https://nabi.u-paris-sciences.fr/people/) | Navigation explicite entre recherches, personnes, publications et actualités ; images scientifiques accompagnées de descriptions et de crédits. | Donner une place aux images de recherche et relier les thèmes à des personnes et des productions. Confirmer les crédits des images héritées avant publication. |
| [MPI of Colloids and Interfaces — Biomaterials](https://www.mpikg.mpg.de/biomaterials) | Accès distincts au programme de recherche, aux groupes, aux personnes, aux équipements et aux publications. L’arborescence institutionnelle est étendue. | Garder les dix destinations de NanoBioMat mais une navigation à un niveau ; distinguer expertise, équipements et accès par plateformes. |
| [ETH — Macromolecular Engineering Laboratory, Research](https://macro.ethz.ch/research.html) | Introduction qui relie les disciplines aux objectifs de recherche et indique les soutiens institutionnels. | Une entrée courte avant le détail ; informations de financement séparées des explications scientifiques. |

## Direction retenue pour cette copie

Le 15 octobre, l’utilisateur apprécie la nouvelle ergonomie mais demande de différer les interactions et d’ajouter Simple Analytics. Cette appréciation ne vaut pas accord de publication ni validation de tous les contenus.

Le logo NanoBioMat est conservé, avec la signature « Magnetic nanoparticles & nanomedicine ». Fond clair, bleu-vert issu de l’identité existante, quelques surfaces sombres pour orienter la lecture. Titres en Georgia, texte en Arial : polices système, sans téléchargement. Aucun défilement animé, carrousel automatique ou fond animé.

L’accueil introduit trois entrées : particules/interfaces, organisation magnétique, nanomédecine. Une micrographie existante remplace le fond illustratif. Les publications, les actualités et l’équipe deviennent des destinations explicites, sans répéter les démonstrations sur l’accueil.

Research présente maintenant les trois axes en texte et images, sans explorateur, curseur, courbe ni parcours de formulation. L’accueil oriente vers ces axes, les techniques et les publications. La navigation mobile est conservée.

Publications contient quatre références publiques et le brevet hérité, dans une liste statique chronologique. Aucun filtre, moteur de recherche ou import HAL n’est affiché. La sélection reste à valider.

## Architecture et dépendances

HTML et CSS statiques, petit script natif pour le menu mobile. Aucun framework, police distante, iframe, clé API ou API HAL. Génération locale avec la bibliothèque standard de Python ; aucun Python sur l’hébergement.

La seule nouvelle dépendance distante est Simple Analytics, explicitement demandé. Son script officiel est chargé de manière asynchrone uniquement sur les dix pages prévues de `https://lenaiclartigue.github.io/NanoBioMat/`. Les copies locales et les autres adresses, dont `/NanoBioMat-test/`, ne le chargent pas. Le site reste lisible si ce service est indisponible ou bloqué. Voir `06_SIMPLE_ANALYTICS.md`.

Le répertoire `site/` reste voisin de 2,2 Mo (taille exacte dans `STATIC_CHECKS.json`), principalement composé des images déjà optimisées. Les chemins des dix pages sont conservés. La future migration reste un transfert de fichiers statiques soumis à validation et accord explicite.
