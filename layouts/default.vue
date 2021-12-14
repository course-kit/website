<template>
  <div class="relative bg-gray-100">
    <Navbar />
    <main class="mx-auto max-w-7xl pt-16">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default {
  components: { Footer, Navbar },
}
</script>
