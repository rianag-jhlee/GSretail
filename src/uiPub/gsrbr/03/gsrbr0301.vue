<template>
    <div class="brand">
        <section ref="sectionRef" class="sec_brand_visual">
            <div class="sticky">
                <div ref="bgWrapRef" class="bg_wrap">
                    <div class="bg"></div>
                    <div class="visual_inner">
                        <div class="txt_area">
                            <p ref="textParaRef">
                                <span>고객의 모든 순간을</span>
                                <span>가치 있게 만드는 중심</span>
                            </p>
                            <div ref="logoWrapRef" class="logo_wrap">
                                <img :src="imgLogo" alt="GS SHOP" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="brand_kv"></section>
        <section ref="aboutSectionRef" class="sec_brand_about">
            <div class="about_inner">
                <div class="about_txt">
                    <p><span>GS SHOP은 고객의 라이프스타일을 깊이 이해하고, 소비의 기준을 만듭니다.</span></p>
                    <p><span>데이터 분석과 AI 기술을 통한 인사이트를 바탕으로</span></p>
                    <p><span>TV, 모바일 등 고객이 있는 모든 접점에서 다양하고</span></p>
                    <p><span>차별화된 상품을 제공하고 있습니다.</span></p>
                </div>
                <div class="about_txt">
                    <p><span>앞으로도 GS SHOP은 고객의 일상에 가장 적합한 선택을 제안하며,</span></p>
                    <p><span> 소비의 가치를 높여가겠습니다.</span></p>
                </div>
            </div>
        </section>
        <section class="sec_brand_str">
            <div class="str_inner">
                <header class="str_header">
                    <div>
                        <h2>브랜드 소개</h2>
                        <p>GS SHOP은 TV쇼핑과 모바일/인터넷쇼핑몰 등에 개별적으로 사용되던 브랜드를 <br class="p_br"/>
                            고객의 더 나은 쇼핑을 돕기 위해 하나로 통합한 브랜드입니다.</p>
                    </div>
                    <div class="str_actions">
                        <a
                            href="#"
                            class="btn_store_find"
                        >홈페이지</a>
                        <div class="sns_wrap">
                            <a href="#" class="btn_sns btn_sns_insta" aria-label="인스타그램"></a>
                            <a href="#" class="btn_sns btn_sns_yt" aria-label="유튜브"></a>
                        </div>
                    </div>
                </header>
                <div class="str_bi">
                    <div class="str_bi_sec str_bi_sec_logo" aria-labelledby="str_bi_logo_tit">
                        <div class="str_bi_header">
                            <h3 class="str_bi_tit">BI 로고</h3>
                            <p class="str_bi_desc"> 
                                GS SHOP이 지향하는 핵심가치인 ‘Real(진정성)’ 이 <br class="p_br"/>
                                괄호 안에 담겨있음을 형상화한 것입니다. <br class="m_br"/><br class="m_br"/>GS SHOP은 가치가 있는 상품과 서비스에 진심을 담아,<br class="p_br"/>
                                고객의 가장 좋은 선택을 만듭니다.
                            </p>
                        </div>
                        <div class="str_bi_logo_figs">
                            <figure class="str_bi_fig">
                                <img :src="imgBi01" alt="GS SHOP BI 심볼" />
                            </figure>
                            <figure class="str_bi_fig">
                                <img :src="imgBi02" alt="GS SHOP BI 워드마크" />
                            </figure>
                        </div>
                    </div>

                    <div class="str_bi_sec str_bi_sec_color" aria-labelledby="str-bi-color-tit">
                        <h3 class="str_bi_tit">BI 색상</h3>
                        <div class="str_bi_color_figs">
                            <h4 class="str_bi_caption">CORE COLORS</h4>
                            <ul class="str_color_core" role="list">
                                <li>
                                    <img :src="isBiColorMobile ? imgBi03Mo : imgBi03" alt="Dynamic Blue 핵심 색상" />
                                </li>
                                <li>
                                    <img :src="isBiColorMobile ? imgBi04Mo : imgBi04" alt="Mist Gray 핵심 색상" />
                                </li>
                            </ul>
                            <h4 class="str_bi_caption">SUPPORTING COLORS</h4>
                            <ul class="str_color_sup" role="list">
                                <li>
                                    <img :src="isBiColorMobile ? imgBi05Mo : imgBi05" alt="Bright Pink 보조 색상" />
                                </li>
                                <li>
                                    <img :src="isBiColorMobile ? imgBi06Mo : imgBi06" alt="Sunshine Orange 보조 색상" />
                                </li>
                                <li>
                                    <img :src="isBiColorMobile ? imgBi07Mo : imgBi07" alt="Forest Green 보조 색상" />
                                </li>
                                <li>
                                    <img :src="isBiColorMobile ? imgBi08Mo : imgBi08" alt="Ocean Navy 보조 색상" />
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <section class="sec_brand_competency str_inner">
            <header class="str_header">
                <h2>GS SHOP의 비즈니스 핵심역량</h2>
            </header>
            <div>
                <img :src="isBiCompetencyMobile ? imgBi09Mo : imgBi09"  alt="GS SHOP의 비즈니스 핵심역량" />
            </div>
        </section>
        <section class="sec_brand_biz str_inner" aria-label="GS SHOP 비즈니스 핵심역량">
            <header class="str_header">
                <h2>소비자중심경영(CCM)을 <br class="m _br"/>실천하는 <br class="p_br"/>GS SHOP</h2>
                <p>GS SHOP은 소비자의 목소리를 가장 먼저 듣고, <br class="m_br"/> 나누고, 공감하는 CCM 인증기업입니다.</p>
            </header>
            <div class="str_biz_fig">
                <div class="str_biz_fig_inner">
                    <div class="str_biz_fig_txt">  
                        <strong>CCM(Consumer<br class="m_br"/>Centered Management)<br class="m_br"/>인증이란?</strong>
                        <p>기업이 수행하는 모든 활동을 소비자 관점에서 소비자 중심으로 구성하고 관련 경영활동을 지속적으로 개선하고 있는지를 평가하여 인증하는 제도</p>
                    </div>
                    <div class="str_biz_fig_img">
                        <img :src="imgCert03" alt="소비자중심심" />
                    </div>
                </div>
                <dl>
                    <dt>인증기관</dt>
                    <dd><img :src="imgCert01" alt="공정거래위원회" /></dd>
                    <dt>운영기관</dt>
                    <dd><img :src="imgCert02" alt="한국소비자원" /></dd>
                </dl>
            </div>
            <div class="str_biz_block">
                <h3 class="str_biz_subtit">CCM 도입, 운영 성과</h3>
                <p>
                    GS SHOP은 2009년 12월, 첫 인증을 받은 이후 고객을 먼저 생각하는 다양한 활동을 통해 CCM 재인증을 지속적으로 진행해왔습니다.
                </p>
                <FeatureCards class="str_biz_feature_cards" type="text" :items="ccmFeatureItems" :swiper-space-between="8" />
            </div>
        </section>
        <section class="sec_brand_channel str_inner" aria-label="판매 채널 소개">
            <header class="str_header str_header_channel">
                <h2>판매 채널 소개</h2>
                <p>TV, 온라인, 모바일 등 고객이 있는 접점에서 GS SHOP만의 쇼핑 경험을 제공합니다.</p>
            </header>
            <ul class="card_list" role="list">
                <li
                    v-for="card in channelCardList"
                    :key="card.key"
                >
                    <CardItem
                        :thumb-src="card.image"
                        :thumb-alt="card.imgAlt || ''"
                    >
                        <template v-if="card.em" #num>{{ card.em }}</template>
                        <template v-if="card.title" #title>{{ card.title }}</template>
                        <p v-if="card.desc">{{ card.desc }}</p>
                    </CardItem>
                </li>
            </ul>
        </section>
        <section class="sec_brand_program str_inner" aria-label="대표 브랜드 프로그램 소개">
            <header class="str_header str_header_program">
                <h2>대표 브랜드 프로그램 소개</h2>
            </header>
            <ul class="card_list" role="list">
                <li
                    v-for="card in programCardList"
                    :key="card.key"
                >
                    <CardItem
                        :thumb-src="card.image"
                        :thumb-alt="card.imgAlt || ''"
                    >
                        <template v-if="card.title" #title>{{ card.title }}</template>
                        <p v-if="card.desc" v-html="card.desc"></p>
                    </CardItem>
                </li>
            </ul> 
        </section>
        <div v-if="!isMobileView" class="diff_actions">
            <Buttons btn-class="btn_back" @click="goBack">{{ langData.backLabel }}</Buttons>
        </div>
    </div>


