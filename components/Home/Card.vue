<template>
  <div class="p-8 prose prose-lg border border-gray-300 rounded-xl">
    <h4 :class="[border]" class="border-b-2 pb-2 mb-4">{{ title }}</h4>
    <div>{{ description }}</div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'highlight'],
  computed: {
    border() {
      return `border-${this.highlight}-400`
    },
  },
}
</script>
