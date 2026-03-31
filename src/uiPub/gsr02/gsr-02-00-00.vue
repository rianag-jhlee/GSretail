<template>
    <div class="gsr02_page">
        <!-- 히어로 섹션 -->
        <section class="sec_hero">
            <div class="hero_title_wrap">
                <h2 class="hero_title_en">
                    <span class="line_wrap"><span class="line">Every Life.</span></span>
                    <span class="line_wrap"><span class="line">One Platform.</span></span>
                </h2>

                <h3 class="hero_title_ko">
                    <span class="line_wrap"><span class="line">라이프스타일 플랫폼</span></span>
                    <span class="line_wrap"><span class="line">GS리테일</span></span>
                </h3>
            </div>

            <nav class="hero_quick_wrap">
                <a
                    v-for="quickLabel in quickLabels"
                    :key="quickLabel"
                    href="#none"
                >
                    {{ quickLabel }}
                </a>
            </nav>
        </section>

        <!-- About 섹션 -->
        <section class="sec_about" aria-labelledby="about_title">
            <div class="inner">
                <header>
                    <p>Lifestyle<br />Platform</p>
                    <div>
                        <h2 id="about_title">
                            GS리테일이 세상을<br />마주하는 모습
                        </h2>
                        <Anchor
                            href="#none"
                            aria-label="자세히 보기"
                        />
                    </div>
                </header>

                <div class="about_body">
                    <div class="about_visual" aria-hidden="true" />
                    <div class="about_content">
                        <p>
                            온·오프라인을 아우르는 통합 경험을 제공하고<br />
                            고객 데이터와 현장을 담아 지속적으로 혁신하며<br />
                            변함없는 상품과 서비스 품질을 지킵니다.
                        </p>
                        <p>
                            세상의 모든 라이프스타일,<br />
                            그 중심에 GS리테일이 있습니다.
                        </p>
                        <ul class="about_menu">
                            <li>
                                <a href="#none">
                                    경영이념 및 가치 체계
                                    <Anchor size="sm" aria-hidden="true" />
                                </a>
                            </li>
                            <li>
                                <a href="#none">
                                    기업 연혁
                                    <Anchor size="sm" aria-hidden="true" />
                                </a>
                            </li>
                            <li>
                                <a href="#none">
                                    수상 이력
                                    <Anchor size="sm" aria-hidden="true" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- About2 섹션 -->
        <section class="sec_about2" aria-labelledby="about2_title">
            <img src="@/assets/images/main_bg02.png" alt="GS리테일 라이프스타일 플랫폼" />
        </section>

        <!-- 지속가능 경영 섹션 -->
        <section class="sec_sustainability" aria-labelledby="sustainability_title">
            <div class="inner">
                <h2 id="sustainability_title">
                    GS리테일이 실천하는<br />
                    Together Green
                </h2>

                <div class="sustain_grid">
                    <!-- 좌측: 작은 이미지 (242×242) -->
                    <div class="sustain_img_left" aria-hidden="true" />

                    <!-- 가운데: 큰 이미지 (834×860) -->
                    <div class="sustain_img_center" aria-hidden="true" />

                    <!-- 우측: 콘텐츠(상단) + 작은 이미지(하단) -->
                    <div class="sustain_right_col">
                        <div class="sustain_content">
                            <p>Sustainability</p>
                            <h3>지속가능한<br />미래를 향해</h3>
                            <p>
                                환경과 사회, 지배구조 전반에서<br />
                                GS리테일은 책임 있는 변화를 만들어갑니다.
                            </p>
                            <Anchor href="#none" aria-label="자세히 보기" />
                        </div>
                        <div class="sustain_img_right" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </section>

        <!-- 사업소개 섹션-->
        <section class="sec_brand" aria-labelledby="brand_title">
            <div class="brand_wrap">
                <!-- 좌측: 메인 이미지 스와이퍼 -->
                <div class="brand_img_area">
                    <Swiper
                        :modules="brandMainModules"
                        effect="fade"
                        :fade-effect="{ crossFade: true }"
                        :loop="false"
                        :allow-touch-move="false"
                        @swiper="onMainSwiperInit"
                        class="brand_main_swiper"
                    >
                        <SwiperSlide
                            v-for="(slide, idx) in brandSlides"
                            :key="idx"
                        >
                            <div
                                class="brand_img"
                                :style="{ backgroundImage: `url(${slide.img})` }"
                                :aria-label="slide.name"
                            />
                        </SwiperSlide>
                    </Swiper>
                    <Anchor href="#none" size="sm" class="brand_img_link" aria-label="브랜드 바로가기" />
                </div>

                <!-- 우측: 제목 + 인포 스와이퍼 -->
                <div class="brand_content_area">
                    <h2 id="brand_title">
                        GS리테일이 만드는<br />편리한 일상
                    </h2>

                    <div class="brand_info_area">
                        <Swiper
                            :modules="brandInfoModules"
                            :slides-per-view="1"
                            :loop="false"
                            :allow-touch-move="false"
                            @swiper="onInfoSwiperInit"
                            @slide-change="onBrandSlideChange"
                            class="brand_info_swiper"
                        >
                            <SwiperSlide
                                v-for="(slide, idx) in brandSlides"
                                :key="idx"
                            >
                                <div class="brand_info_main">
                                    <div class="brand_logo_box" aria-hidden="true" />
                                    <div class="brand_info_text">
                                        <p>{{ slide.name }}</p>
                                        <p>{{ slide.desc }}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        <div class="brand_btn_wrap">
                            <button
                                class="brand_btn_prev"
                                type="button"
                                aria-label="이전 브랜드"
                                :disabled="isFirstSlide"
                                @click="brandSwiperPrev"
                            >
                                <img src="@/assets/images/icon/prev_btn.png" alt="이전" />
                            </button>
                            <button
                                class="brand_btn_next"
                                type="button"
                                aria-label="다음 브랜드"
                                :disabled="isLastSlide"
                                @click="brandSwiperNext"
                            >
                                <img src="@/assets/images/icon/next_btn.png" alt="다음" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 뉴스룸、 보도자료 섹션 -->
        <section class="sec_news">
            <div class="inner">
                <header class="news_head">
                    <h2>GS리테일의 일상 속 생생한 이야기</h2>
                    <p>
                        고객과 함께하는 GS리테일의 다양한 소식과<br />
                        생생한 현장 이야기를 전합니다.
                    </p>
                    <a
                        href="https://www.gsretail.com/gsretail/ko/about/news/press"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="news_more_btn"
                        aria-label="뉴스룸 새 창 열기"
                    >
                        보도자료
                    </a>
                    <a
                        href="https://www.gsretail.com/gsretail/ko/about/news/press"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="news_more_btn"
                        aria-label="뉴스룸 새 창 열기"
                    >
                        GS리테일 Newsroom 
                    </a>
                </header>
            </div>

            <div class="news_scroll_wrap">
                <ul class="news_scroll_list" aria-label="GS리테일 뉴스 목록">
                    <li
                        v-for="(item, idx) in newsScrollItems"
                        :key="idx"
                        class="news_item"
                        :style="{ backgroundImage: `url(${item.img})` }"
                        :aria-hidden="idx >= newsList.length ? 'true' : undefined"
                    >
                        <p>{{ item.category }}</p>
                        <h3>{{ item.title }}</h3>
                        <time :datetime="item.datetime">{{ item.date }}</time>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Anchor from "@/components/Anchor.vue";

