<template>
    <div>
        <div class="input">
        <input v-model="input" placeholder="Address"/>
        <button @click.stop="filterByAddressUniAction(input)">Filter</button>
        </div>
        <universities-table :uniData="getUnis"/>
    </div>
</template>

<script>
    import UniversitiesTable from "@/components/UniversitiesTable/index.vue";
    import { mapGetters, mapActions } from "vuex";

    export default {
        name: "FilterPage",
        components: {
            UniversitiesTable,
        },
        computed: {
            ...mapGetters(["getUnis"])
        },
        methods: {
            ...mapActions(["filterByAddressUniAction"])
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