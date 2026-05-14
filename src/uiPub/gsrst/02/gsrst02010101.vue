<template>
    <div class="wrap_gsrst">
        <!-- HEADER -->
        <header class="page_header" :style="{ backgroundImage: `url(${imgBg})` }">
            <div class="header_inner">
                <h2 class="header_title">GS25 창업안내</h2>
            </div>
        </header>

        <!-- BODY -->
        <div class="sec_body">
            <!-- Depth 1: 페이지 탭 (type_01: 하단 보더 언더라인) -->
            <Tabs :tab-items="depth1Tabs" tab-class="type_01" v-model="activeD1" :tab-slide="true" />

            <!-- Depth 2: 섹션 탭 (type_02: pill 스타일) -->
            <Tabs v-show="activeD1 === 0" :tab-items="depth2Tabs" tab-class="type_02" v-model="activeD2" :tab-slide="true" />

            <!-- GS25 브랜드 소개 -->
            <div class="tab_page" v-show="activeD1 === 0 && activeD2 === 0">
                <section class="sec_brand_intro" :style="{ backgroundImage: `url(${imgBg})` }">
                    <header>
                        <span class="tit">{{ brandIntro.badge }}</span>
                        <h3>{{ brandIntro.title }}</h3>
                        <p class="desc" v-html="brandIntro.desc"></p>
                    </header>
                    <ul class="apply_list">
                        <li v-for="(item, i) in brandApplyLinks" :key="i">
                            <a :href="item.url">
                                <strong v-html="item.title"></strong>
                                <span v-html="item.desc"></span>
                            </a>
                        </li>
                    </ul>
                    <ul class="stat_list">
                        <li v-for="(item, i) in brandStats" :key="i">
                            <strong>{{ item.value }}</strong>
                            <span>{{ item.label }}</span>
                        </li>
                    </ul>
                </section>
                <section class="sec_success_point">
                    <header class="section_header">
                        <span class="tit">{{ successPointPanel.badge }}</span>
                        <h2 v-html="successPointPanel.title"></h2>
                        <p>{{ successPointPanel.desc }}</p>
                    </header>
                    <NumberedInfoList :items="successPointCards" :show-icon="true" desc-class="num_info_desc_light" />
                </section>
                <section class="sec_brand_solution">
                    <div class="inner">
                        <header class="section_header">
                            <h2 v-html="brandSolutionPanel.title"></h2>
                            <p>{{ brandSolutionPanel.desc }}</p>
                        </header>
                        <ul class="link_card_list">
                            <li v-for="(item, i) in brandSolutionCards" :key="i">
                                <a :href="item.url">
                                    <span class="thumb" aria-hidden="true"></span>
                                    <span class="txt">
                                        <strong>{{ item.title }}</strong>
                                        <span class="desc">{{ item.desc }}</span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            <!-- //GS25 브랜드 소개 -->

            <!-- 차별화된 경쟁력 -->
            <div class="tab_page" v-show="activeD1 === 0 && activeD2 === 1">
                <section class="sec_competitive">
                    <header class="section_header">
                        <h2 v-html="competitivePanel.title"></h2>
                    </header>
                    <ul class="competitive_list">
                        <li v-for="(item, i) in competitiveCards" :key="i">
                            <article>
                                <span class="icon" aria-hidden="true"></span>
                                <strong v-html="item.title"></strong>
                            </article>
                        </li>
                    </ul>
                </section>
                <section class="sec_store_open">
                    <div class="inner">
                        <header class="section_header ac">
                            <span class="tit">{{ storeOpenPanel.badge }}</span>
                            <h2>{{ storeOpenPanel.title }}</h2>
                            <p>{{ storeOpenPanel.desc }}</p>
                        </header>
                        <div class="panel_split">
                            <dl class="info_panel align_end">
                                <dt>
                                    <strong>{{ storeOpenCards[0].title }}</strong>
                                    <span class="icon" aria-hidden="true"></span>
                                </dt>
                                <dd>{{ storeOpenCards[0].desc }}</dd>
                            </dl>
                            <figure class="center_figure">
                                <img :src="imgStoreOpen" alt="" />
                            </figure>
                            <dl class="info_panel align_start">
                                <dt>
                                    <span class="icon" aria-hidden="true"></span>
                                    <strong>{{ storeOpenCards[1].title }}</strong>
                                </dt>
                                <dd>{{ storeOpenCards[1].desc }}</dd>
                            </dl>
                        </div>
                    </div>
                </section>
                <section class="sec_product_concept">
                    <header class="section_header ac">
                        <span class="tit">{{ productConceptPanel.badge }}</span>
                        <h2>{{ productConceptPanel.title }}</h2>
                        <p>{{ productConceptPanel.desc }}</p>
                    </header>
                    <div class="product_hit">
                        <header class="sub_header">
                            <h3>{{ megaHitPanel.title }}</h3>
                            <strong>{{ megaHitPanel.subtitle }}</strong>
                            <p v-html="megaHitPanel.desc"></p>
                        </header>
                        <div class="product_hit_body">
                            <div v-for="(group, gi) in megaHitGroups" :key="gi">
                                <h4>{{ group.title }}</h4>
                                <ul>
                                    <li v-for="(item, i) in group.items" :key="i">
                                        <article>
                                            <figure>
                                                <img :src="item.image" alt="" />
                                                <figcaption>
                                                    <p>{{ item.label }}</p>
                                                    <strong>{{ item.title }}</strong>
                                                </figcaption>
                                            </figure>
                                        </article>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="product_ff_layout">
                        <article v-for="(item, i) in freshFfCards" :key="i" :class="item.type">
                            <header class="sub_header">
                                <span class="tit">{{ item.badge }}</span>
                                <h3>{{ item.title }}</h3>
                                <p>{{ item.desc }}</p>
                            </header>
                            <ul v-if="item.points" class="list_dotted">
                                <li v-for="(point, pi) in item.points" :key="pi">{{ point }}</li>
                            </ul>
                            <div v-if="item.images" class="product_ff_visual">
                                <figure
                                    v-for="(image, vi) in item.images"
                                    :key="vi"
                                    :style="{ backgroundImage: `url(${image})` }"
                                    aria-hidden="true"
                                ></figure>
                            </div>
                            <ul v-if="item.brands" class="product_ff_brand_list">
                                <li v-for="(brand, bi) in item.brands" :key="bi">
                                    <span class="thumb" :style="{ backgroundImage: `url(${brand.image})` }" aria-hidden="true"></span>
                                    <div>
                                        <strong>{{ brand.title }}</strong>
                                        <p>{{ brand.desc }}</p>
                                    </div>
                                </li>
                            </ul>
                            <Buttons v-if="item.linkText" tag="a" href="#none" btn-class="btn_mid fill btn_icon after primary">{{ item.linkText }}</Buttons>
                        </article>
                    </div>
                    <div class="product_concept_store">
                        <header class="sub_header ac">
                            <h3>{{ conceptStorePanel.title }}</h3>
                            <p>{{ conceptStorePanel.desc }}</p>
                        </header>
                        <Swiper
                            class="concept_store_swiper"
                            slides-per-view="auto"
                            :space-between="20"
                            wrapper-tag="ul"
                            @swiper="onConceptStoreSwiper"
                        >
                            <SwiperSlide v-for="(item, i) in conceptStoreCards" :key="i" tag="li">
                                <article>
                                    <figure :style="{ backgroundImage: `url(${item.image})` }" aria-hidden="true"></figure>
                                    <span>{{ item.badge }}</span>
                                    <strong>{{ item.title }}</strong>
                                </article>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section class="sec_marketing">
                    <div class="inner">
                        <header class="section_header ac">
                            <span class="tit">{{ marketingPanel.badge }}</span>
                            <h2>{{ marketingPanel.title }}</h2>
                            <p>{{ marketingPanel.desc }}</p>
                        </header>
                        <ul class="marketing_list">
                            <li v-for="(item, i) in marketingCards" :key="i">
                                <article>
                                    <span class="icon" aria-hidden="true"></span>
                                    <div>
                                        <em v-if="item.em">{{ item.em }}</em>
                                        <strong>{{ item.title }}</strong>
                                        <p v-if="item.desc">{{ item.desc }}</p>
                                    </div>
                                </article>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="sec_operation_support">
                        <header class="section_header ac">
                            <span class="tit">{{ operationSupportPanel.badge }}</span>
                            <h2>{{ operationSupportPanel.title }}</h2>
                            <p>{{ operationSupportPanel.desc }}</p>
                        </header>
                        <ul>
                            <li v-for="(card, i) in operationSupportCards" :key="i">
                                <h3>{{ card.title }}</h3>
                                <dl>
                                    <template v-for="(item, j) in card.items" :key="j">
                                        <dt>
                                            <span class="icon" aria-hidden="true"></span>
                                            {{ item.term }}
                                        </dt>
                                        <dd>{{ item.desc }}</dd>
                                    </template>
                                </dl>
                            </li>
                        </ul>
                </section>
            </div>
            <!-- //차별화된 경쟁력 -->

            <div class="tab_page" v-show="activeD1 === 0 && activeD2 === 2">

            </div>

            <div class="tab_page" v-show="activeD1 === 1"></div>

            <div class="tab_page" v-show="activeD1 === 2"></div>

            <div class="tab_page" v-show="activeD1 === 3"></div>

            <div class="tab_page" v-show="activeD1 === 4"></div>
        </div>
        <ul
            ref="quickMenuRef"
            class="quick_menu"
            :aria-hidden="!showQuickMenu"
        >
            <li><button type="button">창업안내</button></li>
            <li><button type="button">입점상담</button></li>
            <li><button type="button">고객센터</button></li>
        </ul>
    </div>

