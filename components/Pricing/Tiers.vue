<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:flex-col sm:align-center">
        <h1 class="text-4xl font-bold font-display mb-6 leading-12 sm:text-center">Pricing Plans</h1>
        <p class="text-xl text-gray-500 sm:text-center">Start building for free, then upgrade once your course is live.</p>
        <div class="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
          <button type="button" :class="monthlyClasses" @click="selected = 'monthly'">Monthly billing</button>
          <button type="button" class="ml-0.5" :class="yearlyClasses" @click="selected = 'yearly'">Yearly billing</button>
        </div>
      </div>
      <div
        class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:max-w-3xl mx-auto"
      >
        <Tier v-for="tier in tiers" :key="tier.name" :tier="tier" :selected="selected" />
      </div>
    </div>
  </div>
</template>

<script>
import Tier from "./Tier";

const tiers = [
  {
    name: 'Free',
    href: '#join',
    priceMonthly: 0,
    priceYearly: 0,
    description: 'No credit card required.',
    includedFeatures: [
      'Max 30 students.',
      'Max 3 courses.'
    ],
  },
  // {
  //   name: 'Basic',
  //   href: '#join',
  //   priceMonthly: 49,
  //   description: 'All the basics for starting a new business',
  //   includedFeatures: [
  //     'Max 1000 students per course.',
  //     'Max 10 courses.'
  //   ],
  // },
  {
    name: 'Pro',
    href: '#join',
    priceMonthly: 39,
    priceYearly: 29,
    description: 'All the basics for starting a new business',
    includedFeatures: [
      'Unlimited students.',
      'Unlimited courses.',
    ],
  },
  // {
  //   name: 'Non-commerical',
  //   href: '#join',
  //   priceMonthly: 0,
  //   description: 'For free, open-source, and non-commerical courses.',
  //   includedFeatures: [
  //     'Unlimited students.',
  //     'Unlimited courses.',
  //   ],
  // },
]

export default {
  components: {
    Tier,
  },
  data() {
    return {
      selected: 'monthly',
      buttonClasses: 'relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8',
      tiers,
    }
  },
  computed: {
    monthlyClasses () {
      return this.buttonClasses.concat(this.selected === 'monthly' ? ' bg-white border-gray-200 text-gray-700' : ' border border-transparent text-gray-900 shadow-sm')
    },
    yearlyClasses () {
      return this.buttonClasses.concat(this.selected === 'yearly' ? ' bg-white border-gray-200 text-gray-700' : ' border border-transparent text-gray-900 shadow-sm')
    }
  }
}
</script>