</template>

<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureCards from "@/components/FeatureCards.vue";
import CardItem from "@/components/CardItem.vue";
import Buttons from "@/components/Buttons.vue";
import imgLogo from "@/assets/images/dummy/brand_gsshop_logo.png";
import imgBi01 from "@/assets/images/dummy/gsrbr0301_01.png";
import imgBi02 from "@/assets/images/dummy/gsrbr0301_02.png";
import imgBi03 from "@/assets/images/dummy/gsrbr0301_03.png";
import imgBi04 from "@/assets/images/dummy/gsrbr0301_04.png";
import imgBi05 from "@/assets/images/dummy/gsrbr0301_05.png";
import imgBi06 from "@/assets/images/dummy/gsrbr0301_06.png";
import imgBi07 from "@/assets/images/dummy/gsrbr0301_07.png";
import imgBi08 from "@/assets/images/dummy/gsrbr0301_08.png";
import imgBi09 from "@/assets/images/dummy/gsrbr0301_09.png";
import imgBi09Mo from "@/assets/images/dummy/mo/gsrbr0301_09_mo.png";
import imgBi03Mo from "@/assets/images/dummy/mo/gsrbr0301_03_mo.png";
import imgBi04Mo from "@/assets/images/dummy/mo/gsrbr0301_04_mo.png";
import imgBi05Mo from "@/assets/images/dummy/mo/gsrbr0301_05_mo.png";
import imgBi06Mo from "@/assets/images/dummy/mo/gsrbr0301_06_mo.png";
import imgBi07Mo from "@/assets/images/dummy/mo/gsrbr0301_07_mo.png";
import imgBi08Mo from "@/assets/images/dummy/mo/gsrbr0301_08_mo.png";
import imgCert01 from "@/assets/images/dummy/cert_logo_01.png";
import imgCert02 from "@/assets/images/dummy/cert_logo_02.png";
import imgCert03 from "@/assets/images/dummy/cert_logo_03.png";
import imgCh01 from "@/assets/images/dummy/gsrbr0301_10.png";
import imgCh02 from "@/assets/images/dummy/gsrbr0301_11.png";
import imgCh03 from "@/assets/images/dummy/gsrbr0301_12.png";
import imgCh04 from "@/assets/images/dummy/gsrbr0301_13.png";
import imgPr01 from "@/assets/images/dummy/gsrbr0301_14.png";
import imgPr02 from "@/assets/images/dummy/gsrbr0301_15.png";
import imgPr03 from "@/assets/images/dummy/gsrbr0301_16.png";
import imgPr04 from "@/assets/images/dummy/gsrbr0301_17.png";
import imgPr05 from "@/assets/images/dummy/gsrbr0301_18.png";
import imgPr06 from "@/assets/images/dummy/gsrbr0301_19.png";