</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import Tabs from "@/components/Tabs.vue";
import Buttons from "@/components/Buttons.vue";
import NumberedInfoList from "@/components/NumberedInfoList.vue";
import imgBg from "@/assets/images/dummy/gsrst02010101_01.jpg";
import imgStoreOpen from "@/assets/images/dummy/gsrst02010101_02.png";
import imgProduct01 from "@/assets/images/dummy/gsrst02010101_p_01.png";
import imgProduct02 from "@/assets/images/dummy/gsrst02010101_p_02.png";
import imgProduct03 from "@/assets/images/dummy/gsrst02010101_p_03.png";
import imgProduct04 from "@/assets/images/dummy/gsrst02010101_p_04.png";
import imgProduct05 from "@/assets/images/dummy/gsrst02010101_p_05.png";
import imgProduct06 from "@/assets/images/dummy/gsrst02010101_p_06.png";
import imgProduct07 from "@/assets/images/dummy/gsrst02010101_p_07.png";
import imgSinsen01 from "@/assets/images/dummy/gsrst02010101_sinsen_01.png";
import imgSinsen02 from "@/assets/images/dummy/gsrst02010101_sinsen_02.png";
import imgCounter01 from "@/assets/images/dummy/gsrst02010101_counter_01.png";
import imgCounter02 from "@/assets/images/dummy/gsrst02010101_counter_02.png";
import imgCounter03 from "@/assets/images/dummy/gsrst02010101_counter_03.png";
import imgStore01 from "@/assets/images/dummy/gsrst02010101_store_01.png";
import imgStore02 from "@/assets/images/dummy/gsrst02010101_store_02.png";
import imgStore03 from "@/assets/images/dummy/gsrst02010101_store_03.png";
import imgStore04 from "@/assets/images/dummy/gsrst02010101_store_04.png";

const activeD1 = ref(0);
const activeD2 = ref(0);

const depth1Tabs = [
    { item: "GS25 창업 알아보기" },
    { item: "창업 준비하기" },
    { item: "추천 점포 찾기" },
    { item: "상담 및 신청" },
    { item: "가맹계약시스템" },
];

const depth2Tabs = [
    { item: "GS25 브랜드 소개" },
    { item: "차별화된 경쟁력" },
    { item: "편의점 창업 이해" },
    { item: "FAQ" },
];

const brandIntro = {
    badge: "4년 연속, 편의점 매출 1위 브랜드 (22년~25년)",
    title: "비교할수록 결국, GS25.",
    desc: "점포당 매출 1위 브랜드<br class='p_br'/>함께 성장하기 위해, 점포의 숫자보다 경영주님의 수익을 먼저<br class='m_br'/>생각합니다.",
};

const brandApplyLinks = [
    {
        title: "창업설명회 신청",
        desc: "창업 전반에 대한 정보를 한 번에 안내드려요",
        url: "#none",
    },
    {
        title: "창업상담 신청",
        desc: "창업에 대한 궁금증을 1:1 상담해 드려요",
        url: "#none",
    },
    {
        title: "입점 제안/<br class='p_br'/>브랜드 전환 문의",
        desc: "보유 자리 입점 제안 또는 브랜드 전환을<br class='m_br'/>상담해드려요",
        url: "#none",
    },
];

const brandStats = [
    { value: "18,000+", label: "전국 점포수" },
    { value: "편의점 매출 1위", label: "점포당 연매출 6.4억+" },
    { value: "460만명", label: "전국 일평균 방문 고객" },
];

const successPointPanel = {
    badge: "SUCCESS POINT",
    title: "경영주님이 편한 GS25<br /><span class='txt_blue'>창업 성공 포인트</span>",
    desc: "GS25와 함께라면, 성공적인 창업이 가능합니다.",
};

