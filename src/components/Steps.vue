<script setup>
import { defineProps } from "vue";

defineProps({
    type: { type: String, default: "1" },
    items: { type: Array, default: () => [] },
});
</script>

<template>
    <ul class="step_list" :class="`step_type${type}`" :style="{ '--step-cols': items.length }">
        <li v-for="(item, i) in items" :key="i" class="step_item">
            <span class="step_icon"></span>
            <div class="step_body">
                <em class="step_num">{{ item.step }}</em>
                <strong class="step_title" v-html="item.title" />
                <ul v-if="item.bullets && item.bullets.length" class="step_bullets">
                    <li v-for="(bullet, bi) in item.bullets" :key="bi" v-html="bullet" />
                </ul>
                <p v-if="item.note" class="step_note" v-html="item.note" />
            </div>
        </li>
    </ul>
</template>

<style scoped>
.step_list {
    padding: 40px 64px;
    background-color: #f8f8f8;
    border-radius: 8px;
    display: grid;
    grid-template-columns: repeat(var(--step-cols), 1fr);
}

/* ── 공통 아이콘 ── */
.step_icon {
    width: 40px;
    height: 40px;
    background-color: #d0d0d0;
    border-radius: 4px;
    flex-shrink: 0;
    display: block;
}

/* ── 공통 텍스트 ── */
.step_num {
    color: #107af2;
    font-size: 1.8rem;
    font-weight: 700;
    font-style: normal;
    line-height: 1.5;
}

.step_title {
    color: #161616;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

/* ── Type 1: 아이콘 + 텍스트 가로 배치 ── */
.step_type1 .step_num {
    margin-bottom: 4px;
}

.step_type1 .step_item {
    display: flex;
    align-items: center;
    gap: 20px;
}

.step_type1 .step_body {
    display: flex;
    flex-direction: column;
}

/* ── Type 2: 아이콘 위, 텍스트 아래 세로 배치 ── */
.step_type2 .step_item {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.step_type2 .step_body {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.step_bullets {
    margin: 8px 0 0;
    padding: 0;
    list-style: none;
}

.step_bullets > li {
    padding-left: 12px;
    color: #67676f;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
    position: relative;
}

.step_bullets > li::before {
    content: "";
    width: 4px;
    height: 4px;
    background-color: #67676f;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    left: 0;
}

.step_note {
    margin: 4px 0 0;
    color: #fb6432;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
}

/* ── 반응형 ── */
@media (max-width: 1024px) {
    .step_list {
        padding: 30px 40px;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
}

@media (max-width: 768px) {
    .step_list {
        padding: 24px 20px;
        grid-template-columns: 1fr;
        gap: 16px;
    }
}
</style>
