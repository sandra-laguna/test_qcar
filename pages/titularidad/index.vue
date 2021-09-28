<template>
  <div class="py-5 px-10 bg-body lg:w-full">
    <div class="lg:max-w-screen-lg flex flex-col mx-auto">
      <h1 class="text-primary text-4xl font-extrabold w-full text-center">Titularidad</h1>

      <p class="mt-8 mb-6">
        <b>QuéCarta</b> es un producto digital ideado, promovido y desarrollado por
        <a class="font-bold underline" href="https://theseedsquad.com/" title="Ir a la website de The Seed Squad"
          >The Seed Squad
        </a>
        (a partir de ahora "el Titular") que a su vez son los responsables del sitio Web. En cumplimiento del
        <i
          >artículo 10 de la Ley 34 / 2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio
          Electrónico</i
        >, el Titular expone sus datos identificativos:
      </p>
      <ul class="ml-6 mb-6">
        <li><span class="font-bold text-sm">Titular:</span> " THE SEED SQUAD, S.L. "</li>
        <li><span class="font-bold text-sm">CIF:</span> B01683549</li>
        <li><span class="font-bold text-sm">Domicilio:</span> Calle del Petróleo, nº15, portal 1 2ºC, 28041 Madrid </li>
        <li>
          <span class="font-bold text-sm">Correo electrónico:</span>
          <a
            class="font-bold underline"
            href="mailto:hola@theseedsquad.com"
            title="Contactar vía correo electrónico con The Seed Squad en: hola@theseedsquad.com"
            >hola@theseedsquad.com
          </a>
        </li>
        <li>
          <span class="font-bold text-sm">Sitio web:</span>
          <a class="font-bold underline" href="https://theseedsquad.com/" title="Ir a la website de The Seed Squad"
            >theseedsquad.com
          </a>
        </li>
      </ul>
      <h2 class="text-primary text-4xl font-extrabold w-full text-center">Finalidad</h2>
      <h2 class="mb-6 text-2xl font-bold">¿Para qué?</h2>
      <p class="mb-6">
        <b>QuéCarta</b> nace de la mano de
        <a class="font-bold underline" href="https://theseedsquad.com/" title="Ir a la website de The Seed Squad">
          The Seed Squad
        </a>
        como <b> en apoyo al sector de la hostelería</b> en estos momentos tan difíciles de pandemias, ERTES, y bajada
        de la ocupación y el consumo hostelero en general. Sector con el que nos sentimos particularmente empáticos
        puesto que es la principal vía de sustento de muchas familias en España. Para facilitar un poco más la
        transformación digital del sector horeca, hemos desarrollado una
        <b>plataforma gratuita para la creación de cartas y/o menús digitales</b> donde el dueño del restaurante puede
        introducir todos los productos y platos ofrecidos en su establecimiento para que estén disponibles online. Estos
        pueden ser consultados por sus clientes a través de un sitio Web al que se accede mediante el escaneo de un
        código QR o un enlace (URL) abierto en un navegador.
      </p>
      <h3 class="mb-6 text-2xl font-bold">¿Por qué?</h3>
      <p class="mb-6"
        >Con el uso de las cartas digitales se <b>agiliza el servicio de los camareros</b>, se
        <b>la rotación de las mesas</b> (algo fundamental debido a las restricciones de aforo), se potencia la
        visibilidad online de tu restaurante <b>atrayendo nuevos clientes</b>, se facilita el
        <b>control de productos</b> (ocultándolos cuando se agote algún plato en concreto, por ejemplo), se
        <b>ahorra costes</b> en impresión de cartas físicas y <b>no perderá tiempo</b> en desinfectarlas.
      </p>
      <h3 class="mb-6 text-2xl font-bold">¿Cómo?</h3>
      <p class="mb-6">
        Nos esforzamos en que la herramienta sea <b>muy fácil de usar</b>, trabajada con dueños de restaurantes que nos
        brindaron opiniones y consejos para mejorarla y adaptarla a la realidad cotidiana de su profesión. Ahora
        queremos ofrecerla a todos los interesados.
      </p>
      <p class="mb-6">
        Mediante un sencillo proceso de registro, el usuario creará una cuenta única personal desde la cual podrá
        acceder a un panel de gestión en el que podrá crear restaurantes y sus cartas asociadas. Dentro de cada carta
        podrá introducir tantos productos (platos) y secciones (agrupación de productos) como necesite pudiendo utilizar
        <b>marcado especial</b> (destacados, nuevos, agotados, picante, dietas...), poner <b>varios precios</b>, listar
        <b>alérgenos</b> e introducir <b>varios idiomas</b> para que la carta "hable" en distintas lenguas.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Titularidad y finalidad | Qué Carta",
      link: [{ rel: "canonical", hid: "canonical", href: `${this.$config.baseUrl}/contacto` }]
    };
  }
};
</script>
