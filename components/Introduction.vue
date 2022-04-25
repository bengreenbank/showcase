<template>
  <main class="flex flex-grow items-center bg-purple text-white">
    <section class="container">
      <h1 class="mb-8 flex gap-4 text-5xl font-extrabold tracking-wide">
        <u class="underline decoration-pink decoration-8 underline-offset-8">
          Hi there
        </u>

        👋
      </h1>

      <p
        class="mb-6 text-2xl !leading-relaxed tracking-wide underline-offset-4 lg:max-w-4xl"
      >
        I'm Ben, a <u>frontend developer</u> from Suffolk. My key technologies
        are <u>CraftCMS</u>, <u>Twig</u>, <u>Vue</u>, <u>Laravel Mix</u>,
        <u>Sass</u> and <u>TailwindCSS</u>.

        <br class="mb-8" />

        I have a passion for writing <u>clean</u>, <u>performant</u> and
        <u>modular</u> code. I love exploring new technologies, and my tech
        stack is always evolving.

        <br class="mb-8" />

        This site is built using NuxtJS and you can view the code on
        <a
          class="underline"
          href="https://github.com/bengreenbank/showcase"
          target="_blank"
          >GitHub</a
        >!
      </p>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Introduction',
};
</script>

<style scoped></style>
