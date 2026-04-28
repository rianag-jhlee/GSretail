<template>
    <div class="main-container">
        <div class="title_wrap ac">
            <h2 class="page_title">{{ t.MainTitle }}</h2>
            <p class="visual_sub">{{ t.MainsubTitle }}</p>
        </div>


        <div class="content">
            <Tabs v-model="CTabIdx" :tab-items="t.Tabs1" tab-class="type_01" :tab-slide="true" @change="onTabChange1" />
            <Tabs
                v-if="CTabIdx === 0"
                v-model="CTabIdxEsgArchive"
                :tab-items="t.TabsEsgArchive"
                tab-class="type_02"
                :tab-slide="true"
            />
        
            <!-- 정도경영 -->
            <div v-show="CTabIdx === 0" class="panel" :aria-label="t.Tabs1?.[0]?.item || ''">
                <!-- 소개 -->
                <div v-show="CTabIdxEsgArchive === 0" class="panel_inner" :aria-label="t.TabsEsgArchive?.[0]?.item || ''">
                    <h2 class="tab_tit"> GS리테일은 투명하고, 공정하며, 합리적인 사고와 <br class="p_br" />실행력을 통해 윤리경영을 최우선 기본 가치로 실현합니다.</h2>
                    <section>
                        <header class="sub_header">
                            <h3>목적과 취지</h3>
                        </header>
                        <FeatureCards class="purpose_feature_cards" type="text" :items="t.PurposeFeatureItems" :no-swipe="true" />
                    </section>
                    <section class="sec_history" aria-label="정도경영 연혁">
                        <header class="sub_header">
                            <h3>연혁</h3>
                            <p>GS그룹의 정도경영 추진 방침에 따라 당사도 1995년도부터 해당 방침에 따른 다양한 활동을 전개 해 나가고 있습니다.</p>
                        </header>
                        <ul class="history_list">
                            <li v-for="item in t.HistoryItems" :key="item.period" class="history_item">
                                <div class="history_item_inner">
                                    <strong class="history_period">{{ item.period }}</strong>
                                    <p class="history_summary">{{ item.summary }}</p>
                                </div>
                                <div class="history_body">
                                    <dl class="history_detail_list">
                                        <template v-for="(detail, idx) in item.details" :key="item.period + '-' + idx">
                                            <dt v-if="detail.term">{{ detail.term }}</dt>
                                            <dd>{{ detail.desc }}</dd>
                                        </template>
                                    </dl>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
                <div v-show="CTabIdxEsgArchive === 1" class="panel_inner" :aria-label="t.TabsEsgArchive?.[1]?.item || ''">
                    <h2 class="tab_tit"> GS리테일은 투명하고, 공정하며, 합리적인 사고와 <br class="p_br" />실행력을 통해 윤리경영을 최우선 기본 가치로 실현합니다.</h2>

                </div>
                <div v-show="CTabIdxEsgArchive === 2" class="panel_inner" :aria-label="t.TabsEsgArchive?.[2]?.item || ''">

                </div>
                <div v-show="CTabIdxEsgArchive === 3" class="panel_inner" :aria-label="t.TabsEsgArchive?.[3]?.item || ''">
                 

                </div>
            </div>

            <!-- 준법경영 -->
            <div v-show="CTabIdx === 1" class="panel" :aria-label="t.Tabs1?.[1]?.item || ''">
                <!-- Figma 431:12931 — 환경경영 자료 (IR/공시 리스트 패턴) -->

            </div>


        </div>
    </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import FeatureCards from "@/components/FeatureCards.vue";

