<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import mainImg01 from "@/assets/images/dummy/gsrst_smain_01.png";
import mainImg02 from "@/assets/images/dummy/gsrst_smain_02.png";

const _getIsMobile = () => window.innerWidth <= 768;
const isMobileView = ref(false);
const _onResize = () => { isMobileView.value = _getIsMobile(); };

onMounted(() => {
    isMobileView.value = _getIsMobile();
    window.addEventListener("resize", _onResize);
});
onBeforeUnmount(() => {
    window.removeEventListener("resize", _onResize);
});

const cards = [
    {
        img: mainImg01,
        alt: "GS25 창업",
        cls: "gs25",
        badge: "새로운 시작을 응원합니다",
        badgeColor: "rgba(16, 122, 242, 0.9)",
        title: "당신의 꿈을 현실로,<br><span style='color:#9FCAFA'>GS25</span>가 함께 걷겠습니다",
        desc: "혼자가 아닙니다.<br class=\"m_br\" />GS25가 여러분의 든든한 파트너가<br class=\"m_br\" /> 되어<br class=\"p_br\" />성공 창업의 첫걸음부터 끝까지<br class=\"m_br\" />함께하겠습니다",
        link: "#none",
    },
    {
        img: mainImg02,
        alt: "GS THE FRESH 창업",
        cls: "fresh",
        badge: "신선한 시작을 응원합니다",
        badgeColor: "rgba(21, 184, 116, 0.9)",
        title: "신선함과 함께,<br><span style='color:#9DE2C5'>GS THE FRESH</span>가 함께 성장합니다",
        desc: "프리미엄 신선식품 전문 슈퍼마켓으로<br>고객에게 최상의 가치를 전달하는 사업 파트너가 되어드립니다",
        link: "#none",
    },
];
</script>

<template>
    <section class="sec_franchise">
        <div class="sec_inner">
            <header>
                <h2>창업안내</h2>
                <p>더 나은 미래를 향한 동행,<br class=m_br/>GS리테일이 당신의 성공 창업을 응원합니다.</p>
            </header>

            <!-- PC / Tablet -->
            <ul v-if="!isMobileView" class="franchise_list">
                <li v-for="(card, i) in cards" :key="i">
                    <article class="franchise_card" :class="card.cls" :style="{ backgroundImage: `url(${card.img})` }">
                        <span class="badge" :style="{ backgroundColor: card.badgeColor }">{{ card.badge }}</span>
                        <div class="card_txt">
                            <strong v-html="card.title" />
                            <p v-html="card.desc" />
                        </div>
                        <a :href="card.link" class="btn_go" target="_blank">바로가기</a>
                    </article>
                </li>
            </ul>

            <!-- Mobile: Swiper -->
            <Swiper
                v-else
                slides-per-view="auto"
                :space-between="20"
                :slides-offset-before="20"
                :slides-offset-after="20"
                class="franchise_swiper"
            >
                <SwiperSlide v-for="(card, i) in cards" :key="i">
                    <article class="franchise_card" :class="card.cls" :style="{ backgroundImage: `url(${card.img})` }">
                        <span class="badge" :style="{ backgroundColor: card.badgeColor }">{{ card.badge }}</span>
                        <div class="card_txt">
                            <strong v-html="card.title" />
                            <p v-html="card.desc" />
                        </div>
                        <a :href="card.link" class="btn_go" target="_blank">바로가기</a>
                    </article>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<style scoped>
/* ── PC (기본) ── */
:deep(.m_br) { display: none; }
:deep(.p_br) { display: block; }
.sec_franchise { padding: 120px 0 200px; }
.sec_inner { max-width: 1460px; margin: 0 auto; padding: 0 20px; }

