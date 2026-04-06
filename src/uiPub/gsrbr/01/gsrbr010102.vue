<template>
    <section class="sec_diff">
        <div class="inner">
            <Tabs
                v-model="depth1Idx"
                tab-class="type_01"
                :tab-items="depth1Tabs"
                :tab-slide="false"
                @change="onDepth1Change"
            />

            <div v-show="depth1Idx === 0" class="diff_body">
                <Tabs
                    v-model="depth2Idx"
                    tab-class="type_02"
                    :tab-items="depth2Tabs"
                    :tab-slide="false"
                />

                <div
                    v-for="(panel, idx) in t.diffPanels"
                    v-show="depth2Idx === idx"
                    :key="'diff-' + idx"
                    class="diff_panel"
                >
                    <figure v-if="panel.hero" class="diff_hero">
                        <img :src="panel.hero" :alt="panel.heroAlt || ''" width="1420" height="340" />
                    </figure>

                    <header class="diff_title_block">
                        <h2>{{ panel.title }}</h2>
                        <p>{{ panel.subtitle }}</p>
                    </header>

                    <ul v-if="panel.cards && panel.cards.length" class="diff_card_grid" role="list">
                        <li v-for="(card, c) in panel.cards" :key="c">
                            <article class="diff_card">
                                <figure>
                                    <img :src="card.image" :alt="card.alt || ''" width="460" height="320" />
                                </figure>
                                <div>
                                    <h3>{{ card.title }}</h3>
                                    <p>{{ card.desc }}</p>
                                </div>
                            </article>
                        </li>
                    </ul>

                    <div v-if="panel.qr" class="diff_qr_row">
                        <figure aria-hidden="true">
                            <img src="@/assets/images/dummy/qr-app-download.svg" alt="앱 다운로드 QR코드" width="74" height="74" />
                        </figure>
                        <div>
                            <p>{{ panel.qr.title }}</p>
                            <p v-html="panel.qr.desc"></p>
                        </div>
                    </div>
                </div>
            </div>

            <div v-show="depth1Idx > 0" class="diff_placeholder">
                <p>{{ placeholderText }}</p>
            </div>

            <div class="diff_actions">
                <Buttons btn-class="btn_back" @click="goBack">{{ t.backLabel }}</Buttons>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, defineProps, ref } from "vue";
import { useRouter } from "vue-router";
import Tabs from "@/components/Tabs.vue";
import Buttons from "@/components/Buttons.vue";

import imgHero from "@/assets/images/dummy/differentiated_bg_01.png";
import imgCard1 from "@/assets/images/dummy/differentiated_product_01.png";
import imgCard2 from "@/assets/images/dummy/differentiated_product_02.png";

const props = defineProps({
    lang: { type: String, default: "ko" },
});

const router = useRouter();

