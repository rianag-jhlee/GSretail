<template>
    <div class="inner">
        <Tabs
            :model-value="depth1ActiveIdx"
            tab-class="type_01"
            :tab-items="depth1Tabs"
            :tab-slide="false"
            @change="onDepth1Change"
        />
        <Tabs
            v-if="depth1ActiveIdx === 0"
            v-model="activeTab"
            tab-class="type_02"
            :tab-items="depth2Tabs"
            :tab-slide="false"
        />
        <Tabs
            v-if="depth1ActiveIdx === 2"
            v-model="storeActiveTab"
            tab-class="type_02"
            :tab-items="storeTabs"
            :tab-slide="false"
        />

        <!-- 탭 0: 차별화 상품 -->
        <div v-show="depth1ActiveIdx === 0 && activeTab === 0" class="brand_panel">
            <PanelHeader :hero="tab0.hero" :hero-alt="tab0.heroAlt" :title="tab0.title" :subtitle="tab0.subtitle" />

            <ul v-if="tab0.cards && tab0.cards.length" class="diff_card_grid" role="list">
                <li v-for="(card, c) in tab0.cards" :key="c">
                    <article class="diff_card">
                        <figure>
                            <img :src="card.image" :alt="card.alt || ''" width="460" height="320" />
                        </figure>
                        <div>
                            <h3>{{ card.title }}</h3>
                            <p>{{ card.desc }}</p>
                        </div>
                    </article>
                </li>
            </ul>

            <DiffQrRow v-if="tab0.qr" :title="tab0.qr.title" :desc="tab0.qr.desc" />
        </div>

        <!-- 탭 1: CAFE25 -->
        <div v-show="depth1ActiveIdx === 0 && activeTab === 1" class="brand_panel">
            <PanelHeader :hero="tab1.hero" :hero-alt="tab1.heroAlt" :title="tab1.title" :subtitle="tab1.subtitle" hero-bg="#fff" />

            <section v-for="(sec, i) in tab1.sections" :key="i">
                <SectionHeader :title="sec.title" :desc="sec.desc" :source="sec.source" />

                <!-- 카드형 -->
                <ul v-if="sec.type === 'cards'" class="cafe25_card_list" role="list">
                    <li v-for="(card, c) in sec.cards" :key="c">
                        <div>
                            <img :src="card.image" :alt="card.alt || ''" />
                        </div>
                    </li>
                </ul>

                <!-- 이미지형 -->
                <figure v-else-if="sec.type === 'image'" class="cafe25_img_wrap">
                    <img :src="sec.image" :alt="sec.imageAlt || ''" width="938" height="472" />
                </figure>

                <!-- 분할형 (이미지 + 테이블) -->
                <div v-else-if="sec.type === 'split'" class="cafe25_split">
                    <div class="cafe25_split_img">
                        <img :src="sec.image" :alt="sec.imageAlt || ''" />
                    </div>
                    <div class="cafe25_split_table">
                        <table class="cafe25_table">
                            <thead>
                                <tr>
                                    <th
                                        v-for="(col, ci) in sec.columns"
                                        :key="ci"
                                        scope="col"
                                        :style="{ width: col.width + 'px', textAlign: col.align }"
                                    >{{ col.label }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, ri) in sec.rows" :key="ri">
                                    <td v-for="(col, ci) in sec.columns" :key="ci" :style="{ textAlign: col.align }">{{ row[col.key] }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- 테이블형 -->
                <div v-else-if="sec.type === 'table'" class="cafe25_table_wrap">
                    <table class="cafe25_table">
                        <thead>
                            <tr>
                                <th
                                    v-for="(col, ci) in sec.columns"
                                    :key="ci"
                                    scope="col"
                                    :style="{ width: col.width + 'px', textAlign: col.align }"
                                >{{ col.label }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, ri) in sec.rows" :key="ri">
                                <td v-for="(col, ci) in sec.columns" :key="ci" :style="{ textAlign: col.align }">
                                    <img v-if="ci === 0 && row.flag" :src="row.flag" :alt="row.country" class="flag_icon" width="24" height="24" />{{ row[col.key] }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>

        <!-- 탭 2: CHICKEN25 -->
        <div v-show="depth1ActiveIdx === 0 && activeTab === 2" class="brand_panel">
            <PanelHeader :hero="tab2.hero" :hero-alt="tab2.heroAlt" :title="tab2.title" :subtitle="tab2.subtitle" />

            <section v-for="(sec, i) in tab2.sections" :key="i">
                <SectionHeader :title="sec.title" :desc="sec.desc" />

                <ul v-if="sec.type === 'text_cards'" class="chicken25_card_list" role="list">
                    <li v-for="(card, c) in sec.cards" :key="c">
                        <div class="chicken25_card">
                            <h4 v-html="card.title" />
                            <p>{{ card.desc }}</p>
                        </div>
                    </li>
                </ul>
            </section>

            <ul v-if="tab2.imgGrid && tab2.imgGrid.length" class="chicken25_img_grid" role="list">
                <li v-for="(item, i) in tab2.imgGrid" :key="i">
                    <div>
                        <img :src="item.image" :alt="item.alt || ''" />
                    </div>
                </li>
            </ul>

            <DiffQrRow v-if="tab2.qr" :title="tab2.qr.title" :desc="tab2.qr.desc" />
        </div>

        <!-- 탭 3: GOPIZZA -->
        <div v-show="depth1ActiveIdx === 0 && activeTab === 3" class="brand_panel">
            <PanelHeader :hero="tab3.hero" :hero-alt="tab3.heroAlt" :title="tab3.title" :subtitle="tab3.subtitle" />

            <section v-for="(sec, i) in tab3.sections" :key="i">
                <SectionHeader :title="sec.title" :desc="sec.desc" />

                <!-- 이미지 2열 -->
                <ul v-if="sec.type === 'img_grid'" class="gopizza_img_grid" role="list">
                    <li v-for="(item, gi) in sec.images" :key="gi">
                        <div>
                            <img v-if="item.image" :src="item.image" :alt="item.alt || ''" />
                        </div>
                    </li>
                </ul>

                <!-- 단일 이미지 -->
                <figure v-else-if="sec.type === 'image'" class="gopizza_img_wrap">
                    <img v-if="sec.image" :src="sec.image" :alt="sec.imageAlt || ''" />
                </figure>

                <!-- 메뉴 소개 (REGULAR / GRAB 2패널) -->
                <ul v-else-if="sec.type === 'menu'" class="gopizza_menu">
                    <li v-for="(pnl, pi) in sec.panels" :key="pi" class="gopizza_menu_panel">
                        <div>
                            <img v-if="pnl.image" :src="pnl.image" :alt="pnl.size" />
                        </div>
                        <div class="gopizza_menu_info">
                            <div class="gopizza_menu_title">
                                <strong>{{ pnl.size }}</strong>
                                <span v-for="(tag, ti) in pnl.tags" :key="ti" class="gopizza_menu_tag">{{ tag }}</span>
                            </div>
                            <div class="gopizza_table_wrap">
                                <table class="gopizza_table">
                                    <thead>
                                        <tr>
                                            <th
                                                v-for="(col, ci) in pnl.columns"
                                                :key="ci"
                                                scope="col"
                                                :style="{ textAlign: col.align }"
                                            >{{ col.label }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(row, ri) in pnl.rows" :key="ri">
                                            <td
                                                v-for="(col, ci) in pnl.columns"
                                                :key="ci"
                                                :style="{ textAlign: col.align }"
                                            >
                                                <span v-if="ci === 0" class="gopizza_menu_name">
                                                    {{ row[col.key] }}
                                                    <em v-if="row.badge" class="gopizza_badge_best">{{ row.badge }}</em>
                                                </span>
                                                <span v-else>{{ row[col.key] }}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </li>
                </ul>

                <!-- 배달·픽업 앱 (2열) -->
                <ul v-else-if="sec.type === 'phone_grid'" class="gopizza_phone_grid" role="list">
                    <li v-for="(item, ii) in sec.items" :key="ii">
                        <img v-if="item.image" :src="item.image" :alt="item.alt || ''" />
                    </li>
                </ul>
            </section>

            <div class="diff_bottom_row">
                <DiffQrRow v-if="tab3.qr" :title="tab3.qr.title" :desc="tab3.qr.desc" />
                <a v-if="tab3.link" :href="tab3.link.url" class="gopizza_link" target="_blank" rel="noopener noreferrer">
                    <div>
                        <p class="gopizza_link_title">{{ tab3.link.title }}</p>
                        <p v-html="tab3.link.desc" />
                    </div>
                </a>
            </div>
        </div>

        <!-- depth1 = 1: 신선강화점 -->
        <div v-if="depth1ActiveIdx === 1" class="brand_panel">
            <PanelHeader :hero="sinsen.hero" :hero-alt="sinsen.heroAlt" :title="sinsen.title" :subtitle="sinsen.subtitle" />

            <section v-for="(sec, i) in sinsen.sections" :key="i">
                <SectionHeader :title="sec.title" :desc="sec.desc" />

                <!-- 특징 카드 4열 -->
                <ul v-if="sec.features" class="sinsen_feature_list" role="list">
                    <li v-for="(feat, fi) in sec.features" :key="fi">
                        <div class="sinsen_feature_card">
                            <span class="sinsen_feature_icon" aria-hidden="true"></span>
                            <h4>{{ feat.title }}</h4>
                            <p v-html="feat.desc" />
                        </div>
                    </li>
                </ul>

                <!-- 배송 흐름도 -->
                <div v-if="sec.flow" class="sinsen_card sinsen_card_flow">
                    <p v-if="sec.flowNote">{{ sec.flowNote }}</p>
                    <img :src="imgFlow" alt="" class="sinsen_flow_img" />
                </div>

                <!-- 운영 장점 체크리스트 카드 -->
                <div v-if="sec.advantages" class="sinsen_card">
                    <ul class="sinsen_check_list">
                        <li v-for="(item, ii) in sec.advantages.items" :key="ii">
                            <div>
                                <span>{{ item.text }}</span>
                                <span v-if="item.note" class="sinsen_check_note">{{ item.note }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>

        <!-- depth1 = 2: 매장/서비스 -->
        <!-- 생활 서비스 -->
        <div v-show="depth1ActiveIdx === 2 && storeActiveTab === 0" class="brand_panel">
            <!-- 3depth 탭 네비 -->
            <nav class="service_tab_wrap" role="tablist" aria-label="생활 서비스">
                <button
                    v-for="(tab, i) in store.tabs[0].serviceTabs"
                    :key="i"
                    type="button"
                    role="tab"
                    :aria-selected="serviceActiveTab === i"
                    class="service_tab_item"
                    :class="{ is_active: serviceActiveTab === i }"
                    @click="serviceActiveTab = i"
                >
                    <span class="service_tab_icon" aria-hidden="true"></span>
                    <span class="service_tab_label">{{ tab.label }}</span>
                </button>
            </nav>

            <!-- 3depth 패널 -->
            <div
                v-for="(tab, i) in store.tabs[0].serviceTabs"
                :key="i"
                v-show="serviceActiveTab === i"
                class="service_panel"
            >
                <section>
                    <PanelHeader
                        :hero="tab.hero"
                        :hero-alt="tab.heroAlt"
                        :title="tab.title"
                        :subtitle="tab.desc"
                    />
                    <table v-if="tab.table" class="cash_table">
                        <tbody>
                            <tr v-for="(row, ri) in tab.table.rows" :key="ri">
                                <th scope="row">{{ row.head }}</th>
                                <td>
                                    <div class="cash_table_cell">
                                        <span>{{ row.text }}</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>

        <!-- 택배&픽업 -->
        <div v-show="depth1ActiveIdx === 2 && storeActiveTab === 1" class="brand_panel">
            <!-- <PanelHeader
                :hero="store.tabs[1].hero"
                :hero-alt="store.tabs[1].heroAlt"
                :title="store.tabs[1].title"
                :subtitle="store.tabs[1].subtitle"
            /> -->
        </div>

        <!-- 공공요금수납 -->
        <div v-show="depth1ActiveIdx === 2 && storeActiveTab === 2" class="brand_panel">
            <!-- <PanelHeader
                :hero="store.tabs[2].hero"
                :hero-alt="store.tabs[2].heroAlt"
                :title="store.tabs[2].title"
                :subtitle="store.tabs[2].subtitle"
            /> -->
        </div>

        <!-- 상품권 판매 -->
        <div v-show="depth1ActiveIdx === 2 && storeActiveTab === 3" class="brand_panel">
            <!-- <PanelHeader
                :hero="store.tabs[3].hero"
                :hero-alt="store.tabs[3].heroAlt"
                :title="store.tabs[3].title"
                :subtitle="store.tabs[3].subtitle"
            /> -->
        </div>

        <div class="diff_actions">
            <Buttons btn-class="btn_back" @click="goBack">{{ t.backLabel }}</Buttons>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";
import { useRouter } from "vue-router";
import Tabs from "@/components/Tabs.vue";
import PanelHeader from "@/components/PanelHeader.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import Buttons from "@/components/Buttons.vue";
import DiffQrRow from "@/components/DiffQrRow.vue";

/* 탭 0 이미지 */
import imgHero0 from "@/assets/images/dummy/differentiated_bg_01.png";
import imgCard1 from "@/assets/images/dummy/differentiated_product_01.png";
import imgCard2 from "@/assets/images/dummy/differentiated_product_02.png";

/* 탭 1 이미지 */
import imgHero1 from "@/assets/images/dummy/differentiated_bg_02.png";
import imgCoffeeMachine01 from "@/assets/images/dummy/coffee_machine_01.png";
import imgCoffeeMachine02 from "@/assets/images/dummy/coffee_machine_02.png";
import imgCoffeeMachine03 from "@/assets/images/dummy/coffee_machine_03.png";
import imgFlagBrazil from "@/assets/images/dummy/img_flag_brazil.png";
import imgFlagGuatemala from "@/assets/images/dummy/img_flag_guatemala.png";
import imgFlagColombia from "@/assets/images/dummy/img_flag_colombia.png";
import imgFlagEthiopia from "@/assets/images/dummy/img_flag_ethiopia.png";
import imgFlagPapua from "@/assets/images/dummy/img_flag_papua.png";
import imgCafe25Graph from "@/assets/images/dummy/cafe25_graph.png";
import imgCafeMenu from "@/assets/images/dummy/cafe25_menu.png";

/* 탭 2 이미지 */
import imgHero2 from "@/assets/images/dummy/differentiated_bg_03.png";
import imgChickenLeft from "@/assets/images/dummy/chicken25_card_01.png";
import imgChickenRight from "@/assets/images/dummy/chicken25_card_02.png";

/* 탭 3 이미지 */
import imgHero3 from "@/assets/images/dummy/differentiated_bg_04.png";
import imgGoben1 from "@/assets/images/dummy/gopizza_goben_01.png";
import imgGoben2 from "@/assets/images/dummy/gopizza_goben_02.png";
import imgDough from "@/assets/images/dummy/gopizza_dough.png";
import imgMenu1 from "@/assets/images/dummy/gopizza_menu_01.png";
import imgMenu2 from "@/assets/images/dummy/gopizza_menu_02.png";
import imgPhone1 from "@/assets/images/dummy/gopizza_phone_01.png";
import imgPhone2 from "@/assets/images/dummy/gopizza_phone_02.png";

/*신선강화점 이미지*/ 
import imgHero4 from "@/assets/images/dummy/brand_bg_05.png";
import imgFlow from "@/assets/images/dummy/sinsen_flow.png";

/*매장/서비스 이미지*/ 
import imgHero5 from "@/assets/images/dummy/brand_bg_06.png";

// import imgSinsenFeature1 from "@/assets/images/dummy/sinsen_feature_01.png";
// import imgSinsenFeature2 from "@/assets/images/dummy/sinsen_feature_02.png";
// import imgSinsenFeature3 from "@/assets/images/dummy/sinsen_feature_03.png";
// import imgSinsenFeature4 from "@/assets/images/dummy/sinsen_feature_04.png";
// import imgSinsenFeature5 from "@/assets/images/dummy/sinsen_feature_05.png";
// import imgSinsenFeature6 from "@/assets/images/dummy/sinsen_feature_06.png";

const props = defineProps({
    lang: { type: String, default: "ko" },
});

const router = useRouter();
const activeTab = ref(0);

const langData = {
    ko: {
        nav: {
            depth1: [
                { item: "차별화 상품/서비스" },
                { item: "신선강화점" },
                { item: "매장/서비스" },
                { item: "상생협력" },
                { item: "밀박스/스낵바" },
            ],
            depth2: [
                { item: "차별화 상품" },
                { item: "CAFE25" },
                { item: "치킨25" },
                { item: "고피자" },
            ],
            depth2Store: [
                { item: "생활 서비스" },
                { item: "택배&픽업" },
                { item: "공공요금수납" },
                { item: "상품권 판매" },
            ],
        },
        tabs: [
            {
                hero: imgHero0,
                heroAlt: "",
                title: "차별화 상품",
                subtitle: "최고급 커피머신과 스페셜티 블렌딩 원두를 사용하여 최상의 커피를 합리적인 가격으로 제공하는 GS25의 차별화 원두커피",
                cards: [
                    {
                        image: imgCard1,
                        alt: "",
                        title: "김혜자 도시락",
                        desc: "정성 가득한 한끼를 위한 프리미엄 도시락 라인으로, 높은 고객 만족도를 자랑하는 GS25 대표 차별화 상품입니다.",
                    },
                    {
                        image: imgCard2,
                        alt: "",
                        title: "넷플릭스 시리즈",
                        desc: "넷플릭스 인기 콘텐츠와 협업한 GS25 단독 콜라보 상품 시리즈로, 트렌디한 소비 경험을 제공합니다.",
                    },
                ],
                qr: {
                    title: "우리동네GS 앱 다운로드",
                    desc: "우리동네GS 앱을 다운로드하고, GS25의 다양한 이벤트와 차별화 상품을 만나보세요.<br />QR코드를 스캔하면 앱 다운로드 페이지로 이동합니다.",
                },
            },
            {
                hero: imgHero1,
                heroAlt: "",
                title: "CAFE25",
                subtitle: "최고급 커피머신과 스페셜티 블렌딩 원두를 사용하여 최상의 커피를 합리적인 가격으로 제공하는 GS25의 차별화 원두커피 전문 존입니다.",
                sections: [
                    {
                        type: "cards",
                        title: "커피머신",
                        desc: "소비자가 1,300만원 상당의 스위스 명품 커피 머신 브랜드 프랑케 머신입니다.",
                        cards: [
                            { image: imgCoffeeMachine01, alt: "" },
                            { image: imgCoffeeMachine02, alt: "" },
                            { image: imgCoffeeMachine03, alt: "" },
                        ],
                    },
                    {
                        type: "table",
                        title: "원두",
                        desc: "국내 NO1. 로스터인 동서식품의 스페셜티 블렌딩 원두입니다. (브라질, 과테말라, 콜롬비아 등 최상위 원두 생산국의 원두 5종 블렌딩)",
                        columns: [
                            { key: "country", label: "원산지",  width: 200, align: "left" },
                            { key: "ratio",   label: "배합비",  width: 160, align: "center" },
                            { key: "process", label: "가공방식", width: 289, align: "center" },
                            { key: "feature", label: "원두특징", width: 289, align: "left" },
                        ],
                        rows: [
                            { flag: imgFlagBrazil,    country: "브라질",      ratio: "35%", process: "Natural", feature: "균형감 있는 향미" },
                            { flag: imgFlagGuatemala, country: "과테말라",     ratio: "30%", process: "Washed",  feature: "뛰어난 바디감" },
                            { flag: imgFlagColombia,  country: "콜롬비아",     ratio: "25%", process: "Washed",  feature: "견과류의 고소함" },
                            { flag: imgFlagEthiopia,  country: "에티오피아",   ratio: "5%",  process: "Washed",  feature: "밝고 경쾌한 산미" },
                            { flag: imgFlagPapua,     country: "파푸아뉴기니", ratio: "5%",  process: "Washed",  feature: "꽃과 허브의 향기" },
                        ],
                    },
                    {
                        type: "image",
                        title: "전문점 커피보다 맛이 뛰어난 CAFE25",
                        desc: "바리스타협회 평가 결과 커피 프랜차이즈 수준의 커피 맛이 입증되었습니다.",
                        source: "한국커피연합회 관능평가결과(23.05)",
                        image: imgCafe25Graph,
                        imageAlt: "커피 맛 비교 그래프 - GS25가 전문점 커피 수준임을 나타낸 바 차트",
                    },
                    {
                        type: "split",
                        title: "메뉴 소개",
                        image: imgCafeMenu,
                        imageAlt: "CAFE25 메뉴 이미지",
                        columns: [
                            { key: "menu",     label: "구분",           width: 260, align: "left" },
                            { key: "volume",   label: "1회 제공량(mL)", width: 220, align: "center" },
                            { key: "caffeine", label: "카페인 함량(mg)", width: 220, align: "center" },
                        ],
                        rows: [
                            { menu: "에스프레소",            volume: "35",  caffeine: "137" },
                            { menu: "카카오에스프레소",       volume: "43",  caffeine: "127" },
                            { menu: "아메리카노",             volume: "200", caffeine: "121" },
                            { menu: "아메리카노 큰컵",        volume: "245", caffeine: "132" },
                            { menu: "아이스아메리카노",       volume: "380", caffeine: "144" },
                            { menu: "아이스아메리카노 큰컵",  volume: "480", caffeine: "140" },
                            { menu: "아이스아메리카노 점보",  volume: "780", caffeine: "180" },
                        ],
                    },
                ],
            },
            {
                hero: imgHero2,
                heroAlt: "",
                title: "CHICKEN25",
                subtitle: "최고의 원재료를 사용하여 즉석에서 조리한 튀김을 합리적인 가격으로 제공하는 GS25만의 차별화 먹거리입니다.<br />편의점에서도 치킨25와 함께 전문점 수준의 치킨을 즐길 수 있습니다.",
                sections: [
                    {
                        type: "text_cards",
                        title: "엄선된 원재료, 믿을 수 있는 맛",
                        desc: "최고의 원재료로 만들어 안심하고 더 맛있게 즐길 수 있는 고품질의 치킨을 제공합니다.",
                        cards: [
                            {
                                title: "깨끗한 기름으로<br />더 맛있는 튀김",
                                desc: "깨끗하게 관리한 기름을 사용하여 더욱 바삭하고 맛있고, 철저한 위생 관리로 안심하고 즐길 수 있는 맛있는 치킨을 제공합니다.",
                            },
                            {
                                title: "다양한 메뉴,<br />골라 먹는 재미",
                                desc: "전문점보다 더 풍성하게 준비된 메뉴들로 다양한 메뉴를 골라 드실 수 있습니다. (한마리, 반마리, 닭다리, 날개, 봉, 꼬치, 핫도그, 튀김만두 등)",
                            },
                            {
                                title: "가까운 곳에서 언제든<br />간편히 구매",
                                desc: "가까운 GS25에서 갓 튀긴 바삭한 치킨을 언제든지 간편하게 접할 수 있습니다. 우리동네GS앱을 통한 배달/픽업 서비스로 인근 GS25에서 더욱 간편한 구매가 가능합니다.",
                            },
                        ],
                    },
                ],
                imgGrid: [
                    { image: imgChickenLeft, alt: "" },
                    { image: imgChickenRight, alt: "" },
                ],
                qr: {
                    title: "우리동네GS 앱 다운로드",
                    desc: "우리동네GS 앱을 다운로드하고, GS25의 다양한 이벤트와 차별화 상품을 만나보세요.<br />QR코드를 스캔하면 앱 다운로드 페이지로 이동합니다.",
                },
            },
            {
                hero: imgHero3,
                heroAlt: "",
                title: "GOPIZZA",
                subtitle: "한 판의 즐거움! 한 손의 간편함! 고피자는 1인 피자의 선두 브랜드로, 빠르고 맛있는 피자를 제공합니다.<br />이제 가까운 GS25에서도 고피자의 대표 메뉴를 만나볼 수 있습니다.",
                sections: [
                    {
                        type: "img_grid",
                        title: "GS25에만 있는 고븐미니 조리 시스템",
                        desc: "매장에서 바로 구워내 더욱 바삭한 식감! 편의점에서 만나는 피자 전문점 퀄리티!<br />초소형, 초고온, 저전력의 고븐미니는 고온에서 짧은 시간의 조리를 할 수 있어 언제 어디서나 갓 구운 피자를 즐길 수 있습니다.",
                        images: [
                            { image: imgGoben1, alt: "" },
                            { image: imgGoben2, alt: "" },
                        ],
                    },
                    {
                        type: "image",
                        title: "차별화된 도우",
                        desc: "9˚C 저온에서 24시간 숙성한 파베이크 도우를 사용하여 겉바속쫄!<br />고피자의 기술력이 집적된 파베이크 도우는 저온숙성을 거쳐 먹기 좋은 볼륨감과 충분한 수분 함량으로 빠삭하고 쫄깃한 식감을 제공합니다.",
                        image: imgDough,
                        imageAlt: "",
                    },
                    {
                        type: "menu",
                        title: "메뉴 소개",
                        desc: "고피자의 스테디셀러부터 기대되는 신메뉴까지! GS25에서 REGULAR와 GRAB으로 간편하고 맛있게 즐기세요!<br />REGULAR 사이즈의 경우 피자가 W모양으로 5등분 컷팅되어 한조각씩 간편하게 먹을 수 있습니다.",
                        panels: [
                            {
                                image: imgMenu1,
                                size: "REGULAR (27cm)",
                                tags: ["식사대용", "일반피자 4조각 분량"],
                                columns: [
                                    { key: "name",  label: "메뉴명",       align: "left"  },
                                    { key: "price", label: "금액(원)",      align: "right" },
                                    { key: "kcal",  label: "칼로리(kcal)", align: "right" },
                                ],
                                rows: [
                                    { name: "포테이토&베이컨", price: "7,900", kcal: "922",   badge: "BEST" },
                                    { name: "체다 페퍼로니",   price: "7,900", kcal: "1,017" },
                                    { name: "미트치즈",        price: "7,900", kcal: "945"   },
                                    { name: "트리플치즈",      price: "8,500", kcal: "1,009" },
                                ],
                            },
                            {
                                image: imgMenu2,
                                size: "GRAB (20cm)",
                                tags: ["간식용", "일반피자 2조각 분량"],
                                columns: [
                                    { key: "name",  label: "메뉴명",       align: "left"  },
                                    { key: "price", label: "금액(원)",      align: "right" },
                                    { key: "kcal",  label: "칼로리(kcal)", align: "right" },
                                ],
                                rows: [
                                    { name: "포테이토&베이컨", price: "3,500", kcal: "357",  badge: "BEST" },
                                    { name: "체다 페퍼로니",   price: "3,500", kcal: "355"  },
                                    { name: "미트치즈",        price: "3,500", kcal: "341"  },
                                    { name: "트리플치즈",      price: "3,500", kcal: "349"  },
                                ],
                            },
                        ],
                    },
                    {
                        type: "phone_grid",
                        title: "우리동네GS앱에서는 빠른 배달, 픽업 가능",
                        items: [
                            { image: imgPhone1, alt: "" },
                            { image: imgPhone2, alt: "" },
                        ],
                    },
                ],
                qr: {
                    title: "우리동네GS 앱 다운로드",
                    desc: "우리동네GS 앱을 다운로드하고, GS25의 다양한 이벤트와 차별화 상품을 만나보세요.<br />QR코드를 스캔하면 앱 다운로드 페이지로 이동합니다.",
                },
                link: {
                    title: "GOPIZZA 홈페이지 바로가기",
                    desc: "GOPIZZA 홈페이지에서 내 주변 매장 찾고 합리적인 가격과 차별화된 맛을 경험해보세요.<br />버튼을 클릭하면 해당 홈페이지로 이동합니다.",
                    url: "https://gopizza.kr",
                },
            },
        ],
        sinsen: {
            hero: imgHero4,
            heroAlt: "신선강화점",
            title: "신선강화점",
            subtitle: "신선강화점은 1~2인 가구 및 근거리/소용량 쇼핑 증가 트렌드에 맞춰, 24시간 365일 한번에 장보기를 구현한 신선강화형 편의점입니다.<br />편의점의 간편함과 수퍼마켓의 신선함을 결합한 차별화 컨셉 모델로 매일매일 신선한 신선상품(과일, 채소, 정육, 수산)을 제공합니다.",
            sections: [
                {
                    title: "신선강화점 특징",
                    features: [
                        { title: "신선한 상품",   desc: "물류부터 진열 판매까지 전 과정 콜드체인 시스템 적용으로 신선도 유지" },
                        { title: "합리적인 가격", desc: "GS 더프레시와의 통합 구매를 통해 합리적인 가격에 판매" },
                        { title: "소용량 소포장", desc: "1인가구 및 2~3인 가구에 적합한 <br />소용량·소포장 상품 구성" },
                        { title: "전용 상품 브랜드", desc: "신선식품 전문 브랜드 <br />신선특별시 운영" },
                    ],
                },
                {
                    title: "왜 GS25 신선강화점인가?",
                    desc: "GSTHEFRESH 통합 구매를 통한 상품 경쟁력을 확보하여 타 편의점 대비 다양한 신선·장보기 상품을 운영합니다. <br />업계 유일의 신선상품 전용 물류센터를 운영중이며, 파트너사에서 점포까지 전 구간 선도관리를 통해 신선상품의 신선도를 유지합니다.",
                    flow: true,
                    flowNote: "*신선센터를 거치지 않는 운영 구조에서는 상품 검품, 물류비, 신선도 관리 방식에 차이가 발생할 수 있습니다.",
                },
                {
                    title: "신선강화점 운영의 장점",
                    advantages: {
                        items: [
                            { text: "전용상품을 통한 다양한 상품 구색(약 400SKU)" },
                            { text: "신선강화점 전용 행사 운영 (신선 & 가공)" },
                            { text: "신선식품에 신선함을 더해주는 전용 장비 운영" },
                            { text: "전자가격표시기를 활용한 신선 가격 대응 자동화" },
                            { text: "마감할인 라벨프린터 운영으로 폐기 최소화" },
                            { text: "내/외부 전용 홍보물을 통한 홍보 강화" },
                            { text: "기존 일반점 → 신선강화점 변경 시 효과성 검증", note: "\u201C도입 후 일평균 매출 기존대비 약 12.6% 증가, 일평균 고객 수 21명 증가\u201D" },
                        ],
                    },
                },
            ],
        },
        store: {
            tabs: [
                {
                    hero: null,
                    heroAlt: "",
                    title: "생활 서비스",
                    subtitle: "",
                    sections: [],
                    serviceTabs: [
                        {
                            label:   "현금인출기\n서비스",
                            hero:    imgHero5,
                            heroAlt: "",
                            title:   "현금인출기 서비스",
                            desc:    "현금인출, 계좌 이체 등 금융서비스 외에도 프로스포츠(야구, 축구, 배구, 농구) 정규리그 입장권(즉시 입장), 에버랜드 자유이용권의 발권도 가능합니다.<br />그 밖에 하이패스 충전(신용카드 결제), 알뜰폰 판매 등 다양한 생활 편의 서비스를 제공하고 있습니다.",
                        },
                        {
                            label:   "편의점캐시\n구입/충전",
                            hero:    null,
                            heroAlt: "",
                            title:   "편의점 캐시 구입/충전 서비스",
                            desc:    "편의점캐시는 온라인콘텐츠, 쇼핑몰, 게임캐시, 국제전화카드를 편의점에서 구입/충전 할 수 있는 서비스입니다.",
                            table: {
                                rows: [
                                    { head: "게임 · 상품권 · 통신", text: "(알뜰폰/국제전화/모바일 데이터) 등 다양한 서비스를 편의점에서 실시간으로 구입, 충전 할 수 있는 서비스 영수증형 PIN 구입과 국제전화카드 충전 이외에 스마트폰 APP를 통한 실시간 잔액 충전 가능" },
                                    { head: "게임캐시",         text: "N코인(엔씨소프트), 넥슨, 월드오브워크레프트, 리그오브레전드, 틴캐시, 한게임, 퍼니카드, 한빛소프트 등" },
                                    { head: "상품권",           text: "문화상품권, 스마트문화상품권, 해피머니상품권, 도서문화상품권 등" },
                                    { head: "스마트폰 APP충전", text: "넥슨플레이, 컬쳐랜드" },
                                    { head: "알뜰폰",           text: "EG CARD, 7mobile, 아이즈, 모빙, M모바일, free C/T, 이야기 모바일 등" },
                                    { head: "국제전화카드",     text: "LG U+, Naray, SK broadband" },
                                    { head: "통신(데이터)/기타", text: "올레 WiFi, T데이터쿠폰, KT LTE 데이터쿠폰, DAUM캐시" },
                                ],
                            },
                        },
                        {
                            label:   "교통카드\n충전",
                            hero:    null,
                            heroAlt: "",
                            title:   "교통카드 충전",
                            desc:    "",
                        },
                        {
                            label:   "기프트\n카드",
                            hero:    null,
                            heroAlt: "",
                            title:   "기프트 카드",
                            desc:    "",
                        },
                        {
                            label:   "유심\n요금제",
                            hero:    null,
                            heroAlt: "",
                            title:   "유심 요금제",
                            desc:    "",
                        },
                        {
                            label:   "하이패스\n카드/단말기",
                            hero:    null,
                            heroAlt: "",
                            title:   "하이패스 카드/단말기",
                            desc:    "",
                        },
                        {
                            label:   "고속도로 미납\n통행료 납부",
                            hero:    null,
                            heroAlt: "",
                            title:   "고속도로 미납 통행료 납부",
                            desc:    "",
                        },
                        {
                            label:   "온라인몰\n편의점 결제",
                            hero:    null,
                            heroAlt: "",
                            title:   "온라인몰 편의점 결제",
                            desc:    "",
                        },
                    ],
                },
                {
                    hero: null,
                    heroAlt: "",
                    title: "택배&픽업",
                    subtitle: "",
                    sections: [],
                },
                {
                    hero: null,
                    heroAlt: "",
                    title: "공공요금수납",
                    subtitle: "",
                    sections: [],
                },
                {
                    hero: null,
                    heroAlt: "",
                    title: "상품권 판매",
                    subtitle: "",
                    sections: [],
                },
            ],
        },
        backLabel: "목록으로 돌아가기",
    },
    en: {
        nav: {
            depth1: [
                { item: "Products & Services" },
                { item: "Fresh focus stores" },
                { item: "Store / Services" },
                { item: "Win-win partnership" },
                { item: "Mealbox / Snack bar" },
            ],
            depth2: [
                { item: "Differentiated products" },
                { item: "CAFE25" },
                { item: "Chicken25" },
                { item: "Go Pizza" },
            ],
            depth2Store: [
                { item: "Daily services" },
                { item: "Parcel & Pickup" },
                { item: "Utility bill payment" },
                { item: "Gift card sales" },
            ],
        },
        tabs: [
            {
                hero: imgHero0,
                heroAlt: "",
                title: "Differentiated products",
                subtitle: "GS25 specialty coffee with premium machines and blended beans at a reasonable price.",
                cards: [
                    {
                        image: imgCard1,
                        alt: "",
                        title: "Kim Hye-ja lunchbox",
                        desc: "A premium lunchbox line for a hearty meal—one of GS25's signature differentiated products.",
                    },
                    {
                        image: imgCard2,
                        alt: "",
                        title: "Netflix series",
                        desc: "Exclusive GS25 collabs with popular Netflix IP for a trendy experience.",
                    },
                ],
                qr: {
                    title: "Download Wooridongne GS app",
                    desc: "Download the app for events and differentiated products. Scan the QR code to open the store page.",
                },
            },
            {
                hero: imgHero1,
                heroAlt: "",
                title: "CAFE25",
                subtitle: "Specialty coffee zone with espresso-based drinks and seasonal beverages.",
                sections: [
                    {
                        type: "cards",
                        title: "Coffee Machine",
                        desc: "The Franke machine is a Swiss premium coffee machine brand worth 13 million won.",
                        cards: [
                            { image: imgCoffeeMachine01, alt: "" },
                            { image: imgCoffeeMachine02, alt: "" },
                            { image: imgCoffeeMachine03, alt: "" },
                        ],
                    },
                    {
                        type: "table",
                        title: "Coffee Beans",
                        desc: "Specialty blended beans from Dongsuh Foods, Korea's No.1 roaster. (5 varieties from top producing countries including Brazil, Guatemala, and Colombia)",
                        columns: [
                            { key: "country", label: "Origin",          width: 200, align: "left" },
                            { key: "ratio",   label: "Blend ratio",     width: 160, align: "center" },
                            { key: "process", label: "Process",         width: 289, align: "center" },
                            { key: "feature", label: "Characteristics", width: 289, align: "left" },
                        ],
                        rows: [
                            { flag: imgFlagBrazil,    country: "Brazil",           ratio: "35%", process: "Natural", feature: "Balanced flavor" },
                            { flag: imgFlagGuatemala, country: "Guatemala",        ratio: "30%", process: "Washed",  feature: "Full body" },
                            { flag: imgFlagColombia,  country: "Colombia",         ratio: "25%", process: "Washed",  feature: "Nutty richness" },
                            { flag: imgFlagEthiopia,  country: "Ethiopia",         ratio: "5%",  process: "Washed",  feature: "Bright acidity" },
                            { flag: imgFlagPapua,     country: "Papua New Guinea", ratio: "5%",  process: "Washed",  feature: "Floral & herbal" },
                        ],
                    },
                    {
                        type: "image",
                        title: "CAFE25 beats specialty coffee shops",
                        desc: "Barista Association evaluation confirmed coffee franchise-level taste.",
                        source: "Korea Coffee Association sensory evaluation (23.05)",
                        image: imgCafe25Graph,
                        imageAlt: "Bar chart showing GS25 coffee quality vs competitors",
                    },
                    {
                        type: "split",
                        title: "Menu",
                        image: imgCafeMenu,
                        imageAlt: "CAFE25 menu image",
                        columns: [
                            { key: "menu",     label: "Category",         width: 260, align: "left" },
                            { key: "volume",   label: "Serving size (mL)", width: 220, align: "center" },
                            { key: "caffeine", label: "Caffeine (mg)",     width: 220, align: "center" },
                        ],
                        rows: [
                            { menu: "Espresso",             volume: "35",  caffeine: "137" },
                            { menu: "Cacao Espresso",       volume: "43",  caffeine: "127" },
                            { menu: "Americano",            volume: "200", caffeine: "121" },
                            { menu: "Americano Large",      volume: "245", caffeine: "132" },
                            { menu: "Iced Americano",       volume: "380", caffeine: "144" },
                            { menu: "Iced Americano Large", volume: "480", caffeine: "140" },
                            { menu: "Iced Americano Jumbo", volume: "780", caffeine: "180" },
                        ],
                    },
                ],
            },
            {
                hero: imgHero2,
                heroAlt: "",
                title: "Chicken25",
                subtitle: "GS25 chicken with crisp texture and varied sauces.",
                sections: [
                    {
                        type: "text_cards",
                        title: "Premium Ingredients, Trustworthy Taste",
                        desc: "We provide high-quality chicken made with the finest ingredients you can enjoy with confidence.",
                        cards: [
                            {
                                title: "Clean Oil,<br />Crispier Chicken",
                                desc: "Using carefully managed oil for extra crispy and delicious chicken, with strict hygiene standards you can trust.",
                            },
                            {
                                title: "Diverse Menu,<br />Fun to Choose",
                                desc: "A wider variety than specialty stores — whole chicken, half, drumstick, wing, skewer, hot dog, fried dumpling and more.",
                            },
                            {
                                title: "Nearby, Anytime,<br />Easy to Buy",
                                desc: "Freshly fried crispy chicken available at your nearest GS25 anytime. Order via delivery or pickup through the Wooridongne GS app.",
                            },
                        ],
                    },
                ],
                imgGrid: [
                    { image: imgChickenLeft, alt: "" },
                    { image: imgChickenRight, alt: "" },
                ],
                qr: {
                    title: "Download Wooridongne GS app",
                    desc: "Download the app for events and differentiated products. Scan the QR code to open the store page.",
                },
            },
            {
                hero: imgHero3,
                heroAlt: "",
                title: "GOPIZZA",
                subtitle: "Fun for one! Easy to hold! GOPIZZA is a leading personal pizza brand delivering fast, delicious pizza.<br />Now available at your nearest GS25.",
                sections: [
                    {
                        type: "img_grid",
                        title: "GoBen Mini — GS25 Exclusive Cooking System",
                        desc: "Baked fresh in-store for extra crispiness!<br />The ultra-compact, high-heat, low-power GoBen Mini cooks at high temperatures in seconds.",
                        images: [
                            { image: null, alt: "" },
                            { image: null, alt: "" },
                        ],
                    },
                    {
                        type: "image",
                        title: "Signature Dough",
                        desc: "Par-baked dough cold-fermented at 9˚C for 24 hours — crispy outside, chewy inside!<br />GOPIZZA's proprietary dough delivers great volume and moisture for the perfect bite.",
                        image: null,
                        imageAlt: "",
                    },
                    {
                        type: "menu",
                        title: "Menu",
                        desc: "From steady sellers to exciting new items — enjoy REGULAR and GRAB at GS25!<br />REGULAR is W-cut into 5 slices for easy eating.",
                        panels: [
                            {
                                image: null,
                                size: "REGULAR (27cm)",
                                tags: ["Meal-size", "4 slices equiv."],
                                columns: [
                                    { key: "name",  label: "Menu",            align: "left"  },
                                    { key: "price", label: "Price (KRW)",     align: "right" },
                                    { key: "kcal",  label: "Calories (kcal)", align: "right" },
                                ],
                                rows: [
                                    { name: "Potato & Bacon",    price: "7,900", kcal: "922",   badge: "BEST" },
                                    { name: "Cheddar Pepperoni", price: "7,900", kcal: "1,017" },
                                    { name: "Meat Cheese",       price: "7,900", kcal: "945"   },
                                    { name: "Triple Cheese",     price: "8,500", kcal: "1,009" },
                                ],
                            },
                            {
                                image: null,
                                size: "GRAB (20cm)",
                                tags: ["Snack-size", "2 slices equiv."],
                                columns: [
                                    { key: "name",  label: "Menu",            align: "left"  },
                                    { key: "price", label: "Price (KRW)",     align: "right" },
                                    { key: "kcal",  label: "Calories (kcal)", align: "right" },
                                ],
                                rows: [
                                    { name: "Potato & Bacon",    price: "3,500", kcal: "357",  badge: "BEST" },
                                    { name: "Cheddar Pepperoni", price: "3,500", kcal: "355"  },
                                    { name: "Meat Cheese",       price: "3,500", kcal: "341"  },
                                    { name: "Triple Cheese",     price: "3,500", kcal: "349"  },
                                ],
                            },
                        ],
                    },
                    {
                        type: "phone_grid",
                        title: "Fast Delivery & Pickup via Wooridongne GS App",
                        items: [
                            { image: null, alt: "" },
                            { image: null, alt: "" },
                        ],
                    },
                ],
                qr: {
                    title: "Download Wooridongne GS app",
                    desc: "Download the app for events and differentiated products.<br />Scan the QR code to open the store page.",
                },
                link: {
                    title: "Visit GOPIZZA Homepage",
                    desc: "Find the nearest store on the GOPIZZA website and experience great value and unique flavors. Click the button to visit the site.",
                    url: "https://gopizza.kr",
                },
            },
        ],
        sinsen: {
            hero: null,
            heroAlt: "Fresh focus stores",
            title: "Fresh focus stores",
            subtitle: "Fresh focus stores cater to the growing trend of 1–2 person households and small-quantity shopping, offering a one-stop grocery experience 24/7.<br />Combining the convenience of a convenience store with the freshness of a supermarket, they provide daily fresh produce including fruits, vegetables, meat, and seafood.",
            sections: [
                {
                    title: "Fresh focus store features",
                    desc: "FCS (Fresh Concept Store) is GS25's next-generation store model combining the convenience of a convenience store with the freshness of a supermarket.",
                    features: [
                        { title: "Fresh products",        desc: "Cold chain system applied throughout the entire process from logistics to display and sale" },
                        { title: "Reasonable prices",     desc: "Competitive pricing through integrated purchasing with GS The Fresh" },
                        { title: "Small-pack options",    desc: "Small-volume, small-pack products suitable for 1–3 person households" },
                        { title: "Exclusive brand",       desc: "Operating 'Fresh Special City', an exclusive fresh food brand" },
                    ],
                },
                {
                    title: "GS25 fresh delivery process",
                    flow: true,
                    flowNote: "*Stores operating without a fresh center may differ in product inspection, logistics costs, and freshness management.",
                },
                {
                    title: "Advantages of operating fresh focus stores",
                    advantages: {
                        items: [
                            { text: "Diverse product assortment through exclusive products (approx. 400 SKUs)" },
                            { text: "Exclusive promotional events for fresh focus stores (fresh & processed)" },
                            { text: "Dedicated equipment to enhance freshness of fresh foods" },
                            { text: "Automated fresh price response using electronic shelf labels" },
                            { text: "Minimizing waste through discount label printers at closing time" },
                            { text: "Enhanced promotion through dedicated internal/external promotional materials" },
                            { text: "Verified effectiveness when converting from standard to fresh focus stores", note: "\u201CAfter adoption, daily average sales increased by approx. 12.6% and daily customer count increased by 21\u201D" },
                        ],
                    },
                },
            ],
        },
        store: {
            tabs: [
                {
                    hero: null,
                    heroAlt: "",
                    title: "Daily services",
                    subtitle: "",
                    sections: [],
                    serviceTabs: [
                        {
                            label:   "ATM\nServices",
                            hero:    null,
                            heroAlt: "",
                            title:   "ATM Services",
                            desc:    "In addition to financial services such as cash withdrawals and bank transfers, you can also purchase tickets for professional sports (baseball, soccer, volleyball, basketball) regular league games (immediate entry) and Everland unlimited passes.<br />We also offer a variety of daily convenience services including Hi-Pass charging (credit card payment) and budget phone sales.",
                        },
                        {
                            label:   "Convenience\ncash",
                            hero:    null,
                            heroAlt: "",
                            title:   "Convenience Cash Purchase / Recharge Service",
                            desc:    "Convenience cash is a service that allows you to purchase or recharge online content, shopping malls, game cash, and international calling cards at convenience stores.",
                            table: {
                                rows: [
                                    { head: "Game · Gift · Telecom", text: "A service for purchasing and recharging various services (budget phone/international call/mobile data) in real time at convenience stores. Receipt-type PIN purchase and international calling card recharge, plus real-time balance top-up via smartphone app." },
                                    { head: "Game cash",    text: "NCoin (NCSoft), Nexon, World of Warcraft, League of Legends, Teen Cash, Hangame, Funnycard, Hanbit Soft, etc." },
                                    { head: "Gift cards",  text: "Culture Gift Card, Smart Culture Gift Card, Happy Money, Book Culture Gift Card, etc." },
                                    { head: "Smartphone APP charge", text: "Nexon Play, Cultureland" },
                                    { head: "Budget phone", text: "EG CARD, 7mobile, iZ, Mobing, M Mobile, free C/T, Story Mobile, etc." },
                                    { head: "International calling card", text: "LG U+, Naray, SK broadband" },
                                    { head: "Telecom (data) / Other", text: "Olleh WiFi, T Data Coupon, KT LTE Data Coupon, DAUM Cash" },
                                ],
                            },
                        },
                        {
                            label:   "Transit card\nrecharge",
                            hero:    null,
                            heroAlt: "",
                            title:   "Transit card recharge",
                            desc:    "",
                        },
                        {
                            label:   "Gift\ncard",
                            hero:    null,
                            heroAlt: "",
                            title:   "Gift card",
                            desc:    "",
                        },
                        {
                            label:   "USIM\nplan",
                            hero:    null,
                            heroAlt: "",
                            title:   "USIM plan",
                            desc:    "",
                        },
                        {
                            label:   "Hi-Pass\ncard/device",
                            hero:    null,
                            heroAlt: "",
                            title:   "Hi-Pass card/device",
                            desc:    "",
                        },
                        {
                            label:   "Expressway\ntoll payment",
                            hero:    null,
                            heroAlt: "",
                            title:   "Expressway toll payment",
                            desc:    "",
                        },
                        {
                            label:   "Online mall\nstore payment",
                            hero:    null,
                            heroAlt: "",
                            title:   "Online mall store payment",
                            desc:    "",
                        },
                    ],
                },
                {
                    hero: null,
                    heroAlt: "",
                    title: "Parcel & Pickup",
                    subtitle: "",
                    sections: [],
                },
                {
                    hero: null,
                    heroAlt: "",
                    title: "Utility bill payment",
                    subtitle: "",
                    sections: [],
                },
                {
                    hero: null,
                    heroAlt: "",
                    title: "Gift card sales",
                    subtitle: "",
                    sections: [],
                },
            ],
        },
        backLabel: "Back to list",
    },
};

const t = computed(() => langData[props.lang] || langData.ko);
const sinsen = computed(() => t.value.sinsen);
const store = computed(() => t.value.store);
const tab0 = computed(() => t.value.tabs[0]);
const tab1 = computed(() => t.value.tabs[1]);
const tab2 = computed(() => t.value.tabs[2]);
const tab3 = computed(() => t.value.tabs[3]);

const depth1ActiveIdx = ref(0);
const depth1Tabs = computed(() => t.value.nav.depth1);
const depth2Tabs = computed(() => t.value.nav.depth2);
const storeTabs = computed(() => t.value.nav.depth2Store);

const storeActiveTab = ref(0);
const serviceActiveTab = ref(0);

const depth1Routes = ["/gsrbr010101", null, null, null, null];

function onDepth1Change(idx) {
    depth1ActiveIdx.value = idx;
    const route = depth1Routes[idx];
    if (route) router.push(route);
}

function goBack() {
    if (window.history.length > 1) {
        router.back();
    } else {
        router.push("/");
    }
}
</script>

<style scoped>
img {
    width: 100%;
    display: block;
}

.tab_wrap {
    margin-bottom: 0;
}

.tab_wrap + .tab_wrap {
    margin-top: 24px;
    margin-bottom: 24px;
}

.inner {
    max-width: 1460px;
    margin: 0 auto;
    padding: 109px 20px 200px;
}

.brand_panel {
    padding-top: 40px;
    padding-bottom: 100px;
}

.brand_panel section {
    margin-bottom: 120px;
}

.brand_panel section:last-of-type {
    margin-bottom: 0;
}

/* ── 탭 0: 차별화 상품 ── */
.diff_card_grid {
    margin: 0 0 40px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 460px));
    gap: 20px;
}

.diff_card {
    margin: 0;
    padding: 0;
    background-color: #fff;
    border-radius: 12px;
    overflow: hidden;
}

.diff_card > figure {
    aspect-ratio: 460 / 320;
    margin: 0;
    padding: 0;
    background-color: #e8e8ec;
    overflow: hidden;
}

.diff_card > figure > img {
    height: 100%;
    object-fit: cover;
}

.diff_card > div {
    min-height: 200px;
    padding: 32px;
    background-color: #f8f8f8;
}

.diff_card > div > h3 {
    margin: 0 0 16px;
    color: #161618;
    font-size: 2.8rem;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

.diff_card > div > p {
    margin: 0;
    color: #67676f;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.01em;
}

/* ── 탭 1: CAFE25 ── */
.cafe25_card_list {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, calc((100% - 40px) / 3));
    gap: 20px;
}

.cafe25_card_list > li {
    min-width: 0;
    overflow: hidden;
}

.cafe25_card_list > li > div {
    width: 100%;
}

.cafe25_img_wrap {
    max-width: 938px;
    margin: 0;
    padding: 0;
    background-color: #f8f8f8;
    border-radius: 12px;
    overflow: hidden;
}

.cafe25_split {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}

.cafe25_split > div {
    width: calc(50% - 10px);
    min-width: 0;
}

.cafe25_split_img {
    padding: 45px 75px;
    background-color: #0e376b;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cafe25_split_img > img {
    max-height: 358px;
}

.cafe25_split_table {
    overflow-x: auto;
}

.cafe25_table_wrap {
    overflow-x: auto;
}

.cafe25_table {
    border-collapse: collapse;
    table-layout: fixed;
}

.cafe25_table th,
.cafe25_table td {
    height: 56px;
    padding: 0 24px;
    color: #161618;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.01em;
    border-bottom: 1px solid #e5e5e9;
    vertical-align: middle;
    white-space: nowrap;
}

.cafe25_table th:first-child,
.cafe25_table td:first-child {
    border-left: 0;
}

.cafe25_table th:last-child,
.cafe25_table td:last-child {
    border-right: 0;
}

.cafe25_table th:first-child {
    border-radius: 10px 0 0 0;
}

.cafe25_table th:last-child {
    border-radius: 0 10px 0 0;
}

.cafe25_table th {
    font-weight: 600;
    background-color: #f8f8f8;
    border-top: 0;
}

.cafe25_table > tbody > tr > td > .flag_icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
    object-fit: cover;
}

/* ── 탭 2: CHICKEN25 ── */
.chicken25_card_list {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, calc((100% - 40px) / 3));
    gap: 20px;
}

