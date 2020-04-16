<template lang="pug">
    b-overlay( :show="$store.getters.show" )
        b-container#app.m-0.p-0( fluid )
            b-row.m-0.p-0.min-vh-100
                b-col.m-0.p-0( cols="12" )
                    b-navbar( toggleable="lg" )
                        b-navbar-brand.mx-auto( href="#" @click="$routerService.goTo('home')" )
                            img.img-fluid( src="@/assets/logo.png" alt="Logo" )
                        button.logout( v-if="$jwt.token()" type="button" @click="logout" ) выйти
                b-col.m-0.p-0.h-100( cols="12" )
                    transition( enter-active-class="animated fadeIn"
                                leave-active-class="animated fadeOut"
                                mode="out-in")
                        router-view
                b-col.mr-auto.risovat-slogan( cols="3" v-if="$store.getters.slogan !== ''")
                        p.font-weight-bold RISOVAT
                            span.font-weight-light - {{ $store.getters.slogan }}
            vue-snotify
            info-modal
</template>
<script>
    export default {
        mounted() {
            window.addEventListener('click', event => {
                let { target } = event;
                while (target && target.tagName !== 'A') target = target.parentNode;
                if (target && target.matches("a:not([href*='://'])") && target.href) {
                    const { altKey, ctrlKey, metaKey, shiftKey, button, defaultPrevented } = event;
                    if (metaKey || altKey || ctrlKey || shiftKey) return;
                    if (defaultPrevented) return;
                    if (button !== undefined && button !== 0) return;
                    if (target && target.getAttribute) {
                        const linkTarget = target.getAttribute('target');
                        if (/\b_blank\b/i.test(linkTarget)) return
                    }
                    const url = new URL(target.href);
                    const to = url.pathname;
                    if (window.location.pathname !== to && event.preventDefault) {
                        event.preventDefault();
                        this.$router.push(to);
                    }
                }
            });
            setTimeout(() => {
                if (!this.$cookies.get('registered') || !this.$cookies.get('lesson-one')) {
                    const info = '<div>' +
                        'Ты уже целые три минуты на сайте! Готов ли ты к первому уроку? Если готов - жми <a class="link" href="/lesson">сюда</a></div>' +
                        '</div>';
                    this.$root.$emit('show-info', info);
                }
            }, 3 * 60 * 1000);
        },
        methods: {
            logout() {
                this.$httpService.post('api/user/v1/auth/logout')
                    .then(response => {
                        this.$handler.success(response);
                        this.$jwt.remove();
                        this.$store.commit('auth', false);
                        this.$router.push({name: 'login'})
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .logout {
        border: none;
        text-align: center;
        font-weight: 600;
        text-transform: uppercase;
        &:hover {
            cursor: pointer;
        }
        &:focus {
            box-shadow: none;
            outline: none;
        }
    }
</style>
