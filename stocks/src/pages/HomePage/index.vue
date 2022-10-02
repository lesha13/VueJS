<template>
    <div>
        <stocks-table :stocksData="getStocks" />
    </div>
</template>

<script>
import StocksTable from "@/components/StocksTable/index.vue";
import { mapGetters } from "vuex"

export default {
    name: "HomePage",
    components: {
        StocksTable,
    },
    computed: {
        ...mapGetters(["getStocks"])
    },
}
</script>

<style lang="scss" scoped>

</style>