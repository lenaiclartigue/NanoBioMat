// Selection reviewed against official resource pages, 2026-10-25.
const RESOURCE_DATA=[
  [
    "NanoBioMat · IONP data",
    "../ionp-data.html",
    "measurements",
    [
      0,
      1,
      2
    ],
    "Fiches de grandeurs, unités, conditions et références. Première sélection documentée.",
    "Quantity records, units, conditions and references. Initial documented selection.",
    "FR / EN",
    "FR / EN"
  ],
  [
    "IUPAC · Gold Book",
    "https://goldbook.iupac.org/",
    "definitions",
    [
      0,
      1,
      2
    ],
    "Le Gold Book définit les termes chimiques. Chaque entrée cite sa source. Les recommandations récentes peuvent compléter ou remplacer une définition.",
    "The Gold Book defines chemical terms. Each entry cites its source. Recent recommendations may supplement or replace a definition.",
    "Accès libre",
    "Open access"
  ],
  [
    "CRC Handbook · CHEMnetBASE",
    "https://librarianresources.taylorandfrancis.com/product-info/digital-products/databases/chemnetbase/",
    "definitions",
    [
      0,
      1,
      2
    ],
    "Le CRC rassemble des constantes et des propriétés physicochimiques. Une valeur se rapporte à une édition, une table et des conditions. Les tables sous licence n’ont pas été consultées pour cette maquette.",
    "CRC compiles physicochemical constants and properties. Each value relates to an edition, table and conditions. Licensed tables were not consulted for this draft.",
    "Abonnement institutionnel",
    "Institutional subscription"
  ],
  [
    "NIST · CODATA",
    "https://physics.nist.gov/cuu/Constants/",
    "definitions",
    [
      0,
      1,
      2
    ],
    "Le NIST fournit les constantes fondamentales et leurs incertitudes, dont kB et μB. Ces valeurs ne déterminent pas K ou Ms d’un échantillon.",
    "NIST provides fundamental constants and their uncertainties, including kB and μB. These values do not determine sample-specific K or Ms.",
    "Accès libre",
    "Open access"
  ],
  [
    "NIST · Chemistry WebBook",
    "https://webbook.nist.gov/",
    "definitions",
    [
      0,
      2
    ],
    "Composition et masse molaire des composés. La fiche Fe₃O₄ (CAS 1317-61-9) est citée dans le module sur les phases. Les constantes physiques viennent du NIST CODATA.",
    "Compound composition and molar mass. The Fe₃O₄ entry (CAS 1317-61-9) is cited in the phases module. Physical constants come from NIST CODATA.",
    "Accès libre",
    "Open access"
  ],
  [
    "Crystallography Open Database · COD",
    "https://cod.psdi.ac.uk/",
    "structures",
    [
      0
    ],
    "COD fournit des structures cristallines au format CIF. Chaque structure renvoie à une publication. Un diagramme calculé à partir d’un CIF ne constitue pas une mesure DRX.",
    "COD provides crystal structures in CIF format. Each structure links to a publication. A pattern calculated from a CIF is not an XRD measurement.",
    "Données CC0",
    "CC0 data"
  ],
  [
    "ICSD · FIZ Karlsruhe",
    "https://icsd.products.fiz-karlsruhe.de/en",
    "structures",
    [
      0
    ],
    "ICSD rassemble des structures cristallines inorganiques contrôlées. Les entrées décrivent les positions atomiques et la symétrie. Elles renvoient aux publications originales.",
    "ICSD compiles curated inorganic crystal structures. Entries describe atomic positions and symmetry. They link to the original publications.",
    "Licence",
    "Licensed access"
  ],
  [
    "ICDD · Powder Diffraction File",
    "https://www.icdd.com/pdfsearch/",
    "structures",
    [
      0
    ],
    "ICDD fournit des références de diffraction sur poudre. Ces données servent à identifier les phases. Le moteur public repère les entrées. Les données détaillées dépendent de la licence.",
    "ICDD provides powder diffraction references. These data support phase identification. Public search locates entries. Detailed data depend on the licence.",
    "Recherche publique ; base sous licence",
    "Public search; licensed database"
  ],
  [
    "MAGNDATA · Bilbao",
    "https://cryst.ehu.es/magndata/",
    "structures",
    [
      0,
      1
    ],
    "MAGNDATA décrit des structures magnétiques publiées. Les fichiers mcif contiennent les moments atomiques et les symétries. La base ne fournit pas un catalogue universel de K, Ms ou ZFC/FC pour les IONPs. Aucune valeur de moment de cette base n’est injectée dans les schémas actuels ; ceux-ci présentent le modèle de Néel.",
    "MAGNDATA describes published magnetic structures. Its mcif files contain atomic moments and symmetry. The database does not provide a universal catalogue of IONP K, Ms or ZFC/FC data. No moment value from this database is inserted into the current diagrams; they present the Néel model.",
    "Consultation publique ; export global sur inscription",
    "Public browsing; bulk export requires registration"
  ],
  [
    "MagIC · EarthRef",
    "https://earthref.org/MagIC/",
    "measurements",
    [
      0,
      1
    ],
    "MagIC rassemble des données de paléomagnétisme et de magnétisme des roches. Elles incluent des mesures d’hystérésis et de rémanence. Leur comparaison avec des IONPs exige des protocoles et des matériaux documentés.",
    "MagIC compiles paleomagnetic and rock-magnetic data. These include hysteresis and remanence measurements. Comparisons with IONPs require documented protocols and materials.",
    "Accès public",
    "Public access"
  ],
  [
    "Materials Project · Magnetic properties",
    "https://docs.materialsproject.org/methodology/materials-methodology/magnetic-properties",
    "computed",
    [
      0,
      1
    ],
    "Materials Project fournit des propriétés calculées. Les résultats dépendent de la méthode et de l’ordre magnétique supposé. Une prédiction DFT ne constitue pas une mesure sur une nanoparticule revêtue.",
    "Materials Project provides computed properties. Results depend on the method and assumed magnetic order. A DFT prediction is not a measurement on a coated nanoparticle.",
    "Documentation libre ; compte pour certains services",
    "Open documentation; account for some services"
  ],
  [
    "RCSB Protein Data Bank",
    "https://www.rcsb.org/",
    "structures",
    [
      2
    ],
    "La PDB fournit des coordonnées structurales et leurs références. Les entrées décrivent les chaînes, les assemblages et la méthode. Les protéines du module corona sont projetées depuis ces coordonnées.",
    "PDB provides structural coordinates and their references. Entries describe chains, assemblies and methods. Corona-module proteins are projected from these coordinates.",
    "Accès libre",
    "Open access"
  ],
  [
    "BioNumbers",
    "https://bionumbers.hms.harvard.edu/",
    "measurements",
    [
      2
    ],
    "BioNumbers rassemble des valeurs biologiques avec leurs références primaires. Chaque valeur possède un identifiant BNID. Son usage dépend de l’organisme, des conditions et de l’incertitude.",
    "BioNumbers compiles biological quantities with primary references. Each value has a BNID. Its use depends on organism, conditions and uncertainty.",
    "Accès libre",
    "Open access"
  ],
  [
    "MagnetoPy",
    "https://rinehartgroup.github.io/MagnetoPy/api/zfcfc/",
    "tools",
    [
      0,
      1
    ],
    "MagnetoPy importe, normalise et trace des mesures MPMS. Il complète les modules M(H) et ZFC/FC. Il ne fournit pas un ajustement universel de K et V.",
    "MagnetoPy imports, normalizes and plots MPMS measurements. It complements the M(H) and ZFC/FC modules. It does not provide a universal fit of K and V.",
    "Python · documentation",
    "Python · documentation"
  ],
  [
    "FORCsensei",
    "https://github.com/FORCaist/forcsensei",
    "tools",
    [
      1
    ],
    "FORCsensei traite des mesures FORC dans des notebooks Python. L’interprétation dépend du lissage, des incertitudes et du domaine mesuré.",
    "FORCsensei processes FORC measurements in Python notebooks. Interpretation depends on smoothing, uncertainties and the measured domain.",
    "Code et notebooks",
    "Code and notebooks"
  ],
  [
    "Stoner · fitting",
    "https://stoner-pythoncode.readthedocs.io/en/stable/analysis-fitting.html",
    "tools",
    [
      0,
      1
    ],
    "Stoner propose des modèles et des outils d’ajustement. Son nom ne garantit pas un modèle complet de Stoner–Wohlfarth pour chaque protocole.",
    "Stoner provides models and fitting tools. Its name does not imply a complete Stoner–Wohlfarth model for every protocol.",
    "Python · documentation",
    "Python · documentation"
  ],
  [
    "SciPy · least_squares",
    "https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.least_squares.html",
    "tools",
    [
      0,
      1,
      2
    ],
    "SciPy ajuste un modèle avec des bornes et des résidus pondérés. L’analyse exige des unités cohérentes et des paramètres identifiables. Un bon ajustement ne prouve pas le mécanisme.",
    "SciPy fits a model using bounds and weighted residuals. Analysis requires consistent units and identifiable parameters. A good fit does not establish the mechanism.",
    "Python · documentation",
    "Python · documentation"
  ],
  [
    "ClinicalTrials.gov",
    "https://clinicaltrials.gov/",
    "clinical",
    [
      2
    ],
    "ClinicalTrials.gov décrit les protocoles et le statut des essais. Il donne accès aux résultats déposés. L’inscription d’un essai ne constitue pas une autorisation de mise sur le marché.",
    "ClinicalTrials.gov describes trial protocols and status. It provides access to posted results. Trial registration is not marketing authorization.",
    "Registre public",
    "Public registry"
  ],
  [
    "EMA · Medicines",
    "https://www.ema.europa.eu/en/medicines",
    "clinical",
    [
      2
    ],
    "L’EMA publie ses évaluations et les documents des médicaments examinés. Les registres nationaux complètent ces informations pour les autorisations nationales.",
    "EMA publishes evaluations and documents for the medicines it assesses. National registers provide additional information on national authorizations.",
    "Source réglementaire",
    "Regulatory source"
  ],
  [
    "Drugs@FDA",
    "https://www.fda.gov/drugs/drug-approvals-and-databases/about-drugsfda",
    "clinical",
    [
      2
    ],
    "Drugs@FDA fournit les autorisations et les notices des médicaments aux États-Unis. Les dispositifs relèvent d’autres bases FDA. Une indication ne s’étend pas à toutes les applications des IONPs.",
    "Drugs@FDA provides US drug approvals and labels. Devices use other FDA databases. One indication does not extend to every IONP application.",
    "Source réglementaire",
    "Regulatory source"
  ],
  [
    "Azurity · Ferabright",
    "https://www.azurity.com/news/fda-approval-of-ferabright-for-brain-mris",
    "industry",
    [
      2
    ],
    "Ferabright utilise le ferumoxytol pour le contraste IRM cérébral. La notice FDA précise son indication et ses conditions d’utilisation. Celles-ci diffèrent des autres produits à base de ferumoxytol.",
    "Ferabright uses ferumoxytol for brain MRI contrast. Its FDA label specifies the indication and conditions of use. These differ from other ferumoxytol products.",
    "Produit · indication américaine",
    "Product · US indication",
    "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/219868s000lbl.pdf"
  ],
  [
    "Endomag · Magtrace",
    "https://www.endomag.com/en/products/magtrace/",
    "industry",
    [
      2
    ],
    "Magtrace permet la localisation magnétique du ganglion sentinelle. Le système associe un traceur et une sonde. La notice précise l’indication de Magtrace/Sentimag.",
    "Magtrace enables magnetic localization of sentinel lymph nodes. The system combines a tracer and a probe. Its label specifies the Magtrace/Sentimag indication.",
    "Produit · chirurgie guidée",
    "Product · guided surgery",
    "https://www.accessdata.fda.gov/cdrh_docs/pdf16/P160053S002D.pdf"
  ],
  [
    "Ferronova · FerroTrace",
    "https://www.ferronova.com.au/trials/",
    "industry",
    [
      2
    ],
    "FerroTrace fait l’objet d’une évaluation clinique pour le repérage ganglionnaire. La page présente les essais. Elle ne démontre pas à elle seule un bénéfice clinique comparatif.",
    "FerroTrace is under clinical evaluation for lymph-node mapping. The page presents the trials. It does not alone establish comparative clinical benefit.",
    "Développement clinique",
    "Clinical development"
  ],
  [
    "Nanotherm Therapeutics",
    "https://www.nanothermtx.com/",
    "industry",
    [
      2
    ],
    "Le système active thermiquement des nanoparticules. Le fabricant le décrit comme expérimental. Il indique que l’ancien marquage CE est interrompu.",
    "The system thermally activates nanoparticles. The manufacturer describes it as investigational. It states that the former CE marking was discontinued.",
    "Dispositif expérimental",
    "Investigational device",
    "https://clinicaltrials.gov/study/NCT06271421"
  ],
  [
    "Miltenyi Biotec · MACS",
    "https://www.miltenyibiotec.com/IN-en/support/macs-handbook/macs-technologies/cell-separation/magnetic-cell-separation.html",
    "industry",
    [
      2
    ],
    "MACS permet la séparation immunomagnétique de cellules. La documentation présente le marquage et les colonnes. Les usages autorisés dépendent du produit concerné.",
    "MACS enables immunomagnetic cell separation. Its documentation describes labeling and columns. Authorized uses depend on the specific product.",
    "Méthodes et instrumentation",
    "Methods and instrumentation"
  ],
  [
    "micromod · Particules magnétiques",
    "https://micromod.de/en/products/magnetic-particles/",
    "industry",
    [
      0,
      1,
      2
    ],
    "micromod propose des particules pour la recherche en MPI, hyperthermie et séparation. Les gammes diffèrent par leur cœur, leur revêtement et leur taille. Le catalogue ne constitue pas une autorisation clinique.",
    "micromod supplies particles for MPI, hyperthermia and separation research. Products differ in core, coating and size. The catalogue is not clinical authorization.",
    "Réactifs de recherche",
    "Research reagents"
  ],
  [
    "NovoMag",
    "https://zenodo.org/records/17399362",
    "computed",
    [
      0
    ],
    "Structures, énergies et anisotropies calculées par DFT. Base orientée vers les aimants sans terres rares. Une valeur cristalline ne remplace pas l’anisotropie effective d’une nanoparticule.",
    "Structures, energies and anisotropies calculated by DFT. Focus on rare-earth-free magnets. A crystal value does not replace nanoparticle effective anisotropy.",
    "Dépôt ouvert · version 2025",
    "Open deposit · 2025 version"
  ],
  [
    "NEMAD",
    "https://www.nature.com/articles/s41467-025-64458-z",
    "measurements",
    [
      0
    ],
    "Propriétés magnétiques extraites de publications expérimentales avec des modèles de langage. Vérifier la publication et les conditions avant de réutiliser une valeur.",
    "Magnetic properties extracted from experimental publications using language models. Check the source paper and conditions before reusing a value.",
    "Article et accès à la base",
    "Article and database access"
  ],
  [
    "caNanoLab · NCI",
    "https://dctd.cancer.gov/data-tools-biospecimens/data/nanotechnology-data-tools",
    "measurements",
    [
      2
    ],
    "Caractérisations physicochimiques, essais in vitro et in vivo et protocoles de nanomatériaux biomédicaux. La couverture dépend des formulations déposées.",
    "Physicochemical characterization, in vitro and in vivo assays, and biomedical nanomaterial protocols. Coverage depends on deposited formulations.",
    "Portail institutionnel",
    "Institutional portal"
  ],
  [
    "eNanoMapper",
    "https://www.enanomapper.net/data",
    "measurements",
    [
      2
    ],
    "Données de caractérisation et résultats biologiques et toxicologiques. Comparer les matériaux avec leur milieu, dose et durée d’exposition.",
    "Characterization data and biological and toxicological results. Compare materials together with medium, dose and exposure time.",
    "Données et documentation",
    "Data and documentation"
  ]
];
const RESOURCE_TYPES={all:["Toutes les ressources","All resources"],definitions:["Définitions et constantes","Definitions and constants"],structures:["Structures","Structures"],measurements:["Données expérimentales","Experimental data"],computed:["Données calculées","Computed data"],tools:["Outils et Python","Tools and Python"],clinical:["Essais et réglementation","Trials and regulation"],industry:["Produits et entreprises","Products and companies"]};
let resourceQuery='',resourceType='all',resourceAxis='all';
function resourceLink(url,label){if(url==='../ionp-data.html'&&lang==='fr')url='../fr/ionp-data.html';return '<a href="'+url+'" target="_blank" rel="noopener noreferrer">'+label+'</a>';}
function renderResources(){
 const i=lang==='fr'?0:1;
 $('resourceTitle').textContent=T('Ressources et outils pour travailler','Resources and tools for research');
 $('resourceBody').innerHTML='<p>'+T('Ces ressources donnent accès aux définitions, aux données et aux outils d’analyse. Chaque fiche précise leur usage et leurs limites.','These resources provide definitions, data and analysis tools. Each entry explains their use and limits.')+'</p><div class="resource-filters"><label>'+T('Rechercher','Search')+'<input id="resourceSearch" type="search"></label><label>'+T('Type de ressource','Resource type')+'<select id="resourceType">'+Object.entries(RESOURCE_TYPES).map(([k,v])=>'<option value="'+k+'">'+v[i]+'</option>').join('')+'</select></label><label>'+T('Axe de recherche','Research axis')+'<select id="resourceAxis"><option value="all">'+T('Tous les axes','All axes')+'</option>'+axes.map((a,j)=>'<option value="'+j+'">'+a[i]+'</option>').join('')+'</select></label></div><p id="resourceCount" role="status"></p><div id="resourceCards" class="resource-grid"></div><p class="resource-note">'+T('Sélection documentaire vérifiée le 25 octobre 2026. Les exemples industriels proviennent du travail bibliographique IONP de juillet 2026 et ont été revérifiés sur les sources liées. Sélection non exhaustive ; les statuts et conditions d’accès peuvent évoluer. Citer la donnée ou l’entrée utilisée et sa publication, en plus de la base.','Documentary selection checked on 25 October 2026. Industry examples were selected from the July 2026 IONP literature study and rechecked against the linked sources. Non-exhaustive selection; statuses and access conditions may change. Cite the data or entry used and its publication, in addition to the database.')+'</p>';
 $('resourceSearch').value=resourceQuery;$('resourceType').value=resourceType;$('resourceAxis').value=resourceAxis;
 $('resourceSearch').oninput=e=>{resourceQuery=e.target.value;filterResources();};
 $('resourceType').onchange=e=>{resourceType=e.target.value;filterResources();};
 $('resourceAxis').onchange=e=>{resourceAxis=e.target.value;filterResources();};
 filterResources();
}
function filterResources(){
 const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const found=RESOURCE_DATA.filter(r=>(resourceType==='all'||r[2]===resourceType)&&(resourceAxis==='all'||r[3].includes(+resourceAxis))&&norm(r.join(' ')).includes(norm(resourceQuery.trim())));
 const i=lang==='fr'?0:1;
 $('resourceCount').textContent=found.length+T(' ressource(s)',' resource(s)');
 $('resourceCards').innerHTML=found.length?found.map(r=>'<section><p class="eyebrow">'+RESOURCE_TYPES[r[2]][i]+'</p><h3>'+resourceLink(r[1],r[0])+'</h3><p>'+r[4+i]+'</p><p class="resource-access">'+r[6+i]+'</p>'+(r[8]?'<p>'+resourceLink(r[8],T('Document réglementaire ou registre associé','Associated regulatory document or trial registry'))+'</p>':'')+'</section>').join(''):'<p>'+T('Aucune ressource ne correspond à ces filtres.','No resources match these filters.')+'</p>';
}
