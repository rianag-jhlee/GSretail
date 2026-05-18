<template>
    <div class="sub_main" v-if="t">

        <div class="title_wrap">
            <h2>{{ t.h2 }}</h2>
            <p class="explain">{{ t.h2_explain }}</p>
        </div>

        <div class="cont_inner">

            <div class="brand_list">
                <!-- gs25 -->
                <div class="item" v-for="item in t.brand" :key="item">
                    <a href="#none">
                        <span class="thumb">
                            <em><!--<img :src="t.item.img" alt="" />--></em>
                        </span>
                        <!-- name -->
                        <p>
                            <span>{{ item.explain }}</span>
                            <strong>{{ item.name }}</strong>
                        </p>
                        <!-- //name -->
                    </a>
                </div>
                <!-- //gs25 -->
            </div>

        </div>
        
    </div>
</template>

<script>
export default {
    name: "gsrbr09",
    props: {
        lang: { type: String, default: "ko" }
    },
    data() {
        return {
            isMobile: false,
            langData: {
                ko: {
                    h2: "Our Brands",
                    h2_explain: "GS리테일의 다양한 브랜드를 만나보세요",
                    brand: [
                        {name:"GS25", explain:"대한민국 No.1 편의점", link:"#none"},//, img: require("@/assets/images/dummy/main_visual_01.png"),}
                        {name:"GS THE FRESH", explain:"신선한 행복을 주는 브랜드", link:"#none"},
                        {name:"GS SHOP", explain:"홈쇼핑 & 이커머스", link:"#none"},
                        {name:"우리동네GS", explain:"GS리테일 통합 앱", link:"#none"},
                        {name:"우딜", explain:"소셜커머스 플랫폼", link:"#none"},
                        {name:"GS Pay", explain:"간편 결제 서비스", link:"#none"},
                        {name:"GS ALL", explain:"통합 멤버십 프로그램", link:"#none"},
                        {name:"POP", explain:"생활용품 브랜드", link:"#none"},
                        {name:"유어스", explain:"생활 편의 서비스", link:"#none"},
                        {name:"리얼프라이스", explain:"합리적인 가격의 PB 브랜드", link:"#none"},
                        {name:"개발/임대 사업", explain:"부동산 개발 및 임대", link:"#none"}
                    ]
                }
            }
        };
    },
    computed: {
        t() {
            // 안전하게 데이터 반환
            return this.langData[this.lang] || this.langData.ko;
        }
    },
    mounted() {
        const header = document.getElementById("header");

        header.classList.add("head_black"); // 배경 흰색일 경우 head_black 클래스 추가
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkMobile);
    },
    methods: {
        checkMobile() {
            this.isMobile = window.innerWidth < 768;
        },
        handleBack() {
            this.$router.back();
        },
    },
};
</script>

<style scoped>
.sub_main .title_wrap {padding-top:140px; padding-bottom:100px; flex-direction:column;}
.sub_main .title_wrap h2 {font-size:7.2rem; letter-spacing:-0.02em; line-height:124%;}
.sub_main .title_wrap .explain {margin-top:8px; font-size:2.4rem; letter-spacing:-0.01em; line-height:150%; text-align:center;}

.brand_list {display:flex; flex-wrap:wrap; gap:10px;}
.brand_list .item {width:calc(33.3333% - 10px);}
.brand_list a {position:relative; display:block;}
.brand_list .thumb {height:320px; background-color:#d9d9d9; border-radius:12px; display:block;}/* 높이는 샘플 */
.brand_list a p {width:100%; padding:0 40px; position:absolute; bottom:32px; left:0; display:flex; flex-direction:column;}

@media screen and (max-width: 1024px) {
}
@media screen and (max-width: 767px) {
}
</style>