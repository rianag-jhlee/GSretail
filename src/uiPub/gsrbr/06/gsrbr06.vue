<template>
    <div class="gsrbr06" v-if="t">
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
                <div class="cont_inner">
                    <div class="intro_group">
                        <h2 class="main_title">{{ t.Intro.title }}</h2>
                        <p class="main_desc" v-html="t.Intro.desc"></p>
                        
                        <div class="note_box mt40">
                            <div class="note_txt">
                                <strong class="note_title">{{ t.Intro.noteTitle }}</strong>
                                <p class="note_desc" v-html="t.Intro.noteDesc"></p>
                            </div>
                            <p>
                                <img :src="require('@/assets/images/dummy/gsrbr06_gs25.png')" alt="GS25 아이콘" class="note_img" />
                                <img :src="require('@/assets/images/dummy/gsrbr06_gsshop.png')" alt="GSSHOP 아이콘" class="note_img" />
                                <img :src="require('@/assets/images/dummy/gsrbr06_gsfresh.png')" alt="GSFRESH 아이콘" class="note_img" />
                            </p>
                        </div>

                        <div class="qr_download_area mt40 pc">
                            <div class="qr_info">
                                <strong class="qr_title">{{ t.Intro.qrTitle }}</strong>
                                <p class="qr_desc" v-html="t.Intro.qrDesc"></p>
                            </div>
                        </div>
                        <div class="qr_download_area mt40 mo">
                            <a href="">
                                <strong>{{ t.Intro.qrTitle }}</strong>
                                <span>{{ t.Intro.qrDesc_mo }}</span>
                            </a>
                        </div>
                    </div>

                    <div class="section_group mb120">
                        <div class="title_wrap mb40">
                            <h4 class="group_title">{{ t.MemberGrade.title }}</h4>
                            <p class="group_desc">{{ t.MemberGrade.desc }}</p>
                        </div>
                        
                        <div class="policy_wrap">
                            <table class="base_table grade_table">
                                <colgroup>
                                    <col>
                                    <col v-for="n in 4" :key="n">
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th scope="col" class="bg_light"></th>
                                        <th scope="col" v-for="h in t.MemberGrade.tableHeader" :key="h">{{ h }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(row, rIdx) in t.MemberGrade.tableRows" :key="rIdx">
                                        <th scope="row" class="bg_light">{{ row.brand }}</th>
                                        <td v-for="(cell, cIdx) in row.cells" :key="cIdx" v-html="cell"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="policy_wrap mt40">
                            <dl v-for="(guide, gIdx) in t.MemberGrade.guides" :key="gIdx">
                                <dt>{{ guide.label }}</dt>
                                <dd>
                                    <ul class="bullet_01">
                                        <li v-for="(li, lIdx) in guide.list" :key="lIdx" v-html="li"></li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                    </div>

                    <div class="section_group mb120">
                        <div class="title_wrap mb40">
                            <h4 class="group_title">{{ t.MemberBenefit.title }}</h4>
                        </div>
                        <div class="policy_wrap">
                            <table class="base_table">
                                <colgroup>
                                    <col>
                                    <col v-for="n in 4" :key="n">
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th scope="col" class="bg_light"></th>
                                        <th scope="col" v-for="h in t.MemberGrade.tableHeader" :key="h">{{ h }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(row, rIdx) in t.MemberBenefit.tableRows" :key="rIdx">
                                        <th scope="row" class="bg_light">{{ row.brand }}</th>
                                        <td v-for="(cell, cIdx) in row.cells" :key="cIdx" v-html="cell.text" :class="{ 'verti_top': cell.isTop }"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="section_group mb120">
                        <div class="title_wrap mb40">
                            <h4 class="group_title">{{ t.CouponGuide.title }}</h4>
                        </div>
                        <div class="policy_wrap">
                            <table class="base_table coupon_table">
                                <colgroup>
                                    <col>
                                    <col>
                                </colgroup>
                                <tbody>
                                    <tr v-for="(row, rIdx) in t.CouponGuide.rows" :key="rIdx">
                                        <th scope="row" class="bg_light">{{ row.brand }}</th>
                                        <td class="al" v-html="row.desc"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="section_group mb120">
                        <div class="title_wrap mb40">
                            <h4 class="group_title">{{ t.PointGuide.title }}</h4>
                        </div>
                        <div class="policy_wrap">
                            <table class="base_table point_table">
                                <colgroup>
                                    <col>
                                    <col>
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th scope="row" class="bg_light">{{ t.PointGuide.label }}</th>
                                        <td class="al">
                                            <ul class="bullet_01">
                                                <li v-for="(li, lIdx) in t.PointGuide.list" :key="lIdx" v-html="li"></li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="btnSection ac"><!-- 26.05.12 Edit 이종환 : class 수정 -->
                            <Buttons 
                                btn-class="btn_big primary"
                                @click="openModal" 
                                data-popid="gsrbr0601" 
                                data-type="lg" 
                                data-cont="gsrbr0601"    
                            >{{ t.CommonLabels.faqBtn }}</Buttons>
                        </div>
                    </div>

                    <!-- 26.05.12 Edit 이종환 : 공통화 작업으로 소스 수정 -->
                    <div class="notice_section mt100">
                        <div class="policy_wrap">
                            <strong class="tit">{{ t.Notice.title }}</strong>
                            <ul class="bullet_01">
                                <li v-for="(n, idx) in t.Notice.list" :key="idx" v-html="n"></li>
                            </ul>
                        </div>
                        
                        <div class="policy_wrap">
                            <strong class="tit">{{ t.NoticeBrand.title }}</strong>
                            <dl v-for="(brand, bIdx) in t.NoticeBrand.brands" :key="bIdx">
                                <dt class="brand_name">{{ brand.name }}</dt>
                                <dd>
                                    <ul class="bullet_01">
                                        <li v-for="(li, lIdx) in brand.list" :key="lIdx" v-html="li"></li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div class="sub_btn_group mt24">
                            <Buttons 
                                @click="openModal" 
                                data-popid="gsrbr0602" 
                                data-type="lg" 
                                data-cont="gsrbr0602"
                            >{{ t.CommonLabels.termsBtn }}</Buttons>
                            <Buttons 
                                @click="openModal" 
                                data-popid="gsrbr0603" 
                                data-type="lg" 
                                data-cont="gsrbr0603"
                            >{{ t.CommonLabels.nonMemberBtn }}</Buttons>
                        </div>
                    </div>
                    <!-- //26.05.12 Edit 이종환 : 공통화 작업으로 소스 수정 -->

                    <!-- 26.05.11 Edit 이종환 : 하단 목록 버튼 통일 -->
                    <div class="bottom_btns">
                        <button class="btn_back" @click="handleBack">{{ t.ListBack }}</button>
                    </div>
                    <!-- //26.05.11 Edit 이종환 : 하단 목록 버튼 통일 -->

                </div>
            </div>
        </section>

        <div id="gsrbr0601" class="modal_wrap">
            <div class="modal_container"></div>
        </div>
        <div id="gsrbr0602" class="modal_wrap">
            <div class="modal_container"></div>
        </div>
        <div id="gsrbr0603" class="modal_wrap">
            <div class="modal_container"></div>
        </div>


    </div>
</template>

<script>
import Buttons from "@/components/Buttons.vue";
import modal from "@/assets/js/modal";

export default {
    name: "gsrbr06",
    components: { Buttons },
    props: { lang: { type: String, default: "ko" } },
    data() {
        return {
            isMobile: false,
            langData: {
                ko: {
                    Visual: {
                        img: require("@/assets/images/dummy/gsrbr06.png"),
                        imgMo: require("@/assets/images/dummy/gsrbr06_mo.png"),
                        alt: "GS ALL 멤버십 메인 비주얼",
                        subContent_1: "자동으로 포인트가 쌓이는",
                        subContent_2: "GS리테일 통합 멤버십 서비스",
                        subContent_3: "GS ALL 멤버십",
                    },
                    Intro: {
                        title: "GS ALL 멤버십",
                        desc: "GS ALL 멤버십은 GS25, GS SHOP, GS THE FRESH 에서 혜택을 누릴 수 있는 GS리테일 통합 멤버십 서비스입니다.<br/>한 브랜드에서 VVIP나 VIP 달성해도 모든 브랜드 등급혜택을 누리실 수 있으니 VVIP, VIP에 도전해보세요.",
                        noteTitle: "GS ALL 포인트란?",
                        noteDesc: "GS리테일의 모든 브랜드에서 적립하고 사용할 수 있는 통합 포인트입니다.<br/>GS25, GS더프레시, GS SHOP 등에서 구매 시 자동으로 포인트가 쌓입니다. 쌓인 포인트는 GS리테일의 모든 브랜드에서 현금처럼 사용 가능합니다.",
                        qrTitle: "우리동네GS 앱 다운로드",
                        qrDesc: "우리동네GS 앱을 다운로드하고, 다양한 이벤트와 차별화 상품을 만나보세요.<br/>QR코드를 스캔하면 앱 다운로드 페이지로 이동합니다.",
                        qrDesc_mo:"GS25의 다양한 이벤트와 차별화 상품",
                        
                    },
                    MemberGrade: {
                        title: "1. 멤버십 등급 안내",
                        desc: "각각의 기준 중, 가장 높게 달성한 기준의 등급으로 최종 등급 부여됩니다.",
                        tableHeader: ["VVIP", "VIP", "DIAMOND", "GOLD"],
                        tableRows: [
                            { brand: "GS25", cells: ["구매일수 60일 <br/>또는 <br/>구매금액 60만원 이상", "구매일수 30일 <br/>또는 <br/>구매금액 30만원 이상", "-", "-"] },
                            { brand: "GS 더프레시", cells: ["구매일수 24일 <br/>또는 <br/>구매금액 90만원 이상", "구매일수 18일 <br/>또는 <br/>구매금액 60만원 이상", "-", "-"] },
                            { brand: "GS SHOP", cells: ["구매횟수 10회 + <br/>구매금액 20만원 이상", "구매횟수 5회 + <br/>구매금액 15만원 이상", "구매횟수 3회 + <br/>구매금액 10만원 이상", "구매횟수 1회 + <br/>구매금액 5만원 이상"] },
                            { brand: "전체 브랜드", cells: ["2개 브랜드 + <br/>구매금액 90만원 이상", "2개 브랜드 + <br/>구매금액 60만원 이상", "-", "-"] },
                            { brand: "GS ALL 패밀리", cells: ["패밀리 그룹 구성원 구매실적을 <br/>합산해서 등급 부여", "-", "-", "-"] }
                        ],
                        guides: [
                            { label: "등급산정 예시", list: ["직전 3개월 간, GS25에서만 60일 이상 구매한 경우 → VVIP 등급으로 모든 브랜드 VVIP 혜택 지급"] },
                            { label: "등급산정 기간", list: ["GS25, GS더프레시, 전사 브랜드 : 직전 3개월전 26일 ~ 직전월 25일", "GS SHOP : 직전 6개월전 26일 ~ 직전월 25일"] },
                            { label: "세부 등급 산정 기준", list: ["구매일수(GS25 / GS더프레시) : 1,000원 이상 구매 시 1일로 카운팅(하루에 여러 번 구매해도 1일로 집계)", "구매금액: 담배, 서비스 상품 제외", "구매횟수(GS SHOP) : 주문번호 기준으로 1회당 1만원 이상 결제한 주문만 인정(배송비 제외, 주문취소/반품 시 제외)"] }
                        ]
                    },
                    MemberBenefit: {
                        title: "2. 멤버십 혜택 안내",
                        tableRows: [
                            { brand: "GS25", cells: [
                                {text:"3천원 할인쿠폰 <br/>(1만원 이상 구매 시)"}, {text:"2천원 할인쿠폰 <br/>(1만원 이상 구매 시)"}, {text:"-"},{text:"-"}] },
                            { brand: "GS 더프레시", cells: [{text:"상품별 할인쿠폰 8장"}, {text:"상품별 할인쿠폰 6장"}, {text:"-"}, {text:"-"}] },
                            { brand: "GS SHOP", cells: [
                                {text:"<ul class='bullet_01'><li>5% 할인(월10만원)</li><li>TV상품 GS Pay 5% 할인(월10만원)</li><li>멤버십데이 GS Pay 10% 적립(월10만원)</li><li>무료배송 쿠폰</li><li>VIP 전용혜택:<br/>TV상품 프리미엄 아울렛 와인25+ <br/>VIP 전용매장 VVIP 전용 채팅상담 (모바일),<br/> VIP 1:1 채팅상담(PC)</li><li>출석체크</li><li>해피테스터</li></ul>", isTop: true},
                                {text:"<ul class='bullet_01'><li>5% 할인(월5만원)</li><li>TV상품 GS Pay 4% 할인(월8만원)</li><li>멤버십데이 GS Pay 8% 적립(월8만원)</li><li>VIP 전용혜택:<br/>TV상품 프리미엄 아울렛 와인25+<br/> VIP 전용매장 VVIP 전용 채팅상담 <br/>(모바일)</li><li>출석체크</li><li>해피테스터</li></ul>", isTop: true},
                                {text:"<ul class='bullet_01'><li>5% 할인(월4만원)</li><li>TV상품 GS Pay 3% 할인(월6만원)</li><li>멤버십데이 GS Pay 6% 적립(월6만원)</li><li>출석체크</li><li>해피테스터</li></ul>", isTop: true},
                                {text:"<ul class='bullet_01'><li>5% 할인(월3만원)</li><li>TV상품 GS Pay 2% 할인(월4만원)</li><li>멤버십데이 GS Pay 4% 적립(월4만원)</li><li>출석체크</li><li>해피테스터</li></ul>", isTop: true}
                            ] }
                        ]
                    },
                    CouponGuide: {
                        title: "3. 등급 쿠폰 사용방법",
                        rows: [
                            { brand: "GS25", desc: "우리동네GS앱 QR 또는 쿠폰함에서 선택하여 사용 가능(담배,주류,서비스상품 제외)" },
                            { brand: "GS 더프레시", desc: "우리동네GS앱 QR 또는 쿠폰함에서 선택하여 사용 가능" },
                            { brand: "GS SHOP", desc: "GS SHOP 온라인/모바일에서 사용" }
                        ]
                    },
                    PointGuide: {
                        title: "4. GS ALL 포인트 안내",
                        label: "GS ALL 포인트",
                        list: [
                            "GS리테일 및 GS ALL 포인트 제휴사에서 사용 가능",
                            "적립 : GS리테일 이용 금액의 0.1% 적립",
                            "사용 : GS리테일 온 / 오프라인 매장 결제 시 10P=10원으로 결제 가능"
                        ]
                    },
                    Notice: {
                        title: "꼭 확인해주세요",
                        list: [
                            "멤버십 등급은 매월 1일 갱신되며, 해당월 말일까지 유효합니다.",
                            "하나의 브랜드 등급기준에만 충족해도 해당 등급 및 혜택이 부여됩니다.",
                            "신규 가입회원은 가입월 웰컴등급이 부여되며 다음달부터 실적에 따라 등급이 부여됩니다.",
                            "등급산정 기간 <br/><span>- GS25, GS THE FRESH : 최근 3개월 주문실적 기준으로 산정(3개월전 26일부터 전월 25일까지)</span><br/><span>- GS SHOP : 최근 6개월 주문실적 기준으로 산정(6개월전 26일부터 전월 25일까지)</span>",
                            "등급 혜택은 매월 1일 순차적으로 지급되며, 당월 말일까지 사용 가능합니다.",
                            "전 브랜드 혜택을 받기 위해서는 2021년 8월 개정된 GS ALL 멤버십 회원 약관에 동의해야합니다.<br/><span>(약관 동의 방법 : 우리동네GS 앱, GS SHOP앱 마이페이지에서 약관의 가입)</span>",
                            "쿠폰, 카드행사할인, 포인트, 배송비 등 등급산정 실적에서 제외됩니다.",
                            "GS Prime카드로 결제 시 GS&POINT로 적립됩니다.",
                            "등급쿠폰 및 GS SHOP할인권은 유효기간 연장 불가하며, 미사용시 자동 소멸됩니다.<br/><span style='color:#fb6432'>* 배송비쿠폰 및 5%할인(=GS SHOP 할인권)은 유효기간 연장 불가하며, 미사용시 자동 소멸됩니다.</span>",
                            "회원 등급 및 제공 혜택은 당사 사정에 의해 별도 고지없이 변경 및 중지될 수 있습니다.",
                            "부당한 방법으로 획득한 고객 등급은 사후 심사 후 조정될 수 있습니다."
                        ]
                    },
                    NoticeBrand: {
                        title: "브랜드별 유의사항",
                        brands: [
                            { name: "GS25", list: ["구매일수는 하루에 여러번 구매해도 1일로 산정되며, 1,000원 이상 결제건만 인정됩니다.", "GS ALL 포인트는 일 최대 5회 적립 가능합니다.", "등급쿠폰은 오프라인 매장에서 사용 가능합니다."] },
                            { name: "GS THE FRESH", list: ["구매일수는 하루에 여러번 구매해도 1일로 산정되며, 포인트 적립대상금액 1,000원 이상 결제건만 인정됩니다.", "등급쿠폰은 오프라인 매장에서 사용 가능합니다."] },
                            { name: "GS SHOP", list: ["모바일/인터넷에서 회원가입 후 본인인증 완료 즉시 혜택 사용 가능합니다.", "주문건수는 1회당 1만원 이상 결제한 주문만 인정됩니다(배송비 제외, 주문취소/반품시 제외)", "GS SHOP할인권은 지급일로부터 1개월 또는 3개월까지 사용 가능합니다. <br/><span style='color:#fb6432'>* 5%할인(=GS SHOP 할인권)은 지급일로부터 1개월 사용 가능합니다.</span><br/><span>* 결제금액 5% 이상 보유시에만 결제금액의 5% 할인 가능</span><span>* 타 사이트 경우 없이 www.gsshop.com 바로 방문시에만 사용 가능</span><br/><span>* 일부상품(저가 상품, 상품권, GS보험상품 등) 및 제휴사(할인/적립)혜택과 중복 적용 불가</span><br/><span>* 사용기한이 임박한 순부터 우선 적용</span><br/><span>- 비회원 및 본인인증 미완료 고객 등 일부 고객은 혜택지급 대상에서 제외됩니다.</span><br/><span>- 상품 구매로 인한 적립은 배송 완료시점에 적립됩니다.</span><br/><span>- 이벤트 프로모션 참여로 인한 적립은 사전 안내된 적립일자에 지급됩니다.</span><br/><span>- 1P단위로 사용 가능합니다.</span>"] },
                            { name: "우리동네GS", list: ["GS25와 GS더프레시 배달/픽업, GS더프레시 사전예약 구매로 인한 적립은 상품 수령 및 배달 완료 시점에 적립됩니다.", "GS25 사전예약, 원플러스크론, 와인25 플러스 구매로 인한 적립은 결제완료 시점에 적립됩니다.", "상품권, 우리동네GS클럽 구독료, 담배(전자담배 포함)는 적립 대상에서 제외됩니다.", "포인트 사용은 최소 10P 이상 사용 가능합니다."] }
                        ]
                    },
                    CommonLabels: { faqBtn: "멤버십 FAQ", termsBtn: "GS ALL 멤버십 회원약관", nonMemberBtn: "GS25 비회원 적립 서비스 이용 안내서" },
                    ListBack: "목록으로 돌아가기"
                }
            }
        };
    },
    computed: { t() { return this.langData[this.lang] || this.langData.ko; } },
    mounted() {
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
    },
    beforeUnmount() { window.removeEventListener('resize', this.checkMobile); },
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
/* 직접 값 적용 - Scoped */
.gsrbr06 { width: 100%; position: relative; background-color: #ffffff; }
.title_wrap {display:flex; flex-direction:column; align-items:flex-start; gap:12px;}
h4 {color:#161616; font-size:32px; font-weight:700;}
.group_desc {color:#161616; font-size:20px;}
.mo {display:none;}
.verti_top {vertical-align:top;}

/* Visual */
.visual_section { width: 100%; position: relative; }
.visual_img img { width: 100%; display: block; }
.visual_content { position: absolute; top: 50%; left: 0; transform: translateY(-50%); width: 100%; }
.text_box span { color: #ffffff; font-size: 72px; font-weight: 700; display: block; margin-bottom: 10px; }

/* Body Area */
.body_wrap { padding-top:200px; }
.main_title { font-size: 48px; font-weight: 700; color: #161616; margin-bottom: 16px; }
.main_desc { font-size: 24px; font-weight: 700; color: #161616; line-height: 1.35; }
.intro_group {margin-bottom:200px;}

.note_box {padding: 32px; background-color: #f8f8f8; border-radius: 12px; display: flex; flex-direction:column; justify-content: space-between; gap:48px;}
.note_box .note_title {font-size: 20px; font-weight: 700; color: #161616; margin-bottom: 8px; display: block; }
.note_box .note_desc {color:#67676F; font-size:16px; line-height:1.5;}
.note_box .note_img {height:17px; }
.note_box .note_txt + p {display:flex; gap:32px;}
.qr_download_area {display:flex; align-items:center;}
.pc.qr_download_area::before {content:''; width:90px; height:90px; background-image:url('@/assets/images/dummy/gsrbr06_qr.png'); background-size: cover; ; display:inline-block; }
.pc.qr_download_area .qr_info {padding-left:20px; display:flex; flex-direction:column;}
.pc.qr_download_area .qr_info strong {color:#161616; font-size:20px; font-weight:700; margin-bottom:8px;}
.pc.qr_download_area .qr_info p {color:#67676F; font-size:14px; line-height:1.5;}
.qr_download_area.mo a {padding-left:60px; position:relative; display:flex; flex-direction:column; gap:4px;}
.qr_download_area.mo a::before {content:''; width:48px; height:48px; background-image:url('@/assets/images/dummy/gsrbr06_app_icon.png'); background-size: cover; position:absolute; top:-5px; left:0; display:inline-block;}
.qr_download_area.mo a strong {font-size:16px; display:flex; align-items:center; gap:4px;}
.qr_download_area.mo a strong::after {content:''; width:20px; height:20px; background:red; display:inline-block;}


/* policy_wrap 규칙 */
.policy_wrap {overflow-x: auto; width: 100%; margin-bottom: 40px; }
.policy_wrap table {margin-top:0px;}
.policy_wrap th, .policy_wrap td {border:0; border-bottom: 1px solid #E5E5E9;}
.policy_wrap thead tr th:first-of-type, .policy_wrap tbody tr th {border-right:1px solid #E5E5E9; }
.policy_wrap thead {border-top:1px solid #000;}
.policy_wrap tbody tr td {text-align:center;}
.policy_wrap tbody tr td
.base_table { width: 100%;  min-width: 1100px; margin-top:0px !important; border-collapse: collapse; }
.base_table th, .base_table td { padding: 18px 20px; font-size: 1.8rem; line-height: 1.4; }
.base_table th { background-color: #f8f8f8; font-weight: 700; color: #161616; }
.base_table td { color: #161616; background-color: #ffffff; }
.base_table .bg_light { background-color: #f8f8f8; }
:deep(.policy_wrap) tbody tr td ul.bullet_01 {text-align:left !important;}
:deep(.policy_wrap) tbody tr td ul.bullet_01 li {color:#161616; font-size:18px;}

/* coupon_table */
.coupon_table tbody, .point_table tbody {border-top:1px solid #000000}

/* dl, dt, dd 스타일 */
.policy_wrap dl dt {font-size:24px; font-weight:700;}
.bullet_01 li {font-size:18px;}
:deep(.bullet_01) li span {color:#67676F; font-size:18px;}
/* List 스타일 */


/* Buttons */
/* ui.css로 이동
.notice_section { padding: 32px; background-color: #f8f8f8; border-radius: 12px; }
.notice_section .bullet_01 {margin-top:24px;}
.notice_section .bullet_01 li {color:#67676F; font-size:18px;}
.notice_section .tit {padding-left:34px; color: #161616; font-size: 24px; font-weight:700; position:relative; }
h5::before {content:''; width:24px; height:24px; background:red; display:inline-flex; position:absolute; top:50%; left:0; transform: translateY(-50%);}
h5 + dl {margin-top:24px;}
.brand_name {color:#161616; font-size:20px !important; font-weight:700;}
.notice_section .policy_wrap {padding-bottom:40px; border-bottom:1px solid #D7D7DF;}
*/

/* Bottom Buttons */
.btn_mid.border {display:none;}
.bottom_btns + .btn_big.border {display:none;}
.sub_btn_group {padding:0;}
.sub_btn_group button {margin-right:24px; padding:6px 4px; color:#161616; font-size:14px; background:transparent; display:flex; align-items:center; gap:8px;}
.sub_btn_group button:last-of-type {margin-right:0;}
.sub_btn_group button::after {content:''; width:16px; height:16px; background:url('@/assets/images/common/icon_set_16.png') -856px -14px no-repeat; display:inline-flex;}

@media screen and (max-width: 1024px) {
    .pc {display:none;}
    .mo {display:flex;}
}
@media screen and (min-width: 1024px) {
    :deep(.qr_download_area).pc {display:flex;}
    :deep(.qr_download_area).mo {display:none;}
}

@media screen and (max-width: 767px) {
    .body_wrap { padding-top:60px; }
    .intro_group, .mb120 {margin-bottom:80px;}
    .text_box span { font-size:28px; text-align: center; }
    h4 {font-size:24px;}
    h5 {font-size:20px;}
    .group_desc, .brand_name {font-size:16px;}
    .notice_section .bullet_01 {margin-top:16px;}
    /* .notice_section {padding:32px;} */
    .note_box .note_title {font-size:18px;}
    .note_box .note_desc {font-size:16px; line-height:1.5;}
    .note_box .note_img {max-width:100%;}
    .bullet_01 li, :deep(.bullet_01) li span {font-size:16px;}
    .pc {display:none;}
    .mo {display:flex;}
    .main_title { font-size:24px; }
    .main_desc { font-size:16px; font-weight:400; }
    .sub_btn_group {height:auto; flex-direction: column; align-items: flex-start; gap: 10px; }
    .bottom_btns + .btn_big.border {margin-top:50px; display:flex;}
    .bottom_btns {display:none;}
    .policy_wrap thead {border-top-color:#E5E5E9;}
    .base_table th, .base_table td {font-size:16px;}
    .coupon_table, .point_table {min-width:auto;}
    :deep(.policy_wrap) ul.bullet_01 li {font-size:16px !important;}
    .coupon_table tbody, .point_table tbody {border-top-color:#E5E5E9;}
    .mb40 {margin-bottom:24px;}
    .note_box .note_txt + p img {height:10px;}
}
</style>