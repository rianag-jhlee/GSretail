<template>
    <div class="wrap_gsrst">
        <!-- HEADER -->
        <header class="page_header" :style="{ backgroundImage: `url(${imgBg})` }">
            <div class="header_inner">
                <h2 class="header_title">GS25 창업안내</h2>
            </div>
        </header>

        <!-- BODY -->
        <div class="sec_body">
            <!-- Depth 1: 페이지 탭 (type_01: 하단 보더 언더라인) -->
            <Tabs :tab-items="depth1Tabs" tab-class="type_01" v-model="activeD1" :tab-slide="true" />

            <!-- Depth 2: 섹션 탭 (type_02: pill 스타일) -->
            <Tabs v-show="activeD1 === 0" :tab-items="depth2Tabs" tab-class="type_02" v-model="activeD2" :tab-slide="true" />

            <!-- 가맹 조건 안내 -->
            <div class="tab_page" v-show="activeD1 === 0 && activeD2 === 0">
                <section class="sec_brand_intro" :style="{ backgroundImage: `url(${imgBg})` }">
                    <header>
                        <p class="tit">{{ brandIntro.badge }}</p>
                        <h3>{{ brandIntro.title }}</h3>
                        <p class="desc" v-html="brandIntro.desc"></p>
                    </header>
                    <ul class="apply_list">
                        <li v-for="(item, i) in brandApplyLinks" :key="i">
                            <a :href="item.url">
                                <strong v-html="item.title"></strong>
                                <span v-html="item.desc"></span>
                            </a>
                        </li>
                    </ul>
                    <ul class="stat_list">
                        <li v-for="(item, i) in brandStats" :key="i">
                            <strong>{{ item.value }}</strong>
                            <span>{{ item.label }}</span>
                        </li>
                    </ul>
                </section>
                <section class="sec_success_point">
                    <header class="section_title">
                        <p class="tit">{{ successPointPanel.badge }}</p>
                        <h2 v-html="successPointPanel.title"></h2>
                        <p>{{ successPointPanel.desc }}</p>
                    </header>
                    <NumberedInfoList :items="successPointCards" :show-icon="true" desc-class="num_info_desc_light" />
                </section>
                <section class="sec_brand_solution">
                    <div class="inner">
                        <header class="section_title">
                            <h2 v-html="brandSolutionPanel.title"></h2>
                            <p>{{ brandSolutionPanel.desc }}</p>
                        </header>
                        <ul class="link_card_list">
                            <li v-for="(item, i) in brandSolutionCards" :key="i">
                                <a :href="item.url">
                                    <span class="thumb" aria-hidden="true"></span>
                                    <span class="txt">
                                        <strong>{{ item.title }}</strong>
                                        <span class="desc">{{ item.desc }}</span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>

            <div class="tab_page" v-show="activeD1 === 0 && activeD2 === 1">
                <section class="sec_competitive">
                    <header class="section_title">
                        <h2 v-html="competitivePanel.title"></h2>
                    </header>
                    <ul class="competitive_list">
                        <li v-for="(item, i) in competitiveCards" :key="i">
                            <article>
                                <span class="icon" aria-hidden="true"></span>
                                <strong v-html="item.title"></strong>
                            </article>
                        </li>
                    </ul>
                </section>
                
            </div>

            <div class="tab_page" v-show="activeD1 === 0 && activeD2 === 2"></div>

            <div class="tab_page" v-show="activeD1 === 1"></div>

            <div class="tab_page" v-show="activeD1 === 2"></div>

            <div class="tab_page" v-show="activeD1 === 3"></div>

            <div class="tab_page" v-show="activeD1 === 4"></div>
        </div>
        <ul
            ref="quickMenuRef"
            class="quick_menu"
            :aria-hidden="!showQuickMenu"
        >
            <li><button type="button">창업안내</button></li>
            <li><button type="button">입점상담</button></li>
            <li><button type="button">고객센터</button></li>
        </ul>
    </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tabs from "@/components/Tabs.vue";
import NumberedInfoList from "@/components/NumberedInfoList.vue";
import imgBg from "@/assets/images/dummy/gsrst02010101_01.jpg";

