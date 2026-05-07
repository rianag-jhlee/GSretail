<template>
    <div class="main-container">
        <div class="title_wrap ac">
            <h2 class="page_title">{{ t.MainTitle }}</h2>
        </div>
        <div class="content">
            <Tabs v-model="MainTabIdx" :tab-items="t.MainTabs" tab-class="type_01" :tab-slide="true" />
            <section v-if="MainTabIdx === 0" class="sec_history">
                <div class="history_intro">
                    <header>
                        <p>{{ t.HistoryIntroPeriod }}</p>
                        <h3 v-html="t.HistoryIntroTitle"></h3>
                    </header>
                    <ul class="history_intro_images">
                        <li v-for="(img, idx) in t.HistoryImages" :key="'history-img-' + idx">
                            <img :src="img.src" :alt="img.alt" />
                        </li>
                    </ul>
                </div>
                <HistoryTimeline :items="t.HistoryItems" />
            </section>
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from "vue";
import Tabs from "@/components/Tabs.vue";
import HistoryTimeline from "@/components/HistoryTimeline.vue";
import imgHistory1 from "@/assets/images/dummy/gsrab03_01.png";
import imgHistory2 from "@/assets/images/dummy/gsrab03_02.png";
import imgHistory3 from "@/assets/images/dummy/gsrab03_03.png";
import imgHistory4 from "@/assets/images/dummy/gsrab03_04.png";
import imgHistory5 from "@/assets/images/dummy/gsrab03_05.png";
import imgHistory6 from "@/assets/images/dummy/gsrab03_06.png";

