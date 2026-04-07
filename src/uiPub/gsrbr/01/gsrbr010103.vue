<template>
    <section class="sec_diff">
        <div class="inner">
            <GS25Nav :lang="props.lang" :active-depth1="0" :active-depth2="2" />

            <div class="diff_panel">
                <figure v-if="panel.hero" class="diff_hero">
                    <img :src="panel.hero" :alt="panel.heroAlt || ''" width="1420" height="340" />
                </figure>

                <header class="diff_title_block">
                    <h2>{{ panel.title }}</h2>
                    <p v-html="panel.subtitle" />
                </header>
                <section
                    v-for="(sec, i) in sections"
                    :key="i"
                    class="chicken25_sec"
                >
                    <header>
                        <h3>{{ sec.title }}</h3>
                        <p v-if="sec.desc">{{ sec.desc }}</p>
                    </header>

                    <ul v-if="sec.type === 'text_cards'" class="chicken25_card_list" role="list">
                        <li v-for="(card, c) in sec.cards" :key="c">
                            <div class="chicken25_card">
                                <h4 v-html="card.title" />
                                <p>{{ card.desc }}</p>
                            </div>
                        </li>
                    </ul>
                </section>

                <!-- node-id 23-2965 -->
                <ul v-if="panel.imgGrid && panel.imgGrid.length" class="chicken25_img_grid" role="list">
                    <li v-for="(item, i) in panel.imgGrid" :key="i">
                        <div>
                            <img :src="item.image" :alt="item.alt || ''" />
                        </div>
                    </li>
                </ul>

                <DiffQrRow v-if="panel.qr" :title="panel.qr.title" :desc="panel.qr.desc" />
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
import DiffQrRow from "@/components/DiffQrRow.vue";

import imgHero from "@/assets/images/dummy/differentiated_bg_03.png";
import imgChickenLeft from "@/assets/images/dummy/chicken25_card_01.png";
import imgChickenRight from "@/assets/images/dummy/chicken25_card_02.png";

const props = defineProps({
    lang: { type: String, default: "ko" },
});

const router = useRouter();

const langData = {
    ko: {
        panel: {
            hero: imgHero,
            heroAlt: "",
            title: "CHICKEN25",
            subtitle: "최고의 원재료를 사용하여 즉석에서 조리한 튀김을 합리적인 가격으로 제공하는 GS25만의 차별화 먹거리입니다.<br />편의점에서도 치킨25와 함께 전문점 수준의 치킨을 즐길 수 있습니다.",

            imgGrid: [
                { image: imgChickenLeft, alt: "" },
                { image: imgChickenRight, alt: "" },
            ],
            qr: {
                title: "우리동네GS 앱 다운로드",
                desc: "우리동네GS 앱을 다운로드하고, GS25의 다양한 이벤트와 차별화 상품을 만나보세요.<br />QR코드를 스캔하면 앱 다운로드 페이지로 이동합니다.",
            },
        },
        sections: [
            {
                type: "text_cards",
                title: "엄선된 원재료, 믿을 수 있는 맛",
                desc: "최고의 원재료로 만들어 안심하고 더 맛있게 즐길 수 있는 고품질의 치킨을 제공합니다.",
                cards: [
                    {
                        title: "깨끗한 기름으로<br />더 맛있는 튀김",
                        desc: "깨끗하게 관리한 기름을 사용하여 더욱 바삭하고 맛있고, 철저한 위생 관리로 안심하고 즐길 수 있는 맛있는 치킨을 제공합니다.",
                    },
                    {
                        title: "다양한 메뉴,<br />골라 먹는 재미",
                        desc: "전문점보다 더 풍성하게 준비된 메뉴들로 다양한 메뉴를 골라 드실 수 있습니다. (한마리, 반마리, 닭다리, 날개, 봉, 꼬치, 핫도그, 튀김만두 등)",
                    },
                    {
                        title: "가까운 곳에서 언제든<br />간편히 구매",
                        desc: "가까운 GS25에서 갓 튀긴 바삭한 치킨을 언제든지 간편하게 접할 수 있습니다. 우리동네GS앱을 통한 배달/픽업 서비스로 인근 GS25에서 더욱 간편한 구매가 가능합니다.",
                    },
                ],
            },
        ],
        backLabel: "목록으로 돌아가기",
    },
    en: {
        panel: {
            hero: imgHero,
            heroAlt: "",
            title: "Chicken25",
            subtitle: "GS25 chicken with crisp texture and varied sauces.",
            imgGrid: [
                { image: imgChickenLeft, alt: "" },
                { image: imgChickenRight, alt: "" },
            ],
            qr: {
                title: "Download Wooridongne GS app",
                desc: "Download the app for events and differentiated products. Scan the QR code to open the store page.",
            },
        },
        sections: [
            {
                type: "text_cards",
                title: "Premium Ingredients, Trustworthy Taste",
                desc: "We provide high-quality chicken made with the finest ingredients you can enjoy with confidence.",
                cards: [
                    {
                        title: "Clean Oil,<br />Crispier Chicken",
                        desc: "Using carefully managed oil for extra crispy and delicious chicken, with strict hygiene standards you can trust.",
                    },
                    {
                        title: "Diverse Menu,<br />Fun to Choose",
                        desc: "A wider variety than specialty stores — whole chicken, half, drumstick, wing, skewer, hot dog, fried dumpling and more.",
                    },
                    {
                        title: "Nearby, Anytime,<br />Easy to Buy",
                        desc: "Freshly fried crispy chicken available at your nearest GS25 anytime. Order via delivery or pickup through the Wooridongne GS app.",
                    },
                ],
            },
        ],
        backLabel: "Back to list",
    },
};

