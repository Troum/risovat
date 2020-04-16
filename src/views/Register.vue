<template lang="pug">
    b-row.m-0.p-0.h-100.d-flex.justify-content-center.align-items-center.position-relative
        b-col.mx-auto( cols="10" )
            b-row.m-0.p-0
                b-col.mx-auto.p-0( cols="12")
                    b-row.m-0.p-0
                        b-col( cols="4" )
                            img.img-fluid( src="@/assets/regimage.png" alt="Register Image" )
                        b-col( cols="8" v-if="!$cookies.get('registered')")
                            h1.text-uppercase регистрация
                            validation-observer( ref="observer" v-slot="{ passes }" )
                                b-form( @submit.prevent="passes(submit)" )
                                    b-row.m-0.p-0
                                        b-col.p-0.mr-auto( cols="5" )
                                            validation-provider( name="Имя" rules="required" v-slot="{ errors }" )
                                                b-form-group.my-3(
                                                    label="как к вам обращаться?" label-class="risovat-label")
                                                    b-form-input.rounded-0.bg-white( v-model="form.name" type="text" autocomplete="off" :class="errors[0] ? 'border-danger' : ''" )
                                                transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                    .text-danger( v-if="errors[0]" )
                                                        small.font-weight-bold {{ errors[0] }}
                                            validation-provider( name="Почта" rules="required|email" v-slot="{ errors }" )
                                                b-form-group.my-3( label="ваша почта" label-class="risovat-label")
                                                    b-form-input.rounded-0.bg-white( v-model="form.email" type="email" autocomplete="off" :class="errors[0] ? 'border-danger' : ''" )
                                                transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                    .text-danger( v-if="errors[0]" )
                                                        small.font-weight-bold {{ errors[0] }}
                                            validation-provider( name="Пароль" rules="required|confirmed:confirmation" v-slot="{ errors }" )
                                                b-form-group.my-3( label="пароль" label-class="risovat-label")
                                                    b-form-input.rounded-0.bg-white( v-model="form.password" type="password" autocomplete="off" :class="errors[0] ? 'border-danger' : ''" )
                                                transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                    .text-danger( v-if="errors[0]" )
                                                        small.font-weight-bold {{ errors[0] }}
                                            validation-provider( vid="confirmation" v-slot="{ errors }" )
                                                b-form-group.my-3( label="повторите пароль" label-class="risovat-label")
                                                    b-form-input.rounded-0.bg-white( v-model="form.password_confirmation"  type="password" autocomplete="off" :class="errors[0] ? 'border-danger' : ''" )
                                                transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                    .text-danger( v-if="errors[0]" )
                                                        small.font-weight-bold {{ errors[0] }}

                                        b-col.p-0.ml-auto.risovat-register-grid( cols="5" )
                                            validation-provider( name="Капча" rules="required|captcha" v-slot="{ errors }" )
                                                b-form-group.my-3.item( label="капча" label-class="risovat-label")
                                                    b-form-input.rounded-0.bg-white( v-model="form.captcha" type="text" autocomplete="off" :class="errors[0] ? 'border-danger' : ''" )
                                                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                        .text-danger( v-if="errors[0]" )
                                                            small.font-weight-bold {{ errors[0] }}
                                                    canvas#captcha
                                                    img.img-fluid( src="@/assets/captcha.png" alt="Captcha" style="margin-top: -35%" )
                                            b-form-group.item
                                                b-button.w-100.rounded-0.text-uppercase( type="submit" variant="success" size="lg" )
                                                    small Завершить регистрацию
                        b-col( cols="8" v-else)
                            p Теперь ты уже зарегился. Теперь проверяй почту или можешь вернуться на
                                span.link( @click="$router.push({name: 'home'})" ) &nbsp;главную страницу&nbsp;
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                form: {
                    name: null,
                    email: null,
                    password: null,
                    password_confirmation: null,
                    captcha: null
                },
                info: '<p>Запомни: после верификации своего емейла ты сможешь зайти в свою учетку через ссылку ' +
                    '<router-link to="login">/login</router-link>. Сохрани это в памяти</p>'
            }
        },
        mounted() {
            this.form.name = localStorage.getItem('name');
            this.$cookies.get('registered') ? null: this.$captcha.generate();
        },
        methods: {
          submit() {
            this.$store.commit('show', true);
            this.$httpService.post('api/user/v1/register', this.$fdService.fill(this.form))
              .then(response => {
                  this.$handler.success(response);
                  this.$fdService.reset(this.form);
                  this.reset();
                  this.$root.$emit('show-info', this.info);
                  this.$cookies.set('registered', true);
              })
              .catch(error => {
                  this.$handler.error(error);
                  this.$router.push({name: 'dashboard'})
              })
              .finally(() => this.$store.commit('show', false))
          },
            reset() {
              this.$refs.observer.reset();
            }
        },
        computed: {
            name() {
                return this.form.name;
            }
        }
    }
</script>

<style scoped lang="scss">
    .risovat-register-grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 50% 50%;
        & .item {
            &:last-of-type {
                align-self: end;
                & button {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    max-height: 38px;
                }
            }
        }
    }
    #captcha {
        max-height: 100%;
        width: 100%;
    }
    small {
        font-size: 70%;
    }
    .link {
        text-decoration: none;
        font-weight: 600;
        color: #000;
        &:hover {
            cursor: pointer;
            color: #000;
            text-decoration: none;
        }
    }
</style>
