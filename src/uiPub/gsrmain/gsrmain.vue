<template>
    <div>
        <div v-if="t.mainVisual" class="main_visual" :style="{ backgroundImage: 'url(' + t.mainVisual.img + ')' }">
            <p>
                <strong v-html="t.mainVisual.title"></strong>
            </p>
        </div>

        <section v-if="t.sec01" class="sec01">
            <div>
                <h2 v-html="t.sec01.title"></h2>
                <p class="explain" v-html="t.sec01.explain"></p>
                <ul>
                    <li v-for="item in t.sec01.link" :key="item.txt"><a :href="item.link">{{ item.txt }}</a></li>
                </ul>
            </div>
            <div class="clip_mask">
                <div>
                    <strong>Lifestyle</strong>
                    <em></em>
                    <strong>Platformed.</strong>
                </div>
            </div>
        </section>

        <section v-if="t.sec02" class="sec02">
            <h2 v-html="t.sec02.title"></h2>

            <div>
                <div v-for="item in t.sec02.items" :key="item.txt">
                    <span class="thumb">
                        <em><img :src="item.img" /></em>
                    </span>
                    <div>
                        <strong>{{ item.txt }}</strong>
                        <span>{{ item.sub }}</span>
                        <p>{{ item.exp }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section v-if="t.sec03" class="sec03">
            <h2 v-html="t.sec03.title"></h2>

            <div v-for="item in t.sec03.items" :key="item.img">
                <span class="thumb">
                    <em><img :src="item.img" /></em>
                </span>
                <div>
                    <em><img :src="item.sub" /></em>
                    <strong>{{ item.brand }}</strong>
                    <p>{{ item.txt }}</p>
                </div>
            </div>
        </section>

        <section v-if="t.sec04" class="sec04">
            <h2 v-html="t.sec04.title"></h2>
            <p class="explain" v-html="t.sec04.explain"></p>
            <ul class="quick">
                <li v-for="item in t.sec04.quick" :key="item.quick">
                    <a :href="item.link">{{ item.txt }}</a>
                </li>
            </ul>

            <div v-for="(item, idx) in t.sec04.items" :key="idx">
                <span class="thumb">
                    <em><img :src="item.img" /></em>
                </span>

                <div class="txt">
                    <ul>
                        <li v-for="(sub, i) in item.item" :key="i">
                            <em>{{ sub.cate }}</em>
                        </li>
                    </ul>

                    <p v-html="item.title"></p>
                </div>
            </div>
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
                    mainVisual: {
                        title: "Every Life.<br/> One Platform.",
                        sub: "GS리테일",
                        img: require("@/assets/images/dummy/main_visual.png")
                    },

                    sec01: {
                        title: "GS리테일이<br/> 세상을 마주하는 모습",
                        explain: "온·오프라인을 아우르는 통합 경험을 제공하고<br/> 고객 데이터와 현장을 담아 지속적으로 혁신하며<br/> 변함없는 상품과 서비스 품질을 지킵니다.",
                        link: [
                            { txt: "경영이념 및 가치 체계", link: "#none" },
                            { txt: "기업 연혁", link: "#none" },
                            { txt: "수상 이력", link: "#none" }
                        ]
                    },
                    sec02: {
                        title: "GS리테일이 실천하는<br/> Together Green",
                        items: [
                            { img: require("@/assets/images/dummy/main_sec02_01.png"), txt: "2년", sub: "연속 최우수", exp: "유통 대기업 중 유일하게 2년 연속 동반성장지수 평가 최우수 등급 달성" },
                            { img: require("@/assets/images/dummy/main_sec02_02.png"), txt: "223+", sub: "사회공헌형 매장 운영 (2025)", exp: "내일 스토어·늘봄 스토어·시니어스토어 등 취약계층 자립 지원" },
                            { img: require("@/assets/images/dummy/main_sec02_03.png"), txt: "A+", sub: "KCGS ESG 통합등급 (2025)", exp: "2년 연속, 환경 A+·사회 A+·지배구조 A 805개 기업 중 상위 2.4%의 성과" },
                        ]
                    },
                    sec03: {
                        title: "GS리테일이 만드는<br/> 편리한 일상",
                        items: [
                            { img: require("@/assets/images/dummy/main_sec03_01.png"), sub: require("@/assets/images/dummy/main_sec03_01-1.png"), brand: "GS25", txt: "모든 순간, 일상의 중심" }
                        ]
                    },
                    sec04: {
                        title: "GS리테일의<br/> 일상 속 생생한 이야기",
                        explain: "뉴스룸의 흥미로운 영상 콘텐츠부터 브랜드별 공식 보도자료까지,<br/> GS리테일이 만들어가는 변화를 가장 먼저 확인하세요.",
                        quick: [
                            { link: "#none", txt: "보도자료" },
                            { link: "#none", txt: "GS리테일 Newsroom" },
                        ],
                        items: [
                            {
                                img: require("@/assets/images/dummy/main_news_00.png"),
                                item: [
                                    { cate: "GS25" },
                                    { cate: "보도자료" }
                                ],
                                title: 'GS리테일, 상반기 공개채용 돌입…<br/> "청년 채용 물꼬 튼다!"'
                            },
                            {
                                img: require("@/assets/images/dummy/main_news_01.png"),
                                item: [
                                    { cate: "GS25" },
                                    { cate: "보도자료" }
                                ],
                                title: 'GS25, 1300만 유튜버 쯔양과<br/> 공동 개발한 ‘대식가 시리즈’ 론칭'
                            }
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
h2 {
    font-size: 7.2rem;
    font-weight: 700;
    line-height: 124%;
    letter-spacing: -0.02em;
    text-align: center;
}

h2+.explain {
    font-size: 2rem;
    line-height: 150%;
    letter-spacing: -0.02em;
}

.main_visual {height:100vh; background-position:50%; background-size:cover;}
.main_visual * {color:#fff;}

section {padding: 200px 0;}

.sec01 {padding: 0 20px; display: flex; flex-direction: row-reverse; align-items: flex-end; justify-content: space-between;}

.sec01 h2 {text-align: left;}

.sec01 .explain {margin-top: 80px; margin-bottom: 60px;}

.sec01 ul {border-top: 1px solid #000;}

.sec01 li {border-bottom: 1px solid #aaa;}

.sec01 li a {padding: 24px 16px 24px 0; font-size: 2.4rem; font-weight: 600; line-height: 150%; letter-spacing: -0.02em; display: flex; align-items: center; justify-content: space-between;}

.sec01 li a:after {width: 16px; height: 16px; background-color: red; content: ''; display: block;}

.sec01 .clip_mask div {color: #fff; display: flex; flex-direction: column; align-items: center;}

.sec01 .clip_mask strong {font-size: 8rem; line-height: 124%; letter-spacing: -0.02em; text-align: center; display: block;}

.sec01 .clip_mask em {width: 1px; background-color: #fff; flex: 1;}
</style>