<template lang="pug">
    b-row.m-0.p-0.h-100.d-flex.justify-content-center.align-items-center.position-relative
        b-col.mx-auto( cols="10" )
            b-row.m-0.p-0
                b-col.mx-auto.text-center.p-0.risovat-item( cols="4" v-for="item in $store.getters.classes" :key="item.name")
                    img.img-fluid( @click="$router.push({name: `course.${item.name}`})" :src="`./images/${item.image}`" :alt="item.name")
</template>

<script>
    export default {
        beforeMount() {
            this.$store.commit('slogan', 'выберите класс')
        }
    }
</script>

<style scoped>

</style>
