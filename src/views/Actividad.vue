<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  //(icono="fas fa-puzzle-piece" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 
            i.fas.fa-puzzle-piece
        h1 Actividad didáctica
      


    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/imagen-actividad-didactica.png", alt="Texto que describa la imagen").imagen-actividad-didactica
      .col-12.col-md-8.col-lg-9
        .titulo-segundo.color-acento-botones
          h2 Selección múltiple
        p.mb-4 La presente actividad tiene como finalidad evaluar conceptos aprendidos durante el estudio del componente formativo.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Selección múltiple
            .col-auto
              a.boton.color-acento-contenido.boton--b(:href="obtenerLink('/actividades/CF5AD - Multiple 1R - 10/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
