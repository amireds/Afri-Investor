<template>
  <div class="flex justify-between items-center">
    <div>
      <p class="text-3xl font-medium">
        {{ isFirstTime === true ? 'Welcome' : 'Hello' }} Micheal
      </p>
      <p class="text-[20px] text-[#999999]">
        Good to have you on board, get started with the actions below
      </p>
    </div>
    <div>
      <button
        type="button"
        @click="logout"
        class="
          cursor-pointer
          rounded
          py-[12px]
          px-[45px]
          text-white
          bg-primary
          hover:bg-[rgba(37,140,96,0.7)]
          transition
          duration-300
          ease-in-out
          flex
          items-center
          w-max
          space-x-3
        "
      >
        <span class="material-icons text-base font-semibold"> add </span>
        <span>Invest</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TopInfo',
  computed: {
    isFirstTime() {
      return this.$store.getters['auth/isFirstTime']
    },
    firstName() {
      return this.$store.getters['dashboard/firstName']
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    },
  },
}
</script>
