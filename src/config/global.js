export default {
  global: {
    componenteFormativo:
      'Acuerdos y elaboración de propuesta técnico–económica',
    descripcionCurso:
      'En el presente componente formativo se abordarán temas relacionados con los acuerdos de niveles de servicio, se estudiará qué es una propuesta económica y cuál es la información que debe llevar, así como la importancia de los acuerdos de confidencialidad y cómo se deben realizar.',
    imagenBannerPrincipal: require('@/assets/curso/portada/imagen-portada-mujer.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),

    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/xxx-superior.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/triangulos-superior-derecho.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/lineas-amarilla-y-blanca-inferiores.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/triangulos-verticales-derecho.svg'),
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
        titulo: 'Acuerdos de niveles de servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos',
            hash: 'tipos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Cómo hacer un nivel de servicio',
            hash: 'nivel_de_servicio',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Acuerdos de niveles de servicio en soporte técnico',
            hash: 'acuerdos_de_niveles_de_servicio_en_soporte_tecnico',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estructura de propuesta económica y carta de aceptación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Presentación',
            hash: 'presentacion',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Alcance de la propuesta',
            hash: 'alcance_de_la_propuesta',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Valor del servicio',
            hash: 'valor_del_servicio',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Precio y forma de pago',
            hash: 'precio_y_forma_de_pago',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Cartas de aceptación',
            hash: 'cartas_de_aceptacion',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Acuerdos de confidencialidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Legislación',
            hash: 'legislacion',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Duración',
            hash: 'duracion',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Tipos',
            hash: 'tipos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Cláusulas',
            hash: 'clausulas',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
  complementario: [
    {
      tema: 'Acuerdos de nivel de servicios',
      referencia:
        'Rodríguez, R., N. (2018). La bolsa de valores de Colombia, su naturaleza y su posición sobre las sociedades comisionistas de bolsa. El planteamiento del service level agreement como posible forma de mitigación. Derecho PUCP: Revista de la Facultad de Derecho 1(81), p. 265-302',
      tipo: 'Artículo',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=6711294',
    },
  ],
  glosario: [
    {
      termino: 'Acuerdo',
      significado:
        'es un trato, una decisión tomada entre varias personas para llegar a un fin determinado.',
    },
    {
      termino: 'Aplicación',
      significado:
        'es una herramienta o plataforma, normalmente orientada a la web, con la cual los usuarios pueden interactuar.',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'se refiere a la forma en la que es protegida la información personal, a la cual no se puede acceder sin autorización.',
    },
    {
      termino: 'Cláusula',
      significado:
        'esta relacionada con los contratos e indican una condición adicional para estos.',
    },
    {
      termino: 'Partes interesadas',
      significado:
        'son los principales actores que hacen parte de un convenio o proyecto.',
    },
    {
      termino: 'Precio',
      significado:
        'es la cantidad en dinero que se paga o cobra por un producto o servicio.',
    },
    {
      termino: 'Propuesta',
      significado:
        'manifiesta las razones por las que se muestra interés en un proyecto o contrato.',
    },
    {
      termino: '<em>Sistema de información</em>',
      significado:
        'grupo de componentes,  desarrollo y métodos que forman, en conjunto, una funcionalidad para un fin determinado.',
    },
    {
      termino: '<em>Valor</em>',
      significado:
        'grado de utilidad e importancia de un bien o servicio adquirido.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ahmad, Azham & Abdullah Arshah, Ruzaini & Kamaludin, Adzhar & Ngah, Lukmanulhakim & Bakar, Tamizan & Muhamad, Rostan & Zakaria. (2020). Adopting of Service Level Agreement (SLA) in enhancing the quality of IT hardware service support',
      link:
        'https://www.researchgate.net/publication/342800784_Adopting_of_Service_Level_Agreement_SLA_in_enhancing_the_quality_of_IT_hardware_service_support ',
    },
    {
      referencia:
        'Moreira Finn, K., De Lima Nunes, F., Hermann Nodari, C., & Dobner Sordi, J. (2020). ACUERDO DE NIVEL DE SERVICIO DIRIGIDO A PROVEEDORES DE MATERIALES Y SERVICIOS EN EL SECTOR PETROQUIMICO: ANALISIS DE CRITERIOS. Revista Ibero-americana De Estratégia, 19(4), 151',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=TN_cdi_gale_infotracacademiconefile_A648409594&context=PC&vid=SENA&lang=es_ES&search_scope=sena_completo&adaptor=primo_central_multiple_fe&tab=sena_completo&query=any,contains,acuerdos%20de%20niveles%20de%20servicio&offset=0 ',
    },
    {
      referencia:
        'Zhang, H., Guangjin, P., Shugong, X. & Zhang, S., Jiang, Z. (2022). Prediction-based Hybrid Slicing Framework for service Level Agreement Guarantee in mobility scenarios: A deep learning Approach. Cornell University.',
      link: 'https://doi.org/10.48550/arXiv.2208.03460',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