const successPointCards = [
    {
        em: "수익성 분석",
        title: "수익성 중심의 신규 점포 오픈",
        desc: "점포 개발 전문가의 데이터와 현장 분석을 통해 수익성이 보이는 점포만 오픈합니다.",
    },
    {
        em: "스마트 운영",
        title: "든든하고 편리한 지원시스템",
        desc: "스마트 운영 시스템과 영업 전문가의 1:1 맞춤관리까지, 첫창업이어도 걱정 마세요",
    },
    {
        em: "차별화 컨셉",
        title: "경쟁력 있는 상품/컨셉",
        desc: "메가히트 상품부터 신선강화형 매장까지 GS25만의 차별화 컨셉으로 매출이 올라갑니다.",
    },
    {
        em: "히트 상품",
        title: "압도적인 마케팅",
        desc: "단골 고객을 만드는 마케팅과 멤버십 ‘우리동네 GS’ 앱부터 100만 구독자 SNS 채널까지, 고객이 다시 찾는 이유를 만듭니다.",
    },
];

const brandSolutionPanel = {
    title: "저도 창업 가능한가요? <br class='m_br'/><span class='txt_blue'>그럼요!</span>",
    desc: "경영주님 상황에 맞는 맞춤 솔루션을 찾아드립니다.",
};

const brandSolutionCards = [
    {
        title: "가맹 타입 소개",
        desc: "나에게 딱 맞는 3가지 타입",
        url: "#none",
    },
    {
        title: "창업 절차 안내",
        desc: "30일이면 창업 완료!",
        url: "#none",
    },
    {
        title: "추천 점포",
        desc: "지역, 상권, 투자비용에 맞는 추천 점포 확인",
        url: "#none",
    },
];

const competitivePanel = {
    title: "수익성 중심 점포 오픈부터 스마트한 시스템과 밀착 지원까지<br /><span class='txt_blue'>1등 브랜드로 창업을 시작하세요.</span>",
};

const competitiveCards = [
    { title: "수익성 중심의<br />점포 오픈" },
    { title: "고객에게 사랑받는<br />상품/컨셉" },
    { title: "압도적인<br />마케팅 & 멤버십" },
    { title: "스마트한 시스템과<br />밀착 지원" },
];

const storeOpenPanel = {
    badge: "점포개발",
    title: "수익성 중심의 신규 점포 오픈",
    desc: "점포 수 확장에만 집중하지 않아요. 경영주님과 본사 모두 수익성이 보이는 자리에 오픈합니다.",
};

const storeOpenCards = [
    {
        title: "데이터 중심의 상권 분석",
        desc: "업계 최고 수준 지리정보 시스템과 빅데이터를 활용한 정교한 상권 분석을 진행합니다.",
    },
    {
        title: "현장 검증을 통한 상권의 활동성 분석",
        desc: "점포개발전문가(RFC)의 현장 검증 및 체계적인 분석을 통해 수익성 있는 점포를 개발합니다.",
    },
];

const productConceptPanel = {
    badge: "상품 & 컨셉",
    title: "경쟁력 있는 상품과 차별화 컨셉",
    desc: "신선강화 매장부터 뷰티·주류 특화 매장까지, GS25만의 차별화된 컨셉으로 점포 수익성을 강화합니다.",
};

const megaHitPanel = {
    title: "메가 히트 상품",
    subtitle: "매주 신상품 출시!",
    desc: "스테디 셀러부터 SNS 인기 상품까지,<br />고객 발길을 사로잡습니다.",
};

const megaHitGroups = [
    {
        title: "스테디 셀러",
        items: [
            { label: "가성비 도시락의 상징", title: "혜자로운 도시락", image: imgProduct01 },
            { label: "누적 판매량 1억개 돌파", title: "오모리 김치찌개 라면", image: imgProduct02 },
            { label: "GS25 전용 브랜드에서 해외 진출까지", title: "유어스(YOUUS)", image: imgProduct03 },
            { label: "바리스타가 평가한 1위 커피", title: "카페25", image: imgProduct04 },
        ],
    },
    {
        title: "SNS 인기 상품",
        items: [
            { label: "가성비 도시락의 상징", title: "흑백요리사 협업,모찌롤", image: imgProduct05 },
            { label: "누적 판매량 1억개 돌파", title: "아이스브릴레 시리즈", image: imgProduct06 },
            { label: "GS25 전용 브랜드에서 해외 진출까지", title: "맛삼촌 딸기 샌드위치", image: imgProduct07 },
        ],
    },
];

const freshFfCards = [
    {
        type: "fresh_store",
        badge: "GS25 Only",
        title: "신성강화점",
        desc: "편의점의 편리함 + 슈퍼의 신선함, 두 마리 토끼를 잡는 원스톱 장보기 매장",
        points: [
            "365일, 24시간 언제 어디서나 신선식품 장보는 편의점",
            "1~2인 가구를 위한 소용량 소포장 장보기 상품 판매",
        ],
        images: [imgSinsen01, imgSinsen02],
        linkText: "신선강화점 자세히 알아보기",
    },
    {
        type: "counter_ff",
        badge: "카운터 FF",
        title: "카운터 FF로 매출을 더하다",
        desc: "편의점에서 즐기는 전문점 퀄리티!",
        brands: [
            {
                title: "CAFE25",
                desc: "최고급 커피머신과 원두를 사용한 커피를 합리적인 가격으로 제공하는 GS25의 원두커피",
                image: imgCounter01,
            },
            {
                title: "CHICKEN25",
                desc: "편의점에서도 즉석에서 조리한 전문점 수준의 치킨을 즐길수 있는 치킨25",
                image: imgCounter02,
            },
            {
                title: "GO PIZZA",
                desc: "언제 어디서나 갓 구운 피자를 만나는 전문점 퀄리티의 고피자",
                image: imgCounter03,
            },
        ],
    },
];

const conceptStorePanel = {
    title: "상권 맞춤형 컨셉 스토어",
    desc: "지역 상권과 고객 특성에 맞춰 최적화된 컨셉으로 차별화된 매장을 운영합니다.",
};

const conceptStoreCards = [
    { badge: "#리조트특화 #주류특화", title: "GS25 전주본점", image: imgStore01 },
    { badge: "#리조트특화 #주류특화", title: "GS25 전주본점", image: imgStore02 },
    { badge: "#리조트특화 #주류특화", title: "GS25 전주본점", image: imgStore03 },
    { badge: "#리조트특화 #주류특화", title: "GS25 전주본점", image: imgStore04 },
];

const conceptStoreSwiperInst = ref(null);

function onConceptStoreSwiper(swiper) {
    conceptStoreSwiperInst.value = swiper;
}

watch([activeD1, activeD2], () => {
    if (activeD1.value === 0 && activeD2.value === 1) {
        nextTick(() => {
            conceptStoreSwiperInst.value?.update();
        });
    }
});

const marketingPanel = {
    badge: "마케팅 & 멤버십",
    title: "단골 고객을 만드는 마케팅과 멤버십",
    desc: "‘우리동네 GS’ 앱부터 100만 구독자 SNS 채널까지, 고객이 다시 찾는 이유를 만듭니다.",
};

