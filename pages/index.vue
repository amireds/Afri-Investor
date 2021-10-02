<template>
  <div class="text-font">
    <img
      src="~assets/images/login.png"
      alt=""
      class="absolute bottom-0 -left-8 w-[400px]"
    />
    <div class="py-10 w-max ml-auto">
      <p class="inline-block px-3">Don’t have an account yet?</p>
      <nuxt-link
        to="/signup"
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
        Create Account
      </nuxt-link>
    </div>
    <div class="auth-body">
      <h1 class="text-4xl text-center leading-[50px] px-10">Hello!</h1>
      <h3 class="w-full text-center">Welcome back, enter your details below</h3>
      <form @submit.prevent="onLogin">
        <div class="form-control">
          <label for="email">Email/Username</label>
          <input
            type="email"
            id="email"
            placeholder="e.g michealolawale@gmail.com"
            v-model="username"
          />
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
        <div class="form-control">
          <div class="text-sm flex justify-between items-center">
            <div class="flex items-center justify-start space-x-2 relative">
              <input type="checkbox" class="w-5 h-5 opacity-0 absolute" />
              <div
                class="
                  bg-white
                  border border-btnBorder
                  rounded-none
                  w-5
                  h-5
                  flex flex-shrink-0
                  justify-start
                  items-center
                  focus-within:border-primary
                "
              ></div>
              <span>Remember Me</span>
            </div>
            <nuxt-link to="/home" class="hover:text-primary underline"
              >I forgot my password</nuxt-link
            >
          </div>
        </div>
        <button
          type="submit"
          class="
            w-full
            mt-5
            bg-primary
            text-white
            py-3.5
            flex
            justify-center
            items-center
            px-8
          "
        >
          <span class="block w-full">Login</span>
          <span class="block">
            <i class="fas fa-long-arrow-alt-right"></i>
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  layout: 'auth',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    onLogin() {
      this.$store
        .dispatch('auth/userLogin', {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.username = ''
          this.password = ''
          this.$router.push('/home')
          //console.log('You should go to home')
        })
    },
  },
}
</script>

<style scoped lang="scss">
.auth-body {
  @apply absolute left-[43%] w-[580px] mx-auto bottom-[300px];
  .form-control {
    @apply w-full my-4;
    label {
      @apply block mb-2;
    }
    input {
      @apply border border-btnBorder w-full placeholder-[#999999] font-light px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-font;
    }
    input:checked + div {
      @apply bg-primary border-white border cursor-pointer;
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
