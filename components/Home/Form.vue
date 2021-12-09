<template>
  <div class="relative">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="mx-auto sm:max-w-none lg:max-w-4xl">
        <div class="relative px-6 py-10 overflow-hidden sm:px-12 sm:py-20">
          <div class="relative flex item-center flex-col">
            <div class="sm:text-center prose prose-lg mx-auto">
              <h2 class="">Join as a beta tester</h2>
              <p class="">
                CourseKit is currently an invite-only beta. If you'd like to be
                a beta tester or get notified when we launch, enter your email
                below.
              </p>
            </div>
            <form
              class="mt-12 sm:mx-auto sm:max-w-lg sm:flex w-full"
              @submit.prevent="submit"
            >
              <div class="min-w-0 flex-1">
                <label class="sr-only" for="cta-email">Email address</label>
                <input
                  v-model="email"
                  @focus="loadRecaptcha"
                  class="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-transparent focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-blue-400"
                  id="cta-email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div class="mt-4 sm:mt-0 sm:ml-3">
                <button
                  class="block w-full rounded-md border px-5 py-3 bg-blue-400 text-base font-medium text-white border-blue-400 hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 sm:px-10"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
            <div
              v-if="message"
              class="mt-8 p-4 text-center"
              :class="message.classes"
            >
              {{ message.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    email: null,
    message: null,
    token: null,
    recaptchaLoaded: false,
  }),
  methods: {
    emailIsValid() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(this.email)
    },
    async loadRecaptcha() {
      if (!this.recaptchaLoaded) {
        try {
          await this.$recaptcha.init()
          this.recaptchaLoaded = true
          console.log('recaptcha loaded')
        } catch (e) {
          console.error(e)
        }
      }
    },
    async submit() {
      try {
        if (this.emailIsValid(this.email)) {
          const token = await this.$recaptcha.execute('subscribe')
          const { data, status } = await fetch(
            'https://admin.vuejsdevelopers.com/api/coursekit/subscribe',
            {
              method: 'POST',
              body: JSON.stringify({
                email: this.email,
                token,
              }),
            }
          )
          if (status === 200) {
            this.message = {
              text: 'Submission successful!',
              classes: 'bg-green-200 text-green-900',
            }
          } else {
            this.message = {
              text: 'Submission error!',
              classes: 'bg-red-200 text-red-900',
            }
            console.log(data)
          }
        } else {
          this.message = {
            text: 'Email invalid!',
            classes: 'bg-red-200 text-red-900',
          }
        }
      } catch (error) {
        this.message = {
          text: 'Submission error!',
          classes: 'bg-red-200 text-red-900',
        }
        console.log('Login error:', error)
      }
    },
    beforeDestroy() {
      this.$recaptcha.destroy()
    },
  },
}
</script>
