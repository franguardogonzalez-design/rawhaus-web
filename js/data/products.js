const RAWHAUS_PRODUCTS = [
  {
    id: "mesa-auren",
    name: "Mesa Auren",
    category: "Mesas de comedor",
    price: 1290,
    image: "assets/images/products/mesa-auren-catalogo.png",
    gallery: [
      "assets/images/products/mesa-auren-ambiente.png",
      "assets/images/products/mesa-auren-catalogo.png",
      "assets/images/products/mesa-auren-detalle.png"
    ],
    shortDescription: "Mesa de comedor con sobre de roble macizo y estructura perimetral de hierro negro satinado.",
    description: "Auren es una mesa de comedor de presencia limpia y arquitectura precisa. El sobre grueso de roble aporta calidez y textura natural, mientras la estructura rectangular de hierro negro satinado define una silueta robusta, estable y contemporanea.",
    materials: ["Roble macizo", "Hierro negro satinado", "Protector mate de alto rendimiento"],
    dimensions: ["180 x 90 x 75 cm", "200 x 100 x 75 cm", "220 x 100 x 75 cm", "Medida personalizada"],
    finishes: ["Roble natural", "Roble ahumado", "Negro satinado"],
    leadTime: "5-7 semanas",
    customizable: true,
    featured: true
  },
  {
    id: "mesa-varek",
    name: "Mesa Varek",
    category: "Mesas de comedor",
    price: 1390,
    image: "assets/images/products/mesa-varek-catalogo.png",
    gallery: [
      "assets/images/products/mesa-varek-ambiente.png",
      "assets/images/products/mesa-varek-catalogo.png",
      "assets/images/products/mesa-varek-detalle.png"
    ],
    shortDescription: "Mesa de comedor con sobre de roble macizo y patas metalicas tipo portico en negro satinado.",
    description: "Varek combina una superficie generosa de roble macizo con dos patas tipo portico fabricadas en pletina de hierro negro satinado. Su silueta es mas abierta que una estructura perimetral, pero mantiene una presencia firme, arquitectonica y muy contemporanea.",
    materials: ["Roble macizo", "Hierro negro satinado en pletina", "Protector mate de alto rendimiento"],
    dimensions: ["180 x 90 x 75 cm", "200 x 100 x 75 cm", "220 x 100 x 75 cm", "Medida personalizada"],
    finishes: ["Roble natural", "Roble ahumado", "Negro satinado"],
    leadTime: "5-7 semanas",
    customizable: true,
    featured: true
  },
  {
    id: "mesa-laren",
    name: "Mesa Laren",
    category: "Mesas de comedor",
    price: 1320,
    image: "assets/images/products/mesa-laren-catalogo.png",
    gallery: [
      "assets/images/products/mesa-laren-ambiente.png",
      "assets/images/products/mesa-laren-catalogo.png",
      "assets/images/products/mesa-laren-detalle.png"
    ],
    shortDescription: "Mesa de comedor de roble macizo con patas negras tipo U alineadas a pano con los laterales.",
    description: "Laren trabaja la fuerza del hierro desde una presencia contenida. Sus dos patas tipo U quedan a pano con los laterales del sobre de roble macizo, dejando el centro abierto y creando una mesa sobria, estable y facil de integrar en interiores contemporaneos.",
    materials: ["Roble macizo", "Hierro negro satinado", "Protector mate de alto rendimiento"],
    dimensions: ["160 x 80 x 75 cm", "180 x 90 x 75 cm", "200 x 90 x 75 cm", "Medida personalizada"],
    finishes: ["Roble natural", "Roble ahumado", "Negro satinado"],
    leadTime: "5-7 semanas",
    customizable: true,
    featured: true
  },
  {
    id: "mesa-centro-luma",
    name: "Mesa de centro Luma",
    category: "Mesas de centro",
    price: 680,
    image: "assets/images/products/mesa-centro-luma-general.png",
    gallery: [
      "assets/images/products/mesa-centro-luma-ambiente.png",
      "assets/images/products/mesa-centro-luma-general.png",
      "assets/images/products/mesa-centro-luma-detalle.png"
    ],
    shortDescription: "Mesa de centro rectangular con sobre de roble y estructura perimetral de hierro negro.",
    description: "Luma lleva el lenguaje RawHaus al salon con una silueta limpia, baja y muy arquitectonica. El sobre de madera aporta calidez visual mientras la estructura perimetral de hierro negro define una pieza firme, ligera a la vista y facil de integrar en interiores contemporaneos.",
    materials: ["Roble macizo", "Hierro negro satinado", "Acabado protector mate"],
    dimensions: ["110 x 60 x 36 cm", "130 x 70 x 36 cm", "Medida personalizada"],
    finishes: ["Roble natural", "Roble oscuro", "Hierro negro satinado"],
    leadTime: "4-6 semanas",
    customizable: true,
    featured: true
  },
  {
    id: "mesa-centro-aral",
    name: "Mesa de centro Aral",
    category: "Mesas de centro",
    price: 720,
    image: "assets/images/products/mesa-centro-aral-general.png",
    gallery: [
      "assets/images/products/mesa-centro-aral-ambiente.png",
      "assets/images/products/mesa-centro-aral-general.png",
      "assets/images/products/mesa-centro-aral-detalle.png"
    ],
    shortDescription: "Mesa baja de roble macizo con canto biselado y patas metalicas tipo portico.",
    description: "Aral combina un sobre grueso de roble macizo con patas tipo portico en hierro negro satinado. Su canto biselado aligera visualmente la pieza sin perder presencia, creando una mesa de centro sobria, estable y con un punto escultorico.",
    materials: ["Roble macizo", "Hierro negro satinado en pletina", "Acabado protector mate"],
    dimensions: ["120 x 60 x 34 cm", "140 x 70 x 34 cm", "Medida personalizada"],
    finishes: ["Roble natural", "Roble ahumado", "Hierro negro satinado"],
    leadTime: "4-6 semanas",
    customizable: true,
    featured: true
  },
  {
    id: "mesa-centro-aizkorri",
    name: "Mesa de centro Solen",
    category: "Mesas de centro",
    price: 890,
    image: "assets/images/products/mesa-centro-aizkorri-general.png",
    gallery: [
      "assets/images/products/mesa-centro-aizkorri-ambiente.png",
      "assets/images/products/mesa-centro-aizkorri-general.png",
      "assets/images/products/mesa-centro-aizkorri-detalle.png"
    ],
    shortDescription: "Mesa de centro con doble balda de roble y estructura perimetral de hierro negro.",
    description: "Solen suma funcionalidad sin romper la limpieza formal de RawHaus. Su doble superficie de madera permite ordenar libros, objetos y piezas de uso diario, mientras la estructura de hierro negro mantiene una lectura precisa, robusta y contemporanea.",
    materials: ["Roble macizo", "Balda inferior de roble", "Hierro negro satinado"],
    dimensions: ["120 x 60 x 40 cm", "140 x 70 x 40 cm", "Medida personalizada"],
    finishes: ["Roble natural", "Roble ahumado", "Hierro negro satinado"],
    leadTime: "4-6 semanas",
    customizable: true,
    featured: true
  },
  {
    id: "estanteria-linea",
    name: "Estanteria Vetra",
    category: "Estanterias",
    price: 980,
    image: "assets/images/products/estanteria-vetra-general.png",
    gallery: [
      "assets/images/products/estanteria-vetra-ambiente.png",
      "assets/images/products/estanteria-vetra-general.png",
      "assets/images/products/estanteria-vetra-detalle.png"
    ],
    shortDescription: "Sistema abierto con baldas de roble y estructura metalica de alta precision.",
    description: "Vetra combina baldas de roble macizo, estructura vertical de hierro negro satinado y diagonales posteriores que aportan ritmo arquitectonico. Una pieza abierta para salon, estudio o comedor, pensada para exponer objetos con presencia limpia y contemporanea.",
    materials: ["Baldas de roble macizo", "Estructura de hierro", "Niveladores ocultos"],
    dimensions: ["120 x 36 x 180 cm", "160 x 36 x 200 cm", "Configuracion personalizada"],
    finishes: ["Roble natural", "Roble ahumado", "Negro satinado"],
    leadTime: "6-8 semanas",
    customizable: true,
    featured: true
  },
  {
    id: "estanteria-nara",
    name: "Estanteria Nara",
    category: "Estanterias",
    price: 1240,
    image: "assets/images/products/estanteria-nara-general.png",
    gallery: [
      "assets/images/products/estanteria-nara-ambiente.png",
      "assets/images/products/estanteria-nara-general.png",
      "assets/images/products/estanteria-nara-detalle.png"
    ],
    shortDescription: "Estanteria de roble macizo con estructura de hierro y modulo inferior cerrado.",
    description: "Nara combina exposicion abierta y almacenamiento discreto en una pieza vertical de presencia sobria. Las baldas de roble quedan enmarcadas por una estructura de hierro negro satinado, mientras el modulo inferior permite guardar objetos sin romper la lectura limpia del conjunto.",
    materials: ["Baldas de roble macizo", "Modulo inferior de roble", "Estructura de hierro negro satinado"],
    dimensions: ["100 x 38 x 190 cm", "120 x 38 x 210 cm", "Configuracion personalizada"],
    finishes: ["Roble natural", "Roble ahumado", "Negro satinado"],
    leadTime: "6-8 semanas",
    customizable: true,
    featured: true
  },
  {
    id: "estanteria-liora",
    name: "Estanteria Liora",
    category: "Estanterias",
    price: 860,
    image: "assets/images/products/estanteria-liora-general.png",
    gallery: [
      "assets/images/products/estanteria-liora-ambiente.png",
      "assets/images/products/estanteria-liora-general.png",
      "assets/images/products/estanteria-liora-detalle.png"
    ],
    shortDescription: "Estanteria abierta de roble macizo con estructura perimetral de hierro negro.",
    description: "Liora es una estanteria abierta de presencia ligera y proporciones limpias. Sus baldas de roble macizo quedan enmarcadas por una estructura de hierro negro satinado, creando una pieza versatil para salon, estudio o zonas de exposicion con una lectura sobria y contemporanea.",
    materials: ["Baldas de roble macizo", "Estructura de hierro negro satinado", "Acabado protector mate"],
    dimensions: ["100 x 36 x 150 cm", "120 x 36 x 170 cm", "Configuracion personalizada"],
    finishes: ["Roble natural", "Roble ahumado", "Negro satinado"],
    leadTime: "6-8 semanas",
    customizable: true,
    featured: true
  },
  {
    id: "estanteria-arkoa",
    name: "Estanteria Arkoa",
    category: "Estanterias",
    price: 1320,
    image: "assets/images/products/estanteria-arkoa-general.png",
    gallery: [
      "assets/images/products/estanteria-arkoa-ambiente.png",
      "assets/images/products/estanteria-arkoa-general.png",
      "assets/images/products/estanteria-arkoa-detalle.png"
    ],
    shortDescription: "Estanteria doble de roble macizo con estructura modular de hierro negro.",
    description: "Arkoa amplia el lenguaje RawHaus a una pieza de mayor presencia, con dos cuerpos abiertos, baldas de roble macizo y montantes de hierro negro satinado. Su estructura central ordena la composicion y permite crear una zona de exposicion amplia sin perder ligereza visual.",
    materials: ["Baldas de roble macizo", "Estructura modular de hierro negro satinado", "Acabado protector mate"],
    dimensions: ["160 x 36 x 190 cm", "200 x 36 x 210 cm", "Configuracion personalizada"],
    finishes: ["Roble natural", "Roble ahumado", "Negro satinado"],
    leadTime: "6-8 semanas",
    customizable: true,
    featured: true
  },
  {
    id: "taburete-gulf",
    name: "Taburete Gulf",
    category: "Taburetes",
    subcategory: "Taburetes de dise\u00f1o",
    price: 340,
    image: "assets/images/products/taburete-gulf-ambiente.jpeg",
    gallery: [
      "assets/images/products/taburete-gulf-ambiente.jpeg",
      "assets/images/products/taburete-gulf-detalle.jpeg"
    ],
    shortDescription: "Taburete alto con asiento redondo de madera y chapa decorativa de inspiracion racing.",
    description: "Taburete Gulf forma parte de la linea de taburetes de dise\u00f1o RawHaus: una pieza con estructura de hierro negro, asiento de madera natural y una chapa central protagonista. Su grafica aporta caracter visual manteniendo una presencia limpia, contemporanea y facil de integrar en interiores modernos.",
    materials: ["Asiento de madera", "Estructura de hierro negro", "Chapa decorativa metalica"],
    dimensions: ["Asiento redondo", "Altura tipo barra", "Medidas personalizables"],
    finishes: ["Madera natural", "Hierro negro satinado", "Chapa decorativa"],
    leadTime: "4-6 semanas",
    customizable: true,
    featured: false
  },
  {
    id: "taburete-zeta",
    name: "Taburete Zeta",
    category: "Taburetes",
    subcategory: "Taburetes",
    price: 320,
    image: "assets/images/products/taburete-zeta-general.png",
    gallery: [
      "assets/images/products/taburete-zeta-ambiente.png",
      "assets/images/products/taburete-zeta-general.png"
    ],
    shortDescription: "Taburete auxiliar con asiento de roble macizo y estructura metalica en silueta Z.",
    description: "Zeta es un taburete auxiliar de presencia escultorica, pensado para interiores contemporaneos donde una pieza pequena tambien puede aportar caracter. El asiento de roble macizo descansa sobre una estructura de hierro negro satinado con geometria inclinada, creando una lectura ligera, firme y muy RawHaus.",
    materials: ["Asiento de roble macizo", "Estructura de hierro negro satinado", "Acabado protector mate"],
    dimensions: ["35 x 35 x 55 cm", "Altura personalizada", "Medida a proyecto"],
    finishes: ["Roble natural", "Roble ahumado", "Negro satinado"],
    leadTime: "4-6 semanas",
    customizable: true,
    featured: false
  },
  {
    id: "taburete-prisma",
    name: "Taburete Prisma",
    category: "Taburetes",
    subcategory: "Taburetes",
    price: 340,
    image: "assets/images/products/taburete-prisma-general.png",
    gallery: [
      "assets/images/products/taburete-prisma-ambiente.png",
      "assets/images/products/taburete-prisma-general.png",
      "assets/images/products/taburete-prisma-detalle.png"
    ],
    shortDescription: "Taburete auxiliar con asiento cuadrado de roble macizo y estructura perimetral de hierro negro.",
    description: "Prisma es un taburete auxiliar de lineas rectas y proporcion compacta. Su asiento de roble macizo aporta calidez y textura, mientras que la estructura de hierro negro satinado define una silueta ligera, estable y muy contemporanea. Una pieza pensada para acompanar sofas, rincones de lectura o zonas auxiliares con presencia discreta y precisa.",
    materials: ["Asiento de roble macizo", "Estructura de hierro negro satinado", "Acabado protector mate"],
    dimensions: ["35 x 35 x 55 cm", "Altura personalizada", "Medida a proyecto"],
    finishes: ["Roble natural", "Roble ahumado", "Negro satinado"],
    leadTime: "4-6 semanas",
    customizable: true,
    featured: false
  },
  {
    id: "taburete-nexo",
    name: "Taburete Nexo",
    category: "Taburetes",
    subcategory: "Taburetes",
    price: 360,
    image: "assets/images/products/taburete-nexo-general.png",
    gallery: [
      "assets/images/products/taburete-nexo-ambiente.png",
      "assets/images/products/taburete-nexo-general.png",
      "assets/images/products/taburete-nexo-detalle.png"
    ],
    shortDescription: "Taburete auxiliar con asiento de roble macizo y estructura geometrica de hierro negro.",
    description: "Nexo combina un asiento cuadrado de roble macizo con una estructura de hierro negro satinado de lectura grafica y equilibrada. Su base desplazada aporta caracter sin perder estabilidad, convirtiendolo en una pieza auxiliar compacta para salones, dormitorios o rincones de lectura contemporaneos.",
    materials: ["Asiento de roble macizo", "Estructura de hierro negro satinado", "Acabado protector mate"],
    dimensions: ["35 x 35 x 58 cm", "Altura personalizada", "Medida a proyecto"],
    finishes: ["Roble natural", "Roble ahumado", "Negro satinado"],
    leadTime: "4-6 semanas",
    customizable: true,
    featured: false
  },
  {
    id: "taburete-bultaco",
    name: "Taburete Bultaco",
    category: "Taburetes",
    subcategory: "Taburetes de dise\u00f1o",
    price: 340,
    image: "assets/images/products/taburete-bultaco-ambiente.jpeg",
    gallery: [
      "assets/images/products/taburete-bultaco-ambiente.jpeg",
      "assets/images/products/taburete-bultaco-detalle.jpeg"
    ],
    shortDescription: "Taburete alto con asiento redondo de madera y chapa decorativa roja y amarilla.",
    description: "Taburete Bultaco pertenece a la linea de taburetes de dise\u00f1o RawHaus: estructura de hierro negro, asiento de madera natural y una chapa central con grafica de alto contraste. Una pieza compacta, expresiva y pensada para aportar caracter sin romper la limpieza visual del espacio.",
    materials: ["Asiento de madera", "Estructura de hierro negro", "Chapa decorativa metalica"],
    dimensions: ["Asiento redondo", "Altura tipo barra", "Medidas personalizables"],
    finishes: ["Madera natural", "Hierro negro satinado", "Chapa decorativa"],
    leadTime: "4-6 semanas",
    customizable: true,
    featured: false
  },
  {
    id: "taburete-valvuoine",
    name: "Taburete Valvuoine",
    category: "Taburetes",
    subcategory: "Taburetes de dise\u00f1o",
    price: 340,
    image: "assets/images/products/taburete-valvuoine-ambiente.jpeg",
    gallery: [
      "assets/images/products/taburete-valvuoine-ambiente.jpeg",
      "assets/images/products/taburete-valvuoine-detalle.jpeg"
    ],
    shortDescription: "Taburete alto con asiento redondo de madera y chapa decorativa tipo motor oil.",
    description: "Taburete Valvuoine pertenece a la linea de taburetes de dise\u00f1o RawHaus: una pieza de estructura ligera en hierro negro, asiento de madera natural y una chapa central de estetica grafica. Su combinacion de blanco, azul y rojo crea un contraste preciso sobre la madera sin perder el lenguaje industrial contemporaneo de la coleccion.",
    materials: ["Asiento de madera", "Estructura de hierro negro", "Chapa decorativa metalica"],
    dimensions: ["Asiento redondo", "Altura tipo barra", "Medidas personalizables"],
    finishes: ["Madera natural", "Hierro negro satinado", "Chapa decorativa"],
    leadTime: "4-6 semanas",
    customizable: true,
    featured: false
  },
  {
    id: "taburete-gas-26",
    name: "Taburete Gas 26",
    category: "Taburetes",
    subcategory: "Taburetes de dise\u00f1o",
    price: 340,
    image: "assets/images/products/taburete-gas-26-ambiente.jpeg",
    gallery: [
      "assets/images/products/taburete-gas-26-ambiente.jpeg",
      "assets/images/products/taburete-gas-26-detalle.jpeg"
    ],
    shortDescription: "Taburete alto con asiento redondo de madera y chapa decorativa Gas 26.",
    description: "Taburete Gas 26 pertenece a la linea de taburetes de dise\u00f1o RawHaus: una pieza con estructura de hierro negro, asiento de madera natural y una chapa central de inspiracion gasolinera clasica. La grafica en tonos burdeos, verde y crema aporta un acento singular sin perder la base sobria e industrial de la coleccion.",
    materials: ["Asiento de madera", "Estructura de hierro negro", "Chapa decorativa metalica"],
    dimensions: ["Asiento redondo", "Altura tipo barra", "Medidas personalizables"],
    finishes: ["Madera natural", "Hierro negro satinado", "Chapa decorativa"],
    leadTime: "4-6 semanas",
    customizable: true,
    featured: false
  },
  {
    id: "taburete-motor-oil",
    name: "Taburete Motor Oil",
    category: "Taburetes",
    subcategory: "Taburetes de dise\u00f1o",
    price: 340,
    image: "assets/images/products/taburete-motor-oil-ambiente.jpeg",
    gallery: [
      "assets/images/products/taburete-motor-oil-ambiente.jpeg",
      "assets/images/products/taburete-motor-oil-detalle.jpeg"
    ],
    shortDescription: "Taburete alto con asiento redondo de madera y chapa decorativa Motor Oil.",
    description: "Taburete Motor Oil pertenece a la linea de taburetes de dise\u00f1o RawHaus: estructura de hierro negro, asiento de madera natural y una chapa central con grafica de inspiracion motociclista. Una pieza de caracter marcado que combina el lenguaje industrial de RawHaus con un detalle visual protagonista.",
    materials: ["Asiento de madera", "Estructura de hierro negro", "Chapa decorativa metalica"],
    dimensions: ["Asiento redondo", "Altura tipo barra", "Medidas personalizables"],
    finishes: ["Madera natural", "Hierro negro satinado", "Chapa decorativa"],
    leadTime: "4-6 semanas",
    customizable: true,
    featured: false
  },
  {
    id: "taburete-fuel-station",
    name: "Taburete Fuel Station",
    category: "Taburetes",
    subcategory: "Taburetes de dise\u00f1o",
    price: 340,
    image: "assets/images/products/taburete-fuel-station-ambiente.jpeg",
    gallery: [
      "assets/images/products/taburete-fuel-station-ambiente.jpeg",
      "assets/images/products/taburete-fuel-station-detalle.jpeg"
    ],
    shortDescription: "Taburete alto con asiento redondo de madera y chapa decorativa Fuel Station.",
    description: "Taburete Fuel Station pertenece a la linea de taburetes de dise\u00f1o RawHaus: una pieza de estructura metalica negra, asiento de madera natural y una chapa central con grafica de estacion de servicio. El motivo aporta un punto iconico y contrastado, equilibrado por una silueta limpia y contemporanea.",
    materials: ["Asiento de madera", "Estructura de hierro negro", "Chapa decorativa metalica"],
    dimensions: ["Asiento redondo", "Altura tipo barra", "Medidas personalizables"],
    finishes: ["Madera natural", "Hierro negro satinado", "Chapa decorativa"],
    leadTime: "4-6 semanas",
    customizable: true,
    featured: false
  },
  {
    id: "taburete-guf-gasoline",
    name: "Taburete Guf Gasoline",
    category: "Taburetes",
    subcategory: "Taburetes de dise\u00f1o",
    price: 340,
    image: "assets/images/products/taburete-guf-gasoline-ambiente.jpeg",
    gallery: [
      "assets/images/products/taburete-guf-gasoline-ambiente.jpeg",
      "assets/images/products/taburete-guf-gasoline-detalle.jpeg"
    ],
    shortDescription: "Taburete alto con asiento redondo de madera y chapa decorativa Guf Gasoline.",
    description: "Taburete Guf Gasoline pertenece a la linea de taburetes de dise\u00f1o RawHaus: estructura de hierro negro, asiento de madera natural y una chapa central de inspiracion racing. Su grafica roja, negra y crema funciona como pieza protagonista sobre una base limpia y contemporanea.",
    materials: ["Asiento de madera", "Estructura de hierro negro", "Chapa decorativa metalica"],
    dimensions: ["Asiento redondo", "Altura tipo barra", "Medidas personalizables"],
    finishes: ["Madera natural", "Hierro negro satinado", "Chapa decorativa"],
    leadTime: "4-6 semanas",
    customizable: true,
    featured: false
  }
];

if (typeof window !== 'undefined') window.RAWHAUS_PRODUCTS = RAWHAUS_PRODUCTS;
if (typeof module !== 'undefined') module.exports = RAWHAUS_PRODUCTS;
