<template lang="pug">
    b-row.m-0.p-0.h-100.d-flex.justify-content-center.align-items-center.position-relative
        b-col.mb-xl-5.p-xl-1.mx-auto( cols="10" xl="11" )
            img.img-fluid( src="../assets/about.png" alt="About Us")
        b-col.my-xl-5.mx-auto.about( cols="10" xl="11" )
            .slogan
                h1.mb-0.red-block-before risovat.design&nbsp;&mdash;
            .figure
                img.img-fluid( src="../assets/figure.png" alt="About Us Figure")
            .description
                p.mb-xl-5 это независимая платформа для обучения в онлайн среде. мы - молодые специалисты по дизайну, рисунку и 3д-моделированию. наша задача - распространить обширные знания в массу.
                p.mb-xl-5 более 10-ти лет мы формировали свой опыт, получали новые знания в сфере искусств, чтобы поделиться с вами.
                p.mb-xl-5.red-block-after мы внимательно следим за тендециями и совершенствуемся, чтобы давать вам всегда свежие и актуальные знания.
                img.img-fluid.d-block.mx-auto( src="../assets/shape.png" alt="About Us Shape One" )
            .hand-shape
                img.img-fluid.d-block.mx-auto( src="../assets/hand-shape.png" alt="About Us Hand Shape" )
            .teacher
                .title наши преподы
                .line
                    img.img-fluid( src="../assets/waved-line.png" alt="About Us Waved Line" )
                .teacher-name
                    p.text-center ЛЁХА
                .teacher-info
                    div
                        p.my-xl-2 Умень инсть укаций. Ументор ностругие публавление полят вать надывать удежно прокуменят вы ная реда длять объекту рантиру емениевку всех эффей ко дей. Надейст иругие
                        p.my-xl-2 более 10-ти лет мы формировали свой опыт, получали новые знания в сфере искусств, чтобы
                        p.my-xl-2 мы внимательно следим за тендециями и совершенствуемся, чтобы давать вам всегда свежие и актуальные знания.
                        div.ml-xl-5
                            img.img-fluid( src="../assets/end-shape.png" alt="About Us End Shape" )
                    .teacher-avatar
                        img.img-fluid( src="../assets/teacher-avatar.png" alt="About Us Teacher Avatars" )
</template>
<style lang="scss" scoped>
    .about {
        display: grid;
        grid-template-columns: 30% 1fr;
        grid-template-rows: auto;
        & .slogan {
            min-height: 90px;
            grid-column: 1 / 2;
            & h1 {
                text-transform: uppercase;
            }
        }
        & .figure {
            display: flex;
            justify-content: center;
            align-items: center;
            grid-column: 1 / 2;
            grid-row: 2 / 3;
        }
        & .description {
            font-size: 2.5rem;
            line-height: 3rem;
            text-transform: uppercase;
            grid-column: 2;
            grid-row: 1 / 3;
        }
        & .hand-shape {
            z-index: 2;
            margin-top: -6%;
            grid-column: 1 / -1;
            grid-row: 3;
        }
        & .teacher {
            z-index: 3;
            margin-top: -3%;
            grid-column: 1 / -1;
            grid-row: 4;
            display: grid;
            grid-template-columns: 7% 20% 1fr;
            grid-template-rows: auto;
            & .title {
                grid-column: 1 / 3;
                font-size: 2.5rem;
                line-height: 3rem;
                text-transform: uppercase;
            }
            & .line {
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
            & .teacher-name {
                margin-top: 5%;
                text-transform: uppercase;
                grid-column: 1 / 3;
                font-size: 2.5rem;

            }
            & .teacher-info {
                grid-column: 1 / -1;
                display: grid;
                grid-template-columns: 60% 40%;
                grid-template-rows: 1fr;
                font-size: 2rem;
                text-transform: uppercase;
            }
            .teacher-avatar {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>
