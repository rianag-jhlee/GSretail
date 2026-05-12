<template>
    <div class="gsrbr05" v-if="t">
        <section class="visual_section">
            <div class="visual_img">
                <img :src="isMobile ? t.Visual.imgMo : t.Visual.img" :alt="t.Visual.alt" />
            </div>
            <div class="visual_content">
                <div class="text_box cont_inner">
                    <span>{{ t.Visual.subContent_1 }}</span>
                    <span>{{ t.Visual.subContent_2 }}</span>
                    <span>{{ t.Visual.subContent_3 }}</span>
                </div>
            </div>
        </section>

        <section class="body_wrap">
            <div class="cont_area">
                <article class="cont_inner">
                    <h3>{{ t.SubTitle }}</h3>
                    <div class="intro_text">
                        <p>{{ t.SubContent_1 }}</p>
                        <p v-html="t.SubContent_2"></p>
                    </div>
                    <ul>
                        <li class="bi_section">
                            <h4>{{ t.Bi.title }}</h4>
                            <span><img :src="isMobile ? t.Bi.imgMo : t.Bi.img" :alt="t.Bi.alt"></span>
                        </li>
                    </ul>
                </article>
            </div>
            <div class="cont_inner">
                <h3>{{ t.BenefitTitle }}</h3>
                <div class="benefit_container">
                    <div class="benefit_row" v-for="(row, rIdx) in t.BenefitRows" :key="'row-' + rIdx" :class="{ mt64: rIdx > 0 }">
                        <section class="benefit_item" v-for="(item, iIdx) in row" :key="'item-' + iIdx">
                            <div class="info">
                                <span class="point_color">{{ item.num }}</span>
                                <strong class="tit">{{ item.title }}</strong>
                                <p class="desc" v-html="item.desc"></p>
                                <ul class="bullet_01" v-if="item.bullets">
                                    <li v-for="(bullet, bIdx) in item.bullets" :key="bIdx">{{ bullet }}</li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>

                <section class="brand_section mt200">
                    <h3>{{ t.BrandTitle }}</h3>
                    <p class="brand_sub_txt">{{ t.BrandDesc }}</p>
                    <div class="brand_logos">
                        <ul class="logo_flex">
                            <li v-for="(logo, lIdx) in (isMobile ? t.BrandLogosMo : t.BrandLogos)" :key="lIdx">
                                <img :src="logo" alt="brand logo" />
                            </li>
                        </ul>
                    </div>
                </section>

                <section class="how_to_section mt200">
                    <h3>{{ t.StepTitle }}</h3>
                    
                    <div class="step_group mt64" v-for="(group, gIdx) in t.StepGroups" :key="'group-' + gIdx">
                        <h4>{{ group.title }}</h4>
                        <ul class="step_box">
                            <li class="step_unit" v-for="(step, sIdx) in group.steps" :key="'step-' + sIdx">
                                <div class="unit_info">
                                    <span class="point_color">{{ step.label }}</span>
                                    <p v-html="step.text"></p>
                                </div>
                                <img :src="isMobile ? step.imgMo : step.img" :class="{ inner_img: step.isPhone }" alt="" />
                            </li>
                        </ul>
                    </div>

                    <div class="btn-group mt64">
                        <Buttons 
                            v-for="(btn, bIdx) in t.AppButtons" 
                            :key="bIdx"
                            btn-class="btn_big primary"
                        >
                            {{ btn }}
                        </Buttons>
                    </div>
                </section>

                <!-- 26.05.11 Edit 이종환 : 하단 목록 버튼 통일 -->
                <div class="bottom_btns">
                    <button class="btn_back" @click="handleBack">{{ t.ListBack }}</button>
                </div>
                <!-- //26.05.11 Edit 이종환 : 하단 목록 버튼 통일 -->
            </div>
        </section>
    </div>
</template>

<script>
import Buttons from "@/components/Buttons.vue";

