<template>
    <div class="gsrbr020101">
        <section class="visual_section">
            <div class="visual_img">
                <img :src="t?.Visual.img" :alt="t?.Visual.alt" />
            </div>
            <div class="visual_content">
                <div class="text_box">
                    <h2 class="brand_logo">
                        <img :src="t?.Visual.logo" :alt="t?.Visual.logoAlt" />
                    </h2>
                </div>
            </div>
        </section>

        <section class="brand_intro_section">
            <div class="cont_inner">
                <div class="history_box">
                    <p class="history_text" v-for="(text, idx) in t?.History" :key="idx" v-html="text"></p>
                </div>
            </div>
        </section>

        <section class="brand_value_section">
            <div class="cont_inner">
                <div class="brand_value_wrap">
                    <div class="value_title">
                        <h3 class="title_text" v-html="t?.ValueTitle"></h3>
                        <div class="btn_group">
                            <div class="links">
                                <button type="button" class="btn_link ico_location">{{ t?.Buttons.proposal }}</button>
                                <button type="button" class="btn_link ico_store">{{ t?.Buttons.findStore }}</button>
                                <a href="#" class="btn_sns ico_insta"><span class="blind">{{ t?.Sns.insta }}</span></a>
                                <a href="#" class="btn_sns ico_facebook"><span class="blind">{{ t?.Sns.facebook }}</span></a>
                            </div>
                        </div>
                    </div>

                    <div class="accordion_list">
                        <div 
                            v-for="(item, idx) in t?.AccordionList" 
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
                    <Tabs @change="onTabChange1" v-model="originTabIdx1" :tab-items="t?.OriginTabs1" tab-class="type_01" :tab-slide="false" />
                </div>

                <div class="tab_content" v-if="originTabIdx1 === 0">
                    <div class="origin_tabs_2depth">
                        <Tabs @change="onTabChange2" v-model="originTabIdx2" :tab-items="t?.OriginTabs2" tab-class="type_02" :tab-slide="false" />
                    </div>
                    
                    <div class="sub_tab_content" v-if="originTabIdx2 === 0">
                        <div class="origin_intro">
                            <div class="visual_img_small"></div>
                            <div class="text_box">
                                <h3 class="title">{{ t?.OriginContent.title }}</h3>
                                <p class="desc">{{ t?.OriginContent.desc }}</p>
                                <p class="desc">{{ t?.OriginContent.desc1 }}</p>
                            </div>
                        </div>

                        <div class="origin_content_wrap">
                            <aside class="origin_lnb">
                                <ul>
                                    <li v-for="(cat, idx) in t?.OriginCategories" :key="idx" :class="{ active: currentCat === idx }">
                                        <button type="button" @click="scrollToSection(idx)">{{ cat }}</button>
                                    </li>
                                </ul>
                            </aside>

                            <div class="origin_list_box">
                                <div 
                                    v-for="(group, gIdx) in t?.OriginData" 
                                    :key="gIdx" 
                                    :ref="el => originRefs[gIdx] = el"
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

                    <!-- gsrbr020102 -->
                    <div class="sub_tab_content" v-if="originTabIdx2 === 1">
                        <div class="partnership_wrap">
                            <div class="origin_intro">
                                <div class="visual_img_small partnership_bg"></div>
                                <div class="text_box">
                                    <h3 class="title">{{ t?.PartnershipTitle }}</h3>
                                    <p class="desc" v-html="t?.PartnershipDesc"></p>
                                </div>
                            </div>

                            <div class="mou_status">
                                <h4 class="sub_title">{{ t?.MouStatusTitle }}</h4>
                                <div class="mou_grid">
                                    <div 
                                        v-for="(mou, mIdx) in t?.MouList" 
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
                                <h4 class="sub_title">{{ t?.MouProductsTitle }}</h4>
                                <table class="mou_table">
                                    <caption class="blind">{{ t?.MouTableCaption }}</caption>
                                    <colgroup>
                                        <col style="width: 15%;">
                                        <col style="width: auto;">
                                    </colgroup>
                                    <tbody>
                                        <tr v-for="(row, rIdx) in t?.MouProducts" :key="rIdx">
                                            <th scope="row">{{ row.location }}</th>
                                            <td>{{ row.products }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- gsrbr020201 -->
                <div class="tab_content" v-if="originTabIdx1 === 1">
                    <div class="tm-content-container">
                        <div class="tm-intro-section">
                            <div class="tm-title-box">
                                <h3 class="tm-main-title">{{ t?.TasteManagement.title }}</h3>
                                <div class="tm-main-desc-box">
                                    <p class="tm-main-desc" v-html="t?.TasteManagement.desc"></p>
                                </div>
                            </div>
                        </div>

                        <div class="tm-node-section">
                            <div class="tm-section-header">
                                <h4 class="tm-section-title">{{ t?.TasteManagement.processTitle }}</h4>
                            </div>
                            <div class="tm-steps-wrap">
                                <div class="tm-steps-grid">
                                    <div v-for="(step, sIdx) in t?.TasteManagement.steps" :key="sIdx" class="tm-step-item">
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
                                <h4 class="tm-section-title">{{ t?.TasteManagement.principleTitle }}</h4>
                                <p class="tm-section-subtext">{{ t?.TasteManagement.principleSub }}</p>
                            </div>
                            <div class="tm-principles-grid">
                                <div v-for="(p, pIdx) in t?.TasteManagement.principles" :key="pIdx" class="tm-principle-card">
                                    <div class="tm-card-header">
                                        <span class="tm-card-num">0{{ pIdx + 1 }}</span>
                                        <strong class="tm-card-tit">{{ p.title }}</strong>
                                    </div>
                                    <div class="tm-card-body">
                                        <p class="tm-card-main-text">{{ p.desc }}</p>
                                        <p class="tm-card-sub-text">{{ p.subDesc }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tm-node-section">
                            <div class="tm-product-layout">
                                <aside class="tm-lnb-side">
                                    <div class="tm-lnb-list">
                                        <div v-for="(cat, cIdx) in t?.TasteManagement.categories" :key="cIdx" 
                                             class="tm-lnb-item" :class="{ 'is-active': currentTasteCat === cIdx }">
                                            <button type="button" @click="scrollToTasteSection(cIdx)">{{ cat }}</button>
                                        </div>
                                    </div>
                                </aside>
                                <div class="tm-product-main">
                                    <div 
                                        v-for="(group, gIdx) in t?.TasteManagement.productGroups" 
                                        :key="gIdx" 
                                        :ref="el => tasteRefs[gIdx] = el" 
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
                    <button type="button" class="btn_back" @click="handleBack">{{ t?.Buttons.backToList }}</button>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import Tabs from "@/components/Tabs.vue";

const router = useRouter();
const activeIdx = ref(0);
const originTabIdx1 = ref(0);
const originTabIdx2 = ref(0);
const originRefs = ref([]);
const currentCat = ref(0);
const currentTasteCat = ref(0); // 맛/선도 카테고리 상태
const tasteRefs = ref([]);

const langData = {
    ko: {
        Visual: {
            img: require("@/assets/images/dummy/gsrbr020101_main.png"),
            alt: "GS THE FRESH 메인 비주얼",
            logo: require("@/assets/images/dummy/gsrbr020101_2.png"),
            logoAlt: "GS THE FRESH 로고"
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
                    { name: "제주 깐마늘", img: require("@/assets/images/dummy/tab_1_12.png") },
                    { name: "해남 절임배추", img: require("@/assets/images/dummy/tab_1_13.png") },
                    { name: "참타리버섯", img: require("@/assets/images/dummy/tab_1_13.png") }
                ]
            },
            {
                category: "양곡",
                summary: "고슬고슬 밥맛 좋은 우리 곡식",
                items: [
                    { name: "당진 쌀", img: require("@/assets/images/dummy/tab_1_14.png") }
                ]
            },
            {
                category: "축산",
                summary: "풍부한 육즙의 고품질 축산물",
                items: [
                    { name: "우월 한우", img: require("@/assets/images/dummy/tab_1_15.png") }
                ]
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
        // [복구 데이터] 맛/선도 관리
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
                        { name: "소갈비", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "국거리용 소고기", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "한우안심", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "삼겹살", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "계랸", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "닭고기", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "한우등심", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "불고기용 소고기", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "목심", img: require("@/assets/images/dummy/tab_1_9.png") },
                        
                    ]
                },
                {
                    category: "싱싱한 과일",
                    items: [
                        { name: "소갈비", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "국거리용 소고기", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "한우안심", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "삼겹살", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "계랸", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "닭고기", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "한우등심", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "불고기용 소고기", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "목심", img: require("@/assets/images/dummy/tab_1_9.png") },
                        
                    ]
                },
                {
                    category: "신선한 채소",
                    items: [
                        { name: "소갈비", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "국거리용 소고기", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "한우안심", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "삼겹살", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "계랸", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "닭고기", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "한우등심", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "불고기용 소고기", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "목심", img: require("@/assets/images/dummy/tab_1_9.png") },
                        
                    ]
                },
                {
                    category: "신선한 해산물",
                    items: [
                        { name: "소갈비", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "국거리용 소고기", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "한우안심", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "삼겹살", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "계랸", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "닭고기", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "한우등심", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "불고기용 소고기", img: require("@/assets/images/dummy/tab_1_9.png") },
                        { name: "목심", img: require("@/assets/images/dummy/tab_1_9.png") },
                        
                    ]
                }
            ]
        }



    }
};

