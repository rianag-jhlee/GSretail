<template>
    <section class="visual">
        <p>더 나은 일상을 만드는 기업,<br />항상 고객과 함께하는<br />GS리테일이 되겠습니다.</p>
    </section>
    <section class="about">
        <div class="inner">
            <header>
                <h2>GS리테일은 대한민국을 대표하는<br />Lifestyle Platform 입니다.</h2>
                <p>GS리테일은 다양한 생활 밀착형 플랫폼을 운영하며<br />고객의 Lifestyle을 선도하고 있습니다.</p>
            </header>
            <div class="img_wrap">
                <img :src="imgVisual" width="1180" height="640" alt="" />
            </div>
        </div>
    </section>
    <section class="prepare">
        <div class="inner">
            <header class="prepare_head">
                <h2>GS리테일은 고객 감동을 위해<br />한 걸음 먼저 준비합니다.</h2>
                <div class="prepare_body">
                    <p>GS리테일은 1971년 창업 이래 고객 감동을 최우선으로<br />최고의 상품과 서비스를 제공하고 있습니다.</p>
                    <p>고객의 삶을 더욱 편리하고 가치 있게 만들기 위해 한 걸음 더 움직이고<br />한 걸음 먼저 준비하겠습니다.</p>
                </div>
            </header>
            <ul class="prepare_photos">
                <li class="prepare_photos_large">
                    <div class="img_wrap">
                        <img :src="imgPrepare1" width="700" height="480" alt="" />
                    </div>
                </li>
                <li class="prepare_photos_small">
                    <div class="img_wrap">
                        <img :src="imgPrepare2" width="340" height="233" alt="" />
                    </div>
                </li>
                <li class="prepare_photos_small">
                    <div class="img_wrap">
                        <img :src="imgPrepare3" width="340" height="233" alt="" />
                    </div>
                </li>
            </ul>
        </div>
    </section>
    <section class="sustain">
        <div class="inner">
            <header>
                <h2>GS리테일은 지속 가능 경영을<br />적극 실천하고 있습니다.</h2>
                <p>GS리테일은 친환경 상품을 확대하고 자원 순환 활성화를 통해<br />환경 경영을 실천하고 있습니다.</p>
                <p>또한 경영주·임직원·파트너사·지역사회와 함께 성장하기 위해<br />다양한 제도와 정책을 운영하고 있습니다. 지속 가능한 미래를 위해<br />ESG 경영을 적극 실천하며 신뢰받는 기업이 되겠습니다.</p>
            </header>
        </div>
    </section>
    <section class="growth">
        <div class="inner">
            <div class="growth_row">
                <div class="growth_visual">
                    <div class="img_wrap">
                        <img :src="imgCeo" width="340" height="453" alt="" />
                    </div>
                </div>
                <div class="growth_content">
                    <div class="growth_headlines">
                        <p>GS리테일은</p>
                        <p>고객과 함께 성장하며</p>
                        <p>더 나은 미래를<br />만들어가겠습니다.</p>
                    </div>
                    <p class="growth_body">
                        항상 고객의 목소리에 귀 기울이고, 혁신을 통해 가치를 창출하며,<br />사회적 책임을 다하는 기업으로 함께하겠습니다.
                    </p>
                    <div class="growth_sign_block">
                        <p class="growth_role"><span>대표이사</span><strong>허서홍</strong></p>
                        <div class="img_wrap growth_sign">
                            <img :src="imgSign" width="151" height="56" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import imgVisual from "@/assets/images/dummy/gsrab01_02.png";
import imgPrepare1 from "@/assets/images/dummy/gsrab01_03.png";
import imgPrepare2 from "@/assets/images/dummy/gsrab01_04.png";
import imgPrepare3 from "@/assets/images/dummy/gsrab01_05.png";
import imgCeo from "@/assets/images/dummy/gsrab01_07.png";
import imgSign from "@/assets/images/dummy/gsrab01_08.svg";
</script>

