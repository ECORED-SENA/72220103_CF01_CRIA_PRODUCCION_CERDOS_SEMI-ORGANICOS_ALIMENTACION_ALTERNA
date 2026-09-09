<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Evaluación y seguimiento del programa de alimentación
      p La evaluación y el seguimiento del programa de alimentación en la producción porcina permiten determinar si la ración suministrada, la frecuencia de alimentación, el consumo real, el pesaje y el manejo de residuos se ejecutan conforme al plan técnico de la explotación. Este proceso es indispensable porque la alimentación representa uno de los costos más altos del sistema porcino y, al mismo tiempo, constituye uno de los factores que más incide en el crecimiento, la conversión alimenticia, la reproducción, la sanidad, el bienestar animal y la inocuidad del producto final.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Desde el enfoque de las #[b Buenas Prácticas Ganaderas (BPG)], el seguimiento del programa alimenticio no se limita al suministro del alimento, sino que implica #[b planear, ejecutar, registrar, verificar y corregir]. Por esta razón, el predio debe contar con procedimientos documentados y registros actualizados que permitan establecer qué alimento se suministró, a qué animales, en qué cantidad, con qué frecuencia, quién fue responsable del suministro, cuáles fueron los resultados productivos y cómo se manejaron los residuos generados.
      p.mb-0 De acuerdo con el contenido base, la #[b Resolución ICA 76509 de 2020] establece requisitos para la certificación en BPG porcina e incluye la necesidad de evidencias documentales relacionadas con alimentación, agua, saneamiento, bienestar animal, manejo de residuos, trazabilidad y procedimientos del predio. 
      Separador
      #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.1 Cumplimiento del plan de alimentación
      p.mb-5 El cumplimiento del plan de alimentación consiste en comprobar que la dieta formulada para cada etapa productiva se suministre en la #[b cantidad, frecuencia, horario y forma] previamente establecidos. En porcicultura, esta verificación debe realizarse por grupos homogéneos de animales: lechones lactantes, precebo, levante, ceba, hembras gestantes, hembras lactantes, reemplazos y reproductores.
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t6/img2.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p Para determinar el cumplimiento del plan, el responsable del predio debe considerar, como mínimo, los siguientes aspectos:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Tipo de alimento suministrado: concentrado, mezcla, suplemento, alimento alternativo autorizado o formulación propia. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Etapa productiva a la que se destina el alimento. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cantidad entregada por animal o por lote. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Número de raciones suministradas por día. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Horario de suministro. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Estado de los comederos y disponibilidad de agua. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Presencia de desperdicios, rechazos o alteraciones del alimento. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Relación entre el consumo esperado y el consumo real. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Respuesta productiva, considerando la ganancia de peso, la condición corporal y la uniformidad del lote. 
      p.mb-5 Estos aspectos permiten contrastar la ejecución diaria con lo establecido en el programa técnico de alimentación y detectar oportunamente posibles desviaciones:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Tipo de alimento
                  p.mb-0 Debe corresponder a la formulación establecida para la etapa productiva. Los cambios no autorizados deben registrarse y evaluarse.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cantidad y frecuencia
                  p.mb-0 La cantidad suministrada y el número de raciones deben corresponder al programa definido para el animal o lote.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Horario de suministro
                  p.mb-0 Debe mantenerse la rutina establecida y registrar las variaciones que puedan afectar el consumo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comederos y agua
                  p.mb-0 Los comederos deben permanecer funcionales y en condiciones higiénicas, con disponibilidad suficiente de agua.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Consumo y desperdicios
                  p.mb-0 Se debe comparar el consumo esperado con el real e identificar rechazos, sobrantes o pérdidas de alimento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Respuesta productiva
                  p.mb-0 La ganancia de peso, la condición corporal y la uniformidad del lote permiten determinar la respuesta al programa alimenticio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img8.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Cuando se presentan desviaciones, como retrasos en el suministro, raciones insuficientes, cambios no autorizados en el alimento o altos niveles de desperdicio, estas deben registrarse y generar acciones correctivas. Entre ellas pueden incluirse el ajuste de las raciones, la revisión de los comederos, la evaluación sanitaria del lote o la capacitación del personal.
      Separador
      #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.2 Registros de seguimiento del programa alimenticio
      p.mb-5 Los registros constituyen la base del control del programa alimenticio. Permiten documentar el cumplimiento del plan, analizar el desempeño de los animales y tomar decisiones correctivas. Desde el enfoque de las BPG, deben ser #[b claros, legibles, fechados, firmados, conservados y disponibles] para procesos de consulta, auditoría, inspección o mejora interna. El seguimiento del programa alimenticio debe apoyarse, como mínimo, en los siguientes registros:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t6/img9.png').m-auto
              h4.mb-3.estilo-text Cumplimiento del plan de alimentación
              p.mb-0.text-center Compara el alimento programado con el realmente suministrado por lote o etapa productiva.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t6/img10.png').m-auto
              h4.mb-3.estilo-text Suministro diario de alimento y agua
              p.mb-0.text-center Controla cantidades entregadas, horarios, consumo y particularidades del lote.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t6/img11.png').m-auto
              h4.mb-3.estilo-text Pesaje y control productivo
              p.mb-0.text-center Permite evaluar la ganancia de peso, uniformidad, condición corporal y eficiencia alimenticia.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t6/img12.png').m-auto
              h4.mb-3.estilo-text Manejo de residuos del área de alimentación
              p.mb-0.text-center Documenta el destino de sobrantes de alimento, empaques, residuos orgánicos e inorgánicos y actividades de limpieza.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t6/img13.png').m-auto
              h4.mb-3.estilo-text Verificación de comederos, bebederos y almacenamiento
              p.mb-0.text-center Controla las condiciones de higiene, funcionamiento, disponibilidad y conservación del alimento.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t6/img14.png').m-auto
              h4.mb-3.estilo-text Aplicación del manual de procedimientos y acciones correctivas
              p.mb-0.text-center Permite determinar si se siguieron los procedimientos establecidos y documentar las medidas tomadas ante incumplimientos.
          p.mb-0 La articulación de estos registros facilita la trazabilidad del programa y permite relacionar las actividades ejecutadas con los resultados productivos obtenidos.
          Separador
          #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 6.3 Verificación del manejo de residuos
      p.mb-5 La alimentación porcina genera residuos orgánicos e inorgánicos que deben controlarse para reducir riesgos sanitarios, ambientales y de inocuidad. Entre estos se encuentran sobrantes de alimento, alimento humedecido o contaminado, empaques, costales, materiales de limpieza, excretas presentes en el área de alimentación y aguas residuales provenientes del lavado de comederos o instalaciones.
      .caja-3(data-aos="zoom-in").mb-0
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p La verificación debe considerar los siguientes aspectos:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Separación de residuos orgánicos e inorgánicos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Disposición de sobrantes de alimento según el plan establecido por el predio. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Control del alimento derramado o fermentado. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Almacenamiento temporal de empaques y materiales reciclables. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Limpieza y desinfección de comederos y áreas de suministro. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Destino de los residuos conforme al plan de saneamiento y manejo ambiental. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Registro de contingencias, como derrames, presencia de plagas o malos olores. 
            p.mb-0 Estos aspectos se relacionan directamente con el saneamiento, la bioseguridad, el bienestar animal y la protección ambiental. Un manejo inadecuado de los residuos incrementa el riesgo de contaminación del alimento, proliferación de roedores y vectores, deterioro de las instalaciones y pérdida de inocuidad.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t6/img15.png', alt='' style="width: 500px").m-auto
      Separador
      #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.4 Control del suministro de raciones y pesaje de animales
      .bg-1
        .px-5
          p.mb-5 El control del suministro de raciones permite determinar si cada animal o lote recibe la cantidad de alimento correspondiente a su peso, etapa productiva y objetivo zootécnico. Este control se complementa con el pesaje, ya que el peso corporal y la ganancia diaria constituyen indicadores directos de la efectividad del programa alimenticio. El seguimiento debe integrar diferentes variables relacionadas con la alimentación y la respuesta productiva:
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 3.
                span Variables de control para el seguimiento del programa alimenticio
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Variable de control
                      th.texto-left Aplicación en el seguimiento
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Número de animales por corral
                      td.texto-left Permite relacionar la cantidad suministrada con el tamaño real del grupo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Peso promedio del lote
                      td.texto-left Facilita el ajuste de la ración según el desarrollo de los animales.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Consumo estimado y consumo real
                      td.texto-left Permite identificar diferencias entre lo programado y lo consumido.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cantidad de alimento suministrado
                      td.texto-left Facilita el control diario de las raciones entregadas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Sobrantes y desperdicios
                      td.texto-left Permiten identificar pérdidas y posibles problemas de aceptación o manejo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ganancia diaria de peso
                      td.texto-left Permite evaluar la respuesta productiva al programa alimenticio.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Conversión alimenticia
                      td.texto-left Cuando el sistema la calcula, relaciona el alimento consumido con la ganancia de peso.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Condición corporal y homogeneidad
                      td.texto-left Permiten evaluar el estado nutricional y las diferencias dentro del grupo.
          p.mb-0 En lechones, este control facilita la detección de retrasos en el crecimiento o problemas de adaptación al alimento. En animales de levante y ceba, permite evaluar el desempeño productivo. En hembras gestantes o lactantes, contribuye a ajustar la dieta según el estado fisiológico, la condición corporal y la respuesta reproductiva.
      Separador
      #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.5 Aplicación del manual de procedimientos
      p.mb-5 El manual de procedimientos es el documento interno que establece cómo debe ejecutarse cada actividad del programa alimenticio. Su función consiste en estandarizar los procesos, disminuir errores y garantizar que el personal trabaje bajo los mismos criterios técnicos, sanitarios y de bienestar animal.
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t6/img16.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p En el componente de alimentación porcina, el manual debe contemplar, como mínimo:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Recepción de materias primas o concentrados. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Verificación de fechas de vencimiento, lote y estado del producto. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Almacenamiento del alimento. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Preparación y distribución de raciones. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Suministro de agua. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Limpieza de comederos y bebederos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Manejo de sobrantes y residuos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Pesaje y control del lote. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Diligenciamiento de registros. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Acciones correctivas ante desviaciones del plan. 
      p.mb-5 Estos procedimientos deben relacionarse directamente con los mecanismos utilizados para comprobar su cumplimiento:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t6/img17.png').m-auto
              h4.mb-3.estilo-text Recepción y almacenamiento
              p.mb-0.text-center Registros de ingreso, identificación del producto y control de las condiciones de almacenamiento.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t6/img18.png').m-auto
              h4.mb-3.estilo-text Preparación y distribución de raciones
              p.mb-0.text-center Registros de cantidades, formulaciones, horarios y lotes atendidos.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t6/img19.png').m-auto
              h4.mb-3.estilo-text Suministro de agua
              p.mb-0.text-center Control de disponibilidad y funcionamiento de los bebederos.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t6/img20.png').m-auto
              h4.mb-3.estilo-text Limpieza de comederos y bebederos
              p.mb-0.text-center Registros o listas de chequeo de las actividades realizadas.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t6/img21.png').m-auto
              h4.mb-3.estilo-text Manejo de sobrantes y residuos
              p.mb-0.text-center Registros de clasificación, retiro y disposición.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t6/img22.png').m-auto
              h4.mb-3.estilo-text Pesaje y control productivo
              p.mb-0.text-center Registros de peso, ganancia y respuesta productiva.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t6/img23.png').m-auto
              h4.mb-3.estilo-text Acciones correctivas
              p.mb-0.text-center Registro de la desviación, medida aplicada, responsable y seguimiento.
          p.mb-0 La aplicación del manual debe quedar respaldada mediante registros diligenciados por el responsable. Cuando un procedimiento no se cumple, debe documentarse la no conformidad y la acción correctiva implementada.

</template>

<script>
export default {
  name: 'Tema6',
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