gsap.registerPlugin(ScrollTrigger);

const router = useRouter();

const langData = {
    backLabel: "목록으로 돌아가기",
};

const _getIsMobile = () => window.innerWidth <= 768;
const isMobileView = ref(_getIsMobile());

const sectionRef = ref(null);
const bgWrapRef = ref(null);
const textParaRef = ref(null);
const logoWrapRef = ref(null);
const aboutSectionRef = ref(null);

/** 768px 이하에서 BI 색상 이미지(_mo) 사용 — CSS 모바일 구간과 동일 */
const isBiColorMobile = ref(false);
/** 비즈니스 핵심역량 섹션 이미지도 동일 구간에서 _mo 사용 */
const isBiCompetencyMobile = isBiColorMobile;
let biColorMql = null;
function onBiColorMqlChange(e) {
    isBiColorMobile.value = e.matches;
}

/** type="text" — num / icon 없이 feature_card_title + desc 배열만 */
const ccmFeatureItems = [
    {
        title: "경영 전 과정에<br />CCM 도입",
        listDotted: true,
        desc: [
            "소비자중심경영 실천을 위해 경영 전 과정에 CCM의 가치와 철학을 반영",
            "고객불만 사전예방 시스템 체계를 구축하고 체계적인 CCM 관리지표 운영",
        ],
    },
    {
        title: "소비자<br />권익 증진 노력",
        listDotted: true,
        desc: [
            "'소비자분쟁해결기준'보다 소비자에게 유리한 'CS처리지침 및 고객서비스 정책’ 마련 ",
            "협력사와 상생경영을 통한 소비자 권익증진 협업시스템 운영",
        ],
    },
    {
        title: "소비자 효용을 증대한<br />우수한 서비스",
        listDotted: true,
        desc: [
            "고객의 라이프 스타일을 반영한 서비스 시행",

        ],
    },
];

