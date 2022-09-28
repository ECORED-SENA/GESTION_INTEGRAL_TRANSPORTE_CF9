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
      .h4 4.1 Tecnologías para estar en contacto con el operador de la flota

    p.mb-3 Una de las principales funciones de los encargados de las operaciones de transporte es tener conocimiento exacto del lugar, sitio, condiciones y características en que se encuentran sus envíos. Es importante estar en contacto permanente con los operadores de los equipos de transporte o la flota.

    p.mb-5 Hay muchas tecnologías que favorecen la obtención de datos de localización, estado de posiciones y movimientos de los equipos. Veamos algunos ejemplos: 

    SlyderB.mb-5.color-slyder-b.px-5.p-5(:datos="datosSlyder")  


    Separador

    #t_4_2.titulo-segundo
      .h4 4.2   Planes de rutas e intercomunicaciones

    
    .row.justify-content-center.align-items-star.d-none.d-lg-block
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10(data-aos="fade")
          .row.justify-content-center.align-items-center
            .col.lg-5.lg-0
                .jumbotron-15.p-4
                  p.mb-3 Por esta razón es de vital importancia la comunicación y la información entre el exportador con el plan de ruta seleccionado, a fin de detectar el tránsito de los bienes en su ruta y el recibo por el destinatario.
                  p.mb-0 El plan de ruta se desprende de los rutogramas preestablecidos o publicados por las organizaciones y en ellos se definen, desde los tiempos de despacho, tránsito, arribo y entrega, hasta los inconvenientes que puedan presentarse en sectores críticos de las vías. Pueden estar incluidos planes de ruta entre orígenes y destinos o planes entre puntos críticos.
            .col.lg-5.lg-0
              img(src='@/assets/curso/images/tema4/img_7.png'  alt='')

    .row.justify-content-center.align-items-center.mb-5.d-block.d-lg-none
      .col-lg-10(data-aos="fade")
        .row.justify-content-center.align-items-center
          .col-12.col.lg-5.lg-0
            .jumbotron-15.p-4.mb-3
              p.mb-3 Por esta razón es de vital importancia la comunicación y la información entre el exportador con el plan de ruta seleccionado, a fin de detectar el tránsito de los bienes en su ruta y el recibo por el destinatario.
              p.mb-0 El plan de ruta se desprende de los rutogramas preestablecidos o publicados por las organizaciones y en ellos se definen, desde los tiempos de despacho, tránsito, arribo y entrega, hasta los inconvenientes que puedan presentarse en sectores críticos de las vías. Pueden estar incluidos planes de ruta entre orígenes y destinos o planes entre puntos críticos.
          .col.lg-5.lg-0
            img(src='@/assets/curso/images/tema4/img_7.png'  alt='')


    
 
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: '<i>VesselFinder</i>',
        texto:
          'Se dedica a proporcionar datos en tiempo real sobre las posiciones y movimientos de más de 200.000 embarcaciones todos los días, utilizando una gran red de receptores y satélites AIS terrestres en todo el mundo',

        imagen: require('@/assets/curso/images/tema4/img_2.png'),
      },
      {
        titulo: '<i>MarineTraffic</i>',
        texto:
          'Es un proveedor de rastreo de barcos e inteligencia marítima. Monitorean los movimientos de los buques apoyados por bases costeras, complementados por receptores satelitales.',
        imagen: require('@/assets/curso/images/tema4/img_3.png'),
      },
      {
        titulo: 'Tráfico Aéreo Mundial',
        texto:
          'La aplicación de Tráfico Aéreo Mundial en Tiempo Real, es gratuita y se utiliza para hacer seguimiento de vuelos en vivo. Se puede hacer clic en cualquier aeronave o aeropuerto para obtener una vista más detallada. ',
        imagen: require('@/assets/curso/images/tema4/img_4.png'),
      },
      {
        titulo: 'Monitoreo satelital del transporte de carga por carretera',
        texto:
          'En el transporte de carga por carretera, el Ministerio de Transporte de Colombia, ha desplegado una aplicación llamada monitoreo satelital del transporte de carga por carretera, en el Registro Nacional de Despachos de Carga (RNDC), servicio en línea de GPS, el cual opera como sistema de información que permite a cada empresa de transporte habilitada, la expedición de los manifiestos de carga. ',
        imagen: require('@/assets/curso/images/tema4/img_5.png'),
      },
      {
        titulo: 'ORBCOMM',
        texto:
          'Hay varias aplicaciones para seguimiento satelital y en tiempo real de viajes de trenes, tanto de pasajeros como de carga, los cuales están muy extendidos en la Unión Europea y en Estados Unidos. Entre estas se encuentra ORBCOMM, que les permite a los operadores estar en contacto con las flotas de vagones y asegurar la carga, en cada punto entre el origen y el destino final. <br> Este tipo de aplicaciones permiten la visibilidad completa de los contenedores desde y hacia las cabezas de ferrocarril y las ubicaciones de los clientes. También examina los inventarios durante el recorrido y en las zonas de acarreo.',
        imagen: require('@/assets/curso/images/tema4/img_6.png'),
      },
    ],
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
