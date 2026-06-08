<template>
    <div class="diff_qr_row">
        <figure aria-hidden="true">
            <img :src="isMobileView ? imgQrMo : imgQrPc" alt="앱 다운로드 QR코드" width="74" height="74" />
        </figure>
        <div>
            <strong>{{ title }}</strong>
            <p v-html="isMobileView && mobileDesc ? mobileDesc : desc"></p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps } from "vue";
import imgQrPc from "@/assets/images/dummy/qr-app-download.svg";
import imgQrMo from "@/assets/images/dummy/qr_app.png";

defineProps({
    title: { type: String, default: "" },
    desc:  { type: String, default: "" },
    mobileDesc: { type: String, default: "GS25의 다양한 이벤트와 차별화 상품" },
});

const isMobileView = ref(window.innerWidth <= 768);
const onResize = () => { isMobileView.value = window.innerWidth <= 768; };

onMounted(() => window.addEventListener("resize", onResize));
onUnmounted(() => window.removeEventListener("resize", onResize));
</script>

<style scoped>
img {
    width: 100%;
    display: block;
}

.diff_qr_row {
    max-width: 100%;
    margin-top: 40px;
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

.diff_qr_row > div > strong {
    margin: 0 0 6px;
    color: #161618;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: -0.01em;
}

.diff_qr_row > div > strong + p {
    margin: 0;
    color: #67676f;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.01em;
}

@media (max-width: 768px) {
    .diff_qr_row {
        padding:0 16px;
        position:relative;
        gap:12px;
    }
    .diff_qr_row > figure {
        width: 48px;
        height: 48px;
        padding:0;
        border:0;
    }
    .diff_qr_row > figure > img{
        height: 48px;
    }
    .diff_qr_row > div{
        padding:0;
    }
    .diff_qr_row > div > strong{
        font-size: 1.6rem;
    }
    .diff_qr_row:after{
        content:"";
        width: 16px;
        height: 16px;
        position:absolute;
        top: 50%;
        right:16px;
        transform: translateY(-50%);
        background:url('@/assets/images/common/arrow_set_16.png') -56px -20px no-repeat;
    }
}

</style>
