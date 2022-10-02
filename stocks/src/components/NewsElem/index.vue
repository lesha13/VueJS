<template>
    <div class="news-flex-container">
        <img :src="imgSrc" class="img">
        <div>
            <h2 class="header"> {{header}} </h2>
            <p class="text"> {{text}} </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsElem",
        props: {
            imgSrc: {
                type: String,
                default: "https://s3-symbol-logo.tradingview.com/apple--600.png"
            },
            header: {
                type: String,
                default: "AAPL"
            },
            text: {
                type: String,
                default: "Apple is bankrupt"
            }
        },
        
    }
</script>

<style lang="css" scoped>
    .news-flex-container {
        display: flex;

        border: 1px solid black;
        border-radius: 5px;

        margin: 5px;
        overflow: hidden;

        min-width: 1000px
    }

    .img {
        height: 75%;
        width: 75%;

        margin: 10px;
    }

    .header {
                margin: 5px;
    }

    .text {
        margin: 5px;
    }
</style>