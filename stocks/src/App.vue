<template>
  <div>
    <h1> Stocks </h1>
    <div class="navigator">
      <router-link to="/" class="navigator-elem">Home</router-link>
      <router-link to="/account" class="navigator-elem">Account</router-link>
      <router-link to="/about" class="navigator-elem">About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="css">
* {
  margin: 0px;
  padding: 0px;
}

.navigator {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  min-width: 300px;
  border-bottom: 1px solid grey;
}

.navigator-elem {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
