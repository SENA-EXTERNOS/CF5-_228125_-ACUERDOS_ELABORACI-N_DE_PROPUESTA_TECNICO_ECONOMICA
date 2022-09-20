<template lang="pug">
.curso-main-container.pb-3

  //La animacion es solo el "flip-up" o tambien incluye los elementos flotantes como en la pagina principal?
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5(data-aos="flip-up")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estructura de propuesta económica y carta de aceptación

    .banner-principal.mb-5(
        :style="{'background-image': `url(${require('@/assets/curso/portada/portada-tema2.svg')})`}"
      )
    
        .row.banner-principal__row

          .col-lg-7.col-xxl-5.ps-4.ps-sm-5.py-4.py-sm-5.banner-principal__info
            
            p.mb-0 La organización del área de las TIC (Tecnologías de la Información y las Comunicaciones) es fundamental para la competitividad de las empresas y, por tanto, es necesario que las compañías, cuenten con hardware y software de alta calidad para operar día a día. De acuerdo a esto, los desarrolladores o proveedores de sistemas de información o de hardware, deben dar a conocer la documentación respectiva, los componentes que definen la propuesta de valor del bien o servicio y reunirse con las empresas para conocer las necesidades de cada organización.

          .col-md.col-lg-4
            img(src="@/assets/curso/portada/imagen2-portada2.svg")
      
    
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #presentacion
    .titulo-segundo.color-acento-botones
      h2 Presentacion

    .row.justify-content-around.align-items-center
      
      .col-lg-4
        .tarjeta.tarjeta--blanca.text-center.p-3(data-aos="fade-right")
          img(src="@/assets/curso/portada/imagen-presentacion-tema2.svg")
      
      .col-lg-8
        p.p-3 Es de suma importancia acercarse a los interesados para conocer sus necesidades y, de esa forma, presentar la propuesta acorde a los requerimientos solicitados por el cliente, requerimientos comprendidos por los proveedores de sistemas de información y presentados en el documento que detalla las especificaciones del producto o servicio a adquirir. 
        .bloque-texto-color.p-1
          p.p-3 Así, se da a conocer, al ente empresarial, el documento que soporta los lineamientos de la propuesta económica, más la información concerniente a la puesta en marcha y ejecución del proyecto según las necesidades encontradas, a la par de sus posibles soluciones, garantizando fiabilidad al cliente. La presentación debe aclarar las dudas e inquietudes del interesado, por lo cual debe ser lo más sencillo y comprensible posible para la persona que lo revise, permitiendo así, su fácil interpretación.

  
  .container.tarjeta.tarjeta--blanca.p-3(data-aos="fade-right")
  

    #alcance_de_la_propuesta
    .titulo-segundo.color-acento-botones
      h2 Alcance de la propuesta

    
    .bloque-texto-g.color-secundario.p-4.p-sm-4.p-md-5

      .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/portada/imagen-alcance-de-la-propuesta.svg')})`}"
      )
      
      .bloque-texto-g__texto.p-4
        p.mb-0 Debe haber claridad respecto al sistema de información a desarrollar. Luego de realizar las reuniones con los encargados del soporte de las necesidades o falencias encontradas, el documento de propuesta económica se determina hasta las etapas del proyecto, es decir, solo determina los requerimientos contemplados hasta el momento, junto a sus respectivos acuerdos.
    br
    br
    p.p-3 Teniendo en cuenta lo anterior, se tiene conocimiento desde dónde abarca la propuesta económica, hasta sus límites y lo contemplado según los requerimientos. En esta etapa queda planteada la definición de la estructura del proyecto en curso y, por consiguiente, se generan expectativas sobre la ejecución de todos los componentes surgido a lo largo de la recolección de información, e igualmente, las falencias, procesos repetitivos, entre otros elementos,  con base en los encuentros planeados para conocer la empresa, identificar sus necesidades,  comprender su metodología y determinar todo lo relacionado con la estructura organizacional para así, al tiempo, reconocer lo automatizable a partir del sistema de información.

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    #valor_del_servicio
    .titulo-segundo.color-acento-botones
      h2 Valor del servicio

    .row.justify-content-around.align-items-center
      
      .col-lg-4
        .tarjeta.tarjeta--blanca.p-3(data-aos="fade-left")
          img(src="@/assets/curso/portada/imagen-valor-del-servicio.svg")
      
      .col-lg-8
        p Es el valor que representa para el cliente la inversión a realizar para adquirir la solución o el proyecto, lo que representa, a su vez, la realización de  mejoras en el área de tecnologías de las empresas, las cuales, en muchas ocasiones, se abstienen de estos cambios porque, usualmente, son cambios traumáticos para el talento humano, pues deben adquirir conocimientos nuevos en el manejo de la nueva plataforma y, en múltiples ocasiones, son reacios a la hora de enfrentar cambios para no salir de su zona de confort.
        .bloque-texto-mitad-color.p-1
          p.mb-0 Con las condiciones y mejoras ofrecidas y pactadas, es de resaltar, con seguridad, que la inversión realizada por los clientes se verá retribuida en un cierto período de tiempo, mediante mayores clientes, mayores ventas, mayores ganancias, etc.

  // .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  .container.tarjeta.tarjeta--blanca.p-3(data-aos="fade-right")
  
    #precio_y_forma_de_pago
    .titulo-segundo.color-acento-botones
      h2 Precio y Forma de Pago

    .bloque-texto-imagen-color.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        
        .col-md.col-lg-6
          p.p-2 Determina qué se debe realizar conforme a los requerimientos solicitados por la compañía en estudio, la estimación de los recursos, los costos y el calendario para el desarrollo de software, que implica un riesgo inherente que conduce a la incertidumbre. Tener un acercamiento sobre el precio, conlleva evaluar todos los elementos a tener en cuenta como las dificultades del proyecto, su magnitud, el talento humano requerido, los servicios de soporte, entre otros elementos indispensables para entregar la propuesta formal del precio.
          p.p-2 Otro aspecto importante que se debe discutir, necesario para la puesta en marcha del proyecto de software, es establecer la forma en la que se realizarán los pagos del proyecto. Existen diversas formas de pago que permitirán al proveedor de sistemas de información, elegir la más conveniente, por ejemplo, el trabajo por horas, por requerimientos, por proyecto, entre otros. Cada casa de software o desarrollador identifica, según las exigencias del nuevo contrato, las formas de pago

        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/portada/imagen-precio-y-forma-de-pago.svg")
  

  
  .container.tarjeta.tarjeta--blanca.p-3(data-aos="fade-right")

    #cartas_de_aceptacion
    .titulo-segundo.color-acento-botones
      h2 Cartas de aceptación

    
    .row.justify-content-around.align-items-center
      .col-5
        img(src="@/assets/curso/portada/imagen-cartas-de-aceptacion.svg")

      .col-7
        .bloque-texto-color
          p.p-2 Son documentos formales que envía la empresa o persona solicitante de un producto o servicio a los participantes o postulantes del proyecto. Este documento tiene características puntuales y debe hacerse con el fin de dar a conocer a cada candidato si ha sido aceptado o no para la ejecución y puesta en marcha del nuevo cometido.
        p.p-2 Es también, un registro de valor que puede beneficiar las partes que intervienen en la ejecución del proyecto, por lo cual, todo lo escrito, es válido para aclarar las suposiciones surgidas en los acuerdos preestablecidos. Las cartas de aceptación intervienen para informar a los proveedores de software sobre posibles reuniones para especificar puntos inconclusos por parte del cliente que necesiten mayor profundidad. Otra característica de estos escritos es la forma en la que los interesados en la inversión se relacionan y muestran respeto hacia la firma de software, garantizando las buenas relaciones con fluidez y productividad.

  
  .container.tarjeta.tarjeta--blanca.p-3(data-aos="fade-right")
  
    .bloque-texto-imagen-color.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        
        .col-md.col-lg-6
          p.mb-1 Así mismo, las corporaciones o entidades, al aceptar y dar vía libre a un proyecto, lo hacen por medio de una carta de aceptación en la que incluyen datos relevantes como el nombre del proyecto, la empresa participante y las respectivas fechas estipuladas. Las cartas de aceptación incluyen información de suma importancia y, a su vez, presentan a la empresa como una organización ordenada y distinguida, aumentando así el valor y enriquecimiento de los participantes en las convocatorias realizadas.


        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/portada/imagen2-carta-de-aceptacion.svg")


  .container.tarjeta.tarjeta--blanca.p-3(data-aos="fade-right")
    
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/portada/imagen3-carta-de-aceptacion.svg")

        .col-md.col-lg-6

          p.mb-1 Dando cumplimiento a los estándares de calidad y presentación, los formatos deben estar bien estructurados, presentados con los logos (membrete) que identifiquen a la institución, la fecha en la cual se redacta el formato y el destinatario (participante). Se presenta de forma que el receptor esté conforme y a gusto con la información recibida, de esta forma se garantiza acercamiento y buen trato desde el principio. Una buena relación entre las partes que lideran el proceso se enmarca en las buenas prácticas enriquecedoras que fomenten el acercamiento a las compañías.
          p.mb-1 La siguiente imagen presenta un modelo del formato de carta de aceptación. 

          
          a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/carta_de_aceptacion.docx')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema2',
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
