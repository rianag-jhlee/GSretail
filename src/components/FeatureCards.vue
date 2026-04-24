<script setup>
import { ref, defineProps, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

defineProps({
    items: { type: Array, default: () => [] },
    // type="num"  (기본): [{ num: "01", title: "...", desc: "..." }]
    // type="icon"        : [{ icon: imgSrc, iconAlt: "...", title: "...", desc: "..." }]
    // type="text"        : [{ title: "...", desc: "..." | [...], listDotted?: true }] — listDotted 시 desc 배열 ul에 list_dotted
    type: { type: String, default: "num" },
    // noSwipe=true: 모바일에서도 Swiper 대신 리스트(1열) 표시
    noSwipe: { type: Boolean, default: false },
    // 모바일 Swiper 슬라이드 간격(px). 페이지에서 margin으로 간격 줄 때 0과 함께 쓸 수 있음
    swiperSpaceBetween: { type: Number, default: 8 },
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
    <!-- PC / noSwipe 강제 리스트 -->
    <ul v-if="!isMobileView || noSwipe" class="feature_card_list" :class="{ 'no_swipe': noSwipe }">
        <li v-for="(item, i) in items" :key="i" class="feature_card_item">
            <em v-if="type === 'num'" class="feature_card_num">{{ item.num }}</em>
            <figure v-else-if="type === 'icon'" class="feature_card_icon">
                <img v-if="item.icon" :src="item.icon" :alt="item.iconAlt || ''" />
            </figure>
            <strong class="feature_card_title" v-html="item.title"></strong>
            <template v-if="item.desc">
                <ul
                    v-if="Array.isArray(item.desc)"
                    class="feature_card_desc_list"
                    :class="{ list_dotted: item.listDotted }"
                >
                    <li v-for="(line, li) in item.desc" :key="li">
                        <p class="feature_card_desc" v-html="line"></p>
                    </li>
                </ul>
                <p v-else class="feature_card_desc" v-html="item.desc"></p>
            </template>
        </li>
    </ul>
    <!-- Mobile: Swiper -->
    <Swiper
        v-else-if="!noSwipe"
        slides-per-view="auto"
        :space-between="swiperSpaceBetween"
        wrapper-tag="ul"
        class="feature_card_swiper"
    >
        <SwiperSlide v-for="(item, i) in items" :key="i" tag="li">
            <div class="feature_card_item">
                <em v-if="type === 'num'" class="feature_card_num">{{ item.num }}</em>
                <figure v-else-if="type === 'icon'" class="feature_card_icon">
                    <img v-if="item.icon" :src="item.icon" :alt="item.iconAlt || ''" />
                </figure>
                <strong class="feature_card_title" v-html="item.title"></strong>
                <template v-if="item.desc">
                    <ul
                        v-if="Array.isArray(item.desc)"
                        class="feature_card_desc_list"
                        :class="{ list_dotted: item.listDotted }"
                    >
                        <li v-for="(line, li) in item.desc" :key="li">
                            <p class="feature_card_desc" v-html="line"></p>
                        </li>
                    </ul>
                    <p v-else class="feature_card_desc" v-html="item.desc"></p>
                </template>
            </div>
        </SwiperSlide>
    </Swiper>
</template>

<style scoped>
.feature_card_list { display: flex; align-items: stretch; gap: 20px; }
.feature_card_item { padding: 32px; background-color: #f8f8f8; border-radius: 12px; flex: 1; display: flex; flex-direction: column; min-width: 0; }
.feature_card_num { margin-bottom: 8px; color: #107af2; font-size: 1.8rem; font-weight: 700; font-style: normal; line-height: 1.5; letter-spacing: -0.01em; display: block; }
@media (max-width: 768px) {
    .feature_card_num { margin-bottom: 6px; line-height: 1.5; letter-spacing: 0; }
}
.feature_card_icon { width: 48px; height: 48px; margin-bottom: 16px; background-color: #d7d7df; border-radius: 8px; }
@media (max-width: 768px) {
    .feature_card_icon { width: 40px; height: 40px; }
}
.feature_card_icon > img { width: 100%; height: 100%; object-fit: contain; }
.feature_card_title { margin-bottom: 16px; font-weight: 700; font-size: 2rem; line-height: 1.35; letter-spacing: -0.01em; }
.feature_card_title:last-child { margin-bottom: 0; color: #161616; font-size: 2rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; white-space: pre-line; display: block; word-break: keep-all; }
.feature_card_desc_list { flex: 1; }
.feature_card_desc { color: #67676f; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
.feature_card_item > .feature_card_desc { flex: 1; }
.list_dotted > li { padding-left: 12px; position: relative; }
.list_dotted > li + li { margin-top: 8px; }
.list_dotted > li::before { content: ""; width: 4px; height: 4px; background-color: #67676f; border-radius: 50%; position: absolute; top: 11px; left: 0; }
.list_dotted > li > p { margin: 0; color: #67676f; font-size: 1.8rem; line-height: 1.4; }
.list_dotted > li > p :deep(a) { color: #107af2; font-size: 1.8rem; line-height: 1.4; text-decoration: underline; }
@media (max-width: 1024px) {
    .feature_card_item { flex: 1 1 calc((100% - 20px) / 2); }
}
@media (max-width: 768px) {
    .feature_card_list.no_swipe { flex-direction: column; }
    .feature_card_list.no_swipe .feature_card_item { flex: none; width: 100%; }
    .feature_card_swiper { overflow: visible; }
    .feature_card_swiper :deep(.swiper-wrapper) { align-items: stretch; }
    .feature_card_swiper :deep(.swiper-slide) { width: 84vw; height: auto; display: flex; }
    .feature_card_swiper :deep(.swiper-slide) > .feature_card_item { flex: 1; width: 100%; min-height: 0; }
    .feature_card_item { width: 84vw; padding: 32px; }
    .feature_card_title { margin-bottom: 16px; font-size: 1.8rem; line-height: 1.5; letter-spacing: 0; }
    .feature_card_desc { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .feature_card_desc_list > li + li { margin-top: 4px; }
    .list_dotted > li { padding-left: 6px; }
    .list_dotted > li::before { top: 9px; width: 2px; height: 2px; }
    .list_dotted > li + li { margin-top: 8px; }
    .list_dotted > li > p { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
}
</style>