<style scoped>
/* 공통 */
img { display: block; object-fit: cover; }
.inner { width: 1460px; max-width: 100%; margin: 0 auto; padding: 0 20px; }
.inner > header { width: 100%; }
.inner > header > h2 { margin: 0;  font-size: 4.8rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.48px; }
.inner > header > p { margin: 16px 0 0;font-size: 2.4rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.24px; }
.inner > header > p + p { margin: 16px 0 0; }
.visual { width: 100%; height: 100vh; padding: 0 250px; position: relative; display: flex; align-items: center; background-image: url("@/assets/images/dummy/gsrab01_01.png"); background-repeat: no-repeat; background-position: center; background-size: cover; }
.visual::before { width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 1; background-color: rgba(0, 0, 0, 0.2); content: ""; }
.visual > p { margin: 0; padding: 200px 0; position: relative; z-index: 2; color: #ffffff; font-size: 7.2rem; font-weight: 700; line-height: 1.24; letter-spacing: -1.44px; }
.about { width: 100%; padding: 200px 0; background-color: #ffffff; }
.about .inner header { text-align: center; }
.about .inner > .img_wrap { margin: 120px 0 0; overflow: hidden; }
.about .inner > .img_wrap img { width: 100%; max-width: 1180px; height: 640px; margin: 0 auto; border-radius: 12px; }
.prepare { width: 100%; padding: 100px 0 120px; background-color: #ffffff; }
.prepare .inner > .prepare_head { width: 100%; display: flex; flex-wrap: nowrap; gap: 12px; align-items: flex-start; justify-content: flex-start; }
.prepare .inner > .prepare_head > h2 { flex: 1 1 0; min-width: 0; margin: 0; font-size: 4.8rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.48px; text-align: left; }
.prepare .inner > .prepare_head > .prepare_body { flex: 1 1 0; min-width: 0; }
.prepare .inner > .prepare_head > .prepare_body > p { margin: 0; font-size: 2.4rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.24px; text-align: left; }
.prepare .inner > .prepare_head > .prepare_body > p + p { margin: 10px 0 0; }
.prepare .inner > .prepare_photos { width: 100%; margin: 140px 0 0; padding: 0; list-style: none; display: grid; grid-template-columns: 700fr 340fr 340fr; gap: 20px; min-height: 480px; box-sizing: border-box; }
.prepare .inner > .prepare_photos > li { margin: 0; padding: 0; }
.prepare .inner > .prepare_photos > li.prepare_photos_large > .img_wrap { width: 100%; height: 480px; border-radius: 12px; overflow: hidden; }
.prepare .inner > .prepare_photos > li.prepare_photos_large > .img_wrap img { width: 100%; height: 100%; }
.prepare .inner > .prepare_photos > li.prepare_photos_small { align-self: end; }
.prepare .inner > .prepare_photos > li.prepare_photos_small > .img_wrap { width: 100%; height: 233px; border-radius: 12px; overflow: hidden; }
.prepare .inner > .prepare_photos > li.prepare_photos_small > .img_wrap img { width: 100%; height: 100%; }
.growth { width: 100%; padding: 240px 0 160px; background-color: #ffffff; }
.growth .inner > .growth_row { width: 100%; display: flex; flex-wrap: nowrap; gap: 140px; align-items: flex-start; justify-content: center; }
.growth .inner > .growth_row > .growth_visual { width: 340px; max-width: 100%; flex-shrink: 0; }
.growth .inner > .growth_row > .growth_visual > .img_wrap { width: 340px; max-width: 100%; height: 453px; overflow: hidden; border-radius: 12px; }
.growth .inner > .growth_row > .growth_visual > .img_wrap img { width: 100%; height: 100%; object-fit: cover; }
.growth .inner > .growth_row > .growth_content { min-width: 0; }
.growth .inner > .growth_row > .growth_content > .growth_headlines > p { margin: 0; font-size: 5.6rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.56px; text-align: left; }
.growth .inner > .growth_row > .growth_content > .growth_headlines > p + p { margin: 20px 0 0; }
.growth .inner > .growth_row > .growth_content > .growth_body { margin: 64px 0 0; font-size: 2.4rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.24px; text-align: left; }
.growth .inner > .growth_row > .growth_content > .growth_sign_block { margin: 64px 0 0; }
.growth .inner > .growth_row > .growth_content > .growth_sign_block > .growth_role { margin: 0; display: flex; align-items: baseline; gap: 8px; font-size: 2rem; font-weight: 400; line-height: 1.35; letter-spacing: -0.2px; }
.growth .inner > .growth_row > .growth_content > .growth_sign_block > .growth_role strong { font-weight: 700; }
.growth .inner > .growth_row > .growth_content > .growth_sign_block > .img_wrap.growth_sign { margin: 16px 0 0; }
.growth .inner > .growth_row > .growth_content > .growth_sign_block > .img_wrap.growth_sign img { width: 151px; height: auto; max-width: 100%; object-fit: contain; }
.sustain { width: 100%; min-height: 1080px; padding: 200px 0; position: relative; box-sizing: border-box; background-color: #161616; background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("@/assets/images/dummy/gsrab01_06.png"); background-repeat: no-repeat; background-position: center; background-size: cover; }
.sustain .inner header { color:#fff; }
@media (max-width: 768px) {
    .visual { padding: 0 20px; }
    .visual > p { padding: 80px 0; font-size: 2.8rem; letter-spacing: -0.6px; }
    .about { padding: 80px 0 60px; }
    .about .inner > header > h2 { font-size: 2.8rem; }
    .about .inner > header > h2 + p { font-size: 1.6rem; }
    .about .inner > .img_wrap { margin-top: 24px; }
    .about .inner > .img_wrap img { height: clamp(220px, 54.4vw, 320px); }
    .prepare { padding: 80px 0 60px; }
    .prepare .inner > .prepare_head { flex-direction: column; flex-wrap: wrap; gap: 12px; }
    .prepare .inner > .prepare_head > h2 { flex: none; width: 100%; }
    .prepare .inner > .prepare_head > .prepare_body { flex: none; width: 100%; }
    .prepare .inner > .prepare_photos { margin-top: 48px; grid-template-columns: 1fr; min-height: 0; }
    .prepare .inner > .prepare_photos > li.prepare_photos_large > .img_wrap { height: clamp(220px, 54.4vw, 480px); }
    .prepare .inner > .prepare_photos > li.prepare_photos_small { align-self: stretch; }
    .prepare .inner > .prepare_photos > li.prepare_photos_small > .img_wrap { height: clamp(180px, 48vw, 233px); }
    .growth { padding: 80px 0; }
    .growth .inner > .growth_row { flex-direction: column; gap: 48px; }
    .growth .inner > .growth_row > .growth_visual { width: 100%; }
    .growth .inner > .growth_row > .growth_visual > .img_wrap { width: 100%; height: auto; aspect-ratio: 340 / 453; }
    .growth .inner > .growth_row > .growth_content > .growth_headlines > p { font-size: 2.8rem; }
    .growth .inner > .growth_row > .growth_content > .growth_body { margin-top: 32px; font-size: 1.6rem; }
    .growth .inner > .growth_row > .growth_content > .growth_sign_block { margin-top: 32px; }
    .growth .inner > .growth_row > .growth_content > .growth_sign_block > .growth_role { font-size: 1.6rem; }
    .sustain { min-height: auto; padding: 80px 0; }
    .sustain .inner > header > h2 { font-size: 2.8rem; }
    .sustain .inner > header > h2 + p { font-size: 1.6rem; }
}
</style>
