<template>
  <div>
    <stocks-table :stocksData="stocksData.data" />
  </div>
</template>

<script>
import StocksTable from "./components/StocksTable/index.vue";
import stocksData from "./assets/data.json";

export default {
  name: "App",
  components: {
    StocksTable,
  },
  data() {
    return {
      stocksData,
    };
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
</style>
