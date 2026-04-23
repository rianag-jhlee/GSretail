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
                                <span>가치 있게 만드는 중심<em class="m_gs25"> GS25</em></span>
                            </p>
                            <div ref="logoWrapRef" class="logo_wrap">
                                <img :src="imgLogo" alt="GS25" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="brand_kv"></section>

        <section ref="aboutSectionRef" class="sec_brand_about">
            <div class="about_inner">
                <p class="pc_txt">
                    <span>대한민국 토종 브랜드의 자존심을 지키고 있는 GS25는</span>
                    <span>'수익을 낼 수 있는 가맹점을 늘린다'는 프랜차이즈 사업의 대원칙을</span>
                    <span>변함없이 지켜온 결과, 개발점 수익성이 가장 높은 국내 최고의 편의점 브랜드로</span>
                    <span>자리매김하였습니다.</span>
                </p>
                <p class="pc_txt">
                    <span>이는 '한국에서 가장 존경받는 기업' 16년 연속 1위,</span>
                    <span>한국서비스 품질지수(KS-SQI) 1위 총 19회 수상 등 공신력 있는 대외 기관의</span>
                    <span>평가 결과로 이어지고 있습니다.</span>
                </p>

                <p class="mo_txt">
                    대한민국 토종 브랜드의<br />
                    자존심을 지키고 있는 GS25는<br />
                    '수익을 낼 수 있는 가맹점을 늘린다'는<br />
                    프랜차이즈 사업의 대원칙을<br />
                    변함없이 지켜온 결과,<br />
                    개발점 수익성이 가장 높은 국내 최고의<br />
                    편의점 브랜드로 자리매김하였습니다.<br />
                </p>
                <p class="mo_txt">
                    이는<br />
                    '한국에서 가장 존경받는 기업' 16년 연속 1위,<br />
                    한국서비스 품질지수(KS-SQI) 1위<br />
                    총 19회 수상 등 공신력 있는 대외 기관의<br />
                    평가 결과로 이어지고 있습니다.<br />
                </p>
            </div>
        </section>

        <section class="sec_brand_str">
            <div class="str_inner">
                <header class="str_header">
                    <h2>당신 곁에는 언제나<br />GS25가 있습니다.</h2>
                    <div class="str_actions">
                        <a
                            href="#"
                            class="btn_store_find"
                            data-popid="pop_store_find"
                            data-type="lg"
                            data-cont="gsrbr0106"
                            @click.prevent="openModal"
                        >매장 찾기</a>
                        <div class="sns_wrap">
                            <a href="#" class="btn_sns btn_sns_insta" aria-label="인스타그램"></a>
                            <a href="#" class="btn_sns btn_sns_yt" aria-label="유튜브"></a>
                        </div>
                    </div>
                </header>
                <ul class="brand_acc">
                    <li
                        v-for="(item, i) in strItems"
                        :key="i"
                        class="acc_item"
                        :class="{ is_open: openAcc === i }"
                    >
                        <div class="acc_inner">
                            <div class="acc_body">
                                <button
                                    type="button"
                                    class="acc_btn"
                                    :aria-expanded="openAcc === i"
                                    @click="toggleAcc(i)"
                                    v-html="item.title"
                                ></button>
                                <div
                                    :ref="el => { if (el) descRefs[i] = el }"
                                    class="acc_desc_wrap"
                                >
                                    <p class="acc_desc" v-html="item.desc"></p>
                                </div>
                            </div>
                            <div
                                :ref="el => { if (el) imgRefs[i] = el }"
                                class="acc_img_wrap"
                            >
                                <img :src="item.img" alt="" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>

    <div id="pop_store_find" class="modal_wrap">
        <div class="modal_container"></div>
    </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import modal from "@/assets/js/modal";
import imgLogo from "@/assets/images/dummy/brand_gsshop_logo.png";
import imgAcc01 from "@/assets/images/dummy/brand_accordion_01.png";
import imgAcc02 from "@/assets/images/dummy/brand_accordion_02.png";
import imgAcc03 from "@/assets/images/dummy/brand_accordion_03.png";

gsap.registerPlugin(ScrollTrigger);

