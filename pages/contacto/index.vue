<template>
  <div class="w-full">
    <section class="w-full flex flex-col md:flex-row bg-white">
      <div
        class="
          w-full
          md:w-1/2
          py-12
          flex flex-col
          justify-center
          items-center
          space-y-10
          text-white text-center
          bg-medium-gray
        "
      >
        <div class="w-1/2 mx-auto flex flex-col space-y-6 items-center">
          <div class="space-y-4">
            <h2 class="text-3xl font-extrabold sm:text-4xl text-primary">¿Dudas? ¡Escríbenos!</h2>
            <p class="mt-4 text-lg sm:mt-3"
              >Envíanos un mensaje mediante el formulario de al lado, o un correo electrónico. Te responderemos lo más
              rápido que podamos.
            </p>
          </div>
          <div class="space-y-4">
            <h3 class="font-light text-light-gray uppercase">Correo electrónico</h3>
            <a
              class="font-bold text-2xl"
              href="mailto:hola@quecarta.com"
              title="Contactar vía correo electrónico con QuéCarta en: hola@quecarta.com"
              >hola@quecarta.com</a
            >
          </div>
          <div class="w-full">
            <img
              height="495"
              src="@/assets/images/artworks/quecarta-art--contact-email.svg"
              alt="Contactar vía correo electrónico con QuéCarta en: hola@quecarta.com"
              title="Contactar vía correo electrónico con QuéCarta en: hola@quecarta.com"
            />
          </div>
        </div>
      </div>
      <div class="w-4/5 md:w-1/2 mx-auto py-12 flex flex-col justify-start items-center space-y-4 bg-white">
        <div class="w-full md:w-3/4 mx-auto space-y-4">
          <h2 class="text-3xl font-extrabold sm:text-4xl text-primary">Contacto</h2>
          <p class="mt-4 text-lg sm:mt-3"
            >Dinos qué necesitas y nosotros te contestaremos en la mayor brevedad posible, estamos aquí para ayudarte.
          </p>
        </div>
        <form @submit.prevent="submit" class="w-full md:w-3/4 mx-auto space-y-4">
          <div>
            <label for="first-name" class="block text-sm font-medium text-gray-700">¿Cómo te llamas?</label>
            <div class="mt-1">
              <input
                v-model="form.name"
                type="text"
                name="first-name"
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
            <label for="email" class="block text-sm font-medium text-gray-700"
              >¿Cuál es tu dirección de correo electrónico?</label
            >
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
              ></textarea>
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
    <section class="max-w-md mx-auto py-24 px-4 divide-y-2 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8">
      <h2 class="text-3xl font-extrabold text-primary"> Frequently asked questions </h2>
      <div class="mt-6 pt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
          <div>
            <dt class="text-lg font-medium"> What's the best thing about Switzerland? </dt>
            <dd class="mt-2">
              I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              cupiditate laboriosam fugiat.
            </dd>
          </div>

          <div>
            <dt class="text-lg font-medium"> Why do you never see elephants hiding in trees? </dt>
            <dd class="mt-2">
              Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate
              laboriosam fugiat.
            </dd>
          </div>

          <div>
            <dt class="text-lg font-medium"> How do you make holy water? </dt>
            <dd class="mt-2">
              You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate
              laboriosam fugiat.
            </dd>
          </div>

          <div>
            <dt class="text-lg font-medium"> Why can't you hear a pterodactyl go to the bathroom? </dt>
            <dd class="mt-2">
              Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate
              laboriosam fugiat.
            </dd>
          </div>

          <div>
            <dt class="text-lg font-medium"> What do you call someone with no body and no nose? </dt>
            <dd class="mt-2">
              Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
            </dd>
          </div>

          <div>
            <dt class="text-lg font-medium"> Why did the invisible man turn down the job offer? </dt>
            <dd class="mt-2">
              He couldn&#039;t see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              cupiditate laboriosam fugiat.
            </dd>
          </div>
        </dl>
      </div>
    </section>
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
      title: "Contacta con nosotros | QuéCarta",
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
