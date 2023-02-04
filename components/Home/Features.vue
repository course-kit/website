<template>
  <div class="relative bg-white">
    <div class="container mx-auto px-6 sm:px-8 lg:px-12 sm:max-w-none lg:max-w-7xl">
      <div class="overflow-hidden py-12 sm:py-24">
        <div class="relative flex item-center flex-col">
          <div class="text-center prose lg:prose-lg mx-auto pb-8">
            <h2 class="">How CourseKit works</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
            <Card
              class="bg-white h-48 shadow-sm"
              v-for="feature in features"
              :key="feature.title"
              :title="feature.title"
              :description="feature.description"
              highlight="blue"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from './Card.vue'
export default {
  components: { Card },
  data() {
    return {
      features: [
        {
          title: '1. Embed the course player',
          description: 'Drop in the embed code anywhere on your site.',
        },
        {
          title: '2. Create your courses',
          description: 'Use our dashboard to create your lesson content.',
        },
        {
          title: '3. Enroll paying students',
          description:
            'Use your eCommerce cart and give access after checkout.',
        },
      ],
    }
  },
}
</script>
<style></style>
