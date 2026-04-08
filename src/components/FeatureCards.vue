<script setup>
import { defineProps } from "vue";

defineProps({
    items: { type: Array, default: () => [] },
    // [{ num: "01", title: "...", desc: "..." }]
});
</script>

<template>
    <ul class="feature_card_list">
        <li v-for="(item, i) in items" :key="i" class="feature_card_item">
            <em class="feature_card_num">{{ item.num }}</em>
            <strong class="feature_card_title">{{ item.title }}</strong>
            <p class="feature_card_desc">{{ item.desc }}</p>
        </li>
    </ul>
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
    font-weight: 600;
    font-style: normal;
    letter-spacing: -0.01em;
    display: block;
}

.feature_card_title {
    margin-bottom: 16px;
    color: #161616;
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: -0.01em;
    white-space: pre-line;
    display: block;
}

.feature_card_desc {
    margin: 0;
    color: #67676f;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
}

@media (max-width: 1024px) {
    .feature_card_list {
        flex-wrap: wrap;
    }

    .feature_card_item {
        height: auto;
        min-height: 200px;
        flex: 1 1 calc((100% - 20px) / 2);
    }
}

@media (max-width: 768px) {
    .feature_card_list {
        flex-wrap: wrap;
    }

    .feature_card_item {
        height: auto;
        min-height: 0;
        flex: 1 1 100%;
    }
}
</style>