const MainTabIdx = ref(0);
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
            { src: imgHistory1, alt: "2025년 GS리테일 연혁 이미지" },
            { src: imgHistory2, alt: "2024년 GS리테일 연혁 이미지" },
            { src: imgHistory3, alt: "2023년 GS리테일 연혁 이미지" },
            { src: imgHistory4, alt: "2022년 GS리테일 연혁 이미지" },
            { src: imgHistory5, alt: "2021년 GS리테일 연혁 이미지" },
            { src: imgHistory6, alt: "2020년 GS리테일 연혁 이미지" },
        ],
        HistoryItems: [
            { period: "2025", details: [
                { term: [
                    "12월",
                    "GS25"
                ], desc: "'1천만불 수출의 탑' 수상 공정거래 자율준수프로그램(CP) 등급평가 <br /> 'AA' 등급 획득" },
                { term: [
                    "11월",
                    "GS25"
                ], desc: "베트남 전역 400호점·하노이 50호점 돌파" },
                { term: [
                    "10월",
                    "GS SHOP"
                ], desc: "ESG평가 2년 연속 'A+' 등급 획득" },
                { term: [
                    "8월",
                    "GS25"
                ], desc: "인스타그램 100만 팔로우 돌파" },
                { term: [
                    "7월",
                    "GS25"
                ], desc: "시그니처 프로그램 '지금 백지연' 론칭 BI리뉴얼" },
                { term: [
                    "6월",
                    "GS리테일"
                ], desc: "르네크루 리브랜딩 론칭" },
                { term: [
                    "5월",
                    "GS리테일"
                ], desc: "PB·차별화 상품 일본 돈키호테 수출" },
                { term: [
                    "4월",
                    "GS리테일"
                ], desc: "FC서울 특화 매장 오픈" },
                {
                    term: ["3월"], // 좌측 primary term
                    subDetails: [
                        { term: "GS25", desc: "한국 편의점 최초 베트남 하노이 진출" },
                        { term: "GS리테일", desc: "GS리테일 허서홍 대표이사 취임" }
                    ]
                }, 
                { term: [
                    "6월",
                    "GS리테일"
                ], desc: "르네크루 리브랜딩 론칭" },
                { term: [
                    "1월",
                    "GS25"
                ], desc: "통합 멤버십 GS ALL 론칭" },
                
               
            ] },
            { period: "2024", details: [
                { term: [
                    "11월",
                    "GS리테일"
                ], desc: "GS리테일" },
                { term: [
                    "10월",
                    "GS25"
                ], desc: "허서홍 신임 대표 내정" },
                { term: [
                    "GS25",
                    "GS리테일"
                ], desc: "GS리테일" },
                { term: [
                    "9월",
                    "GS25"
                ], desc: "동반성장지수 '최우수' 등급 획득  <br />ESG통합 'A+' 등급 획득" },
                { term: [
                    "8월",
                    "GS SHOP"
                ], desc: "GS25" },
                { term: [
                    "8월",
                    "GS SHOP"
                ], desc: "ESG평가 2년 연속 'A+' 등급 획득" },
                { term: [
                    "7월",
                    "GS25"
                ], desc: "GS SHOP" },
                { term: [
                    "6월",
                    "GS25"
                ], desc: "'AI 라이프스타일 커머스' 앱으로 개편" },
                { term: [
                    "5월",
                    "GS25"
                ], desc: "GS SHOP" },
                { term: [
                    "5월",
                    "GS25"
                ], desc: "업계 최초 생성형 'AI 스튜디오' 구현" },
                { term: [
                    "4월",
                    "GS리테일"
                ], desc: "GS25" },
                { term: [
                    "3월",
                    "GS리테일"
                ], desc: "'그라운드블루49' 오픈" },
                { term: [], desc: "GS THE FRESH" },
                { term: [], desc: "500호점 돌파" },
                { term: [], desc: "GS SHOP" },
                { term: [], desc: "숏픽 오픈 6개월만에 1억뷰 달성" },
                { term: [], desc: "GS THE FRESH" },
                { term: [], desc: "50주년" },
                { term: [], desc: "GS25" },
                { term: [], desc: "베트남 GS25 300호점 돌파" },
                { term: [], desc: "GS리테일" },
                { term: [], desc: "고피자와 MOU 체결" },
                { term: [], desc: "GS25" },
                { term: [], desc: "배달·픽업 주문 증정품 보관서비스 론칭" }
            ] },
            { period: "2023", details: [
                { term: [
                    "12월",
                    "GS리테일"
                ], desc: "GS SHOP" },
                { term: [
                    "11월",
                    "GS25"
                ], desc: "소비자중심경영(CCM) 7회차 재인증 획득" },
                { term: [
                    "GS25",
                    "GS리테일"
                ], desc: "GS25" },
                { term: [
                    "9월",
                    "GS25"
                ], desc: "편의점 업계 최초로 ESG 환경분야 평가 A+(매우 우수) 획득" },
                { term: [
                    "9월",
                    "GS SHOP"
                ], desc: "GS25" },
                { term: [
                    "6월",
                    "GS SHOP"
                ], desc: "ESG평가 2년 연속 'A+' 등급 획득" },
                { term: [
                    "8월",
                    "GS25"
                ], desc: "GS리테일" },
                { term: [
                    "3월",
                    "GS25"
                ], desc: "'우리동네GS' MAU 283만 돌파 (9월 기준 오프라인 유통사 앱 중 1위 기록)" },
                { term: [
                    "2월",
                    "GS25"
                ], desc: "GS SHOP" },
                { term: [
                    "2월",
                    "GS25"
                ], desc: "홈쇼핑 업계 최초 네트워크 기반 방송시스템(NDI) 구축" },
                { term: [
                    "1월",
                    "GS리테일"
                ], desc: "GS THE FRESH" },
                { term: [
                    "5월",
                    "GS리테일"
                ], desc: "400호점 돌파" },
                { term: [], desc: "GS25" },
                { term: [], desc: "'그라운드블루49' 오픈" },
                { term: [], desc: "GS리테일" },
                { term: [], desc: "통합 멤버십 출범" },
                { term: [], desc: "GS25" },
                { term: [], desc: "혜자로운 집밥(김혜자 도시락) 재출시" },
                { term: [], desc: "GS리테일" },
                { term: [], desc: "2023 대한민국 일하기 좋은 기업 선정" },
                { term: [], desc: "GS리테일" },
                { term: [], desc: "요기요와 손잡고 '요편의점' 서비스 론칭" },
                { term: [], desc: "GS25" },
                { term: [], desc: "제28회 코리아 베스트 디자인 어워드' 브랜드아이덴티티 부문 대상 수상 (GS25 갓생기획)" }
            ] },
            { period: "2022", details: [
                { term: [
                    "12월",
                    "GS리테일"
                ], desc: "GS리테일" },
                { term: [
                    "12월",
                    "GS25"
                ], desc: "GS리테일 캐비아와 전략적 제휴 체결" },
                { term: [
                    "12월",
                    "GS리테일"
                ], desc: "GS Fresh Mall" },
                { term: [
                    "11월",
                    "GS25"
                ], desc: "GS Fresh Mall 바로배달 서비스 론칭" },
                { term: [
                    "GS25",
                    "GS SHOP"
                ], desc: "GS25" },
                { term: [
                    "10월",
                    "GS SHOP"
                ], desc: "베트남GS25 200호점 돌파" },
                { term: [
                    "9월",
                    "GS25"
                ], desc: "GS THE FRESH" },
                { term: [
                    "8월",
                    "GS25"
                ], desc: "GS THE FRESH 수산물 이력제 도입" },
                { term: [
                    "8월",
                    "GS25"
                ], desc: "GS리테일" },
                { term: [
                    "7월",
                    "GS25"
                ], desc: "GS리테일 극지연구소와 기후 위기 대응 업무협약 체결" },
                { term: [
                    "6월",
                    "GS리테일"
                ], desc: "GS25" },
                { term: [
                    "4월",
                    "GS리테일"
                ], desc: "몽골GS25 100호점 오픈" },
                { term: [
                    "2월"
                ], desc: "GS25" },
                { term: [
                    "2월"
                ], desc: "GS25 유튜브 채널 '이리오너라' 업계 최초 구독자 100만 돌파" },
                { term: [
                    "5월"
                ], desc: "GS Fresh Mall" },
                { term: [
                    "1월"
                ], desc: "온라인 통합 유료 멤버십 서비스 '프라임 멤버십' 론칭(GS Fresh Mall)" },
                { term: [
                    "5월"
                ], desc: "GS25" },
                { term: [], desc: "2023 대한민국 일하기 좋은 기업 선정" },
                { term: [], desc: "GS25" },
                { term: [], desc: "편의점 최초 서울시 아동급식카드 온라인 결제 시스템 론칭" },
                { term: [], desc: "GS THE FRESH" },
                { term: [], desc: "슈퍼마켓 최초 금융혁신점포 오픈(GS THE FRESH 광진화양점)" },
                { term: [], desc: "GS25" },
                { term: [], desc: "편의점 최초 치킨 조리 로봇 도입(로보아르테 협업)" },
                { term: [], desc: "GS리테일" },
                { term: [], desc: "쿠캣 지분 인수" }
            ] },
            { period: "2021", details: [
                { term: [
                    "8월",
                    "GS리테일"
                ], desc: "GS리테일" },
                { term: [
                    "12월",
                    "GS25"
                ], desc: "GS페이 론칭" },
                { term: [
                    "12월",
                    "GS리테일"
                ], desc: "GS리테일" },
                { term: [
                    "7월",
                    "GS25"
                ], desc: "GS리테일 X GS홈쇼핑 합병" },
                { term: [
                    "GS25",
                    "GS SHOP"
                ], desc: "GS리테일" },
                { term: [
                    "5월",
                    "GS SHOP"
                ], desc: "업계 최초 ISO14001·9001동시 인증" },
                { term: [
                    "9월",
                    "GS25"
                ], desc: "GS리테일" },
                { term: [
                    "3월",
                    "GS25"
                ], desc: "GS리테일 X GS홈쇼핑 합병" },
                { term: [
                    "8월",
                    "GS25"
                ], desc: "GS리테일" },
                { term: [
                    "GS25"
                ], desc: "업계 최초 ISO14001·9001동시 인증" },
                { term: [
                    "GS리테일"
                ], desc: "GS25" },
                { term: [
                    "GS리테일"
                ], desc: "베트남 GS25 100호점 돌파" },
                { term: [], desc: "GS리테일" },
                { term: [], desc: "ESG추진위원회 출범" }
            ] },
            { period: "2020", details: [
                { term: [
                    "12월",
                    "GS리테일"
                ], desc: "GS SHOP" },
                { term: [
                    "12월",
                    "GS25"
                ], desc: "블록체인 품질이력관리시스템(b-link) 오픈" },
                { term: [
                    "12월",
                    "GS리테일"
                ], desc: "GS리테일" },
                { term: [
                    "11월",
                    "GS25"
                ], desc: "GS리테일 X GS홈쇼핑 합병" },
                { term: [
                    "11월",
                    "GS SHOP"
                ], desc: "GS리테일" },
                { term: [
                    "10월",
                    "GS SHOP"
                ], desc: "업계 최초 ISO14001·9001동시 인증" },
                { term: [
                    "9월",
                    "GS25"
                ], desc: "GS리테일" },
                { term: [
                    "9월",
                    "GS25"
                ], desc: "GS리테일-GS홈쇼핑 합병 결의" },
                { term: [
                    "8월",
                    "GS25"
                ], desc: "GS25" },
                { term: [
                    "9월",
                    "GS25"
                ], desc: "AI로봇배달 서비스 론칭" },
                { term: [
                    "8월",
                    "GS리테일"
                ], desc: "달리살다" },
                { term: [
                    "9월",
                    "GS리테일"
                ], desc: "유기농 전문몰 '달리살다' 오픈" },
                { term: [
                    "8월"
                ], desc: "GS THE FRESH" },
                { term: [
                    "9월"
                ], desc: "사회공헌형 슈퍼마켓 '내일스토어' 오픈" },
                { term: [
                    "8월"
                ], desc: "GS리테일" },
                { term: [], desc: "ESG추진위원회 출범" }
            ] },
            { period: "2020", details: [
                { term: [
                    "8월",
                    "GS리테일"
                ], desc: "GS리테일" },
                { term: [
                    "12월",
                    "GS25"
                ], desc: "배달플랫폼 사업 '우딜' 론칭" },
                { term: [
                    "12월",
                    "GS리테일"
                ], desc: "GS리테일" },
                { term: [
                    "7월",
                    "GS25"
                ], desc: "GS리테일 X GS홈쇼핑 합병" },
                { term: [
                    "GS25",
                    "GS SHOP"
                ], desc: "GS리테일" },
                { term: [
                    "6월",
                    "GS SHOP"
                ], desc: "업계 최초 ISO14001·9001동시 인증" },
                { term: [
                    "9월",
                    "GS25"
                ], desc: "GS25" },
                { term: [
                    "4월",
                    "GS25"
                ], desc: "주류 스마트오더 와인25 플러스론칭" },
                { term: [
                    "8월",
                    "GS25"
                ], desc: "GS리테일" },
                { term: [
                    "1월",
                    "GS25"
                ], desc: "업계 최초드론배송시범서비스진행" },
                { term: [
                    "9월",
                    "GS리테일"
                ], desc: "GS리테일" },
                { term: [
                    "GS리테일"
                ], desc: "GS리테일 통합멤버십 THE POP 출범" },
                { term: [], desc: "GS SHOP" },
                { term: [], desc: "군포물류센터오픈" },
                { term: [], desc: "GS25" },
                { term: [], desc: "미래형 편의점 GS25 을지스마트점오픈" }
            ] },
            { period: "2019", details: [
                { term: [
                    "11월",
                    "GS리테일"
                ], desc: "GS리테일" },
                { term: [
                    "12월",
                    "GS25"
                ], desc: "유기견 전문봉사단 'GS벳러버' 출범" },
                { term: [
                    "12월",
                    "GS리테일"
                ], desc: "GS리테일" },
                { term: [
                    "9월",
                    "GS25"
                ], desc: "GS리테일 X GS홈쇼핑 합병" },
                { term: [
                    "GS25",
                    "GS SHOP"
                ], desc: "GS리테일" },
                { term: [
                    "9월",
                    "GS SHOP"
                ], desc: "업계 최초 ISO14001·9001동시 인증" },
                { term: [
                    "GS25",
                    "GS25"
                ], desc: "GS25" },
                { term: [
                    "5월",
                    "GS25"
                ], desc: "‘나만의냉장고앱' 누적다운로드수 1000만 건돌파" },
                { term: [
                    "GS25",
                    "GS25"
                ], desc: "GS SHOP" },
                { term: [
                    "3월",
                    "GS25"
                ], desc: "친환경 배송서비스도입" },
                { term: [
                    "GS25",
                    "GS리테일"
                ], desc: "GS THE FRESH" },
                { term: [
                    "1월",
                    "GS리테일"
                ], desc: "알뜰형 수퍼오픈" },
                { term: [
                    "GS25"
                ], desc: "GS25" },
                { term: [], desc: "GS25/GS수퍼마켓 신규앱 론칭, 반값택배론칭" },
                { term: [], desc: "GS25" },
                { term: [], desc: "올플스토어 오픈" }
            ] }
        ],
    },
};
const locale = ref("ko");
const t = computed(() => langData[locale.value]);
</script>
<style scoped>
img { width: 100%; height: auto; display: block; object-fit: cover; }
.main-container { width: 100%; position: relative; display: block; }
.title_wrap { width: 100%; height: 480px; padding: 10.91% 0 11.25%; text-align: center; position: relative; display: block; background-color: transparent; background-image: url("@/assets/images/dummy/gsrab02_01.png"); background-repeat: no-repeat; background-size: cover; background-position: center -90px; }
.title_wrap::after { content: ""; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.3); position: absolute; left: 0; top: 0; z-index: 1; }
.title_wrap > h2 { color: #fff; font-weight: 700; font-size: 7.2rem; line-height: 1.24; letter-spacing: -0.02em; position: relative; z-index: 2; }
.content { width: 100%; max-width: 1460px; margin: 0 auto; padding: 0 20px 200px; position: relative; display: block; }
.sec_history { margin-top: 100px; display: grid; grid-template-columns: 460px minmax(0, 1fr); gap: 20px; align-items: start; }
.history_intro > header > p { margin: 0; color: #67676f; font-size: 2.4rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.history_intro > header > h3 { margin: 8px 0 0; font-size: 4.8rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.history_intro_images { margin: 60px 0 0; padding: 0; display: flex; flex-direction: column; gap: 20px; }
.history_intro_images > li {width:432px;  border-radius: 12px; overflow: hidden; }
.sec_history :deep(.history_period) { width: auto;}
/* .sec_history :deep(.history_detail_list) { gap: 40px; } */
.sec_history :deep(.history_detail_row) { min-height:72px; grid-template-columns: 40px minmax(0, 1fr); }
.sec_history :deep(.history_detail_content) { min-height:56px; gap:0; }
.sec_history :deep(.history_term_primary) { min-height:72px;}
.sec_history :deep.history_detail_content > dd{margin-left:12px;}


section+section{padding:200px 0 0; }
.header h3 { margin: 0; font-weight: 700; font-size: 4.8rem; line-height: 1.3; letter-spacing: -0.01em; }
.header p { margin: 16px 0 0; font-weight: 700; font-size: 2.4rem; line-height: 1.35; letter-spacing: -0.01em; }
.header.center h3, .header.center p { text-align: center; }

@media screen and (max-width: 768px) {
    .title_wrap { display: none; }
    .visual_sub { font-size: 2rem; }
    section+section{padding:60px 0 0; }
    .content { width: 100%; max-width: 100%; padding: 60px 20px 94px; }
    .sec_history { margin-top: 40px; grid-template-columns: minmax(0, 1fr); gap: 24px; }
    .history_intro > header > p { font-size: 1.6rem; line-height: 1.5; }
    .history_intro > header > h3 { margin-top: 4px; font-size: 2.8rem; line-height: 1.35; }
    .history_intro_images { margin-top: 24px; gap: 12px; }
    .header h3 { font-size: 2.4rem; text-align: left; }
    .header p { margin-top: 12px; font-weight: 400; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .header.center h3, .header.center p { text-align: left; }

}
</style>
