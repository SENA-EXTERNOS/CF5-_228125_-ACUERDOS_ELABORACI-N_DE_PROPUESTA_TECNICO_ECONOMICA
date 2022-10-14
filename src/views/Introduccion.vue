<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-2.p-md-3
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info.bloque-texto-color-blanco
      h1 Introducción

    .row.justify-content-around.align-items-center

      .col-md.col-lg-7
        
        p.p-3 Apreciado aprendiz, bienvenido a este componente formativo, donde encontrará diferentes temáticas orientadas  al conocimiento de las propuestas económicas relacionadas con los sistemas de información y le brindará los conocimientos necesarios acerca de los contratos que se llevan a cabo entre el cliente y el proveedor de <em>software</em>, los cuales dan claridad y garantía a la ejecución de los niveles de servicio técnico acordados en el proyecto e implican una parte fundamental en la puesta en marcha de la negociación iniciada en el área de análisis y diseño.
        p.p-3 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
        
      
      .col-md.col-lg-5
        img(src="@/assets/curso/portada/img-introduccion.svg")

    br

    .container.tarjeta.tarjeta--blanca.p-2.p-md-3

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        //figcaption Video: Leyenda del video

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
