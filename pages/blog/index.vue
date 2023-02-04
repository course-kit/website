<template>
  <div
    class="pt-24 lg:pt-32 pb-24 container mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-12 lg:py-16"
  >
    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
      <Card
        v-for="post in posts"
        :key="post.id"
        :thumb="post.image"
        :path="`/blog/${post.slug}`"
        :title="post.title"
        :description="post.description"
        :date="post.date"
      ></Card>
    </div>
  </div>
</template>
<script>
import Card from '../../components/Blog/Card'
export default {
  components: { Card },
  async asyncData({ $content }) {
    const posts = await $content()
      .only(['title', 'image', 'tags', 'slug', 'description', 'date'])
      .where({ tags: { $contains: 'blog' } })
      .sortBy('date', 'desc')
      .fetch()
    return {
      posts,
    }
  },
}
</script>