const langData = {
    ko: {
        depth1: [
            { item: "차별화 상품/서비스" },
            { item: "신선강화점" },
            { item: "매장/서비스" },
            { item: "상생협력" },
            { item: "밀박스/스낵바" },
        ],
        depth2: [
            { item: "차별화 상품" },
            { item: "CAFE25" },
            { item: "치킨25" },
            { item: "고피자" },
        ],
        diffPanels: [
            {
                hero: imgHero,
                heroAlt: "",
                title: "차별화 상품",
                subtitle: "최고급 커피머신과 스페셜티 블렌딩 원두를 사용하여 최상의 커피를 합리적인 가격으로 제공하는 GS25의 차별화 원두커피",
                cards: [
                    {
                        image: imgCard1,
                        alt: "",
                        title: "김혜자 도시락",
                        desc: "정성 가득한 한끼를 위한 프리미엄 도시락 라인으로, 높은 고객 만족도를 자랑하는 GS25 대표 차별화 상품입니다.",
                    },
                    {
                        image: imgCard2,
                        alt: "",
                        title: "넷플릭스 시리즈",
                        desc: "넷플릭스 인기 콘텐츠와 협업한 GS25 단독 콜라보 상품 시리즈로, 트렌디한 소비 경험을 제공합니다.",
                    },
                ],
                qr: {
                    title: "우리동네GS 앱 다운로드",
                    desc: "우리동네GS 앱을 다운로드하고, GS25의 다양한 이벤트와 차별화 상품을 만나보세요.<br />QR코드를 스캔하면 앱 다운로드 페이지로 이동합니다.",
                },
            },
            {
                hero: "",
                heroAlt: "",
                title: "CAFE25",
                subtitle: "최고급 커피머신과 스페셜티 블렌딩 원두를 사용하여 최상의 커피를 합리적인 가격으로 제공하는 GS25의 차별화 원두커피 전문 존입니다.",
                cards: [
                    {
                        image: "",
                        alt: "",
                        title: "스페셜티 블렌드",
                        desc: "매장에서 직접 추출하는 에스프레소 기반 메뉴와 시즌 한정 음료로 차별화된 카페 경험을 제공합니다.",
                    },
                    {
                        image: imgCard1,
                        alt: "",
                        title: "디저트 페어링",
                        desc: "커피와 어울리는 디저트·베이커리 연계로 한 번의 방문에 완성되는 간식 타임을 제안합니다.",
                    },
                ],
                qr: {
                    title: "우리동네GS 앱 다운로드",
                    desc: "우리동네GS 앱을 다운로드하고, GS25의 다양한 이벤트와 차별화 상품을 만나보세요. QR코드를 스캔하면 앱 다운로드 페이지로 이동합니다.",
                },
            },
            {
                hero: imgHero,
                heroAlt: "",
                title: "치킨25",
                subtitle: "바삭한 식감과 다양한 소스로 즐기는 GS25 대표 치킨 브랜드 영역입니다.",
                cards: [
                    {
                        image: imgCard2,
                        alt: "",
                        title: "시그니처 메뉴",
                        desc: "인기 메뉴와 시즌 한정 구성으로 매장별 트렌드를 반영합니다.",
                    },
                    {
                        image: imgCard1,
                        alt: "",
                        title: "간편 즐기기",
                        desc: "포장·배달 수요에 맞춘 패키징과 안내로 편의를 높였습니다.",
                    },
                ],
                qr: {
                    title: "우리동네GS 앱 다운로드",
                    desc: "우리동네GS 앱을 다운로드하고, GS25의 다양한 이벤트와 차별화 상품을 만나보세요. QR코드를 스캔하면 앱 다운로드 페이지로 이동합니다.",
                },
            },
            {
                hero: imgHero,
                heroAlt: "",
                title: "고피자",
                subtitle: "간편하게 즐기는 피자 라인으로, 품질과 가격의 균형을 맞춘 상품을 소개합니다.",
                cards: [
                    {
                        image: imgCard2,
                        alt: "",
                        title: "다양한 라인업",
                        desc: "클래식부터 인기 토핑까지 선택 폭을 넓혀 고객 취향을 만족시킵니다.",
                    },
                    {
                        image: "",
                        alt: "",
                        title: "빠른 픽업",
                        desc: "매장 픽업 동선과 조리 안내를 통해 대기 시간을 줄였습니다.",
                    },
                ],
                qr: {
                    title: "우리동네GS 앱 다운로드",
                    desc: "우리동네GS 앱을 다운로드하고, GS25의 다양한 이벤트와 차별화 상품을 만나보세요. QR코드를 스캔하면 앱 다운로드 페이지로 이동합니다.",
                },
            },
        ],
        placeholderSuffix: "영역 콘텐츠는 추후 연결 예정입니다.",
        backLabel: "목록으로 돌아가기",
    },
    en: {
        depth1: [
            { item: "Products & Services" },
            { item: "Fresh focus stores" },
            { item: "Store / Services" },
            { item: "Win-win partnership" },
            { item: "Mealbox / Snack bar" },
        ],
        depth2: [
            { item: "Differentiated products" },
            { item: "CAFE25" },
            { item: "Chicken25" },
            { item: "Go Pizza" },
        ],
        diffPanels: [
            {
                hero: imgHero,
                heroAlt: "",
                title: "Differentiated products",
                subtitle: "GS25 specialty coffee with premium machines and blended beans at a reasonable price.",
                cards: [
                    {
                        image: imgCard1,
                        alt: "",
                        title: "Kim Hye-ja lunchbox",
                        desc: "A premium lunchbox line for a hearty meal—one of GS25's signature differentiated products.",
                    },
                    {
                        image: imgCard2,
                        alt: "",
                        title: "Netflix series",
                        desc: "Exclusive GS25 collabs with popular Netflix IP for a trendy experience.",
                    },
                ],
                qr: {
                    title: "Download Wooridongne GS app",
                    desc: "Download the app for events and differentiated products. Scan the QR code to open the store page.",
                },
            },
            {
                hero: "",
                heroAlt: "",
                title: "CAFE25",
                subtitle: "Specialty coffee zone with espresso-based drinks and seasonal beverages.",
                cards: [
                    {
                        image: "",
                        alt: "",
                        title: "Specialty blend",
                        desc: "In-store espresso and limited drinks for a differentiated cafe experience.",
                    },
                    {
                        image: imgCard1,
                        alt: "",
                        title: "Dessert pairing",
                        desc: "Bakery and desserts paired with coffee for a complete snack visit.",
                    },
                ],
                qr: {
                    title: "Download Wooridongne GS app",
                    desc: "Download the app for events and differentiated products. Scan the QR code to open the store page.",
                },
            },
            {
                hero: imgHero,
                heroAlt: "",
                title: "Chicken25",
                subtitle: "GS25 chicken with crisp texture and varied sauces.",
                cards: [
                    {
                        image: imgCard2,
                        alt: "",
                        title: "Signature menu",
                        desc: "Popular picks and seasonal sets reflecting local trends.",
                    },
                    {
                        image: imgCard1,
                        alt: "",
                        title: "Easy to go",
                        desc: "Packaging and guidance tailored for takeout and delivery.",
                    },
                ],
                qr: {
                    title: "Download Wooridongne GS app",
                    desc: "Download the app for events and differentiated products. Scan the QR code to open the store page.",
                },
            },
            {
                hero: imgHero,
                heroAlt: "",
                title: "Go Pizza",
                subtitle: "Easy pizza line balancing quality and price.",
                cards: [
                    {
                        image: imgCard2,
                        alt: "",
                        title: "Wide lineup",
                        desc: "From classics to popular toppings for every taste.",
                    },
                    {
                        image: "",
                        alt: "",
                        title: "Quick pickup",
                        desc: "Pickup flow and prep guidance to reduce wait time.",
                    },
                ],
                qr: {
                    title: "Download Wooridongne GS app",
                    desc: "Download the app for events and differentiated products. Scan the QR code to open the store page.",
                },
            },
        ],
        placeholderSuffix: "will be linked soon.",
        backLabel: "Back to list",
    },
};

