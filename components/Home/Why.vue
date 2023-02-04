<template>
  <div class="mx-auto px-6 sm:px-8 lg:px-12 relative bg-white">
    <div class="mx-auto sm:max-w-none lg:max-w-4xl container mx-auto">
      <div class="relative overflow-hidden py-12 sm:py-24">
        <div class="relative flex item-center flex-col">
          <div class="text-center prose lg:prose-lg mx-auto pb-8">
            <h2 class="">Why CourseKit?</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
            <Card
              class="h-56 md:h-48 shadow-md"
              v-for="feature in features"
              :key="feature.title"
              :title="feature.title"
              :description="feature.description"
              highlight="red"
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
          title: 'Start selling now',
          description:
            'Connect CourseKit to your site in minutes. No need to build a separate course site.',
        },
        {
          title: 'Delight your users',
          description:
            'Keep users on your site for a consistent and convenient experience.',
        },
        {
          title: 'Use your existing tools',
          description:
            'CourseKit integrates with the site, cart, and marketing tools you already use.',
        },
        {
          title: 'Simple & easy',
          description:
            'CourseKit makes creating and selling courses quick and easy like it should be!',
        },
      ],
    }
  },
}
</script>
<style></style>
