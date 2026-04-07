<template>
    <section class="sec_diff">
        <div class="inner">
            <GS25Nav :lang="props.lang" :active-depth1="0" :active-depth2="0" />

            <div class="diff_panel">
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

import imgHero from "@/assets/images/dummy/differentiated_bg_01.png";
import imgCard1 from "@/assets/images/dummy/differentiated_product_01.png";
import imgCard2 from "@/assets/images/dummy/differentiated_product_02.png";

const props = defineProps({
    lang: { type: String, default: "ko" },
});

const router = useRouter();

const langData = {
    ko: {
        panel: {
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
        backLabel: "목록으로 돌아가기",
    },
    en: {
        panel: {
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
    line-height: 1.35;
    letter-spacing: -0.01em;
}

.diff_card_grid {
    margin: 0 0 40px;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 460px));
    gap: 20px;
}

.diff_card {
    margin: 0;
    padding: 0;
    background-color: #fff;
    border-radius: 12px;
    overflow: hidden;
}

.diff_card > figure {
    aspect-ratio: 460 / 320;
    margin: 0;
    padding: 0;
    background-color: #e8e8ec;
    overflow: hidden;
}

.diff_card > figure > img {
    height: 100%;
    object-fit: cover;
}

.diff_card > div {
    min-height: 200px;
    padding: 32px;
    background-color: #f8f8f8;
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
}
</style>
