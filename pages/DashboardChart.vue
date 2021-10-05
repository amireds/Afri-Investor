<template>
  <div
    class="w-[50%] bg-white flex items-center justify-center overflow-hidden"
  >
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
