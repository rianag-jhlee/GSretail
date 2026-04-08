<template>
    <div class="content">
        <div class="main_visual">
            <!-- <div v-for="item in mainVisual.items" :key="item" :style="{ backgroundImage: 'url(' + t.mainVisual.img + ')' }">
                <p class="main_copy">
                    <strong v-html="t.mainVisual.title"></strong>
                    <span>{{ t.mainVisual.sub }}</span>
                </p>
            </div> -->
            <swiper :loop="true" :autoplay="{ delay: 5000 }" class="mainSwiper">
                <swiper-slide v-for="item in t.mainVisual.items" :key="item.title">
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

            <div>
                <div v-for="item in t.sec02.items" :key="item.txt">
                    <span class="thumb">
                        <em><img :src="item.img" /></em>
                    </span>
                    <div>
                        <strong>{{ item.txt }}</strong>
                        <span>{{ item.sub }}</span>
                        <p>{{ item.exp }}</p>
                    </div>
                </div>
            </div>
            <!-- coverflow test
            <swiper :slides-per-view="'auto'" :centered-slides="true" :loop="true" effect="coverflow" :coverflow-effect="{
                rotate: 30,
                stretch: 0,
                depth: 150,
                modifier: 1,
                slideShadows: true
            }" grab-cursor="true" class="sec02Swiper">
                <swiper-slide v-for="item in t.sec02.items" :key="item.txt">
                    <div class="slide-content">
                        <span class="thumb"><em><img :src="item.img" /></em></span>
                        <div>
                            <strong>{{ item.txt }}</strong>
                            <span>{{ item.sub }}</span>
                            <p>{{ item.exp }}</p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            //coverflow test -->
        </section>

        <section v-if="t.sec03" class="sec03">
            <h2 v-html="t.sec03.title"></h2>

            <div v-for="item in t.sec03.items" :key="item.img">
                <span class="thumb">
                    <em><img :src="item.img" /></em>
                </span>
                <div>
                    <em><img :src="item.sub" /></em>
                    <strong>{{ item.brand }}</strong>
                    <p>{{ item.txt }}</p>
                </div>
            </div>
        </section>

        <section v-if="t.sec04" class="sec04">
            <h2 v-html="t.sec04.title"></h2>
            <p class="explain" v-html="t.sec04.explain"></p>
            <ul class="quick">
                <li v-for="item in t.sec04.quick" :key="item.quick">
                    <a :href="item.link">{{ item.txt }}</a>
                </li>
            </ul>

            <div v-for="(item, idx) in t.sec04.items" :key="idx">
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
        </section>
    </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-fade";
import SwiperCore, { EffectFade, Autoplay } from "swiper";

gsap.registerPlugin(ScrollTrigger);
SwiperCore.use([EffectFade, Autoplay]);

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
    },
    beforeUnmount() {
        /* scroll unbind */
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {

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

            console.log('trigger : ', $('.sec02').offset().top);
            console.log("scrollY:", window.scrollY);
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
h2 {font-size: 7.2rem; font-weight: 700; line-height: 124%; letter-spacing: -0.02em; text-align: center;}
h2+.explain {font-size: 2rem; line-height: 150%; letter-spacing: -0.02em;}

/* .main_visual {height: 100vh; padding: 60px 120px; background-position: 50%; background-size: cover; position: sticky; top: 0; z-index: -1; display: flex; align-items: center;}
.main_visual * {color: #fff;}
.main_visual .main_copy strong {font-size: 8rem; line-height: 124%; letter-spacing: -0.02em; display: block;}
.main_visual .main_copy span {margin-top: 24px; font-size: 4rem; font-weight: 600; line-height: 130%; letter-spacing: -0.02em; display: block;} */
.main_visual {width: 100%; position: relative; overflow: hidden;}
.main_visual .slide {height: 100vh; padding: 60px 120px; background-position: 50%; background-size: cover; position: sticky; top: 0; z-index: -1; display: flex; align-items: center;}
.main_copy strong {color: #fff; font-size: 8rem; line-height: 1.2; text-align: center;}
.main_copy span {margin-top: 20px; color: #fff; font-size: 4rem; display: block;}

section {padding: 200px 0; background-color: #fff;}

.sec01 {height:100vh; padding:200px 20px 20px; overflow:hidden;}
.sec01 .inner {width:100%; max-width:1720px; margin:0 auto; position:relative; display: flex; justify-content:flex-end;}
.sec01 h2 {text-align: left;}
.sec01 .explain {margin-top: 80px; margin-bottom: 60px;}
.sec01 ul {border-top: 1px solid #000;}
.sec01 li {border-bottom: 1px solid #aaa;}
.sec01 li a {padding: 24px 16px 24px 0; font-size: 2.4rem; font-weight: 600; line-height: 150%; letter-spacing: -0.02em; display: flex; align-items: center; justify-content: space-between;}
.sec01 li a:after {width: 16px; height: 16px; background-color: red; content: ''; display: block;}
.sec01 .clip_mask {width: 552px; max-width:100vw; height: 338px; border-radius: 10px; background-position: 50%; background-size: cover; overflow: hidden; position:absolute; bottom:20px; left:0;}

.sec01 .clip_mask div {height:0; overflow:hidden; position:absolute; top:50%; left:50%; display:flex; flex-direction: column; align-items: center; justify-content:center; transform:translate(-50%, -50%);}
.sec01 .clip_mask strong {color:#fff; font-size: 8rem; line-height: 124%; letter-spacing: -0.02em; text-align: center; display: block;}
.sec01 .clip_mask em {width: 1px; background-color: #fff; flex:1;}

</style>