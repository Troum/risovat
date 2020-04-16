<template lang="pug">
    b-row.m-0.p-0.h-100
        b-col.mx-auto.p-0.dashboard( cols="11" )
            .header
                .d-flex.justify-content-center.align-items-center.item
                    h1.text-uppercase.red-block-after Кабинет
                .d-flex.justify-content-start.align-items-center.flex-column.item
                    b-navbar.w-100
                        b-navbar-nav.d-flex.justify-content-start.w-100
                            b-nav-item.mr-4.text-uppercase На главную
                            b-nav-item.mr-4.text-uppercase курсы(покупка)
                            b-nav-item.text-uppercase FAQ
                    b-navbar.w-100
                        b-navbar-nav.d-flex.justify-content-start.w-100
                            b-nav-item.mr-4.text-uppercase личная почта
                            b-nav-item.mr-4.text-uppercase достижения
                            b-nav-item.text-uppercase статистика
                .d-flex.justify-content-center.align-items-center.bg-light.item
                .d-flex.justify-content-center.align-items-center.item
                    div.circle
            .main
                .user-info
                    .item
                        p.mb-0 {{ $jwt.getUser().name }}
                    .item.level( :class="levelClass" )
                        p.mb-0 {{ $jwt.getUser().level }} lvl
                    .item
                .router-area
                .users-statuses
                    ul.users
                        li.user( v-for="item in $store.getters.online" :key="item.id" )
                            span.circle.online
                            small.font-weight-bold {{ item.name }}
                        li.user( v-for="item in $store.getters.offline" :key="item.id" )
                            span.circle.offline
                            small.font-weight-bold {{ item.name }}


</template>

<script>
    export default {
        name: "Dashboard",
        data() {
          return {
              levelClass: ''
          }
        },
        beforeMount() {
            this.getStatuses();
        },
        mounted() {
            switch (true) {
                case this.$jwt.getUser().level <= 10:
                    this.levelClass = 'low';
                    break;
                case this.$jwt.getUser().level <= 20:
                    this.levelClass = 'middle';
                    break;
                case this.$jwt.getUser().level <= 50:
                    this.levelClass = 'high';
                    break;
            }
            setTimeout(() => this.getStatuses(), 5 * 60 * 1000);
        },
        methods: {
            getStatuses() {
                this.$httpService.get('api/user/v1/statuses')
                    .then(response => {
                        this.$store.commit('users', response.data);
                    })
            }
        }
    }
</script>

<style scoped lang="scss">
    .dashboard {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 20% 80%;
        min-height: 80vh;
        border: 2px solid #000;
        & .header {
            display: grid;
            grid-column: 1 / -1;
            grid-row: 1 / 2;
            grid-template-columns: 25% 40% 15% 20%;
            grid-template-rows: 1fr;
            & .item {
                border-right: 2px solid #000;
                border-bottom: 2px solid #000;
                & .circle {
                    height: 100px;
                    width: 100px;
                    border-radius: 50%;
                    border: 5px solid #000;
                }
            }
            & .item {
                &:nth-child(4) {
                    border-bottom: 2px solid #000;
                    border-right: none;
                }
            }
        }
        & .main {
            grid-row: 2 / -1;
            grid-column: 1 / -1;
            display: grid;
            grid-template-columns: 30% 60% 10%;
            grid-template-rows: 1fr;
            & div {
                border-right: 2px solid #000;
                &.user-info {
                    display: grid;
                    grid-column: 1 / 2;
                    grid-row: 1;
                    grid-template-rows: 15% 8% 85%;
                    & .item {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-bottom: 2px solid #000;
                        border-right: none;
                        font-family: 'Roboto', sans-serif;
                        text-transform: uppercase;
                        font-weight: 300;
                        & p {
                            font-size: 2rem;
                        }
                        &:nth-child(1) {
                            background: #02c4a3;
                        }
                        &:last-of-type {
                            border-bottom: none;
                        }
                    }
                }
                &.users-statuses {
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: auto;
                    & ul.users {
                        display: grid;
                        grid-template-rows: auto;
                        grid-template-columns: repeat(2, 1fr);
                        list-style: none;
                        padding-left: 0;
                        & li.user {
                            display: block;
                            text-align: center;
                            padding: 5px;
                            & span.circle {
                                display: block;
                                margin: auto;
                                width: 31px;
                                height: 31px;
                                border-radius: 50%;
                                &.online {
                                    background: #02c4a3;
                                    border: 4px solid #d3d3d3;
                                }
                                &.offline {
                                    background: #b52000;
                                    border: 4px solid #d3d3d3;
                                }
                            }
                        }
                    }
                }
            }
            & div {
                &:nth-child(3) {
                    border-right: none;
                }
            }
        }
    }
    .low {
        background: mediumseagreen;
    }
    .middle {
        background: orange;
    }
    .high {
        background: #ff6565;
    }
</style>
