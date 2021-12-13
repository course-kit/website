<template>
  <div class="mb-24 container mx-auto bg-white px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
    <header class="mb-12">
      <NavBack />
      <h1 class="my-8 font-bold text-2xl md:text-5xl tracking-tight font-display">
        {{ page.title }}
      </h1>
      <AuthorInfo :date="page.createdAt" />
    </header>
    <article class="lg:flex lg:space-x-12 xl:space-x-16 relative">
      <aside class="hidden lg:block flex-shrink-0 w-80 h-full sticky top-10">
        <div class="pt-3 space-y-12">
          <TOC :toc="page.toc"/>
          <CTA />
        </div>
      </aside>
      <main class="overflow-hidden pt-[61px]">
        <div class="prose lg:prose-lg max-w-none">
          <nuxt-content :document="page"/>
        </div>
      </main>
    </article>
  </div>
</template>
<script>
import TOC from "../../components/Blog/TOC";
import CTA from "../../components/Blog/CTA";
import NavBack from "../../components/Blog/NavBack";
import AuthorInfo from "../../components/Blog/AuthorInfo";
export default {
  components: {AuthorInfo, NavBack, CTA, TOC},
  async asyncData({$content, params}) {
    const page = await $content(params.slug).fetch()
    return {
      page,
    }
  },
}
</script>
