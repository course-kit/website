<template>
  <nav aria-label="Table of contents">
    <p class="prose uppercase text-sm font-semibold text-gray-600 tracking-wider mb-6 mt-3">
      Table of contents
    </p>
    <div class="relative">
      <ul class="mt-3 max-h-[400px] overflow-y-auto">
        <nuxt-link
          v-for="link of toc"
          :key="link.id"
          :to="`#${link.id}`"
          :class="link.active ? 'border-blue-500 bg-blue-100 text-blue-500' : 'border-gray-200'"
          class="block w-full py-2 border-l-2 px-4 truncate hover:font-bold hover:border-gray-500 text-gray-500 hover:text-gray-700 transition font-regular"
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
    toc: Array
  }
}
</script>