const marketingCards = [
    {
        em: "국내 편의점 다운로드수 1위 어플",
        title: "우리동네 GS",
        desc: "증정상품 보관부터 5천여종의 와인과 주류 주문까지",
    },
    {
        em: "국내 편의점 다운로드수 1위 어플",
        title: "GS ALL 멤버십",
        desc: "GS25, GS더프레시, GS SHOP 모두 적립/사용 가능",
    },
    {
        em: "국내 편의점 다운로드수 1위 어플",
        title: "멤버십 카드 / 선불카드",
        desc: "통신사 멤버십 카드 할인, GS ALL 포인트 적립, 팝카드 행사 등",
    },
    {
        em: "각 100만 팔로워·구독자 돌파",
        title: "GS25 인스타그램 / 유튜브 채널",
        desc: "신상품 소식, 이벤트, 토크 컨텐츠로 고객 접점 확대",
    },
];

const operationSupportPanel = {
    badge: "운영 지원",
    title: "든든한 운영 지원 & 스마트 인프라",
    desc: "창업이 처음이라도 걱정하지 마세요. 점포 오픈부터 안정적인 운영까지, GS25가 함께합니다.",
    note: "※ 주말 및 공휴일은 연락이 불가하며 평일 09:00~17:30 사이에 연락 부탁드립니다.",
};

const operationSupportCards = [
    {
        title: "신규 창업자를 위한 '밀착 케어' 시스템",
        items: [
            { term: "맞춤형 컨설팅", desc: "창업 컨설턴트와 상담을 통한 최적의 점포 매칭" },
            { term: "원스톱 오픈 지원", desc: "시설/인테리어, 신규 경영주 교육, 창업대출 연계, 인허가 안내 등 복잡한 절차 지원" },
            { term: "현장 밀착 케어", desc: "오픈 후 4일간 담당자 밀착 근무로 초기 정착 지원" },
            { term: "사후 적응 관리", desc: "적응이 어려운 경우 안심동행서비스 제공으로 운영 안정화" },
        ],
    },
    {
        title: "스마트한 점포 운영 시스템",
        items: [
            { term: "AI 자동발주", desc: "내 점포 판매 데이터와 결품 이력을 분석을 통한 발주 최적화" },
            { term: "모바일 관리 시스템", desc: "언제 어디서나 발주·매출 실시간 확인" },
            { term: "직관적인 POS", desc: "누구나 배우기 쉽고 간편한 결제 시스템" },
            { term: "사후 적응 관리", desc: "누구나 배우기 쉽고 간편한 결제 시스템" },
        ],
    },
    {
        title: "오픈 후에도 지속되는 운영 지원",
        items: [
            { term: "1:1 전담 관리", desc: "영업 전문가의 현장 방문 및 맞춤형 솔루션 제공" },
            { term: "24시간 콜센터", desc: "24시간, 연중무휴 공백 없는 지원" },
            { term: "카카오톡 챗봇 지원", desc: "경영주,근무자 업무지원을 위한 카카오톡 챗봇조이 운영" },
            { term: "교육 플랫폼 지원", desc: "점포 운영 능력 향상과 소통을 위한 온라인 아카데미 운영" },
        ],
    },
];


const mqMobile = window.matchMedia("(max-width: 768px)");

const QUICK_MENU_REVEAL_PX = 100;
const QUICK_MENU_VIEWPORT_BOTTOM_PX = 60;
const QUICK_MENU_FOOTER_GAP_PX = 60;
const showQuickMenu = ref(false);
const quickMenuRef = ref(null);
let quickMenuGsapCtx = null;
let quickMenuFooterEl = null;
let quickMenuWrapEl = null;
let quickMenuLastBottomPx = null;
let quickMenuLastTopPx = null;
let quickMenuFooterZone = false;
let quickMenuResizeTimer = null;

function updateQuickMenuBottom(quickMenu) {
    if (!quickMenu) return;
    if (!quickMenuFooterEl) {
        quickMenuFooterEl = document.querySelector("footer");
    }
    if (!quickMenuWrapEl) {
        quickMenuWrapEl = quickMenu.closest(".wrap_gsrst");
    }
    const footer = quickMenuFooterEl;
    const wrap = quickMenuWrapEl;
    if (!footer || !wrap) {
        if (quickMenuLastBottomPx !== QUICK_MENU_VIEWPORT_BOTTOM_PX) {
            gsap.set(quickMenu, { position: "fixed", top: "auto", bottom: QUICK_MENU_VIEWPORT_BOTTOM_PX });
            quickMenuLastBottomPx = QUICK_MENU_VIEWPORT_BOTTOM_PX;
            quickMenuLastTopPx = null;
            quickMenuFooterZone = false;
        }
        return;
    }
    const rect = footer.getBoundingClientRect();
    const vh = window.innerHeight;
    const gap = QUICK_MENU_FOOTER_GAP_PX;
    const scrollY = window.scrollY ?? document.documentElement.scrollTop;
    const footerTopDoc = rect.top + scrollY;
    const wrapTopDoc = wrap.getBoundingClientRect().top + scrollY;
    const quickMenuHeight = quickMenu.offsetHeight;
    const fixedBottomDoc = scrollY + vh - QUICK_MENU_VIEWPORT_BOTTOM_PX;
    const footerLimitDoc = footerTopDoc - gap;
    const shouldDockToFooter = fixedBottomDoc >= footerLimitDoc;

    if (shouldDockToFooter) {
        const absoluteTopPx = Math.round(footerTopDoc - gap - quickMenuHeight - wrapTopDoc);
        if (!quickMenuFooterZone) {
            gsap.set(quickMenu, { clearProps: "transform" });
            quickMenuFooterZone = true;
        }
        if (quickMenuLastTopPx !== absoluteTopPx) {
            gsap.set(quickMenu, { position: "absolute", top: absoluteTopPx, bottom: "auto" });
            quickMenuLastTopPx = absoluteTopPx;
            quickMenuLastBottomPx = null;
        }
        return;
    }

    if (quickMenuFooterZone) {
        quickMenuFooterZone = false;
    }
    if (quickMenuLastBottomPx !== QUICK_MENU_VIEWPORT_BOTTOM_PX) {
        gsap.set(quickMenu, { position: "fixed", top: "auto", bottom: QUICK_MENU_VIEWPORT_BOTTOM_PX });
        quickMenuLastBottomPx = QUICK_MENU_VIEWPORT_BOTTOM_PX;
        quickMenuLastTopPx = null;
    }
}

function refreshQuickMenuScrollTrigger() {
    if (quickMenuResizeTimer) {
        window.clearTimeout(quickMenuResizeTimer);
    }
    quickMenuResizeTimer = window.setTimeout(() => {
        ScrollTrigger.refresh();
        if (quickMenuRef.value) {
            quickMenuLastBottomPx = null;
            quickMenuLastTopPx = null;
            updateQuickMenuBottom(quickMenuRef.value);
        }
    }, 120);
}

