<template>
    <div class="uni-info-container">
        <div>
            <p>{{name}}</p>
        </div>
        <div>
        <p>{{address}}</p>
        </div>
        <div>
            <p>{{numberFaculties}}</p>
        </div>
        <div>
            <p>{{accreditation}}</p>
        </div>
        <div>
            <p>{{rating}}</p>
        </div>
        <button @click.stop="deleteUniAction(name)"> delete </button>
    </div>
</template>

<script>
    import { mapActions } from "vuex";
    export default {
        name: "UniversityInfo",
        props: {
            name: {
                type: String,
                default: "None"
            },
            address: {
                type: String,
                default: "None"
            },
            numberFaculties: {
                type: Number,
                default: 0
            },
            accreditation: {
                type: Number,
                default: 0
            },
            rating: {
                type: Number,
                default: 0
            },
        },
        methods: {
            ...mapActions(["deleteUniAction"])
        },
    }
</script>

<style lang="css" scoped>
    .uni-info-container {
        display: flex;

        height: 50px;
        width: 750px;
        border: 1px solid black;
        border-radius: 5px;
        margin: 5px;
        align-items: center;
        justify-content: space-evenly;
    }

    .uni-info-container div {
        width: 100px;
        display: flex;
        justify-content: center;
    }

    button {
        width: 100px
    }
</style>