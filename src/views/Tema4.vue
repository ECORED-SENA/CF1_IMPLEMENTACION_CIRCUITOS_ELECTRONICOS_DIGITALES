<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 4
      h1 Componentes electrónicos digitales

    p.mb-5(data-aos="fade") Los componentes electrónicos digitales comenzaron a surgir con el desarrollo de la electrónica desde la invención del transistor, estos han venido evolucionando de manera vertiginosa, tanto así, que los primeros componentes desarrollados, y que en su momento tuvieron amplia aplicación, ya son poco utilizados. El desarrollo de estos componentes está basado en el funcionamiento del transistor y se les conoce como compuertas lógicas, ya que basan su funcionamiento en la representación física de la lógica booleana, tal como se observa en la siguiente figura.

    h4 Compuerta lógica y su simbología

    .row.justify-content-center.mb-5
      .col-md-5(data-aos="fade-right")
        .bg-celeste2.p-4.mb-1
          .titulo-sexto.color-acento-contenido.mb-3
            p.mb-0 Base de superior masculina
          SlyderE(indicadores="centro")
            .row.justify-content-center
              img(src='@/assets/curso/tema4-slide1.jpg' alt='Base de superior masculina', style="width: 300px")  
            .row.justify-content-center
              img(src='@/assets/curso/tema4-slide2.jpg' alt='Base de superior masculina', style="width: 300px")   
        figcaption Nota. Tomada de Meskauskas (2013).    
      .col-md-5.bg-celeste2.p-md-5.p-4(data-aos="fade-left")
        p.mb-0 Las compuertas lógicas son un arreglo de transistores, con entradas y salidas que al aplicar tensión responden siguiendo el planteamiento del álgebra de Boole. Hay que aclarar que esta lógica se hacía con anterioridad, aplicando solo contactos eléctricos, es decir switches eléctricos que representaban los estados de encendido y apagado, mucha de la industria antigua, está basada en esta lógica conocida como lógica de contactos.

    .row.justify-content-center.mb-5
      .col-md-8(data-aos="fade-down")
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4-img1.jpg')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 La implementación de esta lógica en componentes transistorizados e integrando gran cantidad de elementos electrónicos en un solo chip, permitió reducir el tamaño de los sistemas de control. A medida que estos componentes evolucionan, se hace cada vez más eficiente el control de los procesos en la industria y en la vida cotidiana.

    p.mb-5(data-aos="fade") Un componente electrónico digital simple, consta de una compuerta lógica formada internamente por arreglo de transistores. Se pueden integrar múltiples compuertas en un mismo chip y formar arreglos que desempeñan una tarea específica. Estos arreglos pasan a ser otro componente y así sucesivamente se van integrando hasta llegar a sistemas complejos que pueden procesar grandes cantidades de información. Dentro de estos componentes más comunes se encuentran:

    SlyderF.tema4-slyder.mb-5(columnas="col-md-6")
      .tarjeta.color-acento-botones.text-white.p-4
        .row.justify-content-center.mb-5
          .col-5
            img(src='@/assets/curso/tema4-tarj1.svg' alt='Compuertas lógica')
        h2.text-center Compuertas lógicas
        p.text-center Son la representación electrónica de la lógica común, encontramos la conjunción “Y” o compuerta AND, la “o” o compuerta Or, la negación o compuerta Not, las compuertas universales NAND y NOR.
      .tarjeta.color-primario.text-white.p-4
        .row.justify-content-center.mb-5
          .col-5
            img(src='@/assets/curso/tema4-tarj2.svg' alt='Flip/Flop')
        h2.text-center Flip/Flop
        p.text-center Este componente es una integración de varias compuertas lógicas y realiza una función especial, puede representar a una unidad de almacenamiento o memoria, también conocida como “bit”. 

      .tarjeta.color-acento-contenido.text-white.p-4
        .row.justify-content-center.mb-5
          .col-5
            img(src='@/assets/curso/tema4-tarj3.svg' alt='Contador')
        h2.text-center Contador
        p.text-center También está constituido por la integración de varios componentes compuertas y Flip/Flop, que realizan la función de un conteo secuencial.
      .tarjeta.bg-secundario1.text-white.p-4
        .row.justify-content-center.mb-5
          .col-5
            img(src='@/assets/curso/tema4-tarj4.svg' alt='Memoria')
        h2.text-center Memoria
        p.text-center Es una arreglo de Flip/Flop que tiene la función de almacenar datos en forma de lógica de estados.

      .tarjeta.bg-azul.text-white.p-4
        .row.justify-content-center.mb-5
          .col-5
            img(src='@/assets/curso/tema4-tarj5.svg' alt='Codificadores y decodificadores')
        h2.text-center Codificadores y decodificadores
        p.text-center Integración de muchos componentes que permiten crear un código para representar señales.
      .tarjeta.bg-gris3.text-white.p-4
        .row.justify-content-center.mb-5
          .col-5
            img(src='@/assets/curso/tema4-tarj6.svg' alt='Multiplexores y demultiplexores')
        h2.text-center Multiplexores y demultiplexores
        p.text-center Estos componentes permiten mezclar varios datos en un solo canal.

      .tarjeta.color-acento-contenido.text-white.p-4
        .row.justify-content-center.mb-5
          .col-5
            img(src='@/assets/curso/tema4-tarj7.svg' alt='Microprocesadores')
        h2.text-center Microprocesadores
        p.text-center Estos componentes poseen una escala de integración muy grande, pueden hacer operaciones muy complejas apoyados de todos los componentes ya descritos.
      .tarjeta.bg-botones1.text-white.p-4
        .row.justify-content-center.mb-5
          .col-5
            img(src='@/assets/curso/tema4-tarj8.svg' alt='Microcontroladores')
        h2.text-center Microcontroladores
        p.text-center Si existe un componente que integre todos lo desarrollado hasta ahora, es precisamente el microcontrolador, este chip es, por sí solo, un sistema de cómputo completo y solo necesita darle las instrucciones para que haga una tarea. 

    p(data-aos="fade") A medida que se avanza en el estudio de los sistemas digitales y se implementan circuitos, se familiarizan con la interpretación funcional de estos componentes.


    Separador

    #t_4_1
    .titulo-segundo.color-acento-contenido
      h2 4.1. Fabricantes

    p(data-aos="fade") Quizás se esté familiarizado con la empresa Intel o tal vez AMD, que son los mayores fabricantes de dispositivos digitales para sistemas de cómputo, pero el mercado de la electrónica digital es mucho más amplio que el que abarca un computador personal.

    p(data-aos="fade") Existen muchos fabricantes de circuitos integrados digitales, cada empresa se especializa en la producción de cierta línea. Dentro de las más conocidas se encuentran las siguientes:

    .row.justify-content-center.mb-4
      .col-md-10
        PasosA.color-acento-botones(tipo="n")
          .row.align-items-center
            .col-md-2.col-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema4-paso1.svg', alt='National Instruments')
            .col-md-10
              h4 National Instruments
              p Esta empresa no solo se limita a los componentes, también desarrolla dispositivos de uso general, aeronáutico, espacial y educativo. 
          .row.align-items-center
            .col-md-9.mb-4.mb-md-0
              h4 Microchips
              p Además de los componentes electrónicos digitales, esta empresa se especializa en la fabricación de microcontroladores y también en el desarrollo de las aplicaciones para la programación de los mismos, su software se puede usar de forma gratuita.
            .col-md-3.col-6
              figure
                img(src='@/assets/curso/tema4-paso2.svg', alt='Microchips')
          .row.align-items-center
            .col-md-2.col-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema4-paso3.svg', alt='Motorola')
            .col-md-10
              h4 Motorola
              p Esta empresa está enfocada más que todo en componentes para la telecomunicaciones, siendo los más usados en esta industria.
          .row.align-items-center
            .col-md-10.mb-4.mb-md-0
              h4 IBM
              p Este fabricante está centrado en la industria informática.
            .col-md-2.col-6
              figure
                img(src='@/assets/curso/tema4-paso4.svg', alt='IBM')

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10.bg-contenido3.py-4
        .row.justify-content-center
          .col-md-10
            p.mb-0 Varios fabricantes lanzan una línea de productos con trabajos puntuales, en esta categoría entran los módulos, tales como, <em>Wifi, Bluetooth, Sistemas Arduino, RaspBerry</em>, etc. 

    Separador

            
    #t_4_2
    .titulo-segundo.color-acento-contenido
      h2 4.2. Características

    p(data-aos="fade") La principal característica de los sistemas digitales es su portabilidad. El desarrollo de estos dispositivos llevó a la disminución considerable del tamaño de estos; eso, asociado al bajo consumo energético, hizo posible su uso en casi todos los lugares, incluyendo el espacio.

    p(data-aos="fade") Otra característica importante es su flexibilidad para cambiar funciones, es decir que un cambio en el sistema controlado no lleva a mayores inversiones en el dispositivo controlador, en algunos casos solo es suficiente con cambiar un código en la programación.

    p.mb-5(data-aos="fade") Ahora bien, si se hace referencia solo a las compuertas lógicas, se tienen, dentro de otras, las siguientes características.

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        p.mb-2 <b>Figura 7.</b> Características        
        figure
          img(src='@/assets/curso/tema4-2-infog.svg', alt='Características')

    Separador

            
    #t_4_3
    .titulo-segundo.color-acento-contenido
      h2 4.3. Funcionamiento

    p.mb-5(data-aos="fade") Los dispositivos electrónicos digitales basan su funcionamiento en la electrónica, puntualmente en el funcionamiento del transistor como un <em>switch</em>, es decir que el transistor puede usarse como apagado o encendido, representando los dos estados de la lógica booleana. Integrando varios dispositivos se puede ir armando los dispositivos que representan la lógica booleana, tal como se representa a continuación.         

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-9
        p.mb-3 <b>Figura 8.</b> Funcionamiento del transistor  
      .row.justify-content-center  
        .col-md-3.mb-4
          .bg-degrade-morado.tarjeta.py-4.mb-2
            h4.mb-0.text-white.text-center Hoja de datos
          figure
            img(src='@/assets/curso/tema4-3-tarj1.svg', alt='Hoja de datos')  
        .col-md-3.mb-4
          .bg-degrade-azul.tarjeta.py-4.mb-2
            h4.mb-0.text-white.text-center Transistor como <em>switch</em>
          figure
            img(src='@/assets/curso/tema4-3-tarj2.svg', alt='Transistor como switch')   
        .col-md-3
          .bg-degrade-verde.tarjeta.py-4.mb-2
            h4.text-white.mb-0.text-center Circuito físico    
          figure
            img(src='@/assets/curso/tema4-3-tarj3.svg', alt='Circuito físico ')   

    p.mb-5(data-aos="fade") Así, por ejemplo, al referirse a la compuerta lógica AND se debe analizar su comportamiento; lo que debe hacer, para luego implementar el circuito. Lo primero es analizar su tabla de verdad, la función “y” dice que dada dos condiciones se deben cumplir ambas para que sea verdad. En la vida real sería algo así como: “Si viene mi hermana y viene mi tía, visitaré a mi mamá” esto quiere decir que para que la salida (visitar a mi mamá) suceda o sea verdad deben cumplirse ambas condiciones (ambas verdaderas), venir mi hermana y venir mi tía, con una sola de ellas, no iré. Esta representación puede hacerse de forma electrónica de la siguiente manera:

    .row.justify-content-center.mb-0
      .col-md-10
        p.mb-3 <b>Figura 9.</b> Representación del ejemplo de entradas y salidas
        .row.borde-botones
          h4.text-center.text-white.bg-botones1.py-1 Representación del ejemplo de entradas y salidas
          .row.justify-content-center
            .col-md-12.py-4
              .row.align-items-end
                .col-md-6.z-999
                  img(src='@/assets/curso/tema4-3-hermanas.svg', alt='Imagen decorativa') 
                .col-md-6.text-white.p-4
                  .bg-degrade-azul.tarjeta.neg--left.mb-4.z-1.py-3
                    p.pad-left ENTRADAS - A. Viene mi hermana. B. Viene mi tía. Pueden tener dos valores posibles: si viene (V). No viene (F).
                    p.mb-0.pad-left SALIDAS - Dos estados posibles: si voy (V). No voy (F). 
                  .row 
                    img(src='@/assets/curso/tema4-3-tabla1.svg' alt='Tabla entradas y salidas', style="width: 300px; margin: 0 auto;")  
              .linea-morada  
    .row.justify-content-center.mb-4
      .col-md-10.bg-gris.borde-botones-sin-top
        .row.justify-content-center
          .col-md-10.py-3
            p.mb-0 Nótese que para esta tabla únicamente se da la salida como verdadera, cuando se cumplen las dos condiciones.

    p.mb-5(data-aos="fade") El circuito electrónico que cumple con esta función lógica sería implementado de tal manera, que dada dos entradas de tensión, aplicadas a una salida, solo habrá tensión en la salida cuando ambas entradas tengan tensión, tal como se evidencia en la figura.

    .row.justify-content-center.mb-5
      .col-md-10
        p.mb-3 <b>Figura 10.</b> Representación de una compuerta lógica y el circuito con transistores para una compuerta AND
        .row.borde-botones
          h4.text-center.text-white.bg-botones1.py-1 Representación de una compuerta lógica y el circuito con transistores para una compuerta AND
          .row.justify-content-center.py-4.px-3
            .col-md-5
              h5.mb-3.text-center Representación de una compuerta lógica
              figure
                img(src='@/assets/curso/tema4-3-infog1.svg', alt='Representación de una compuerta lógica')
            .col-md-7
              h5.mb-3.text-center Circuito con transistores para una compuerta AND
              .row
               .col-md-5
                figure
                  img(src='@/assets/curso/tema4-3-infog2.svg', alt='Circuito con transistores para una compuerta AND')
               .col-md-7
                figure
                  img(src='@/assets/curso/tema4-3-infog3.svg', alt='Circuito con transistores para una compuerta AND')

    .row.justify-content-center.mb-5
      .col-md-10
        p Se acostumbra a usar la siguiente representación para los sistemas digitales:
        ul.lista-ul.px-md-4.px-2
          li.mb-1
            i.lista-ul__vineta
            | “1” para representar el estado verdadero. Bombillo encendido en el circuito.
          li 
            i.lista-ul__vineta
            | “0” para representar el estado Falso. Bombillo apagado en el circuito.


    p.mb-4(data-aos="fade") La tabla de verdad, entonces, para la compuerta AND junto con su símbolo quedaría de la siguiente manera:

    .row.justify-content-center.mb-5
      .col-md-10
        p.mb-2 <b>Figura 11.</b> Compuerta AND y su simbología
        .row.borde-botones.justify-content-around.py-4.px-3
            .col-md-4
              h5.mb-3.text-center Tabla de verdad
              figure
                img(src='@/assets/curso/tema4-3-tabla2.svg', alt='Tabla de verdad')
            .col-md-5
              h5.mb-3.text-center Simbología
              figure
                img(src='@/assets/curso/tema4-3-simbologia.svg', alt='Simbología')    

    p.mb-5(data-aos="fade") También se puede hacer el mismo análisis para la función lógica “O”. Siguiendo el mismo ejemplo sería algo así como: “Si viene mi hermana o viene mi tía, visitaré a mi mamá”. En este caso con solo cumplirse una de las dos condiciones, la salida sería verdadera. La tabla sería de la siguiente manera:

    .row.justify-content-center.mb-5
      .col-md-10
        p.mb-3 <b>Tabla 1.</b> Análisis para la función lógica “O”
        .row.justify-content-center
          .col-md-5
            figure
              img(src='@/assets/curso/tema4-3-tabla3.svg', alt='Análisis para la función lógica “O”')
          .col-md-5
            p Nótese que para este caso con solo cumplirse una de las dos condiciones la salida se activa, para el caso del circuito electrónico, el bombillo se encendería.  

    p La implementación de la lógica booleana en un circuito electrónico dio origen a uno de los fenómenos más representativos forzados por el humano, la evolución tecnológica, ya que ahora se podía construir máquinas que seguían instrucciones y tomaban decisiones, lo que cambió para siempre nuestra forma de vivir.

   
</template>

<script>
export default {
  name: 'Tema4',
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
