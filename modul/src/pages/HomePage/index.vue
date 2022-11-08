<template>
    <div>
        <p>All Universities</p>
        <universities-table :uniData="getUnis"/>
    </div>
</template>

<script>
  import UniversitiesTable from "@/components/UniversitiesTable/index.vue";
  import { mapGetters } from "vuex";

  export default{
    name: 'HomePage',
    components: {
      UniversitiesTable,
    },
    computed: {
      ...mapGetters(["getUnis"])
    },
  }
</script>

<style lang="css" scoped>

</style>