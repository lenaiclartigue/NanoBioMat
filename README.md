# NanoBioMat V4.20 — 26 octobre 2026

Correctif cumulatif depuis V4.18, encore en ligne lors de la vérification de VERSION.json et de l’index théorique (comparaison exacte). Il inclut les corrections V4.19. Convient aussi si V4.19 a été déposée depuis cette vérification.
Copier les fichiers à la racine du dépôt, conserver les sous-dossiers, remplacer les fichiers homonymes. Aucun fichier fonctionnel à supprimer. Notices INSTALLATION/MANIFEST V4.18 et V4.19 : suppression facultative.

## Contenu FR / EN
- 21 modules : 9 Particules, 3 Assemblages, 9 Interfaces biologiques.
- Encarts : titre Publications de référence / Reference publications ; auteurs, revue, année, volume, pages/article, puis DOI cliquable. Les sources de données restent identifiables.
- Cartographie du plasma : huit plages de concentrations tirées de Schenk et al., tableau 3, converties de g/mL en g/L. Barres à échelle linéaire 0–52 g/L, non des pourcentages. IgG sériques distinguées des valeurs plasmatiques. La carte est une sélection, non un protéome complet.
- Couronne : albumine/immunoglobulines, ApoA-I/transferrine, complément, fibrinogène. Distinction abondance, affinité d’équilibre, enrichissement après séparation et temps de résidence. Pas de classement universel ni de Kd inventé.
- Taille, forme et charge : taille du cœur/hydrodynamique, enveloppement membranaire, potentiel zêta dépendant du milieu, couronne, unités de dose et effets conjoints. Références Chithrani 2006, Champion 2006, Salvati 2013 et Ashby 2014.
- Réponses cellulaires après Devenir intracellulaire : adaptation/NRF2, ROS, Fenton en MathML, peroxydation lipidique/GPX4/ferroptose, macrophages et niveaux systémique/cellulaire.
- Encarts u-SBF et ALF : objectif du milieu, composition ionique ou ligands, importance de la recette et du protocole.
- Point non finalisé : la désignation exacte ALF-II n’a pas pu être rattachée avec certitude à une recette dans les sources consultées. Le contenu public décrit ALF sans lui attribuer le suffixe II. Il faut le protocole ou la référence de l’équipe pour compléter ce point.
- Lien discret Espace équipe / Team workspace dans le pied de page des pages standard. Page de préparation FR/EN en noindex. Aucun inventaire réel, formulaire de connexion ou calcul serveur n’est activé.

## Bibliographie ajoutée
Schenk et al. 2008 : 10.1186/1755-8794-1-41.
Ashby et al. 2014 : 10.1021/am503909q (sérum humain, surfaces et tailles documentées).
Chen et al. 2017 : 10.1038/nnano.2016.269.
Jacqmarcq et al. 2024 : 10.1038/s41467-024-49480-x.
Itoh et al. 1997 : 10.1006/bbrc.1997.6943.
Fenton 1894 : 10.1039/CT8946500899.
Dixon et al. 2012 : 10.1016/j.cell.2012.03.042.
Yang et al. 2014 : 10.1016/j.cell.2013.12.010.
Zanganeh et al. 2016 : 10.1038/nnano.2016.168.
Kokubo et Takadama 2006 : 10.1016/j.biomaterials.2006.01.017.
Hillwalker et Anderson 2014 : 10.1016/j.envpol.2013.10.006.
Mastrangelo et Di Pisa 2026 : 10.1002/1873-3468.70302 (citation complétée).
Consultation complémentaire u-SBF : Marques et al. 2011, 10.14227/DT180311P15. Ne pas confondre les variantes SBF, r-SBF et u-SBF.

## Vérifications
Tests V4.19, V4.20 et 16 scénarios lecture/pause/reset réussis. Construction autonome. Contrôle navigateur des nouveaux modules, des références d’encarts en anglais et du pied de page/page Espace équipe en français.
Reconstruction : depuis theory-preview/source, python theory-v05/work/build.py ; copier theory-v05/dist/index.html vers theory-preview/index.html.
La page de préparation n’est pas un intranet sécurisé. Voir PREPARATION-ESPACE-EQUIPE.md.
