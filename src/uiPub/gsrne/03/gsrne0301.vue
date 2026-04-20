<template>
    <div class="content">

        <div class="board_detail_wrap">
            <!-- board title -->
            <div class="detail_title">
                <strong class="tit">
                    <span class="cate">{{ t.newsCate }}</span>
                    {{ t.title }}
                </strong>
                <p class="info">
                    <em>{{ t.cate }}</em>
                    <span class="date">{{ t.date }}</span>
                </p>
            </div>
            <!-- //board title -->

            <!-- board body -->
            <div class="board_detail_cont">

                <!-- editor 내용 노출 -->
                <p><img src="@/assets/images/dummy/sample_news_detail_01.png" /></p>

                <p>{{ t.detail }}</p>
                <!-- editor 내용 노출 -->

            </div>
            <!-- //board body -->

            <!-- 목록버튼 영역 -->
            <div class="btnSection bottom">
                <button class="btn_icon_back">목록으로 돌아가기</button>
            </div>
            <!-- //목록버튼 영역 -->
        </div>

    </div>
</template>

<script>

export default {
    name: "gsrin04",
    components: { },
    props: { lang: { type: String, default: "ko" } },
    data() {
        return {
            /* 언어별 텍스트 데이터 */
            langData: {
                ko: {
                    title: "GS샵 분트로이, AI 모델 입은 S/S 컬렉션 공개. 출근복과 일상복의 경계 허문다",
                    newsCate: "FACTBOOK M",
                    cate: "GS SHOP",
                    date: "2026.02.05",
                    detail: "분트로이, 기존 콘셉트에 내구성과 활동성 강화한 S/S 시즌 ‘퍼포먼스 워크웨어’ 선보여 공간 제약 극복해 고객 선택폭 확대, 주문 방식으로 보다 합리적인 가격도 주목 포인트 GS샵 자체 패션 브랜드 중 남성 라인 첫  정식 론칭하고, AI 남성 모델로 콘텐츠 일괄 제작 18일(수) 21시 45분 방송서 아스킨 니트, 플렉슈라 재킷∙팬츠, 카프리 팬츠 등 선보일 예정"
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
    },
    mounted() {
        const header = document.getElementById("header");

        header.classList.add("head_black");
    }
};
</script>

<style scoped>
img {max-width:100%;}

.content {max-width:1460px; margin:0 auto; padding:200px 20px;}
.board_detail_wrap {padding:40px 0 60px;}
.board_detail_wrap .detail_title {padding-bottom:40px; border-bottom:1px solid #E5E5E9;}
.board_detail_wrap .tit {color:#161616; font-size:3.2rem; line-height:130%; letter-spacing:-0.01em; display:block;}
.board_detail_wrap .tit .cate {color:#107AF2; font-size:3.2rem; font-weight:700; display:inline-flex; align-items:center;}
.board_detail_wrap .tit .cate:after {height:22px; margin:0 11px 0 16px; border-left:1px solid #d7d7df; content:''; display:block;}
.board_detail_wrap .info {margin-top:12px; display:flex; gap:8px;}
.board_detail_wrap .info em {padding:3px 6px; color:#67676f; font-style:normal; line-height:140%; letter-spacing:-0.01em; background-color:#F2F2F4; border-radius:4px; display:block;}
.board_detail_wrap .info .date {color:#67676F; font-size:1.8rem; line-height:140%; letter-spacing:0;}

.board_detail_wrap .board_detail_cont {padding-top:48px;}

.btnSection.bottom {margin-top:20px; display:flex; justify-content:space-between;}
.btnSection.bottom .btn_icon_back {height:auto; padding:4px; color:#161616; font-size:2rem; line-height:135%; letter-spacing:-0.01em; background-color:#fff; display:inline-flex; align-items:center;}
.btnSection.bottom .btn_icon_back:before {width:16px; height:27px; margin-right:12px; background-color:red; content:''; display:block;}

@media screen and (max-width: 1024px) {
}
@media screen and (max-width: 767px) {
    .board_detail_wrap .detail_title {padding-bottom:24px;}
    .board_detail_wrap .tit {font-size:2.4rem; line-height:135%;}

    .board_detail_wrap .board_detail_cont {padding-top:40px;}
}
</style>