const activeD1 = ref(0);
const activeD2 = ref(0);

const depth1Tabs = [
    { item: "GS25 창업 알아보기" },
    { item: "창업 준비하기" },
    { item: "추천 점포 찾기" },
    { item: "상담 및 신청" },
    { item: "가맹계약시스템" },
];

const depth2Tabs = [
    { item: "GS25 브랜드 소개" },
    { item: "차별화된 경쟁력" },
    { item: "편의점 창업 이해" },
    { item: "FAQ" },
];

const brandIntro = {
    badge: "4년 연속, 편의점 매출 1위 브랜드 (22년~25년)",
    title: "비교할수록 결국, GS25.",
    desc: "점포당 매출 1위 브랜드<br class='p_br'/>함께 성장하기 위해, 점포의 숫자보다 경영주님의 수익을 먼저<br class='m_br'/>생각합니다.",
};

const brandApplyLinks = [
    {
        title: "창업설명회 신청",
        desc: "창업 전반에 대한 정보를 한 번에 안내드려요",
        url: "#none",
    },
    {
        title: "창업상담 신청",
        desc: "창업에 대한 궁금증을 1:1 상담해 드려요",
        url: "#none",
    },
    {
        title: "입점 제안/<br class='p_br'/>브랜드 전환 문의",
        desc: "보유 자리 입점 제안 또는 브랜드 전환을<br class='m_br'/>상담해드려요",
        url: "#none",
    },
];

const brandStats = [
    { value: "18,000+", label: "전국 점포수" },
    { value: "편의점 매출 1위", label: "점포당 연매출 6.4억+" },
    { value: "460만명", label: "전국 일평균 방문 고객" },
];

const successPointPanel = {
    badge: "SUCCESS POINT",
    title: "경영주님이 편한 GS25<br /><span class='txt_blue'>창업 성공 포인트</span>",
    desc: "GS25와 함께라면, 성공적인 창업이 가능합니다.",
};

const successPointCards = [
    {
        em: "수익성 분석",
        title: "수익성 중심의 신규 점포 오픈",
        desc: "점포 개발 전문가의 데이터와 현장 분석을 통해 수익성이 보이는 점포만 오픈합니다.",
    },
    {
        em: "스마트 운영",
        title: "든든하고 편리한 지원시스템",
        desc: "스마트 운영 시스템과 영업 전문가의 1:1 맞춤관리까지, 첫창업이어도 걱정 마세요",
    },
    {
        em: "차별화 컨셉",
        title: "경쟁력 있는 상품/컨셉",
        desc: "메가히트 상품부터 신선강화형 매장까지 GS25만의 차별화 컨셉으로 매출이 올라갑니다.",
    },
    {
        em: "히트 상품",
        title: "압도적인 마케팅",
        desc: "단골 고객을 만드는 마케팅과 멤버십 ‘우리동네 GS’ 앱부터 100만 구독자 SNS 채널까지, 고객이 다시 찾는 이유를 만듭니다.",
    },
];

const brandSolutionPanel = {
    title: "저도 창업 가능한가요? <br class='m_br'/><span class='txt_blue'>그럼요!</span>",
    desc: "경영주님 상황에 맞는 맞춤 솔루션을 찾아드립니다.",
};

const brandSolutionCards = [
    {
        title: "가맹 타입 소개",
        desc: "나에게 딱 맞는 3가지 타입",
        url: "#none",
    },
    {
        title: "창업 절차 안내",
        desc: "30일이면 창업 완료!",
        url: "#none",
    },
    {
        title: "추천 점포",
        desc: "지역, 상권, 투자비용에 맞는 추천 점포 확인",
        url: "#none",
    },
];

const competitivePanel = {
    title: "수익성 중심 점포 오픈부터 스마트한 시스템과 밀착 지원까지<br /><span class='txt_blue'>1등 브랜드로 창업을 시작하세요.</span>",
};

const competitiveCards = [
    { title: "수익성 중심의<br />점포 오픈" },
    { title: "고객에게 사랑받는<br />상품/컨셉" },
    { title: "압도적인<br />마케팅 & 멤버십" },
    { title: "스마트한 시스템과<br />밀착 지원" },
];


