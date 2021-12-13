<template>
  <div class="">
    <nav class="flex justify-center" aria-label="Progress">
      <ol role="list" class="space-y-6">
        <li v-for="(step, i) in steps" :key="step.name" class="cursor-pointer" @click="$emit('selected', i)">
          <span v-if="step.current" class="flex items-start" aria-current="step">
            <span class="flex-shrink-0 h-5 w-5 relative flex items-center justify-center" aria-hidden="true">
              <span class="absolute h-4 w-4 rounded-full bg-blue-200" />
              <span class="relative block w-2 h-2 bg-blue-600 rounded-full" />
            </span>
            <span class="ml-3 text-sm font-medium text-blue-600">{{ step.name }}</span>
          </span>
          <span v-else class="group">
            <div class="flex items-start">
              <div class="flex-shrink-0 h-5 w-5 relative flex items-center justify-center" aria-hidden="true">
                <div class="h-2 w-2 bg-gray-300 rounded-full group-hover:bg-gray-400" />
              </div>
              <p class="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">{{ step.name }}</p>
            </div>
          </span>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
import { CheckCircleIcon } from '@vue-hero-icons/solid'

export default {
  components: {
    CheckCircleIcon,
  },
  props: {
    steps: Array
  }
}
</script>
