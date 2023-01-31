<template>
  <div class="relative bg-white">
  <div
    class="container mx-auto px-6 sm:px-8 lg:px-12 relative"
  >
    <div class="relative overflow-hidden py-12 sm:py-24">
      <div class="text-center prose lg:prose-lg mx-auto">
        <h3 class="mx-auto max-w-xl">Publish your course on any web page or website builder including...</h3>
        <div class="flex justify-between pt-8 pb-8">
          <div class="flex text-left flex-col gap-1" v-for="col in cols" :key="col.id">
            <div class="flex gap-2 items-center" v-for="item in col.items" :key="item">
              <CheckSolid class="text-green-600 h-6 w-6" />
              <span>{{  item  }}</span>
            </div>
          </div>
        </div>
        <div class="text-center">And more!</div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

import CheckSolid from "./CheckSolid.vue";

export default {
  components: {CheckSolid},
  data() {
    return {
      cols: [
        { id: 1, items: ['Shopify', 'WordPress', 'Webflow' ] },
        { id: 2, items: ['Clickfunnels', 'Squarespace', 'HTML' ] },
        { id: 3, items: ['Leadpages', 'WooCommerce', 'Wix' ] },
      ]
    }
  }
}
</script>
