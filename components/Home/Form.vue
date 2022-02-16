<template>
  <div
    class="container mx-auto px-6 sm:px-8 lg:px-12 relative bg-gray-50"
    id="join"
  >
    <div class="mx-auto sm:max-w-none lg:max-w-4xl">
      <div class="relative overflow-hidden py-12 sm:py-24">
        <div class="relative flex item-center flex-col">
          <div class="text-center prose lg:prose-lg mx-auto">
            <h2 class="">Join as an early user</h2>
            <p class="">
              CourseKit is currently an invite-only beta. If you'd like to
              request an invite or get notified when we launch, enter your email
              below.
            </p>
          </div>
          <form
            class="mt-12 sm:mx-auto sm:max-w-2xl sm:flex w-full"
            @submit.prevent="submit"
          >
            <div class="min-w-0 flex-1">
              <label class="sr-only" for="cta-name">First name</label>
              <input
                v-model="name"
                @focus="loadRecaptcha"
                class="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-transparent focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-blue-400"
                id="cta-name"
                type="text"
                placeholder="First name"
              />
            </div>
            <div class="mt-4 min-w-0 flex-1 sm:mt-0 sm:ml-3">
              <label class="sr-only" for="cta-email">Email address</label>
              <input
                v-model="email"
                @focus="loadRecaptcha"
                class="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-transparent focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-blue-400"
                id="cta-email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div class="mt-4 sm:mt-0 sm:ml-3">
              <button
                class="relative block h-12 w-full sm:w-40 rounded-md border px-5 py-3 bg-blue-400 text-base font-medium text-white border-blue-400 hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 sm:px-10"
                type="submit"
                :class="{ 'button-loading': loading }"
              >
                <span v-if="!loading">Submit</span>
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
</template>
<script>
export default {
  data: () => ({
    name: null,
    email: null,
    message: null,
    token: null,
    loading: false,
    recaptchaLoaded: false,
  }),
  methods: {
    nameIsValid() {
      return this.name && this.name.length > 1
    },
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
      this.message = null
      this.loading = true
      try {
        if (!this.nameIsValid()) {
          this.message = {
            text: 'Name must be 2 characters or more',
            classes: 'bg-red-200 text-red-900',
          }
          this.loading = false
        } else if (!this.emailIsValid()) {
          this.message = {
            text: 'Email invalid',
            classes: 'bg-red-200 text-red-900',
          }
          this.loading = false
        } else {
          const token = await this.$recaptcha.execute('login')
          const { data, status } = await fetch(this.$config.formUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              credentials: 'include',
            },
            body: JSON.stringify({
              name: this.name,
              email: this.email,
              captchaToken: token,
            }),
          })
          this.loading = false
          if (status === 200) {
            this.$gtm.push({ event: 'join_beta' })
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
        }
      } catch (error) {
        this.message = {
          text: 'Submission error!',
          classes: 'bg-red-200 text-red-900',
        }
        this.loading = false
        console.log(error)
      }
    },
    beforeDestroy() {
      this.$recaptcha.destroy()
    },
  },
}
</script>
<style>
.button-loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 4px solid transparent;
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: button-loading-spinner 1s ease infinite;
}
@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}
</style>
