<template>
    <div>
        <university-info 
        v-for="item in uniData"
        :key="item.id"
        :name="item.name"
        :address="item.address"
        :numberFaculties="item.numberFaculties"
        :accreditation="item.accreditation"
        :rating="item.rating"
        />
    </div>
</template>

<script>
    import UniversityInfo from "@/components/UniversityInfo/index.vue"
    export default {
        name: "UniversitiesTable",
        components: {
            UniversityInfo
        },
        props: {
            uniData: {
                type: Array,
                default: () => [], 
            },
        },
    }
</script>

<style lang="css" scoped>

</style>