gsap.registerPlugin(ScrollTrigger);
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import slideImg01 from "@/assets/images/slide_01.png";
// import slideImg02 from "@/assets/images/slide_02.png"; // 추가 시 주석 해제
// import slideImg03 from "@/assets/images/slide_03.png"; // 추가 시 주석 해제
// import slideImg04 from "@/assets/images/slide_04.png"; // 추가 시 주석 해제
// import slideImg05 from "@/assets/images/slide_05.png"; // 추가 시 주석 해제

import newsImg01 from "@/assets/images/news_01.png";
import newsImg02 from "@/assets/images/news_02.png";
import newsImg03 from "@/assets/images/news_03.png";
import newsImg04 from "@/assets/images/news_04.png";
import newsImg05 from "@/assets/images/news_05.png";

const quickLabels = ["About GSR", "Sustainability", "Newsroom"];


const brandMainModules = [EffectFade, Controller];
const brandInfoModules = [Controller];

const brandSlides = [
    { name: "GS25",               desc: "모든 순간, 일상의 중심",         img: slideImg01 },
    { name: "GS THE FRESH",       desc: "신선한 행복을 전달하는",          img: slideImg01 /* slideImg02 */ },
    { name: "GS SHOP",            desc: "최고의 쇼핑 경험 통합 브랜드",    img: slideImg01 /* slideImg03 */ },
    { name: "어바웃펫",             desc: "세상에 없던 펫케어",              img: slideImg01 /* slideImg04 */ },
    { name: "우리동네 딜리버리",    desc: "산책으로 수익이 되는 배달플랫폼",  img: slideImg01 /* slideImg05 */ },
];

