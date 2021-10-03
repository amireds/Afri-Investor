<template>
  <div
    class="
      sidebar
      min-h-screen
      max-h-full
      flex
      font-apercu
      antialiased
      relative
    "
  >
    <Sidebar is-inside="true" />
    <div class="main w-[85%] bg-[#F6F6F6] px-14 relative ml-auto">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar'

export default {
  name: 'Default',
  components: { Sidebar },
  middleware: ['check-auth', 'auth'],
}
</script>

<style>
body,
html {
  @apply w-full h-full m-0 p-0 overflow-y-scroll;
}
body::-webkit-scrollbar,
.sidebar::-webkit-scrollbar {
  display: none;
}

.sidebar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
