<template>
    <div class="account-stocks">
        <stocks-info 
        :ticker="ticker"
        :companyName="stock.companyName"
        :price="stock.price"
        :priceChange="stock.priceChange"
        />
        <p>{{amount}}</p>
        <button @click.stop="buyStockAction(ticker)">+</button>
        <button @click.stop="sellStockAction(ticker)">-</button>
    </div>
</template>

<script>
    import StocksInfo from "@/components/StocksInfo/index.vue";
    import { mapGetters, mapActions } from "vuex";

    export default {
        name: "AccountStocksInfo",
        components: {
            StocksInfo
        },
        props: {
            ticker: {
                type: String,
                default: "None" 
            },
            amount: {
                type: Number,
                default: 0
            }
        },
        computed: {
            ...mapGetters(["getStocksByTicker"]),
            stock() {
                return this.getStocksByTicker(this.ticker)
            }
        },
        methods: {
            ...mapActions(["buyStockAction", "sellStockAction"])
        },
    }
</script>

<style lang="css" scoped>

</style>