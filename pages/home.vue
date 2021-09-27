<template>
  <div class="text-font">
    <div class="py-10 w-max ml-auto flex space-x-10 items-center">
      <img src="~/assets/images/alertt.svg" alt="notfications" />
      <img src="~/assets/images/profile.svg" alt="profile" />
    </div>

    <TopInfo />
    <div class="flex space-x-6 my-6">
      <div
        class="
          w-full
          bg-white
          border-l-4 border-link
          py-5
          px-6
          flex
          items-center
          space-x-3
        "
      >
        <img src="~/assets/images/emailVerify.svg" alt="" />
        <div>
          <p class="text-link">
            <span class="font-semibold">Action 1:</span> Verify your email
          </p>
          <p class="text-sm">
            We sent an email to <span>henryokafor333@gmail.com</span> Check your
            inbox and click the button to verify your account. Didn’t get a
            mail? <span class="text-primary px-3 cursor-pointer">Resend</span>
          </p>
        </div>
      </div>
      <div
        class="
          w-full
          bg-white
          border-l-4 border-link
          py-5
          px-6
          flex
          items-center
          space-x-3
        "
      >
        <img src="~/assets/images/identityVerify.svg" alt="" />
        <div>
          <p class="text-link">
            <span class="font-semibold">Action 2:</span> Verify your Identity
          </p>
          <p class="text-sm">
            To access the amazing investment business experience, Kindly help us
            to know you better
          </p>
          <div
            class="
              flex
              items-center
              space-x-3
              my-2
              text-primary text-sm
              cursor-pointer
            "
          >
            <span class="font-medium">Start Now</span>
            <span class="material-icons"> east </span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex space-x-6 my-6">
      <DashboardRecords />
      <DashboardChart :data="data" :options="options" />
    </div>
    <div
      class="
        bg-dark
        text-white
        w-max
        px-6
        py-4
        rounded-t
        -rotate-90
        fixed
        -right-10
        top-[60%]
        cursor-pointer
      "
    >
      Feedback
    </div>

    <HomeTabs />
    <Modal v-if="isShowModal" @close="closeModal" :start-tour="startTour" />
    <MyTour v-show="tourStart" @endTour="endTour" />
    <div
      class="
        bg-white
        rounded-sm
        shadow shadow-xl
        px-4
        py-5
        w-[300px]
        fixed
        left-10
        top-[40%]
        space-y-6
      "
      v-if="getHelp"
    >
      <div class="flex items-center space-x-3 cursor-pointer">
        <img src="~assets/images/tour.svg" alt="" class="w-[48px]" />
        <div class="text-xs text-light">
          <p class="text-sm text-font mb-0.5">Take a Tour</p>
          <p>Take a quick tour into the exciting features of Afrinvestor</p>
        </div>
      </div>
      <div class="flex items-center space-x-3 cursor-pointer">
        <img src="~assets/images/suppor.svg" alt="" class="w-[48px]" />
        <div class="text-xs text-light">
          <p class="text-sm text-font mb-0.5">Support</p>
          <p>Browse our Help Center to find answers to your questions</p>
        </div>
      </div>
      <div class="flex items-center space-x-3 cursor-pointer">
        <img src="~assets/images/chat.svg" alt="" class="w-[48px]" />
        <div class="text-xs text-light">
          <p class="text-sm text-font mb-0.5">Chat with us</p>
          <p>Talk to us through our instant messaging app for issues arising</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopInfo from '~/components/home/TopInfo'
import DashboardRecords from '~/components/home/DashboardRecords'
import DashboardChart from '~/pages/DashboardChart'
import HomeTabs from '~/pages/HomeTabs'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  layout: 'default',
  components: { HomeTabs, DashboardChart, DashboardRecords, TopInfo },
  data() {
    return {
      data: [
        ['Investment Returns', 'Percentage'],
        ['Equity', 0.1],
        ['Bonds', 0.1],
        ['Treasury bills', 0.1],
        ['Cash', 10],
      ],
      options: {
        pieHole: 0.55,
        width: 700,
        height: 400,
        colors: ['#0b7d4c', '#0c8f57', '#0ea162', '#0FB36D'],
        legend: {
          alignment: 'center',
          textStyle: { fontName: 'Apercu', lineHeight: 1.3 },
        },
      },
      isShowModal: false,
      tourStart: false,
    }
  },
  methods: {
    closeModal() {
      this.isShowModal = false
    },
    startTour() {
      this.tourStart = true
      if (this.tourStart) {
        this.isShowModal = false
        this.$tours['myTour'].start()
      }
    },
    endTour() {
      this.$tours['myTour'].stop()
      this.tourStart = false
    },
  },
  computed: {
    ...mapGetters(['getHelp']),
  },
  mounted() {
    this.isShowModal = false
  },
}
</script>

<style></style>
