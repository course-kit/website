<template>
  <div
    class="container mx-auto px-6 sm:px-8 lg:px-12 relative"
  >
    <div class="mx-auto sm:max-w-none lg:max-w-4xl">
      <div class="relative overflow-hidden py-12 sm:py-24">
        <div class="relative flex item-center flex-col">
          <div class="text-center prose lg:prose-lg mx-auto pb-8">
            <h2 class="">Features</h2>
          </div>
          <div class="grid grid-cols-2 gap-6 mx-auto">
            <Card class="bg-white h-44" v-for="feature in features" :key="feature.title" :title="feature.title" :description="feature.description" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "./Card.vue"
export default {
  components: { Card },
  data() {
    return {
      features: [
        { title: 'Simple to use', description: 'Add the course player to your site with a few lines of code.' },
        { title: 'Integrate with anything', description: 'CourseKit fits seamlessly into your existing tools and funnels with Zapier.' },
        { title: 'Easy course builder', description: 'Add and manage your course content with ease.' },
        { title: 'Private content', description: 'Only enrolled students can access your content.' },
      ]
    }
  }
}
</script>
<style>

</style>
