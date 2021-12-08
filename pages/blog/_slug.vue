<template>
  <div class="mb-24 py-16 container mx-auto max-w-5xl bg-white px-6 sm:px-8 lg:px-12">
    <article class="prose max-w-none">
      <h1>{{ page.title }}</h1>
      <p class="font-bold">by Anthony Gore, 15th Dec 2021</p>
      <hr>
      <h3>Table of contents</h3>
      <nav class="pb-4">
        <ul class="space-y-2">
          <li v-for="link of page.toc" :key="link.id">
            <nuxt-link class="no-underline" :to="`#${link.id}`">
              {{ link.text }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <nuxt-content :document="page" />
    </article>
  </div>
</template>
<script>
export default {
  async asyncData ({ $content, params }) {
    const page = await $content(params.slug).fetch()
    return {
      page
    }
  }
}
</script>
