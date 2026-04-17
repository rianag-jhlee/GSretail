<template>
    <div class="wrap_gsrst">
        <!-- HEADER -->
        <header class="page_header" :style="{ backgroundImage: `url(${imgBg})` }">
            <div class="header_inner">
                <h2 class="header_title">GS THE FRESH 창업안내</h2>
            </div>
        </header>

        <!-- BODY -->
        <div class="sec_body">
            <!-- Depth 1: 페이지 탭 (type_01: 하단 보더 언더라인) -->
            <Tabs :tab-items="depth1Tabs" tab-class="type_01" v-model="activeD1" :tab-slide="true" />

            <!-- Depth 2: 섹션 탭 (type_02: pill 스타일) --> 
            <Tabs :tab-items="depth2Tabs" tab-class="type_02" v-model="activeD2" :tab-slide="true"/>

            <!-- Depth 3: 타입 탭 (신규) -->
            <div class="tab_d3_wrap">
                <div class="inner">
                    <nav class="tab_type" role="tablist" aria-label="가맹 타입">
                        <button
                            v-for="(tab, i) in depth3Tabs"
                            :key="i"
                            type="button"
                            role="tab"
                            :class="{ active: activeD3 === i }"
                            :aria-selected="activeD3 === i"
                            @click="activeD3 = i"
                        >{{ tab.item }}</button>
                    </nav>
                </div>
            </div>

            <!-- 콘텐츠 영역 -->
            <div class="tab_content_wrap">
                <!-- GSF1타입 (228:18909) -->
                <div v-show="activeD3 === 0" class="tab_content" role="tabpanel">
                    <p class="type_info_bar">GSF1타입 - 본부가 임차하여 경영주 운영</p>
                    <div class="type_table_wrap">
                        <table class="type_table">
                            <colgroup>
                                <col class="col_item_main" />
                                <col class="col_item_sub" />
                                <col class="col_cost" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th colspan="2" scope="col">항목</th>
                                    <th scope="col">비용</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th rowspan="5" scope="rowgroup">투자 금액</th>
                                    <th>가맹비</th>
                                    <td>1,100만원 <br class="m_br">(부가세포함)</td>
                                </tr>
                                <tr>
                                    <th>초기 상품대</th>
                                    <td>7,000만원</td>
                                </tr>
                                <tr>
                                    <th>소모품</th>
                                    <td>700만원</td>
                                </tr>
                                <tr>
                                    <th>시설보증금</th>
                                    <td>500만원</td>
                                </tr>
                                <tr>
                                    <th>개점투자 계</th>
                                    <td>9,300만원</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">임차비용 부담주체</th>
                                    <td>본부</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">시설투자 부담주체</th>
                                    <td>본부</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">예치보증금</th>
                                    <td>10,000만원 (보증보험 또는 현금)</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">경영주 투자 합계</th>
                                    <td>최소 19,300만원</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">가맹 수수료 <br class="m_br">(부가세별도)</th>
                                    <td>57% 매출총이익 구간별 52% ~ 62%</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">계약기간 <br class="m_br">(최초/재계약)</th>
                                    <td>3년 / 3년 단위</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">담보설정</th>
                                    <td>없음</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">** 최저 <br class="m_br">수입 보조금</th>
                                    <td>영업면적 200평  <br class="m_br">초과 : 18백만/월 영업면적 165평 이상~200평 이하 : 16백만/월 영업면적 165평 미만 : 13백만/월</td>
                                </tr>
                            </tbody>
                        </table>
                        <ul class="list_caution">
                            <li>
                                <p>*경영주 총수입(경영주 월매출총이익 + 본부지원금) 기준이며, 인건비 등 영업비용 차감 전 입니다. (개점일로부터 최소 1년만 적용)</p>
                            </li>
                        </ul>
                    </div>
                    <div class="type_graph_wrap">
                        <strong>GSF1타입</strong>
                        <ul class="type_graph_inner">
                            <li class="type_graph_item">
                                <p>매출이익<br class="p_br" />배분율</p>
                                <picture>
                                    <source media="(max-width: 768px)" :srcset="imgGph01Mo" />
                                    <img :src="imgGph01" alt="GSF1타입 매출이익 배분율" />
                                </picture>
                            </li>
                            <li class="type_graph_item">
                                <p>월매출<br class="p_br" />총 이익 구간</p>
                                <picture>
                                    <source media="(max-width: 768px)" :srcset="imgGph02Mo" />
                                    <img :src="imgGph02" alt="GSF1타입 월매출 총 이익 구간" />
                                </picture>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- GSF2타입 / GSF3타입: 추후 구현 -->
                <div v-show="activeD3 === 1" class="tab_content" role="tabpanel">
                    <p class="type_info_bar">GSF2타입 - 경영주가 총투자비의 51% 부담. 경영주 운영</p>
                    <div class="type_table_wrap">
                        <table class="type_table">
                            <colgroup>
                                <col class="col_item_main" />
                                <col class="col_item_sub" />
                                <col class="col_cost" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th colspan="2" scope="col">항목</th>
                                    <th scope="col">비용</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th rowspan="5" scope="rowgroup">투자 금액</th>
                                    <th>가맹비</th>
                                    <td>1,100만원 <br class="m_br">(부가세 포함)</td>
                                </tr>
                                <tr>
                                    <th>초기 상품대</th>
                                    <td>7,000만원</td>
                                </tr>
                                <tr>
                                    <th>소모품</th>
                                    <td>700만원</td>
                                </tr>
                                <tr>
                                    <th>시설보증금</th>
                                    <td>500만원</td>
                                </tr>
                                <tr>
                                    <th>개점투자 계</th>
                                    <td>9,300만원</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">임차비용 부담주체</th>
                                    <td>본부</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">시설투자 부담주체</th>
                                    <td>본부</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">예치보증금</th>
                                    <td>* 점포 총 투자비 X 51% ~ 9,300만원 (현금)</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">경영주 투자 합계</th>
                                    <td>9,300만원 + 예치보증금</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">가맹 수수료 <br class="m_br">(부가세별도)</th>
                                    <td>49% 매출총이익 구간별 49% ~ 55%</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">계약기간 <br class="m_br">(최초/재계약)</th>
                                    <td>3년 / 3년 단위</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">담보설정</th>
                                    <td>없음</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">** 최저 <br class="m_br">수입 보조금</th>
                                    <td>영업면적 200평  <br class="m_br">초과 : 18백만/월 영업면적 165평 이상~200평 이하 : 16백만/월 영업면적 165평 미만 : 13백만/월</td>
                                </tr>
                            </tbody>
                        </table>
                        <ul class="list_caution">
                            <li><p>*점포 총 투자비는 임차비용, 시설투자비용, 개점투자비의 총 합산액.</p></li>
                            <li><p>**경영주 총수입(경영주 월매출총이익 + 본부지원금) 기준이며, 인건비 등 영업비용 차감 전 입니다. (개점일로부터 최소 1년만 적용)</p></li>
                        </ul>
                    </div>
                    <div class="type_graph_wrap">
                        <strong>GSF2타입</strong>
                        <ul class="type_graph_inner">
                            <li class="type_graph_item">
                                <p>매출이익<br class="p_br" />배분율</p>
                                <picture>
                                    <source media="(max-width: 768px)" :srcset="imgGph03Mo" />
                                    <img :src="imgGph03" alt="GSF1타입 매출이익 배분율" />
                                </picture>
                            </li>
                            <li class="type_graph_item">
                                <p>월매출<br class="p_br" />총 이익 구간</p>
                                <picture>
                                    <source media="(max-width: 768px)" :srcset="imgGph04Mo" />
                                    <img :src="imgGph04" alt="GSF1타입 월매출 총 이익 구간" /> 
                                </picture>
                            </li>
                        </ul>        
                    </div>
                    <ul class="list_caution">
                        <li><p class="txt_warning">*가맹계약 체결 간 가맹점사업자와 가맹본부가 협의에 따라 가맹수수료는 달리 정할 수 있습니다</p></li>
                    </ul>
                </div>
                <div v-show="activeD3 === 2" class="tab_content" role="tabpanel">
                    <p class="type_info_bar">GSF3타입 - 경영주가 임차하여 경영주 운영</p>
                    <div class="type_table_wrap">
                        <table class="type_table">
                            <colgroup>
                                <col class="col_item_main" />
                                <col class="col_item_sub" />
                                <col class="col_cost" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th colspan="2" scope="col">항목</th>
                                    <th scope="col">비용</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th rowspan="5" scope="rowgroup">투자 금액</th>
                                    <th>가맹비</th>
                                    <td>1,100만원 <br class="m_br">(부가세 포함)</td>
                                </tr>
                                <tr>
                                    <th>초기 상품대</th>
                                    <td>7,000만원</td>
                                </tr>
                                <tr>
                                    <th>소모품</th>
                                    <td>700만원</td>
                                </tr>
                                <tr>
                                    <th>시설보증금</th>
                                    <td>500만원</td>
                                </tr>
                                <tr>
                                    <th>개점투자 계</th>
                                    <td>9,300만원</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">임차비용 부담주체</th>
                                    <td>경영주</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">시설투자 부담주체</th>
                                    <td>본부</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">예치보증금</th>
                                    <td>없음</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">경영주 투자 합계</th> 
                                    <td>9,300만원 + 예치보증금</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">가맹 수수료 <br class="m_br">(부가세별도)</th>
                                    <td>24%</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">계약기간 <br class="m_br">(최초/재계약)</th>
                                    <td>5년 / 5년 단위%</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">담보설정</th>
                                    <td>최소 2억 이상</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">** 최저 <br class="m_br">수입 보조금</th>
                                    <td>해당사항 없음</td>
                                </tr>
                            </tbody>
                        </table>
                        <ul class="list_caution">
                            <li><p>*경영주 총수입(경영주 월매출총이익 + 본부지원금) 기준이며, 인건비 등 영업비용 차감 전 입니다. <br class="mo"/>(개점일로부터 최소 1년만 적용)</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Tabs from "@/components/Tabs.vue";
