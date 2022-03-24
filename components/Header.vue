<template>
  <header class="w-full py-8 bg-slate-900">
    <div class="container flex items-center justify-between">
      <NuxtLink to="/">
        <img src="~/assets/images/logo.svg" alt="greenbank.dev" width="200" height="27">
      </NuxtLink>

      <Button :external="true" url="https://github.com/bengreenbank" text="View my GitHub" />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
