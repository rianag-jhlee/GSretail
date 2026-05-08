<template>
    <div class="main-container">
        <div class="title_wrap ac">
            <h2 class="page_title">{{ t.MainTitle }}</h2>
        </div>
        <div class="content">
            <section class="sec_vision">
                <header class="header center">
                    <h3>Our Vision</h3>
                    <p>고객의 모든 경험을 연결하고, 데이터로 공감하며, 상품과 서비스로 신뢰받는 플랫폼</p>
                </header>
                <div class="img_wrap">
                    <picture>
                        <source media="(max-width: 768px)" :srcset="imgVisionMo" />
                        <img :src="imgVision" alt="연결, 공감, 신뢰를 표현한 GS리테일 비전 다이어그램" />
                    </picture>
                </div>
            </section>
            <section class="sec_value">
                <header class="header">
                    <h3>{{ t.valueHeading }}</h3>
                    <p>{{ t.valueSub }}</p>
                </header>
                <ul v-if="!isMobileView" class="value_list">
                    <li v-for="item in t.valueItems" :key="item.title">
                        <strong>{{ item.title }}</strong>
                        <p>{{ item.desc }}</p>
                    </li>
                </ul>
                <Swiper v-else slides-per-view="auto" :space-between="8" class="value_swiper">
                    <SwiperSlide v-for="item in t.valueItems" :key="item.title">
                        <article class="value_slide">
                            <div class="value_thumb" :style="{ backgroundImage: `url(${item.thumb})` }" aria-hidden="true"></div>
                            <strong>{{ item.title }}</strong>
                            <p>{{ item.desc }}</p>
                        </article>
                    </SwiperSlide>
                </Swiper>
            </section>
            <section class="sec_way">
                <header class="header center">
                    <h3>{{ t.wayHeading }}</h3>
                    <p>{{ t.waySub }}</p>
                </header>
                <ul class="way_list">
                    <li v-for="item in t.wayItems" :key="item.title">
                        <strong>{{ item.title }}</strong>
                        <p>{{ item.desc }}</p>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import imgVision from "@/assets/images/dummy/gsrab02_02.png";
import imgVisionMo from "@/assets/images/dummy/mo/gsrab02_02_mo.png";
import imgValue1 from "@/assets/images/dummy/gsrab02_03.png";
import imgValue2 from "@/assets/images/dummy/gsrab02_04.png";
import imgValue3 from "@/assets/images/dummy/gsrab02_05.png";
import imgValue4 from "@/assets/images/dummy/gsrab02_06.png";

const MOBILE_BREAKPOINT = 768;
const getIsMobile = () => window.innerWidth <= MOBILE_BREAKPOINT;
const isMobileView = ref(false);
const onResize = () => { isMobileView.value = getIsMobile(); };

onMounted(() => {
    isMobileView.value = getIsMobile();
    window.addEventListener("resize", onResize);
});

onUnmounted(() => {
    window.removeEventListener("resize", onResize);
});

const valueThumbs = [imgValue1, imgValue2, imgValue3, imgValue4];
const valueItems = [
    { title: "Fair", desc: "공정함을 지키고\n사회와 환경에 기여합니다." },
    { title: "Friendly", desc: "다양성을 인정하고\n서로를 존중합니다." },
    { title: "Fresh", desc: "창의와 도전을 장려하여\n회사와 개인이 함께 성장합니다." },
    { title: "Fun", desc: "유연하고 자율적인 환경에서\n즐겁게 일합니다." },
].map((item, idx) => ({ ...item, thumb: valueThumbs[idx] }));

const wayItems = [
    { title: "01 고객 최우선", desc: "# 업무의 시작과 끝을 고객으로 연결합니다.\n# 고객을 위해, '되는 방법'을 먼저 찾습니다." },
    { title: "02 성장 마인드", desc: "# 작고 빠르게 시도하며 성공 경험을 만듭니다.\n# 매일의 성장과 변화를 추구합니다." },
    { title: "03 열린 소통", desc: "# 명확한 목표와 과정 공유로 눈높이를 맞춥니다.\n# 치열하게 논의하고, One Team으로 해냅니다." },
    { title: "04 AX 실행력", desc: "# 설득과 결정 모두 데이터가 기준입니다.\n# 디지털/AI 툴로 업무 방식을 개선합니다." },
];

