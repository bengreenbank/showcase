<template>
  <header class="flex w-full justify-between bg-purple py-10 shadow-lg">
    <nav class="container flex items-center justify-between">
      <img
        src="~/assets/images/logo.svg"
        alt="greenbank.dev"
        width="200"
        height="27"
      />

      <ul class="text-xl text-white font-semibold italic flex gap-6">
        <li v-for="link in links">
          <NuxtLink :class="{'text-pink': link.url === $route.path}" :to="link.url"> {{ link.title }} </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      links: {
        home: {
          title: 'Home',
          url: '/'
        },
        projects: {
          title: 'Projects',
          url: '/projects'
        }
      }
    }
  }
};
</script>
