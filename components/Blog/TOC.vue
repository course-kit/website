<template>
  <nav aria-label="Table of contents">
    <p
      class="prose uppercase text-sm font-semibold text-gray-600 tracking-wider mb-6 mt-0"
    >
      Table of contents
    </p>
    <div class="relative">
      <ul class="mt-3 overflow-y-auto">
        <nuxt-link
          v-for="link of toc"
          :key="link.id"
          :to="`#${link.id}`"
          class="block w-full py-2 border-l-2 px-4 truncate hover:border-gray-500 text-gray-500 hover:text-gray-700 transition font-regular"
          :class="
            link.active || link.id === currentlyActiveToc
              ? 'border-blue-300 hover:border-blue-300 bg-blue-50 text-blue-500 hover:text-blue-500'
              : 'border-gray-200'
          "
        >
          <li>{{ link.text }}</li>
        </nuxt-link>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  props: {
    toc: Array,
  },
  data() {
    return {
      currentlyActiveToc: '',
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        threshold: 0,
      },
    }
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')
        if (entry.isIntersecting) {
          this.currentlyActiveToc = id
        }
      })
    }, this.observerOptions)

    // Track all sections that have an `id` applied
    document.querySelectorAll('.nuxt-content h2[id]').forEach((section) => {
      this.observer.observe(section)
    })
  },
  beforeDestroy() {
    this.observer.disconnect()
  },
}
</script>
