export default {
  global: {
    Name: 'Sistemas de producción porcina semi-orgánica y alimentación alterna',
    Description:
      'Este componente desarrolla los fundamentos de los sistemas de producción porcina, con énfasis en el modelo semi-orgánico y su relación con la alimentación alterna. Aborda las características de los diferentes sistemas productivos, el aprovechamiento de materias primas locales, el balanceo de raciones, la formulación de programas de alimentación, la suplementación nutricional y la implementación de Buenas Prácticas Ganaderas (BPG). ',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Planes de alimentación en la producción porcina semi-orgánica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto e importancia del plan de alimentación ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Requerimientos nutricionales según la etapa productiva ',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Alimentación en lechones, levante, ceba, gestación y lactancia',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Componentes del plan de alimentación',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Elaboración de planes de alimentación ',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo:
              'Relación entre el plan de alimentación y el sistema de producción semi-orgánico ',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Programas de alimentación complementaria y alterna',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Alimentación alterna en cerdos ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Labores suplementarias relacionadas con el programa de alimentación ',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Tipos de suplementación en la alimentación porcina semi-orgánica ',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Uso de recursos alimenticios alternativos ',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Diseño de programas de alimentación complementaria ',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo:
              'Implementación del programa alimenticio según la etapa productiva ',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistemas de producción porcina y alimentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Clases de sistemas de producción porcina ',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Características del sistema de producción porcina semi-orgánico ',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Relación entre el sistema productivo y la alimentación ',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Ajuste del plan alimenticio al sistema de producción',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Manejo de residuos en la producción porcina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Residuos orgánicos e inorgánicos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Clasificación y separación',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Métodos de disposición de desperdicios y desechos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Aprovechamiento de residuos en sistemas semi-orgánicos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Manejo ambiental y buenas prácticas en la granja porcina',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Pesos y medidas en cerdos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Importancia del pesaje y de los registros productivos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Procedimientos técnicos para determinar pesos y medidas',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Técnicas e instrumentos de medición',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Pesaje según estado de producción',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Registro e interpretación de datos productivos',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Evaluación y seguimiento del programa de alimentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Cumplimiento del plan de alimentación',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Registros de seguimiento del programa alimenticio',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Verificación del manejo de residuos',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Control del suministro de raciones y pesaje de animales',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Aplicación del manual de procedimientos',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Relación de los registros con la normatividad vigente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo:
              'Soporte normativo de los registros del programa de alimentación',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Estructura para la presentación de los registros',
            hash: 't_7_2',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Alimentación alterna',
      significado:
        'uso de materias primas locales para complementar la dieta porcina balanceada.',
    },
    {
      termino: 'Balanceo de raciones',
      significado:
        'cálculo técnico de nutrientes para cubrir los requerimientos nutricionales del cerdo.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'medidas preventivas que reducen los riesgos sanitarios dentro de la explotación porcina.',
    },
    {
      termino: 'Bienestar animal',
      significado:
        'condiciones que garantizan la salud, el confort, la alimentación y el comportamiento natural del cerdo.',
    },
    {
      termino: 'Conversión alimenticia',
      significado:
        'relación entre el alimento consumido y la ganancia de peso obtenida.',
    },
    {
      termino: 'Etapa productiva',
      significado:
        'fase fisiológica del cerdo con requerimientos nutricionales específicos.',
    },
    {
      termino: 'Formulación de raciones',
      significado:
        'proceso de combinar ingredientes para obtener una dieta balanceada.',
    },
    {
      termino: 'Materia prima',
      significado:
        'ingrediente utilizado para elaborar alimentos destinados a los cerdos.',
    },
    {
      termino: 'Producción semi-orgánica',
      significado:
        'sistema que integra alimentación alterna, bienestar animal y sostenibilidad productiva.',
    },
    {
      termino: 'Programa alimenticio',
      significado:
        'plan técnico para suministrar alimento según las necesidades nutricionales del lote.',
    },
    {
      termino: 'Ración balanceada',
      significado:
        'mezcla de ingredientes que aporta nutrientes en proporciones adecuadas.',
    },
    {
      termino: 'Requerimientos nutricionales',
      significado:
        'cantidad de nutrientes necesaria para el crecimiento, la reproducción y el mantenimiento del cerdo.',
    },
    {
      termino: 'Suplementación',
      significado:
        'aporte adicional de nutrientes para complementar la dieta base.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'producción eficiente mediante el uso responsable de recursos naturales y económicos.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'registro que permite identificar el manejo y el suministro de alimentos en la producción.',
    },
  ],
  referencias: [
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2011). Las buenas prácticas en producción porcícola.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2020). Resolución 76509 de 2020. Por medio de la cual se establecen los requisitos para obtener la certificación en Buenas Prácticas Ganaderas (BPG) en la producción porcina.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (s. f.). Grupo de Inocuidad en la Producción Pecuaria Primaria y Bienestar Animal.',
      link: '',
    },
    {
      referencia:
        'National Research Council. (2012). Nutrient requirements of swine (11th rev. ed.). The National Academies Press.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Hernan Tejada Llano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristian Fernando Martínez Sánchez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
