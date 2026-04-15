<template>
    <div class="main-container">
        <div class="title_wrap ac">
            <h2 class="page-title">{{ t.MainTitle }}</h2>
            <p class="visual-sub">{{ t.MainsubTitle }}</p>
        </div>

        <section class="section-investor">
            <div class="cont_inner">
                <section class="gsrin04">
                    <div class="element">
                        <div class="search_filter_area">
                            <div class="filter_group">
                                <span class="filter_label">{{ t.YearSelectLabel }}</span>
                                <SelectBox 
                                    v-model="selectedYear" 
                                    :options="t.YearOptions" 
                                    style="width: 160px;" 
                                />
                            </div>
                            <div class="search_group">
                                <Search 
                                    v-model="searchData" 
                                    :search_opt="t.SearchOptions" 
                                    @search="handleSearch" 
                                />
                            </div>
                        </div>

                        <div class="policy_wrap ">
                            <table>
                                <thead>
                                    <tr>
                                        <th scope="col" class="ac">{{ t.TableHeader.col1 }}</th>
                                        <th scope="col" class="ac">{{ t.TableHeader.col2 }}</th>
                                        <th scope="col" class="ac">{{ t.TableHeader.col3 }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, idx) in t.IRListData" :key="'ir-'+idx">
                                        <td class="ac">{{ item.no }}</td>
                                        <td class="al">
                                            <a href="javascript:void(0)" class="file_link">{{ item.title }}</a>
                                        </td>
                                        <td class="ac">
                                            <button type="button" class="btn_download_file" @click="handleDownload(item.link)">
                                                <span class="file_type_text">{{ item.fileType }}</span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="pagination_area ">
                            <Pagination 
                                v-model="currentPage" 
                                :total-pages="10" 
                                @change="onPageChange" 
                            />
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </div>
</template>

<script>
import SelectBox from "@/components/SelectBox.vue";
import Search from "@/components/Search.vue"; // Search 추가
import Pagination from "@/components/Pagination.vue";

export default {
    name: "gsrin04",
    components: { SelectBox, Search, Pagination },
    props: { lang: { type: String, default: "ko" } },
    data() {
        return {
            selectedYear: "전체",
            /* Search 컴포넌트 데이터 구조로 변경 */
            searchData: {
                type: "all",
                keyword: ""
            },
            currentPage: 1,
            langData: {
                ko: {
                    MainTitle: "IR 자료실",
                    MainsubTitle: "IR Library",
                    YearSelectLabel: "년도선택",
                    YearOptions: [
                        { value: "전체", label: "전체" },
                        { value: "2026", label: "2026" },
                        { value: "2025", label: "2025" }
                    ],
                    /* Search 컴포넌트용 옵션 추가 */
                    SearchOptions: [
                        { value: "all", label: "전체" },
                        { value: "title", label: "제목" },
                        { value: "content", label: "내용" }
                    ],
                    SearchPlaceholder: "검색어 입력",
                    TableHeader: { col1: "구분", col2: "제목", col3: "다운로드" },
                    IRListData: [
                        { no: "60", title: "파일명이 노출됩니다.", fileType: "PDF", link: "#" },
                        { no: "59", title: "파일명이 노출됩니다.", fileType: "PDF", link: "#" },
                        { no: "58", title: "파일명이 노출됩니다.", fileType: "PDF", link: "#" },
                        { no: "57", title: "파일명이 노출됩니다.", fileType: "PDF", link: "#" },
                        { no: "56", title: "파일명이 노출됩니다.", fileType: "PDF", link: "#" },
                        { no: "55", title: "파일명이 노출됩니다.", fileType: "PDF", link: "#" },
                        { no: "54", title: "파일명이 노출됩니다.", fileType: "PDF", link: "#" },
                        { no: "53", title: "파일명이 노출됩니다.", fileType: "PDF", link: "#" },
                        { no: "52", title: "파일명이 노출됩니다.", fileType: "PDF", link: "#" },
                        { no: "51", title: "파일명이 노출됩니다.", fileType: "PDF", link: "#" }
                    ]
                }
            }
        };
    },
    computed: { t() { return this.langData[this.lang] || this.langData.ko; } },
    methods: {
        handleSearch(val) { console.log("검색 실행:", val); },
        handleDownload(link) { console.log("Downloading:", link); },
        onPageChange(page) { this.currentPage = page; }
    }
};
</script>

<style scoped>
/* 제공해주신 CSS 그대로 유지 (수정 없음) */
.main-container { width: 100%; position: relative; }
.title_wrap { width: 100%; height: 480px; padding: 10.91% 0 11.25%; background: url('/src/assets/images/dummy/gsrin04_bg.png') no-repeat center / cover; text-align: center; position: relative; display: block; }
.page-title { color: #FFFFFF; font-size: 72px; font-weight: 700; }
.visual-sub { margin-top: 10px; color: #FFFFFF; font-size: 32px; font-weight: 700; }
.cont_inner { width: 100%; max-width: 1420px; margin: 0 auto; padding-bottom: 200px; }
.ac { text-align: center; }
.al { text-align: left; }

.search_filter_area { display: flex; width: 100%; height: 52px; justify-content: space-between; align-items: center; margin-top: 100px; }
.filter_group, .search_group { display: flex; align-items: center; gap: 12px; }
.filter_label { font-size: 16px; color: #161616; white-space: nowrap; }

.policy_wrap table { width: 100%; border-collapse: collapse; word-break: keep-all; border-top: 1px solid #161616; }
.policy_wrap th, .policy_wrap td { padding: 18px 24px; border: 1px solid #E5E5E9; font-size: 18px; line-height: 1.6; vertical-align: middle; }
.policy_wrap th { background-color: #F8F8F8; color: #161616; font-weight: 700; border-top: 1px solid #000; }
.policy_wrap td a {font-size:18px;}
.policy_wrap td {height: 82px; color: #161616; border-left:0; border-right:0; }
.policy_wrap th {border-left:0; border-right:0;}
.file_link { color: #161616; text-decoration: none; }
.file_link:hover { text-decoration: underline; }
.btn_download_file { display: inline-flex; align-items: center; gap: 12px; background: none; border: 0; cursor: pointer; }
.btn_download_file::before {content:''; width:24px; height:24px; background:red; display:inline-block;}
.file_type_text { font-size: 18px; color: #161616; }
.img { width: 24px; height: 24px; }
.policy_wrap th:first-child, .policy_wrap td:first-child {width:150px}

.pagination_area {width: 100%; margin-top:24px; display: flex; justify-content: center; }

@media screen and (max-width: 1024px) {
    .search_filter_area { flex-direction: column; height: auto; align-items: flex-start; gap: 20px; }
    .search_group { width: 100%; }
}
@media screen and (max-width: 767px) {
    .cont_inner {padding:0 20px;}
    .policy_wrap th:first-child, .policy_wrap td:first-child { display: none; }
    .policy_wrap th, .policy_wrap td { padding: 12px; font-size: 15px; }
    .search_group {align-items: flex-start; }
    :deep(.search_group .search_wrap) { width: 100% !important; }
}
</style>