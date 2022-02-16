<template>
  <div
    class="container mx-auto bg-white px-6 sm:px-8 lg:px-16 pt-12 lg:pt-16 pb-24"
  >
    <NavBack />
    <article class="mt-8 flex-col flex lg:flex-row lg:space-x-12 xl:space-x-16">
      <aside
        class="flex-shrink-0 w-full lg:w-80 h-full lg:sticky top-24 mb-12 hidden lg:block"
      >
        <div class="space-y-12">
          <TOC :toc="page.toc" />
          <CTA />
        </div>
      </aside>
      <main class="overflow-hidden">
        <header class="mb-12">
          <h1
            class="mt-0 mb-8 font-bold text-3xl lg:text-5xl tracking-tight font-display"
          >
            {{ page.title }}
          </h1>
          <AuthorInfo :date="page.date" />
        </header>
        <div
          class="prose lg:prose-lg max-w-none prose-a:font-bold prose-a:text-blue-400 lg:prose-h2:mb-4 lg:prose-h3:mb-3 lg:prose-code:text-sm"
        >
          <nuxt-content :document="page" />
        </div>
      </main>
    </article>
  </div>
</template>
<script>
import TOC from '../../components/Blog/TOC'
import CTA from '../../components/Blog/CTA'
import NavBack from '../../components/Blog/NavBack'
import AuthorInfo from '../../components/Blog/AuthorInfo'

export default {
  components: { AuthorInfo, NavBack, CTA, TOC },
  async asyncData({ $content, params }) {
    const page = await $content(params.slug).fetch()
    return {
      page,
    }
  },
}
</script>
