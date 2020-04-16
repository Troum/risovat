<template lang="pug">
    b-modal#info( title="Ну очень важная информация" size="lg" hide-footer centered )
        div( v-html="data" )
</template>

<script>
    export default {
        name: "InfoModal",
        data() {
            return {
                data: null
            }
        },
        mounted() {
            this.$root.$on('show-info', (data) => {
                this.data = data;
                this.$bvModal.show('info');
            });
        }
    }
</script>

<style scoped lang="scss">

</style>
