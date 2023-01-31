<template>
  <div class="px-8 py-6 prose prose-lg border border-gray-300 rounded-xl">
    <h4 class="border-b-2 pb-2 mb-4 border-red-400">{{ title }}</h4>
    <div>{{ description }}</div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description']
}
</script>