const mainSwiperInstance = ref(null);
const infoSwiperInstance = ref(null);
const brandActiveIndex = ref(0);

const isFirstSlide = computed(() => brandActiveIndex.value === 0);
const isLastSlide = computed(() => brandActiveIndex.value === brandSlides.length - 1);

function onMainSwiperInit(swiper) {
    mainSwiperInstance.value = swiper;
    if (infoSwiperInstance.value) {
        swiper.controller.control = infoSwiperInstance.value;
        infoSwiperInstance.value.controller.control = swiper;
    }
}

function onInfoSwiperInit(swiper) {
    infoSwiperInstance.value = swiper;
    if (mainSwiperInstance.value) {
        swiper.controller.control = mainSwiperInstance.value;
        mainSwiperInstance.value.controller.control = swiper;
    }
}

function onBrandSlideChange(swiper) {
    brandActiveIndex.value = swiper.activeIndex;
}

function brandSwiperPrev() {
    mainSwiperInstance.value?.slidePrev();
}

function brandSwiperNext() {
    mainSwiperInstance.value?.slideNext();
}

onMounted(() => {
    const lines = gsap.utils.toArray(".hero_title_wrap .line");
    if (!lines.length) return;

    // 초기 상태: 텍스트 아래에 숨김, 퀵링크 투명
    gsap.set(lines, { yPercent: 100 });
    gsap.set(".hero_quick_wrap", { opacity: 0 });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".sec_hero",
            start: "top top",
            end: "+=1500",
            pin: true,
            scrub: 1,
        },
    });

    // 각 줄 순차 등장 (0.8 간격)
    lines.forEach((line, i) => {
        tl.to(line, { yPercent: 0, duration: 1, ease: "power2.out" }, i * 0.8);
    });

    // 마지막 줄 등장 후 퀵링크 페이드인
    tl.to(".hero_quick_wrap", { opacity: 1, duration: 0.8, ease: "power2.out" }, (lines.length - 1) * 0.8 + 0.5);
});

onUnmounted(() => {
    ScrollTrigger.getAll().forEach((st) => st.kill());
});

const newsList = [
    {
        category: "경영",
        title: "GS리테일, 2025년 지속가능경영 보고서 발간",
        date: "2025.12.10",
        datetime: "2025-12-10",
        img: newsImg01,
    },
    {
        category: "사회공헌",
        title: "GS25, 취약계층 도시락 10만 개 기부 완료",
        date: "2025.11.25",
        datetime: "2025-11-25",
        img: newsImg02,
    },
    {
        category: "신사업",
        title: "GS더프레시, 신선 새벽배송 전국 확대",
        date: "2025.11.12",
        datetime: "2025-11-12",
        img: newsImg03,
    },
    {
        category: "마케팅",
        title: "GS SHOP, 라이브 커머스 월 거래액 1조 돌파",
        date: "2025.10.30",
        datetime: "2025-10-30",
        img: newsImg04,
    },
    {
        category: "인재",
        title: "GS리테일, 2026 신입공채 합격자 발표",
        date: "2025.10.15",
        datetime: "2025-10-15",
        img: newsImg05,
    },
];

