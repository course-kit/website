<template>
  <div class="relative">
    <div class="container mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12 sm:pt-24 sm:pb-24">
      <div
        class="max-w-6xl mx-auto flex gap-12 items-center justify-center flex-col md:flex-row"
      >
        <div class="max-w-xl text-center md:text-left">
          <h1 class="text-4xl sm:text-5xl font-bold font-display mb-6 leading-12 center">
            <span class="inline-flex">Add an online course to </span>
            <client-only>
              <vue-typer
                class="w-72 sm:w-96 block mx-auto md:mx-0"
                :text="[
                'Shopify',
                'WordPress',
                'Webflow',
                'Clickfunnels',
                'Squarespace',
                'Leadpages',
                'WooCommerce',
                'Wix',
              ]"
                :repeat="Infinity"
                :shuffle="false"
                initial-action="erasing"
                :pre-type-delay="150"
                :type-delay="150"
                :pre-erase-delay="2000"
                :erase-delay="70"
                erase-style="backspace"
                :erase-on-complete="false"
                caret-animation="blink"
              ></vue-typer>
            </client-only>
          </h1>
          <p class="prose lg:prose-lg">
            CourseKit is an online course builder that lets you publish courses to
            <em>any website or eCommerce store.</em>
          </p>
          <div
            class="pt-8 flex flex-row flex-wrap justify-center md:justify-start gap-4"
          >
            <a
              href="/#join"
              class="flex-shrink-0 flex-grow-0 relative h-12 rounded-md border px-5 py-3 bg-blue-400 text-base font-medium text-white border-blue-400 hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 sm:px-10"
            >Get access</a
            >
          </div>
        </div>
        <div
          class="relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
        >
          <div class="relative mx-auto w-full lg:max-w-md pt-4">
            <div
              :class="{
              'scale-110': scaleState === 1,
              'scale-95': scaleState !== 1,
            }"
              class="bg-rose-400 duration-500 transition-all ease-in left-14 top-3 absolute z-10 inline-block px-4 py-3 text-sm font-medium text-white rounded-lg shadow-sm tooltip dark:bg-gray-700"
            >
              Your website
              <div class="tooltip-arrow tooltip-arrow-top"></div>
            </div>
            <div class="p-2">
              <img class="w-full" src="/coursekit_homepage.png" alt="CourseKit" />
            </div>
            <div
              :class="{
              'scale-110': scaleState === 7,
              'scale-95': scaleState !== 7,
            }"
              class="bg-rose-400 duration-500 transition-all ease-in -bottom-1 right-14 absolute z-10 inline-block px-4 py-3 text-sm font-medium text-white rounded-lg shadow-sm tooltip dark:bg-gray-700"
            >
              Your course
              <div class="tooltip-arrow tooltip-arrow-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scaleState: 0,
    }
  },
  mounted() {
    setInterval(() => {
      this.scaleState++
      if (this.scaleState >= 12) {
        this.scaleState = 0
      }
    }, 500)
  },
}
</script>
<style>
.vue-typer .left {
  white-space: nowrap;
}
.vue-typer .custom.char {
  @apply text-blue-500;
}

.tooltip-arrow {
  visibility: hidden;
  background: inherit;
  height: 12px;
  position: absolute;
  width: 12px;
}

.tooltip-arrow-top {
  transform: translate3d(58.5px, 0px, 0px);
  bottom: -4px;
  left: -3px;
}

.tooltip-arrow-bottom {
  transform: translate3d(67px, 0px, 0px);
  top: -4px;
  left: -15px;
}

.tooltip-arrow::before {
  border-color: #e5e7eb;
  border-style: solid;
  content: '';
  transform: rotate(45deg);
  visibility: visible;
  background: inherit;
  height: 12px;
  position: absolute;
  width: 12px;
  box-sizing: border-box;
}

.tooltip-arrow::after {
  border-color: #e5e7eb;
  border-style: solid;
  background: inherit;
  height: 13px;
  position: absolute;
  width: 13px;
  content: '';
  transform: rotate(45deg);
  visibility: visible;
  box-sizing: border-box;
  top: 1px;
}

.tooltip-arrow-bottom::after {
  top: -3px;
}
</style>