export default {
    name: "gsrbr05",
    components: {
        Buttons
    },
    props: {
        lang: { type: String, default: "ko" }
    },
    data() {
        return {
            isMobile: false,
            langData: {
                ko: {
                    Visual: {
                        img: require("@/assets/images/dummy/gsrbr05.png"),
                        imgMo: require("@/assets/images/dummy/gsrbr05_mo.png"),
                        alt: "빠르고 안전한 통합 간편결제 서비스 GS Pay",
                        subContent_1: "빠르고 안전한",
                        subContent_2: "통합 간편결제 서비스",
                        subContent_3: "GS Pay",
                    },
                    SubTitle: "브랜드 소개",
                    SubContent_1: "GS Pay는 GS리테일의 모든 브랜드에서 사용 가능한 통합 간편결제 서비스입니다.",
                    Bi: {
                        title: "BI 로고",
                        img: require("@/assets/images/dummy/gsrbr05_bi.png"),
                        imgMo: require("@/assets/images/dummy/gsrbr05_bi_mo.png"),
                        alt: "GS Pay BI 로고"
                    },
                    SubContent_2: "QR코드 스캔 한 번으로 빠르고 안전하게 결제한 수 있습니다. 결제할 때마다 포인트가 적립되어 더욱 알뜰한 소비가 가능합니다.",
                    BenefitTitle: "쉽고 간편한 GS Pay",
                    BenefitRows: [
                        [
                            { num: "01", title: "쓸 때 마다 돌아오는 2%", desc: "GS Pay로 결제할 때마다 GS ALL 포인트 2%가 차곡차곡 쌓여요.", bullets: ["계좌 연동 결제 한정 기본 0.1%+추가 1.9%"] },
                            { num: "02", title: "오직 GS Pay만!", desc: "GS 더프레시와의 통합 구매를 통해 합리적인 가격에 판매", bullets: ["행사 상품 및 참여 브랜드는 매월 상이"] }
                        ],
                        [
                            { num: "03", title: "절대 놓칠 일 없는 혜택", desc: "포인트, 쿠폰, 통신사 할인, 팝카드 최대 10% 할인까지!<br/>간편하게 한 번에 혜택 받아요", bullets: ["오프라인 결제 시"] },
                            { num: "04", title: "안전하고 빠르게!", desc: "원클릭 결제 설정 한번이면 추가 인증없이 바로 결제할 수 있어요." }
                        ]
                    ],
                    BrandTitle: "결제 가능 브랜드",
                    BrandDesc: "GS리테일 전 브랜드 가맹점 (온/오프라인)",
                    BrandLogos: [
                        require("@/assets/images/dummy/gsrbr05_logo_gs25.png"),
                        require("@/assets/images/dummy/gsrbr05_logo_gsshop.png"),
                        require("@/assets/images/dummy/gsrbr05_logo_gsfresh.png"),
                    ],
                    BrandLogosMo: [
                        require("@/assets/images/dummy/gsrbr05_logo_gs25_mo.png"),
                        require("@/assets/images/dummy/gsrbr05_logo_gsshop_mo.png"),
                        require("@/assets/images/dummy/gsrbr05_logo_gsfresh_mo.png"),
                    ],
                    StepTitle: "GS Pay 이용 방법",
                    StepGroups: [
                        {
                            title: "온라인",
                            steps: [
                                { label: "Step 1", text: "주문서에서 GS Pay 결제수단 등록", img: require("@/assets/images/dummy/gsrbr05_on_1.png"), imgMo: require("@/assets/images/dummy/gsrbr05_on_1_mo.png") },
                                { label: "Step 2", text: "등록된 카드/계좌로 결제하기", img: require("@/assets/images/dummy/gsrbr05_on_2.png"), imgMo: require("@/assets/images/dummy/gsrbr05_on_2_mo.png") }
                            ]
                        },
                        {
                            title: "오프라인",
                            steps: [
                                { label: "Step 1", text: "우리동네GS앱에서<br/>GS Pay 가입", img: require("@/assets/images/dummy/gsrbr05_op_1.png"), imgMo: require("@/assets/images/dummy/gsrbr05_op_1_mo.png") },
                                { label: "Step 2", text: "내 카드/계좌<br/>간편하게 등록", img: require("@/assets/images/dummy/gsrbr05_op_2.png"), imgMo: require("@/assets/images/dummy/gsrbr05_op_2_mo.png") },
                                { label: "Step 3", text: "매장에서 GS Pay로<br/>결제 · 적립하기", img: require("@/assets/images/dummy/gsrbr05_op_3.png"), imgMo: require("@/assets/images/dummy/gsrbr05_op_3_mo.png"), isPhone: true }
                            ]
                        }
                    ],
                    AppButtons: ["우리동네GS앱(매장)에서 이용하기", "GS SHOP에서 이용하기"],
                    ListBack: "목록으로 돌아가기"
                }
            }
        };
    },
    computed: {
        t() { return this.langData[this.lang] || this.langData.ko; }
    },
    mounted() {
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkMobile);
    },
    methods: {
        checkMobile() { this.isMobile = window.innerWidth < 768; },
        handleBack() { this.$router.back(); }
    }
};
</script>

