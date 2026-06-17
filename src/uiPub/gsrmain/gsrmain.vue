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
                                <video autoplay muted playsinline loop> <!-- 26.06. 16 Add 정다희 : 영상 루핑 -->
                                    <source :src="item.vod" type="video/mp4" />
                                </video>
                            </div>
                            <!-- //26.06.02 Add 이종환 : 영상 추가 -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 26.06.17 Add 정다희 : Hero message 영역 추가 -->
        <div class="hero_message" ref="heroMessageRef" v-if="t.heroMessage">
            <div class="inner">
                <p v-html="t.heroMessage.title"></p>
                <ul>
                    <li v-for="(item, index) in t.heroMessage.items" :key="index">
                        <dl>
                            <dt>{{ item.dt }}</dt>
                            <dd>
                                <strong class="num_count">
                                    <span class="num_motion_wrap"><span class="num_motion">{{ item.num }}</span></span>
                                    <span class="num_unit_wrap"><span class="num_unit">{{ item.unit }}</span></span>
                                </strong>
                                <span class="num_desc" v-html="item.desc"></span>
                            </dd>
                        </dl>
                    </li>
                </ul>
            </div>
        </div>
        <!-- /Hero message -->
        <div class="section_wrap">
            <section v-if="t.sec03" class="sec03">
                <div class="inner">
                    <h2 v-html="t.sec03.title"></h2>

                    <div class="swiper Swiper" ref="sec03Swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="item in t.sec03.items" :key="item.img">
                                <div class="slide">
                                    <span class="thumb">
                                        <!-- 260616 add 정다희 : 웹접근성 alt 추가 -->
                                        <em><img :src="item.img" :alt="item.brand" /></em>
                                    </span>
                                    <div>
                                        <!-- 260616 add 정다희 : 웹접근성 alt 추가 -->
                                        <em><img :src="item.sub" :alt="item.brand + ' 로고'" /></em>
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
                        <!-- 260616 edit 정다희 : sec04SwiperItems — loop 버퍼용 슬라이드(데스크톱 14개)  -->
                        <div class="swiper-slide" v-for="(item, i) in sec04SwiperItems" :key="i">
                            <a :href="item.link" class="slide">
                                <span class="thumb">
                                    <!-- 260616 add 정다희 : 웹접근성 alt 추가 -->
                                    <em><img :src="item.img" :alt="item.title.replace(/<[^>]*>/g, '')" /></em>
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

            /* 260616 add 정다희 : num_motion GSAP 컨텍스트 */
            gsapCtx: null,
            numMotionPlayed: false,
            numMotionScrollTrigger: null,

            /* 260616 add 정다희 : sec04 loop — 데스크톱/모바일 분기(모바일은 슬라이드 복제 없이 세로 리스트) */
            isDesktopView: typeof window !== "undefined" ? window.innerWidth > 768 : true,

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

                    /* 260616 add 정다희 : hero_message */
                    heroMessage: {
                        title: '고객의 모든 <span class="txt_orange">경험</span>을 연결하고, <br />데이터로 <span class="txt_green">공감</span>하며,<br />상품과 서비스로 <span class="txt_blue">신뢰</span>받는 플랫폼',
                        items: [
                            {
                                dt: "전국 오프라인 점포 수",
                                num: "18,600+",
                                unit: "점",
                                desc: "(2025.12 기준)",
                            },
                            {
                                dt: "GS ALL 멤버십 가입자 수",
                                num: "2,344+",
                                unit: "만명",
                                desc: "(2026. 1분기 기준)",
                            },
                            {
                                dt: "고객 만족도&서비스 품질",
                                num: "1",
                                unit: "위",
                                desc: "2025 한국산업의 고객 만족도 (편의점, 수퍼)<br />2025 한국서비스 품질지수 (편의점, 수퍼, 홈쇼핑)",
                            },
                        ],
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
                },
                en: {
                    mainVisual: {
                        items: [
                            {
                                title: "Every Life.<br/> One Platform.",
                                sub: "GS Retail",
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

                    /* 260616 add 정다희 : hero_message */
                    heroMessage: {
                       
                    },

                    sec03: {
                        title: "GS Retail's<br/> Introducing our businesses."/* 260604 번역 */,

                        items: [
                            {
                                img: require("@/assets/images/main/main_sec03_01.png"),
                                sub: require("@/assets/images/main/main_sec03_01-1.png"),
                                brand: "GS25",
                                txt: "The center of daily life, the start of the day"/* 260604 번역 */
                            },
                            {
                                img: require("@/assets/images/main/main_sec03_02.png"),
                                sub: require("@/assets/images/main/main_sec03_02-1.png"),
                                brand: "GS THE FRESH",
                                txt: "Meet Fresh Happiness"/* 260604 번역 */
                            },
                            {
                                img: require("@/assets/images/main/main_sec03_03.png"),
                                sub: require("@/assets/images/main/main_sec03_03-1.png"),
                                brand: "GS SHOP",
                                txt: "Adding value to customers' lifestyles"/* 260604 번역 */
                            },
                        ]
                    },

                    sec04: {
                        title: "GS Retail's<br/> Sharing our news."/* 260604 번역 */,

                        quick: [
                            { link: "#none", txt: "Press Releases" },
                            { link: "#none", txt: "GS Retail Newsroom" },
                        ],

                        items: [
                            {
                                img: require("@/assets/images/dummy/main_news_00.png"),
                                item: [
                                    { cate: "GS25" },
                                    { cate: "Press Releases" }
                                ],
                                title: '01 GS Retail Launches First-Half Open Recruitment…<br/> "Paving the Way for Youth Employment!"'/* 260604 번역 */,
                                link:'/gsrne0101'
                            },
                            {
                                img: require("@/assets/images/dummy/main_news_00.png"),
                                item: [
                                    { cate: "GS25" },
                                    { cate: "Press Releases" }
                                ],
                                title: '02 GS Retail Launches First-Half Open Recruitment…<br/> "Paving the Way for Youth Employment!"'/* 260604 번역 */,
                                link:'/gsrne0101'
                            },
                            {
                                img: require("@/assets/images/dummy/main_news_00.png"),
                                item: [
                                    { cate: "GS25" },
                                    { cate: "Press Releases" }
                                ],
                                title: '03 GS Retail Launches First-Half Open Recruitment…<br/> "Paving the Way for Youth Employment!"'/* 260604 번역 */,
                                link:'/gsrne0101'
                            },
                            {
                                img: require("@/assets/images/dummy/main_news_00.png"),
                                item: [
                                    { cate: "GS25" },
                                    { cate: "Press Releases" }
                                ],
                                title: '04 GS Retail Launches First-Half Open Recruitment…<br/> "Paving the Way for Youth Employment!"'/* 260604 번역 */,
                                link:'/gsrne0101'
                            },
                            {
                                img: require("@/assets/images/dummy/main_news_00.png"),
                                item: [
                                    { cate: "GS25" },
                                    { cate: "Press Releases" }
                                ],
                                title: '05 GS Retail Launches First-Half Open Recruitment…<br/> "Paving the Way for Youth Employment!"'/* 260604 번역 */,
                                link:'/gsrne0101'
                            },
                            {
                                img: require("@/assets/images/dummy/main_news_00.png"),
                                item: [
                                    { cate: "GS25" },
                                    { cate: "Press Releases" }
                                ],
                                title: '06 GS Retail Launches First-Half Open Recruitment…<br/> "Paving the Way for Youth Employment!"'/* 260604 번역 */,
                                link:'/gsrne0101'
                            },
                            {
                                img: require("@/assets/images/dummy/main_news_00.png"),
                                item: [
                                    { cate: "GS25" },
                                    { cate: "Press Releases" }
                                ],
                                title: '07 GS Retail Launches First-Half Open Recruitment…<br/> "Paving the Way for Youth Employment!"'/* 260604 번역 */,
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
        },

        /* 260616 add 정다희 : loop 버퍼용 슬라이드 복제(데스크톱만) — 원본 7개로는 넓은 화면 loop 우측 공백 발생 */
        sec04SwiperItems() {
            const items = this.t?.sec04?.items ?? [];

            if (!items.length) return [];

            return this.isDesktopView ? items.concat(items) : items;
        },
    },

    mounted() {

        /* 260616 add 정다희 : DOM 렌더 후 swiper · num_motion 초기화 */
        this.$nextTick(() => {
            this.handleSwiper();
            this.initNumMotion();
        });

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

        /* 260616 add 정다희 : num_motion ScrollTrigger · 타임라인 정리 */
        if (this.numMotionScrollTrigger) {
            this.numMotionScrollTrigger.kill();
            this.numMotionScrollTrigger = null;
        }

        if (this.gsapCtx) {
            this.gsapCtx.revert();
            this.gsapCtx = null;
        }
    },

    methods: {

        /* =========================
           num_motion 숫자 애니메이션
        ========================= */

        /* 260616 add 정다희 : 목표 텍스트(18,600+ 등) 파싱 */
        parseNumMotionValue(text) {
            const suffix = text.endsWith("+") ? "+" : "";
            const value = parseInt(text.replace(/[^0-9]/g, ""), 10) || 0;
            const useComma = text.includes(",");

            return { value, suffix, useComma };
        },

        /* 260616 add 정다희 : 카운트업 표시 포맷 */
        formatNumMotionValue(num, useComma, suffix) {
            const formatted = useComma
                ? Math.round(num).toLocaleString("en-US")
                : String(Math.round(num));

            return `${formatted}${suffix}`;
        },

        /* 260616 add 정다희 : hero_message 진입 시 슬라이드업(0) → 카운트업 (1회 재생) */
        initNumMotion() {
            if (this.numMotionPlayed || this.gsapCtx) return;

            const heroEl = this.$refs.heroMessageRef;

            if (!heroEl) return;

            const numEls = heroEl.querySelectorAll(".num_motion");

            if (!numEls.length) return;

            const timelines = [];

            const playNumMotion = () => {
                if (this.numMotionPlayed) return;

                this.numMotionPlayed = true;

                timelines.forEach((tl) => {
                    if (!tl.isActive()) tl.play(0);
                });

                if (this.numMotionScrollTrigger) {
                    this.numMotionScrollTrigger.kill();
                    this.numMotionScrollTrigger = null;
                }
            };

            this.gsapCtx = gsap.context(() => {
                numEls.forEach((el) => {
                    const targetText = el.textContent.trim();
                    const { value, suffix, useComma } = this.parseNumMotionValue(targetText);
                    const counter = { val: 0 };
                    const unitWrap = el.closest(".num_count")?.querySelector(".num_unit_wrap");

                    el.textContent = "0";
                    gsap.set(el, { y: "100%", opacity: 0, willChange: "transform, opacity" });
                    if (unitWrap) unitWrap.style.display = "none";

                    const tl = gsap.timeline({ paused: true, repeat: 0 });

                    tl.to(el, {
                        y: "0%",
                        opacity: 1,
                        duration: 0.6,
                        ease: "power2.out",
                    }).to(counter, {
                        val: value,
                        duration: value > 100 ? 1.8 : 1,
                        ease: "power2.out",
                        onStart: () => {
                            if (unitWrap) unitWrap.style.display = "inline-block";
                        },
                        onUpdate: () => {
                            el.textContent = this.formatNumMotionValue(counter.val, useComma, suffix);
                        },
                        onComplete: () => {
                            gsap.set(el, { willChange: "auto" });
                        },
                    }, ">");

                    timelines.push(tl);
                });

                this.numMotionScrollTrigger = ScrollTrigger.create({
                    trigger: heroEl,
                    start: "top 80%",
                    once: true,
                    onEnter: playNumMotion,
                });
            }, this.$el);
        },

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

        /* 260616 add 정다희 : sec04 무한 loop swiper — centeredSlides 제거, 슬라이드 복제 후 재생성 */
        initSec04Swiper() {

            const el = this.$refs.sec04Swiper;

            if (!el) return;

            this.destroySwiper("sec04");

            this.swipers.sec04 = new Swiper(el, {
                loop: true,
                slidesPerView: "auto",
                spaceBetween: 12,
                speed: 800,
                watchSlidesProgress: true,
                on: {
                    /* 260616 add 정다희 : 초기 렌더 시 우측 빈 영역 방지 — layout 확정 후 update·첫 슬라이드 이동 */
                    init(swiper) {
                        requestAnimationFrame(() => {
                            swiper.update();
                            swiper.slideToLoop(0, 0, false);
                        });
                    },
                },
            });

            this.syncSec04Swiper();
        },

        /* 260616 add 정다희 : sec04 이미지 로드·리사이즈 후 swiper 위치 재계산 */
        syncSec04Swiper() {

            const swiper = this.swipers.sec04;
            const el = this.$refs.sec04Swiper;

            if (!swiper || !el) return;

            const refresh = () => {
                swiper.update();
                swiper.slideToLoop(swiper.realIndex || 0, 0, false);
            };

            const imgs = el.querySelectorAll("img");
            let pending = 0;

            imgs.forEach((img) => {
                if (img.complete) return;
                pending += 1;
                img.addEventListener("load", () => {
                    pending -= 1;
                    if (pending <= 0) refresh();
                }, { once: true });
            });

            refresh();
        },

        /* =========================
           반응형 swiper
        ========================= */

        handleSwiper() {

            const width = window.innerWidth;

            /* 260616 add 정다희 : sec04SwiperItems 복제 여부 갱신 */
            this.isDesktopView = width > 768;

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
            if (this.isDesktopView) {

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

                /* 260616 add 정다희 : 슬라이드 DOM(복제본) 반영 후 sec04 swiper 생성 */
                this.$nextTick(() => {
                    this.initSec04Swiper();
                });

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
    /* padding: 60px 120px; */
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

.main_visual .slide .video_wrap video {
    width: 100%;
    height: 100%;
    object-fit: cover;
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


.hero_message{padding-top:210px;background-color: #fff;position: relative;}
.hero_message .inner{max-width: 1720px;margin: 0 auto;padding: 0 20px;}
.hero_message p{font-weight: 700;font-size: 6.8rem;line-height: 1.24;letter-spacing: -0.02em;}
.hero_message p span{font-weight: 800;}
.hero_message p span.txt_orange{color: #FB6432;}
.hero_message p span.txt_green{color: #15B874;}
.hero_message p span.txt_blue{color: #248BFF;}
.hero_message ul{max-width:1045px;margin-top:90px;margin-left: auto;;}
.hero_message ul > li{padding: 20px 8px;border-bottom: 1px solid #000;}
.hero_message ul > li:first-child{border-top: 1px solid #000;}
.hero_message ul > li dl{display: grid;grid-template-columns: minmax(200px, 240px) minmax(0, 1fr);column-gap: clamp(32px, 6vw, 120px);align-items: center;}
.hero_message ul > li dl > dt{width: auto;font-weight: 600;font-size: 2.4rem;line-height: 1.35;letter-spacing: -0.03em;}
.hero_message ul > li dl > dd{display: flex;align-items: flex-end;flex-wrap: nowrap;min-width: 0;}
.hero_message ul > li dl > dd .num_count { display: inline-flex; align-items: flex-end; flex-wrap: nowrap; flex-shrink: 0; white-space: nowrap; }
.hero_message ul > li dl > dd .num_count > .num_motion_wrap { display: inline-block; overflow: hidden; vertical-align: bottom; flex-shrink: 0; }
.hero_message ul > li dl > dd .num_count > .num_motion_wrap > .num_motion { display: inline-block; font-weight: 700; font-size: 7.2rem; letter-spacing: -0.02em; line-height: 1.24; }
.hero_message ul > li dl > dd .num_count > .num_unit_wrap { display: none; vertical-align: bottom; flex-shrink: 0; }
.hero_message ul > li dl > dd .num_count > .num_unit_wrap > .num_unit{display: inline-block;font-weight: 600; font-size: 3.2rem;line-height: 1.84;letter-spacing: -0.03em;}
.hero_message ul > li dl > dd .num_count + .num_desc{margin-left: clamp(12px, 1.25vw, 18px);padding: 5px 0;color:#4C4C53;font-weight: 400;font-size: 2rem;line-height: 1.35;letter-spacing: 0%;min-width: 0;flex-shrink: 1;}
.hero_message ul > li:last-child dl > dd .num_count + .num_desc{padding:17px 32px 17px 0;}
.hero_message ul > li:last-child dl > dd .num_count + .num_desc{margin-left: clamp(12px, 1.25vw, 18px);}
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

.sec04 .swiper { width: 100%; overflow: hidden; }

/* 260616 add 정다희 : slidesPerView auto — 슬라이드 552px 고정(loop 초기 복제·우측 공백 방지), thumb는 slide 너비 100% */
.sec04 .swiper-slide { width: 552px; flex-shrink: 0; }

.sec04 .slide {
    position: relative;
}
.sec04 .slide .thumb em { width: 100%; display: block; }
.sec04 .slide .thumb img{width:100%; height:550px; object-fit: cover;display:block;}
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

/* --- [Small PC: 1300px 이하] --- */
@media screen and (max-width: 1300px) {
    .hero_message ul > li dl {grid-template-columns: minmax(200px, 232px) minmax(0, 1fr);column-gap: clamp(20px, 3vw, 56px); }
    .hero_message ul > li dl > dd .num_count > .num_motion_wrap > .num_motion { font-size:6.6rem }
    .hero_message ul > li dl > dd .num_count > .num_unit_wrap > .num_unit { font-size: 3rem }
}

/* --- [Tablet: 769px ~ 1024px] --- */
@media screen and (max-width: 1024px) {
    h2 {
        font-size: 5.2rem;
    }

    .hero_message p { font-size: 5.2rem; line-height: 1.2; word-break: keep-all; }
    .hero_message ul { max-width: 100%; margin-top: 64px; }
    .hero_message ul > li { padding: 18px 0; }
    .hero_message ul > li dl { flex-direction: column; gap: 16px; }
    .hero_message ul > li dl > dt { width: 100%; font-size: 2rem; }
    .hero_message ul > li dl > dd { width: 100%; margin-left: 0; flex-wrap: nowrap; }
    .hero_message ul > li dl > dd .num_count { flex-shrink: 0; }
    .hero_message ul > li dl > dd .num_count > .num_motion_wrap > .num_motion { font-size: 4.8rem; line-height: 1.24; }
    .hero_message ul > li dl > dd .num_count > .num_unit_wrap > .num_unit { font-size: 2.4rem; }
    .hero_message ul > li dl > dd .num_count + .num_desc { margin-left: 16px; padding: 8px 0 8px 4px; font-size: 1.6rem; flex-shrink: 1; min-width: 0; }
    .hero_message ul > li:last-child dl > dd .num_count + .num_desc { margin-left: 16px; }

    .sec03 h2 {
        position: relative;
        left: 0;
        width: 100%;
        margin-bottom: 40px;
    }

    /* .sec03 .slide .thumb {
        width: 50%;
    } */
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
    
    .hero_message{padding-top:130px; padding-bottom:100px;}
    .hero_message p{font-size: 2.8rem;line-height: 1.35;letter-spacing: -0.01em;}
    .hero_message ul{margin-top:50px;}
    .hero_message ul > li{padding:22px 0 28px}
    .hero_message ul > li dl { display: grid; grid-template-columns: 1fr; row-gap: 10px; align-items: start; }
    .hero_message ul > li dl > dt { width: 100%; font-size: 2rem; line-height: 1.35; letter-spacing: -0.01em;}
    .hero_message ul > li dl > dd { width: 100%; justify-content: flex-start; align-items:flex-start; flex-wrap: wrap; gap: 4px; }
    .hero_message ul > li dl > dd .num_count > .num_motion_wrap > .num_motion { font-size: 4rem; line-height: 1.3; letter-spacing: -0.01em;}
    .hero_message ul > li dl > dd .num_count > .num_unit_wrap > .num_unit { font-size: 2rem; letter-spacing: -0.01em;}
    .hero_message ul > li dl > dd .num_count + .num_desc { margin:0; padding:24px 0 13px; font-size: 1.2rem; line-height: 1.2;letter-spacing: 0;}
    .hero_message ul > li:last-child dl > dd { align-items: center; }
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