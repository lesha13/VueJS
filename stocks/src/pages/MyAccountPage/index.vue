<template>
    <div>
        <h1>My account</h1>
        <p>{{getAccountBalance}}</p>
        <account-stocks-table :stocksData="getAccountStocks"/>
    </div>
</template>

<script>
    import AccountStocksTable from "@/components/AccountStocksTable/index.vue";
    import { mapGetters } from 'vuex'

    export default {
        name: "MyAccountPage",
        components: {
            AccountStocksTable,
        },
        computed: {
            ...mapGetters(["getAccountStocks", "getAccountBalance"])
        },
    }
</script>

<style lang="css" scoped>

</style>