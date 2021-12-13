<template>
  <div class="relative bg-gray-50">
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
  CloudUploadIcon,
  DesktopComputerIcon,
  CurrencyDollarIcon,
} from '@vue-hero-icons/outline'

export default {
  components: {
    CodeIcon,
    CloudUploadIcon,
    DesktopComputerIcon,
    CurrencyDollarIcon,
  },
  data: () => ({
    features: [
      {
        title: 'Create your site',
        description:
          'Use your favorite frontend tools to build a site for your course. CourseKit is static-site friendly - no need for a server.',
        icon: DesktopComputerIcon,
      },
      {
        title: 'Embed CourseKit widgets',
        description:
          'Add our fully-customizable video player and course admin widgets with a few lines of JavaScript.',
        icon: CodeIcon,
      },
      {
        title: 'Upload videos',
        description:
          'Use our drag and drop cloud interface to upload your videos and arrange into courses.',
        icon: CloudUploadIcon,
      },
      {
        title: 'Add a payment gateway',
        description:
          'Enrol students with a webhook from Stripe, Gumroad, etc. Your course is now ready to go live!',
        icon: CurrencyDollarIcon,
      },
    ],
  }),
}
</script>
