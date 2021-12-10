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
export default {
  components: { Demo, Benefits, Features, Video, Form, Hero },
}
</script>
