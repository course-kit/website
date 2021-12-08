<template>
  <div class="pb-24 container mx-auto max-w-5xl">
    <div class="mt-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
      <Card
        v-for="post in posts"
        :key="post.id"
        :thumb="post.image"
        :path="`/blog/${post.slug}`"
        :title="post.title"
        :description="post.description"
      ></Card>
    </div>
  </div>
</template>
<script>
import Card from "../../components/Blog/Card";
export default {
  components: {Card},
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
