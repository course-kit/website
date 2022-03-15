<template>
  <div class="container mx-auto px-6 sm:px-8 lg:px-12 mb-16">
    <div class="flex gap-12 justify-center items-center flex-col md:flex-row">
      <div class="max-w-xl text-center md:text-left">
        <h1 class="text-4xl sm:text-5xl font-bold font-display mb-6 leading-12">
          <span>Build an online course with </span>
          <client-only>
            <vue-typer
              :text='["React","Vue","Angular", "Jamstack"]'
              :repeat='Infinity'
              :shuffle='false'
              initial-action='erasing'
              :pre-type-delay='70'
              :type-delay='200'
              :pre-erase-delay='3000'
              :erase-delay='100'
              erase-style='backspace'
              :erase-on-complete='false'
              caret-animation='blink'
            ></vue-typer>
          </client-only>
        </h1>
        <p class="prose lg:prose-lg">
          The easiest way to create a full-featured, custom online course,
          exactly how you want it. Use your favorite frontend tools - no server
          required!
        </p>
        <div class="pt-8">
          <a :href="$config.dashboardUrl" class="relative h-12 rounded-md border px-5 py-3 bg-blue-400 text-base font-medium text-white border-blue-400 hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 sm:px-10 mr-3">Start 14-day trial</a>
          <a href="https://demo.coursekit.dev" target="_blank" class="relative h-12 rounded-md border px-5 py-3 bg-white text-blue-500 font-medium text-white border-blue-400 hover:bg-gray-50 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 sm:px-10">Try demo</a>
        </div>
      </div>
      <div
        class="relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
      >
        <div class="relative mx-auto w-full lg:max-w-md pt-4">
          <img class="w-full" src="/coursekit_homepage.png" alt="CourseKit" />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.vue-typer .left {
  white-space: nowrap
}
.vue-typer .custom.char {
  @apply text-blue-500
}
</style>
