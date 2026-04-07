<template>
    <section class="sec_diff">
        <div class="inner">
            <GS25Nav :lang="props.lang" :active-depth1="0" :active-depth2="1" />

            <div class="diff_panel">
                <figure v-if="panel.hero" class="diff_hero">
                    <img :src="panel.hero" :alt="panel.heroAlt || ''" width="1420" height="340" />
                </figure>

                <header class="diff_title_block">
                    <h2>{{ panel.title }}</h2>
                    <p>{{ panel.subtitle }}</p>
                </header>

                <section
                    v-for="(sec, i) in panel.sections"
                    :key="i"
                    class="cafe25_sec"
                >
                    <header>
                        <h3>{{ sec.title }}</h3>
                        <p v-if="sec.desc">{{ sec.desc }}<cite v-if="sec.source" class="cafe25_sec_cite">{{ sec.source }}</cite></p>
                    </header>

                    <!-- 카드형 -->
                    <ul v-if="sec.type === 'cards'" class="cafe25_card_list" role="list">
                        <li v-for="(card, c) in sec.cards" :key="c">
                            <div>
                                <img :src="card.image" :alt="card.alt || ''"/>
                            </div>
                        </li>
                    </ul>

                    <!-- 이미지형 -->
                    <figure v-else-if="sec.type === 'image'" class="cafe25_img_wrap">
                        <img :src="sec.image" :alt="sec.imageAlt || ''" width="938" height="472" />
                    </figure>

                    <!-- 분할형 (이미지 + 테이블) -->
                    <div v-else-if="sec.type === 'split'" class="cafe25_split">
                        <div class="cafe25_split_img">
                            <img :src="sec.image" :alt="sec.imageAlt || ''" />
                        </div>
                        <div class="cafe25_split_table">
                            <table class="cafe25_table">
                                <thead>
                                    <tr>
                                        <th
                                            v-for="(col, ci) in sec.columns"
                                            :key="ci"
                                            scope="col"
                                            :style="{ width: col.width + 'px', textAlign: col.align }"
                                        >{{ col.label }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(row, ri) in sec.rows" :key="ri">
                                        <td v-for="(col, ci) in sec.columns" :key="ci" :style="{ textAlign: col.align }">{{ row[col.key] }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- 테이블형 -->
                    <div v-else-if="sec.type === 'table'" class="cafe25_table_wrap">
                        <table class="cafe25_table">
                            <thead>
                                <tr>
                                    <th
                                        v-for="(col, ci) in sec.columns"
                                        :key="ci"
                                        scope="col"
                                        :style="{ width: col.width + 'px', textAlign: col.align }"
                                    >{{ col.label }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, ri) in sec.rows" :key="ri">
                                    <td v-for="(col, ci) in sec.columns" :key="ci" :style="{ textAlign: col.align }">
                                        <img v-if="ci === 0 && row.flag" :src="row.flag" :alt="row.country" class="flag_icon" width="24" height="24" />{{ row[col.key] }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>

            <div class="diff_actions">
                <Buttons btn-class="btn_back" @click="goBack">{{ t.backLabel }}</Buttons>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { useRouter } from "vue-router";
import GS25Nav from "@/components/GS25Nav.vue";
import Buttons from "@/components/Buttons.vue";

import imgHero from "@/assets/images/dummy/differentiated_bg_02.png";
import imgCoffeeMachine01 from "@/assets/images/dummy/coffee_machine_01.png";
import imgCoffeeMachine02 from "@/assets/images/dummy/coffee_machine_02.png";
import imgCoffeeMachine03 from "@/assets/images/dummy/coffee_machine_03.png";
import imgFlagBrazil from "@/assets/images/dummy/img_flag_brazil.png";
import imgFlagGuatemala from "@/assets/images/dummy/img_flag_guatemala.png";
import imgFlagColombia from "@/assets/images/dummy/img_flag_colombia.png";
import imgFlagEthiopia from "@/assets/images/dummy/img_flag_ethiopia.png";
import imgFlagPapua from "@/assets/images/dummy/img_flag_papua.png";
import imgCafe25Graph from "@/assets/images/dummy/cafe25_graph.png";
import imgCafeMenu from "@/assets/images/dummy/cafe25_menu.png";

const props = defineProps({
    lang: { type: String, default: "ko" },
});

const router = useRouter();

const langData = {
    ko: {
        panel: {
            hero: imgHero,
            heroAlt: "",
            title: "CAFE25",
            subtitle: "최고급 커피머신과 스페셜티 블렌딩 원두를 사용하여 최상의 커피를 합리적인 가격으로 제공하는 GS25의 차별화 원두커피 전문 존입니다.",
            sections: [
                {
                    type: "cards",
                    title: "커피머신",
                    desc: "소비자가 1,300만원 상당의 스위스 명품 커피 머신 브랜드 프랑케 머신입니다.",
                    cards: [
                        { image: imgCoffeeMachine01, alt: "" },
                        { image: imgCoffeeMachine02, alt: "" },
                        { image: imgCoffeeMachine03, alt: "" },
                    ],
                },
                {
                    type: "table",
                    title: "원두",
                    desc: "국내 NO1. 로스터인 동서식품의 스페셜티 블렌딩 원두입니다. (브라질, 과테말라, 콜롬비아 등 최상위 원두 생산국의 원두 5종 블렌딩)",
                    columns: [
                        { key: "country", label: "원산지",  width: 200, align: "left" },
                        { key: "ratio",   label: "배합비",  width: 160, align: "center" },
                        { key: "process", label: "가공방식", width: 289, align: "center" },
                        { key: "feature", label: "원두특징", width: 289, align: "left" },
                    ],
                    rows: [
                        { flag: imgFlagBrazil,    country: "브라질",      ratio: "35%", process: "Natural", feature: "균형감 있는 향미" },
                        { flag: imgFlagGuatemala, country: "과테말라",     ratio: "30%", process: "Washed",  feature: "뛰어난 바디감" },
                        { flag: imgFlagColombia,  country: "콜롬비아",     ratio: "25%", process: "Washed",  feature: "견과류의 고소함" },
                        { flag: imgFlagEthiopia,  country: "에티오피아",   ratio: "5%",  process: "Washed",  feature: "밝고 경쾌한 산미" },
                        { flag: imgFlagPapua,     country: "파푸아뉴기니", ratio: "5%",  process: "Washed",  feature: "꽃과 허브의 향기" },
                    ],
                },
                {
                    type: "image",
                    title: "전문점 커피보다 맛이 뛰어난 CAFE25",
                    desc: "바리스타협회 평가 결과 커피 프랜차이즈 수준의 커피 맛이 입증되었습니다.",
                    source: "한국커피연합회 관능평가결과(23.05)",
                    image: imgCafe25Graph,
                    imageAlt: "커피 맛 비교 그래프 - GS25가 전문점 커피 수준임을 나타낸 바 차트",
                },
                {
                    type: "split",
                    title: "메뉴 소개",
                    image: imgCafeMenu,
                    imageAlt: "CAFE25 메뉴 이미지",
                    columns: [
                        { key: "menu",     label: "구분",           width: 260, align: "left" },
                        { key: "volume",   label: "1회 제공량(mL)", width: 220, align: "center" },
                        { key: "caffeine", label: "카페인 함량(mg)", width: 220, align: "center" },
                    ],
                    rows: [
                        { menu: "에스프레소",            volume: "35",  caffeine: "137" },
                        { menu: "카카오에스프레소",       volume: "43",  caffeine: "127" },
                        { menu: "아메리카노",             volume: "200", caffeine: "121" },
                        { menu: "아메리카노 큰컵",        volume: "245", caffeine: "132" },
                        { menu: "아이스아메리카노",       volume: "380", caffeine: "144" },
                        { menu: "아이스아메리카노 큰컵",  volume: "480", caffeine: "140" },
                        { menu: "아이스아메리카노 점보",  volume: "780", caffeine: "180" },
                    ],
                },
            ],
        },
        backLabel: "목록으로 돌아가기",
    },
    en: {
        panel: {
            hero: imgHero,
            heroAlt: "",
            title: "CAFE25",
            subtitle: "Specialty coffee zone with espresso-based drinks and seasonal beverages.",
            sections: [
                {
                    type: "cards",
                    title: "Coffee Machine",
                    desc: "The Franke machine is a Swiss premium coffee machine brand worth 13 million won.",
                    cards: [
                        { image: imgCoffeeMachine01, alt: "" },
                        { image: imgCoffeeMachine02, alt: "" },
                        { image: imgCoffeeMachine03, alt: "" },
                    ],
                },
                {
                    type: "table",
                    title: "Coffee Beans",
                    desc: "Specialty blended beans from Dongsuh Foods, Korea's No.1 roaster. (5 varieties from top producing countries including Brazil, Guatemala, and Colombia)",
                    columns: [
                        { key: "country", label: "Origin",         width: 200, align: "left" },
                        { key: "ratio",   label: "Blend ratio",    width: 160, align: "center" },
                        { key: "process", label: "Process",        width: 289, align: "center" },
                        { key: "feature", label: "Characteristics", width: 289, align: "left" },
                    ],
                    rows: [
                        { flag: imgFlagBrazil,    country: "Brazil",           ratio: "35%", process: "Natural", feature: "Balanced flavor" },
                        { flag: imgFlagGuatemala, country: "Guatemala",        ratio: "30%", process: "Washed",  feature: "Full body" },
                        { flag: imgFlagColombia,  country: "Colombia",         ratio: "25%", process: "Washed",  feature: "Nutty richness" },
                        { flag: imgFlagEthiopia,  country: "Ethiopia",         ratio: "5%",  process: "Washed",  feature: "Bright acidity" },
                        { flag: imgFlagPapua,     country: "Papua New Guinea", ratio: "5%",  process: "Washed",  feature: "Floral & herbal" },
                    ],
                },
                {
                    type: "image",
                    title: "CAFE25 beats specialty coffee shops",
                    desc: "Barista Association evaluation confirmed coffee franchise-level taste.",
                    source: "Korea Coffee Association sensory evaluation (23.05)",
                    image: imgCafe25Graph,
                    imageAlt: "Bar chart showing GS25 coffee quality vs competitors",
                },
                {
                    type: "split",
                    title: "Menu",
                    image: imgCafeMenu,
                    imageAlt: "CAFE25 menu image",
                    columns: [
                        { key: "menu",     label: "Category",        width: 260, align: "left" },
                        { key: "volume",   label: "Serving size(mL)", width: 220, align: "center" },
                        { key: "caffeine", label: "Caffeine(mg)",     width: 220, align: "center" },
                    ],
                    rows: [
                        { menu: "Espresso",              volume: "35",  caffeine: "137" },
                        { menu: "Cacao Espresso",        volume: "43",  caffeine: "127" },
                        { menu: "Americano",             volume: "200", caffeine: "121" },
                        { menu: "Americano Large",       volume: "245", caffeine: "132" },
                        { menu: "Iced Americano",        volume: "380", caffeine: "144" },
                        { menu: "Iced Americano Large",  volume: "480", caffeine: "140" },
                        { menu: "Iced Americano Jumbo",  volume: "780", caffeine: "180" },
                    ],
                },
            ],
        },
        backLabel: "Back to list",
    },
};

const t = computed(() => langData[props.lang] || langData.ko);
const panel = computed(() => t.value.panel);

function goBack() {
    if (window.history.length > 1) {
        router.back();
    } else {
        router.push("/");
    }
}
</script>

<style scoped>
.sec_diff {
    width: 100%;
}

.sec_diff > .inner {
    max-width: 1460px;
    margin: 0 auto;
    padding: 109px 20px 200px;
}

.diff_panel {
    padding-top: 40px;
    padding-bottom: 48px;
}

.diff_hero {
    margin: 0 0 40px;
    padding: 0;
    background-color: #fff;
    border-radius: 12px;
    overflow: hidden;
}

.diff_hero > img {
    width: 100%;
    height: auto;
    max-height: 340px;
    object-fit: cover;
    display: block;
}

.diff_title_block {
    margin: 0 0 100px;
}

.diff_title_block > h2 {
    margin: 0 0 16px;
    color: #161618;
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.01em;
}

.diff_title_block > p {
    margin: 0;
    color: #161618;
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

/* 1섹션 (커피머신 등 서브섹션) */
.cafe25_sec {
    padding-bottom: 120px;
}

.cafe25_sec > header {
    margin: 0 0 40px;
}

.cafe25_sec > header > h3 {
    margin: 0 0 12px;
    color: #161618;
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

.cafe25_sec > header > p {
    margin: 0;
    color: #161618;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.01em;
}

.cafe25_card_list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, calc((100% - 40px) / 3));
    gap: 20px;
}

.cafe25_card_list > li {
    min-width: 0;
    overflow: hidden;
}

.cafe25_card_list > li > div {
    width: 100%;
}

.cafe25_card_list > li > div > img {
    width: 100%;
    height: auto;
    display: block;
}

.cafe25_card {
    background-color: #f8f8f8;
    border-radius: 12px;
    overflow: hidden;
}

.cafe25_card > figure {
    margin: 0;
    padding: 0;
    background-color: #e8e8ec;
    aspect-ratio: 460 / 340;
    overflow: hidden;
}

.cafe25_card > figure > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.cafe25_card > div {
    min-height: 200px;
    padding: 32px;
}

.cafe25_card > div > h4 {
    margin: 0 0 12px;
    color: #161618;
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: -0.02em;
}

.cafe25_card > div > p {
    margin: 0;
    color: #67676f;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.02em;
}

/* 출처 인용 텍스트 */
.cafe25_sec > header > p > .cafe25_sec_cite {
    margin-left: 16px;
    color: #67676f;
    font-size: 1.4rem;
    font-weight: 500;
    font-style: normal;
    letter-spacing: -0.01em;
}

/* 이미지형 섹션 */
.cafe25_img_wrap {
    margin: 0;
    padding: 0;
    max-width: 938px;
    background-color: #f8f8f8;
    border-radius: 12px;
    overflow: hidden;
}

.cafe25_img_wrap > img {
    width: 100%;
    height: auto;
    display: block;
}

/* 분할형 섹션 (이미지 + 테이블) */
.cafe25_split {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}
.cafe25_split > div{
    width: calc(50% - 10px);
    min-width: 0;
}
.cafe25_split_img {
    overflow: hidden;
    padding:45px 75px;
    border-radius: 12px;
    background-color: #0E376B;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cafe25_split_img > img {
    width: 100%;
    height: auto;
    max-height: 358px;
    display: block;
}

.cafe25_split_table {
    overflow-x: auto;
}


/* 테이블형 섹션 */
.cafe25_table_wrap {
    overflow-x: auto;
}

.cafe25_table {
    border-collapse: collapse;
    table-layout: fixed;
}

.cafe25_table th,
.cafe25_table td {
    height: 56px;
    padding: 0 24px;
    color: #161618;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.01em;
    border-bottom: 1px solid #e5e5e9;
    vertical-align: middle;
    white-space: nowrap;
}

.cafe25_table th:first-child,
.cafe25_table td:first-child{
    border-left: 0;
}
.cafe25_table th:last-child,
.cafe25_table td:last-child{
    border-right: 0;
}
.cafe25_table th:first-child{
    border-radius: 10px 0 0 0;
}
.cafe25_table th:last-child{
    border-radius: 0 10px 0 0;
}

.cafe25_table th {
    font-weight: 600;
    background-color: #f8f8f8;
    border-top: 0;
}

.cafe25_table > tbody > tr > td > .flag_icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    border-radius: 50%;
    object-fit: cover;
    vertical-align: middle;
    display: inline-block;
}

.diff_actions {
    margin-top: 24px;
}

@media (max-width: 1024px) {
    .diff_title_block > h2 {
        font-size: 3.2rem;
    }

    .diff_title_block > p {
        font-size: 2rem;
    }

    .cafe25_card_list {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media (max-width: 768px) {
    .sec_diff > .inner {
        padding: 24px 20px 60px;
    }

    .diff_title_block > h2 {
        font-size: 2.6rem;
    }

    .diff_title_block > p {
        font-size: 1.8rem;
    }

    .cafe25_sec > header > h3 {
        font-size: 2.2rem;
    }

    .cafe25_card_list {
        grid-template-columns: minmax(0, 1fr);
    }

    .cafe25_split {
        flex-direction: column;
    }
    .cafe25_split > div{
        width: 100%;
    }
    .cafe25_card > div {
        min-height: 0;
        padding: 24px;
    }

    .cafe25_card > div > h4 {
        font-size: 2rem;
    }
}
</style>
