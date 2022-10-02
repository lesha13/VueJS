<template>
    <div class="">
        <news-elem
            v-for="item in newsData"
            :key="item.id"
            :imgSrc="item.imgSrc"
            :header="item.header"
            :text="item.text"
        />
    </div>
</template>

<script>
    import NewsElem from "@/components/NewsElem/index.vue"
    export default {
        name: "NewsTable",
        components: {
            NewsElem,
        },
        props: {
            newsData: {
                type: Array,
                default: () => [],
            },
        },
    }
</script>

<style lang="css" scoped>

</style>