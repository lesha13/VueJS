<template>
    <div>
        <account-stocks-info 
        v-for="item in stocksData"
        :key="item.ticker"
        :ticker="item.ticker"
        :amount="item.amount"
        />
    </div>
</template>

<script>
    import AccountStocksInfo from "@/components/AccountStocksInfo/index.vue"
    export default {
        name: "AccountStocksTable",
        components: {
            AccountStocksInfo,
        },
        props: {
            stocksData: {
            type: Array,
            default: () => [],
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>