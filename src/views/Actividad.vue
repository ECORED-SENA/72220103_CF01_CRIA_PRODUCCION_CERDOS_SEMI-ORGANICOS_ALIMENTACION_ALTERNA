<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Sistemas de producción porcina semi-orgánica y alimentación alterna',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar los conceptos clave relacionados con los planes de alimentación, requerimientos nutricionales, alimentación alterna, sistemas de producción y manejo sostenible en la producción porcina semi-orgánica.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué porcentaje aproximado de los costos totales de la producción porcina corresponde a la alimentación?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Entre el 65 % y el 75 %.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Entre el 35 % y el 45 %.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Entre el 45 % y el 55 %.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Entre el 55 % y el 65 %.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué debe considerarse principalmente al diseñar un plan de alimentación para los cerdos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La ubicación comercial de la granja.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La etapa productiva de los animales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El número general de trabajadores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El tamaño externo de las instalaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es considerado el nutriente más importante dentro del programa alimenticio porcino?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La proteína disponible en la dieta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los minerales incluidos en la dieta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El agua limpia, fresca y suficiente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Las vitaminas presentes en la dieta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el principal objetivo nutricional durante la etapa de ceba?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Favorecer solamente el desarrollo digestivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener estable la condición reproductiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estimular principalmente la producción de leche.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Maximizar la ganancia diaria de peso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué característica corresponde a la alimentación de los lechones?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utilizar alimentos altamente digestibles y nutritivos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Utilizar alimentos altamente fibrosos y voluminosos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Utilizar alimentos únicamente energéticos y secos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Utilizar alimentos exclusivamente vegetales y fibrosos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es una característica fundamental de la alimentación alterna?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar totalmente los concentrados comerciales utilizados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Complementar parcialmente las dietas convencionales balanceadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Suministrar solamente productos agrícolas disponibles localmente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reemplazar completamente los suplementos nutricionales utilizados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué debe evaluarse antes de incorporar una materia prima alternativa?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solamente el precio comercial del ingrediente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente la disponibilidad regional del producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Su calidad nutricional, sanitaria y digestibilidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solamente la presentación física del alimento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes recursos se considera principalmente una fuente energética?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El botón de oro acondicionado adecuadamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El matarratón preparado para alimentación animal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El bore utilizado como recurso alimenticio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La yuca utilizada como recurso alimenticio.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué función cumple principalmente la proteína en la alimentación porcina?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Favorecer la formación de músculos y tejidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Favorecer únicamente la regulación de temperatura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar exclusivamente el consumo diario de agua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Controlar solamente la frecuencia diaria de alimentación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué finalidad tiene la suplementación energética en los cerdos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar principalmente el aporte de minerales esenciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar el aporte de energía para producción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Incrementar solamente la cantidad de vitaminas disponibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Incrementar principalmente el aporte de fibra alimentaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué sistema mantiene generalmente a los animales en confinamiento permanente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El sistema de producción porcina extensivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El sistema de producción porcina semi-intensivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El sistema de producción porcina intensivo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El sistema de producción porcina semi-orgánico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué caracteriza principalmente al sistema de producción porcina semi-orgánico?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El empleo exclusivo de concentrados comerciales balanceados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El confinamiento total durante todas las etapas productivas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La eliminación completa de los recursos agrícolas locales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El aprovechamiento racional de materias primas locales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es un beneficio del plan de alimentación semi-orgánico?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir la dependencia de alimentos balanceados comerciales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar la necesidad de realizar registros productivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Suprimir totalmente el uso de suplementos nutricionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar la evaluación periódica del desempeño animal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué debe garantizarse permanentemente dentro del programa de alimentación?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una cantidad elevada de alimentos comerciales almacenados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una disponibilidad permanente de agua limpia y potable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Una sustitución completa de los alimentos concentrados utilizados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una utilización exclusiva de materias primas vegetales locales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué indicador relaciona el alimento consumido con la ganancia de peso?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El consumo diario registrado por cada animal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La condición corporal observada durante la producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La conversión alimenticia registrada durante la producción.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La disponibilidad hídrica registrada durante la producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué acción debe realizarse al incorporar alimentos alternativos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reemplazarlos frecuentemente sin realizar controles nutricionales previos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Suministrarlos inmediatamente en grandes cantidades a los animales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Utilizarlos exclusivamente durante una sola etapa productiva determinada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Introducirlos gradualmente dentro de las raciones balanceadas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es una función importante de los registros dentro del programa alimenticio?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Controlar consumo, formulaciones, costos y resultados productivos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar controles sanitarios, ambientales y nutricionales establecidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente las evaluaciones periódicas del programa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evitar modificaciones posteriores en las raciones formuladas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué método permite aprovechar las excretas porcinas para producir biogás?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El almacenamiento convencional de residuos sólidos separados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El tratamiento mediante sistemas técnicos de biodigestión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La separación manual de materiales inorgánicos reciclables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El almacenamiento temporal de residuos sanitarios peligrosos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es una práctica adecuada para manejar residuos peligrosos de la granja?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mezclarlos directamente con los residuos orgánicos aprovechables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Enterrarlos junto con los residuos vegetales generados diariamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Entregarlos de forma segura a un gestor autorizado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Quemarlos conjuntamente con los residuos inorgánicos no aprovechables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué busca principalmente la integración entre alimentación y sistema semi-orgánico?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumentar únicamente la utilización de concentrados comerciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir exclusivamente la cantidad de trabajadores requeridos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar totalmente los procesos técnicos de seguimiento productivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Mejorar productividad, rentabilidad, bienestar y sostenibilidad ambiental.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
