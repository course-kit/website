<template>
  <div class="relative bg-gray-100">
    <Navbar />
    <main>
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
