<template>
  <div class="w-full flex flex-col lg:flex-row bg-white">
    <div
      class="
        w-full
        lg:w-1/2
        lg:py-24
        px-8
        md:px-0
        py-12
        flex flex-col
        justify-center
        items-center
        space-y-10
        text-white text-center
        bg-medium-gray
      "
    >
      <div class="w-full lg:w-3/4 xl:w-1/2 sm:mx-auto flex flex-col space-y-6 items-center">
        <div class="space-y-4">
          <h2 class="text-3xl font-extrabold sm:text-4xl text-primary">Carteles normativos GRATIS covid-19</h2>
          <p class="w-11/12 mx-auto p-4 text-green-200 bg-light-gray bg-opacity-25">
            Recuerda que es obligatorio cumplir con la
            <b>normativa oficial de prevención de contagio ante el covid-19</b>
          </p>
        </div>
        <div class="w-full flex flex-col sm:flex-row sm:flex-wrap justify-center items-center">
          <figure class="object-contain p-2 w-52">
            <img
              class="mx-auto border-2 rounded border-dashed"
              src="@/assets/images/artworks/quecarta-art--protocolo-mascarilla.png"
              alt="QuéCarta cartel normativo sobre uso de la mascarilla"
              title="QuéCarta cartel normativo sobre uso de la mascarilla"
            />
          </figure>
          <figure class="object-contain p-2 w-52">
            <img
              class="mx-auto border-2 rounded border-dashed"
              src="@/assets/images/artworks/quecarta-art--protocolo-distancia.png"
              alt="QuéCarta cartel normativo sobre la distancia de seguridad"
              title="QuéCarta cartel normativo sobre la distancia de seguridad"
            />
          </figure>
          <figure class="object-contain p-2 w-52">
            <img
              class="mx-auto border-2 rounded border-dashed"
              src="@/assets/images/artworks/quecarta-art--protocolo-gel.png"
              alt="QuéCarta cartel normativo sobre el uso de gel desinfectante"
              title="QuéCarta cartel normativo sobre el uso de gel desinfectante"
            />
          </figure>
          <figure class="object-contain p-2 w-52">
            <img
              class="mx-auto border-2 rounded border-dashed"
              src="@/assets/images/artworks/quecarta-art--protocolo-mesa.png"
              alt="QuéCarta cartel normativo sobre la desinfección de las mesas"
              title="QuéCarta cartel normativo sobre la desinfección de las mesas"
            />
          </figure>
        </div>
      </div>
    </div>
    <div class="w-4/5 lg:w-1/2 mx-auto py-12 flex flex-col justify-center items-center space-y-4 bg-white">
      <div class="w-full md:w-3/4 mx-auto space-y-4">
        <h2 class="text-3xl font-extrabold sm:text-4xl text-primary">¿Necesitas carteles?</h2>
        <p class="mt-4 text-2xl sm:mt-3">
          Te enviamos nuestros <b>recursos gratuitos</b> para <b>hostelería</b>, <b>restauración</b> y <b>comercios</b>.
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

        <div class="flex justify-center items-center sm:justify-start">
          <button
            type="submit"
            class="px-5 py-3 rounded-md font-bold transition-all bg-primary text-white hover:bg-primary-light"
            >Enviar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: null,
        email: null
      }
    };
  },
  head() {
    return {
      title: "Carteles normativos GRATIS para hostelería y comercios | QuéCarta",
      meta: [{ hid: "robots", name: "robots", content: "noindex" }]
    };
  },
  methods: {
    submit() {
      const {
        form: { name, email }
      } = this;

      const payload = { name, email };
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
