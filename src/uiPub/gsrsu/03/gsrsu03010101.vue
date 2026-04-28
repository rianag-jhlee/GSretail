<template>
    <div class="main-container" v-if="t">
        <div class="title_wrap ac">
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

                <div class="tab_content_wrap mt80">
                    <article v-if="CTabIdx === 0">
                        <Tabs 
                            v-model="SubTabIdx1" 
                            :tab-items="t.Tabs2_1" 
                            tab-class="type_02" 
                            @change="SubTabIdx2 = 0" 
                            :tab-slide="true" 
                        />

                        <div class="sub_tab_content mt60">
                            <div v-if="SubTabIdx1 === 0" class="winwin_intro">
                                <div class="intro_summary ac mb100">
                                    <h3 class="text_summary">{{ t.WinWinIntro.Summary }}</h3>
                                </div>

                                <div class="intro_contents">
                                    <section class="intro_section mb120">
                                        <h3 class="section_title">{{ t.WinWinIntro.Philosophy.Title }}</h3>
                                        <div class="philosophy_box mt40">
                                            <ul class="circle_grid">
                                                <li class="item_wrap">
                                                    <div 
                                                        v-for="(item, idx) in t.WinWinIntro.Philosophy.Items" 
                                                        :key="'phil-'+idx" 
                                                        :class="['color_0' + (idx+1)]"
                                                    >
                                                        <strong>{{ item.tit }}</strong>
                                                        <p v-html="item.desc"></p>
                                                    </div>
                                                </li>
                                                <li class="btn-wrap ac mt40">
                                                    <Buttons btn-class="btn_icon btn_xl border after">
                                                        {{ t.WinWinIntro.Philosophy.Btn }}
                                                    </Buttons>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section class="intro_section mb120">
                                        <h4 class="section_title">{{ t.WinWinIntro.Strategy.Title }}</h4>
                                        <div class="strategy_box mt40">
                                            <figure class="diagram_img mb40">
                                                <img src="@/assets/images/dummy/gsrsu03010101_1.png" alt="동반성장 추진전략 다이어그램">
                                            </figure>
                                            
                                            <ul class="card_grid">
                                                <li v-for="(card, idx) in t.WinWinIntro.Strategy.Cards" :key="'card-'+idx" class="strategy_card">
                                                    <div class="card_head">
                                                        <span class="num">{{ card.num }}</span>
                                                        <strong>{{ card.tit }}</strong>
                                                    </div>
                                                    <ul class="bullet_01">
                                                        <li v-for="(li, lIdx) in card.list" :key="'li-'+lIdx">{{ li }}</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section class="intro_section">
                                        <h3 class="section_title">{{ t.WinWinIntro.Index.Title }}</h3>
                                        <div class="index_box mt40">
                                            <figure class="index_visual">
                                                <img src="@/assets/images/dummy/gsrsu03010101_2.png" alt="동반성장지수 최우수 등급">
                                            </figure>
                                            <strong>{{ t.WinWinIntro.Index.SubTitle }}</strong>
                                        </div>
                                    </section>
                                </div>
                            </div>
                            
                            <div v-if="SubTabIdx1 === 1">
                                <div class="intro_summary ac mb100">
                                    <h3 class="text_summary" v-html="t.Partnersupport.Summary"></h3>
                                </div>
                                <Tabs 
                                    v-model="SubTabIdx2" 
                                    :tab-items="t.Tabs3_1" 
                                    tab-class="type_04" 
                                    class="mb40" 
                                    :tab-slide="true" 
                                />
                                <div class="inner_content">

                                    <!-- gsrsu0301010201 -->
                                    <div v-if="SubTabIdx2 === 0" class="finance_support">
                                        <div class="intro_summary mb80">
                                            <p class="text_summary_sub" v-html="t.Partnersupport.FinanceSupport.Summary"></p>
                                        </div>

                                        <section class="support_item mb120">
                                            <div class="wide_info_box">
                                                <figure class="img_frame">
                                                    <img src="@/assets/images/dummy/gsrsu0301010201_1.png" :alt="t.Partnersupport.FinanceSupport.Fund.Title">
                                                </figure>
                                                <div class="text_area">
                                                    <h4>{{ t.Partnersupport.FinanceSupport.Fund.Title }}</h4>
                                                    <p>{{ t.Partnersupport.FinanceSupport.Fund.Desc }}</p>
                                                </div>
                                            </div>

                                            <div class="process_container mt60">
                                                <h3 class="section_title_sub mb40">{{ t.Partnersupport.FinanceSupport.Fund.ProcessTitle }}</h3>
                                                <div class="process_flow">
                                                    <div 
                                                        v-for="(step, idx) in t.Partnersupport.FinanceSupport.Fund.Steps" 
                                                        :key="'step-'+idx" 
                                                        class="step_unit"
                                                    >
                                                        <p class="step_desc" v-html="step.tit"></p>
                                                        <span 
                                                            v-if="idx < t.Partnersupport.FinanceSupport.Fund.Steps.length - 1" 
                                                            class="arrow_next"
                                                        ></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        <section class="grid_column_2 mb120">
                                            <div 
                                                v-for="(item, idx) in t.Partnersupport.FinanceSupport.SubFunds" 
                                                :key="'subfund-'+idx" 
                                                class="sub_fund_item"
                                            >
                                                <figure class="img_frame_small">
                                                    <img :src="item.img" :alt="item.tit">
                                                </figure>
                                                <div class="text_area mt32">
                                                    <h4>{{ item.tit }}</h4>
                                                    <p v-html="item.desc"></p>
                                                </div>
                                            </div>
                                        </section>

                                        <section class="card_grid">
                                            <div 
                                                v-for="(card, idx) in t.Partnersupport.FinanceSupport.Cards" 
                                                :key="'fcard-'+idx" 
                                                class="strategy_card"
                                            >
                                                <div class="card_head">
                                                    <strong v-html="card.tit"></strong>
                                                </div>
                                                <p class="card_desc">{{ card.desc }}</p>
                                            </div>
                                        </section>
                                    </div>

                                    <!--gsrsu0301010202 -->
                                    <div v-if="SubTabIdx2 === 1">판로지원 내용</div>

                                    <!-- gsrsu0301010203 -->
                                    <div v-if="SubTabIdx2 === 2">경쟁력강화지원 내용</div>

                                    <!-- gsrsu0301010204 -->
                                    <div v-if="SubTabIdx2 === 3">복리후생 제도 내용</div>

                                    <!-- gsrsu0301010205 -->
                                    <div v-if="SubTabIdx2 === 4">방송 편성 내용</div>

                                    <!-- gsrsu0301010206 -->
                                    <div v-if="SubTabIdx2 === 5">소통제도 내용</div>
                                </div>
                            </div>

                            <div v-if="SubTabIdx1 === 2">
                                <Tabs 
                                    v-model="SubTabIdx2" 
                                    :tab-items="t.Tabs3_2" 
                                    tab-class="type_04" 
                                    class="mb40" 
                                />
                                <div class="inner_content">

                                    <!-- gsrsu03010103 -->
                                    <div v-if="SubTabIdx2 === 0">GS25 경영주 지원제도 내용</div>

                                    <!-- gsrsu03010103_1 -->
                                    <div v-if="SubTabIdx2 === 1">GS THE FRESH 경영주 지원제도 내용</div>
                                </div>
                            </div>

                            <!-- gsrsu03010104 -->
                            <div v-if="SubTabIdx1 === 3">지역사회 참여정책 내용</div>
                        </div>
                    </article>

                    <article v-if="CTabIdx === 1">
                        <Tabs 
                            v-model="SubTabIdx1" 
                            :tab-items="t.Tabs2_2" 
                            tab-class="type_02" 
                        />
                        <div class="sub_tab_content mt60">

                            <!-- gsrsu030201 -->
                            <div v-if="SubTabIdx1 === 0">나눔경영 - 개요 내용</div>

                            <!-- gsrsu030202 -->
                            <div v-if="SubTabIdx1 === 1">아동/사회 취약계층지원 내용</div>

                            <!-- gsrsu030203 -->
                            <div v-if="SubTabIdx1 === 2">지역사회 지원 내용</div>

                            <!-- gsrsu030204 -->
                            <div v-if="SubTabIdx1 === 3">방송발전 내용</div>

                            <!-- gsrsu030205 -->
                            <div v-if="SubTabIdx1 === 4">숨은나눔천사 내용</div>
                        </div>
                    </article>

                    <article v-if="CTabIdx === 2">
                        <Tabs 
                            v-model="SubTabIdx1" 
                            :tab-items="t.Tabs2_3" 
                            tab-class="type_02" 
                            @change="SubTabIdx2 = 0" 
                        />
                        <div class="sub_tab_content mt60">
                            <!-- gsrsu030301 -->
                            <div v-if="SubTabIdx1 === 0">인권경영 내용</div>

                            <div v-if="SubTabIdx1 === 1">
                                <Tabs 
                                    v-model="SubTabIdx2" 
                                    :tab-items="t.Tabs3_3" 
                                    tab-class="type_04" 
                                    class="mb40" 
                                />
                                <div class="inner_content">
                                    <!-- gsrsu03030201 -->
                                    <div v-if="SubTabIdx2 === 0">인재상 내용</div>

                                    <!-- gsrsu03030202 -->
                                    <div v-if="SubTabIdx2 === 1">인재육성체계 내용</div>

                                    <!-- gsrsu03030203 -->
                                    <div v-if="SubTabIdx2 === 2">인재경영 지표 내용</div>

                                    <!-- gsrsu03030204 -->
                                    <div v-if="SubTabIdx2 === 3">인재경영 실적자료 내용</div>
                                </div>
                            </div>

                            <!-- gsrsu030303 -->
                            <div v-if="SubTabIdx1 === 2">고객만족경영 내용</div>

                            <!-- gsrsu030304 -->
                            <div v-if="SubTabIdx1 === 3">안전경영 내용</div>

                            <!-- gsrsu030305 -->
                            <div v-if="SubTabIdx1 === 4">정보보호 내용</div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import Buttons from "@/components/Buttons.vue";

