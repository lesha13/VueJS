<template>
    <div>
        <div class="input">
        <input v-model="input" placeholder="Name"/>
        <button @click.stop="findByNameUniAction(input)">Search</button>
        </div>
        <universities-table :uniData="getUnis"/>
    </div>
</template>

<script>
    import UniversitiesTable from "@/components/UniversitiesTable/index.vue";
    import { mapGetters, mapActions } from "vuex";

    export default {
        name: "SearchPage",
        components: {
            UniversitiesTable,
        },
        computed: {
            ...mapGetters(["getUnis"])
        },
        methods: {
            ...mapActions(["findByNameUniAction"])
        },
    }
</script>

<style lang="css" scoped>
    button {
        width: 100px;
    }
        
    .input {
        display: flex;
        margin: 5px;
    }
</style>