function openModal(event) {
    const el = event.currentTarget;
    modal.open(el.dataset.popid, el.dataset.type || "default", el);
}

const sectionRef = ref(null);
const bgWrapRef = ref(null);
const textParaRef = ref(null);
const logoWrapRef = ref(null);
const aboutSectionRef = ref(null);

const strItems = [
    {
        title: "업계 최고<br />점포 당 매출액 달성",
        desc: "점포 경쟁력을<br class=\"m_br\" />강화하고 고객중심의 상품서비스 제공을 통해<br />편의점 업계 최고의 매출액을 달성하고 있습니다.",
        img: imgAcc01,
    },
    {
        title: "GS25만의 차별화된<br class=\"p_br\" /> 상품과<br class=\"m_br\" />서비스 제공",
        desc: "안전하고 맛있는 후레쉬푸드 상품 등 고품질의 먹거리 상품 개발과<br class=\"p_br\" />좋은 품질, 합리적 가격의 PB브랜드 'YOUUS',<br class=\"p_br\" />GS리테일의 전용 어플리케이션 우리동네GS 등 차별화된 상품과 서비스를 통해 고객에게 새로운 가치를 제공하고 있습니다.",
        img: imgAcc02,
    },
    {
        title: "경영주와의 끊임없는 소통과<br class=\"m_br\" />협력을 통한 <br class=\"p_br\" />단단한 파트너십",
        desc: "경영주와 본부의 파트너십 구축을 위해 다양한 소통창구와 상생제도를 도입하여 운영중에 있습니다. Refresh 휴가지원, GS25 20's Club 등을 업계 최초로 개발하여 경영주의 만족과 자부심을 높이고 있습니다.",
        img: imgAcc03,
    },
];

const openAcc = ref(-1);
const descRefs = [];
const imgRefs = [];
const tokens = strItems.map(() => 0);

function _animateOpen(el, myToken, index) {
    if (el.classList.contains("acc_show") && el.style.height === "auto") return;
    el.classList.add("acc_animating", "acc_show");
    el.style.height = "auto";
    const heightPx = `${el.scrollHeight}px`;
    el.style.height = "0px";
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            if (myToken !== tokens[index]) return;
            el.style.height = heightPx;
        });
    });
    el.addEventListener("transitionend", function onEnd(e) {
        if (e.target !== el || e.propertyName !== "height") return;
        el.removeEventListener("transitionend", onEnd);
        if (myToken !== tokens[index]) return;
        el.style.height = "auto";
        el.classList.remove("acc_animating");
    });
}

function _animateClose(el, myToken, index) {
    if (!el.classList.contains("acc_show")) return;
    el.classList.add("acc_animating");
    const h = el.scrollHeight;
    if (h === 0) {
        el.classList.remove("acc_show", "acc_animating");
        el.style.height = "";
        return;
    }
    el.style.height = `${h}px`;
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            if (myToken !== tokens[index]) return;
            el.style.height = "0px";
        });
    });
    el.addEventListener("transitionend", function onEnd(e) {
        if (e.target !== el || e.propertyName !== "height") return;
        el.removeEventListener("transitionend", onEnd);
        if (myToken !== tokens[index]) return;
        el.classList.remove("acc_show", "acc_animating");
        el.style.height = "";
    });
}

function toggleAcc(index) {
    const prev = openAcc.value;
    if (prev === index) {
        openAcc.value = -1;
        const t = ++tokens[index];
        _animateClose(descRefs[index], t, index);
        _animateClose(imgRefs[index], t, index);
        return;
    }
    if (prev !== -1) {
        const t = ++tokens[prev];
        _animateClose(descRefs[prev], t, prev);
        _animateClose(imgRefs[prev], t, prev);
    }
    openAcc.value = index;
    const t = ++tokens[index];
    _animateOpen(descRefs[index], t, index);
    nextTick(() => {
        _animateOpen(imgRefs[index], t, index);
    });
}

let gsapCtx = null;
let _resizeTimer = null;

function onBrandResize() {
    if (_resizeTimer) {
        clearTimeout(_resizeTimer);
    }
    _resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 150);
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
    window.addEventListener("resize", onBrandResize);
    nextTick(() => {
        initBrandGsap();
    });
});

