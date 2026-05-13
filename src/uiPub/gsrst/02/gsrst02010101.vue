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
                        <p class="desc">{{ brandIntro.desc }}</p>
                    </header>
                    <ul class="apply_list">
                        <li v-for="(item, i) in brandApplyLinks" :key="i">
                            <a :href="item.url">
                                <strong>
                                    <template v-if="item.titleLine2">
                                        {{ item.titleLine1 }}<br />{{ item.titleLine2 }}
                                    </template>
                                    <template v-else>{{ item.title }}</template>
                                </strong>
                                <span>{{ item.desc }}</span>
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
                    <header class="panel_title">
                        <p class="tit">{{ successPointPanel.badge }}</p>
                        <h2 v-html="successPointPanel.title"></h2>
                        <p>{{ successPointPanel.desc }}</p>
                    </header>
                    <FeatureCards type="icon" :items="successPointCards" />
                </section>
                <section class="sec_brand_solution">
                    <div class="inner">
                        <header class="panel_title">
                            <h2>{{ brandSolutionPanel.title }}</h2>
                            <p>{{ brandSolutionPanel.desc }}</p>
                        </header>
                        <ul class="link_card_list">
                            <li v-for="(item, i) in brandSolutionCards" :key="i">
                                <a :href="item.url">
                                    <span class="thumb" aria-hidden="true"></span>
                                    <span class="txt">
                                        <strong>{{ item.title }}</strong>
                                        <p>{{ item.desc }}</p>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>

            <!-- 차별화된 경쟁력 -->
            <div class="tab_page sec_procedure" v-show="activeD1 === 0 && activeD2 === 1"></div>

            <!--편의점 창업 이해 -->
            <div class="tab_page" v-show="activeD1 === 0 && activeD2 === 2"></div>

            <!-- FAQ -->
            <div class="tab_page" v-show="activeD1 === 0 && activeD2 ===3"></div>

            
            <!-- 창업 준비하기 -->
            <div class="tab_page" v-show="activeD1 === 1"></div>

            <!-- 추천 점포 찾기 -->
            <section class="sec_store tab_page" v-show="activeD1 === 2"></section>

            <!-- 상담 및 신청 -->
            <section class="sec_consult tab_page" v-show="activeD1 === 3"></section>

            <!-- 가맹계약시스템 -->
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
import FeatureCards from "@/components/FeatureCards.vue";
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
    { item: "가맹 조건 안내" },
    { item: "가맹/창업 절차" },
    { item: "창업 전 필수 확인사항" },
];