const t = computed(() => langData[props.lang] || langData.ko);
const panel = computed(() => t.value.panel);
const sections = computed(() => t.value.sections || []);

function goBack() {
    if (window.history.length > 1) {
        router.back();
    } else {
        router.push("/");
    }
}
</script>

<style scoped>
img {
    width: 100%;
    display: block;
}

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
    background-color: #e8e8ec;
    border-radius: 12px;
    overflow: hidden;
}

.diff_hero > img {
    height: auto;
    max-height: 340px;
    object-fit: cover;
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
    line-height: 1.5;
    letter-spacing: -0.01em;
}

/* 이미지 2열 섹션 */
.chicken25_img_grid {
    margin: 0 0 40px;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, calc((100% - 20px) / 2));
    gap: 20px;
}

.chicken25_img_grid > li {
    min-width: 0;
    border-radius: 12px;
    overflow: hidden;
}

.chicken25_img_grid img {
    object-fit: cover;
}

/* 텍스트 카드 섹션 */
.chicken25_sec {
    margin-bottom: 120px;
}

.chicken25_sec > header {
    margin-bottom: 32px;
}

.chicken25_sec > header > h3 {
    margin: 0 0 12px;
    color: #161618;
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

.chicken25_sec > header > p {
    margin: 0;
    color: #161618;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.01em;
}

.chicken25_card_list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, calc((100% - 40px) / 3));
    gap: 20px;
}

.chicken25_card_list > li {
    min-width: 0;
}

.chicken25_card {
    max-height: 260px;
    padding: 32px;
    background-color: #f8f8f8;
    border-radius: 12px;
}

.chicken25_card > h4 {
    margin: 0 0 16px;
    color: #161618;
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

.chicken25_card > p {
    margin: 0;
    color: #67676f;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.01em;
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

    .chicken25_card_list {
        grid-template-columns: repeat(2, calc((100% - 20px) / 2));
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

    .chicken25_img_grid {
        grid-template-columns: minmax(0, 1fr);
    }

    .chicken25_img_grid > li > div {
        height: 300px;
    }

    .chicken25_card_list {
        grid-template-columns: minmax(0, 1fr);
    }
}
</style>
