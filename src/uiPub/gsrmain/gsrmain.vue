<template>
    <div class="content">
        <div class="main_visual top_visual">
            <div class="swiper mainSwiper" ref="mainSwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in t.mainVisual.items" :key="item.img">
                        <div class="slide"><!-- 26.06.02 Del 이종환 :style="{ backgroundImage: 'url(' + item.img + ')' }"> -->
                            <!-- 26.05.28 Del 이종환 <p class="main_copy">
                                <strong v-html="item.title"></strong>
                                <span>{{ item.sub }}</span>
                            </p> -->
                            <!-- 26.06.02 Add 이종환 : 영상 추가 -->
                            <div class="video_wrap">
                                <video autoplay muted playsinline>
                                    <source :src="item.vod" type="video/mp4">
                                </video>
                            </div>
                            <!-- //26.06.02 Add 이종환 : 영상 추가 -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section_wrap">

            <section v-if="t.sec03" class="sec03">
                <div class="inner">
                    <h2 v-html="t.sec03.title"></h2>

                    <div class="swiper Swiper" ref="sec03Swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="item in t.sec03.items" :key="item.img">
                                <div class="slide">
                                    <span class="thumb">
                                        <em><img :src="item.img" /></em>
                                    </span>
                                    <div>
                                        <em><img :src="item.sub" /></em>
                                        <p>
                                            <strong>{{ item.brand }}</strong>
                                            <span>{{ item.txt }}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section v-if="t.sec04" class="sec04">
                <h2 v-html="t.sec04.title"></h2>
                <!-- <p class="explain" v-html="t.sec04.explain"></p> -->
                <ul class="quick">
                    <li v-for="item in t.sec04.quick" :key="item.quick">
                        <a :href="item.link">{{ item.txt }}</a>
                    </li>
                </ul>

                <div class="swiper" ref="sec04Swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, i) in t.sec04.items" :key="i">
                            <a :href="item.link" class="slide">
                                <span class="thumb">
                                    <em><img :src="item.img" /></em>
                                </span>

                                <div class="txt">
                                    <ul>
                                        <li v-for="(sub, i) in item.item" :key="i">
                                            <em>{{ sub.cate }}</em>
                                        </li>
                                    </ul>

                                    <p v-html="item.title"></p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    </div>
</template>

