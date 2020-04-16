<template lang="pug">
    .m-0.p-0
        div.m-0.p-0
            .course-grid( ref="courses" )
                b-card.course-card.main( @click="expand" :style="`background: url('../images/${img}.png') center center no-repeat`" )
                b-card.course-card( v-for="item in cards" :key="item.id" :class="item.title" )
</template>

<script>
    import $ from "jquery";
    import "../jquery.connections";
    export default {
        name: "CourseComponent",
        props: {
            cards: Array,
            img: String
        },
        data() {
            return {
                expanded: false
            }
        },
        mounted() {
          this.$store.commit('slogan', '');
        },
        methods: {
            setConnections(cards) {
                cards.forEach( (item) => {
                    if (item.connection) {
                        item.connection.forEach( connection => {
                            $(`.${item.title}`).connections({to: `.${connection}`});
                        });
                    }
                    $('.main').connections({to: `.${cards[0].title}`});
                });
            },
            expand() {
                if (this.expanded) {
                    this.$refs.courses.style.display = '';
                    document.querySelectorAll('.course-card').forEach(item => {
                        item.style.position = 'absolute';
                    });
                    document.querySelectorAll('.connection').forEach(item => {
                        item.remove();
                    });
                    this.expanded = false;
                } else {
                    this.$refs.courses.style.display = 'grid';
                    document.querySelectorAll('.course-card').forEach(item => {
                        item.style.position = 'relative';
                    });
                    this.setConnections(this.cards);
                    this.expanded = true;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .course-grid {
        position: relative;
        grid-template-columns: 15% 20% 20% 25% 10%;
        grid-auto-rows: 400px;
        & :nth-child(odd) {
            align-self: start;
        }
        & :nth-child(even) {
            align-self: end;
        }
        & .course-card {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            height: 199px;
            width: 122px;
            background-size: cover;
            background: url("../assets/course-card.png") center center no-repeat;
            filter: drop-shadow( 10px 10px 0 #000);
            margin: 2rem;
            transition: position .3s ease-in-out;
            &.main {
                z-index: 3;
                background-size: contain!important;
                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
</style>
