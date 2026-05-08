<template>
    <div class="main-container">
        <div class="title_wrap ac">
            <h2 class="page_title">{{ pageData.pageTitle }}</h2>
        </div>
        <div class="content">
            <section class="sec_ci_intro">
                <header class="header">
                    <h3>{{ pageData.ciIntro.title }}</h3>
                    <p>{{ pageData.ciIntro.lead }}</p>
                </header>
                <div class="cont_box">
                    <article class="cont_box_row">
                        <h4 class="sub_title">{{ pageData.ciIntro.symbolTitle }}</h4>
                        <p class="desc" v-html="pageData.ciIntro.symbolDesc"></p>
                    </article>
                    <div class="gray_box">
                        <div class="img_wrap">
                            <img :src="imgCiLogo" alt="GS CI 로고" />
                        </div>
                    </div>
                    <ul class="color_cards">
                        <li v-for="item in pageData.ciIntro.colors" :key="item.name" :class="item.className">
                            <strong>{{ item.name }}</strong>
                            <p>{{ item.desc }}</p>
                        </li>
                    </ul>
                </div>

            </section>
            <section class="sec_ci_bi">
                <header class="header">
                    <h3>{{ pageData.ciBi.title }}</h3>
                </header>
                <ul class="ci_bi_cards">
                    <li v-for="logo in ciBiLogos" :key="logo.alt" class="ci_bi_card">
                        <div class="img_wrap">
                            <img :src="logo.src" :alt="logo.alt" />
                        </div>
                    </li>
                </ul>
                <article class="notice_box">
                    <header class="notice_tit">
                        <span class="notice_ico" aria-hidden="true">!</span>
                        <h4>{{ pageData.ciBi.noticeTitle }}</h4>
                    </header>
                    <p>{{ pageData.ciBi.noticeLead }}</p>
                    <ul class="notice_list">
                        <li v-for="(item, idx) in pageData.ciBi.noticeList" :key="'notice-' + idx" v-html="item"></li>
                    </ul>
                </article>
                <div class="button_wrap">
                    <Buttons btn-class="btn_icon btn_xl primary after">{{ pageData.ciBi.downloadLabel }}</Buttons>
                </div>

            </section>
            <section class="sec_color_reg">
                <header class="header">
                    <h3>{{ pageData.colorReg.title }}</h3>
                    <p v-html="pageData.colorReg.desc"></p>
                </header>
                <div>
                    <ul class="reg_list">
                        <li v-for="brand in colorRegList" :key="brand.name" class="reg_list_item">
                            <div>
                                <strong>{{ brand.name }}</strong>
                                <ol class="color_list" :style="{ '--cols': brand.pantones.length }">
                                    <li v-for="pantone in brand.pantones" :key="brand.name + '-' + pantone.name">
                                        <strong v-html="pantone.name"></strong>
                                        <ul class="color_detail">
                                            <li v-for="detail in pantone.details" :key="pantone.name + '-' + detail"><span>{{ detail }}</span></li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="table_scroll">
                    <table class="reg_table">
                        <caption class="sr_only">{{ pageData.colorReg.tableCaption }}</caption>
                        <thead>
                            <tr>
                                <th v-for="head in pageData.colorReg.tableHeads" :key="'head-' + head">{{ head }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="row in pageData.colorReg.tableRows" :key="'row-' + row.label">
                                <th>{{ row.label }}</th>
                                <td v-for="(value, valueIdx) in row.values" :key="row.label + '-' + valueIdx">{{ value }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import Buttons from "@/components/Buttons.vue";
import imgCiLogo from "@/assets/images/dummy/gsrab04_02.png";
import imgCiBiLogo1 from "@/assets/images/dummy/gsrab04_03.png";
import imgCiBiLogo2 from "@/assets/images/dummy/gsrab04_04.png";
import imgCiBiLogo3 from "@/assets/images/dummy/gsrab04_05.png";
import imgCiBiLogo4 from "@/assets/images/dummy/gsrab04_06.png";

const pageData = {
    pageTitle: "CI/BI",
    ciIntro: {
        title: "CI 소개",
        lead: "‘GS’는 특정 단어의 약자이거나 어떤 의미를 함축하는 것은 아니며 'GS' 자체로 존재합니다.",
        symbolTitle: "GS심볼",
        symbolDesc: "에너지 사업의 역동성과 유통 서비스 사업의 성장과 활력을 상징하며, 불타는 태양,<br />하늘과 바다, 푸른 대지를 아우르는 심플하면서도 역동적인 느낌을 표현합니다.",
        colors: [
            { className: "color_orange", name: "GS Orange", desc: "태양의 에너지와 열정" },
            { className: "color_green", name: "GS Green", desc: "대지의 환경 그리고 무한한 가능성" },
            { className: "color_blue", name: "GS Blue", desc: "하늘과 바다, 투명함과 창의성을 상징" },
        ],
    },
    ciBi: {
        title: "CI 및 BI",
        noticeTitle: "주의",
        noticeLead: "위 CI 및 BI를 도용하여 사용할 경우 상표법 제 93조에 의거하여 처벌받게 됩니다.",
        noticeList: [
            "CI (Corporate Identity) / BI (Brand Identity)<br />(참조) 상표법 제 93조 ~ 상표권 및 전용사용권의 침해행위를 한 자는 7년 이하의 징역 또는 1억원 이하의 벌금에 처한다. (개정 2001년 2월 3일)",
        ],
        downloadLabel: "CI 및 BI 다운로드(AI, JPG)",
    },
    colorReg: {
        title: "색상규정",
        desc: "기본적으로 심볼의 4원색(Gradient Color)표현을 기본으로 Communication을 하나, GS그룹을 알리는 Accent Color로 Jade Green을 사용합니다.<br />Gradient Color표현이 힘든 Service Space나 기타 요소에 Accent Color로 적용할 수 있습니다.",
        tableCaption: "GS 색상 규정 표",
        tableHeads: ["GS COLOR", "PANTONE 321C", "PANTONE 300C", "PANTONE 368C", "PANTONE 173C", "PANTONE COOL GRAY 10C", "PANTONE WARM GRAY 1C"],
        tableRows: [
            { label: "CMYK (PROCESS)", values: ["100/0/50/0", "100/50/0/0", "53/0/100/0", "0/75/100/0", "0/0/0/75", "0/0/3/8"] },
            { label: "RGB (DESKTOP)", values: ["0/153/153", "51/102/204", "153/204/0", "204/102/0", "102/102/102", "235/235/227"] },
            { label: "HEX (WEB-SAFE)", values: ["#009999", "#3366CC", "#99CC00", "#CC6600", "#999999", "#EBEBE3"] },
        ],
    },
};

const ciBiLogos = [
    { src: imgCiBiLogo1, alt: "GS리테일 로고" },
    { src: imgCiBiLogo2, alt: "GS25 로고" },
    { src: imgCiBiLogo3, alt: "GSSHOP 로고" },
    { src: imgCiBiLogo4, alt: "GS THE FRESH 로고" },
];

const colorRegList = [
    {
        name: "GS리테일",
        pantones: [
            { name: "PANTONE <br />166 C", details: ["C 0", "M 65", "Y 100", "K 0"] },
            { name: "PANTONE <br />300 C", details: ["C 100", "M 50", "Y 0", "K 0"] },
            { name: "PANTONE <br />7482 C", details: ["C 80", "M 0", "Y 75", "K 0"] },
            { name: "PANTONE <br />COOL Gray <br />10C", details: ["C 0", "M 0", "Y 0", "K 50"] },
        ],
    },
    {
        name: "GS25",
        pantones: [
            { name: "PANTONE <br />285 C", details: ["C 100", "M 39", "Y 0", "K 0"] },
            { name: "PANTONE <br />311 C", details: ["C 63", "M 0", "Y 10", "K 0"] },
        ],
    },
    {
        name: "GS SHOP",
        pantones: [
            { name: "PANTONE <br />2173 C", details: ["C 72", "M 27", "Y 0", "K 0"] },
        ],
    },
    {
        name: "GS THE FRESH",
        pantones: [
            { name: "PANTONE <br />7484 C", details: ["C 91", "M 14", "Y 78", "K 60"] },
        ],
    },
];
</script>

<style scoped>
    /* img { width: 100%; height: auto; display: block; object-fit: cover; } */
    .main-container { width: 100%; position: relative; display: block; }
    .title_wrap { width: 100%; max-height: 480px; padding: 10.91% 0 11.25%; text-align: center; position: relative; display: block; background-color: transparent; overflow: hidden; }
    .title_wrap::before { content: ""; width: 100%; height: 100%; position: absolute; left: 0; top: 0; z-index: 0; background-image: url("@/assets/images/dummy/gsrab04_01.jpg"); background-repeat: no-repeat;background-size: 150% auto;
    background-position: 60% 85%; transform: scaleX(-1); transform-origin: center; }
    .title_wrap::after { content: ""; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); position: absolute; left: 0; top: 0; z-index: 1; }
    .title_wrap > h2 { color: #fff; font-weight: 700; font-size: 7.2rem; line-height: 1.24; letter-spacing: -0.02em; position: relative; z-index: 2; }
    .content { width: 100%; max-width: 1460px; margin: 0 auto; padding: 200px 20px; position: relative; display: block; }
    section+section{padding:200px 0 0; }
    .header h3 {  font-weight: 700; font-size: 4.8rem; line-height: 1.3; letter-spacing: -0.01em; }
    .header p { margin: 16px 0 0; font-weight: 700; font-size: 2.4rem; line-height: 1.35; letter-spacing: -0.01em; }
    .header.center h3, .header.center p { text-align: center; }

    .cont_box { border:1px solid #E5E5E9; border-radius: 12px; padding: 56px 64px; }
    .sec_ci_intro { display: flex; flex-direction: column; gap: 60px; }
    .cont_box_row { width: 100%; display: flex; justify-content: space-between; }
    .cont_box_row > .sub_title {  font-size: 3.2rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
    .cont_box_row > .desc {  color:#67676F;font-size: 2rem;line-height: 1.35;letter-spacing: -0.01em;}
    .cont_box_row + .gray_box { margin-top: 40px; }
    .gray_box {background-color: #F8F8F8; border-radius: 12px; padding: 70px 0; display: flex; justify-content: center; align-items: center; }
    .gray_box > .img_wrap { height: 120px; }
    .gray_box > .img_wrap > img { width:100%;display: block; }
    .color_cards {  margin-top:24px;display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
    .color_cards > li{padding:18px 0 0;position: relative; }
    .color_cards > li::before { content: ""; width: 100%; height: 8px; border-radius: 10px; position: absolute; left: 0; top: 0; z-index: 0;  }
    .color_cards > li.color_orange::before { background-color: #FF7630; }
    .color_cards > li.color_green::before { background-color: #109E69; }
    .color_cards > li.color_blue::before { background-color: #0D62C2; }
    .color_cards > li.color_orange strong{ color: #FF7630; }
    .color_cards > li.color_green strong{ color: #109E69; }
    .color_cards > li.color_blue strong{ color: #0D62C2; }
    .color_cards > li > strong {font-size: 2rem;line-height: 1.35;letter-spacing: -0.01em;}
    .color_cards > li > p { margin: 4px 0 0; color: #7C7C86; font-size: 1.6rem;line-height: 1.5;letter-spacing: -0.01em;}
    .sec_ci_bi { display: flex; flex-direction: column; gap: 40px; }
    .ci_bi_cards { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; }
    .ci_bi_card { height:230px; padding:0 36px;border: 1px solid #e5e5e9; border-radius: 12px;display: flex; justify-content: center; align-items: center;  }
    .ci_bi_card > .img_wrap img{width:100%;display:block;}
    .button_wrap { margin-top: 64px; display: flex; justify-content: center; }
    .notice_box { padding: 32px; border-radius: 12px; background-color: #f8f8f8; }
    .notice_tit { margin: 0 0 24px; display: flex; align-items: center; gap: 8px; }
    .notice_box > p{margin:0 0 8px;color: #67676f; font-size: 1.8rem; font-weight: 400; line-height: 1.4; letter-spacing: 0;}
    .notice_tit > .notice_ico { width: 24px; height: 24px; background-color: red; display: inline-flex; align-items: center; justify-content: center; }
    .notice_tit > h4 { margin: 0; font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
    .notice_list { padding: 0; list-style: none; display: flex; flex-direction: column; gap: 8px; }
    .notice_list > li { padding-left: 12px; color: #67676f; font-size: 1.8rem; font-weight: 400; line-height: 1.4; letter-spacing: 0; position: relative; }
    .notice_list > li::before { content: ""; width: 4px; height: 4px; border-radius: 50%; position: absolute; left: 0; top: 11px; background-color: #67676f; }
    .sec_color_reg { display: flex; flex-direction: column; gap: 40px; }
    .sec_color_reg .reg_list { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 24px; }
    .sec_color_reg .reg_list > .reg_list_item {padding:56px 64px; border:1px solid #E5E5E9; border-radius: 12px; }
    .sec_color_reg .reg_list > .reg_list_item > div { display: flex; justify-content: space-between; }
    .sec_color_reg .reg_list > .reg_list_item > div > strong { color: #161616; font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
    .sec_color_reg .reg_list .color_list { display: grid; grid-template-columns: repeat(var(--cols), minmax(0, 1fr)); gap: 10px; }
    .sec_color_reg .reg_list .color_list > li { padding: 18px; }
    .sec_color_reg .reg_list .color_list > li > strong { color: #161616; font-size: 1.8rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; display: block; }
    .sec_color_reg .reg_list .color_detail { margin: 12px 0 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 4px; }
    .sec_color_reg .reg_list .color_detail > li { margin: 0; }
    .sec_color_reg .reg_list .color_detail > li > span { color: #67676f; font-size: 1.4rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }

    .table_scroll { width: 100%; overflow-x: auto; }
    .reg_table { width: 100%; min-width: 1147px; border-collapse: collapse; table-layout: fixed; }
    .reg_table th, .reg_table td { padding: 14px 10px; border: 1px solid #e5e5e9; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; text-align: center; word-break: keep-all; }
    .reg_table thead th { background-color: #f8f8f8; color: #161616; font-weight: 700; }
    .reg_table tbody th { background-color: #f8f8f8; color: #161616; font-weight: 700; }
    .reg_table tbody td { color: #67676f; font-weight: 400; }
    .sr_only { width: 1px; height: 1px; margin: -1px; padding: 0; border: 0; position: absolute; clip: rect(0, 0, 0, 0); overflow: hidden; }




    @media screen and (max-width: 768px) {
        .title_wrap { display: none; }
        .visual_sub { font-size: 2rem; }
        section+section{padding:60px 0 0; }
        .content { width: 100%; max-width: 100%; padding: 60px 20px 94px; }
        .header h3 { font-size: 2.4rem; text-align: left; }
        .header p { margin-top: 12px; font-weight: 400; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
        .header.center h3, .header.center p { text-align: left; }
        .sec_ci_intro { gap: 24px; }
        .cont_box_row { grid-template-columns: minmax(0, 1fr); gap: 12px; }
        .cont_box_row > .sub_title { font-size: 2.4rem; line-height: 1.35; }
        .cont_box_row > .desc { font-size: 1.6rem; }
        .gray_box { padding: 36px 20px; border-radius: 12px; }
        .color_cards { grid-template-columns: minmax(0, 1fr); gap: 12px; }
        .color_cards > li { padding: 24px 20px; }
        .color_cards > li > strong { font-size: 2rem; }
        .color_cards > li > p { margin-top: 8px; font-size: 1.6rem; }
        .sec_ci_bi { gap: 24px; }
        .ci_bi_cards { grid-template-columns: minmax(0, 1fr); gap: 12px; }
        .ci_bi_card { padding: 20px; }
        .ci_bi_card > strong { font-size: 1.8rem; }
        .ci_bi_card > .logo_box { min-height: 110px; margin-top: 12px; }
        .ci_bi_card > .logo_box > p { font-size: 2rem; }
        .notice_box { padding: 20px; }
        .notice_tit > h4 { font-size: 2rem; }
        .notice_list { margin-top: 12px; gap: 6px; }
        .notice_list > li { font-size: 1.4rem; line-height: 1.5; }
        .notice_list > li::before { top: 8px; }
        .sec_color_reg { gap: 24px; }
        .sec_color_reg .reg_list { gap: 16px; }
        .sec_color_reg .reg_list > .reg_list_item > div > strong { font-size: 2rem; }
        .sec_color_reg .reg_list .color_list { grid-template-columns: minmax(0, 1fr); gap: 8px; }
        .sec_color_reg .reg_list .color_list > li { padding: 14px; }
        .sec_color_reg .reg_list .color_list > li > strong { font-size: 1.6rem; }
        .sec_color_reg .reg_list .color_detail { gap: 2px 6px; }
        .sec_color_reg .reg_list .color_detail > li > span { font-size: 1.3rem; }
       
        .table_scroll { margin: 0 -20px; padding: 0 20px; }
        .reg_table { width: 1147px; min-width: 1147px; }
        .reg_table th, .reg_table td { font-size: 1.4rem; }
        .sec_vision .img_wrap { margin-top: 60px; }
        .sec_vision .img_wrap picture img{max-width: 335px;}
        .sec_value { flex-direction: column; gap: 24px; }
        .sec_value > .header { width: 100%; }
        .sec_value > .value_swiper { width: calc(100% + 40px); margin: 0 -20px; padding: 0 20px; overflow: hidden; box-sizing: border-box; }
        .sec_value :deep(.value_swiper .swiper-slide) { width: 84.53vw; }
        .sec_value :deep(.value_swiper .swiper-wrapper) { align-items: stretch; }
        .sec_value .value_slide { width: 100%; display: flex; flex-direction: column; gap: 8px; }
        .sec_value .value_slide > strong { font-size: 2rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
        .sec_value .value_slide > p {  font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; white-space: pre-line; }
        .sec_value .value_thumb { width: 100%;aspect-ratio: 317 / 210; border-radius: 12px; background-repeat: no-repeat; background-position: center; background-size: cover; }
        .sec_way .header h3, .sec_way .header p { text-align: center; }
        .sec_way > .way_list { margin-top: 24px; grid-template-columns: 1fr; }
        .sec_way > .way_list > li { min-height: 240px; padding: 56px 20px; }
        .sec_way > .way_list > li > strong { font-size: 2.4rem; line-height: 1.35; }
        .sec_way > .way_list > li > p { margin-top: 8px; font-size: 1.6rem; line-height: 1.5; }
}
</style>