<template>
  <div class="bg-[#F6F6F6] h-screen font-apercu text-font antialiased">
    <header
      class="
        py-5
        px-32
        mx-auto
        flex
        items-center
        justify-between
        border-b border-[#DBDDE1]
      "
    >
      <div class="flex items-center space-x-14">
        <img
          src="~/assets/images/logoGrey.png"
          alt=""
          class="w-[100px] h-auto"
        />
        <p class="font-medium text-light text-lg">
          Your gateway to amazing investment opportunities
        </p>
      </div>
      <div class="text-center">
        <div
          class="
            text-[#626262]
            border border-[#626262]
            rounded-full
            flex
            items-center
            py-.5
            px-1
            w-max
          "
        >
          <span
            class="material-icons material-icons-outlined text-base text-bold"
          >
            close
          </span>
        </div>
        <p class="text-sm text-light mt-1">close</p>
      </div>
    </header>
    <main class="w-[1000px] mx-auto mt-[170px]"><Nuxt /></main>
  </div>
</template>

<script>
export default {
  name: 'onboard',
}
</script>

<style scoped></style>
