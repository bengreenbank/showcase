<template>
  <NuxtLink
    v-if="external === false"
    :to="url"
    :class="classes">
    {{ text }}
  </NuxtLink>

  <a
    v-else
    :href="url"
    :class="classes"
    target="_blank">
    {{ text }}
  </a>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      classes: 'bg-gradient-to-r from-green-400 to-emerald-400 text-slate-800 px-4 py-2.5 rounded-md font-semibold transition-shadow'
    }
  },
  props: {
    external: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: '/'
    },
    text: {
      type: String
    }
  }
}
</script>
