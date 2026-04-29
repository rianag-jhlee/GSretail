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
            <Tabs
                v-if="CTabIdx === 1"
                v-model="CTabIdxCompliance"
                :tab-items="t.TabsCompliance"
                tab-class="type_02"
                :tab-slide="true"
            />

            <!-- 정도경영 -->
            <div v-show="CTabIdx === 0" class="panel" :aria-label="t.Tabs1?.[0]?.item || ''">
                <!-- 소개 -->
                <div v-show="CTabIdxEsgArchive === 0" class="panel_inner" :aria-label="t.TabsEsgArchive?.[0]?.item || ''">
                    <header class="tab_tit_wrap">
                        <h2 class="tab_tit"> GS리테일은 투명하고, 공정하며, 합리적인 사고와 <br class="p_br" />실행력을 통해 윤리경영을 최우선 기본 가치로 실현합니다.</h2>
                    </header>
                    <section>
                        <header class="sub_header">
                            <h3>목적과 취지</h3>
                        </header>
                        <FeatureCards
                            class="purpose_feature_cards feature_cards_grid"
                            type="text"
                            :items="t.PurposeFeatureItems"
                            :no-swipe="true"
                        />
                    </section>
                    <section class="sec_history" aria-label="정도경영 연혁">
                        <header class="sub_header">
                            <h3>연혁</h3>
                            <p>GS그룹의 정도경영 추진 방침에 따라 당사도 1995년도부터 해당 방침에 따른 다양한 활동을 전개 해 나가고 있습니다.</p>
                        </header>
                        <ul class="history_list">
                            <li v-for="item in t.HistoryItems" :key="item.period" class="history_item">
                                <div>
                                    <strong class="history_period">{{ item.period }}</strong>
                                    <p v-if="item.summary" class="history_summary">{{ item.summary }}</p>
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
                <!-- 지침 -->
                <div v-show="CTabIdxEsgArchive === 1" class="panel_inner" :aria-label="t.TabsEsgArchive?.[1]?.item || ''">
                    <header class="tab_tit_wrap">
                        <h2 class="tab_tit"> GS리테일은 투명하고, 공정하며, 합리적인 사고와 <br class="p_br" />실행력을 통해 윤리경영을 최우선 기본 가치로 실현합니다.</h2>
                    </header>
                    <section class="gray_box">
                        <header class="sub_header">
                            <h3>GS리테일 윤리규범</h3>
                            <p>GS리테일은 상호 신뢰와 협력을 토대로 모든 이해관계자와 공동의 이익을 추구함으로써 모두가 선망하는 Value No.1 기업으로 발전하기 위해 올바른 행동과 가치 판단의 기준으로 윤리규범을 제정하고 정도경영의 길을 걷습니다.</p>
                        </header>
                        <div class="button_area"><Buttons tag="a" href="#none" btn-class="btn_icon btn_xl after border">㈜GS리테일 윤리규범</Buttons></div>
                    </section>
                    <section class="sec_ethics_cards">
                        <ul class="card_list" role="list">
                            <li v-for="card in t.EthicsCardItems" :key="card.key">
                                <CardItem :thumb-src="card.image" :thumb-alt="card.imgAlt || ''">
                                    <template v-if=" card.title" #title>{{ card.title }}</template>
                                    <p v-if="card.desc">{{ card.desc }}</p>
                                </CardItem>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <header class="sub_header">
                            <h3>GS리테일실천지침</h3>
                            <p>본 내용은 정직과 공정의 신조직문화 창출을 위하여 GS리테일인으로서 지켜야 할 ‘임직원의 기본윤리’를 구체적으로 해설하고 실천에 용이하도록 제도화한 내용입니다.</p>
                        </header>
                        <!-- 세부실천지침 -->
                        <h4 class="practice_title">세부실천지침</h4>
                        <p class="practice_desc">본 내용은 정직과 공정의 신조직문화 창출을 위하여 GS리테일인으로서 지켜야 할 ‘임직원의 기본윤리’를 구체적으로 해설하고 실천에 용이하도록 제도화한 내용입니다.</p>
                        <ol class="base_list">
                            <li v-for="(item, idx) in t.EthicsPracticeItems" :key="item.key" class="base_item">
                                <em>{{ String(idx + 1).padStart(2, "0") }}</em>
                                <strong>{{ item.title }}</strong>
                                <p>{{ item.desc }}</p>
                            </li>
                        </ol>
                    </section>
                    <section>
                        <header class="sub_header">
                            <h3>윤리규범 실천서약</h3>
                            <p>정도경영을 위한 임직원의 기본 윤리를 숙지하고 회사업무를 수행함에 있어 GS리테일인으로서 아래의 행위를 하지 않는다.</p>
                        </header>
                        <ol class="base_list type2">
                            <li v-for="(item, idx) in t.EthicsPracticeItems" :key="item.key" class="base_item">
                                <em>{{ String(idx + 1).padStart(2, "0") }}</em>
                                <strong>{{ item.title }}</strong>
                                <p>{{ item.desc }}</p>
                            </li>
                        </ol>
                        <div class="signature_box">
                            <div>
                                <p class="signature_confirm">{{ t.EthicsPledgeText }}</p>
                                <dl>
                                    <dt>일시 : {{ t.EthicsPledgeMeta }}</dt>
                                    <dd>소속 : {{ t.EthicsPledgeCompany }}</dd>
                                    <dd>성명 : {{ t.EthicsPledgeName }}</dd>
                                </dl>
                            </div>
                            <span>주식회사 GS리테일 귀중</span>

                        </div> 
                    </section>
                </div>
                <!-- 제도 -->
                <div v-show="CTabIdxEsgArchive === 2" class="panel_inner" :aria-label="t.TabsEsgArchive?.[2]?.item || ''">
                    <div class="wrap_tabs_type03">
                        <Tabs
                            v-model="CTabIdxEsgSystem"
                            :tab-items="t.TabsEsgSystem"
                            tab-class="type_03"
                            :tab-slide="true"
                        />
                    </div>
                    <div v-show="CTabIdxEsgSystem === 0" class="panel_third_depth" :aria-label="t.TabsEsgSystem?.[0]?.item || ''">
                        <header class="sub_header">
                            <h3>제보이용안내</h3>
                        </header>
                        <ol class="base_list">
                            <li v-for="(row, idx) in t.WhistleGuideSections" :key="row.key" class="base_item">
                                <em>{{ String(idx + 1).padStart(2, "0") }}</em>
                                <strong>{{ row.title }}</strong>
                                <p v-html="row.desc"></p>
                                <div v-if="row.key === 'wg-04'" class="button_area">
                                    <Buttons tag="button" type="button" btn-class="btn_xl border btn_icon after" @click="goToWhistleTab(1)">
                                        제보자 포상제도
                                    </Buttons>
                                    <Buttons tag="button" type="button" btn-class="btn_xl border btn_icon after" @click="goToWhistleTab(2)">
                                        제보자 보호제도
                                    </Buttons>
                                </div>
                                <template v-if="row.key === 'wg-05'">
                                    <div class="gray_box">
                                        <div role="list" aria-label="제보 처리 단계" class="process_flow">
                                            <template v-for="(stepLabel, sIdx) in t.WhistleProcessSteps" :key="stepLabel">
                                                <p role="listitem">{{ stepLabel }}</p>
                                                <span
                                                    v-if="sIdx < t.WhistleProcessSteps.length - 1"
                                                    aria-hidden="true"
                                                />
                                            </template>
                                        </div>
                                    </div>
                                </template>
                                <div v-if="row.key === 'wg-06'" class="button_area">
                                    <Buttons tag="a" href="#none" btn-class="btn_xl border btn_icon after">제보하기</Buttons>
                                </div>
                            </li>
                        </ol>
                    </div>
                    <div v-show="CTabIdxEsgSystem === 1" class="panel_third_depth" :aria-label="t.TabsEsgSystem?.[1]?.item || ''">
                        <header class="sub_header">
                            <h3>{{ t.WhistleRewardPageTitle }}</h3>
                        </header>
                        <ol class="base_list whistle_reward_list">
                            <li v-for="(row, idx) in t.WhistleRewardSections" :key="row.key" class="base_item">
                                <em>{{ String(idx + 1).padStart(2, "0") }}</em>
                                <strong>{{ row.title }}</strong>
                                <div v-if="row.criteriaTables" class="reward_criteria">
                                    <template v-for="(blk, bi) in row.criteriaTables" :key="row.key + '-tbl-' + bi">
                                        <p v-if="blk.sectionLead" v-html="blk.sectionLead"></p>
                                        <div class="reward_table_scroll">
                                            <table class="reward_table">
                                                <thead>
                                                    <tr>
                                                        <th v-for="col in blk.cols" :key="col" scope="col">{{ col }}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td v-for="(cell, ci) in blk.cells" :key="ci">
                                                            <p class="reward_table_sub">{{ cell.sub }}</p>
                                                            <p v-html="cell.desc"></p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </template>
                                </div>
                                <p v-else v-html="row.desc"></p>
                            </li>
                        </ol>
                        <div class="button_area reward_report_btn">
                            <Buttons tag="a" href="#none" btn-class="btn_xl primary btn_icon after">제보하기</Buttons>
                        </div>
                    </div>
                    <div v-show="CTabIdxEsgSystem === 2" class="panel_third_depth" :aria-label="t.TabsEsgSystem?.[2]?.item || ''">
                        <header class="sub_header">
                            <h3>{{ t.WhistleProtectPageTitle }}</h3>
                            <p>{{ t.WhistleProtectPageDesc }}</p>
                        </header>
                        <ol class="base_list whistle_protect_list">
                            <li v-for="(row, idx) in t.WhistleProtectSections" :key="row.key" class="base_item">
                                <em>{{ String(idx + 1).padStart(2, "0") }}</em>
                                <strong>{{ row.title }}</strong>
                                <p v-html="row.desc"></p>
                                <div v-if="row.grayBox" class="gray_box protect_gray_box">
                                    <strong>{{ row.grayBox.title }}</strong>
                                    <p v-html="row.grayBox.desc"></p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
                <div v-show="CTabIdxEsgArchive === 3" class="panel_inner" :aria-label="t.TabsEsgArchive?.[3]?.item || ''">
                    <header class="tab_tit_wrap">
                        <h2 class="tab_tit" v-html="t.ReportIntroTitle"></h2>
                        <p class="tab_tit_desc">{{ t.ReportIntroDesc }}</p>
                    </header>
                    <section class="sec_report_channels">
                        <ul class="report_channel_list">
                            <li v-for="item in t.ReportChannelItems" :key="item.key" class="report_channel_item">
                                <article class="report_channel_card">
                                    <figure class="report_channel_thumb" :class="'thumb_' + item.key" aria-hidden="true" />
                                    <div class="report_channel_body">
                                        <h3>{{ item.title }}</h3>
                                        <p v-html="item.desc"></p>
                                        <div class="button_area">
                                            <Buttons tag="a" href="#none" btn-class="btn_xl border btn_icon after">{{ item.btnText }}</Buttons>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        </ul>
                        <p class="report_channel_notice" v-html="t.ReportNotice"></p>
                    </section>
                </div>
            </div>

            <!-- 준법경영 -->
            <div v-show="CTabIdx === 1" class="panel" :aria-label="t.Tabs1?.[1]?.item || ''">
                <div v-show="CTabIdxCompliance === 0" class="panel_inner" :aria-label="t.TabsCompliance?.[0]?.item || ''">
                    <header class="tab_tit_wrap">
                        <h2 class="tab_tit" v-html="t.ComplianceProgramHeroTitle"></h2>
                    </header>
                    <section>
                        <header class="sub_header">
                            <p v-html="t.ComplianceProgramLead"></p>
                        </header>
                        <FeatureCards
                            class="law_feature_cards feature_cards_grid"
                            type="num"
                            :items="t.ComplianceProgramFeatureItems"
                            :no-swipe="true"
                        />
                    </section>
                    <div class="compliance_manual">
                        <div class="compliance_manual_inner">
                            <div>
                                <strong>{{ t.ComplianceManualTitle }}</strong>
                                <p>{{ t.ComplianceManualMeta }}</p>
                            </div>
                            <div class="button_area">
                                <Buttons tag="a" href="#none" btn-class="btn_mid border btn_icon after">
                                    {{ t.ComplianceManualBtnEbook }}
                                </Buttons>
                                <Buttons tag="a" href="#none" btn-class="btn_mid border btn_icon after">
                                    {{ t.ComplianceManualBtnDownload }}
                                </Buttons>
                            </div>
                        </div>
                    </div>
                   
                    <!-- <section class="sec_compliance_manual" aria-label="공정거래 자율준수 편람">
                    </section> -->
                </div>
                <div v-show="CTabIdxCompliance === 1" class="panel_inner" :aria-label="t.TabsCompliance?.[1]?.item || ''">
                    <!-- 자율준수 관리자 안내 -->
                </div>
                <div v-show="CTabIdxCompliance === 2" class="panel_inner" :aria-label="t.TabsCompliance?.[2]?.item || ''">
                    <!-- 공정거래 4대 가이드라인 -->
                </div>
                <div v-show="CTabIdxCompliance === 3" class="panel_inner" :aria-label="t.TabsCompliance?.[3]?.item || ''">
                    <!-- 공정거래 업무기준 -->
                </div>
            </div>


        </div>
    </div>
