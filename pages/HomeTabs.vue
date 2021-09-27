<template>
  <div>
    <tabs transitionName="fade">
      <tab :title="'Watchlist'">
        <img alt="" src="~/assets/images/watchlist.svg" class="w-[80px]" />
        <h1 class="mt-4 mb-2 text-2xl">No Watchlist Yet</h1>
        <p class="text-sm text-light">
          Soon, your watchlist of investment, for your monitoring will appear
          here
        </p>
      </tab>
      <tab :title="'Recent Transaction'">
        <img alt="" src="~/assets/images/watchlist.svg" class="w-[80px]" />
        <h1 class="mt-4 mb-2 text-2xl">No Transactions Yet</h1>
        <p class="text-sm text-light">
          Soon, your investment transactions, for your monitoring will appear
          here
        </p>
      </tab>
    </tabs>
  </div>
</template>
<script>
export default {
  name: 'HomeTabs',
}
</script>

<style>
.vue-tabs {
  @apply w-full mt-10;
}
.vue-tabs__nav {
  @apply w-full space-x-3;
}
.vue-tabs__nav-item {
  @apply py-3 pr-7 pl-2 text-xl text-left text-light;
}

.vue-tabs__nav-item.--active {
  @apply text-primary font-medium;
}

.vue-tabs__panel {
  @apply min-h-[300px];
}

.vue-tabs__panel[hidden='hidden'] {
  display: none;
}

.vue-tabs__panel-container {
  @apply h-full min-h-[500px] px-4 py-3 flex flex-col items-center justify-center;
}
</style>
