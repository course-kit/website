<template>
  <div class="relative bg-white">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="relative py-12 sm:py-24">
          <div class="text-center prose lg:prose-lg mx-auto">
            <h2 class="">Why CourseKit?</h2>
          </div>
          <div
            class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24"
          >
            <div
              class="overflow-hidden"
              v-for="(feature, index) in features"
              :key="index"
            >
              <div class="prose">
                <h3 class="border-b-4 border-red-300 pb-2 mb-2">
                  {{ feature.title }}
                </h3>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    features: [
      {
        title: 'Fully customizable UI and UX',
        description:
          'Our headless platform allows you to make your course look and feel exactly how you want.',
      },
      {
        title: 'Secure videos',
        description:
          'Token-based auth ensures users must be enrolled before they can see your content.',
      },
      {
        title: 'Integrate with anything',
        description:
          'CourseKit plays nicely with all JS frameworks and payment gateways.',
      },
    ],
  }),
}
</script>
