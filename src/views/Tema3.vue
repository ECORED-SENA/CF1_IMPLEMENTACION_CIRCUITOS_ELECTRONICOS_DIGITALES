<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 3
      h1 Normatividad para electrónica digital

    p.mb-5(data-aos="fade") Una magnitud eléctrica está referida al movimiento de electrones y al fenómeno físico resultante, en el que se asocian unas variables que pueden ser medidas. Dentro de ellas se encuentran, la diferencia de potencial, la intensidad de corriente, la resistencia, capacitancia, inductancia y la frecuencia eléctrica.

    .row.justify-content-around.mb-4
      .col-md-3.mb-4(data-aos="fade-right")
        h4 Magnitudes físicas aplicadas a la electrónica digital
        p En algunos casos, deben estar involucradas más de una para poder medirlas y calcularlas, como sucede con la intensidad de corriente eléctrica, que, para poder obtener un valor, debe conectarse, una diferencia de potencial a una resistencia eléctrica. Lo mismo pasa con la frecuencia eléctrica, que es el cambio en el tiempo del valor de una tensión o corriente eléctrica.
      .col-md-6(data-aos="fade-left")
        img(src='@/assets/curso/tema3-img.jpg', alt='Imagen decorativa') 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10.bg-contenido3.py-4.px-3.px-md-4
        p.mb-0 En los circuitos digitales es muy probable que se usen solo algunas de estas magnitudes, como puede ser la intensidad de corriente y la diferencia de potencial. En realidad, de lo que trata la electrónica digital, es darle aplicación al álgebra booleana que consiste en analizar dos posible valores que, en el caso de estas magnitudes, puede ser la ausencia o presencia de ellos, es decir, presencia de la diferencia de potencial o ausencia de este; lo mismo aplica para la corriente. 

    .row.justify-content-center
      .col-md-8.bg-degrade-azul
        .row.align-items-center
          .col-md-6.text-white.px-md-5.px-3
            p.mb-0 La forma más común de esta interpretación consiste en encender un bombillo (presencia de tensión) o apagarlo (ausencia de tensión).
          .col-md-6.p-0
            img(src='@/assets/curso/tema3-img1.jpg', alt='Imagen decorativa')


    Separador

    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 3.1. Unidades de medida y aplicación

    p(data-aos="fade") Una unidad de medida consiste en darle un nombre a una variable que representa el valor físico de una magnitud, casi siempre este nombre es colocado en honor a algo o alguien, por ejemplo, en el caso de la diferencia de potencial se llama voltio en honor a Alfredo Volta su descubridor; la intensidad de corriente eléctrica se llama amperio en honor a André-Marie Ampère.

    p.mb-5(data-aos="fade") La siguiente figura muestra cada una de las magnitudes eléctricas, así como las unidades empleadas para medirlas.

    .row.justify-content-center
      h3.text-center.mb-4 Magnitudes eléctricas
      figure.mb-4
        img(src='@/assets/curso/tema3-1-tabla.svg', alt='Magnitudes eléctricas')
      .col-md-10.bg-primario1.py-2
        h4.text-white.text-center.mb-0 El cálculo de estas magnitudes, normalmente requiere de la aplicación de principios, leyes y teoremas.


    Separador

    #t_3_2
    .titulo-segundo.color-acento-contenido
      h2 3.2. Parámetros eléctricos

    p.mb-4(data-aos="fade") La parametrización de las unidades electrónicas referidas a la electrónica digital se limita a valores relativamente bajos, es así como en tensión se habla de valores de 5V, 3.3V y solo en casos especiales se utilizan 10 y 12 voltios.  

    .row.justify-content-center.align-items-center.mb-5      
      .col-md-6
        .row.justify-content-center
          .col-lg-12(data-aos="fade-right")
            p Para el caso de la electrónica digital estos parámetros se limitan a darle una representación a los dos estados concebidos en el álgebra de Boole. Estado on/off o encendido/apagado, o simplemente “1” para encendido (on) y “0” para apagado (off).
        .row.justify-content-center.neg--right.mb-4.pt-3
          .col-lg-12.bg-degrade-azul.tarjeta.text-white.p-4
            h5.mb-0.pad-right.pad-left2 Con la invención del transistor en los laboratorios Bell (1947), se hizo posible darle vida los sistemas digitales, ya que este elemento electrónico podría ser utilizado como un simple Switch, para encender o apagar. Fue esto lo que permitió el desarrollo de los sistemas digitales para llegar al avance tecnológico que hoy conocemos.
      .col-md-4.p-0.mb-md-0.mb-3.z-999
        img(src='@/assets/curso/tema3-2-img.png' alt='Imagen decorativa')  

    p.mb-4(data-aos="fade") A continuación, se presentan los parámetros y rangos establecidos de acuerdo con el producto electrónico.

    .row.justify-content-center     
      .col-md-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-botones1")
          .row.justify-content-center(titulo="Parámetros iniciales")
            .col-md-11
              p.mb-4 Los parámetros establecidos inicialmente para operar los circuitos digitales fueron:
              p.px-md-2.mb-0 0 voltios para el estado de apagado.
              p.px-md-2 5 voltios para el estado de encendido.
          .row.justify-content-center(titulo="Parámetros por el comportamiento físico")
            .col-md-11
              p.mb-4 Existen unos rangos que son determinados por el mismo comportamiento físico de los componentes, su tensión de alimentación característica está comprendida entre los 4,75V y los 5,25V. Los niveles lógicos vienen definidos por el rango de tensión comprendida entre 0,0V y 0,8V para el estado  apagado (off) y los 2,2v y 5v para el estado encendido (off). 
              p Un valor de tensión en el rango de 0,8 a 2,2 voltios será indeterminado y dependiendo de las características del componente puede ser 0 o 1, incluso un valor oscilatorio.
          .row.justify-content-center(titulo="Parámetros para sistemas modernos")
            .col-md-11
              p.mb-4 Para los sistemas modernos y chips de alta velocidad, la tensión de trabajo es de 3,3V, esto es debido a la alta velocidad de procesamiento y a la incorporación de nuevos materiales en el proceso de fabricación de los componentes. Incluso este nivel de tensión puede ser modificado en tiempo real para lograr nuevas velocidades de procesamiento.
          .row.justify-content-center(titulo="Parámetros de frecuencia eléctrica")
            .col-md-11
              p.mb-4 Este es precisamente el otro parámetro muy utilizado en los sistemas electrónicos digitales, la frecuencia eléctrica. Se mide en Hertz también en honor a su descubridor el físico alemán Heinrich Rudolf Hertz. Se refiere a cuántas veces cambia un parámetro de en la unidad de tiempo, para el caso de los sistemas digitales se refiere más que todo a cuantas instrucciones por segundo procesa el dispositivo electrónico. La siguiente tabla muestra esta relación en los primeros procesadores.

    Separador

    #t_3_3
    .titulo-segundo.color-acento-contenido
      h2 3.3. Definición y características

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10.tarjeta.bg-degrade-azul
        .row.justify-content-center
          .col-md-10.py-3.text-white
            p.mb-0 Las magnitudes físicas aplicadas a la electricidad encuentran su definición soportadas por los mismos fenómenos físicos que la sustentan, es así que la definición para estas magnitudes se pueden encontrar así:
     
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        TabsC.color-acento-contenido
          .py-3.py-md-4(titulo="Diferencia de potencial eléctrico")
            .row.justify-content-center
              .col-md-5
                figure
                  img(src='@/assets/curso/tema3-3-acord1.jpg', alt='Diferencia de potencial eléctrico')
              .col-md-6.mb-4.mb-md-0
                h4 Diferencia de potencial eléctrico
                p Es la fuerza con la que los electrones se mueven a través de un conductor eléctrico y definida en una sola palabra “fuerza”. Normalmente está contenida en un elemento, como es el caso de una pila o batería, o una fuente de poder, para nuestro uso será siempre necesario transformar una forma de energía a diferencia de potencial.
                p Un ejemplo de ello es la energía hidráulica, contenida en forma de energía potencial en una agua estancada a una altura determinada, al liberarla y hacerla pasar por una turbina, se convierte esa rotación, en electricidad utilizando el principio del dinamo. También en un hidrocarburo que al quemarse libera la energía contenida en él. Existen muchas formas de energía, unas más limpias que otras, pero un análisis permite determinar, que todas ellas son originadas por el Sol, esa es nuestra mayor fuente de energía.
          .py-3.py-md-4(titulo="Diferencia de potencial eléctrico")
            .row.justify-content-center
              .col-md-5
                figure
                  img(src='@/assets/curso/tema3-3-acord2.jpg', alt='La intensidad de corriente eléctrica')
              .col-md-5.mb-4.mb-md-0
                h4 La intensidad de corriente eléctrica
                p Es la cantidad de electrones que circulan por una sección de un conductor en la unidad de tiempo.  Definida en una sola palabra “cantidad”.
          .py-3.py-md-4(titulo="Resistencia eléctrica")
            .row.justify-content-center
              .col-md-5
                figure
                  img(src='@/assets/curso/tema3-3-acord3.jpg', alt='Resistencia eléctrica')
              .col-md-5.mb-4.mb-md-0
                h4 Resistencia eléctrica
                p Es el número de veces que cambia un parámetro de una magnitud eléctrica.
          .py-3.py-md-4(titulo="Frecuencia eléctrica ")
            .row.justify-content-center
              .col-md-5
                figure
                  img(src='@/assets/curso/tema3-3-acord4.jpg', alt='Frecuencia eléctrica ')
              .col-md-5.mb-4.mb-md-0
                h4 Frecuencia eléctrica 
                p Es el número de veces que cambia un parámetro de una magnitud eléctrica.     

    p.mb-5(data-aos="fade") Estas son las magnitudes que más se estarán usando en este componente formativo. Una analogía visible para este fenómeno físico es el agua circulando por una tubería, donde la bomba que impulsa el agua representa a la batería o fuente de poder; la fuerza con la que empuja la bomba el agua, es la diferencia de potencial; la cantidad de agua que pasa por la tubería es la intensidad de corriente eléctrica y la oposición ejercida por el tubo al paso del agua, es la resistencia, tal como se aprecia en la siguiente figura.

    h4.text-center.py-1 Analogía del flujo de agua
    .row.justify-content-center.mb-0
      .col-md-10
        .row.borde-botones
          .row.justify-content-center
            .col-md-10.pt-5.pb-3
              figure
                img(src='@/assets/curso/tema3-3-img.svg', alt='Analogía del flujo de agua')
    .row.justify-content-center.mb-5
      .col-md-10.bg-botones1.borde-botones-sin-top
        .row.justify-content-center
          .col-md-10.py-3.text-white
            p.mb-0 Una de las características más importantes de las magnitudes eléctricas es que pueden ser cuantificables y medidas. Esto permite desarrollar sistemas con análisis previo y predecir comportamientos; para el caso de los circuitos digitales, el proceso se simplifica aún más, ya que lo que se debe predecir es uno de dos estados posibles.

    
    .row
      .row
        .col-md-1
        .col-md-3.tema3-3-img-absolute
          img(src='@/assets/curso/tema3-3-img2.jpg' alt='Imagen decorativa')
          p.bg-secundario1.text-white.text-center.py-2.mb-0 Los electrones en circulación calientan un conductor.
      .row.tema2-rectangulo.tarjeta.justify-content-end.py-4.mb-4.mt-md-5
        .col-md-7
          p.text-white.mb-0 Otra característica sobresaliente y que permitió el desarrollo de la tecnología, es el hecho de poder manipularla y realizar tareas con ellas, por ejemplo, se puede controlar el flujo de electrones que circula por un conductor y dejarlo en un límite donde lo calienta sin dañarlo y utilizar esto para trabajos donde se requiera calor, ejemplo: plancha estufa, bombillo.
        .col-md-1  
      .row.justify-content-end
        .col-md-7  
          p Un análisis que permite determinar la importancia de estos fenómenos físicos en nuestra vida cotidiana es el recorrido de la energía eléctrica, desde su generación hasta que llega a nuestras casas en forma de electricidad y le damos un trabajo útil. El siguiente pódcast explica un poco más acerca de este proceso.
          .wrap-player
            audio(controls='')
              //source(src='../../public/downloads/.mp3' type='audio/mp3')
              |  Your browser does not support the audio tag   
        .col-md-1
               



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
