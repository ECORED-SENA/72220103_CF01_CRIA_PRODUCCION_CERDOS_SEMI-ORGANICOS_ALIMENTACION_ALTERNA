<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Programas de alimentación complementaria y alterna
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2(data-aos="fade-right")
            p.mb-0 Los programas de alimentación complementaria y alterna constituyen una estrategia nutricional que permite aprovechar eficientemente los recursos alimenticios disponibles en la finca o en la región, mediante la complementación de los alimentos balanceados comerciales con materias primas alternativas de valor nutricional conocido. En la producción porcina semi-orgánica, estos programas contribuyen a disminuir los costos de alimentación, fortalecer la sostenibilidad del sistema productivo y mejorar el aprovechamiento de subproductos agrícolas y agroindustriales.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img1.jpg', alt='' style="width: 300px").m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 Su implementación requiere una adecuada planificación técnica que considere los requerimientos nutricionales de cada etapa productiva, la calidad bromatológica de las materias primas, la inocuidad de los ingredientes y el balance de la ración. Asimismo, es indispensable realizar un seguimiento permanente del consumo, la condición corporal y los indicadores productivos, con el fin de garantizar que la incorporación de alimentos alternativos no afecte el crecimiento, la reproducción, la salud ni el bienestar de los animales.
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Alimentación alterna en cerdos 
      p La alimentación alterna corresponde al uso planificado de materias primas de origen vegetal, animal o agroindustrial que pueden complementar parcialmente las dietas convencionales de los cerdos. Esta práctica busca aprovechar los recursos disponibles en la finca o en la región, disminuir la dependencia de concentrados comerciales y mejorar la rentabilidad del sistema de producción semi-orgánico.
      p.mb-5 No debe interpretarse como el reemplazo total del alimento balanceado, sino como una estrategia técnica para la formulación de raciones balanceadas, en la que cada ingrediente aporta nutrientes específicos que deben combinarse adecuadamente para satisfacer las necesidades del animal.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img2.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Antes de incorporar cualquier alimento alternativo, es indispensable evaluar su contenido de energía metabolizable, proteína, fibra, minerales, vitaminas, digestibilidad, palatabilidad y posibles factores antinutricionales. De igual manera, debe verificarse que las materias primas se encuentren libres de contaminación microbiológica, residuos químicos, hongos, micotoxinas o procesos de fermentación inadecuados que comprometan la inocuidad del alimento.
      p.mb-5 La utilización de alimentos alternativos también favorece el bienestar animal, siempre que el suministro se realice de forma gradual y se eviten cambios bruscos en la dieta que puedan generar trastornos digestivos, disminución del consumo o alteraciones en el comportamiento alimenticio.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principales materias primas utilizadas en alimentación alterna
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p Las materias primas utilizadas cumplen diferentes funciones nutricionales y pueden incorporarse según la etapa productiva y las necesidades de los animales. Para facilitar su relación, se organizan de acuerdo con su aporte y uso recomendado:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Maíz:] aporta energía. Puede utilizarse en todas las etapas productivas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Yuca fresca o seca:] aporta energía. Se recomienda principalmente durante el levante y la ceba.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Plátano:] aporta energía y carbohidratos. Puede utilizarse durante el levante, la ceba y la gestación.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Banano:] aporta energía. Se utiliza principalmente durante la ceba y en hembras gestantes.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Melaza:] proporciona energía rápida y se utiliza como complemento energético.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img3.png', alt='' style="width: 500px").m-auto
      p.mb-5 Como complemento de las materias primas anteriores, se presentan otros recursos que pueden incorporarse a la alimentación alterna de acuerdo con su aporte nutricional, la etapa productiva y las necesidades de los animales:
      .bg-2.mb-5
        .px-5.p-5
          .row.align-items-center
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img4.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img5.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Bore
                  p.mb-0.text-center Aporta proteína. Puede incorporarse durante el levante y la gestación.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img6.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Botón de oro
                  p.mb-0.text-center Aporta proteína y minerales. Se utiliza durante el levante y en reproductoras.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img7.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Matarratón
                  p.mb-0.text-center Aporta proteína. Puede utilizarse en reproductoras y animales en levante.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img8.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Suero de leche
                  p.mb-0.text-center Aporta proteína y energía. Puede incorporarse en la alimentación de lechones y durante la lactancia.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img9.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Harina de pescado
                  p.mb-0.text-center Constituye una fuente de proteína de alta calidad. Puede utilizarse en lechones y reproductoras.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img10.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Subproductos agrícolas
                  p.mb-0.text-center Pueden aportar energía o fibra. Su utilización depende de la disponibilidad y de la evaluación nutricional.
      p.mb-5 La selección de estas materias primas debe responder a criterios nutricionales y sanitarios, de manera que su incorporación contribuya al equilibrio de la dieta y al aprovechamiento adecuado de los recursos disponibles.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Recomendaciones para incorporar alimentos alternativos
      .caja-3(data-aos="zoom-in").mb-0
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p La incorporación de alimentos alternativos requiere medidas que favorezcan la adaptación de los animales y permitan mantener la calidad nutricional de las raciones:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Introducir los ingredientes de manera gradual. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Balancear adecuadamente #[b energía, proteína y fibra]. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | No suministrar materias primas deterioradas o fermentadas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mantener agua limpia disponible permanentemente. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Evaluar periódicamente el consumo y la ganancia de peso. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Registrar los cambios realizados en las formulaciones.
            p.mb-0 Estas recomendaciones permiten incorporar progresivamente los recursos alternativos y realizar ajustes de acuerdo con la respuesta productiva de los animales.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img11.png', alt='' style="width: 500px").m-auto
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Labores suplementarias relacionadas con el programa de alimentación 
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          p Las labores suplementarias comprenden el conjunto de actividades técnicas que garantizan el correcto funcionamiento del programa de alimentación dentro de la granja porcina. Estas actividades no se limitan al suministro diario del alimento, sino que incluyen la selección de materias primas, el almacenamiento, la preparación de mezclas, la distribución de las raciones, el mantenimiento de los equipos y el seguimiento permanente de los resultados productivos.
          .caja-1(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t2/img12.jpg', alt='' style="width: 400px").m-auto
              .col-xl.caja-1_p
                p.mb-0 En los sistemas semi-orgánicos, estas actividades adquieren mayor importancia debido a la utilización simultánea de alimentos comerciales y materias primas alternativas, las cuales requieren un manejo diferenciado para conservar su calidad nutricional y evitar pérdidas por deterioro o contaminación.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img13.png', alt='' style="width: 300px").m-auto
      p.mb-5 La adecuada ejecución de estas labores permite optimizar el aprovechamiento de los recursos alimenticios, reducir desperdicios, garantizar la inocuidad de los alimentos y cumplir con los principios establecidos en las #[b Buenas Prácticas Ganaderas (BPG)].
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Actividades que hacen parte del programa de alimentación
      p.mb-5 A continuación, se presenta un pódcast  sobre las principales actividades que deben desarrollarse durante la ejecución del programa alimenticio, destacando el manejo adecuado de las materias primas, la preparación y suministro de las raciones, las condiciones de higiene y el seguimiento productivo, especialmente cuando se emplean alternativas alimenticias en la producción porcina.
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.caja-4(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t2/img14.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Ejecución y seguimiento del programa alimenticio en la producción porcina"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t2/img15.jpg" style="max-width: 510px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relación con las Buenas Prácticas Ganaderas (BPG)
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-1(data-aos="fade-right")
            p.mb-0 Todas las actividades del programa alimenticio deben documentarse mediante registros que permitan garantizar la trazabilidad del alimento suministrado. Estos registros facilitan el control de inventarios, el seguimiento del consumo, la evaluación de costos y la toma de decisiones para mejorar la eficiencia del sistema.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img16.jpg', alt='' style="width: 300px").m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 Además, las Buenas Prácticas Ganaderas establecen que los alimentos deben conservarse en condiciones higiénicas, protegerse de contaminantes físicos, químicos y biológicos, y suministrarse de manera que promuevan el bienestar animal, la inocuidad de la producción y la sostenibilidad de la explotación porcina semi-orgánica.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Tipos de suplementación en la alimentación porcina semi-orgánica 
      p La suplementación alimenticia consiste en suministrar nutrientes adicionales a la ración base cuando esta no cubre completamente los requerimientos nutricionales de los animales. En los sistemas de producción porcina semi-orgánica, la suplementación permite corregir deficiencias de energía, proteína, minerales, vitaminas y fibra ocasionadas por el uso de materias primas alternativas, garantizando una alimentación equilibrada durante todas las etapas productivas.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img17.png', alt='' style="width: 500px").m-auto
        .col-xl
          .row.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img35.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Su aplicación debe realizarse con base en los requerimientos nutricionales de cada categoría animal, el análisis bromatológico de los ingredientes disponibles y los objetivos productivos de la explotación. Una suplementación adecuada mejora la conversión alimenticia, favorece el crecimiento, fortalece el sistema inmunológico, optimiza la reproducción y contribuye al bienestar animal.
          p.mb-0 En los programas de alimentación semi-orgánica, la suplementación no reemplaza la formulación de raciones balanceadas, sino que actúa como un complemento nutricional que permite aprovechar eficientemente los recursos disponibles en la finca sin afectar el desempeño productivo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de suplementación
      p.mb-5 Los tipos de suplementación se diferencian por la función nutricional que cumplen, las materias primas utilizadas y las etapas productivas en las que tienen mayor aplicación:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img18.png", alt="" style="width: 330px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Energética").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Su finalidad es incrementar el aporte de energía para cubrir las necesidades de crecimiento, mantenimiento y producción. Las principales fuentes son maíz, yuca fresca o seca, plátano, banano, batata, melaza y sorgo. Se utiliza principalmente durante el levante, la ceba y la lactancia.
            .row(titulo="Proteica").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Suministra los aminoácidos necesarios para el desarrollo muscular, la formación de tejidos, la producción de leche y la reproducción. Puede obtenerse de harina de soya, harina de pescado, bore, botón de oro, matarratón, leucaena y suero de leche. Tiene mayor utilización en lechones, levante y lactancia.
            .row(titulo="Mineral").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite cubrir las necesidades de calcio, fósforo, sodio, magnesio y microminerales indispensables para la formación ósea, el metabolismo y la reproducción. Entre sus fuentes se encuentran carbonato de calcio, fosfato bicálcico, sal mineralizada y premezclas minerales. Se utiliza en todas las etapas productivas.
            .row(titulo="Vitamínica").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Complementa las vitaminas que no se encuentran en cantidades suficientes en las materias primas alternativas y favorece el metabolismo y la inmunidad. Generalmente, se suministra mediante premezclas vitamínicas, núcleos nutricionales y aditivos comerciales autorizados. Se utiliza en todas las etapas productivas.
            .row(titulo="Fibrosa").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Favorece el funcionamiento del aparato digestivo, la saciedad y la disminución de comportamientos asociados al estrés, especialmente en hembras gestantes. Puede obtenerse mediante bore, pastos tiernos, botón de oro, forrajes verdes y residuos vegetales aptos. Tiene mayor utilización durante la gestación y en reproductoras.
      p.mb-5 La selección del tipo de suplementación debe responder a las deficiencias de la ración base y a las necesidades particulares de cada categoría animal.
      .caja-5.mb-5(data-aos="fade-right")   
        h4.mb-0 Recomendaciones técnicas
      .caja-3(data-aos="zoom-in").mb-0
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p Para que la suplementación cumpla su función dentro del programa alimenticio, se deben considerar los siguientes criterios:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Balancear siempre la suplementación con la ración base. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | No sustituir completamente el concentrado comercial sin realizar cálculos nutricionales. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Introducir los suplementos de forma gradual. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Controlar diariamente el consumo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Registrar cualquier modificación realizada en la dieta. 
            p.mb-0 El seguimiento de estas recomendaciones permite utilizar los suplementos como complemento de la ración y conservar el equilibrio nutricional requerido.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img19.png', alt='' style="width: 500px").m-auto
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Uso de recursos alimenticios alternativos 
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El aprovechamiento de recursos alimenticios alternativos constituye uno de los principios fundamentales de la producción porcina semi-orgánica. Estos recursos permiten formular raciones más económicas, aprovechar los productos disponibles en la finca y disminuir la dependencia de alimentos balanceados comerciales, favoreciendo la sostenibilidad ambiental y la rentabilidad del sistema.
          .caja-1(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t2/img20.jpg', alt='' style="width: 400px").m-auto
              .col-xl.caja-1_p
                p.mb-0 Las materias primas alternativas pueden provenir de cultivos agrícolas, residuos de cosecha, subproductos agroindustriales o recursos forrajeros, siempre que sean inocuas, tengan un adecuado valor nutricional y se incorporen dentro de una formulación técnicamente balanceada.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img21.png', alt='' style="width: 300px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2(data-aos="fade-right")
            p.mb-0 Antes de utilizar cualquier recurso alimenticio, es indispensable evaluar su composición bromatológica, contenido de humedad, digestibilidad, palatabilidad y posibles factores antinutricionales. Algunos ingredientes requieren procesos previos, como cocción, picado, secado, molienda o ensilaje, para mejorar su aprovechamiento y evitar riesgos para la salud animal.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img22.jpg', alt='' style="width: 300px").m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 El uso de estos recursos debe formar parte del programa de alimentación y complementarse con suplementos minerales y vitamínicos cuando sea necesario, garantizando que todas las etapas productivas reciban una dieta equilibrada.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación de los recursos alimenticios alternativos
      p.mb-5 Los recursos alimenticios alternativos pueden agruparse según su principal aporte nutricional. Esta clasificación facilita la selección de ingredientes para complementar las raciones:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Fuentes energéticas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img23.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Fuentes energéticas
              p.mb-0 Aportan carbohidratos y energía para el crecimiento y la producción. Incluyen maíz, yuca, plátano, banano, batata y melaza.
        .py-3.py-md-4(titulo="Fuentes proteicas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img24.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Fuentes proteicas
              p.mb-0 Favorecen el desarrollo muscular y la producción. Incluyen bore, botón de oro, matarratón, leucaena, harina de pescado y suero de leche.
        .py-3.py-md-4(titulo="Fuentes fibrosas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img25.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Fuentes fibrosas
              p.mb-0 Contribuyen al funcionamiento digestivo. Incluyen pastos tiernos, bore, botón de oro y residuos vegetales limpios.
      p.mb-5 Además de su clasificación nutricional, cada recurso presenta características particulares que determinan la forma en que debe incorporarse a la alimentación:
      .bg-2.mb-5
        .px-5.p-5
          .row.align-items-center
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img26.png', alt='' style="max-width: 300px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img27.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Maíz
                  p.mb-0.text-center Recurso energético que aporta energía y puede utilizarse como base para la formulación de raciones balanceadas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img28.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Yuca
                  p.mb-0.text-center Recurso energético que aporta carbohidratos. Puede utilizarse fresca, cocida o seca y debe protegerse del deterioro.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img29.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Plátano
                  p.mb-0.text-center Recurso energético que aporta energía. Puede suministrarse picado o cocido según la disponibilidad.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img30.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Banano
                  p.mb-0.text-center Recurso energético que aporta energía y puede utilizarse como complemento en dietas de levante y ceba.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img31.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Melaza
                  p.mb-0.text-center Recurso energético que proporciona energía rápida. Se utiliza en pequeñas cantidades para mejorar la palatabilidad.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img32.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Bore
                  p.mb-0.text-center Recurso proteico-fibroso que aporta proteína y fibra. Debe complementar la dieta y no utilizarse como alimento único.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img33.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Botón de oro
                  p.mb-0.text-center Recurso proteico que aporta proteína y minerales. Se incorpora en proporciones moderadas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img34.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Matarratón
                  p.mb-0.text-center Recurso proteico que aporta proteína vegetal. Puede utilizarse fresco o previamente acondicionado.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img35.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Suero de leche
                  p.mb-0.text-center Recurso proteico-energético que aporta proteína y energía. Debe suministrarse fresco y en condiciones higiénicas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img36.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Residuos agrícolas aptos
                  p.mb-0.text-center Su clasificación y aporte pueden variar entre energía y fibra. Únicamente deben utilizarse materiales limpios y libres de contaminación.
      p.mb-5 La selección y el manejo de estos recursos deben considerar tanto su aporte nutricional como las condiciones requeridas para conservar su calidad e inocuidad.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Buenas prácticas para el uso de recursos alternativos
      .caja-3(data-aos="zoom-in").mb-0
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p El aprovechamiento de recursos alternativos debe acompañarse de prácticas que reduzcan los riesgos de deterioro, contaminación o desequilibrio nutricional:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Seleccionar únicamente materias primas inocuas y de buena calidad. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Evitar ingredientes con hongos, fermentaciones o contaminación química. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Almacenar correctamente los alimentos para conservar su valor nutricional. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Incorporar los recursos alternativos de forma gradual dentro de raciones balanceadas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Realizar seguimiento a la aceptación del alimento, la condición corporal y la ganancia de peso. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Registrar las formulaciones y evaluar periódicamente la eficiencia del programa alimenticio. 
            p.mb-0 Este enfoque integra la #[b alimentación alterna, la suplementación, las materias primas locales, la formulación de raciones y la producción porcina semi-orgánica sostenible], manteniendo la relación entre los recursos disponibles y las necesidades nutricionales de los animales.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img37.png', alt='' style="width: 500px").m-auto
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Diseño de programas de alimentación complementaria 
      p El diseño de un programa de alimentación complementaria consiste en planificar de manera técnica el uso de alimentos alternativos y suplementos nutricionales para complementar la dieta base de los cerdos, garantizando que los requerimientos de energía, proteína, minerales, vitaminas y fibra sean cubiertos durante cada etapa productiva. En los sistemas de producción porcina semi-orgánica, este proceso busca aprovechar eficientemente los recursos disponibles en la finca, disminuir los costos de alimentación y mantener un adecuado desempeño productivo.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img38.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El diseño del programa debe partir del conocimiento de las características del sistema de producción, la disponibilidad de materias primas, el análisis bromatológico de los ingredientes y las necesidades nutricionales de cada categoría animal. Posteriormente, se formula una ración balanceada en la que se determina el porcentaje de inclusión de cada ingrediente, la cantidad diaria de alimento, la frecuencia de suministro y los suplementos que deben incorporarse para corregir posibles deficiencias nutricionales.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2(data-aos="fade-right")
            p.mb-0 La planificación debe ser flexible para adaptarse a la disponibilidad estacional de materias primas alternativas, como maíz, yuca, plátano, banano, bore, botón de oro, matarratón, suero de leche y otros recursos locales. Sin embargo, cualquier modificación en la dieta debe realizarse de forma gradual y sustentarse en registros técnicos que permitan evaluar la aceptación del alimento, la ganancia de peso, la conversión alimenticia y la condición corporal de los animales.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img39.jpg', alt='' style="width: 300px").m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 Desde las Buenas Prácticas Ganaderas (BPG), el diseño del programa alimenticio debe garantizar la inocuidad de las materias primas, el almacenamiento adecuado de los insumos, la disponibilidad permanente de agua potable y la correcta limpieza de comederos y bebederos, contribuyendo al bienestar animal y a la sostenibilidad del sistema productivo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aspectos para diseñar un programa de alimentación complementaria
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p El diseño requiere integrar diferentes elementos técnicos, desde la identificación de la categoría animal hasta el seguimiento de los resultados:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Identificar la categoría y etapa productiva del animal. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Definir el objetivo del programa alimenticio. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Inventariar las materias primas disponibles en la finca. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Analizar el valor nutricional de los ingredientes. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Formular y balancear la ración. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Establecer el porcentaje de inclusión de alimentos alternativos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Determinar la cantidad diaria y la frecuencia de suministro. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Definir los suplementos minerales y vitamínicos requeridos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Implementar registros de consumo y desempeño productivo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Evaluar periódicamente los resultados y realizar ajustes.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img40.png', alt='' style="width: 500px").m-auto
      p Estos aspectos pueden integrarse de acuerdo con su función y aplicación dentro del sistema semi-orgánico:
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img41.png', alt='' style="width: 500px").m-auto
        .col-xl
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Categoría animal:] identifica la etapa productiva: lechones, levante, ceba, gestación o lactancia. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Objetivo nutricional:] define el propósito del programa, como crecimiento, reproducción, ganancia de peso o producción de leche. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Materias primas:] permite seleccionar los alimentos disponibles, como maíz, yuca, plátano, bore, botón de oro, matarratón y suero, entre otros. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Balanceo de raciones:] calcula el aporte nutricional de cada ingrediente y garantiza el equilibrio entre energía, proteína y fibra. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Nivel de inclusión:] define la proporción de alimentos alternativos y orienta la sustitución parcial del concentrado comercial. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Forma de suministro:] establece si el alimento se suministrará fresco, picado, cocido, molido, mezclado o ensilado. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Frecuencia de alimentación:] determina los horarios y el número de raciones, ajustándolos según la edad y el estado fisiológico. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Seguimiento:] evalúa el consumo, la ganancia de peso, la conversión alimenticia y la condición corporal.
      p.mb-0 La articulación de estos elementos permite estructurar un programa flexible y ajustarlo según las necesidades de los animales y la disponibilidad de materias primas.
      Separador
      #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.6 Implementación del programa alimenticio según la etapa productiva 
      p La implementación del programa de alimentación consiste en llevar a la práctica la formulación de las raciones diseñadas para cada grupo de animales, suministrando la cantidad adecuada de alimento, agua y suplementos nutricionales según la etapa productiva. En la producción porcina semi-orgánica, esta implementación debe realizarse de manera progresiva cuando se incorporan alimentos alternativos, permitiendo que los animales se adapten a los nuevos ingredientes sin afectar el consumo ni el funcionamiento del sistema digestivo.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img42.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Cada categoría animal presenta necesidades específicas. Los lechones requieren dietas altamente digestibles y de elevada calidad nutricional; los animales en levante necesitan un adecuado balance entre energía y proteína para favorecer el crecimiento muscular; los cerdos en ceba demandan un mayor aporte energético para optimizar la ganancia de peso, mientras que las hembras gestantes y lactantes requieren programas alimenticios orientados a mantener la condición corporal, favorecer el desarrollo fetal y garantizar una adecuada producción de leche.
      .bg-3
        .px-5
          p.mb-5 Durante la implementación, es indispensable controlar el consumo diario, el desperdicio de alimento, la disponibilidad permanente de agua, el estado de los comederos y la condición corporal de los animales. Estos indicadores permiten verificar la eficiencia del programa alimenticio y realizar ajustes oportunos cuando sea necesario. Las particularidades de implementación para cada etapa productiva se organizan a continuación:
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 1.
                span Ciclo de alimentación porcina según la etapa productiva
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t2/img43.png', alt='Diagrama circular del ciclo de producción porcina con las etapas de gestación, lactancia, lechones, levante y ceba, acompañado de ilustraciones de cerdos y alimentos alternativos en cada fase.').m-auto
          .row.align-items-center.mb-5
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
                .row(titulo="Lechones").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Facilitar la adaptación al alimento sólido y estimular el crecimiento inicial. Introducir gradualmente alimentos altamente digestibles, como suero de leche, maíz molido, yuca cocida y pequeñas cantidades de concentrado iniciador.
                .row(titulo="Levante").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Favorecer el desarrollo muscular y el crecimiento uniforme. Realizar la sustitución parcial del concentrado mediante alimentos alternativos, como maíz, yuca, bore, botón de oro y matarratón.
                .row(titulo="Ceba").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Incrementar la ganancia diaria de peso y mejorar la conversión alimenticia. Incorporar una mayor proporción de ingredientes energéticos balanceados con proteína, como maíz, plátano, banano, melaza, yuca y suplementos proteicos.
                .row(titulo="Gestación").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Mantener la condición corporal y favorecer el desarrollo fetal. Suministrar dietas con aporte moderado de energía, fibra y minerales, que pueden incorporar forrajes de calidad, bore, maíz, minerales y vitaminas.
                .row(titulo="Lactancia").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Mantener la producción de leche y favorecer la recuperación de la cerda. Suministrar dietas de alta densidad energética y proteica, que pueden incluir suero de leche, maíz, harina de soya, yuca y suplementos minerales.
            .col-xl-auto(data-aos="fade-left")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t2/img44.png", alt="" style="width: 330px").m-auto
      p.mb-5 Esta organización permite relacionar directamente las necesidades de cada etapa con la alimentación complementaria y los recursos alternativos que pueden incorporarse.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Evaluación de la implementación del programa alimenticio
      p Una vez implementado el programa, es necesario evaluar su eficiencia mediante indicadores técnicos que permitan determinar si la alimentación suministrada cumple los objetivos planteados.
      p.mb-5 Los indicadores abarcan aspectos relacionados con el consumo, el desempeño productivo, el estado de los animales y la eficiencia económica:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img45.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img46.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Consumo diario de alimento
                  p.mb-0.text-center Cantidad de alimento consumido durante la jornada.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img47.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Consumo de agua
                  p.mb-0.text-center Disponibilidad y consumo de agua de los animales.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img48.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Ganancia diaria de peso
                  p.mb-0.text-center Evolución del peso durante el periodo productivo.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img49.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Conversión alimenticia
                  p.mb-0.text-center Relación entre el alimento consumido y la ganancia de peso.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img50.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Estado corporal
                  p.mb-0.text-center Condición corporal de los animales durante el programa.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img51.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Aceptación de materias primas alternativas
                  p.mb-0.text-center Respuesta de los animales frente a los ingredientes incorporados.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img52.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Desperdicio de alimento
                  p.mb-0.text-center Pérdidas generadas durante el suministro de las raciones.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img53.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Estado sanitario del lote
                  p.mb-0.text-center Condiciones sanitarias de los animales durante la implementación.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img54.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Costos de alimentación
                  p.mb-0.text-center Recursos económicos destinados al programa alimenticio.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img55.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Rentabilidad del sistema productivo
                  p.mb-0.text-center Relación del programa alimenticio con el desempeño económico del sistema.
          p.mb-0 El seguimiento permanente de estos indicadores permite ajustar oportunamente la formulación de las raciones, mejorar el aprovechamiento de las materias primas alternativas y optimizar la productividad de los sistemas de producción porcina semi-orgánica. De esta manera, se integran la #[b planificación, formulación, implementación y evaluación] del programa alimenticio, fortaleciendo las competencias para diseñar y manejar estrategias nutricionales sostenibles basadas en el uso racional de recursos alternativos.

</template>

<script>
import audio1 from '@/assets/curso/temas/t2/audios/audio-ej.mp3'
export default {
  name: 'Tema2',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
