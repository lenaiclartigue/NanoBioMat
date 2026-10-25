let lang='fr',axis=0,current='macrospin',u=0,playing=false,last=0,raf=0,values={};
const $=id=>document.getElementById(id), T=(fr,en)=>lang==='fr'?fr:en;
const axes=[['Particules','Particles','Construire et comprendre','Build and understand'],['Assemblages','Assemblies','Organiser et coupler','Organize and couple'],['Interfaces biologiques','Biological interfaces','Interagir, imager, agir','Interact, image, act']];
const refs={corona2023:['W. Mekseriwattana et al., ACS Appl. Nano Mater. 2023, 6, 13952–13964','10.1021/acsanm.3c01767'],vogt:['C. Vogt et al., PLoS One 2015, 10, e0129008','10.1371/journal.pone.0129008'],rink:['J. Rink et al., Cell 2005, 122, 735–749','10.1016/j.cell.2005.06.043'],membrane:['E. Evans, D. Needham, J. Phys. Chem. 1987, 91, 4219–4228','10.1021/j100300a003'],han:['J. Han et al., J. Pharm. Sci. 2012, 101, 4018–4023','10.1002/jps.23259'],prudhomme:['B. K. Johnson, R. K. Prud’homme, Aust. J. Chem. 2003, 56, 1021–1024','10.1071/CH03115'],brown:['W. F. Brown, Phys. Rev. 1963, 130, 1677–1686','10.1103/PhysRev.130.1677'],sw:['E. C. Stoner, E. P. Wohlfarth, Phil. Trans. R. Soc. A 1948, 240, 599–642','10.1098/rsta.1948.0007'],corona:['M. P. Monopoli et al., Nat. Nanotechnol. 2012, 7, 779–786','10.1038/nnano.2012.207'],salvati:['A. Salvati et al., Nat. Nanotechnol. 2013, 8, 137–143','10.1038/nnano.2012.237'],bio:['L. Lartigue et al., ACS Nano 2012, 6, 2665–2678','10.1021/nn300060u'],fate:['L. Lartigue et al., ACS Nano 2013, 7, 3939–3952','10.1021/nn305719y'],mri:['L. Lartigue, D. Coupeau, M. Lesault, Nanomaterials 2020, 10, 28','10.3390/nano10010028'],size:['L. Lartigue et al., J. Am. Chem. Soc. 2011, 133, 10459–10472','10.1021/ja111448t'],multi:['L. Lartigue et al., ACS Nano 2012, 6, 10935–10949','10.1021/nn304477s'],lamer:['V. K. LaMer, R. H. Dinegar, J. Am. Chem. Soc. 1950, 72, 4847–4854','10.1021/ja01167a001'],mpi:['B. Gleich, J. Weizenecker, Nature 2005, 435, 1214–1217','10.1038/nature03808'],heat:['R. E. Rosensweig, J. Magn. Magn. Mater. 2002, 252, 370–374','10.1016/S0304-8853(02)00706-0']};
// All explanations are review text, independent from experimental measurements.
const D={
  "macrospin": {
    "a": 0,
    "n": [
      "Du spin au moment résultant",
      "From spins to net moment"
    ],
    "kind": "spin",
    "src": "hdr-macrospin",
    "refs": [
      "brown",
      "size"
    ],
    "lead": [
      "Le moment collectif change de direction. Les moments atomiques conservent leur ordre interne.",
      "The collective moment changes direction. Atomic moments retain their internal order."
    ],
    "steps": [
      [
        "Ordre interne",
        "Internal order",
        "Deux sous-réseaux opposés contribuent au moment résultant d’une IONP ferrimagnétique. Leurs contributions sont inégales. Les flèches ne représentent pas un rapport stœchiométrique.",
        "Two opposite sublattices contribute to a ferrimagnetic IONP’s net moment. Their contributions differ. Arrows do not represent a stoichiometric ratio."
      ],
      [
        "Moment résultant",
        "Net moment",
        "À l’échelle de la particule monodomaine, on représente cette somme par un macrospin. La norme est supposée constante dans ce modèle.",
        "At the single-domain particle scale, this sum is represented by a macrospin. Its magnitude is assumed constant in this model."
      ],
      [
        "Rotation cohérente",
        "Coherent rotation",
        "Les deux sous-réseaux tournent ensemble en conservant leur opposition. Un vrai renversement peut aussi faire intervenir des modes non uniformes.",
        "Both sublattices rotate together while remaining antiparallel. Real reversal may also involve nonuniform modes."
      ]
    ],
    "limits": [
      "Le schéma adapte les diapositives 6–7 et 17–18 de l’HDR. La sphère est redessinée en SVG. Deux sous-réseaux opposés représentent le ferrimagnétisme. Leurs positions ne décrivent pas la structure cristalline.",
      "The diagram adapts HDR slides 6–7 and 17–18. The sphere is redrawn in SVG. Two opposite sublattices represent ferrimagnetism. Their positions do not describe the crystal structure."
    ]
  },
  "lamer": {
    "a": 0,
    "n": [
      "Nucléation et croissance",
      "Nucleation and growth"
    ],
    "kind": "lamer",
    "src": "01-lamer",
    "refs": [
      "lamer"
    ],
    "lead": [
      "Le modèle de LaMer distingue la nucléation et la croissance. Son application dépend du mécanisme de synthèse.",
      "The LaMer model distinguishes nucleation and growth. Its applicability depends on the synthesis mechanism."
    ],
    "steps": [
      [
        "Accumulation",
        "Accumulation",
        "La concentration en espèces disponibles augmente avant l’apparition de nouveaux germes.",
        "The concentration of available species rises before new nuclei appear."
      ],
      [
        "Nucléation",
        "Nucleation",
        "Une sursaturation suffisante permet une bouffée de nucléation. La consommation des espèces réduit ensuite leur concentration.",
        "Sufficient supersaturation allows a nucleation burst. Consumption then reduces species concentration."
      ],
      [
        "Croissance",
        "Growth",
        "Les germes existants croissent. La formation de nouveaux germes devient négligeable dans ce régime.",
        "Existing nuclei grow. New nucleation becomes negligible in this regime."
      ]
    ],
    "limits": [
      "La courbe reprend le principe du schéma de cours. Elle décrit une évolution qualitative. Elle ne donne ni vitesse de réaction ni taille de particule. Certaines synthèses suivent d’autres mécanismes.",
      "The curve follows the principle of the course diagram. It describes a qualitative evolution. It gives neither reaction rates nor particle sizes. Some syntheses follow other mechanisms."
    ]
  },
  "anisotropy": {
    "a": 0,
    "n": [
      "Anisotropie : K et V",
      "Anisotropy: K and V"
    ],
    "kind": "anisotropy",
    "src": "02-anisotropie",
    "refs": [
      "sw",
      "brown"
    ],
    "lead": [
      "L’énergie magnétique dépend de l’orientation du moment par rapport à l’axe facile.",
      "Magnetic energy depends on moment orientation relative to the easy axis."
    ],
    "steps": [
      [
        "Minimum",
        "Minimum",
        "À champ nul, les deux directions de l’axe facile ont la même énergie.",
        "At zero field, both directions along the easy axis have the same energy."
      ],
      [
        "Barrière",
        "Barrier",
        "Le modèle uniaxial donne une barrière ΔE = KV. Taille, forme et structure contribuent aux propriétés effectives.",
        "The uniaxial model gives a barrier ΔE = KV. Size, shape and structure contribute to effective properties."
      ],
      [
        "Autre minimum",
        "Other minimum",
        "La température et le temps d’observation déterminent si des retournements sont détectés. Le blocage n’est pas une transition vers un ordre ferromagnétique.",
        "Temperature and observation time determine whether reversals are detected. Blocking is not a transition to ferromagnetic order."
      ]
    ],
    "limits": [
      "Le modèle suppose une anisotropie uniaxiale et un champ nul. La particule est sphérique : V = πd³/6. Le calcul omet l’anisotropie cubique détaillée et le désordre de surface.",
      "The model assumes uniaxial anisotropy and zero field. The particle is spherical: V = πd³/6. The calculation omits detailed cubic anisotropy and surface disorder."
    ]
  },
  "relax": {
    "a": 0,
    "n": [
      "Relaxations de Néel et Brown",
      "Néel and Brownian relaxation"
    ],
    "kind": "relax",
    "src": "04-relaxations",
    "refs": [
      "brown"
    ],
    "lead": [
      "Les mécanismes de Néel et de Brown réorientent le moment d’une nanoparticule.",
      "Néel and Brownian mechanisms reorient a nanoparticle moment."
    ],
    "steps": [
      [
        "Néel",
        "Néel",
        "Le moment se retourne dans la particule. L’orientation mécanique de la particule reste fixe.",
        "The moment reverses inside the particle. The particle’s mechanical orientation remains fixed."
      ],
      [
        "Brown",
        "Brownian",
        "La particule tourne dans le liquide. Le moment reste ici attaché à son axe facile.",
        "The particle rotates in the liquid. Here, its moment remains attached to its easy axis."
      ],
      [
        "Immobilisation",
        "Immobilization",
        "Immobiliser la particule supprime la rotation brownienne, mais pas nécessairement les retournements de Néel.",
        "Immobilizing the particle suppresses Brownian rotation, but not necessarily Néel reversals."
      ]
    ],
    "limits": [
      "Le schéma distingue deux mécanismes limites. L’animation est ralentie. Sa vitesse ne représente pas le temps physique calculé. L’expression de τN suppose une barrière élevée et un champ nul. Vh inclut le revêtement. Le signe positif de l’exponentielle corrige le schéma source.",
      "The diagram distinguishes two limiting mechanisms. The animation is slowed down. Its speed does not represent the calculated physical time. The τN expression assumes a high barrier and zero field. Vh includes the coating. The positive exponential corrects the source diagram."
    ]
  },
  "zfc": {
    "a": 0,
    "n": [
      "ZFC / FC",
      "ZFC / FC"
    ],
    "kind": "curves",
    "mode": "zfc"
  },
  "mh": {
    "a": 0,
    "n": [
      "Cycle M(H)",
      "M(H) loop"
    ],
    "kind": "curves",
    "mode": "mh"
  },
  "initial": {
    "a": 0,
    "n": [
      "Première aimantation",
      "Initial magnetization"
    ],
    "kind": "curves",
    "mode": "initial"
  },
  "assembly": {
    "a": 1,
    "n": [
      "Nanoprécipitation flash",
      "Flash nanoprecipitation"
    ],
    "kind": "guided",
    "src": "cij",
    "refs": [
      "han",
      "prudhomme"
    ],
    "lead": [
      "Deux flux se rencontrent dans le mélangeur. Le mélange rapide déclenche la nanoprécipitation.",
      "Two streams meet in the mixer. Rapid mixing triggers nanoprecipitation."
    ],
    "steps": [
      [
        "Deux phases",
        "Two phases",
        "Une phase organique transporte le composé organique et, selon la formulation, les IONPs. L’autre contient le polymère en phase aqueuse.",
        "An organic phase carries the organic compound and, depending on formulation, IONPs. The other contains the polymer in water."
      ],
      [
        "Mélange rapide",
        "Rapid mixing",
        "La rencontre des flux modifie rapidement la qualité du solvant. Les temps de mélange, de précipitation et de stabilisation sont couplés.",
        "Stream impingement rapidly changes solvent quality. Mixing, precipitation and stabilization times are coupled."
      ],
      [
        "Assemblages",
        "Assemblies",
        "Le polymère contribue à stabiliser les objets formés. Le contenu, la taille et la structure doivent être caractérisés expérimentalement.",
        "The polymer helps stabilize the resulting objects. Loading, size and structure require experimental characterization."
      ]
    ],
    "limits": [
      "Le dessin reprend le montage CIJ du site V4.0. Les repères animés indiquent l’ordre du procédé. Il est adapté de Han et al. et de la méthode de Johnson et Prud’homme. Il ne prédit ni trajectoires ni cinétique. Les IONPs appartiennent à notre formulation. Elles ne figurent pas dans celle de Han.",
      "The diagram retains the V4.0 CIJ setup. It adapts Han et al.’s mixer and Johnson and Prud’homme’s method. It predicts neither trajectories nor kinetics. IONPs belong to our formulation. They are absent from Han’s formulation."
    ]
  },
  "interactions": {
    "a": 1,
    "n": [
      "Interactions entre particules",
      "Interparticle interactions"
    ],
    "kind": "dipole",
    "src": "03-interactions",
    "refs": [
      "multi"
    ],
    "lead": [
      "L’organisation spatiale modifie les interactions entre nanoparticules.",
      "Spatial organization changes interactions between nanoparticles."
    ],
    "steps": [
      [
        "Moments isolés",
        "Isolated moments",
        "À grande séparation, chaque particule se rapproche d’une réponse individuelle.",
        "At large separation, each particle approaches an individual response."
      ],
      [
        "Couplage dipolaire",
        "Dipolar coupling",
        "L’énergie dipolaire dépend de la distance et de l’orientation des moments. Un changement de configuration modifie cette énergie.",
        "Dipolar energy depends on moment spacing and orientation. A change in configuration changes this energy."
      ],
      [
        "Échange",
        "Exchange",
        "Un contact adapté entre surfaces magnétiques peut permettre un couplage d’échange. La distance seule ne suffit pas à le prédire.",
        "Suitable contact between magnetic surfaces may enable exchange coupling. Distance alone cannot predict it."
      ]
    ],
    "limits": [
      "Le modèle représente deux dipôles ponctuels. Il omet l’agitation thermique et la relaxation collective. Il ne prédit pas les propriétés d’un assemblage réel. Le couplage d’échange ne possède pas de seuil de distance universel.",
      "The model represents two point dipoles. It omits thermal agitation and collective relaxation. It does not predict a real assembly’s properties. Exchange coupling has no universal distance threshold."
    ]
  },
  "rem": {
    "a": 1,
    "n": [
      "IRM / DCD / ΔM",
      "IRM / DCD / ΔM"
    ],
    "kind": "curves",
    "mode": "rem"
  },
  "time": {
    "a": 1,
    "n": [
      "IRM(t) / DCD(t)",
      "IRM(t) / DCD(t)"
    ],
    "kind": "curves",
    "mode": "time"
  },
  "forc": {
    "a": 1,
    "n": [
      "FORC",
      "FORC"
    ],
    "kind": "curves",
    "mode": "forc"
  },
  "corona": {
    "a": 2,
    "n": [
      "Identité biologique",
      "Biological identity"
    ],
    "kind": "corona",
    "src": "12-corona",
    "refs": [
      "corona2023",
      "vogt",
      "corona",
      "salvati",
      "bio"
    ],
    "lead": [
      "Le milieu biologique modifie la surface des nanoparticules. Cette interface influence leurs interactions avec les cellules.",
      "The biological medium changes nanoparticle surfaces. This interface influences their interactions with cells."
    ],
    "steps": [
      [
        "Identité initiale",
        "Initial identity",
        "Taille, forme, composition et revêtement définissent l’objet avant son exposition au milieu biologique.",
        "Size, shape, composition and coating define the object before exposure to a biological medium."
      ],
      [
        "Adsorption",
        "Adsorption",
        "Des biomolécules s’adsorbent à la surface. Le revêtement modifie ces interactions. Il ne supprime pas nécessairement l’adsorption.",
        "Biomolecules adsorb at the surface. The coating changes these interactions. It does not necessarily prevent adsorption."
      ],
      [
        "Échanges",
        "Exchange",
        "Certaines biomolécules restent adsorbées plus longtemps. D’autres s’échangent avec le milieu. La couronne évolue au cours du temps.",
        "Some biomolecules remain adsorbed longer. Others exchange with the medium. The corona evolves over time."
      ],
      [
        "Reconnaissance",
        "Recognition",
        "Cette interface influence reconnaissance, adsorption membranaire et internalisation. Elle peut aussi masquer un ligand de ciblage.",
        "This interface influences recognition, membrane adsorption and uptake. It can also mask a targeting ligand."
      ]
    ],
    "limits": [
      "Les protéines sélectionnées ont été identifiées sur des SPIONs dans les études citées. Leurs formes proviennent de projections Cα de la PDB. Le dessin illustre leur position et leur proportion. Il ne prédit pas la corona de nos formulations. Le fibrinogène apparaît uniquement dans la vue plasma.",
      "The selected proteins were identified on SPIONs in the cited studies. Their shapes come from PDB Cα projections. The drawing illustrates positions and proportions. It does not predict the corona of our formulations. Fibrinogen appears only in the plasma view."
    ]
  },
  "fate": {
    "a": 2,
    "n": [
      "Devenir intracellulaire",
      "Intracellular fate"
    ],
    "kind": "fate",
    "src": "13-endolysosomes",
    "refs": [
      "fate",
      "rink",
      "membrane"
    ],
    "lead": [
      "Les nanoparticules entrent dans les cellules par endocytose. Elles peuvent rejoindre les compartiments lysosomaux.",
      "Nanoparticles enter cells through endocytosis. They can reach lysosomal compartments."
    ],
    "steps": [
      [
        "Endocytose",
        "Endocytosis",
        "La membrane enveloppe les nanoparticules dans une vésicule. Plusieurs voies d’entrée peuvent coexister.",
        "The membrane encloses nanoparticles in a vesicle. Several uptake routes may coexist."
      ],
      [
        "Maturation",
        "Maturation",
        "Les endosomes précoces évoluent vers des compartiments tardifs. Leur environnement s’acidifie progressivement.",
        "Early endosomes mature toward late compartments. Their environment progressively acidifies."
      ],
      [
        "Lysosome",
        "Lysosome",
        "La voie endolysosomale conduit à des compartiments acides et riches en enzymes. Les particules rencontrent un nouvel environnement.",
        "The endolysosomal pathway leads to acidic, enzyme-rich compartments. Particles encounter a new environment."
      ],
      [
        "Marginalisation",
        "Peripheral redistribution",
        "Lartigue et al. (2013) observent une dispersion progressive des particules. Elles se localisent principalement à la périphérie lysosomale. Cette évolution dépend du système étudié.",
        "Lartigue et al. (2013) observe progressive particle dispersion. Particles mainly localize near the lysosomal periphery. This evolution depends on the system studied."
      ],
      [
        "Dégradation et fer",
        "Degradation and iron",
        "La dégradation des oxydes libère du fer. Ce fer peut rejoindre les voies cellulaires de stockage, dont la ferritine. L’animation ne démontre pas le mécanisme de transfert.",
        "Oxide degradation releases iron. This iron can enter cellular storage pathways, including ferritin. The animation does not establish the transfer mechanism."
      ]
    ],
    "limits": [
      "Le scénario reprend le schéma fourni et Lartigue et al. (2013). La maturation et la dégradation peuvent se chevaucher. Les voies et les vitesses dépendent des particules, du revêtement et des cellules. L’animation ne fournit pas d’échelle temporelle expérimentale.",
      "The scenario follows the supplied diagram and Lartigue et al. (2013). Maturation and degradation can overlap. Pathways and rates depend on particles, coatings and cells. The animation provides no experimental time scale."
    ]
  },
  "mri": {
    "a": 2,
    "n": [
      "IRM : T₁ et T₂",
      "MRI: T₁ and T₂"
    ],
    "kind": "mri",
    "src": "review-fig2",
    "refs": [
      "mri"
    ],
    "lead": [
      "L’aimantation des protons de l’eau évolue après une impulsion radiofréquence.",
      "Water-proton magnetization evolves after a radiofrequency pulse."
    ],
    "steps": [
      [
        "Après 90°",
        "After 90°",
        "À l’issue de l’impulsion idéale, l’aimantation est transverse. Les vecteurs représentent l’aimantation collective des protons, pas les macrospins des IONPs.",
        "After an ideal pulse, magnetization is transverse. Vectors represent collective proton magnetization, not IONP macrospins."
      ],
      [
        "Relaxation longitudinale",
        "Longitudinal relaxation",
        "Mz revient vers M0 avec le temps T₁, par échange d’énergie avec l’environnement.",
        "Mz recovers toward M0 with time T₁ through energy exchange with the surroundings."
      ],
      [
        "Relaxation transverse",
        "Transverse relaxation",
        "La cohérence transverse décroît avec T₂. Les variations de champ et les mouvements de l’eau autour des IONPs modifient les vitesses de relaxation.",
        "Transverse coherence decays with T₂. Field variations and water motion around IONPs modify relaxation rates."
      ]
    ],
    "limits": [
      "Le modèle utilise les équations de Bloch après une impulsion idéale de 90°. Les relaxations sont mono-exponentielles. Le calcul ne simule pas de séquence d’imagerie. Les vecteurs représentent l’aimantation collective des protons. T₂* inclut aussi les inhomogénéités refocalisables. Il diffère donc de T₂. Le schéma adapte la figure 2 de la revue. Il conserve les trois panneaux, les couleurs et les repères 63 % et 37 %. Les courbes sont recalculées. Les légendes sont traduites.",
      "The model uses Bloch equations after an ideal 90° pulse. Relaxation is mono-exponential. The calculation does not simulate an imaging sequence. Vectors represent collective proton magnetization. T₂* also includes refocusable inhomogeneities. It therefore differs from T₂. The diagram adapts Figure 2 of the review. It retains the three panels, colours and 63% and 37% markers. Curves are recalculated. Labels are translated."
    ]
  },
  "relaxivity": {
    "a": 2,
    "n": [
      "Eau, IONPs et relaxivité",
      "Water, IONPs and relaxivity"
    ],
    "kind": "diffusion",
    "src": "review-fig3",
    "refs": [
      "mri"
    ],
    "lead": [
      "L’eau explore le champ magnétique local. Ce champ dépend des nanoparticules et de leur organisation.",
      "Water probes the local magnetic field. This field depends on nanoparticles and their organization."
    ],
    "steps": [
      [
        "Eau et surface",
        "Water and surface",
        "Les fluctuations des interactions entre protons et moments magnétiques contribuent à la relaxation. L’accès et les échanges de l’eau près de la surface comptent.",
        "Fluctuating interactions between protons and magnetic moments contribute to relaxation. Water access and exchange near the surface matter."
      ],
      [
        "Moyennage dynamique",
        "Motional averaging",
        "La diffusion rapide de l’eau échantillonne les variations locales de champ. Elle contribue au moyennage du déphasage. Le volume vert représente la région explorée.",
        "Rapid water diffusion samples local field variations. It contributes to averaging dephasing. The green volume represents the explored region."
      ],
      [
        "Déphasage statique",
        "Static dephasing",
        "Des objets plus grands et fortement aimantés peuvent conduire à un autre régime de déphasage. La relaxivité ne croît pas indéfiniment avec la taille.",
        "Larger, strongly magnetized objects may lead to another dephasing regime. Relaxivity does not increase indefinitely with size."
      ]
    ],
    "limits": [
      "Le schéma adapte la figure 3 de la revue en SVG. Il conserve les deux panneaux et les deux régimes de déphasage. Les légendes sont traduites. Le mouvement de l’eau est illustratif. Il ne calcule ni trajectoire brownienne ni relaxivité r₂. La figure source provient de Lartigue, Coupeau et Lesault (Nanomaterials, 2020). Sa licence est CC BY 4.0.",
      "The SVG diagram adapts Figure 3 of the review. It retains both panels and both dephasing regimes. Labels are translated. Water motion is illustrative. It calculates neither Brownian trajectories nor r₂ relaxivity. The source figure comes from Lartigue, Coupeau and Lesault (Nanomaterials, 2020). Its licence is CC BY 4.0."
    ]
  },
  "mpi": {
    "a": 2,
    "n": [
      "Imagerie MPI",
      "MPI imaging"
    ],
    "kind": "mpi",
    "refs": [
      "mpi"
    ],
    "lead": [
      "La MPI détecte la réponse non linéaire d’un traceur magnétique.",
      "MPI detects the nonlinear response of a magnetic tracer."
    ],
    "steps": [
      [
        "Champ de sélection",
        "Selection field",
        "Un gradient crée une région de champ faible. Loin de celle-ci, les moments sont proches de la saturation.",
        "A gradient creates a low-field region. Far from it, moments approach saturation."
      ],
      [
        "Balayage",
        "Scanning",
        "Le déplacement de cette région fait varier fortement l’aimantation des particules qui la traversent.",
        "Moving this region strongly changes magnetization of particles crossing it."
      ],
      [
        "Détection",
        "Detection",
        "Une bobine détecte une tension liée à dM/dt. La reconstruction transforme les signaux en image du traceur.",
        "A coil detects a voltage related to dM/dt. Reconstruction converts the signals into a tracer image."
      ]
    ],
    "limits": [
      "Le modèle décrit le principe en une dimension. Le pic représente une sensibilité locale indicative. Il ne représente ni tension mesurée ni image reconstruite. La relaxation, le gradient et le traceur déterminent la résolution réelle.",
      "The model describes the principle in one dimension. The peak represents indicative local sensitivity. It represents neither measured voltage nor a reconstructed image. Relaxation, gradient and tracer determine actual resolution."
    ]
  },
  "heat": {
    "a": 2,
    "n": [
      "Hyperthermie magnétique",
      "Magnetic hyperthermia"
    ],
    "kind": "heat",
    "src": "10-hyperthermie",
    "refs": [
      "heat",
      "multi"
    ],
    "lead": [
      "Un champ alternatif peut provoquer une dissipation d’énergie dans les nanoparticules.",
      "An alternating field can cause energy dissipation in nanoparticles."
    ],
    "steps": [
      [
        "Excitation",
        "Excitation",
        "Le champ appliqué varie périodiquement. La réponse dépend notamment de l’anisotropie, de la taille, de la mobilité et des interactions.",
        "The applied field varies periodically. Response depends on anisotropy, size, mobility and interactions."
      ],
      [
        "Retard",
        "Lag",
        "Une composante de l’aimantation est déphasée par rapport au champ.",
        "A component of magnetization lags behind the field."
      ],
      [
        "Dissipation",
        "Dissipation",
        "L’aire du cycle dynamique correspond à l’énergie dissipée par période. Ce calcul exige une normalisation et des unités cohérentes.",
        "The dynamic-loop area corresponds to energy dissipated per period. This calculation requires consistent normalization and units."
      ]
    ],
    "limits": [
      "L’ellipse illustre une réponse linéaire avec un déphasage fixé. Elle ne fournit ni SAR expérimental ni température tissulaire. Elle ne définit pas de protocole de traitement.",
      "The ellipse illustrates a linear response with a fixed phase lag. It provides neither experimental SAR nor tissue temperature. It defines no treatment protocol."
    ]
  },
  "photo": {
    "a": 2,
    "n": [
      "Photothermie",
      "Photothermal conversion"
    ],
    "kind": "guided",
    "src": "09-photothermie",
    "refs": [],
    "lead": [
      "L’absorption de lumière peut produire de la chaleur.",
      "Light absorption can produce heat."
    ],
    "steps": [
      [
        "Absorption",
        "Absorption",
        "L’absorption dépend de la composition, de la structure et de la longueur d’onde d’excitation.",
        "Absorption depends on composition, structure and excitation wavelength."
      ],
      [
        "Conversion",
        "Conversion",
        "Une partie de l’énergie absorbée est dissipée par des voies non radiatives.",
        "Part of the absorbed energy dissipates through nonradiative pathways."
      ],
      [
        "Chaleur",
        "Heat",
        "La chaleur se transfère au milieu environnant. La photothermie se distingue de la photosensibilisation et de la production d’espèces réactives.",
        "Heat transfers to the surroundings. Photothermal conversion differs from photosensitization and reactive-species generation."
      ]
    ],
    "limits": [
      "Le schéma représente l’absorption et la dissipation d’énergie. Il n’attribue pas aux IONPs un mécanisme plasmonique propre à l’or. Il ne prédit ni rendement photothermique ni température.",
      "The diagram represents energy absorption and dissipation. It does not attribute a gold-specific plasmonic mechanism to IONPs. It predicts neither photothermal efficiency nor temperature."
    ]
  },
  "delivery": {
    "a": 2,
    "n": [
      "Revêtement et fonctions",
      "Coating and functions"
    ],
    "kind": "guided",
    "src": "11-fonctionnalisation",
    "refs": [
      "bio",
      "corona"
    ],
    "lead": [
      "Le revêtement influence la stabilité colloïdale et les interactions biologiques.",
      "The coating influences colloidal stability and biological interactions."
    ],
    "steps": [
      [
        "Stabiliser",
        "Stabilize",
        "Le revêtement intervient dans la dispersion, l’accès de l’eau et les interactions avec les biomolécules.",
        "The coating affects dispersion, water access and biomolecular interactions."
      ],
      [
        "Associer",
        "Associate",
        "Des molécules peuvent être greffées ou incorporées dans une architecture. Leur disponibilité doit être vérifiée.",
        "Molecules can be grafted or incorporated in an architecture. Their availability must be verified."
      ],
      [
        "Libérer ou activer",
        "Release or activate",
        "Associer un composé ne démontre pas sa libération, son ciblage ou son efficacité. Chaque fonction nécessite des mesures dédiées.",
        "Association does not demonstrate release, targeting or efficacy. Each function requires dedicated measurements."
      ]
    ],
    "limits": [
      "Le schéma décrit les fonctions du revêtement. Il ne simule ni cinétique de libération ni efficacité biologique.",
      "The diagram describes coating functions. It simulates neither release kinetics nor biological efficacy."
    ]
  }
};
function range(id,fr,en,min,max,val,step,unit){if(values[id]===undefined)values[id]=val;return `<label>${T(fr,en)}<input id="${id}" type="range" min="${min}" max="${max}" step="${step}" value="${values[id]}"><output>${values[id]} ${unit}</output></label>`;}
function controls(m){let s='';if(['anisotropy','relax'].includes(m.kind))s=range('K','Anisotropie K','Anisotropy K',5,40,20,1,'kJ/m³')+range('d','Diamètre du cœur','Core diameter',6,25,14,1,'nm')+range('T','Température','Temperature',100,350,300,5,'K');if(m.kind==='relax')s+=range('shell','Épaisseur hydrodynamique','Hydrodynamic shell',0,20,4,1,'nm')+range('eta','Viscosité','Viscosity',.5,10,1,.5,'mPa·s')+`<label><input type="checkbox" id="fixed" ${values.fixed?'checked':''}> ${T('Particule immobilisée','Immobilized particle')}</label>`;if(m.kind==='dipole')s=range('distance','Distance / diamètre','Distance / diameter',1.1,5,2,.1,'')+range('angle','Angle entre moments','Angle between moments',0,180,0,5,'°');if(m.kind==='mri')s=range('T1','T₁','T₁',400,2000,1000,100,'ms')+range('T2','T₂','T₂',40,400,180,10,'ms');if(m.kind==='corona')s+=`<label>${T('Milieu illustré','Illustrated medium')}<select id="medium"><option value="serum">${T('Sérum humain','Human serum')}</option><option value="plasma">${T('Plasma humain · avec fibrinogène','Human plasma · with fibrinogen')}</option></select></label>`;$('controls').innerHTML=s;if($('medium')){$('medium').value=values.medium||'serum';$('medium').onchange=()=>{values.medium=$('medium').value;draw();};}$('controls').querySelectorAll('input').forEach(el=>el.oninput=()=>{values[el.id]=el.type==='checkbox'?el.checked:+el.value;if(el.type==='range')el.nextElementSibling.textContent=el.value+' '+({K:'kJ/m³',d:'nm',T:'K',shell:'nm',eta:'mPa·s',angle:'°',T1:'ms',T2:'ms'}[el.id]||'');draw();});}
function stop(){playing=false;cancelAnimationFrame(raf);if($('play'))$('play').textContent=T('Lire','Play');}
function render(){stop();renderResources();renderModuleNavigation();const m=D[current];document.documentElement.lang=lang;$('language').textContent=lang==='fr'?'EN':'FR';$('language').ariaLabel=T('Switch to English','Passer en français');$('edition').textContent=T('Bases théoriques','Theoretical background');$('eyebrow').textContent=T('Recherche · Explorer les mécanismes','Research · Explore the mechanisms');$('title').textContent=T('De la nanoparticule au vivant','From nanoparticles to living systems');$('intro').textContent=T('Les schémas et les modèles expliquent les mécanismes étudiés dans nos trois axes de recherche.','Diagrams and models explain the mechanisms studied across our three research axes.');$('axes').innerHTML=axes.map((a,i)=>`<button data-axis="${i}" aria-pressed="${i===axis}"><span class="axis-number">0${i+1}</span><b>${a[lang==='fr'?0:1]}</b><span>${a[lang==='fr'?2:3]}</span><span class="axis-open">${i===axis?T('Axe sélectionné','Selected axis'):T('Explorer cet axe','Explore this axis')}</span></button>`).join('');$('axes').querySelectorAll('button').forEach(b=>b.onclick=()=>{chooseModule(Object.keys(D).find(k=>D[k].a===+b.dataset.axis));});$('modules').innerHTML=Object.entries(D).filter(([k,v])=>v.a===axis).map(([k,v])=>`<button data-module="${k}" aria-pressed="${current===k}">${v.n[lang==='fr'?0:1]}</button>`).join('');$('modules').querySelectorAll('button').forEach(b=>b.onclick=()=>{chooseModule(b.dataset.module);});$('heading').innerHTML=`<p class="eyebrow">${axes[axis][lang==='fr'?0:1]}</p><h2>${m.n[lang==='fr'?0:1]}</h2><p>${m.lead?m.lead[lang==='fr'?0:1]:T('Les courbes illustrent les modèles et leurs paramètres. Elles ne représentent pas de données expérimentales.','The curves illustrate models and their parameters. They do not represent experimental data.')}</p>`;$('stage').innerHTML='';controls(m);const iscurve=m.kind==='curves';$('enlarge').hidden=iscurve;$('enlarge').textContent=T('Agrandir le schéma','Enlarge diagram');$('zoomTitle').textContent=T('Vue agrandie · animation en pause','Enlarged view · animation paused');$('closeZoom').textContent=T('Fermer','Close');['transport','steps','explain','math','references','limits'].forEach(id=>$(id).hidden=iscurve);$('source').hidden=iscurve||!m.src;$('source').open=false;$('source').hidden=iscurve;$('sourceTitle').textContent=T('Exporter les schémas vectoriels','Export vector diagrams');$('sourceNote').textContent=T('Les fichiers SVG sont éditables. Ils ne contiennent pas d’image matricielle. Les légendes suivent la langue choisie. Les références et les limites figurent sous le module.','SVG files are editable. They contain no raster images. Labels follow the selected language. References and limits appear below the module.');$('sourceImage').hidden=true;$('download').hidden=true;$('exportFR').textContent='SVG · Français';$('exportEN').textContent='SVG · English';if(iscurve){$('stage').innerHTML='<iframe id="curves" title="'+T('Modèles de magnétisme interactifs','Interactive magnetism models')+'"></iframe>';const f=$('curves');f.onload=()=>f.contentWindow.postMessage({kind:'protocol',mode:m.mode,lang},'*');f.srcdoc=ASSETS.curves;return;}$('reset').textContent=T('Recommencer','Restart');$('timelineLabel').textContent=T('Progression','Progress');$('steps').innerHTML=m.steps.map((s,i)=>`<button data-step="${i}">${i+1}. ${s[lang==='fr'?0:1]}</button>`).join('');$('steps').querySelectorAll('button').forEach(b=>b.onclick=()=>{stop();u=(+b.dataset.step+.5)/m.steps.length;draw();});$('references').innerHTML=`<h3>${T('Publications et ressources','Publications and resources')}</h3><ul>${(m.refs||[]).map(k=>`<li>${refs[k][0]}. <a href="https://doi.org/${refs[k][1]}" target="_blank" rel="noopener noreferrer">doi: ${refs[k][1]}</a></li>`).join('')}</ul><a href="https://lenaiclartigue.github.io/python-chimie/" target="_blank" rel="noopener noreferrer">${T('Python pour la chimie · prolonger l’exploration','Python for chemistry · explore further')}</a>`;$('limits').textContent=m.limits[lang==='fr'?0:1];if(current==='corona')$('references').innerHTML+=proteinEvidence();if(current==='fate')$('references').innerHTML+=`<p>${T('Repère de dimensions : bicouche lipidique ~3–4 nm dans la source citée, sans imposer cette valeur à toutes les membranes. Le schéma est hors échelle.','Dimensional context: lipid bilayer ~3–4 nm in the cited source, not a universal value for all membranes. Diagram not to scale.')} <a href="https://bionumbers.hms.harvard.edu/bionumber.aspx?id=112585&org=&trm=membrane&ver=3" target="_blank" rel="noopener">BioNumbers BNID 112585</a>.</p>`;$('footer').textContent=T('Les modèles illustrent les mécanismes étudiés. Les références et les hypothèses accompagnent chaque module.','The models illustrate the mechanisms studied. References and assumptions accompany each module.');draw();}
const C={teal:'#315b78',orange:'#a66b49',purple:'#775b8c',ink:'#243944'};
function line(x1,y1,x2,y2,c=C.ink,w=2,dash=''){return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" ${dash?'stroke-dasharray="'+dash+'"':''}/>`;}
function text(x,y,s,size=17,c=C.ink){return `<text x="${x}" y="${y}" text-anchor="middle" style="font-size:${size}px;fill:${c}">${s}</text>`;}
function circle(x,y,r,fill,stroke='none',w=2){return `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${w}"/>`;}
function arrow(x,y,a,len=50,c=C.teal,w=4){const dx=Math.sin(a)*len,dy=-Math.cos(a)*len;const ex=x+dx,ey=y+dy;return line(x-dx*.4,y-dy*.4,ex,ey,c,w)+`<path d="M ${ex-9*Math.sin(a-.55)} ${ey+9*Math.cos(a-.55)} L ${ex} ${ey} L ${ex-9*Math.sin(a+.55)} ${ey+9*Math.cos(a+.55)}" fill="none" stroke="${c}" stroke-width="${w}"/>`;}
function sphere(x,y,r,a,body=0,internal=false){let s=`<g transform="translate(${x} ${y})"><g transform="rotate(${body})">`+np(0,0,r,false)+line(0,-r-14,0,r+14,'#a2b2bb',1,'5 5')+`<path d="M${-r*.6} ${-r*.5}L${r*.5} ${-r*.6}L${r*.7} ${r*.4}" fill="none" stroke="#b7c5cb" stroke-width="1.5"/></g>`;if(internal){s+=circle(0,0,r*.82,'#f2f6f8');for(let i=0;i<24;i++){let q=i*2.399,rr=r*.66*Math.sqrt((i+.5)/24);s+=arrow(rr*Math.cos(q),rr*Math.sin(q),a+(i%2?Math.PI:0),r*(i%2?.10:.16),i%2?'#a66b49':'#315b78',1.5);}}else s+=arrow(0,0,a,r*.65,'#eef5f8',3);return s+'</g>';}

function svg(content){return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" role="img" aria-label="${D[current].n[lang==='fr'?0:1]}">${content}</svg>`;}
function path(points,color,width=3){return `<path d="${points.map((p,i)=>(i?'L':'M')+p[0].toFixed(2)+' '+p[1].toFixed(2)).join(' ')}" fill="none" stroke="${color}" stroke-width="${width}"/>`;}
function chart(curves,xmax,ymax,xlabel,ylabel,box=[410,80,330,240]){const[x,y,w,h]=box;let s='';for(let i=0;i<=4;i++){const px=x+w*i/4,py=y+h-h*i/4;s+=line(px,y,px,y+h,'#e3e9ed',1)+line(x,py,x+w,py,'#e3e9ed',1)+text(px,y+h+17,Number((xmax*i/4).toPrecision(3)),11,'#657b88')+text(x-19,py+4,Number((ymax*i/4).toPrecision(3)),11,'#657b88');}s+=line(x,y,x,y+h,'#586e7b',1.5)+line(x,y+h,x+w,y+h,'#586e7b',1.5)+text(x+w/2,y+h+38,xlabel,14)+text(x+w/2,y-18,ylabel,14);for(const [pts,c]of curves)s+=path(pts.map(([a,b])=>[x+w*a/xmax,y+h-h*b/ymax]),c,2.5);return s;}

function draw(){const m=D[current];if(m.kind==='curves')return;const idx=Math.min(m.steps.length-1,Math.floor(u*m.steps.length)),step=m.steps[idx];$('timeline').value=Math.round(u*1000);$('progress').textContent=Math.round(u*100)+'%';$('steps').querySelectorAll('button').forEach((b,i)=>b.setAttribute('aria-pressed',i===idx));const explanation='<h3>'+step[lang==='fr'?0:1]+'</h3><p>'+step[lang==='fr'?2:3]+'</p>';if($('explain').innerHTML!==explanation)$('explain').innerHTML=explanation;$('math').innerHTML='';let s='';const replacement=refinedScene(current,u);if(replacement){$('stage').innerHTML=replacement;return;}
if(m.kind==='spin'){let a=(u<.65?-.5:-.5+(u-.65)/.35*Math.PI);s=sphere(140,195,95,a)+line(220,160,310,120,'#8c9aa0',1)+line(220,230,310,280,'#8c9aa0',1)+sphere(400,195,100,a,0,true)+arrow(560,195,Math.PI/2,30,C.ink,3)+circle(680,195,70,'#e6f2ee')+arrow(680,195,a,54,C.teal,6)+text(140,330,T('Particule monodomaine','Single-domain particle'))+text(400,330,T('Sous-réseaux couplés','Coupled sublattices'))+text(680,330,T('Moment résultant','Net moment'))+text(400,47,T('Rotation collective · opposition conservée','Collective rotation · antiparallel order preserved'),20);}
if(m.kind==='anisotropy'){const a=u*Math.PI,V=Math.PI/6*(values.d*1e-9)**3,E=values.K*1000*V,barrier=E/(1.380649e-23*values.T);s=sphere(175,190,90,a)+text(175,325,'θ = '+Math.round(u*180)+'°');const points=Array.from({length:101},(_,i)=>[i/100*180,Math.sin(i/100*Math.PI)**2]);s+=chart([[points,C.teal]],180,1,'θ (°)','E / KV')+circle(410+330*u,320-240*Math.sin(a)**2,7,C.orange)+text(410,345,'0°',13)+text(740,345,'180°',13);$('math').innerHTML=`E(θ) = KV sin²θ · ΔE = KV = ${(E/1e-21).toFixed(1)} × 10⁻²¹ J · ΔE/kBT = ${barrier.toFixed(1)}`;}
if(m.kind==='relax'){const immobilized=values.fixed||idx===2;const a=Math.PI*(.5-.5*Math.cos(4*Math.PI*u));const b=immobilized?0:Math.PI*2*u; s=text(220,48,'Néel',23)+text(585,48,T('Brown','Brownian'),23)+sphere(220,195,90,a,0,true)+sphere(585,195,90,b,b*180/Math.PI,true)+text(220,335,T('Particule fixe · moment mobile','Fixed particle · moving moment'),17)+text(585,335,immobilized?T('Rotation mécanique bloquée','Mechanical rotation blocked'):T('Particule et moment tournent','Particle and moment rotate'),17);const V=Math.PI/6*(values.d*1e-9)**3,Vh=Math.PI/6*((values.d+2*values.shell)*1e-9)**3,q=values.K*1000*V/(1.380649e-23*values.T),tn=1e-9*Math.exp(q),tb=3*values.eta*.001*Vh/(1.380649e-23*values.T);$('math').innerHTML=`τN ≈ τ₀ exp(KV/kBT) = ${tn.toExponential(2)} s · τ₀ = 10⁻⁹ s<br>τB = 3ηVh/(kBT) = ${immobilized?'∞':tb.toExponential(2)+' s'} · KV/kBT = ${q.toFixed(1)}${q<5?'<br>'+T('Barrière faible : approximation de τN à interpréter avec prudence.','Low barrier: interpret the τN approximation with caution.'):''}`;}
if(m.kind==='lamer'){const conc=t=>t<1/3?.12+1.92*t:t<2/3?.76-(t-1/3)*.99:.36*Math.exp(-4*(t-2/3))+.07;const points=Array.from({length:121},(_,i)=>[i/120,conc(i/120)]);s=chart([[points,C.teal]],1,1,T('Temps schématique','Schematic time'),T('Concentration relative','Relative concentration'),[75,65,650,230]);s+=line(75,65+230*(1-.72),725,65+230*(1-.72),C.orange,1,'6 5')+text(590,65+230*(1-.72)-10,T('Seuil de nucléation','Nucleation threshold'),14,C.orange)+circle(75+650*u,295-230*conc(u),7,C.orange);for(let i=0;i<8;i++)if(u>.32)s+=np(100+i*85,365,Math.min(19,4+Math.max(0,u-.45)*25),false);}
if(m.kind==='dipole'){const r=values.distance,a=values.angle*Math.PI/180,sep=45*r; s=circle(400-sep/2,185,34,'#d6e7e8')+circle(400+sep/2,185,34,'#d6e7e8')+arrow(400-sep/2,185,Math.PI/2,32)+arrow(400+sep/2,185,Math.PI/2+a,32,C.orange)+line(400-sep/2,260,400+sep/2,260,C.ink,2,'5 4')+text(400,292,'r = '+r.toFixed(1)+' d')+text(400,60,T('Deux moments sur un axe de séparation','Two moments on a separation axis'),21);const energy=-2*Math.cos(a)/r**3;$('math').innerHTML='Udd = μ₀/(4πr³) [m₁·m₂ − 3(m₁·r̂)(m₂·r̂)]<br>'+T('Énergie réduite pour cette géométrie : ','Reduced energy for this geometry: ')+energy.toFixed(3);s+=text(400,350,energy<-.01?T('Configuration attractive','Attractive configuration'):energy>.01?T('Configuration répulsive','Repulsive configuration'):T('Énergie dipolaire nulle ici','Zero dipolar energy here'),18);}
if(m.kind==='corona'){const phase=Math.min(1,u*2),cx=200+u*360,cy=200;s+=`<path d="M720 60 Q665 200 720 340" fill="none" stroke="#b5a0ca" stroke-width="22"/>`+text(705,365,T('Membrane','Membrane'),16)+circle(cx,cy,53,'#e0b33a');for(let i=0;i<18;i++){const a=i/18*Math.PI*2,dist=60+(1-phase)*(75+20*Math.sin(i*4));const jitter=(u>.5?7*Math.sin(u*24+i*3):0);const x=cx+Math.cos(a)*(dist+jitter),y=cy+Math.sin(a)*(dist+jitter);s+=line(cx+Math.cos(a)*50,cy+Math.sin(a)*50,cx+Math.cos(a)*59,cy+Math.sin(a)*59,'#657681',2);s+=`<ellipse cx="${x}" cy="${y}" rx="${i%2?8:12}" ry="7" fill="${i%3===0?C.orange:i%3===1?C.purple:C.teal}" transform="rotate(${a*180/Math.PI} ${x} ${y})"/>`;}s+=text(400,43,T('Milieu biologique : adsorption et échanges','Biological medium: adsorption and exchange'),21)+text(210,365,T('Identité synthétique → identité biologique','Synthetic identity → biological identity'),16);}
if(m.kind==='fate'){s=`<path d="M72 80 Q400 10 735 85 Q795 220 710 335 Q410 410 90 335 Q20 210 72 80Z" fill="#fbf5f8" stroke="#bea1b0" stroke-width="3"/>`;const regions=[[180,160,45,'#dcece6'],[350,210,60,'#d1dfe8'],[560,240,78,'#dac9e6']];for(const [x,y,r,c]of regions)s+=circle(x,y,r,c,'#7f7191',2);s+=text(180,96,T('Précoce','Early'),16)+text(350,125,T('Tardif','Late'),16)+text(560,135,T('Lysosomal','Lysosomal'),16)+text(405,375,T('Acidification progressive · durées non représentées','Progressive acidification · durations not represented'),16);let x,y,r=6;if(u<.2){x=75+u/.2*105;y=55+u/.2*105;}else if(u<.4){x=180+(u-.2)/.2*170;y=160+(u-.2)/.2*50;}else{x=u<.6?350+(u-.4)/.2*210:560;y=u<.6?210+(u-.4)/.2*30:240;}if(u>.04&&u<.6)s+=circle(x,y,29,'#dcece688','#7f7191',2);for(let i=0;i<7;i++){const a=i/7*Math.PI*2;let rad=u>.6?14+Math.min(1,(u-.6)/.2)*42:14;let pr=u>.8?Math.max(1,6*(1-(u-.8)/.2)):6;s+=circle(x+rad*Math.cos(a),y+rad*Math.sin(a),pr,C.ink);}if(u>.8){const v=(u-.8)/.2;s+=circle(697,245,22,'#fff',C.orange,3)+text(697,290,T('Ferritine','Ferritin'),15);for(let i=0;i<7;i++){const a=i*2.4;let sx=560+56*Math.cos(a),sy=240+56*Math.sin(a);s+=circle(sx+(697-sx)*v,sy+(245-sy)*v,2.5,C.orange);}s+=text(630,190,T('Fer · trajet symbolique','Iron · symbolic route'),13,C.orange);} }
if(m.kind==='mri'){const time=30*(Math.pow(101,u)-1),t1=values.T1,t2=values.T2,mz=1-Math.exp(-time/t1),mxy=Math.exp(-time/t2),blue='#0874b5',green='#00a657';
s+=text(70,35,'A',20)+text(320,35,'B',20)+line(95,260,95,90)+line(95,260,225,260)+line(95,260,55,305)+text(95,75,'z',15)+text(232,277,'y',15)+text(45,318,'x',15)+arrow(48,150,0,47,'#e5b100',5)+text(42,95,'B₀',17,'#bf9300')+arrow(202,180,Math.PI/2,25,'#92999b',6)+text(208,154,'B₁',17,'#92999b');
s+=line(95,260,95,260-130*mz,blue,4)+line(95,260,95+100*mxy,260,green,4)+line(95,260,95+100*mxy,260-130*mz,C.ink,4)+circle(95+100*mxy,260-130*mz,5,C.ink)+line(95+100*mxy,260-130*mz,95+100*mxy,260,'#98b6b7',1,'4 4')+text(60,230-120*mz,'Mz',16,blue)+text(140,288,'Mxy',16,green)+text(128,360,T('Après l’impulsion de 90°','After the 90° pulse'),15);
const ps=Array.from({length:121},(_,i)=>i*25);s+=chart([[ps.map(t=>[t,1-Math.exp(-t/t1)]),blue]],3000,1,'t (ms)','Mz / M₀',[310,75,200,210])+chart([[ps.map(t=>[t,Math.exp(-t/t2)]),green]],3000,1,'t (ms)','Mxy / M₀',[570,75,200,210]);
const y1=285-210*(1-Math.exp(-1)),y2=285-210*Math.exp(-1);s+=line(310,y1,310+200*t1/3000,y1,'#607684',1,'4 4')+line(310+200*t1/3000,y1,310+200*t1/3000,285,'#607684',1,'4 4')+text(310+200*t1/3000,338,'T₁',15,blue)+text(285,y1+5,'0.63',13,blue)+line(570,y2,570+200*t2/3000,y2,'#607684',1,'4 4')+line(570+200*t2/3000,y2,570+200*t2/3000,285,'#607684',1,'4 4')+text(570+200*t2/3000,338,'T₂',15,green)+text(545,y2+5,'0.37',13,green)+circle(310+200*time/3000,285-210*mz,5,blue)+circle(570+200*time/3000,285-210*mxy,5,green)+text(410,370,T('Relaxation longitudinale','Longitudinal relaxation'),15)+text(665,370,T('Relaxation transverse','Transverse relaxation'),15);
$('math').innerHTML='Mz(t)/M₀ = 1 − exp(−t/T₁) · Mxy(t)/M₀ = exp(−t/T₂)<br>'+T('Bleu : récupération longitudinale · vert : décroissance transverse.','Blue: longitudinal recovery · green: transverse decay.')+' · t = '+Math.round(time)+' ms · '+T('Lecture à pas de temps logarithmique','Logarithmic playback time steps');}
if(m.kind==='mpi'){const pos=100+600*u;s+=text(400,45,T('Région de champ faible en déplacement','Moving low-field region'),21)+`<rect x="100" y="100" width="600" height="110" rx="35" fill="#eef3f3"/>`+`<rect x="${pos-25}" y="85" width="50" height="140" fill="#e8c8a8" opacity=".6"/>`;for(let i=0;i<16;i++){const x=120+i*37;let a=Math.PI/2*(1+Math.tanh((x-pos)/30));s+=circle(x,155,8,C.teal)+arrow(x,155,a,27,C.ink,2);}const pts=Array.from({length:121},(_,i)=>[100+i*5,340-65/Math.cosh((100+i*5-pos)/35)**2]);s+=path(pts,C.orange)+line(100,340,700,340)+text(400,378,T('Sensibilité locale illustrative','Illustrative local sensitivity'),16);}
if(m.kind==='heat'){const p=u*2*Math.PI,h=Math.sin(p),mm=Math.sin(p-.55);s+=text(180,60,'H(t)',22)+arrow(180,195,h>=0?0:Math.PI,Math.max(1,Math.abs(h)*100),C.teal,5)+sphere(180,195,48,mm>=0?0:Math.PI)+text(180,335,T('Champ alternatif','Alternating field'),18);const points=Array.from({length:121},(_,i)=>{let t=i/120*2*Math.PI;return[575+135*Math.sin(t),195-100*Math.sin(t-.55)]});s+=line(410,195,740,195)+line(575,70,575,320)+`<path d="${points.map((p,i)=>(i?'L':'M')+p.join(' ')).join(' ')}Z" fill="#a66b491b" stroke="#b8c5cc" stroke-width="1"/>`+path(points.slice(0,Math.max(2,Math.ceil(u*120))),C.orange)+circle(575+135*h,195-100*mm,7,C.teal)+text(745,220,'H',16)+text(600,70,'M',16)+text(575,360,T('Aire du cycle → dissipation','Loop area → dissipation'),18);$('math').innerHTML=T('Illustration : H = H₀ sin(ωt), M = M₀ sin(ωt − φ), φ fixé.','Illustration: H = H₀ sin(ωt), M = M₀ sin(ωt − φ), fixed φ.');}
$('stage').innerHTML=svg(s);}
function exportVector(target){stop();const saved=lang;lang=target;draw();let raw=$('stage').innerHTML.replace(/(<svg[^>]*>)/,'$1'+VECTOR_DEFS);if(!raw.includes('xmlns:xlink='))raw=raw.replace('<svg ','<svg xmlns:xlink="http://www.w3.org/1999/xlink" ');raw=raw.replace(/<use href="([^"]+)"/g,'<use href="$1" xlink:href="$1"');lang=saved;draw();const blob=new Blob([raw],{type:'image/svg+xml;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='NanoBioMat-'+current+'-'+target+'.svg';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
$('exportFR').onclick=()=>exportVector('fr');$('exportEN').onclick=()=>exportVector('en');$('enlarge').onclick=()=>{stop();$('zoomContent').innerHTML=$('stage').innerHTML;$('zoom').showModal();};$('closeZoom').onclick=()=>$('zoom').close();$('language').onclick=()=>{lang=lang==='fr'?'en':'fr';render();};$('timeline').oninput=e=>{stop();u=+e.target.value/1000;draw();};$('reset').onclick=()=>{stop();u=0;draw();};$('play').onclick=()=>{if(playing){stop();return;}if(u>=1)u=0;playing=true;$('play').textContent=T('Pause','Pause');u=Math.min(.995,u+.012);draw();last=performance.now();function tick(now){if(!playing)return;u=Math.min(1,u+(now-last)/18000);last=now;draw();if(u>=1)stop();else raf=requestAnimationFrame(tick);}raf=requestAnimationFrame(tick);};document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});initializeRoute();render();

