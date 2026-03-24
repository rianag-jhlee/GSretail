<template>
    <div class="contents">

        <h2>List</h2>

        <section>
            <h4>Search</h4>
            <ul class="explain">
                <li><strong>[searchData]</strong> : [type] = "select 초기 선택 value 값" / [keyword] = "input 초기 입력 값"</li>
                <li><strong>@search="handleSearch"</strong> : [검색] 버튼 클릭 시 실행 이벤트</li>
            </ul>

            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <Search v-model="searchData" :search_opt="options" @search="handleSearch" />
            </div>

            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="#none">OPEN</a>
            </p>
            <pre class="code_box">
<code>&lt;template&gt;
    &lt;Search v-model="searchData" :search_opt="options" @search="handleSearch" /&gt;
&lt;/template&gt;

&lt;script&gt;
import Search from "@/components/Search.vue";

data() {
    return {
        /* 검색어 */
        searchData: {
            type: "all",    // select 초기 선택 value 값
            keyword: ""     // input 초기 입력 값
        },

        /* 검색 유형 선택 */
        options: [
            { value: "all", label: "전체" },
            { value: "title", label: "제목" },
            { value: "content", label: "내용" },
        ]
    }
},
methods: {
    handleSearch(val) { //[검색] 버튼 클릭 시 실행 이벤트
        const i = 0;
        console.log("검색 실행:", val);
    }
}
&lt;/script&gt;</code></pre>
        </section>
    </div>
</template>

<script>
import Search from "@/components/Search.vue";

export default {
    name: "list",
    components: {
        Search,
    },

    data() {
        return {
            /* 검색어 */
            searchData: {
                type: "all",    // select 초기 선택 value 값
                keyword: ""     // input 초기 입력 값
            },

            /* 검색 유형 선택 */
            options: [
                { value: "all", label: "전체" },
                { value: "title", label: "제목" },
                { value: "content", label: "내용" },
            ]
        }
    },
    mounted() {
        /* 소스보기 */
        $('.tit_wrap a').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active').parent().siblings('.code_box').slideUp();
            } else {
                $(this).addClass('active').parent().siblings('.code_box').slideDown();
            }
        });
    },
    methods: {
        handleSearch(val) {
            const i = 0;
            console.log("검색 실행:", val);
        }
    }
}
</script>

<style></style>