const newsScrollItems = computed(() => [...newsList, ...newsList]);
</script>

<style scoped>
.gsr02_page {
    background: #fff;
}
section:not(.sec_about2) {
    padding: 200px 0;
}
.inner {
    width: 100%;
    max-width: 1680px;
    margin: 0 auto;
}

/* --- 텍스트 라인 리빌 --- */
.hero_title_wrap .line_wrap {
    display: block;
    overflow: hidden;
    /* line-height를 명시해 텍스트 클리핑 방지 */
}

/* .hero_title_en .line_wrap { line-height: 99.2px; }
.hero_title_ko .line_wrap { line-height: 52px; } */

.hero_title_wrap .line {
    display: block;
    color: #fff;
}
.hero_title_en  .line{
    font-weight: 700;
    font-size: 80px;
    line-height: 1.24;
    letter-spacing: -0.002em;
    }

.hero_title_ko .line{
    font-weight: 600;
    font-size: 40px;
    line-height: 1.3;
    letter-spacing: -0.002em;
}
/* --- sec_hero --- */
.sec_hero {
    width: 100%;
    height: 100vh;
    min-height: 1080px;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    background-image: url("@/assets/images/main_bg.png");
    background-position: center center;
    background-size: cover;
}

.hero_title_wrap {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    left: 120px;
    padding: 220px 0 0;
    position: absolute;
    top: 140px;
    width: 1680px;
}

.hero_title_en {
    margin: 0;
    color: #ffffff;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 80px;
    font-weight: 700;
    letter-spacing: -1.6px;
    line-height: 99.2px;
    margin-top: -1px;
    position: relative;
    width: fit-content;
}

.hero_title_ko {
    margin: 0;
    color: #ffffff;
    font-family: "Pretendard-SemiBold", Helvetica;
    font-size: 40px;
    font-weight: 600;
    letter-spacing: -0.8px;
    line-height: 52px;
    position: relative;
    width: fit-content;
}

.hero_quick_wrap {
    align-items: flex-end;
    display: inline-flex;
    gap: 12px;
    height: 240px;
    left: 120px;
    position: absolute;
    top: 780px;
}

.hero_quick_wrap > a {
    width: 411px;
    height: 96px;
    padding: 41px 24px 24px;
    text-align: left;
    border-radius: 10px;
    font-weight: 600;
    font-size: 24px;
    line-height: 130%;
    letter-spacing: -0.02em;
    background-color: #ffffffd1;
    position: relative;
    color: inherit;
    text-decoration: none;
    box-sizing: border-box;
}

.hero_quick_wrap > a::before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    background-image: url("@/assets/images/icon/ico_goLink.svg");
    background-repeat: no-repeat;
    position: absolute;
    right: 24px;
    top: 24px;
}

/* --- About (Figma 2_About) --- */
.sec_about {
    background: #ffffff;
    padding: 200px 0;
    /* min-height: 1070px; */
}

.sec_about header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 80px;
}

.sec_about header > p {
    margin: 0;
    max-width: 834px;
    color: #e0e0e0;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 76px;
    font-weight: 700;
    letter-spacing: -1.52px;
    line-height: 94.24px;
}

.sec_about header > div {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 20px;
    max-width: 834px;
    flex: 1;
    flex-wrap: wrap;
}

.sec_about header h2 {
    margin: 0;
    color: #000000;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 72px;
    font-weight: 700;
    letter-spacing: -1.44px;
    line-height: 89.28px;
    flex: 1;
    min-width: 0;
}

.about_body {
    display: grid;
    grid-template-columns: 552px 1fr;
    gap: 12px;
    align-items: start;
}

.about_visual {
    width: 552px;
    height: 338px;
    margin-top:auto;
    border-radius: 10px;
    background: #d9d9d9;
    background-image: url("@/assets/images/main_bg02_small.png");
    background-position: center center;
    background-size: cover;
}

.about_content {
    max-width: 834px;
    justify-self: end;
    width: 100%;
}

.about_content > p:first-child {
    margin: 0;
    color: #000000;
    font-family: "Pretendard-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -0.4px;
    line-height: 30px;
}

