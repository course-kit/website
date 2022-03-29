<template>
  <div class="shadow-md bg-white divide-y divide-solid">
    <div class="p-6">
      <h2
        class="relative text-gray-800 p-2 m-2 text-bold font-display text-lg text-center"
      >
        {{ tier.name }}
      </h2>
      <p class="mt-4 text-center">
        <span class="text-4xl font-extrabold font-display text-gray-800"
          >${{
            selected === 'monthly' ? tier.priceMonthly : tier.priceYearly
          }}</span
        >
        {{ ' ' }}
        <span class="text-base font-medium text-gray-500">/mo</span>
      </p>
      <a
        :href="$config.dashboardUrl"
        class="mt-8 relative block h-12 w-full rounded-md border text-center px-5 py-3 bg-blue-400 text-base font-medium text-white border-blue-400 hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 sm:px-10"
        >Start free 14-day trial</a
      >
    </div>
    <div class="pt-6 pb-8 px-6">
      <h3 class="text-sm font-medium text-gray-800 tracking-wide">
        What's included:
      </h3>
      <ul role="list" class="mt-6 space-y-4">
        <li
          v-for="feature in tier.includedFeatures"
          :key="feature"
          class="flex space-x-3"
        >
          <CheckIcon
            class="flex-shrink-0 h-5 w-5 text-green-600"
            aria-hidden="true"
          />
          <span class="text-sm text-gray-500">{{ feature }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { CheckIcon } from '@vue-hero-icons/solid'
export default {
  props: {
    tier: {
      type: Object,
      default: {},
    },
    selected: {
      type: String,
      required: true,
    },
  },
  components: {
    CheckIcon,
  },
}
</script>
