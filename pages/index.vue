<template>
  <!-- Contenedor principal -->
  <div class="flex flex-col">
    <!-- Intro -->
    <main class="p-5 bg-body lg:w-full">
      <div class="lg:max-w-screen-xl flex items-center flex-wrap mx-auto">
        <div class="sm:text-center sm:w-full lg:text-left lg:w-2/4">
          <h1 class="text-5xl font-extrabold">
            ¡Aumenta los ingresos de tu
            <span class="text-primary"> restaurante!</span>
          </h1>
          <p class="mt-3 text-base md:text-xl lg:mx-0 lg:w-2/3">
            Optimiza tu negocio creando de forma <span class="text-primary font-bold"> sencilla y gratis </span> tu
            carta digital con código QR.
          </p>
          <div class="mt-5 sm:flex sm:justify-center lg:justify-start">
            <div>
              <a
                href="#"
                class="
                  w-full
                  flex
                  items-center
                  justify-center
                  px-8
                  py-3
                  text-xl
                  rounded-md
                  text-white
                  bg-primary
                  hover:bg-primary-light
                  font-extrabold
                  md:py-4
                  md:px-10
                "
              >
                ¡Crear mi carta!
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                class="
                  w-full
                  flex
                  items-center
                  justify-center
                  px-8
                  py-3
                  text-xl text-primary
                  font-extrabold
                  rounded-md
                  border border-primary
                  md:py-4
                  md:px-10
                "
              >
                Ver demostración
              </a>
            </div>
          </div>
        </div>

        <div class="lg:w-2/4 flex w-full justify-center">
          <img
            class="md:h-96 lg:h-full p-8"
            src="@/assets/images/artworks/quecarta-art--mobile.svg"
            alt="¿Quieres tu carta digital con código QR gratis?"
            title="¿Quieres tu carta digital con código QR gratis?"
            width="548"
            height="641"
          />
        </div>
      </div>
    </main>

    <!-- Eslogan-->
    <div class="w-full text-center bg-medium-gray flex items-center justify-center h-auto p-8 lg:h-44">
      <h1 class="text-white text-lg font-bold lg:text-3xl lg:w-2/4"
        >Aumenta el número de comensales y la eficiencia de tu equipo. <br />QuéCarta es fácil para tí y más fácil aún
        para tus clientes.
      </h1>
    </div>

    <!-- Beneficios -->
    <div class="flex flex-col text-center items-center text-lg px-4 bg-white pt-10 pb-20 lg:pb-40 lg:pt-24">
      <div class="mt-4 lg:my-8">
        <h4 class="uppercase py-2">¡Digitalízate!</h4>
        <h1 class="text-primary text-5xl mb-2 font-extrabold lg:text-6xl">Beneficios inmediatos</h1>
        <span class="text-2xl">Empezar es fácil, gratis y sin compromiso de permanencia.</span>
      </div>
      <div class="flex flex-col lg:flex-row justify-between space-y-6 mt-16 md:space-y-0 lg:w-2/4">
        <div class="mt-4 flex flex-col items-center">
          <h4 class="uppercase text-primary font-semibold text-2xl">Agiliza</h4>
          <span class="my-4">Reduciendo los tiempos de servicio</span>
          <img
            alt="Agiliza la rotación de las mesas de tu restaurante con QuéCarta"
            title="Agiliza la rotación de las mesas de tu restaurante con QuéCarta"
            class="h-32"
            src="@/assets/images/artworks/quecarta-art--table.svg"
            width="250"
            height="128"
          />
        </div>
        <div class="mt-4 flex flex-col items-center">
          <h4 class="uppercase text-primary mt-4 font-semibold text-2xl">Aumenta</h4>
          <span class="my-4">La visibilidad online</span>
          <img
            alt="Aumenta la visibilidad online de tu restaurante con tu carta menu digital"
            title="Aumenta la visibilidad online de tu restaurante con tu carta menu digital"
            class="h-32"
            src="@/assets/images/artworks/quecarta-art--online.svg"
            width="250"
            height="128"
          />
        </div>
        <div class="mt-4 flex flex-col items-center">
          <h4 class="uppercase text-primary mt-4 font-semibold text-2xl">Ahorra</h4>
          <span class="my-4">Costes y tiempo</span>
          <img
            alt="Ahorra costes de impresión y tiempo de limpieza con QuéCarta"
            title="Ahorra costes de impresión y tiempo de limpieza con QuéCarta"
            class="h-32"
            src="@/assets/images/artworks/quecarta-art--nocost.svg"
            width="250"
            height="128"
          />
        </div>
      </div>
    </div>

    <!-- Eslogan-->
    <div class="w-full text-center bg-medium-gray flex items-center justify-center h-auto p-8 lg:h-44">
      <h1 class="text-white text-lg font-bold lg:text-3xl lg:w-2/4"
        >¿Cómo una carta digital puede ayudarte a vender más?<br />
        Te contamos en detalle
      </h1>
    </div>

    <!-- Idiomas -->

    <div class="flex items-center justify-center mx-auto flex-col lg:w-9/12 lg:flex-row p-8 lg:py-28">
      <div class="h-full">
        <img
          alt="15 idiomas disponibles para que tu carta digital hable el mismo idioma que su cliente"
          title="15 idiomas disponibles para que tu carta digital hable el mismo idioma que su cliente"
          class="lg:pr-10"
          src="@/assets/images/artworks/quecarta-art--languages.svg"
          width="660"
          height="465"
        />
      </div>
      <div class="mt-4 lg:w-2/4 lg:pl-14">
        <h4 class="uppercase py-2">Multi-lenguaje</h4>
        <h1 class="text-primary text-5xl mb-2 font-extrabold">Todos te entenderán</h1>
        <p class="text-2xl py-4"
          >Con <span class="text-primary font-bold">15 idiomas</span> (también catalán, gallego y euskera) predefinidos
          para que tu carta digital hable el mismo idioma que tu cliente. Aumentamos los idiomas disponibles mes a mes.
        </p>
      </div>
    </div>

    <!-- Clientes -->

    <div
      class="
        flex
        items-center
        justify-center
        mx-auto
        flex-col-reverse
        p-8
        lg:w-full
        lg:bg-white
        lg:flex-row
        lg:px-36
        lg:py-28
      "
    >
      <div class="mt-4 lg:w-2/4 lg:pr-20">
        <h4 class="uppercase py-2">Sin complicaciones</h4>
        <h1 class="text-primary text-5xl mb-2 font-extrabold">Fácil para tus clientes</h1>
        <p class="text-2xl py-4">
          Tus clientes no necesitarán descargar ninguna App para acceder a tu carta, menú o catálogo.
          <span class="text-primary font-bold">Sólo necesita escanear con su móvil el código QR</span> y accederá
          directamente a través del navegador.</p
        >
      </div>
      <div class="h-full">
        <img
          alt="QuéCarta es fácil de usar para el cliente de tu restaurante"
          title="QuéCarta es fácil de usar para el cliente de tu restaurante"
          class="lg:pr-10"
          src="@/assets/images/artworks/quecarta-art--features.svg"
          width="660"
          height="465"
        />
      </div>
    </div>

    <!-- Restaurante -->

    <div class="flex items-center justify-center mx-auto flex-col lg:w-9/12 lg:flex-row px-8 pb-8 lg:py-28">
      <div class="h-full">
        <img
          alt="QuéCarta es fácil de usar para el restaurante"
          title="QuéCarta es fácil de usar para el restaurante"
          class="lg:pr-10"
          src="@/assets/images/artworks/quecarta-art--ease.svg"
          width="660"
          height="465"
        />
      </div>
      <div class="mt-4 lg:w-2/4 lg:pl-14">
        <h4 class="uppercase py-2">En serio, sin complicaciones</h4>
        <h1 class="text-primary text-5xl mb-2 font-extrabold">Fácil para ti</h1>
        <p class="text-2xl py-4"
          >Crea tus productos como tapas, platos, postres, bebidas... Y todos con sus
          <span class="text-primary font-bold"
            >precios, imágenes, descripciones, marcado según disponibilidad, listado de alérgenos</span
          >
          (para cumplir con la Normativa 1169/2011 sobre alérgenos) y mucho más...
        </p>
      </div>
    </div>

    <!-- Autogestionable -->
    <div
      class="
        flex
        items-center
        justify-center
        mx-auto
        flex-col-reverse
        p-8
        lg:w-full
        lg:bg-white
        lg:flex-row
        lg:px-36
        lg:py-28
      "
    >
      <div class="mt-4 lg:w-2/4 lg:pr-20">
        <h4 class="uppercase py-2">Flexible y</h4>
        <h1 class="text-primary text-4xl mb-2 font-extrabold">Autogestionable</h1>
        <p class="text-2xl py-4">
          Diseñado para usuarios no técnicos, cambia tus precios y platos
          <span class="text-primary font-bold"> cuando quieras sin depender de nadie </span>ni tener costes extras.
          Actualizable en cualquier momento y desde cualquier lugar ya que es multidispositivo (móvil, tablet,
          portátil...).
        </p>
      </div>
      <div class="h-full">
        <img
          alt="La mejor tecnología con una experiencia impecable y diseño adaptable"
          title="La mejor tecnología con una experiencia impecable y diseño adaptable"
          class="lg:pr-10"
          src="@/assets/images/artworks/quecarta-art--updated.svg"
          width="660"
          height="465"
        />
      </div>
    </div>

    <!-- Reduce tus costes -->

    <div class="flex items-center justify-center mx-auto flex-col lg:w-9/12 lg:flex-row p-8 lg:py-28">
      <div class="h-full">
        <img
          alt="Ahorra dinero en impresión de cartas físicas con nuestra carta digital para restaurantes"
          title="Ahorra dinero en impresión de cartas físicas con nuestra carta digital para restaurantes"
          class="lg:pr-10"
          src="@/assets/images/artworks/quecarta-art--planfree.svg"
          width="660"
          height="495"
        />
      </div>
      <div class="mt-4 lg:w-2/4 lg:pl-14">
        <h4 class="uppercase py-2">Optimiza tu negocio</h4>
        <h1 class="text-primary text-5xl mb-2 font-extrabold">Reduce tus costes</h1>
        <p class="text-2xl py-4"
          >Reduce el tiempo de limpieza y desinfección eliminando las cartas tradicionales,
          <span class="text-primary font-bold">ahorrando dinero</span> en impresión con nuestros planes de carta digital
          para restaurantes.
        </p>
      </div>
    </div>

    <!-- ¿Suena bien? -->
    <div class="flex flex-col text-center items-center text-lg px-4 bg-white pt-14">
      <div class="mt-4">
        <h4 class="uppercase">Último paso</h4>
        <h1 class="text-primary text-5xl my-2 font-extrabold lg:text-6xl">¿Suena bien?</h1>
        <span class="text-2xl"> Puedes hacerlo de forma sencilla y gratis en solo 3 pasos. </span>
      </div>
      <div class="flex flex-col lg:flex-row justify-between space-y-6 mt-8 md:space-y-0 lg:w-9/12">
        <div class="flex flex-col items-center">
          <h4 class="uppercase text-primary mt-4 font-semibold text-2xl">Regístrate</h4>
          <span class="my-2"> Crea tu cuenta GRATIS y rápido. </span>
          <img
            alt="Crea tu cuenta gratis para siempre"
            title="Crea tu cuenta gratis para siempre"
            class="w-96 pt-14"
            src="@/assets/images/artworks/quecarta-art--free.svg"
            width="384"
            height="440"
          />
        </div>
        <div class="mt-4 flex flex-col items-center">
          <h4 class="uppercase text-primary mt-4 font-semibold text-2xl">Publica</h4>
          <span class="my-2"> Añade todos tus platos con alérgenos, dietas... </span>
          <img
            alt="Añade todos tus platos con los alérgenos"
            title="Añade todos tus platos con los alérgenos"
            class="w-96 pt-14"
            src="@/assets/images/artworks/quecarta-art--create.svg"
            width="384"
            height="440"
          />
        </div>
        <div class="mt-4 flex flex-col items-center">
          <h4 class="uppercase text-primary mt-4 font-semibold text-2xl">Difunde</h4>
          <span class="my-2"> Imprime tu código QR y comparte tu carta. </span>
          <img
            alt="Imprime tu código QR y y comparte tu carta"
            title="Imprime tu código QR y y comparte tu carta"
            class="w-96 pt-14"
            src="@/assets/images/artworks/quecarta-art--printqr.svg"
            width="384"
            height="440"
          />
        </div>
      </div>
    </div>

    <!-- Empieza ya -->

    <div class="w-full py-1 bg-white">
      <a
        href="#"
        class="
          bg-primary
          max-w-sm
          px-14
          py-6
          my-20
          mx-8
          flex flex-col
          items-center
          text-center
          md:flex-row
          justify-center
          rounded-md
          hover:bg-primary-light
          sm:mx-auto
          lg:h-28
          lg:shadow-md
          lg:border lg:border-gray-200
        "
      >
        <p href="#" class="text-3xl text-white">¡Empieza <span class="font-bold">GRATIS</span>!</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "¡Crea y comparte tu carta digital con código QR!",
      link: [{ rel: "canonical", hid: "canonical", href: `${this.$config.baseUrl}/` }]
    };
  }
};
</script>
