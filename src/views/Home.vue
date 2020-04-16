<template lang="pug">
    b-row.m-0.p-0.h-100.d-flex.justify-content-center.align-items-center.position-relative
        b-col.mx-auto( cols="10" )
            b-row.m-0.p-0
                b-col.mx-auto.text-center.p-0.risovat-item( cols="4" v-for="item in $store.getters.images" :key="item.name")
                    img.img-fluid( @click="$routerService.goTo(item.name)"
                                   :src="`./images/${item.image}`"
                                   :alt="item.name")
        .risovat-buttons
            b-button.risovat-arrow-button( type="button" )
                font-awesome-icon( :icon="['fas', 'chevron-up']" )
            b-button.risovat-central-button( type="button" )
            b-button.risovat-arrow-button( type="button" )
                font-awesome-icon( :icon="['fas', 'chevron-down']" )



</template>

<script>


export default {
    beforeMount() {
        this.$store.commit('slogan', 'это школа обучения рисунку и дизайну в интернете')
    }
}
</script>
