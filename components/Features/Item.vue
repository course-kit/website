<template>
  <div class="p-16 relative lg:flex lg:gap-16 justify-start mb-8 items-center" :class="{ 'flex-row-reverse' : !item.isLeft, 'bg-white' : !item.isLeft }">
    <div class="relative w-1/2">
      <h3 class="text-3xl font-bold font-display mb-6 leading-12">{{ item.title }}</h3>
      <div class="prose">
        <p class="" v-for="description in item.descriptions" :key="description">{{ description }}</p>
      </div>
      <a v-if="item.link" :href="item.link.url" class="bg-gray-200 text-gray-600 text-sm px-4 py-2 rounded-md mt-4 inline-flex" target="_blank">{{ item.link.text }}</a>
    </div>
    <div class="mt-10 relative lg:mt-0 w-1/2" aria-hidden="true">
      <img class="relative" width="490" :src="item.img" :alt="item.title" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
