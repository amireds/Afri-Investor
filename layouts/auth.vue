<template>
  <div class="h-screen flex font-apercu antialiased relative">
    <Sidebar />
    <div class="main flex-1 px-14">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar'

export default {
  name: 'Auth',
  middleware: ['check-auth', 'no-auth'],
  components: { Sidebar },
}
</script>

<style scoped>
body,
html {
  @apply h-full overflow-scroll lg:overflow-hidden;
}
</style>
