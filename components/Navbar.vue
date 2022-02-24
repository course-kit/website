<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav class="bg-white border-b-2 fixed w-full z-10">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
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
            <img
              class="hidden sm:block lg:hidden h-6 w-auto"
              src="/icon_2x.png"
              alt="CourseKit"
            />
            <img
              class="block sm:hidden lg:block h-5 w-auto"
              src="/logo.png"
              alt="CourseKit"
            />
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
                'border-blue-400 border-b-2': isRouteActive(link.path),
              }"
              class="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              {{ link.title }}
            </component>
          </div>
        </div>
        <div
          class="hidden sm:ml-12 sm:flex sm:space-x-8"
        >
          <component
            :is="link.type"
            v-for="link in rightLinks.filter(link => link.type !== 'button')"
            :key="link.path"
            :to="link.path"
            :href="link.path"
            :target="link.target"
            :class="{
                'border-blue-400 border-b-2': isRouteActive(link.path),
              }"
            class="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
          >
            {{ link.title }}
          </component>
        </div>
        <div
          class="hidden absolute inset-y-0 right-0 flex items-center pr-2 sm:flex sm:static sm:inset-auto  sm:space-x-8 sm:ml-6 sm:pr-0"
        >
          <nuxt-link
            v-for="link in rightLinks.filter(link => link.type === 'button')"
            :key="link.path"
            class="bg-blue-400 text-white text-sm font-bold px-4 py-2 rounded-md"
            :to="link.path"
            >Join beta</nuxt-link
          >
        </div>
      </div>
    </div>

    <div class="sm:hidden" v-if="$store.state.nav.open">
      <div class="pt-2 pb-4 space-y-1">
        <component
          :is="link.type"
          v-for="link in leftLinks.concat(rightLinks)"
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
    leftLinks: [
      {
        title: 'Home',
        path: '/',
        type: 'nuxt-link',
        target: '',
      },
      {
        title: 'Features',
        path: '/features',
        type: 'nuxt-link',
        target: '',
      },
      {
        title: 'Pricing',
        path: '/pricing',
        type: 'nuxt-link',
        target: '',
      },

      // {
      //   title: 'Docs',
      //   path: 'https://github.com/course-kit/client',
      //   type: 'a',
      //   target: '_blank'
      // },
    ],
    rightLinks: [
      {
        title: 'Blog',
        path: '/blog',
        type: 'nuxt-link',
        target: '',
      },
      {
        title: 'Sign up',
        path: '/#join',
        type: 'button',
        target: '',
      },
    ],
  }),
  methods: {
    isRouteActive(link) {
      return this.$route.path === link
    },
  },
}
</script>