import imgBg from "@/assets/images/dummy/gsrst01010101_bg.png";
import imgGph01 from "@/assets/images/dummy/gsrst01010101_gph_01.png";
import imgGph01Mo from "@/assets/images/dummy/mo/gsrst01010101_gph_01_mo.png";
import imgGph02 from "@/assets/images/dummy/gsrst01010101_gph_02.png";
import imgGph02Mo from "@/assets/images/dummy/mo/gsrst01010101_gph_02_mo.png";
import imgGph03 from "@/assets/images/dummy/gsrst01010101_gph_03.png";
import imgGph03Mo from "@/assets/images/dummy/mo/gsrst01010101_gph_03_mo.png";
import imgGph04 from "@/assets/images/dummy/gsrst01010101_gph_04.png";
import imgGph04Mo from "@/assets/images/dummy/mo/gsrst01010101_gph_04_mo.png";
const activeD1 = ref(0);
const activeD2 = ref(0);
const activeD3 = ref(0);

const depth1Tabs = [
    { item: "GS THE FRESH 창업 알아보기" },
    { item: "사업설명회" },
    { item: "추천 점포 찾기" },
    { item: "경영주 지원제도" },
    { item: "상담 및 신청" },
    { item: "가맹계약시스템" },
];

const depth2Tabs = [
    { item: "가맹 조건 안내" },
    { item: "가맹/창업 절차" },
    { item: "창업 전 필수 확인사항" },
];

