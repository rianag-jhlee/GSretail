<template>
    <div class="brand">
        <div class="sec brand_visual">
            <div class="sticky">
                <div class="bg_wrap">
                    <div class="bg"></div>
                    <div class="inner">
                        <div class="txt_area">
                            <p>
                                <span>일상생활의 중심</span>
                                <span>하루의 시작</span>
                            </p>
                            <div class="logo_wrap"><img :src="imgLogo" alt="GS25" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="brand_kv">
            
        </section>
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import imgLogo from "@/assets/images/dummy/brand_gs25_logo.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let ctx = null;

onMounted(() => {
    ctx = gsap.context(() => {
        const bgWrap = document.querySelector(".brand_visual .bg_wrap");
        const bg = document.querySelector(".brand_visual .bg");
        const spans = document.querySelectorAll(".brand_visual .txt_area p span");
        const logoWrap = document.querySelector(".brand_visual .logo_wrap");

        // Phase 1: clip-path 축소 + bg scale (스크롤 4칸 ≈ 400px)
        const PHASE1_END = "+=400";

        ScrollTrigger.create({
            trigger: ".brand_visual",
            start: "top top",
            end: PHASE1_END,
            scrub: 2,
            onUpdate(self) {
                const p = self.progress;
                const clip = `inset(${p * 13}% round ${p * 20}px)`;
                bgWrap.style.clipPath = clip;
                bgWrap.style.webkitClipPath = clip;
                bgWrap.classList.toggle("active", p >= 1);
            },
        });

        gsap.fromTo(bg, { scale: 1.2 }, {
            scale: 1,
            ease: "none",
            scrollTrigger: {
                trigger: ".brand_visual",
                start: "top top",
                end: PHASE1_END,
                scrub: 2,
            },
        });

        // Phase 2: 한 줄씩 순차 reveal — Phase 1(400px) 이후 스크롤에 동기화
        gsap.set([...spans, logoWrap], { opacity: 0, y: 40 });

        const textTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".brand_visual",
                start: "top+=400 top",
                end: "top+=1000 top",
                scrub: 2,
            },
        });

        spans.forEach((span) => {
            textTl.fromTo(
                span,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1, ease: "none" }
            );
        });

        textTl.fromTo(
            logoWrap,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1, ease: "none" }
        );
    });
});

onBeforeUnmount(() => {
    if (ctx) ctx.revert();
});
</script>

<style scoped>
.brand_visual {
    position: relative;
    height: calc(100vh + 1200px);
}
.sticky {
    --base-ratio: 0.75;
    --base-size: 1536;
    --base-percent: 100vw;
    height: calc(100vh + max(calc(2px * var(--base-ratio)), calc(calc(2 / var(--base-size)) * var(--base-percent))));
    left: 0;
    overflow: hidden;
    position: -webkit-sticky;
    position: sticky;
    top: max(calc(1 / var(--base-size) * var(--base-percent) * -1));
    width: 100%;
}

.brand .brand_visual .bg_wrap {
    position: relative;
    width: 100%;
    height: 100%;
    clip-path: inset(0% round 0px);
    -webkit-clip-path: inset(0% round 0px);
    overflow: hidden;
    z-index: 1;
}

.brand .brand_visual .bg_wrap .bg:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    z-index: 2;
    background-color: #00000066;
    transition: .7s;
}
.brand .brand_visual .bg_wrap .bg:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background: linear-gradient(180deg, rgba(0, 0, 0, .3) 0, rgba(0, 0, 0, .3) 48.27%, rgba(0, 0, 0, 0) 90.33%);
    z-index: 1;
    transition: .7s;
}

.brand .brand_visual .bg_wrap.active .bg:after,
.brand .brand_visual .bg_wrap.active .bg:before {
    opacity: 1;
    visibility: visible;
}

.brand .brand_visual .bg_wrap .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(@/assets/images/dummy/brand_main_bg.jpg);
    background-size: cover;
    background-position: center;
    transform: scale(1.2);
    z-index: -1;
}

.brand .brand_visual .bg_wrap .inner {
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

.brand .brand_visual .bg_wrap .inner .txt_area {
    position: relative;
    z-index: 3;
    text-align: center;
}

.brand .brand_visual .bg_wrap .inner .txt_area p {
    margin-bottom: 48px;
    overflow: hidden;
}

.brand .brand_visual .bg_wrap .inner .txt_area p span {
    display: block;
    color: #fff;
    font-size: 5.6rem;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.1%;
    word-break: keep-all;
    word-wrap: break-word;
}

.brand .brand_visual .bg_wrap .inner .txt_area .logo_wrap {
    overflow: hidden;
}

.brand .brand_visual .bg_wrap .inner .txt_area .logo_wrap img {
    display: block;
    margin: 0 auto;
}
</style>
