<template>
  <div class="elem">
    <img :src="imgSrc" />
    <p>{{ header }}</p>
    <p>{{ extraInfo }}</p>
    <p>{{ price }}</p>
  </div>
</template>

<script>
export default {
  name: "ProductElement",

  props: {
    imgSrc: {
      type: String,
      default:
        "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png",
    },
    header: {
      type: String,
      default: "None",
    },
    extraInfo: {
      type: String,
      default: "None",
    },
    price: {
      type: String,
      default: "None",
    },
  },
};
</script>

<style lang="css" scoped>
.elem {
  display: flex;
  flex-direction: column;
}
</style>
