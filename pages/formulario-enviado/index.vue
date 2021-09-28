<template>
  <div class="bg-white p-12 w-full flex items-center justify-center flex-wrap mx-auto lg:h-screen">
    <div class="flex items-center justify-center flex-wrap text-center">
      <icon-check-sendform class="w-2/3 h-2/3 md:w-1/6 md:w-1/6 sm:w-2/6" />
      <h1 class="mt-8 mb-4 text-primary text-5xl font-extrabold w-full text-center"
        >¡Gracias por enviar tu solicitud!</h1
      >
      <p class="text-3xl">En breve nos pondremos en contacto contigo.</p>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "Gracias por contactar con nosotros | QuéCarta",
      meta: [{ hid: "robots", name: "robots", content: "noindex" }]
    };
  }
};
</script>
