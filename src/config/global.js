export default {
  global: {
    componenteFormativo: 'Definición de sistemas digitales',
    descripcionCurso:
      'En este componente formativo se tratan temas relacionados con los sistemas electrónicos digitales, las normas aplicadas, los elementos relacionados y las condiciones de seguridad y salud en el trabajo.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Normatividad para electrónica digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Normas IPC',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Normas IEEE',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Normas ISO',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Magnitudes físicas aplicadas a la electrónica digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Unidades de medida y aplicación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Parámetros eléctricos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Definición y características',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Componentes electrónicas digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Fabricantes',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Características',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Funcionamiento',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Boole, G. (2009). The Mathematical Analysis of Logic: Being an Essay Towards a Calculus of Deductive Reasoning (Cambridge Library Collection - Mathematics). Cambridge University Press.',
      link: 'https://doi.org/10.1017/CBO9780511701337',
    },
    {
      referencia:
        'Congreso de Colombia. (2012). Ley 1562 de 2012. Por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de Salud Ocupacional. D.O. No. 48.488.',
    },
    {
      referencia: 'Meskauskas, A. (2013). TI SN7400N. [Fotografía] Wikipedia. ',
      link:
        'https://es.wikipedia.org/wiki/Serie_7400#/media/Archivo:TexasInstruments_7400_chip,_view_and_element_placement.jpg',
    },
    {
      referencia:
        'Real Academia Española. (2020). Diccionario de la lengua española.',
      link: 'https://dle.rae.es/',
    },
    {
      referencia: 'Wikipedia (2021). Bell Labs.',
      link: 'https://es.wikipedia.org/wiki/Bell_Labs',
    },
  ],
  glosario: [
    {
      termino: 'Álgebra booleana',
      significado:
        'método matemático que permite representar una estructura lógica y matemática compleja, utilizando solo dos valores o dos estados.',
    },
    {
      termino: 'Carcasa',
      significado:
        'pieza rígida que contiene y protege un dispositivo o mecanismo (Real Academia Española, 2020).',
    },
    {
      termino: 'Dinamo',
      significado:
        'dispositivo que convierte el movimiento mecánico en corriente eléctrica.',
    },
    {
      termino: 'Laboratorios Bell',
      significado:
        'Nokia Bell Labs (anteriormente llamados AT&T Bell Laboratories, Bell Telephone Laboratories y Bell Labs) es una compañía estadounidense de investigación y desarrollo científico, actualmente propiedad de la empresa finlandesa Nokia. Su sede se encuentra en Murray Hill, Nueva Jersey (Wikipedia, 2021).',
    },
    {
      termino: 'Manilla antiestática',
      significado:
        'dispositivo de protección para equipos electrónicos, consiste en colocar una manilla conductora en el pulso para enviar las cargas electrostáticas del cuerpo a tierra y no dañar componentes electrónicos sensibles.',
    },
    {
      termino: 'Sistema de refrigeración',
      significado:
        'en electrónica consiste en poner un material conductor de calor a un componente con el fin de disipar el calor generado durante su operación. ',
    },
    {
      termino: 'Transistor',
      significado:
        'semiconductor provisto de tres o más electrodos que sirve para rectificar y amplificar los impulsos eléctricos. Sustituye ventajosamente a las lámparas o tubos electrónicos por no requerir corriente de calentamiento, por su tamaño pequeñísimo, por su robustez y por operar con voltajes pequeños y poder admitir corrientes relativamente intensas (Real Academia Española, 2020).',
    },
  ],
  complementario: [
    {
      texto: 'IPC International, Inc. (2021). Normas IPC. ',
      tipo: 'Página web',
      link: 'https://www.ipc.org/ipc-standards',
    },
    {
      texto: 'Redesinalambricas.es. (2021). Estándares wifi. ',
      tipo: 'Página web',
      link: 'https://www.redesinalambricas.es/estandares-wifi/',
    },
    {
      texto:
        'Ministerio del Trabajo. (2019). Resolución 5018 de 2019. Por la cual se establecen lineamientos en Seguridad y Salud en el trabajo en los procesos de generación, transmisión, distribución y comercialización de la energía eléctrica. ',
      tipo: 'Resolución',
      link: 'https://safetya.co/normatividad/resolucion-5018-de-2019/',
    },
    {
      texto:
        'Boole, G. (2009). The Mathematical Analysis of Logic: Being an Essay Towards a Calculus of Deductive Reasoning (Cambridge Library Collection - Mathematics). Cambridge University Press.',
      tipo: 'Libro',
      link:
        'https://www.cambridge.org/core/books/mathematical-analysis-of-logic/BF7CDDC37F3F4FC698CEEE5F2FA0270Cs',
    },
    {
      texto: 'Isagén. (2012). Cómo se genera la energía. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YWEXLSjaYf0',
    },
    {
      texto:
        'Transelec S. A. (2020). El viaje de la electricidad. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YWEXLSjaYf0',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gewin Alfonso Fernández Cáceres',
        cargo: 'Instructor',
        centro: 'Centro Nacional Colombo Alemán Regional Atlántico',
      },
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñador y evaluador instruccional',
        centro: 'Centro Gestión Industrial Regional Distrito Capital ',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ' ',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
