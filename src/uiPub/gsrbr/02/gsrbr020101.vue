<template>
    <div class="gsrbr020101" v-if="t">
        <section class="visual_section" ref="visualSection">
            <div class="visual_img" ref="visualImg">
                <img :src="isMobile ? t.Visual.imgMo : t.Visual.img" :alt="t.Visual.alt" />
            </div>
            <div class="visual_content">
                <div class="text_box">
                    <span class="ani_text">{{ t.Visual.subTitle }}</span>
                    <p class="ani_text" v-html="t.Visual.mainTitle"></p>
                </div>
            </div>
        </section>

        <section class="brand_intro_section">
            <div class="cont_inner">
                <div class="history_box">
                    <p class="history_text" v-for="(text, idx) in t.History" :key="idx" v-html="text"></p>
                </div>
            </div>
        </section>

        <section class="brand_value_section">
            <div class="cont_inner">
                <div class="brand_value_wrap">
                    <div class="value_title">
                        <h3 class="title_text" v-html="t.ValueTitle"></h3>
                        <div class="btn_group">
                            <div class="links">
                                <button type="button" class="btn_link ico_location">{{ t.Buttons.proposal }}</button>
                                <button type="button" class="btn_link ico_store">{{ t.Buttons.findStore }}</button>
                                <a href="#" class="btn_sns ico_insta"><span class="blind">{{ t.Sns.insta }}</span></a>
                                <a href="#" class="btn_sns ico_facebook"><span class="blind">{{ t.Sns.facebook }}</span></a>
                            </div>
                        </div>
                    </div>

                    <div class="accordion_list">
                        <div 
                            v-for="(item, idx) in t.AccordionList" 
                            :key="idx" 
                            class="accordion_item" 
                            :class="{ active: activeIdx === idx }"
                        >
                            <button type="button" class="accordion_header" @click="toggleAccordion(idx)">
                                <span class="header_text">{{ item.title }}</span>
                                <i class="ico_arrow"></i>
                            </button>
                            <div v-if="activeIdx === idx" class="accordion_body">
                                <div class="body_content">
                                    <p class="desc_text" v-html="item.desc"></p>
                                    <div class="content_img">
                                        <img :src="item.img" :alt="item.title" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="origin_section">
            <div class="cont_inner">
                <div class="origin_tabs">
                    <Tabs @change="onTabChange1" v-model="originTabIdx1" :tab-items="t.OriginTabs1" tab-class="type_01" :tab-slide="false" />
                </div>

                <div class="tab_content" v-if="originTabIdx1 === 0">
                    <div class="origin_tabs_2depth">
                        <Tabs @change="onTabChange2" v-model="originTabIdx2" :tab-items="t.OriginTabs2" tab-class="type_02" :tab-slide="false" />
                    </div>
                    
                    <div class="sub_tab_content" v-if="originTabIdx2 === 0">
                        <div class="origin_intro">
                            <div class="visual_img_small production_bg"></div>
                            <div class="text_box">
                                <h3 class="title">{{ t.OriginContent.title }}</h3>
                                <p class="desc">{{ t.OriginContent.desc }}</p>
                                <p class="desc">{{ t.OriginContent.desc1 }}</p>
                            </div>
                        </div>

                        <div class="origin_content_wrap">
                            <aside class="origin_lnb">
                                <ul>
                                    <li v-for="(cat, idx) in t.OriginCategories" :key="idx" :class="{ active: currentCat === idx }">
                                        <button type="button" @click="scrollToSection(idx)">{{ cat }}</button>
                                    </li>
                                </ul>
                            </aside>

                            <div class="origin_list_box">
                                <div 
                                    v-for="(group, gIdx) in t.OriginData" 
                                    :key="gIdx" 
                                    ref="originRefs"
                                    class="origin_group"
                                >
                                    <div class="group_header">
                                        <h4 class="group_title">{{ group.category }}</h4>
                                        <p class="group_desc">{{ group.summary }}</p>
                                    </div>
                                    <div class="item_grid">
                                        <div v-for="(item, iIdx) in group.items" :key="iIdx" class="origin_item">
                                            <div class="item_thumb">
                                                <img :src="item.img" :alt="item.name" />
                                            </div>
                                            <p class="item_name">{{ item.name }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="sub_tab_content" v-if="originTabIdx2 === 1">
                        <div class="partnership_wrap">
                            <div class="origin_intro">
                                <div class="visual_img_small partnership_bg">
                                </div>
                                <div class="text_box">
                                    <h3 class="title">{{ t.PartnershipTitle }}</h3>
                                    <p class="desc" v-html="t.PartnershipDesc"></p>
                                </div>
                            </div>

                            <div class="mou_status">
                                <h4 class="sub_title">{{ t.MouStatusTitle }}</h4>
                                <div class="mou_grid">
                                    <div 
                                        v-for="(mou, mIdx) in t.MouList" 
                                        :key="mIdx" 
                                        class="mou_item"
                                        :class="{ 'text_item': mou.isTextType }"
                                    >
                                        <div class="mou_logo" :class="{ 'fipa_logo': mou.isTextType }">
                                            <img :src="mou.img" :alt="mou.name" />
                                        </div>
                                        <div v-if="!mou.isTextType">
                                            <p class="mou_name">{{ mou.name }}</p>
                                        </div>
                                        <div v-else class="mou_text_box">
                                            <p class="mou_name">{{ mou.name }}</p>
                                            <p class="mou_info" v-html="mou.info"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mou_products">
                                <h4 class="sub_title">{{ t.MouProductsTitle }}</h4>
                                <table class="mou_table">
                                    <caption class="blind">{{ t.MouTableCaption }}</caption>
                                    <colgroup>
                                        <col style="width: 15%;">
                                        <col style="width: auto;">
                                    </colgroup>
                                    <tbody>
                                        <tr v-for="(row, rIdx) in t.MouProducts" :key="rIdx">
                                            <th scope="row">{{ row.location }}</th>
                                            <td>{{ row.products }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tab_content" v-if="originTabIdx1 === 1">
                    <div class="tm-content-container">
                        <div class="tm-intro-section">
                            <div class="tm-title-box">
                                <h3 class="tm-main-title">{{ t.TasteManagement.title }}</h3>
                                <div class="tm-main-desc-box">
                                    <p class="tm-main-desc" v-html="t.TasteManagement.desc"></p>
                                </div>
                            </div>
                        </div>

                        <div class="tm-node-section">
                            <div class="tm-section-header">
                                <h4 class="tm-section-title">{{ t.TasteManagement.processTitle }}</h4>
                            </div>
                            <div class="tm-steps-wrap">
                                <div class="tm-steps-grid">
                                    <div v-for="(step, sIdx) in t.TasteManagement.steps" :key="sIdx" class="tm-step-item">
                                        <div class="tm-step-info">
                                            <div class="tm-step-header">
                                                <span class="tm-step-num">Step {{ sIdx + 1 }}</span>
                                                <strong class="tm-step-tit">{{ step.title }}</strong>
                                            </div>
                                            <div class="tm-step-body">
                                                <p class="tm-step-text" v-html="step.desc"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tm-node-section">
                            <div class="tm-section-header">
                                <h4 class="tm-section-title">{{ t.TasteManagement.principleTitle }}</h4>
                                <p class="tm-section-subtext">{{ t.TasteManagement.principleSub }}</p>
                            </div>
                            <div class="tm-principles-container res-swiper-container">
                                <swiper
                                    :slides-per-view="'auto'"
                                    :space-between="0"
                                    :breakpoints="{
                                        768: {
                                            allowTouchMove: false
                                        }
                                    }"
                                    class="tm-principles-swiper"
                                >
                                    <swiper-slide 
                                        v-for="(p, pIdx) in t.TasteManagement.principles" 
                                        :key="'principle-' + pIdx" 
                                        class="tm-principle-card res-slide-item"
                                    >
                                        <div class="tm-card-header">
                                            <span class="tm-card-num">0{{ pIdx + 1 }}</span>
                                            <strong class="tm-card-tit">{{ p.title }}</strong>
                                        </div>
                                        <div class="tm-card-body">
                                            <p class="tm-card-main-text">{{ p.desc }}</p>
                                            <p class="tm-card-sub-text">{{ p.subDesc }}</p>
                                        </div>
                                        <div v-if="pIdx < t.TasteManagement.principles.length - 1" class="divider pc-only"></div>
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </div>

                        <div class="tm-node-section">
                            <div class="tm-product-layout">
                                <aside class="tm-lnb-side">
                                    <div class="tm-lnb-list">
                                        <div v-for="(cat, cIdx) in t.TasteManagement.categories" :key="cIdx" 
                                             class="tm-lnb-item" :class="{ 'is-active': currentTasteCat === cIdx }">
                                            <button type="button" @click="scrollToTasteSection(cIdx)">{{ cat }}</button>
                                        </div>
                                    </div>
                                </aside>
                                <div class="tm-product-main">
                                    <div 
                                        v-for="(group, gIdx) in t.TasteManagement.productGroups" 
                                        :key="gIdx" 
                                        ref="tasteRefs" 
                                        class="tm-group-container"
                                    >
                                        <h4 class="tm-group-title">{{ group.category }}</h4>
                                        <div class="tm-product-grid">
                                            <div v-for="(item, iIdx) in group.items" :key="iIdx" class="tm-product-card">
                                                <div class="tm-product-thumb">
                                                    <img v-if="item.img" :src="item.img" :alt="item.name" />
                                                </div>
                                                <div class="tm-product-info">
                                                    <p class="tm-product-name">{{ item.name }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bottom_btns">
                    <button type="button" class="btn_back" @click="handleBack">{{ t.Buttons.backToList }}</button>
                    <!-- gsrbr0203 ~ gsrbr020401 팝업 아이디만 변경해서 요청하면 됨 -->
                    <!-- <Buttons 
                        btn-class="btn_icon" 
                        @click="openModal" 
                        data-popid="gsrbr0203" 
                        data-type="lg" 
                        data-cont="gsrbr0203"
                    >테스트</Buttons> -->
                </div>
                <a class="btn_big border">{{ t.Buttons.backToList}}</a>
            </div>
        </section>

        <div id="gsrbr0203" class="modal_wrap">
            <div class="modal_container"></div>
        </div>

        <div id="gsrbr0204" class="modal_wrap">
            <div class="modal_container"></div>
        </div>

        <div id="gsrbr020401" class="modal_wrap">
            <div class="modal_container"></div>
        </div>

    </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import Buttons from "@/components/Buttons.vue";
import modal from "@/assets/js/modal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

export default {
    name: "GsTheFreshBrand",
    components: {
        Tabs,
        Buttons,
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            isMobile: false, // 모바일 여부 체크 변수
            activeIdx: 0,
            originTabIdx1: 0,
            originTabIdx2: 0,
            currentCat: 0,
            currentTasteCat: 0,
            langData: {
                ko: {
                    Visual: {
                        img: require("@/assets/images/dummy/gsrbr020101_main.png"),
                        imgMo: require("@/assets/images/dummy/gsrbr020101_main_mo.png"),
                        alt: "GS THE FRESH 메인 비주얼",
                        subTitle: "신선한 행복을 주는 브랜드",
                        mainTitle: "<strong>GS</strong> THE FRESH"
                    },
                    History: [
                        `1974년 럭키수퍼체인(주)로 출범한 LG수퍼마켓은<br/>GS그룹의 출범에 따라 GS수퍼마켓으로 변경되고,<br/>이후 2019년 '삶의 가치를 누리는 라이프 스타일 마켓' 으로의 변화를 위해<br/>"GS THE FRESH"로 새롭게 태어나게 되었습니다.`,
                        `새롭게 태어난 GS THE FRESH은 Friendly, Fresh, Fun 가치와 함께<br/>고객의 생활에 늘 가까이 있는 점포로서<br/>신선하고 다양한 상품을 제공함과 동시에 더욱 친근한 서비스를 바탕으로<br/>고객과 함께하는 친근하고, 신속하며, 편리하고 즐거운 쇼핑문화를 지향합니다.`,
                        `새로운 이름으로 고객님과 다시 만나는 GS THE FRESH은<br/>신선한 행복을 주는 쇼핑문화의 장을 펼칠 것이며,<br/>고객님께 더 큰 만족을 드릴 것을 약속합니다.`
                    ],
                    ValueTitle: "가족과 함께하는 행복<br/>쇼핑 산지의 신선함 그대로 가정으로 배달합니다.",
                    Buttons: {
                        proposal: "입지 제안",
                        findStore: "매장 찾기",
                        backToList: "목록으로 돌아가기"
                    },
                    Sns: {
                        insta: "인스타그램",
                        facebook: "페이스북"
                    },
                    AccordionList: [
                        {
                            title: "신선, 맛, 서비스 대한민국 NO.1을 약속합니다.",
                            desc: "전국의 우수 산지에서 가장 신선하고 맛있는 상품만을 선별하고, <br/>GS더프레시만의 엄격한 추가 검품과정을 통해 최고의 상품 서비스를 제공하고 있습니다.<br/><br/>또한 고객중심의 차별화된 서비스로 한국서비스품질지수(KS-SQI) 10년 <br/>연속 1위를 수상하는 등 고객을 위한 매장을 만들어 가고 있습니다.",
                            img: require("@/assets/images/dummy/gsrbr020101_3.png")
                        },
                        {
                            title: "GS더프레시만의 차별화된 컨텐츠로 업계를 선도합니다.",
                            desc: "상품성을 갖춘 우수중소업체의 상품을 발굴해<br/>일반상품 가격의 7~80%수준 가격으로 판매하는 '리얼프라이스'와<br/>우수산지에서 선도, 당도를 엄선한 신선식품 전용 브랜드 '신선특별시' 등<br/>차별화된 상품과 서비스로 국내 수퍼마켓 업계를 선도하고 있습니다.",
                            img: require("@/assets/images/dummy/gsrbr020101_4.png")
                        }
                    ],
                    OriginTabs1: [{ item: "신선 산지 안내" }, { item: "맛/선도 관리" }],
                    OriginTabs2: [{ item: "전국 우수 산지" }, { item: "함께하는 지자체" }],
                    OriginContent: {
                        title: "전국 우수 산지",
                        desc: "GS리테일은 고객에게 항상 신선하고 우수한 품질의 상품을 제공하고자 노력하고 있습니다.",
                        desc1: "지속적인 발굴과 지원을 통해 우수산지를 확보하고, 우수산지에서 생산된 최고 품질의 상품을 고객에게 제공해 드리고 있습니다."
                    },
                    OriginCategories: ["과일", "수산", "채소", "양곡", "축산"],
                    OriginData: [
                        {
                            category: "과일",
                            summary: "달콤함이 가득한 제철의 정수, 전국 산지에서 갓 수확한 프리미엄 과일",
                            items: [
                                { name: "영흥섬 포도", img: require("@/assets/images/dummy/tab_1_1.png") },
                                { name: "제주 감귤", img: require("@/assets/images/dummy/tab_1_2.png") },
                                { name: "하동 딸기", img: require("@/assets/images/dummy/tab_1_3.png") },
                                { name: "안동 사과", img: require("@/assets/images/dummy/tab_1_4.png") }
                            ]
                        },
                        {
                            category: "수산",
                            summary: "청정 해역의 신선함을 그대로, 산지 직송 수산물",
                            items: [
                                { name: "부산 생물고등어", img: require("@/assets/images/dummy/tab_1_5.png") },
                                { name: "대부도 바지락", img: require("@/assets/images/dummy/tab_1_6.png") },
                                { name: "제주도 갈치", img: require("@/assets/images/dummy/tab_1_7.png") },
                                { name: "완도 전복", img: require("@/assets/images/dummy/tab_1_8.png") }
                            ]
                        },
                        {
                            category: "채소",
                            summary: "땅의 기운을 담은 신선한 채소, 건강한 밥상의 시작",
                            items: [
                                { name: "금산 깻잎", img: require("@/assets/images/dummy/tab_1_9.png") },
                                { name: "해남 고구마", img: require("@/assets/images/dummy/tab_1_10.png") },
                                { name: "제주 깐마늘", img: require("@/assets/images/dummy/tab_1_11.png") },
                                { name: "해남 절임배추", img: require("@/assets/images/dummy/tab_1_12.png") },
                                { name: "참타리버섯", img: require("@/assets/images/dummy/tab_1_13.png") }
                            ]
                        },
                        {
                            category: "양곡",
                            summary: "고슬고슬 밥맛 좋은 우리 곡식",
                            items: [{ name: "당진 쌀", img: require("@/assets/images/dummy/tab_1_14.png") }]
                        },
                        {
                            category: "축산",
                            summary: "풍부한 육즙의 고품질 축산물",
                            items: [{ name: "우월 한우", img: require("@/assets/images/dummy/tab_1_15.png") }]
                        }
                    ],
                    PartnershipTitle: "함께하는 지자체",
                    PartnershipDesc: `GS리테일은 함께하는 지자체 활동(MOU)을 통해 지역경제 활성화에 앞장서고 있습니다.
                    <span>* 7개의 광역자치단체, 13개의 기초자치단체, 1개 수협중앙회(완도수협) 와 MOU(Memorandum of Understanding, 양해각서) 를 체결</span>`,
                    MouStatusTitle: "지자체 MOU 체결 현황",
                    MouList: [
                        { name: "진도군 MOU 체결", img: require("@/assets/images/dummy/tab_1_2_1.png"), isTextType: false },
                        { name: "밀양시 MOU 체결", img: require("@/assets/images/dummy/tab_1_2_2.png"), isTextType: false },
                        { name: "고창군 MOU 체결", img: require("@/assets/images/dummy/tab_1_2_3.png"), isTextType: false },
                        { name: "전라남도 MOU 체결", img: require("@/assets/images/dummy/tab_1_2_4.png"), isTextType: false },
                        { name: "부산광역시 MOU 체결", img: require("@/assets/images/dummy/tab_1_2_5.png"), isTextType: false },
                        { name: "충청남도 MOU 체결", img: require("@/assets/images/dummy/tab_1_2_6.png"), isTextType: false },
                        { name: "완도군 MOU 체결", img: require("@/assets/images/dummy/tab_1_2_7.png"), isTextType: false },
                        { 
                            name: "업무협약 체결", 
                            img: require("@/assets/images/dummy/tab_1_2_8.png"), 
                            info: "경상남도 청년 어업인 연합회, 한국어촌어항공단, <br/>경상남도 업무협약 체결",
                            isTextType: true 
                        }
                    ],
                    MouProductsTitle: "MOU체결을 통한 신선식품",
                    MouTableCaption: "지자체별 MOU 체결 신선식품 정보",
                    MouProducts: [
                        { location: "충청남도", products: "상추, 깻잎, 부추, 딸기, 수박, 대추방울토마토, 메론, 사과, 배, 한우, 국산돈육, 계란, 꽃게" },
                        { location: "전라남도", products: "강진군: 양곡, 돈육 / 나주시: 배, 오리 / 무안군: 양파 / 해남군: 고구마, 절임배추 / 완도군: 전복 / 영광군: 굴비 / 신안군: 김, 소금 / 진도군: 대파 / 장흥군: 블루베리, 오리" },
                        { location: "경상남도", products: "밀양시: 상추, 깻잎, 표고버섯, 토마토, 메론, 수박, 사과, 단감, 딸기 / 통영시: 나물 / 산청군: 딸기, 계란, 생물" },
                        { location: "전라북도", products: "고창군: 양곡" },
                        { location: "경기도", products: "안성시: 배, 한우, 돈육" },
                        { location: "제주도", products: "밀감, 한라봉, 키위, 갈치" },
                        { location: "부산시", products: "대저토마토" }
                    ],
                    TasteManagement: {
                        title: "맛·선도 지킴이 안내",
                        desc: "신선, 맛, NO.1을 위한 GS리테일의 선도 지킴이 활동을 확인해보세요.<br/>GS리테일은 가장 맛있고 신선하며 안전이 검증된, 차별화된 상품만을 엄선하여 고객님께 제공합니다.",
                        processTitle: "맛·선도 관리 노하우",
                        steps: [
                            { title: "신선한 상품", desc: "담사기준에 적합한 산지의 신선한 상품만을 공급합니다."},
                            { title: "완벽한 검품", desc: "물류센터에 상품이 입고되면 완벽한 검품 활동을 통해, 불량상품 입고를 원천봉쇄 합니다."},
                            { title: "최적의 온도", desc: "차량 내 할로겐과 냉장기를 통해 신선함을 유지할 수 있는 최적의 온도로 배송합니다."},
                            { title: "점포 내 관리", desc: "점포에서는 가장 신선한 상품을 고객에게 제공하기 위하여 점포별 선도지킴이를 운영하고 있으며 선도지킴이는 상품의 선도 및 판매기간을 수시로 확인하여 최고의 상품님께 제공하고 있습니다."},
                            { title: "고객 만족", desc: "산지, 물류센터를 거쳐 점포 및 고객님께 판매되기까지 완벽한 콜드체인시스템(Cold Chain System) 으로 고객님에게 산지의 맛과 신선함을 그대로 전달해드리고 있습니다."}
                        ],
                        principleTitle: "맛·선도 관리방침",
                        principleSub: "GS리테일의 먹거리 약속과 철저한 선도관리 기준을 소개합니다.",
                        principles: [
                            { title: "생산자 직거래", desc: "밭에서 뽑은 채소의 싱싱함을 식탁까지 전달해드립니다.", subDesc: "생산자 재배, 수확시점관리를 통하여 항상 최상의 상품만을 공급합니다." },
                            { title: "최고의 당도", desc: "과수원의 맛! 과수에서 충분히 익은 상품만 수확합니다.", subDesc: "유통되는 시간을 고려하여 미리 수확해야 하지만 GS 과일은 과수에서 최대한 익혀서 수확하기 때문에 당도가 매우 높고 맛있습니다." },
                            { title: "부드럽고 풍부한 육즙", desc: "담백하고 부드러운 맛! 생산 후 숙성과정을 거친 상미기간 내 상품만 입고됩니다.", subDesc: "한우 육즙의 맛을 지키기 위해 최고의 냉장 배송 시스템, 신선유지 노하우를 34년 동안 발전시켜 왔습니다." },
                            { title: "바다 직송 시스템", desc: "갓 잡은 수산물을 항공배송과 새벽직송을 통하여 신선하게 입고합니다.", subDesc: "항공배 및 새벽직송을 통하여 갓 잡은 수산물을 매장에 입고 시키기 때문에, 바닷가에서 먹는 수산물의 맛을 느끼실 수 있습니다." }
                        ],
                        categories: ["맛있는 고기", "싱싱한 과일", "신선한 채소", "신선한 해산물"],
                        productGroups: [
                            {
                                category: "맛있는 고기",
                                items: [
                                    { name: "소갈비", img: require("@/assets/images/dummy/tab_2_1.png") },
                                    { name: "국거리용 소고기", img: require("@/assets/images/dummy/tab_2_2.png") },
                                    { name: "한우안심", img: require("@/assets/images/dummy/tab_2_3.png") },
                                    { name: "삼겹살", img: require("@/assets/images/dummy/tab_2_4.png") },
                                    { name: "계랸", img: require("@/assets/images/dummy/tab_2_5.png") },
                                    { name: "닭고기", img: require("@/assets/images/dummy/tab_2_6.png") },
                                    { name: "한우등심", img: require("@/assets/images/dummy/tab_2_7.png") },
                                    { name: "불고기용 소고기", img: require("@/assets/images/dummy/tab_2_8.png") },
                                    { name: "목심", img: require("@/assets/images/dummy/tab_2_9.png") }
                                ]
                            },
                            {
                                category: "싱싱한 과일",
                                items: [
                                    { name: "거창 애플딸기", img: require("@/assets/images/dummy/tab_2_10.png") },
                                    { name: "딸기", img: require("@/assets/images/dummy/tab_2_11.png") },
                                    { name: "수박", img: require("@/assets/images/dummy/tab_2_12.png") },
                                    { name: "키위", img: require("@/assets/images/dummy/tab_2_13.png") },
                                    { name: "밀감", img: require("@/assets/images/dummy/tab_2_14.png") },
                                    { name: "토마토", img: require("@/assets/images/dummy/tab_2_15.png") },
                                    { name: "참외", img: require("@/assets/images/dummy/tab_2_16.png") },
                                    { name: "멜론", img: require("@/assets/images/dummy/tab_2_17.png") },
                                    { name: "사과", img: require("@/assets/images/dummy/tab_2_18.png") },
                                    { name: "배", img: require("@/assets/images/dummy/tab_2_19.png") }
                                ]
                            },
                            {
                                category: "신선한 채소",
                                items: [
                                    { name: "무", img: require("@/assets/images/dummy/tab_2_20.png") },
                                    { name: "파프리카", img: require("@/assets/images/dummy/tab_2_21.png") },
                                    { name: "양파", img: require("@/assets/images/dummy/tab_2_22.png") },
                                    { name: "배추", img: require("@/assets/images/dummy/tab_2_29.png") },
                                    { name: "고구마", img: require("@/assets/images/dummy/tab_2_23.png") },
                                    { name: "새송이 버섯", img: require("@/assets/images/dummy/tab_2_24.png") },
                                ]
                            },
                            {
                                category: "신선한 해산물",
                                items: [
                                    { name: "김", img: require("@/assets/images/dummy/tab_2_25.png") },
                                    { name: "백진미", img: require("@/assets/images/dummy/tab_2_26.png") },
                                    { name: "멸치", img: require("@/assets/images/dummy/tab_2_27.png") },
                                    { name: "오징어", img: require("@/assets/images/dummy/tab_2_28.png") },
                                ]
                            }
                        ]
                    }
                    
                }
            }
        };
    },
    computed: {
        t() {
            return this.langData.ko;
        }
    },
    mounted() {
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
        this.$nextTick(() => {
            setTimeout(() => {
                this.initVisualInteraction();
            }, 100);
        });
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkMobile);
    },
    methods: {
        checkMobile() {
            this.isMobile = window.innerWidth <= 767;
        },
        onTabChange1(idx) {
            this.originTabIdx1 = idx;
            this.originTabIdx2 = 0;
        },
        onTabChange2(idx) {
            this.originTabIdx2 = idx;
        },
        scrollToSection(idx) {
            this.currentCat = idx;
            const targets = this.$refs.originRefs;
            if (targets && targets[idx]) {
                targets[idx].scrollIntoView({ behavior: "smooth", block: "start" });
            }
        },
        scrollToTasteSection(idx) {
            this.currentTasteCat = idx;
            const targets = this.$refs.tasteRefs;
            if (targets && targets[idx]) {
                targets[idx].scrollIntoView({ behavior: "smooth", block: "start" });
            }
        },
        toggleAccordion(idx) {
            this.activeIdx = (this.activeIdx === idx) ? null : idx;
        },
        handleBack() {
            this.$router.back();
        },
        openModal(event) {
            const el = event.currentTarget;
            const popId = el.dataset.popid;
            const type = el.dataset.type || "default";
            const cont = el.dataset.cont;
            modal.open(popId, type, el, cont);
        },
        initVisualInteraction() {
            const section = this.$refs.visualSection;
            const imgBox = this.$refs.visualImg;
            const texts = section.querySelectorAll(".ani_text");

            if (!section || !imgBox) return;

            ScrollTrigger.matchMedia({
                // 데스크탑: 처음에는 무조건 꽉 찬 이미지(from 100%) -> 스크롤 시 90%로 축소
                "(min-width: 768px)": () => {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start: "top top",
                            end: "+=150%",
                            pin: true,
                            scrub: 1.2,
                            anticipatePin: 1,
                            invalidateOnRefresh: true
                        }
                    });

                    tl.fromTo(imgBox, 
                        { 
                            width: "100%", 
                            height: "100%", 
                            borderRadius: "0px", 
                            filter: "blur(0px) brightness(1)" 
                        },
                        { 
                            width: "90%", 
                            height: "75%", 
                            borderRadius: "40px", 
                            filter: "blur(10px) brightness(0.6)", 
                            duration: 2, 
                            ease: "none" 
                        }
                    )
                    .fromTo(texts, 
                        { 
                            opacity: 0, 
                            y: 50 
                        }, 
                        { 
                            opacity: 1, 
                            y: 0, 
                            stagger: 0.3, 
                            duration: 1, 
                            ease: "power2.out" 
                        }, 
                        "-=1.5"
                    );

                    return () => {
                        if (tl) tl.kill();
                    };
                },
                // 모바일: 인터렉션 제거 및 스타일 초기화
                "(max-width: 767px)": () => {
                   gsap.set([imgBox, texts], { clearProps: "all" });
                }
            });
        }
    }
};
</script>