const channelCardList = [
    {
        key: "ch-tv",
        image: imgCh01,
        imgAlt: "TV 홈쇼핑",
        em: "01",
        title: "TV 홈쇼핑",
        desc: "라이브 방송과 전담 상담으로 상품을 소개하고 주문까지 이어지는 대표 판매 채널입니다.",
    },
    {
        key: "ch-online",
        image: imgCh02,
        imgAlt: "온라인 쇼핑몰",
        em: "02",
        title: "온라인 쇼핑몰",
        desc: "웹에서 상품 검색·결제·배송 조회까지 한 번에 이용할 수 있습니다.",
    },
    {
        key: "ch-mobile",
        image: imgCh03,
        imgAlt: "모바일 앱",
        em: "03",
        title: "모바일 앱",
        desc: "우리동네GS 앱 등 모바일 환경에 맞춘 쇼핑과 혜택을 제공합니다.",
    },
    {
        key: "ch-commerce",
        image: imgCh04,
        imgAlt: "라이브 커머스",
        em: "04",
        title: "라이브 커머스",
        desc: "GS SHOP에서 실시간 동영상 스트리밍으로 상품을 판매하는 '모바일 라이브'는 고객과 소통하며 상품에 대한 다양하고 생생한 정보를 제공합니다.",
    },
];

const programCardList = [
    {
        key: "pr-01",
        image: imgPr01,
        imgAlt: "대표 브랜드 프로그램 1",
        title: "소유진쇼",
        desc: "차원이 다른 쇼핑<br />매주 금요일 저녁 8시 35분",
    },
    {
        key: "pr-02",
        image: imgPr02,
        imgAlt: "대표 브랜드 프로그램 3",
        title: "지금 백지연",
        desc: "프리미엄 큐레이션의 시작<br />매주 목요일 저녁 8시45분",
    },
    {
        key: "pr-03",
        image: imgPr03,
        imgAlt: "대표 브랜드 프로그램 3",
        title: "스타일나우",
        desc: "요즘 뜨는 스타일링<br />매주 화요일 오전",
    },
    {
        key: "pr-04",
        image: imgPr04,
        imgAlt: "대표 브랜드 프로그램 4",
        title: "더컬렉션",
        desc: "더 럭셔리 프리미엄 편집샵<br />매주 토요일 오전 9시 20분",
    },
    {
        key: "pr-05",
        image: imgPr05,
        imgAlt: "대표 브랜드 프로그램 5",
        title: "쇼미더트렌드",
        desc: "트렌드를 스타일링하다<br />매주 토요일 저녁 9시 35분",
    },
    {
        key: "pr-06",
        image: imgPr06,
        imgAlt: "대표 브랜드 프로그램 6",
        title: "신상뷰티찬스",
        desc: "화제의 뷰티템 이달의 신상<br />격주 토요일 낮 11시 50분",
    },
];

let gsapCtx = null;
let _resizeTimer = null;

function onBrandResize() {
    isMobileView.value = _getIsMobile();
    if (_resizeTimer) {
        clearTimeout(_resizeTimer);
    }
    _resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 150);
}

function goBack() {
    if (window.history.length > 1) {
        router.back();
    } else {
        router.push("/");
    }
}

