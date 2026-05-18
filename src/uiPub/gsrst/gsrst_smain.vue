<script setup>
import mainImg01 from "@/assets/images/dummy/gsrst_smain_01.png";
import mainImg02 from "@/assets/images/dummy/gsrst_smain_02.png";
import Buttons from "@/components/Buttons.vue";

const cards = [
    {
        img: mainImg01,
        cls: "gs25",
        badge: "새로운 시작을 응원합니다",
        badgeColor: "rgba(16, 122, 242, 0.9)",
        title:
            "당신의 꿈을 현실로,<br><span class=\"franchise_card_title_point\">GS25</span>가 함께 걷겠습니다",
        desc:
            "혼자가 아닙니다.<br class=\"m_br\" />GS25가 여러분의 든든한 파트너가 되어<br /> 성공 창업의 첫걸음부터 끝까지<br class=\"m_br\" />함께하겠습니다",
        link: "/gsrst02010101",
    },
    {
        img: mainImg02,
        cls: "fresh",
        badge: "신선한 시작을 응원합니다",
        badgeColor: "rgba(21, 184, 116, 0.9)",
        title:
            "신선함과 함께,<br><span class=\"franchise_card_title_point\">GS THE FRESH</span>가 함께 성장합니다",
        desc: "프리미엄 신선식품 전문 슈퍼마켓으로<br>고객에게 최상의 가치를 전달하는 사업 파트너가 되어드립니다",
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
                        <span class="franchise_card_badge" :style="{ backgroundColor: card.badgeColor }">
                            {{ card.badge }}
                        </span>
                        <div class="franchise_card_body">
                            <strong v-html="card.title" />
                            <p v-html="card.desc" />
                        </div>
                        <Buttons
                            tag="a"
                            :href="card.link"
                            btn-class="btn_icon btn_xl after"
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
.sec_franchise { padding: 120px 0 200px; }
.sec_inner { max-width: 1460px; margin: 0 auto; padding: 0 20px; }
.sec_franchise_head { margin-bottom: 80px; text-align: center; }
.sec_franchise_head > h2 { color: #000; font-size: 6.4rem; font-weight: 700; line-height: 1.24; letter-spacing: -0.02em; }
.sec_franchise_head > p { margin-top: 8px; color: #000; font-size: 2.4rem; font-weight: 600; line-height: 1.3; letter-spacing: -0.02em; }
.franchise_list { display: flex; align-items: stretch; gap: 20px; }
.franchise_list > li { display: flex; flex: 1 1 0; min-width: 0; flex-direction: column; }
.franchise_card { width: 100%; flex: 1; min-height: 540px; padding: 99px 0 82px; background-color: #d9d9d9; background-size: cover; background-position: center; border-radius: 12px; position: relative; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; box-sizing: border-box; }
.franchise_card::before { width: 100%; height: 100%; content: ""; position: absolute; top: 0; left: 0; }
.franchise_card.fresh { background-position: -213px 0; }
.franchise_card.fresh::before { background-color: rgba(0, 0, 0, 0.2); }
.franchise_card.gs25 :deep(.franchise_card_title_point) { color: #9fcafa; }
.franchise_card.fresh :deep(.franchise_card_title_point) { color: #9de2c5; }
.franchise_card_badge { height: 53px; margin-bottom: 50px; padding: 0 20px; color: #fff; font-size: 1.8rem; border-radius: 999px; position: relative; display: flex; align-items: center; white-space: nowrap; }
.franchise_card_body { padding: 0 40px; text-align: center; position: relative; }
.franchise_card_body > strong { color: #fff; font-size: 3.2rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; display: block; }
.franchise_card_body > p { margin-top: 4px; color: #fff; font-size: 2rem; line-height: 1.35; letter-spacing: -0.01em; }
.franchise_card :deep(a) { margin-top: auto; padding: 0 24px; color: #161616; font-size: 1.8rem; font-weight: 700; background-color: #f2f2f4; border-radius: 10px; position: relative; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; }
.franchise_card :deep(a)::after { width: 16px; height: 16px; }

@media (min-width: 769px) {
    .franchise_card { padding: 5.16vw 0 4.27vw; }
}

@media (max-width: 768px) {
    :deep(.m_br) { display: block; }
    .sec_franchise { padding: 60px 0; overflow-x: hidden; }
    .sec_inner { padding: 0 20px; }
    .sec_franchise_head { padding: 0; text-align: left; }
    .sec_franchise_head > h2 { display: none; }
    .sec_franchise_head > p { margin-top: 0; color: #161616; font-size: 2.8rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
    .franchise_list { flex-direction: column; align-items: stretch; gap: 20px; }
    .franchise_list > li { flex: 0 0 auto; width: 100%; min-width: 0; }
    .franchise_card { flex: 0 0 440px; min-height: unset; height: 440px; padding: 71px 0 53px; border-radius: 12px; }
    .franchise_card_badge { height: 48px; margin-bottom: 30px; padding: 14px 20px; font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .franchise_card_body { margin-bottom: 30px; padding: 0 40px; }
    .franchise_card_body > strong { font-size: 2.4rem; line-height: 1.35; letter-spacing: -0.01em; }
    .franchise_card_body > p { margin-top: 4px; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .franchise_card :deep(a) { height: 44px; margin-top: 0; font-size: 1.6rem; font-weight: 400; border-radius: 8px; }
}
</style>