const t = computed(() => langData.ko);

const onTabChange1 = (idx) => {
    originTabIdx1.value = idx;
    originTabIdx2.value = 0; 
};

const onTabChange2 = (idx) => {
    originTabIdx2.value = idx;
};

const scrollToSection = (idx) => {
    currentCat.value = idx;
    const target = originRefs.value[idx];
    if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

// // 2. 기존 currentTasteCat을 유지하면서 스크롤 이동 함수 추가
// const scrollToTasteSection = (idx) => {
//     currentTasteCat.value = idx; // 활성 상태 변경
//     const target = tasteRefs.value[idx]; // 해당 순서의 섹션 찾기
//     if (target) {
//         // 부드럽게 해당 위치로 스크롤 이동
//         target.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
// };

const toggleAccordion = (idx) => {
    activeIdx.value = (activeIdx.value === idx) ? null : idx;
};

const handleBack = () => router.back();

// 스크롤 이동 함수
const scrollToTasteSection = (idx) => {
    currentTasteCat.value = idx; // 현재 활성 탭 인덱스 업데이트
    
    // tasteRefs에 저장된 해당 인덱스의 엘리먼트를 가져옴
    const target = tasteRefs.value[idx];
    
    if (target) {
        // 해당 영역으로 부드럽게 스크롤
        target.scrollIntoView({ 
            behavior: "smooth", 
            block: "start" 
        });
    }
};


</script>

<style scoped>
/* 1.넓이 2.외부여백 3.내부여백 4.폰트 5.배경 6.테두리 7.정렬 8.위치 9.블록 10.변형 */

.gsrbr020101 { width: 100%; position: relative; display: block; }
.cont_inner { width: 100%; max-width: 1420px; margin: 0 auto; padding: 0 20px; }

/* Visual Section */
.visual_section { width: 100%; position: relative; display: block; }
.visual_img { width: 100%; height: 1080px; position: relative; }
.visual_img img { width: 100%; height: 100%; object-fit: cover; }
.visual_content { width: 100%; padding: 100px 0; background-color: #fff; position: relative; display: flex; align-items: center; justify-content: center; }
.brand_logo img { width: 100%; height: auto; }

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
.accordion_item.active .accordion_header { padding: 64px; }
.accordion_item.active .accordion_header:after { display: none; }
.header_text { color: #161616; font-size: 28px; font-weight: 700; }

.accordion_body { width: 100%; padding: 0 64px 64px; position: relative; }
.body_content { display: flex; justify-content: space-between; gap: 40px; }
.desc_text { flex: 1; color: #67676f; font-size: 20px; line-height: 1.6; }
.content_img { width: 400px; height: 260px; border-radius: 12px; overflow: hidden; position: absolute; top: -100px; right: 64px; }
.content_img img { width: 100%; height: 100%; object-fit: cover; }

/* Origin Section & Tabs */
.origin_section { width: 100%; padding: 0 0 200px; position: relative; display: block; }
.mt40 { margin-top: 40px; }
.origin_tabs_2depth { width: 100%; margin: 60px 0 0; }
.empty_cont { padding: 100px 0; text-align: center; color: #67676f; font-size: 20px; background-color: #f8f8f8; border-radius: 12px; }

/* 지자체 컨텐츠 디자인 */
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
.tm-principles-grid { display: flex; gap: 20px; width: 100%; }
.tm-principle-card {flex: 1; background-color: #F8F8F8; border-radius: 12px; padding: 32px; display: flex; flex-direction: column; gap: 16px; overflow: hidden; }
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

</style>