</template>

<script setup>
import { computed, defineProps, ref } from "vue";
import Tabs from "@/components/Tabs.vue";
import FeatureCards from "@/components/FeatureCards.vue";
import Buttons from "@/components/Buttons.vue";
import CardItem from "@/components/CardItem.vue";
import imgEthics01 from "@/assets/images/dummy/gsrsu040101_01.png";
import imgEthics02 from "@/assets/images/dummy/gsrsu040101_02.png";
import imgEthics03 from "@/assets/images/dummy/gsrsu040101_03.png";
import imgEthics04 from "@/assets/images/dummy/gsrsu040101_04.png";
import imgEthics05 from "@/assets/images/dummy/gsrsu040101_05.png";
import imgEthics06 from "@/assets/images/dummy/gsrsu040101_06.png";

const props = defineProps({
    lang: {
        type: String,
        default: "ko",
    },
});

const CTabIdx = ref(0);
const CTabIdxEsgArchive = ref(0);
const CTabIdxEsgSystem = ref(0);
const CTabIdxCompliance = ref(0);

const langData = {
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
        TabsEsgSystem: [
            { item: "제보 이용 안내" },
            { item: "제보자 포상제도" },
            { item: "제보자 보호제도" },
        ],
        TabsCompliance: [
            { item: "자율준수 프로그램" },
            { item: "자율준수 관리자 안내" },
            { item: "공정거래 4대 가이드라인" },
            { item: "공정거래 업무기준" },
        ],
        ComplianceProgramHeroTitle:
            "GS리테일은 책임을 바탕으로 한 자유경쟁의 원칙에 따라 상호 신뢰와 협력으로 <br class=\"p_br\" />공동의 발전을 도모하기 위해 자율적으로 공정거래를 실천하고 있습니다.",
        ComplianceProgramLead:
            "GS리테일은 자율적 공정거래를 적극 실천하기 위해 ‘자율준수 프로그램’을 운영하고 있습니다.",
        ComplianceProgramFeatureItems: [
            {
                num: "01",
                title: "CP기준과 절차 마련 및 시행",
                desc: "전사 구성원들이 공정거래 관련 법규 준수사항을 명확하게 인지하고 실천할 수 있도록 필요한 업무기준과 절차를 마련하고 시행하고 있습니다.",
            },
            {
                num: "02",
                title: "최고경영자의 자율준수 의지 및 지원",
                desc: "최고경영자는 회사의 모든 구성원, 고객 및 이해관계자가 쉽게 인지할 수 있도록 자율준수 의지를 공개적으로 표명하고 CP운영을 적극적으로 지원하고 있습니다.",
            },
            {
                num: "03",
                title: "CP의 운영을 담당하는 자율준수 관리자 임명",
                desc: "이사회 등 최고 의사결정기구에서 조직 내 자율준수 관리자를 임명하고 효과적인 CP운영에 대한 책임과 권한을 부여하고 있습니다.",
            },
            {
                num: "04",
                title: "자율준수 편람의 제작·활용",
                desc: "회사의 모든 구성원이 쉽게 이해하고 실천할 수 있도록 공정거래 관련 법규 및 CP의 기준과 절차가 포함된 자율준수 편람을 제작하여 배포(e-book형태 포함)하고 구성원들은 활발하게 활용하고 있습니다.",
            },
            {
                num: "05",
                title: "지속적이고 체계적인 자율준수 교육 실시",
                desc: "공정거래 관련법규 준수 사항 등에 대하여 최고 경영자를 포함한 전 구성원을 대상으로 효과적인 교육을 정기적으로 실시하고 있습니다.",
            },
            {
                num: "06",
                title: "내부감시체계 구축",
                desc: "내부감시체계를 통해 취약점을 식별하고, 제도개선을 통해 투명한 공정거래 환경을 구축해 나가고 있습니다.",
            },
            {
                num: "07",
                title: "공정거래 관련 법규 위반 임직원에 대한 제재",
                desc: "공정거래 관련 법규 위반 정도에 상응하는 제재 조치를 규정한 사규를 운영하고 있으며 구성원의 법 위반 발견 시, 적극 대응하고<br />향후 유사 행위가 재발하지 않도록 예방활동을 하고 있습니다.",
            },
            {
                num: "08",
                title: "효과성 평가와 개선조치",
                desc: "CP가 효과적이고 지속적으로 운영될 수 있도록 CP의 기준, 절차 및 운용 등에 대한 점검과 평가 등을 실시하고 그에 따라 제도개선 조치 등을 시행하고 있습니다.",
            },
        ],
        ComplianceManualTitle: "공정거래 자율준수 편람",
        ComplianceManualMeta: "(개정 2024.12)",
        ComplianceManualBtnEbook: "공정거래 자율준수 편람 e-book 보기",
        ComplianceManualBtnDownload: "다운로드",
        WhistleGuideSections: [
            {
                key: "wg-01",
                title: "제보이용안내",
                desc: "GS리테일은 모든 임직원이 지켜야 할 올바른 행동과 가치 판단의 기준으로서 윤리규범 및 실천지침을 지키기 위해 노력하고 있습니다.<br />자유롭고 안전한 문제제기와 신고 문화의 정착이 GS리테일의 지속가능한 성장을 보장합니다.",
            },
            {
                key: "wg-02",
                title: "제보운영방침",
                desc: "회사의 전 임직원, 이해관계자, 고객으로부터 회사의 윤리규범 및 관련 규정에 위반되거나 위반의 우려가 있는 일체 사안에 대해 제보할 수 있도록 다양한 제보방법을 운영합니다.",
            },
            {
                key: "wg-03",
                title: "제보 대상",
                desc: "임직원 및 파트너사의 윤리경영 위반 사례 (금품수수, 향응/편의접대, 기타 부정행위 등), 불공정 거래 및 부당한 행위, 법규위반 및 회계부정 행위, 임직원의 성희롱, 무례한 언행 등의 인권침해 행위를 비롯하여 기타 정도경영을 위한 좋은 의견들도 함께 접수하고 있습니다.",
            },
            {
                key: "wg-04",
                title: "제보정책",
                desc: "당사는 제보자에 대한 신분 및 비밀을 철저히 보호하며, 제보와 관련하여 어떠한 차별, 불이익 등으로부터 보호합니다. 또한 제보자에 대한 포상 정책에 따라 포상금을 지급할 수 있습니다.",
            },
            {
                key: "wg-05",
                title: "제보 처리 절차",
                desc: "제보하신 내용은 객관적인 근거 확보 후 조사가 진행 되오며 후속 조치를 진행합니다.",
            },
            {
                key: "wg-06",
                title: "제보 방법",
                desc: "온라인 신고, 전화 및 메일",
            },
        ],
        WhistleProcessSteps: ["제보사항 제출", "접수 및 조사 진행", "제보대상 조치"],
        WhistleRewardPageTitle: "제보자 포상제도",
        WhistleRewardSections: [
            {
                key: "wr-01",
                title: "제보내용",
                desc: "-당사 임직원 부정 및 불공정 행위에 대한 제보<br />-협력회사 부정 및 불공정 행위 등",
            },
            {
                key: "wr-02",
                title: "포상대상",
                desc: "제보자 : 임직원 및 외부 일반인(협력회사/협력사원/제 3 자)",
            },
            {
                key: "wr-03",
                title: "포상기준",
                criteriaTables: [
                    {
                        sectionLead:
                            "1. 자진신고<br />&nbsp;&nbsp; 협력업체는 「CEO가 거래상의 혜택」을 보장함.",
                        cols: ["임직원", "협력업체"],
                        cells: [
                            {
                                sub: "면책 또는 경감",
                                desc: "신고기한(발생일 부터 1개월)내에 자진 신고한 경우<br />금품을 먼저 요구한 경우에는 적용대상에서 제외",
                            },
                            {
                                sub: "거래상의 혜택 보장",
                                desc: "CEO가 거래상의 혜택을 보장함.<br />제공되는 혜택은 당사의 내부심의를 통해 결정",
                            },
                        ],
                    },
                    {
                        sectionLead: "2. 제 3자에 의한 신고<br />&nbsp;&nbsp; 「최대 1억원」까지 포상함",
                        cols: ["금액환산 가능", "금액환산 불가능"],
                        cells: [
                            {
                                sub: "제보내용 확인결과, 금액환산 가능한 경우",
                                desc: "당사 정도경영 확립에 기여한 경우 손실감소(수익증대) 금액을<br />감안하여 내부기준에 따라 최대 1억원까지 지급",
                            },
                            {
                                sub: "제보내용 확인결과, 금액환산 불가능한 경우",
                                desc: "당사 정도경영 확립에 기여한 경우 50만원 정액 지급",
                            },
                        ],
                    },
                ],
            },
            {
                key: "wr-04",
                title: "포상내역 선정",
                desc: "-제보 내용이 당사 윤리위원회 사무국(경영진단팀)의 사실확인이 되어야 함<br />-포상 내역(금액 또는 거래상 혜택)의 결정 및 확정은 당사 심의 후 결정함.<br />-포상 사유가 중복하여 발생하는 경우는 가장 큰 금액 또는 혜택을 기준으로 함.",
            },
            {
                key: "wr-05",
                title: "포상금 지급 기준",
                desc: "-신고자의 신고로 부정행위 적발 및 처리하는데 기여도를 고려하여 포상금을 결정한다.<br />-동일한 피신고자의 동일한 부정행위에 대하여 2인 이상의 신고자가 신고한 경우, 나중에 신고한 신고자에 대하여 보상금 또는 포상금을 지급하지 아니한다.<br />&nbsp;&nbsp;(나중에 신고된 내용이 부정행위 사건 해결에 결정적인 자료로 활용된 경우는 예외)<br />-동일한 피신고자의 동일한 부정행위에 대하여 2인 이상이 공동으로 신고한 경우, 포상금액 지급 기준의 범위내에서 균등분할 지급한다.",
            },
            {
                key: "wr-06",
                title: "신고자 기여도 결정 기준",
                desc: "-증거자료의 신빙성 등 신고의 정확성<br />-피신고자의 부정행위가 신문, 방송 등 언론매체에 의하여 이미 공개된 것인지의 여부<br />-신고자가 신고와 관련한 불법행위를 행하였는지의 여부<br />-신고자가 부정행위를 신고할 의무를 가졌는지 또는 직무와 관련하여 부정부패를 신고하였는지 여부<br />그 밖에 신고자가 부정행위 사건의 해결에 기여한 정도",
            },
            {
                key: "wr-07",
                title: "제보사실 확인결과",
                desc: "다음의 경우에는 포상을 실시하지 않음.<br />-제보 내용이 사실이 아닌 것으로 판명되거나 증거부족으로 인하여 사실여부 확인이 곤란한 경우<br />-외부 이해관계자와의 업무와 관련되지 않은 비 윤리행위 제보 시 (단, 공금횡령, 회사자산 절도 등 회사에 직접적인 손실을 끼치는 행위는 보상 가능)<br />-이미 제보된 사항이거나 경영진단팀 또는 기타 부서 또는 외부기관에서 이미 인지하여 조사가 진행중 이거나 징계절차 등이 진행 또는 완료된 사항<br />-언론보도 등에 의해 공개된 사항<br />-익명 또는 가명으로 제보하여 제보자가 누구인지 알 수 없는 경우<br />-단순 업무 개선과 관련된 사항<br />-조사관련 직무에 종사하는 경영진단팀 및 유사 부서 직원이 제보한 경우<br />기타 보상 심의 결과 보상이 부적절하다고 인정되는 경우",
            },
        ],
        WhistleProtectPageTitle: "제보자 보호제도",
        WhistleProtectPageDesc: "다음과 같은 임직원 행동규범을 신설/직원 교육 등을 통하여, 제보자의 비밀유지를 강화함.",
        WhistleProtectSections: [
            {
                key: "wp-01",
                title: "제보자 신분누설 및 색출행위 금지",
                desc: "-제보와 관련된 사실을 확인하는 경영진단팀은 제보자 본인의 동의 없이 제보자 및 조사 협조자의 신분 공개 또는 암시를 금지함.<br />-직무상 또는 우연히 제보자의 신분을 인지한 임직원은 누구든지 제보자의 신분 누설을 금함.<br />-피제보자 또는 피제보자의 소속 부서 및 기타 관련부서에서 경영진단팀 등에 제보자의 신분에 대한 문의, 제보자를 알아내기 위한 탐문 활동 등 제보자의 신분노출이 가능한 모든 행위를 금지함.<br />-신분 보호 의무위반(인사상/거래상 불이익)시 관련자는 처벌함.(전사 윤리위원회에 상정함)<br />제보를 한 임직원 및 업체에 대한 아래와 같은 불이익 조치를 금지하며, 해당 불이익 조치를 행한 임직원에 대해서는 전사윤리위원회에 상정함.",
                grayBox: {
                    title: "불이익 조치 정의",
                    desc: "1)파면, 해임, 해고 그 밖에 신분 상실에 해당하는 신분상의 불이익 조치<br />2)징계,정직, 승진 제한, 그 밖에 부당한 인사조치<br />3)전보,전근, 직무 미 부여, 직무 재배치, 그 밖에 본인의 의사에 반하는 인사조치<br />4)주의 대상자 명단 작성 또는 그 명단의 공개, 집단 따돌림, 폭행 또는 폭언, 그 밖에 정신적, 신체적 손상을 가져오는 행위<br />5)물품계약 또는 용역계약의 해지, 그 밖에 경제적 불이익을 주는 조치",
                },
            },
            {
                key: "wp-02",
                title: "제보자 신분노출이 예상되는 경우",
                desc: "-제보자 신분노출(예상)시, 당사자는 경영진단팀에 통보 경영진단팀은 신분노출 경로를 조사하여, 관련자를 전사 윤리위원회에 상정함.<br />-제보자 본인이 원할 경우, 경영진단팀 면담을 요청할 수 있으며, 이 경우 경영진단팀은 CEO 보고 후, 해당 색출시도 임직원에 대해 즉시 보직변경/이동 발령 등 인사조치 권고를 할 수 있음.",
            },
        ],
        ReportIntroTitle: "GS리테일 임직원 및 파트너사의 <span class='txt_blue'>부정/불공정 행위 제보와 개선제안</span>에 대한 의견을 쓰는 곳입니다.",
        ReportIntroDesc: "아래 각 메뉴별 안내사항을 참고 하셔서 작성하여 주시기 바랍니다.",
        ReportChannelItems: [
            {
                key: "voice",
                title: "고객의 소리",
                desc: "GS25/GS SHOP/GS THE FRESH/POP 이용 중<br />고객불만/불편/칭찬사항은 고객의 소리에 접수하시면 관련부서에서 신속히 처리가 됩니다.",
                btnText: "고객의 소리 바로가기",
            },
            {
                key: "ethics",
                title: "정도경영 목소리",
                desc: "임직원/협력업체 등 부정/불공정 사항 제보 → 조사부서(경영진단팀) 제보",
                btnText: "문의하기",
            },
            {
                key: "redwhistle",
                title: "레드휘슬 (외부제보채널)",
                desc: "GS리테일 정도경영 관련 불공정행위 및 윤리위반 행위 제보<br />→ 외부기관에서 운영하는 익명제보 시스템으로 익명성과 보안을 철저히 보호",
                btnText: "문의하기",
            },
        ],
        ReportNotice:
            "※ 기타 제보 방법 : GS리테일 경영진단팀 (02-2006-2088 / singo@gsretail.com)<br />※ GS리테일에서는 <span class='txt_warn'>제보자 포상제도</span>를 실시하며, <span class='txt_warn'>제보자 보호제도</span>를 운영합니다.",
        EthicsCardItems: [
            {
                key: "ethics-01",
                image: imgEthics01,
                imgAlt: "1. 고객에 대한 책임과 의무 관련 이미지",
                title: "1. 고객에 대한 책임과 의무",
                desc: "회사는 고객이 사업 기반이라는 신념 하에 고객의견을 존중하고, 고객에게 도움이 되는 가치를 창출하여 제공함으로써 고객으로부터 신뢰를 확보한다.",
            },
            {
                key: "ethics-02",
                image: imgEthics02,
                imgAlt: "2. 공정한 경쟁 관련 이미지",
                title: "2. 공정한 경쟁",
                desc: "회사는 전세계의 모든 사업활동에서 해당지역의 관계법규를 준수하며, 정당한 방법을 통하여 경쟁의 우위를 확보한다.​",
            },
            {
                key: "ethics-03",
                image: imgEthics03,
                imgAlt: "3. 공정한 거래​ 관련 이미지",
                title: "3. 공정한 거래​",
                desc: "모든 거래는 평등한 참여기회가 보장된 가운데 자유경쟁의 원칙에 따라 이루어지며, 투명하고 공정한 거래를 통해 상호신뢰와 협력관계를 구축함으로써 장기적 관점에서 공동의 발전을 추구한다.",
            },
            {
                key: "ethics-04",
                image: imgEthics04,
                imgAlt: "4. 임직원의 기본윤리 관련 이미지​",
                title: "4. 임직원의 기본윤리​​",
                desc: "임직원은 정직과 공정의 신념으로 올바른 가치관을 확립하고, 끊임없는 자기계발과 공정한 직무수행을 통해 주어진 사명을 완수한다.​",
            },
            {
                key: "ethics-05",
                image: imgEthics05,
                imgAlt: "5. 임직원에 대한 책임​​ 관련 이미지",
                title: "5. 임직원에 대한 책임​​",
                desc: "회사는 모든 임직원을 한 인간으로서 존중하고 능력과 업적에 따라 공정하게 대우하며, 임직원의 창의성이 충분히 발휘되도록 노력한다.​​",
            },
            {
                key: "ethics-06",
                image: imgEthics06,
                imgAlt: "6. 국가와 사회에 대한 책임​​ 관련 이미지",
                title: "6. 국가와 사회에 대한 책임​",
                desc: "회사는 합리적인 사업전개를 통해 건실한 기업으로 성장함으로써 주주의 이익을 보호하고, 국민의 풍요로운 삶과 사회발전에 공헌한다.",
            },
        ],
        EthicsPracticeItems: [
            {
                key: "practice-01",
                title: "고객에 대한 책임과 의무",
                desc: "고객 중심의 가치 창출을 통해 고객으로부터 신뢰를 확보합니다.",
            },
            {
                key: "practice-02",
                title: "공정한 경쟁",
                desc: "관계법규를 준수하며 정당한 방법으로 경쟁 우위를 확보합니다.",
            },
            {
                key: "practice-03",
                title: "공정한 거래",
                desc: "투명하고 공정한 거래를 통해 상호신뢰와 협력관계를 구축합니다.",
            },
            {
                key: "practice-04",
                title: "임직원의 기본윤리",
                desc: "정직과 공정의 가치관으로 책임 있는 직무수행을 실천합니다.",
            },
            {
                key: "practice-05",
                title: "임직원에 대한 책임",
                desc: "모든 임직원을 존중하고 능력과 업적에 따라 공정하게 대우합니다.",
            },
            {
                key: "practice-06",
                title: "국가와 사회에 대한 책임",
                desc: "건실한 기업 성장을 통해 사회발전과 공익 증진에 기여합니다.",
            },
        ],
        EthicsPledgeText: "본인은 GS리테일 윤리규범 세부실천사항을 최선의 노력으로 실천할 것을 다짐하여 이에 서약합니다.",
        EthicsPledgeMeta: "20**. 01. 01",
        EthicsPledgeCompany: "*****부문 ***점 *********",
        EthicsPledgeName: "홍길동 (서명)",
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
};

