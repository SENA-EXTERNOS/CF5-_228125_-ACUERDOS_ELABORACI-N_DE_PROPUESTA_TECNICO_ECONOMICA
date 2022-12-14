<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis: Acuerdos y elaboración de propuesta técnico-económica.")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    //.titulo-sexto.color-titulo-sexto
    //  h4.texto-titulo-sintesis Desarrollo de aplicaciones web Full stack
    //  p.texto-titulo-sintesis Síntesis: Acuerdos y elaboración de propuesta técnico-económica.  
    //br
    //br
    
    p Se invita al aprendiz a revisar cada una de las temáticas abordadas en nuestro componente formativo en la siguiente síntesis.

    br
    br

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
