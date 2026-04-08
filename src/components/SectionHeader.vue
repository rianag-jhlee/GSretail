<template>
    <header>
        <h3>{{ title }}</h3>
        <p v-if="desc || source" v-html="descWithSource" />
        <slot />
    </header>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
    title:  { type: String, required: true },
    desc:   { type: String, default: "" },
    source: { type: String, default: "" },
});

const descWithSource = computed(() => {
    if (!props.desc && !props.source) return "";
    if (!props.source) return props.desc;
    return `${props.desc}<cite class="sec_cite">${props.source}</cite>`;
});
</script>

<style scoped>
header {
    margin-bottom: 40px;
}

header > h3 {
    margin: 0 0 12px;
    color: #161618;
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

header > p {
    margin: 0;
    color: #161618;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.01em;
}

:deep(.sec_cite) {
    margin-left: 16px;
    color: #67676f;
    font-size: 1.4rem;
    font-weight: 500;
    font-style: normal;
    letter-spacing: -0.01em;
}

@media (max-width: 768px) {
    header > h3 {
        font-size: 2.2rem;
    }
}
</style>
