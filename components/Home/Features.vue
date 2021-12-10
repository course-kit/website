<template>
  <div class="relative bg-gray-50">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="relative py-12 sm:py-24">
          <div class="text-center prose lg:prose-lg mx-auto">
            <h2>How it works</h2>
          </div>
          <div
            class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            <div
              class="overflow-hidden"
              v-for="(feature, index) in features"
              :key="index"
            >
              <div class="bg-yellow-200 p-8 h-50">
                <div
                  class="flex justify-center flex-col items-center"
                >
                  <span class="bg-white rounded-full w-8 h-8 pl-3 pt-1 text-bold font-display">
                    {{ index + 1 }}
                  </span>
                  <h4 class="relative text-gray-800 p-2 m-2 text-bold font-display text-lg">
                    {{ feature.title }}
                  </h4>
                  <component
                    :is="feature.icon"
                    class="text-gray-800"
                    size="50"
                  ></component>
                </div>
              </div>
              <div class="bg-white p-8 h-40">
                <div class="prose prose-sm">
                  <p>{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  CodeIcon,
  CloudUploadIcon,
  CurrencyDollarIcon,
} from '@vue-hero-icons/outline'

export default {
  components: {
    CodeIcon,
    CloudUploadIcon,
    CurrencyDollarIcon,
  },
  data: () => ({
    features: [
      {
        title: 'Embed widgets',
        description:
          'Add our video player and course admin widgets with a few lines of JavaScript. Customize the look and feel with CSS and your imagination.',
        icon: CodeIcon,
      },
      {
        title: 'Upload videos',
        description:
          'Use our drag and drop cloud interface to upload videos and arrange into one or more courses.',
        icon: CloudUploadIcon,
      },
      {
        title: 'Connect payment gateway',
        description:
          'Use a webhook to enrol students when they purchase through Stripe, Gumroad, or any other gateway.',
        icon: CurrencyDollarIcon,
      },
    ],
  }),
}
</script>