onBeforeUnmount(() => {
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
.sec_brand_visual { position: relative; height: calc(100vh + 800px) }
.sticky { --base-ratio: 0.75; --base-size: 1536; --base-percent: 100vw; width: 100%; height: calc(100vh + max(calc(2px * var(--base-ratio)), calc(calc(2 / var(--base-size)) * var(--base-percent)))); position: -webkit-sticky; position: sticky; top: max(calc(1 / var(--base-size) * var(--base-percent) * -1)); left: 0; overflow: hidden }
@media (max-width: 768px) {
  .sec_brand_visual { height: 100vh }
  .sticky { height: 100vh; top: 0 }
}
.bg_wrap { width: 100%; height: 100%; position: relative; z-index: 1; overflow: hidden; clip-path: inset(0% round 0px); -webkit-clip-path: inset(0% round 0px) }
.bg_wrap > .bg { width: 100%; height: 100%; background-image: url(@/assets/images/dummy/gs_shop_bg.png); background-size: cover; background-position: center; position: absolute; top: 0; left: 0; z-index: -1; transform: scale(1.2); transition: transform 0.7s ease-out }
@media (max-width: 768px) {
  .bg_wrap > .bg { background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(@/assets/images/dummy/gs_shop_bg.png); transform: scale(1.25); background-position: 54% 50px }
}
.bg_wrap.active > .bg { transform: scale(1) }
.bg_wrap > .bg::before, .bg_wrap > .bg::after { content: ""; width: 100%; height: 100%; position: absolute; top: 0; left: 0; opacity: 0; visibility: hidden; pointer-events: none; transition: 0.7s }
.bg_wrap > .bg::before { background-color: #00000066; z-index: 2 }
.bg_wrap > .bg::after { background: linear-gradient(180deg, rgba(0, 0, 0, .3) 0, rgba(0, 0, 0, .3) 48.27%, rgba(0, 0, 0, 0) 90.33%); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); z-index: 1 }
.bg_wrap.active > .bg::before, .bg_wrap.active > .bg::after { opacity: 1; visibility: visible }
.bg_wrap > .visual_inner { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border-radius: 20px; display: flex; align-items: center; justify-content: center }
.bg_wrap .visual_inner > .txt_area { position: relative; z-index: 3; text-align: center }
.txt_area > p { width: 100%; margin-bottom: 48px; overflow: hidden }
.txt_area > p > span { color: #fff; font-size: 5.6rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; word-break: keep-all; word-wrap: break-word; display: block }
.txt_area > .logo_wrap { overflow: hidden }
.txt_area > .logo_wrap > img { width: auto; margin: 0 auto; display: block }
.m_gs25 { font-style: normal; display: none }
.sec_brand_about { padding: 200px 0; background-color: #f8f8f8 }
.sec_brand_about .mo_txt { display: none }
.sec_brand_about .pc_txt { overflow: hidden }
.sec_brand_about > .about_inner { width: 940px; margin: 0 auto; display: flex; flex-direction: column; gap: 40px }
.sec_brand_about > .about_inner > .pc_txt { overflow: hidden }
.sec_brand_about > .about_inner > .pc_txt > span { color: #161616; font-size: 2.8rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; will-change: transform, opacity; display: block }
.sec_brand_str > .str_inner { width: 1420px; margin: 0 auto; padding: 200px 0 }
.str_header { padding-bottom: 80px; display: flex; justify-content: space-between; align-items: flex-end }
.str_header > h2 { color: #161616; font-size: 4.8rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em }
.str_header > .str_actions { display: flex; align-items: center; gap: 24px }
.btn_store_find { padding: 4px; color: #161616; font-size: 1.8rem; font-weight: 400; line-height: 1.4; text-decoration: none; display: flex; align-items: center; gap: 8px }
.btn_store_find::before { content: ""; width: 24px; height: 24px; background-color: #aca9a9; flex-shrink: 0; display: block }
.sns_wrap { display: flex; align-items: center; gap: 6px }
.btn_sns { width: 56px; height: 56px; background-color: #F8F8F8; border-radius: 100%; display: flex; align-items: center; justify-content: center }
.btn_sns::before { content: ""; background-color: #161616; border-radius: 4px; display: block }
.brand_acc { margin: 0; padding: 0; background-color: #f8f8f8; border-radius: 12px; list-style: none; overflow: hidden }
.acc_item { border-bottom: 1px solid #e5e5e9 }
.acc_inner { padding: 40px 64px; display: grid; grid-template-columns: 1fr 0; align-items: start }
.acc_item.is_open .acc_inner { grid-template-columns: 1fr 1fr }
.acc_body { min-width: 0 }
.acc_btn { width: 100%; padding: 0; color: #161616; font-size: 2.8rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; background: transparent; border: none; cursor: pointer; text-align: left; display: flex; align-items: center; justify-content: space-between; gap: 16px }
.acc_btn:focus-visible { outline: 2px solid #111; outline-offset: 2px }
.acc_btn::after { content: ""; width: 20px; height: 20px; flex-shrink: 0; background-color:#161616; display:block }
.acc_item.is_open .acc_btn::after { opacity: 0 }
.acc_desc_wrap { overflow: hidden; height: 0; box-sizing: border-box; transition: height 0.35s ease }
.acc_desc { padding-top: 16px; color: #67676f; font-size: 2rem; font-weight: 400; line-height: 1.35; letter-spacing: -0.01em }
:deep(.p_br) { display: block }
:deep(.m_br) { display: none }
.acc_img_wrap { overflow: hidden; height: 0; transition: height 0.65s ease }
.acc_img_wrap > img { width: auto; margin-left: auto; border-radius: 12px; display: block; object-fit: cover }
img { display: block }
button { background-color: #fff }
@media (max-width: 1024px) {
  .sec_brand_about > .about_inner { width: 100%; padding: 0 40px; box-sizing: border-box }
  .sec_brand_str > .str_inner { width: 100%; padding: 100px 40px; box-sizing: border-box }
  .acc_inner { padding: 28px 40px }
  .acc_item.is_open .acc_inner { grid-template-columns: 1fr 280px; column-gap: 28px }
  .acc_img_wrap > img { width: 100% }
}
@media (max-width: 768px) {
  .bg_wrap > .visual_inner { width: calc(100% - 40px); height: auto; top: 358px; bottom: 318px; transform: translateX(-50%) }
  .btn_store_find { font-weight: 500; font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em }
  .btn_store_find::before { width: 20px; height: 20px }
  .txt_area > p { margin-bottom: 0 }
  .txt_area > p > span, .txt_area > p > span em { color:#fff; font-size: 3.2rem; line-height: 1.3; letter-spacing: -0.01em; text-align: center }
  .txt_area > .logo_wrap { display: none }
  .m_gs25 { display: inline }
  .txt_area > p > span:first-child::after { content: "," }
  .sec_brand_about .mo_txt { font-weight: 700; font-size: 1.6rem; line-height: 1.24; letter-spacing: 0%; display: block }
  .sec_brand_about .pc_txt { display: none }
  .sec_brand_about { padding: 140px 0 }
  .sec_brand_about > .about_inner { padding: 0 20px; gap: 40px }
  .sec_brand_about > .about_inner > .pc_txt > span { font-size: 1.8rem }
  .sec_brand_str { padding: 140px 0 }
  .sec_brand_str > .str_inner { padding: 0 20px }
  .str_header { flex-direction: column; align-items: flex-start; gap: 16px; padding-bottom: 40px }
  .str_header > h2 { font-size: 2.8rem; line-height: 1.35; letter-spacing: -0.01em }
  .str_header > .str_actions { gap:14px; flex: none; justify-content: flex-start }
  .sns_wrap { gap: 16px }
  .btn_sns { width: 40px; height: 40px }
  .acc_btn { font-size: 1.8rem; line-height: 1.5; letter-spacing: -0 }
  .acc_inner { padding: 24px }
  .acc_desc { font-size: 1.6rem; line-height: 1.5 }
  .acc_item.is_open .acc_inner { grid-template-columns: 1fr; column-gap: 0; row-gap:40px }
  :deep(.p_br) { display: none }
  :deep(.m_br) { display: inline }
}
</style>
