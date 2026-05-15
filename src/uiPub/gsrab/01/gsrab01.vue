<template>
    <section class="visual top_visual">
        <strong>더 나은 일상을 만드는 기업,<br />항상 고객과 함께하는<br />GS리테일이 되겠습니다.</strong>
    </section>
    <section class="about">
        <div class="inner">
            <header class="header">
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
            <header class="header">
                <h2>GS리테일은 고객 감동을 위해<br />한 걸음 먼저 준비합니다.</h2>
                <div>
                    <p>GS리테일은 1971년 창업 이래 고객 감동을 최우선으로<br class="p_br"/>최고의 상품과 서비스를 제공하고 있습니다.</p>
                    <p>고객의 삶을 더욱 편리하고 가치 있게 만들기 위해 한 걸음 더 움직이고<br class="p_br"/>한 걸음 먼저 준비하겠습니다.</p>
                </div>
            </header>
            <ul class="prepare_photos">
                <li>
                    <div class="img_wrap">
                        <img :src="imgPrepare1" width="700" height="480" alt="" />
                    </div>
                </li>
                <li>
                    <div class="img_wrap">
                        <img :src="imgPrepare2" width="340" height="233" alt="" />
                    </div>
                </li>
                <li>
                    <div class="img_wrap">
                        <img :src="imgPrepare3" width="340" height="233" alt="" />
                    </div>
                </li>
            </ul>
        </div>
    </section>
    <section class="sustain">
        <div class="inner">
            <header class="header">
                <h2>GS리테일은 지속 가능 경영을<br />적극 실천하고 있습니다.</h2>
                <p>GS리테일은 친환경 상품을 확대하고 자원 순환 활성화를 통해<br class="p_br"/>환경 경영을 실천하고 있습니다.</p>
                <p>또한 경영주·임직원·파트너사·지역사회와 함께 성장하기 위해<br class="p_br"/>다양한 제도와 정책을 운영하고 있습니다.<br class="m_br"/>지속 가능한 미래를 위해<br class="p_br"/>ESG 경영을 적극 실천하며<br class="m_br"/>신뢰받는 기업이 되겠습니다.</p>
            </header>
        </div>
    </section>
    <section class="growth">
        <div class="inner">
            <div class="growth_row">
                <aside class="growth_visual">
                    <div class="img_wrap">
                        <img :src="imgCeo" width="340" height="453" alt="" />
                    </div>
                </aside>
                <div class="growth_content">
                    <div>
                        <p>GS리테일은</p>
                        <p>고객과 함께 성장하며</p>
                        <p>더 나은 미래를<br />만들어가겠습니다.</p>
                    </div>
                    <p>
                        항상 고객의 목소리에 귀 기울이고, <br class="m_br"/>혁신을 통해 가치를 창출하며,<br />사회적 책임을 다하는 기업으로 함께하겠습니다.
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
:deep(.p_br) { display: block; }
:deep(.m_br) { display: none; }
img { width: 100%; height: auto; object-fit: cover;display: block; }
.inner { width: 1460px; max-width: 100%; margin: 0 auto; padding: 0 20px; }
.inner > .header h2 { margin: 0; font-size: 4.8rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.inner > .header p { margin: 16px 0 0; font-size: 2.4rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.visual { width: 100%; min-height:100vh; padding: 0 clamp(20px, 5vw, 80px) 0 clamp(20px, 13vw, 250px); position: relative; display: flex; align-items: center; background-image: url("@/assets/images/dummy/gsrab01_01.png"); background-repeat: no-repeat; background-position: center; background-size: cover; }
.visual > strong { margin: 0; padding: 200px 0; position: relative; z-index: 2; color: #ffffff; font-size: clamp(3.2rem, 2.4rem + 2.5vw, 7.2rem); font-weight: 700; line-height: 1.24; letter-spacing: -0.02em; }
.about { padding: 200px 0; background-color: #ffffff; }
.about .inner > .header { text-align: center; }
.about .inner > .img_wrap { margin: 120px 0 0; overflow: hidden; }
.about .inner > .img_wrap img { width: 100%; max-width: 1180px; height: 640px; margin: 0 auto; border-radius: 12px; }
.prepare { padding: 100px 0 200px; background-color: #ffffff; }
.prepare .inner > .header { display: flex; flex-wrap: wrap; gap: 12px; align-items: flex-start; justify-content: space-between;}
.prepare .inner > .header > h2 { margin: 0; text-align: left; }
.prepare .inner > .header > div { min-width: 0; }
.prepare .inner > .header > div > p + p { margin: 10px 0 0; }
.prepare .inner > .prepare_photos { margin: 140px 0 0; padding: 0; list-style: none; display: grid; grid-template-columns: 700fr 340fr 340fr; gap: 20px; }
.prepare .inner > .prepare_photos > li { margin: 0; padding: 0; }
.prepare .inner > .prepare_photos > li:first-child > .img_wrap { width: 100%; aspect-ratio: 700 / 480; border-radius: 12px; overflow: hidden; }
.prepare .inner > .prepare_photos > li:first-child > .img_wrap img { width: 100%; height: 100%; }
.prepare .inner > .prepare_photos > li:not(:first-child) { align-self: end; }
.prepare .inner > .prepare_photos > li:not(:first-child) > .img_wrap { width: 100%; aspect-ratio: 340 / 233; border-radius: 12px; overflow: hidden; }
.prepare .inner > .prepare_photos > li:not(:first-child) > .img_wrap img { width: 100%; height: 100%; }
.sustain { min-height:100vh; padding: 200px 0; position: relative; background-color: #161616; background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("@/assets/images/dummy/gsrab01_06.png"); background-repeat: no-repeat; background-position: center; background-size: cover; }
.sustain .inner > .header { color: #ffffff; }
.sustain .inner > .header p + p { margin: 16px 0 0; }
.growth { padding: 240px 0 210px; background-color: #ffffff; }
.growth .inner > .growth_row { display: flex; flex-wrap: wrap; gap: 140px; align-items: flex-start; justify-content: center; }
.growth .inner > .growth_row > .growth_visual { width: 340px; max-width: 100%; flex-shrink: 0; }
.growth .inner > .growth_row > .growth_visual > .img_wrap { width: 340px; height: 453px; overflow: hidden; border-radius: 12px; }
.growth .inner > .growth_row > .growth_visual > .img_wrap img { width: 100%; height: 100%; }
.growth .inner > .growth_row > .growth_content { min-width: 0; }
.growth .inner > .growth_row > .growth_content > div:first-of-type > p { margin: 0; font-size: 5.6rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.56px; text-align: left; }
.growth .inner > .growth_row > .growth_content > div:first-of-type > p + p { margin: 20px 0 0; }
.growth .inner > .growth_row > .growth_content > div:first-of-type + p { margin: 64px 0 0; font-size: 2.4rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; text-align: left; }
.growth .inner > .growth_row > .growth_content > .growth_sign_block { margin: 64px 0 0; }
.growth .inner > .growth_row > .growth_content > .growth_sign_block > .growth_role { margin: 0; display: flex; align-items: baseline; gap: 8px; font-size: 2rem; font-weight: 400; line-height: 1.35; letter-spacing: -0.01em; }
.growth .inner > .growth_row > .growth_content > .growth_sign_block > .growth_role strong { font-weight: 700; }
.growth .inner > .growth_row > .growth_content > .growth_sign_block > .img_wrap.growth_sign { margin: 16px 0 0; }
.growth .inner > .growth_row > .growth_content > .growth_sign_block > .img_wrap.growth_sign img { width: 151px; height: auto; max-width: 100%; object-fit: contain; }
@media (max-width: 768px) {
    :deep(.p_br) { display: none; }
    :deep(.m_br) { display: block; }
    .inner { width: 100%; padding: 0 20px; }
    .visual { min-height: 100dvh;padding: 337px 0 297px;background-image: url("@/assets/images/dummy/mo/gsrab01_01_mo.png");}
    .visual > strong { width: 100%; margin: 0 auto; padding: 0; text-align: center; font-size: 3.2rem; line-height: 1.3; letter-spacing: -0.32px; }
    .inner > .header h2 {font-size: 2.4rem;line-height: 1.35;}
    .inner > .header p { margin: 12px 0 0; font-size: 1.6rem;line-height: 1.5;}
    .inner > .img_wrap { margin-top: 40px; }
    .about { padding: 140px 0; background-color: #F8F8F8 }
    .about .inner > .img_wrap { margin-top: 40px; }
    .about .inner > .img_wrap img {max-height: 380px;}
    .prepare { padding: 100px 0; }
    .prepare .inner > .header { flex-direction: column; gap:0;}
    .prepare .inner > .header > h2 { flex: none; width: 100%; } 
    .prepare .inner > .header > div { flex: none; width: 100%; }
    .prepare .inner > .header > div > p + p{margin:0;}
    .prepare .inner > .prepare_photos { margin-top: 20px; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; min-height: 0; }
    .prepare .inner > .prepare_photos > li:first-child { grid-column: 1 / -1; }
    .prepare .inner > .prepare_photos > li:first-child > .img_wrap { aspect-ratio: 335 / 480; }
    .prepare .inner > .prepare_photos > li:not(:first-child) { align-self: stretch; }
    .prepare .inner > .prepare_photos > li:not(:first-child) > .img_wrap { aspect-ratio: 157.5 / 130; }
    .sustain { padding: 200px 0 320px; }
    .growth { padding: 100px 0 190px; }
    .growth .inner > .growth_row { flex-direction: column; gap: 40px; }
    .growth .inner > .growth_row > .growth_visual { width: 100%; }
    .growth .inner > .growth_row > .growth_visual > .img_wrap { width: 260px; height: auto; margin:0 auto; aspect-ratio: 260 / 346; }
    .growth .inner > .growth_row > .growth_content > div:first-of-type > p { font-size: 2.8rem; line-height: 1.35; }
    .growth .inner > .growth_row > .growth_content > div:first-of-type + p { margin-top: 40px; font-size: 1.6rem; }
    .growth .inner > .growth_row > .growth_content > div:first-of-type > p + p { margin: 0; }
    .growth .inner > .growth_row > .growth_content > .growth_sign_block { margin-top: 40px; }
    .growth .inner > .growth_row > .growth_content > .growth_sign_block > .growth_role { font-size: 2rem;  }
}
</style>
