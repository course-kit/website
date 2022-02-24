<template>
  <div class="container mx-auto px-6 sm:px-8 lg:px-12 mb-16">
    <div class="flex gap-12 justify-center items-center flex-col md:flex-row">
      <div class="max-w-xl text-center md:text-left">
        <h1 class="text-5xl font-bold font-display mb-6 leading-12">
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
      </div>
      <div
        class="relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
      >
        <div class="relative mx-auto w-full lg:max-w-md">
          <img class="w-full" src="/coursekit_homepage.png" alt="CourseKit" />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.vue-typer .custom.char {
  @apply text-blue-500
}
</style>
