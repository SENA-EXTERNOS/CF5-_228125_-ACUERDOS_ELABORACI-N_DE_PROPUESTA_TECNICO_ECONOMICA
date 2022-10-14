<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Acuerdos de niveles de servicios
      .row.justify-content-around.align-items-center
        .col-md.col-lg-6
          .bloque-texto-color.p-3
            p En el marco del desarrollo de <em>software</em>, es de suma importancia que los proveedores de sistemas de información brinden soporte técnico post-instalación. Se podría decir que es la base fundamental y la retroalimentación necesaria una vez puesta en marcha las aplicaciones o plataformas que pasan a fase de producción en determinadas compañías. 

          p.p-3 La armonía existente entre esta sociedad y el proveedor resulta vital en tanto la ejecución de un proyecto de <em>software</em> requiere horas de implementación, templanza, constancia, además de capacitación a personal operativo o administrativo, dependiendo el caso, siendo elementos evidentemente desgastantes no solo en la ejecución del proceso, sino posteriormente, cuando las personas que interactúan con el programa se enfrentan, sin acompañamiento, a realizar las instrucciones necesarias para operar, siendo ese instante, cuando surgen dudas, anomalías, inconsistencias, confusión con las opciones, etc., generando, sin lugar a dudas, el momento oportuno para poner a disposición todo el equipo de soporte técnico por parte del proveedor, para atender las necesidades recurrentes encontradas por los operarios.
          
        
        .col-md.col-lg-6
          .tarjeta.tarjeta--blanca
            img(data-aos="fade-left")(src="@/assets/curso/portada/imagen1-tema1.svg")
            
        

      .row.p-4.p-md-5.bloque-texto-slider-imagen-de-fondo

        .row.justify-content-around.align-items-center
          
          .col-md.col-lg-5

              img(data-aos="fade-left")(src="@/assets/curso/portada/imagen2-tema1.svg")

          .col-md.col-lg-7

            p.p-2 Debe establecerse un contrato entre cliente y proveedor que permita identificar con facilidad los acuerdos que se lleven a cabo entre las dos partes y la forma de operar en los servicios de soporte porque de esto depende el funcionamiento de los procesos internos de cada empresa.
            .bloque-texto-color.p-3
              p.mb-0 En ese documento se fijan con claridad las responsabilidades y límites de los involucrados para evitar cuellos de botella de quienes reciben asistencia, la cual se debe prestar de manera adecuada y con la mayor prestación posible. Los acuerdos suministran la información necesaria para mejorar todos los procesos de soporte que rigen una empresa, desde información a bases de datos, soporte de <em>hardware</em> a <em>software</em>, de usuarios convencionales a privilegiados, entre otros.
    
      .row.p-4.p-md-5

        .row.justify-content-around.align-items-center
          .col-lg-6
            .bloque-texto-color.p-3
              p Las correctas herramientas y prácticas usadas por el grupo desarrollador para actualizar una funcionalidad en el sistema, como realizar pruebas y despliegues, escalamientos en la infraestructura del <em>software</em>, en caso que se requiera, o garantizar el funcionamiento emprendido a nivel de servicio con el usuario final, son procesos clave en los niveles de servicio técnico que dan fiabilidad a los clientes, percibiendo apoyo en el suministro de esa prioridad.
          
          .col-lg-6
            .tarjeta.tarjeta--blanca.p-3
              img(data-aos="fade-left")(src="@/assets/curso/portada/imagen3-tema1.svg")


      .row.p-4.p-md-5

        #tipos
        .titulo-segundo.color-acento-botones
          h2 Tipos
        
        .imagen-tipos.cajon.color-secundario.p-4
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-2.mb-4.mb-md-0
              img(src="@/assets/curso/portada/imagen-tipos.svg")

            .col-md.col-lg-8

              p.mb-4 Los niveles de servicio indican una negociación entre dos partes que intercambian fuerza laboral, una de las partes brinda atención y la otra la recibe, compartiendo responsabilidades conjuntas que garantizan la magnitud del servicio prestado.


      // Infografia de punto caliente
      .row.p-4.p-md-5
      
        p.mb-4 A continuación, se detallan los tipos de niveles de servicio que existen.
        
          
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/portada/imagen-sla.svg', alt='Texto que describa la imagen')
              //figcaption Infografia 1

          .tarjeta.bloque-texto-color-puntos-calientes.p-3.p-md-3(x="50%" y="5%" numero="1")
            .h5.mb-2.mt-6.bloque-texto-color-puntos-calientes
              span 1. 
              | SLA basado en el cliente
            p Consiste en acuerdos estipulados por el cliente que utiliza el servicio, es decir, el cliente que recibe la asistencia determina cláusulas o restricciones dependiendo de sus necesidades. Normalmente, los proveedores fijan acuerdos generales para todo tipo de solicitante, sin embargo, pueden crear especificaciones distintas para cada cliente que desee implementar medidas diferentes a las generalizadas. Un ejemplo de este tipo de SLA es un proveedor de soporte técnico, de <em>hardware</em> y <em>software</em>, que tenga, según las necesidades de sus clientes, un SLA para hardware, otro para software, otro para infraestructura de telecomunicaciones, etc., e incluya un cliente nuevo que no acceda al SLA anterior, debido a sus políticas, deberá crear acuerdos para este cliente en específico.

          .tarjeta.bloque-texto-color-puntos-calientes.p-3(x="20%" y="68%" numero="2")
            .h5.mb-2.bloque-texto-color-puntos-calientes
              span 2. 
              | SLA basado en el servicio
            p Es un acuerdo realizado por el proveedor que aplica para todos los clientes, agencias, empresas o personas que reciben su servicio. En este tipo de acuerdos se deben considerar pros y contras, dado que los clientes no podrán modificarlo según sus necesidades. Teniendo en cuenta esto, un SLA basado en servicios es proporcionado para todos los clientes y no para uno particular. Por ejemplo, para una empresa que provee <em>software</em> y que sus clientes obtienen el soporte de tal plataforma, uno de los puntos del acuerdo para todos sus clientes sería la atención al público con un horario no modificable de 09:00 am a 05:00 pm, y quienes soliciten este servicio antes o después del horario acordado, no podrán resolver el inconveniente presentado.

          .tarjeta.bloque-texto-color-puntos-calientes.p-3(x="80%" y="68%" numero="3")
            .h5.mb-2.bloque-texto-color-puntos-calientes
              span 3. 
              | SLA multinivel
            p Este nivel de servicio es ejecutable y adaptable tanto a las necesidades del cliente como a las descritas por el proveedor, es decir, se pueden agregar condiciones según las necesidades del cliente, así como parte de los acuerdos estandarizados del proveedor. Estos SLA tienden a ser más utilizados por la forma en la que se adaptan según las necesidades de los implicados.
      
        //Acordeon
        .row.p-4.p-md-5
          p.mb-4 El SLA multinivel tiene tres niveles:
          br

          

          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
            .row(titulo="Nivel corporativo")
              .col-md-6.mb-4.mb-md-0
                p Se enfoca en las empresas y las necesidades que tienen sus áreas o departamentos para resolver casos específicos dentro de la compañía.
              
              .col-md-6
                  figure
                    img(src='@/assets/curso/portada/imagen-nivel-corporativo-nueva.png', alt='Texto que describa la imagen')
                
            
            .row(titulo="Nivel del cliente")
              .col-md-6.mb-4.mb-md-0
                p Tiene prioridad en los clientes o grupo de clientes, e incluye todos los requerimientos y servicios que se prestan a este grupo de solicitantes en particular.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/portada/imagen-nivel-del-cliente.svg', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen

            .row(titulo="Nivel del servicio")
              .col-md-6.mb-4.mb-md-0
                p Es usado cuando los servicios no están dentro de lo establecido en el estándar con el cliente. Se deben tener en cuenta los requerimientos que contemplan los servicios prestados por el proveedor.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/portada/imagen-nivel-de-servicio-tema1.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen
                  
            



      //Infografia cómo hacer un nivel de servicio
      .row.p-4.p-md-5


        #nivel_de_servicio
        .titulo-segundo.color-acento-botones
          h2 Cómo hacer un nivel de servicio

        p.mb-4 Para crear un buen nivel de servicio se deben tener en cuenta los siguientes pasos:

            
          .row.justify-content-around.align-items-center
            .col-12.col-sm-10.col-md-8.mb-8.mb-md-0
              img(src="@/assets/curso/portada/infografia.svg")
              //figcaption Infografia 2


      //Tarjetas avatar horizontales
      .row.p-4.p-md-5
        
        p.mb-4 De igual forma, se deben tener en cuenta las prácticas adecuadas para la implementación y ejecución del SLA.
        br
        TabsC.color-acento-contenido.mb-5
          .py-3.py-md-4(titulo="Pensar de afuera hacia dentro")
            .col-lg-12.position-relative
              .row.justify-content-center.bloque-texto-imagen-izquierda.py-4      
                  .col-2
                      .tarjeta.tarjeta--blanca
                        img(src="@/assets/curso/portada/imagen-pensar-de-afuera-hacia-adentro.svg", alt="alt").img100.imagen-izquierda-tarjeta
                  .col-8.p-4
                        //h5 Pensar de afuera hacia dentro
                        p Siempre se debe pensar a favor de los clientes, dado que son quienes usarán el servicio y quienes pueden evaluarlo de acuerdo a la atención prestada por el proveedor. Al pensar de afuera hacia dentro, se fijan y se conocen las necesidades del cliente con mayor claridad, para así resolverlas fácilmente. 
                
            
          .py-3.py-md-4(titulo="Impulsar comportamientos deseados")
            .col-lg-12.position-relative
              .row.justify-content-center.bloque-texto-imagen-izquierda.py-4      
                  .col-2
                      .tarjeta.tarjeta--blanca
                        img(src="@/assets/curso/portada/imagen-Impulsar-comportamientos-deseados.svg", alt="alt").img100.imagen-izquierda-tarjeta-2
                  .col-8.p-4
                        //h5 Impulsar comportamientos deseados
                        p Un buen comportamiento hace referencia a una buena estructuración de los niveles de servicio y conlleva a la buena práctica para solucionar y abordar cualquier necesidad que tenga el cliente con el fin de resolverlas de manera rápida y eficaz. Por otro lado, se debe tener en cuenta que hay comportamientos perjudiciales y se debe tener en cuenta cuando ocurren y, sobre todo, solucionarlos de la mejor forma posible.
            
            
          .py-3.py-md-4(titulo="Usar definiciones precisas")
            .col-lg-12.position-relative
              .row.justify-content-center.bloque-texto-imagen-izquierda.py-4      
                  .col-2
                      .tarjeta.tarjeta--blanca
                        img(src="@/assets/curso/portada/imagen-usar-definiciones-precisas.svg", alt="alt").img100.imagen-izquierda-tarjeta
                  .col-8.p-4
                        //h5 Usar definiciones precisas
                        p Se debe ser cuidadoso al momento de redactar los niveles de servicio, un mal concepto o un mal escrito puede ser interpretado como una falla y, dependiendo el caso, afectará la atención respecto a las necesidades de cliente.


      separador

      .row.justify-content-around.align-items-center

        #acuerdos_de_niveles_de_servicio_en_soporte_tecnico
        .titulo-segundo.color-acento-botones
          h2 Acuerdos de niveles de servicio en soporte técnico

        .col-md.col-lg-7
          .bloque-texto-color.p-3
            p Como se mencionó anteriormente, los acuerdos o SLA son contratos entre dos entes, un proveedor que brinda el servicio y un cliente que lo recibe, que contienen tanto las cláusulas, circunstancias y condiciones bajo las cuales se debe atender al cliente, como los tiempos de respuesta por parte del soporte técnico y la forma en la que se establecen los servicios, especialmente, los niveles en que se responde al cliente la atención solicitada.

          p.p-3 En estos casos, se hace necesario para los SLA de soporte técnico contar con fluidez y flexibilidad en los horarios de atención brindados a las empresas que atienden clientes finales, el soporte técnico va de la mano con el funcionamiento de cada equipo de cómputo o <em>hardware</em> donde se gestiona la información, operado por los usuarios que a diario realizan transacciones a través de portales o aplicaciones. Por otro lado, está el 
            span.text-black software, 
            | el cual es indispensable para operar, en este caso, se tienen en cuenta tanto la base de datos como la interfaz gráfica y la respuesta de servidores que proviene de consultas realizadas a la base de datos a través de aplicaciones cliente-servidor o arquitecturas basadas en servicios. En cualquiera de los casos, el tiempo de respuesta ante un colapso del sistema, contribuye a la canalización de la atención final de clientes o solicitantes de un servicio particular.
          
        
        .col-md.col-lg-5
          .tarjeta.tarjeta--blanca
            img(data-aos="fade-left")(src="@/assets/curso/portada/imagen-1-nivel-de-servicio-nueva.png")
      

            .container.tarjeta.tarjeta--blanca.p-3(data-aos="fade-right")
      br
      .row.justify-content-around.align-items-center
          
          .bloque-texto-g.color-secundario.p-4.p-sm-4.p-md-5

            .bloque-texto-g__img(data-aos="fade-left")(
                :style="{'background-image': `url(${require('@/assets/curso/portada/imagen-2-nivel-de-servicio.png')})`}"
            )
            
            .bloque-texto-g__texto.p-4
              p.mb-0 Un buen SLA, considera las condiciones y necesidades de la compañía y asigna un proveedor de soporte técnico que siga los acuerdos y responda a cada requerimiento, en el tiempo y espacio preciso, permite que las empresas sean más competentes ante un mundo globalizado, lleno de entidades que brindan servicios similares. Además de contar con buen soporte técnico, se espera eficiencia en los servicios ofrecidos al consumidor final y, sobre todo, mayor fluidez, unida a un buen desempeño diario y equitativo en el trabajo.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
