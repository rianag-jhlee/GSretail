<template>
    <div class="main-container">
        <div class="title_wrap ac">
            <h2 class="page-title">{{ t.MainTitle }}</h2>
            <p class="visual-sub">{{ t.MainsubTitle }}</p>
        </div>

        <section class="section-investor">
            <div class="cont_inner">
                <Tabs v-model="CTabIdx" :tab-items="t.Tabs1" tab-class="type_01" :tab-slide="true" @change="onTabChange1" />
                
                <p :class="['title-sub-text', { 'is_dividend': CTabIdx === 1 }]" v-html="t.MainDesc[CTabIdx]"></p>

                <div class="tab_content_wrap">
                    <section class="tab_content gsrin0201" v-if="CTabIdx === 0" :aria-label="t.Tabs1[0].item">
                        
                        <div class="performance_charts">
                            <div class="chart_grid">
                                <div class="chart_item" v-for="(chart, idx) in t.PerformanceCharts" :key="'chart-'+idx">
                                    <div class="chart_header">
                                        <h3 class="chart_title">{{ chart.title }}</h3>
                                        <span class="unit">{{ chart.unit }}</span>
                                    </div>
                                    <div class="chart_img">
                                        <picture>
                                            <source :srcset="require(`@/assets/images/dummy/${chart.imgName}_mo.png`)" media="(max-width: 767px)">
                                            <img :src="require(`@/assets/images/dummy/${chart.imgName}.png`)" :alt="chart.title">
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="table_section mt100">
                            <div class="table_header">
                                <h3 class="section-sub-title">{{ t.TableTitle1 }}</h3>
                                <span class="unit">{{ t.UnitMillion }}</span>
                            </div>
                            <div class="policy_wrap mt40">
                                <table class="base_table">
                                    <colgroup>
                                        <col style="width: 150px;">
                                        <col style="width: 200px;">
                                        <col style="width: auto;">
                                        <col style="width: auto;">
                                        <col style="width: auto;">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th scope="col" colspan="2" class="ac">구분</th>
                                            <th scope="col" class="ac">2023</th>
                                            <th scope="col" class="ac">2024</th>
                                            <th scope="col" class="ac">2025</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th rowspan="2" scope="rowgroup" class="ac border_right">자산</th>
                                            <td class="ac border_right">유동자산</td>
                                            <td class="ar">{{ t.FSD.Asset.Current[0] }}</td>
                                            <td class="ar">{{ t.FSD.Asset.Current[1] }}</td>
                                            <td class="ar">{{ t.FSD.Asset.Current[2] }}</td>
                                        </tr>
                                        <tr>
                                            <td class="ac border_right">비유동자산</td>
                                            <td class="ar">{{ t.FSD.Asset.NonCurrent[0] }}</td>
                                            <td class="ar">{{ t.FSD.Asset.NonCurrent[1] }}</td>
                                            <td class="ar">{{ t.FSD.Asset.NonCurrent[2] }}</td>
                                        </tr>
                                        <tr class="bg_light bold">
                                            <td class="ac border_right" colspan="2">자산총계</td>
                                            <td class="ar fc_red">{{ t.FSD.Asset.Total[0] }}</td>
                                            <td class="ar fc_red">{{ t.FSD.Asset.Total[1] }}</td>
                                            <td class="ar fc_red">{{ t.FSD.Asset.Total[2] }}</td>
                                        </tr>

                                        <tr>
                                            <th rowspan="2" scope="rowgroup" class="ac border_right">부채</th>
                                            <td class="ac border_right">유동부채</td>
                                            <td class="ar">{{ t.FSD.Debt.Current[0] }}</td>
                                            <td class="ar">{{ t.FSD.Debt.Current[1] }}</td>
                                            <td class="ar">{{ t.FSD.Debt.Current[2] }}</td>
                                        </tr>
                                        <tr>
                                            <td class="ac border_right">비유동부채</td>
                                            <td class="ar">{{ t.FSD.Debt.NonCurrent[0] }}</td>
                                            <td class="ar">{{ t.FSD.Debt.NonCurrent[1] }}</td>
                                            <td class="ar">{{ t.FSD.Debt.NonCurrent[2] }}</td>
                                        </tr>
                                        <tr class="bg_light bold">
                                            <td class="ac border_right" colspan="2">부채총계</td>
                                            <td class="ar fc_red">{{ t.FSD.Debt.Total[0] }}</td>
                                            <td class="ar fc_red">{{ t.FSD.Debt.Total[1] }}</td>
                                            <td class="ar fc_red">{{ t.FSD.Debt.Total[2] }}</td>
                                        </tr>

                                        <tr>
                                            <th rowspan="2" scope="rowgroup" class="ac border_right">자본</th>
                                            <td class="ac border_right">자본금</td>
                                            <td class="ar">{{ t.FSD.Capital.Base[0] }}</td>
                                            <td class="ar">{{ t.FSD.Capital.Base[1] }}</td>
                                            <td class="ar">{{ t.FSD.Capital.Base[2] }}</td>
                                        </tr>
                                        <tr>
                                            <td class="ac border_right">이익잉여금 등</td>
                                            <td class="ar">{{ t.FSD.Capital.Profit[0] }}</td>
                                            <td class="ar">{{ t.FSD.Capital.Profit[1] }}</td>
                                            <td class="ar">{{ t.FSD.Capital.Profit[2] }}</td>
                                        </tr>
                                        <tr class="bg_light bold">
                                            <td class="ac border_right" colspan="2">자본총계</td>
                                            <td class="ar fc_red">{{ t.FSD.Capital.Total[0] }}</td>
                                            <td class="ar fc_red">{{ t.FSD.Capital.Total[1] }}</td>
                                            <td class="ar fc_red">{{ t.FSD.Capital.Total[2] }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="table_section mt100">
                            <div class="table_header">
                                <h3 class="section-sub-title">{{ t.TableTitle2 }}</h3>
                                <span class="unit">{{ t.UnitMillion }}</span>
                            </div>
                            <div class="policy_wrap mt40">
                                <table class="base_table">
                                    <colgroup>
                                        <col style="width: 350px;">
                                        <col style="width: auto;">
                                        <col style="width: auto;">
                                        <col style="width: auto;">
                                    </colgroup>
                                    <thead>
                                        <tr class="bold">
                                            <th scope="col" class="ac">구분</th>
                                            <th scope="col" class="ac">2023</th>
                                            <th scope="col" class="ac">2024</th>
                                            <th scope="col" class="ac">2025</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bold">
                                            <th scope="row" class="ac">매출액</th>
                                            <td class="ar">{{ t.ISD.Sales[0] }}</td>
                                            <td class="ar">{{ t.ISD.Sales[1] }}</td>
                                            <td class="ar">{{ t.ISD.Sales[2] }}</td>
                                        </tr>
                                        <tr class="bold">
                                            <th scope="row" class="ac">매출총이익</th>
                                            <td class="ar">{{ t.ISD.GrossProfit[0] }}</td>
                                            <td class="ar">{{ t.ISD.GrossProfit[1] }}</td>
                                            <td class="ar">{{ t.ISD.GrossProfit[2] }}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="ac">판매비와 관리비 등</th>
                                            <td class="ar">{{ t.ISD.SGA[0] }}</td>
                                            <td class="ar">{{ t.ISD.SGA[1] }}</td>
                                            <td class="ar">{{ t.ISD.SGA[2] }}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="ac">영업이익</th>
                                            <td class="ar">{{ t.ISD.OperatingIncome[0] }}</td>
                                            <td class="ar">{{ t.ISD.OperatingIncome[1] }}</td>
                                            <td class="ar">{{ t.ISD.OperatingIncome[2] }}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="ac">기타손익</th>
                                            <td class="ar">{{ t.ISD.OtherIncome[0] }}</td>
                                            <td class="ar">{{ t.ISD.OtherIncome[1] }}</td>
                                            <td class="ar">{{ t.ISD.OtherIncome[2] }}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="ac">금융손익</th>
                                            <td class="ar">{{ t.ISD.FinancialIncome[0] }}</td>
                                            <td class="ar">{{ t.ISD.FinancialIncome[1] }}</td>
                                            <td class="ar">{{ t.ISD.FinancialIncome[2] }}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="ac">지분법손익</th>
                                            <td class="ar">{{ t.ISD.EquityMethod[0] }}</td>
                                            <td class="ar">{{ t.ISD.EquityMethod[1] }}</td>
                                            <td class="ar">{{ t.ISD.EquityMethod[2] }}</td>
                                        </tr>
                                        <tr class="bold">
                                            <th scope="row" class="ac">법인세비용 차감전순이익</th>
                                            <td class="ar">{{ t.ISD.IncomeBeforeTax[0] }}</td>
                                            <td class="ar">{{ t.ISD.IncomeBeforeTax[1] }}</td>
                                            <td class="ar">{{ t.ISD.IncomeBeforeTax[2] }}</td>
                                        </tr>
                                        <tr class="bg_light bold">
                                            <td scope="row" class="ac">당기순이익</td>
                                            <td class="ar fc_red">{{ t.ISD.NetIncome[0] }}</td>
                                            <td class="ar fc_red">{{ t.ISD.NetIncome[1] }}</td>
                                            <td class="ar fc_red">{{ t.ISD.NetIncome[2] }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- gsrin0202 -->
                    <section class="tab_content gsrin0202" v-if="CTabIdx === 1" :aria-label="t.Tabs1[1].item">
                        <p class="policy_desc" v-html="t.DividendPolicyDesc"></p>
                        <div class="table_section mt100">
                            <div class="table_header">
                                <h3 class="section-sub-title">{{ t.TableTitle3 }}</h3>
                            </div>
                            <div class="table_info_group">
                                <span class="unit">{{ t.Recent5Years }}</span>
                                <span class="unit ml20">{{ t.UnitMillion }}</span>
                            </div>
                            
                            <div class="policy_wrap mt40">
                                <table class="base_table">
                                    <colgroup>
                                        <col style="width: 150px;">
                                        <col style="width: auto;">
                                        <col style="width: auto;">
                                        <col style="width: auto;">
                                        <col style="width: auto;">
                                        <col style="width: auto;">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th scope="col" class="ac">년도</th>
                                            <th scope="col" class="ac" v-for="year in t.DividendYears" :key="year">{{ year }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row" class="ac">배당총액</th>
                                            <td class="ar" v-for="(val, idx) in t.DividendData.TotalAmount" :key="'total-'+idx">{{ val }}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="ac">배당종류</th>
                                            <td class="ac" v-for="(val, idx) in t.DividendData.Type" :key="'type-'+idx">{{ val }}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="ac">주당 배당금</th>
                                            <td class="ar" v-for="(val, idx) in t.DividendData.PerShare" :key="'per-'+idx">{{ val }}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="ac">배당성향</th>
                                            <td class="ar" v-for="(val, idx) in t.DividendData.Propensity" :key="'prop-'+idx">{{ val }}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="ac">배당수익률</th>
                                            <td class="ar" v-for="(val, idx) in t.DividendData.Yield" :key="'yield-'+idx">{{ val }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </section>

                    <!-- gsrin0203 -->
                    <section class="tab_content gsrin0203" v-if="CTabIdx === 2" :aria-label="t.Tabs1[2].item">

                        <div class="search_filter_area">
                            <Search 
                                v-model="searchData" 
                                :search_opt="t.options"  @search="handleSearch"
                            />
                        </div>

                        <div class="table_container">
                            <div class="policy_wrap mt24">
                                <table class="base_table ir_table">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="ac">번호</th>
                                            <th scope="col" class="ac">제목</th>
                                            <th scope="col" class="ac">다운로드</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, idx) in t.IRListData" :key="'ir-'+idx">
                                            <td class="ac border_right">{{ item.id }}</td>
                                            <td class="al border_right">
                                                <a href="javascript:void(0);" class="link_title">{{ item.title }}</a>
                                            </td>
                                            <td class="ac">
                                                <button type="button" class="btn_download_file" @click="handleDownload(item.link)">
                                                    <span class="file_type_text">PDF</span>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <Pagination 
                                v-model="currentPage" 
                                :total-pages="10" 
                                @change="onPageChange" 
                            />
                        </div>

                    </section>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import Search from "@/components/Search.vue"; // Search 추가
import Pagination from "@/components/Pagination.vue";

export default {
    name: "gsrin0201",
    components: { Tabs, Search, Pagination },
    props: { lang: { type: String, default: "ko" } },
    data() {
        return {
            CTabIdx: 0,
            searchData: {
                type: "all",
                keyword: ""
            },
            langData: {
                ko: {
                    MainTitle: "경영성과",
                    MainsubTitle: "Business Performance",
                    MainDesc: ["투명한 GS리테일 경영성과 입니다.", "배당정책", "투명한 GS리테일 경영성과 입니다."],
                    Tabs1: [{ item: "재무현황" }, { item: "배당 정보" }, { item: "실적자료 등" }],
                    UnitMillion: "(단위 : 백만원)",
                    TableTitle1: "요약 연결재무상태표",
                    TableTitle2: "요약 연결손익계산서",
                    FSD: {
                        Asset: {
                            Current: ["1,857,062", "1,481,155", "1,797,888"],
                            NonCurrent: ["8,184,954", "6,100,488", "5,685,209"],
                            Total: ["10,042,016", "7,581,643", "7,483,097"]
                        },
                        Debt: {
                            Current: ["2,688,039", "1,898,446", "1,995,791"],
                            NonCurrent: ["2,920,238", "2,501,679", "2,211,212"],
                            Total: ["5,608,277", "4,400,125", "4,207,003"]
                        },
                        Capital: {
                            Base: ["104,718", "83,607", "83,607"],
                            Profit: ["4,329,021", "3,097,911", "3,192,488"],
                            Total: ["4,433,739", "3,181,518", "3,276,095"]
                        }
                    },
                    ISD: {
                        Sales: ["11,080,326", "11,579,430", "11,957,422"],
                        GrossProfit: ["2,829,457", "2,879,228", "2,911,663"],
                        SGA: ["2,515,001", "2,623,102", "2,619,543"],
                        OperatingIncome: ["314,456", "256,126", "292,120"],
                        OtherIncome: ["-7,522", "-52,690", "-62,857"],
                        FinancialIncome: ["-67,586", "-122,055", "-38,128"],
                        EquityMethod: ["-154,794", "-40,445", "-101,903"],
                        IncomeBeforeTax: ["84,554", "40,935", "89,231"],
                        NetIncome: ["22,148", "9,792", "50,239"]
                    },
                    PerformanceCharts: [
                        { title: "매출액", unit: "(단위 : 억원)", imgName: "gsrin0201_chat_1" },
                        { title: "영업이익", unit: "(단위 : 억원)", imgName: "gsrin0201_chat_2" },
                        { title: "당기 순이익", unit: "(단위 : 억원)", imgName: "gsrin0201_chat_3" },
                        { title: "총자산", unit: "(단위 : 억원)", imgName: "gsrin0201_chat_4" }
                    ],
                    // [배당 정보 전용 데이터]
                    DividendPolicyDesc: "주주가치 제고를 위하여 배당을 지속적으로 실시해 오고 있으며, 배당 규모는 향후 회사의 지속적인 성장을 위한 투자와 경영실적 및 Cash-flow 상황 등을 전반적으로 고려하여 결정하고 있습니다.<br/><br/>배당금은 비경상 손익을 제외한 (지배지분)연결당기순이익 중 40% 수준에서 배당금 산정이 적정하다고 판단하여, 향후에도 40%수준의 배당성향을 유지할 계획입니다.",
                    TableTitle3: "투명한 GS리테일 경영성과 입니다.",
                    Recent5Years: "(최근 5개년 기준)",
                    DividendYears: ["2025", "2024", "2023", "2022", "2021"],
                    DividendData: {
                        TotalAmount: ["50,139,354,000", "41,782,795,000", "51,719,128,000", "43,937,410,750", "122,616,030,000"],
                        Type: ["현금", "현금", "현금", "현금", "현금"],
                        PerShare: ["600", "500", "500", "430", "1,200"],
                        Propensity: ["115.4", "1,639.8", "292.6", "108.7", "15.0"],
                        Yield: ["2.7", "3.3", "2.1", "1.5", "3.9"]
                    },
                    IRListData: [
                        { id: "60", title: "2025년 4분기 경영실적", fileUrl: "#" },
                        { id: "59", title: "2025년 3분기 경영실적", fileUrl: "#" },
                        { id: "58", title: "2025년 2분기 경영실적", fileUrl: "#" },
                        { id: "57", title: "2025년 1분기 경영실적", fileUrl: "#" },
                        { id: "56", title: "2024년 4분기 경영실적", fileUrl: "#" },
                        { id: "55", title: "2024년 3분기 경영실적", fileUrl: "#" },
                        { id: "54", title: "2024년 2분기 경영실적", fileUrl: "#" },
                        { id: "53", title: "(주)GS리테일 인적분할 설명자료", fileUrl: "#" },
                        { id: "52", title: "2024년 1분기 경영실적", fileUrl: "#" },
                        { id: "51", title: "2023년 4분기 경영실적", fileUrl: "#" }
                    ],
                    options: [
                        { value: "all", label: "전체" },   // 'val'이 아니라 반드시 'value'
                        { value: "title", label: "제목" }, // 'txt'가 아니라 반드시 'label'
                        { value: "content", label: "내용" }
                    ]

                }
            }
        };
    },
    computed: { t() { return this.langData[this.lang] || this.langData.ko; } },
    methods: { 
        onTabChange1(idx) { this.CTabIdx = idx; },
        handleSearch(val) { //[검색] 버튼 클릭 시 실행 이벤트
            console.log("검색 실행:", val);
            this.currentPage = 1;
        }
    
    }
};
</script>

<style scoped>
.main-container { width: 100%; position: relative; }
.title_wrap { width: 100%; height: 480px; padding: 10.91% 0 11.25%; background: url('/src/assets/images/dummy/gsrin0201_bg.png') no-repeat center / cover; text-align: center; position: relative; display: block;}
.page-title { color: #FFFFFF; font-size: 72px; font-weight: 700; text-align: center; }
.visual-sub { margin-top: 10px; color: #FFFFFF; font-size: 32px; font-weight: 700; text-align: center; }
.cont_inner { width: 100%; max-width: 1420px; margin: 0 auto; padding-bottom: 200px; }
.title-sub-text { width: 100%; padding: 100px 0; color: #161618; font-size: 48px; font-weight: 700; text-align: center; line-height: 1.4; }
.title-sub-text.is_dividend {padding-bottom: 16px; padding-top: 100px; text-align:left; }

/* Charts */
.performance_charts { width: 100%; }
.chart_grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; }
.chart_item { width: 100%; display: flex; flex-direction: column; gap: 40px; }
.chart_header { display: flex; align-items: flex-end; justify-content:space-between; }
.chart_title { font-size: 40px; font-weight: 700; color: #161618; }
.unit { font-size: 16px; color: #67676f; }
.chart_img img { width: 100%; height: auto; }


/* 배당정책 설명 */
.dividend_policy_info { width: 100%; text-align: left; }
.section-sub-title { font-size: 48px; font-weight: 700; color: #161616; margin-bottom: 16px; letter-spacing: -0.48px; }
.policy_desc { font-size: 24px; color: #161616; line-height: 1.5; letter-spacing: -0.24px; word-break: keep-all; }
.table_info_group {display:flex; justify-content:space-between;}

/* Table 스타일 */
.policy_wrap table {width: 100%; border-collapse: collapse; border-top: 2px solid #161616; border-left: 0 !important; border-right: 0 !important; }
.policy_wrap th, .policy_wrap td {padding: 18px 24px; border: 1px solid #e5e5e9; font-size: 1.8rem; line-height: 1.4; vertical-align: middle;}
.policy_wrap th:first-child, .policy_wrap td:first-child { border-left: 0; }
.policy_wrap th:last-child, .policy_wrap td:last-child { border-right: 0; }
.policy_wrap thead th { background-color: #f8f8f8; color: #161618; font-weight: 700; }
.policy_wrap tbody th { background-color: #ffffff; font-weight: 400; }
.border_right { border-right: 1px solid #e5e5e9; }
.table_header {display:flex; justify-content:space-between; align-items:flex-end;}
.table_header h3 {font-size:40px;}
.gsrin0203 .policy_wrap td {height: 82px; color: #161616; border-left:0; border-right:0; }
.gsrin0203 .policy_wrap th {border-left:0; border-right:0;}
.policy_wrap td a {font-size:18px;}
/* 강조 스타일 */
.bg_light { background-color: #f8f8f8 !important; }
.fc_red { color: #ed3030 !important; }
tr.bold td, tr.bold th { font-weight: 700 !important; }

/* 미디어 쿼리 */
@media screen and (max-width: 1024px) {
    .cont_inner { padding-left: 20px; padding-right: 20px; }
    .gsrin0201 .policy_wrap, .gsrin0201 .base_table  { overflow-x: auto; }
    .gsrin0201 .base_table, .gsrin0202 .base_table { min-width:1000px; }
}
@media screen and (max-width: 767px) {
    /* 요청하신 모바일 수정 사항 */
    .cont_inner {padding:0 20px;}
    h3 { font-size: 24px !important; }
    .unit { font-size: 14px !important; }
    .title_wrap { display: none !important; }
    .gsrin0201 .policy_wrap, .gsrin0201 .base_table  { overflow-x: auto; }
    .gsrin0201 .base_table, .gsrin0202 .base_table { min-width: 800px; }

    /* 차트 영역 1열 배치 */
    .chart_grid { grid-template-columns: 1fr; } 
    .title-sub-text { font-size: 24px; padding: 60px 0; }
    .policy_wrap th, .policy_wrap td { padding: 12px 15px; font-size: 14px; }
    .gsrin0203 .policy_wrap th:first-child, .gsrin0203 .policy_wrap td:first-child { display: none; }
    .gsrin0203 .policy_wrap thead {display:none;}
}
</style>