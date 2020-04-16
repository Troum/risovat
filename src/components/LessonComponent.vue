<template lang="pug">
    .grid-container
        .grid-item.buttons
            b-button.lesson-button( type="button" )
                img.img-fluid( v-if="isVideo" src="@/assets/play-icon.png" alt="Play" )
                img.img-fluid( v-else src="@/assets/close-icon.png" alt="Close" )
            b-button.lesson-button( type="button" )
                img.img-fluid( src="@/assets/pause-icon.png" alt="Close" )
            b-button.lesson-button( type="button" )
                img.img-fluid( src="@/assets/stop-icon.png" alt="Close" )
            b-button.lesson-button( type="button" )
                img.img-fluid( src="@/assets/doppler-icon.png" alt="Close" )
        .grid-item.frame
            slot( name="frame" )
        .grid-item.right-side
            .item
                img.img-fluid( src="@/assets/orange.png" alt="Orange" )
            .item
                div( v-html="info" )
        .grid-item.last
                b-row.m-0.p-0
                    b-col.p-0.m-0( cols="12" )
                        p.h5.text-uppercase {{ title }}
                    b-col.p-0.m-0( cols="12" )
                        p {{ description }}
                    b-col.p-0.m-0.d-flex.align-items-center.justify-content-start( v-if="isVideo" cols="12" )
                        b-form-file.d-inline( accept="image/jpeg, image/png, image/gif" placeholder="")
                        b-button.d-inline.bg-transparent.p-0.rounded-0.ml-2( type="button" )
                            img.img-fluid( src="@/assets/submit-button-bg.png" alt="Submit")
</template>

<script>
    export default {
        name: "LessonComponent",
        props: {
            isVideo: null,
            title: null,
            description: null,
            info: null
        }
    }
</script>

<style lang="scss" scoped>
    .grid-container {
        display: grid;
        grid-template-columns: 10% 70% 20%;
        grid-template-rows: repeat(4, 20%) 1fr;
        & .grid-item {
            &.buttons {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: repeat(4, 25%);
                grid-row: 1 / -1;
                & .lesson-button {
                    background: transparent;
                    box-shadow: none;
                    border: none!important;
                    &:focus, &:hover {
                        background: transparent;
                        box-shadow: none;
                    };
                    &:first-of-type {
                        padding-top: 0;
                    };
                    &:last-of-type {
                        padding-bottom: 0;
                    }
                }
            };
            &.frame {
                grid-row: 1 / -1;
                border: 15px solid #000;
            };
            &.right-side {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 25% 75%;
                grid-row: 1 / -1;
                & .item {
                    padding: 1rem;
                    &:first-of-type {
                        border-bottom: 15px solid #000;
                    }
                }
            };
            &.last {
                grid-column: 2 / 3;
                padding-top: 10px;
            }
        }
    }
</style>