function initBrandGsap() {
    if (!sectionRef.value || !bgWrapRef.value || !textParaRef.value || !logoWrapRef.value || !aboutSectionRef.value) {
        return;
    }
    gsapCtx = gsap.context(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1025px)", () => {
            const spans = textParaRef.value.querySelectorAll("span");
            const PHASE1_PX = 400;

            ScrollTrigger.create({
                trigger: sectionRef.value,
                start: "top top",
                end: `+=${PHASE1_PX}`,
                scrub: 1.5,
                onUpdate(self) {
                    const p = self.progress;
                    const bw = bgWrapRef.value.offsetWidth;
                    const bh = bgWrapRef.value.offsetHeight;
                    const hInset = p * Math.max(0, (bw - 1420) / 2);
                    const vInset = p * Math.max(0, (bh - 799) / 2);
                    const clip = `inset(${vInset}px ${hInset}px round ${p * 20}px)`;
                    bgWrapRef.value.style.clipPath = clip;
                    bgWrapRef.value.style.webkitClipPath = clip;
                    bgWrapRef.value.classList.toggle("active", p >= 1);
                },
            });

            gsap.set([...spans, logoWrapRef.value], { opacity: 0, y: 40 });

            const textTl = gsap.timeline({ paused: true });
            textTl
                .to(spans, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: "power2.out",
                })
                .to(logoWrapRef.value, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                }, "-=0.3");

            ScrollTrigger.create({
                trigger: sectionRef.value,
                start: `top+=${PHASE1_PX} top`,
                once: false,
                onEnter: () => textTl.play(),
                onLeaveBack: () => textTl.reverse(),
            });

            const aboutSpans = aboutSectionRef.value.querySelectorAll("span");

            gsap.set(aboutSpans, { y: 200, opacity: 0, willChange: "transform, opacity" });

            ScrollTrigger.create({
                trigger: aboutSectionRef.value,
                start: "top 75%",
                once: true,
                onEnter: () => {
                    gsap.to(aboutSpans, {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power3.out",
                        onComplete() {
                            gsap.set(aboutSpans, { willChange: "auto" });
                        },
                    });
                },
            });
        });
    });
}

onMounted(() => {
    isMobileView.value = _getIsMobile();
    biColorMql = window.matchMedia("(max-width: 768px)");
    isBiColorMobile.value = biColorMql.matches;
    biColorMql.addEventListener("change", onBiColorMqlChange);
    window.addEventListener("resize", onBrandResize);
    nextTick(() => {
        initBrandGsap();
    });
});

onBeforeUnmount(() => {
    if (biColorMql) {
        biColorMql.removeEventListener("change", onBiColorMqlChange);
        biColorMql = null;
    }
    window.removeEventListener("resize", onBrandResize);
    if (_resizeTimer) {
        clearTimeout(_resizeTimer);
        _resizeTimer = null;
    }
    if (gsapCtx) {
        gsapCtx.revert();
    }
    gsapCtx = null;
});
</script>

