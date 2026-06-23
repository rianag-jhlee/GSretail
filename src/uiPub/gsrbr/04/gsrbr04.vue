<template>
    <div class="gsrbr04" v-if="t">
        <section class="visual_section top_visual">
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
                        <p v-html="t.SubContent_1"></p>
                        <!-- 26.05.27 Del 이종환 <p>{{ t.SubContent_2 }}</p> -->
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

        <!-- 26.06.08 Add 이종환 : 팝업 추가 -->
        <!-- 나만의 냉장고 -->
        <div id="gsrbr0405" class="modal_wrap">
            <div class="modal_container"></div>
        </div>

        <!-- 사전예약 -->
        <div id="gsrbr0406" class="modal_wrap">
            <div class="modal_container"></div>
        </div>
        <!-- //26.06.08 Add 이종환 : 팝업 추가 -->
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
                        alt: "편의점·수퍼마켓을 하나로 GS리테일 O4O 통합 앱 우리동네GS", /*26.06.22 add 정다희 : 오타수정*/ 
                        subContent_1: "편의점·수퍼마켓을 하나로",/*26.06.22 add 정다희 : 오타수정*/ 
                        subContent_2: "GS리테일 O4O 통합 앱",
                        subContent_3: "우리동네GS",
                    },
                    SubTitle: "브랜드 소개",
                    SubContent_1: "편의점도, 수퍼마켓도, 이제 하나의 ‘우리동네GS’ 앱으로.<br/> 전국 GS25 · GS THE FRESH의 재고확인, 배달, 픽업부터<br/> 증정품 보관 '나만의 냉장고’, 주류 스마트오더 '와인25플러스’까지.<br/><br class='m_br'/> 가까운 매장이 더 가깝게, 매장 안팎의 경계 없이, 더 가까운 일상을 제안합니다.",
                    // SubContent_2: "증정품 보관 '나만의 냉장고'·주류 스마트오더 '와인25플러스'로, 편의점의 경계를 넘는 생활을 제안합니다.",
                    Bi: {
                        title: "우리동네GS App",
                        sub_desc: `<span>가까운 매장 재고 확인부터 배달·픽업은 물론 증정품 보관과 택배 예약까지 한 번에!</span><span>우리동네GS 앱 하나로 필요한 모든 것을 해결하세요.</span>`, /*26.06.22 del 정다희 : 2번째 span 삭제*/ 
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
                            { title: "나만의 냉장고", desc: "GS25에서 받은 증정품이나 경품, GS THE FRESH의 사전예약 상품을 보관하고 원하는 때에 찾아갈 수 있습니다." , popId: "gsrbr0405", popType: "lg", popCont: "gsrbr0405"}, //26.06.08 Edit 이종환 : 나만의 냉장고 팝업 (gsrbr0405) 추가
                            { title: "배달/픽업", desc: "GS25,GS THE FRESH의 인기상품을 배달/픽업으로 간편하게 만나보세요!", popId: "gsrbr0401", popType: "lg", popCont: "gsrbr0401"},
                            { title: "사전예약", desc: "품절 걱정없이, 원하는 상품을 미리 주문하고 원하는 매장·시간에 수령하세요. 점포에서 판매하지 않는 기획전 단독 상품도 사전예약으로 만나볼 수 있습니다.",  popId: "gsrbr0406", popType: "lg", popCont: "gsrbr0406"}, /*26.06.23 add 정다희 : 내용 수정*/ 
                            { title: "와인25플러스", desc: "와인은 물론 위스키 맥주, 사케까지. 다양한 주류를 앱에서 주문하고 전국 편의점·수퍼에서 스마트하게 수령할 수 있습니다.", popId: "gsrbr0402", popType: "lg", popCont: "gsrbr0402" }, /*26.06.23 add 정다희 : 내용 수정*/ 
                            { title: "GS Pay/QR결제", desc: "GS Pay 또는 QR코드 한 번으로 전국 GS25, GS THE FRESH 매장에서 빠르게 결제할 수 있습니다. 우리동네GS 앱 하나로 로그인부터 결제까지 한 번에." }, /*26.06.23 add 정다희 : 내용 수정*/ 
                            { title: "멤버십 혜택", desc: "GS리테일 통합 멤버십 'GS ALL'. 우리동네GS 앱에서 나의 멤버십 등급과 브랜드별 혜택 쿠폰을 한눈에 확인할 수 있습니다." }, /*26.06.23 add 정다희 : 내용 수정*/ 
                            { title: "택배 서비스", desc: "가까운 GS25에서 국내택배·반값택배를 접수하세요. 앱으로 미리 예약하고 매장에서 간편하게 접수할 수 있습니다." }, /*26.06.23 add 정다희 : 내용 수정*/ 
                            { title: "행사/이벤트", desc: "현재 진행 중인 행사와 이벤트를 확인하고 참여 내역도 조회할 수 있습니다.", popId: "gsrbr0404", popType: "lg", popCont: "gsrbr0404" } /*26.06.23 add 정다희 : 내용 수정*/ 
                        ]
                    ],
                    ListBack: "목록으로 돌아가기"
                },
                en: {
                    Visual: {
                        img: require("@/assets/images/dummy/gsrbr04.png"),
                        imgMo: require("@/assets/images/dummy/gsrbr04_mo.png"),
                        alt: "Convenience stores and supermarkets in one—Our Neighborhood GS, GS Retail's O4O integrated app"/* 260604 번역 */,
                        subContent_1: "Convenience stores and supermarkets in one"/* 260604 번역 */,
                        subContent_2: "GS Retail Integrated O4O App"/* 260604 번역 */,
                        subContent_3: "Our Neighborhood GS",
                    },
                    SubTitle: "About the Brand",
                    SubContent_1: "Convenience stores and supermarkets—now all in one 'Our Neighborhood GS' app.<br/> From stock checks, delivery, and pickup at GS25 and GS THE FRESH nationwide<br/> From 'My Fridge' for storing free gifts to 'Wine25 Plus' for smart alcohol ordering.<br/><br class='m_br'/> Bringing nearby stores even closer, with no boundary between inside and outside the store, we propose a closer everyday life."/* 260604 번역 */,
                    // SubContent_2: "증정품 보관 '나만의 냉장고'·주류 스마트오더 '와인25플러스'로, 편의점의 경계를 넘는 생활을 제안합니다.",
                    Bi: {
                        title: "Our Neighborhood GS App"/* 260604 번역 */,
                        sub_desc: `From checking nearby store inventory to delivery and pick-up, storing complimentary items, and booking delivery services — all in one place! Handle everything you need with the Our Neighborhood GS app.`,
                        img: require("@/assets/images/dummy/gsrbr04_brand.png"),
                        imgMo: require("@/assets/images/dummy/gsrbr04_brand_mo.png"),
                        alt: "Our Neighborhood GS App"/* 260604 번역 */
                    },
                    Intro: {
                        qrTitle: "Download the Our Neighborhood GS app"/* 260604 번역 */,
                        qrDesc: "Download the Our Neighborhood GS app and discover a variety of events and exclusive products.<br/>Scanning the QR code takes you to the app download page."/* 260604 번역 */,
                        qrDesc_mo: "GS25's diverse events and distinctive products"/* 260604 번역 */,
                    },
                    BenefitTitle: "On the 'Our Neighborhood GS' app <br/>Take care of everything in your daily life."/* 260604 번역 */,
                    BenefitRows: [
                        [
                            { title: "Stock Finder and Search", desc: "Easily check real-time inventory and remaining stock at stores nationwide.", popId: "gsrbr0403", popType: "lg", popCont: "gsrbr0403"},
                            { title: "My Refrigerator", desc: "You can store giveaways or prizes received at GS25, as well as pre-ordered products from GS THE FRESH, and pick them up whenever you like."/* 260604 번역 */  , popId: "gsrbr0405", popType: "lg", popCont: "gsrbr0405"}, //26.06.08 Edit 이종환 : 나만의 냉장고 팝업 (gsrbr0405) 추가},
                            { title: "Delivery and Pick-up", desc: "Get popular products from GS25 and GS THE FRESH delivered or ready for pick-up! Download the 'Our Neighborhood GS' app for exclusive events and extra discounts!", popId: "gsrbr0401", popType: "lg", popCont: "gsrbr0401"},
                            { title: "Pre-Order", desc: "The Our Neighborhood GS app offers a pre-order service that lets you pick up items at the store and time of your choice.",  popId: "gsrbr0406", popType: "lg", popCont: "gsrbr0406"}, //26.06.08 Edit 이종환 : 사전예약 팝업 (gsrbr0405) 추가
                            { title: "Wine25Plus", desc: "Order from over 5,000 wine varieties and a wide selection of alcoholic beverages, and pick them up at convenience stores and supermarkets nationwide.", popId: "gsrbr0402", popType: "lg", popCont: "gsrbr0402" },
                            { title: "Easy Payment and Easy Login", desc: "Easy payment and login are available through a variety of methods." },
                            { title: "Membership Benefits", desc: "" }, /*26.06.22 add 정다희 : 내용 수정으로 영문 번역 작업 요망*/ 
                            { title: "Delivery Service", desc: "" }, /*26.06.22 add 정다희 : 내용 수정으로 영문 번역 작업 요망*/ 
                            { title: "Events & Promotions", desc: "", popId: "gsrbr0404", popType: "lg", popCont: "gsrbr0404" } /*26.06.22 add 정다희 : 내용 수정으로 영문 번역 작업 요망*/ 
                        ]
                    ],
                    ListBack: "Back to Brand List"
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
:deep(.p_br) { display: block; }
:deep(.m_br) { display: none; }

.gsrbr04 { position: relative; width: 100%; }
.benefit_section { padding-top: 200px; }
img { display: block; width: 100%; }
h3 { margin-bottom:16px; color: #161616; font-size: 48px; font-weight: 700; }
h4 {  margin-bottom: 40px; color: #161616; font-size: 32px; font-weight: 700; }

/* Visual Section */
.visual_section { position: relative; width: 100%; overflow: hidden; }
.visual_content { position: absolute; top: 50%; left: 0; z-index: 2; width: 100%; transform: translateY(-50%); }
.text_box span { display: block; color: #fff; font-size: 72px; font-weight: 700; line-height: 1.2; }

/* Body Content Area */
/* .body_wrap {padding-bottom:200px;} */
.body_wrap .cont_area { padding: 200px 0; background: #F8F8F8; }
.intro_text p { color: #161616; font-size: 24px; font-weight:600; line-height: 1.35; }
.body_wrap .cont_area .cont_inner .intro_text + ul { margin-top: 65px; margin-bottom: 40px; padding: 50px; background: #fff; border-radius: 12px; }

.bi_section { position: relative; width: 100%; margin-top: 0 !important; }
.bi_section span { display: block; width: 100%; }
.bi_section span img { display: block; width: 100%; object-fit: cover; }
.bi_section h4 p {width: 50%; margin-top:16px; color: #67676F; font-size: 20px; font-weight: 400; display: flex; flex-direction: column; }

.qr_download_area { display: flex; align-items: center; margin-top: 40px; }
.pc.qr_download_area::before { display: inline-block; width: 90px; height: 90px; background: url('@/assets/images/dummy/gsrbr06_qr.png') no-repeat center / cover; content: ''; }
.pc.qr_download_area .qr_info { display: flex; flex-direction: column; padding-left: 20px; }
.pc.qr_download_area .qr_info strong { margin-bottom: 8px; color: #161616; font-size: 20px; font-weight: 700; }
.pc.qr_download_area .qr_info p { color: #67676F; font-size: 14px; }

.qr_download_area.mo a { display: flex; flex-direction: column; gap: 4px; padding-left: 60px; position: relative; text-decoration: none; }
.qr_download_area.mo a::before { display: inline-block; position: absolute; top: -5px; left: 0; width: 48px; height: 48px; background: url('@/assets/images/dummy/gsrbr06_app_icon.png') no-repeat center / cover; content: ''; }
.mo.qr_download_area a strong { display: flex; align-items: center; gap: 4px; color: #161616; font-size: 16px; font-weight: 700; }
.mo.qr_download_area a strong::after {content: ""; width: 24px; height: 24px; background-image: url(http://localhost:8080/img/icon_set_24.5b5c044c.png); background-repeat: no-repeat; background-size: auto 95px; background-position: -832px -15px; flex-shrink: 0; display: block;}

/* Benefit Section */
.benefit_list {margin-top:64px; display: flex; flex-wrap: wrap; gap:40px;}
.benefit_list li { position: relative; width: calc((100% - (40px * 2)) / 3); padding-top: 104px; }
.benefit_list li::before { position: absolute; top: 0; left: 0; width: 80px; height: 80px; background-color: #eee; border-radius: 50%; content: ''; }
.benefit_list li::after {width:40px; height:40px; background-repeat:no-repeat; background-position:center; background-size:cover; content:''; position:absolute; top:20px; left:20px; display:block;}
/* 아이콘 규칙 수립 후 수정 */
.benefit_list li:nth-child(1)::after{background-image: url('@/assets/images/sub/icon_br04_inventory_40.png');}
.benefit_list li:nth-child(2)::after{background-image: url('@/assets/images/sub/icon_br04_refrigerator_40.png');}
.benefit_list li:nth-child(3)::after {width:40px; height:40px; background:url('@/assets/images/sub/icon_br04_delivery_40.png');}
.benefit_list li:nth-child(4)::after {width:40px; height:40px; background:url('@/assets/images/sub/icon_br04_reservation_40.png');}
.benefit_list li:nth-child(5)::after {width:40px; height:40px; background:url('@/assets/images/sub/icon_br04_wineplus_40.png');}
.benefit_list li:nth-child(6)::after {width:40px; height:40px; background:url('@/assets/images/sub/icon_br04_easypayment_40.png');}
.benefit_list li:nth-child(7)::after {width:40px; height:40px; background:url('@/assets/images/sub/icon_br04_membership_40.png');}
.benefit_list li:nth-child(8)::after {width:40px; height:40px; background:url('@/assets/images/sub/icon_br04_parcel_40.png');}
.benefit_list li:nth-child(9)::after {width:40px; height:40px; background:url('@/assets/images/sub/icon_br04_event_40.png');}

.benefit_info .tit_area { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
.benefit_info .tit_area strong { color: #161616; font-size: 24px; font-weight: 700; }
.benefit_info .btn_link {padding:0; color: #107af2; font-size: 14px; text-decoration: underline; }
.benefit_info .desc { display: block; color: #67676f; font-size: 2rem; line-height: 1.35; letter-spacing: -0.01em; }
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
    h4 { font-size: 1.8rem; }
    .bi_section { padding: 0; }
    .pc { display: none; }
    .mo { display: flex; }
    .benefit_list { gap: 40px 15px; }
    .benefit_list li { width: calc((100% - 15px) / 2); padding-top: 70px; }
    .benefit_info .tit_area strong { font-size:18px; }
    .benefit_info .desc { font-size: 1.4rem; line-height: 1.4;  }
    .benefit_list li::before { position: absolute; top: 0; left: 0; width: 60px; height: 60px; background-color: #eee; border-radius: 50%; content: ''; }
    .benefit_list li::after {top:10px; left:10px;}
    .benefit_list li:nth-child(2)::after, .benefit_list li:nth-child(3)::after {top:10px; left:10px;}
}

@media screen and (max-width: 768px) {
    :deep(.p_br) { display: none; }
    :deep(.m_br) { display: block; }

    h3 {font-size:24px;}
    .intro_text { margin-bottom: 40px; }
    .intro_text p { font-size: 16px; font-weight: 400; line-height: 1.5; }
    .intro_text p:first-of-type { margin-bottom:0px; }
    .text_box span { font-size: 32px; text-align:center; }
    .body_wrap .cont_area { padding: 60px 0; }
    .benefit_section { padding-top: 80px; }
    .benefit_list { margin-top:24px; gap: 40px 20px; }
    .benefit_list li { width: calc((100% - 20px) / 2); }
    .bottom_btns + .btn_big.border { display: flex; justify-content: center; margin-top: 100px; margin-bottom: 80px; }
    .bi_section h4 {flex-direction:column;}
    .body_wrap .cont_area .cont_inner .intro_text + ul {margin-top:40px; margin-bottom:0; padding:32px;}
    .bi_section h4 p {width:100%; margin-top:8px; font-size:16px; line-height:1.5; flex-direction:column;}
}
</style>