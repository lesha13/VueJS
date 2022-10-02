<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/account">Account</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
    <stocks-table :stocksData="getStocks" />
  </div>
</template>

<script>
import StocksTable from "./components/StocksTable/index.vue";
// import stocksData from "./assets/data.json";
import { mapGetters } from "vuex"

export default {
  name: "App",
  components: {
    StocksTable,
  },
  computed: {
    ...mapGetters(["getStocks"])
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
</style>
