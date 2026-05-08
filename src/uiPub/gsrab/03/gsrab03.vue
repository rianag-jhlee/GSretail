<template>
    <div class="main-container">
        <div class="title_wrap ac">
            <h2 class="page_title">{{ t.MainTitle }}</h2>
        </div>
        <div class="content">
            <Tabs v-model="MainTabIdx" :tab-items="t.MainTabs" tab-class="type_01" :tab-slide="true" />
            <div v-show="MainTabIdx === 0" class="panel" :aria-label="t.MainTabs?.[0]?.item || ''">
                <section ref="sectionRef" class="sec_history">
                    <div class="history_intro">
                        <header>
                            <p>{{ t.HistoryIntroPeriod }}</p>
                            <h3 v-html="t.HistoryIntroTitle"></h3>
                        </header>
                        <ul ref="introImagesRef" class="history_intro_images">
                            <li v-for="(img, idx) in t.HistoryImages" :key="'history-img-' + idx" :style="{ top: (imagePositions[idx] || 0) + 'px' }">
                                <img :src="img.src" :alt="img.alt" />
                            </li>
                        </ul>
                    </div>
                    <HistoryTimeline :items="t.HistoryItems" />
                </section>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from "vue";
import Tabs from "@/components/Tabs.vue";
import HistoryTimeline from "@/components/HistoryTimeline.vue";
import imgHistory1 from "@/assets/images/dummy/gsrab03_01.png";
import imgHistory2 from "@/assets/images/dummy/gsrab03_02.png";
import imgHistory3 from "@/assets/images/dummy/gsrab03_03.png";
import imgHistory4 from "@/assets/images/dummy/gsrab03_04.png";
import imgHistory5 from "@/assets/images/dummy/gsrab03_05.png";
import imgHistory6 from "@/assets/images/dummy/gsrab03_06.png";