function initQuickMenuGsap() {
    if (mqMobile.matches) return;
    const quickMenu = quickMenuRef.value;
    if (!quickMenu) return;
    quickMenuFooterEl = document.querySelector("footer");
    quickMenuWrapEl = quickMenu.closest(".wrap_gsrst");
    quickMenuLastBottomPx = null;
    quickMenuLastTopPx = null;
    quickMenuFooterZone = false;

    gsap.registerPlugin(ScrollTrigger);

    quickMenuGsapCtx = gsap.context(() => {
        gsap.fromTo(
            quickMenu,
            { opacity: 0, pointerEvents: "none" },
            {
                opacity: 1,
                pointerEvents: "auto",
                duration: 0.5,
                scrollTrigger: {
                    trigger: "body",
                    start: `${QUICK_MENU_REVEAL_PX}px top`,
                    toggleActions: "play reverse play reverse",
                    onUpdate: () => {
                        const y = window.scrollY ?? document.documentElement.scrollTop;
                        showQuickMenu.value = y >= QUICK_MENU_REVEAL_PX;
                    }
                }
            }
        );

        ScrollTrigger.create({
            trigger: "body",
            start: "top top",
            end: "max",
            onUpdate: () => {
                updateQuickMenuBottom(quickMenu);
            }
        });
    });
    ScrollTrigger.refresh();
    const y0 = window.scrollY ?? document.documentElement.scrollTop;
    showQuickMenu.value = y0 >= QUICK_MENU_REVEAL_PX;
    updateQuickMenuBottom(quickMenu);
}

onMounted(() => {
    window.addEventListener("resize", refreshQuickMenuScrollTrigger);
    nextTick(() => {
        initQuickMenuGsap();
    });
});
onUnmounted(() => {
    window.removeEventListener("resize", refreshQuickMenuScrollTrigger);
    if (quickMenuResizeTimer) {
        window.clearTimeout(quickMenuResizeTimer);
        quickMenuResizeTimer = null;
    }
    quickMenuGsapCtx?.revert();
    quickMenuGsapCtx = null;
    quickMenuFooterEl = null;
    quickMenuWrapEl = null;
    quickMenuLastBottomPx = null;
    quickMenuLastTopPx = null;
    quickMenuFooterZone = false;
    showQuickMenu.value = false;
});
</script>


