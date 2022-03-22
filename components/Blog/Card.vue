<template>
  <nuxt-link class="bg-white rounded-md shadow-md overflow-hidden" :to="path">
    <div
      class="bg-cover bg-center h-48 p-4"
      :style="{ 'background-image': `url(${thumb})` }"
    ></div>
    <div class="p-4 py-8 flex flex-col content-between justify-between h-64">
      <div class="prose mb-8">
        <h4 class="mb-2 p-0">{{ title }}</h4>
        <p class="m-0 p-0">{{ description }}</p>
      </div>
      <AuthorInfo :is-large="false" :date="date" />
    </div>
  </nuxt-link>
</template>
<script>
import AuthorInfo from './AuthorInfo'
export default {
  components: { AuthorInfo },
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
    date: {
      type: String,
      required: true,
    },
  },
}
</script>