const MainTabIdx = ref(0);
const sectionRef = ref(null);
const introImagesRef = ref(null);
const imagePositions = ref([]);
const MOBILE_BP = 768;
let resizeObserver = null;
const langData = {
    ko: {
        MainTitle: "연혁",
        MainTabs: [
            { item: "현재 - 2019" },
            { item: "2018 - 2011" },
            { item: "2010 - 2004" },
            { item: "2002 - 1999" },
            { item: "1997 - 1990" },
            { item: "1987 - 1971" },
        ],
        HistoryIntroPeriod: "현재-2019",
        HistoryIntroTitle: "라이프스타일 <br />플랫폼으로 도약",
        HistoryImages: [
            { period: "2025", entryIdx: 6 , src: imgHistory1, alt: "2025년 GS리테일 연혁 이미지" },
            { period: "2024", entryIdx: 5, src: imgHistory2, alt: "2024년 GS리테일 연혁 이미지" },
            { period: "2023", entryIdx: 4, src: imgHistory3, alt: "2023년 GS리테일 연혁 이미지" },
            { period: "2022", entryIdx: 4, src: imgHistory4, alt: "2022년 GS리테일 연혁 이미지" },
            { period: "2021", entryIdx: 0, src: imgHistory5, alt: "2021년 GS리테일 연혁 이미지" },
            { period: "2020", entryIdx: 0, src: imgHistory6, alt: "2020년 GS리테일 연혁 이미지" },
        ],
        HistoryItems: [
            { period: "2025", details: [
                { term: [
                    "12월",
                    "GS리테일"
                ], desc: "'1천만불 수출의 탑' 수상 공정거래 자율준수프로그램(CP) 등급평가 <br /> 'AA' 등급 획득" },
                { term: [
                    "11월"
                    ], subDetails: [
                        { term: "GS25", desc: "베트남 전역 400호점·하노이 50호점 돌파" },
                        { term: "GS리테일", desc: "ESG평가 2년 연속 'A+' 등급 획득" }
                    ] },
                { term: [
                    "10월",
                    "GS25"
                ], desc: "인스타그램 100만 팔로워 돌파" },
                { term: [
                    "9월",
                    "GS25"
                ], desc: "시그니처 프로그램 '지금 백지연' 론칭 BI리뉴얼" },
                { term: [
                    "8월",
                    "GS SHOP"
                ], desc: "르네크루 리브랜딩 론칭" },
                { term: [
                    "6월",
                    "GS SHOP"
                ], desc: "태국 방콕 'THAIFEX 2025' 박람회 참가" },
                { term: [
                    "5월",
                    "GS25"
                ], desc: "PB·차별화 상품 일본 돈키호테 수출" },
                { term: [
                    "4월",
                    "GS25"
                ], desc: "FC서울 특화 매장 오픈" },
                {
                    term: ["3월"], // 좌측 primary term
                    subDetails: [
                        { term: "GS25", desc: "한국 편의점 최초 베트남 하노이 진출" },
                        { term: "GS리테일", desc: "GS리테일 허서홍 대표이사 취임" }
                    ]
                },
                { term: [
                    "1월",
                    "GS리테일"
                ], desc: "통합 멤버십 GS ALL 론칭" },
            ] },
            { period: "2024", details: [
                { term: [
                    "11월",
                    "GS리테일"
                ], desc: "허서홍 신임 대표 내정" },
                { term: [
                    "10월",
                    "GS리테일"
                ], desc: "동반성장지수 '최우수' 등급 획득 <br />ESG통합 'A+' 등급 획득" },
                { term: [
                    "9월",
                    "GS SHOP"
                ], desc: "'AI 라이프스타일 커머스' 앱으로 개편" },
                { term: [
                    "8월"
                ], subDetails: [
                    { term: "GS SHOP", desc: "업계 최초 생성형 'AI 스튜디오' 구현" },
                    { term: "GS25", desc: "'그라운드블루49' 오픈" }
                ] },
                { term: [
                    "7월",
                    "GS THE FRESH"
                ], desc: "500호점 돌파" },
                { term: [
                    "6월",
                    "GS SHOP"
                ], desc: "숏픽 오픈 6개월만에 1억뷰 달성" },
                { term: [
                    "5월"
                ], subDetails: [
                    { term: "GS THE FRESH", desc: "50주년" },
                    { term: "GS25", desc: "베트남 GS25 300호점 돌파" }
                ] },
                { term: [
                    "4월",
                    "GS리테일"
                ], desc: "고피자와 MOU 체결" },
                { term: [
                    "3월",
                    "GS25"
                ], desc: "배달·픽업 주문 증정품 보관서비스 론칭" }
            ] },
            { period: "2023", details: [
                { term: [
                    "12월",
                    "GS SHOP"
                ], desc: "소비자중심경영(CCM) 7회차 재인증 획득" },
                { term: [
                    "11월",
                    "GS25"
                ], desc: "편의점 업계 최초로 ESG 환경분야 평가 A+(매우 우수) 획득" },
                { term: [
                    "9월"
                ], subDetails: [
                    { term: "GS리테일", desc: "'우리동네GS' MAU 283만 돌파 (9월 기준 오프라인 유통사 앱 중 1위 기록)" },
                    { term: "GS SHOP", desc: "홈쇼핑 업계 최초 네트워크 기반 방송시스템(NDI) 구축" }
                ] },
                { term: [
                    "6월",
                    "GS THE FRESH"
                ], desc: "400호점 돌파" },
                { term: [
                    "3월",
                    "GS리테일"
                ], desc: "통합 멤버십 출범" },
                { term: [
                    "2월"
                ], subDetails: [
                    { term: "GS25", desc: "혜자로운 집밥(김혜자 도시락) 재출시"},
                    { term: "GS리테일", desc: "2023 대한민국 일하기 좋은 기업 선정" },
                ] },
                { term: [
                    "1월",
                ], subDetails: [
                    { term: "GS리테일", desc: "요기요와 손잡고 '요편의점' 서비스 론칭" },
                    { term: "GS25", desc: "제28회 코리아 베스트 디자인 어워드' 브랜드아이덴티티 부문 대상 수상 (GS25 갓생기획)" }
                ] },
            ] },
            { period: "2022", details: [
                {
                    term: ["12월"],
                    subDetails: [
                        { term: "GS리테일", desc: "GS리테일 캐비아와 전략적 제휴 체결" },
                        { term: "GS Fresh Mall", desc: "GS Fresh Mall 바로배달 서비스 론칭" },
                        { term: "GS25", desc: "베트남GS25 200호점 돌파" }
                    ]
                },
                { term: [
                    "11월",
                    "GS THE FRESH"
                ], desc: "GS THE FRESH 수산물 이력제 도입" },
                { term: ["10월",], 
                  subDetails:[
                      { term: "GS리테일", desc: "GS리테일 극지연구소와 기후 위기 대응 업무협약 체결" },
                      { term: "GS25", desc: "몽골GS25 100호점 오픈" }
                  ] },
                
                { term: [
                    "8월",
                    "GS25"
                ], desc: "GS25 유튜브 채널 '이리오너라' 업계 최초 구독자 100만 돌파" },
                { term: [
                    "7월",
                    "GS Fresh Mall"
                ], desc: "온라인 통합 유료 멤버십 서비스 '프라임 멤버십' 론칭(GS Fresh Mall)" },
                { term: [
                    "6월",
                    "GS25"
                ], desc: "편의점 최초 서울시 아동급식카드 온라인 결제 시스템 론칭" },
                { term: [
                    "4월",
                    "GS THE FRESH"
                ], desc: "슈퍼마켓 최초 금융혁신점포 오픈(GS THE FRESH 광진화양점)" },
                { term: [
                    "2월",
                    "GS25"
                ], desc: "편의점 최초 치킨 조리 로봇 도입(로보아르테 협업)" },
                { term: [
                    "1월",
                    "GS리테일"
                ], desc: "쿠캣 지분 인수" }
            ] },
            { period: "2021", details: [
                { term: [
                    "8월",
                    "GS리테일"
                ], desc: "GS페이 론칭" },
                { term: [
                    "7월",
                    "GS리테일"
                ], desc: "GS리테일 X GS홈쇼핑 합병" },
                { term: [
                    "5월",
                    "GS리테일"
                ], desc: "업계 최초 ISO14001·9001동시 인증" },
                    
                { term: [
                    "3월"
                ], subDetails: [
                    { term: "GS25", desc: "베트남 GS25 100호점 돌파" },
                    { term: "GS리테일", desc: "ESG추진위원회 출범" }
                ] }
            ] },
            { period: "2020", details: [
                { term: [
                    "12월",
                    "GS SHOP"
                ], desc: "블록체인 품질이력관리시스템(b-link) 오픈" },
                { term: [
                    "11월"
                ], subDetails: [
                    { term: "GS리테일", desc: "GS리테일-GS홈쇼핑 합병 결의" },
                    { term: "GS25", desc: "AI로봇배달 서비스 론칭" }
                ] },
                { term: [
                    "10월",
                    "달리살다"
                ], desc: "유기농 전문몰 '달리살다' 오픈" },
                { term: [
                    "9월",
                    "GS THE FRESH"
                ], desc: "사회공헌형 슈퍼마켓 '내일스토어' 오픈" },
                { term: [
                    "8월",
                    "GS리테일"
                ], desc: "배달플랫폼 사업 '우딜' 론칭" },
                { term: [
                    "7월",
                    "GS25"
                ], desc: "사회공헌형 슈퍼마켓 '내일스토어' 오픈" },
                { term: [
                    "6월",
                    "GS리테일"
                ], desc: "주류 스마트오더 와인25 플러스 론칭" },
                { term: [
                    "4월"
                ], subDetails: [
                    { term: "GS리테일", desc: "업계 최초 드론 배송 시범서비스 진행" },
                    { term: "GS SHOP", desc: "군포물류센터 오픈" }
                ] },
                { term: [
                    "1월",
                    "GS25"
                ], desc: "미래형 편의점 GS25 을지스마트점 오픈" }
            ] },
            { period: "2019", details: [
                { term: [
                    "11월",
                    "GS리테일"
                ], desc: "유기견 전문봉사단 'GS벳러버' 출범" },
                { term: [
                    "9월",
                    "GS25"
                ], desc: "'나만의냉장고앱' 누적 다운로드 수 1000만 건 돌파" },
                { term: [
                    "7월",
                    "GS SHOP"
                ], desc: "친환경 배송서비스 도입" },
                { term: [
                    "5월",
                    "GS THE FRESH"
                ], desc: "알뜰형 슈퍼 오픈" },
                { term: [
                    "3월",
                    "GS25"
                ], desc: "GS25/GS수퍼마켓 신규앱 론칭, 반값 택배 론칭" },
                { term: [
                    "1월",
                    "GS25"
                ], desc: "올플스토어 오픈" }
            ] }
        ],
    },
};
const locale = ref("ko");
const t = computed(() => langData[locale.value]);