export default {
    name: "gsrsu03010101",
    components: { Tabs, Buttons },
    props: { lang: { type: String, default: "ko" } },
    data() {
        return {
            CTabIdx: 0,      // 1depth
            SubTabIdx1: 0,   // 2depth
            SubTabIdx2: 0,   // 3depth
            langData: {
                ko: {
                    MainTitle: "사회적 책임",
                    MainsubTitle: "Social responsibility",
                    // 1depth
                    Tabs1: [
                        { item: "상생경영" }, 
                        { item: "나눔경영" }, 
                        { item: "권익보호" }
                    ],
                    
                    // 2depth (상생경영 하위)
                    Tabs2_1: [
                        { item: "개요" }, 
                        { item: "파트너사 지원제도" }, 
                        { item: "경영주 지원제도" }, 
                        { item: "지역사회 참여정책" }
                    ],
                    // 3depth (파트너사 지원제도 하위)
                    Tabs3_1: [
                        { item: "금융지원" }, 
                        { item: "판로지원" }, 
                        { item: "경쟁력강화지원" }, 
                        { item: "복리후생 제도" }, 
                        { item: "방송 편성" }, 
                        { item: "소통제도" }
                    ],
                    // 3depth (경영주 지원제도 하위 - 신규 추가)
                    Tabs3_2: [
                        { item: "GS25 경영주 지원제도" }, 
                        { item: "GS THE FRESH 경영주 지원제도" }
                    ],

                    // 2depth (나눔경영 하위)
                    Tabs2_2: [
                        { item: "개요" }, 
                        { item: "아동/사회 취약계층지원" }, 
                        { item: "지역사회 지원" }, 
                        { item: "방송발전" }, 
                        { item: "숨은나눔천사" }
                    ],

                    // 2depth (권익보호 하위)
                    Tabs2_3: [
                        { item: "인권경영" }, 
                        { item: "인재경영" }, 
                        { item: "고객만족경영" }, 
                        { item: "안전경영" },
                        { item: "정보보호" }
                    ],
                    // 3depth (인재경영 하위)
                    Tabs3_3: [
                        { item: "인재상" }, 
                        { item: "인재육성체계" }, 
                        { item: "인재경영 지표" }, 
                        { item: "인재경영 실적자료" }
                    ],
                    WinWinIntro: {
                        Summary: "GS리테일의 동반성장 철학과 추진전략을 확인하실 수 있습니다.",
                        Philosophy: {
                            Title: "동반성장철학",
                            Btn: "동반성장 활동보기",
                            Items: [
                                { tit: "Win-Win", desc: "어느 일방의 희생이 아닌<br/>상생 협력체계 구축" },
                                { tit: "신뢰", desc: "끊임 없는 소통과 경청을<br/>통한 신뢰를 기반"},
                                { tit: "미래지향", desc: "일회성, 단기적 성과보다<br/>지속 가능한 성장 추구"}
                            ]
                        },
                        Strategy: {
                            Title: "추진전략",
                            Cards: [
                                { num: "01", tit: "공정한 거래문화 정착", list: ["공정거래 법규 준수", "불공정거래 사전예방 시스템", "공정한 거래기회 제공"] },
                                { num: "02", tit: "실질적 경영지원", list: ["금융지원 / 대금조기 지급", "업무역량 지원", "기타/복리후생 지원"] },
                                { num: "03", tit: "지속적 성장추구", list: ["공동상품개발 확대", "브랜드마케팅 지원", "성과공유제 도입/운용"] },
                                { num: "04", tit: "열린소통", list: ["정기적 간담회 운영", "문화교류 (Family-Day)", "파트너사 만족도 개선"] }
                            ]
                        },
                        Index: {
                            Title: "동반성장지수",
                            SubTitle: "동반성장부문 2023 최우수"
                        }
                    },
                    Partnersupport : {
                        Summary :"GS리테일은 상생경영을 통해 파트너사와 공동의 발전을 도모하고 있습니다. <br/> 이를 실현하기 위해 아래와 같은 제도를 운영하고 있습니다.",
                        FinanceSupport: {
                            Summary: "파트너사의 지속성장 기반 강화를 위한 다양한 자금 지원 프로그램을 운영하고 있습니다.",
                            Fund: {
                                Title: "상생펀드",
                                Desc: "파트너사가 경영/운영상의 긴급 자금이 필요할 때 상생펀드를 활용해 저리의 자금을 대출 받을 수 있는 제도입니다.",
                                ProcessTitle: "신청절차",
                                Steps: [
                                    { tit: "추천의뢰<br/>(파트너사→MD)" },
                                    { tit: "추천서 작성<br/>(MD)" },
                                    { tit: "지원신청<br/>(GS리테일→은행)" },
                                    { tit: "대출지원<br/>(은행심사 후 대출실행)"}
                                ]
                            },
                            SubFunds: [
                                { 
                                    tit: "상생파트너론", 
                                    img: require("@/assets/images/dummy/gsrsu0301010201_2.png"),
                                    desc: "파트너사에 상환청구권이 없는 외상매출채권 담보대출로 협력기업의 상환부담을 경감할 수 있는 제도 입니다.<br/>(GS리테일의 1,2,3차 협력기관 / 연 0.60%+가산금리)" 
                                },
                                { 
                                    tit: "친환경농수산펀드/ 농식품창업 아이디어 펀드", 
                                    img: require("@/assets/images/dummy/gsrsu0301010201_3.png"),
                                    desc: "전남창조경제혁신센터와 친환경 농수산 융자지원 업무협약을 체결 후, 전남소재 창업 및 중소기업에 대한 금융지원을 통해 농·수산 식품 산업을 육성하는 제도 입니다." 
                                }
                            ],
                            Cards: [
                                { tit: "네트워크론 / 패밀리론", desc: "기업은행과 협약을 맺고 파트너사와의 거래내역, 보증, 담보 등의 제공 또는 추천을 통해 저리 대출 제공" },
                                { tit: "선급금 지급", desc: "FF 생산공장의 재료 수급과 공급의 안정성 및 설비 관리를 위한 단기자금 조달 등 지원을 위해 파트너사에 선급금 지원" },
                                { tit: "명절 조기 지급 / 100% 현금결제", desc: "파트너사 및 경영주의 원활한 자금 유동성 확보를 위해 년 2회 명절에 물품대금 및 정산금을 조기지급" },
                                { tit: "수수료 환급제도", desc: "GS SHOP은 분기별 목표 대비 실적이 기준에 미치지 못한 협력사를 대상으로 수취 수수료의 일부를 환급하는 제도를 운영" }
                            ]
                        }
                    }
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
        onTabChange1(idx) {
            this.CTabIdx = idx;
            this.SubTabIdx1 = 0;
            this.SubTabIdx2 = 0;
        }
    }
};
</script>

<style scoped>
    .main-container { width: 100%; position: relative; background-color: #ffffff; }
    .cont_inner { width: 100%; max-width: 1420px; margin: 0 auto; padding-bottom: 200px; }
    .ac { text-align: center; }
    .mt40 {margin-top: 40px;}
    .mt80 { margin-top: 80px; }
    .mt60 { margin-top: 60px; }
    .mb40 { margin-bottom: 40px; }
    .mb100 { margin-bottom:100px; }
    img {max-width:100%;}
    /* Visual Area */
    .title_wrap { display: block; width: 100%; height: 480px; padding: 160px 0; background: url('/src/assets/images/dummy/gsrsu03010101_bg.png') no-repeat center / cover; position: relative; }
    .page-title { color: #FFFFFF; font-size: 72px; font-weight: 700; letter-spacing: -1.44px; }
    .visual-sub { margin-top: 10px; color: #FFFFFF; font-size: 32px; font-weight: 700; }
    /* Typography */
    h3 { color: #161616; font-size: 40px; font-weight: 700; line-height: 1.3; }
    h4 { color: #161616; font-size: 32px; font-weight: 700; line-height: 1.3; margin-bottom: 12px; }
    p { color: #161616; font-size: 20px; line-height: 1.45; word-break: keep-all; }
    .sub_tab_content { min-height: 300px; }
    .inner_content { padding: 20px; border-radius: 10px; }
    .tab_content_wrap {margin-top:20px !important;}

    /* 상생경영 개요 특화 스타일 */
    .text_summary { font-size: 32px; font-weight: 700; color: #161616; padding: 20px 0; }
    .mb120 { margin-bottom: 120px; }
    .philosophy_box { padding: 60px; background: #F8F8F8; border-radius: 12px; }
    .circle_grid { display: flex; justify-content: center; flex-direction:column; gap: 40px; background: #fff; padding: 60px 0; border-radius: 12px; list-style: none; }
    .item_wrap {width: 100%; display: flex; justify-content: center; gap: 40px; }
    .item_wrap div { width: 300px; height: 300px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 32px; color: #fff; opacity: 0.8; }
    .item_wrap div  img { width: 60px; height: 60px; margin-bottom: 8px; }
    .item_wrap div strong { font-size: 24px; margin-bottom: 8px; }
    .item_wrap div p { font-size: 18px; color: #fff; text-align: center; line-height: 1.4; }
    .item_wrap div.color_01 { background-color: #107AF2; }
    .item_wrap div.color_02 { background-color: #15B874; }
    .item_wrap div.color_03 { background-color: #FB6432; }
    .item_wrap div img { width: 60px; height: 60px; margin-bottom: 8px; }
    .item_wrap div strong { font-size: 24px; margin-bottom: 8px; font-weight: 700; display:flex; flex-direction:column; align-items:center; gap:8px;}
    .item_wrap div strong::before {content:''; width:60px; height:60px; background:red; display:block;}
    .item_wrap div p { font-size: 18px; color: #fff; text-align: center; line-height: 1.4; }
    .card_grid { display: flex; gap: 20px; flex-wrap:wrap; }
    .strategy_card { min-width: calc(25% - 15px); padding: 32px 32px 56px; background: #F8F8F8; border-radius: 12px; flex: 1;}
    .card_head { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
    .card_head .num { font-size: 18px; font-weight: 700; color: #107AF2; }
    .card_head strong { font-size: 20px; color: #161616; }
    .index_visual { position: relative; width: 100%; height: 340px; background: #F8F8F8; border-radius: 12px; overflow: hidden; }
    .index_visual img { width: 100%; height: 100%; object-fit: cover; }
    .index_badge { position: absolute; top: 65px; right: 50px; width: 210px; height: 210px; background: rgba(159, 202, 250, 0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
    .badge_inner { text-align: center; }
    .category { display: inline-block; padding: 4px 12px; background: #107AF2; color: #fff; border-radius: 99px; font-size: 14px; font-weight: 700; margin-bottom: 10px; }
    .result { color: #107AF2; }
    .result .year { display: block; font-size: 24px; font-weight: 700; }
    .result strong { font-size: 32px; font-weight: 700; }
    .index_title strong { font-size: 28px; color: #161616; }
    .btn_xl {font-weight:700;}
    .bullet_01 li {font-size:16px;}
    .index_box strong {margin-top:20px; font-size:28px; font-weight:700; display:block;}

    /* 금융지원 */
    .text_summary_sub { font-size: 28px; font-weight: 700; color: #90909A; }
    .section_title_sub { font-size: 40px; font-weight: 700; color: #161616; }
    .wide_info_box { display: flex; gap: 40px; align-items: center; }
    .img_frame { flex: 0 0 690px; height: 360px; border-radius: 12px; overflow: hidden; }
    .img_frame img { width: 100%; height: 100%; object-fit: cover; }
    .text_area { flex: 1; }
    .process_flow { display: flex; align-items: center; justify-content: center; background: #fff; padding: 60px 0; border-radius: 12px; gap:80px; }
    .step_unit { position: relative; width: 220px; height:220px; padding:40px; background:#F8F8F8; border-radius:50%; display: flex; flex-direction: column; align-items: center; gap: 12px; }
    .circle_icon { width: 100px; height: 100px; background: #F8F8F8; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
    .circle_icon img { width: 40px; }
    .step_desc { font-size: 16px; font-weight: 700; text-align: center; color: #000; line-height: 1.2; display:flex; align-items:center; flex-direction:column;}
    .step_desc::before {content:''; width:80px; height:80px; margin-bottom:12px; display:block; background:red;}
    .arrow_next { width: 40px; height:40px; background:red; position:absolute; right:-60px; top:50%; transform:translateY(-50%);}
    .grid_column_2 { display: flex; gap: 40px; }
    .sub_fund_item { flex: 1; }
    .img_frame_small { width: 100%; height: 360px; border-radius: 12px; overflow: hidden; }
    .img_frame_small img { width: 100%; height: 100%; object-fit: cover; }

    /* 하단 카드 보정 */
    .card_desc { font-size: 16px; color: #67676F; line-height: 1.5; margin-top: 8px; }

    @media screen and (max-width: 1024px) {
        .cont_inner { padding: 0 20px; }
        .item_wrap {flex-direction:column; align-items:center;}
        .card_grid {flex-wrap:wrap;}
        .strategy_card {width: calc(50% - 10px); flex: none;}
    }

    @media screen and (max-width: 767px) {
        h3, h4 { font-size: 28px !important; }
        .strategy_card {width: 100%; min-width:100%; flex-direction:column;}
        .philosophy_box {padding:20px;}
        .item_wrap div {width:200px; height:200px;}
        .item_wrap div strong[data-v-39ac3108]::before {width:30px; height:30px;}
        .item_wrap div strong {font-size:18px;}
        .item_wrap div p {font-size:16px;}
        .wide_info_box { flex-direction: column; align-items: flex-start; }
        .img_frame { width: 100%; flex: none; height: auto; aspect-ratio: 690/360; }
        .process_flow { flex-wrap: wrap; gap: 40px 20px; }
        .arrow_next { display: none; }
        .grid_column_2 { flex-direction: column; }
    }
</style>