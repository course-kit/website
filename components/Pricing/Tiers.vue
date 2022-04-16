<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:flex-col sm:align-center">
        <div class="relative self-center mt-6 rounded-lg p-0.5 flex sm:mt-8">
          <button
            type="button"
            class="border shadow-sm"
            :class="monthlyClasses"
            @click="selected = 'monthly'"
          >
            Monthly billing
          </button>
          <button
            type="button"
            class="ml-0.5 border shadow-sm"
            :class="yearlyClasses"
            @click="selected = 'yearly'"
          >
            Yearly billing
          </button>
        </div>
      </div>
      <div
        class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:max-w-3xl mx-auto"
      >
        <Tier
          v-for="tier in tiers"
          :key="tier.name"
          :tier="tier"
          :selected="selected"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Tier from './Tier'

const freeFeatures = [
  'Unlimited students & courses',
  '$1 + 10% transaction fee per student',
]
const proFeatures = [
  'Unlimited students & courses',
  'No transaction fees',
  'Custom payment platform',
]

const tiers = [
  {
    name: 'Free',
    priceMonthly: 0,
    priceYearly: 0,
    description: 'No credit card required.',
    includedFeatures: freeFeatures,
  },
  {
    name: 'Pro',
    priceMonthly: 49,
    priceYearly: 39,
    description: 'All the basics for starting a new business',
    includedFeatures: proFeatures,
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
      buttonClasses:
        'relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8',
      tiers,
    }
  },
  computed: {
    monthlyClasses() {
      return this.buttonClasses.concat(
        this.selected === 'monthly'
          ? ' bg-white border-gray-100 text-gray-900'
          : ' border-transparent text-gray-500'
      )
    },
    yearlyClasses() {
      return this.buttonClasses.concat(
        this.selected === 'yearly'
          ? ' bg-white border-gray-100 text-gray-900'
          : ' border-transparent text-gray-500'
      )
    },
  },
}
</script>
