<template>
    <div class="main-container">
        <div class="title_wrap ac">
            <h2 class="page-title">{{ t.MainTitle }}</h2>
            <p class="visual-sub">{{ t.MainsubTitle }}</p>
        </div>

        <section class="section-investor">
            <div class="cont_inner">
                <Tabs v-model="CTabIdx" :tab-items="t.Tabs1" tab-class="type_01" :tab-slide="true" @change="onTabChange1" />
                <div class="tab_content_wrap">
                    <!-- pageid:gsrin0101 -->
                    <section class="tab_content gsrin0101" v-if="CTabIdx === 0" :aria-label="t.Tabs1?.[0]?.item || ''">
                        <!-- green life together -->
                        <p class="tab_desc">
                            GS리테일은 통합 GS리테일 출범 이후 지속가능한 기업의 가치창출을 위해 
                            ‘Green Life Together’라는 ESG비전을 수립하였습니다.<br/>
                            이 중장기 비전이 실행될 수 있도록 환경과 사회의 세부전략 및 과제를 추진하고 있으며, <br/>
                            이행현황과 지속가능한 경영의 성과를 이해관계자와 지속 소통해가겠습니다.
                        </p>

                        <div class="sec_vision_together" :aria-label="t.VisionTogetherAria">
                            <h3 class="vision_main_title">{{ t.VisionMainTitle }}</h3>
                            <div class="vision_two_col">
                                <div class="vision_col vision_col_env">
                                    <strong class="vision_col_tit">{{ t.VisionEnvLabel }}</strong>
                                    <span class="vision_col_sub">{{ t.VisionEnvSub }}</span>
                                    <ul class="vision_circle_list">
                                        <li v-for="(item, idx) in t.VisionEnvItems" :key="'env-' + idx" class="vision_item">
                                            <p class="vision_item_tit">{{ item.title }}</p>
                                            <p class="vision_item_desc">{{ item.desc }}</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="vision_col vision_col_soc">
                                    <strong class="vision_col_tit">{{ t.VisionSocLabel }}</strong>
                                    <span class="vision_col_sub">{{ t.VisionSocSub }}</span>
                                    <ul class="vision_circle_list">
                                        <li v-for="(item, idx) in t.VisionSocItems" :key="'soc-' + idx" class="vision_item">
                                            <p class="vision_item_tit">{{ item.title }}</p>
                                            <p class="vision_item_desc">{{ item.desc }}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <article>
                            <header class="sub_header">
                                <h3>{{ t.esgTitle }}</h3>
                                <p>{{ t.esgDesc }}</p>
                            </header>
                            <div class="esg_process" :aria-label="t.esgProcessTitle">
                                <ol class="esg_flow">
                                    <li v-for="(item, idx) in t.esgFlowItems" :key="'flow-' + idx" class="esg_flow_step">
                                        <div class="esg_flow_card" :class="{ final: idx === t.esgFlowItems.length - 1 }">
                                            <header class="esg_flow_card_head">
                                                <strong class="esg_flow_card_title">{{ item.title }}</strong>
                                                <p v-if="item.meta" class="esg_flow_card_meta">{{ item.meta }}</p>
                                            </header>
                                            <p class="esg_flow_card_desc">{{ item.desc }}</p>
                                        </div>
                                        <div v-if="idx < t.esgFlowItems.length - 1" class="esg_flow_connector" aria-hidden="true">
                                            <p><span class="esg_flow_connector_text">{{ item.connectorLeft }}</span></p>
                                            <p><span class="esg_flow_connector_text">{{ item.connectorRight }}</span></p>  
                                        </div>
                                    </li>
                                </ol>
                                <p class="esg_flow_note">{{ t.esgFlowNote }}</p>
                            </div>
                            <section class="esg_committee_table" :aria-label="t.esgTableHeader">
                                <table>
                                    <thead>
                                        <tr>
                                            <th colspan="2">{{ t.esgTableHeader }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(leftItem, idx) in t.esgTableLeftItems" :key="'tbl-row-' + idx">
                                            <td>{{ leftItem }}</td>
                                            <td>{{ t.esgTableRightItems[idx] }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>

                        </article>
                       
                        <p class="title-sub-text" v-html="t.MainDesc"></p>
                        <div class="subtit_wrap ac">
                            <h3 class="section-sub-title">{{ t.CharterTitle }}</h3>
                        </div>

                        <div class="policy_wrap">
                            <dl>
                                <dt>{{ t.PolicyIntroTitle }}</dt>
                                <dd v-html="t.PolicyIntroDesc"></dd>

                                <template v-for="(section, idx) in t.PolicySections" :key="'section-'+idx">
                                    <dt>{{ section.title }}</dt>
                                    <dd>
                                        <template v-for="(sec, sIdx) in section.content" :key="'content-'+idx+'-'+sIdx">
                                            <strong class="bullet_title" :class="{mt30: sIdx > 0}">{{ sec.subTitle }}</strong>
                                            <ul v-if="sec.list && sec.list.length > 0" class="mt15 bullet_01 no_type">
                                                <li v-for="(li, lIdx) in sec.list" :key="'l-'+idx+'-'+sIdx+'-'+lIdx">{{ li }}</li>
                                            </ul>
                                        </template>
                                    </dd>
                                </template>
                            </dl>
                        </div>
                    </section>


                    <!-- pageid:gsrin0102 -->
                    <section class="tab_content" v-if="CTabIdx === 1" :aria-label="t.Tabs1?.[1]?.item || ''"></section>
                    <!-- pageid:gsrin0103 -->
                    <section class="tab_content" v-if="CTabIdx === 2" :aria-label="t.Tabs1?.[2]?.item || ''">
                    </section>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";

export default {
    name: "gsrsu0101",
    components: { Tabs },
    props: { lang: { type: String, default: "ko" } },
    data() {
        return {
            CTabIdx: 0,
            langData: {
                ko: {
                    MainTitle: "지속가능경영",
                    MainsubTitle: "Sustainable management",
                    MainDesc: [
                        "GS리테일은 통합 GS리테일 출범 이후 지속가능한 기업의 가치창출을 위해 ‘Green Life Together’라는 ESG비전을 수립하였습니다.<br/>이 중장기 비전이 실행될 수 있도록 환경과 사회의 세부전략 및 과제를 추진하고 있으며, 이행현황과 지속가능한 경영의 성과를 이해관계자와 지속 소통해가겠습니다",

                    ],
                    Tabs1: [{ item: "비전&전략" }, { item: "ESG 자료실" }, { item: "지속가능경영보고서" }],
                    VisionTogetherAria: "Green Life Together — 환경·사회",
                    VisionMainTitle: "Green Life Together.",
                    VisionEnvLabel: "환경",
                    VisionEnvSub: "Green Together",
                    VisionSocLabel: "사회",
                    VisionSocSub: "Life Together",
                    VisionEnvItems: [
                        { title: "Green Product", desc: "지속가능한 제품 확대\n책임 있는 원재료 조달" },
                        { title: "Green Store", desc: "친환경 매장 확대\n자원 가치 재창출" },
                        { title: "Green Value-chain", desc: "환경경영 기반 강화\n기후변화 대응" },
                    ],
                    VisionSocItems: [
                        { title: "Together with Employees", desc: "함께 성장하는 조직문화 조성\n인권경영 기반 확대" },
                        { title: "Together with Partners", desc: "공정거래 관리체계 강화\n지속가능한 공급망 운영" },
                        { title: "Together with Customers", desc: "진심을 담은 마케팅 실천\n고객 만족 극대화" },
                        { title: "Together with Communities", desc: "지역사회 상생발전 도모\n사회공헌 성과 관리체계 구축" },
                    ],

                    // [Tab 1] 지배구조헌장 전체 데이터 (KO)
                    CharterTitle: "Green Life Together!", 
                    PolicyIntroTitle: "전문",
                    PolicyIntroDesc: "<p class='desc'>㈜GS리테일(이하 “회사”라 함.)은 건전한 기업지배구조 확립을 기반으로 하여, 모든 이해관계자와 신뢰를 구축하고, 끊임없는 도전으로 고객의 라이프 이노베이션(Life Innovation)을 선도하는 회사로 도약하고자 한다. 이러한 비전 달성을 위해 본 기업지배구조헌장을 제정한다.</p><p class='desc'>회사는 본 기업지배구조헌장에 따라, 주주의 권리 보장, 이사회의 역할과 책임, 전문 감사기구의 독립적 운영 등 회사의 건전한 지배구조를 확립하여, 공정하고 투명한 경영활동을 지향하며, 주주·고객·임직원 등 모든 이해관계자의 지속적인 권익 증진을 위해 노력한다.</p>",
                    PolicySections: [
                        {
                            title: "I. 주 주",
                            content: [
                                { subTitle: "1. 주주의 권리", list: [
                                    "① 주주는 회사의 소유자이며, 이익 분배에 참여 할 수 있는 권리, 주주총회 참석 및 의결권을 행사 할 수 있는 권리, 주주총회의 목적사항을 제안할 수 있는 권리 등 관련 법령이 보장하는 기본적인 권리를 보장 받는다.",
                                    "② 정관의 변경, 합병, 영업양수도 및 기업의 분할, 해산, 자본금의 감소 등 관련 법령이 정하는 사항 중 회사의 존립과 주주권에 중대한 변화를 가져오는 사항은 주주의 권리를 최대한 보장하여, 주주총회를 통해 결정한다.",
                                    "③ 회사는 주주총회의 결의가 투명하고 공정한 절차에 따라 이루어지도록 노력하며, 주주에 대하여 주주총회 참석 전에 주주총회의 일시와 장소 및 의안 의결권의 행사 방법 등에 관하여 충분한 정보를 제공한다.",
                                    "④ 주주권의 행사는 주주의 자유로운 의사에 따라 행사되어야 한다."
                                ]},
                                { subTitle: "2. 주주의 공평한 대우", list: [
                                    "① 주주는 1주 1의결권 원칙에 따라 권리를 보장 받는다. 단, 법령에 의거하여, 특정 주주의 의결권이 제한되는 경우, 관련 법령을 따른다. 회사는 상법 및 관련 법령이 정하는 기준에 따라 주주의 본질적인 권리가 훼손되지 않도록 공평하게 대우한다.",
                                    "② 회사는 주주에게 필요한 정보를 적시에 충분히 이해할 수 있도록 쉽게 구성하여, 공평한 방법으로 제공한다. 또한 부당한 내부거래 및 자기거래로부터 주주가 보호될 수 있도록 노력한다."
                                ]},
                                { subTitle: "3. 주주의 책임", list: [
                                    "① 주주는 회사의 발전과 이익을 위하여. 자신의 의결권을 적극적으로 행사하여야 한다.",
                                    "② 회사 경영에 영향력을 행사하는 지배주주는 회사와 다른 모든 주주의 이익을 고려하여 주주권을 행사하며, 그 지배권을 남용하여 다른 주주에게 손해가 발생하지 않도록 노력해야 한다."
                                ]}
                            ]
                        },
                        {
                            title: "II. 이 사 회",
                            content: [
                                { subTitle: "1. 이사회의 기능", list: [
                                    "① 이사회는 관련 법령에 의거하여, 경영에 대해 포괄적인 권한을 가지며, 회사와 주주의 이익을 위하여 회사의 기본적인 경영목표를 결정하고, 법령, 정관, 이사회 규정 등 관련 규정이 정하는 회사의 주요 의사 결정 사항에 대한 심의, 의결을 한다.",
                                    "② 이사회는 투명하고, 공정한 회사의 업무 수행 및 주주가치 훼손 방지를 위해 경영진의 활동을 감독한다.",
                                    "③ 이사회는 관련 법령, 정관, 이사회 규정 등에 의해, 위임이 허용되지 않는 주요한 사항을 제외하고, 대표이사 또는 이사회 내 위원회에 권한을 위임할 수 있다."
                                ]},
                                { subTitle: "2. 이사회의 구성", list: [
                                    "① 회사는 이사회에서 다양한 논의와 효율적인 의사결정이 가능하도록 6 인 이상의 이사로 이사회를 구성하며, 이사회 독립성 보장을 위해 사외이사는 이사회 구성원 총수의 과반수 이상으로 구성한다.",
                                    "② 이사회는 회사의 투명한 경영에 대한 감독기능을 강화하기 위하여 감사위원회를 설치하며, 각 상정 안건에 대한 객관적이고 전문적인 심의를 위해 기타 법령, 정관에서 정하는 바에 따라 이사회 내 위원회를 설치 할 수 있다."
                                ]},
                                { subTitle: "3. 이사의 선임", list: [
                                    "① 이사는 이사회 추천, 사외이사후보추천위원회 추천, 주주 추천 등의 방법을 통해 선정된 후보자에 대해, 주주총회 결의로 선임하며, 회사는 전문성이 충분히 검증된 후보자가 이사로 선임되어, 이사회 중심의 기업경영이 달성될 수 있도록 노력한다.",
                                    "② 대표이사는 주주총회에서 선임된 이사 중에서 이사회의 결의에 의하여 선임한다.",
                                    "③ 이사회 의장은 주주총회에서 선임된 이사 중 이사회의 결의로 선임하되, 대표이사와의 겸직을 지양한다."
                                ]},
                                { subTitle: "4. 이사의 자격", list: [
                                    "① 사내이사는 회사의 사업 내용과 관련된 풍부한 경험과 전문지식을 갖춰야하며, 회사의 발전과 주주가치의 제고에 기여할 수 있어야 한다.",
                                    "② 사외이사는 법조, 재무, 회계, 신사업, IT-TECH, 공공부문 등에서 충분한 식견과 전문성을 갖춘 자로, 회사와 중대한 이해관계가 없고, 독립성이 검증 되어야 한다."
                                ]},
                                { subTitle: "5. 이사회의 운영", list: [
                                    "① 이사회는 정기이사회와 필요에 따라 개최되는 임시이사회로 운영되며, 회사는 이사회의 원활한 운영을 위하여 이사회의 권한과 책임, 운영절차 등을 구체적으로 규정한 이사회 규정을 제정, 운영한다.",
                                    "② 회사는 이사회 내 위원회의 원활한 운영을 위하여 위원회의 권한과 책임, 운영절차 등을 구체적으로 규정한 위원회 규정을 제정, 운영한다.",
                                    "③ 회사는 이사회 회의의 경과 과정, 중요한 심의 내용을 기록한 의사록을 작성하고 이를 보관하여야 한다."
                                ]},
                            ]
                        },

                    ],
                    esgTitle: "ESG 거버넌스",
                    esgDesc: "GS리테일은 실천하는 ESG경영을 위해 실무조직으로 구성된 ESG자주연을 비롯해 이사회 내 ESG위원회 운영까지 ESG에 관한 거버넌스를 구축하여 운영하고 있습니다.",
                    esgFlowItems: [
                        {
                            title: "ESG위원회",
                            meta: "이사회內",
                            desc: "이사회 산하 ESG위원회를 통해 ESG 관련 주요 안건 승인",
                            connectorLeft: "승인",
                            connectorRight: "보고",
                        },
                        {
                            title: "ESG 추진협의회",
                            meta: "CEO 및 C레벨 8인",
                            desc: "분기 1회 CEO 주재 추진협의회를 통해 ESG관련 사항 의사결정",
                            connectorLeft: "의사결정",
                            connectorRight: "의안상정",
                        },
                        {
                            title: "ESG 총괄사무국",
                            meta: "지속가능경영부문/ESG파트",
                            desc: "ESG 전담 실행 부서",
                            connectorLeft: "결과 공유",
                            connectorRight: "과제취합",
                        },
                        {
                            title: "ESG 실무협의체",
                            meta: "",
                            desc: "ESG 실행 점검 및 이슈 관련 빠른 협의",
                            connectorLeft: "결과 공유",
                            connectorRight: "과제협의/실행점검",
                        },
                        {
                            title: "BU별 ESG 자주연*",
                            meta: "",
                            desc: "ESG 과제 실행 조직 (과제 수립 및 실행)",
                            connectorLeft: "",
                            connectorRight: "",
                        },
                    ],
                    esgFlowNote: "* 자주연: 자기주도연구회",
                    esgTableHeader: "주요 분야별 위원회/협의회",
                    esgTableLeftItems: [
                        "[환경] 환경영향평가위원회",
                        "[임직원] 노사정협의회",
                        "[경영주] 경영주협의회",
                    ],
                    esgTableRightItems: [
                        "[환경] 환경영향평가위원회",
                        "[임직원] 노사정협의회",
                        "[경영주] 경영주협의회",
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
        }
    },
    methods: {
        onTabChange1(idx) {
            this.CTabIdx = idx;
        },
    },
}; 
</script>

<style scoped>
/*::::::::::::::::::::::::::::::: PC Style :::::::::::::::::::::::::::::::*/
:deep(.tab_content){padding-top: 80px;}
.main-container {width: 100%; position: relative; display: block;}
.section-investor {width: 100%; position: relative; display: block;}
.title_wrap {width: 100%; height:480px;  padding:10.91% 0 11.25%; background: url(@/assets/images/dummy/gsrsu0101_bg.jpg) no-repeat center / cover; text-align: center; position: relative; display: block;}
.page-title {color: #FFFFFF; font-size: 7.2rem; font-weight: 700; text-align: center; display: block;}
/* .sub_header{} */
.sub_header h3{font-weight: 700;font-size: 4rem;line-height: 1.3;letter-spacing: -0.01em;}
.sub_header p{margin-top: 16px;font-size: 2.4rem;line-height: 1.5;letter-spacing: -0.01em;}
.esg_process {margin-top: 40px;}
.esg_flow {margin-top: 0;}
.esg_flow_step + .esg_flow_step {margin-top: 0;}
.esg_flow_card {
    width: 100%;
    min-height: 120px;
    padding: 10px 20px;
    background: #E7F2FE;
    border-radius: 99px;
    display: flex;
    align-items: center;
}
.esg_flow_card.final {background: #E8F8F1;}
.esg_flow_card_head {
    width: 400px;
    height: 100%;
    min-height: 100px;
    padding: 0 16px;
    background: #ffffff;
    border-radius: 99px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
}
.esg_flow_card_title {font-size: 2.4rem;font-weight: 700;line-height: 1.35;letter-spacing: -0.01em;}
.esg_flow_card_meta {margin-top: 4px;font-size: 1.6rem;line-height: 1.5;letter-spacing: -0.01em;}
.esg_flow_card_desc {
    margin-left: 36px;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.35;
    letter-spacing: -0.01em;
}
.esg_flow_connector {
    width: 420px;
    height: 84px;
    padding: 30px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:40px;
    
}
.esg_flow_connector > p{flex:1;}
.esg_flow_connector_text {font-size: 1.6rem;line-height: 1.5;letter-spacing: -0.01em;display: flex;align-items: center; gap:12px}
.esg_flow_connector > p:first-child > span{justify-content: flex-end;}
.esg_flow_connector > p:last-child > span{justify-content: flex-start;}
.esg_flow_connector_text::after{
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background: #15B874;
}

.esg_flow_connector > p:last-child > span::after{
    background: #107AF2;
}
.esg_flow_connector > p:last-child > span::after{
    content: none;
}
.esg_flow_connector > p:last-child > span::before{
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background: #107AF2;
}
.esg_flow_connector_down {
    width: 10px;
    height: 18px;
    margin: 0 6px;
    background: #00a86f;
    border-radius: 999px;
    display: inline-block;
}
.esg_flow_connector_up {
    width: 10px;
    height: 18px;
    margin-right: 6px;
    background: #1348e5;
    border-radius: 999px;
    display: inline-block;
}
.esg_flow_note {margin-top: 0;padding: 24px 0 0 24px;font-size: 1.6rem;line-height: 1.5;letter-spacing: -0.01em;color: #67676f;}
.esg_committee_table {
    width: 100%;
    margin-top: 40px;
}
.esg_committee_table table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #E5E5E9;
}
.esg_committee_table thead th {
    width: 100%;
    height: 70px;
    padding: 0 24px;
    background: #F8F8F8;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.01em;
    text-align: center;
    border-right: 1px solid #E5E5E9;
    border-bottom: 1px solid #E5E5E9;
}
.esg_committee_table tbody td {
    width: 50%;
    height: 49px;
    padding: 24px;
    border-right: 1px solid #E5E5E9;
    font-size: 1.8rem;
    line-height: 1.4;
    letter-spacing: 0;
    text-align: center;
}
.visual-sub {margin-top: 10px; color: #FFFFFF; font-size: 3.2rem; font-weight: 700; text-align: center;}
.cont_inner {width: 100%; max-width: 1420px; margin: 0 auto; padding-bottom:200px;}
.title-sub-text {width: 100%; padding: 120px 0;font-weight: 700;font-size: 2rem;line-height: 1.35;letter-spacing: -0.01em;text-align: center;}
.subtit_wrap {width: 100%; padding: 60px 40px; color:#fff;background: #15B874; border-radius: 16px; text-align: center; display: flex; flex-direction: column; justify-content: center;}
.subtit_wrap h3{font-weight: 700;font-size: 4.8rem;line-height: 1.3;letter-spacing: -0.01em;text-align: center;}
.policy_wrap {padding: 32px 0; text-align: left;}
.policy_wrap dt {margin-top: 32px; color: #2c2c2c; font-size: 2.4rem; font-weight: 700;}
.policy_wrap dt:first-child {margin-top: 0;}
.policy_wrap dd {margin-top: 32px; padding-bottom:32px;color: #444444; font-size: 1.8rem; line-height: 1.8;border-bottom: 1px solid #D7D7DF;}
.policy_wrap dd:last-child {border-bottom: 0;}
.bullet_title {color: #161618; font-size: 2rem; font-weight: 700; display: block;}
.bullet_01 {margin-top: 16px;font-size:1.8rem;}
.bullet_01 li{font-size: 1.8rem;line-height: 1.4;letter-spacing: 0%;}
.bullet_01 li.point {color:#242428}
.policy_wrap > dl > dd > ul > li{padding-left: 24px;}
.policy_wrap > dl > dd > ul + strong{margin-top:32px; margin-bottom:0;}

.ac {text-align:center;}

/* Green Life Together — 환경·사회 2열 + CSS 겹침 원 */
.tab_desc {padding:20px 0;font-size: 2.4rem;line-height: 1.5;letter-spacing: -0.01em;text-align: center;}
.sec_vision_together{margin-top: 80px;}
.vision_main_title {font-size: 7rem;font-weight: 700;line-height: 1.24;text-align: center;}
.vision_two_col {
    width: 100%;
    margin-top: 24px;
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    justify-content: center;
    gap: 50px;
}
.vision_col {
    width: calc((100% - 50px) / 2);
    max-width: 400px;
    padding: 64px 50px;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 270px;
    border: 2px dashed;
}
.vision_col_env {border-color: #11935D;}
.vision_col_soc {border-color: #0D62C2;}
.vision_col_tit {font-size: 4rem;font-weight: 700;line-height: 1.3;letter-spacing: -0.01em;}
.vision_col_env .vision_col_tit,
.vision_col_env .vision_col_sub {color: #11935D;}
.vision_col_soc .vision_col_tit,
.vision_col_soc .vision_col_sub {color: #0D62C2;}
.vision_col_sub {font-size: 2rem;line-height: 1.35;letter-spacing: -0.01em;}

.vision_circle_list {
    margin-top:auto;
    padding-top: 40px;
    flex-direction: column;
    align-items: center;
}
.vision_item {
    width: clamp(180px, 22vw, 300px);
    height: clamp(180px, 22vw, 300px);
    flex: 0 0 auto;
    padding: 0 32px;
    border-radius: 50%;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity:0.8;
}
.vision_item + .vision_item{ margin-top: -6.7%;}
.vision_col_env .vision_item {
    background: rgba(157, 226, 197, 1)
}
.vision_col_soc .vision_item {
    background: rgba(161, 196, 255, 1);
}
.vision_col_soc .vision_item + .vision_item {margin-top: -30%;}
.vision_item_tit {font-weight: 700;font-size: 2rem;line-height: 1.35;letter-spacing: -0.01em;}
.vision_item_desc {margin-top: 12px;padding:0 24px;font-size: 1.6rem;line-height: 1.4;letter-spacing: -0.01em;}

/*::::::::::::::::::::::::::::::: Responsive :::::::::::::::::::::::::::::::*/
@media screen and (max-width:1024px) {
    .cont_inner {padding: 0 20px;}
    

}

@media screen and (max-width: 767px) {
    .cont_inner {padding: 0 20px;}
    .title_wrap {display:none;}
    .page-title {font-size: 4rem;}
    .visual-sub {font-size: 2rem;}
    .policy_wrap {padding: 30px 20px;}
    .policy_wrap dt {margin-top: 40px; font-size: 2rem;}
    .policy_wrap dd {font-size: 1.6rem;}
    .bullet_01 li {font-size:1.6rem;}
 
    
}
</style>