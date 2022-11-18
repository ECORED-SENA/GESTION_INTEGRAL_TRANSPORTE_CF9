<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 5
      h1 Fortalezas y debilidades del proceso de trazabilidad de la operación

    
    .row.justify-content-center.align-items-star.mb-3
      .col-lg-6(data-aos="fade-right")  
        p.mb-3 Los beneficios de un sistema de trazabilidad en la operación del transporte pueden desglosarse de la siguiente manera: 
        ul.lista-ul--color
          li.mb-1 
            i.fas.fa-check
            | Manejar y normalizar la información a compartir con las áreas del proceso logístico.
          li.mb-1 
            i.fas.fa-check
            | Disminuir la digitación de datos.
          li.mb-1 
            i.fas.fa-check
            | Mejorar la visibilidad de los procesos.
          li.mb-1  
            i.fas.fa-check
            p.mb-0 Calcular los indicadores de gestión.
          li.mb-1  
            i.fas.fa-check
            | Incrementar el uso de herramientas tecnológicas.
          li.mb-1 
            i.fas.fa-check
            | Mayor agilidad y eficiencia en la búsqueda y asignación de vehículos.
          li.mb-1  
            i.fas.fa-check
            | Reducción de costos por eficiencia en reducción de tiempos.
          li.mb-1  
            i.fas.fa-check
            | La intercomunicación entre los centros de monitoreo, control y operación reduce los costos generales.
          li.mb-1  
            i.fas.fa-check
            | Con la trazabilidad la operación del transporte se automatiza y se genera mayor seguridad en los procesos a su cargo.

        p.mb-3 Por su parte, las debilidades tienen que ver con:

        ul.lista-ul--color
          li.mb-1  
            i.fas.fa-check
            | Altas inversiones en equipos de tecnología de captura de datos.
          li.mb-1  
            i.fas.fa-check
            | Incremento en la capacitación constante de los operadores para mejorar la automatización de los procesos.
          li.mb-1 
            i.fas.fa-check
            | Unificación de programas y tecnologías para automatización de la operación
         
      .col-lg-6.mb-5(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema5/img_1.png'  alt='')

      

    Separador

    #t_5_1.titulo-segundo
      .h2 5.1   Diagnóstico

    p.mb-5 En esta logística del transporte es necesario reconsiderar la meta final de la operación invocada, la cual está dispersa en la cadena logística que se puede resumir de la siguiente manera: 

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-8(data-aos="fade-right")  
        p.mb-5 El objetivo final es la entrega de la carga en perfectas condiciones, para lo cual se deben diagnosticar los posibles errores encontrados en los eslabones de un proceso de compraventa internacional. Con los hallazgos detectados, se procede a realizar el diagnóstico entre cada uno de los siguientes eslabones, siempre teniendo presente que entre los mismos se ejecutará una operación de transporte:
  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-2.m-top.mb-0.cs
    .row.align-items-center.justify-content-center.p-4
      .col-lg-4
        .jumbotron-10
          p.text-center.p-2.mb-0 <b>El proceso de envío </b>
    .row.align-items-center.justify-content-center.p-4
      .col-lg-12
        img.mb-3(src='@/assets/curso/images/tema5/img_2.svg'  alt='')(data-aos="zoom-in-right")
  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5

    Separador

    #t_5_2.titulo-segundo
      .h2 5.2   Tipos y técnicas de informes

    p.mb-5 Una vez diagnosticados los inconvenientes detectados en cada uno de los procesos, es momento de elaborar el informe de la gestión del transporte desarrollada, para lo cual se podrá requerir tres tipos de informes.

    .row.justify-content-evenly.align-items-star.p-2
      .col-lg-5(data-aos="fade-right")
        img(src='@/assets/curso/images/tema5/img_3.png' alt='', style="width:500px; display:block; margin:auto 0;").mb-3
      .col-lg-7(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in-down")
          .row.justify-content-center.align-items-center(titulo="Informe de gestión")
            .col-md-12.mb-4.mb-md-0
              p.mb-0  Es el reporte de la trazabilidad y los hallazgos documentados de la operación del transporte, que puede ser elaborado en forma periódica, bimestral, trimestral, semestral o anual. Deben incluirse las actividades de coordinación, gestión, administración y dirección que se han efectuado durante un período de tiempo o al culminar una operación.
        
          .row.justify-content-center.align-items-center(titulo="Informe de control")
            .col-md-12.mb-4.mb-md-0
              p.mb-0  Corresponde a las visitas o supervisiones efectuadas a puntos de control de la operación. Debe ser preciso, ya que corresponderá a las posibles faltas o responsabilidades de orden jurídico.

          .row.justify-content-center.align-items-center(titulo="Informe de desempeño")
            .col-md-12.mb-4.mb-md-0
              p.mb-0  Generalmente se relaciona con los recursos humanos. Este tipo de documentos son informes sobre las características o niveles de competencia encontrados en los empleados de la organización. Detectarán los grados de eficiencia del personal y evaluarán a los trabajadores respecto de las áreas de su responsabilidad.
          
      




 
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
