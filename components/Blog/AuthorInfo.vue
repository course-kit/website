<template>
  <div
    class="flex flex-col md:flex-row justify-between items-start md:items-center w-full"
  >
    <div class="flex items-center">
      <div
        class="flex items-center justify-center rounded-full overflow-hidden relative bg-gray-200"
        :class="isLarge ? 'w-12 h-12' : 'w-10 h-10'"
      >
        <img alt="Anthony Gore" src="/anthonygore.jpg" />
      </div>
      <div class="ml-4" :class="isLarge ? '' : 'text-sm'">
        <p class="font-bold mb-1">Anthony Gore</p>
        <p class="text-gray-500">
          <span v-if="isLarge">Published&nbsp;</span>
          <span>{{ date.split('T')[0] }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    date: String,
    isLarge: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
