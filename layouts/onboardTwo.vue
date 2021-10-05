<template>
  <div class="bg-[#F6F6F6] h-screen font-apercu text-font antialiased">
    <header
      class="
        py-5
        px-10
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
          We need to know you to serve you better
        </p>
      </div>
      <div class="text-center">
        <NuxtLink
          to="/home"
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
        </NuxtLink>
        <p class="text-sm text-light mt-1">close</p>
      </div>
    </header>
    <main class="w-full h-[91.5%]">
      <div class="flex h-full items-stretch">
        <div class="bg-white w-[25%] pt-[100px] self-stretch fixed relative">
          <ul class="space-y-3">
            <li class="">
              <nuxt-link to="/onboard/basic">
                <div class="menu-link">
                  <div class="icon border-2 border-light text-light">1</div>
                  <div>
                    <p class="text-dark mb-0.5 title">Basic Information</p>
                    <p class="text-light subtitle">
                      Please tell us a bit about yourself
                    </p>
                  </div>
                </div>
                <div
                  class="
                    lines
                    border-l-2 border-light border-dashed
                    h-[63px]
                    ml-[3.85rem]
                  "
                ></div>
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link to="/onboard/address">
                <div class="menu-link">
                  <div class="icon border-2 border-light text-light">2</div>
                  <div>
                    <p class="text-dark mb-0.5 title">Address</p>
                    <p class="text-light subtitle">
                      We would like to know your origin
                    </p>
                  </div>
                </div>
                <div
                  class="
                    lines
                    border-l-2 border-light border-dashed
                    h-[63px]
                    ml-[3.85rem]
                  "
                />
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link to="/onboard/kin">
                <div class="menu-link">
                  <div class="icon border-2 border-light text-light">3</div>
                  <div>
                    <p class="text-dark mb-0.5 title">Next of Kin</p>
                    <p class="text-light subtitle">
                      Tell us about someone close to you
                    </p>
                  </div>
                </div>
                <div
                  class="
                    lines
                    border-l-2 border-light border-dashed
                    h-[63px]
                    ml-[3.85rem]
                  "
                />
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link to="/onboard/bank">
                <div class="menu-link">
                  <div class="icon border-2 border-light text-light">4</div>
                  <div>
                    <p class="text-dark mb-0.5 title">Bank Details</p>
                    <p class="text-light subtitle">
                      Share your bank detail for transactions
                    </p>
                  </div>
                </div>
                <div
                  class="
                    lines
                    border-l-2 border-light border-dashed
                    h-[63px]
                    ml-[3.85rem]
                  "
                />
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link to="/onboard/verify">
                <div class="menu-link">
                  <div class="icon border-2 border-light text-light">5</div>
                  <div>
                    <p class="text-dark mb-0.5 title">Verification Documents</p>
                    <p class="text-light subtitle">
                      Your bio will be verified using this documents
                    </p>
                  </div>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="sidebar flex-1 pt-32 mt-8 pb-20 overflow-scroll">
          <div class="w-[650px] mx-auto">
            <Nuxt />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: 'onboardTwo',
}
</script>

<style lang="scss" scoped>
.sidebar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.menu-link {
  @apply flex
  space-x-4
  items-center
  justify-start
  cursor-pointer
  px-10
  pb-3;
  .icon {
    @apply w-[45px]
    h-[45px]
    text-center
    py-[10px]
    rounded-full
    font-medium;
  }
}
.nuxt-link-exact-active {
  .menu-link {
    .title {
      @apply text-primary;
    }
    .icon {
      @apply border-dark text-dark;
    }
  }
  .lines {
    @apply border-l-2 border-dark border-dashed h-[63px] ml-[3.85rem];
  }
}
</style>