<style scoped>
img {width:100%; height:auto; object-fit: cover; display: block;}
:deep(.m_br) { display: none; }
:deep(.p_br) { display: block; }
:deep(.primary){background-color: #15B874;}
.wrap_gsrst { position: relative; overflow-x: clip; }
:deep(.txt_blue) { color: #107af2; }
.page_header { width: 100%; height: 480px; background-size: cover; background-position: center; position: relative; display: flex; align-items: center; justify-content: center; }
.page_header::before { width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); content: ''; position: absolute; top: 0; left: 0; }
.header_inner { position: relative; z-index: 1; text-align: center; }
.header_title { color: #fff; font-size: 7.2rem; font-weight: 700; letter-spacing: -0.02em; line-height: 1.24; }
header > .tit { width: fit-content; padding: 8px 16px; color: #107af2; font-size: 1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; background-color: #e7f2fe; border: 1px solid #107af2; border-radius: 99px; display: block; }
header.ac > .tit {margin-left:auto; margin-right:auto;}
.sub_header{margin-bottom:64px;}
.sub_header > h3 {  font-size: 3.2rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.sub_header > .tit {padding:4px 12px;}
.sub_header > .tit + h3{ margin-top:16px;}
.sub_header > strong{margin-top:16px; display:block;}
.sub_header> p { margin-top: 16px; font-size: 2.4rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.sec_body { max-width: 1460px; margin: 0 auto; padding: 0 20px; }
.section_header { margin-bottom: 64px; }
.section_header > .tit + h2 { margin-top: 16px; }
.section_header > h2 {  font-size: 4rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.section_header > p { margin-top: 16px;  font-size: 2.4rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
section + section { padding-top: 100px; }
.tab_page { padding: 64px 0 200px; }
.list_dotted > li { padding-left: 12px; position: relative }
.list_dotted > li + li { margin-top: 8px }
.list_dotted > li::before { content: ""; width: 4px; height: 4px; background-color: #161616; border-radius: 100%; position: absolute; top: 11px; left: 0 }
.sec_brand_intro { min-height: 700px; padding: 97px 100px 77px; background-size: cover; background-position: center; border-radius: 20px; position: relative; overflow: hidden; display: flex; flex-direction: column; }
.sec_brand_intro::before { width: 100%; height: 100%; background-color: rgba(0,0,0,0.6); content: ''; position: absolute; top: 0; left: 0; }
.sec_brand_intro > header, .sec_brand_intro > .apply_list, .sec_brand_intro > .stat_list { position: relative; z-index: 1; }
.sec_brand_intro > header > .tit { width: fit-content; margin: 0; padding: 8px 16px; color: #fff; font-size: 1.4rem; font-weight: 500; line-height: 1.4; letter-spacing: -0.01em; background-color: rgba(255,255,255,0.2); border-radius: 99px; }
.sec_brand_intro > header > h3 { margin: 8px 0 0; color: #fff; font-size: 5.6rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.sec_brand_intro > header > .desc { color: #fff; font-size: 1.8rem; font-weight: 700; line-height: 1.5; letter-spacing: 0; }
.sec_brand_intro > .apply_list { width: 100%; max-width: 540px; margin-top: 24px; display: flex; flex-direction: column; gap: 10px; }
.sec_brand_intro > .apply_list > li > a { width: 100%; min-height: 51px; padding: 12px 20px; background-color: rgba(16,122,242,0.8); border-radius: 12px; color: #fff; text-decoration: none; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.sec_brand_intro > .apply_list > li:last-child > a { min-height: 64px; align-items: center; }
.sec_brand_intro > .apply_list > li > a > strong { flex: 0 0 114px; font-size: 1.8rem; font-weight: 700; line-height: 1.5; letter-spacing: 0; }
.sec_brand_intro > .apply_list > li:last-child > a > strong { flex-basis: 114px; font-size: 1.6rem; line-height: 1.24; }
.sec_brand_intro > .apply_list > li > a > span { flex: 1; min-width: 0; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.sec_brand_intro > .apply_list > li > a::after { content: ''; width: 16px; height: 16px; flex-shrink: 0; background-color: #fff; }
.sec_brand_intro > .stat_list { width: 100%; max-width: 647px; margin-top: 50px; display: flex; gap: 10px; }
.sec_brand_intro > .stat_list > li { flex: 1; min-width: 0; min-height: 95px; padding: 20px 32px; background-color: rgba(255,255,255,0.22); border-radius: 16px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; text-align: center; }
.sec_brand_intro > .stat_list > li > strong { color: #fff; font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_brand_intro > .stat_list > li > span { color: rgba(255,255,255,0.8); font-size: 1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; }
.sec_success_point :deep(.num_info_list) { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 40px; }
.sec_success_point :deep(.num_info_item) { padding: 0; border-bottom: 0; }
.sec_success_point :deep(.num_info_num) { margin-bottom: 8px; font-size: 1.8rem; line-height: 1.5; letter-spacing: 0; }
.sec_success_point :deep(.num_info_item article) { display: flex; flex-direction: column; gap: 24px; }
.sec_success_point :deep(.num_info_icon) { width: 80px; height: 80px; }
.sec_success_point :deep(.num_info_title) { margin-bottom: 8px; }
.sec_success_point :deep(.num_info_title > strong) { font-size: 2.8rem; line-height: 1.35; letter-spacing: -0.01em; }
.sec_success_point :deep(.num_info_body > p) { font-size: 2rem; line-height: 1.35; letter-spacing: -0.01em; }
section > .inner { margin-inline: calc(50% - 50vw); padding: 80px calc(50vw - 50%); background-color: #f8f8f8; }
section > .inner > .section_header { text-align: center; }
.sec_brand_solution > .inner > .link_card_list { display: flex; align-items: stretch; gap: 20px; }
.sec_brand_solution > .inner > .link_card_list > li { flex: 1; min-width: 0; display: flex; }
.sec_brand_solution > .inner > .link_card_list > li > a { width: 100%; min-height: 144px; padding: 32px 24px; background-color: #fff; border-radius: 12px; text-decoration: none; display: flex; align-items: center; gap: 20px; }
.sec_brand_solution > .inner > .link_card_list > li > a > .thumb { width: 80px; height: 80px; flex-shrink: 0; background-color: #f8f8f8; border-radius: 12px; }
.sec_brand_solution > .inner > .link_card_list > li > a > .txt { flex: 1; min-width: 0; }
.sec_brand_solution > .inner > .link_card_list > li > a > .txt > strong {  font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; display: block; }
.sec_brand_solution > .inner > .link_card_list > li > a > .txt > .desc { margin-top: 6px; color: #67676f; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; display: block; }
.sec_brand_solution > .inner > .link_card_list > li > a::after { content: ''; width: 24px; height: 24px; flex-shrink: 0; background-color: #161616; }
.sec_competitive > .section_header { text-align: center; }
.sec_competitive > .competitive_list { margin: 0; padding: 0; display: flex; justify-content: center; }
.sec_competitive > .competitive_list > li {  position: relative; }
.sec_competitive > .competitive_list > li + li { margin-left: -30px; }
.sec_competitive > .competitive_list > li:nth-child(1) { z-index: 1; }
.sec_competitive > .competitive_list > li:nth-child(2) { z-index: 2; }
.sec_competitive > .competitive_list > li:nth-child(3) { z-index: 3; }
.sec_competitive > .competitive_list > li:nth-child(4) { z-index: 4; }
.sec_competitive > .competitive_list > li > article { width: 260px; height: 260px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; text-align: center; }
.sec_competitive > .competitive_list > li > article > .icon { width: 40px; height: 40px; background-color: #d0d0d8; }
.sec_competitive > .competitive_list > li > article > strong { font-size: 2rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_competitive > .competitive_list > li:nth-child(1) > article { background-color: rgba(255,118,48,0.12); }
.sec_competitive > .competitive_list > li:nth-child(1) > article > strong { color: #f6671e; }
.sec_competitive > .competitive_list > li:nth-child(2) > article { background-color: rgba(139,144,148,0.18); }
.sec_competitive > .competitive_list > li:nth-child(2) > article > strong { color: #5a6670; }
.sec_competitive > .competitive_list > li:nth-child(3) > article { background-color: rgba(21,80,244,0.11); }
.sec_competitive > .competitive_list > li:nth-child(3) > article > strong { color: #1550f4; }
.sec_competitive > .competitive_list > li:nth-child(4) > article { background-color: rgba(16,158,105,0.12); }
.sec_competitive > .competitive_list > li:nth-child(4) > article > strong { color: #099762; }
.sec_store_open > .inner > .panel_split { display: flex; align-items: center; justify-content: center; gap: 40px; }
.sec_store_open > .inner > .panel_split > .info_panel { width: 100%; max-width: 500px; min-height: 164px; margin: 0; padding: 32px 24px; background-color: #fff; border-radius: 20px; }
.sec_store_open > .inner > .panel_split > .info_panel > dt { display: flex; align-items: center; gap: 8px; }
.sec_store_open > .inner > .panel_split > .info_panel > dt > .icon { width: 32px; height: 32px; flex-shrink: 0; background-color: #d0d0d8; }
.sec_store_open > .inner > .panel_split > .info_panel > dt > strong {  font-size: 2rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_store_open > .inner > .panel_split > .info_panel > dd { margin: 20px 0 0; color: #67676f; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.sec_store_open > .inner > .panel_split > .info_panel.align_end > dt { justify-content: flex-end; }
.sec_store_open > .inner > .panel_split > .info_panel.align_end > dd { text-align: right; }
.sec_store_open > .inner > .panel_split > .info_panel.align_start > dt { justify-content: flex-start; }
.sec_store_open > .inner > .panel_split > .info_panel.align_start > dd { text-align: left; }
.sec_store_open > .inner > .panel_split > .center_figure { width:100%; max-width: 340px; aspect-ratio: 1; border-radius: 50%; overflow: hidden; }
/* .sec_store_open > .inner > .panel_split > .center_figure > img { width: 100%; height: 100%; object-fit: cover; display: block; } */
.sec_product_concept > .section_header { text-align: center; }
.sec_product_concept > .product_hit { padding: 64px; background-color: #f8f8f8; border-radius: 12px; display: flex; align-items: flex-start;  }
.sec_product_concept > .product_hit > header { width: 100%; max-width: 296px; flex-shrink: 0; }
.sec_product_concept > .product_hit > header strong{font-size: 1.8rem;line-height: 1.5;letter-spacing: -0.01em;}
.sec_product_concept > .product_hit > header p{color:#67676F;font-size: 1.6rem;line-height: 1.5;letter-spacing: -0.01em;}
.sec_product_concept > .product_hit > .product_hit_body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 56px; }
.sec_product_concept > .product_hit > .product_hit_body > div > h4 { margin-bottom: 24px;  font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_product_concept > .product_hit > .product_hit_body > div > ul { margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 20px; }
.sec_product_concept > .product_hit > .product_hit_body > div > ul > li {  flex: 0 0 234px; min-width: 0; }
.sec_product_concept > .product_hit > .product_hit_body > div > ul > li > article { height: 100%; background-color: #fff; border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; }
.sec_product_concept > .product_hit > .product_hit_body > div > ul > li > article > figure { width: 100%; height: 100%; margin: 0; display: flex; flex-direction: column; }
.sec_product_concept > .product_hit > .product_hit_body > div > ul > li > article > figure > img { width: 100%; height: 200px; object-fit: contain; display: block; }
.sec_product_concept > .product_hit > .product_hit_body > div > ul > li > article > figure > figcaption{padding:20px 24px;}
.sec_product_concept > .product_hit > .product_hit_body > div > ul > li > article > figure > figcaption > p {color: #67676f; font-size: 1.2rem; font-weight: 400; line-height: 1.2; letter-spacing: 0; text-align: center; }
.sec_product_concept > .product_hit > .product_hit_body > div > ul > li > article > figure > figcaption > strong { font-size: 1.8rem; font-weight: 700; line-height: 1.5; letter-spacing: 0; text-align: center; display: block; }
.sec_product_concept > .product_ff_layout { margin-top: 60px; display: flex; gap: 40px; }
.sec_product_concept > .product_ff_layout > article { flex: 1; min-width: 0; padding: 64px; border: 1px solid #d7d7df; border-radius: 12px; }
.sec_product_concept > .product_ff_layout > article .sub_header {margin-bottom:32px;}
.sec_product_concept > .product_ff_layout > article .sub_header h3{margin-top:8px;}
.sec_product_concept > .product_ff_layout > article .sub_header p{margin-top:8px;color:#67676F;font-size: 1.8rem;line-height: 1.4;letter-spacing: 0;}
.sec_product_concept > .product_ff_layout > article > ul > li { font-size: 1.8rem; font-weight: 400; line-height: 1.4; letter-spacing: 0; }
.sec_product_concept > .product_ff_layout > article > .product_ff_visual { margin-top: 24px; display: flex; gap: 20px; }
.sec_product_concept > .product_ff_layout > article > .product_ff_visual > figure { flex: 1; min-width: 0; height: 212px; margin: 0; border-radius: 12px; overflow: hidden; background-color: #d9d9d9; background-repeat: no-repeat; background-position: center; background-size: cover; }
.sec_product_concept > .product_ff_layout > article > .product_ff_brand_list { margin-top: 24px; display: flex; flex-direction: column; gap: 12px; }
.sec_product_concept > .product_ff_layout > article > .product_ff_brand_list > li { padding: 20px 24px; background-color: #f8f8f8; border-radius: 12px; display: flex; align-items: flex-start; gap: 20px; }
.sec_product_concept > .product_ff_layout > article > .product_ff_brand_list > li > .thumb { width: 77px; height: 77px; flex-shrink: 0; background-color: #d9d9d9; background-repeat: no-repeat; background-position: center; background-size: cover; border-radius: 12px; }
.sec_product_concept > .product_ff_layout > article > .product_ff_brand_list > li > div { flex: 1; min-width: 0; }
.sec_product_concept > .product_ff_layout > article > .product_ff_brand_list > li > div > strong { font-size: 1.8rem; font-weight: 700; line-height: 1.5; letter-spacing: 0;}
.sec_product_concept > .product_ff_layout > article > .product_ff_brand_list > li > div > p { margin-top: 2px;  font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.sec_product_concept > .product_ff_layout > article > .btn_mid { margin-top: 24px; }
.sec_product_concept > .product_concept_store { margin-top: 60px; }


.sec_product_concept > .product_concept_store > .concept_store_swiper { margin-top: 40px; overflow: hidden; }
.sec_product_concept > .product_concept_store > .concept_store_swiper :deep(.swiper-wrapper) { align-items: stretch; }
.sec_product_concept > .product_concept_store > .concept_store_swiper :deep(.swiper-slide) { width: 360px; height: auto; }
.sec_product_concept > .product_concept_store > .concept_store_swiper :deep(.swiper-slide) > article > figure { width: 100%; height: 240px; margin: 0; border-radius: 12px; overflow: hidden; background-color: #f8f8f8; background-repeat: no-repeat; background-position: center; background-size: cover; }
.sec_product_concept > .product_concept_store > .concept_store_swiper :deep(.swiper-slide) > article > span { width: fit-content; margin-top: 16px; padding: 3px 6px; color: #67676f; font-size: 1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; background-color: #f2f2f4; border-radius: 4px; display: inline-block; }
.sec_product_concept > .product_concept_store > .concept_store_swiper :deep(.swiper-slide) > article > strong { margin-top: 6px; font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; display: block; }
.sec_product_concept > .product_concept_store > .concept_store_swiper :deep(.swiper-slide) > article > p { margin-top: 6px; color: #67676f; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.sec_marketing > .inner > .marketing_list { margin: 0; padding: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; list-style: none; align-items: stretch; }
.sec_marketing > .inner > .marketing_list > li { height: 100%; }
.sec_marketing > .inner > .marketing_list > li > article { min-height: 157px; height: 100%; padding: 32px; background-color: #fff; border-radius: 20px; display: grid; grid-template-columns: 80px 1fr; column-gap: 20px; align-content: start; }
.sec_marketing > .inner > .marketing_list > li > article > .icon { width: 80px; height: 80px; background-color: #f2f2f4; border-radius: 50%; grid-column: 1; grid-row: 1; }
.sec_marketing > .inner > .marketing_list > li > article > div { grid-column: 2; grid-row: 1; display: flex; flex-direction: column;; min-width: 0; }
.sec_marketing > .inner > .marketing_list > li > article > div > em { margin: 0; color: #67676f; font-size: 1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; font-style: normal; }
.sec_marketing > .inner > .marketing_list > li > article > div > strong { color: #161616; font-size: 2.8rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; display: block; }
.sec_marketing > .inner > .marketing_list > li > article > div > p { margin-top: 8px; color: #67676f; font-size: 2rem; font-weight: 400; line-height: 1.35; letter-spacing: -0.01em; }
/* 든든한 운영 지원 & 스마트 인프라 */
.sec_operation_support  > ul {  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; list-style: none; align-items: stretch; }
.sec_operation_support  > ul > li { height: 100%; padding: 60px 40px; border: 1px solid #D7D7DF; border-radius: 12px; }
.sec_operation_support  > ul > li > h3 { font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_operation_support  > ul > li > dl { margin: 40px 0 0; }
.sec_operation_support  > ul > li > dl > dt { display: flex; align-items: center; gap: 8px; font-size: 1.8rem; font-weight: 700; line-height: 1.5; letter-spacing: 0; }
.sec_operation_support  > ul > li > dl > dt > .icon { width: 24px; height: 24px; flex-shrink: 0; background-color: #d9d9d9; }
.sec_operation_support  > ul > li > dl > dd { margin: 4px 0 0; padding-left: 32px; color: #161616; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.sec_operation_support  > ul > li > dl > dd + dt { margin-top: 56px; }

/* sticky 멘뉴 */
.quick_menu { position: fixed; bottom: 60px; right: clamp(24px, 4.5313vw, 87px); width: clamp(104px, 6.8229vw, 131px); z-index: 100; display: flex; flex-direction: column; gap: clamp(8px, 0.5208vw, 10px); opacity: 0; pointer-events: none; }
.quick_menu li { position: relative; width: 100%; }
.quick_menu li button { width: 100%; height: clamp(48px, 3.125vw, 60px); padding: clamp(12px, 0.9375vw, 18px) 0;  font-size: clamp(1.3rem, 0.8333vw, 1.6rem); font-weight: 700; letter-spacing: -0.01em; background: none; background-color: #f2f2f4; border: 0; border-radius: 99px; text-align: center; display: flex; align-items: center; justify-content: center; gap: clamp(8px, 0.5208vw, 10px); }
.quick_menu li button::before { content: ''; width: clamp(16px, 1.0417vw, 20px); height: clamp(19px, 1.25vw, 24px); background-color: #161616; display: block; }
@media (max-width: 1024px) {
    .sec_success_point :deep(.num_info_list) { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 40px 20px; }
    .sec_brand_solution > .inner > .link_card_list { flex-direction: column; }
    .sec_competitive > .competitive_list { flex-wrap: wrap; gap: 20px 0; }
    .sec_competitive > .competitive_list > li + li { margin-left: -30px; }
    .sec_competitive .section_header h2{font-size: 2.4rem;}
}
@media (max-width: 768px) {
    :deep(.m_br) { display: block; }
    :deep(.p_br) { display: none; }
    section + section { padding-top: 80px; }
    .page_header { display: none; }
    .sec_body { padding: 24px 0 40px; }
    .tab_page { padding: 60px 20px 80px; }
    .section_header { margin-bottom: 32px; }
    .section_header > .tit { margin-bottom: 12px; padding: 4px 12px; }
    .section_header > h2 { font-size: 2.8rem; line-height: 1.35; letter-spacing: -0.01em; }
    .section_header > p { margin-top: 12px; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .sec_brand_intro { max-height: none; min-height: 640px; padding: 50px 20px; border-radius: 20px; gap: 0; }
    .sec_brand_intro > header { text-align: center; } 
    .sec_brand_intro > header > .tit { margin: 0 auto; padding: 8px 16px; font-size: 1.2rem; font-weight: 500; line-height: 1.4; letter-spacing: -0.01em; }
    .sec_brand_intro > header > h3 { margin: 8px 0 0; font-size: 3rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
    .sec_brand_intro > header > .desc { margin-top: 4px; font-size: 1.6rem; font-weight: 700; line-height: 1.24; letter-spacing: 0; }
    .sec_brand_intro > .apply_list { width: 100%; max-width: none; margin-top: 50px; gap: 10px; }
    .sec_brand_intro > .apply_list > li > a { position: relative; min-height: 62px; padding: 12px 16px; padding-right: 40px; flex-direction: column; align-items: flex-start; justify-content: center; gap: 4px; }
    .sec_brand_intro > .apply_list > li:last-child > a { min-height: 76px; align-items: flex-start; }
    .sec_brand_intro > .apply_list > li > a > strong { flex: none; width: 100%; font-size: 1.6rem; font-weight: 700; line-height: 1.24; letter-spacing: 0; }
    .sec_brand_intro > .apply_list > li:last-child > a > strong { flex-basis: auto; font-size: 1.6rem; line-height: 1.24; }
    .sec_brand_intro > .apply_list > li > a > span { width: 100%; font-size: 1.2rem; font-weight: 400; line-height: 1.2; letter-spacing: 0; }
    .sec_brand_intro > .apply_list > li > a::after { position: absolute; top: 50%; right: 16px; transform: translateY(-50%); }
    .sec_brand_intro > .stat_list { width: 100%; max-width: none; margin-top: 24px; flex-direction: row; gap: 10px; }
    .sec_brand_intro > .stat_list > li { flex: 1; min-width: 0; min-height: 103px; padding: 16px 10px; gap: 3px; }
    .sec_brand_intro > .stat_list > li > strong { font-size: 1.6rem; font-weight: 700; line-height: 1.24; letter-spacing: 0; }
    .sec_brand_intro > .stat_list > li > span { font-size: 1.2rem; font-weight: 400; line-height: 1.2; letter-spacing: 0; }

    .sec_success_point .section_header > h2 + p { color: #67676f; font-size: 1.8rem; line-height: 1.4; letter-spacing: 0; }
    .sec_success_point :deep(.num_info_list) { grid-template-columns: 1fr; gap: 40px; }
    .sec_success_point :deep(.num_info_item > article) { flex-direction: row; align-items: flex-start; gap: 16px; }
    .sec_success_point :deep(.num_info_icon) { width: 60px; height: 60px; }
    .sec_success_point :deep(.num_info_content) { flex: 1; min-width: 0; }
    .sec_success_point :deep(.num_info_num) { margin-bottom: 6px; font-size: 1.6rem; line-height: 1.24; letter-spacing: 0; }
    .sec_success_point :deep(.num_info_title) { margin-bottom: 6px; }
    .sec_success_point :deep(.num_info_title > strong) { font-size: 2rem; line-height: 1.35; }
    .sec_success_point :deep(.num_info_body > p) { font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .sec_brand_solution > .inner { padding: 40px 20px; }
    .sec_brand_solution > .inner > .link_card_list { margin-top: 32px; gap: 10px; }
    .sec_brand_solution > .inner > .link_card_list > li > a { min-height: 0; padding: 16px; gap: 16px; }
    .sec_brand_solution > .inner > .link_card_list > li > a > .thumb { width: 64px; height: 64px; }
    .sec_brand_solution > .inner > .link_card_list > li > a > .txt > strong { font-size: 1.8rem; line-height: 1.5; letter-spacing: 0; }
    .sec_brand_solution > .inner > .link_card_list > li > a > .txt > .desc { font-size: 1.4rem; line-height: 1.4; }
    .sec_competitive > .competitive_list { width: 335px; max-width: 100%; margin: 0 auto; flex-wrap: wrap; justify-content: flex-start; align-content: flex-start; gap: 0; }
    .sec_competitive > .competitive_list > li + li { margin-left: 0; }
    .sec_competitive > .competitive_list > li:nth-child(even) { margin-left: -25px; }
    .sec_competitive > .competitive_list > li:nth-child(n+3) { margin-top: -20px; }
    .sec_competitive > .competitive_list > li > article { width: 180px; height: 180px; gap: 16px; box-sizing: border-box; }
    .sec_competitive > .competitive_list > li > article > .icon { width: 40px; height: 40px; }
    .sec_competitive > .competitive_list > li > article > strong { font-size: 1.6rem; font-weight: 700; line-height: 1.24; letter-spacing: 0; }
    .sec_marketing > .inner > .marketing_list { grid-template-columns: 1fr; gap:10px;}
    .quick_menu { display: none; }
}
</style>
