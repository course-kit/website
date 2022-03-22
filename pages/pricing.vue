<template>
  <div class="pt-12 lg:pt-16">
    <div class="text-center">
      <h1 class="text-4xl sm:text-5xl font-bold font-display mb-6 leading-12">Pricing Plans</h1>
      <p class="prose lg:prose-lg mx-auto">Start building for free, then upgrade once your course is live.</p>
    </div>
    <Tiers />
    <div
      class="container mx-auto px-6 sm:px-8 lg:px-12 relative"
      id="join"
    >
      <div class="mx-auto sm:max-w-none lg:max-w-4xl">
        <div class="relative overflow-hidden py-12 sm:py-24">
          <div class="relative flex item-center flex-col">
            <div class="text-center prose lg:prose-lg mx-auto">
              <h2 class="mb-4">FAQ</h2>
            </div>
            <div class="prose lg:prose-lg mx-auto">
              <p><strong>What is a school?</strong></p>
              <p>A school is a collection of courses that can be added to a single website.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Form from '../components/Home/Form'
import Tiers from '../components/Pricing/Tiers'

const title = 'CourseKit | Pricing'
const description =
  'The easiest way to create a full-featured, custom online course, exactly how you want it. Use your favorite frontend tools - no server required!'
const url = 'https://coursekit.dev/'
const image = `${url}coursekit_meta.png`

export default {
  components: { Form, Tiers },
  head: {
    title,
    meta: [
      {
        name: 'description',
        content: description,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        name: 'twitter:description',
        content: description,
      },
      {
        property: 'og:image',
        content: image,
      },
      {
        name: 'twitter:image',
        content: image,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        name: 'twitter:title',
        content: title,
      },
      { property: 'og:site_name', content: 'CourseKit' },
      { property: 'og:url', content: url },
      { property: 'twitter:url', content: url },
      { property: 'og:type', content: 'website' },
      { name: 'robots', content: 'index,follow' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  },
}
</script>
