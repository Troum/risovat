<template lang="pug">
    b-row.m-0.p-0.h-100.d-flex.justify-content-center.align-items-center.position-relative
        b-col.mx-auto( cols="10" )
            b-row.m-0.p-0
                b-col.mx-auto.p-0( cols="12")
                    b-row.m-0.p-0
                        b-col( cols="12" xl="4" order="2" order-xl="1")
                            img.img-fluid( src="@/assets/regimage.png" alt="Register Image" )
                        b-col.mx-xl-auto( cols="12" xl="6" order="1" order-xl="2")
                            h1.text-uppercase( v-if="!$cookies.get('verified')" ) Твой емейл подтвержден. Напоминаем: чтобы войти в учетку - используй&nbsp;
                                span.link( @click="$router.push({name: 'login'})" ) &nbsp;/login
                            h1.text-uppercase( v-else ) Ты уже подтвердил емейл.
                        b-col.d-none.d-xl-flex.justify-content-xl-center.rotating( xl="2" order-xl="3" )
                            img.img-fluid.d-xl-block.align-self-start( src="@/assets/regimage.png" alt="Register Image" style="transform: rotate(180deg)")
                            img.img-fluid.d-xl-block.align-self-center( src="@/assets/regimage.png" alt="Register Image" style="transform: rotate(-75deg); max-width: 40%")
                            img.img-fluid.d-xl-block.align-self-end( src="@/assets/regimage.png" alt="Register Image" style="transform: rotate(45deg); max-width: 50%")
                        b-col.d-none.d-xl-flex.justify-content-xl-center.rotating( xl="12" order-xl="4" )
                            img.img-fluid.d-xl-block.align-self-start( src="@/assets/regimage.png" alt="Register Image" style="transform: rotate(45deg); max-width: 10%")
</template>

<script>
    export default {
        name: "Verified",
        mounted() {
            this.$cookies.set('verified', true);
        }
    }
</script>

<style scoped lang="scss">
    .login {
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 38px;
    }
    small {
        font-size: 70%;
    }
    @-webkit-keyframes rotating /* Safari and Chrome */ {
        from {
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes rotating {
        from {
            -ms-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -ms-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @-webkit-keyframes negativeRotating /* Safari and Chrome */ {
        from {
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(-360deg);
            -o-transform: rotate(-360deg);
            transform: rotate(-360deg);
        }
    }
    @keyframes negativeRotating {
        from {
            -ms-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -ms-transform: rotate(-360deg);
            -moz-transform: rotate(-360deg);
            -webkit-transform: rotate(-360deg);
            -o-transform: rotate(-360deg);
            transform: rotate(-360deg);
        }
    }
    .rotating {
        & :first-child {
            -webkit-animation: rotating 120s linear infinite;
            -moz-animation: rotating 120s linear infinite;
            -o-animation: rotating 120s linear infinite;
            animation: rotating 120s linear infinite;
        }
        & :last-child {
            -webkit-animation: negativeRotating 120s linear infinite;
            -moz-animation: negativeRotating 120s linear infinite;
            -o-animation: negativeRotating 120s linear infinite;
            animation: negativeRotating 120s linear infinite;
        }
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
