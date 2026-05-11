<template>
    <div class="gsrbr04" v-if="t">
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
                        <p>{{ t.SubContent_2 }}</p>
                    </div>
                    <ul>
                        <li class="bi_section">
                            <h4>{{ t.Bi.title }}
                                <p v-html="t.Bi.sub_desc"></p>
                            </h4>
                            <span><img :src="isMobile ? t.Bi.imgMo : t.Bi.img" :alt="t.Bi.alt"></span>
                        </li>
                        <li>
                            <div class="qr_download_area pc">
                                <div class="qr_info">
                                    <strong class="qr_title">{{ t.Intro.qrTitle }}</strong>
                                    <p class="qr_desc" v-html="t.Intro.qrDesc"></p>
                                </div>
                            </div>
                            <div class="qr_download_area mt40 mo">
                                <a href="javascript:void(0);">
                                    <strong>{{ t.Intro.qrTitle }}</strong>
                                    <span>{{ t.Intro.qrDesc_mo }}</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </article>
            </div>

            <div class="cont_inner benefit_section">
                <h3 v-html="t.BenefitTitle"></h3>  
                <div v-for="(row, rIdx) in t.BenefitRows" :key="'row-' + rIdx">
                    <ul class="benefit_list">
                        <li v-for="(item, iIdx) in row" :key="'item-' + iIdx">
                            <div class="benefit_info">
                                <p class="tit_area">
                                    <strong>{{ item.title }}</strong>
                                    <a v-if="item.popId" class="btn_link ico_link" @click="openModal" :data-popid="item.popId" :data-type="item.popType" :data-cont="item.popCont"></a>
                                </p>
                                <span class="desc">{{ item.desc }}</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- 26.05.11 Edit 이종환 : 하단 목록 버튼 통일 -->
                <div class="bottom_btns">
                    <button class="btn_back" @click="handleBack">{{ t.ListBack }}</button>
                </div>
                <!-- //26.05.11 Edit 이종환 : 하단 목록 버튼 통일 -->
            </div>

        </section>


        <div id="gsrbr0401" class="modal_wrap">
            <div class="modal_container"></div>
        </div>

        <div id="gsrbr0402" class="modal_wrap">
            <div class="modal_container"></div>
        </div>

        <div id="gsrbr0403" class="modal_wrap">
            <div class="modal_container"></div>
        </div>
        <div id="gsrbr0404" class="modal_wrap">
            <div class="modal_container"></div>
        </div>
    </div>
</template>

<script>
import modal from "@/assets/js/modal";

