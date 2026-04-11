<template>
    <div class="brand">
        <section ref="sectionRef" class="sec_brand_visual">
            <div class="sticky">
                <div ref="bgWrapRef" class="bg_wrap">
                    <div class="bg"></div>
                    <div class="inner">
                        <div class="txt_area">
                            <p ref="textParaRef">
                                <span>일상생활의 중심</span>
                                <span>하루의 시작</span>
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
            <div class="inner">
                <p>
                    <span>대한민국 토종 브랜드의 자존심을 지키고 있는 GS25는</span>
                    <span>'수익을 낼 수 있는 가맹점을 늘린다'는 프랜차이즈 사업의 대원칙을</span>
                    <span>변함없이 지켜온 결과, 개발점 수익성이 가장 높은 국내 최고의 편의점 브랜드로</span>
                    <span>자리매김하였습니다.</span>
                </p>
                <p>
                    <span>이는 '한국에서 가장 존경받는 기업' 16년 연속 1위,</span>
                    <span>한국서비스 품질지수(KS-SQI) 1위 총 19회 수상 등 공신력 있는 대외 기관의</span>
                    <span>평가 결과로 이어지고 있습니다.</span>
                </p>
            </div>
        </section>

        <section class="sec_brand_str">
            <div class="inner">
                <header class="str_header">
                    <h2>당신 곁에는 언제나<br />GS25가 있습니다.</h2>
                    <div class="str_actions">
                        <a href="#none" class="btn_store_find">매장 찾기</a>
                        <div class="sns_wrap">
                            <a href="#none" class="btn_sns btn_sns_insta" aria-label="인스타그램">
                            </a>
                            <a href="#none" class="btn_sns btn_sns_yt" aria-label="유튜브">
                            </a>
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
                            <div class="acc_img_wrap">
                                <img :src="item.img" alt="" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import imgLogo from "@/assets/images/dummy/brand_gs25_logo.png";
import imgAcc01 from "@/assets/images/dummy/brand_accordion_01.png";
import imgAcc02 from "@/assets/images/dummy/brand_accordion_02.png";
import imgAcc03 from "@/assets/images/dummy/brand_accordion_03.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
const bgWrapRef = ref(null);
const textParaRef = ref(null);
const logoWrapRef = ref(null);
const aboutSectionRef = ref(null);

const strItems = [
    {
        title: "업계 최고<br />점포 당 매출액 달성",
        desc: "점포 경쟁력을 강화하고 고객중심의 상품서비스 제공을 통해<br />편의점 업계 최고의 매출액을 달성하고 있습니다.",
        img: imgAcc01,
    },
    {
        title: "GS25만의 차별화된<br />상품과 서비스 제공",
        desc: "안전하고 맛있는 후레쉬푸드 상품 등 고품질의 먹거리 상품 개발과<br />좋은 품질, 합리적 가격의 PB브랜드 'YOUUS',<br />GS리테일의 전용 어플리케이션 우리동네GS 등 차별화된 상품과 서비스를 통해 고객에게 새로운 가치를 제공하고 있습니다.",
        img: imgAcc02,
    },
    {
        title: "경영주와의 끊임없는 소통과 협력을 통한<br />단단한 파트너십",
        desc: "경영주와 본부의 파트너십 구축을 위해 다양한 소통창구와 상생제도를 도입하여 운영중에 있습니다. Refresh 휴가지원, GS25 20's Club 등을 업계 최초로 개발하여 경영주의 만족과 자부심을 높이고 있습니다.",
        img: imgAcc03,
    },
];

const openAcc = ref(-1);
const descRefs = [];
const tokens = strItems.map(() => 0);

function expandDesc(el, index) {
    if (el.classList.contains("acc_show") && el.style.height === "auto") return;
    const myToken = ++tokens[index];
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

function collapseDesc(el, index) {
    if (!el.classList.contains("acc_show")) return;
    const myToken = ++tokens[index];
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
        collapseDesc(descRefs[index], index);
        return;
    }
    if (prev !== -1 && descRefs[prev]) {
        collapseDesc(descRefs[prev], prev);
    }
    openAcc.value = index;
    expandDesc(descRefs[index], index);
}