<style scoped>
:deep(.p_br) { display: block }
:deep(.m_br) { display: none }
img{width:100%; object-fit: cover; display: block;}
p {font-size: 2.4rem;line-height: 1.35;letter-spacing: -0.01em;}
.brand { padding-bottom: 206px; overflow-x: clip; max-width: 100%; }
.sec_brand_visual { position: relative; height: calc(100vh + 800px); max-width: 100%; }
/* 100vw는 스크롤바 폭까지 포함해 가로 오버플로를 자주 냄 → 부모와 동일한 100% 사용 */
.sticky { --base-ratio: 0.75; --base-size: 1536; --base-percent: 100%; width: 100%; max-width: 100%; height: calc(100vh + max(calc(2px * var(--base-ratio)), calc(calc(2 / var(--base-size)) * var(--base-percent)))); position: -webkit-sticky; position: sticky; top: max(calc(1 / var(--base-size) * var(--base-percent) * -1)); left: 0; overflow: hidden }
.bg_wrap { width: 100%; height: 100%; position: relative; z-index: 1; overflow: hidden; clip-path: inset(0% round 0px); -webkit-clip-path: inset(0% round 0px) }
.bg_wrap > .bg { width: 100%; height: 100%; background-image: url(@/assets/images/dummy/gs_shop_bg.png); background-size: cover; background-position: center; position: absolute; top: 0; left: 0; z-index: -1; transform: scale(1.2); transition: transform 0.7s ease-out }
.bg_wrap.active > .bg { transform: scale(1) }
.bg_wrap > .bg::before, .bg_wrap > .bg::after { content: ""; width: 100%; height: 100%; position: absolute; top: 0; left: 0; opacity: 0; visibility: hidden; pointer-events: none; transition: 0.7s }
.bg_wrap > .bg::before { background-color: #00000066; z-index: 2 }
.bg_wrap > .bg::after { background: linear-gradient(180deg, rgba(0, 0, 0, .3) 0, rgba(0, 0, 0, .3) 48.27%, rgba(0, 0, 0, 0) 90.33%); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); z-index: 1 }
.bg_wrap.active > .bg::before, .bg_wrap.active > .bg::after { opacity: 1; visibility: visible }
.bg_wrap > .visual_inner { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border-radius: 20px; display: flex; align-items: center; justify-content: center }
.bg_wrap .visual_inner > .txt_area { position: relative; z-index: 3; text-align: center }
.txt_area > p { width: 100%; margin-bottom: 48px; overflow: hidden }
.txt_area > p > span { color: #fff; font-size: 5.6rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; word-break: keep-all; word-wrap: break-word; display: block }
.sec_brand_about{padding: 200px 0;}
.sec_brand_about .mo_txt { display: none }
.sec_brand_about > .about_inner { width: 940px; margin: 0 auto; display: flex; flex-direction: column; gap: 40px }
.sec_brand_about > .about_inner > .about_txt > p { overflow: hidden }
.sec_brand_about > .about_inner > .about_txt > p > span { font-size: 2.8rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; will-change: transform, opacity; display: block }
.str_inner { width: 1460px; max-width: 100%; margin: 0 auto; padding: 200px 20px 0; box-sizing: border-box; }
.sec_brand_str { background-color: #F8F8F8; }
.sec_brand_str { padding: 200px 0; }
.sec_brand_str .str_inner {padding: 0 20px;}
.sec_brand_str .str_header {margin-bottom:40px;}
section.sec_brand_biz.str_inner .str_header { margin-bottom: 24px; display: block; }
.str_header {margin-bottom: 64px; display: flex; justify-content: space-between; align-items: flex-end }
.str_header h2 { font-size: 4.8rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em }
.str_header p {margin-top: 16px;}
.str_header .str_actions { display: flex; align-items: center; gap: 24px }
.str_bi { width: 100% }
.str_bi_sec {padding:56px 64px; background-color: #fff; border-radius: 12px; }
.str_bi_sec + .str_bi_sec { margin-top: 40px }
.str_bi_header {margin-bottom: 40px; display: flex; justify-content: space-between;gap:16px;}
.str_bi_sec_color .str_bi_tit{margin-bottom: 40px;}
.str_bi_tit {font-size: 3.2rem; line-height: 1.3; letter-spacing: -0.01em; flex: 1 }
.str_bi_desc { color: #67676F; flex:1; }
.str_bi_logo_figs { width: 100%; display: flex; flex-direction: column; gap: 24px }
.str_bi_fig { width: 100% }
.str_bi_fig:nth-child(2){padding:92px 0;}
.str_bi_fig:nth-child(2) > img{width:auto; vertical-align: middle; margin: 0 auto;}
.str_bi_fig img { width: 100%; height: auto; border-radius: 12px; display: block; object-fit: cover }
.str_bi_caption { color:#A4A4B0; font-weight: 700;font-size: 2rem;line-height: 1.35;letter-spacing: -0.01em;}
.str_color_core { width: 100%; margin: 12px 0 0 0; display: grid; grid-template-columns: 1fr 1fr; gap: 10px }
.str_color_core + .str_bi_caption { margin-top: 64px; }
.str_color_core li { min-width: 0 }
.str_color_core img { border-radius: 12px; display: block; }
.str_color_sup { width: 100%; margin: 12px 0 0 0; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px }
.str_color_sup li { min-width: 0 }
.str_color_sup img { width: 100%; height: auto; display: block; }
.btn_store_find { padding: 4px; color:#161616; font-size: 1.8rem; font-weight: 400; line-height: 1.4; text-decoration: none; display: flex; align-items: center; gap: 8px }
.btn_store_find::before { content: ""; width: 24px; height: 24px; background-color: #aca9a9; flex-shrink: 0; display: block }
.sns_wrap { display: flex; align-items: center; gap: 6px }
.btn_sns { width: 56px; height: 56px; background-color: red; border-radius: 100%; display: flex; align-items: center; justify-content: center }
.btn_sns::before { content: ""; background-color: #161616; border-radius: 4px; display: block }
.str_biz_fig { padding:32px; background-color: #F8F8F8; border-radius: 12px; }
.str_biz_fig_inner{display: flex; align-items: center; justify-content: space-between;}
.str_biz_fig strong{font-size: 2rem;line-height: 1.35;letter-spacing: -0.01em;}
.str_biz_fig p{margin-top:8px; color:#67676F; font-size: 1.6rem;line-height: 1.5;letter-spacing: -0.01em;}
.str_biz_fig dl{margin-top:50px; display: flex; align-items: center; gap:16px; }
.str_biz_fig dl > dt{color:#67676F;font-size: 1.4rem;line-height: 1.4;letter-spacing: -0.01em; flex-shrink: 0; white-space: nowrap;}
.str_biz_fig dl > dd + dt{padding-left:16px; position:relative;}
.str_biz_fig dl > dd + dt::before{content:''; display:block; width:1px; height:16px; background-color: #D7D7DF; position:absolute; top:50%; left:0; transform: translateY(-50%);}
.str_biz_fig dl > dd > img{display: block; width: auto; max-width: 100%; height: auto; mix-blend-mode: multiply;}
.str_biz_fig_img{padding:0 80px;}

.str_biz_block { width: 100%; margin: 64px 0 0 0 }
.str_biz_subtit { margin: 0; font-size: 3.2rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em }
.str_biz_block p { margin: 16px 0 0 0; color:#67676F;}
.str_biz_block :deep(.feature_card_list) { margin-top: 32px }
.str_biz_block :deep(.feature_card_item) {height: 317px;} 
/* 채널 */
.sec_brand_channel .str_header_channel { display: block; margin-bottom: 64px }
.sec_brand_channel .card_list { display: grid; width: 100%; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 80px 40px; align-items: stretch }
.sec_brand_channel .card_list > li { min-width: 0; min-height: 0; display: flex; flex-direction: column }
.sec_brand_channel .card_list > li > * { flex: 1; min-height: 0 }
.sec_brand_channel .card_list :deep(.card_thumb) { min-height: 380px; border-radius: 12px;  background-size:cover;background-blend-mode: multiply;}
.sec_brand_channel .card_list :deep(.card_item .card_body) { padding-top: 24px;}
.sec_brand_channel .card_list :deep(.card_desc) { margin-top: 8px; }

/* 프로그램램 */
.sec_brand_program .str_header_program { display: block; margin-bottom: 64px }
.sec_brand_program .card_list { display: grid; width: 100%; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 80px 20px; align-items: stretch }
.sec_brand_program .card_list > li { min-width: 0; min-height: 0; display: flex; flex-direction: column }
.sec_brand_program .card_list > li > * { flex: 1; min-height: 0 }
.sec_brand_program .card_list :deep(.card_thumb) {min-height: 300px; background-size: contain;background-blend-mode: multiply;}

.diff_actions { width: 100%; max-width: 1460px; margin: 0 auto; padding: 100px 20px 0; box-sizing: border-box; }
/* @media (max-width: 1024px) {
  section > .str_inner,
  section.str_inner { width: 100%; padding: 100px 40px; box-sizing: border-box; }
} */
@media (max-width: 768px) {
  :deep(.p_br) { display: none }
  :deep(.m_br) { display: block }
  p{font-size: 1.6rem;line-height: 1.5;letter-spacing: -0.01em;}
  .sec_brand_visual { height: 100vh }
  .sticky { height: 100vh; top: 0 }
  .bg_wrap > .bg { background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(@/assets/images/dummy/gs_shop_bg.png); background-position: 46% 17px }
  .bg_wrap > .visual_inner { width: calc(100% - 40px); height: auto; top: 358px; bottom: 318px; transform: translateX(-50%) }
  .txt_area > p { margin-bottom: 0 }
  .txt_area > p > span, .txt_area > p > span em { color:#fff; font-size: 3.2rem; line-height: 1.3; letter-spacing: -0.01em; text-align: center }
  .txt_area > .logo_wrap { max-width: 219px; margin:10px auto 0; }
  .txt_area > p > span:first-child::after { content: "," }
  .sec_brand_about{padding: 140px 0;}
  .sec_brand_about > .about_inner{width:100%;}
  .sec_brand_about > .about_inner > .about_txt > p > span  { font-weight: 700; font-size: 1.6rem; line-height: 1.24; letter-spacing: 0%; display: block }
  .sec_brand_about { padding: 140px 0 }
  .sec_brand_about > .about_inner { padding: 0 20px; gap: 40px }
  .sec_brand_str{padding: 60px 0;}
  section.str_inner { padding: 80px 20px 0;}
  
  .str_header { flex-direction: column; align-items: flex-start; gap: 16px; margin-bottom: 24px }
  .str_header h2 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -0.01em }
  .str_header p{margin-top:12px; }
  .str_bi_header{margin-bottom:20px; flex-direction: column; gap:8px; justify-content: flex-start;}
  .str_bi_tit{font-family: Pretendard;font-size: 1.8rem;line-height: 1.5;letter-spacing: 0%;}
  .str_header .str_actions { gap:14px; flex: none; justify-content: flex-start }
  .str_bi_fig:nth-child(2){padding:0 46px;}
  .str_bi_fig:nth-child(1) > img {min-height: 80px;}
  .str_bi_fig:nth-child(2) > img {width: 100%;} 
  .str_bi_sec{padding:32px}
  .str_bi_sec + .str_bi_sec { margin-top: 48px }
  .str_bi_logo_figs { gap: 20px }
  .str_bi_sec_color .str_bi_tit { margin-bottom: 24px }
  .str_bi_color_figs { display: flex; flex-direction: column; align-items: stretch }
  .str_bi_caption { font-size: 1.6rem; line-height: 1.42;letter-spacing: 0%;}
  .str_color_core { margin-top: 12px; display: grid; grid-template-columns: 1fr; gap: 10px }
  .str_color_core + .str_bi_caption { margin-top: 40px }
  .str_color_sup { margin-top: 12px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px 10px }
  .btn_store_find { font-weight: 500; font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em }
  .btn_store_find::before { width: 20px; height: 20px }
  .sns_wrap { gap: 16px }
  .btn_sns { width: 40px; height: 40px }
  .str_biz_fig_img{min-width:60px; padding:0;}
  section.sec_brand_biz.str_inner .str_header p {font-weight: 700; line-height: 1.24; letter-spacing: 0; }
  .str_biz_fig_inner{gap:20px;}
  .str_biz_fig strong{font-size: 1.6rem;line-height: 1.24;letter-spacing: 0%;}
  .str_biz_fig p{margin-top:12px; font-size: 1.2rem;line-height: 1.2;letter-spacing: 0%;}
  .str_biz_fig dl{margin-top:20px; gap:10px;}
  .str_biz_fig dl >dt{font-size: 1.2rem;line-height: 1.2;letter-spacing: 0%;}
  .str_biz_fig dl > dd + dt{padding-left:10px;}
  .str_biz_block { margin-top: 40px }
  .str_biz_subtit { font-size: 1.8rem; line-height: 1.5; letter-spacing: 0; }
  .str_biz_lead { margin-top: 8px; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
  .str_biz_block p{margin-top:8px;}
  .str_biz_block :deep(.swiper-wrapper) { margin-top: 24px }
  .str_biz_block :deep(.feature_card_item) {height: 312px;} 
  /* FeatureCards 모바일: 슬라이드 너비(공통은 var 훅만) · 간격은 :swiper-space-between="8" */
  .str_biz_feature_cards {--fc-swiper-slide-w: 84.53vw;}

  /* 채널널 */
  .sec_brand_channel .card_list { grid-template-columns: minmax(0, 1fr); gap: 40px }
  .sec_brand_channel .str_header_channel { margin-bottom: 40px }
  .sec_brand_channel .card_list :deep(.card_thumb) { min-height: 190px;}
  .sec_brand_channel .card_list :deep(.card_item .card_body) { padding-top: 20px; display: block;}
  .sec_brand_channel .card_list :deep(.card_item .card_body .card_num),
  .sec_brand_channel .card_list :deep(.card_item .card_body .card_tit){margin: 0 0 0 5px; font-size: 1.8rem;line-height: 150%;letter-spacing: 0;display: inline-block;}
  .sec_brand_channel .card_list :deep(.card_desc) { margin-top: 16px;font-size: 1.6rem;line-height: 1.5;letter-spacing: -0.01em;}

  /* 프로그램램 */
  .sec_brand_program .str_header_program { margin-bottom: 40px }
  .sec_brand_program .card_list { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 40px 10px }
  .sec_brand_program .card_list :deep(.card_thumb) {min-height: 114px;}
  .sec_brand_program .card_list :deep(.card_item .card_body){padding-top: 20px;}
  .sec_brand_program .card_list :deep(.card_desc) {margin-top: 8px;}
  .sec_brand_program .card_list :deep(.card_desc p) {font-size: 1.4rem;line-height: 1.4;letter-spacing: -0.01em;}
}
</style>
