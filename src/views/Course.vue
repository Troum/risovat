<template lang="pug">
    course-component( :cards="cards" :img="img")
</template>

<script>
    export default {
        name: "Course",
        data() {
            return {
                cards: [],
                img: ''
            }
        },
        mounted() {
            switch (this.$route.name) {
                case 'course.sketching':
                    this.img = 'sketching';
                    this.getCourse('sketching');
                    break;
                case 'course.3dmodeling':
                    this.img = '3dmodeling';
                    this.getCourse('modeling');
                    break;
                case 'course.animation':
                    this.img = 'animation';
                    this.getCourse('animation');
                    break;
            }
        },
        methods: {
            getCourse(course) {
                this.$httpService.get(`api/${course}`)
                .then(response => {
                    this.cards = response.data[course];
                })
            }
        }
    }
</script>

<style scoped>

</style>