let ctx = null;

onMounted(() => {
    ctx = gsap.context(() => {
        const spans = textParaRef.value.querySelectorAll("span");
        const PHASE1_END = "+=200";

        ScrollTrigger.create({
            trigger: sectionRef.value,
            start: "top top",
            end: PHASE1_END,
            scrub: 1.5,
            onUpdate(self) {
                const p = self.progress;
                const clip = `inset(${p * 13}% round ${p * 20}px)`;
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
            start: "top+=250 top",
            onEnter: () => textTl.play(),
            onLeaveBack: () => textTl.reverse(),
            once: false,
        });

        const aboutSpans = aboutSectionRef.value.querySelectorAll("span");

        gsap.set(aboutSpans, {
            y: 200,
            opacity: 0,
            willChange: "transform, opacity",
        });

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

onBeforeUnmount(() => {
    if (ctx) ctx.revert();
});
</script>

<style scoped>
/* =====================
   sec_brand_visual
   ===================== */
.sec_brand_visual {
    position: relative;
    height: calc(100vh + 800px);
}

.sticky {
    --base-ratio: 0.75;
    --base-size: 1536;
    --base-percent: 100vw;
    width: 100%;
    height: calc(100vh + max(calc(2px * var(--base-ratio)), calc(calc(2 / var(--base-size)) * var(--base-percent))));
    position: -webkit-sticky;
    position: sticky;
    top: max(calc(1 / var(--base-size) * var(--base-percent) * -1));
    left: 0;
    overflow: hidden;
}

.bg_wrap {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    overflow: hidden;
    clip-path: inset(0% round 0px);
    -webkit-clip-path: inset(0% round 0px);
}

.bg_wrap > .bg {
    width: 100%;
    height: 100%;
    background-image: url(@/assets/images/dummy/brand_main_bg.jpg);
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transform: scale(1.2);
    transition: transform 0.7s ease-out;
}

.bg_wrap.active > .bg {
    transform: scale(1);
}

.bg_wrap > .bg::before,
.bg_wrap > .bg::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: 0.7s;
}

.bg_wrap > .bg::before {
    background-color: #00000066;
    z-index: 2;
}

.bg_wrap > .bg::after {
    background: linear-gradient(180deg, rgba(0, 0, 0, .3) 0, rgba(0, 0, 0, .3) 48.27%, rgba(0, 0, 0, 0) 90.33%);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    z-index: 1;
}

.bg_wrap.active > .bg::before,
.bg_wrap.active > .bg::after {
    opacity: 1;
    visibility: visible;
}

.bg_wrap > .inner {
    width: 74%;
    height: 74%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bg_wrap .inner > .txt_area {
    position: relative;
    z-index: 3;
    text-align: center;
}

.txt_area > p {
    margin-bottom: 48px;
    overflow: hidden;
}

.txt_area > p > span {
    color: #fff;
    font-size: 5.6rem;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.01em;
    word-break: keep-all;
    word-wrap: break-word;
    display: block;
}

.txt_area > .logo_wrap {
    overflow: hidden;
}

.txt_area > .logo_wrap > img {
    display: block;
    margin: 0 auto;
}

/* =====================
   sec_brand_about
   ===================== */
.sec_brand_about {
    padding: 200px 0;
    background-color: #f8f8f8;
}

.sec_brand_about > .inner {
    width: 940px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.sec_brand_about > .inner > p {
    overflow: hidden;
}

.sec_brand_about > .inner > p > span {
    color: #161616;
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.01em;
    will-change: transform, opacity;
    display: block;
}

/* =====================
   sec_brand_str
   ===================== */
.sec_brand_str {
    padding: 200px 0;
}

.sec_brand_str > .inner {
    width: 1420px;
    margin: 0 auto;
}

.str_header {
    padding-bottom: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.str_header > h2 {
    color: #161616;
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.01em;
}

.str_header > .str_actions {
    display: flex;
    align-items: center;
    gap: 24px;
}

.btn_store_find {
    padding: 4px;
    color: #161616;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.4;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
}

.btn_store_find::before {
    content: "";
    width: 24px;
    height: 24px;
    background-color: #aca9a9;
    border-radius: 50%;
    flex-shrink: 0;
    display: block;
}

.sns_wrap {
    display: flex;
    align-items: center;
    gap: 6px;
}

.btn_sns {
    width: 56px;
    height: 56px;
    background-color: #e5e5e9;    
    border-radius: 100%;
}



/* Accordion 커스텀 */
.brand_acc {
    margin: 0;
    padding: 0;
    background-color: #f8f8f8;
    border-radius: 12px;
    list-style: none;
    overflow: hidden;
}

.acc_item {
    border-bottom: 1px solid #e5e5e9;
}

.acc_inner {
    padding: 40px 64px;
    display: grid;
    grid-template-columns: 1fr 0px;
    column-gap: 0;
    align-items: start;
    
}

.acc_item.is_open .acc_inner {
    grid-template-columns: 1fr 1fr;
   
}

.acc_body {
    min-width: 0;
}

.acc_btn {
    width: 100%;
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #161616;
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.01em;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
}

.acc_btn:focus-visible {
    outline: 2px solid #111;
    outline-offset: 2px;
}

.acc_btn::after {
    content: "";
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    background:
        linear-gradient(#161616, #161616) center / 2px 20px no-repeat,
        linear-gradient(#161616, #161616) center / 20px 2px no-repeat;
}

.acc_item.is_open .acc_btn::after {
    opacity: 0;
}

.acc_desc_wrap {
    overflow: hidden;
    height: 0;
    transition: height 0.35s ease;
    box-sizing: border-box;
}

.acc_desc {
    padding-top: 16px;
    color: #67676f;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

.acc_img_wrap {
    overflow: hidden;
    height: 0;
    opacity: 0;

}

.acc_item.is_open .acc_img_wrap {
    height: auto;
    opacity: 1;
}

.acc_img_wrap > img {
    width:auto;
    margin-left:auto;
    border-radius: 12px;
    display: block;
    object-fit: cover;
}

/* =====================
   반응형
   ===================== */
@media (max-width: 1024px) {
    .sec_brand_about > .inner {
        width: 100%;
        padding: 0 40px;
        box-sizing: border-box;
    }

    .sec_brand_str > .inner {
        width: 100%;
        padding: 0 40px;
        box-sizing: border-box;
    }

    .acc_inner {
        padding: 28px 40px;
    }

    .acc_item.is_open .acc_inner {
        grid-template-columns: 1fr 280px;
        column-gap: 28px;
    }

    .acc_item.is_open .acc_img_wrap {
        height: 200px;
    }

    .acc_img_wrap > img {
        height: 200px;
    }
}

@media (max-width: 768px) {
    .sec_brand_about {
        padding: 80px 0;
    }

    .sec_brand_about > .inner {
        padding: 0 20px;
        gap: 24px;
    }

    .sec_brand_about > .inner > p > span {
        font-size: 1.8rem;
    }

    .sec_brand_str {
        padding: 80px 0;
    }

    .sec_brand_str > .inner {
        padding: 0 20px;
    }

    .str_header {
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        padding-bottom: 40px;
    }

    .str_header > h2 {
        font-size: 3.2rem;
    }

    .str_header > .str_actions {
        flex: none;
        justify-content: flex-start;
    }

    .acc_btn {
        font-size: 2rem;
    }

    .acc_inner {
        padding: 20px;
    }

    .acc_item.is_open .acc_inner {
        grid-template-columns: 1fr;
        column-gap: 0;
    }

    .acc_item.is_open .acc_img_wrap {
        display: none;
    }
}
</style>