const t = computed(() => langData[props.lang] || langData.ko);

const depth1Idx = ref(0);
const depth2Idx = ref(0);

const depth1Tabs = computed(() => t.value.depth1);
const depth2Tabs = computed(() => t.value.depth2);

const placeholderText = computed(() => {
    const item = depth1Tabs.value[depth1Idx.value]?.item || "";
    return `«${item}» ${t.value.placeholderSuffix}`;
});

function onDepth1Change() {
    depth2Idx.value = 0;
}

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
    box-sizing: border-box;
}

.sec_diff > .inner {
    max-width: 1460px;
    margin: 0 auto;
    padding: 109px 20px 200px;
    box-sizing: border-box;
}

.sec_diff > .inner > .tab_wrap:first-child {
    margin-bottom: 0;
}

.diff_body > .tab_wrap {
    margin-top: 24px;
    margin-bottom: 24px;
}

.diff_panel {
    padding-top: 40px;
    padding-bottom: 48px;
}

.diff_hero {
    margin: 0 0 40px;
    padding: 0;
    background-color: #e8e8ec;
    border-radius: 12px;
    overflow: hidden;
}

.diff_hero > img {
    width: 100%;
    height: auto;
    max-height: 340px;
    object-fit: cover;
    vertical-align: top;
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
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

.diff_card_grid {
    margin: 0 0 40px;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 460px));
    gap: 20px;
}

.diff_card {
    margin: 0;
    padding: 0;
    background-color: #fff;
    border-radius: 12px;
    box-sizing: border-box;
    overflow: hidden;
}

.diff_card > figure {
    margin: 0;
    padding: 0;
    background-color: #e8e8ec;
    aspect-ratio: 460 / 320;
    overflow: hidden;
}

.diff_card > figure > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.diff_card > div {
    min-height: 200px;
    padding: 32px;
    background-color: #f8f8f8;
    box-sizing: border-box;
}

.diff_card > div > h3 {
    margin: 0 0 16px;
    color: #161618;
    font-size: 2.8rem;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

.diff_card > div > p {
    margin: 0;
    color: #67676f;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.01em;
}

.diff_qr_row {
    max-width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    gap: 20px;
}

.diff_qr_row > figure {
    width: 90px;
    height: 90px;
    margin: 0;
    padding: 8px;
    background-color: #fff;
    border: 1px solid #e5e5e9;
    border-radius: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
}

.diff_qr_row > div {
    min-width: 0;
    padding: 7px 0;
    flex: 1;
}

.diff_qr_row > div > p:first-child {
    margin: 0 0 6px;
    color: #161618;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: -0.01em;
}

.diff_qr_row > div > p + p {
    margin: 0;
    color: #67676f;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.02em;
}

.diff_placeholder {
    margin: 48px 0;
    padding: 48px 24px;
    color: #67676f;
    font-size: 1.6rem;
    background-color: #f8f8f8;
    border-radius: 12px;
    text-align: center;
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

    .diff_card_grid {
        grid-template-columns: minmax(0, 1fr);
    }

    .diff_card > div {
        min-height: 0;
        padding: 24px;
    }

    .diff_card > div > h3 {
        font-size: 2.2rem;
    }

    .diff_qr_row {
        flex-direction: column;
    }
}
</style>