const mqMobile = window.matchMedia("(max-width: 768px)");

const QUICK_MENU_REVEAL_PX = 100;
const QUICK_MENU_VIEWPORT_BOTTOM_PX = 60;
const QUICK_MENU_FOOTER_GAP_PX = 60;
const showQuickMenu = ref(false);
const quickMenuRef = ref(null);
let quickMenuGsapCtx = null;
let quickMenuFooterEl = null;
let quickMenuWrapEl = null;
let quickMenuLastBottomPx = null;
let quickMenuLastTopPx = null;
let quickMenuFooterZone = false;
let quickMenuResizeTimer = null;

function updateQuickMenuBottom(quickMenu) {
    if (!quickMenu) return;
    if (!quickMenuFooterEl) {
        quickMenuFooterEl = document.querySelector("footer");
    }
    if (!quickMenuWrapEl) {
        quickMenuWrapEl = quickMenu.closest(".wrap_gsrst");
    }
    const footer = quickMenuFooterEl;
    const wrap = quickMenuWrapEl;
    if (!footer || !wrap) {
        if (quickMenuLastBottomPx !== QUICK_MENU_VIEWPORT_BOTTOM_PX) {
            gsap.set(quickMenu, { position: "fixed", top: "auto", bottom: QUICK_MENU_VIEWPORT_BOTTOM_PX });
            quickMenuLastBottomPx = QUICK_MENU_VIEWPORT_BOTTOM_PX;
            quickMenuLastTopPx = null;
            quickMenuFooterZone = false;
        }
        return;
    }
    const rect = footer.getBoundingClientRect();
    const vh = window.innerHeight;
    const gap = QUICK_MENU_FOOTER_GAP_PX;
    const scrollY = window.scrollY ?? document.documentElement.scrollTop;
    const footerTopDoc = rect.top + scrollY;
    const wrapTopDoc = wrap.getBoundingClientRect().top + scrollY;
    const quickMenuHeight = quickMenu.offsetHeight;
    const fixedBottomDoc = scrollY + vh - QUICK_MENU_VIEWPORT_BOTTOM_PX;
    const footerLimitDoc = footerTopDoc - gap;
    const shouldDockToFooter = fixedBottomDoc >= footerLimitDoc;

    if (shouldDockToFooter) {
        const absoluteTopPx = Math.round(footerTopDoc - gap - quickMenuHeight - wrapTopDoc);
        if (!quickMenuFooterZone) {
            gsap.set(quickMenu, { clearProps: "transform" });
            quickMenuFooterZone = true;
        }
        if (quickMenuLastTopPx !== absoluteTopPx) {
            gsap.set(quickMenu, { position: "absolute", top: absoluteTopPx, bottom: "auto" });
            quickMenuLastTopPx = absoluteTopPx;
            quickMenuLastBottomPx = null;
        }
        return;
    }

    if (quickMenuFooterZone) {
        quickMenuFooterZone = false;
    }
    if (quickMenuLastBottomPx !== QUICK_MENU_VIEWPORT_BOTTOM_PX) {
        gsap.set(quickMenu, { position: "fixed", top: "auto", bottom: QUICK_MENU_VIEWPORT_BOTTOM_PX });
        quickMenuLastBottomPx = QUICK_MENU_VIEWPORT_BOTTOM_PX;
        quickMenuLastTopPx = null;
    }
}

function refreshQuickMenuScrollTrigger() {
    if (quickMenuResizeTimer) {
        window.clearTimeout(quickMenuResizeTimer);
    }
    quickMenuResizeTimer = window.setTimeout(() => {
        ScrollTrigger.refresh();
        if (quickMenuRef.value) {
            quickMenuLastBottomPx = null;
            quickMenuLastTopPx = null;
            updateQuickMenuBottom(quickMenuRef.value);
        }
    }, 120);
}