<style scoped>
.gsrbr05 { width: 100%; position: relative; }
.body_wrap {padding-bottom:200px;}
.cont_inner { width: 100%; max-width: 1420px; margin: 0 auto; padding: 0 20px; }
img { width: 100%; display: block; }
h3 { margin-bottom:16px; color: #161616; font-size: 48px; font-weight: 700; }
h4 { font-size: 32px; font-weight: 700; color: #161616; margin-bottom: 40px;}
div.cont_inner {padding-top:200px}

/* Visual Section */
.visual_section { width: 100%; position: relative; overflow: hidden; }
.visual_content { position: absolute; top: 50%; left: 0; transform: translateY(-50%); width: 100%; z-index: 2; }
.text_box span { color: #fff; font-size: 72px; font-weight: 700; display: block; line-height: 1.2; }

/* Body Content Area */
.body_wrap .cont_area { padding: 200px 0; background: #F8F8F8; }
.intro_text {margin-bottom:64px;}
.intro_text p { color: #161616; font-size: 24px; font-weight: 700; line-height: 1.35; }
.body_wrap .cont_area .cont_inner .intro_text + ul {margin-bottom:40px; padding:50px; background:#fff;}
.bi_section {margin-top:0px !important;}
.bi_section {width:100%; margin-top:60px;}
.bi_section span {widows:100%; display:block;}
.bi_section span img {width:100%; display:block; object-fit:cover;}

/* Benefits */
.benefit_row { display: flex; gap: 20px; padding-bottom: 64px; border-bottom: 1px solid #e5e5e9; }
.benefit_row + .benefit_row { border-bottom: 0; padding-bottom: 0; margin-top: 64px; }
/* .benefit_row.mt64 { border-bottom: 0; padding-bottom: 0; margin-top: 64px; } */
.benefit_item { flex: 1; display: flex; gap: 24px; align-items: flex-start; }
.info {padding-left:104px; position:relative;}
/* 26.05.12 Edit 이종환 */
.info::before {content:''; width:80px; height:80px; background:#F2F2F4; border-radius:50%; position:absolute; top:0; left:0; display:block;}
.info::after {width:40px; height:40px; background-image:url('@/assets/images/sub/icon_cont_40.png'); background-repeat:no-repeat; background-size:auto 415px; content:''; position:absolute; top:20px; left:20px; display:block;}

.benefit_row .benefit_item:nth-child(1) .info:after {background-position:-340px -346px;}
.benefit_row .benefit_item:nth-child(2) .info:after {background-position:-420px -346px;}
.benefit_row + .benefit_row .benefit_item:nth-child(1) .info:after {background-position:-500px -346px;}
.benefit_row + .benefit_row .benefit_item:nth-child(2) .info:after {background-position:-20px -346px;}
/* //26.05.12 Edit 이종환 */
.info .point_color { color: #107af2; font-size: 28px; font-weight: 700; display: block; margin-bottom: 4px; }
.info .tit { font-size: 28px; font-weight: 700; color: #161616; display: block; margin-bottom: 16px; }
.info .desc { font-size: 20px; font-weight: 700; color: #67676b; line-height: 1.35; margin-bottom: 16px; }
.benefit_container {margin-top:64px;}

/* Brand Logos */
.brand_section h3 {margin-bottom:18px;}
.brand_sub_txt { font-size: 24px; font-weight: 700; color: #161616; margin-bottom: 16px; }
.logo_flex {margin-top:60px; padding:0; display: flex; gap: 20px; align-items: center; flex-wrap: wrap;}
.logo_flex li {width:calc((100% - (20px * 2)) / 3); height: 180px; padding:20px; background:#F8F8F8; border-radius:12px; text-align:center; display:flex; align-items:center;}
.logo_flex img { max-width: 100%; max-height:32px; margin:0 auto; object-fit: contain; }

/* Steps */
.step_box { display: flex; gap: 20px; padding: 56px 64px; background: #f8f8f8; border-radius: 12px;}
.step_unit { flex: 1; display: flex; flex-direction: column; gap: 24px; }
.unit_info .point_color { color: #107af2; font-size: 20px; font-weight: 700; display: block; margin-bottom: 6px; }
.unit_info p { font-size: 24px; font-weight: 700; color: #161616; line-height: 1.35; }
.unit_img { position: relative; width: 100%; height: 340px; overflow: hidden; margin: 0; }
.unit_img.phone_bg { background: #c4c4c4; border: 5px solid #000; border-radius: 34px; }
.unit_img .inner_img { width: 260px; margin: 58px auto 0; }
.gradient { position: absolute; bottom: 0; left: 0; width: 100%; height: 90px; background: linear-gradient(180deg, rgba(248, 248, 248, 0) 0%, rgba(248, 248, 248, 1) 100%); }

/* Buttons Area */
.btn-group { display: flex; flex-direction: column; align-items: center; gap: 12px; }
.btn-group button {width:320px;}
.btn_list_back { background: transparent; padding: 0; border: 0; cursor: pointer; }
.btn_list_back span { color: #161616; font-size: 20px; display: flex; align-items: center; gap: 12px; }
.btn_list_back span::before { width: 16px; height: 16px; background-color: red; content: ''; display: inline-block; }
.btn_mid.border {display:none;}
.bottom_btns + .btn_big.border {display:none;}
.sub_btn_group button {margin-right:24px; padding:6px 4px; color:#161616; font-size:14px; background:transparent; display:flex; align-items:center; gap:8px;}
.sub_btn_group button:last-of-type {margin-right:0;}
.sub_btn_group button::after {content:''; width:16px; height:16px; background:red; display:inline-flex;}

/* Utils */
.mt64 { margin-top: 64px; }
.mt80 { margin-top: 80px; }
.mt200 { margin-top: 200px; }
.mb100 { margin-bottom: 100px; }
.bullet_01 li { position: relative; padding-left: 12px; font-size: 1.8rem; color: #67676b; line-height: 1.4; list-style: none; }
.bullet_01 li::before { content: ''; position: absolute; left: 0; top: 10px; width: 4px; height: 4px; background: #67676b; border-radius: 50%; }

/* Mobile Responsive */
@media screen and (max-width: 1024px) {
    h4 {margin-bottom:24px; font-size:18px;}
    .logo_flex li {width: calc((100% - 20px) / 2);}
    .benefit_row { flex-direction: column; }
    .step_box { flex-direction: column; padding:32px; }
    .bi_section {padding:0px;}
}
@media screen and (max-width: 767px) {
    .intro_text {margin-bottom:40px;}
    .intro_text p {font-size:16px; font-weight:400; line-height:1.5;}
    .intro_text p:first-of-type {margin-bottom:20px;}
    .body_wrap .cont_area .cont_inner .intro_text + ul {padding:32px; border-radius:12px;}
    .benefit_container {margin-top:0;}
    .logo_flex {margin-top: 0px; gap: 12px;}
    .logo_flex li {width: 100%; height:70px; padding: 15px;}
    .logo_flex img {max-height:23px;}
    .text_box span { font-size: 32px; text-align:center;}
    .body_wrap .cont_area {padding:60px 0;}
    div.cont_inner {padding-top:80px;}
    .info {padding-left:76px;}
    .info .tit {font-size:18px;}
    .info::before {width:60px; height:60px;}
    .info::after {width:32px; height:32px; background-image:url('@/assets/images/sub/icon_cont_32.png'); top:14px; left:14px;}
    .point_color, .point_color + p, .info .desc, .bullet_01 li, .brand_sub_txt {font-size:16px !important;}
    :deep(.point_color) + p br {display:none;}
    .benefit_row {padding-bottom:0; border-bottom:0; gap:40px}
    .benefit_row + .benefit_row {margin-top:40px;}
    /* .benefit_row.mt64 {margin-top:40px;} */
    h3 { font-size: 24px; margin-bottom: 30px; }
    .unit_img { height: 280px; }
    .unit_info + img {width:80%; margin:0 auto;}
    .step_box {gap:40px;}
    .btn-group button {width:100%;}
    .mt200 {margin-top:80px}
    .mt64 {margin-top:0px;}
    .bottom_btns + .btn_big.border {margin-top:0px; margin-bottom:80px; display:flex; justify-content: center;}
    .step_group {margin-bottom:40px;}
    .step_group:last-of-type {margin-bottom:0px;}
}
</style>