const brandIntro = {
    badge: "4년 연속, 편의점 매출 1위 브랜드 (22년~25년)",
    title: "비교할수록 결국, GS25.",
    desc: "점포당 매출 1위 브랜드\n함께 성장하기 위해, 점포의 숫자보다 경영주님의 수익을 먼저 생각합니다.",
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
        titleLine1: "입점 제안/",
        titleLine2: "브랜드 전환 문의",
        desc: "보유 자리 입점 제안 또는 브랜드 전환을 상담해드려요",
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
    title: "저도 창업 가능한가요? 그럼요!",
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
/* 브랜드 색 */
.wrap_gsrst { --color-brand-primary: #15b874; position: relative; overflow-x: clip; }

.wrap_gsrst :deep([class*="btn_"][class*="fill"][class*="primary"]) { color: #fff; background-color: var(--color-brand-primary); }
:deep(.txt_warning ){ color: #ED3030 !important; }
:deep(.txt_blue){color:#107AF2 }
:deep(.m_br) { display: none; }z
:deep(.p_br) { display: block; }

/* 공통 */
.page_header { width: 100%; height: 480px; background-size: cover; background-position: center; position: relative; display: flex; align-items: center; justify-content: center; }
.page_header::before { width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); content: ''; position: absolute; top: 0; left: 0; }
.header_inner { position: relative; z-index: 1; text-align: center; }
.header_title { color: #fff; font-size: 7.2rem; font-weight: 700; letter-spacing: -0.02em; line-height: 1.24; }
.sec_body { max-width: 1460px; margin: 0 auto; padding: 0 20px; box-sizing: border-box; }
.panel_title{margin-bottom:64px;}
.panel_title > .tit { width: fit-content; padding: 8px 16px; color: #107af2; font-size: 1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; background-color: #e7f2fe; border: 1px solid #107af2; border-radius: 99px; }
.panel_title > h2 { margin-top: 16px; color: #161616; font-size: 4rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.panel_title > p { margin-top: 16px; color: #161616; font-size: 2.4rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.panel_title > .note { margin-top: 16px; color: #67676f; font-size: 1.8rem; font-weight: 400; line-height: 1.4; letter-spacing: 0; }
section + section { padding-top: 100px;}

/* depth3 탭 */
.tab_d3_wrap { padding-top: 0; }
.tab_type { display: flex; border: 1px solid #c4c4d0; border-radius: 4px; overflow: hidden; }
.tab_type > button { flex: 1; height: 60px; color: #90909a; font-size: 1.8rem; background-color: #fff; border: none; border-right: 1px solid #c4c4d0; cursor: pointer; transition: background-color 0.2s, color 0.2s; }
.tab_type > button:last-child { border-right: none; }
.tab_type > button.active { background-color: var(--color-brand-primary); color: #fff; border: 0; }

/* 탭 페이지 공통 */
.tab_page { padding: 64px 0 200px; }
.tab_content_wrap { padding-top: 40px; }

/* 가맹 조건 안내 */
.sec_brand_intro { max-height: 700px; padding: 97px 100px 77px; background-size: cover; background-position: center; border-radius: 20px; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; gap: 40px; box-sizing: border-box; }
.sec_brand_intro::before { width: 100%; height: 100%; background-color: rgba(0,0,0,0.6); content: ''; position: absolute; top: 0; left: 0; }
.sec_brand_intro > header, .sec_brand_intro > .apply_list, .sec_brand_intro > .stat_list { position: relative; z-index: 1; }
.sec_brand_intro > header > .tit { width: fit-content; margin: 0; padding: 8px 16px; color: #fff; font-size: 1.4rem; font-weight: 500; line-height: 1.4; letter-spacing: -0.01em; background-color: rgba(255,255,255,0.2); border-radius: 99px; }
.sec_brand_intro > header > h3 { margin: 8px 0 0; color: #fff; font-size: 5.6rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.sec_brand_intro > header > .desc { color: #fff; font-size: 1.8rem; font-weight: 700; line-height: 1.5; letter-spacing: 0; white-space: pre-line; }
.sec_brand_intro > .apply_list { width: 100%; max-width: 540px; display: flex; flex-direction: column; gap: 10px; }
.sec_brand_intro > .apply_list > li > a { width: 100%; min-height: 51px; padding: 12px 20px; background-color: rgba(16,122,242,0.8); border-radius: 12px; color: #fff; text-decoration: none; display: flex; align-items: center; justify-content: space-between; gap: 16px; box-sizing: border-box; }
.sec_brand_intro > .apply_list > li:last-child > a { min-height: 64px; align-items: center; }
.sec_brand_intro > .apply_list > li > a > strong { flex: 0 0 114px; font-size: 1.8rem; font-weight: 700; line-height: 1.5; letter-spacing: 0; }
.sec_brand_intro > .apply_list > li:last-child > a > strong { flex-basis: 114px; font-size: 1.6rem; line-height: 1.24; }
.sec_brand_intro > .apply_list > li > a > span { flex: 1; min-width: 0; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.sec_brand_intro > .apply_list > li > a::after { content: ''; width: 16px; height: 16px; flex-shrink: 0; background-color: #fff; }
.sec_brand_intro > .stat_list { width: 100%; max-width: 647px; display: flex; gap: 10px; }
.sec_brand_intro > .stat_list > li { flex: 1; min-width: 0; min-height: 95px; padding: 20px 32px; background-color: rgba(255,255,255,0.22); border-radius: 16px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; text-align: center; }
.sec_brand_intro > .stat_list > li > strong { color: #fff; font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_brand_intro > .stat_list > li > span { color: rgba(255,255,255,0.8); font-size: 1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; }

/* 성공 포인트 */


.sec_success_point :deep(.feature_card_list) {  gap: 40px; }
.sec_success_point :deep(.feature_card_item) { padding: 0; background-color: transparent; border-radius: 0; min-height: 0; }
.sec_success_point :deep(.feature_card_icon) { width: 80px; height: 80px; margin-bottom: 24px; background-color: #F2F2F4; border-radius: 999px; }
.sec_success_point :deep(.feature_card_title) { margin-bottom: 8px; color: #161616; font-size: 2.8rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_success_point :deep(.feature_card_desc) { color: #67676f; font-size: 2rem; font-weight: 400; line-height: 1.35; letter-spacing: -0.01em; }

/* 브랜드 솔루션 */

.sec_brand_solution > .inner {  margin-inline: calc(50% - 50vw); padding: 80px calc(50vw - 50%); background-color: #f8f8f8; box-sizing: border-box; }
.sec_brand_solution > .inner > .panel_title { text-align: center; }
.sec_brand_solution > .inner > .link_card_list { display: flex; gap: 20px; }
.sec_brand_solution > .inner > .link_card_list > li { flex: 1; min-width: 0; }
.sec_brand_solution > .inner > .link_card_list > li > a { min-height: 144px; padding: 32px 24px; background-color: #fff; border-radius: 12px; text-decoration: none; display: flex; align-items: center; gap: 20px; box-sizing: border-box; }
.sec_brand_solution > .inner > .link_card_list > li > a > .thumb { width: 80px; height: 80px; flex-shrink: 0; background-color: #f8f8f8; border-radius: 12px; }
.sec_brand_solution > .inner > .link_card_list > li > a > .txt { flex: 1; min-width: 0; }
.sec_brand_solution > .inner > .link_card_list > li > a > .txt > strong { color: #161616; font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; display: block; }
.sec_brand_solution > .inner > .link_card_list > li > a > .txt > p { margin-top: 6px; color: #67676f; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.sec_brand_solution > .inner > .link_card_list > li > a::after { content: ''; width: 24px; height: 24px; flex-shrink: 0; background-color: #161616 }

/* type_info_bar */
.type_info_bar { padding: 17px 24px; background-color: #e8f8f1; border: 1px solid #d2ede2; border-radius: 6px; color: #11935d; font-size: 1.8rem; line-height: 1.4; }

/* type_table */
.type_table_wrap { margin-top: 20px; overflow-x: auto; border-top: 1px solid #161616; }
.type_table { width: 100%; border-collapse: collapse; }
.type_table .col_item_main { width: 177px; }
.type_table .col_item_sub { width: 177px; }
.type_table .col_cost { width: auto; }
.type_table thead th { padding: 28px 24px; background-color: #f8f8f8; border: 1px solid #e5e5e9; font-size: 1.8rem; text-align: center; line-height: 1.4; }
.type_table tbody th { padding: 12px 24px; background-color: #f8f8f8; border: 1px solid #e5e5e9; font-size: 1.8rem; font-weight: 400; text-align: left; line-height: 1.4; }
.type_table tbody td { border-bottom: 1px solid #e5e5e9; font-size: 1.8rem; text-align: center; padding: 12px 24px; line-height: 1.4; }
.type_table_wrap.type2 .type_table thead th { padding: 18px 20px; line-height: 1.5; border: 0; }
.type_table_wrap.type2 .type_table colgroup col { width: 12.5%; }
.type_table_wrap.type2 .type_table tbody td { height: 82px; padding: 0 13px; }
.td_tag { font-size: 1.6rem; word-break: break-all; }

/* list_caution */
.list_caution { margin-top: 32px; }
.list_caution > li + li { margin-top: 8px; }
.list_caution > li > p { color: #67676F; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }

/* type_graph */
.type_graph_wrap { margin-top: 60px; padding: 64px; background-color: #f8f8f8; border-radius: 12px; }
.type_graph_wrap > strong { display: block; font-size: 3.2rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.type_graph_inner { margin-top: 40px; padding-right: 56px; display: flex; flex-direction: column; align-items: flex-end; gap: 28px; }
.type_graph_item { display: flex; gap: 54px; align-items: center; justify-content: flex-end; }
.type_graph_item:nth-child(2) { justify-self: flex-start; }
.type_graph_item > p { font-size: 2rem; line-height: 1.35; letter-spacing: -0.01em; text-align: right; }
.type_graph_item > picture { flex: 1; display: block; }
.type_graph_item img { display: block; max-width: 100%; }

/* 가맹/창업 절차 */
.link_wrap { margin-top: 40px; display: flex; justify-content: center; }
.link_wrap > a { margin: 0 auto; padding: 18px 32px; color: #fff; font-weight: 700; font-size: 1.8rem; line-height: 1.5; text-align: center; background-color: var(--color-brand-primary); border-radius: 10px; display: inline-block; }
.link_wrap > a.btn_xl { height: 64px; padding: 0 32px; display: inline-flex; align-items: center; justify-content: center; }

/* 창업 전 필수 확인사항 */
.precaution_title, .precaution_intro > h3 { color: #161616; font-size: 3.2rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.mo_only { display: none; }
.sec_precaution_inner { padding: 64px; background-color: #f8f8f8; border-radius: 12px; display: flex; align-items: flex-start; }
.precaution_intro { flex: 0 1 clamp(200px, 28%, 296px); min-width: 0; max-width: 296px; }
.precaution_intro > h3 { margin-bottom: 16px; }
.precaution_intro > p { color: #67676f; font-size: 1.8rem; line-height: 1.6; letter-spacing: -0.01em; }
.precaution_main { flex: 1; min-width: 0; }
.precaution_block + .precaution_block { margin-top: 56px; }
.precaution_block > h4 { margin-bottom: 40px; color: #161616; font-size: 2.8rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_precaution :deep(.feature_card_item) { background-color: #fff; min-height: 0; }
.precaution_block_sm :deep(.feature_card_item) { min-height: 180px; }
.sec_precaution :deep(.feature_card_num) { color: #15b874; }
.sec_precaution :deep(.feature_card_title) { font-size: 2.4rem; }

/* 사업설명회 */
.seminar_head > h3 { color: #161616; font-size: 4rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.seminar_head > p { color: #161616; font-size: 2.4rem; line-height: 1.5; letter-spacing: -0.01em; }
.seminar_head :deep(.btn_big) { margin-top: 16px; }
.seminar_list { margin-top: 60px; display: flex; flex-direction: column; gap: 60px; }
.seminar_item_body { display: flex; gap: 16px; min-height: 400px; }
.seminar_map { flex: 1; background-color: #d7d7df; border-radius: 16px; min-width: 0; }
.seminar_info { flex: 1; min-width: 0; display: flex; flex-direction: column; overflow: hidden; border-radius: 12px; }
.seminar_table { width: 100%; height: 100%; border: 0; }
.seminar_table col.seminar_col_label { width: clamp(96px, 29%, 200px); }
.seminar_table col.seminar_col_value { width: 71%; }
.seminar_table thead th { padding: 47px 24px; background-color: #f8f8f8; border: 0; font-size: 1.8rem; font-weight: 600; text-align: left; line-height: 1.4; letter-spacing: -0.02em; }
.seminar_table tbody td { padding: 13px 24px; border-bottom: 1px solid #e5e5e9; font-size: 1.8rem; line-height: 1.6; letter-spacing: -0.01em; min-width: 0; text-align: left; }

/* Tablet */
@media (max-width: 1024px) {
    .page_header { height: 360px; }
    .header_title { font-size: 5.2rem; }
    .tab_type > button { font-size: 1.6rem; }
    .type_info_bar { font-size: 1.6rem; }
    .type_table thead th, .type_table tbody th, .type_table tbody td { font-size: 1.6rem; }
    .type_graph_wrap { padding: 48px; }
    .type_graph_wrap > strong { font-size: 2.8rem; }
    .type_graph_item { gap: 32px; }
    .type_graph_item > p { font-size: 1.8rem; }
    .precaution_intro > h3 { font-size: 2.6rem; }
    .sec_precaution_inner { flex-direction: column; padding: 48px; gap: 32px; }
    .precaution_intro { width: 100%; }
    .precaution_intro > p { font-size: 1.6rem; }
    .precaution_block > h4 { font-size: 2.4rem; margin-bottom: 24px; }
    .precaution_block + .precaution_block { margin-top: 40px; }
    .seminar_head > h3 { font-size: 3.2rem; }
    .seminar_head > p { font-size: 2rem; }
    .seminar_table thead th, .seminar_table tbody th, .seminar_table tbody td { font-size: 1.6rem; }
    .sec_brand_intro { min-height: 560px; padding: 72px 48px 56px; }
    .sec_brand_intro > header > h3 { font-size: 4.4rem; }
    .sec_brand_intro > header > .desc { font-size: 1.6rem; }
    .sec_success_point :deep(.feature_card_title) { font-size: 2.4rem; }
    .sec_success_point :deep(.feature_card_desc) { font-size: 1.8rem; }
    .sec_brand_solution { padding-top: 64px; padding-bottom: 64px; }
    .sec_brand_solution > .inner > .link_card_list > li > a > .txt > strong { font-size: 2rem; }
}

/* Mobile */
@media (max-width: 768px) {
    :deep(.m_br) { display: block; }
    :deep(.p_br) { display: none; }
    .page_header { display: none; }
    .sec_body { padding: 24px 0 40px; }
    .header_title { font-size: 3.6rem; }
    /* ul::after 20px spacer, tab_wrap::after 32px 그라데이션은 common.css에서 전역 처리 */
    .tab_page { padding: 60px 20px 80px; }
    .sec_owner_support.tab_page { padding-left: 0; padding-right: 0; }
    .tab_content_wrap { padding-top: 40px; }
    .tab_type > button { height: 48px; font-size: 1.4rem; }
    .type_info_bar { height: auto; min-height: 48px; padding: 20px 24px; font-size: 1.4rem; }
    .list_caution { margin-top: 16px; }
    .type_table_wrap { margin-top: 24px; }
    .type_table .col_item_main { width: 42px; }
    .type_table .col_item_sub { width: 120px; }
    .type_table thead th { padding: 18px 0; font-size: 1.6rem; line-height: 1.24; }
    .type_table tbody th, .type_table tbody td { padding: 15px 24px; font-size: 1.6rem; line-height: 1.5; }
    .type_table tbody th:first-child { padding-left: 14px; padding-right: 14px; }
    .type_graph_wrap { margin-top: 80px; padding: 40px 20px; }
    .type_graph_wrap > strong { font-size: 2rem; line-height: 1.32; letter-spacing: -0.01em; }
    .type_graph_inner { margin-top: 30px; padding-right: 0; align-items: flex-start; gap: 20px; }
    .type_graph_item { flex-direction: column; align-items: flex-start; justify-content: flex-start; gap: 16px; }
    .type_graph_item > p { font-size: 1.6rem; text-align: left; }
    .link_wrap > a { width: 100%; padding: 14px 0; font-weight: 400; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .mo_only { display: block; }
    .pc_only { display: none; }
    .precaution_title { font-size: 2.4rem; line-height: 1.35; letter-spacing: -0.01em; }
    .sec_precaution_inner { margin-top: 32px; padding: 30px 20px; gap: 40px; display: block; }
    .precaution_intro { display: none; }
    .precaution_intro > p { font-size: 1.4rem; }
    .precaution_block > h4 { font-size: 2rem; margin-bottom: 24px; }
    .sec_precaution :deep(.feature_card_title) { font-size: 1.8rem; }
    .seminar_info { padding-bottom: 18px; }
    .seminar_head > h3 { font-size: 2.8rem; }
    .seminar_head > p { font-size: 1.8rem; line-height: 1.4; letter-spacing: 0; }
    .seminar_list { gap: 40px; }
    .seminar_item_title { font-size: 2rem; }
    .seminar_item_body { flex-direction: column; height: auto; gap: 16px; }
    .seminar_map { flex: none; height: clamp(183.36px, 50.933vw, 260px); border-radius: 12px; }
    .seminar_table thead th { padding: 21px 24px; font-size: 1.8rem; line-height: 1.5; letter-spacing: 0; font-weight: 700; }
    .seminar_table tbody td { padding: 16px 24px; font-size: 1.6rem; line-height: 1.5; }
    .seminar_table col.seminar_col_label { width: clamp(60.75px, 27%, 118.125px); }
    .seminar_table col.seminar_col_value { width: 73%; }
    .sec_brand_intro { min-height: auto; padding: 40px 20px; border-radius: 12px; gap: 32px; }
    .sec_brand_intro > header > h3 { font-size: 3.2rem; line-height: 1.32; }
    .sec_brand_intro > header > .desc { font-size: 1.6rem; line-height: 1.5; }
    .sec_brand_intro > .apply_list { max-width: none; }
    .sec_brand_intro > .apply_list > li > a { flex-direction: column; align-items: flex-start; gap: 4px; padding: 16px 20px; }
    .sec_brand_intro > .apply_list > li > a > strong { flex: none; width: 100%; }
    .sec_brand_intro > .apply_list > li > a > span { width: 100%; }
    .sec_brand_intro > .apply_list > li > a::after { position: absolute; top: 16px; right: 20px; }
    .sec_brand_intro > .apply_list > li > a { position: relative; padding-right: 44px; }
    .sec_brand_intro > .stat_list { max-width: none; flex-direction: column; }
    .sec_brand_intro > .stat_list > li { min-height: 88px; }
    .sec_success_point { margin-top: 40px; }
    .sec_success_point :deep(.feature_card_list) { margin-top: 24px; }
    .sec_success_point :deep(.feature_card_icon) { width: 64px; height: 64px; }
    .sec_success_point :deep(.feature_card_title) { font-size: 2rem; line-height: 1.35; }
    .sec_success_point :deep(.feature_card_desc) { font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .sec_brand_solution { margin-top: 40px; padding-top: 40px; padding-bottom: 40px; }
    .sec_brand_solution > .inner > .link_card_list { margin-top: 32px; flex-direction: column; }
    .sec_brand_solution > .inner > .link_card_list > li > a { min-height: 0; padding: 24px 20px; }
    .sec_brand_solution > .inner > .link_card_list > li > a > .thumb { width: 64px; height: 64px; }
    .sec_brand_solution > .inner > .link_card_list > li > a > .txt > strong { font-size: 1.8rem; line-height: 1.5; }
    .sec_brand_solution > .inner > .link_card_list > li > a > .txt > p { font-size: 1.4rem; line-height: 1.4; }
}

/* 추천 점포 찾기 */
.sec_store { padding-top: 40px; }
.tab_intro { margin-bottom:64px; font-size: 2.4rem; color: #161616; line-height: 1.5; letter-spacing: -0.01em; }
.tab_intro span{ color:#11935D;}
.store_search { background-color: #f8f8f8; border-radius: 12px; padding: 48px 42px; display: flex; flex-direction: column; gap: 0; }
.search_group { display: flex; flex-direction: column; gap: 12px; }
.search_group_label { font-size: 1.6rem; font-weight: 700; color: #161616; line-height: 1.24; }
.chip_list { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.chip { min-width: 78px; height: 40px; padding: 0 18px; border: 1px solid #161616; border-radius: 99px; background-color: transparent; color: #161616; font-size: 1.6rem; font-weight: 400; letter-spacing: -0.01em; cursor: pointer; white-space: nowrap; transition: background-color 0.15s, border-color 0.15s, color 0.15s; }
.chip.active { background-color: #e7f2fe; border-color: #107af2; color: #107af2; }
.search_bottom_row { margin-top: 24px; padding-top: 24px; border-top: 1px solid #D7D7DF; display: flex; align-items: flex-start; gap: 32px; flex-wrap: wrap; }
.chip_sep_v { display: inline-block; width: 1px; height: 24px; background-color: #c4c4d0; flex-shrink: 0; align-self: center; }
.chip_youth_wrap { position: relative; display: inline-flex; align-items: center; }
.youth_info_btn { width: 18px; height: 18px; border: 1.4px solid #242428; border-radius: 50%; background-color: #fff; font-size: 1.3rem; font-weight: 500; color: #000; cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0; position: absolute; top: -11px; right: -12px; line-height: 1; }
.youth_popover { position: absolute; top: calc(100% + 8px); left: -119px; right: -166px; background-color: #fff; border: 1px solid #C6C6C6; border-radius: 16px; padding: 32px; z-index: 10; }
.youth_popover > strong { font-weight: 700; font-size: 1.6rem; line-height: 1.24; }
.youth_popover > p { margin-top: 24px; font-size: 1.6rem; color: #161616; line-height: 1.5; letter-spacing: -0.01em; }
.youth_popover > a { margin-top: 16px; color: #107AF2; font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; text-decoration: underline; display: block; }
.youth_popover_close { width: 20px; height: 20px; background: none; border: none; cursor: pointer; position: absolute; top: 32px; right: 32px; background-color: red; }
.search_group_input { flex: 1; min-width: 280px; }
.store_search_input_wrap { position: relative; }
.store_search_input { width: 100%; height: 40px; padding: 0 16px; border: 1px solid #c4c4d0; border-radius: 12px; background-color: #fff; font-size: 1.6rem; color: #161616; letter-spacing: -0.01em; box-sizing: border-box; outline: none; }
.store_search_input::placeholder { color: #a4a4b0; }
.store_search_input:focus { border-color: #107AF2; }
.store_search_btn { width: 20px; height: 20px; background: none; border: none; cursor: pointer; position: absolute; top: 50%; right: 12px; transform: translateY(-50%); display: flex; align-items: center; justify-content: center; padding: 0; }

/* 점포 리스트 */
.store_list_wrap { margin-top: 32px; }
.store_list_bar { display: flex; align-items: center; justify-content: space-between; height: 40px; }
.store_count { font-size: 1.6rem; color: #67676f; letter-spacing: -0.01em; }
.store_count > strong { font-weight: 700; }
.store_bar_right { display: flex; align-items: center; gap: 8px; }

/* 정렬 버튼 */
.store_sort_group { display: flex; align-items: center; }
.sort_btn { height: 40px; padding: 0 12px; background: #fff; border: 1px solid #90909a; font-size: 1.4rem; font-weight: 700; color: #90909a; cursor: pointer; white-space: nowrap; position: relative; z-index: 0; margin-left: -1px; }
.sort_btn:first-child { margin-left: 0; border-radius: 8px 0 0 8px; }
.sort_btn:last-child { border-radius: 0 8px 8px 0; }
.sort_btn.active { color: #107af2; border-color: #107af2; z-index: 1; }

/* 뷰 토글 버튼 */
.store_view_group { display: flex; gap: 8px; }
.view_btn { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: #fff; border: 1px solid #90909a; border-radius: 8px; color: #107af2; cursor: pointer; }
.view_btn::before { content: ""; width: 20px; height: 20px; background: red; display: inline-block; }
.view_btn.active { border-color: #107af2; color: #107af2; }

/* 타입 뱃지 */
.type_badge { display: inline-block; padding: 3px 6px; border-radius: 4px; font-size: 1.4rem; }
.type_badge + .type_badge { margin-left: 4px; }
.badge_gs1 { background: #e8f8f1; color: #15b874; }
.badge_gs2 { background: #f9f2ea; color: #fb6432; }
.badge_gs3 { background: #faeeee; color: #ed3030; }
.type_badge.badge_gray { background: #f2f2f4; color: #67676f; }

/* 상세 토글 버튼 */
.detail_toggle_btn { display: inline-flex; align-items: center; gap: 4px; background: none; border: none; font-size: 2rem; color: #161616; cursor: pointer; letter-spacing: -0.01em; }
.detail_toggle_btn::after { content: ''; width: 20px; height: 20px; background: red; display: inline-block; transform: rotate(0deg); transform-origin: center; transition: transform 0.2s ease; }
.type_table_wrap.type2 .type_table tbody tr.is_open .detail_toggle_btn::after { transform: rotate(180deg); }

/* 상세 패널 */
.detail_panel_td { padding: 0 !important; height: auto !important; border: none !important; }
.detail_panel { padding: 40px; background: #f8f8f8; border-bottom: 1px solid #D7D7DF; }
.detail_panel :deep(.detail_card) { border: 0; }

/* 모바일 아코디언 */
.store_accordion_list { display: none; }
.store_accordion_list :deep(.board_type_toggle) { border-top: 1px solid #d7d7df; }
.store_accordion_list :deep(dt > a.acc_tit_btn) { min-height: auto; padding: 16px 20px; font-size: inherit; font-weight: inherit; border-bottom: 1px solid #d7d7df; }
.store_accordion_list :deep(dt > a.acc_tit_btn.acc_tit_open) { border: 1px solid #161616; border-bottom: none; }
.store_accordion_list :deep(dt > a.acc_tit_btn::after) { width: 24px; height: 24px; background-color: #161616; transform: rotate(0deg); transform-origin: center; transition: transform 0.2s ease; }
.store_accordion_list :deep(dt > a.acc_tit_btn.acc_tit_open::after) { transform: rotate(180deg); }
.store_accordion_list :deep(dd.acc_panel.acc_show) { border: 1px solid #161616; border-top: none; }
.store_accordion_list :deep(.acc_panel_cont) { padding: 0; }

/* 아코디언 헤드 */
.accordion_head_info { flex: 1; min-width: 0; }
.accordion_region { font-size: 2rem; font-weight: 700; color: #161616; letter-spacing: -0.01em; line-height: 1.35; }
.accordion_badges { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 8px; }

/* 카드 그리드 뷰 */
.store_card_grid_wrap { margin-top: 16px; display: flex; flex-direction: column; gap: 20px; }
.store_card_row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; align-items: stretch; }
.store_card_row > li { display: flex; flex-direction: column; }

/* 페이지네이션 */
.store_pagination { display: flex; justify-content: center; margin-top: 24px; }

/* 점포 리스트 Tablet */
@media (max-width: 1024px) {
    .store_card_row { grid-template-columns: repeat(3, 1fr); }
}

/* 점포 리스트 Mobile */
@media (max-width: 768px) {
    .store_list_wrap { margin-top: 60px; }
    .tab_intro { margin-bottom:60px; font-size: 1.8rem; line-height: 1.4;}
    .store_count { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .store_count > strong { font-weight: 400; }
    .store_search { padding: 30px 20px; }
    .search_bottom_row { margin-top: 24px; padding-top: 24px; border-top: 1px solid #D7D7DF; flex-direction: column; gap: 50px; }
    .search_group_input { width: 100%; }
    .store_search_input { height: 52px; }
    .youth_popover { left: -20px; right: auto; top: calc(100% + 8px); transform: none; width: calc(100vw - 40px); max-width: 335px; }
    .chip_list { position: relative; }
    .chip_youth_wrap { position: static; }
    .store_list_bar { margin-bottom: 16px; align-items: flex-end; gap: 12px; height: auto; }
    .store_bar_right { justify-content: flex-end; }
    .sort_btn { height: 32px; font-size: 1.3rem; padding: 0 10px; }
    .view_btn { width: 32px; height: 32px; }
    .type_table_wrap.type2 { display: none; }
    .store_accordion_list { margin: 0 -20px; display: block; }
    .store_card_grid_wrap { gap: 8px; }
    .store_card_row { grid-template-columns: 1fr; }
    .detail_panel { padding: 16px; }
    .store_card_detail_row { margin-top: 0; }
    .store_accordion_list :deep(dt > a.acc_tit_btn.acc_tit_open), .store_accordion_list :deep(dt > a.acc_tit_btn.acc_tit_btn) { border: 0; }
    .store_accordion_list :deep(.board_type_toggle) { border-top: 1px solid #161616; }
    .store_accordion_list :deep(.detail_card) { padding: 20px; border-radius: 12px; border: 0; }
    .store_accordion_list :deep(dd.acc_panel > .acc_panel_inner > .acc_panel_cont) { padding: 30px 20px !important; background-color: #F8F8F8 !important; }
    .store_accordion_list :deep(dd.acc_panel.acc_show) { border: 0; }
    .accordion_badges { margin-top: 6px; }
}

/* 상담 및 신청 */
.caution_list { margin-top: 16px; }
.caution_list li p { color: #67676F; font-size: 1.8rem; line-height: 1.4; letter-spacing: -0.01em; }
.consult_card_list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.consult_card { padding: 32px 24px; background: #F8F8F8; border-radius: 12px; display: flex; gap: 32px; min-width: 0; overflow: hidden; }
.consult_thumb { flex: 1 0 0; min-height: 120px; background-color: #D7D7DF;}
.consult_thumb > img { width: 100%; height: 100%; object-fit: cover; display: block; }
.consult_body { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; }
.consult_body p  { font-family: Pretendard;font-size: 1.8rem;line-height: 1.4;word-break: keep-all; }
.consult_body p.region{margin-top:2px;}
.consult_note { margin-top:2px;color:#67676F;}
.consult_tel_btn { margin-top: 32px; padding: 4px; background: none; border: 0; font-size: 1.6rem; font-weight: 500; color: #15B874; letter-spacing: -0.01em; line-height: 1.5; cursor: pointer; display: inline-flex; align-items: center; gap: 12px; white-space: nowrap; }
.consult_tel_btn::after { content: ""; width: 16px; height: 16px; background-color: #15B874; border-radius: 50%; flex-shrink: 0; display: inline-block; }
.consult_tel { margin-top: 4px; font-size: 1.4rem; font-weight: 500; color: #161616; letter-spacing: -0.01em; }
.consult_foot { margin-top: 18px;  }
.consult_foot button{max-width:123px;}
/* .consult_foot :deep([class*="btn_"]) { width: 100%; max-width: 113px;;} */
.info_banner { margin-top: 64px; padding: 34px 24px; background-color: #F9F2EA; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap:wrap;}
.info_banner > p { display: flex; align-items: flex-start; gap: 12px; font-size: 1.8rem; line-height: 1.4; }
.info_banner > p::before { content: ''; width: 27px; height: 27px; flex-shrink: 0; background-color: #FFB724;  display: block; }
@media (max-width: 1200px) {
    .consult_card_list { grid-template-columns: repeat(2, 1fr); }

}
@media (max-width: 768px) {
    .info_banner{margin-top:32px;padding:20px; gap:12px;}
    .info_banner button{margin-left:32px;}
    .info_banner > p{font-size: 1.4rem;line-height: 1.4;letter-spacing: -0.01em;}
    .info_banner > p::before{width:24px; height:24px;}
    .caution_list li p{font-size: 1.4rem;}
    .consult_card{padding:30px 20px;gap:20px;}
    .consult_card_list { grid-template-columns: 1fr; gap: 20px; }
    .consult_thumb { flex: 0 0 135px; max-height: 180px; }
    .consult_name { font-size: 1.6rem; }
    .consult_foot button{max-width :100%;}
}

/* 경영주 지원제도 — 가로 패딩 없음(Swiper), 텍스트·패널만 20px */
.sec_owner_support.tab_page { padding-left: 0; padding-right: 0; }
.sec_owner_support .tab_intro { margin-bottom: 24px; padding-left: 20px; padding-right: 20px; box-sizing: border-box; }
.sec_owner_support :deep(.brand_panel_title) { padding: 0 20px 64px; box-sizing: border-box; }

.sec_owner_support :deep(.feature_card_item) { min-height: 480px; background-repeat: no-repeat; background-position: left 32px bottom 32px; background-size: auto; }
.sec_owner_support :deep(.feature_card_item > .feature_card_num) { color:#11935D;}
.sec_owner_support :deep(.feature_card_list > .feature_card_item:nth-child(1)),
.sec_owner_support :deep(.feature_card_swiper .swiper-slide:nth-child(1) .feature_card_item) { background-image: url("@/assets/images/dummy/gsrst_info_01.png"); }
.sec_owner_support :deep(.feature_card_list > .feature_card_item:nth-child(2)),
.sec_owner_support :deep(.feature_card_swiper .swiper-slide:nth-child(2) .feature_card_item) { background-image: url("@/assets/images/dummy/gsrst_info_02.png"); }
.sec_owner_support :deep(.feature_card_list > .feature_card_item:nth-child(3)),
.sec_owner_support :deep(.feature_card_swiper .swiper-slide:nth-child(3) .feature_card_item) { background-image: url("@/assets/images/dummy/gsrst_info_03.png"); }
.sec_owner_support :deep(.feature_card_list > .feature_card_item:nth-child(4)),
.sec_owner_support :deep(.feature_card_swiper .swiper-slide:nth-child(4) .feature_card_item) { background-image: url("@/assets/images/dummy/gsrst_info_04.png"); }
.label_wrap{display:flex; flex-direction:column; gap:2px; }
.consult_tel_btn{margin-top:20px;}
@media (max-width: 768px) {
    /* 가로 스크롤 방지: 네거티브 마진·Swiper overflow·슬라이드·카드 너비 불일치 대응 */
    .sec_owner_support { overflow-x: hidden; }
    /* sec_body/tab_page에 좌우 20px 없음 → 히어로는 네거티브 마진 불필요 */
    .sec_owner_support :deep(.brand_panel_bg) { margin: 0 0 80px; }
    .sec_owner_support :deep(.brand_panel_title) { padding: 0 20px 32px; }
    .sec_owner_support :deep(.feature_card_swiper) { padding: 0 20px;overflow: hidden; }
    .sec_owner_support :deep(.feature_card_swiper .swiper-slide) { width: 85.333vw; box-sizing: border-box; }
    .sec_owner_support :deep(.feature_card_swiper .feature_card_item) { width: 100%; min-width: 0; min-height: 420px !important; box-sizing: border-box; }
    .sec_owner_support :deep(.feature_card_swiper .swiper-slide:not(:last-child)) { margin-right: 20px; }
    .label_wrap{display:flex; flex-direction:row; align-items: center; gap:0;}
    .label_wrap .consult_label + .consult_label{font-weight:700; gap:0;}
    .consult_body p{font-size: 1.6rem;}
    .consult_body p.consult_label.region{margin-top:6px;font-size: 1.4rem;line-height: 1.4;letter-spacing: -0.01em;}
    .consult_body p.consult_note{margin-top:2px;color:#67676F;font-size: 1.4rem;line-height: 1.4;letter-spacing: -0.01em;}
    .consult_foot :deep([class*="btn_"]) {height:38px;}
    .sec_consult :deep(.brand_panel_title){padding-bottom:32px !important;} 
}

/* 상담 및신청 */
.sec_consult :deep(.brand_panel_title) {padding-bottom:64px;}
.sec_consult :deep(.brand_panel_title h2){display:flex; align-items:center; gap:8px;}
.sec_consult :deep(.brand_panel_title h2::after){content:''; display:block; width:40px; height:40px; background-color:#D7D7DF; }

/* quick menu */
.quick_menu{position:fixed; bottom:60px; right:clamp(24px, 4.5313vw, 87px); width:clamp(104px, 6.8229vw, 131px); z-index:100; display:flex; flex-direction:column; gap:clamp(8px, 0.5208vw, 10px); opacity:0; pointer-events:none;}
.quick_menu li{position:relative; width:100%;}
.quick_menu li button{width:100%; height:clamp(48px, 3.125vw, 60px); padding:clamp(12px, 0.9375vw, 18px) 0; color:#161616; font-size:clamp(1.3rem, 0.8333vw, 1.6rem); font-weight:700; letter-spacing:-0.01em; background:none; background-color:#F2F2F4; border:0; border-radius:99px; text-align:center; display:flex; align-items:center; justify-content:center; gap:clamp(8px, 0.5208vw, 10px);}
.quick_menu li button::before{content:''; width:clamp(16px, 1.0417vw, 20px); height:clamp(19px, 1.25vw, 24px); background-color:#161616; display:block;}


@media (max-width: 768px) {
    .quick_menu{display: none;}
}
</style>