const t = computed(() => {
    const selected = langData[props.lang];
    if (selected && Array.isArray(selected.Tabs1) && selected.Tabs1.length > 0) {
        return selected;
    }
    return langData.ko;
});

const onTabChange1 = (idx) => {
    CTabIdx.value = idx;
    CTabIdxEsgArchive.value = 0;
    CTabIdxEsgSystem.value = 0;
    CTabIdxCompliance.value = 0;
};

const goToWhistleTab = (idx) => {
    CTabIdxEsgSystem.value = idx;
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
.panel, .panel_third_depth { padding-top: 80px; }
/* v-html 삽입 노드에는 scoped data 속성이 없으므로 :deep 필요 */
:deep(.txt_blue){color:#107AF2 !important;}
:deep(.txt_warn){color:#FB6432 !important;}
section + section{padding-top:120px;}
.sub_header{margin-bottom:40px;}
.sub_header h3 { font-weight: 700; font-size: 4rem; line-height: 1.35; letter-spacing: -0.01em; }
.sub_header p { margin-top: 16px; font-size: 2.4rem; line-height: 1.5; letter-spacing: -0.01em; }
.tab_tit_wrap{margin-bottom:80px; padding: 20px 0; text-align: center;}
.tab_tit{  font-weight: 700;font-size: 3.2rem;line-height: 1.3;letter-spacing: -0.01em;}
.tab_tit_desc{margin-top: 16px; font-size: 2.4rem; line-height: 1.5; letter-spacing: -0.01em;}
/* FeatureCards 공통: 그리드(PC 3열 / 태블릿 2열 / 모바일 1열)
   부모에서 준 class는 루트 ul(feature_card_list)에 병합되므로 자손 선택자가 아닌 동일 요소 선택 */
:deep(.feature_cards_grid.feature_card_list) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
    align-items: stretch;
}
.feature_cards_grid :deep(.feature_card_item) {
    width: 100%;
    min-width: 0;
}
.law_feature_cards :deep(.feature_card_num),
.law_feature_cards :deep(.feature_card_title){
    margin-bottom:6px;
}
.purpose_feature_cards :deep(.feature_card_desc),
.law_feature_cards :deep(.feature_card_desc){
    color:#161616;
}
.purpose_feature_cards :deep(.feature_card_title) {
    color: #107af2;
}
@media screen and (min-width: 769px) {
    .purpose_feature_cards :deep(.feature_card_item) {
        min-height: 194px;
        padding: 32px;
    }
    /* 정도경영 목적과 취지: type="text" — 모바일은 FeatureCards 기본 스타일 */
    .purpose_feature_cards :deep(.feature_card_title) {
        margin-bottom: 6px;
        font-size: 1.8rem;
        line-height: 1.5;
    }
    .purpose_feature_cards :deep(.feature_card_desc) {
        color: #161616;
        font-weight: 700;
        font-size: 2rem;
        line-height: 1.35;
        letter-spacing: -0.01em;
    }
}
@media screen and (max-width: 1024px) {
    :deep(.feature_cards_grid.feature_card_list) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
@media screen and (max-width: 768px) {
    :deep(.feature_cards_grid.feature_card_list) {
        grid-template-columns: 1fr;
    }
}
.sec_history { position: relative; }
.history_list{padding-left:48px;position:relative;}
.history_item { display: flex; gap: 32px; position: relative; }
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
    

/* 정도경영 > 지침 */
.gray_box { padding: 60px; background-color: #f8f8f8; border-radius: 20px;}
section.gray_box p{margin-top:40px;}
section.gray_box > .button_area{width: 100%; display: flex; justify-content: center;}
.sec_ethics_cards .card_list { display: grid; width: 100%; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 80px 40px; align-items: stretch; }
.sec_ethics_cards .card_list > li { min-width: 0; min-height: 0; display: flex; flex-direction: column; }
.sec_ethics_cards .card_list > li > * { flex: 1; min-height: 0; }
.sec_ethics_cards .card_list :deep(.card_thumb) { aspect-ratio: 690 / 360; border-radius: 12px; background-size: cover; background-blend-mode: multiply; }
.sec_ethics_cards .card_list :deep(.card_item .card_body) { padding-top: 32px; }
.sec_ethics_cards .card_list :deep(.card_desc) { margin-top: 8px; }
.card_list :deep(.card_tit) {  font-size: 3.2rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em;}
.card_list :deep(.card_desc) { margin-top:12px; font-size: 2rem; line-height: 1.35; letter-spacing: -0.01em;}
.practice_title {margin-top:80px;font-weight: 700;font-size: 2.8rem;line-height: 1.35;letter-spacing: -0.01em;}
.practice_desc { margin-top: 16px; font-size: 1.8rem; line-height: 1.4; letter-spacing: 0; }
.base_item {padding: 40px 0; border-bottom: 1px solid #E5E5E9; }
.base_item > em { color: #107af2; font-size: 2rem; font-style: normal; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; display: block;}
.base_item > strong { margin-top:4px; font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; display: block;}
.base_item p {margin-top:16px; color: #67676F; font-size: 2rem; line-height: 1.35; letter-spacing: -0.01em; }
.base_item > .button_area {margin-top:24px; display: flex; justify-content: center; gap:10px; justify-content: flex-start;}
.base_list.type2 { padding: 64px; background-color: #f8f8f8; border-radius: 20px;}
.base_list.type2 .base_item:first-child {padding-top: 0;}
.base_list.type2 .base_item:last-child {padding-bottom: 0; border-bottom: 0; }
.panel_third_depth .base_list .base_item:first-child{border-top: 1px solid #E5E5E9;}
.signature_box { margin-top: 40px; padding: 40px 64px; border: 1px solid #E5E5E9; border-radius: 12px; display: flex; align-items: flex-end; justify-content: space-between;}
.signature_box > div {flex:1;}
.signature_confirm {font-weight: 700;font-size: 2rem;line-height: 1.35;letter-spacing: -0.01em;}
.signature_box dl {margin-top: 40px;}
.signature_box dl > dt {color:#67676F;font-size: 1.8rem;line-height: 1.4;}
.signature_box dl > dd {color:#67676F;font-size: 1.8rem;line-height: 1.4;}
.signature_box dl > dd { margin-top: 4px; }
.signature_box span{color:#C4C4D0; font-size: 1.8rem; font-weight: 700; line-height: 1.5;}

/* 정도경영 > 제도 — type_03 (Figma TAB_3, node 470:17025) */
.wrap_tabs_type03 {
    width: 100%;
}
.wrap_tabs_type03 :deep(.tab_wrap ul.type_03) {
    width: 100%;
    gap: 0;
}
.wrap_tabs_type03 :deep(.tab_wrap ul.type_03 li) {
    flex: 1;
    min-width: 0;
}
.wrap_tabs_type03 :deep(.tab_wrap ul.type_03 li .item) {
    width: 100%;
    height: 60px;
    padding: 0 16px;
    color: #90909a;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0;
    text-align: center;
    background-color: #ffffff;
    border: 1px solid #c4c4d0;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.wrap_tabs_type03 :deep(.tab_wrap ul.type_03 li + li .item) {
    margin-left: -1px;
}
.wrap_tabs_type03 :deep(.tab_wrap ul.type_03 li.current .item) {
    color: #ffffff;
    background-color: #107af2;
    border-color: #107af2;
    position: relative;
    z-index: 1;
}

/* 정도경영 > 제도 > 제보 이용 안내 (Figma 470:17030) */
.base_item .gray_box{margin-top:20px; padding:56px 64px;}
.base_item .gray_box .process_flow{display: flex; gap: 20px; align-items: center;}
.base_item .gray_box .process_flow p {padding:20px;color:#107AF2; font-weight: 700;font-size: 1.6rem;line-height: 1.24;text-align: center; border-radius: 99px; background-color:#E7F2FE; flex:0 1 300px;}
/* 제보 처리 절차: 가로 줄기 + 선분 2개로 만든 > 머리(이미지와 동일한 형태) */
.base_item .gray_box .process_flow > span {
    width: 40px;
    height: 2px;
    flex-shrink: 0;
    align-self: center;
    background-color: #107af2;
    position: relative;
    display: block;
}
.base_item .gray_box .process_flow > span::before,
.base_item .gray_box .process_flow > span::after {
    content: "";
    width: 12px;
    height: 2px;
    position: absolute;
    right:0;
    top: 50%;
    background-color: #107af2;
    /* 줄기 쪽이 아니라 오른쪽 끝(촉)을 기준으로 벌려야 > (우향) */
    transform-origin: right center;
}
.base_item .gray_box .process_flow > span::before {
    transform: translateY(-50%) rotate(45deg);
}
.base_item .gray_box .process_flow > span::after {
    transform: translateY(-50%) rotate(-45deg);
}

/* 정도경영 > 제도 > 제보자 포상제도 (Figma 470:17264) */
.panel_third_depth .reward_criteria {
    width: 100%;
    margin-top: 16px;
}

.panel_third_depth .reward_table_scroll {
    width: 100%;
    margin-top: 20px;
    padding:0 20px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

.panel_third_depth .reward_table {
    width: 100%;
    min-width: 640px;
    border-collapse: collapse;
    table-layout: fixed;
    position: relative;
}
.panel_third_depth .reward_table:before{
    content: '';
    width: 100%;
    height: 1px;
    background-color: #161616;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: block;
}
.panel_third_depth .reward_table th,
.panel_third_depth .reward_table td {
    border-bottom: 1px solid #e5e5e9;
    vertical-align: top;
    text-align: left;
}

.panel_third_depth .reward_table th {
    padding:27px 24px;
    background-color: #f8f8f8;
    color: #161616;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.5;
}
.panel_third_depth .reward_table th + th{
    border-left: 1px solid #e5e5e9;
}


.panel_third_depth .reward_table td{
    padding:21px 24px;
}
.panel_third_depth .reward_table td p {
    margin: 0;
    font-size: 1.8rem;
    line-height: 1.4;
}
.panel_third_depth .reward_table td p + p {
    margin-top: 12px;
}
.panel_third_depth .reward_table_sub {
    margin: 0 0 12px;
    color: #4095F5;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.24;
}
.panel_third_depth .reward_report_btn {
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: center;
}

/* 정도경영 > 제도 > 제보자 보호제도 (Figma 470:17701) */
.whistle_protect_list .protect_gray_box {
    margin-top: 24px;
    padding: 40px 64px;
}
.whistle_protect_list .protect_gray_box > strong {
    color: #67676f;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.01em;
    display: block;
}
.whistle_protect_list .protect_gray_box > p {
    margin-top: 16px;
    color: #67676f;
    font-size: 2rem;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

/* 정도경영 > 제보 (Figma 474:29330) */
.report_intro_desc {
    margin-bottom: 80px;
    font-size: 2.4rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
    text-align: center;
}
.sec_report_channels {
    width: 100%;
}
.report_channel_list {
    width: 100%;
    border-top: 1px solid #e5e5e9;
}
.report_channel_item {
    border-bottom: 1px solid #e5e5e9;
}
.report_channel_card {
    width: 100%;
    padding: 40px 0;
    display: flex;
    gap: 40px;
}
.report_channel_thumb {
    width: 340px;
    min-width: 340px;
    height: 230px;
    background-color: #f8f8f8;
    border-radius: 12px;
    display: block;
}
.report_channel_thumb.thumb_voice { background: linear-gradient(135deg, #d9e8fb 0%, #f8f8f8 100%); }
.report_channel_thumb.thumb_ethics { background: linear-gradient(135deg, #d4f0df 0%, #f8f8f8 100%); }
.report_channel_thumb.thumb_redwhistle { background: linear-gradient(135deg, #fde2e2 0%, #f8f8f8 100%); }
.report_channel_body {
    width: calc(100% - 380px);
}
.report_channel_body h3 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.01em;
}
.report_channel_body > p {
    margin-top: 16px;
    font-size: 2rem;
    line-height: 1.35;
    letter-spacing: -0.01em;
}
.report_channel_body .button_area {
    margin-top: 24px;
}
.report_channel_notice {
    margin-top: 20px;
    color: #67676f;
    font-size: 1.8rem;
    line-height: 1.4;
}
.report_channel_notice :deep(span){
    text-decoration: underline;
}
.compliance_manual {
    margin-top: 120px;
    padding: 40px 64px;
    border: 1px solid #E5E5E9;
    border-radius: 12px;
    background-color: #ffffff;
}
.compliance_manual .compliance_manual_inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    flex-wrap: wrap;
}
.compliance_manual .compliance_manual_inner > div:first-child strong {
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 1.35;
    letter-spacing: -0.01em;
    display: block;
}
.compliance_manual .compliance_manual_inner > div:first-child p {
    margin-top: 12px;
    font-size: 2rem;
    line-height: 1.35;
    letter-spacing: -0.01em;
}
.compliance_manual .compliance_manual_inner .button_area {
    margin-top: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-end;
}
.panel_inner header.sub_header p:only-child {
    margin-top: 0;
}
/* .panel_third_depth { min-height: 120px; } */
@media screen and (max-width: 768px) {
    .p_br{display:none;}
    .content { width: 100vw; max-width: 100%; padding: 0 20px 100px; }
    .panel{padding-top: 48px;}
    .title_wrap { display: none; }
    .page_title { font-size: 4rem; }
    .visual_sub { font-size: 2rem; }
    .tab_tit_wrap{margin-bottom:56px; padding: 0;}
    .tab_tit {font-size: 1.8rem; line-height: 1.4; text-align: left;}
    .tab_tit_desc {font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em;}
    .sub_header{margin-bottom:32px;}
    .sub_header h3 { font-size: 2.4rem; text-align: left; }
    .sub_header p { margin-top: 12px; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    section + section{padding-top:80px;}
    section.gray_box{padding: 40px;}
    section.gray_box p{margin-top: 32px; }
    :deep(.feature_cards_grid.feature_card_list) { gap: 12px; }

    .sec_compliance_manual {
        padding: 24px 20px;
    }
    .sec_compliance_manual .compliance_manual_inner {
        flex-direction: column;
        align-items: flex-start;
    }
    .sec_compliance_manual .compliance_manual_inner > div:first-child strong {
        font-size: 2rem;
        line-height: 1.35;
    }
    .sec_compliance_manual .compliance_manual_inner > div:first-child p {
        margin-top: 6px;
        font-size: 1.6rem;
        line-height: 1.5;
    }
    .sec_compliance_manual .compliance_manual_inner .button_area {
        width: 100%;
        flex-direction: column;
        justify-content: flex-start;
    }
    .sec_compliance_manual .compliance_manual_inner .button_area :deep(a),
    .sec_compliance_manual .compliance_manual_inner .button_area :deep(button) {
        width: 100%;
    }
    .history_list { padding-left: 20px; }
    .history_item { gap: 8px; flex-direction: column; }
    .history_item::before { width: 8px; height: 8px; border-width: 4px; top: 8px; left: -20px; }
    .history_item:not(:last-child)::after { top: 16px; left: -12px; }
    .history_item:last-child .history_body { padding-bottom: 0; }
    .history_period { width: 100%; font-size: 2rem; line-height: 1.35; }
    .history_body { margin-top:6px;padding-bottom: 42px; }
    .history_summary { font-size: 1.4rem; line-height: 1.4; }
    .history_detail_list {  display: grid; grid-template-columns: minmax(0, 1fr); row-gap: 6px; column-gap: 0; }
    .history_detail_list > dt { padding: 6px 0; font-size: 1.6rem; line-height: 1.4; grid-column: 1; }
    .history_detail_list > dd { padding: 0; font-size: 1.4rem; line-height: 1.4; grid-column: 1; }
    .history_detail_list > dd + dt { margin-top: 12px; }
    .history_detail_list > dd + dt + dd { margin-top: 0; }
    .sec_ethics_cards .card_list { grid-template-columns: minmax(0, 1fr); gap: 40px; }
    .sec_ethics_cards .card_list :deep(.card_thumb) { aspect-ratio: 335 / 190; }
    .sec_ethics_cards .card_list :deep(.card_item .card_body) { padding-top: 20px; display: block; }
    .sec_ethics_cards .card_list :deep(.card_desc) { margin-top: 16px; }
    .card_list :deep(.card_tit) { font-size: 1.8rem; line-height: 1.5;letter-spacing: 0;}
    .card_list :deep(.card_desc) { font-size: 1.6rem;line-height: 1.5; letter-spacing: -0.01em;}
    .practice_title { margin-top:0; font-size: 2rem; line-height: 1.35; }
    .practice_desc { margin-top: 12px; font-size: 1.6rem; }
    .base_item { padding: 16px 0; }
    .base_item > em { font-size: 1.6rem; line-height: 1.24;letter-spacing: 0;}
    .base_item > strong { font-size: 1.6rem; line-height: 1.24;letter-spacing: 0;}
    .base_item p { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em;}
    .base_list.type2 { padding: 32px; border-radius: 12px; }
    .signature_box { margin-top: 24px; padding: 24px 20px; border-radius: 12px; display: flex; flex-direction: column; align-items: flex-start; gap: 16px; }
    .signature_confirm{ font-size: 1.6rem; line-height: 1.5; }
    .signature_box dl { width: 100%; margin-top: 20px; }
    .signature_box dl > dt { font-size: 1.4rem; line-height: 1.5; }
    .signature_box dl > dd { font-size: 1.4rem; line-height: 1.5; }
    .signature_box dl > dd { margin-top: 2px; }
    .signature_box span { width: 100%; font-size: 1.4rem; line-height: 1.4; text-align: right; }
    .wrap_tabs_type03 {
        margin-bottom: 32px;
    }
    .wrap_tabs_type03 :deep(.tab_wrap ul.type_03 li) {
        flex: 0 0 auto;
        min-width: 0;
    }
    .wrap_tabs_type03 :deep(.tab_wrap ul.type_03 li .item) {
        width: auto;
        height: clamp(48px, 14.93vw, 56px);
        padding: 0 clamp(12px, 4.27vw, 16px);
        font-size: 1.4rem;
        line-height: 1.43;
    }

    .base_item .gray_box {
        padding: clamp(24px, 6.4vw, 40px) clamp(16px, 5.33vw, 24px);
    }
    .base_item .gray_box .process_flow {
        flex-direction: column;
        gap: 12px;
    }
    .base_item .gray_box .process_flow p {
        flex: 1 1 auto;
        width: 100%;
        max-width: none;
    }
    .base_item .gray_box .process_flow > span {
        width: 2px;
        height: clamp(20px, 5.33vw, 24px);
        margin: 0 auto;
    }
    .base_item .gray_box .process_flow > span::before,
    .base_item .gray_box .process_flow > span::after {
        left: 50%;
        top: 100%;
        width: 12px;
        height: 2px;
        margin-top: -1px;
        /* 세로 줄기 아래쪽 끝(촉) 기준 → 아래로 진행 */
        transform-origin: center bottom;
    }
    .base_item .gray_box .process_flow > span::before {
        transform: translateX(-50%) rotate(45deg);
    }
    .base_item .gray_box .process_flow > span::after {
        transform: translateX(-50%) rotate(-45deg);
    }
    .panel_third_depth .reward_table th,
    .panel_third_depth .reward_table td {
        padding: 16px 12px;
    }
    .panel_third_depth .reward_table th {
        font-size: 1.6rem;
    }
    .panel_third_depth .reward_table td p {
        font-size: 1.6rem;
    }
    .panel_third_depth .reward_table_sub {
        font-size: 1.4rem;
    }

    .panel_third_depth .reward_report_btn {
        margin-top: 32px;
    }
    .whistle_protect_list .protect_gray_box {
        padding: 24px 20px;
    }
    .whistle_protect_list .protect_gray_box > p {
        margin-top: 12px;
    }
    .report_intro_desc {
        margin-top: -44px;
        margin-bottom: 40px;
        font-size: 1.6rem;
        text-align: left;
    }
    .report_channel_card {
        padding: 24px 0;
        flex-direction: column;
        gap: 20px;
    }
    .report_channel_thumb {
        width: 100%;
        min-width: 0;
        height: 190px;
    }
    .report_channel_body {
        width: 100%;
    }
    .report_channel_body h3 {
        font-size: 2.4rem;
    }
    .report_channel_body > p {
        margin-top: 12px;
        font-size: 1.6rem;
    }
    .report_channel_body .button_area {
        margin-top: 16px;
    }
    .report_channel_notice {
        margin-top: 16px;
        font-size: 1.4rem;
    }
    /* .panel_third_depth { min-height: 80px; } */
   
}
</style>