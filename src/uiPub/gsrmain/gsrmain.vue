<template>
    <div class="content">
        <div class="main_visual">
            <swiper class="mainSwiper" :modules="swiperModules" v-bind="visualOptions" @slideChange="onSlideChange">
                <swiper-slide v-for="item in t.mainVisual.items" :key="item.img">
                    <div class="slide" :style="{ backgroundImage: 'url(' + item.img + ')' }">
                        <p class="main_copy">
                            <strong v-html="item.title"></strong>
                            <span>{{ item.sub }}</span>
                        </p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>

        <section v-if="t.sec01" class="sec01">
            <div class="inner">
                <div>
                    <h2 v-html="t.sec01.title"></h2>
                    <p class="explain" v-html="t.sec01.explain"></p>
                    <ul>
                        <li v-for="item in t.sec01.link" :key="item.txt"><a :href="item.link">{{ item.txt }}</a></li>
                    </ul>
                </div>
                <div class="clip_mask" :style="{ backgroundImage: 'url(' + t.sec01.img + ')' }">
                    <div>
                        <strong>Lifestyle</strong>
                        <em></em>
                        <strong>Platformed.</strong>
                    </div>
                </div>
            </div>
        </section>

        <section v-if="t.sec02" class="sec02">
            <h2 v-html="t.sec02.title"></h2>

            <div class="expWrap">
                <div class="expTrack">
                    <div class="expSlide" v-for="item in t.sec02.items" :key="item.txt">
                        <div class="card">
                            <span class="thumb">
                                <img :src="item.img" />
                            </span>
                            <div class="txt">
                                <strong>{{ item.txt }}</strong>
                                <span>{{ item.sub }}</span>
                                <p>{{ item.exp }}</p>
                                <a href="#none">바로가기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section v-if="t.sec03" class="sec03">
            <h2 v-html="t.sec03.title"></h2>

            <swiper class="Swiper" :modules="swiperModules" v-bind="Options_sec03">
                <swiper-slide v-for="item in t.sec03.items" :key="item.img">
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
                </swiper-slide>
            </swiper>
        </section>

        <section v-if="t.sec04" class="sec04">
            <h2 v-html="t.sec04.title"></h2>
            <p class="explain" v-html="t.sec04.explain"></p>
            <ul class="quick">
                <li v-for="item in t.sec04.quick" :key="item.quick">
                    <a :href="item.link">{{ item.txt }}</a>
                </li>
            </ul>

            <swiper class="Swiper" :modules="swiperModules" v-bind="Options_sec04">
                <swiper-slide v-for="item in t.sec04.items" :key="item.img">
                    <div class="slide">
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
                    </div>
                </swiper-slide>
            </swiper>
        </section>
    </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from 'swiper/modules';
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: "gsrmain",
    components: {
        Swiper,
        SwiperSlide
    },
    props: {
        lang: { type: String }, // ko/en
    },
    data() {
        return {
            /* swiper */
            swiperModules: [Autoplay],
            visualOptions: {
                loop: true,
                slidesPerView: 1, // 메인 비주얼은 보통 1개씩 노출
                speed: 800,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
            },
            Options_sec03: {
                loop: false,
                speed: 800,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
            },
            Options_sec04: {
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 12,
                loopedSlides: 5,        // 실제 슬라이드 수보다 작게 지정
                preloadImages: true,    // 이미지 미리 로드
                watchSlidesProgress: true,
                watchSlidesVisibility: true,

                speed: 800, // ⭐ 부드럽게
                watchSlidesProgress: true,

                autoplay: {
                    delay: 3000, // ⭐ 너무 짧게 금지
                    disableOnInteraction: false,
                },
            },

            /* language contents */
            langData: {
                ko: {
                    mainVisual: {
                        items: [
                            { title: "Every Life.<br/> One Platform.", sub: "GS리테일", img: require("@/assets/images/dummy/main_visual_01.png") },
                            { title: "Every Life.<br/> One Platform.", sub: "GS리테일", img: require("@/assets/images/dummy/main_visual_02.png") },
                            { title: "Every Life.<br/> One Platform.", sub: "GS리테일", img: require("@/assets/images/dummy/main_visual_03.png") }
                        ]
                    },

                    sec01: {
                        title: "GS리테일이<br/> 세상을 마주하는 모습",
                        explain: "온·오프라인을 아우르는 통합 경험을 제공하고<br/> 고객 데이터와 현장을 담아 지속적으로 혁신하며<br/> 변함없는 상품과 서비스 품질을 지킵니다.",
                        link: [
                            { txt: "경영이념 및 가치 체계", link: "#none" },
                            { txt: "기업 연혁", link: "#none" },
                            { txt: "수상 이력", link: "#none" }
                        ],
                        img: require("@/assets/images/dummy/bg_sec01.png")
                    },
                    sec02: {
                        title: "GS리테일이 실천하는<br/> Together Green",
                        items: [
                            { img: require("@/assets/images/dummy/main_sec02_01.png"), txt: "2년", sub: "연속 최우수", exp: "유통 대기업 중 유일하게 2년 연속 동반성장지수 평가 최우수 등급 달성" },
                            { img: require("@/assets/images/dummy/main_sec02_02.png"), txt: "223+", sub: "사회공헌형 매장 운영 (2025)", exp: "내일 스토어·늘봄 스토어·시니어스토어 등 취약계층 자립 지원" },
                            { img: require("@/assets/images/dummy/main_sec02_03.png"), txt: "A+", sub: "KCGS ESG 통합등급 (2025)", exp: "2년 연속, 환경 A+·사회 A+·지배구조 A 805개 기업 중 상위 2.4%의 성과" },
                        ]
                    },
                    sec03: {
                        title: "GS리테일이 만드는<br/> 편리한 일상",
                        items: [
                            { img: require("@/assets/images/dummy/main_sec03_01.png"), sub: require("@/assets/images/dummy/main_sec03_01-1.png"), brand: "GS25", txt: "모든 순간, 일상의 중심" },
                            { img: require("@/assets/images/dummy/main_sec03_01.png"), sub: require("@/assets/images/dummy/main_sec03_01-1.png"), brand: "GS25", txt: "모든 순간, 일상의 중심" },
                            { img: require("@/assets/images/dummy/main_sec03_01.png"), sub: require("@/assets/images/dummy/main_sec03_01-1.png"), brand: "GS25", txt: "모든 순간, 일상의 중심" }
                        ]
                    },
                    sec04: {
                        title: "GS리테일의<br/> 일상 속 생생한 이야기",
                        explain: "뉴스룸의 흥미로운 영상 콘텐츠부터 브랜드별 공식 보도자료까지,<br/> GS리테일이 만들어가는 변화를 가장 먼저 확인하세요.",
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
                                title: 'GS리테일, 상반기 공개채용 돌입…<br/> "청년 채용 물꼬 튼다!"'
                            },
                            {
                                img: require("@/assets/images/dummy/main_news_01.png"),
                                item: [
                                    { cate: "GS25" },
                                    { cate: "보도자료" }
                                ],
                                title: 'GS25, 1300만 유튜버 쯔양과<br/> 공동 개발한 ‘대식가 시리즈’ 론칭'
                            },
                            {
                                img: require("@/assets/images/dummy/main_news_00.png"),
                                item: [
                                    { cate: "GS25" },
                                    { cate: "보도자료" }
                                ],
                                title: 'GS리테일, 상반기 공개채용 돌입…<br/> "청년 채용 물꼬 튼다!"'
                            },
                            {
                                img: require("@/assets/images/dummy/main_news_01.png"),
                                item: [
                                    { cate: "GS25" },
                                    { cate: "보도자료" }
                                ],
                                title: 'GS25, 1300만 유튜버 쯔양과<br/> 공동 개발한 ‘대식가 시리즈’ 론칭'
                            },
                            {
                                img: require("@/assets/images/dummy/main_news_00.png"),
                                item: [
                                    { cate: "GS25" },
                                    { cate: "보도자료" }
                                ],
                                title: 'GS리테일, 상반기 공개채용 돌입…<br/> "청년 채용 물꼬 튼다!"'
                            },
                            {
                                img: require("@/assets/images/dummy/main_news_01.png"),
                                item: [
                                    { cate: "GS25" },
                                    { cate: "보도자료" }
                                ],
                                title: 'GS25, 1300만 유튜버 쯔양과<br/> 공동 개발한 ‘대식가 시리즈’ 론칭'
                            }
                        ]
                    }
                },
                en: {
                    mainVisual: {
                        title: "Every Life.<br/> One Platform.",
                        sub: "GS Retail",
                        img: require("@/assets/images/dummy/main_visual_01.png"),
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

        /* scroll bind */
        this.handleScroll = this.handleScroll.bind(this);
        window.addEventListener("scroll", this.handleScroll);
        /* //scroll bind */

        this.initClipAnimation(); //clip mask

        //sec02
        this.initSec02();
    },
    beforeUnmount() {
        /* scroll unbind */
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {

        // 슬라이드가 변경될 때 실행되는 함수
        onSlideChange(swiper) {
            // swiper.realIndex는 loop: true일 때 실제 데이터 상의 인덱스를 가져옵니다.
            this.activeIndex = swiper.realIndex;

            // console.log("현재 슬라이드 인덱스:", this.activeIndex);

            // 필요하다면 여기서 추가 로직 실행
            // 예: 특정 슬라이드일 때 헤더 색상 강제 변경 등
            /*
            if (this.activeIndex === 1) {
                document.getElementById("header").classList.add("white_mode");
            }
            */
        },

        /* sec02 */
        initSec02() {
            const wrap = this.$el.querySelector(".expWrap");
            const slides = gsap.utils.toArray(".expSlide");

            const state = {
                activeIndex: -1
            };

            const setState = (index) => {
                slides.forEach((slide, i) => {
                    slide.classList.remove("active", "prev");

                    if (i === index) {
                        slide.classList.add("active");

                        console.log(i);
                    }

                    if (i === index - 1) {
                        slide.classList.add("prev");
                    }
                });

                state.activeIndex = index;
            };

            const clearAll = () => {
                slides.forEach((slide) => {
                    slide.classList.remove("active", "prev");
                });
                state.activeIndex = -1;
            };

            ScrollTrigger.create({
                trigger: wrap,
                start: "top top",
                end: () => "+=" + (slides.length * window.innerHeight),
                pin: true,
                scrub: true,

                onUpdate: (self) => {
                    const progress = self.progress;

                    // 🔥 위로 벗어난 경우만 초기화
                    if (progress <= 0) {
                        clearAll();
                        return;
                    }

                    // 🔥 핵심: index clamp
                    const index = Math.min(
                        slides.length - 1,
                        Math.floor(progress * slides.length)
                    );

                    // 🔥 상태 업데이트
                    if (index !== state.activeIndex) {
                        setState(index);
                    }
                },

                onLeave: () => {
                    // 👉 아래로 완전히 나가면 "마지막 유지"
                    setState(slides.length - 1);
                },

                onLeaveBack: () => {
                    // 👉 위로 나가면 초기화
                    clearAll();
                }
            });
        },
        /* //sec02 */

        /* scroll 시 특정영역에서 header 로고 및 네비 컬러 변경 */
        handleScroll() {
            const header = document.getElementById("header");
            if (!header) return;

            const head_black = document.querySelector('.main_visual').offsetHeight - (header.offsetHeight * 0.5); // 원하는 값

            if (window.scrollY > head_black) {
                header.classList.add("head_black");
            } else {
                header.classList.remove("head_black");
            }
        },
        /* //scroll 시 특정영역에서 header 로고 및 네비 컬러 변경 */

        /* clip mask */
        initClipAnimation() {
            const el = this.$el.querySelector(".clip_mask");
            const innerDiv = el.querySelector("div");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".sec01",
                    start: "top top",
                    end: "+=300%", // 전체 스크롤 구간
                    scrub: true,
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                }
            });

            tl.to(el, {
                width: window.innerWidth,
                height: "100vh",
                borderRadius: 0,
                top: "-200px",
                bottom: "auto",
                left: "50%",
                x: "-50%",
                ease: "none",
                scrollTrigger: {
                    trigger: ".sec01",
                    start: "top top",
                    end: "bottom+=1000px bottom", // 스크롤 150vh에서 확장 완료
                    scrub: true
                }
            });

            tl.to(innerDiv, {
                height: "80vh",
                ease: "none",
                scrollTrigger: {
                    trigger: ".sec02",
                    start: "top-=2500px top", // clip_mask가 꽉 찬 시점부터
                    end: "top-=500px bottom",
                    scrub: true
                }
            });
        }
        /* //clip mask */
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
    display: flex;
    align-items: center;
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

section {
    padding: 200px 0;
    background-color: #fff;
    position: relative;
    z-index: 1;
}

.sec01 {
    height: 100vh;
    padding: 200px 20px 20px;
    overflow: hidden;
}

.sec01 .inner {
    width: 100%;
    max-width: 1720px;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: flex-end;
}

.sec01 h2 {
    text-align: left;
}

.sec01 .explain {
    margin-top: 80px;
    margin-bottom: 60px;
}

.sec01 ul {
    border-top: 1px solid #000;
}

.sec01 li {
    border-bottom: 1px solid #aaa;
}

.sec01 li a {
    padding: 24px 16px 24px 0;
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.sec01 li a:after {
    width: 16px;
    height: 16px;
    background-color: red;
    content: '';
    display: block;
}

.sec01 .clip_mask {
    width: 552px;
    max-width: 100vw;
    height: 338px;
    border-radius: 10px;
    background-position: 50%;
    background-size: cover;
    overflow: hidden;
    position: absolute;
    bottom: 20px;
    left: 0;
}

.sec01 .clip_mask div {
    height: 0;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translate(-50%, -50%);
}

.sec01 .clip_mask strong {
    color: #fff;
    font-size: 8rem;
    line-height: 124%;
    letter-spacing: -0.02em;
    text-align: center;
    display: block;
}

.sec01 .clip_mask em {
    width: 1px;
    background-color: #fff;
    flex: 1;
}

.sec02 {
    position: relative;
    padding: 200px 0 0;
}

.sec02 .expWrap {
    height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
}

.sec02 .expTrack {
    width: 100%;
    height: 100%;
    max-width: 1720px;
    max-height: 860px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

.sec02 .expSlide {
    width: 0;
    height: 0;
    pointer-events: none;

    transition: all 0.95s cubic-bezier(0.82, 1, 0.86, 1);
}

.sec02 .expSlide:first-child {
    margin-bottom: auto;
}

.sec02 .expSlide:first-child.active {
    margin-left: 294px;
}

.sec02 .expSlide:last-child {
    margin-top: auto;
}

.sec02 .expSlide:last-child.active {
    margin-right: 242px;
}

.sec02 .expSlide.active {
    width: 100%;
    height: 100vh;

    max-width: 834px;
    max-height: 860px;

    pointer-events: auto;
}

.sec02 .expSlide.active+.expSlide {
    margin-left: 52px;
}

.sec02 .expSlide .card {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.sec02 .expSlide.active+.expSlide {
    width: 242px;
    height: 242px;
}

.sec02 .expSlide.prev {
    width: 242px;
    height: 242px;
    margin-right: 52px;
    margin-bottom: auto;
}

.sec02 .expSlide.active .txt {
    opacity: 1;
    visibility: visible;
    position: absolute;
    bottom: 329px;
    right: 0;
    left: calc(50% + 467px);
    display: flex;
    flex-direction: column;
}

.sec02 .expSlide .txt {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.6s 1s;
}

.sec02 .expSlide .txt * {
    color: #242428;
}

.sec02 .expSlide .txt strong {
    font-size: 7.2rem;
    letter-spacing: -0.02em;
    line-height: 124%;
}

.sec02 .expSlide .txt span {
    font-size: 2.4rem;
    letter-spacing: -0.01em;
    line-height: 150%;
}

.sec02 .expSlide .txt p {
    margin-top: 24px;
    color: #67676F;
    font-size: 2rem;
    letter-spacing: -0.01em;
    line-height: 135%;
}

.sec02 .expSlide .txt a {
    width: 56px;
    height: 56px;
    margin-top: 40px;
    font-size: 0;
    background-color: #F2F2F4;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.sec02 .expSlide .txt a:before {
    width: 24px;
    height: 24px;
    background-color: red;
    content: '';
    display: block;
}

/* 썸네일 */
.sec02 .expSlide .thumb {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 16px;
    display: block;

    transition: all 0.7s ease;
}

.sec02 .expSlide.active .thumb {
    border-radius: 12px;
}

.sec02 .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.sec03 h2 {
    text-align: left;
    position: absolute;
    right: 20px;
    left:1128px;
}

.sec03 .swiper {
    padding-left: 20px;
}

.sec03 .slide {
    display: flex;
    align-items: flex-end;
}

.sec03 .slide div {
    margin-left: 153px;
    flex: 1;
    display: flex;
    align-items: center;
    gap: 40px;
}

.sec03 .slide p {
    display: flex;
    flex-direction: column;
}

.sec03 .slide p strong {
    color: #000;
    font-size: 4rem;
    letter-spacing: -0.01em;
    line-height: 130%;
}

.sec03 .slide p span {
    color: #67676F;
    font-size: 2.4rem;
    letter-spacing: -0.01em;
    line-height: 150%;
}

.sec04 .explain {margin-top:24px; font-size:2rem; letter-spacing:-0.01em; line-height:135%; text-align:center;}
.sec04 .quick {display:flex; justify-content:center; gap:12px;}
.sec04 .quick a {padding:20px 24px; color:#000; font-size:2.4rem; font-weight:700; letter-spacing:-0.01em; line-height:135%; display:flex; align-items:center; gap:12px;}
.sec04 .quick a:after {width:16px; height:24px; background-color:red; content:''; display:block;}
.sec04 .swiper {margin-top:80px;}
.sec04 .swiper-slide {width:552px;}
.sec04 .slide {position:relative;}
.sec04 .slide .txt {padding:40px; position:absolute; right:0; bottom:0; left:0; display:flex; flex-direction:column;}
.sec04 .slide .txt * {color:#fff;}
.sec04 .slide .txt ul {margin-bottom:12px; display:flex; align-items:center; gap:4px;}
.sec04 .slide .txt li em {padding:1px 11px; font-size:1.6rem; letter-spacing:-0.01em; line-height:150%; border:1px solid #fff; border-radius:100px; display:block;}
.sec04 .slide .txt p {font-size:2.4rem; letter-spacing:-0.01em; line-height:150%;}
</style>