const langData = {
    ko: {
        MainTitle: "ABOUT GSR",
        valueHeading: "GS Value",
        valueSub: "GS리테일 고유의 가치관",
        valueItems,
        wayHeading: "GS Way",
        waySub: "GS리테일의 일하는 방식",
        wayItems,
    },
};
const locale = ref("ko");
const t = computed(() => langData[locale.value]);
</script>
<style scoped>
img { width: 100%; height: auto; object-fit: cover; display: block;  }
.main-container { width: 100%; position: relative; display: block; }
.title_wrap { width: 100%; max-height: 480px; padding: 10.91% 0 11.25%; text-align: center; position: relative; display: block; background-color: transparent; background-image: url("@/assets/images/dummy/gsrab02_01.png"); background-repeat: no-repeat; background-size: cover; background-position: center -90px; }
.title_wrap::after { content: ""; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.3); position: absolute; left: 0; top: 0; z-index: 1; }
.title_wrap > h2 { color: #fff; font-weight: 700; font-size: 7.2rem; line-height: 1.24; letter-spacing: -0.02em; position: relative; z-index: 2; }
.content { width: 100%; max-width: 1460px; margin: 0 auto; padding: 200px 20px; position: relative; display: block; }
/* section { padding-top: 200px; } */
section+section{padding:200px 0 0; }
.header h3 { margin: 0; font-weight: 700; font-size: 4.8rem; line-height: 1.3; letter-spacing: -0.01em; }
.header p { margin: 16px 0 0; font-weight: 700; font-size: 2.4rem; line-height: 1.35; letter-spacing: -0.01em; }
.header.center h3, .header.center p { text-align: center; }
.sec_vision .img_wrap { margin-top: 100px;  }
.sec_vision .img_wrap picture { width: 100%; position: relative; display: block; }
.sec_vision .img_wrap picture img { margin: 0 auto; object-fit: contain; }
.sec_value {display: flex; flex-wrap: wrap; gap:20px; align-items: flex-start; justify-content: space-between; }
.sec_value > .header { width: 320px; max-width: 100%; flex-shrink: 0; }
.sec_value > .value_list { width: 1100px; max-width: 100%; flex: 1 1 700px; margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 20px; min-width: 0; }
.sec_value > .value_list > li { margin: 0; padding: 56px; min-height: 500px; border-radius: 12px; background-color: #f5f5f5; background-repeat: no-repeat; background-position: center; background-size: cover; position: relative; display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start; box-sizing: border-box; }
.sec_value > .value_list > li > strong { margin: 0; font-size: 4rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.sec_value > .value_list > li > p { margin: 12px 0 0; font-size: 2rem; font-weight: 400; line-height: 1.35; letter-spacing: -0.01em; white-space: pre-line; }
.sec_value > .value_list > li:nth-child(1) { background-image: url("@/assets/images/dummy/gsrab02_03.png"); }
.sec_value > .value_list > li:nth-child(2) { background-image: url("@/assets/images/dummy/gsrab02_04.png"); }
.sec_value > .value_list > li:nth-child(3) { background-image: url("@/assets/images/dummy/gsrab02_05.png"); }
.sec_value > .value_list > li:nth-child(4) { background-image: url("@/assets/images/dummy/gsrab02_06.png"); }
.sec_way > .way_list { margin: 100px 0 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }
.sec_way > .way_list > li {padding: 56px; min-height: 400px; border-radius: 12px; background-repeat: no-repeat; background-position: center; background-size: cover; box-sizing: border-box; display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start; }
.sec_way > .way_list > li > strong { font-size: 4rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.sec_way > .way_list > li > p { margin: 8px 0 0; font-size: 2rem; line-height: 1.35; letter-spacing: -0.01em; white-space: pre-line; }
.sec_way > .way_list > li:nth-child(1) { background-image: url("@/assets/images/dummy/gsrab02_07.png"); }
.sec_way > .way_list > li:nth-child(2) { background-image: url("@/assets/images/dummy/gsrab02_08.png"); }
.sec_way > .way_list > li:nth-child(3) { background-image: url("@/assets/images/dummy/gsrab02_09.png"); }
.sec_way > .way_list > li:nth-child(4) { background-image: url("@/assets/images/dummy/gsrab02_10.jpg"); }
@media screen and (max-width: 768px) {
    .title_wrap { display: none; }
    .visual_sub { font-size: 2rem; }
    section+section{padding:60px 0 0; }
    .content { width: 100%; max-width: 100%; padding: 60px 20px 94px; }
    .header h3 { font-size: 2.4rem; text-align: left; }
    .header p { margin-top: 12px; font-weight: 400; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .header.center h3, .header.center p { text-align: left; }
    .sec_vision .img_wrap { margin-top: 60px; }
    .sec_vision .img_wrap picture img{max-width: 335px;}
    .sec_value { flex-direction: column; gap: 24px; }
    .sec_value > .header { width: 100%; }
    .sec_value > .value_swiper { width: calc(100% + 40px); margin: 0 -20px; padding: 0 20px; overflow: hidden; box-sizing: border-box; }
    .sec_value :deep(.value_swiper .swiper-slide) { width: 84.53vw; }
    .sec_value :deep(.value_swiper .swiper-wrapper) { align-items: stretch; }
    .sec_value .value_slide { width: 100%; display: flex; flex-direction: column; gap: 8px; }
    .sec_value .value_slide > strong { font-size: 2rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
    .sec_value .value_slide > p { margin: 0; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; white-space: pre-line; }
    .sec_value .value_thumb { width: 100%;aspect-ratio: 317 / 210; border-radius: 12px; background-repeat: no-repeat; background-position: center; background-size: cover; }
    .sec_way .header h3, .sec_way .header p { text-align: center; }
    .sec_way > .way_list { margin-top: 24px; grid-template-columns: 1fr; }
    .sec_way > .way_list > li { min-height: 240px; padding: 56px 20px; }
    .sec_way > .way_list > li > strong { font-size: 2.4rem; line-height: 1.35; }
    .sec_way > .way_list > li > p { margin-top: 8px; font-size: 1.6rem; line-height: 1.5; }
}
</style>
