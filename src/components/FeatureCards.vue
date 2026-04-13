<script setup>
import { ref, defineProps, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";

defineProps({
    items: { type: Array, default: () => [] },
    // type="num"  (기본): [{ num: "01", title: "...", desc: "..." }]
    // type="icon"        : [{ icon: imgSrc, iconAlt: "...", title: "...", desc: "..." }]
    // type="text"        : [{ title: "...", desc: "..." }] — em/icon 없음, title은 HTML 가능
    type: { type: String, default: "num" },
    noPagination: { type: Boolean, default: false },
});

const _getIsMobile = () => window.innerWidth <= 768;
const isMobileView = ref(false);
const _onResize = () => { isMobileView.value = _getIsMobile(); };

onMounted(() => {
    isMobileView.value = _getIsMobile();
    window.addEventListener("resize", _onResize);
});

onUnmounted(() => {
    window.removeEventListener("resize", _onResize);
});
</script>

<template>
    <!-- PC -->
    <ul v-if="!isMobileView" class="feature_card_list">
        <li v-for="(item, i) in items" :key="i" class="feature_card_item">
            <em v-if="type === 'num'" class="feature_card_num">{{ item.num }}</em>
            <figure v-else-if="type === 'icon'" class="feature_card_icon">
                <img v-if="item.icon" :src="item.icon" :alt="item.iconAlt || ''" />
            </figure>
            <strong class="feature_card_title" v-html="item.title"></strong>
            <p v-if="item.desc" class="feature_card_desc" v-html="item.desc"></p>
        </li>
    </ul>
    <!-- Mobile: Swiper -->
    <Swiper
        v-else
        :modules="noPagination ? [] : [Pagination]"
        slides-per-view="auto"
        :space-between="8"
        :pagination="noPagination ? false : { clickable: true }"
        class="feature_card_swiper"
    >
        <SwiperSlide v-for="(item, i) in items" :key="i">
            <div class="feature_card_item">
                <em v-if="type === 'num'" class="feature_card_num">{{ item.num }}</em>
                <figure v-else-if="type === 'icon'" class="feature_card_icon">
                    <img v-if="item.icon" :src="item.icon" :alt="item.iconAlt || ''" />
                </figure>
                <strong class="feature_card_title" v-html="item.title"></strong>
                <p v-if="item.desc" class="feature_card_desc" v-html="item.desc"></p>
            </div>
        </SwiperSlide>
    </Swiper>
</template>

<style scoped>
.feature_card_list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    gap: 20px;
}

.feature_card_item {
    min-height: 300px;
    padding: 32px;
    background-color: #f8f8f8;
    border-radius: 12px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.feature_card_num {
    margin-bottom: 8px;
    color: #107af2;
    font-size: 1.8rem;
    font-weight: 700;
    font-style: normal;
    letter-spacing: -0.01em;
    display: block;
}

.feature_card_icon {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
    background-color: #d7d7df;
    border-radius: 8px;
}

@media (max-width: 768px) {
    .feature_card_icon {
        width: 40px;
        height: 40px;
    }
}

.feature_card_icon > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.feature_card_title {
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

.feature_card_title:last-child {
    margin-bottom: 0;
    color: #161616;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.01em;
    white-space: pre-line;
    display: block;
    word-break: keep-all;
}

.feature_card_desc {
    margin: 0;
    color: #67676f;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
}

@media (max-width: 1024px) {
    .feature_card_item {
        height: auto;
        flex: 1 1 calc((100% - 20px) / 2);
    }
}

@media (max-width: 768px) {
    .feature_card_swiper {
        overflow: visible;
    }

    .feature_card_swiper :deep(.swiper-slide) {
        width: 327px;
    }

    .feature_card_swiper :deep(.swiper-pagination) {
        margin-top: 20px;
        bottom: 0;
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .feature_card_swiper :deep(.swiper-pagination-bullet) {
        width: 6px;
        height: 6px;
        background-color: #D7D7DF;
        border-radius: 50%;
        opacity: 1;
        cursor: pointer;
        display: block;
    }

    .feature_card_swiper :deep(.swiper-pagination-bullet-active) {
        background-color: #161616;
    }

    .feature_card_item {
        width: 327px;
        height: auto;
        min-height: 0;
        padding: 32px;
    }
    .feature_card_title{
        margin-bottom: 16px;
        font-size: 1.8rem;
        line-height: 1.5;
        letter-spacing: 0%;

    }
   .feature_card_desc{
    font-size: 1.4rem;
    line-height: 1.4;
    letter-spacing: -0.01em;

   }
}
</style>
