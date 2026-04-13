<template>
    <header>
        <h3 v-html="title" />
        <p v-if="desc || source" v-html="descWithSource" />
        <p v-if="mobileDesc" class="sec_mobile_desc">{{ mobileDesc }}</p>
        <slot />
    </header>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
    title:      { type: String, required: true },
    desc:       { type: String, default: "" },
    source:     { type: String, default: "" },
    mobileDesc: { type: String, default: "" },
});

const descWithSource = computed(() => {
    if (!props.desc && !props.source) return "";
    if (!props.source) return props.desc;
    return `${props.desc}<cite class="sec_cite">${props.source}</cite>`;
});
</script>

<style scoped>
header {
   padding-bottom: 40px;
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

.sec_mobile_desc {
    display: none;
}

@media (max-width: 768px) {
    header{
        padding-bottom: 24px;
    }
    header > h3 {
        margin-bottom: 8px;
        font-size: 2.2rem;
    }
    header > p {
        font-size: 1.6rem;
        line-height: 1.5;
        letter-spacing: -0.01em;
    }
    :deep(.sec_cite){
        margin-top: 4px;
        margin-left: 0;
        display: block;
    }
    .sec_mobile_desc {
        margin: 8px 0 0;
        color: #161618;
        font-size: 1.6rem;
        line-height: 1.5;
        letter-spacing: -0.01em;
        white-space: pre-line;
        display: block;
    }
}
</style>
