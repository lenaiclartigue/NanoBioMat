# NanoBioMat — V4.3-preview : lecture scientifique

25 octobre 2026. Version FR/EN à relire ensemble avant mise en avant publique.

## Organisation

Les 20 modules suivent les trois axes de Recherche : Particules, Assemblages,
Interfaces biologiques. Le volet « Ressources et outils » rassemble 25 fiches
filtrables par axe, type et mot-clé, avec liens vers les sources.
Les pages publiques de V4.0 ne sont pas modifiées. La maquette se trouve dans
theory-preview/index.html. Elle porte noindex, qui ne constitue pas un contrôle
d'accès si elle est déposée sur GitHub Pages.

## Vectorisation et fidélité

Les 14 scènes hors protocoles numériques sont désormais vectorielles, avec
28 exports SVG statiques FR/EN. Les six modules de courbes utilisent également
des tracés SVG calculés. Aucun PNG/JPEG n'est embarqué dans la page autonome.
Les SVG exportés sont des instantanés ; les animations sont dans la page HTML.

La fidélité n'a pas le même sens pour toutes les figures :

- Nanoprécipitation : géométrie du mélangeur CIJ de V4.0 conservée ; cinq
  petits remplissages ou vignettes matriciels remplacés par des tracés SVG.
  Han et al., DOI 10.1002/jps.23259, et Johnson/Prud'homme,
  DOI 10.1071/CH03115, sont cités. L'ajout des IONPs décrit notre formulation,
  pas celle de Han.
- Macrospin : sphère redessinée ; deux sous-réseaux antiparallèles tournent
  ensemble. Représentation pédagogique du ferrimagnétisme, sans positions
  cristallographiques ni rapport stœchiométrique déduit des flèches.
- IRM T1/T2 et relaxivité : adaptations vectorielles traduites des figures 2
  et 3 de Lartigue, Coupeau, Lesault, Nanomaterials 2020, 10, 28,
  DOI 10.3390/nano10010028, CC BY 4.0. Courbes recalculées ; trajectoires
  d'eau illustratives, pas une simulation quantitative de diffusion.
- Cellule : composition du parcours endolysosomal reprise, avec membrane,
  noyau, réticulum, Golgi, mitochondries, compartiments et vésicules.
  Recomposition scientifique, pas copie géométrique exacte de l'HDR.
- Photothermie : conversion générique absorption → relaxation non radiative →
  chaleur. Aucun mécanisme plasmonique de l'or n'est attribué aux IONPs.
- Fonctionnalisation : fonctions et revêtement illustrés sans cinétique
  expérimentale inventée.

Les proportions entre cellule, nanoparticule et protéines sont pédagogiques.
La comparaison nanoframboises/nanogrenades reste exclue.

## Couronne : pourquoi ces protéines ?

Sélection fondée sur des travaux spécifiques aux SPIONs :

- Mekseriwattana et al., ACS Appl. Nano Mater. 2023, 6, 13952–13964,
  https://doi.org/10.1021/acsanm.3c01767 : sérum humain à 10 % dans le DMEM,
  particules nues, citrate et riboflavine–citrate ; tableaux protéomiques.
  ApoE, ApoA-I, chaînes d'immunoglobulines, PF4 et albumine motivent le panel.
  Les emPAI ne sont pas convertis en pourcentages de couverture.
- Vogt et al., PLoS One 2015, 10, e0129008,
  https://doi.org/10.1371/journal.pone.0129008 : plasma humain et effet du
  revêtement silice/dextran. Le fibrinogène n'apparaît que dans la vue plasma.
- Monopoli, Åberg, Salvati, Dawson, Nat. Nanotechnol. 2012, 7, 779–786,
  https://doi.org/10.1038/nnano.2012.207 : identité biologique.

Cette sélection n'est pas un classement universel des protéines les plus
abondantes sur toutes les IONPs. Les positions et proportions du dessin
ne prédisent pas la composition de la corona de nos formulations.

Les silhouettes proviennent des coordonnées Cα de la PDB : projection
orthographique après analyse en composantes principales, profondeur traduite
par la couleur. Le rayon graphique des résidus est un choix de représentation,
pas une surface moléculaire atomistique. Les structures ne donnent pas leur
conformation adsorbée sur une nanoparticule.

