<template>
    <div>
        <div class="main_visual"></div>

        <section class="sec01" v-if="t.sec01">
            <div>
                <h2 v-html="t.sec01.title"></h2>
                <p class="explain" v-html="t.sec01.explain"></p>
                <ul>
                    <li v-for="item in t.sec01.link" :key="item.txt"><a :href="item.link">{{ item.txt }}</a></li>
                </ul>
            </div>
            <div class="clip_mask"></div>
        </section>
    </div>
</template>

<script>
export default {
    name: "gsrmain",
    props: {
        lang: { type: String }, // ko/en
    },
    data() {
        return {
            langData: {
                ko: {
                    sec01: {
                        title: "GS리테일이<br/> 세상을 마주하는 모습",
                        explain: "온·오프라인을 아우르는 통합 경험을 제공하고<br/> 고객 데이터와 현장을 담아 지속적으로 혁신하며<br/> 변함없는 상품과 서비스 품질을 지킵니다.",
                        link: [
                            { txt: "경영이념 및 가치 체계", link: "#none" },
                            { txt: "기업 연혁", link: "#none" },
                            { txt: "수상 이력", link: "#none" }
                        ]
                    }
                },
                en: {
                    Title: "This is a title",
                    GreetingTxt: "Hello"
                }
            }
        };
    },
    computed: {
        t() {
            return this.langData[this.lang] || this.langData.ko;
        }
    },
    mounted() {
    }
};
</script>

<style scope>
h2 {font-size:7.2rem; font-weight:700; line-height:124%; letter-spacing:-0.02em;}
h2 + .explain {font-size:2rem; line-height:150%; letter-spacing:-0.02em;}

.sec01 .explain {margin-top:80px; margin-bottom:60px;}
.sec01 ul {border-top:1px solid #000;}
.sec01 li {border-bottom:1px solid #aaa;}
.sec01 li a {padding:24px 16px 24px 0; font-size:2.4rem; font-weight:600; line-height:150%; letter-spacing:-0.02em; display:flex; align-items:center; justify-content:space-between;}
.sec01 li a:after {width:16px; height:16px; background-color:red; content:''; display:block;}
</style>