.chicken25_card_list > li {
    min-width: 0;
}

.chicken25_card {
    height: 264px;
    padding: 32px;
    background-color: #f8f8f8;
    border-radius: 12px;
}

.chicken25_card > h4 {
    margin: 0 0 16px;
    color: #161618;
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

.chicken25_card > p {
    margin: 0;
    color: #67676f;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.01em;
}

.chicken25_img_grid {
    margin: 120px 0 40px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, calc((100% - 20px) / 2));
    gap: 20px;
}

.chicken25_img_grid > li {
    min-width: 0;
    border-radius: 12px;
    overflow: hidden;
}

.chicken25_img_grid img {
    object-fit: cover;
}

/* ── 탭 3: GOPIZZA ── */
.gopizza_img_grid {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, calc((100% - 20px) / 2));
    gap: 20px;
}

.gopizza_img_grid > li {
    min-width: 0;
}

.gopizza_img_grid > li > div {
    height: 440px;
    border-radius: 12px;
    overflow: hidden;
}

.gopizza_img_grid img {
    height: 100%;
    object-fit: cover;
}

.gopizza_img_wrap {
    height: 440px;
    margin: 0;
    padding: 0;
    border-radius: 12px;
    overflow: hidden;
}

.gopizza_img_wrap > img {
    height: 100%;
    object-fit: cover;
}