| Protéine | Entrée PDB | Sélection et limites |
|---|---|---|
| Albumine humaine | 1AO6 | chaîne A |
| ApoE3 | 2L7B | chaîne A, modèle RMN 1 ; variant monomérique à cinq substitutions |
| IgG | 1HZH | chaînes H/K/L/M ; anticorps humain b12, représentant architectural, pas identité de l'anticorps mesuré dans la corona |
| ApoA-I | 8VXJ | chaîne C ; domaine N-terminal résolu seulement ; Fab et parties non résolues exclus |
| PF4 | 1RHP | chaînes A/B/C/D, tétramère recombinant |
| Fibrinogène | 3GHG | chaînes A–F ; autres copies cristallines, ligands et domaines non résolus exclus |

Liens : https://www.rcsb.org/structure/1AO6 ;
https://www.rcsb.org/structure/2L7B ;
https://www.rcsb.org/structure/1HZH ;
https://www.rcsb.org/structure/8VXJ ;
https://www.rcsb.org/structure/1RHP ;
https://www.rcsb.org/structure/3GHG .
Les identifiants, chaînes et dimensions projetées sont conservés dans
protein-provenance.json. Les coordonnées source et le script sont archivés.
Les références structurales sont accessibles depuis chaque entrée PDB.

## Parcours intracellulaire

Rink et al., Cell 2005, DOI 10.1016/j.cell.2005.06.043, pour la maturation ;
Lartigue et al., ACS Nano 2013, DOI 10.1021/nn305719y, pour les observations
de devenir intracellulaire et dégradation. La redistribution périphérique
lysosomale dépend du système ; ce n'est pas une étape universelle de l'endocytose.
Le transfert vers la ferritine reste symbolique.

BioNumbers BNID 112585 :
https://bionumbers.hms.harvard.edu/bionumber.aspx?id=112585&org=&trm=membrane&ver=3
donne un repère de 3–4 nm pour une bicouche lipidique dans sa source,
Evans et Needham, J. Phys. Chem. 1987, DOI 10.1021/j100300a003.
Ce repère ne fixe pas une épaisseur universelle de membrane plasmique.

## Bases et outils

Les liens distinguent définitions (IUPAC), tables compilées (CRC), constantes
(NIST/CODATA), structures cristallines (COD/ICSD), diffraction de référence
(ICDD), structures magnétiques (MAGNDATA), mesures (MagIC), calculs
(Materials Project), structures biologiques (PDB) et ordres de grandeur
(BioNumbers). Les fiches sous licence CRC/ICSD/ICDD n'ont pas été utilisées
comme si leur contenu intégral avait été consulté.

MagnetoPy, FORCsensei, Stoner et SciPy sont des outils externes, avec leurs
propres domaines de validité. Les courbes de la maquette restent des modèles
pédagogiques, sans ajustement de données expérimentales.

Les six exemples industriels sont une sélection du travail bibliographique
IONP de juillet 2026, chapitres entreprises et translation, revérifiée sur les
pages officielles liées le 25 octobre 2026. Ils ne constituent ni un inventaire
exhaustif du marché, ni une recommandation commerciale. Le statut est
attaché au produit, à l'indication et au territoire, pas à la famille IONP.
La revue de travail complète n'est pas publiée dans cette archive web.

## Validation

140 états graphiques contrôlés en FR/EN ; 28 SVG valides sans image matricielle.
Contrôle des identités physiques simples (Néel, T1/T2, dipôles).
Les modèles numériques préexistants sont documentés dans MODELES-MAGNETIQUES.md.
Navigation, recherche MAGNDATA et changement de langue vérifiés dans le
navigateur ; vues agrandies protéines et cellule inspectées.

## Crédits et réutilisation

Conception scientifique et sources HDR/cours : Lénaïc Lartigue.
Les figures adaptées de Nanomaterials conservent leur attribution et la
licence CC BY 4.0 : https://creativecommons.org/licenses/by/4.0/
Les données et ressources tierces gardent leurs conditions propres ; la
licence générale du site ne se substitue pas à celles-ci.
Pour une réutilisation scientifique, citer l'entrée PDB et sa publication,
ainsi que les articles ayant motivé la sélection des protéines.

## Révision rédactionnelle V4.3-preview

Les textes français et anglais utilisent des phrases déclaratives courtes. Les introductions, étapes, limites et fiches de ressources ont été révisées. Les pages publiques Recherche ont également été réécrites. Les schémas, les références et les calculs sont conservés. Les 140 états graphiques et les tests numériques passent.


## V4.4

Les bases theoriques sont maintenant accessibles depuis chacun des trois axes de Recherche. La navigation utilise un code couleur constant. Les modeles et leurs limites restent inchanges.
