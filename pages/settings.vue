<template>
  <div class="h-full">
    <div class="py-10 w-max ml-auto flex space-x-10 items-center">
      <img src="~/assets/images/alertt.svg" alt="notfications" />
      <img src="~/assets/images/profile.svg" alt="profile" />
    </div>
    <h2 class="text-2xl mb-3">Settings</h2>
    <div class="bg-white w-full settingsTab overflow-y-scroll h-auto">
      <tabs transitionName="fade">
        <tab :title="'Profile'">
          <div class="flex flex-grow items-stretch w-full my-8">
            <div class="w-[20%] border-r text-center">Basic Data</div>
            <ul class="space-y-8 px-8 w-[30%]">
              <li class="flex space-x-5 items-center">
                <div class="text-right flex-1">
                  <p class="text-sm">Profile picture</p>
                  <p class="text-light text-xs">png, jpg, bitmap</p>
                </div>
                <div class="text-left flex-1">
                  <img src="~/assets/images/profile.svg" alt="" />
                </div>
              </li>
              <li class="flex space-x-5 items-center">
                <p class="text-sm text-light text-right flex-1">First Name</p>
                <p class="text-sm text-left flex-1">Micheal</p>
              </li>
              <li class="flex space-x-5 items-center">
                <p class="text-sm text-light text-right flex-1">Middle Name</p>
                <p class="text-sm text-left flex-1">Boluwatife</p>
              </li>
              <li class="flex space-x-5 items-center">
                <p class="text-sm text-light text-right flex-1">Last Name</p>
                <p class="text-sm text-left flex-1">Okafor</p>
              </li>
              <li class="flex space-x-5 items-center">
                <p class="text-sm text-light text-right flex-1">Phone Number</p>
                <p class="text-sm text-left flex-1">+234 7056329624</p>
              </li>
              <li class="flex space-x-5 items-center">
                <p class="text-sm text-light text-right flex-1">
                  Date Of Birth
                </p>
                <p class="text-sm text-left flex-1">23rd July 1988</p>
              </li>
              <li class="flex space-x-5 items-center">
                <p class="text-sm text-light text-right flex-1">Gender</p>
                <p class="text-sm text-left flex-1">Male</p>
              </li>
              <li class="flex space-x-5 items-center">
                <p class="text-sm text-light text-right flex-1">
                  Mother’s Maiden Name
                </p>
                <p class="text-sm text-left flex-1">Olushola</p>
              </li>
            </ul>
          </div>
          <div class="flex flex-grow items-stretch w-full my-8">
            <div class="w-[20%] border-r text-center">Next Of Kin</div>
            <ul class="space-y-8 px-8 w-[30%]">
              <li class="flex space-x-5 items-center">
                <p class="text-sm text-light text-right flex-1">Full name</p>
                <p class="text-sm text-left flex-1">Bolanle Okafor</p>
              </li>
              <li class="flex space-x-5 items-center">
                <p class="text-sm text-light text-right flex-1">Email</p>
                <p class="text-sm text-left flex-1">bola@gmail.com</p>
              </li>
              <li class="flex space-x-5 items-center">
                <p class="text-sm text-light text-right flex-1">Phone Number</p>
                <p class="text-sm text-left flex-1">070563296524</p>
              </li>
              <li class="flex space-x-5 items-center">
                <p class="text-sm text-light text-right flex-1">Address</p>
                <p class="text-sm text-left flex-1">
                  2, Clement Ashford crescent, Gbagada, Lagos
                </p>
              </li>
              <li class="flex space-x-5 items-center">
                <p class="text-sm text-light text-right flex-1">Relationship</p>
                <p class="text-sm text-left flex-1">Sister</p>
              </li>
            </ul>
          </div>

          <div class="flex flex-grow items-stretch w-full my-8">
            <div class="w-[20%] border-r text-center">Address</div>
            <ul class="space-y-8 px-8 w-[30%]">
              <li class="flex space-x-5 items-center">
                <p class="text-sm text-light text-right flex-1">
                  Residential Address
                </p>
                <p class="text-sm text-left flex-1">
                  2, Clement Ashford crescent, Gbagada, Lagos
                </p>
              </li>
              <li class="flex space-x-5 items-center">
                <p class="text-sm text-light text-right flex-1">City</p>
                <p class="text-sm text-left flex-1">Lagos</p>
              </li>
              <li class="flex space-x-5 items-center">
                <p class="text-sm text-light text-right flex-1">State</p>
                <p class="text-sm text-left flex-1">Lagos</p>
              </li>
              <li class="flex space-x-5 items-center">
                <p class="text-sm text-light text-right flex-1">Country</p>
                <p class="text-sm text-left flex-1">Nigeria</p>
              </li>
              <li class="flex space-x-5 items-center">
                <p class="text-sm text-light text-right flex-1">Nationality</p>
                <p class="text-sm text-left flex-1">Nigerian</p>
              </li>
            </ul>
          </div>
        </tab>
        <tab :title="'Bank Details'">
          <img alt="" src="~/assets/images/watchlist.svg" class="w-[80px]" />
          <h1 class="mt-4 mb-2 text-2xl">No Transactions Yet</h1>
          <p class="text-sm text-light">
            Soon, your investment transactions, for your monitoring will appear
            here
          </p> </tab
        ><tab :title="'Password & Security'">
          <img alt="" src="~/assets/images/watchlist.svg" class="w-[80px]" />
          <h1 class="mt-4 mb-2 text-2xl">No Transactions Yet</h1>
          <p class="text-sm text-light">
            Soon, your investment transactions, for your monitoring will appear
            here
          </p> </tab
        ><tab :title="'Support'">
          <img alt="" src="~/assets/images/watchlist.svg" class="w-[80px]" />
          <h1 class="mt-4 mb-2 text-2xl">No Transactions Yet</h1>
          <p class="text-sm text-light">
            Soon, your investment transactions, for your monitoring will appear
            here
          </p> </tab
        ><tab :title="'Account Type'">
          <img alt="" src="~/assets/images/watchlist.svg" class="w-[80px]" />
          <h1 class="mt-4 mb-2 text-2xl">No Transactions Yet</h1>
          <p class="text-sm text-light">
            Soon, your investment transactions, for your monitoring will appear
            here
          </p> </tab
        ><tab :title="'Glossary'">
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
export default {
  name: 'settings',
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
