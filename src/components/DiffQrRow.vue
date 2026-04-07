<template>
    <div class="diff_qr_row">
        <figure aria-hidden="true">
            <img src="@/assets/images/dummy/qr-app-download.svg" alt="앱 다운로드 QR코드" width="74" height="74" />
        </figure>
        <div>
            <p>{{ title }}</p>
            <p v-html="desc" />
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    title: { type: String, default: "" },
    desc:  { type: String, default: "" },
});
</script>

<style scoped>
img {
    width: 100%;
    display: block;
}

.diff_qr_row {
    max-width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
}

.diff_qr_row > figure {
    width: 90px;
    height: 90px;
    margin: 0;
    padding: 8px;
    background-color: #fff;
    border: 1px solid #e5e5e9;
    border-radius: 10px;
    flex-shrink: 0;
}

.diff_qr_row > div {
    min-width: 0;
    padding: 7px 0;
    flex: 1;
}

.diff_qr_row > div > p:first-child {
    margin: 0 0 6px;
    color: #161618;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: -0.01em;
}

.diff_qr_row > div > p + p {
    margin: 0;
    color: #67676f;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.02em;
}

/* @media (max-width: 768px) {
    .diff_qr_row {
        flex-direction: column;
    }
} */
</style>
