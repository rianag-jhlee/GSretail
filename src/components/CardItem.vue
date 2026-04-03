<template>
    <article class="card_item">
        <figure v-if="showImage" class="card_thumb">
            <slot name="image" />
        </figure>
        <div v-if="showBody" class="card_body">
            <h3 v-if="showTitle" class="card_tit">
                <slot name="title" />
            </h3>
            <div v-if="showDesc" class="card_desc">
                <slot />
            </div>
        </div>
    </article>
</template>

<script setup>
import { computed, useSlots } from "vue";

const slots = useSlots();

const showImage = computed(() => !!slots.image);
const showTitle = computed(() => !!slots.title);
const showDesc = computed(() => !!slots.default);
const showBody = computed(() => showTitle.value || showDesc.value);
</script>

<style scoped>
.card_item {
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 12px;
    overflow: hidden;
    box-sizing: border-box;
}

.card_thumb {
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}

.card_thumb > :slotted(img) {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    display: block;
    object-fit: cover;
    aspect-ratio: 16 / 10;
}

.card_body {
    width: 100%;
    margin: 0;
    padding: 20px 20px 24px;
    box-sizing: border-box;
}

.card_tit {
    margin: 0 0 12px;
    padding: 0;
    color: #111;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.02em;
}

.card_desc {
    margin: 0;
    padding: 0;
    color: #444;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.55;
    letter-spacing: -0.02em;
}

.card_desc :deep(p) {
    margin: 0 0 0.5em;
}

.card_desc :deep(p:last-child) {
    margin-bottom: 0;
}

@media (max-width: 768px) {
    .card_body {
        padding: 16px 16px 20px;
    }

    .card_tit {
        margin-bottom: 10px;
        font-size: 16px;
    }

    .card_desc {
        font-size: 14px;
    }
}
</style>
