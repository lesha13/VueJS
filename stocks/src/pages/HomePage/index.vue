<template>
    <div class="flex-container">
        <news-table :newsData="getNews" />
        <stocks-table :stocksData="getStocks" />
    </div>
</template>

<script>
import StocksTable from "@/components/StocksTable/index.vue";
import NewsTable from "@/components/NewsTable/index.vue";
import { mapGetters } from "vuex"

export default {
    name: "HomePage",
    components: {
        StocksTable,
        NewsTable
    },
    computed: {
        ...mapGetters(["getStocks", "getNews"])
    },
}
</script>

<style lang="css" scoped>
    .flex-container {
        display: flex;
        flex-direction: row
    }
</style>