.about_content > p:nth-child(2) {
    margin: 42px 0 40px;
    color: #111111;
    font-family: "Pretendard-Regular", Helvetica;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: -0.48px;
    line-height: 36px;
}

.about_menu {
    margin: 0;
    padding: 0;
    list-style: none;
    border-top: 1px solid #000000;
}

.about_menu > li > a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 84px;
    padding: 0;
    border-bottom: 1px solid #aaaaaa;
    color: #000000;
    font-family: "Pretendard-SemiBold", Helvetica;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.48px;
    line-height: 36px;
    text-decoration: none;
    box-sizing: border-box;
}

/* --- About2 (시안 About2, main_bg02.png 사용) --- */
.sec_about2 img {
    width: 100%;
    display: block;
}

/* --- 지속가능 경영 (Sustainability) --- */
/* --- sec_sustainability (4_SUSTAINABILITY1) --- */


.sec_sustainability h2 {
    margin: 0 0 60px;
    color: #fff;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 72px;
    font-weight: 700;
    letter-spacing: -1.44px;
    line-height: 1.24;
}

.sustain_grid {
    display: grid;
    grid-template-columns: 1fr 834px 1fr;

    align-items: start;
}

.sustain_img_left {
    width: 242px;
    height: 242px;
    margin-left: auto;
    margin-right: 52px;
    border-radius: 16px;
    background: #222 url("@/assets/images/sustain_prev_01.png") center / cover no-repeat;
    flex-shrink: 0;
}

.sustain_img_center {
    width: 100%;
    height: 860px;
    border-radius: 20px;
    background: #333 url("@/assets/images/sustain_main.png") center / cover no-repeat;
}

.sustain_right_col {
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 860px;
}

.sustain_content {
    display: flex;
    flex-direction: column;
    gap: 28px;
    flex: 1;
    padding-bottom: 40px;
}

.sustain_content > p:first-child {
    margin: 0;
    color: rgba(255, 255, 255, 0.5);
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
}

.sustain_content > h3 {
    margin: 0;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -0.8px;
    line-height: 1.3;
}

.sustain_content > p:last-of-type {
    margin: 0;
    font-size: 18px;
    line-height: 1.7;
    letter-spacing: -0.36px;
}


.sustain_img_right {
    width: 242px;
    height: 242px;
    border-radius: 16px;
    background: #222 url("@/assets/images/sustain_prev_02.png") center / cover no-repeat;
    flex-shrink: 0;
}

@media screen and (max-width: 1024px) {
    .inner {
        padding: 0 32px;
    }

    .sec_hero {
        min-height: 820px;
        max-width: 100%;
    }

    .hero_title_wrap {
        left: 32px;
        top: 120px;
        width: calc(100% - 64px);
        padding-top: 120px;
    }

    .hero_title_en {
        font-size: 52px;
        line-height: 1.2;
    }



    .hero_title_ko {
        font-size: 30px;
        line-height: 1.3;
    }

    .hero_quick_wrap {
        left: 32px;
        top: 620px;
        width: calc(100% - 64px);
        height: auto;
        display: grid;
        grid-template-columns: 1fr;
    }

    .hero_quick_wrap > a {
        width: 100%;
        height: 96px;
    }

    .sec_about {
        padding: 120px 0 100px;
        min-height: 0;
    }

    .sec_about header {
        flex-direction: column;
        margin-bottom: 48px;
    }

    .sec_about header > p {
        font-size: 48px;
        line-height: 1.24;
    }

    .sec_about header > div {
        max-width: 100%;
        justify-content: flex-start;
    }

    .sec_about header h2 {
        font-size: 48px;
        line-height: 1.24;
    }

    .about_body {
        grid-template-columns: 1fr;
        gap: 32px;
    }

    .about_visual {
        width: 100%;
        max-width: 552px;
        height: auto;
        aspect-ratio: 552 / 338;
    }

    .about_content {
        max-width: 100%;
        justify-self: stretch;
    }

    /* 지속가능 경영 반응형 */
    .sec_sustainability {
        padding: 80px 0;
    }

    .sec_sustainability .inner {
        padding: 0 40px;
    }

    .sec_sustainability h2 {
        font-size: 48px;
        margin-bottom: 40px;
    }

    .sustain_grid {
        grid-template-columns: 1fr;
        gap: 24px;
    }

    .sustain_img_left {
        width: 160px;
        height: 160px;
    }

    .sustain_img_center {
        height: auto;
        aspect-ratio: 834 / 860;
    }

    .sustain_right_col {
        height: auto;
        gap: 24px;
    }

    .sustain_content > h3 {
        font-size: 30px;
    }

    .sustain_img_right {
        width: 160px;
        height: 160px;
    }
}

