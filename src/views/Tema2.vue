<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 2
      h1 Fundamentos de los acuerdos comerciales

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-6(data-aos="fade-right")
        .cajon.color-custom-2.p-5.mb-3
          p.mb-0 Todos los acuerdos comerciales se basan en el conocimiento de la información y tal como se manifiesta en la frase “La información es poder”, o “la información es conocimiento”, –atribuida por algunos a Francis Bacon, otros a Hobbes, y otros más a Bill Gates–, lo cierto es que en este mundo globalizado no solo basta con tener información, sino saber cómo utilizarla para mejorar la operatividad de la organización.

      .col-8.col-lg-4.mb-5(data-aos="fade-left") 
        img.mt-5(src='@/assets/curso/images/tema2/img_1.svg'  alt='')
    
    p.mb-3 Para lograr un adecuado conocimiento de la información, no solo se debe rastrear la misma, sino saber qué hacer con ella. Por eso, es necesario tener conocimiento del flujo de información dentro de la organización. 

    p.mb-5 En una empresa existen diversas denominaciones de flujo en materia de comercio de mercancías: 

    .row.justify-content-center.mb-5.mg-top-3(data-aos="fade-down")
      .col-lg-3.col-auto.mb-3.mb-lg-0.mt-2
        .tarjeta.tarjeta-up
          img(src="@/assets/curso/images/tema2/tj_1.png", alt= "")
          .tarjeta-up__content.bg-1
            p.mb-0.text-center <b>Flujo comercial:</b> es la totalidad de las exportaciones/importaciones que los países realizan en un determinado tiempo.

      .col-lg-3.col-auto.mb-3.mb-lg-0.mt-2
        .tarjeta.tarjeta-up
          img(src="@/assets/curso/images/tema2/tj_2.png", alt= "")
          .tarjeta-up__content.bg-1
            p.mb-0.text-center <b>Flujo logístico:</b> es todo el proceso entre el suministro de materias primas para la fabricación de un producto hasta la venta del mismo al consumidor.

      .col-lg-3.col-auto.mb-3.mb-lg-0.mt-2
        .tarjeta.tarjeta-up
          img(src="@/assets/curso/images/tema2/tj_3.png", alt= "")
          .tarjeta-up__content.bg-1
            p.mb-0.text-center <b>Flujo de consumo:</b> se les llama así a aquellos gastos de bienes o servicios que se contabilizan en periodos de tiempo, tales como consumos de servicios públicos, energía, acueducto, telefonía.

      .col-lg-3.col-auto.mb-3.mb-lg-0.mt-2
        .tarjeta.tarjeta-up
          img(src="@/assets/curso/images/tema2/tj_4.png", alt= "")
          .tarjeta-up__content.bg-1
            p.mb-0.text-center <b>Flujo de área de despacho o llamada área de almacén:</b> se suministran a los consumidores finales los productos solicitados.

    
    .row.justify-content-center.align-items-star.mb-5
      .col-lg-4.mb-3(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema2/img_2.svg'  alt='').mb-5
      .col-lg-6(data-aos="fade-right")
        .cajon.color-custom-8.p-5
          p.mb-0 Se pueden crear tantos tipos de flujos como se deseen conocer en la cadena logística, por ejemplo, flujo de compras, de proveedores, de recibo de mercancías, de almacén, de despacho, de transporte, de entrega y de venta. Pueden ser muchos más, según la necesidad que se quiera conocer sobre un sector de la cadena logística o de sus eslabones. De todos los flujos, se obtienen datos que se consignan y se analizan para tomar acciones frente a esos registros de información o ejecutar proyecciones con sus tendencias.

    
    p.mb-3 Para lograr un adecuado registro de estos flujos, existe una gran cantidad de detectores de mercancías, que emplean tecnología y que están en constante evolución. Entre los principales están: 

    .row.align-items-center.align-items-center.my-5
      .col-lg-12
        TabsA.color-acento-contenido(data-aos="fade")
          .tarjeta.back-tab.px-5.py-4(titulo="GTIN")
            h4 GTIN
            p.mb-3 Corresponde al acrónimo de las palabras del inglés <i>Global Trade Item Number</i>, que significa número de artículo comercial global o número global de artículo comercial que corresponde a un único número de un artículo comercial, está desarrollado por la empresa privada llamada mundialmente GS1. El GTIN es un identificador único y reconocido internacionalmente para un producto específico.
            .row.align-items-center.align-items-center.aling
              .col-lg-8
                img(src='@/assets/curso/images/tema2/img_3.svg'  alt='')

          .tarjeta.back-tab.px-5.py-4(titulo="GTIN-13")
            h4 GTIN-13
            p.mb-0 Es un identificador mundial de mercancías o artículos comerciales, el cual posee 13 dígitos distribuidos así: 
            p.mb-0 Las dos o tres primeras cifras, corresponden al país de origen. Colombia tiene las cifras 700.
            p.mb-3 Las siguientes cifras que pueden ser de cinco a ocho dígitos e indican la empresa productora o comercializadora.

            p.mb-5 Las siguientes cifras corresponden al producto concreto y la cifra final es un dígito de control o verificación. 
            .row.align-items-center.align-items-center.aling
              .col-lg-6
                img(src='@/assets/curso/images/tema2/img_4.svg'  alt='')

          .tarjeta.back-tab.px-5.py-4(titulo="GS1-128")
            h4 GS1-128
            p.mb-3 Es un sistema de codificación internacional para la identificación de mercancías y productos en los entornos logísticos no detallistas.
            .row.align-items-center.align-items-center.aling
              .col-lg-8
                img(src='@/assets/curso/images/tema2/img_5.svg'  alt='')

          .tarjeta.back-tab.px-5.py-4(titulo="GTIN-8")
            h4 GTIN-8
            p.mb-3 Este código se usa en casos especiales de falta de espacio para poder colocar los 13 dígitos del GTIN-13.
            .row.align-items-center.align-items-center.aling
              .col-lg-8
                img(src='@/assets/curso/images/tema2/img_6_1.svg'  alt='')
          
          .tarjeta.back-tab.px-5.py-4(titulo="UPC-A")
            h4 UPC-A
            p.mb-3 Tiene la misma función que el GTIN-13, pero es usado en EE. UU. y Canadá y su forma es parecida y solo posee 8 dígitos. El primer número, que normalmente es un 1 o un 7, es un número de sistema e indica que tiene un tamaño y un peso determinado no variable. El uso principal es la identificación de unidades de expedición.
            .row.align-items-center.align-items-center.aling
              .col-lg-8
                img(src='@/assets/curso/images/tema2/img_7_1.png'  alt='')

          .tarjeta.back-tab.px-5.py-4(titulo="GTIN-14")
            h4 GTIN-14
            p.mb-3 Con este código profundizamos en la cadena logística. Este identifica el producto no unitario de consumo, sino unitario de unidad comercial para la distribución. Este código facilita identificar cajas de un mismo producto pero con diferentes unidades en su interior, es un código que facilita su lectura cuando está impreso en cartón corrugado.
            .row.align-items-center.align-items-center.aling
              .col-lg-8
                img(src='@/assets/curso/images/tema2/img_8_1.svg'  alt='')

          .tarjeta.back-tab.px-5.py-4(titulo="AI")
            h4 AI
            p.mb-3 Se denomina identificador de aplicación y es un campo de dos o más caracteres al principio de una cadena de elementos. Los IA son prefijos que identifican el significado y el formato del campo de datos que se encuentra a continuación del IA; permite la representación de los datos de longitud variable y hace posible la codificación de información adicional en un solo símbolo de códigos de barra. Esto se denomina concatenación. Ejemplo: 
            .row.align-items-center.align-items-center.aling
              .col-lg-12
                .tabla-a.color-primario.my-3 
                  table
                    thead
                      tr
                        th.th IA
                        th.th Datos contenidos
                        th.th Formato

                    tbody
                      tr
                        td.text-center 00
                        td  Número seriado de contenedor de embarque (SSCC)
                        td.text-center  N2 + N18
                      tr
                        td.text-center  01  
                        td Número Global de artículo comercial (GTIN)
                        td.text-center  N2 + N14
                      tr 
                        td.text-center  02 
                        td GTIN de los ítems contenidos
                        td.text-center  N2 + N14
                      tr 
                        td.text-center  10
                        td Número de lote
                        td.text-center  N2 + X...20
                      tr
                        td.text-center  11 (2)
                        td Fecha de producción (AAMMDD)
                        td.text-center  N2 + N6
            p.text-center.mb-0 Imagen tomada de GS1. (2020). Guía de Identificación. https://www.gs1co.org/Portals/0/Contenido/Descargables/Gu%C3%ADa%20de%20identificaci%C3%B3n%20GS1%20Colombia.pdf?timestamp=1597330740389 


          .tarjeta.back-tab.px-5.py-4(titulo="GLN")
            h4 GLN
            p.mb-3 Llamado número de localización global es un número exclusivo de 13 dígitos que se utiliza para identificar una ubicación comercial. Los 7 primeros dígitos representan el prefijo de la empresa. Los 5 dígitos siguientes representan la ubicación comercial, y el último dígito es el dígito de comprobación.
            .row.align-items-center.align-items-center.aling
              .col-lg-12
                img(src='@/assets/curso/images/tema2/img_9.png'  alt='')

    p.mb-5 Otros de los detectores de mercancía están: 

    SlyderB.mb-5.color-slyder-b.px-5.py-5(:datos="datosSlyder")   

    Separador

    #t_2_1.titulo-segundo
      .h2 2.1   Procesos de seguimientos  
    
    p.mb-5 Para lograr un proceso de seguimiento de las mercancías o cargas es requisito indispensable que se puedan identificar internacionalmente. Existe un sistema de identificación que es un lenguaje mundial de comunicación mercantil; a saber: 

    figure.mb-5
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/S74E_qaBXmw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      figcaption Video: Leyenda del video

    Separador

    #t_2_2.titulo-segundo
      .h2 2.2   Trazabilidad y estándares de calidad

    p.mb-3 La   trazabilidad se puede realizar de tres formas: hacia atrás, interna o hacia adelante. 

    .row.justify-content-center.align-items-center.my-5
      .col-lg-4.lg-0
        .jumbotron-14.p-5.mb-3(data-aos="fade-right")
          .row.justify-content-center.align-items-center
            img(src="@/assets/curso/images/tema2/ico_3.svg" alt='', style="width:100px; display:block; margin:auto 0 ;")
            h3.text-center.mt-2 Trazabilidad hacia atrás o ascendente (<i>tracing</i>)
            p.mb-0.text-center Es el seguimiento histórico desde el cliente o consumidor final hacia el origen del producto.

      .col-lg-4.lg-0
        .jumbotron-14.p-5.mb-3(data-aos="fade-left")
          .row.justify-content-center.align-items-center
            img.mb-3(src="@/assets/curso/images/tema2/ico_2.svg" alt='', style="width:100px; display:block; margin:auto 0 ;")
            h3.text-center.mt-3  Trazabilidad interna o de proceso
            p.mb-0.text-center Es el seguimiento que se realiza a cada proceso dentro de la cadena logística.
 

      .col-lg-4.lg-0
        .jumbotron-14.p-5.mb-3(data-aos="fade-left")
          .row.justify-content-center.align-items-center
            img.mb-0(src="@/assets/curso/images/tema2/ico_3.svg" alt='', style="width:100px; display:block; margin:auto 0 ;")
            h3.text-center.mt-2 Trazabilidad hacia adelante o descendente (tracking)
            p.mb-0.text-center Es el seguimiento realizado a cada uno de los procesos para obtener un producto final.

    p.mb-5 Estándares de calidad: los estándares no son más que los niveles mínimos y máximos deseados, o aceptables de calidad que debe tener el resultado de una acción, una actividad, un programa o un servicio.

    .row.justify-content-center.align-items-star.mb-5
      .col-6.col-lg-2.mb-5(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema2/img_16.svg'  alt='')
      .col-lg-10(data-aos="fade-right")  
        p.mt-3 Con una adecuada administración de recursos y una gestión planificada de la logística y el transporte se generarán estándares de calidad en la operación, mejora de la seguridad e incremento de la calidad del servicio y robustecimiento de la productividad.

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-10(data-aos="fade")
        .jumbotron-12.p-4
          .row.justify-content-center.align-items-between
            .col-lg-10.mb-3(data-aos="fade-left") 
              p.text-center.mb-0 BASC: corresponde al acrónimo de <i>Business Alliance for Secure Commerce,</i> que significa Alianza Empresarial para un Comercio Seguro, es una alianza empresarial internacional de derecho privado que promueve un comercio seguro en cooperación con gobiernos y organismos internacionales, teniendo como objetivo mejorar la calidad de las operaciones de comercio, la confidencialidad, la responsabilidad, la ética y la honestidad. Esta entidad privada busca generar una cultura de la seguridad en la cadena logística, implementando sistemas de gestión mediante estándares de seguridad.

    .row.justify-content-center.d-none.d-lg-block
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10(data-aos="fade")
          .row.justify-content-aling.align-items-center
            .col.lg-5.lg-0
              .jumbotron-15.p-4
                p.mb-4 Para el SENA, los estándares de calidad están dados desde el Sistema Integrado de Gestión y Autocontrol, SIGA, en donde se han establecido unas premisas que contienen la promesa de valor, y dentro de ellas está la prestación de sus servicios con calidad, cobertura y pertinencia. Por lo tanto, la calidad es una cualidad del servicio o del producto que le genera valor.
            .col.lg-5.lg-0
              img.mg-left-1(src='@/assets/curso/images/tema2/img_17.svg'  alt='')

    .row.justify-content-center.align-items-center.mb-5.d-block.d-lg-none
      .col-lg-10(data-aos="fade")
        .row.justify-content-center.align-items-center
          .col-12.col.lg-5.lg-0
            .jumbotron-15.p-4
              p.mb-4 Para el SENA, los estándares de calidad están dados desde el Sistema Integrado de Gestión y Autocontrol, SIGA, en donde se han establecido unas premisas que contienen la promesa de valor, y dentro de ellas está la prestación de sus servicios con calidad, cobertura y pertinencia. Por lo tanto, la calidad es una cualidad del servicio o del producto que le genera valor.
          .col.lg-5.lg-0
            img(src='@/assets/curso/images/tema2/img_17.svg'  alt='')

    p.mb-5 Dentro de los sistemas digitales de gestión de la información que se manejan actualmente en los procesos de importación y exportación de una manera simulada al sector real, se tienen los siguientes:

    Separador

    #t_2_3.titulo-segundo
      .h2 2.3   Sistemas de información  

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade")
        .tabla-a.color-secundario.mb-5 
          table
            tbody
              tr.th-1
                td.th-3 
                  .row.justify-content-center.align-items-center.mb-5
                    .col-lg-5
                      img.mt-5(src='@/assets/curso/images/tema2/ico_4.svg'  alt='', style="width:80px; display:block; margin:auto 0 ;")
                <td colspan="2"> <b>MUISCA</b>: es un Modelo Único de Ingresos, Servicio y Control Automatizado. Según consideraciones de la Dirección de Impuestos y Aduanas Nacionales (DIAN), este modelo de gestión permite el cumplimiento de la misión, visión y objetivos estratégicos de la entidad, y conduce al mejoramiento del recaudo, la gestión y posicionamiento de esta.</td>  
                td 
                 a.anexo.mb-4.mb-lg-0(href="https://muisca.dian.gov.co/WebArquitectura/DefLogin.faces" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto.m-0
                      p.mb-0 Enlace web. MUISCA, es un Modelo Único de Ingresos, Servicio y Control Automatizado.

              tr.th-2
                td.th-3 
                  .row.justify-content-center.align-items-center.mb-5
                    .col-lg-5
                      img.mt-5(src='@/assets/curso/images/tema2/ico_5.svg'  alt='', style="width:80px; display:block; margin:auto 0 ;")
                <td colspan="2"> A través de la Coordinación del Servicio de Valoración Aduanera y la Subdirección de Gestión Técnica Aduanera, DIAN, expidió una cartilla denominada <b> Gastos de transporte en la determinación del valor en aduana, </b> que es un instructivo para orientar la aplicación de normas sobre valoración de aduanas en Colombia. En ella se desarrollan todos los aspectos relativos a los gastos de transporte y conexos al mismo, establecidos por la Organización Mundial del Comercio (OMC) y la reglamentación nacional de aduanas. Se puede consultar la cartilla en: </td>  
                td 
                 a.anexo.mb-4.mb-lg-0(href="https://cutt.ly/HmimjZp" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.mb-0 Enlace web. Cartilla Gastos de transporte en la determinación del valor en aduana, que es un instructivo para orientar la aplicación de normas sobre valoración de aduanas en Colombia.

              tr.th-1
                td.th-3 
                  .row.justify-content-center.align-items-center.mb-5
                    .col-lg-5
                      img.mt-5(src='@/assets/curso/images/tema2/ico_6.svg'  alt='', style="width:80px; display:block; margin:auto 0 ;")
                <td colspan="2"> <b>SISPAP:</b> el Sistema de Información Sanitaria para la Importación y Exportación de Productos Agrícolas y Pecuarios, es una herramienta que proporciona información, permite participar directamente en el proceso de importación y exportación de materia agrícola y pecuaria desde y hacia Colombia. Se puede tener acceso a esta página en: </td>  
                td 
                 a.anexo.mb-4.mb-lg-0(href="https://cutt.ly/TmimCtT" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.mb-0 Enlace web. SISPAP: el Sistema de Información Sanitaria para la Importación y Exportación de Productos Agrícolas y Pecuarios

              tr.th-2
                td.th-3 
                  .row.justify-content-center.align-items-center.mb-5
                    .col-lg-5
                      img.mt-5(src='@/assets/curso/images/tema2/ico_7.svg'  alt='', style="width:80px; display:block; margin:auto 0 ;")
                <td colspan="2"> <b>VUCE:</b> la Ventanilla Única de Comercio Exterior, es la principal herramienta de Facilitación del Comercio del País, a través de la cual se canalizan trámites de comercio exterior de 52.000 usuarios vinculados a 20 entidades del Estado, coordinadas por el Ministerio de Comercio, Industria y Turismo, con el fin de intercambiar información, eliminar redundancia de procedimientos, implementar controles eficientes y promover actuaciones administrativas transparentes. Se puede ingresar a esta página desde el siguiente vínculo: </td>  
                td 
                 a.anexo.mb-4.mb-lg-0(href="https://www.vuce.gov.co/" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.mb-0 Enlace web. VUCE: la Ventanilla Única de Comercio Exterior, es la principal herramienta de Facilitación del Comercio del País, a través de la cual se canalizan trámites de comercio exterior 

              tr.th-1
                td.th-3 
                  .row.justify-content-center.align-items-center.mb-5
                    .col-lg-5
                      img.mt-5(src='@/assets/curso/images/tema2/ico_8.svg'  alt='', style="width:80px; display:block; margin:auto 0 ;")
                <td colspan="2"> <b>Simulador de Costos de Exportación:</b> desde la página de Procolombia, se tiene una herramienta llamada Simulador de costos de exportación, en donde se permite calcular, el costo de la exportación desde el origen hasta el destino de la carga. En esa misma página hay un acceso a mapas de oportunidades, en donde se puede descubrir cuáles son las mejores oportunidades de expansión internacional de negocios, organizadas por sectores y países. Para acceder a la página, ingresar en: </td>  
                td 
                 a.anexo.mb-4.mb-lg-0(href="https://connectamericas.com/es/estimadora#!/app/search" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.mb-0 Enlace web. Simulador de Costos de Exportación: desde la página de Procolombia, se tiene una herramienta llamada Simulador de costos de exportación
              tr.th-2
                td.th-3 
                  .row.justify-content-center.align-items-center.mb-5
                    .col-lg-5
                      img.mt-5(src='@/assets/curso/images/tema2/ico_9.svg'  alt='', style="width:80px; display:block; margin:auto 0 ;")
                <td colspan="2"> <b>Zonas francas:</b> son áreas geográficas delimitadas del territorio nacional, en donde se desarrollan actividades industriales de bienes y de servicios o actividades comerciales, bajo una normatividad especial en materia tributaria, aduanera y de comercio exterior. Se puede tener acceso a esta página desde aquí:  </td>  
                td 
                 a.anexo.mb-4.mb-lg-0(href="http://zonasfrancas.mincit.gov.co/" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.mb-0 Enlace web. Zonas francas: las son áreas geográficas delimitadas del territorio nacional


              tr.th-1
                td.th-3 
                  .row.justify-content-center.align-items-center.mb-5
                    .col-lg-5
                      img.mt-5(src='@/assets/curso/images/tema2/ico_10.svg'  alt='', style="width:80px; display:block; margin:auto 0 ;")
                <td colspan="2"> <b>SICE-TAC:</b> es el Sistema de Información de Costos Eficientes para el Transporte Automotor de Carga, el cual permite medir o calcular los costos de la operación de transporte de acuerdo con las características propias de cada viaje: tipo de vehículo, tipo de carga, origen/destino, horas estimadas de espera, cargue y descargue. Se puede acceder a este sistema de información, con este vínculo: </td>  
                td 
                 a.anexo.mb-4.mb-lg-0(href="https://cutt.ly/KmiWyZf" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.mb-0 Enlace web. SICE-TAC: es el Sistema de Información de Costos Eficientes para el Transporte Automotor de Carga.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'SSCC',
        texto:
          'Es el código serial de embarque de contenedor es un número o estructura de datos utilizado para la identificación inequívoca de las unidades logísticas (transporte y/o almacenamiento).',
        imagen: require('@/assets/curso/images/tema2/img_10.svg'),
      },
      {
        titulo: 'ULD',
        texto:
          'Son dispositivos unitarios de carga aérea, elementos que permiten agrupar carga compuesta por diferentes bultos en una sola unidad de transporte. Tanto las medidas como las características técnicas de los ULD están reguladas por la Organización Internacional de Transporte Aéreo – IATA siguiendo unas directrices estandarizadas. ',
        imagen: require('@/assets/curso/images/tema2/img_11.svg'),
      },
      {
        titulo: 'RAC175',
        texto:
          'Corresponde a los Reglamentos Aeronáuticos de Colombia y el 175 corresponde al transporte sin riesgos de mercancías peligrosas por vía aérea. Es una norma expedida por la Unidad Administrativa Especial de Aeronáutica Civil. ',
        imagen: require('@/assets/curso/images/tema2/img_12.svg'),
      },
      {
        titulo: 'BIC',
        texto:
          'Es el código marítimo de identificación de contenedores expedido por la <i>Bureau International des Containers et du Transport Intermodal.</i> Los contenedores incluyen 11 dígitos, siendo los 4 primeros dígitos, letras. Las tres primeras identifican al propietario del contenedor y son asignadas por el BIC. La siguiente letra puede ser: <br>  U que identifica contenedores.J equipo auxiliar o Z que indica cómo se transporta por carretera. <br> Los siguientes seis números son provenientes de un algoritmo que asigna numeraciones a cada letra del alfabeto según la tabla que se muestra. Como curiosidad no se incluyen los números repetidos, tales como el 11, el 22 ni el 33. ',
        imagen: require('@/assets/curso/images/tema2/img_13.png'),
      },
      {
        titulo: 'IMDG',
        texto:
          'De la Organización Marítima Internacional (IMO), es el Código Marítimo Internacional de Mercancías Peligrosas. El Convenio para la Seguridad de la Vida Humana en el Mar, acrónimo de <i>“Safety Of Life At Sea</i> (SOLAS)” de 1960 recomendó que los gobiernos adoptarán un código internacional uniforme para el transporte de mercancías peligrosas por vía marítima. Para estos fines, las mercancías peligrosas se encuentran agrupadas en diferentes clases, y algunas de éstas se subdividen a su vez para definir y describir las características y propiedades de las sustancias, materiales y artículos que corresponden a cada clase o división.',
        imagen: require('@/assets/curso/images/tema2/img_14.svg'),
      },
      {
        titulo: 'SGA',
        texto:
          'Es el Sistema Globalmente Armonizado de Clasificación y Etiquetado de Productos Químicos, el cual ofrece un conjunto de criterios armonizados sobre el peligro de las sustancias químicas. Estos criterios se utilizan en las etiquetas y las fichas de datos de seguridad para informar de los peligros.',
        imagen: require('@/assets/curso/images/tema2/img_15.svg'),
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

<style lang="sass">

.tarjeta-up
  overflow: hidden
  position: relative
  .tarjeta-up__content
    position: absolute
    bottom: -100%
    width: 100%
    height: 100%
    padding: 2rem
    transition: bottom 0.7s ease-in-out
    &.bg-1
        background: #FAE7CF
        h1, h2, h3, h4, h5, p
          color: $black
    &.bg-2
        background-color: #E1F97D
        h1, h2, h3, h4, h5, p
          color: $black
    &.bg-3
        background-color:  #EDF7C2
        h1, h2, h3, h4, h5, p
          color: $black
    &.bg-4
        background-color:  #F6FBE1
        h1, h2, h3, h4, h5, p
          color: $black
  &:hover
    .tarjeta-up__content
      bottom: 0%
</style>
