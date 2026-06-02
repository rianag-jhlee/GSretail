<script setup>
import mainImg01 from "@/assets/images/dummy/gsrst_smain_01.png";
import mainImg02 from "@/assets/images/dummy/gsrst_smain_02.jpg";
import Buttons from "@/components/Buttons.vue";

const cards = [
    {
        img: mainImg01,
        cls: "gs25",
        badgeColor: "rgba(16, 122, 242, 0.9)",
        title:
            "<span class=\"franchise_card_title_point\">GS25</span>와 함께<br />새로운 시작을 응원합니다.",
        link: "/gsrst02010101",
    },
    {
        img: mainImg02,
        cls: "fresh",
        badgeColor: "rgba(21, 184, 116, 0.9)",
        title:
            "<span class=\"franchise_card_title_point\">GS THE FRESH</span>와 함께<br />새로운 시작을 응원합니다.",
        link: "/gsrst01010101",
    },
];
</script>

<template>
    <section class="sec_franchise">
        <div class="sec_inner">
            <header class="sec_franchise_head">
                <h2>창업안내</h2>
                <p>
                    더 나은 미래를 향한 동행,<br class="m_br" />
                    GS리테일이 당신의 성공 창업을 응원합니다.
                </p>
            </header>

            <ul class="franchise_list">
                <li v-for="(card, i) in cards" :key="card.cls + '-' + i">
                    <article
                        class="franchise_card"
                        :class="card.cls"
                        :style="{ backgroundImage: `url(${card.img})` }"
                    >
                        <div class="franchise_card_body">
                            <strong v-html="card.title" />
                        </div>
                        <Buttons
                            tag="a"
                            :href="card.link"
                            btn-class="btn_icon_arrow btn_xl after"
                        >
                            바로가기
                        </Buttons>
                    </article>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
:deep(.m_br) { display: none; }
.sec_franchise { padding: 120px 0 0; }
.sec_inner { max-width: 1460px; margin: 0 auto; padding: 0 20px; }
.sec_franchise_head { margin-bottom: 80px; text-align: center; }
.sec_franchise_head > h2 { color: #000; font-size: 6.4rem; font-weight: 700; line-height: 1.24; letter-spacing: -0.02em; }
.sec_franchise_head > p { margin-top: 8px; color: #000; font-size: 2.4rem; font-weight: 600; line-height: 1.3; letter-spacing: -0.02em; }
.franchise_list { width: 100%;; margin: 0 auto; display: flex; align-items: stretch; gap: 20px; }
.franchise_list > li { display: flex; flex: 1 1 0; min-width: 0; max-width: 700px; flex-direction: column; }
.franchise_card { width: 100%; aspect-ratio: 700 / 540; max-height: none; padding: 0; background-size: cover; background-position: center; border-radius: 12px; position: relative; overflow: hidden; flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: clamp(2.8rem, 2.6vw, 5rem); }
.franchise_card.gs25 :deep(.franchise_card_title_point) { color: #9fcafa; }
.franchise_card.fresh :deep(.franchise_card_title_point) { color: #9de2c5; }
.franchise_card_body { width: calc(100% - clamp(20px, 3.13vw, 60px)); max-width: clamp(280px, 33.33vw, 640px); padding: clamp(10px, 1.15vw, 22px) 0; text-align: center; position: relative; z-index: 1; }
.franchise_card_body > strong { color: #fff; font-size: clamp(2.4rem, 2.5vw, 4.8rem); font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; word-break: keep-all; overflow-wrap: break-word; display: block; }
.franchise_card_body > p { margin-top: 4px; color: #fff; font-size: clamp(1.4rem, 1.04vw, 2rem); line-height: 1.35; letter-spacing: -0.01em; }
.franchise_card :deep(a) { margin-top: 0; height: clamp(44px, 3.33vw, 64px); padding: 0 clamp(16px, 1.67vw, 32px); color: #161616; font-size: clamp(1.4rem, 0.94vw, 1.8rem); font-weight: 700; background-color: #f2f2f4; border-radius: clamp(8px, 0.52vw, 10px); position: relative; z-index: 1; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; flex-shrink: 0; }
.franchise_card :deep(a)::after { width: clamp(12px, 0.83vw, 16px); height: clamp(12px, 0.83vw, 16px); }
@media (max-width: 1024px) {
    .sec_franchise_head { margin-bottom: clamp(48px, 7.81vw, 80px); }
    .sec_franchise_head > h2 { font-size: clamp(4.8rem, 6.25vw, 6.4rem); }
    .sec_franchise_head > p { font-size: clamp(2rem, 2.34vw, 2.4rem); }
}
@media (max-width: 768px) {
    :deep(.m_br) { display: block; }
    .sec_franchise { padding: 60px 0 0; overflow-x: hidden; }
    .sec_inner { padding: 0 20px; }
    .sec_franchise_head {margin-bottom:40px; padding: 0;  }
    .sec_franchise_head > h2 { display: none; }
    .sec_franchise_head > p { margin-top: 0; color: #161616; font-size: 2.8rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
    .franchise_list { flex-direction: column; align-items: stretch; gap: clamp(16px, 5.33vw, 20px); }
    .franchise_list > li { flex: 0 0 auto; width: 100%; min-width: 0; max-width: none; }
    .franchise_card { padding: clamp(48px, 16vw, 60px) clamp(16px, 5.33vw, 20px); height: clamp(240px, 76.27vw, 286px); gap: clamp(32px, 12.27vw, 46px); border-radius: 12px; justify-content: flex-start; align-items: center; background-color: #d9d9d9; flex: none; }
    .franchise_card.fresh { height: clamp(220px, 70.93vw, 266px); }
    .franchise_card_body { width: 100%; max-width: clamp(260px, 78.67vw, 295px); padding: 0; }
    .franchise_card_body > strong { font-size: clamp(2.4rem, 7.47vw, 2.8rem); line-height: 1.35; letter-spacing: -0.01em; }
    .franchise_card_body > p { margin-top: 4px; font-size: clamp(1.4rem, 4.27vw, 1.6rem); line-height: 1.5; letter-spacing: -0.01em; }
    .franchise_card :deep(a) { height: clamp(40px, 11.73vw, 44px); margin-top: 0; padding: 0 clamp(12px, 4.27vw, 16px); font-size: clamp(1.4rem, 4.27vw, 1.6rem); font-weight: 400; background-color: #f2f2f4; border-radius: clamp(6px, 2.13vw, 8px); flex-shrink: 0; }
    .franchise_card :deep(a)::after { width: clamp(12px, 4.27vw, 16px); height: clamp(12px, 4.27vw, 16px); } 
}
</style>
