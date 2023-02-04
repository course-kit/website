<template>
  <div
    class="container mx-auto bg-white px-6 sm:px-8 lg:px-16 pt-12 pt-16 lg:pt-24 pb-24"
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
  props: {
    page: Object,
  },
  computed: {
    title() {
      return `CourseKit Blog | ${this.page.title}`
    },
    description() {
      return this.page.description
    },
    url() {
      return `https://coursekit.dev/blog${this.page.path}`
    },
    image() {
      return `https://coursekit.dev${this.page.image}`
    },
  },
  head() {
    const head = {
      title: this.title,
      meta: [
        {
          name: 'description',
          content: this.description,
        },
        {
          property: 'og:description',
          content: this.description,
        },
        {
          name: 'twitter:description',
          content: this.description,
        },
        {
          property: 'og:image',
          content: this.image,
        },
        {
          name: 'twitter:image',
          content: this.image,
        },
        {
          property: 'og:title',
          content: this.title,
        },
        {
          name: 'twitter:title',
          content: this.title,
        },
        { property: 'og:site_name', content: 'CourseKit' },
        { property: 'og:url', content: this.url },
        { property: 'twitter:url', content: this.url },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index,follow' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
    if (this.page.canonical) {
      head.link = [{ rel: 'canonical', href: this.page.canonical }]
    }
    return head
  },
}
</script>
<style>
.prose :not(pre) > code {
  color: #dd4a68;
  background-color: #f5f2f0;
  padding: 0.2em 0.35em;
}
</style>