const depth3Tabs = [
    { item: "GSF1타입" },
    { item: "GSF2타입" },
    { item: "GSF3타입" },
];
</script>

<style scoped>
.txt_warning{color:#ED3030 !important;}
:deep(.m_br) { display: none; }
:deep(.p_br) { display: block; }
/* ── HEADER ── */
.page_header { width: 100%; height: 480px; background-size: cover; background-position: center; position: relative; display: flex; align-items: center; justify-content: center; }
.page_header::before { width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); content: ''; position: absolute; top: 0; left: 0; }
.header_inner { position: relative; z-index: 1; text-align: center; }
.header_title { color: #fff; font-size: 7.2rem; font-weight: 700; letter-spacing: -0.02em; line-height: 1.24; }

/* ── BODY ── */
.sec_body { max-width: 1460px; margin: 0 auto; padding: 0 20px; }

/* depth3 */
.tab_d3_wrap { padding-top: 64px; }
.tab_type { display: flex; border: 1px solid #c4c4d0; border-radius: 4px; overflow: hidden; }
.tab_type > button { flex: 1; height: 60px; color: #90909a; font-size: 1.8rem;  background-color: #fff; border: none; border-right: 1px solid #c4c4d0; cursor: pointer; transition: background-color 0.2s, color 0.2s; }
.tab_type > button:last-child { border-right: none; }
.tab_type > button.active { background-color: #15B874; color: #fff; border:0;}

/* ── 콘텐츠 영역 ── */
.tab_content_wrap { padding-top: 40px; padding-bottom: 200px; }

/* type_info_bar */
.type_info_bar {padding: 17px 24px; background-color: #e8f8f1; border: 1px solid #d2ede2; border-radius: 6px; color: #11935d; font-size: 1.8rem; line-height: 1.4;}

/* type_table */
.type_table_wrap { margin-top: 20px; overflow-x: auto; border-top: 1px solid #161616;}
.type_table { width: 100%; border-collapse: collapse; }
.type_table .col_item_main { width: 177px; }
.type_table .col_item_sub { width: 177px; }
.type_table .col_cost { width: auto; }
.type_table thead th { padding:28px 24px; background-color: #f8f8f8; border: 1px solid #e5e5e9; font-size: 1.8rem; text-align: center; line-height: 1.4; }
.type_table tbody th { padding:12px 24px; background-color: #f8f8f8; border: 1px solid #e5e5e9; font-size: 1.8rem; font-weight: 400;text-align: left;line-height: 1.4;}
.type_table tbody td { border-bottom: 1px solid #e5e5e9; font-size: 1.8rem; text-align: center; padding: 12px 24px; line-height: 1.4; }


.list_caution {margin-top:16px;}
.list_caution > li + li{margin-top:8px;}
.list_caution > li > p {color:#67676F;font-size: 1.6rem;line-height: 1.5;letter-spacing: -0.01em;}
/* type_graph */
.type_graph_wrap { margin-top: 60px; padding: 64px; background-color: #f8f8f8; border-radius: 12px; }
.type_graph_wrap > strong { display: block; font-size: 3.2rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.type_graph_inner { margin-top: 40px; padding-right:56px;display: flex; flex-direction: column;align-items: flex-end; gap: 28px; }
.type_graph_item { display: flex; gap: 54px; align-items: center; justify-content: flex-end; }
.type_graph_item:nth-child(2){justify-self: flex-start;}
.type_graph_item > p { font-size: 2rem; line-height: 1.35; letter-spacing: -0.01em; text-align: right; }
.type_graph_item > picture { flex:1;display: block; }
.type_graph_item img { display: block; max-width: 100%; }

.type_graph_wrap + .list_caution {margin-top:32px;}

/* ── Tablet ── */
@media (max-width: 1024px) {
    .page_header { height: 360px; }
    .header_title { font-size: 5.2rem; }
    .tab_type > button { font-size: 1.6rem; }
    .type_info_bar { font-size: 1.6rem; }
    .type_table thead th { font-size: 1.6rem; }
    .type_table tbody th,
    .type_table tbody td { font-size: 1.6rem; }
    .type_graph_wrap { padding: 48px; }
    .type_graph_wrap > strong { font-size: 2.8rem; }
    .type_graph_item { gap: 32px; }
    .type_graph_item > p { font-size: 1.8rem; }
}

/* ── Mobile ── */
@media (max-width: 768px) {
    :deep(.m_br) { display: block; }
    :deep(.p_br) { display: none; }
    .page_header { height: 260px; }
    .header_title { font-size: 3.6rem; }
    .tab_d3_wrap { padding-top: 60px; }
    .tab_type > button { height: 48px; font-size: 1.4rem; }
    .tab_content_wrap { padding-top: 24px; padding-bottom: 100px; }
    .type_info_bar { height: auto; min-height: 48px; padding: 12px 16px; font-size: 1.4rem; }
    /* .type_table { min-width: 600px; } */
    .type_table_wrap{margin-top: 24px;}
    .type_table .col_item_main { width: 42px; }
    .type_table .col_item_sub { width: 120px; }
    .type_table thead th { padding:18px 0; font-size: 1.6rem;line-height: 1.24; }
    .type_table tbody th,.type_table tbody td{padding: 15px 24px; font-size: 1.6rem;  line-height: 1.5; }
    .type_table tbody th:first-child{padding-left: 14px;padding-right: 14px;}
    .type_graph_wrap { margin-top: 80px; padding: 40px 20px; }
    .type_graph_wrap > strong { font-size: 2rem; line-height: 1.32;letter-spacing: -0.01em;}
    .type_graph_inner { margin-top: 30px; padding-right:0; align-items: flex-start; gap: 20px; }
    .type_graph_item { flex-direction: column; align-items: flex-start; justify-content: flex-start; gap: 16px; }
    .type_graph_item > p { font-size: 1.6rem; text-align: left; }
    .type_graph_wrap + .list_caution {margin-top:16px;}
}
</style>
