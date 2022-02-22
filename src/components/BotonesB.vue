<template lang="pug">
.btns
  .row.justify-content-center
    .col-md-8
      img(src='@/assets/curso/tema1-fondo-botones.svg', alt='El proceso de los servicios PHP')
  .btns__item(
    v-for="(boton, index) in botones"
    :style="getStyles(boton, index)"
    :class="[`btns_item--${index}`]"
    @mouseover="hover = index"
    @mouseleave="hover = null"
  )
    .indicador--hover(v-if="index === 0 && indicador")
    .btns__text.py-3.px-4(v-if="index === hover")  
      .col-md-3.col-6.mb-3
        img(:src="boton.icono", style="width: 55px")
      p.mb-0 {{boton.contenido}}


</template>

<script>
export default {
  name: 'BotonesB',
  data: () => ({
    indicador: true,
    hover: null,
    size: '13%',
    botones: [
      {
        img: require('@/assets/curso/tema1-boton1_1.svg'),
        img_h: require('@/assets/curso/tema1-boton1_2.svg'),
        pos_x: '11.5%',
        pos_y: '2.3%',
        icono: require('@/assets/curso/tema1-botones-icono1.svg'),
        contenido:
          'IPC 600 – Aceptabilidad de circuitos impresos. Esta norma aplica a los  diseñadores y establece los criterios de inspección de calidad visual, es la norma más difundida en la industria electrónica ya que está referida al  diseño, manufactura y mantenimiento en electrónica. Contiene apartados del  IPC JST 001. La norma más actualizada es la IPC A 610 G (IPC-A-610 en español, la letra «A» es de aceptación de calidad).',
      },
      {
        img: require('@/assets/curso/tema1-boton2_1.svg'),
        img_h: require('@/assets/curso/tema1-boton2_2.svg'),
        pos_x: '40%',
        pos_y: '2.5%',
        icono: require('@/assets/curso/tema1-botones-icono2.svg'),
        contenido:
          'IPC 610: Aceptabilidad del ensamble electrónico. Establece los parámetros  de calidad de circuitos impresos PCB, en ella se establecen los criterios para aceptar o rechazar los PCB y la soldadura de tarjetas o productos electrónicos, componentes de montaje superficial SMD y agujero pasante THT.',
      },
      {
        img: require('@/assets/curso/tema1-boton3_1.svg'),
        img_h: require('@/assets/curso/tema1-boton3_2.svg'),
        pos_x: '68.5%',
        pos_y: '2.3%',
        icono: require('@/assets/curso/tema1-botones-icono3.svg'),
        contenido:
          'IPC 620, Requisitos y aceptación para cables y conexiones. Establece los criterios visuales de aceptación, para el cableado. Si el diseño es de telecomunicaciones, también será necesario aplicar las normas ISO 9001, TL9000 y ESD S20.20.',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image = this.hover === index ? boton.img_h : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
        'padding-top': this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>

.btns_item--0 .btns__text
  background-color: #D0E1F1 !important
.btns_item--1 .btns__text
  background-color: #EAC8F8 !important
.btns_item--2 .btns__text
  background-color: #B1DCF2 !important

.btns
  position: relative
  height: 500px
  &__item
    position: absolute
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    cursor: pointer
    transition: background-image 0.2s ease-in-out
  &__text
    position: absolute
    top: 152%
    left: 60%
    border-radius: 15px
    width: 440px
    z-index: 100
    line-height: 1.2em
    transform: translate(-50%)
    p
      line-height: 1.2em
@media (max-width: $bp-max-md)
  .btns__item
    width: 3.5% !important
    padding: 3.5%

  .btns_item--0
    top: 22% !important
    left: 25.1% !important
  .btns_item--1
    top: 22% !important
    left: 46% !important
  .btns_item--2
    top: 22% !important
    left: 67% !important

  .btns__text
    width: 320px
  .btns_item--0 .btns__text
    left: 180% !important
  .btns_item--1 .btns__text
    left: 90%
  .btns_item--2 .btns__text
    left: 10%
</style>