<style scoped>
/* 1.넓이 2.외부여백 3.내부여백 4.폰트 5.배경 6.테두리 7.정렬 8.위치 9.블록 10.변형 */

.gsrbr020101 { width: 100%; position: relative; display: block; }
.cont_inner { width: 100%; max-width: 1420px; margin: 0 auto; padding: 0 20px; }

/* Visual Section 최적화 */
.visual_section { width: 100%; height: 100vh; background-color: #fff; display: flex; position: relative;  align-items: center; justify-content: center; overflow: hidden; }
.visual_img {width: 100%; height: 100%; transform: translate(-50%, -50%); position: absolute; top: 50%; left: 50%; z-index: 1;  overflow: hidden; will-change: width, height, border-radius; /* 성능 최적화 */}
.visual_img img { width: 100%; height: 100%; object-fit: cover; }
.visual_content { position: relative; z-index: 2; width: 100%; text-align: center; }
.text_box { display: flex; flex-direction: column; justify-content: center; }
.text_box span { display: block; margin-bottom: 20px; color: #fff; font-size: 32px; font-weight: 500; letter-spacing: -0.02em; }
.visual_content .text_box p { color: #fff; font-size: 100px; font-weight: 300; line-height: 1.1; }
.visual_content .text_box p :deep(strong) { color: #fff; font-size: 100px; font-weight: 800; }

/* 하단 섹션들 */
.brand_intro_section {width: 100%; padding: 200px 0; background-color: #f8f8f8; position: relative; display: block; }
.cont_inner { width: 100%; max-width: 1420px; margin: 0 auto; padding: 0 20px; }
.history_text { color: #161616; font-size: 28px; font-weight: 700; line-height: 1.6; }
.history_text + .history_text { margin-top: 40px; }

/* Brand Intro */
.brand_intro_section { width: 100%; padding: 200px 0; background-color: #f8f8f8; position: relative; display: block; }
.history_text { color: #161616; font-size: 28px; font-weight: 700; line-height: 1.6; }
.history_text + .history_text { margin-top: 40px; }

/* Brand Value & Accordion */
.brand_value_section { width: 100%; padding: 200px 0; position: relative; display: block; }
.value_title { width: 100%; margin-bottom: 64px; display: flex; align-items: flex-end; justify-content: space-between; }
.title_text { color: #161616; font-size: 48px; font-weight: 700; line-height: 1.3; }

.btn_group { display: flex; align-items: center; gap: 10px; }
.links { display: flex; align-items: center; gap: 24px; }
.btn_link { padding: 4px; color: #161616; font-size: 18px; background: none; border: 0; cursor: pointer; }
.btn_link::before {content:''; width:24px; height:24px; margin-right:8px; background:red; display:inline-block;}
.btn_sns { width: 56px; height: 56px; background-color: #f8f8f8; border: 1px solid #e5e5e9; border-radius: 99px; display: flex; align-items: center; justify-content: center; }

.accordion_list { width: 100%; background-color: #f8f8f8; border-radius: 12px; overflow: hidden; position: relative; }
.accordion_item { width: 100%; border-bottom: 1px solid #e5e5e3; position: relative; }
.accordion_item:last-child { border-bottom: 0; }
.accordion_header { width: 100%; padding: 32px 64px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; border: 0; background: none; }
.accordion_header:after { content: ''; width: 56px; height: 56px; border: 1px solid red; }
.accordion_item.active .accordion_header { padding:64px 64px 16px; }
.accordion_item.active .accordion_header:after { display: none; }
.header_text { color: #161616; font-size: 28px; font-weight: 700; }

.accordion_body { width: 100%; padding: 0 64px 110px; position: relative; }
.body_content { display: flex; justify-content: space-between; gap: 40px; }
.desc_text { flex: 1; color: #67676f; font-size: 20px; line-height: 1.6; }
.content_img { width: 400px; height: 260px; border-radius: 12px; overflow: hidden; position: absolute; top: -64px; right: 64px; }
.content_img img { width: 100%; height: 100%; object-fit: cover; }

/* Origin Section & Tabs */
.origin_section { width: 100%; padding: 0 0 200px; position: relative; display: block; }
.mt40 { margin-top: 40px; }
.origin_tabs_2depth { width: 100%; margin: 60px 0 0; }
.empty_cont { padding: 100px 0; text-align: center; color: #67676f; font-size: 20px; background-color: #f8f8f8; border-radius: 12px; }

/* 지자체 컨텐츠 디자인 */
.production_bg { background-image: url('@/assets/images/dummy/gsrbr020101_6.png'); background-size: cover; }
.partnership_bg { background-image: url('@/assets/images/dummy/gsrbr020101_5.png'); background-size: cover; }
.sub_title { margin-bottom: 40px; color: #161616; font-size: 28px; font-weight: 700; }
.mou_grid { display: grid; grid-template-columns: repeat(4, 1fr); row-gap: 40px; column-gap: 20px; }
.mou_item { border-radius: 12px; text-align: center; }
.mou_logo { width: 100%; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; }
.mou_logo img { max-width: 100%; max-height: 100%; object-fit: contain; }
.mou_name { color: #161616; font-size: 18px; font-weight: 700; }

.mou_item.text_item { text-align: left; display: flex; flex-direction: column; justify-content: center; }
.mou_logo.fipa_logo {margin-bottom:20px; justify-content: flex-start; }
.mou_info { margin-top: 8px; color: #67676f; font-size: 14px; line-height: 1.6; }

.mou_products { margin-top: 100px; }
.mou_table { width: 100%; border-top: 1px solid #161616; border-collapse: collapse; }
.mou_table th, .mou_table td { padding: 24px; border-bottom: 1px solid #e5e5e3; text-align: left; font-size: 18px; line-height: 1.6; }
.mou_table th { background-color: #f8f8f8; color: #161616; font-weight: 700; }
.mou_table td { color: #67676f; }

/* Origin Content Layout */
.origin_intro { width: 100%; padding: 60px 0 100px; display: flex; flex-direction: column; align-items: center; }
.visual_img_small { width: 100%; height: 340px; background-color: #c4c4c4; border-radius: 12px; }
.origin_intro .title { margin-top: 40px; margin-bottom:16px; color: #161616; font-size: 40px; font-weight: 700; }
.origin_intro .text_box { margin-left: 0; margin-right: auto; }
.origin_intro .text_box p { margin-top: 16px; font-size: 24px; line-height: 1.4; display:flex; flex-direction:column; gap:16px;}
.origin_intro .text_box p:last-of-type {margin-top:0px;}
.origin_intro .text_box p :deep(span) {color:#67676F !important; font-size:20px !important;}

.origin_content_wrap { width: 100%; display: flex; align-items: flex-start; }
.origin_lnb { width: 200px; position: sticky; top: 100px; }
.origin_lnb button { width: 100%; height: 64px; color: #4c4c53; font-size: 20px; font-weight: 700; text-align: left; background: none; border: 0; cursor: pointer; }
.origin_lnb ul li.active button { color: #161616; }

.origin_list_box { flex: 1; }
.origin_group { padding-top: 100px; scroll-margin-top: 100px; }
.origin_group:first-of-type { padding-top: 0; }
.group_header { margin-bottom: 40px; }
.group_title { margin-bottom: 12px; color: #161616; font-size: 28px; font-weight: 700; }
.item_grid { width: 100%; display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.origin_item { width: 100%; }
.item_thumb { width: 100%; height: 198px; background-color: #f8f8f8; border-radius: 12px; overflow: hidden; }
.item_thumb img { width: 100%; height: 100%; object-fit: cover; mix-blend-mode: multiply; }
.item_name { width: 100%; margin-top: 16px; color: #67676f; font-size: 18px; text-align: center; }
.btn_back { padding-left: 28px; color: #161616; font-size: 20px; background: none; border: 0; cursor: pointer; position: relative; }
.btn_back::before { width: 16px; height: 16px; background-color: red; content: ''; position: absolute; left: 0; top: 50%; transform: translateY(-50%); }
.blind { width: 1px; height: 1px; clip: rect(0,0,0,0); overflow: hidden; position: absolute; }


/* 2. 맛·선도 관리 독립 섹션 스타일 (style.css 반영) */
.tm-content-container { display: flex; flex-direction: column; align-items: flex-start; background-color: #ffffff; }
.tm-title-box {margin-top:60px;}

/* Intro */
.tm-intro-section { width: 100%; padding: 0 0 100px; }
.tm-main-title { font-size: 40px; font-weight: 700; color: #161616; margin-bottom: 16px; letter-spacing: -0.4px; }
.tm-main-desc { font-size: 24px; color: #161616; line-height: 1.5; letter-spacing: -0.24px; }

/* Node Sections */
.tm-node-section { width: 100%; margin-bottom: 120px; display: flex; flex-direction: column; gap: 40px; }
.tm-section-title { font-size: 28px; font-weight: 700; color: #161616; letter-spacing: -0.28px; }
.tm-section-subtext { font-size: 20px; color: #161616; margin-top: 12px; }

/* Steps */
.tm-steps-wrap { width: 100%; background-color: #F8F8F8; border-radius: 12px; padding: 56px 64px; }
.tm-steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 56px 20px; }
.tm-step-item { display: flex; flex-direction: column; gap: 20px; }
.tm-step-icon { width: 40px; height: 40px; }
.tm-step-num { font-size: 18px; font-weight: 700; color: #107AF2; display: block; margin-bottom: 6px; }
.tm-step-num::before {content:''; width:40px; height:40px; margin-bottom:20px; background:red; display:block;}
.tm-step-tit {margin-bottom:16px; font-size: 20px; font-weight: 700; color: #161616; display: block; }
.tm-step-text { font-size: 16px; color: #67676F; line-height: 1.5; }

/* Principles */
.tm-principle-card {width:calc((100% - 60px) / 4) !important; padding:32px; background-color:#F8F8F8; border-radius:12px; display:flex; flex-direction:column; gap:16px; position:relative; box-sizing:border-box;}
.swiper-slide.tm-principle-card {height:stretch; margin-right:20px;}
.swiper-slide.tm-principle-card:last-of-type {margin-right:0 !important;}
.tm-card-header {display:flex; flex-direction:column; gap:8px;}
.tm-card-num { font-size: 18px; font-weight: 700; color: #107AF2; }
.tm-card-tit { font-size: 20px; font-weight: 700; color: #161616; }
.tm-card-main-text { margin-bottom:8px; font-size: 18px; font-weight: 700; color: #67676F; line-height: 1.5; }
.tm-card-sub-text { font-size: 16px; color: #67676F; line-height: 1.5; }

/* Product Layout */
.tm-product-layout { display: flex; width: 100%; align-items: flex-start; }
.tm-lnb-side { width: 200px; padding-right: 20px; position:sticky; top:100px;}
.tm-lnb-item { height: 64px; display: flex; align-items: center; }
.tm-lnb-item button { font-size: 20px; font-weight: 700; color: #4C4C53; background: none; border: 0; cursor: pointer; text-align: left; width: 100%; }
.tm-lnb-item.is-active button { color: #161616; }

.tm-product-main { flex: 1; padding-top: 16px; }
.tm-group-title { font-size: 24px; font-weight: 700; color: #161616; margin-bottom: 24px; }
.tm-group-container {margin-top:60px;}
.tm-group-container:first-of-type {margin-top:0;}
.tm-product-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.tm-product-thumb { width: 100%; height: 198px; background-color: #f8f8f8; border-radius: 12px; overflow: hidden; }
.tm-product-thumb img { width: 100%; height: 100%; object-fit: cover; mix-blend-mode: multiply; }
.tm-product-name { margin-top: 16px; font-size: 18px; color: #67676F; text-align: center; line-height: 1.4; }
.bottom_btns + .btn_big.border {display:none !important;}


@media screen and (max-width: 1024px) {
    .visual_img { height: 600px; }
    .text_box span { font-size: 24px; }
    .visual_content .text_box p { font-size: 70px; }
    .history_text { font-size: 22px; }
    .value_title { flex-direction: column; align-items: flex-start; gap: 30px; }
    .title_text { font-size: 32px; }
    .accordion_header { padding: 24px 30px; }
    .header_text { font-size: 20px; }
    .accordion_body { padding: 0 30px 30px; }
    .body_content { flex-direction: column; gap: 20px; }
    .content_img { position: static; width: 100%; height: auto; margin-top: 20px; }
    .origin_list_box {width:100%;}
    .origin_intro .title { font-size: 32px; }
    .origin_intro .text_box p { font-size: 18px; }
    .origin_content_wrap { flex-direction: column; }
    .origin_lnb { width: 100%; position: static; margin-bottom: 40px; }
    .origin_lnb ul { display: flex; flex-wrap: wrap; gap: 10px; }
    .origin_lnb button { width: auto; height: 40px; padding: 0 20px; border: 1px solid #e5e5e9; border-radius: 20px; font-size: 16px; }
    .origin_lnb ul li.active button { background-color: #161616; color: #fff; }
    .item_grid { grid-template-columns: repeat(2, 1fr); }
    .mou_grid { grid-template-columns: repeat(2, 1fr); }
    .tm-steps-grid { grid-template-columns: repeat(2, 1fr); }
    .tm-principles-grid { flex-direction: column; }
    .tm-product-layout { flex-direction: column; }
    .tm-lnb-side { width: 100%; position: static; margin-bottom: 30px; }
    .tm-lnb-list { display: flex; flex-wrap: wrap; gap: 10px; }
    .tm-lnb-item { height: auto; }
    .tm-lnb-item button { width: auto; padding: 10px 20px; border: 1px solid #e5e5e9; border-radius: 20px; font-size: 16px; }
    .tm-product-grid { grid-template-columns: repeat(2, 1fr); }
}

/* 모바일 반응형 (767px 이하) */
@media screen and (max-width: 767px) {
    .visual_img { height: 400px; }
    .text_box span { font-size: 18px; }
    .visual_content .text_box p, .visual_content .text_box p :deep(strong) { font-size: 48px; }
    .visual_img { height: 100%; }
    .brand_intro_section { padding: 100px 0; }
    .history_text { font-size: 18px; }
    .history_text :deep(br) {display:none;}
    .brand_value_section { padding: 100px 0; }
    .title_text { font-size: 24px; }
    .accordion_header, .accordion_item.active .accordion_header { padding: 24px 80px 24px 24px; position:relative; }
    .header_text { font-size: 18px; text-align:left;}
    .accordion_body { padding: 0 20px 20px; }
    .desc_text { font-size: 16px; }
    :deep(.desc_text) br:first-of-type, :deep(.desc_text) br:last-of-type {display:none !important;}
    .origin_group { padding-top:40px;}
    .origin_lnb {display:none;}
    .origin_intro {padding-top:20px;}
    .origin_intro .title { font-size: 28px; }
    .origin_intro .text_box p :deep(span) {font-size:14px !important;}
    .sub_title {font-size:24px;}
    .group_header { margin-bottom:24px; }
    .group_title {font-size:20px;}
    .group_title + p {font-size:16px; line-height:1.5;}
    .visual_img_small { height: 200px; }
    .item_grid { grid-template-columns: repeat(2, 1fr); }
    .item_thumb { height: auto; aspect-ratio: 16/10; }
    .mou_name {font-size:16px;}
    .mou_table th, .mou_table td { padding: 15px; font-size: 14px; }
    h4.tm-section-title {font-size:24px;}
    .tm-intro-section {padding-bottom:64px;}
    .tm-node-section {margin-bottom:80px;}
    .tm-node-section:last-of-type {margin-bottom:0px;}
    .tm-lnb-side {display:none;}
    .tm-product-main {width:100%;}
    .tm-main-title { font-size: 28px; }
    .tm-card-tit {font-size:18px;}
    .tm-main-desc, .tm-step-num, .tm-step-tit, .tm-section-subtext, .tm-card-main-text { font-size: 16px; }
    .tm-step-text {font-size:14px;}
    .tm-steps-grid {position:relative; grid-template-columns: repeat(1, 1fr); gap: 30px; }
    .tm-steps-wrap { padding:40px; }
    .tm-product-grid { grid-template-columns: repeat(2, 1fr); }
    .tm-product-thumb { height: auto; aspect-ratio: 16/10; }
    .tm-step-item {padding-left:80px; position:relative;}
    .tm-step-num::before {margin-bottom:0; position:absolute; top:0; left:0;}
    .tm-product-name, .item_name {font-size:14px;}
    .origin_list_box {width:100%;}
    .mou_item.text_item { text-align: center; }
    .mou_logo {justify-content:flex-start;}
    .mou_logo img {width:100%;}
    .mou_logo.fipa_logo {justify-content:center;}
    .visual_content {display:none;}
    .btn_link {font-size:14px;}
    .btn_sns { width:40px; height:40px;}
    .btn_link::before {width:20px; height:20px;} 
    .accordion_header:after {width:40px; height:40px; position:absolute; top:24px; right:24px;}
    .origin_tabs_2depth {margin:0px;}
    .bottom_btns {display:none;}
    .bottom_btns + .btn_big.border {margin-top:80px; display:flex !important; justify-content: center;}
    .tm-principles-swiper {overflow:hidden !important;}
    .res-slide-item {width:280px !important; margin-right:16px !important; padding:24px; flex-shrink:0;}
    .pc-only {display:none;}
}

</style>
