<template>
  <div
    class="
      sidebar
      w-[15%]
      bg-dark
      pt-8
      box-border
      px-10
      fixed
      h-screen
      overflow-x-visible
    "
  >
    <div class="">
      <img
        src="~assets/images/logo.png"
        alt="AfriInvest Logo"
        class="w-[140px] h-auto"
      />
    </div>
    <div v-if="isInside">
      <nav class="nav">
        <ul class="pt-20">
          <li class="link-container">
            <nuxt-link to="/home" class="menu-link" id="v-step-0"
              ><HomeIcon :fill="iconActive" />Home</nuxt-link
            >
          </li>
          <li class="link-container">
            <nuxt-link to="/invest" class="menu-link" id="v-step-1"
              ><InvestIcon :fill="iconActive" />Invest</nuxt-link
            >
          </li>
          <li class="link-container">
            <nuxt-link to="/wallet" class="menu-link"
              ><WalletIcon :fill="iconActive" />Wallet</nuxt-link
            >
          </li>
          <li class="link-container">
            <nuxt-link to="/settings" class="menu-link"
              ><SettingsIcon :fill="iconActive" />Settings</nuxt-link
            >
          </li>
        </ul>
      </nav>
      <div class="refer mt-52">
        <ul>
          <li class="link-container">
            <nuxt-link to="/refer" class="menu-link"
              ><ReferIcon :fill="iconActive" />Tell a friend</nuxt-link
            >
          </li>
        </ul>
        <div
          @click="setGetHelp"
          class="
            border border-primary
            rounded-full
            px-5
            py-2
            flex
            items-center
            space-x-3
            w-max
            text-sm
            bg-[#258C6026]
            cursor-pointer
            hover:bg-[#258C6080]
            transition
            duration-500
            ease-in-out
          "
        >
          <span class="material-icons material-icons-outlined text-primary">
            help_outline
          </span>
          <span class="text-primary">Get Help</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HomeIcon from '~/components/svg/HomeIcon'
import InvestIcon from '~/components/svg/InvestIcon'
import WalletIcon from '~/components/svg/WalletIcon'
import SettingsIcon from '~/components/svg/SettingsIcon'
import ReferIcon from '~/components/svg/ReferIcon'
import { mapMutations } from 'vuex'
export default {
  name: 'Sidebar',
  props: ['isInside'],
  components: { ReferIcon, SettingsIcon, WalletIcon, InvestIcon, HomeIcon },
  data() {
    return {
      iconActive: '#FFF',
    }
  },
  methods: {
    ...mapMutations(['setGetHelp']),
  },
}
</script>
<style lang="scss" scoped>
body,
html {
  @apply h-full overflow-scroll lg:overflow-hidden;
}
.link-container {
  .menu-link {
    @apply flex items-start justify-start text-white py-5 hover:text-primary transition duration-300 ease-in-out;
    .menu-icon {
      @apply mr-4 h-6;
    }
  }
  .nuxt-link-active {
    @apply text-primary;
  }
}
</style>
