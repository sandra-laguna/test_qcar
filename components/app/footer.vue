<template>
  <footer class="w-full pt-12 pb-6 bg-primary">
    <div
      class="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 text-white"
    >
      <div class="flex flex-col justify-start items-center">
        <img class="h-14" src="@/assets/images/logo_white.svg" alt="Qué Carta" />
        <div class="pt-4">
          <p class="text-center text-white">
            Producto creado por
            <a href="https://theseedsquad.com/" title="Ir al website de The Seed Squad">The<b>Seed</b>Squad</a>
          </p>
        </div>
      </div>
      <div class="flex flex-col items-center md:items-start">
        <h3 class="font-bold uppercase">Navegación</h3>
        <ul class="flex flex-col items-center md:items-start">
          <li class="leading-7"><NuxtLink to="/recursos">Recursos</NuxtLink></li>
          <li class="leading-7"><NuxtLink to="/">Inicio</NuxtLink></li>
          <li class="leading-7"><NuxtLink to="/contacto">Contacto</NuxtLink></li>
          <li class="leading-7"><NuxtLink to="/precios">Precios</NuxtLink></li>
          <li class="leading-7"><NuxtLink to="">¡Crear mi carta!</NuxtLink></li>
          <li class="leading-7"><NuxtLink to="">Inicia sesión</NuxtLink></li>
        </ul>
      </div>
      <div class="flex flex-col items-center md:items-start">
        <h3 class="font-bold uppercase">Aviso Legal</h3>
        <ul class="flex flex-col items-center md:items-start">
          <li class="leading-7"><NuxtLink to="/titularidad">Titularidad y finalidad</NuxtLink></li>
          <li class="leading-7"><NuxtLink to="/politica-de-privacidad">Política de privacidad</NuxtLink></li>
          <li class="leading-7"><NuxtLink to="/terminos-y-condiciones-de-uso">Términos de uso</NuxtLink></li>
          <li class="leading-7"><NuxtLink to="/politica-de-cookies">Política de cookies</NuxtLink></li>
        </ul>
      </div>
      <div class="flex flex-col items-center md:items-start">
        <h3 class="font-bold uppercase">Contacto</h3>
        <ul class="flex flex-col items-center md:items-start">
          <li class="leading-7"
            ><a
              href="mailto:hola@theseedsquad.com"
              title="Contactar vía correo electrónico con The Seed Squad en: hola@theseedsquad.com"
              >hola@quecarta.com</a
            ></li
          >
          <li class="flex flex-row items-center md:justify-start space-x-2 pt-1">
            <a href="https://www.instagram.com/quecarta_es" title="Qué Carta en: instagram.com/quecarta_es">
              <icon-instagram class="w-9 h-9 md:w-6 md:h-6 lg:w-9 lg:h-9" />
            </a>
            <a href="https://twitter.com/quecarta_es" title="Qué Carta en: twitter.com/quecarta_es">
              <icon-twitter class="w-9 h-9 md:w-6 md:h-6 lg:w-9 lg:h-9" />
            </a>
            <a href="https://www.facebook.com/quecartaes" title="Qué Carta en: facebook.com/quecartaes">
              <icon-facebook class="w-9 h-9 md:w-6 md:h-6 lg:w-9 lg:h-9" />
            </a>
            <a href="https://www.linkedin.com/company/quecarta" title="Qué Carta en: linkedin/company/quecarta">
              <icon-linkedin class="w-9 h-9 md:w-6 md:h-6 lg:w-9 lg:h-9" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCSQJwD-MFfeL6asHwVW93PA"
              title="Qué Carta en: youtube.com/channel/UCSQJwD-MFfeL6asHwVW93PA"
            >
              <icon-youtube class="w-9 h-9 md:w-6 md:h-6 lg:w-9 lg:h-9" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full h-1/5 mt-6 text-center">
      <p class="text-center text-white">
        <span class="text-white">&copy;2021 - 2021</span> <span class="font-bold">Qué Carta</span> por
        <a href="https://theseedsquad.com/" title="Ir al website de The Seed Squad">The<b>Seed</b>Squad</a>. Todos los derechos reservados.
      </p>
    </div>
  </footer>
</template>
