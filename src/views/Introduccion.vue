<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p La producción porcina constituye una actividad pecuaria de gran importancia para el abastecimiento de alimentos y la economía rural. Su desarrollo requiere una adecuada planificación de cada etapa productiva, considerando aspectos relacionados con la alimentación, el bienestar animal, la sanidad y el aprovechamiento eficiente de los recursos disponibles.
          .caja-1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/intro/img1.jpg', alt='' style="width: 400px").m-auto
              .col-xl.caja-1_p
                p.mb-0 El ciclo de producción porcina comprende diferentes etapas, entre ellas la gestación, lactancia, manejo de lechones, levante y ceba. Cada fase presenta necesidades nutricionales y de manejo específicas, por lo que resulta fundamental implementar estrategias de alimentación que favorezcan el crecimiento, la reproducción y el desempeño productivo de los animales.
          p.mb-0 En este contexto, la alimentación alterna y los sistemas de producción semi-orgánica representan opciones para incorporar materias primas locales y otros recursos disponibles en la unidad productiva. Estas prácticas pueden contribuir a reducir la dependencia de alimentos comerciales, aprovechar mejor los recursos y promover un manejo más sostenible de la producción porcina.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='' style="width: 300px").m-auto
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