@media screen and (max-width: 768px) {
    .inner {
        padding: 0 20px;
    }

    .sec_hero {
        min-height: 680px;
    }

    .hero_title_wrap {
        left: 20px;
        top: 100px;
        width: calc(100% - 40px);
        padding-top: 80px;
        gap: 16px;
    }

    .hero_title_en {
        font-size: 38px;
    }

    .hero_title_ko {
        font-size: 24px;
    }

    .hero_quick_wrap {
        left: 20px;
        top: 510px;
        width: calc(100% - 40px);
        gap: 10px;
    }

    .hero_quick_wrap > a {
        height: 78px;
        padding: 18px;
        font-size: 20px;
        line-height: 1.35;
    }

    .sec_about {
        padding: 80px 0 72px;
    }

    .sec_about header > p {
        font-size: 32px;
    }

    .sec_about header h2 {
        font-size: 32px;
        line-height: 1.24;
    }

    .about_content > p:first-child {
        font-size: 18px;
        line-height: 1.5;
    }

    .about_content > p:nth-child(2) {
        font-size: 20px;
        line-height: 1.5;
    }

    .about_menu > li > a {
        min-height: 64px;
        font-size: 20px;
    }

    /* 지속가능 경영 반응형 모바일 */
    .sec_sustainability {
        padding: 64px 0;
    }

    .sec_sustainability .inner {
        padding: 0 20px;
    }

    .sec_sustainability h2 {
        font-size: 32px;
        margin-bottom: 32px;
    }

    .sustain_img_left,
    .sustain_img_right {
        width: 120px;
        height: 120px;
    }

    .sustain_content > h3 {
        font-size: 24px;
    }

    .sustain_content > p:last-of-type {
        font-size: 15px;
    }
}

/* --- sec_brand --- */
.sec_brand {
    background: #fff;
}

.brand_wrap {
    max-width: 1680px;
    margin: 0 auto;
    padding: 0 120px;
    display: grid;
    grid-template-columns: minmax(0, 975px) 1fr;
    gap: 60px;
    align-items: center;
}

/* 좌측: 이미지 영역 */
.brand_img_area {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
}

.brand_main_swiper {
    width: 100%;
}

.brand_img {
    width: 100%;
    aspect-ratio: 975 / 680;
    background-color: #f0f0f0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.brand_img_link {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 10;
}

/* 우측: 콘텐츠 영역 */
.brand_content_area {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 60px;
    min-width: 0;
    overflow: hidden;
}

.brand_content_area > h2 {
    margin: 0;
    color: #000;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 52px;
    font-weight: 700;
    letter-spacing: -1.04px;
    line-height: 1.2;
}

.brand_info_area {
    display: flex;
    flex-direction: column;
    gap: 28px;
    min-width: 0;
    overflow: hidden;
}

.brand_info_swiper {
    width: 100%;
    min-width: 0;
    overflow: hidden;
}

.brand_info_swiper :deep(.swiper-wrapper) {
    width: 100%;
}

.brand_info_swiper :deep(.swiper-slide) {
    width: 100%;
    box-sizing: border-box;
    flex-shrink: 0;
}

.brand_info_main {
    display: flex;
    align-items: center;
    gap: 20px;
}

.brand_logo_box {
    width: 64px;
    height: 64px;
    border-radius: 12px;
    background: #f0f0f0;
    flex-shrink: 0;
}