.sec_inner > header { margin-bottom: 80px; text-align: center; }
.sec_inner > header > h2 { color: #000; font-size: 6.4rem; font-weight: 700; line-height: 1.24; letter-spacing: -0.02em; }
.sec_inner > header > p { margin-top: 8px; color: #000; font-size: 2.4rem; font-weight: 600; line-height: 1.3; letter-spacing: -0.02em; }

.franchise_list { display: flex; gap: 20px; }
.franchise_list > li { flex: 1; }

.franchise_card { width: 100%; min-height: 540px; padding: 99px 0 82px; background-color: #d9d9d9; background-size: cover; background-position: center; border-radius: 12px; position: relative; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; }
.franchise_card::before { width: 100%; height: 100%;content: ''; position: absolute; top: 0; left: 0; }
.franchise_card.fresh { background-position: -213px 0; }
.franchise_card.fresh::before { background-color: rgba(0, 0, 0, 0.2); }

.franchise_card > .badge { height: 53px; margin-bottom: 50px; padding: 0 20px; color: #fff; font-size: 1.8rem; border-radius: 999px; position: relative; display: flex; align-items: center; white-space: nowrap; }

.franchise_card > .card_txt { padding: 0 40px; text-align: center; position: relative; }
.franchise_card > .card_txt > strong{ color: #fff; font-size: 3.2rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; display: block; }
.franchise_card > .card_txt > strong:deep(span){ font-size: 3.2rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em;}
.franchise_card > .card_txt > p { margin-top: 4px; color: #fff; font-size: 2rem; line-height: 1.35; letter-spacing: -0.01em; }

.btn_go { height: 64px; margin-top: auto; padding: 0 24px; color: #161616; font-size: 1.8rem; font-weight: 700; background-color: #f2f2f4; border-radius: 10px; position: relative; display: inline-flex; align-items: center; gap: 8px; }
.btn_go::after { width: 16px; height: 16px;background-color:red; content: '';}

/* ── Tablet (769px ~ 1024px) ── */
@media (max-width: 1024px) {
    .sec_franchise { padding: 80px 0 140px; }
    .sec_inner { padding: 0 20px; }
    .sec_inner > header > h2 { font-size: 4.8rem; }
    .sec_inner > header > p { font-size: 2rem; }
    .franchise_card { min-height: 480px; padding: 70px 0 56px; }
    .franchise_card > .badge { height: 46px; margin-bottom: 32px; }
    .franchise_card > .card_txt { padding: 0 28px; }
    .franchise_card > .card_txt > strong { font-size: 2.8rem; }
    .franchise_card > .card_txt > p { font-size: 1.8rem; }
    .btn_go { height: 54px; }
}

/* ── Mobile (~ 768px) ── */
@media (max-width: 768px) {
    :deep(.m_br) { display: block; }
    :deep(.p_br) { display: none; }
    .sec_franchise { padding: 60px 0; overflow-x: hidden; }
    .sec_inner { padding: 0; }

    .sec_inner > header { padding: 0 20px; text-align: left; }
    .sec_inner > header > h2 { display: none; }
    .sec_inner > header > p { margin-top: 0; color: #161616; font-size: 2.8rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }

    .franchise_swiper { overflow: visible; padding-bottom: 36px; }
    .franchise_swiper :deep(.swiper-slide) { width: 85.33vw; }

    .franchise_card { height: 540px; padding: 101px 0 83px; border-radius: 12px; }
    .franchise_card > .badge { height: 50px; margin-bottom: 50px; font-size: 1.4rem; letter-spacing: -0.01em; }
    .franchise_card > .card_txt { margin-bottom: 50px; padding: 0 20px; }
    .franchise_card > .card_txt > strong { font-size: 2.4rem; line-height: 1.35; letter-spacing: -0.01em; }
    .franchise_card > .card_txt > strong:deep(span) { font-size: 2.4rem; line-height: 1.35; letter-spacing: -0.01em; }
    .franchise_card > .card_txt > p { margin-top: 4px; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .btn_go { height: 44px; margin-top: 0; font-size: 1.6rem; font-weight: 400; border-radius: 8px; }
}
</style>
