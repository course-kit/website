<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav class="bg-white border-b-2 fixed w-full z-20">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="relative flex justify-between h-16">
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <span
            @click="$store.commit('nav/toggle')"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon
              v-if="!$store.state.nav.open"
              class="block h-6 w-6"
              aria-hidden="true"
            />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </span>
        </div>
        <div class="flex-1 flex items-center sm:items-stretch justify-start">
          <div class="flex-shrink-0 flex items-center">
            <a href="/">
              <img
                class="block md:hidden h-6 w-auto"
                src="/icon_2x.png"
                alt="CourseKit"
              />
              <img
                class="hidden md:block h-5 w-auto"
                src="/logo.png"
                alt="CourseKit"
              />
            </a>
          </div>
          <div class="hidden sm:ml-12 sm:flex sm:space-x-8">
            <!-- Current: "border-blue-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <component
              :is="link.type"
              v-for="link in leftLinks"
              :key="link.path"
              :to="link.path"
              :href="link.path"
              :target="link.target"
              :class="{
                'border-blue-400': isRouteActive(link.path),
                'border-white': !isRouteActive(link.path),
              }"
              class="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2"
            >
              {{ link.title }}
            </component>
          </div>
        </div>
        <div class="hidden sm:ml-12 sm:flex sm:space-x-8">
          <component
            :is="link.type"
            v-for="link in rightLinks"
            :key="link.path"
            :to="link.path"
            :href="link.path"
            :target="link.target"
            :class="{
              'border-blue-400': isRouteActive(link.path),
              'border-white': !isRouteActive(link.path),
            }"
            class="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2"
          >
            {{ link.title }}
          </component>
        </div>
        <div
          class="hidden absolute inset-y-0 right-0 flex items-center pr-2 sm:flex sm:static sm:inset-auto sm:space-x-8 sm:ml-6 sm:pr-0"
        >
          <a
            :href="signUp.path"
            :class="{
              'border-blue-400 border-b-2': isRouteActive(signUp.path),
            }"
            class="bg-blue-400 text-white text-sm font-bold px-4 py-2 rounded-md hover:bg-blue-500 hover:border-blue-500"
          >
            {{ signUp.title }}
          </a>
        </div>
      </div>
    </div>

    <div class="sm:hidden" v-if="$store.state.nav.open">
      <div class="pt-2 pb-4 space-y-1">
        <component
          :is="link.type"
          v-for="link in leftLinks.concat(rightLinks).concat([signUp])"
          :key="link.path"
          :to="link.path"
          :href="link.path"
          :target="link.target"
          :class="{
            'bg-blue-50 border-blue-500 text-blue-700': isRouteActive(
              link.path
            ),
          }"
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
        >
          {{ link.title }}
        </component>
      </div>
    </div>
  </nav>
</template>

<script>
import { MenuIcon, XIcon } from '@vue-hero-icons/outline'

export default {
  components: {
    MenuIcon,
    XIcon,
  },
  data: () => ({
    open: false,
    leftLinks: [],
    rightLinks: [
      // {
      //   title: 'Guides',
      //   path: '/guides/',
      //   type: 'nuxt-link',
      //   target: '',
      // },
    ],
  }),
  computed: {
    signUp() {
      return {
        title: 'Get access',
        path: '/#join',
        type: 'a',
        target: '',
      }
    },
  },
  methods: {
    isRouteActive(link) {
      return this.$route.path === link
    },
  },
}
</script>
