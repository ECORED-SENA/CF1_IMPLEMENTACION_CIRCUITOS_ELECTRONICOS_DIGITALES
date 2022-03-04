<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 2
      h1 Seguridad y salud en el trabajo

    .row.mb-5
      .col-md-7(data-aos="fade-right")
        p.mb-4 <b>La Seguridad y Salud en el Trabajo, SST,</b> está definida como aquella disciplina que previene los riesgos presentados al ejecutar una labor. Esta ha venido evolucionando e inicialmente se le conocía como Salud Ocupacional, a la última definición se le conoce como SGSST (Sistema de Gestión de la Seguridad y Salud en el Trabajo).
        .justify-content-center.mb-4.pt-3
          .col-lg-12.bg-degrade-azul.tarjeta.text-white.p-4
            p.mb-0.px-md-4 <b>La ley 1562 del 2012 lo define como:</b> “El conjunto de entidades públicas y privadas, normas y procedimientos, destinados a prevenir, proteger y atender a los trabajadores de los efectos de las enfermedades y los accidentes que puedan ocurrirles con ocasión o como consecuencia del trabajo que desarrollan”.
      .col-md-5(data-aos="fade-left")
        img.px-md-4(src='@/assets/curso/tema2-img1.png' alt='Imagen decorativa')  


    p(data-aos="fade") La siguiente figura expone todo lo que implica el Sistema de Gestión de la Seguridad y Salud en el Trabajo.

    .row.tarjeta.bg-gris2.justify-content-center.p-md-4.p-3.py-md-5.mb-4
      figure.mb-5
        img(src='@/assets/curso/tema2-infog1.svg', alt='Expone todo lo que implica el Sistema de Gestión de la Seguridad y Salud en el Trabajo')
      .col-md-10.tarjeta.bg-blanco.p-3.p-md-4
        p.mb-0 También está regulado por la Resolución 0312 de 2019; en el área de electrónica se aplica más que todo el séptimo estándar de esta resolución donde se encuentran las medidas de prevención y control frente a todos los peligros y riesgos identificados. Los riesgos al trabajar con equipos electrónicos son inherentes y se debe tener especial cuidado cuando es necesario trabajar con ellos energizados.

    .row.tema2-rectangulo.justify-content-center.align-items-center.mb-4
      .col-md-7
        p.mb-0.text-white.px-md-3 En términos generales, toda empresa dedicada a la producción, sin importar si es pública o privada, debe implementar un sistema de seguridad y salud en el trabajo; y este consiste en el desarrollo de un proceso organizado y bien planificado para anticipar, reconocer, evaluar y controlar los riesgos que se puedan presentar y que afectan la seguridad y la salud del personal que labora.
      .col-md-4.contenedor-imagenes 
        img.banner-img3(src='@/assets/curso/tema2-img-fondo.png' alt='Imagen decorativa')
        img.banner-img1(src='@/assets/curso/tema2-img-anim1.png' alt='Imagen decorativa')
        img.banner-img2(src='@/assets/curso/tema2-img-anim2.png' alt='Imagen decorativa')
        
    
    p(data-aos="fade") Ahora bien, las condiciones de seguridad en el trabajo están referidas a cualquier aspecto del trabajo que derive en consecuencias negativas para la salud del trabajador; se deben tener en cuenta aspectos ambientales y tecnológicos, así como también las disposiciones de la organización.

    p.mb-5(data-aos="fade") En trabajos con electricidad el riesgo es inherente y se deben aplicar todos los procedimientos para evitar daños a la salud de los trabajadores. De lo contrario, esto podría terminar en un evento infortunado, tal como se explica a continuación. 

    .row.justify-content-center.mb-5
      .col-md-10(data-aos="fade-down")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/ls-pANyapho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h5 Todos los requerimientos para la implementación de elementos de protección personal en los lugares de trabajo para un ambiente saludable se encuentran contemplados en la Ley 9 de enero 24 de 1979 (título III, artículos 122 a 124) y en la Resolución 2400 de mayo 22 de 1979 (título IV, capítulo II, artículos 176 a 201).

    h5.mb-4 Es importante seleccionar los elementos de protección adecuados, porque un mal uso de ellos puede incurrir en accidentes. Dentro de los elementos más comunes se encuentran:

    ImagenInfografica.color-acento-contenido.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2-img-placeholder.svg', alt='Elementos comunes')

      .tarjeta.bg-blanco.borde-morado.p-3(x="34.3%" y="40%" numero="+")
        .h4.mb-2 Protección para el oído
        p.mb-0 Protectores auditivos de inserción, tipo tapón desechable, tipo tapón reutilizable o premoldeable. Supraaurales, tipo disco plano. Supraaurales, tipo banda ajustable. Circumaurales, tipo orejera universal, tipo orejeras con arnés, fijo de cabeza, fijo de barbilla, fijo de nuca. Tipo cascos antirruido, tipo orejeras acopladas a casco. Circuitos electrónicos incorporados, del tipo dependientes del nivel y con aparatos de intercomunicación.

      .tarjeta.bg-blanco.borde-morado.p-3(x="31.4%" y="65%" numero="+")
        .h4.mb-2 Protección para las vías respiratorias
        p.mb-0 Equipos filtrantes de partículas molestas, nocivas, tóxicas o radiactivas; filtrantes combinados frente a gases y vapores; suministradores de aire, con casco o pantalla para soldadura, con máscara amovible para soldadura, para trabajos bajo el agua.

      .tarjeta.bg-blanco.borde-morado.p-3(x="31.4%" y="89%" numero="+")
        .h4.mb-2 Protección para manos y brazos
        p.mb-0 Guantes contra vibración, guantes contra riesgo mecánico, riesgo químico, riesgo biológico, riesgo eléctrico, riesgo de origen térmico y radiaciones, manoplas.

      .tarjeta.bg-blanco.borde-morado.p-3(x="50.2%" y="22%" numero="+")
        .h4.mb-2 Protección para la cabeza
        p.mb-0 Cascos de seguridad, los cuales están clasificados en categoría A, B, C y D. Prendas de protección para la cabeza, tales como, gorros, gorras, sombreros, de tejido recubierto. Cascos para usos especiales en fuego, cascos reflectantes.

      .tarjeta.bg-blanco.borde-morado.p-3(x="66.5%" y="40%" numero="+")
        .h4.mb-2 Protección para los ojos y cara
        p.mb-0 Lentes de seguridad tipo montura universal, montura integral, montura cazoletas. Pantallas faciales. Pantallas para soldadores de mano, de cabeza, acoplables a casco de protección. Lentes para usos especiales para trabajos con rayos X, rayos ultravioleta, agentes biológicos y químicos.
      
      .tarjeta.bg-blanco.borde-morado.p-3(x="69%" y="65%" numero="+")
        .h4.mb-2 Otras protecciones del cuerpo
        p.mb-0 También existen protectores de la piel como cremas de protección contra radiaciones por trabajo al aire libre; protectores del tronco y el abdomen, chalecos, chaquetas y cotonas de protección contra las riesgo mecánico, químico, resistentes a la temperatura, chalecos salvavidas, delantales de protección contra los rayos x, cinturones de sujeción del tronco, equipos de protección contra las caídas distinto nivel tipo arnés, cinturones de posicionamiento, dispositivos de caídas de tipo deslizante, dispositivos con amortiguador, ropa de protección contra proyecciones de metales en fusión y radiaciones infrarrojas.

      .tarjeta.bg-blanco.borde-morado.p-3(x="69%" y="89%" numero="+")
        .h4.mb-2 Protección para piernas
        p.mb-0 Calzado de seguridad, calzado ocupacional, para riesgo eléctrico y químico; botas de goma o caucho,  protección contra el calor o el frío, rodilleras.




</template>

<script>
export default {
  name: 'Tema2',
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