```vue
<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Swiper from "swiper";
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: "gsrmain",

    props: {
        lang: { type: String },
    },

    data() {
        return {

            /* swiper 인스턴스 */
            swipers: {},

            /* language contents */
            langData: {
                ko: {
                    mainVisual: {
                        items: [
                            {
                                title: "Every Life.<br/> One Platform.",
                                sub: "GS리테일",
                                img: require("@/assets/images/dummy/main_visual_01.png"),
                                vod: require("@/assets/images/main/vod_visual_01.mp4")

                            },
                            // {
                            //     title: "Every Life.<br/> One Platform.",
                            //     sub: "GS리테일",
                            //     img: require("@/assets/images/dummy/main_visual_02.png")
                            // },
                            // {
                            //     title: "Every Life.<br/> One Platform.",
                            //     sub: "GS리테일",
                            //     img: require("@/assets/images/dummy/main_visual_03.png")
                            // }
                        ]
                    },

                    sec03: {
                        title: "GS리테일의<br/> 사업을 소개합니다.",

                        items: [
                            {
                                img: require("@/assets/images/main/main_sec03_01.png"),
                                sub: require("@/assets/images/main/main_sec03_01-1.png"),
                                brand: "GS25",
                                txt: "일상생활의 중심, 하루의 시작"
                            },
                            {
                                img: require("@/assets/images/main/main_sec03_02.png"),
                                sub: require("@/assets/images/main/main_sec03_02-1.png"),
                                brand: "GS THE FRESH",
                                txt: "신선한 행복을 만나다"
                            },
                            {
                                img: require("@/assets/images/main/main_sec03_03.png"),
                                sub: require("@/assets/images/main/main_sec03_03-1.png"),
                                brand: "GS SHOP",
                                txt: "고객의 라이프스타일을 가치 있게 만드는"
                            },
                        ]
                    },

                    sec04: {
                        title: "GS리테일의<br/> 소식을 전합니다.",

                        quick: [
                            { link: "#none", txt: "보도자료" },
                            { link: "#none", txt: "GS리테일 Newsroom" },
                        ],

                        items: [
                            {
                                img: require("@/assets/images/dummy/main_news_00.png"),
                                item: [
                                    { cate: "GS25" },
                                    { cate: "보도자료" }
                                ],
                                title: '01GS리테일, 상반기 공개채용 돌입…<br/> "청년 채용 물꼬 튼다!"',
                                link:'/gsrne0101'
                            },
                            {
                                img: require("@/assets/images/dummy/main_news_00.png"),
                                item: [
                                    { cate: "GS25" },
                                    { cate: "보도자료" }
                                ],
                                title: '02GS리테일, 상반기 공개채용 돌입…<br/> "청년 채용 물꼬 튼다!"',
                                link:'/gsrne0101'
                            },
                            {
                                img: require("@/assets/images/dummy/main_news_00.png"),
                                item: [
                                    { cate: "GS25" },
                                    { cate: "보도자료" }
                                ],
                                title: '03GS리테일, 상반기 공개채용 돌입…<br/> "청년 채용 물꼬 튼다!"',
                                link:'/gsrne0101'
                            },
                            {
                                img: require("@/assets/images/dummy/main_news_00.png"),
                                item: [
                                    { cate: "GS25" },
                                    { cate: "보도자료" }
                                ],
                                title: '04GS리테일, 상반기 공개채용 돌입…<br/> "청년 채용 물꼬 튼다!"',
                                link:'/gsrne0101'
                            },
                            {
                                img: require("@/assets/images/dummy/main_news_00.png"),
                                item: [
                                    { cate: "GS25" },
                                    { cate: "보도자료" }
                                ],
                                title: '05GS리테일, 상반기 공개채용 돌입…<br/> "청년 채용 물꼬 튼다!"',
                                link:'/gsrne0101'
                            },
                            {
                                img: require("@/assets/images/dummy/main_news_00.png"),
                                item: [
                                    { cate: "GS25" },
                                    { cate: "보도자료" }
                                ],
                                title: '06GS리테일, 상반기 공개채용 돌입…<br/> "청년 채용 물꼬 튼다!"',
                                link:'/gsrne0101'
                            },
                            {
                                img: require("@/assets/images/dummy/main_news_00.png"),
                                item: [
                                    { cate: "GS25" },
                                    { cate: "보도자료" }
                                ],
                                title: '07GS리테일, 상반기 공개채용 돌입…<br/> "청년 채용 물꼬 튼다!"',
                                link:'/gsrne0101'
                            },
                        ]
                    }
                }
            }
        };
    },

    computed: {
        t() {
            return this.langData[this.lang] || this.langData.ko;
        }
    },

    mounted() {

        this.handleSwiper();

        window.addEventListener(
            "resize",
            this.handleSwiper
        );
    },

    beforeUnmount() {

        window.removeEventListener(
            "resize",
            this.handleSwiper
        );

        this.destroySwiper([
            "main",
            "sec03",
            "sec04"
        ]);
    },

    methods: {

        /* =========================
           Swiper 생성
        ========================= */

        createSwiper(key, el, options) {

            if (!el) return;

            if (!this.swipers[key]) {

                this.swipers[key] = new Swiper(
                    el,
                    options
                );
            }
        },

        /* =========================
           Swiper 제거
        ========================= */

        destroySwiper(names) {

            if (!Array.isArray(names)) {
                names = [names];
            }

            names.forEach(name => {

                if (this.swipers[name]) {

                    this.swipers[name].destroy(
                        true,
                        true
                    );

                    delete this.swipers[name];
                }

                /* 남은 클래스 제거 */
                const el = this.$refs[`${name}Swiper`];

                if (el) {

                    el.classList.remove(
                        "swiper-initialized",
                        "swiper-horizontal",
                        "swiper-backface-hidden"
                    );

                    /* inline style 제거 */
                    el.removeAttribute("style");

                    const wrapper =
                        el.querySelector(".swiper-wrapper");

                    if (wrapper) {

                        wrapper.removeAttribute("style");
                    }

                    const slides =
                        el.querySelectorAll(".swiper-slide");

                    slides.forEach(slide => {

                        slide.removeAttribute("style");
                    });
                }
            });
        },

        /* =========================
           반응형 swiper
        ========================= */

        handleSwiper() {

            const width = window.innerWidth;

            /* 메인 비주얼 */
            this.createSwiper(
                "main",
                this.$refs.mainSwiper,
                {
                    loop: true,
                    slidesPerView: 1,
                    speed: 800,
                }
            );

            /* desktop */
            if (width > 768) {

                this.createSwiper(
                    "sec03",
                    this.$refs.sec03Swiper,
                    {
                        loop: false,
                        slidesPerView: 3,
                        spaceBetween: 12,
                        speed: 800,
                    }
                );

                this.createSwiper(
                    "sec04",
                    this.$refs.sec04Swiper,
                    {
                        loop: true,
                        slidesPerView: 3.2,
                        spaceBetween: 12,
                        centeredSlides: true,
                        speed: 800,
                        observer: true,
                        observeParents: true,
                        resizeObserver: true,
                    }
                );

            } else {

                /* mobile */
                this.destroySwiper([
                    "sec03",
                    "sec04"
                ]);
            }
        }
    }
};
</script>

<style scope>
h2 {
    font-size: 7.2rem;
    font-weight: 700;
    line-height: 124%;
    letter-spacing: -0.02em;
    text-align: center;
}

h2+.explain {
    font-size: 2rem;
    line-height: 150%;
    letter-spacing: -0.02em;
}

.main_visual {
    width: 100%;
    position: sticky;
    top: 0;
    overflow: hidden;
}

.main_visual .slide {
    height: 100vh;
    padding: 60px 120px;
    background-position: 50%;
    background-size: cover;
    position:relative;
    display: flex;
    align-items: center;
}

.main_visual .slide .video_wrap {
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
}

.main_copy strong {
    color: #fff;
    font-size: 8rem;
    line-height: 1.2;
    text-align: center;
}

.main_copy span {
    margin-top: 20px;
    color: #fff;
    font-size: 4rem;
    display: block;
}

.section_wrap {
    background-color: #fff;
    position: relative;
    z-index: 1;
}

section {
    padding-top: 200px;
    position: relative;
}

.sec03 .inner {
    max-width: 1720px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
}

.sec03 .swiper {
    width: 100%;
    max-width: 1680px;
    margin: 0 auto;
}

.sec03 .slide {
    position: relative;
}

.sec03 .slide .thumb {
    padding-top:126.811594%;
    border-radius:12px;
    display:block;

}

.sec03 .slide .thumb em {
    position:absolute;
    top:0; right:0; bottom:0; left:0;
}

.sec03 .slide div {padding:30px; position:absolute; right:0; bottom:0; left:0; flex: 1;
    display: flex;
    align-items: center;
    gap: 20px;}

.sec03 .slide div em {display:flex; align-items:center;}

.sec03 .slide p {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap:2px;
}

.sec03 .slide p strong {
    color: #fff;
    font-size: 4rem;
    letter-spacing: -0.01em;
    line-height: 130%;
}

.sec03 .slide p span {
    color: #E5E5E9;
    font-size: 2.4rem;
    letter-spacing: -0.01em;
    line-height: 150%;
}

.sec04 .explain {
    margin-top: 24px;
    font-size: 2rem;
    letter-spacing: -0.01em;
    line-height: 135%;
    text-align: center;
}

.sec04 .quick {
    display: flex;
    justify-content: center;
    gap: 12px;
}

.sec04 .quick a {
    padding: 20px 24px;
    color: #000;
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    line-height: 135%;
    display: flex;
    align-items: center;
    gap: 12px;
}

.sec04 .quick a:after {
    width: 16px;
    height: 16px;
    background:url('@/assets/images/main/icon_arrow.png') 0 0 no-repeat;
    content: '';
    display: block;
}

.sec03 .swiper, .sec04 .swiper {
    margin-top: 80px;
}

.sec04 .swiper-slide {
    width: auto;
    flex-shrink:0;
}

.sec04 .slide {
    position: relative;
}

.sec04 .slide .txt {
    padding: 30px 20px 0;
    display: flex;
    flex-direction: column;
}

.sec04 .slide .txt ul {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 4px;
}

.sec04 .slide .txt li em {
    padding: 1px 11px;
    font-size: 1.6rem;
    letter-spacing: -0.01em;
    line-height: 150%;
    border: 1px solid #161616;
    border-radius: 100px;
    display: block;
}

.sec04 .slide .txt p {
    font-size: 2.4rem;
    letter-spacing: -0.01em;
    line-height: 150%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

/* --- [Tablet: 769px ~ 1024px] --- */
@media screen and (max-width: 1024px) {
    h2 {
        font-size: 5.2rem;
    }

    .sec03 h2 {
        position: relative;
        left: 0;
        width: 100%;
        margin-bottom: 40px;
    }

    .sec03 .slide .thumb {
        width: 50%;
    }
}

/* --- [Mobile: 768px 이하] --- */
@media screen and (max-width: 768px) {
    #container {
        padding-top:0;
        padding-bottom:0;
    }

    h2 {
        font-size: 3.2rem;
        text-align: center;
        word-break: keep-all;
    }

    h2+.explain {
        font-size: 1.6rem;
        text-align: center;
        padding: 0 20px;
    }

    /* 메인 비주얼 */
    .main_visual .slide {
        padding: 40px 20px;
        height: 100vh;
    }

    .main_copy strong {
        font-size: 4.8rem;
    }

    .main_copy span {
        font-size: 2.4rem;
    }

    .sec03 {
        padding-top: 50px;
        padding-bottom: 100px;
    }

    .sec03 .swiper {
        width: auto;
        margin:0;
    }

    .sec03 .swiper-wrapper {
        flex-direction:column;
    }

    .sec03 .swiper-slide + .swiper-slide {margin-top:12px;}

    .sec03 .slide {
        align-items: flex-start;
        flex-direction: column;
    }

    .sec03 .slide .thumb {
        width: 100%;
    }

    .sec03 .slide p strong {
        font-size: 2.8rem;
        line-height:135%;
    }

    .sec03 .slide p span {
        font-size: 1.6rem;
        line-height:124%;
    }

    /* Section 04 (세로 리스트화) */
    .sec04 {
        padding-top: 50px;
        padding-right: 20px;
        padding-bottom: 150px;
        padding-left: 20px;
    }

    .sec04:after {
        width: 60vw;
        height: 100vw;
        background-size: contain;
        bottom: 95%;
    }

    .sec04 .explain {
        font-size: 1.4rem;
        line-height: 140%;
    }

    .sec04 .quick {
        margin-top: 22px;
    }

    .sec04 .quick a {
        padding: 26px 10px;
        font-size: 1.6rem;
    }

    .sec04 .swiper {
        margin-top: 60px;
    }

    .sec04 .swiper-wrapper {
        display: flex;
        flex-direction: column;
        gap: 28px;
    }

    .sec04 .swiper-slide {
        width: 100% !important;
    }

    .sec04 .slide .txt {
        position: relative;
        padding: 20px 0;
        background: none;
    }

    .sec04 .slide .txt * {
        color: #222;
    }

    .sec04 .slide .txt p {
        font-size: 2rem;
        font-weight:700;
        line-height: 135%;
    }

    .sec04 .slide .txt li em {
        border-color: #222;
    }
}
</style>