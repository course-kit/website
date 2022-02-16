<template>
  <div class="relative bg-white">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-none lg:max-w-3xl">
        <div class="relative py-12 sm:py-24">
          <div class="text-center prose lg:prose-lg mx-auto">
            <h2>How it works</h2>
          </div>
          <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div
              class="overflow-hidden shadow-md bg-white"
              v-for="(feature, index) in features"
              :key="index"
            >
              <div class="bg-yellow-200 p-8 h-50">
                <div class="flex justify-center flex-col items-center">
                  <span
                    class="bg-white rounded-full w-8 h-8 pl-3 pt-1 text-bold font-display"
                  >
                    {{ index + 1 }}
                  </span>
                  <h4
                    class="relative text-gray-800 p-2 m-2 text-bold font-display text-lg"
                  >
                    {{ feature.title }}
                  </h4>
                  <component
                    :is="feature.icon"
                    class="text-gray-800"
                    size="50"
                  ></component>
                </div>
              </div>
              <div class="p-8 h-30">
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
  PencilAltIcon,
  DesktopComputerIcon,
  CurrencyDollarIcon,
} from '@vue-hero-icons/outline'

export default {
  components: {
    CodeIcon,
    PencilAltIcon,
    DesktopComputerIcon,
    CurrencyDollarIcon,
  },
  data: () => ({
    features: [
      {
        title: 'Create a static site',
        description:
          'Use your favorite frontend tools and build a static site for your course. No need for a server.',
        icon: DesktopComputerIcon,
      },
      {
        title: 'Embed CourseKit widgets',
        description:
          'Add our fully-customizable JavaScript widgets to allow students to see and interact with your course.',
        icon: CodeIcon,
      },
      {
        title: 'Upload content',
        description:
          'Configure your courses and create lesson content with our markdown-based editor. Content can include video and text.',
        icon: PencilAltIcon,
      },
      {
        title: 'Add eCommerce',
        description:
          'Enrol students with a webhook from Stripe, Gumroad, etc. Your online course is ready to go!',
        icon: CurrencyDollarIcon,
      },
    ],
  }),
}
</script>
