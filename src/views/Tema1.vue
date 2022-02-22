<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 1
      h1 Normatividad para electrónica digital

    p.mb-4(data-aos="fade") El proceso de regulación para implementar sistemas electrónicos digitales, tiene como objetivo principal proteger la salud de las personas que los utilizan a diario y también al medio ambiente. 

    .row.justify-content-center.align-items-center
      .col-md-5.p-0.mb-md-0.mb-3.z-999
        img(src='@/assets/curso/tema1-img1.svg' alt='Imagen decorativa')
      .col-md-6
        .row.justify-content-center.neg--left.mb-4.pt-3
          .col-lg-12.bg-degrade-azul.tarjeta.text-white.p-4
            p.mb-0.pad-left <b>Una de las principales características</b> de estos sistemas es que evolucionan a un ritmo vertiginoso, por lo que quedan obsoletos con poco tiempo de uso, ocasionando una gran cantidad de residuos los que, a su vez, deben tener una adecuada disposición.   
        .row.justify-content-center
          .col-lg-11(data-aos="fade-left")
            p De ahí la importancia de atender las regulaciones, si se quiere trabajar con sistemas digitales, sobre todo si el fin es la producción de aparatos de consumo. Las normas esenciales que se aplican para esta área son tres: normas IPC, normas IEEE y normas ISO. 


    Separador

    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1. Normas IPC

    p.mb-5(data-aos="fade") El IPC (Association Connecting Electronics Industries), fundado en 1957, es una asociación mundial de participantes de la industria electrónica conformada por diseñadores, fabricantes, ensambladores de productos electrónicos, entidades de gobierno e instituciones educativas. Las normas IPC están orientadas a las buenas prácticas en el diseño de productos electrónicos. Este tipo de normas da las pautas para lograr un producto de calidad. A continuación, se presentan algunas de ellas a tener en cuenta.

    .row
      .h3.text-center.mb-4(data-aos="fade-down") Normas de aceptabilidad
      BotonesB

    p(data-aos="fade") <b>Adicionalmente,</b> puede ser necesario  consultar y aplicar otras normas, estas se aplican dependiendo de la naturaleza del producto desarrollado y que permitan el diseño de un producto amigable con el medio ambiente.
 
    p.mb-5(data-aos="fade") Si nos referimos a los procesos de medición se encuentran algunos parámetros que se deben cumplir: niveles de tensión, potencia de consumo, emisión electromagnética.




    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        .tarjeta.bg-degrade-morado.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-4.imagen_girando
              img.px-lg-3.mb-0(src="@/assets/curso/banner2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h4.mb-2 Árbol de normas IPC
                  p.text-small.mb-0 En la siguiente imagen se puede observar los estándares IPC.
                .col-sm-auto
                  a.boton.color-acento-botones.text-white(:href="obtenerLink('')" target="_blank")
                    span Ver Imagen
                    i.fas.fa-download


    Separador

    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2. Normas IEEE

    p.mb-4(data-aos="fade") Las normas IEEE (Institute of Electrical and Electronic - Instituto de Ingenieros Eléctricos y Electrónicos), son el resultado de la unión del trabajo de compañías dedicadas a la ingeniería y a la ciencia a nivel mundial. En la siguiente figura se evidencia su trayectoria.

    .row.justify-content-center.mb-5
      .col-md-10
        .h4.mb-2 Figura 1
        .row.borde-botones
          h4.text-center.text-white.bg-botones1.py-1 Estándares IEEE para redes inalámbricas
          .row.justify-content-center
            .col-md-10.py-4
              figure
                img(src='@/assets/curso/tema1-fig1.svg', alt='Estándares IEEE para redes inalámbricas')

    .row.justify-content-center.mb-0
      .col-md-10
        .h4.mb-2 Figura 2
        .row.borde-botones
          h4.text-center.text-white.bg-botones1.py-1 Institute of Electrical and Electronic
          .row.justify-content-center
            .col-md-10.py-3
              figure
                img(src='@/assets/curso/tema1-fig2.svg', alt='Estándares IEEE para redes inalámbricas')
    .row.justify-content-center
      .col-md-10.bg-gris.borde-botones-sin-top
        .row.justify-content-center
          .col-md-10.py-3
            p.mb-0 Los estándares IEEE son muy amplios, pues existen tantas normas que no es práctico citarlas en este documento, se debe tener claridad sobre lo que se quiere implementar y consultar la norma apropiada, tal como se muestra en la siguiente figura. 


    Separador

    #t_1_3
    .titulo-segundo.color-acento-contenido
      h2 1.3. Normas ISO


</template>

<script>
import BotonesB from '../components/BotonesB.vue'
export default {
  name: 'Tema1',
  components: {
    BotonesB,
  },
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
