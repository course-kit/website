<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <!--          <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">-->
          <!--            <span class="sr-only">Open main menu</span>-->
          <!--            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />-->
          <!--            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />-->
          <!--          </DisclosureButton>-->
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-6 w-auto"
              src="/icon_2x.png"
              alt="CourseKit"
            />
            <img
              class="hidden lg:block h-6 w-auto"
              src="/logo.png"
              alt="CourseKit"
            />
          </div>
          <div class="hidden sm:ml-12 sm:flex sm:space-x-8">
            <!-- Current: "border-blue-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <component
              :is="link.type"
              v-for="link in links"
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
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        ></div>
      </div>
    </div>

    <!--    <DisclosurePanel class="sm:hidden">-->
    <!--      <div class="pt-2 pb-4 space-y-1">-->
    <!--        &lt;!&ndash; Current: "bg-blue-50 border-blue-500 text-blue-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" &ndash;&gt;-->
    <!--        <DisclosureButton as="a" href="#" class="bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Home</DisclosureButton>-->
    <!--        <DisclosureButton as="a" href="#" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Docs</DisclosureButton>-->
    <!--        <DisclosureButton as="a" href="#" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Blog</DisclosureButton>-->
    <!--      </div>-->
    <!--    </DisclosurePanel>-->
  </nav>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        title: 'Home',
        path: '/',
        type: 'nuxt-link',
        target: ''
      },
      {
        title: 'Docs',
        path: 'https://github.com/course-kit/client',
        type: 'a',
        target: '_blank'
      },
      {
        title: 'Blog',
        path: '/blog',
        type: 'nuxt-link',
        target: ''
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
