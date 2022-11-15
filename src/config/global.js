export default {
  global: {
    componenteFormativo: 'Flujos de la operación',
    descripcionCurso:
      'Este componente formativo aborda las características e indicadores de desempeño de la cadena de distribución escogida para utilizar, describiendo toda la logística involucrada en la entrega de los productos o servicios de una empresa en el lugar correcto, en el momento adecuado y al menor costo. ',
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal_1.png'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/images/header/1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/images/header/2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/images/header/3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/images/header/4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/images/header/5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/images/header/6.svg'),
      },
    ],
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
        titulo: 'Supervisión en la operación del transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Obligaciones, derechos, deberes, responsabilidades de acuerdos comerciales ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Marco legal para el transportador ',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Relación jurídica y obligaciones del seguro',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Instructivo para trazabilidad',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fundamentos de los acuerdos comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Procesos de seguimientos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Trazabilidad y estándares de calidad',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Sistemas de información ',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Parámetros de desempeño     ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Seguridad en el transporte terrestre y relación con PESV',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Seguridad en el transporte marítimo',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Seguridad en el transporte aéreo',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Seguridad en el transporte ferroviario',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Rutogramas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Tecnologías para estar en contacto con el operador de la flota',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: ' Planes de rutas e intercomunicaciones.',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          'Fortalezas y debilidades del proceso de trazabilidad de la operación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Diagnóstico',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: ' Tipos y técnicas de informes',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  icono: 'fas fa-sitemap',
      //  titulo: 'Síntesis',
      //  nombreRuta: 'sintesis',
      //},
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
      referencia: 'HCCH. (2021). Una organización mundial.',
      link: 'https://www.hcch.net/es/about ',
    },
    {
      referencia: 'ISO. (2015). ISO 9000:2015. Quality management systems.',
      link:
        'https://www.iso.org/obp/ui/#iso:std:iso:9000:ed-4:v1:es.López. D. (2016). Incoterms.',
    },
    {
      referencia: 'López. D. (2016). Incoterm',
      link: 'https://economipedia.com/definiciones/incoterms.html',
    },
    {
      referencia: 'Nalww.mx. (s.f.). Guía sobre los Incoterms.',
      link: 'https://www.nalww.mx/es/blog/2018/08/guia-sobre-los-INCOTERMS',
    },
    {
      referencia:
        'ONU. (2011). Convención de las Naciones Unidas sobre los Contratos de Compraventa Internacional de Mercaderías.',
      link:
        'https://uncitral.un.org/sites/uncitral.un.org/files/media-documents/uncitral/es/v1057000-cisg-s.pdf',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1971). Decreto 140 de 1971. Código de Comercio.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio.html',
    },
    {
      referencia: 'Sánchez, J.  (2016). Acuerdo comercial.',
      link: 'https://economipedia.com/definiciones/acuerdo-comercial.html ',
    },
    {
      referencia:
        'Seguros Sura. (2020). Seguro de transporte de mercancías específico. Sura.',
      link:
        'https://www.segurossura.com.co/paginas/empresas/transporte/transporte-mercancias-especifico.aspx ',
    },
    {
      referencia:
        'SENA. (2021). Sistema Integrado de Gestión y Autocontrol. SENA.',
      link:
        'https://pmadsena.weebly.com/uploads/1/2/7/1/12712314/presentacion_induccion_compromiso.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acuerdo',
      significado:
        'Decisión tomada en común entre dos o más personas sobre un asunto concreto.',
    },
    {
      termino: 'Armonizar',
      significado: 'Pactar o poner de común acuerdo a dos o más personas.',
    },
    {
      termino: 'Convenio',
      significado:
        'Es la celebración de un pacto entre dos o más personas o instituciones. ',
    },
    {
      termino: 'Flujo',
      significado:
        'Resultado de la diferencia detectada entre cantidades de entradas y salidas en un proceso.',
    },
    {
      termino: 'Gestión',
      significado:
        'Conjunto de procedimientos que se ejecutan para administrar o controlar una organización o una actividad de negocio. ',
    },
    {
      termino: 'Radiofrecuencia',
      significado:
        'Porción del espectro relativo a la frecuencia de las ondas electromagnéticas y que se pueden transmitir. ',
    },
    {
      termino: 'Posicionamiento',
      significado:
        'Es la localización geográfica mediante sistema de radionavegación por satélite.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Conjunto de valores de comparación, medidas con herramientas específicas, para conocer el histórico de un suministro o producto en una cadena logística.',
    },
  ],
  complementario: [
    {
      tema: 'Guía GS1',
      referencia:
        'GS1 Colombia. (s.f). Guía de identificación GS1. GS1 Colombia.',
      tipo: 'Guía',
      link:
        'https://www.gs1co.org/Portals/0/Contenido/Guia_de_Identificacion_GS1.pdf',
    },
    {
      tema:
        'ONU. (2011). Convención de las Naciones Unidas sobre los Contratos de Compraventa Internacional de Mercaderías. ONU.',
      referencia:
        'ONU. (2011). Convención de las Naciones Unidas sobre los Contratos de Compraventa Internacional de Mercaderías. ONU',
      tipo: 'Texto ',
      link:
        'https://uncitral.un.org/sites/uncitral.un.org/files/media-documents/uncitral/es/v1057000-cisg-s.pdf ',
    },
    {
      tema:
        'Romero, E. (2020).  Gastos de transporte en la determinación del valor en aduana. DIAN.',
      referencia:
        'Romero, E. (2020).  Gastos de transporte en la determinación del valor en aduana. DIAN.',
      tipo: 'Texto',
      link:
        'https://www.dian.gov.co/aduanas/aspectecmercancias/valoracion_de_mercancias/Temas_de_interes/Documents/Cartilla%20Gastos%20de%20Transporte.pdf ',
    },
    {
      tema:
        'MinComercio Colombia. (2013). Miércoles de Capacitación- ICONTERMS- Oportunidades de negocios turísticos en Colombia.',
      referencia:
        'MinComercio Colombia. (2013). Miércoles de Capacitación- ICONTERMS- Oportunidades de negocios turísticos en Colombia.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=U2n3w7GU1wY&ab_channel=MincomercioColombia ',
    },
    {
      tema:
        'Sena Comercio. (2015). SIGA (Sistema Integrado de Gestión y Autocontrol).',
      referencia:
        'Sena Comercio. (2015). SIGA (Sistema Integrado de Gestión y Autocontrol).',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=lxTgdw5cuog&ab_channel=SenaComercio',
    },
    {
      tema:
        'DIAN. (2021).  Portales. Dirección de Impuestos y Aduanas Nacionales.',
      referencia:
        'DIAN. (2021).  Portales. Dirección de Impuestos y Aduanas Nacionales.',
      tipo: 'Página web',
      link: 'https://www.dian.gov.co/',
    },
    {
      tema: 'ICA. (2021). Sispap. Instituto Colombiano Agropecuario.',
      referencia: 'ICA. (2021). Sispap. Instituto Colombiano Agropecuario. ',
      tipo: 'Página web',
      link:
        'https://www.ica.gov.co/areas/proteccion-fronteriza/logistica/sispap.aspx ',
    },
    {
      tema:
        'VUCE. (2021). Servicios Ventanilla Única de Comercio Exterior.  VUCE.',
      referencia:
        'VUCE. (2021). Servicios Ventanilla Única de Comercio Exterior.  VUCE.',
      tipo: 'Texto',
      link: 'https://www.vuce.gov.co/',
    },
    {
      tema: 'Procolombia. (2021). Simulador de costos. Procolombia.',
      referencia: 'Procolombia. (2021). Simulador de costos. Procolombia..',
      tipo: 'Simulador web',
      link: 'https://connectamericas.com/es/estimadora#!/app/search',
    },
    {
      tema:
        'Zonas Francas. (2021). Zona franca. Ministerio de Comercio Industria y Turismo.',
      referencia:
        'Zonas Francas. (2021). Zona franca. Ministerio de Comercio Industria y Turismo.',
      tipo: 'Página web',
      link: 'http://zonasfrancas.mincit.gov.co/',
    },
    {
      tema: 'MinTransporte. (2021). SICE-TAC. MinTransporte.',
      referencia: 'MinTransporte. (2021). SICE-TAC. MinTransporte.',
      tipo: 'Sistema de información ',
      link: 'https://www.mintransporte.gov.co/publicaciones/4462/sice-tac/ ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'María Camila García Santamaría',
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
        nombre: 'Régulo Castro Barón',
        cargo: 'Experto temático',
        centro:
          'Complejo Tecnológico Agroindustrial, Pecuario y Turístico – CTAPT – Regional Antioquia',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Distrito Capital',
      },
      {
        nombre: 'Paola Moya Peralta',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro para la Industria - Distrito Capital',
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
        nombre: 'Marcela Alarcón Granados',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Maria Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Eugenia Mejía Lopez',
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
