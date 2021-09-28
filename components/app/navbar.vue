<template>
  <nav class="lg:fixed top-0 inset-x-0 p-4 bg-white shadow-md lg:w-full">
    <div class="lg:max-w-screen-xl flex items-center justify-between flex-wrap mx-auto">
      <NuxtLink to="/"><img class="h-12" src="@/assets/images/logo.svg" alt="logo" /></NuxtLink>

      <div class="flex md:hidden lg:hidden">
        <!-- Mobile menu button -->
        <button @click="toggle" class="p-2">
          <svg :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <div :class="[isOpen ? '' : 'hidden', 'md:hidden lg:hidden w-full']">
        <div class="font-bold">
          <NuxtLink class="block mt-4 hover:text-primary mr-4" to="/">Inicio</NuxtLink>
          <NuxtLink class="block mt-2 hover:text-primary mr-4" to="/contacto">Contacto</NuxtLink>
          <NuxtLink class="block my-2 hover:text-primary mr-4" to="/precios">Precios</NuxtLink>
          <v-button @click="navigate" color="primary">¡Crear mi carta!</v-button>
          <NuxtLink class="block mt-2 mb-4 mr-4 text-primary" to="#">Iniciar sesión</NuxtLink>
        </div>
      </div>

      <div class="hidden w-auto md:block lg:block text-sm lg:text-base">
        <div class="font-bold">
          <NuxtLink class="mr-4 inline-block hover:text-primary" to="/">Inicio</NuxtLink>
          <NuxtLink class="mr-4 inline-block hover:text-primary" to="/contacto">Contacto</NuxtLink>
          <NuxtLink class="mr-4 inline-block hover:text-primary" to="/precios">Precios</NuxtLink>
          <v-button @click="navigate" color="primary">¡Crear mi carta!</v-button>
          <NuxtLink class="ml-4 inline-block text-primary" to="#">Iniciar sesión</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    navigate() {
      console.log("Navigate");
    }
  }
};
</script>
