<template>
  <div
    class="relative bg-white"
  >
    <div class="mx-auto sm:max-w-none lg:max-w-4xl container mx-auto">
      <div class="relative overflow-hidden py-12 sm:py-24">
        <div class="relative flex item-center flex-col">
          <div class="text-center prose lg:prose-lg mx-auto pb-8">
            <h2 class="">Why CourseKit?</h2>
          </div>
          <div class="grid grid-cols-2 gap-6 mx-auto">
            <Card class=" h-44" v-for="feature in features" :key="feature.title" :title="feature.title" :description="feature.description" />
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
        { title: 'Start selling courses sooner', description: 'No need to design a separate course site. Upload and sell your course today.' },
        { title: 'Keep your users on your site', description: 'Create a consistent and convenient experience for users by publishing on your own site.' },
        { title: 'Minimal & simple', description: 'CourseKit does one thing: host courses! No tools you already have or features you don\'t need.' },
        { title: 'Use your favorite tools', description: 'CourseKit integrates with the site builder, marketing automations, etc you already pay for.' },
      ]
    }
  }
}
</script>
<style>

</style>