.gopizza_menu {
    display: flex;
    gap: 20px;
}

.gopizza_menu_panel {
    min-width: 0;
    flex: 1;
}

.gopizza_menu_info {
    padding-top: 24px;
}

.gopizza_menu_title {
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.gopizza_menu_title > strong {
    color: #161618;
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

.gopizza_menu_tag {
    color: #67676f;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.01em;
}

.gopizza_menu_tag + .gopizza_menu_tag::before {
    content: "";
    width: 1px;
    height: 8px;
    margin-right: 8px;
    background-color: #d7d7df;
    display: inline-block;
}

.gopizza_table_wrap {
    overflow-x: auto;
}

.gopizza_table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
}

.gopizza_table th,
.gopizza_table td {
    padding: 0 16px;
    border-bottom: 1px solid #e5e5e9;
}

.gopizza_table th:first-child,
.gopizza_table td:first-child {
    border-left: 0;
}

.gopizza_table th:last-child,
.gopizza_table td:last-child {
    border-right: 0;
}

.gopizza_table th:first-child {
    border-radius: 10px 0 0 0;
}

.gopizza_table th:last-child {
    border-radius: 0 10px 0 0;
}

.gopizza_table thead th {
    height: 64px;
    color: #161618;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: -0.02em;
    background-color: #f8f8f8;
    border-top: 0;
}

.gopizza_table tbody td {
    height: 64px;
    color: #161618;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.01em;
}

.gopizza_menu_name {
    display: flex;
    align-items: center;
    gap: 6px;
}

.gopizza_badge_best {
    padding: 2px 6px;
    color: #fb4516;
    font-size: 1.1rem;
    font-weight: 600;
    font-style: normal;
    letter-spacing: -0.02em;
    background-color: #ffe9e3;
    border-radius: 4px;
}

.gopizza_phone_grid {
    margin-bottom: 100px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, calc((100% - 20px) / 2));
    gap: 20px;
}

