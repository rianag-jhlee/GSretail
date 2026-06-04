<template>
    <div class="cont_inner">
        <header class="title_wrap">
            <h2>{{ t.pageTitle }}</h2>
        </header>

        <div class="button_wrap">
            <Buttons
                v-for="(btn, bIdx) in t.quickBtns"
                :key="'quick-' + bIdx"
                btn-class="btn_icon_arrow btn_big border after"
                @click="handleQuickLink(btn.link)"
            >
                {{ btn.text }}
            </Buttons>
        </div>

        <section class="sec_policy">
            <header class="policy_head">
                <h3 class="tit">{{ t.revisionTitle }}</h3>
                <div class="filter_wrap">
                    <div class="filter_year">
                        <SelectBox v-model="selectedYear" :options="t.yearOptions" />
                    </div>
                    <div class="filter_version">
                        <SelectBox v-model="selectedVersion" :options="t.versionOptions" />
                    </div>
                </div>
            </header>

            <p class="lead">{{ t.lead }}</p>

            <aside class="toc_box">
                <h4 class="toc_tit">{{ t.tocTitle }}</h4>
                <ul>
                    <li v-for="(item, idx) in t.tocItems" :key="'toc-' + idx">
                        <span class="num">{{ item.num }}</span>
                        <span class="txt">{{ item.text }}</span>
                    </li>
                </ul>
            </aside>

            <article v-for="(block, bIdx) in t.sections" :key="'sec-' + bIdx" class="sec_block">
                <header>
                    <h3 class="tit_md">{{ block.title }}</h3>
                </header>
                <p class="desc">{{ block.desc }}</p>
                <figure class="img_box" :class="{ is_sm: block.imgSm }" :style="{ backgroundImage: `url(${sectionImgs[bIdx]})` }"></figure>
            </article>
        </section>
    </div>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";
import Buttons from "@/components/Buttons.vue";
import SelectBox from "@/components/SelectBox.vue";
import imgGsrcm0101 from "@/assets/images/dummy/gsrcm01_01.png";
import imgGsrcm0102 from "@/assets/images/dummy/gsrcm01_02.png";
import imgGsrcm0103 from "@/assets/images/dummy/gsrcm01_03.png";

const sectionImgs = [imgGsrcm0101, imgGsrcm0102, imgGsrcm0103];

const props = defineProps({
    lang: { type: String, default: "ko" },
});

const langData = {
    ko: {
        pageTitle: "개인정보처리방침",
        revisionTitle: "2026.04.22 개정판 고시",
        lead:
            "GS리테일(이하 ‘회사’)은 정보주체의 자유와 권리 보호를 위해 ｢개인정보 보호법｣및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 이에 ｢개인정보 보호법｣ 제30조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고, 이와 관련된 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립•공개합니다.",
        tocTitle: "목차",
        quickBtns: [
            { text: "알기 쉬운 개인정보 처리방침", link: "#none" },
            { text: "위치기반서비스 이용약관", link: "#none" },
            { text: "영상정보처리기기 운영 관리방침", link: "#none" },
        ],
        yearOptions: [
            { value: "2026", label: "2026" },
            { value: "2025", label: "2025" },
            { value: "2024", label: "2024" },
        ],
        versionOptions: [
            { value: "20260422", label: "20260422" },
            { value: "20250422", label: "20250422" },
            { value: "20240422", label: "20240422" },
        ],
        tocItems: [
            { num: "01", text: "개인정보의 처리목적, 처리항목, 처리 및 보유기간" },
            { num: "02", text: "개인정보의 제3자 제공" },
            { num: "03", text: "개인정보의 처리 위탁" },
            { num: "04", text: "개인정보의 파기" },
            { num: "05", text: "개인정보의 안전성 확보조치" },
            { num: "06", text: "14세 미만 아동의 개인정보 처리에 관한 사항" },
            { num: "07", text: "이용자와 법정대리인의 권리 의무 및 행사방법" },
            { num: "08", text: "14세 미만 아동의 개인정보 처리에 관한 사항" },
            { num: "09", text: "자동수집장치의 설치, 운영 및 거부" },
            { num: "10", text: "자동수집장치의 설치, 운영 및 거부" },
            { num: "11", text: "개인정보처리방침의 변경에 관한 사항" },
        ],
        sections: [
            {
                title: "1. 개인정보의 처리목적, 처리항목, 처리 및 보유기간",
                desc: "회사는 「개인정보 보호법」 에 따라 서비스 제공을 위해 필요 최소한의 범위에서 개인정보를 수집•이용합니다.\n\n1) 정보주체의 동의를 받아 처리하는 개인정보 항목\n• 법적 근거: 「개인정보 보호법」 제15조 제1항 제1호 (동의)",
                imgSm: false,
            },
            {
                title: "2) 정보주체의 동의를 받지 않고 처리하는 개인정보 항목",
                desc: "",
                imgSm: true,
            },
            {
                title: "2. 개인정보의 제3자 제공",
                desc: "회사는 원활한 서비스 제공을 위해 다음의 경우 「개인정보 보호법」 제17조제1항제1호에 따라 정보주체의 동의를 얻어 필요 최소한의 범위로만 제공합니다.",
                imgSm: false,
            },
        ],
    },
};

