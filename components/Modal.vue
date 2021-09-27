<template>
  <transition name="modal-fade">
    <div
      class="
        fixed
        top-0
        left-0
        right-0
        bottom-0
        flex
        justify-center
        items-center
        bg-modalBg
      "
    >
      <div class="bg-white max-w-[500px]">
        <header class="bg-[#F7F4F0] flex items-center justify-center py-5">
          <img src="~/assets/images/welcome.svg" alt="" class="w-[200px]" />
        </header>

        <section class="py-10 text-center px-8">
          <h2 class="text-2xl my-3">Welcome To Afrinvestor</h2>
          <p class="w-[75%] mx-auto text-sm text-light">
            We are glad to know you have choosen Afrinvestor as your investment
            platform. Kindly let us walk with you as take a quick tour of the
            app.
          </p>
          <div
            class="
              flex
              w-[80%]
              mx-auto
              space-x-4
              items-center
              justify-between
              mt-10
            "
          >
            <button
              @click="close"
              class="
                cursor-pointer
                border border-btnBorder
                rounded
                py-[12px]
                w-full
                text-sm text-primary
                hover:bg-primary hover:text-white hover:border-primary
                transition
                duration-300
                ease-in-out
              "
            >
              Let’s do this later
            </button>
            <button
              @click="startTour"
              class="
                cursor-pointer
                rounded
                py-[12px]
                text-white
                bg-primary
                hover:bg-[rgba(37,140,96,0.7)]
                transition
                duration-300
                ease-in-out
                w-full
              "
            >
              Show me around
            </button>
          </div>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: ['startTour'],
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
