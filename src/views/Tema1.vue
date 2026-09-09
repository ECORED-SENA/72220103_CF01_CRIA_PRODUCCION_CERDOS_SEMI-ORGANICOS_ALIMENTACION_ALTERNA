<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Planes de alimentación en la producción porcina semi-orgánica
      p La alimentación constituye el factor de mayor impacto sobre la productividad y los costos de producción en los sistemas porcícolas, pues representa entre el #[b 65 % y el 75 % de los costos totales de explotación]. En la producción porcina semi-orgánica, el manejo nutricional adquiere una importancia aún mayor, ya que combina el uso de alimentos comerciales con materias primas alternativas disponibles en la finca o en la región, con el propósito de reducir costos, mejorar la sostenibilidad y mantener elevados estándares de bienestar animal e inocuidad.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El plan de alimentación debe diseñarse de acuerdo con la etapa productiva de los animales, los recursos disponibles, las condiciones ambientales y los objetivos del sistema productivo. Para ello, es necesario conocer los requerimientos nutricionales de cada categoría, seleccionar adecuadamente las materias primas y formular raciones balanceadas que permitan obtener un crecimiento eficiente, una buena conversión alimenticia, un adecuado desempeño reproductivo y animales sanos.
      p.mb-0 Una correcta planificación alimenticia también contribuye al cumplimiento de las #[b Buenas Prácticas Ganaderas (BPG)], ya que garantiza el manejo higiénico de los alimentos, el suministro permanente de agua potable, el almacenamiento adecuado de los insumos y el registro de las actividades relacionadas con la alimentación.
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Concepto e importancia del plan de alimentación 
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2(data-aos="fade-right")
            p.mb-0 El plan de alimentación es el conjunto de procedimientos técnicos mediante los cuales se organiza el suministro de alimento, agua y nutrientes que requieren los cerdos durante cada una de las etapas de producción. Este plan establece qué alimentos se suministrarán, en qué cantidad, con qué frecuencia y bajo qué condiciones de manejo, teniendo en cuenta la edad, el peso, el estado fisiológico y los objetivos productivos de la explotación.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img2.jpg', alt='' style="width: 300px").m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 En los sistemas semi-orgánicos, el plan de alimentación incorpora el aprovechamiento de materias primas locales, forrajes, subproductos agrícolas y alimentos alternativos previamente evaluados desde el punto de vista nutricional y sanitario. Su finalidad es formular raciones equilibradas que satisfagan las necesidades del animal, sin comprometer la inocuidad de la producción ni el bienestar animal.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Importancia del plan de alimentación
      p.mb-5 A continuación, se presenta un video sobre la importancia del plan de alimentación en la producción porcina semi-orgánica, destacando su papel en el aprovechamiento eficiente de los recursos, el bienestar animal y el cumplimiento de las Buenas Prácticas Ganaderas.
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Importancia del plan de alimentación en la producción porcina semi-orgánica
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Requerimientos nutricionales según la etapa productiva 
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          p Las necesidades nutricionales de los cerdos cambian continuamente a medida que avanza su desarrollo fisiológico. Durante cada etapa productiva existen diferentes requerimientos de energía, proteína, aminoácidos, minerales, vitaminas y agua, los cuales deben cubrirse mediante raciones balanceadas para garantizar un adecuado crecimiento, reproducción, producción de leche y eficiencia alimenticia.
          .caja-1(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t1/img5.jpg', alt='' style="width: 400px").m-auto
              .col-xl.caja-1_p
                p.mb-0 Por esta razón, no es recomendable utilizar una misma dieta para todos los animales de la explotación. Cada categoría productiva presenta necesidades específicas que deben considerarse durante la formulación de las raciones, especialmente cuando se emplean materias primas alternativas propias de los sistemas semi-orgánicos.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img6.png', alt='' style="width: 300px").m-auto
      p.mb-5 Una alimentación correctamente balanceada mejora la conversión alimenticia, fortalece el sistema inmunológico, reduce la presentación de enfermedades metabólicas, incrementa la productividad y disminuye las pérdidas económicas ocasionadas por deficiencias o excesos nutricionales.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principales nutrientes requeridos
      p.mb-5 Los nutrientes cumplen funciones específicas relacionadas con el mantenimiento, crecimiento, reproducción y desempeño productivo de los animales. Sus principales características se organizan a continuación:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Energía")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img7.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Energía
              p.mb-0 Es responsable de mantener las funciones vitales y favorecer el crecimiento, la actividad física y la producción. Se obtiene principalmente del maíz, la yuca, el plátano, el sorgo y otros alimentos ricos en carbohidratos.
        .py-3.py-md-4(titulo="Proteína")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img8.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Proteína
              p.mb-0 Es indispensable para la formación de músculos, órganos, tejidos y enzimas. Su deficiencia limita el crecimiento y reduce el desempeño productivo. Puede suministrarse mediante harina de soya, bore, botón de oro, matarratón, harina de pescado y otras fuentes proteicas.
        .py-3.py-md-4(titulo="Minerales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img9.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Minerales
              p.mb-0 El calcio y el fósforo participan en la formación del sistema óseo, mientras que el sodio, el cloro y otros minerales intervienen en múltiples procesos metabólicos y reproductivos.
        .py-3.py-md-4(titulo="Vitaminas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img10.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Vitaminas
              p.mb-0 Favorecen el funcionamiento del sistema inmunológico, el metabolismo, la reproducción y el crecimiento. Generalmente, se suministran mediante premezclas vitamínico-minerales.
        .py-3.py-md-4(titulo="Agua")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img11.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Agua
              p.mb-0 Es el nutriente más importante dentro del programa alimenticio. Los cerdos deben disponer permanentemente de agua limpia, fresca y suficiente, ya que interviene en la digestión, la regulación de la temperatura corporal, el metabolismo y el consumo de alimento.
      p.mb-5 La adecuada integración de estos nutrientes permite formular raciones acordes con las necesidades de los animales. Sin embargo, sus proporciones deben ajustarse según la edad y el estado fisiológico.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Importancia de ajustar la alimentación según la etapa productiva
      p La formulación de las raciones debe modificarse de acuerdo con la edad y el estado fisiológico del animal. Los lechones requieren dietas altamente digestibles; los animales en levante necesitan una alimentación que favorezca el desarrollo muscular; los cerdos en ceba demandan mayores niveles de energía para optimizar la ganancia de peso, mientras que las hembras gestantes y lactantes requieren una alimentación especializada que garantice el adecuado desarrollo fetal y una óptima producción de leche.
      p.mb-0 En los sistemas semi-orgánicos, estos requerimientos pueden cubrirse mediante la combinación técnica de alimentos comerciales y materias primas alternativas disponibles en la región, siempre que se mantenga el equilibrio nutricional y se garantice la inocuidad de los ingredientes utilizados.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Alimentación en lechones, levante, ceba, gestación y lactancia
      .bg-1
        .px-5
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              p La alimentación de los cerdos debe adaptarse a las necesidades nutricionales de cada etapa productiva, ya que los requerimientos de energía, proteína, fibra, minerales y vitaminas varían según la edad, el peso y el estado fisiológico del animal. En los sistemas semi-orgánicos, la formulación de las raciones combina alimentos balanceados con materias primas alternativas disponibles en la región, con el propósito de disminuir costos sin afectar el crecimiento, la reproducción, la salud ni el bienestar animal.
              p.mb-0 La incorporación de alimentos alternativos debe realizarse de forma progresiva y técnicamente balanceada, evitando cambios bruscos que alteren el consumo voluntario, la digestibilidad o el equilibrio nutricional de la dieta. La utilización de ingredientes como yuca, plátano, maíz, bore, botón de oro, matarratón, suero de leche y otros subproductos agropecuarios constituye una estrategia para mejorar la sostenibilidad del sistema productivo. Las diferencias en los objetivos nutricionales, la alimentación convencional y la incorporación de recursos alternativos según la etapa productiva se organizan a continuación:
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t1/img12.png', alt='' style="width: 500px").m-auto
          .row.justify-content-center.mb-0
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 1.
                span Alimentación según la etapa productiva en sistemas convencionales y semi-orgánicos
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Etapa productiva
                      th.ajuste-border-tabla.texto-left Objetivo nutricional
                      th.ajuste-border-tabla.texto-left Alimentación convencional
                      th.texto-left Alimentación semi-orgánica y alternativa
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Lechones (0-10 semanas)
                      td.ajuste-border-tabla.texto-left Favorecer el desarrollo digestivo y el crecimiento inicial.
                      td.ajuste-border-tabla.texto-left Preiniciador e iniciador de alta digestibilidad y agua permanente.
                      td.texto-left Introducción gradual de pequeñas cantidades de maíz molido, yuca cocida, suero de leche y forrajes tiernos de alta calidad, sin reemplazar completamente el concentrado.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Levante
                      td.ajuste-border-tabla.texto-left Desarrollar masa muscular y estructura corporal.
                      td.ajuste-border-tabla.texto-left Concentrado de crecimiento con adecuado nivel de proteína.
                      td.texto-left Sustitución parcial del concentrado mediante maíz, plátano, yuca, bore, botón de oro, matarratón y otros recursos locales previamente evaluados.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ceba
                      td.ajuste-border-tabla.texto-left Maximizar la ganancia diaria de peso y mejorar la conversión alimenticia.
                      td.ajuste-border-tabla.texto-left Concentrado de finalización.
                      td.texto-left Mayor participación de materias primas energéticas, como maíz, yuca, plátano, banano y melaza, complementadas con fuentes proteicas alternativas para mantener el balance nutricional.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gestación
                      td.ajuste-border-tabla.texto-left Mantener la condición corporal y favorecer el desarrollo fetal.
                      td.ajuste-border-tabla.texto-left Concentrado para hembras gestantes.
                      td.texto-left Incorporación de forrajes de buena calidad, recursos fibrosos, materias primas energéticas y suplementos minerales, evitando excesos de energía que favorezcan la obesidad.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Lactancia
                      td.ajuste-border-tabla.texto-left Sostener la producción de leche y la recuperación corporal de la cerda.
                      td.ajuste-border-tabla.texto-left Concentrado para lactancia de alta densidad nutricional.
                      td.texto-left Uso complementario de suero de leche, maíz, yuca, fuentes proteicas vegetales y agua permanente, garantizando un adecuado aporte energético y proteico.
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Componentes del plan de alimentación
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2(data-aos="fade-right")
            p.mb-0 Un plan de alimentación es una herramienta técnica que organiza el suministro de alimentos de acuerdo con la etapa productiva de los animales, lo que permite formular raciones balanceadas, optimizar el uso de materias primas y garantizar el cumplimiento de las #[b Buenas Prácticas Ganaderas (BPG)]. En los sistemas semi-orgánicos, este plan debe integrar alimentos comerciales y materias primas alternativas disponibles en la finca o en la región, procurando mantener el equilibrio nutricional, la inocuidad y la sostenibilidad del sistema.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img13.jpg', alt='' style="width: 300px").m-auto
        .col-xl-4.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 Además del suministro de alimento, el plan debe contemplar aspectos relacionados con el almacenamiento de los insumos, la limpieza de comederos y bebederos, el suministro permanente de agua potable, la frecuencia de alimentación y el seguimiento del consumo mediante registros técnicos que permitan evaluar la eficiencia productiva. 
      p.mb-5 Los componentes esenciales y su función dentro del plan de alimentación se organizan a continuación:
      .bg-2
        .px-5.p-5
          .row.align-items-center
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img14.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img15.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Etapa productiva
                  p.mb-0.text-center Identifica la categoría del animal y sus necesidades nutricionales. A partir de esta información, se define el tipo de materias primas alternativas que pueden utilizarse en cada etapa.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img16.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Requerimientos nutricionales
                  p.mb-0.text-center Determina los niveles de energía, proteína, minerales, vitaminas y agua. Permite balancear correctamente las raciones mediante el uso de ingredientes locales.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img17.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Materias primas
                  p.mb-0.text-center Incluye alimentos comerciales y recursos alternativos disponibles. Su selección debe considerar la calidad bromatológica y la inocuidad de los ingredientes.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img18.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Balanceo de raciones
                  p.mb-0.text-center Calcula la proporción adecuada de cada ingrediente y garantiza que la sustitución parcial del concentrado no genere deficiencias nutricionales.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img19.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Cantidad y frecuencia de suministro
                  p.mb-0.text-center Establece la cantidad diaria de alimento y el número de raciones. Su adecuada definición evita desperdicios y mejora el aprovechamiento del alimento alternativo.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img20.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Agua y comederos
                  p.mb-0.text-center Garantiza la disponibilidad permanente de agua y condiciones higiénicas. Además, favorece el consumo de alimentos con mayor contenido de fibra y materia seca.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img21.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Almacenamiento de materias primas
                  p.mb-0.text-center Permite conservar los alimentos protegidos de la humedad, las plagas y la contaminación, manteniendo la calidad nutricional y la inocuidad de los recursos alternativos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img22.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Registros y seguimiento
                  p.mb-0.text-center Controla el consumo, las formulaciones, los costos y los resultados productivos. Esta información permite evaluar la eficiencia del programa de alimentación semi-orgánica y realizar los ajustes necesarios.
      p.mb-0 La integración de estos componentes permite articular la #[b alimentación convencional con la alimentación alterna], así como incorporar el #[b balanceo de raciones], las #[b materias primas locales] y su aplicación en cada etapa productiva, aspectos fundamentales del programa #[b Cría y Producción de Cerdos Semi-Orgánicos con Alimentación Alterna].
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Elaboración de planes de alimentación 
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          p La elaboración de un plan de alimentación consiste en diseñar un programa nutricional que permita suministrar a los cerdos los nutrientes necesarios de acuerdo con su etapa productiva, utilizando de manera eficiente las materias primas disponibles en la explotación. En los sistemas semi-orgánicos, este proceso integra alimentos comerciales con ingredientes alternativos de origen agrícola, pecuario o agroindustrial, con el propósito de reducir los costos de producción sin afectar el desempeño productivo, la sanidad ni el bienestar animal.
          .caja-1(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t1/img23.jpg', alt='' style="width: 400px").m-auto
              .col-xl.caja-1_p
                p.mb-0 Para formular un plan de alimentación, es indispensable conocer los requerimientos nutricionales de cada categoría animal, el valor bromatológico de las materias primas y la disponibilidad de recursos locales. La formulación debe garantizar un adecuado balance entre energía, proteína, fibra, minerales, vitaminas y agua, evitando deficiencias o excesos que puedan disminuir la eficiencia alimenticia o afectar la salud de los animales.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img24.png', alt='' style="width: 300px").m-auto
      p.mb-5 La incorporación de alimentos alternativos debe realizarse de forma gradual y bajo criterios técnicos, verificando su calidad, inocuidad y aceptación por parte de los animales. Asimismo, es importante establecer registros que permitan evaluar el consumo diario, la ganancia de peso, la conversión alimenticia y el costo de las raciones, facilitando la toma de decisiones para mejorar el programa nutricional. El proceso comprende ocho pasos relacionados entre sí, desde la identificación de la categoría productiva hasta la evaluación de los resultados:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t1/img25.png').m-auto
              h4.mb-3.estilo-text Paso 1. Identificar la categoría y etapa productiva
              p.mb-0.text-center Determinar las necesidades nutricionales de los animales.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t1/img26.png').m-auto
              h4.mb-3.estilo-text Paso 2. Definir el objetivo productivo
              p.mb-0.text-center Establecer si corresponde a crecimiento, ceba, reproducción o lactancia.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t1/img27.png').m-auto
              h4.mb-3.estilo-text Paso 3. Inventariar las materias primas disponibles
              p.mb-0.text-center Identificar recursos como maíz, yuca, plátano, bore, botón de oro, matarratón, suero y melaza, entre otros.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t1/img28.png').m-auto
              h4.mb-3.estilo-text Paso 4. Evaluar el valor nutricional de cada ingrediente
              p.mb-0.text-center Seleccionar materias primas seguras, inocuas y de buena calidad.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t1/img29.png').m-auto
              h4.mb-3.estilo-text Paso 5. Formular y balancear la ración
              p.mb-0.text-center Combinar alimentos convencionales y alternativos, manteniendo el equilibrio nutricional.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t1/img30.png').m-auto
              h4.mb-3.estilo-text Paso 6. Definir la cantidad y frecuencia de suministro
              p.mb-0.text-center Ajustar el consumo según el peso, la edad y el estado fisiológico.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t1/img31.png').m-auto
              h4.mb-3.estilo-text Paso 7. Verificar agua, comederos y almacenamiento
              p.mb-0.text-center Garantizar higiene, bioseguridad y disponibilidad permanente de agua.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t1/img32.png').m-auto
              h4.mb-3.estilo-text Paso 8. Registrar y evaluar resultados
              p.mb-0.text-center Controlar el consumo, la ganancia de peso, la conversión alimenticia y los costos del programa alimenticio.
          p.mb-5 El cumplimiento ordenado de estos pasos permite formular el plan de acuerdo con las características de los animales y los recursos disponibles, además de facilitar el seguimiento de los resultados obtenidos.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Recomendaciones para elaborar un plan de alimentación
      .caja-1(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img33.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p Para complementar el proceso de elaboración, se deben tener en cuenta las siguientes recomendaciones:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Utilizar materias primas de #[b buena calidad e inocuidad comprobada]. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Introducir los alimentos alternativos de forma gradual. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Balancear adecuadamente la #[b energía y la proteína] de la dieta. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Evitar desperdicios mediante el suministro de raciones ajustadas al consumo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mantener registros técnicos que permitan evaluar la eficiencia del programa alimenticio. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Revisar periódicamente el estado corporal y el desempeño productivo de los animales.
            p.mb-0 Estas recomendaciones contribuyen al adecuado desarrollo del plan y permiten realizar ajustes de acuerdo con el consumo y el desempeño productivo.
      Separador
      #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.6 Relación entre el plan de alimentación y el sistema de producción semi-orgánico 
      p El plan de alimentación debe estar directamente relacionado con las características del sistema de producción implementado en la granja. En la producción porcina semi-orgánica, la alimentación no depende exclusivamente del concentrado comercial, sino que incorpora materias primas alternativas, forrajes, recursos agrícolas y subproductos disponibles en la finca o en la región, aprovechándolos de forma técnica y sostenible.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img34.png', alt='' style="width: 500px").m-auto
        .col-xl
          .row.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img35.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Los cerdos criados bajo este sistema suelen disponer de áreas de pastoreo, patios de exploración o corrales con acceso a vegetación, lo que modifica parcialmente sus hábitos alimenticios y permite complementar la dieta con recursos naturales. Sin embargo, estos aportes no reemplazan el balance nutricional que debe garantizar la ración formulada para cada etapa productiva.
          p.mb-0 El éxito del sistema semi-orgánico depende de mantener el equilibrio entre #[b productividad, bienestar animal, sostenibilidad ambiental y rentabilidad económica]. Para ello, el plan de alimentación debe considerar factores como el clima, el tipo de alojamiento, la disponibilidad estacional de materias primas, el acceso permanente al agua y la correcta conservación de los alimentos.
      p.mb-5 La aplicación de las Buenas Prácticas Ganaderas (BPG) exige que todos los ingredientes utilizados sean inocuos, estén protegidos de la humedad, las plagas y la contaminación, y que exista un adecuado control sobre el suministro del alimento, la limpieza de comederos y bebederos y el registro permanente de los resultados productivos. Para facilitar la relación entre cada etapa productiva y la alimentación semi-orgánica, la información se organiza en dos componentes principales:
      SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t1/img36.png').m-auto
          h4.mb-3.estilo-text Lechones
          p.mb-0.text-center Introducción gradual de alimentos alternativos altamente digestibles. Se pueden incorporar maíz molido, yuca cocida y suero de leche.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t1/img37.png').m-auto
          h4.mb-3.estilo-text Levante
          p.mb-0.text-center Sustitución parcial del concentrado mediante materias primas locales, como maíz, yuca, bore, botón de oro y matarratón.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t1/img38.png').m-auto
          h4.mb-3.estilo-text Ceba
          p.mb-0.text-center Mayor utilización de fuentes energéticas alternativas balanceadas con proteína. Entre las materias primas se encuentran maíz, plátano, banano, yuca y melaza.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t1/img39.png').m-auto
          h4.mb-3.estilo-text Gestación
          p.mb-0.text-center Dietas controladas con aporte de fibra, minerales y energía moderada. Pueden incluir forrajes, maíz, yuca, minerales y leguminosas.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t1/img40.png').m-auto
          h4.mb-3.estilo-text Lactancia
          p.mb-0.text-center Dietas de alta densidad energética y proteica complementadas con recursos alternativos, como suero de leche, maíz, harina de soya, yuca y fuentes proteicas vegetales.
      p.mb-5 Esta organización conserva #[b toda la información técnica original], pero reduce la cantidad de columnas y facilita la relación entre la etapa productiva, su objetivo y las alternativas de alimentación.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Beneficios del plan de alimentación semi-orgánico
      .caja-1(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img41.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p La adecuada formulación y aplicación del plan genera beneficios relacionados con los costos, el aprovechamiento de los recursos disponibles, el bienestar animal y la sostenibilidad del sistema productivo:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Reduce los costos de alimentación mediante el aprovechamiento de #[b recursos locales]. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Disminuye la dependencia de alimentos balanceados comerciales. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Favorece el uso sostenible de materias primas agrícolas y pecuarias. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mejora el bienestar animal mediante una alimentación variada y balanceada. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Incrementa la rentabilidad del sistema productivo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Contribuye al cumplimiento de las #[b Buenas Prácticas Ganaderas (BPG)] y a una producción porcina más sostenible.
            p.mb-0 En conjunto, estos beneficios evidencian la importancia de articular el plan de alimentación con las características del sistema de producción semi-orgánico, de manera que el aprovechamiento de recursos alternativos contribuya a la eficiencia productiva, la rentabilidad y la sostenibilidad de la explotación.
      
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
