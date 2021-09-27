<template>
  <div class="w-full bg-white px-6 content-center">
    <GChart type="PieChart" :data="data" :options="options" />
  </div>
</template>
<script>
import { GChart } from 'vue-google-charts'
export default {
  name: 'DashboardChart',
  components: { GChart },
  props: {
    data: {},
    options: {},
  },
}
</script>
