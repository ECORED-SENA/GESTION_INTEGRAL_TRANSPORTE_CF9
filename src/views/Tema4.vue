<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 4
      h1 Rutogramas    

 
    .row.justify-content-center.align-items-center
      .col-12.col-lg-4.lg-0(data-aos="fade-right")
        img(src='@/assets/curso/images/tema4/img_1.svg'  alt='')
      .col-12.col-lg-6.lg-0(data-aos="fade-left") 
        p.mb-3 Los rutogramas o rutagramas, son las radiografías de la infraestructura vial o fluvial y sus características para los desplazamientos. Estos documentos, están en forma genérica, se pueden obtener desde la página de la Agencia Nacional de Infraestructura (ANI), de cada una de las concesiones de los modos de transporte.

        p.mb-0 Desde esta página se logra obtener documentación sobre las condiciones físicas de la infraestructura de los 4 modos de transporte: Carreteras para el modo terrestre, aeropuertos, puertos, para los modos marítimo y fluvial y ferroviario.

          
    Separador

    #t_4_1.titulo-segundo
      .h2 4.1 Tecnologías para estar en contacto con el operador de la flota

    p.mb-3 Una de las principales funciones de los encargados de las operaciones de transporte es tener conocimiento exacto del lugar, sitio, condiciones y características en que se encuentran sus envíos. Es importante estar en contacto permanente con los operadores de los equipos de transporte o la flota.

    p.mb-5 Hay muchas tecnologías que favorecen la obtención de datos de localización, estado de posiciones y movimientos de los equipos. Veamos algunos ejemplos: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in-up")     
        SlyderA.color-slyder-b.p-2(tipo="b")
          .row.justify-content-center.align-items-star.p-3
            .col-12.col-lg-4
              h4 VesselFinder
              p.mb-3 Se dedica a proporcionar datos en tiempo real sobre las posiciones y movimientos de más de 200.000 embarcaciones todos los días, utilizando una gran red de receptores y satélites AIS terrestres en todo el mundo'.
            
            .col-10.col-lg-6
              img(src='@/assets/curso/images/tema4/img_2.png')
          
          .row.justify-content-center.align-items-star.p-3
            .col-12.col-lg-4
              h4 MarineTraffic
              p.mb-5 Es un proveedor de rastreo de barcos e inteligencia marítima. Monitorean los movimientos de los buques apoyados por bases costeras, complementados por receptores satelitales.
            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema4/img_3.png").mb-3
          
          .row.justify-content-center.align-items-star.p-3
            .col-12.col-lg-4
              h4 Tráfico Aéreo Mundial
              p.mb-3 La aplicación de Tráfico Aéreo Mundial en Tiempo Real, es gratuita y se utiliza para hacer seguimiento de vuelos en vivo. Se puede hacer clic en cualquier aeronave o aeropuerto para obtener una vista más detallada. 
            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema4/img_4.png").mb-3
          
          .row.justify-content-center.align-items-star.p-3
            .col-12.col-lg-4
              h4 Monitoreo satelital del transporte de carga por carretera
              p.mb-3 En el transporte de carga por carretera, el Ministerio de Transporte de Colombia, ha desplegado una aplicación llamada monitoreo satelital del transporte de carga por carretera, en el Registro Nacional de Despachos de Carga (RNDC), servicio en línea de GPS, el cual opera como sistema de información que permite a cada empresa de transporte habilitada, la expedición de los manifiestos de carga. 

            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema4/img_5.png").mb-3

          .row.justify-content-center.align-items-star.p-3
            .col-12.col-lg-4
              h4 ORBCOMM
              p.mb-3 Hay varias aplicaciones para seguimiento satelital y en tiempo real de viajes de trenes, tanto de pasajeros como de carga, los cuales están muy extendidos en la Unión Europea y en Estados Unidos. Entre estas se encuentra ORBCOMM, que les permite a los operadores estar en contacto con las flotas de vagones y asegurar la carga, en cada punto entre el origen y el destino final. <br> Este tipo de aplicaciones permiten la visibilidad completa de los contenedores desde y hacia las cabezas de ferrocarril y las ubicaciones de los clientes. También examina los inventarios durante el recorrido y en las zonas de acarreo.

            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema4/img_6.png").mb-3


    Separador

    #t_4_2.titulo-segundo
      .h2 4.2   Planes de rutas e intercomunicaciones

    
    .row.justify-content-center.align-items-star.d-none.d-lg-block
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10(data-aos="fade")
          .row.justify-content-center
            .col.lg-5.lg-0
                .jumbotron-15.p-2.h-100
                  p.mb-0 El plan de ruta se desprende de los rutogramas preestablecidos o publicados por las organizaciones y en ellos se definen, desde los tiempos de despacho, tránsito, arribo y entrega, hasta los inconvenientes que puedan presentarse en sectores críticos de las vías. Pueden estar incluidos planes de ruta entre orígenes y destinos o planes entre puntos críticos. 
                  p.mb-0 Por esta razón es de vital importancia la comunicación y la información entre el exportador con el plan de ruta seleccionado, a fin de detectar el tránsito de los bienes en su ruta y el recibo por el destinatario.
            .col.lg-8.lg-0
              img.mg-left-1(src='@/assets/curso/images/tema4/img_7.png')

    .row.justify-content-center.align-items-center.mb-5.d-block.d-lg-none
      .col-lg-10(data-aos="fade")
        .row.justify-content-center.align-items-center
          .col-12.col.lg-5.lg-0
            .jumbotron-15.p-1.mb-3
              p.mb-3.text-small Por esta razón es de vital importancia la comunicación y la información entre el exportador con el plan de ruta seleccionado, a fin de detectar el tránsito de los bienes en su ruta y el recibo por el destinatario.
              p.mb-0.text-small El plan de ruta se desprende de los rutogramas preestablecidos o publicados por las organizaciones y en ellos se definen, desde los tiempos de despacho, tránsito, arribo y entrega, hasta los inconvenientes que puedan presentarse en sectores críticos de las vías. Pueden estar incluidos planes de ruta entre orígenes y destinos o planes entre puntos críticos.
          .col.lg-5.lg-0
            img(src='@/assets/curso/images/tema4/img_7.png'  alt='')


    
 
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),
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
