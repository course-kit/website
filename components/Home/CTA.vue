<template>
  <div class="container mx-auto px-6 sm:px-8 lg:px-12" id="join">
    <div class="py-12 sm:py-24">
      <p class="prose lg:prose-lg text-center mx-auto">
        The easiest way to create a full-featured, custom online course,
        exactly how you want it. Use your favorite frontend tools - no server
        required!
      </p>
      <div class="pt-8 flex flex-row justify-center items-center">
        <a :href="$config.dashboardUrl" class="relative h-12 rounded-md border px-5 py-3 bg-blue-400 text-base font-medium text-white border-blue-400 hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 sm:px-10 mr-3">Get started</a>
        <a href="https://demo.coursekit.dev" target="_blank" class="relative h-12 rounded-md border px-5 py-3 bg-white text-blue-500 font-medium text-white border-blue-400 hover:bg-gray-50 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 sm:px-10">Try demo</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
