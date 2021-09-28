<template>
  <div class="bg-body py-6 md:py-12 lg:pb-0">
    <div class="max-w-4xl mx-auto text-center">
      <h4 class="uppercase">Sin trampa ni cartón</h4>
      <h1 class="text-primary text-4xl my-2 font-extrabold lg:text-6xl">Servicio gratuito de por vida</h1>
      <p class="mt-3 text-base md:text-xl lg:mx-0">
        Crea ahora tu cuenta y crea tantas cartas y productos como necesites
        <span class="text-primary font-bold"> sin ningun limite ni restricción</span>.
      </p>
    </div>

    <div class="text-lg lg:w-full">
      <div class="bg-body lg:w-3/5 mx-auto">
        <div class="p-6 pt-0 flex flex-col items-center 2xl:flex-row lg:pt-6">
          <img
            class="w-full mx-auto p-6 h-full lg:w-2/3 lg:mr-10"
            src="@/assets/images/artworks/quecarta-art--planfree.svg"
            alt="Servicio gratuito de cartas QR de por vida"
          />
          <ul class="p-4 rounded-lg lg:p-12 lg:mx-auto">
            <li>
              <a href="#" class="flex p-3 pl-3">
                <img class="w-6 h-full" src="@/assets/images/check.svg" />
                <span class="ml-2">Restaurantes ilimitados.</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex p-3 pl-3">
                <img class="w-6 h-full" src="@/assets/images/check.svg" />
                <span class="ml-2">Cartas ilimitadas.</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex p-3 pl-3">
                <img class="w-6 h-full" src="@/assets/images/check.svg" />
                <span class="ml-2">Productos ilimitados.</span>
              </a>
            </li>

            <li>
              <a href="#" class="flex p-3 pl-3">
                <img class="w-6 h-full" src="@/assets/images/check.svg" />
                <span class="ml-2">Personaliza: imagen, marcado, dietas, alérgenos...</span>
              </a>
            </li>

            <li>
              <a href="#" class="flex p-3 pl-3">
                <img class="w-6 h-full" src="@/assets/images/check.svg" />
                <span class="ml-2">Soporte por chat y correo electrónico.</span>
              </a>
            </li>

            <li>
              <a href="#" class="w-fill flex p-3 pl-3">
                <img class="w-6 h-full" src="@/assets/images/check.svg" />
                <span class="ml-2">Hasta 15 idiomas disponibles.</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="py-4 text-center">
          <!-- <v-button @click="navigate" color="primary">¡Crear mi carta!</v-button> -->
        </div>
      </div>
    </div>
    <!--¿Necesitas algo más?-->
    <div clas="bg-body py-6 md:py-12">
      <div class="pt-8 max-w-4xl mx-auto text-center lg:pt-20">
        <h4 class="uppercase">Para los más exigentes </h4>
        <h1 class="text-primary text-4xl my-2 font-extrabold lg:text-6xl">¿Necesitas algo más?</h1>
        <p class="mt-3 px-4 text-base md:text-xl lg:mx-0">
          Si necesitas alguna funcionalidad más,
          <span class="text-primary font-bold"> ponte en contacto con nosotros</span>.
        </p>
      </div>

      <section class="bg-white text-center mt-8 mx-auto flex flex-col items-center lg:flex-row lg:px-0">
        <div
          class="
            bg-medium-gray
            pb-10
            px-14
            text-white
            w-full
            lg:grid lg:grid-cols-3
            lg:gap-6
            lg:w-3/6
            lg:mx-auto
            lg:py-20
          "
        >
          <div class="flex flex-col justify-center items-center">
            <img
              class="mt-10 w-2/4 mx-auto lg:w-36 lg:mt-0"
              src="@/assets/images/artworks/quecarta-art--features-create.svg"
            />
            <h4 class="font-extrabold text-2xl mt-6 lg:text-xl">Digitalización de la carta</h4>
          </div>
          <div class="flex flex-col justify-center items-center">
            <img
              class="mt-10 w-2/4 mx-auto lg:w-36 lg:mt-0"
              src="@/assets/images/artworks/quecarta-art--features-socialmedia.svg"
            />
            <h4 class="font-extrabold text-2xl mt-6 lg:text-xl">Fotografía de platos</h4>
          </div>
          <div class="flex flex-col justify-center items-center">
            <img
              class="mt-10 w-2/4 mx-auto lg:w-36 lg:mt-0"
              src="@/assets/images/artworks/quecarta-art--features-web.svg"
            />
            <h4 class="font-extrabold text-2xl mt-6 lg:text-xl">Página web</h4>
          </div>
          <div class="flex flex-col justify-center items-center">
            <img
              class="mt-10 w-2/4 mx-auto lg:w-36"
              src="@/assets/images/artworks/quecarta-art--features-marketing.svg"
            />
            <h4 class="font-extrabold text-2xl mt-6 lg:text-xl">Promoción y marketing digital</h4>
          </div>
          <div class="flex flex-col justify-center items-center">
            <img class="mt-10 w-2/4 mx-auto lg:w-36" src="@/assets/images/artworks/quecarta-art--features-lang.svg" />
            <h4 class="font-extrabold text-2xl mt-6 lg:text-xl">Traducción de carta</h4>
          </div>
          <div class="flex flex-col justify-center items-center">
            <img class="mt-10 w-2/4 mx-auto lg:w-36" src="@/assets/images/artworks/quecarta-art--features-design.svg" />
            <h4 class="font-extrabold text-2xl mt-6 lg:text-xl">Diseño de cartelería</h4>
          </div>
        </div>
        <!--Formulario-->
        <div class="bg-white flex flex-col w-full text-left px-8 lg:w-1/2 lg:px-0">
          <div class="w-full md:w-3/4 mx-auto space-y-4">
            <h2 class="text-3xl mt-10 font-extrabold sm:text-4xl text-primary lg:mt-0">Contacto</h2>
            <p class="mt-4 text-lg sm:mt-3"
              >Dinos qué necesitas y nosotros te contestaremos en la mayor brevedad posible, estamos aquí para ayudarte.
            </p>
          </div>
          <form @submit.prevent="submit" class="w-full mt-8 md:w-3/4 mx-auto space-y-4">
            <div>
              <label for="first-name" class="block text-sm font-medium text-gray-700">¿Cómo te llamas?</label>
              <div class="mt-1">
                <input
                  v-model="form.name"
                  type="text"
                  id="first-name"
                  autocomplete="given-name"
                  class="
                    block
                    w-full
                    shadow-sm
                    sm:text-sm
                    focus:ring-medium-gray
                    focus:border-medium-gray
                    border-gray-300
                    rounded-md
                  "
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-medium text-gray-700">
                ¿Cuál es tu dirección de correo electrónico?
              </label>
              <div class="mt-1">
                <input
                  v-model="form.email"
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  class="
                    block
                    w-full
                    shadow-sm
                    sm:text-sm
                    focus:ring-medium-gray
                    focus:border-medium-gray
                    border-gray-300
                    rounded-md
                  "
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label for="how-can-we-help" class="block text-sm font-medium text-gray-700">¿Qué necesitas?</label>
                <span id="how-can-we-help-description" class="text-sm text-gray-500">Max. 500 caracteres</span>
              </div>
              <div class="mt-1">
                <textarea
                  v-model="form.message"
                  id="how-can-we-help"
                  name="how-can-we-help"
                  aria-describedby="how-can-we-help-description"
                  rows="4"
                  class="
                    block
                    w-full
                    shadow-sm
                    sm:text-sm
                    focus:ring-medium-gray
                    focus:border-medium-gray
                    border border-gray-300
                    rounded-md
                  "
                >
                </textarea>
              </div>
            </div>
            <div class="flex justify-center items-center sm:justify-start">
              <button
                type="submit"
                class="px-5 py-3 rounded-md font-bold transition-all bg-primary text-white hover:bg-primary-light"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: null,
        email: null,
        message: null
      }
    };
  },
  head() {
    return {
      title: "Precios | QuéCarta",
      meta: [{ hid: "robots", name: "robots", content: "noindex" }]
    };
  },
  methods: {
    submit() {
      const {
        form: { name, email, message }
      } = this;

      const payload = { name, email, message };
      this.$axios
        .post("webhook/dbe72344-5544-402b-b97a-7a606beae403", payload)
        .then(({ data }) => {
          console.log("Ok", data);
          this.$router.push("/formulario-enviado");
        })
        .catch((error) => {
          console.log("KO", error);
        });
    }
  }
};
</script>
