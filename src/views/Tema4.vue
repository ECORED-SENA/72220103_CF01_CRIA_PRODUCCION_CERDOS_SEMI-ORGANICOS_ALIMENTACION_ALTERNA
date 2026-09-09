<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Manejo de residuos en la producción porcina
      p El manejo de residuos constituye un componente esencial de la producción porcina, ya que influye directamente en la sanidad del predio, la bioseguridad, la protección ambiental, la inocuidad y el bienestar animal. Los residuos se originan principalmente durante la alimentación, la limpieza de las instalaciones, la excreción de los animales, las actividades sanitarias y el uso cotidiano de insumos en la granja.
      p.mb-5 Su gestión debe integrarse al proceso productivo mediante acciones de identificación, clasificación, separación, aprovechamiento y disposición segura. En los sistemas semi-orgánicos, este manejo adquiere especial importancia porque permite reducir impactos ambientales y aprovechar determinados residuos como recursos útiles, siempre bajo criterios técnicos y sanitarios.
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Residuos orgánicos e inorgánicos
      p.mb-5 La producción porcina genera diferentes residuos que, si no se manejan correctamente, pueden afectar la sanidad del predio, la calidad del ambiente, la inocuidad del sistema y el bienestar animal. Estos residuos provienen de la alimentación, la limpieza de instalaciones, la excreción de los animales, las actividades sanitarias y el uso cotidiano de insumos en la granja.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Residuos orgánicos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img1.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Residuos orgánicos
              p.mb-0 Los #[b residuos orgánicos] son aquellos de origen biológico y biodegradable, como excretas, orina, restos de alimento, camas usadas, residuos vegetales y material proveniente del mantenimiento de corrales o zonas verdes. Constituyen una parte importante de los residuos generados en la producción porcina y, cuando se manejan adecuadamente, pueden aprovecharse mediante compostaje, aboneras o biodigestores.
        .py-3.py-md-4(titulo="Residuos inorgánicos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Residuos inorgánicos
              p.mb-0 Los #[b residuos inorgánicos] incluyen plásticos, empaques, costales, botellas, guantes, jeringas, agujas, frascos de medicamentos, alambres, envases de desinfectantes y otros materiales no biodegradables o de lenta degradación. Algunos pueden destinarse al reciclaje; otros, debido a su riesgo sanitario o químico, requieren manejo especial y disposición segura.
      p.mb-5 En las granjas porcícolas semi-orgánicas, la identificación de los residuos permite determinar cuáles pueden aprovecharse, cuáles deben separarse y cuáles requieren disposición controlada. Desde las #[b Buenas Prácticas Ganaderas (BPG)], el sistema debe reconocer qué residuos genera, en qué cantidad y qué riesgos representan para el ambiente, los animales, los trabajadores y la producción. Los residuos más frecuentes y sus principales riesgos se organizan de la siguiente manera:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Orgánicos
                  p.mb-0 Incluyen excretas, orina, restos de alimento, camas y residuos vegetales. Su manejo inadecuado puede generar malos olores, proliferación de moscas y contaminación del agua y del suelo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Inorgánicos reciclables
                  p.mb-0 Comprenden costales, plásticos limpios, cartón y envases no contaminados. Su acumulación puede generar contaminación ambiental y desorganización de las áreas productivas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Inorgánicos de riesgo
                  p.mb-0 Incluyen agujas, jeringas, frascos de medicamentos y envases contaminados. Pueden ocasionar accidentes, riesgo biológico y contaminación química.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img5.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Esta identificación inicial facilita la clasificación posterior y permite establecer medidas específicas de manejo según la naturaleza y el nivel de riesgo de cada residuo.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Clasificación y separación
      p La clasificación y separación de residuos es el primer paso para desarrollar un manejo ambiental adecuado en la granja porcina. Consiste en identificar los residuos desde el momento en que se generan y ubicarlos en recipientes o áreas definidas según su naturaleza, nivel de riesgo y posibilidad de aprovechamiento.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Esta práctica facilita el tratamiento, reduce la contaminación cruzada y mejora el control sanitario del predio. En términos generales, los residuos pueden organizarse en #[b orgánicos aprovechables, inorgánicos reciclables, no aprovechables y residuos de riesgo sanitario].
          .caja-1(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t4/img6.jpg', alt='' style="width: 400px").m-auto
              .col-xl.caja-1_p
                p.mb-0 Los orgánicos aprovechables incluyen excretas, restos vegetales y algunos residuos de alimentación que pueden destinarse a compostaje o biodigestión. Los reciclables abarcan materiales como cartón, plástico o costales limpios. Por su parte, los residuos de riesgo comprenden agujas, jeringas, frascos de medicamentos, material cortopunzante y empaques contaminados con productos químicos o sanitarios.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img7.png', alt='' style="width: 300px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2(data-aos="fade-right")
            p.mb-0 La separación debe realizarse en la fuente, es decir, en el lugar donde se produce el residuo. Esto evita que los materiales aprovechables se contaminen y pierdan valor, y permite impedir que los residuos peligrosos entren en contacto con animales, trabajadores o alimentos. Para ello, la granja debe contar con recipientes identificados, zonas de almacenamiento temporal y procedimientos definidos para cada tipo de desecho.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t4/img8.jpg', alt='' style="width: 300px").m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 Desde las BPG porcinas, clasificar los residuos mejora la organización del sistema y contribuye a proteger la salud pública y animal. Un manejo inadecuado puede favorecer la proliferación de vectores, contaminar fuentes de agua, generar malos olores y aumentar la presencia de agentes patógenos en el entorno. Por esta razón, la separación constituye una práctica básica de bioseguridad y responsabilidad ambiental. 
      p.mb-5 Las principales categorías y su manejo general se relacionan a continuación:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Orgánicos aprovechables")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img9.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Orgánicos aprovechables
              p.mb-0 Incluyen excretas, restos vegetales, residuos de cama y restos de alimento aptos. Pueden destinarse a compostaje, biodigestores, aboneras o manejo técnico del estiércol.
        .py-3.py-md-4(titulo="Inorgánicos reciclables")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img10.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Inorgánicos reciclables
              p.mb-0 Comprenden cartón, costales, plástico limpio y envases no contaminados. Requieren limpieza, almacenamiento y entrega para reciclaje.
        .py-3.py-md-4(titulo="No aprovechables")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img11.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 No aprovechables
              p.mb-0 Incluyen materiales deteriorados o sin posibilidad de reciclaje. Deben destinarse a disposición final de acuerdo con el manejo municipal o predial correspondiente.
        .py-3.py-md-4(titulo="De riesgo sanitario")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img12.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 De riesgo sanitario
              p.mb-0 Incluyen agujas, jeringas, frascos de medicamentos y envases contaminados. Requieren recolección especial, almacenamiento seguro y entrega a un gestor autorizado.
      p.mb-0 La correcta separación desde el origen facilita el aprovechamiento de los residuos útiles y disminuye los riesgos asociados con la mezcla de materiales incompatibles o peligrosos.
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Métodos de disposición de desperdicios y desechos
      p La disposición de residuos en la granja porcina debe realizarse mediante métodos que reduzcan el impacto ambiental, controlen los riesgos sanitarios y permitan aprovechar materiales cuando sea posible. La selección del método depende del tipo de residuo, del volumen generado, de la infraestructura disponible y de las características del sistema de producción.
      p.mb-5 En el caso de los residuos orgánicos, uno de los métodos utilizados es el #[b compostaje], que permite transformar estiércol, camas y restos vegetales en abono orgánico, siempre que se controlen la humedad, la aireación y el tiempo de descomposición.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img13.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Otro método corresponde al uso de #[b biodigestores], mediante los cuales se aprovechan las excretas y otros residuos orgánicos para producir biogás y fertilizante líquido o sólido. También pueden utilizarse aboneras o sistemas de almacenamiento temporal del estiércol, siempre que se evite el escurrimiento hacia fuentes de agua. Los residuos inorgánicos reciclables deben almacenarse en lugares limpios, secos y protegidos para posteriormente entregarlos a sistemas de reciclaje o recolección autorizada.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-4(data-aos="fade-right")
            p.mb-0 Los residuos peligrosos, como agujas, jeringas, frascos de medicamentos o envases de desinfectantes, no deben enterrarse, quemarse al aire libre ni mezclarse con residuos comunes. Estos materiales requieren recolección diferenciada y disposición mediante gestores autorizados o de acuerdo con la normatividad sanitaria vigente.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t4/img14.jpg', alt='' style="width: 300px").m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 La disposición inadecuada de residuos, como descargar excretas en quebradas, acumular desperdicios cerca de los corrales o abandonar materiales cortopunzantes, representa un riesgo para la salud animal, la salud humana y la sostenibilidad de la granja. Por ello, el método de disposición debe estar definido dentro del plan de manejo del predio y ser conocido por las personas que participan en la producción. 
      p.mb-5 Los principales métodos y precauciones se organizan según el tipo de residuo:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Excretas y estiércol").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Pueden manejarse mediante compostaje, biodigestor, abonera o almacenamiento técnico. Se debe evitar la escorrentía, la generación excesiva de olores y la proliferación de vectores.
            .row(titulo="Restos vegetales y residuos de cama").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Pueden destinarse al compostaje o a procesos de incorporación controlada. No deben mezclarse con materiales contaminados.
            .row(titulo="Plásticos, cartón y costales limpios").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Pueden destinarse al reciclaje o a la recolección selectiva. Deben mantenerse limpios y secos.
            .row(titulo="Agujas, jeringas y frascos contaminados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Requieren recolección segura y entrega a un gestor autorizado. No deben mezclarse con residuos comunes ni permanecer al alcance de personas o animales.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img15.png", alt="" style="width: 370px").m-auto
      p.mb-0 La elección del método adecuado permite reducir los riesgos sanitarios y ambientales y, al mismo tiempo, aprovechar aquellos residuos que pueden reincorporarse técnicamente al sistema productivo.
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Aprovechamiento de residuos en sistemas semi-orgánicos
      .row.align-items-center.mb-5
        .col-xl
          p En la producción porcina semi-orgánica, el aprovechamiento de residuos constituye una estrategia importante para mejorar la sostenibilidad del sistema y disminuir el impacto ambiental. Cuando los residuos orgánicos se manejan correctamente, pueden convertirse en insumos útiles para la fertilización de cultivos, la generación de energía o el mejoramiento del suelo.
          p.mb-5Las excretas porcinas, por ejemplo, pueden utilizarse como materia prima para procesos de compostaje o biodigestión, mediante los cuales se obtienen abonos orgánicos y, en algunos casos, biogás. Los restos vegetales, las camas y otros materiales biodegradables también pueden incorporarse a procesos de compostaje, siempre que no estén contaminados con sustancias químicas o agentes infecciosos. Este aprovechamiento permite cerrar ciclos dentro de la finca, integrar la producción animal y agrícola y reducir costos relacionados con la fertilización. Sin embargo, el uso de estos residuos requiere control técnico.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img16.png", alt="" style="width: 500px").m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img17.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El estiércol fresco o los residuos con un proceso de descomposición inadecuado pueden contaminar el agua, el suelo o los cultivos si se aplican sin tratamiento. Además, determinados residuos no deben reincorporarse al sistema debido a su riesgo sanitario. Por esta razón, antes de aprovechar un residuo es necesario establecer su origen, su nivel de contaminación, el tratamiento requerido y el uso final previsto.
      p.mb-5 Desde las Buenas Prácticas Ganaderas, el aprovechamiento debe realizarse con criterios de bioseguridad, trazabilidad y protección ambiental. Esto implica contar con áreas definidas, procedimientos claros, control de los tiempos de tratamiento y medidas orientadas a evitar olores, escurrimientos, proliferación de moscas o exposición de los animales a materiales no seguros. 
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p Las principales alternativas de aprovechamiento y sus condiciones se relacionan a continuación:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Excretas porcinas:] pueden destinarse al compostaje, biodigestores o fertilización posterior al tratamiento. Requieren manejo técnico y control sanitario.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Restos de cama:] pueden incorporarse a aboneras o procesos de compostaje. Deben estar libres de contaminantes químicos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Residuos vegetales:] pueden destinarse al compostaje o mezclarse con estiércol. Deben mantenerse limpios y libres de procesos de descomposición que representen riesgo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Aguas residuales tratadas:] su posible uso depende del sistema productivo, del tratamiento aplicado y de la normatividad correspondiente. Solo pueden considerarse cuando existe tratamiento adecuado y control técnico.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img18.png', alt='' style="width: 500px").m-auto
      p.mb-0 El uso de aguas residuales tratadas depende de la normatividad aplicable, del tratamiento implementado y de las características del sistema productivo. El aprovechamiento técnico permite integrar determinados residuos al funcionamiento de la finca, pero siempre debe priorizar la protección ambiental, la bioseguridad y la inocuidad.
      Separador
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.5 Manejo ambiental y buenas prácticas en la granja porcina
      p El manejo ambiental en la granja porcina comprende el conjunto de acciones orientadas a prevenir, reducir y controlar los impactos que la producción genera sobre el suelo, el agua, el aire y el entorno. En los sistemas semi-orgánicos, este manejo es especialmente importante porque se busca una producción más sostenible, articulada con el aprovechamiento de recursos y con el bienestar animal.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img19.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Dentro del manejo ambiental se incluyen la correcta disposición de excretas, el control de aguas residuales, la limpieza de instalaciones, la reducción de olores, el control de vectores, la protección de fuentes hídricas y la organización de zonas destinadas al almacenamiento de residuos. También forman parte de este manejo la capacitación del personal, el uso responsable de productos químicos y la prevención de la contaminación ocasionada por medicamentos, desinfectantes o combustibles.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2(data-aos="fade-right")
            p.mb-0 Las Buenas Prácticas Ganaderas porcinas requieren que la granja cuente con procedimientos de limpieza, desinfección, control sanitario, almacenamiento de insumos, manejo de mortalidades y disposición de residuos. Estas prácticas contribuyen al cumplimiento de las condiciones productivas y sanitarias, así como a la protección de la salud animal, la inocuidad del producto y la seguridad de las personas que trabajan en la explotación.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t4/img20.jpg', alt='' style="width: 300px").m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 Desde el bienestar animal, un manejo ambiental adecuado contribuye a mantener instalaciones limpias, secas, ventiladas y confortables. El exceso de humedad, la acumulación de excretas, los malos olores o la presencia de plagas incrementan el estrés, favorecen la aparición de enfermedades y deterioran las condiciones de los animales. Por ello, el manejo de residuos y el cuidado ambiental forman parte integral del manejo productivo de la granja. 
      p.mb-5 Las prácticas prioritarias y su finalidad se organizan de la siguiente manera:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t4/img21.png').m-auto
              h4.mb-3.estilo-text Separar residuos en la fuente
              p.mb-0.text-center Facilitar su aprovechamiento y disposición segura.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t4/img22.png').m-auto
              h4.mb-3.estilo-text Mantener corrales limpios y secos
              p.mb-0.text-center Reducir el riesgo sanitario y favorecer el bienestar animal.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t4/img23.png').m-auto
              h4.mb-3.estilo-text Proteger las fuentes de agua
              p.mb-0.text-center Evitar la contaminación ocasionada por excretas y desechos.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t4/img24.png').m-auto
              h4.mb-3.estilo-text Almacenar residuos en áreas definidas
              p.mb-0.text-center Mejorar el control y prevenir accidentes o contaminación.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t4/img25.png').m-auto
              h4.mb-3.estilo-text Tratar excretas y residuos orgánicos
              p.mb-0.text-center Reducir olores, vectores e impacto ambiental.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t4/img26.png').m-auto
              h4.mb-3.estilo-text Disponer adecuadamente los residuos peligrosos
              p.mb-0.text-center Proteger la salud humana, animal y ambiental.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t4/img27.png').m-auto
              h4.mb-3.estilo-text Llevar registros y procedimientos
              p.mb-0.text-center Fortalecer la trazabilidad y el cumplimiento de las Buenas Prácticas Ganaderas (BPG).
          p.mb-0 La aplicación conjunta de estas prácticas permite integrar la gestión ambiental con la sanidad, la bioseguridad y el bienestar animal dentro del sistema productivo.

</template>

<script>
export default {
  name: 'Tema4',
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