const updateImagePositions = () => {
    const sec = sectionRef.value;
    const intro = introImagesRef.value;
    if (!sec || !intro) return;
    if (typeof window !== "undefined" && window.innerWidth <= MOBILE_BP) return;

    const introTop = intro.getBoundingClientRect().top;
    const next = t.value.HistoryImages.map((img) => {
        const row = sec.querySelector(`.history_item[data-period="${img.period}"]`);
        if (!row) return 0;
        let target = row;
        if (typeof img.entryIdx === "number") {
            const entries = row.querySelectorAll(".history_detail_row");
            target = entries[img.entryIdx] || row;
        }
        const offset = target.getBoundingClientRect().top - introTop;
        return Math.max(0, offset);
    });
    imagePositions.value = next;
};

onMounted(async () => {
    await nextTick();
    updateImagePositions();
    if (typeof ResizeObserver !== "undefined" && sectionRef.value) {
        resizeObserver = new ResizeObserver(updateImagePositions);
        resizeObserver.observe(sectionRef.value);
    }
    window.addEventListener("resize", updateImagePositions);
});

onUnmounted(() => {
    resizeObserver?.disconnect();
    window.removeEventListener("resize", updateImagePositions);
});

watch([locale, MainTabIdx], async () => {
    await nextTick();
    updateImagePositions();
});
</script>
<style scoped>
img { width: 100%; height: auto; display: block; object-fit: cover; }
.main-container { width: 100%; position: relative; display: block; }
.title_wrap { width: 100%; max-height: 480px; padding: 10.91% 0 11.25%; text-align: center; position: relative; display: block; background-color: transparent; background-image: url("@/assets/images/dummy/gsrab02_01.png"); background-repeat: no-repeat; background-size: cover; background-position: center -90px; }
.title_wrap::after { content: ""; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.3); position: absolute; left: 0; top: 0; z-index: 1; }
.title_wrap > h2 { color: #fff; font-weight: 700; font-size: 7.2rem; line-height: 1.24; letter-spacing: -0.02em; position: relative; z-index: 2; }
.content { width: 100%; max-width: 1460px; margin: 0 auto; padding: 0 20px 200px; position: relative; display: block; }
.panel { padding: 120px 0 0; }
.sec_history { display: grid; grid-template-columns: clamp(280px, 32vw, 480px) minmax(0, 1fr); gap: 20px; align-items: start; }
.history_intro > header { min-height: 230px; }
.history_intro > header > p { margin: 0; color: #67676f; font-size: 2.4rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.history_intro > header > h3 { margin: 8px 0 0; font-size: 4.8rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.history_intro_images { margin: 0; padding: 0; position: relative; }
.history_intro_images > li { width: 100%; max-width: 480px; aspect-ratio: 432/294; border-radius: 12px; position: absolute; left: 0; top: 0; overflow: hidden; }
.sec_history :deep(.history_period) { width: auto; padding:7px 0;}
/* .sec_history :deep(.history_detail_list) { gap: 40px; } */
.sec_history :deep(.history_detail_row) { padding-bottom:16px; grid-template-columns: 40px minmax(0, 1fr); }
.sec_history :deep(.history_detail_content) { min-height:56px; padding:14.5px 0;gap:0; }
.sec_history :deep(.history_detail_content > dd) { margin-left:12px; }
.sec_history :deep(.history_term_primary) { padding:14.5px 0;}

section+section{padding:200px 0 0; }
.header h3 { margin: 0; font-weight: 700; font-size: 4.8rem; line-height: 1.3; letter-spacing: -0.01em; }
.header p { margin: 16px 0 0; font-weight: 700; font-size: 2.4rem; line-height: 1.35; letter-spacing: -0.01em; }
.header.center h3, .header.center p { text-align: center; }

@media screen and (max-width: 1024px) {
    .sec_history :deep(.history_detail_content) { grid-auto-flow: row;grid-template-columns: minmax(0, 1fr);}
}

@media screen and (max-width: 768px) {
    .title_wrap { display: none; }
    .visual_sub { font-size: 2rem; }
    section+section{padding:60px 0 0; }
    .content { width: 100%; max-width: 100%; padding: 60px 20px 94px; }
    .panel { padding: 60px 0 0; }
    .sec_history { grid-template-columns: minmax(0, 1fr); gap: 60px; }
    .history_intro > header { min-height: 0; }
    .history_intro > header > p { display: none; }
    .history_intro > header > h3 { margin-top: 0; font-size: 2.8rem; line-height: 1.35; }
    .history_intro_images { display: none; }
    .header h3 { font-size: 2.4rem; text-align: left; }
    .header p { margin-top: 12px; font-weight: 400; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .header.center h3, .header.center p { text-align: left; }
    .sec_history :deep(.history_period){
        font-size: 3.2rem;
        line-height: 1.3;
        letter-spacing: -0.01em;
    }
    .sec_history :deep(.history_body){
        margin:0;
    }
    .sec_history :deep(.history_detail_list){
        gap:0;
    }
    .sec_history :deep(.history_item){
        gap:32px;
    }
    .sec_history :deep(.history_list){
        padding-left:48px;
    }
    .sec_history :deep(.history_item::before){
        width:8px;
        height:8px;
        border-width:8px;
        left:-48px;
    }
    .sec_history :deep(.history_item:not(:last-child)::after){
        left:-36px;
    }
    .sec_history :deep(.history_detail_row){
       gap:10px;
       padding:0;
    }
    .sec_history :deep(.history_term_primary){
        padding:16px 0;
    }
    .sec_history :deep(.history_detail_content){
        min-height: 95px;
        padding:16px 0;
        row-gap:12px;
    }
    .sec_history :deep(.history_detail_content > dt),
    .sec_history :deep(.history_detail_content > dd){
        font-size: 1.6rem;
        line-height: 1.24;
        letter-spacing: 0%;

    }
    .sec_history :deep(.history_detail_content > dd){
        margin:0;
    }
}
</style>
