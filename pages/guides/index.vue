<template>
  <div
    class="pt-24 lg:pt-32 pb-24 container mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-12 lg:py-16"
  >
    <div class="prose prose-lg pb-12 max-w-none">
      <h1>Integration Guides</h1>
      <p>CourseKit can be embedded in almost any web page in almost any web platform without much fuss.</p>
      <p>Here you'll find integration guides for some of the most common platforms. If you can't find the platform you're using, be sure to read the <a href="/guides/general-integration-guide">general integration guide</a> which is applicable to any setup you have.</p>
      <p>If you get stuck or have questions, please <a href="https://tawk.to/chat/63d86c294742512879108a9d/1go2md0mp">reach out to our support team</a>.</p>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
      <Card
        v-for="post in posts"
        :key="post.id"
        :thumb="post.image"
        :path="`/guides/${post.slug}`"
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
      .where({ 'tags': { $contains: 'guides' } })
      .sortBy('date', 'desc')
      .fetch()
    return {
      posts,
    }
  },
}
</script>