function initQuickMenuGsap() {
    if (mqMobile.matches) return;
    const quickMenu = quickMenuRef.value;
    if (!quickMenu) return;
    quickMenuFooterEl = document.querySelector("footer");
    quickMenuWrapEl = quickMenu.closest(".wrap_gsrst");
    quickMenuLastBottomPx = null;
    quickMenuLastTopPx = null;
    quickMenuFooterZone = false;

    gsap.registerPlugin(ScrollTrigger);

    quickMenuGsapCtx = gsap.context(() => {
        gsap.fromTo(
            quickMenu,
            { opacity: 0, pointerEvents: "none" },
            {
                opacity: 1,
                pointerEvents: "auto",
                duration: 0.5,
                scrollTrigger: {
                    trigger: "body",
                    start: `${QUICK_MENU_REVEAL_PX}px top`,
                    toggleActions: "play reverse play reverse",
                    onUpdate: () => {
                        const y = window.scrollY ?? document.documentElement.scrollTop;
                        showQuickMenu.value = y >= QUICK_MENU_REVEAL_PX;
                    }
                }
            }
        );

        ScrollTrigger.create({
            trigger: "body",
            start: "top top",
            end: "max",
            onUpdate: () => {
                updateQuickMenuBottom(quickMenu);
            }
        });
    });
    ScrollTrigger.refresh();
    const y0 = window.scrollY ?? document.documentElement.scrollTop;
    showQuickMenu.value = y0 >= QUICK_MENU_REVEAL_PX;
    updateQuickMenuBottom(quickMenu);
}

onMounted(() => {
    window.addEventListener("resize", refreshQuickMenuScrollTrigger);
    nextTick(() => {
        initQuickMenuGsap();
    });
});
onUnmounted(() => {
    window.removeEventListener("resize", refreshQuickMenuScrollTrigger);
    if (quickMenuResizeTimer) {
        window.clearTimeout(quickMenuResizeTimer);
        quickMenuResizeTimer = null;
    }
    quickMenuGsapCtx?.revert();
    quickMenuGsapCtx = null;
    quickMenuFooterEl = null;
    quickMenuWrapEl = null;
    quickMenuLastBottomPx = null;
    quickMenuLastTopPx = null;
    quickMenuFooterZone = false;
    showQuickMenu.value = false;
});
</script>