.diff_bottom_row {
    display: flex;
    gap: 32px;
}

.diff_bottom_row > .diff_qr_row {
    flex: 1;
}

.gopizza_link {
    min-width: 0;
    display: flex;
    flex: 1;
    gap: 20px;
}

.gopizza_link > div {
    min-width: 0;
    padding: 7px 0;
    flex: 1;
}

.gopizza_link_title {
    margin: 0 0 6px;
    color: #161618;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: -0.01em;
    display: flex;
    align-items: center;
    gap: 6px;
}

.gopizza_link > div > p + p {
    margin: 0;
    color: #67676f;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.02em;
}

/* ── 신선강화점 ── */
.sinsen_feature_list {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.sinsen_feature_list > li {
    min-width: 0;
}

.sinsen_feature_card {
    height: 240px;
    padding: 32px 32px 60px;
    background-color: #f8f8f8;
    border-radius: 12px;
}

.sinsen_feature_icon {
    width: 40px;
    height: 40px;
    margin-bottom: 12px;
    background-color: #d7d7df;
    border-radius: 8px;
    display: block;
}

.sinsen_feature_card > h4 {
    margin: 0 0 16px;
    color: #161618;
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

.sinsen_feature_card > p {
    margin: 0;
    color: #67676f;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.01em;
}

.sinsen_card {
    max-width: 940px;
    padding: 32px;
    background-color: #f8f8f8;
    border-radius: 12px;
}

.sinsen_card > p {
    margin-bottom: 32px;
    color: #67676f;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.01em;
}

.sinsen_flow_img {
    margin-top: 24px;
    display: block;
}

/* 운영 장점 체크리스트 */
.sinsen_check_list > li {
    padding-bottom: 12px;
    color: #161618;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.01em;
    display: flex;
    align-items: baseline;
    gap: 8px;
}

.sinsen_check_list > li:last-child {
    padding-bottom: 0;
}

.sinsen_check_list > li::before {
    content: "";
    width: 16px;
    height: 16px;
    background-color: #107af2;
    border-radius: 50%;
    position: relative;
    top: 2px;
    flex-shrink: 0;
}

.sinsen_check_list > li > div {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.sinsen_check_note {
    color: #67676f;
}

/* ── 생활 서비스 3depth 탭 ── */
.service_tab_wrap {
    margin-bottom: 40px;
    border-radius: 12px;
    display: flex;
    overflow-x: auto;
}

.service_tab_item {
    min-width: 177.5px;
    padding: 24px 8px;
    background-color: transparent;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    gap: 8px;

}



.service_tab_icon {
    width: 48px;
    height: 48px;
    background-color: #d7d7df;
    border-radius: 8px;
    display: block;
    flex-shrink: 0;
}

.service_tab_item.is_active .service_tab_icon {
    background-color: #107af2;
}

.service_tab_label {
    color: #7c7c86;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: -0.01em;
    text-align: center;
    white-space: pre-line;
}

.service_tab_item.is_active .service_tab_label {
    color: #107af2;
}

.service_panel {
    min-height: 200px;
}

.service_panel :deep(.brand_panel_title) {
    margin-bottom: 0;
}

/* 편의점캐시 테이블 */
.cash_table {
    width: 100%;
    margin-top: 100px;
    border-collapse: collapse;
}
.cash_table {border-top:1px solid #e5e5e9;}
.cash_table th,
.cash_table td {
    color: #161618;
    border-bottom: 1px solid #e5e5e9;
    vertical-align: middle;
}

.cash_table th {
    width: 200px;
    padding: 0 24px;
    font-weight: 700;
    background-color: #f8f8f8;
    text-align: left;
    white-space: nowrap;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.6;
    letter-spacing: -0.01em;
}

.cash_table th span,.cash_table td span{
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.01em;

} 

.cash_table td {
    padding: 18px 24px;
}

.cash_table_cell {
    display: flex;
    align-items: flex-start;
    gap: 12px;
}


/* ── 반응형 ── */
@media (max-width: 1024px) {
    .cafe25_card_list {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .chicken25_card_list {
        grid-template-columns: repeat(2, calc((100% - 20px) / 2));
    }

    .gopizza_menu {
        flex-direction: column;
    }
}

@media (max-width: 768px) {
    .inner {
        padding: 24px 20px 60px;
    }

    .diff_card_grid {
        grid-template-columns: minmax(0, 1fr);
    }

    .diff_card > div {
        min-height: 0;
        padding: 24px;
    }

    .diff_card > div > h3 {
        font-size: 2.2rem;
    }

    .cafe25_card_list {
        grid-template-columns: minmax(0, 1fr);
    }

    .cafe25_split {
        flex-direction: column;
    }

    .cafe25_split > div {
        width: 100%;
    }

    .chicken25_card_list {
        grid-template-columns: minmax(0, 1fr);
    }

    .chicken25_img_grid {
        grid-template-columns: minmax(0, 1fr);
    }

    .gopizza_img_grid {
        grid-template-columns: minmax(0, 1fr);
    }

    .gopizza_img_grid > li > div {
        height: 260px;
    }

    .gopizza_img_wrap {
        height: 260px;
    }

    .gopizza_phone_grid {
        grid-template-columns: minmax(0, 1fr);
    }

    .diff_bottom_row {
        flex-direction: column;
        gap: 20px;
    }

    /* 신선강화점 반응형 */
    .sinsen_feature_list {
        grid-template-columns: repeat(2, 1fr);
    }

    .sinsen_check_list > li {
        flex-wrap: wrap;
    }

    /* 생활 서비스 3depth 탭 반응형 */
    .service_tab_item {
        min-width: 120px;
        padding: 16px 8px;
    }

}
</style>