export default {
    name: "gsrsu040101",
    components: { Tabs, FeatureCards },
    props: { lang: { type: String, default: "ko" } },
    data() {
        return {
            CTabIdx: 0,
            CTabIdxEsgArchive: 0,
            langData: {
                ko: {
                    MainTitle: "컴플라이언스",
                    MainsubTitle: "Compliance",
                    Tabs1: [{ item: "정도경영" }, { item: "준법경영" }],
                    TabsEsgArchive: [
                        { item: "소개" },
                        { item: "지침" },
                        { item: "제도" },
                        { item: "제보" },
                    ],
                    PurposeFeatureItems: [
                        {
                            title: "정당성 획득",
                            desc: "기업의 존재가치에 대한 사회적 <br /> 정당성 획득의 기반을 갖춘다.",
                        },
                        {
                            title: "경쟁력 향상",
                            desc: "장기적인 측면에서 기업 및 <br />국가의 경쟁력을 향상시킨다.",
                        },
                        {
                            title: "마찰과 갈등해소",
                            desc: "행동에 대한 올바른 기본을<br />제시함으로써 구성원간의 마찰과<br />갈등을 해소할 수 있다.",
                        },
                    ],
                    HistoryItems: [
                        {
                            period: "2016 ~ 현재",
                            summary: null,
                            details: [
                                { term: "당사주요활동", desc: "상시모니터링 시스템 도입" },
                                { term: null, desc: "Fair DNA 캠페인 진행" },
                                { term: null, desc: "자회사 정도경영 활동 지원​" },
                                { term: null, desc: "윤리규범 및 청렴규정 제정('21.7월)" },
                                { term: null, desc: "전사 직책자 대상 정도경영 항목 평가 반영('21~)" },
                            ],
                        },
                        {
                            period: "2003 ~ 2015",
                            summary: "지속적인 추진",
                            details: [
                                { term: "그룹주요활동", desc: "정도경영 TFT 발족 ('03.4월)" },
                                { term: null, desc: "윤리규범 실천 및 자매사의 공정/투명성 감사 강화" },
                                { term: "당사주요활동", desc: "부정비리적발감사에서 사전업무 진단위주로 업무전환" },
                                { term: null, desc: "정도경영 사이트 구축('03. 7월)" },
                                { term: null, desc: "GS리테일 포브스 경영품질 대상​ 윤리경영부문 1위('07.8월)" },
                            ],
                        },
                        {
                            period: "2002 ~ 2003",
                            summary: "윤리규범 실천기반 조성",
                            details: [
                                { term: "그룹주요활동", desc: "평가 반영 시스템 운영" },
                                { term: null, desc: "윤리규범 준수 실천 여부에 대한 확인 감사" },
                                { term: "당사주요활동", desc: "'02년 7월 3사 통합 후 윤리규범 세무실천지침 제정 후 공포 ('02.8월)" },
                                { term: null, desc: "전 임직원 윤리규범실천서약" },
                                { term: null, desc: "경력 및 신입사원 윤리규범교육 지속 실시" },
                            ],
                        },
                        {
                            period: "1995 ~ 2001",
                            summary: "윤리규범 실천기반 조성",
                            details: [
                                { term: "그룹주요활동", desc: "'93년 공정, 정직, 성실 보고" },
                                { term: null, desc: "'95년 윤리규범 제정 선포공정거래제도 완비" },
                                { term: "당사주요활동", desc: "윤리규범 추진부서 : 감사팀('96)" },
                                { term: null, desc: "'96.4月 윤리규범 교육 및 실천의지 다짐 : 전사 대리이상" },
                                { term: null, desc: "불공정사례 신고센터 운영 부정, 비리관련 내부감사 지속" },
                            ],
                        },
                    ],
                },
              
            }
        };
    },
    computed: {
        t() {
            const selected = this.langData[this.lang];
            if (selected && Array.isArray(selected.Tabs1) && selected.Tabs1.length > 0) {
                return selected;
            }
            return this.langData.ko;
        },
    },
    methods: {
        onTabChange1(idx) {
            this.CTabIdx = idx;
            this.CTabIdxEsgArchive = 0;
        },
    },
}; 
</script>

