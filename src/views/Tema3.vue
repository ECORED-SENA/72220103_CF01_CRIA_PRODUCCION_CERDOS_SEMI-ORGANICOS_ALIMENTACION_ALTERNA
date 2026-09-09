<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Sistemas de producción porcina y alimentación
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-4.mb-4.mb-lg-0
          .caja-2(data-aos="fade-right")
            p.mb-0 Los sistemas de producción porcina corresponden al conjunto de instalaciones, prácticas de manejo, alimentación, sanidad, bienestar animal y administración que se implementan para la cría y producción de cerdos. La selección del sistema depende de factores como el tamaño de la explotación, la disponibilidad de recursos, las condiciones climáticas, el nivel de tecnificación y los objetivos productivos.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img1.jpg', alt='' style="width: 300px").m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 Cada sistema presenta características particulares que determinan la forma de alimentar a los animales, el tipo de materias primas que pueden utilizarse, el manejo de los comederos, la frecuencia de suministro y las estrategias de suplementación. En la producción semi-orgánica, la alimentación constituye uno de los componentes más importantes, ya que busca integrar recursos alimenticios alternativos disponibles en la finca, reducir los costos de producción y mantener la productividad, la inocuidad y el bienestar animal.
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Clases de sistemas de producción porcina 
      p.mb-5 Los sistemas de producción porcina se clasifican de acuerdo con el nivel de tecnificación, el tipo de alojamiento, la densidad animal, el manejo alimenticio y el aprovechamiento de los recursos disponibles. Cada uno presenta ventajas, limitaciones y diferentes estrategias de alimentación. El conocimiento de estos sistemas permite seleccionar el modelo productivo más adecuado según las condiciones de la explotación y facilita el diseño de programas alimenticios acordes con las necesidades nutricionales de los animales y la disponibilidad de materias primas alternativas.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sistema intensivo
                  p El sistema intensivo se caracteriza por mantener los animales en confinamiento permanente dentro de instalaciones tecnificadas, donde todas las actividades productivas son controladas.
                  p La alimentación se basa principalmente en concentrados comerciales balanceados, formulados de acuerdo con los requerimientos nutricionales de cada etapa productiva. Aunque este sistema ofrece altos niveles de productividad y eficiencia, depende de una elevada inversión en infraestructura, equipos e insumos externos. Sus principales características son las siguientes:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Alto nivel de tecnificación. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Confinamiento permanente. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Producción intensiva. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Alto control sanitario. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Programas nutricionales especializados. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Mayor inversión económica.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sistema semi-intensivo
                  p El sistema semi-intensivo combina el alojamiento en corrales con acceso controlado a patios o áreas de ejercicio. Este sistema permite mejorar el bienestar animal y aprovechar parcialmente los recursos alimenticios producidos en la finca.
                  p La alimentación integra concentrados comerciales con materias primas alternativas disponibles localmente, siempre mediante programas nutricionales balanceados. Sus características principales comprenden:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Corrales con áreas abiertas. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Aprovechamiento parcial de recursos forrajeros. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Menor inversión que el sistema intensivo. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Mejor bienestar animal. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Alimentación mixta. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sistema extensivo
                  p En el sistema extensivo, los animales permanecen la mayor parte del tiempo en potreros o áreas abiertas, donde realizan actividades naturales como caminar, hozar y explorar.
                  p La alimentación depende en gran medida de los recursos naturales disponibles y se complementa con suplementos energéticos y proteicos cuando las condiciones nutricionales lo requieren. Este sistema presenta menores costos de infraestructura, pero exige un adecuado manejo sanitario y nutricional para mantener la productividad. Entre sus principales características se encuentran:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Pastoreo o libre desplazamiento. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Mayor aprovechamiento de recursos naturales. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Menores costos de infraestructura. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Mayor exposición a factores ambientales. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Requiere control sanitario permanente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sistema semi-orgánico
                  p El sistema semi-orgánico combina principios de sostenibilidad ambiental, bienestar animal y producción eficiente mediante el aprovechamiento racional de materias primas alternativas producidas en la finca o disponibles en la región.
                  p La alimentación integra concentrados comerciales, suplementos nutricionales y recursos alimenticios alternativos, como maíz, yuca, plátano, bore, botón de oro, matarratón, suero de leche y subproductos agrícolas, previamente evaluados desde el punto de vista bromatológico y sanitario.
                  p Este sistema busca disminuir los costos de alimentación, mejorar la rentabilidad de la explotación y reducir el impacto ambiental, sin comprometer el desempeño productivo de los animales. Sus principales características son:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Aprovechamiento de materias primas locales. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Alimentación alterna balanceada. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Bienestar animal. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Buenas Prácticas Ganaderas (BPG). 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Manejo ambiental. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Producción sostenible. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Disminución de costos de alimentación. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Mayor autosuficiencia alimentaria.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img5.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relación entre el sistema de producción y la alimentación
      p El sistema de producción determina el tipo de alimentación que reciben los animales y la forma en que se administran los recursos nutricionales. En los sistemas intensivos predominan los alimentos balanceados comerciales, mientras que en los sistemas semi-orgánicos la alimentación incorpora materias primas alternativas que permiten reducir costos y aprovechar los recursos disponibles en la finca.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img6.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Para garantizar el éxito del programa alimenticio, es indispensable formular raciones balanceadas que cubran los requerimientos de energía, proteína, minerales, vitaminas y fibra de acuerdo con la etapa productiva. Asimismo, la alimentación debe complementarse con agua potable permanente, instalaciones adecuadas, manejo sanitario, bioseguridad y registros productivos que permitan evaluar la eficiencia del sistema.
      p.mb-0 La correcta integración entre el sistema de producción y el programa de alimentación favorece la productividad, mejora la conversión alimenticia, fortalece el bienestar animal y contribuye a la sostenibilidad de la producción porcina semi-orgánica.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Características del sistema de producción porcina semi-orgánico 
      p El sistema de producción porcina semi-orgánico integra prácticas de manejo técnico, bienestar animal, bioseguridad y sostenibilidad ambiental con el aprovechamiento de recursos alimenticios disponibles en la finca. Su principal objetivo es producir carne de cerdo de manera eficiente, disminuyendo la dependencia de insumos externos mediante el uso racional de materias primas alternativas y programas de alimentación balanceados.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img7.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Este sistema combina áreas de confinamiento con patios o zonas de exploración donde los animales pueden expresar comportamientos naturales como caminar, hozar, explorar el suelo e interactuar con otros individuos. Estas condiciones favorecen el bienestar animal, pero requieren una adecuada planificación para mantener el control sanitario, la limpieza de las instalaciones y el manejo ambiental del predio.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-2(data-aos="fade-right")
            p.mb-0 La alimentación constituye uno de los pilares del sistema semi-orgánico. Se basa en la combinación de concentrados comerciales, suplementos nutricionales y materias primas alternativas, como maíz, yuca, plátano, banano, bore, botón de oro, matarratón, suero de leche y otros subproductos agrícolas previamente evaluados desde el punto de vista bromatológico y sanitario.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img8.jpg', alt='' style="width: 300px").m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 La formulación de las raciones debe garantizar el equilibrio entre energía, proteína, fibra, minerales y vitaminas de acuerdo con la etapa productiva de los animales. De esta manera, el aprovechamiento de materias primas locales se integra al programa nutricional sin perder el balance requerido.
      p.mb-5 El sistema semi-orgánico también promueve el aprovechamiento eficiente de los recursos naturales mediante el reciclaje de residuos orgánicos, la utilización de abonos provenientes de la porcinaza, el uso racional del agua y la implementación de Buenas Prácticas Ganaderas (BPG), contribuyendo a la sostenibilidad ambiental y económica de la explotación.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principales características del sistema semi-orgánico
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t3/img9.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p Las características del sistema abarcan aspectos relacionados con la alimentación, el bienestar animal, la sanidad, el manejo ambiental y la gestión técnica:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Aprovechamiento de materias primas producidas en la finca. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Alimentación alterna balanceada. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Menor dependencia de concentrados comerciales. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Corrales con acceso a patios o áreas de exploración. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Bienestar animal y expresión del comportamiento natural. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Programas permanentes de bioseguridad. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Manejo sanitario preventivo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Aprovechamiento de residuos orgánicos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Producción ambientalmente sostenible. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Registros técnicos y productivos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cumplimiento de las Buenas Prácticas Ganaderas (BPG).
      p.mb-5 Estas características pueden relacionarse con los beneficios productivos que aportan al sistema:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Alimentación
                  p.mb-0 Integra concentrados, suplementos y materias primas alternativas. Esta combinación contribuye a reducir costos y mejorar la sostenibilidad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Instalaciones
                  p.mb-0 Utiliza corrales con acceso a patios y áreas de exploración, lo que favorece el bienestar animal.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Bienestar animal
                  p.mb-0 Permite mayor libertad de movimiento y expresión de comportamientos naturales, contribuyendo a disminuir el estrés y mejorar el desempeño productivo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Manejo sanitario
                  p.mb-0 Incorpora programas preventivos de bioseguridad y control sanitario, lo que ayuda a reducir enfermedades y pérdidas económicas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Manejo ambiental
                  p.mb-0 Promueve el aprovechamiento de residuos y la protección de los recursos naturales, disminuyendo el impacto ambiental.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Gestión técnica
                  p.mb-0 Incluye registros de alimentación, producción y sanidad, lo que facilita la toma de decisiones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Alimentación alterna
                  p.mb-0 Utiliza de manera planificada materias primas locales, favoreciendo una mayor rentabilidad y autosuficiencia alimentaria.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img16.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La integración de estos aspectos permite que el sistema semi-orgánico articule #[b alimentación, bienestar animal, bioseguridad, manejo ambiental y gestión técnica], manteniendo una orientación hacia la sostenibilidad y el aprovechamiento racional de los recursos disponibles.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Relación entre el sistema productivo y la alimentación 
      p La alimentación constituye el componente central de cualquier sistema de producción porcina, ya que influye directamente sobre el crecimiento, la reproducción, la eficiencia alimenticia, la salud y la rentabilidad de la explotación. Por esta razón, el programa alimenticio debe diseñarse de acuerdo con las características del sistema productivo, el tipo de alojamiento, el nivel de tecnificación, la disponibilidad de recursos alimenticios y la etapa fisiológica de los animales.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img17.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p En los sistemas intensivos, la alimentación depende principalmente de concentrados comerciales formulados con alta precisión nutricional. En contraste, los sistemas semi-orgánicos incorporan materias primas alternativas disponibles en la finca, lo que permite disminuir los costos de producción mediante la formulación de raciones balanceadas que combinan alimentos comerciales con recursos locales.
      p La infraestructura también influye en el aprovechamiento del alimento. El diseño de los corrales, la ubicación de comederos y bebederos, la disponibilidad permanente de agua potable, la limpieza de las instalaciones y el espacio disponible para cada animal determinan el consumo voluntario, la competencia por el alimento y la eficiencia del programa nutricional.
      p.mb-5 Una adecuada relación entre el sistema productivo y la alimentación permite optimizar la conversión alimenticia, reducir el desperdicio de alimento, mejorar el bienestar animal y aumentar la rentabilidad de la explotación. Por ello, el manejo nutricional debe integrarse con la bioseguridad, el bienestar animal, la sanidad, la infraestructura y la administración del sistema productivo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img4.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Factores del sistema que influyen en la alimentación
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p La planificación alimenticia debe considerar diferentes factores relacionados con las condiciones productivas, ambientales y de manejo de la granja:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Tipo de sistema de producción. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Diseño de las instalaciones. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Espacio disponible por animal. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Número y ubicación de comederos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Disponibilidad permanente de agua. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Calidad de las materias primas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Balance nutricional de las raciones. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Estado fisiológico de los animales. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Condiciones climáticas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Manejo sanitario y bioseguridad. 
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img18.png', alt='' style="width: 500px").m-auto 
      p.mb-5 La influencia de estos factores y los ajustes técnicos correspondientes se organizan de la siguiente manera:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img19.png').m-auto
              h4.mb-3.estilo-text Tipo de alojamiento
              p.mb-0.text-center Modifica el consumo y el gasto energético. Las raciones deben ajustarse según las características del sistema de producción.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img20.png').m-auto
              h4.mb-3.estilo-text Espacio disponible
              p.mb-0.text-center Influye en la competencia por el alimento. Se debe garantizar suficiente espacio en los comederos para facilitar el acceso de los animales.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img21.png').m-auto
              h4.mb-3.estilo-text Acceso a patios
              p.mb-0.text-center Incrementa el gasto energético y favorece el comportamiento exploratorio. El aporte energético de la dieta debe ajustarse según estas condiciones.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img22.png').m-auto
              h4.mb-3.estilo-text Materias primas disponibles
              p.mb-0.text-center Determinan las posibilidades de formulación de las raciones. Los recursos alternativos deben aprovecharse manteniendo el balance de nutrientes.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img23.png').m-auto
              h4.mb-3.estilo-text Infraestructura alimenticia
              p.mb-0.text-center Condiciona el suministro y el desperdicio del alimento. Los comederos y bebederos deben mantenerse limpios y en buen estado.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img24.png').m-auto
              h4.mb-3.estilo-text Agua de bebida
              p.mb-0.text-center Favorece el consumo y la digestión. Debe garantizarse disponibilidad permanente de agua potable.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img25.png').m-auto
              h4.mb-3.estilo-text Manejo sanitario
              p.mb-0.text-center Influye en el consumo y la productividad. Se deben mantener programas de bioseguridad y prevención de enfermedades.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img26.png').m-auto
              h4.mb-3.estilo-text Registros productivos
              p.mb-0.text-center Permiten evaluar la eficiencia del programa alimenticio mediante el seguimiento del consumo, la conversión alimenticia y la ganancia de peso.
          p.mb-5 La integración de estos elementos permite adaptar el manejo alimenticio a las condiciones reales del sistema productivo y realizar ajustes que favorezcan la eficiencia nutricional.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img27.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p #[b Importancia de integrar el sistema productivo con la alimentación]
          br
          p La eficiencia de un sistema porcícola semi-orgánico depende de la adecuada integración entre la alimentación, la infraestructura, el manejo sanitario, el bienestar animal y la administración de la explotación. La formulación de raciones balanceadas mediante el uso de materias primas alternativas, junto con un manejo técnico de los recursos disponibles, permite disminuir los costos de producción, mejorar la conversión alimenticia, incrementar la productividad y fortalecer la sostenibilidad ambiental. Estos elementos constituyen objetivos fundamentales de la producción porcina semi-orgánica.
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Ajuste del plan alimenticio al sistema de producción
      p Ajustar el plan alimenticio al sistema de producción significa adaptar la dieta, el suministro y el seguimiento nutricional a las condiciones reales de la granja. En la producción porcina semi-orgánica, este ajuste debe considerar el tipo de alojamiento, la disponibilidad de recursos alimenticios, la etapa productiva de los animales, la época climática, la mano de obra y la infraestructura de comederos y bebederos.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t3/img28.jpg', alt='' style="width: 400px").m-auto
              .col-xl.caja-1_p
                p.mb-0 Cuando el sistema incorpora alimentos alternativos, el plan debe definir claramente cuáles se utilizarán, en qué cantidad, con qué frecuencia y para qué categoría animal. No todos los recursos son apropiados para todos los animales ni pueden suministrarse de la misma forma. Algunos requieren picado, cocción, secado o mezcla con otros ingredientes para mejorar su digestibilidad y evitar pérdidas.
          p.mb-0 También es necesario ajustar el plan cuando se presentan cambios en la ganancia de peso, el consumo o la condición corporal del lote. Estos cambios permiten identificar la necesidad de modificar la cantidad suministrada, la composición de la ración o la frecuencia de alimentación.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img29.png', alt='' style="width: 300px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-3(data-aos="fade-right")
            p.mb-0 El ajuste del plan alimenticio también implica revisar periódicamente si la dieta está cumpliendo su función. Para ello, se deben utilizar registros de consumo, pesajes, evaluación de las heces, control de desperdicios y seguimiento del comportamiento animal. Si los animales pierden condición corporal, presentan bajo crecimiento o rechazan el alimento, el programa debe modificarse oportunamente.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img30.jpg', alt='' style="width: 300px").m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 70px")
          p.mb-0 Desde las #[b Buenas Prácticas Ganaderas (BPG)] y el bienestar animal, el ajuste del plan alimenticio debe garantizar la inocuidad, el acceso suficiente al alimento y al agua, la higiene durante el suministro y la reducción de factores de estrés. Un sistema semi-orgánico bien manejado no depende únicamente de disponer de recursos alternativos, sino de integrarlos técnicamente dentro de un programa de alimentación coherente con las condiciones productivas y sanitarias de la granja. 
      p.mb-5 Los principales aspectos que deben evaluarse para realizar estos ajustes se relacionan con la etapa productiva, las condiciones del sistema y la respuesta de los animales:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img31.png').m-auto
              h4.mb-3.estilo-text Etapa productiva
              p.mb-0.text-center Modificar la cantidad, la densidad nutricional y la frecuencia de suministro según las necesidades de los animales.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img32.png').m-auto
              h4.mb-3.estilo-text Tipo de sistema
              p.mb-0.text-center Adaptar la dieta al nivel de movilidad, el acceso al exterior y las condiciones de manejo.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img33.png').m-auto
              h4.mb-3.estilo-text Recursos disponibles
              p.mb-0.text-center Seleccionar y balancear alimentos convencionales y alternativos de acuerdo con su disponibilidad y aporte nutricional.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img34.png').m-auto
              h4.mb-3.estilo-text Condición corporal y peso
              p.mb-0.text-center Corregir excesos, deficiencias o una baja respuesta productiva mediante ajustes en la ración.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img35.png').m-auto
              h4.mb-3.estilo-text Infraestructura y manejo
              p.mb-0.text-center Garantizar comederos, disponibilidad de agua, almacenamiento e higiene adecuados.
            .tarjeta.color-acento-botones.fit___card-sinbordes
              .row.justify-content-center.mb-4
                .col-12
                  img(src='@/assets/curso/temas/t3/img36.png').m-auto
              h4.mb-3.estilo-text Bienestar y sanidad
              p.mb-0.text-center Evitar competencia por el alimento, contaminación, estrés y restricciones alimenticias.
          p.mb-0 La evaluación conjunta de estos aspectos permite ajustar el plan alimenticio de manera técnica y oportuna, manteniendo la relación entre las necesidades nutricionales de los animales y las condiciones reales del sistema de producción.

</template>

<script>
export default {
  name: 'Tema3',
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
