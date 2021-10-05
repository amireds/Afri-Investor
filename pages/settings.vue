<template>
  <div class="h-full">
    <div class="py-10 w-max ml-auto flex space-x-10 items-center">
      <img src="~/assets/images/alertt.svg" alt="notfications" />
      <img src="~/assets/images/profile.svg" alt="profile" />
    </div>
    <h2 class="text-2xl mb-3">Settings</h2>
    <div class="bg-white w-full settingsTab overflow-y-scroll h-auto mb-10">
      <tabs transitionName="fade">
        <tab :title="'Profile'">
          <ProfileTab />
        </tab>
        <tab :title="'Bank Details'">
          <img alt="" src="~/assets/images/watchlist.svg" class="w-[80px]" />
          <h1 class="mt-4 mb-2 text-2xl">No Transactions Yet</h1>
          <p class="text-sm text-light">
            Soon, your investment transactions, for your monitoring will appear
            here
          </p>
        </tab>
        <tab :title="'Password & Security'">
          <img alt="" src="~/assets/images/watchlist.svg" class="w-[80px]" />
          <h1 class="mt-4 mb-2 text-2xl">No Transactions Yet</h1>
          <p class="text-sm text-light">
            Soon, your investment transactions, for your monitoring will appear
            here
          </p>
        </tab>
        <tab :title="'Support'">
          <img alt="" src="~/assets/images/watchlist.svg" class="w-[80px]" />
          <h1 class="mt-4 mb-2 text-2xl">No Transactions Yet</h1>
          <p class="text-sm text-light">
            Soon, your investment transactions, for your monitoring will appear
            here
          </p>
        </tab>
        <tab :title="'Account Type'">
          <img alt="" src="~/assets/images/watchlist.svg" class="w-[80px]" />
          <h1 class="mt-4 mb-2 text-2xl">No Transactions Yet</h1>
          <p class="text-sm text-light">
            Soon, your investment transactions, for your monitoring will appear
            here
          </p>
        </tab>
        <tab :title="'Glossary'">
          <img alt="" src="~/assets/images/watchlist.svg" class="w-[80px]" />
          <h1 class="mt-4 mb-2 text-2xl">No Transactions Yet</h1>
          <p class="text-sm text-light">
            Soon, your investment transactions, for your monitoring will appear
            here
          </p>
        </tab>
      </tabs>
    </div>
  </div>
</template>

<script>
import ProfileTab from '~/components/settings/ProfileTab'

export default {
  name: 'settings',
  components: { ProfileTab },
}
</script>

<style lang="scss">
.settingsTab {
  .vue-tabs {
    @apply w-full pt-5 px-3 h-full;
  }
  .vue-tabs__nav {
    @apply w-full space-x-3 border-b border-[#DBDDE1];
  }
  .vue-tabs__nav-item {
    @apply py-3 pr-7 pl-2 text-base text-left text-light;
  }

  .vue-tabs__nav-item.--active {
    @apply text-primary font-medium border-b-2 border-primary;
  }

  .vue-tabs__panel {
    @apply min-h-[300px];
  }

  .vue-tabs__panel[hidden='hidden'] {
    display: none;
  }

  .vue-tabs__panel-container {
    @apply h-full min-h-[500px] w-full flex items-start;
  }
}
</style>
