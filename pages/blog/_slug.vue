<template>
  <Content :page="page" />
</template>
<script>
import Content from '../../components/Blog/Content.vue'
export default {
  components: {
    Content,
  },
  async asyncData({ $content, params }) {
    const page = await $content(params.slug).fetch()
    return {
      page,
    }
  },
}
</script>
