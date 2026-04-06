<template>
    <Tabs
        :model-value="activeDepth1"
        tab-class="type_01"
        :tab-items="depth1Tabs"
        :tab-slide="false"
        @change="onDepth1Change"
    />
    <Tabs
        v-if="activeDepth1 === 0"
        :model-value="activeDepth2"
        tab-class="type_02"
        :tab-items="depth2Tabs"
        :tab-slide="false"
        @change="onDepth2Change"
    />
</template>

<script setup>
import { computed, defineProps } from "vue";
import { useRouter } from "vue-router";
import Tabs from "@/components/Tabs.vue";

const props = defineProps({
    lang: { type: String, default: "ko" },
    activeDepth1: { type: Number, default: 0 },
    activeDepth2: { type: Number, default: 0 },
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
        depth2차별화: [
            { item: "차별화 상품" },
            { item: "CAFE25" },
            { item: "치킨25" },
            { item: "고피자" },
        ],
    },
    en: {
        depth1: [
            { item: "Products & Services" },
            { item: "Fresh focus stores" },
            { item: "Store / Services" },
            { item: "Win-win partnership" },
            { item: "Mealbox / Snack bar" },
        ],
        depth2차별화: [
            { item: "Differentiated products" },
            { item: "CAFE25" },
            { item: "Chicken25" },
            { item: "Go Pizza" },
        ],
    },
};

const t = computed(() => langData[props.lang] || langData.ko);
const depth1Tabs = computed(() => t.value.depth1);

// activeDepth1에 따라 다른 2depth 탭 반환 (현재 차별화 상품/서비스만 구현)
const depth2Tabs = computed(() => {
    if (props.activeDepth1 === 0) return t.value.depth2차별화;
    return [];
});

// 1depth 섹션별 대표 라우트 (구현된 섹션만 설정)
const depth1Routes = ["/gsrbr010101", null, null, null, null];

// 2depth 라우트 (차별화 상품/서비스)
const depth2Routes차별화 = ["/gsrbr010101", "/gsrbr010102", "/gsrbr010103", "/gsrbr010104"];

function onDepth1Change(idx) {
    const route = depth1Routes[idx];
    if (route) router.push(route);
}

function onDepth2Change(idx) {
    if (props.activeDepth1 === 0) {
        router.push(depth2Routes차별화[idx]);
    }
}
</script>

<style scoped>
.tab_wrap {
    margin-bottom: 0;
}

.tab_wrap + .tab_wrap {
    margin-top: 24px;
    margin-bottom: 24px;
}
</style>
