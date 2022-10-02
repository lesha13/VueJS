<template>
  <div class="stocks-grid-container">
    <p class="ticker">
      {{ ticker }}
    </p>
    <p class="company-name">
      <a href="https://finance.yahoo.com/">{{ companyName }}</a>
    </p>
    <p class="price">
      {{ price }}
    </p>
    <p
      class="price-change"
      :class="{ 'price-change-gainer': gainer, 'price-change-loser': !gainer }"
    >
      {{ priceChange }}
    </p>
  </div>
</template>

<script>
export default {
  name: "StocksInfo",
  props: {
    ticker: {
      type: String,
      default: "None",
    },
    companyName: {
      type: String,
      default: "None",
    },
    price: {
      type: Number,
      default: 0,
    },
    priceChange: {
      type: String,
      default: "0",
    },
  },
  computed: {
    gainer() {
      return parseFloat(this.priceChange) > 0;
    },
  },
};
</script>

<style lang="css">
.stocks-grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  height: 50px;
  width: 400px;

  border: 1px solid black;
  border-radius: 5px;

  margin: 5px;
  overflow: hidden;
}

.ticker {
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 2;

  margin-top: 5px;
  margin-left: 5px;
}

.company-name {
  grid-row-start: 2;
  grid-column-start: 1;
  grid-row-end: 3;
  grid-column-end: 2;

  margin-left: 5px;
}

.price {
  grid-row-start: 1;
  grid-column-start: 2;
  grid-row-end: 3;
  grid-column-end: 3;

  display: flex;
  align-items: center;
  justify-content: center;
}

.price-change {
  grid-row-start: 1;
  grid-column-start: 3;
  grid-row-end: 3;
  grid-column-end: 4;

  display: flex;
  align-items: center;
  justify-content: center;
}

.price-change-gainer {
  color: green;
}

.price-change-loser {
  color: red;
}

a:link {
  color: black;
}

a:visited {
  color: rgb(51, 51, 51);
}

a:hover {
  cursor: pointer;
}
</style>
