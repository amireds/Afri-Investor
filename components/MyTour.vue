<template>
  <v-tour
    name="myTour"
    :steps="steps"
    :options="myOptions"
    :callbacks="myCallbacks"
  ></v-tour>
</template>

<script>
export default {
  name: 'MyTour',
  data() {
    return {
      myOptions: {
        useKeyboardNavigation: true,
        labels: {
          buttonSkip: 'Skip',
          buttonPrevious: 'Previous',
          buttonNext: 'Next',
          buttonStop: 'Finish',
        },
      },
      steps: [
        {
          target: '#v-step-0', // We're using document.querySelector() under the hood
          header: {
            title: 'This is your home',
          },
          content:
            'Get an overview insight into your asset, securities, \n' +
            'transactions, charts and watchlist',
          params: { placement: 'left' },
        },
        {
          target: '#v-step-1', // We're using document.querySelector() under the hood
          header: {
            title: 'This is your Investments',
          },
          content:
            'Get an overview insight into your asset, securities, \n' +
            'transactions, charts and watchlist',
          params: { placement: 'left' },
        },
      ],
      myCallbacks: {
        onStop: this.endTour,
      },
    }
  },
  methods: {
    endTour() {
      this.$emit('endTour')
    },
  },
}
</script>

<style lang="scss" scoped></style>