const selectedYear = ref("2026");
const selectedVersion = ref("20260422");

const t = computed(() => langData[props.lang] || langData.ko);

function handleQuickLink(link) {
    if (link && link !== "#none") {
        window.open(link, "_blank");
    }
}
</script>

<style scoped>
.title_wrap { padding: 200px 0 100px; display: flex; flex-direction: column; }
.title_wrap > h2 { color: #161616; font-size: 7.2rem; font-weight: 700; line-height: 1.24; letter-spacing: -0.02em; text-align: center; }
.panel { padding-top: 80px; }
.button_wrap { width: 100%; margin: 0 0 24px; padding: 0; display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 8px; }
.sec_policy { width: 100%; margin: 0; padding: 60px 0 0; border-top: 1px solid #242428; }
.policy_head { width: 100%; margin: 0 0 40px; padding: 0; display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; }
.policy_head > h3.tit { margin: 0; color: #161616; font-size: 4rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; flex: 1; min-width: 0; }
.filter_wrap { margin: 0; padding: 0; display: flex; flex-shrink: 0; gap: 8px; }
.filter_year { width: 160px; }
.filter_version { width: 200px; }
.sec_policy > p.lead { margin: 0 0 60px; color: #161616; font-size: 2.4rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.toc_box { width: 100%; margin: 0 0 60px; padding: 40px 64px; background-color: #f8f8f8; border-radius: 12px; }
.toc_box > h4.toc_tit { margin: 0 0 16px; color: #161616; font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.toc_box > ul { width: 100%; margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 16px; row-gap: 16px; }
.toc_box > ul > li { display: flex; align-items: flex-start; gap: 8px; }
.toc_box > ul > li > span.num { color: #107af2; font-size: 2rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; flex-shrink: 0; }
.toc_box > ul > li > span.txt { color: #161616; font-size: 2rem; font-weight: 400; line-height: 1.35; letter-spacing: -0.01em; }
.sec_block + .sec_block { margin-top: 100px; }
.sec_block > header > h3.tit_md { margin: 0 0 40px; padding-left:42px; color: #161616; font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; position: relative;}
.sec_block > header > h3.tit_md::before { content: ''; width: 32px; height: 32px; position: absolute; top: 0; left: 0; background-image: url('@/assets/images/sub/icon_cont_32.png'); background-repeat: no-repeat; }
.sec_policy > .sec_block:nth-of-type(1) > header > h3.tit_md::before { background-position: -900px -104px; }
.sec_block > p.desc { margin: 0 0 24px; color: #67676f; font-size: 1.8rem; font-weight: 400; line-height: 1.4; letter-spacing: 0; white-space: pre-line; }
.sec_block > figure.img_box { width: 100%; max-width: 961px; height: 670px; margin: 0; padding: 0; background-color: #e5e5e9; background-repeat: no-repeat; background-position: center top; background-size: 100% auto; border-radius: 12px; }
.sec_block > figure.img_box.is_sm { height: 152px; }
@media screen and (max-width: 1024px) {
    .toc_box > ul { grid-template-columns: 1fr; }
}
@media screen and (max-width: 768px) {
    .title_wrap { display: none; }
    .panel { padding-top: 60px; }
    .button_wrap { margin-bottom: 16px; justify-content: flex-start; }
    .button_wrap :deep(.btn_big) { width: 100%; }
    .sec_policy { padding-top: 40px; }
    .policy_head { margin-bottom: 24px; flex-direction: column; align-items: stretch; }
    .policy_head > h3.tit { font-size: 2.4rem; }
    .filter_wrap { width: 100%; }
    .filter_year, .filter_version { width: 100%; }
    .sec_policy > p.lead { margin-bottom: 40px; font-size: 1.8rem; line-height: 1.4; }
    .toc_box { margin-bottom: 40px; padding: 32px 20px; }
    .toc_box > h4.toc_tit { margin-bottom: 12px; font-size: 2rem; }
    .toc_box > ul > li > span.num, .toc_box > ul > li > span.txt { font-size: 1.6rem; }
    .sec_block + .sec_block { margin-top: 80px; }
    .sec_block > header > h3.tit_md { margin-bottom: 16px; font-size: 2rem; }
    .sec_block > p.desc { font-size: 1.6rem; }
    .sec_block > figure.img_box { max-width: 100%; height: clamp(140px, 56vw, 670px); }
    .sec_block > figure.img_box.is_sm { height: clamp(120px, 40.53vw, 152px); }
}
</style>
