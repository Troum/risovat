<template lang="pug">
    b-row.m-0.p-0.h-100.d-flex.justify-content-center.align-items-center.position-relative
        b-col.mx-auto( cols="10" )
            b-row.m-0.p-0
                b-col.mx-auto.p-0( cols="12")
                    lesson-component( :title="'урок 1.1: регистрация'"
                        :info="'<p>Брифинг: для продолжение бесплатного курса необходима регистрация</p><p>Цель: завести кабинет на сайте и получить бесплатные плюшки!</p><p>Рекомендации: стоит использовать клавиатуру и мышь, рекомендуется переключить раскладку на латиницу</p>'"
                        :description="'Понадобится: вписать свой почтовый адрес (например tot.chuvak.crew@gmail.com)'"
                     )
                        template( v-slot:frame )
                            b-row.m-0.p-5.w-100.h-100
                                b-col.mx-auto.h-100( cols="10" )
                                    b-row.m-0.p-0.h-100.d-flex.align-items-center
                                        b-col.mx-auto.align-self-start( cols="12" )
                                            p.h1.text-uppercase.text-center Как к вам обращаться?
                                        b-col.mx-auto( cols="12" @submit.prevent="submit" )
                                           b-form
                                                b-input-group
                                                    b-form-input#name.d-inline.rounded-0.bg-white( v-model="form.name" type="text"  )
                                                    template( v-slot:append )
                                                        b-button.d-inline.bg-transparent.p-0.rounded-0.ml-2( type="submit" )
                                                            img.img-fluid( src="@/assets/submit-button-bg.png" alt="Submit")
</template>

<script>
    export default {
        name: "Lesson",
        data() {
          return {
              form: {
                  name: null
              }
          }
        },
        mounted() {
            this.$cookies.set('lesson-one', true);
        },
        methods: {
            submit() {
                this.$store.commit('name', this.form.name );
                this.$routerService.goTo('register');
            }
        }
    }
</script>

<style scoped>

</style>
