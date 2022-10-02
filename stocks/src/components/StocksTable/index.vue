<template>
  <div class="flex-container">
    <div class="grid-container">
      <p>Symbol</p>
      <p>Price $</p>
      <p>Change %</p>
    </div>
    <stocks-info
      v-for="item in stocksData"
      :key="item.id"
      :ticker="item.ticker"
      :companyName="item.companyName"
      :price="item.price"
      :priceChange="item.priceChange"
    />
  </div>
</template>

<script>
import StocksInfo from "../StocksInfo/index.vue";
export default {
  name: "StocksTable",
  components: {
    StocksInfo,
  },
  props: {
    stocksData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="css" scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid-container p {
  display: flex;
  align-items: center;
  justify-content: center;

  color: rgb(51, 51, 51);
}
</style>