<style scoped>
.p_br{display:block;}
img{width:100%; height:auto; display:block; object-fit: cover;}
.main-container { width: 100%; position: relative; display: block; }
.title_wrap { width: 100%; height: 480px; padding: 10.91% 0 11.25%; background: url(@/assets/images/dummy/gsrsu040101_bg.jpg) no-repeat center / cover; text-align: center; position: relative; display: block; }
.title_wrap::after{content:'';width:100%; height:100%; background-color:rgba(0, 0, 0, 0.5);position:absolute;left: 0; top:0; z-index:1;}
.page_title { color: #FFFFFF; font-size: 7.2rem; font-weight: 700;line-height:1.24;letter-spacing: -0.02em; text-align: center; position: relative; display: block; z-index: 2;}
.content { width: 100%; max-width: 1460px; margin: 0 auto; padding: 0 20px 200px; position: relative; display: block; }
.panel { padding-top: 80px; }
section+section{margin-top:120px;}
.sub_header{margin-bottom:40px;}
.sub_header h3 { font-weight: 700; font-size: 4rem; line-height: 1.35; letter-spacing: -0.01em; }
.sub_header p { margin-top: 16px; font-size: 2.4rem; line-height: 1.5; letter-spacing: -0.01em; }
.tab_tit{ margin-bottom:80px;padding: 20px 0; font-weight: 700;font-size: 3.2rem;line-height: 1.3;letter-spacing: -0.01em;text-align: center;}
.purpose_feature_cards :deep(.feature_card_list) { gap: 20px; }
.purpose_feature_cards :deep(.feature_card_item) { width: calc((100% - 40px) / 3); min-height: 194px; padding: 32px; border-radius: 12px; background-color: #f8f8f8; }
.purpose_feature_cards :deep(.feature_card_title) { margin-bottom: 6px; color: #107af2; font-size: 1.8rem; font-weight: 700; line-height: 1.5; letter-spacing: 0; }
.purpose_feature_cards :deep(.feature_card_desc) { font-size: 2rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_history { position: relative; }
.history_list{padding-left:48px;position:relative;}
.history_item { display: flex; gap: 32px; position: relative; }
.history_item:first-child { margin-top: 0; }
.history_item::before { content: ""; width: 8px; height: 8px; background-color: #107af2; border: 8px solid #cfe4fc; border-radius: 50%; position: absolute; top: 11px; left: -48px; z-index: 5;}
.history_item:not(:last-child)::after { content: ""; width: 1px;height:100%; background-color: #107af2; position: absolute; top: 12px; bottom: 0; left: -36px; }
.history_period { width: 300px; font-size: 3.2rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; flex-shrink: 0; display: block;}
.history_body { width: 100%; padding-bottom: 100px; }
.history_summary { font-size: 1.6rem;line-height: 1.5; letter-spacing: -0.01em;}
.history_detail_list { display: grid; grid-template-columns: 103px minmax(0, 1fr); row-gap: 0; column-gap: 20px; align-items: start; }
.history_detail_list > dt { padding:14px 0; color:#90909A; font-size: 2rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; grid-column: 1; }
.history_detail_list > dd { padding:14px 0; font-size: 2rem; line-height: 1.35; letter-spacing: -0.01em; word-break: keep-all; grid-column: 2; }
.history_detail_list > dd + dt { margin-top: 32px; }
.history_detail_list > dd + dt + dd { margin-top: 32px; }
    
@media screen and (max-width: 1024px) {
   
}
@media screen and (max-width: 768px) {
    .p_br{display:none;}
    .content { width: 100vw; max-width: 100%; padding: 0 20px 100px; }
    .panel{padding-top: 48px;}
    .title_wrap { display: none; }
    .page_title { font-size: 4rem; }
    .visual_sub { font-size: 2rem; }
    .tab_tit { margin-bottom:56px;padding: 0; font-size: 2rem; text-align: left;}
    .sub_header{margin-bottom:32px;}
    .sub_header h3 { font-size: 2.8rem; text-align: left; }
    .sub_header p { margin-top: 12px; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .purpose_feature_cards :deep(.feature_card_list) { gap: 12px; }
    .purpose_feature_cards :deep(.feature_card_item) { width: 100%; min-height: 0; padding: 24px; }
    .purpose_feature_cards :deep(.feature_card_title) { margin-bottom: 8px; font-size: 1.6rem; line-height: 1.4; }
    .purpose_feature_cards :deep(.feature_card_desc) { font-size: 1.8rem; line-height: 1.35; }
    .sec_history { margin-top: 24px; padding-left: 0; }
    .history_list { padding-left: 20px; }
    .history_item { gap: 8px; flex-direction: column; }
    .history_item::before { width: 8px; height: 8px; border-width: 4px; top: 8px; left: -20px; }
    .history_item:not(:last-child)::after { top: 16px; left: -12px; }
    .history_item:last-child .history_body { padding-bottom: 0; }
    .history_period { width: 100%; font-size: 2.4rem; line-height: 1.35; }
    .history_body { margin-top:12px;padding-bottom: 42px; }
    .history_summary { font-size: 1.4rem; line-height: 1.4; }
    .history_detail_list {  display: grid; grid-template-columns: minmax(0, 1fr); row-gap: 6px; column-gap: 0; }
    .history_detail_list > dt { padding: 6px 0 ;; font-size: 1.6rem; line-height: 1.4; grid-column: 1; }
    .history_detail_list > dd { padding: 0; font-size: 1.6rem; line-height: 1.4; grid-column: 1; }
    .history_detail_list > dd + dt { margin-top: 24px; }
    .history_detail_list > dd + dt + dd { margin-top: 0; }
   
}
</style>