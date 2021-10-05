<template>
  <div>
    <img
      src="~/assets/images/success.svg"
      alt=""
      class="w-[200px] h-auto mx-auto mb-12"
    />
    <div class="w-[70%] mx-auto space-y-4">
      <h2 class="text-3xl">Congratulations Micheal!</h2>
      <p>
        You have completed your identity verification, your information are
        currently undergoing verification, now you can experience endless
        investment opportunities
      </p>
    </div>
    <div>
      <div class="mt-10 flex justify-center">
        <nuxt-link
          to="/home"
          replace
          class="
            cursor-pointer
            py-[12px]
            text-white
            bg-primary
            hover:bg-[rgba(37,140,96,0.7)]
            transition
            duration-300
            ease-in-out
            flex
            items-center
            justify-between
            px-5
            w-max
            space-x-10
            rounded-sm
          "
        >
          <span class="w-[70%] text-right">Continue to home</span>
          <span class="material-icons material-icons-sharp justify-self-end">
            east
          </span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'complete',
  layout: 'plain',
}
</script>

<style scoped></style>