.brand_info_text {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.brand_info_text > p:first-child {
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    color: #000;
    letter-spacing: -0.44px;
    line-height: 1.3;
}

.brand_info_text > p:last-child {
    margin: 0;
    font-size: 15px;
    color: #888;
    letter-spacing: -0.3px;
}

.brand_btn_wrap {
    display: flex;
    gap: 12px;
}

.brand_btn_prev,
.brand_btn_next {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border: 1px solid #e0e0e0;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    padding: 0;
    transition: background 0.2s, border-color 0.2s;
}

.brand_btn_prev:hover,
.brand_btn_next:hover {
    background: #f5f5f5;
}

.brand_btn_prev img,
.brand_btn_next img {
    width: 20px;
    height: 20px;
    object-fit: contain;
}

.brand_btn_prev:disabled,
.brand_btn_next:disabled {
    cursor: default;
    opacity: 0.3;
}

@media screen and (max-width: 1024px) {
    .brand_wrap {
        padding: 0 40px;
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .brand_content_area > h2 {
        font-size: 38px;
    }
}

@media screen and (max-width: 768px) {
    .sec_brand {
        padding: 80px 0;
    }

    .brand_wrap {
        padding: 0 20px;
        gap: 28px;
    }

    .brand_content_area > h2 {
        font-size: 28px;
    }

    .brand_info_text > p:first-child {
        font-size: 18px;
    }
}

/* --- sec_news --- */
.sec_news {
    background: #fff;
    padding: 120px 0 0;
    overflow: hidden;
}

.sec_news .inner {
    padding: 0 120px;
}

.news_head {
    text-align: center;
    margin-bottom: 60px;
}

.news_head > h2 {
    margin: 0;
    color: #000;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 56px;
    font-weight: 700;
    letter-spacing: -1.12px;
    line-height: 1.2;
}

.news_head > p {
    margin: 0;
    color: #555;
    font-size: 20px;
    line-height: 1.6;
    letter-spacing: -0.4px;
}

.news_more_btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 28px;
    border: 1.5px solid #000;
    border-radius: 100px;
    color: #000;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.32px;
    text-decoration: none;
    transition: background 0.2s, color 0.2s;
}

.news_more_btn:hover {
    background: #000;
    color: #fff;
}

/* 무한 스크롤 영역 */
.news_scroll_wrap {
    width: 100%;
    overflow: hidden;
    cursor: default;
}

@keyframes news_scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}

.news_scroll_list {
    display: flex;
    gap: 24px;
    padding: 0;
    margin: 0;
    list-style: none;
    width: max-content;
    animation: news_scroll 30s linear infinite;
}

.news_scroll_wrap:hover .news_scroll_list {
    animation-play-state: paused;
}

.news_item {
    flex-shrink: 0;
    width: 380px;
    aspect-ratio: 380 / 500;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 10px;
    padding: 28px 24px;
    border-radius: 12px;
    background-color: #f0f0f0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-sizing: border-box;
    overflow: hidden;
}

.news_item > p {
    margin: 0;
    color: rgba(255, 255, 255, 0.8);
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
}

.news_item > h3 {
    margin: 0;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.36px;
    line-height: 1.45;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.news_item > time {
    color: rgba(255, 255, 255, 0.6);
    font-size: 13px;
    letter-spacing: -0.26px;
}

@media screen and (max-width: 1024px) {
    .sec_news .inner {
        padding: 0 40px;
    }

    .news_head > h2 {
        font-size: 40px;
    }

    .news_head > p {
        font-size: 18px;
    }

    .news_item {
        width: 300px;
    }
}

@media screen and (max-width: 768px) {
    .sec_news {
        padding: 80px 0 0;
    }

    .sec_news .inner {
        padding: 0 20px;
    }

    .news_head > h2 {
        font-size: 28px;
    }

    .news_head > p {
        font-size: 15px;
    }

    .news_more_btn {
        font-size: 14px;
        padding: 12px 22px;
    }

    .news_item {
        width: 240px;
        padding: 20px 16px;
    }

    .news_scroll_list {
        gap: 16px;
    }

    .news_item > h3 {
        font-size: 15px;
    }
}
</style>