export default {
    name: "gsrbr04",
    props: {
        lang: { type: String, default: "ko" }
    },
    data() {
        return {
            isMobile: false,
            langData: {
                ko: {
                    Visual: {
                        img: require("@/assets/images/dummy/gsrbr04.png"),
                        imgMo: require("@/assets/images/dummy/gsrbr04_mo.png"),
                        alt: "편의점·슈퍼마켓을 하나로 GS리테일 O4O 통합 앱 우리동네GS",
                        subContent_1: "편의점·슈퍼마켓을 하나로",
                        subContent_2: "GS리테일 O4O 통합 앱",
                        subContent_3: "우리동네GS",
                    },
                    SubTitle: "브랜드 소개",
                    SubContent_1: "전국 GS25·GS 더프레시의 재고 확인, 통합 검색, 배달·픽업까지 일상을 연결하고,",
                    SubContent_2: "증정품 보관 '나만의 냉장고'·주류 스마트오더 '와인25플러스'로, 편의점의 경계를 넘는 생활을 제안합니다.",
                    Bi: {
                        title: "우리동네GS App",
                        sub_desc: `<span>가까운 매장 재고 확인부터 배달·픽업은 물론</span><span>증정품 보관과 택배 예약까지 한 번에!</span><span>우리동네GS 앱 하나로 필요한 모든 것을 해결하세요.</span>`,
                        img: require("@/assets/images/dummy/gsrbr04_brand.png"),
                        imgMo: require("@/assets/images/dummy/gsrbr04_brand_mo.png"),
                        alt: "우리동네GS App"
                    },
                    Intro: {
                        qrTitle: "우리동네GS 앱 다운로드",
                        qrDesc: "우리동네GS 앱을 다운로드하고, 다양한 이벤트와 차별화 상품을 만나보세요.<br/>QR코드를 스캔하면 앱 다운로드 페이지로 이동합니다.",
                        qrDesc_mo: "GS25의 다양한 이벤트와 차별화 상품",
                    },
                    BenefitTitle: "‘우리동네 GS’ 앱에서 <br/>일상의 모든 것을 해결하세요.",
                    BenefitRows: [
                        [
                            { title: "재고찾기/검색", desc: "전국 매장별 실시간 상품 재고 현황 및 잔여 수량을 간편하게 확인할 수 있습니다.", popId: "gsrbr0403", popType: "lg", popCont: "gsrbr0403"},
                            { title: "나만의 냉장고", desc: "GS25에서 받은 증정품이나 경품, GS THE FRESH의 사전예약 상품을 보관하고 원하는 때에 찾아갈 수 있습니다." },
                            { title: "배달/픽업", desc: "GS25,GS THE FRESH의 인기상품을 배달/픽업으로 간편하게 만나보세요!", popId: "gsrbr0401", popType: "lg", popCont: "gsrbr0401"},
                            { title: "사전 예약", desc: "우리동네GS 앱에서 원하는 매장, 원하는 시간에 수령해갈 수 있는 사전예약 서비스를 지원합니다." },
                            { title: "와인25플러스", desc: "5천여 종의 와인과 다양한 주류를 주문하고 전국 편의점/수퍼 매장에서 손 쉽게 수령할 수 있습니다.", popId: "gsrbr0402", popType: "lg", popCont: "gsrbr0402" },
                            { title: "간편결제, 간편 로그인", desc: "다양한 수단으로 간편결제 및 간편 로그인 서비스를 지원합니다." },
                            { title: "멤버십 혜택", desc: "우리동네GS 앱에서 원하는 매장, 원하는 시간에 수령해갈 수 있는 사전예약 서비스를 지원합니다." },
                            { title: "택배 서비스", desc: "5천여 종의 와인과 다양한 주류를 주문하고 전국 편의점/수퍼 매장에서 손 쉽게 수령할 수 있습니다." },
                            { title: "행사/이벤트", desc: "다양한 수단으로 간편결제 및 간편 로그인 서비스를 지원합니다.", popId: "gsrbr0404", popType: "lg", popCont: "gsrbr0404" }
                        ]
                    ],
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
        handleBack() { this.$router.back(); },
        openModal(event) {
            const el = event.currentTarget;
            const popId = el.dataset.popid;
            const type = el.dataset.type || "default";
            const cont = el.dataset.cont;
            modal.open(popId, type, el, cont);
        },
    }
};
</script>

<style scoped>
.gsrbr04 { position: relative; width: 100%; }
.cont_inner { width: 100%; max-width: 1420px; margin: 0 auto; padding: 0 20px; }
.benefit_section { padding-top: 200px; }
img { display: block; width: 100%; }
h3 { margin-bottom: 64px; color: #161616; font-size: 48px; font-weight: 700; }
h4 { display: flex; justify-content: space-between; margin-bottom: 40px; color: #161616; font-size: 32px; font-weight: 700; }

/* Visual Section */
.visual_section { position: relative; width: 100%; overflow: hidden; }
.visual_content { position: absolute; top: 50%; left: 0; z-index: 2; width: 100%; transform: translateY(-50%); }
.text_box span { display: block; color: #fff; font-size: 72px; font-weight: 700; line-height: 1.2; }

/* Body Content Area */
.body_wrap .cont_area { padding: 200px 0; background: #F8F8F8; }
.intro_text p { color: #161616; font-size: 24px; font-weight: 700; line-height: 1.35; }
.body_wrap .cont_area .cont_inner .intro_text + ul { margin-top: 65px; margin-bottom: 40px; padding: 50px; background: #fff; list-style: none; }

.bi_section { position: relative; width: 100%; margin-top: 0 !important; }
.bi_section span { display: block; width: 100%; }
.bi_section span img { display: block; width: 100%; object-fit: cover; }
.bi_section h4 p {width: 50%; color: #67676F; font-size: 20px; font-weight: 400; display: flex; flex-direction: column; }

.qr_download_area { display: flex; align-items: center; margin-top: 40px; }
.pc.qr_download_area::before { display: inline-block; width: 90px; height: 90px; background: url('@/assets/images/dummy/gsrbr06_qr.png') no-repeat center / cover; content: ''; }
.pc.qr_download_area .qr_info { display: flex; flex-direction: column; padding-left: 20px; }
.pc.qr_download_area .qr_info strong { margin-bottom: 8px; color: #161616; font-size: 20px; font-weight: 700; }
.pc.qr_download_area .qr_info p { color: #67676F; font-size: 14px; }

.qr_download_area.mo a { display: flex; flex-direction: column; gap: 4px; padding-left: 60px; position: relative; text-decoration: none; }
.qr_download_area.mo a::before { display: inline-block; position: absolute; top: -5px; left: 0; width: 48px; height: 48px; background: url('@/assets/images/dummy/gsrbr06_app_icon.png') no-repeat center / cover; content: ''; }
.mo.qr_download_area a strong { display: flex; align-items: center; gap: 4px; color: #161616; font-size: 16px; font-weight: 700; }
.mo.qr_download_area a strong::after { display: inline-block; width: 20px; height: 20px; background: red; content: ''; }

/* Benefit Section */
.benefit_list { display: flex; flex-wrap: wrap; gap:80px 20px; padding: 0; list-style: none; }
.benefit_list li { position: relative; width: calc((100% - (20px * 2)) / 3); padding-top: 104px; }
.benefit_list li::before { position: absolute; top: 0; left: 0; width: 80px; height: 80px; background-color: #eee; border-radius: 50%; content: ''; }
.benefit_list li::after {width:40px; height:40px; background: url('@/assets/images/sub/icon_br04_search_40.png') 0 0 no-repeat; background-size:cover; content:''; position:absolute; top:20px; left:20px; display:block;}
/* 아이콘 규칙 수립 후 수정 */
.benefit_list li:nth-child(2)::after, .benefit_list li:nth-child(3)::after {width:40px; height:40px; background:url('@/assets/images/sub/icon_br04_cart_40.png') 0 0 no-repeat; background-size:cover; content:''; position:absolute; top:20px; left:20px; display:block;}

.benefit_info .tit_area { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
.benefit_info .tit_area strong { color: #161616; font-size: 24px; font-weight: 700; }
.benefit_info .btn_link { color: #107af2; font-size: 14px; text-decoration: underline; }
.benefit_info .desc { display: block; color: #67676f; font-size: 18px; line-height: 1.5; }
/* 26.05.11 제거
.benefit_info a {font-size:0px;}
.benefit_info a::after {content:''; width:24px; height:24px; background:red; display:inline-block;}
*/

/* Buttons Area */
.btn_list_back { display: block; background: transparent; padding: 0; border: 0; cursor: pointer; }
.btn_list_back span { display: flex; align-items: center; gap: 12px; color: #161616; font-size: 20px; }
.btn_list_back span::before { display: inline-block; width: 16px; height: 16px; background-color: red; content: ''; }

/* Utils */
.mt40 { margin-top: 40px; }

/* Mobile Responsive */
@media screen and (min-width: 1024px) {
    :deep(.qr_download_area).pc { display: flex; }
    :deep(.qr_download_area).mo { display: none; }
}

@media screen and (max-width: 1024px) {
    h4 { font-size: 18px; }
    .bi_section { padding: 0; }
    .pc { display: none; }
    .mo { display: flex; }
    .benefit_list { gap: 40px 15px; }
    .benefit_list li { width: calc((100% - 15px) / 2); padding-top: 70px; }
    .benefit_info .tit_area strong { font-size:18px; }
    .benefit_info .desc { font-size: 16px; }
}

@media screen and (max-width: 767px) {
    h3 {font-size:24px;}
    .intro_text { margin-bottom: 40px; }
    .intro_text p { font-size: 16px; font-weight: 400; line-height: 1.5; }
    .intro_text p:first-of-type { margin-bottom: 20px; }
    .text_box span { font-size: 32px; }
    .body_wrap .cont_area { padding: 60px 0; }
    .benefit_section { padding-top: 80px; }
    .benefit_list { gap: 32px 10px; }
    .benefit_list li { width: calc((100% - 10px) / 2); }
    .bottom_btns + .btn_big.border { display: flex; justify-content: center; margin-top: 100px; margin-bottom: 80px; }
    .bi_section h4 {flex-direction:column;}
    .body_wrap .cont_area .cont_inner .intro_text + ul {padding:30px;}
    .bi_section h4 p {width:100%; margin-top:8px; font-size:16px; flex-direction:column;}
}
</style>