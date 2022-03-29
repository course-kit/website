<template>
  <div class="container mx-auto px-6 sm:px-8 lg:px-12" id="join">
    <div class="py-12 sm:py-24">
      <div class="text-center prose lg:prose-lg mx-auto mb-6">
        <h2 class="">Get started for free</h2>
      </div>
      <p class="prose lg:prose-lg text-center mx-auto">
        Create a free account and start creating your courses.
      </p>
      <div class="pt-8 flex flex-row justify-center items-center">
        <a
          :href="$config.dashboardUrl"
          class="relative h-12 rounded-md border px-5 py-3 bg-blue-400 text-base font-medium text-white border-blue-400 hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 sm:px-10 mr-3"
          >Start free 14-day trial</a
        >
        <a
          href="https://demo.coursekit.dev"
          target="_blank"
          class="relative h-12 rounded-md border-2 px-5 py-3 bg-white text-blue-500 font-medium text-white border-blue-400 hover:bg-gray-50 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 sm:px-10"
          >Take a tour</a
        >
      </div>
      <div class="text-center pt-8">
        <p class="prose lg:prose-lg mx-auto">
          Want a live demo of CourseKit? Schedule
          <a href="https://calendly.com/anthonygore/15min" target="_blank"
            >here</a
          >.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
