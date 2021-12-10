<template>
  <div>
    <Hero />
    <Features />
    <Benefits />
    <Demo />
    <Form />
  </div>
</template>
<script>
import Hero from '../components/Home/Hero'
import Form from '../components/Home/Form'
import Video from '../components/Home/Video'
import Features from '../components/Home/Features'
import Benefits from '../components/Home/Benefits'
import Demo from '../components/Home/Demo'

const title = 'CourseKit | Headless Online Video Course Platform for Developers'
const description =
  'The easiest way to create a fully-custom online video course. Secure video + course admin feature with just a few lines of JavaScript!'
const url = 'https://coursekit.dev/'
const image = '/coursekit_meta.jpg'

export default {
  components: { Demo, Benefits, Features, Video, Form, Hero },
  head: {
    title,
    meta: [
      {
        name: 'description',
        content: description,
      },
      {
        name: 'og:description',
        content: description,
      },
      {
        name: 'twitter:description',
        content: description,
      },
      {
        name: 'og:image',
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
        property: 'twitter:title',
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
