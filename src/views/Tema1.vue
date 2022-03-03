<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.tema1-fondo1.p-4.p-md-5

    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 1
      h1 Normatividad para electrónica digital

    p.mb-4(data-aos="fade") El proceso de regulación para implementar sistemas electrónicos digitales, tiene como objetivo principal proteger la salud de las personas que los utilizan a diario y también al medio ambiente. 

    .row.justify-content-center.align-items-center
      .col-md-5.p-0.mb-md-0.mb-3.z-999
        img(src='@/assets/curso/tema1-img1.png' alt='Imagen decorativa')
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

    p(data-aos="fade") <b>Adicionalmente,</b> puede ser necesario consultar y aplicar otras normas, estas se aplican dependiendo de la naturaleza del producto desarrollado y que permitan el diseño de un producto amigable con el medio ambiente.
 
    p.mb-5(data-aos="fade") Si nos referimos a los procesos de medición se encuentran algunos parámetros que se deben cumplir: niveles de tensión, potencia de consumo, emisión electromagnética.

    .row.mb-3
      .col-md-4.col-6.mb-4
        .tarjetas-tema-1-1.tarjeta-1
          .caras.tarjeta-verde
            p.text-white Este estándar establece técnicas, relacionadas con el proceso de perforado y montaje superficial, así como la preparación de superficies. 
          .caras.justify-content-center
            img.mb-4(src="@/assets/curso/tema1-1-tarj1.png" style="width:60px; margin: 0 auto")
            h3.color-acento-botones.text-center IPC-7711/21
      .col-md-4.col-6l.mb-4
        .tarjetas-tema-1-1.tarjeta-1
          .caras.tarjeta-azul1
            p.text-white Esta norma establece reglas de  diseño de PCB. Está dentro de las normas más  usadas, incluye el ensamble de los componentes, tipo (THT, <em>Through-Hole Technology</em>) huecos pasantes, (SMT, <em>Surface-Mount technology</em>) montaje superficial. 
          .caras.justify-content-center
            img.mb-4(src="@/assets/curso/tema1-1-tarj2.png" style="width:60px; margin: 0 auto")
            h3.color-acento-botones.text-center IPC 2221   
      .col-md-4.col-6.mb-4.hover-columna(@mouseover="mostrarIndicador = false")
        .indicador--click(v-if="mostrarIndicador")
        .tarjetas-tema-1-1.tarjeta-1
          .caras.tarjeta-azul2
            p.text-white En ella se establecen las definiciones para la interconexión y encapsulados de circuitos electrónicos, necesarios para el montaje en las PCB, diseño de rutas y parámetros de componentes.
          .caras.justify-content-center
            img.mb-4(src="@/assets/curso/tema1-1-tarj3.png" style="width:60px; margin: 0 auto")
            h3.color-acento-botones.text-center IPC-T-50M     
      .col-md-4.col-6.mb-4
        .tarjetas-tema-1-1.tarjeta-1
          .caras.tarjeta-morada
            p.text-white.p-line Requisitos para documentar los requerimientos de la PCB, ensamblajes y esquemas electrónicos, es posible que después de realizar algunas pruebas se deba documentar todo el proceso y entregar los resultados de los cálculos y mediciones, la norma establece los procedimientos para documentar estos procesos.
          .caras.justify-content-center
            img.mb-4(src="@/assets/curso/tema1-1-tarj4.png" style="width:60px; margin: 0 auto")
            h3.color-acento-botones.text-center IPC D-325      
      .col-md-4.col-6.mb-4
        .tarjetas-tema-1-1.tarjeta-1
          .caras.tarjeta-verde
            p.text-white Requisitos genéricos para el diseño SMD y estándar para el diseño de las pistas de soldadura, esta norma es muy importante ya que establece las reglas de diseño para los conductores en la placa, además en su versión digital, incluye una calculadora que facilita la creación de las pistas, indicando grosor, tamaño y otros parámetros.
          .caras.justify-content-center
            img.mb-4(src="@/assets/curso/tema1-1-tarj1.png" style="width:60px; margin: 0 auto")
            h3.color-acento-botones.text-center IPC-7351B
      .col-md-4.col-6.mb-4
        .tarjetas-tema-1-1.tarjeta-1
          .caras.tarjeta-azul1
            p.text-white Guía para el diseño de PCB  utilizadas en radiofrecuencia y microondas. Cuando el equipo electrónico incluye radiofrecuencia, es necesario un tratamiento especial, esta norma establece las reglas para garantizar un funcionamiento confiable en este tipo de dispositivos.
          .caras.justify-content-center
            img.mb-4(src="@/assets/curso/tema1-1-tarj2.png" style="width:60px; margin: 0 auto")
            h3.color-acento-botones.text-center IPC-2252
      .col-md-12.col-11.mb-4
        .tarjetas-tema-1-1.tarjeta-1
          .caras.tarjeta-azul2
            p.mb-3.text-white Guía de diseño para el empaquetado de circuitos electrónicos de alta velocidad. Los circuitos de alta velocidad, también están relacionados con la frecuencia, pero en este caso está referida al funcionamiento interno de un chip, es así como un procesador o una memoria, están dentro de esta categoría, por lo tanto, el empaquetado o carcaza del componente debe cumplir con unos estándares para evitar pérdida de datos por mal montaje y por consiguiente mal funcionamiento del producto donde se utilice.
            p.text-white En algunos componentes se produce calentamiento, por lo que será necesario la implementación de un sistema de refrigeración; este sistema no debe interferir en el buen funcionamiento del dispositivo, será necesario efectuar algunas mediciones para verificar que los valores están dentro del rango permitido por el fabricante, estas mediciones incluyen temperatura al componente y su frecuencia de operación.
          .caras.justify-content-center
            img.mb-4(src="@/assets/curso/tema1-1-tarj3.png" style="width:60px; margin: 0 auto")
            h3.color-acento-botones.text-center IPC 2251          

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
                  a.boton.color-acento-botones.text-white(:href="obtenerLink('/downloads/CF14_3_arbol_IPC.pdf')" target="_blank")
                    span Ver Imagen
                    i.fas.fa-download


    Separador

    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2. Normas IEEE

    p.mb-4(data-aos="fade") Las normas IEEE (Institute of Electrical and Electronic - Instituto de Ingenieros Eléctricos y Electrónicos), son el resultado de la unión del trabajo de compañías dedicadas a la ingeniería y a la ciencia a nivel mundial. En la siguiente figura se evidencia su trayectoria.

    .row.justify-content-center.mb-4
      .col-md-10
        .h4.mb-2 Figura 1
        .row.borde-botones
          h4.text-center.text-white.bg-botones1.py-1 Institute of Electrical and Electronic
          .row.justify-content-center
            .col-md-10.py-3
              figure
                img(src='@/assets/curso/tema1-fig2.svg', alt='Estándares IEEE para redes inalámbricas')
              p.text-center Cada estándar representa a la tecnología optimizada para distintas necesidades  

    p.mb-4(data-aos="fade") Los estándares IEEE son muy amplios, pues existen tantas normas que no es práctico citarlas en este documento, se debe tener claridad sobre lo que se quiere implementar y consultar la norma apropiada, tal como se muestra en la siguiente figura. 

    .row.justify-content-center.mb-5
      .col-md-10
        .h4.mb-2 Figura 2
        .row.borde-botones
          h4.text-center.text-white.bg-botones1.py-1 Estándares IEEE para redes inalámbricas
          .row.justify-content-center
            .col-md-10.py-4
              figure
                img(src='@/assets/curso/tema1-fig1.svg', alt='Estándares IEEE para redes inalámbricas')


    Separador

    #t_1_3
    .titulo-segundo.color-acento-contenido
      h2 1.3. Normas ISO

    .row.justify-content-center.align-items-center.mb-5      
      .col-md-6
        .row.justify-content-center
          .col-lg-12(data-aos="fade-right")
            p <b>La Organización Internacional de Normalización (ISO)</b> es una organización independiente formada por 164 países miembros. Su principal objetivo es desarrollar estándares internacionales que faciliten el comercio mundial y ha generado cerca de 20.000 estándares, cubriendo desde productos manufacturados y tecnología hasta seguridad alimentaria, agricultura y salubridad, ayudando a las empresas a aumentar la productividad a la vez que minimizan los gastos, facilitando que nuevas compañías puedan entrar en nuevos mercados y ayudar en el desarrollo de un comercio global. Estos estándares también sirven para proteger a los usuarios finales de bienes y servicios.
        .row.justify-content-center.neg--right.mb-4.pt-3
          .col-lg-12.bg-degrade-azul.tarjeta.text-white.p-4
            h5.mb-0.pad-right.pad-left2 Este tipo de normas orienta a las empresas y brinda pautas para la gestión, implementación y puesta en marcha de estos productos. En ellas se establecen los estándares de calidad que se deben cumplir a la hora de comercializarlos.  
      .col-md-5.p-0.mb-md-0.mb-3.z-999
        img(src='@/assets/curso/tema1-3-img1.png' alt='Imagen decorativa')      
    
    
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10.bg-gris
        .row.justify-content-center
          .col-md-10.py-3
            p.mb-0 Las normas ISO son más aplicables al proceso de fabricación y es ahí precisamente donde más cuidado se debe tener. Si se trata de un proceso de producción en serie, es necesario aplicar la siguiente normatividad:
    
    p.mb-5(data-aos="fade") ISO 9001, TL9000 y ESD S20.20: estas normas ofrecen un sistema de gestión de calidad en  electrónica y  telecomunicaciones. También identifica requisitos específicos para proveedores del área. La norma ANSI/ESD S20.20 se centra en los componentes electrónicos utilizados en las telecomunicaciones y establece los controles para proteger a los elementos y dispositivos de las descargas electrostáticas.

    .row.hover-tema1-3.tema-1-fondo2.justify-content-center.mb-5
      .col-md-8.tarjeta.bg-primario1.text-white.mb-4.py-3
        h5.text-center.mb-0 Adicionalmente será necesario verificar algunos estándares internacionales:
      .row.justify-content-center.align-items-center.tema1-3-tarjeta-1.mb-3
        .col-md-2.tarjeta.bg-botones1.py-4.mx-md-3
          h4.text-white.text-center.mb-0 ISO 14001
        .col-md-6.bg-gris2.tarjeta.py-4.px-4
          p.mb-0 Contiene los requisitos necesarios para implantar un Sistema de Gestión ambiental.
      .row.justify-content-center.align-items-center.tema1-3-tarjeta-2.mb-3
        .col-md-2.tarjeta.bg-contenido1.py-4.mx-md-3
          h4.text-white.text-center.mb-0 ISO 5001 
        .col-md-6.bg-gris2.tarjeta.py-4.px-4
          p.mb-0 Corresponde a un sistema de gestión electrónica muy importante, pues trata exclusivamente la gestión energética.
      .row.justify-content-center.align-items-center.tema1-3-tarjeta-3.mb-3
        .col-md-2.tarjeta.bg-secundario1.py-4.mx-md-3
          h4.text-white.text-center.mb-0 OHSAS 18001 / ISO 45001 
        .col-md-6.bg-gris2.tarjeta.py-4.px-4
          p.mb-0 Aquí se implementa el sistema de gestión de la seguridad y salud en el trabajo, esta aplicación es necesaria para garantizar la salud de los trabajadores y, por consiguiente, la mejora de la productividad. 
      .row.justify-content-center.align-items-center.tema1-3-tarjeta-4
        .col-md-2.tarjeta.bg-primario1.py-4.mx-md-3
          h4.text-white.text-center.mb-0 ISO 27001 
        .col-md-6.bg-gris2.tarjeta.py-4.px-4
          p.mb-0 Esta norma establece los  sistemas de gestión de la seguridad de la información. Busca en gran medida proteger los derechos de autor, pues muchos productos electrónicos son susceptibles de copias no autorizadas. Muchos de los artefactos que se usan diariamente en el hogar, poseen derechos de autor y parte del dinero de  la compra, será destinado a su creador.


    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10.bg-gris
        .row.justify-content-center
          .col-md-10.py-3
            p.mb-0 Al igual que los estándares IEEE, las normas ISO son muy amplias y se debe tener la certeza de utilizar la norma adecuada para la aplicación en la implementación que se requiere.


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
    mostrarIndicador: true,
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