function routeKeys(){return ['particles','assemblies','biointerfaces'];}
function readRoute(){
 if(typeof window==='undefined')return;
 const q=new URLSearchParams(window.location.search);
 if(q.get('lang')==='fr'||q.get('lang')==='en')lang=q.get('lang');
 const parts=window.location.hash.slice(1).split('/'),n=routeKeys().indexOf(parts[0]);
 if(n>=0){axis=n;current=D[parts[1]]&&D[parts[1]].a===n?parts[1]:Object.keys(D).find(k=>D[k].a===n);}
}
function writeRoute(push=false){
 if(typeof window==='undefined')return;
 const url=new URL(window.location.href);url.searchParams.set('lang',lang);url.hash=routeKeys()[axis]+'/'+current;
 try{window.history[push?'pushState':'replaceState']({},'',url);}catch(e){}
}
function initializeRoute(){
 readRoute();
 if(typeof window!=='undefined'){window.addEventListener('popstate',()=>{readRoute();u=0;values={};render();});window.addEventListener('hashchange',()=>{readRoute();u=0;values={};render();});}
}
function chooseModule(k){
 if(!D[k])return;current=k;axis=D[k].a;u=0;values={};writeRoute(true);render();
 const content=$('content');if(content.focus)content.focus({preventScroll:true});
 if(typeof window!=='undefined'&&window.innerWidth<760)content.scrollIntoView({block:'start',behavior:'auto'});
}
function renderModuleNavigation(){
 const list=Object.keys(D).filter(k=>D[k].a===axis),i=list.indexOf(current);
 $('modulePosition').textContent=T('Module ','Module ')+(i+1)+' / '+list.length;
 $('backResearch').textContent=T('Retour à Recherche','Back to Research');
 $('backResearch').href='../'+(lang==='fr'?'fr/':'')+'research.html#'+routeKeys()[axis];
 $('moduleSelectLabel').textContent=T('Choisir une explication','Choose an explanation');
 $('moduleSelect').innerHTML=list.map(k=>'<option value="'+k+'">'+D[k].n[lang==='fr'?0:1]+'</option>').join('');
 $('moduleSelect').value=current;$('moduleSelect').onchange=e=>chooseModule(e.target.value);
 $('previousModule').textContent=T('Module précédent','Previous module');$('previousModule').disabled=i===0;
 $('nextModule').textContent=T('Module suivant','Next module');$('nextModule').disabled=i===list.length-1;
 $('previousModule').onclick=()=>chooseModule(list[i-1]);$('nextModule').onclick=()=>chooseModule(list[i+1]);
 const theme=['#31579c','#7552a0','#22786b'][axis];
 if(document.documentElement.style)document.documentElement.style.setProperty('--axis-color',theme);
 writeRoute();
}
