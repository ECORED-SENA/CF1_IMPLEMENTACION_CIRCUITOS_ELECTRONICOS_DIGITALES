<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.tarjeta--gris.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/curso/act-didactica2.svg", alt="Texto que describa la imagen", style="width: 150px; margin: 0 auto;")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Normas en sistemas digitales
        p.mb-4 Afianzar los conocimientos adquiridos durante el desarrollo de la temática.
        .tarjeta.tarjeta--azul.p-3.py-1
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arrastrar y soltar
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/act1/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.tarjeta--gris.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/curso/act-didactica1.svg", alt="Texto que describa la imagen", style="width: 130px; margin: 0 auto;")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Elementos de protección
        p.mb-4 Afianzar los conocimientos adquiridos durante el desarrollo de la temática.
        .tarjeta.tarjeta--azul.p-3.py-1
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arrastrar y soltar
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/act2/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    

</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
