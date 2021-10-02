<template>
  <div class="text-font">
    <img
      src="~assets/images/signup.png"
      alt=""
      class="absolute bottom-0 -left-2 w-[500px]"
    />
    <div class="py-10 w-max ml-auto">
      <p class="inline-block px-3">Already have an account?</p>
      <nuxt-link
        to="/"
        class="
          cursor-pointer
          border border-btnBorder
          rounded
          py-[12px]
          px-[63px]
          text-primary
          hover:bg-primary hover:text-white hover:border-primary
          transition
          duration-300
          ease-in-out
        "
      >
        Login
      </nuxt-link>
    </div>
    <div class="auth-body">
      <h1 class="text-4xl text-center leading-[50px] px-10 mb-[65px]">
        Gain financial freedom by simply investing
      </h1>
      <form @submit.prevent="onSignup">
        <div class="form-control">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="e.g michealolawale@gmail.com"
            v-model="email"
          />
        </div>
        <div class="form-control">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="e.g mikeola"
            v-model="username"
          />
        </div>
        <div class="half">
          <div class="form-control">
            <label for="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="e.g Mayowa"
              v-model="firstName"
            />
          </div>
          <div class="form-control">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Olawale"
              v-model="lastName"
            />
          </div>
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="At least 8 characters"
            v-model="password"
          />
        </div>
        <button
          type="submit"
          class="
            w-full
            mt-5
            bg-primary
            text-white
            py-3.5
            mt-10
            flex
            justify-center
            items-center
            px-8
          "
        >
          <span class="block w-full">Create My Free Account</span>
          <span class="block">
            <i class="fas fa-long-arrow-alt-right w-8"></i>
          </span>
        </button>
        <p class="w-full text-center py-4 text-[#999999] text-sm">
          By creating, you agree to Afrinvestor
          <nuxt-link
            to="/"
            class="
              text-primary
              cursor-pointer
              hover:underline
              transition
              duration-300
              ease-in
            "
            >Terms of service</nuxt-link
          >
          and
          <nuxt-link
            to="/"
            class="
              text-primary
              cursor-pointer
              hover:underline
              transition
              duration-500
              ease-in
            "
            >Privacy policy</nuxt-link
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signUp',
  layout: 'auth',
  data: () => ({
    email: '',
    password: '',
    username: '',
    firstName: '',
    lastName: '',
  }),
  methods: {
    onSignup() {
      this.$store
        .dispatch('auth/userSignUp', {
          username: this.username,
          email: this.email,
          firstname: this.firstName,
          lastname: this.lastName,
          password: this.password,
        })
        .then(() => {
          this.username = ''
          this.email = ''
          this.firstName = ''
          this.lastName = ''
          this.password = ''
          this.$router.replace('/')
        })
    },
  },
}
</script>

<style lang="scss">
.auth-body {
  @apply absolute left-[43%] w-[580px] mx-auto bottom-[113px];
  .form-control {
    @apply w-full my-4;
    label {
      @apply block mb-2;
    }
    input {
      @apply border border-btnBorder w-full placeholder-[#999999] font-light px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-font;
    }
  }
  .half {
    @apply w-full flex justify-between items-center;
    .form-control {
      @apply w-[47%];
    }
  }
}
</style>
