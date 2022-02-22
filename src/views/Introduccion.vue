<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4(data-aos="fade") El desarrollo de los sistemas digitales transformó la cotidianidad de las personas y la forma como se hacían diversas actividades; así, el siguiente video presenta cómo fue sucediendo este cambio, evidenciando su importancia en el avance de la humanidad.
    
    .row.justify-content-center.mb-5
      .col-md-10(data-aos="fade-down")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center
      .col-md-10
        .row.d-flex
          .col-md-2.bg-azul.py-4(data-aos="fade-right")
            img(src='@/assets/curso/banner2.svg' alt='Imagen decorativa', style="width:70px; margin: 0 auto;")
          .col-md-10.bg-celeste.py-4(data-aos="fade-left")
            p.mb-0 En medio de este desarrollo tecnológico, se estipularon condiciones necesarias para trabajar de forma segura en la manipulación de elementos electrónicos y las herramientas adecuadas para el análisis de las magnitudes físicas asociadas a estos sistemas. 




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
