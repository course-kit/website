<template>
  <div class="prose">
    <nuxt-link v-for="post in posts" :key="post.id" :to="`/blog/${post.slug}`">
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
      <nuxt-img
        class="rounded-lg"
        :src="post.image"
        preset="preview"
        width="400"
        height="300"
      />
    </nuxt-link>
  </div>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content()
      .only(['title', 'image', 'tags', 'slug', 'description'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      posts
    }
  },
}
</script>
