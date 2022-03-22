<template>
  <div class="pt-12 lg:pt-16">
    <div class="text-center">
      <h1 class="text-4xl font-bold font-display mb-8 leading-12">Features</h1>
    </div>
    <Item v-for="item in items" :item="item" :key="item.title" />
    <CTA />
  </div>
</template>
<script>
import Item from '../components/Features/Item'
import CTA from '../components/CTA'

const title = 'CourseKit | Features'
const description =
  'The easiest way to create a full-featured, custom online course, exactly how you want it. Use your favorite frontend tools - no server required!'
const url = 'https://coursekit.dev/'
const image = `${url}coursekit_meta.png`

const items = [
  {
    isLeft: true,
    title: 'Headless API',
    descriptions: [
      'To give you maximum creativity and flexibility, CourseKit is "headless" i.e. does not provide any frontend pages.',
      'Instead, your lesson content is available through a secure, role-based API that can be connected to from your own custom frontend application.',
      'Use our JavaScript Client Library to easily access data and course management features and create completely unique learning experiences.',
    ],
    img: '/features/js_client.png'
  },
  {
    isLeft: false,
    title: 'Cloud dashboard for school management',
    descriptions: [
      'Use our cloud-based dashboard to manage your course and lesson content, student enrollments, and monitor analytics.',
      'All content is markdown-based allowing maximum flexibility.'
    ],
    img: '/features/dashboard_1.png'
  },
  {
    isLeft: true,
    title: 'Fully-customizable site templates',
    descriptions: [
      'To get you up and running quickly we provide fully-customizable base templates for your site.',
      'These templates are created with popular frontend libraries like React and Vue.'
    ],
    link: {
      text: 'See demo template',
      url: 'https://demo.coursekit.dev'
    },
    img: '/features/react-template.png'
  },
  {
    isLeft: false,
    title: 'Integrate with anything',
    descriptions: [
      'Unlike the LMS you\'re used to, CourseKit is not bloated with features you don\'t need.',
      'You can add features like video, ecommerce, and marketing automation, if and when you need them, with third-party integrations.',
      'These integrations are simple to setup through the developer API.'
    ],
    img: '/features/integrations.png'
  }
]

export default {
  data() {
    return {
      items
    }
  },
  components: { Item, CTA },
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
