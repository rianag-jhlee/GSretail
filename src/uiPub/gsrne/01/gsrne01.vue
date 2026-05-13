<template>
    <div class="main-container">
        <div class="title_wrap">
            <h2 class="page-title">{{ t.MainTitle }}</h2>
            <p class="visual-sub">{{ t.MainsubTitle }}</p>
        </div>

        <section class="section-investor">
            <div class="cont_inner">
                <section>
                    <div class="element">
                        <div class="search_filter_area">
                            <Search 
                                v-model="searchData" 
                                :search_opt="t.SearchOptions" 
                                @search="handleSearch"
                                :placeholder="t.placeholder"
                            />
                        </div>

                        <div class="board_wrap type_gallery">
                            <ul class="body">
                                <li v-for="item in t.ListData" :key="item">
                                    <div class="item">
                                        <a href="/gsrne0101">
                                            <span class="thumb"><em><img :src="item.thumb" /></em></span>
                                        </a>
                                        <a href="#none" class="cont">
                                            <strong>{{ item.title }}</strong>
                                            <p></p>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <Pagination 
                            v-model="currentPage" 
                            :total-pages="10" 
                            @change="onPageChange" 
                        />
                    </div>
                </section>
            </div>
        </section>
    </div>
</template>

<script>
import SelectBox from "@/components/SelectBox.vue";
import Search from "@/components/Search.vue";
import Pagination from "@/components/Pagination.vue";

export default {
    name: "gsrin04",
    components: { SelectBox, Search, Pagination },
    props: { lang: { type: String, default: "ko" } },
    data() {
        return {
            /* 2. Search 컴포넌트와 v-model로 연결될 데이터 구조 */
            searchData: {
                type: "all",    // Search 컴포넌트 내 select의 초기값
                keyword: ""     // Search 컴포넌트 내 input의 초기값
            },

            /* 3. 페이지네이션 현재 페이지 */
            currentPage: 1,

            /* 4. 언어별 텍스트 데이터 */
            langData: {
                ko: {
                    MainTitle: "보도자료",
                    MainsubTitle: "GS리테일의 최근 소식을 전달해 드립니다.",

                    /* Search 컴포넌트 전용 옵션 (props: search_opt) */
                    SearchOptions: [
                        { value: "all", label: "전체" },
                        { value: "title", label: "제목" },
                        { value: "content", label: "내용" }
                    ],

                    placeholder: "검색어 입력",

                    /* 리스트 데이터 */
                    ListData: [
                        { thumb:  require("@/assets/images/dummy/thumb_news_01-1.png"), title: "GS샵, '스타일NOW 더김동은' 앞세워 프리미엄 패션 경쟁력 강화 프리미엄 패션 경쟁력 강" },
                        { thumb:  require("@/assets/images/dummy/thumb_news_01-2.png"), title: "GS샵, '스타일NOW 더김동은' 앞세워 프리미엄 패션 경쟁력 강화 프리미엄 패션 경쟁력 강" },
                        { thumb:  require("@/assets/images/dummy/thumb_news_01-1.png"), title: "GS샵, '스타일NOW 더김동은' 앞세워 프리미엄 패션 경쟁력 강화 프리미엄 패션 경쟁력 강" },
                        { thumb:  require("@/assets/images/dummy/thumb_news_01-2.png"), title: "GS샵, '스타일NOW 더김동은' 앞세워 프리미엄 패션 경쟁력 강화 프리미엄 패션 경쟁력 강" },
                    ]
                }
            }
        };
    },
    computed: { 
        t() { 
            return this.langData[this.lang] || this.langData.ko; 
        } 
    },
    methods: {
        /* [검색] 버튼 클릭 시 Search 컴포넌트에서 전달받은 값 처리 */
        handleSearch(val) { 
            // val은 { type: "...", keyword: "..." } 형태입니다.
            console.log("검색 유형:", val.type);
            console.log("검색어:", val.keyword);
            
            // 여기서 실제 API 호출 등의 로직을 수행합니다.
            this.currentPage = 1; // 검색 시 1페이지로 초기화
        },
        onPageChange(page) { 
            this.currentPage = page;
        },
    },
    mounted() {
        const header = document.getElementById("header");

        header.classList.add("head_black");
    }
};
</script>

<style scoped>
/* 제공해주신 CSS 그대로 유지 (수정 없음) */
.main-container { width: 100%; position: relative; }
.title_wrap { width: 100%; padding: 10.91% 0 0; text-align: center; position: relative; display: block; }
.page-title { color: #111; font-size: 72px; font-weight: 700; line-height:124%; letter-spacing:-0.02em;}
.visual-sub { margin-top: 10px; color: #111; font-size: 24px; font-weight: 400; line-height:150%; }
.cont_inner { width: 100%; max-width: 1420px; margin: 0 auto; padding-bottom: 200px; }

/* board_wrap */
.board_wrap.type_gallery .body {margin-top:-54px; margin-left:-50px; display:flex; flex-wrap:wrap;}
.board_wrap.type_gallery .body > li {width:33.3333%; padding-top:54px; padding-left:50px;}
.board_wrap.type_gallery .item {display:flex; flex-direction:column;}
.board_wrap.type_gallery .item .thumb {padding-top:60.90909%; border-radius:12px; overflow:hidden; position:relative; display:block; align-items:center;}
.board_wrap.type_gallery .item .thumb em {position:absolute; top:0; right:0; bottom:0; left:0;}
.board_wrap.type_gallery .item .thumb img {width:100%; height:100%; object-fit:cover; display:block;}
.board_wrap.type_gallery .item .cont {margin-top:24px;}
.board_wrap.type_gallery .item .cont strong {font-size:2rem; line-height:135%; letter-spacing:-0.01em; display:block;}

@media screen and (max-width: 767px) {
    .title_wrap {margin-top:48px; padding:0 20px; text-align:initial;}
    .title_wrap h2 {display:none;}
    .title_wrap .visual-sub {font-size:2.8rem; font-weight:700; line-height:135%; letter-spacing:-0.01em;}
    .cont_inner {padding:0 20px;}

    .board_wrap.type_gallery .body {margin-top:-48px;}
    .board_wrap.type_gallery .body > li {width:100%; padding-top:48px;}
    .board_wrap.type_gallery .item .thumb {padding-top:60.895522%;}
}
</style>