<template>
  <div class="container">
    <product-element
      v-for="item in ProductData.data"
      :key="item.id"
      :imgSrc="item.imgSrc"
      :header="item.header"
      :extraInfo="item.extraInfo"
      :price="item.price"
    />
  </div>
</template>

<script>
import ProductElement from "./components/ProductElement/index.vue";
import ProductData from "./assets/data.json";

export default {
  name: "App",

  components: {
    ProductElement,
  },

  data() {
    return {
      ProductData,
    };
  },
};
</script>

<style>
.container {
  width: 1000px;
  height: 100px;
  display: flex;
  flex-direction: row;
}
</style>
