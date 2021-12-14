<template>
  <div class="relative bg-gray-100 bg-white" id="demo">
    <div class="px-4 sm:px-6 lg:px-8 py-12 sm:py-24 sm:px-12">
      <div class="mx-auto sm:max-w-none lg:max-w-4xl">
        <div class="relative flex flex-col justify-center items-center gap-8">
          <div class="text-center prose lg:prose-lg mx-auto">
            <h2 class="">Example CourseKit site</h2>
          </div>
          <div>
            <div class="flex flex-col-reverse lg:flex-row gap-6 justify-center">
              <img
                :src="currentStep.image"
                alt="CourseKit Demo"
                class="w-full h-full lg:w-2/3 object-center object-cover shadow-md"
              />
              <DemoSteps
                :steps="steps"
                @selected="onSelect"
                class="lg:w-64 flex-shrink-0 lg:mt-6"
              />
            </div>
            <p class="prose max-w-none relative mt-6 text-center">
              {{ currentStep.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DemoSteps from './DemoSteps'
const steps = [
  {
    name: 'Lesson page (logged out)',
    description:
      'Until a student enrols and logs in they will not be able see your content.',
    image: '/lesson_logged_out.png',
    current: true,
  },
  {
    name: 'Course page (logged out)',
    description: 'The course page shows lesson info',
    image: '/course_logged_out.png',
  },
  {
    name: 'Course page (logged in)',
    description: 'Once logged in, the UI is aware of watched lessons',
    image: '/course_logged_in.png',
  },
  {
    name: 'Lesson page (logged in)',
    description:
      'Once logged in, a student can watch you video and mark complete',
    image: '/lesson_logged_in.png',
  },
]

export default {
  components: { DemoSteps },
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