<style scoped>
:deep(.m_br) { display: none; }
:deep(.p_br) { display: block; }
.wrap_gsrst { position: relative; overflow-x: clip; }
:deep(.txt_blue) { color: #107af2; }
.page_header { width: 100%; height: 480px; background-size: cover; background-position: center; position: relative; display: flex; align-items: center; justify-content: center; }
.page_header::before { width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); content: ''; position: absolute; top: 0; left: 0; }
.header_inner { position: relative; z-index: 1; text-align: center; }
.header_title { color: #fff; font-size: 7.2rem; font-weight: 700; letter-spacing: -0.02em; line-height: 1.24; }
.sec_body { max-width: 1460px; margin: 0 auto; padding: 0 20px; box-sizing: border-box; }
.section_title { margin-bottom: 64px; }
.section_title > .tit { width: fit-content; margin-bottom: 16px; padding: 8px 16px; color: #107af2; font-size: 1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; background-color: #e7f2fe; border: 1px solid #107af2; border-radius: 99px; display: block; }
.section_title > h2 { color: #161616; font-size: 4rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.section_title > p { margin-top: 16px; color: #161616; font-size: 2.4rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
section + section { padding-top: 100px; }
.tab_page { padding: 64px 0 200px; }
.sec_brand_intro { min-height: 700px; padding: 97px 100px 77px; background-size: cover; background-position: center; border-radius: 20px; position: relative; overflow: hidden; display: flex; flex-direction: column; box-sizing: border-box; }
.sec_brand_intro::before { width: 100%; height: 100%; background-color: rgba(0,0,0,0.6); content: ''; position: absolute; top: 0; left: 0; }
.sec_brand_intro > header, .sec_brand_intro > .apply_list, .sec_brand_intro > .stat_list { position: relative; z-index: 1; }
.sec_brand_intro > header > .tit { width: fit-content; margin: 0; padding: 8px 16px; color: #fff; font-size: 1.4rem; font-weight: 500; line-height: 1.4; letter-spacing: -0.01em; background-color: rgba(255,255,255,0.2); border-radius: 99px; }
.sec_brand_intro > header > h3 { margin: 8px 0 0; color: #fff; font-size: 5.6rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.sec_brand_intro > header > .desc { color: #fff; font-size: 1.8rem; font-weight: 700; line-height: 1.5; letter-spacing: 0; }
.sec_brand_intro > .apply_list { width: 100%; max-width: 540px; margin-top: 24px; display: flex; flex-direction: column; gap: 10px; }
.sec_brand_intro > .apply_list > li > a { width: 100%; min-height: 51px; padding: 12px 20px; background-color: rgba(16,122,242,0.8); border-radius: 12px; color: #fff; text-decoration: none; display: flex; align-items: center; justify-content: space-between; gap: 16px; box-sizing: border-box; }
.sec_brand_intro > .apply_list > li:last-child > a { min-height: 64px; align-items: center; }
.sec_brand_intro > .apply_list > li > a > strong { flex: 0 0 114px; font-size: 1.8rem; font-weight: 700; line-height: 1.5; letter-spacing: 0; }
.sec_brand_intro > .apply_list > li:last-child > a > strong { flex-basis: 114px; font-size: 1.6rem; line-height: 1.24; }
.sec_brand_intro > .apply_list > li > a > span { flex: 1; min-width: 0; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.sec_brand_intro > .apply_list > li > a::after { content: ''; width: 16px; height: 16px; flex-shrink: 0; background-color: #fff; }
.sec_brand_intro > .stat_list { width: 100%; max-width: 647px; margin-top: 50px; display: flex; gap: 10px; }
.sec_brand_intro > .stat_list > li { flex: 1; min-width: 0; min-height: 95px; padding: 20px 32px; background-color: rgba(255,255,255,0.22); border-radius: 16px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; text-align: center; }
.sec_brand_intro > .stat_list > li > strong { color: #fff; font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_brand_intro > .stat_list > li > span { color: rgba(255,255,255,0.8); font-size: 1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; }
.sec_success_point :deep(.num_info_list) { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 40px; }
.sec_success_point :deep(.num_info_item) { padding: 0; border-bottom: 0; }
.sec_success_point :deep(.num_info_num) { margin-bottom: 8px; font-size: 1.8rem; line-height: 1.5; letter-spacing: 0; }
.sec_success_point :deep(.num_info_item article) { display: flex; flex-direction: column; gap: 24px; }
.sec_success_point :deep(.num_info_icon) { width: 80px; height: 80px; }
.sec_success_point :deep(.num_info_title) { margin-bottom: 8px; }
.sec_success_point :deep(.num_info_title > strong) { font-size: 2.8rem; line-height: 1.35; letter-spacing: -0.01em; }
.sec_success_point :deep(.num_info_body > p) { font-size: 2rem; line-height: 1.35; letter-spacing: -0.01em; }
section > .inner { margin-inline: calc(50% - 50vw); padding: 80px calc(50vw - 50%); background-color: #f8f8f8; box-sizing: border-box; }
section > .inner > .section_title { text-align: center; }
.sec_brand_solution > .inner > .link_card_list { display: flex; align-items: stretch; gap: 20px; }
.sec_brand_solution > .inner > .link_card_list > li { flex: 1; min-width: 0; display: flex; }
.sec_brand_solution > .inner > .link_card_list > li > a { width: 100%; min-height: 144px; padding: 32px 24px; background-color: #fff; border-radius: 12px; text-decoration: none; display: flex; align-items: center; gap: 20px; box-sizing: border-box; }
.sec_brand_solution > .inner > .link_card_list > li > a > .thumb { width: 80px; height: 80px; flex-shrink: 0; background-color: #f8f8f8; border-radius: 12px; }
.sec_brand_solution > .inner > .link_card_list > li > a > .txt { flex: 1; min-width: 0; }
.sec_brand_solution > .inner > .link_card_list > li > a > .txt > strong { color: #161616; font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; display: block; }
.sec_brand_solution > .inner > .link_card_list > li > a > .txt > .desc { margin-top: 6px; color: #67676f; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; display: block; }
.sec_brand_solution > .inner > .link_card_list > li > a::after { content: ''; width: 24px; height: 24px; flex-shrink: 0; background-color: #161616; }
.sec_competitive > .section_title { text-align: center; }
.sec_competitive > .competitive_list { margin: 0; padding: 0; display: flex; justify-content: center; }
.sec_competitive > .competitive_list > li { list-style: none; position: relative; }
.sec_competitive > .competitive_list > li + li { margin-left: -30px; }
.sec_competitive > .competitive_list > li:nth-child(1) { z-index: 1; }
.sec_competitive > .competitive_list > li:nth-child(2) { z-index: 2; }
.sec_competitive > .competitive_list > li:nth-child(3) { z-index: 3; }
.sec_competitive > .competitive_list > li:nth-child(4) { z-index: 4; }
.sec_competitive > .competitive_list > li > article { width: 260px; height: 260px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; text-align: center; box-sizing: border-box; }
.sec_competitive > .competitive_list > li > article > .icon { width: 40px; height: 40px; background-color: #d0d0d8; }
.sec_competitive > .competitive_list > li > article > strong { font-size: 2rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_competitive > .competitive_list > li:nth-child(1) > article { background-color: rgba(255,118,48,0.12); }
.sec_competitive > .competitive_list > li:nth-child(1) > article > strong { color: #f6671e; }
.sec_competitive > .competitive_list > li:nth-child(2) > article { background-color: rgba(139,144,148,0.18); }
.sec_competitive > .competitive_list > li:nth-child(2) > article > strong { color: #5a6670; }
.sec_competitive > .competitive_list > li:nth-child(3) > article { background-color: rgba(21,80,244,0.11); }
.sec_competitive > .competitive_list > li:nth-child(3) > article > strong { color: #1550f4; }
.sec_competitive > .competitive_list > li:nth-child(4) > article { background-color: rgba(16,158,105,0.12); }
.sec_competitive > .competitive_list > li:nth-child(4) > article > strong { color: #099762; }
.quick_menu { position: fixed; bottom: 60px; right: clamp(24px, 4.5313vw, 87px); width: clamp(104px, 6.8229vw, 131px); z-index: 100; display: flex; flex-direction: column; gap: clamp(8px, 0.5208vw, 10px); opacity: 0; pointer-events: none; }
.quick_menu li { position: relative; width: 100%; }
.quick_menu li button { width: 100%; height: clamp(48px, 3.125vw, 60px); padding: clamp(12px, 0.9375vw, 18px) 0; color: #161616; font-size: clamp(1.3rem, 0.8333vw, 1.6rem); font-weight: 700; letter-spacing: -0.01em; background: none; background-color: #f2f2f4; border: 0; border-radius: 99px; text-align: center; display: flex; align-items: center; justify-content: center; gap: clamp(8px, 0.5208vw, 10px); }
.quick_menu li button::before { content: ''; width: clamp(16px, 1.0417vw, 20px); height: clamp(19px, 1.25vw, 24px); background-color: #161616; display: block; }
@media (max-width: 1024px) {
    .sec_success_point :deep(.num_info_list) { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 40px 20px; }
    .sec_brand_solution > .inner > .link_card_list { flex-direction: column; }
    .sec_competitive > .competitive_list { flex-wrap: wrap; gap: 20px 0; }
    .sec_competitive > .competitive_list > li + li { margin-left: -30px; }
}
@media (max-width: 768px) {
    :deep(.m_br) { display: block; }
    :deep(.p_br) { display: none; }
    section + section { padding-top: 80px; }
    .page_header { display: none; }
    .sec_body { padding: 24px 0 40px; }
    .tab_page { padding: 60px 20px 80px; }
    .section_title { margin-bottom: 32px; }
    .section_title > .tit { margin-bottom: 12px; padding: 4px 12px; }
    .section_title > h2 { font-size: 2.8rem; line-height: 1.35; letter-spacing: -0.01em; }
    .section_title > p { margin-top: 12px; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .sec_brand_intro { max-height: none; min-height: 640px; padding: 50px 20px; border-radius: 20px; gap: 0; }
    .sec_brand_intro > header { text-align: center; } 
    .sec_brand_intro > header > .tit { margin: 0 auto; padding: 8px 16px; font-size: 1.2rem; font-weight: 500; line-height: 1.4; letter-spacing: -0.01em; }
    .sec_brand_intro > header > h3 { margin: 8px 0 0; font-size: 3rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
    .sec_brand_intro > header > .desc { margin-top: 4px; font-size: 1.6rem; font-weight: 700; line-height: 1.24; letter-spacing: 0; }
    .sec_brand_intro > .apply_list { width: 100%; max-width: none; margin-top: 50px; gap: 10px; }
    .sec_brand_intro > .apply_list > li > a { position: relative; min-height: 62px; padding: 12px 16px; padding-right: 40px; flex-direction: column; align-items: flex-start; justify-content: center; gap: 4px; }
    .sec_brand_intro > .apply_list > li:last-child > a { min-height: 76px; align-items: flex-start; }
    .sec_brand_intro > .apply_list > li > a > strong { flex: none; width: 100%; font-size: 1.6rem; font-weight: 700; line-height: 1.24; letter-spacing: 0; }
    .sec_brand_intro > .apply_list > li:last-child > a > strong { flex-basis: auto; font-size: 1.6rem; line-height: 1.24; }
    .sec_brand_intro > .apply_list > li > a > span { width: 100%; font-size: 1.2rem; font-weight: 400; line-height: 1.2; letter-spacing: 0; }
    .sec_brand_intro > .apply_list > li > a::after { position: absolute; top: 50%; right: 16px; transform: translateY(-50%); }
    .sec_brand_intro > .stat_list { width: 100%; max-width: none; margin-top: 24px; flex-direction: row; gap: 10px; }
    .sec_brand_intro > .stat_list > li { flex: 1; min-width: 0; min-height: 103px; padding: 16px 10px; gap: 3px; }
    .sec_brand_intro > .stat_list > li > strong { font-size: 1.6rem; font-weight: 700; line-height: 1.24; letter-spacing: 0; }
    .sec_brand_intro > .stat_list > li > span { font-size: 1.2rem; font-weight: 400; line-height: 1.2; letter-spacing: 0; }

    .sec_success_point .section_title > h2 + p { color: #67676f; font-size: 1.8rem; line-height: 1.4; letter-spacing: 0; }
    .sec_success_point :deep(.num_info_list) { grid-template-columns: 1fr; gap: 40px; }
    .sec_success_point :deep(.num_info_item > article) { flex-direction: row; align-items: flex-start; gap: 16px; }
    .sec_success_point :deep(.num_info_icon) { width: 60px; height: 60px; }
    .sec_success_point :deep(.num_info_content) { flex: 1; min-width: 0; }
    .sec_success_point :deep(.num_info_num) { margin-bottom: 6px; font-size: 1.6rem; line-height: 1.24; letter-spacing: 0; }
    .sec_success_point :deep(.num_info_title) { margin-bottom: 6px; }
    .sec_success_point :deep(.num_info_title > strong) { font-size: 2rem; line-height: 1.35; }
    .sec_success_point :deep(.num_info_body > p) { font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .sec_brand_solution > .inner { padding: 40px 20px; }
    .sec_brand_solution > .inner > .link_card_list { margin-top: 32px; gap: 10px; }
    .sec_brand_solution > .inner > .link_card_list > li > a { min-height: 0; padding: 16px; gap: 16px; }
    .sec_brand_solution > .inner > .link_card_list > li > a > .thumb { width: 64px; height: 64px; }
    .sec_brand_solution > .inner > .link_card_list > li > a > .txt > strong { font-size: 1.8rem; line-height: 1.5; letter-spacing: 0; }
    .sec_brand_solution > .inner > .link_card_list > li > a > .txt > .desc { font-size: 1.4rem; line-height: 1.4; }
    .sec_competitive > .competitive_list { justify-content: center; }
    .sec_competitive > .competitive_list > li > article { width: 160px; height: 160px; gap: 12px; }
    .sec_competitive > .competitive_list > li > article > .icon { width: 32px; height: 32px; }
    .sec_competitive > .competitive_list > li > article > strong { font-size: 1.6rem; line-height: 1.35; letter-spacing: -0.01em; }
    .quick_menu { display: none; }
}
</style>
