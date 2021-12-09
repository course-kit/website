<template>
  <nuxt-link class="bg-white rounded-lg overflow-hidden" :to="path">
    <div
      class="bg-cover bg-center h-60 p-4"
      :style="{ 'background-image': `url(${thumb})` }"
    ></div>
    <div class="p-4 py-8 prose prose-xl">
      <h4 class="m-0 p-0">{{ title }}</h4>
      <p class="font-bold text-sm">by Anthony Gore, 15th Dec 2021</p>
      <p class="text-sm">{{ description }}</p>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    thumb: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>
