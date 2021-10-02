<template>
  <div
    class="
      bg-[#F6F6F6]
      h-screen
      font-apercu
      text-font
      antialiased
      relative
      pt-32
    "
  >
    <div class="w-[1000px] mx-auto bg-white py-16 text-center">
      <Nuxt />
    </div>
    <div class="w-full absolute bottom-5 flex justify-center">
      <img src="~/assets/images/logoGrey.png" alt="" class="w-[80px] h-auto" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'plain',
}
</script>

<style scoped></style>
