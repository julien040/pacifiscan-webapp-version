export const wastesType = {
  Ampoule: {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/ampoule.png",
    quefaireTexte:
      "Les ampoules sont recyclables. En Nouvelle Calédonie, Trecodec récupère les déchets électroniques et les conditionne pour le recyclage",
    impactTexte:
      "Les ampoules LED n’ont pas d’influence sur la biodiversité marine. Cependant, la pollution lumineuse est un problème pour la majorité des espèces terrestres",
    eviterTexte:
      "Pour réduire votre impact, utiliser des ampoules avec une meilleure efficience énergétique ou avec une plus grande durée de vie.",
    poids: 0.08,
    sources: "geo.fr, ademe, trecodec",
    anneeDecomposition: 500,
    ouJeter: [
      "d_boulouparis",
      "d_bourail",
      "d_ducos",
      "d_la-foa",
      "d_pihnyip",
      "d_thio",
      "traivaldec",
      "tre_deee",
    ],
  },
  Batterie: {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/batterie.png",
    quefaireTexte:
      "Vous pouvez déposer vos piles et accumulateurs dans les points de collecte Trécodec en magasin. Pour une batterie de voiture, rendez-vous en déchetterie ou dans certaines stations service",
    impactTexte:
      "Il est important de jeter correctement ses batteries car elles renferment des substances dangereuses pour l’environnement. De plus, leurs productions consomment énormément d’eau.",
    eviterTexte:
      "Les batteries ont une durée de vie. Il est dès lors impossible de les garder indéfiniment. Cependant, elles restent préférable à des piles non rechargeables",
    poids: 0.2,
    sources: "greenly.earth, stacker.com",
    anneeDecomposition: 100,
    ouJeter: [
      "d_6km",
      "d_boulouparis",
      "d_bourail",
      "d_ducos",
      "d_dumbea",
      "d_la-foa",
      "d_majenta",
      "d_mont-dore",
      "d_pihnyip",
      "traivaldec",
      "tre_batterie",
      "tre_pile",
    ],
  },
  "Boite d'oeuf": {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/boite-oeuf.png",
    quefaireTexte:
      "Si la boite est en carton, vous pouvez la déposer en déchetterie ou en point d’apport volontaire. Son recyclage permet de créer du papier toilette ou de l’essuie-tout. Vous pouvez aussi la mettre dans votre compost\nSi la boite est en plastique, mettez la dans votre poubelle usuelle.",
    impactTexte:
      "La boite en carton a un impact limité car elle se décompose rapidement. Cependant, la boite en plastique est plus dangereuse car elle risque de finir dans l’océan si elle n’est pas correctement jetée.",
    eviterTexte:
      "Il est préférable d’acheter des oeufs conditionnés dans une boîte en carton plutôt qu’en plastique. En effet, elles sont plus faciles à recycler. De plus, préférez les emballages plus denses pour éviter la création de déchets inutiles",
    poids: 0.05,
    sources: "Ademe, treehuger, cci",
    anneeDecomposition: 0.02,
    ouJeter: [
      "d_6km",
      "d_ducos",
      "d_dumbea",
      "d_gadji",
      "d_kone",
      "d_majenta",
      "d_mont-dore",
      "d_pouembout",
      "d_voh",
      "pav_jaune",
      "pj_dumbea",
      "pj_mont-dore",
      "pn",
      "pr_sivm-nord",
    ],
  },
  "Boite de conserve": {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/conserve.png",
    quefaireTexte:
      "Si votre commune supporte le tri sélectif, mettez la boite de conserve dans la poubelle prévue à cet effet. Sinon, déposez-la en déchetterie. ",
    impactTexte:
      "La production de métal consomme énormément de ressources et pollue énormément. Elle entraîne la création de CO2 qui, une fois dans l’atmosphère, acidifie l’océan. De plus, le bauxite nécessaire à la création d’aluminium ajoute des toxines à l’eau",
    eviterTexte:
      "Préférez les emballages plus denses pour éviter le suremballage.",
    poids: 0.4,
    sources: "Ademe, Reuters, container-recycling",
    anneeDecomposition: 50,
    ouJeter: [
      "d_canala",
      "d_ducos",
      "d_gadji",
      "d_mont-dore",
      "d_pihnyip",
      "pj_dumbea",
      "pj_mont-dore",
      "pr_sivm-nord",
      "traivaldec",
    ],
  },
  "Bombe aerosol": {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/deodorant.png",
    quefaireTexte:
      "Du fait du risque d’explosion, il est difficile de recycler les aérosols. Vous pouvez les jeter dans votre poubelle usuelle.",
    impactTexte:
      "L’impact de l’aérosol dépend de la nature de celui-ci. Certains sont inflammables, d’autres relâchent des gazs dangereux pour la vie. De plus, la production de métal pollue les eaux environnantes",
    eviterTexte:
      "Préferez les aérosols compressés : ils renferment la même contenance pour un emballage moindre. Regardez aussi si le produit n’existe pas en version liquide.",
    poids: 0.1,
    sources: "Ademe, container-recycling",
    anneeDecomposition: 50,
    ouJeter: ["pn"],
  },
  "Bouteille en plastique": {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/bouteille.png",
    quefaireTexte:
      "Une fois vide, si la bouteille ne contient pas de produits dangereux, déposez-la en déchetterie ou au tri sélectif si ma commune le supporte. Sinon, jetez-là dans la poubelle usuelle. Faites attention, certains liquides suivent une réglementation spéciale (l’huile de voiture par exemple)",
    impactTexte:
      "La production de la bouteille utilise du pétrole qui n’est pas renouvelable. De plus, une part non négligeable des bouteilles finissent dans l’océan une fois utilisée contribuant à tuer près de 100 000 animaux par an",
    eviterTexte:
      "Pour éviter d’utiliser des bouteilles d’eau, achetez une gourde. Dans le cas de produits d’entretien, privilégiez les produits concentrés ou les éco-recharges",
    poids: 0.1,
    sources: "Ademe, gogreen",
    anneeDecomposition: 450,
    ouJeter: [
      "d_6km",
      "d_boulouparis",
      "d_canala",
      "d_ducos",
      "d_dumbea",
      "d_gadji",
      "d_kone",
      "d_majenta",
      "d_mont-dore",
      "d_pouembout",
      "d_thio",
      "d_voh",
      "pj_dumbea",
      "pj_mont-dore",
    ],
  },
  "Bouteille en verre": {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/bouteille-verre.png",
    quefaireTexte:
      "Si vous l’utilisez pour de l’eau, remplissez la pour ne pas la jeter. Sinon, déposez la en déchetterie ou dans des bornes pour le verre. Elle sera recyclée pour refaire du verre.",
    impactTexte:
      "La bouteille en verre consomme plus d’énergie à la production comparé à une bouteille en plastique. Cependant, son impact est plus limité une fois produite. ",
    eviterTexte:
      "Privilégiez les bouteilles avec plus de contenant. Puisqu’en verre, la bouteille peut être remplie à nouveau et être réutilisée",
    poids: 0.2,
    sources: "earth.org, usi.edu",
    anneeDecomposition: 4000,
    ouJeter: [
      "d_6km",
      "d_boulouparis",
      "d_bourail",
      "d_ducos",
      "d_dumbea",
      "d_gadji",
      "d_kone",
      "d_la-foa",
      "d_majenta",
      "d_pouembout",
      "d_thio",
      "d_voh",
      "pav_vert",
      "pb_sivm-nord",
    ],
  },
  Canette: {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/canette.png",
    quefaireTexte:
      "Si votre commune supporte le tri sélectif, mettez la canette dans la poubelle prévue à cet effet. Sinon, déposez-la en déchetterie. ",
    impactTexte:
      "La production de métal consomme énormément de ressources et pollue énormément. Elle entraîne la création de CO2 qui, une fois dans l’atmosphère, acidifie l’océan. De plus, le bauxite nécessaire à la création d’aluminium ajoute des toxines à l’eau",
    eviterTexte: "Préférez les bouteilles aux canettes individuelles",
    poids: 0.1,
    sources: "Ademe, stacker.com",
    anneeDecomposition: 500,
    ouJeter: [
      "d_6km",
      "d_ducos",
      "d_dumbea",
      "d_gadji",
      "d_kone",
      "d_majenta",
      "d_mont-dore",
      "d_pouembout",
      "d_voh",
      "pav_jaune",
      "pj_dumbea",
      "pj_mont-dore",
      "pn",
      "pr_sivm-nord",
    ],
  },
  Carton: {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/carton.png",
    quefaireTexte:
      "S’il est en bonne état, réutilisez-le. Sinon, déposez le dans le sac prévu à cet effet si votre commune le supporte. Une fois recyclé, il permettra de créer de nouveaux produits papiers et cartons",
    impactTexte:
      "La production de carton nécessite la coupe d’arbre. Bien qu’issue de forêts gêrées, cela perturbe tout de même les ecosystèmes. De plus, le carton libère du méthane lors de sa décomposition",
    eviterTexte: "Privilégiez les produits avec le moins de sur-emballage.",
    poids: 0.1,
    sources: "Ademe, regionalrecycling.org",
    anneeDecomposition: 0.04,
    ouJeter: [
      "d_6km",
      "d_canala",
      "d_ducos",
      "d_dumbea",
      "d_gadji",
      "d_kone",
      "d_majenta",
      "d_pouembout",
      "d_voh",
      "pj_dumbea",
      "pj_mont-dore",
    ],
  },
  "Cartouche d'encre": {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/encre.png",
    quefaireTexte:
      "Il n’existe pas de filière de traitement en Nouvelle-Calédonie. Jetez votre cartouche dans la poubelle noire.",
    impactTexte:
      "Les cartouches d’encre sont composés de plusieurs éléments. Leur carte électronique nécessite l’extraction de terre rare. Leur plastique est fait à base de pétrole. Une cartouches d’encre crée la majeure partie de son impact à la production.\nSi relâchées dans la nature, elles risquent de déverser des substances toxiques.\nDans certains pays, les cartouches d’encre retournées au fabricant sont remplies à nouveau pour éviter d’en produire de nouvelles.",
    eviterTexte:
      "Il est difficile d’éviter d’acheter des cartouches d’encres. Cependant, certaines marques comme Epson propose des imprimantes fonctionnant avec un réservoir plutôt qu’avec des cartouches. Cela réduit drastiquement les déchets",
    poids: 0.4,
    sources: "Ademe",
    anneeDecomposition: 450,
    ouJeter: ["pn"],
  },
  Cigarette: {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/cigarette.png",
    quefaireTexte: "Jetez le mégot dans la poubelle noire",
    impactTexte:
      "La production de tabac nécessite de grandes quantités d’eau et de pesticides. Ces produits chimiques finissent dans l’eau et pollue les espèces vivant près des zones de production",
    eviterTexte:
      "Arrêter de fumer est un moyen d’éviter de produire des mégots",
    poids: 0.005,
    sources: "conserve-energy-future.com",
    anneeDecomposition: 10,
    ouJeter: ["pn"],
  },
  "Déchets verts": {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/dechets-verts.png",
    quefaireTexte:
      "Tournez vous vers la déchetterie la plus proche pour y déposer vos déchets verts. Vous pouvez aussi en faire du compost et ainsi avoir de l’engrais pour vos plantations.\nIl est déconseillé de les brûler car cela rejette du CO2 dans l’atmosphère",
    impactTexte:
      "Les déchets verts sont naturels, ils n’ont pas d’impact négatif",
    eviterTexte: "Privilégiez des plantes à croissance lente",
    poids: 1,
    sources: "Ademe, CCI",
    anneeDecomposition: 0.08,
    ouJeter: [
      "composte",
      "d_6km",
      "d_boulouparis",
      "d_bourail",
      "d_ducos",
      "d_dumbea",
      "d_gadji",
      "d_kone",
      "d_la-foa",
      "d_majenta",
      "d_mont-dore",
      "d_pouembout",
      "d_thio",
      "d_voh",
      "pn",
    ],
  },
  Electroménager: {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/electromenager.png",
    quefaireTexte:
      "Dans un premier temps, appelez un réparateur.  SI vous achetez une machine, tournez vous vers le magasin pour savoir s’il propose de récupérer votre ancienne machine. Enfin, si aucune de ces solutions n’est possible, déposez la machine en déchetterie",
    impactTexte:
      "Suivant la machine, les risques diffèrent. Par exemple, un réfrigérateur contient du gaz. Laissée dans la nature, l’objet peut être mettre des centaines d’années à se décomposer et ainsi perturber l’environnement durablement",
    eviterTexte:
      "Faites appel à un répérateur plutôt que de jeter votre électroménager",
    poids: 10,
    sources: "Ademe, Stacker, CCI",
    anneeDecomposition: 500,
    ouJeter: [
      "d_6km",
      "d_boulouparis",
      "d_bourail",
      "d_canala",
      "d_ducos",
      "d_dumbea",
      "d_gadji",
      "d_la-foa",
      "d_majenta",
      "d_mont-dore",
      "d_pihnyip",
      "d_thio",
      "traivaldec",
      "tre_deee",
    ],
  },
  "Emballage plastique": {
    image:
      "https://oncle-stan.pacifiscan.org/dechet-96/emballage-plastique.png",
    quefaireTexte:
      "Il est dur de différencier chaque type de plastique et il n’existe pas vraiment de fillière en Nouvelle-Calédonie. Jetez-les dans la poubelle noire",
    impactTexte:
      "Si jetés dans la nature, le plastique risque de finir dans l’océan et ainsi être ingéré par un animal",
    eviterTexte: "Préférez les produits sans sur-emballage",
    poids: 0.001,
    sources: "Stacker",
    anneeDecomposition: 500,
    ouJeter: ["pn"],
  },
  "Feuille d'aluminium": {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/feuille-aluminium.png",
    quefaireTexte:
      "Bien que l’aluminium puisse être totalement recyclé, actuellement le papier d’aluminium ne l’est pas. Jetez-le dans la poubelle noire.",
    impactTexte:
      "L’extraction de bauxite nécéssaire à la production d’aluminium est très énergivore. De plus, elle a tendance à contaminer les eaux environnantes. Une fois produit, il n’a pas tant d’impact sur la nature à part qu’il est presque impossible à décomposer",
    eviterTexte:
      "Il est difficile d’éviter le papier aluminium. Mais lors de vos achats, préférez les produits avec un opercule en papier.",
    poids: 0.01,
    sources: "forkintheroad.com",
    anneeDecomposition: 400,
    ouJeter: ["pn"],
  },
  "Fruits et légumes": {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/fruits-legumes.png",
    quefaireTexte:
      "Si le fruit ou légume est abimé, faites-en du compost. Sinon, jetez le dans la poubelle noire.",
    impactTexte:
      "Certaines productions peuvent contaminées en l’eau en utilisant des pesticides. Privilégiez les produits bio. En outre, consommez des produits de saison : vous réduirez le rejet de CO2",
    eviterTexte:
      "Dûr d’éviter les fruits et légumes. Cependant, évitez au maximum de produire des déchets. Ne faites pas de gaspillage et mangez entièrement le fruit.",
    poids: 0.4,
    sources: "Ademe",
    anneeDecomposition: 0.15,
    ouJeter: ["composte", "pn"],
  },
  Gobelet: {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/gobelet.png",
    quefaireTexte:
      "S’il est en plastique, jetez le dans la poubelle noire. S’il est en carton, mettez le dans le conteneur (ou sac) réservé au carton de votre commune.",
    impactTexte:
      "La production de ces gobelets crée du CO2 qui a tendance à acidifier l’océan. De plus, le carton libère du méthane lors de sa décomposition. Mais le principal risque est que le gobelet en plastique finisse dans l’océan et soit ingéré par un animal",
    eviterTexte:
      "Si vous pouvez boire dans un verre en verre, privilégiez-le. Vous éviterez de produire un déchet. Sinon, utilisez un gobelet en carton. Ils sont plus facilement recyclable.",
    poids: 0.02,
    sources: "Ademe",
    anneeDecomposition: 250,
    ouJeter: [
      "d_6km",
      "d_canala",
      "d_ducos",
      "d_dumbea",
      "d_gadji",
      "d_kone",
      "d_majenta",
      "d_pouembout",
      "d_voh",
      "pj_dumbea",
      "pj_mont-dore",
    ],
  },
  Masque: {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/masque.png",
    quefaireTexte:
      "Un masque possède un risque sanitaire. Si vous êtes malade, mettez-le dans un sac plastique et jetez-le sac dans la poubelle noire 24h plus tard. Sinon, jetez-le directement dans la poubelle noire",
    impactTexte:
      "Si le masque n’est pas correctement jeté, il risque de finir dans l’océan puis ingéré par un animal",
    eviterTexte:
      "Privilégiez les masques lavables pour ne pas produire de déchets",
    poids: 0.01,
    sources: "http://fishersci.ca/, ademe",
    anneeDecomposition: 450,
    ouJeter: ["pn"],
  },
  Meuble: {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/meuble.png",
    quefaireTexte:
      "Si le meuble est encore en bonne état, vendez-le sur un site d’annonce ou faites en un don à Saint-vincent de Paul, la croix-rouge ou le secours populaire. S’il est en mauvaise état, mettez-le à la déchetterie",
    impactTexte:
      "L’impact d’un meuble dépend de sa nature. Cependant, la plupart du temps, sa production rejette énormément de CO2 (extraction de bauxite, transport). De plus, la coupe d’arbre à des conséquences sur les écosystèmes alentours.",
    eviterTexte:
      "Impossible d’éviter d’acheter des meubles à part si vous êtes ermite.",
    poids: 30,
    sources: "wedesigngreen.com, Ademe",
    anneeDecomposition: 500,
    ouJeter: [
      "d_6km",
      "d_boulouparis",
      "d_bourail",
      "d_canala",
      "d_ducos",
      "d_dumbea",
      "d_gadji",
      "d_kone",
      "d_la-foa",
      "d_majenta",
      "d_mont-dore",
      "d_pouembout",
      "d_thio",
      "d_voh",
    ],
  },
  Mouchoir: {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/mouchoir.png",
    quefaireTexte:
      "Si vous êtes avez la Covid 19, mettez vos mouchoirs dans le sac prévu pour les masques puis jetez le sac au bout de 24h.\nSinon, jetez le mouchoir dans la poubelle noire",
    impactTexte:
      "La production de papier nécessite la coupe d’arbre. Bien qu’issue de forêts gêrées, cela perturbe tout de même les ecosystèmes",
    eviterTexte: "Vous pouvez utiliser des mouchoirs en tissue lavable",
    poids: 0.005,
    sources: "Ademe, Stacker",
    anneeDecomposition: 0.08,
    ouJeter: ["pn"],
  },
  Papier: {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/papier.png",
    quefaireTexte:
      "S’il est imprimé qu’en recto réutilisez-le comme papier brouillon. Sinon, déposez le dans les bacs bleus ou dans le sac prévu à cet effet si votre commune le supporte. Une fois recyclé, il permettra de créer de nouveaux produits papiers.",
    impactTexte:
      "La production de papier nécessite la coupe d’arbre. Bien qu’issue de forêts gêrées, cela perturbe tout de même les ecosystèmes",
    eviterTexte:
      "Imprimez que si c’est nécessaire. Sinon conservez la version en ligne",
    poids: 0.01,
    sources: "CCI, mairie de Nouméa",
    anneeDecomposition: 0.08,
    ouJeter: [
      "d_6km",
      "d_canala",
      "d_ducos",
      "d_dumbea",
      "d_gadji",
      "d_kone",
      "d_majenta",
      "d_pouembout",
      "d_voh",
      "pav_bleu",
      "pj_dumbea",
      "pj_mont-dore",
    ],
  },
  Pneu: {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/pneu.png",
    quefaireTexte:
      "Une fois abimé, déposez les dans les points d’apport volontaire Trecodec",
    impactTexte:
      "Le pneu laissé au soleil risque de libérer du méthane dans l’atmosphère. De plus, le pneu est fait à partir de gomme synthétique tirée du pétrole",
    eviterTexte: "Entretenez vos pneus pour ne pas les abimer prématurement.",
    poids: 7,
    sources: "ecogreenequipment.com, playgroundprofessionals",
    anneeDecomposition: 50,
    ouJeter: [
      "d_boulouparis",
      "d_bourail",
      "d_ducos",
      "d_kone",
      "d_la-foa",
      "d_pouembout",
      "d_thio",
      "d_voh",
      "tre_pneu",
    ],
  },
  "Sac cabas": {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/cabas.png",
    quefaireTexte:
      "Tournez vous vers votre magasin. Certains offrent la possibilité de l’échanger contre un neuf. Sinon, offrez le à une association ou jetez-le dans la poubelle noire.",
    impactTexte:
      "Suivant sa matière, le sac n’a pas le même impact. En plastique, il nécessite du pétrole. En coton, sa production nécessite énormément d’eau ce qui assèche les écosystèmes",
    eviterTexte:
      "Réutilisez vos sacs plutôt que d’en prendre un nouveau à chaque passage en caisse",
    poids: 0.05,
    sources: "NyTimes",
    anneeDecomposition: 0.5,
    ouJeter: ["pav_violet", "pn"],
  },
  "Sachet plastique": {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/sachet-plastique.png",
    quefaireTexte:
      "Il n’existe pas de filière en Nouvelle-Calédonie pour le recyclage des sachets plastiques. Jetez les dans la poubelle noire",
    impactTexte:
      "La production de ces plastiques nécéssite l’extraction de pétrole. S’il n’est pas biodégradable, il mettra des centaines d’années à se décomposer.\nIl y a aussi un risque que le sachet finisse dans l’océan et étouffe un animal.",
    eviterTexte: "Privilégiez les sacs réutilisables ou biodégradables",
    poids: 0.005,
    sources: "Ademe",
    anneeDecomposition: 1000,
    ouJeter: ["pn"],
  },
  Stylo: {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/stylo.png",
    quefaireTexte:
      "Il n’existe pas de fillière de recyclage en Nouvelle-Calédonie. Jetez-le dans la poubelle noire",
    impactTexte:
      "Etant fait de plastique, les stylos ne sont pas biodégradables. Il risque de se décomposer en micro plastique dans l’océan.",
    eviterTexte: "Utilisez des stylos à encre rechargeable",
    poids: 0.4,
    sources: "conserve-energy-future.com",
    anneeDecomposition: 1000,
    ouJeter: ["pn"],
  },
  "Tetra pak": {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/brique.png",
    quefaireTexte:
      "Du fait de sa complexité, il n’existe pas de fillière de recyclage en Nouvelle-Calédonie. Jetez la brique dans la poubelle noire.",
    impactTexte:
      "La plupart du temps, ces briques sont faites de matériaux recyclés et contiennent principalement du carton.",
    eviterTexte:
      "Privilégiez les emballages plus denses aux briques individuelles",
    poids: 0.1,
    sources: "drinkpathwater.com",
    anneeDecomposition: 5,
    ouJeter: ["pn"],
  },
  Vêtements: {
    image: "https://oncle-stan.pacifiscan.org/dechet-96/vetements.png",
    quefaireTexte:
      "Si le vêtement est encore en bonne état, donnez le à une association ou vendez-le. Sinon vous pouvez les transformer en chiffons. Dans un dernier temps, jetez-le dans la poubelle noire",
    impactTexte:
      "D’après l’UNEP, l’industrie textile représente près de 8% des émissions de CO2 mondiale. Réduire l’achat de vêtements, c’est réduire les émissions de CO2 et l’acidification des océans.",
    eviterTexte: "Achetez des vêtements produits localement.",
    poids: 0.3,
    sources: "Ville de Nouméa, Jackalo",
    anneeDecomposition: 200,
    ouJeter: ["pav_violet", "pn"],
  },
};

export const associationApi = {
  Light: "Ampoule",
  Battery: "Batterie",
  "Egg box": "Boite d'oeuf",
  "Tin can": "Boite de conserve",
  Deodorant: "Bombe aerosol",
  "Plastic bottle": "Bouteille en plastique",
  "Glass bottle": "Bouteille en verre",
  Soda: "Canette",
  Cardboard: "Carton",
  "Ink cartridge": "Cartouche d'encre",
  Cigarette: "Cigarette",
  Plants: "Déchets verts",
  Appliances: "Electroménager",
  "Plastic wrap": "Emballage plastique",
  "Aluminium foil": "Feuille d'aluminium",
  "Fruits or vegetables": "Fruits et légumes",
  Cup: "Gobelet",
  Mask: "Masque",
  Furniture: "Meuble",
  Tissue: "Mouchoir",
  Paper: "Papier",
  Tyre: "Pneu",
  "Tote bag": "Sac cabas",
  "Plastic bag": "Sachet plastique",
  Pen: "Stylo",
  "Milk carton": "Tetra pak",
  Clothes: "Vêtements",
};
