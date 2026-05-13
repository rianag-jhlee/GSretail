<template>
    <div class="main-container">
        <div class="title_wrap">
            <h2 class="page-title">{{ t.MainTitle }}</h2>
            <p class="visual-sub" v-html="t.MainsubTitle"></p>
        </div>

        <section>
            <div class="cont_inner">

                <Tabs @change="onTabChange1" v-model="t.CTabIdx" :tab-items="t.tabs" tab-class="type_02 ac" :tab-slide="false" />
                
                
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

                        <div class="board_wrap type_gallery" v-if="t.CTabIdx === 0">
                            <ul class="body">
                                <li v-for="item in t.ListData" :key="item">
                                    <div class="item">
                                        <a href="/gsrne0101">
                                            <span class="thumb"><em><img :src="item.thumb" /></em></span>
                                        </a>
                                        <a href="#none" class="cont">
                                            <strong>{{ item.title }}</strong>
                                            <p>{{ item.sub }}</p>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="board_wrap type_gallery type_long" v-if="t.CTabIdx === 1">
                            <ul class="body">
                                <li v-for="item in t.ListData2" :key="item">
                                    <div class="item">
                                        <a href="/gsrne0101">
                                            <span class="thumb"><em><img :src="item.thumb" /></em></span>
                                        </a>
                                        <a href="#none" class="cont">
                                            <strong>{{ item.title }}</strong>
                                            <p>{{ item.sub }}</p>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <!-- 26.05.13 Edit 이종환 : 공통화 -->
                        <Pagination 
                            v-model="currentPage" 
                            :total-pages="10" 
                            @change="onPageChange" 
                        />
                        <!-- //26.05.13 Edit 이종환 : 공통화 -->
                    </div>
                </section>

            </div>
        </section>
    </div>
</template>

<script>
import Search from "@/components/Search.vue";
import Pagination from "@/components/Pagination.vue";
import Tabs from "@/components/Tabs.vue";

export default {
    name: "gsrin04",
    components: { Search, Pagination, Tabs },
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
                    MainTitle: "GS리테일 Newsroom",
                    MainsubTitle: "GS리테일뉴스룸은GS리테일 공식 유튜브 채널입니다.<br/> 최신 뉴스와 다양한 소식들을 영상으로 만나보세요!",

                    CTabIdx: 0, //최초 선택된 탭 index
                    tabs: [ //탭 아이템 배열
                        { item: "롱폼" },
                        { item: "숏폼" }
                    ],

                    /* Search 컴포넌트 전용 옵션 (props: search_opt) */
                    SearchOptions: [
                        { value: "all", label: "전체" },
                        { value: "title", label: "제목" },
                        { value: "content", label: "내용" }
                    ],

                    placeholder: "검색어 입력",

                    /* 리스트 데이터 */
                    ListData: [
                        { thumb:  require("@/assets/images/dummy/thumb_news_01-1.png"), title: "GS샵, '스타일NOW 더김동은' 앞세워 프리미엄 패션 경쟁력 강화 프리미엄 패션 경쟁력 강", sub: "GS리테일의 2025년 하반기 주요 경영성과와 사업부문별 성장 전략을 영상으로 만나보세요." },
                        { thumb:  require("@/assets/images/dummy/thumb_news_01-2.png"), title: "GS샵, '스타일NOW 더김동은' 앞세워 프리미엄 패션 경쟁력 강화 프리미엄 패션 경쟁력 강", sub: "GS리테일의 2025년 하반기 주요 경영성과와 사업부문별 성장 전략을 영상으로 만나보세요." },
                        { thumb:  require("@/assets/images/dummy/thumb_news_01-1.png"), title: "GS샵, '스타일NOW 더김동은' 앞세워 프리미엄 패션 경쟁력 강화 프리미엄 패션 경쟁력 강", sub: "GS리테일의 2025년 하반기 주요 경영성과와 사업부문별 성장 전략을 영상으로 만나보세요." },
                        { thumb:  require("@/assets/images/dummy/thumb_news_01-2.png"), title: "GS샵, '스타일NOW 더김동은' 앞세워 프리미엄 패션 경쟁력 강화 프리미엄 패션 경쟁력 강", sub: "GS리테일의 2025년 하반기 주요 경영성과와 사업부문별 성장 전략을 영상으로 만나보세요." },
                    ],
                    ListData2: [
                        { thumb:  require("@/assets/images/dummy/thumb_news_02-1.png"), title: "GS샵, '스타일NOW 더김동은' 앞세워 프리미엄 패션 경쟁력 강화 프리미엄 패션 경쟁력 강", sub: "GS리테일의 2025년 하반기 주요 경영성과와 사업부문별 성장 전략을 영상으로 만나보세요." },
                        { thumb:  require("@/assets/images/dummy/thumb_news_02-2.png"), title: "GS샵, '스타일NOW 더김동은' 앞세워 프리미엄 패션 경쟁력 강화 프리미엄 패션 경쟁력 강", sub: "GS리테일의 2025년 하반기 주요 경영성과와 사업부문별 성장 전략을 영상으로 만나보세요." },
                        { thumb:  require("@/assets/images/dummy/thumb_news_02-3.png"), title: "GS샵, '스타일NOW 더김동은' 앞세워 프리미엄 패션 경쟁력 강화 프리미엄 패션 경쟁력 강", sub: "GS리테일의 2025년 하반기 주요 경영성과와 사업부문별 성장 전략을 영상으로 만나보세요." },
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

        onTabChange(idx) {
            // [수정 핵심] 상위 탭 변경 시 하위 탭 인덱스를 0으로 초기화
            this.TabIdx = 0;
            console.log('Main Tab:', idx);
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

.tab_wrap {margin-top:48px;}

/* board_wrap */
.board_wrap.type_gallery .body {margin-top:-54px; margin-left:-50px; display:flex; flex-wrap:wrap;}
.board_wrap.type_gallery .body > li {width:33.3333%; padding-top:54px; padding-left:50px;}
.board_wrap.type_gallery .item {display:flex; flex-direction:column;}
.board_wrap.type_gallery .item .thumb {padding-top:60.90909%; border-radius:12px; overflow:hidden; position:relative; display:block; align-items:center;}
.board_wrap.type_gallery .item .thumb em {position:absolute; top:0; right:0; bottom:0; left:0;}
.board_wrap.type_gallery .item .thumb img {width:100%; height:100%; object-fit:cover; display:block;}
.board_wrap.type_gallery .item .cont {margin-top:24px;}
.board_wrap.type_gallery .item .cont strong {font-size:2rem; line-height:135%; letter-spacing:-0.01em; display:block;}
.board_wrap.type_gallery .item .cont p {margin-top:12px; font-size:1.6rem; line-height:150%; letter-spacing:-0.01em;}

.board_wrap.type_gallery.type_long .item .thumb {padding-top:177.727272%;}

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