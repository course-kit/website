<template>
  <div class="pt-12 lg:pt-16">
    <Hero />
    <Platforms />
    <Features />
    <Testimonial />
    <Why />
    <Form />
  </div>
</template>
<script>
import Hero from '../components/Home/Hero'
import Form from '../components/Home/Form'
import Platforms from '../components/Home/Platforms.vue'
import Features from '../components/Home/Features.vue'
import Benefits from '../components/Home/Benefits'
import Demo from '../components/Home/Demo'
import CTA from '../components/CTA'
import Why from '../components/Home/Why.vue'
import Testimonial from "../components/Home/Testimonial.vue";

const title = 'CourseKit | Headless Online Video Course Platform for Developers'
const description =
  'The easiest way to create a full-featured, custom online course, exactly how you want it. Use your favorite frontend tools - no server required!'
const url = 'https://coursekit.dev/'
const image = `${url}coursekit_meta.png`

export default {
  components: {Testimonial, Demo, Benefits, Form, Hero, CTA, Platforms, Features, Why },
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
