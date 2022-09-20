<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-1.m-top.mb-0.cs
    .row.justify-content-center.align-items-center
      .col-lg-6.md-5(data-aos="fade-right")
        img(src="@/assets/curso/images/tema1/img_intro.png" alt='AvatarTop').m-auto
      .col-lg-6.md-5(data-aos="fade-left")
        p.mb-3 Este componente busca conocer y aplicar las reglas y normatividad del transporte, elegir el modo de envío, adoptar el vehículo apropiado, programar el diseño de rutas, decidir la forma en la consolidación del envío, minimizar los riesgos en el manejo de la carga, realizar la entrega a satisfacción del usuario, utilizar información clara y en tiempo real de los bienes transportados, manejar las tecnologías de la información y la comunicación, para que lograr tener un sano criterio, gestionar la disminución en los costos de cualquier modalidad de transporte dentro de la logística de los mercados, ya que este requiere más del 35% del costo total de los bienes transportados. 
  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5
   


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
