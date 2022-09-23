<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-2.p-md-3
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center

      .col-md.col-lg-7
        
        p.p-1 Bienvenido al estudio del presente componente formativo en el que encontrará diferentes temáticas orientadas  al conocimiento de las propuestas económicas relacionadas con los sistemas de información y le brindará los conocimientos necesarios acerca de los contratos que se llevan a cabo entre el cliente y el proveedor de software, los cuales dan claridad y garantía a la ejecución de los niveles de servicio técnico acordados en el proyecto e implican una parte fundamental en la puesta en marcha de la negociación iniciada en el área de análisis y diseño.
        p.p-1 Dicho esto, y no menos importante, es necesario tener en cuenta la propuesta de valor que supone determinar las características fundamentales del proceso de desarrollo de software, además del tema contractual y legal del procedimiento a realizar entre usuario y desarrollador de aplicaciones, quien procederá con una propuesta técnico-económica,  clara y concisa, para solventar las necesidades de cliente. En este documento se deberán fijar los alcances y mediciones del proyecto. Lo invitamos a ver el siguiente video para conocer, de manera general, las temáticas a estudiar en este componente formativo.
        
      
      .col-md.col-lg-5
        img(src="@/assets/curso/portada/img-introduccion.svg")
  
  .container.tarjeta.tarjeta--blanca.p-2.p-md-3

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
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
