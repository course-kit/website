<template>
  <div class="relative bg-gray-50" id="demo">
    <div class="px-4 sm:px-6 lg:px-8 py-12 sm:py-24 sm:px-12">
      <div class="mx-auto sm:max-w-none lg:max-w-4xl">
        <div class="relative flex flex-col justify-center items-center gap-8">
          <div class="text-center prose lg:prose-lg mx-auto">
            <h2 class="">Example site tour</h2>
            <p class="">
              Let's see a Nuxt + Tailwind site enabled with CourseKit
            </p>
          </div>
          <div>
            <div class="flex flex-col gap-6 items-center">
              <DemoSteps
                :steps="steps"
                @selected="onSelect"
                class="lg:w-64 flex-shrink-0 lg:mt-6"
              />
              <div
                class="lg:w-2/3 flex flex-row items-center gap-4 justify-center"
              >
                <ChevronLeftIcon
                  class="hidden lg:block text-gray-400 flex-shrink-0 hover:text-gray-500 cursor-pointer"
                  size="40"
                  @click="previousStep"
                />
                <img
                  :src="currentStep.image"
                  alt="CourseKit Demo"
                  class="object-center object-cover shadow-md cursor-pointer"
                  @click="nextStep"
                />
                <ChevronRightIcon
                  class="hidden lg:block text-gray-400 flex-shrink-0 hover:text-gray-500 cursor-pointer"
                  size="40"
                  @click="nextStep"
                />
              </div>
              <div class="prose italic text-gray-500 text-center">
                <span class="font-bold">{{ currentStep.name }}.</span>
                <span>{{ currentStep.description }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DemoSteps from './DemoSteps'
import { ChevronLeftIcon, ChevronRightIcon } from '@vue-hero-icons/outline'
const steps = [
  {
    name: 'Course page (logged out)',
    description: 'This is just static content showing info about a course.',
    image: '/course_logged_out.png',
    current: true,
  },
  {
    name: 'Lesson page (logged out)',
    description: 'The lesson video is not viewable until a student enrols.',
    image: '/lesson_logged_out.png',
  },
  {
    name: 'Course page (logged in)',
    description:
      'Watched lessons are marked and the student resume where they left off.',
    image: '/course_logged_in.png',
  },
  {
    name: 'Lesson page (logged in)',
    description:
      'Once authenticated, the student can watch a video and mark it complete.',
    image: '/lesson_logged_in.png',
  },
  {
    name: 'Payment page',
    description:
      "We've integrated with Gumroad to accept payments and use their webhook feature to enrol students via the CourseKit API.",
    image: '/checkout_page.png',
  },
  {
    name: 'Auth page',
    description:
      'All auth is handled by CourseKit. After purchasing a course, students create an account so they can access your content.',
    image: '/auth_page.png',
  },
]

export default {
  components: { DemoSteps, ChevronLeftIcon, ChevronRightIcon },
  data: () => ({
    steps,
  }),
  methods: {
    onSelect(selected) {
      this.steps = this.steps.map((step, index) => {
        step.current = index === selected
        return step
      })
    },
    nextStep() {
      let nextStep = this.steps.findIndex((step) => step.current) + 1
      if (nextStep === this.steps.length) {
        nextStep = 0
      }
      this.onSelect(nextStep)
    },
    previousStep() {
      let nextStep = this.steps.findIndex((step) => step.current) - 1
      if (nextStep < 0) {
        nextStep = this.steps.length - 1
      }
      this.onSelect(nextStep)
    },
  },
  computed: {
    currentStep() {
      return this.steps.find((step) => step.current)
    },
  },
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
