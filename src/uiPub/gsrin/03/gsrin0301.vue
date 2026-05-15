<template>
    <div class="main-container">
        <div class="title_wrap ac top_visual">
            <h2 class="page-title">{{ t.MainTitle }}</h2>
            <p class="visual-sub">{{ t.MainsubTitle }}</p>
        </div>

        <section class="section-investor">
            <div class="cont_inner">
                <Tabs 
                    v-model="CTabIdx" 
                    :tab-items="t.Tabs1" 
                    tab-class="type_01" 
                    :tab-slide="true" 
                    @change="onTabChange1" 
                />

                <div class="tab_content_wrap mt100">
                    <div class="disclosure_info_head mb100" v-if="CTabIdx === 0">
                        <h3 class="section-sub-title">{{ t.MainTitle }}</h3>
                        <p class="policy_desc" v-html="t.DartDesc"></p>
                        <div class="button-area mt16">
                            <a :href="t.DartLink" target="_blank" class="btn_big primary btn_icon after">
                                {{ t.DartBtnText }}
                            </a>
                        </div>
                    </div>

                    <section class="tab_content gsrin0301" v-if="CTabIdx === 0">
                        <h4 class="content_title mb40">{{ t.Tabs1[0].item }}</h4>
                        
                        <div class="search_filter_area mb24">
                            <div class="filter_group">
                                <span class="filter_label">{{ t.YearSelectLabel }}</span>
                                <SelectBox v-model="selectedYear1" :options="t.YearOptions" />
                            </div>
                            <div class="search_group">
                                <Search v-model="searchData" :search_opt="t.options" @search="handleSearch" />
                            </div>
                        </div>

                        <div class="policy_wrap">
                            <table class="base_table">
                                <thead>
                                    <tr>
                                        <th scope="col" class="ac">{{ t.TableHeader.col1 }}</th>
                                        <th scope="col" class="ac">{{ t.TableHeader.col2 }}</th>
                                        <th scope="col" class="ac">{{ t.TableHeader.col3 }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, idx) in t.IRListData" :key="'ir-'+idx">
                                        <td class="ac">{{ item.id }}</td>
                                        <td class="al">
                                            <a href="javascript:void(0);" class="link_title">{{ item.title }}</a>
                                        </td>
                                        <td class="ac">
                                            <button type="button" class="btn_download_file" @click="handleDownload(item.link)">
                                                <span class="file_type_text">PDF</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr v-if="t.IRListData.length === 0">
                                        <td colspan="3" class="ac py80">{{ t.NoDataText }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section class="tab_content" v-if="CTabIdx === 1">
                        <div class="inner_tabs_wrap mb40">
                            <Tabs v-model="InnerTabIdx" :tab-items="t.InnerTabs" tab-class="type_02" />
                        </div>
                        <!-- gsrin030201 -->
                        <section class="tab_content gsrin030201" v-if="InnerTabIdx === 0">
                            <h4 class="content_title mb40">{{ t.InnerTabs[0].item }}</h4>
                            <div class="search_group mb24">
                                <Search v-model="searchData" :search_opt="t.options" @search="handleSearch" />
                            </div>
                            <div class="policy_wrap">
                                <table class="base_table">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="ac">{{ t.TableHeader.col1 }}</th>
                                            <th scope="col" class="ac">{{ t.TableHeader.col2 }}</th>
                                            <th scope="col" class="ac">{{ t.TableHeader.col3 }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, idx) in t.IRListData" :key="'report-'+idx">
                                            <td class="ac">{{ item.id }}</td>
                                            <td class="al">{{ item.title }}</td>
                                            <td class="ac">
                                                <button type="button" class="btn_download_file" @click="handleDownload(item.link)">
                                                    <span class="file_type_text">PDF</span>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                        <!-- gsrin030202 -->
                        <section class="tab_content gsrin030202" v-if="InnerTabIdx === 1">
                            <h4 class="content_title mb40">{{ t.InnerTabs[1].item }}</h4>
                            <div class="search_group mb24">
                                <Search v-model="searchData" :search_opt="t.options" @search="handleSearch" />
                            </div>
                            <div class="policy_wrap">
                                <table class="base_table">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="ac">{{ t.TableHeader.col1 }}</th>
                                            <th scope="col" class="ac">{{ t.TableHeader.col2 }}</th>
                                            <th scope="col" class="ac">{{ t.TableHeader.col3 }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, idx) in t.IRListData" :key="'report-'+idx">
                                            <td class="ac">{{ item.id }}</td>
                                            <td class="al">{{ item.title }}</td>
                                            <td class="ac">
                                                <button type="button" class="btn_download_file" @click="handleDownload(item.link)">
                                                    <span class="file_type_text">PDF</span>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                        <!-- gsrin030203 -->
                        <section class="tab_content gsrin030203" v-if="InnerTabIdx === 2">
                            <h4 class="content_title mb40">{{ t.InnerTabs[2].item }}</h4>
                            <div class="search_group mb24">
                                <Search v-model="searchData" :search_opt="t.options" @search="handleSearch" />
                            </div>
                            <div class="policy_wrap">
                                <table class="base_table">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="ac">{{ t.TableHeader.col1 }}</th>
                                            <th scope="col" class="ac">{{ t.TableHeader.col2 }}</th>
                                            <th scope="col" class="ac">{{ t.TableHeader.col3 }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, idx) in t.IRListData" :key="'report-'+idx">
                                            <td class="ac">{{ item.id }}</td>
                                            <td class="al">{{ item.title }}</td>
                                            <td class="ac">
                                                <button type="button" class="btn_download_file" @click="handleDownload(item.link)">
                                                    <span class="file_type_text">PDF</span>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </section>

                    <!-- gsrin0303 -->
                    <section class="tab_content gsrin0303" v-if="CTabIdx === 2">
                        <h4 class="content_title mb40">
                            {{ t.Tabs1[2].item }}
                            <Buttons  
                                class="btn_big primary btn_icon after" 
                                btn-class="btn_icon" 
                                @click="openModal" 
                                data-popid="ggsrin030301" 
                                data-type="lg" 
                                data-cont="ggsrin030301"    
                            >
                                {{ t.GeneralText }}
                            </Buttons>
                        </h4>

                        <div class="search_filter_area mb24">
                            <div class="filter_group">
                                <span class="filter_label">{{ t.YearSelectLabel }}</span>
                                <SelectBox v-model="selectedYear3" :options="t.YearOptions2" />
                            </div>
                            <div class="search_group">
                                <Search v-model="searchData" :search_opt="t.options" @search="handleSearch" />
                            </div>
                        </div>
                        
                        <div class="policy_wrap">
                            <table class="base_table">
                                <thead>
                                    <tr>
                                        <th scope="col" class="ac">{{ t.TableHeader.col1 }}</th>
                                        <th scope="col" class="ac">{{ t.TableHeader.col2 }}</th>
                                        <th scope="col" class="ac">{{ t.TableHeader.col3 }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, idx) in t.IRListData" :key="'ir-'+idx">
                                        <td class="ac">{{ item.id }}</td>
                                        <td class="al">
                                            <a href="javascript:void(0);" class="link_title">{{ item.title }}</a>
                                        </td>
                                        <td class="ac">
                                            <button type="button" class="btn_download_file" @click="handleDownload(item.link)">
                                                <span class="file_type_text">PDF</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr v-if="t.IRListData.length === 0">
                                        <td colspan="3" class="ac py80">{{ t.NoDataText }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <div class="pagination_area mt100">
                        <Pagination v-model="currentPage" :total-pages="5" @change="onPageChange" />
                    </div>
                </div>
            </div>
        </section>

        <div id="ggsrin030301" class="modal_wrap">
            <div class="modal_container"></div>
        </div>
    </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import SelectBox from "@/components/SelectBox.vue";
import Buttons from "@/components/Buttons.vue";
import Search from "@/components/Search.vue";
import Pagination from "@/components/Pagination.vue";
import modal from "@/assets/js/modal";

export default {
    name: "gsrin0301",
    components: { Tabs, SelectBox, Search, Pagination, Buttons },
    props: { lang: { type: String, default: "ko" } },
    data() {
        return {
            CTabIdx: 0,
            InnerTabIdx: 0,
            currentPage: 1,
            // 수정: 선택된 연도 데이터를 탭별로 분리
            selectedYear1: "전체",
            selectedYear3: "전체",
            searchData: { type: "all", keyword: "" },
            langData: {
                ko: {
                    MainTitle: "공시정보",
                    MainsubTitle: "Disclosure Information",
                    Tabs1: [{ item: "공고" }, { item: "사업/감사보고서" }, { item: "주주총회 공시" }],
                    InnerTabs: [{ item: "사업보고서" }, { item: "감사보고서" }, { item: "분기보고서" }],
                    DartDesc: "GS리테일의 공시자료는 금융감독원의 DART(전자공시시스템)를 통해 제공하고 있습니다.",
                    DartBtnText: "공시자료 바로가기",
                    GeneralText: "주주보호 정책 및 관련 제도 정보",
                    DartLink: "https://dart.fss.or.kr/",
                    YearSelectLabel: "년도선택",
                    YearOptions: [
                        { value: "전체", label: "전체" },
                        { value: "2026", label: "2026" },
                        { value: "2025", label: "2025" }
                    ],
                    YearOptions2: [
                        { value: "전체", label: "전체" },
                        { value: "2026", label: "2026" },
                        { value: "2025", label: "2025" }
                    ],
                    options: [
                        { value: "all", label: "전체" },
                        { value: "title", label: "제목" },
                        { value: "content", label: "내용" }
                    ],
                    TableHeader: { col1: "구분", col2: "제목", col3: "다운로드" },
                    IRListData: [
                        { id: "60", title: "2025년도 재무제표 결산공고", link: "#" },
                        { id: "59", title: "제55기 사업연도 배당기준일 설정 공고", link: "#" },
                        { id: "58", title: "2024년도 재무제표 결산공고", link: "#" },
                        { id: "57", title: "제54기 사업연도 배당기준일 설정 공고", link: "#" },
                        { id: "56", title: "외부감사계약 체결 공고", link: "#" }
                    ],
                    MeetingListData: [],
                    NoDataText: "조회된 데이터가 없습니다."
                }
            }
        };
    },
    computed: { t() { return this.langData[this.lang] || this.langData.ko; } },
    methods: {
        onTabChange1(idx) { 
            this.CTabIdx = idx; 
            this.currentPage = 1; 
            this.InnerTabIdx = 0; 
        },
        handleSearch(val) { console.log("검색:", val); },
        handleDownload(link) { console.log("다운로드:", link); },
        onPageChange(page) { this.currentPage = page; },
        openModal(event) {
            const el = event.currentTarget;
            const popId = el.dataset.popid;
            const type = el.dataset.type || "default";
            const cont = el.dataset.cont; // 여기서 "gsrbr0203"을 가져옴
            // modal.js 라이브러리를 통해 팝업 열기
            modal.open(popId, type, el, cont);
        },
    }
};
</script>

<style scoped>
.main-container { width: 100%; position: relative; }
.title_wrap { width: 100%; height: 480px; padding: 10.91% 0 11.25%; background: url('/src/assets/images/dummy/gsrin0301_bg.png') no-repeat center / cover; text-align: center; position: relative; display: block;}
.page-title { color: #FFFFFF; font-size: 72px; font-weight: 700; letter-spacing: -1.44px; }
.visual-sub { margin-top: 10px; color: #FFFFFF; font-size: 32px; font-weight: 700; }
.cont_inner { width: 100%; max-width: 1420px; margin: 0 auto; padding-bottom: 200px; }

.disclosure_info_head { text-align: left; }
.section-sub-title { font-size: 40px; font-weight: 700; color: #161616; margin-bottom: 16px; }
.policy_desc { font-size: 24px; color: #161616; line-height: 1.5; word-break: keep-all; }

/* 검색 및 필터 */
.search_filter_area { display: flex; justify-content: space-between; align-items: center; }
.filter_group { display: flex; align-items: center; gap: 12px; }
.filter_label { font-size: 16px; color: #161616; }
.search_group :deep(.search_wrap) { display: flex; justify-content: flex-end; gap: 8px; }
.search_group :deep(.input_search_wrap) { flex: none !important; width: 360px; }
.search_group :deep(.select_box) { width: 160px !important; }

/* 테이블 스타일 */
.content_title { font-size: 40px; font-weight: 700; color: #161616; display:flex; align-items:center; justify-content:space-between;}
.content_title a {font-weight:normal;}
.policy_wrap table { width: 100%; border-collapse: collapse; border-top: 2px solid #161616; }
.policy_wrap th, .policy_wrap td { padding: 18px 24px; border-bottom: 1px solid #E5E5E9; font-size: 1.8rem; vertical-align: middle; }
.policy_wrap thead th { background-color: #F8F8F8; color: #161616; font-weight: 700; }
.policy_wrap td { height: 82px; color: #161616; border-left: 0; border-right: 0; }
.policy_wrap th { border-left: 0; border-right: 0; }
.policy_wrap td a { font-size: 1.8rem; color: #161616; text-decoration: none; }
.policy_wrap td a:hover { text-decoration: underline; }


.ac { text-align: center; }
.al { text-align: left; }
.mt100 { margin-top: 100px; }
.mb100 { margin-bottom: 100px; }
.mb40 { margin-bottom: 40px; }
.mb24 { margin-bottom: 24px; }
.mt16 { margin-top: 16px; }
.py80 { padding: 80px 0; }
.pagination_area { display: flex; justify-content: center; }

@media screen and (max-width:1024px) {
    .cont_inner { padding: 0 20px; }
    .tab_content_wrap.mt100 {margin-top:60px;}
}


@media screen and (max-width: 767px) {
    h3.section-sub-title, h4.content_title {font-size:24px !important;}
    .policy_desc {font-size:18px;}
    .title_wrap { display: none; }
    .cont_inner { padding: 0 20px; }
    .tab_content_wrap.mt100 {margin-top:60px;}
    :deep(ul.type_02) {margin-top:-35px !important;}
    .search_filter_area { flex-direction: column; height: auto; align-items: stretch; gap:8px; }
    .policy_wrap th:first-child, .policy_wrap td:first-child { display: none; }
    .policy_wrap thead {display:none;}
    .filter_group {flex-direction:column; align-items:stretch;}
    .search_group .search_wrap {flex-direction:column; align-items:stretch;}
    .search_group :deep(.input_search_wrap) {width:100% !important;}
    .gsrin0303 .content_title {flex-direction:column; align-items:flex-start; gap:12px}
    .filter_label {display:none;}
    .btn_big {font-size:16px;}
    .mb100 {margin-bottom:80px;}
    .policy_wrap td a {font-size:16px;}
}
</style>