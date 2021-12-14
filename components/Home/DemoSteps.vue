<template>
  <nav class="flex items-center justify-center" aria-label="Progress">
    <ol role="list" class="ml-8 flex items-center space-x-5">
      <li v-for="(step, i) in steps" :key="step.name" @click="$emit('selected', i)">
        <span v-if="step.current" class="relative flex items-center justify-center" aria-current="step">
          <span class="absolute w-5 h-5 p-px flex" aria-hidden="true">
            <span class="w-full h-full rounded-full bg-indigo-200" />
          </span>
          <span class="relative block w-2.5 h-2.5 bg-indigo-600 rounded-full" aria-hidden="true" />
          <span class="sr-only">{{ step.name }}</span>
        </span>
        <span v-else class="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400">
          <span class="sr-only">{{ step.name }}</span>
        </span>
      </li>
    </ol>
  </nav>
</template>

<script>

export default {
  props: {
    steps: Array,
  },
}
</script>
