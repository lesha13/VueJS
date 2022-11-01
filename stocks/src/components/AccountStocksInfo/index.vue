<template>
    <div class="account-stocks-container">
        <stocks-info 
        :ticker="ticker"
        :companyName="stock.companyName"
        :price="stock.price"
        :priceChange="stock.priceChange"
        />
            <p class="bought-stocks">Bought: {{amount}}</p>
        <div>
            <button @click.stop="buyStockAction(ticker)">Buy</button>
            <button @click.stop="sellStockAction(ticker)">Sell</button>
        </div>
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
    .account-stocks-container {
        display: flex;
        align-items: center;
        border: 1px solid black;
        border-radius: 5px;
        width: fit-content;
        margin: 5px;
        padding: 5px
    }
    button {
        width: 200px;
        height: 33px;
        border: 1px dashed black;
        border-radius: 5px;
    }
    button:nth-child(1){
        background-color: green;
    }
    button:nth-child(2){
        background-color: red;
    }
    p, button {
        margin-right: 5px;
    }
</style>