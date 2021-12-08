<template>
  <div>
    <Hero />
    <Video />
    <Form />
  </div>
</template>
<script>
import Hero from "../components/Home/Hero";
import Form from "../components/Home/Form";
import Video from "../components/Home/Video";
export default {
  components: {Video, Form, Hero}
}
</script>
