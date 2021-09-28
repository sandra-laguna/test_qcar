<template>
  <component
    :is="tag"
    class="px-5 py-3 rounded-md font-bold transition-all"
    :class="{
      'bg-primary text-white hover:bg-primary-light': color === 'primary',
      'bg-primary-light text-white hover:bg-primary': color === 'primary-light',
      'bg-secondary text-white hover:bg-secondary': color === 'secondary'
    }"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>


<script>
export default {
  props: {
    tag: {
      type: String,
      default: "button"
    },
    color: {
      type: String,
      default: "primary"
    }
  }
};
</script>
