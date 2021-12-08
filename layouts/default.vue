<template>
  <div class="relative bg-gray-100 overflow-hidden">
    <Navbar />
    <main class="mt-16 mx-auto max-w-7xl lg:mt-24">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default {
  components: {Footer, Navbar}
}
</script>
