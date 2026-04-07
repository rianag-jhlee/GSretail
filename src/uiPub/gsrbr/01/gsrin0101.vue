<template>
    <div class="main-container">
        <div class="title_wrap ac">
            <h2 class="page-title">{{ t.MainTitle }}</h2>
            <p class="visual-sub">{{ t.MainsubTitle }}</p>
        </div>

        <section class="section-investor">
            <div class="cont_inner">
                <Tabs v-model="CTabIdx" :tab-items="t.Tabs1" tab-class="type_01" :tab-slide="false" @change="onTabChange1" />
                
                <p class="title-sub-text" v-html="t.MainDesc[CTabIdx]"></p>

                <div class="tab_content_wrap">
                    <!-- pageid:gsrin0101 -->
                    <section class="tab_content gsrin0101" v-if="CTabIdx === 0" :aria-label="t.Tabs1[0].item">
                        <div class="subtit_wrap ac">
                            <h3 class="section-sub-title">{{ t.CharterTitle }}</h3>
                            <p class="section-date mt15">{{ t.CharterDate }}</p>
                        </div>

                        <div class="policy_wrap mt40">
                            <dl>
                                <dt>{{ t.PolicyIntroTitle }}</dt>
                                <dd v-html="t.PolicyIntroDesc"></dd>

                                <dt>{{ t.PolicySec1Title }}</dt>
                                <dd>
                                    <template v-for="(sec, sIdx) in t.PolicySec1" :key="'sec1-'+sIdx">
                                        <strong class="bullet_title" :class="{mt30: sIdx > 0}">{{ sec.subTitle }}</strong>
                                        <ul class="mt15">
                                            <li v-for="(li, lIdx) in sec.list" :key="'sec1-l-'+sIdx+'-'+lIdx" class="bullet_01 no_type">{{ li }}</li>
                                        </ul>
                                    </template>
                                </dd>

                                <dt>{{ t.PolicySec2Title }}</dt>
                                <dd>
                                    <template v-for="(sec, sIdx) in t.PolicySec2" :key="'sec2-'+sIdx">
                                        <strong class="bullet_title" :class="{mt30: sIdx > 0}">{{ sec.subTitle }}</strong>
                                        <ul class="mt15">
                                            <li v-for="(li, lIdx) in sec.list" :key="'sec2-l-'+sIdx+'-'+lIdx" class="bullet_01 no_type">{{ li }}</li>
                                        </ul>
                                    </template>
                                </dd>
                            </dl>
                        </div>
                    </section>
                    
                    <!-- pageid:gsrin0102 -->
                    <section class="tab_content gsrin0102" v-if="CTabIdx === 1" :aria-label="t.Tabs1[1].item">
                        <div class="view-2">
                            <div class="sub-title">
                                <div class="text-wrapper-3">{{ t.BoardSectionTitle1 }}</div>
                                <p class="p">{{ t.BoardSectionDesc1 }}</p>
                            </div>
                            <div class="view-3">
                                <template v-for="(member, mIdx) in t.BoardMemberList" :key="'board-' + mIdx">
                                    <div class="div-2">
                                        <div class="view-4"><img class="img" :src="member.img" :alt="member.name" /></div>
                                        <div class="view-4">
                                            <div class="div-3">
                                                <div class="text-wrapper-4">{{ member.pos }}</div>
                                                <div class="text-wrapper-5">{{ member.name }}</div>
                                            </div>
                                            <div class="div-4">
                                                <div class="div-3">
                                                    <div class="text-wrapper-6">{{ member.term }}</div>
                                                    <div class="text-wrapper-7">{{ member.firstDate }}</div>
                                                </div>
                                                <ul class="view-5 mt10">
                                                    <li v-for="(career, cIdx) in member.careers" 
                                                        :key="'career-' + cIdx" 
                                                        class="bullet_01"
                                                        :class="career.class"
                                                    >
                                                        {{ career.text }}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="mIdx < t.BoardMemberList.length - 1" class="divider"></div>
                                </template>
                            </div>
                        </div>
                        <div class="view-2">
                            <div class="sub-title">
                                <div class="text-wrapper-3">{{ t.BoardSectionTitleSub }}</div>
                                <p class="p">{{ t.BoardSectionDescSub }}</p>
                            </div>
                            <div class="view-3">
                                <template v-for="(member, sIdx) in t.SubMemberList" :key="'sub-' + sIdx">
                                    <div class="div-2">
                                        <div class="view-4">
                                            <img class="img" :src="member.img" :alt="member.name" />
                                        </div>
                                        <div class="view-4">
                                            <div class="div-3">
                                                <div class="frame-4">
                                                    <div class="text-wrapper-4">{{ member.pos.split(' / ')[0] }}</div>
                                                    <template v-if="member.pos.includes('/')">
                                                        <div class="rectangle"></div>
                                                        <div class="text-wrapper-4">{{ member.pos.split(' / ')[1] }}</div>
                                                    </template>
                                                </div>
                                                <div class="text-wrapper-5">{{ member.name }}</div>
                                            </div>
                                            <div class="div-4">
                                                <div class="div-3">
                                                    <div class="text-wrapper-6">{{ member.term }}</div>
                                                    <div class="text-wrapper-7">{{ member.firstDate }}</div>
                                                </div>
                                                <ul class="view-5 mt10">
                                                    <li v-for="(career, cIdx) in member.careers" 
                                                        :key="'sc-' + cIdx" 
                                                        class="bullet_01"
                                                        :class="career.class"
                                                    >
                                                        {{ career.text }}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="sIdx < t.SubMemberList.length - 1" class="divider"></div>
                                </template>
                            </div>
                        </div>
                        <div class="view-2">
                            <div class="sub-title"><div class="text-wrapper-3">{{ t.BoardSectionTitle2 }}</div></div>
                            <div class="div-4">
                                <div class="view-6">
                                    <div v-for="(skill, idx) in t.SkillsList" :key="'skill-' + idx" class="frame-5">
                                        <div class="frame-6">
                                            <div class="div-6">
                                                <div class="text-wrapper-10">{{ skill.type }}</div>
                                                <div class="text-wrapper-11">{{ skill.name }}</div>
                                            </div>
                                            <div class="text-wrapper-12">{{ skill.appointDate }}</div>
                                        </div>
                                        <div class="frame-9">
                                            <div v-for="(tag, tIdx) in skill.tags" :key="'tag-'+tIdx" :class="['TAG', tag.class]">
                                                <div class="text-wrapper-13" :class="{'text-wrapper-14': tag.class === 'TAG-2', 'text-wrapper-15': tag.class === 'TAG-3', 'text-wrapper-18': tag.class === 'TAG-4'}">
                                                    {{ tag.text }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="view-2">
                            <div class="sub-title"><div class="text-wrapper-3">{{ t.BoardSectionTitle3 }}</div></div>
                            <div class="table">
                                <template v-for="(committee, cIdx) in t.CommitteeTable" :key="'comm-'+cIdx">
                                    <div class="column">
                                        <div class="table-cell"><div class="text-wrapper-19">{{ committee.title }}</div></div>
                                        <div class="view-wrapper">
                                            <div class="view-7">
                                                <div class="view-8">
                                                    <div class="text-wrapper-20">{{ t.ChairLabel }}</div>
                                                    <div class="text-wrapper-21">{{ committee.chair }}</div>
                                                </div>
                                                <div class="view-8">
                                                    <div class="text-wrapper-20">{{ t.MemberLabel }}</div>
                                                    <div class="text-wrapper-21">{{ committee.members }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="cIdx < t.CommitteeTable.length - 1" class="divider-2"></div>
                                </template>
                            </div>
                            <div class="button-group">
                                <button v-for="(btn, bIdx) in t.BoardDownloadBtns" :key="'btn-'+bIdx" class="BUTTON" @click="handleDownload(btn.link)">
                                    <div class="view-9"><div class="text-wrapper-22">{{ btn.text }}</div></div>
                                    <img class="download" src="/public/images/gsrin0102/download.png" />
                                </button>
                            </div>
                        </div>

                    </section>

                    <!-- pageid:gsrin0103 -->
                    <section class="tab_content gsrin0103" v-if="CTabIdx === 2" :aria-label="t.Tabs1[2].item">

                    </section>

                    <!-- pageid:gsrin0104 -->
                    <section class="tab_content gsrin0104" v-if="CTabIdx === 3" :aria-label="t.Tabs1[3].item">

                    </section>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";

export default {
    name: "gsrin0102",
    components: { Tabs },
    props: { lang: { type: String, default: "ko" } },
    data() {
        return {
            CTabIdx: 0,
            selectedFilter: "",
            langData: {
                ko: {
                    MainTitle: "기업지배구조",
                    MainsubTitle: "CORPORATE GOVERNANCE",
                    MainDesc: [
                        "GS리테일은 기업지배구조헌장에 의거, <br/>건전한 지배구조를 확립하고 있습니다",
                        "GS리테일은 투명한 경영 문화 정착을 위해,<br/>이사회 중심 경영을 실천하고 있습니다.",
                        "GS리테일은 <b>이사회 운영 개선 및 지배구조 신뢰성 제고</b>를 위하여<br/>2021년 12월 개최된 정기이사회에서 이사회 평가제도를 도입하였습니다.",
                        "GS리테일은 <b>지속가능한 경영</b>을 위해, <b>지배구조건정성을 지속 개선</b>해 나아가겠습니다."
                    ],
                    Tabs1: [{ item: "지배구조헌장" }, { item: "이사회 및 위원회 구성" }, { item: "이사회 평가" }, { item: "지배구조 모범규준과의 차이" }],
                    
                    // [Tab 1] 지배구조헌장
                    CharterTitle: "㈜GS리테일 기업지배구조헌장", CharterDate: "제정 2021.02.08",
                    PolicyIntroTitle: "전문",
                    PolicyIntroDesc: "<p class='desc'>㈜GS리테일(이하 “회사”라 함.)은 건전한 기업지배구조 확립을 기반으로 하여, 모든 이해관계자와 신뢰를 구축하고, 끊임없는 도전으로 고객의 라이프 이노베이션(Life Innovation)을 선도하는 회사로 도약하고자 한다. 이러한 비전 달성을 위해 본 기업지배구조헌장을 제정한다.</p><p class='desc'>회사는 본 기업지배구조헌장에 따라, 주주의 권리 보장, 이사회의 역할과 책임, 전문 감사기구의 독립적 운영 등 회사의 건전한 지배구조를 확립하여, 공정하고 투명한 경영활동을 지향하며, 주주·고객·임직원 등 모든 이해관계자의 지속적인 권익 증진을 위해 노력한다.</p>",
                    PolicySec1Title: "I. 주 주",
                    PolicySec1: [
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
                    ],
                    PolicySec2Title: "II. 이 사 회",
                    PolicySec2: [
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
                        ]}
                    ],

                    // [Tab 2] 이사회 구성 현황
                    BoardSectionTitle1: "이사회 구성 현황",
                    BoardSectionDesc1: "대표이사, 사내이사, 기타 비상무 이사로 구성된 이사회 현황입니다.",
                    BoardMemberList: [
                        {
                            pos: "대표이사", name: "허서홍", img: "/images/gsrin0102/gsrin0102_1.png",
                            term: "2025.03.20~2028.03.19", firstDate: "2025.03.20 최초선임",
                            careers: [
                                { text: "美 스탠퍼드대", class: "" },
                                { text: "2022년 (주)GS 미래사업팀장", class: "" },
                                { text: "2024년 (주)GS리테일 경영전략 Service Unit장", class: "" },
                                { text: "現) (주)GS리테일 대표이사", class: "point" } // 강조가 필요한 행에만 클래스 부여
                            ]
                        },
                        {
                            pos: "사내이사", name: "오진석", img: "/images/gsrin0102/gsrin0102_2.png",
                            term: "2024.03.21~2027.03.20", firstDate: "2024.03.21 최초선임",
                            careers: [
                                { text: "서강대", class: "" },
                                { text: "2014년 (주)GS리테일 경영지원부문장", class: "" },
                                { text: "2021년 (주)GS리테일 전략부문장", class: "" },
                                { text: "現) (주)GS리테일 플랫폼BU장", class: "point" }
                            ]
                        },
                        {
                            pos: "기타 비상무이사", name: "홍순기", img: "/images/gsrin0102/gsrin0102_3.png",
                            term: "2025.03.21~2027.03.20", firstDate: "2021.07.01 최초선임",
                            careers: [
                                { text: "연세대", class: "" },
                                { text: "2017년 (주)GS 재무팀장", class: "" },
                                { text: "現) (주)GS 대표이사", class: "point" }
                            ]
                        }
                    ],
                    BoardSectionTitleSub: "사외이사 및 위원회 구성",
                    BoardSectionDescSub: "독립성과 전문성을 갖춘 사외이사를 통해 경영 투명성과 견제 기능을 강화하고 있습니다.",
                    SubMemberList: [
                        {
                            pos: "사외이사 / 이사회의장", name: "이성락", img: "/images/gsrin0102/gsrin0102_4.png",
                            term: "2025.03.20~2028.03.19", firstDate: "2023.03.25 최초선임",
                            careers: [
                                { text: "건국대", class: "" },
                                { text: "2009년 (주)신한은행 부행장", class: "" },
                                { text: "2013년 신한생명보험(주) 사장", class: "" },
                                { text: "2017년 (주)고든앤파트너스 대표이사", class: "" }
                            ]
                        },
                        {
                            pos: "사외이사", name: "이인무", img: "/images/gsrin0102/gsrin0102_5.png",
                            term: "2024.03.21~2027.03.20", firstDate: "2021.07.01 최초선임",
                            careers: [
                                { text: "美 일리노이대", class: "" },
                                { text: "2007년 디멘셔널 펀드 부사장", class: "" },
                                { text: "2015년 한국은행 외화자산운용원 자문역", class: "" },
                                { text: "現) 카이스트 경영대학 교수", class: "point" }
                            ]
                        },
                        {
                            pos: "사외이사", name: "이상규", img: "/images/gsrin0102/gsrin0102_6.png",
                            term: "2023.03.23~2026.03.22", firstDate: "2023.03.23 최초선임",
                            careers: [
                                { text: "美 워싱턴대", class: "" },
                                { text: "2012년 LG전자(주) 한국B2C 그룹장", class: "" },
                                { text: "2016년 LG전자(주) 한국모바일 그룹장", class: "" },
                                { text: "2021년 LG전자(주) 한국영업 본부장, 사장", class: "" },
                                { text: "現) 숙명여자대학교 석좌교수", class: "point" }
                            ]
                        },
                        {
                            pos: "사외이사", name: "윤윤진", img: "/images/gsrin0102/gsrin0102_7.png",
                            term: "2025.03.20~2028.03.19", firstDate: "2025.03.20 최초선임",
                            careers: [
                                { text: "美 UC 버클리대", class: "" },
                                { text: "2009년 Stanford SRI International 인공지능 연구센터 연구원", class: "" },
                                { text: "2018년 국토안전관리원 비상임 이사", class: "" },
                                { text: "現) 카이스트 건설 및 환경공학과 교수", class: "point" }
                            ]
                        }
                    ],
                    BoardSectionTitle2: "이사회 역량 구성표",
                    SkillsList: [
                        { type: "사내이사/대표이사", name: "허서홍", appointDate: "2025.03 선임", tags: [{text: "경영·리더십", class:""}, {text: "리스크관리·ESG", class:""}] },
                        { type: "사내이사", name: "오진석", appointDate: "2024.03 선임", tags: [{text: "경영·리더십", class:""}, {text: "유통·관련산업", class:""}, {text: "금융", class:"TAG-2"}, {text: "리스크관리·ESG", class:""}, {text: "보상위원회", class:"TAG-3"}] },
                        { type: "기타 비상무이사", name: "홍순기", appointDate: "2021.07 선임", tags: [{text: "경영·리더십", class:""}, {text: "재무·회계", class:""}, {text: "리스크관리·ESG", class:""}, {text: "ESG위원회", class:"TAG-3"}] },
                        { type: "사외이사", name: "이성락", appointDate: "2022.03 선임", tags: [{text: "경영·리더십", class:"TAG-2"}, {text: "금융", class:"TAG-2"}, {text: "리스크관리·ESG", class:"TAG-2"}, {text: "독립성", class:"TAG-2"}, {text: "내부거래위", class:"TAG-4"}, {text: "사외이사추천위", class:"TAG-4"}, {text: "감사위원회", class:"TAG-4"}] },
                        { type: "사외이사", name: "오인무", appointDate: "2021.07 선임", tags: [{text: "재무·회계", class:"TAG-2"}, {text: "금융", class:"TAG-2"}, {text: "리스크관리·ESG", class:"TAG-2"}, {text: "독립성", class:"TAG-2"}, {text: "사외이사추천위", class:"TAG-4"}, {text: "감사위원회", class:"TAG-4"}, {text: "ESG위원회", class:"TAG-4"}, {text: "보상위원회", class:"TAG-4"}] },
                        { type: "사외이사", name: "이상규", appointDate: "2023.03 선임", tags: [{text: "유통·관련산업", class:""}, {text: "리스크관리·ESG", class:""}, {text: "독립성", class:"TAG-2"}, {text: "내부거래위", class:"TAG-3"}, {text: "사외이사추천위", class:"TAG-3"}, {text: "ESG위원회", class:"TAG-3"}] },
                        { type: "사외이사", name: "윤윤진", appointDate: "2025.03 선임", tags: [{text: "IT·디지털", class:""}, {text: "리스크관리·ESG", class:""}, {text: "독립성", class:""}, {text: "사외이사추천위", class:"TAG-3"}, {text: "감사위원회", class:"TAG-3"}, {text: "ESG위원회", class:"TAG-3"}, {text: "보상위원회", class:"TAG-3"}] }
                    ],
                    BoardSectionTitle3: "이사회 내 위원회 현황",
                    ChairLabel: "위원장", MemberLabel: "위원",
                    CommitteeTable: [
                        { title: "내부거래위원회", chair: "이상규", members: "이성락, 윤윤진" },
                        { title: "사외이사후보추천위원회", chair: "이상규", members: "이성락, 이인무" },
                        { title: "감사위원회", chair: "이인무", members: "이성락, 윤윤진" },
                        { title: "ESG위원회", chair: "이상규", members: "이성락, 윤윤진" },
                        { title: "보상위원회", chair: "이상규", members: "이성락, 윤윤진" }
                    ],
                    BoardDownloadBtns: [
                        { text: "(주)GS리테일 정관", link: "#" }, { text: "이사회 규정", link: "#" }, { text: "감사위원회 규정", link: "#" },
                        { text: "사외이사후보 추천위원회 규정", link: "#" }, { text: "내부거래위원회 운영규정", link: "#" },
                        { text: "ESG 위원회 운영 규정", link: "#" }, { text: "보상위원회 운영규정", link: "#" }
                    ],
                    SelectMsg: "위원회 선택", SelectOptions: [{value:'', label:'위원회 선택'}, {value:'0', label:'감사위원회'}, {value:'1', label:'ESG위원회'}],
                    BtnConfirm: "목록보기"
                },
                en: {
                    MainTitle: "Governance",
                    MainsubTitle: "CORPORATE GOVERNANCE",
                    MainDesc: [
                        "GS Retail is establishing sound governance <br/>in accordance with the Corporate Governance Charter.",
                        "GS Retail practices board-centered management <br/>to establish a transparent corporate culture.",
                        "GS Retail introduced a board evaluation system <br/>at the regular board meeting held in December 2021 <br/>to <b>improve board operations and enhance governance reliability</b>.",
                        "GS Retail will <b>continuously improve governance health</b> <br/>for <b>sustainable management</b>."
                    ],
                    Tabs1: [{ item: "Charter" }, { item: "Board & Committee" }, { item: "Evaluation" }, { item: "Governance GAP" }],
                    
                    // [Tab 1] Corporate Governance Charter
                    CharterTitle: "GS Retail Corporate Governance Charter", CharterDate: "Established Feb 08, 2021",
                    PolicyIntroTitle: "Preamble",
                    PolicyIntroDesc: "<p class='desc'>GS Retail Co., Ltd. (hereinafter referred to as the \"Company\") aims to build trust with all stakeholders based on the establishment of sound corporate governance and leap forward as a company leading Life Innovation for customers through constant challenges. To achieve this vision, the Company establishes this Corporate Governance Charter.</p><p class='desc'>In accordance with this Charter, the Company establishes sound governance, such as guaranteeing shareholders' rights, the role and responsibility of the Board, and independent operation of specialized audit bodies, aiming for fair and transparent management activities, and striving to continuously promote the interests of all stakeholders, including shareholders, customers, and employees.</p>",
                    PolicySec1Title: "I. Shareholders",
                    PolicySec1: [
                        { subTitle: "1. Rights of Shareholders", list: [
                            "① Shareholders are the owners of the company and are guaranteed basic rights guaranteed by relevant laws, such as the right to participate in profit distribution, the right to attend and vote at general meetings of shareholders, and the right to propose agenda items for general meetings.",
                            "② Matters that bring significant changes to the existence of the company and shareholder rights, such as amendments to the Articles of Incorporation, mergers, transfer of business, division, dissolution, and reduction of capital, are decided through general meetings of shareholders by maximizing the guarantee of shareholder rights.",
                            "③ The Company strives to ensure that resolutions at the general meeting of shareholders are made through transparent and fair procedures, and provides sufficient information to shareholders regarding the date, time, location, and method of exercising voting rights before the meeting.",
                            "④ The exercise of shareholder rights should be manifested according to the free will of the shareholders."
                        ]},
                        { subTitle: "2. Fair Treatment of Shareholders", list: [
                            "① Shareholders are guaranteed rights according to the principle of one vote per share. However, if the voting rights of specific shareholders are restricted by law, the relevant laws shall be followed. The Company treats shareholders fairly so that their essential rights are not damaged in accordance with the Commercial Act and relevant laws.",
                            "② The Company provides necessary information to shareholders in a timely and sufficient manner, structured for easy understanding, and in a fair way. It also strives to protect shareholders from unfair internal transactions and self-dealing."
                        ]},
                        { subTitle: "3. Responsibilities of Shareholders", list: [
                            "① Shareholders should actively exercise their voting rights for the development and interest of the company.",
                            "② Controlling shareholders who exercise influence over company management should exercise their shareholder rights considering the interests of the company and all other shareholders, and strive to prevent damage to other shareholders due to abuse of their control."
                        ]}
                    ],
                    PolicySec2Title: "II. Board of Directors",
                    PolicySec2: [
                        { subTitle: "1. Functions of the Board", list: [
                            "① The Board has comprehensive authority over management in accordance with relevant laws, determines basic management goals for the interests of the company and shareholders, and deliberates and decides on major decision-making matters of the company as determined by laws, the Articles of Incorporation, and Board regulations.",
                            "② The Board supervises the activities of the management for transparent and fair business performance and to prevent damage to shareholder value.",
                            "③ The Board may delegate authority to the CEO or committees within the Board, except for major matters that are not allowed to be delegated by laws, the Articles of Incorporation, or Board regulations."
                        ]},
                        { subTitle: "2. Composition of the Board", list: [
                            "① The Board consists of 6 or more directors to enable diverse discussions and efficient decision-making. To ensure independence, outside directors constitute more than half of the total number of Board members.",
                            "② The Board establishes an Audit Committee to strengthen the monitoring function for transparent management and may establish other committees within the Board for objective and professional deliberation of each agenda item."
                        ]},
                        { subTitle: "3. Appointment of Directors", list: [
                            "① Directors are appointed by resolution of the general meeting of shareholders from candidates selected through recommendations from the Board, the Outside Director Candidate Recommendation Committee, or shareholders. The Company strives to ensure that candidates with verified expertise are appointed.",
                            "② The CEO is appointed by resolution of the Board from among the directors appointed at the general meeting of shareholders.",
                            "③ The Chairman of the Board is appointed by resolution of the Board from among the directors, and concurrent holding of the CEO position is discouraged."
                        ]},
                        { subTitle: "4. Qualifications of Directors", list: [
                            "① Inside directors must have abundant experience and expertise related to the company's business and be able to contribute to the company's development and enhancement of shareholder value.",
                            "② Outside directors must be persons with sufficient knowledge and expertise in fields such as law, finance, accounting, new business, IT-TECH, and the public sector, with no significant interest in the company and verified independence."
                        ]},
                        { subTitle: "5. Operation of the Board", list: [
                            "① The Board operates through regular meetings and temporary meetings held as needed. The Company enacts and operates Board regulations that specifically define the authority, responsibilities, and operating procedures of the Board.",
                            "② The Company enacts and operates committee regulations that specifically define the authority, responsibilities, and operating procedures of the committees within the Board.",
                            "③ The Company must prepare and maintain minutes recording the progress of Board meetings and important deliberation details."
                        ]}
                    ],

                    // [Tab 2] Board Status
                    BoardSectionTitle1: "Board Composition",
                    BoardSectionDesc1: "Current status of the Board consisting of the CEO, Inside Directors, and Non-executive Directors.",
                    ChairLabel: "Chair", MemberLabel: "Member",
                    BoardMemberList: [
                        {
                            pos: "CEO", name: "Heo Seo-hong", img: "/images/gsrin0102/gsrin0102_1.png",
                            term: "2025.03.20~2028.03.19", firstDate: "First appointed Mar 20, 2025",
                            careers: [
                                { text: "Stanford Univ.", class: "" },
                                { text: "2022 Head of Future Business Team, GS Corp", class: "" },
                                { text: "2024 Head of Management Strategy Service Unit, GS Retail", class: "" },
                                { text: "Present) CEO of GS Retail", class: "point" }
                            ]
                        },
                        {
                            pos: "Inside Director", name: "Oh Jin-seok", img: "/images/gsrin0102/gsrin0102_2.png",
                            term: "2024.03.21~2027.03.20", firstDate: "First appointed Mar 21, 2024",
                            careers: [
                                { text: "Sogang Univ.", class: "" },
                                { text: "2014 Head of Management Support Division, GS Retail", class: "" },
                                { text: "2021 Head of Strategy Division, GS Retail", class: "" },
                                { text: "Present) Head of Platform BU, GS Retail", class: "point" }
                            ]
                        },
                        {
                            pos: "Non-executive Director", name: "Hong Soon-ky", img: "/images/gsrin0102/gsrin0102_3.png",
                            term: "2025.03.21~2027.03.20", firstDate: "First appointed Jul 01, 2021",
                            careers: [
                                { text: "Yonsei Univ.", class: "" },
                                { text: "2017 Head of Finance Team, GS Corp", class: "" },
                                { text: "Present) CEO of GS Corp", class: "point" }
                            ]
                        }
                    ],
                    BoardSectionTitleSub: "Outside Directors & Committees",
                    BoardSectionDescSub: "Strengthening management transparency and check functions through independent and professional outside directors.",
                    SubMemberList: [
                        {
                            pos: "Outside Director / Chairman", name: "Lee Seong-rak", img: "/images/gsrin0102/gsrin0102_4.png",
                            term: "2025.03.20~2028.03.19", firstDate: "First appointed Mar 25, 2023",
                            careers: [
                                { text: "Konkuk Univ.", class: "" },
                                { text: "2009 Vice President of Shinhan Bank", class: "" },
                                { text: "2013 President of Shinhan Life Insurance", class: "" },
                                { text: "2017 CEO of Gordon & Partners", class: "" }
                            ]
                        },
                        {
                            pos: "Outside Director", name: "Lee In-mu", img: "/images/gsrin0102/gsrin0102_5.png",
                            term: "2024.03.21~2027.03.20", firstDate: "First appointed Jul 01, 2021",
                            careers: [
                                { text: "Univ. of Illinois", class: "" },
                                { text: "2007 VP at Dimensional Fund Advisors", class: "" },
                                { text: "2015 Advisor at Reserve Management Office, BOK", class: "" },
                                { text: "Present) Professor at KAIST Business School", class: "point" }
                            ]
                        },
                        {
                            pos: "Outside Director", name: "Lee Sang-kyu", img: "/images/gsrin0102/gsrin0102_6.png",
                            term: "2023.03.23~2026.03.22", firstDate: "First appointed Mar 23, 2023",
                            careers: [
                                { text: "Univ. of Washington", class: "" },
                                { text: "2012 Head of Korea B2C Group, LG Electronics", class: "" },
                                { text: "2016 Head of Korea Mobile Group, LG Electronics", class: "" },
                                { text: "2021 President of Korea Sales & Marketing, LG Electronics", class: "" },
                                { text: "Present) Chaired Professor at Sookmyung Women's Univ.", class: "point" }
                            ]
                        },
                        {
                            pos: "Outside Director", name: "Yoon Yoon-jin", img: "/images/gsrin0102/gsrin0102_7.png",
                            term: "2025.03.20~2028.03.19", firstDate: "First appointed Mar 20, 2025",
                            careers: [
                                { text: "UC Berkeley", class: "" },
                                { text: "2009 Researcher at Stanford SRI International AI Center", class: "" },
                                { text: "2018 Non-executive Director of Korea Authority of Land & Infrastructure Safety", class: "" },
                                { text: "Present) Professor of Civil & Environmental Engineering at KAIST", class: "point" }
                            ]
                        }
                    ],
                    BoardSectionTitle2: "Board Skills Matrix",
                    SkillsList: [
                        { type: "Inside Director/CEO", name: "Heo Seo-hong", appointDate: "Appointed 2025.03", tags: [{text: "Leadership", class:""}, {text: "ESG", class:""}] },
                        { type: "Inside Director", name: "Oh Jin-seok", appointDate: "Appointed 2024.03", tags: [{text: "Leadership", class:""}, {text: "Retail", class:""}, {text: "Finance", class:"TAG-2"}, {text: "ESG", class:""}, {text: "Remuneration", class:"TAG-3"}] },
                        { type: "Non-executive Director", name: "Hong Soon-ky", appointDate: "Appointed 2021.07", tags: [{text: "Leadership", class:""}, {text: "Accounting", class:""}, {text: "ESG", class:""}, {text: "ESG Comm.", class:"TAG-3"}] },
                        { type: "Outside Director", name: "Lee Seong-rak", appointDate: "Appointed 2022.03", tags: [{text: "Leadership", class:"TAG-2"}, {text: "Finance", class:"TAG-2"}, {text: "ESG", class:"TAG-2"}, {text: "Independence", class:"TAG-2"}, {text: "Internal Trans.", class:"TAG-4"}, {text: "Recommendation", class:"TAG-4"}, {text: "Audit", class:"TAG-4"}] },
                        { type: "Outside Director", name: "Lee In-mu", appointDate: "Appointed 2021.07", tags: [{text: "Accounting", class:"TAG-2"}, {text: "Finance", class:"TAG-2"}, {text: "ESG", class:"TAG-2"}, {text: "Independence", class:"TAG-2"}, {text: "Recommendation", class:"TAG-4"}, {text: "Audit", class:"TAG-4"}, {text: "ESG Comm.", class:"TAG-4"}, {text: "Remuneration", class:"TAG-4"}] },
                        { type: "Outside Director", name: "Lee Sang-kyu", appointDate: "Appointed 2023.03", tags: [{text: "Retail", class:""}, {text: "ESG", class:""}, {text: "Independence", class:"TAG-2"}, {text: "Internal Trans.", class:"TAG-3"}, {text: "Recommendation", class:"TAG-3"}, {text: "ESG Comm.", class:"TAG-3"}] },
                        { type: "Outside Director", name: "Yoon Yoon-jin", appointDate: "Appointed 2025.03", tags: [{text: "IT·Digital", class:""}, {text: "ESG", class:""}, {text: "Independence", class:""}, {text: "Recommendation", class:"TAG-3"}, {text: "Audit", class:"TAG-3"}, {text: "ESG Comm.", class:"TAG-3"}, {text: "Remuneration", class:"TAG-3"}] }
                    ],
                    BoardSectionTitle3: "Committees under the Board",
                    CommitteeTable: [
                        { title: "Internal Transaction Committee", chair: "Lee Sang-kyu", members: "Lee Seong-rak, Yoon Yoon-jin" },
                        { title: "Outside Director Candidate Recommendation Committee", chair: "Lee Sang-kyu", members: "Lee Seong-rak, Lee In-mu" },
                        { title: "Audit Committee", chair: "Lee In-mu", members: "Lee Seong-rak, Yoon Yoon-jin" },
                        { title: "ESG Committee", chair: "Lee Sang-kyu", members: "Lee Seong-rak, Yoon Yoon-jin" },
                        { title: "Remuneration Committee", chair: "Lee Sang-kyu", members: "Lee Seong-rak, Yoon Yoon-jin" }
                    ],
                    BoardDownloadBtns: [
                        { text: "Articles of Incorporation", link: "#" }, { text: "Board Regulations", link: "#" }, { text: "Audit Committee Regulations", link: "#" },
                        { text: "Recommendation Committee Regulations", link: "#" }, { text: "Internal Transaction Regulations", link: "#" },
                        { text: "ESG Committee Regulations", link: "#" }, { text: "Remuneration Committee Regulations", link: "#" }
                    ],
                    SelectMsg: "Select Committee", SelectOptions: [{value:'', label:'Select Committee'}, {value:'0', label:'Audit'}, {value:'1', label:'ESG'}],
                    BtnConfirm: "Back to List"
                }
            }
        };
    },
    computed: { t() { return this.langData[this.lang] || this.langData.ko; } },
    methods: {
        onTabChange1(idx) { this.CTabIdx = idx; this.selectedFilter = ""; },
        handleConfirm() { console.log('Confirmed'); }
    }
};
</script>

<style scoped>
/*::::::::::::::::::::::::::::::: PC Style (정제됨) :::::::::::::::::::::::::::::::*/
/* gsrin0101 전용 스타일 */
.main-container {width: 100%; position: relative; display: block;}
.section-investor {width: 100%; position: relative; display: block;}
.title_wrap {width: 100%; padding: 110px 0 150px; background: url('/public/images/gsrin0101_bg.png') no-repeat center / contain; text-align: center; position: relative; display: block;}
.page-title {color: #FFFFFF; font-size: 72px; font-weight: 700; text-align: center; display: block;}
.visual-sub {margin-top: 10px; color: #FFFFFF; font-size: 32px; font-weight: 700; text-align: center;}
.cont_inner {width: 100%; max-width: 1420px; margin: 0 auto; padding: 0 20px;}
.title-sub-text {width: 100%; padding: 80px 0; color: #161618; font-size: 48px; font-weight: 700; text-align: center; line-height: 1.4;}
.subtit_wrap {width: 100%; padding: 60px 40px; background: #F0F3F5; border-radius: 16px; text-align: center; display: flex; flex-direction: column; justify-content: center;}
.section-sub-title {color: #161618; font-size: 40px; font-weight: 700; text-align: center;}
.section-date {margin-top: 15px; color: #666666; font-size: 18px; text-align: center; display: block;}
.policy_wrap {width: 100%; padding: 60px; text-align: left;}
.policy_wrap dt {margin-top: 60px; color: #161618; font-size: 2.4rem; font-weight: 700;}
.policy_wrap dt:first-child {margin-top: 0;}
.policy_wrap dd {margin-top: 20px; color: #444444; font-size: 1.8rem; line-height: 1.8;}
.bullet_title {color: #161618; font-size: 2rem; font-weight: 700; display: block;}
.bullet_01 {font-size:18px;}
.bullet_01.point {color:#242428}

/* gsrin0102 전용 스타일 */
.gsrin0102 > * {margin-top: 80px;}
.view {width: 100%; padding: 20px 0; position: relative; display: flex; align-items: center; justify-content: center; gap: 8px; align-self: stretch; flex: 0 0 auto;}
.view-2 {width: 100%; padding: 0; position: relative; display: flex; flex-direction: column; align-items: flex-start; gap: 32px; align-self: stretch; flex: 0 0 auto;}
.sub-title {width: 100%; padding: 0; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; align-self: stretch; flex: 0 0 auto;}
.text-wrapper-3 {width: 100%; margin-top: -1.00px; padding: 0; color: #161618; font-size: 40px; font-weight: 700; font-style: normal; letter-spacing: -0.4px; line-height: 129.99999523162842%; position: relative; align-self: stretch;}
.p {width: 100%; padding: 0; color: #242428; font-size: 24px; font-weight: 500; font-style: normal; letter-spacing: -0.24px; line-height: 150%; position: relative; align-self: stretch;}
.view-3 {width: 100%; padding: 0; position: relative; display: flex; align-items: flex-start; gap: 28px; align-self: stretch; flex: 0 0 auto;}
.div-2 {width: 21.97%; padding: 0; border-radius: 24px; position: relative; display: flex; flex-direction: column; align-items: center; gap: 32px;}
.view-4 {width: 100%; padding: 0; position: relative; display: flex; flex-direction: column; align-items: flex-start; gap: 16px; align-self: stretch; flex: 0 0 auto;}
.img {width: 100%; height: 160px; position: relative; align-self: stretch;}
.div-3 {width: 100%; padding: 0; position: relative; display: flex; flex-direction: column; align-items: flex-start; gap: 2px; align-self: stretch; flex: 0 0 auto;}
.text-wrapper-4 {width: fit-content; margin-top: -1.00px; padding: 0; color: #161618; font-size: 16px; font-weight: 700; letter-spacing: -0.16px; line-height: 24px; position: relative; white-space: nowrap;}
.text-wrapper-5 {width: fit-content; padding: 0; color: #161618; font-size: 28px; font-weight: 700; font-style: normal; letter-spacing: -0.28px; line-height: 135.0000023841858%; position: relative; white-space: nowrap;}
.div-4 {width: 100%; padding: 0; position: relative; display: flex; flex-direction: column; align-items: flex-start; gap: 12px; align-self: stretch; flex: 0 0 auto;}
.text-wrapper-6 {width: 100%; margin-top: -1.00px; padding: 0; color: #242428; font-size: 18px; font-weight: 400; font-style: normal; letter-spacing: -0.18px; line-height: 160.0000023841858%; position: relative; align-self: stretch;}
.text-wrapper-7 {width: 100%; padding: 0; color: #67676f; font-size: 14px; font-weight: 400; font-style: normal; letter-spacing: -0.14px; line-height: 139.9999976158142%; position: relative; align-self: stretch;}
.view-5 {width: 100%; padding: 0; position: relative; display: flex; flex-direction: column; align-items: flex-start; gap: 4px; align-self: stretch; flex: 0 0 auto;}
.frame-2 {width: 100%; padding: 0; position: relative; display: flex; align-items: center; gap: 10px; align-self: stretch; flex: 0 0 auto;}
.bullet {height: 24px; position: relative; display: inline-flex; align-items: center; gap: 8px; flex: 0 0 auto;}
.ellipse {width: 3px; height: 3px; background-color: #67676f; border-radius: 50%; position: relative;}
.text-wrapper-8 {margin-top: -1.00px; padding: 0; color: #67676f; font-size: 18px; font-weight: 400; font-style: normal; letter-spacing: -0.18px; line-height: 160.0000023841858%; position: relative; flex: 1;}
.frame-3 {width: 100%; padding: 0; position: relative; display: flex; align-items: flex-start; gap: 10px; align-self: stretch; flex: 0 0 auto;}
.text-wrapper-9 {margin-top: -1.00px; padding: 0; color: #242428; font-size: 18px; font-weight: 400; font-style: normal; letter-spacing: -0.18px; line-height: 160.0000023841858%; position: relative; flex: 1;}
.divider {width: 1px; background-color: #f2f2f4; position: relative; align-self: stretch;}
.frame-4 {padding: 0; position: relative; display: inline-flex; align-items: center; justify-content: center; gap: 8px; flex: 0 0 auto;}
.rectangle {width: 1px; height: 12px; background-color: #e5e5e9; position: relative;}
.view-6 {width: 100%; padding: 0; position: relative; display: flex; flex-wrap:wrap; align-items: flex-start; justify-content: flex-start; gap: 12px; align-self: stretch; flex: 0 0 auto;}
.frame-5 {width: calc((100% - 24px) / 3); max-width:452px; padding: 32px; border: 1px solid #e5e5e9; border-radius: 24px; position: relative; display: flex; flex-direction: column; align-items: center; gap: 16px; flex: 1; align-self: stretch; flex: 0 0 auto;}
.frame-6 {width: 100%; padding: 0; position: relative; display: flex; align-items: center; gap: 8px; align-self: stretch; flex: 0 0 auto;}
.text-wrapper-10 {width: fit-content; margin-top: -1.00px; padding: 0; color: #161618; font-size: 24px; font-weight: 400; letter-spacing: -0.24px; line-height: 36px; position: relative; white-space: nowrap;}
.text-wrapper-11 {width: fit-content; padding: 0; color: #161618; font-size: 24px; font-weight: 700; font-style: normal; letter-spacing: -0.24px; line-height: 135.0000023841858%; position: relative; white-space: nowrap;}
.text-wrapper-12 {padding: 0; color: #656565; font-size: 16px; font-weight: 400; font-style: normal; text-align: right; letter-spacing: -0.16px; line-height: 150%; position: relative; flex: 1;}
.frame-9 {width: 100%; padding: 24px 0 0; border-top: 1px solid #f2f2f4; position: relative; display: flex; flex-wrap: wrap; align-items: flex-start; gap: 8px 8px; flex: 0 0 auto; align-self: stretch;}
.TAG {padding: 8px 12px; color: #107af2; background-color: #e7f2fe; border: 1px solid #107af2; border-radius: 99px; position: relative; display: inline-flex; align-items: center; justify-content: center; gap: 8px; flex: 0 0 auto;}
.TAG-2 {min-width: 64px; background-color: #e7f2fe; border-color: #107af2;}
.TAG-3 {background-color: #f2f2f4; border-color: #c4c4d0;}
.TAG-3 .text-wrapper-13 {color: #67676f;}
.TAG-4 .text-wrapper-13 {color: #67676f;}
.TAG-4 {min-width: 64px; background-color: #f2f2f4; border-color: #c4c4d0;}
.text-wrapper-13 {width: fit-content; margin-top: -1.00px; padding: 0; color: #107af2; font-size: 16px; font-weight: 400; font-style: normal; letter-spacing: -0.16px; line-height: 150%; position: relative; white-space: nowrap;}
.table {width: 100%; padding: 0; border-top: 1px solid #161618; overflow: hidden; position: relative; display: flex; align-items: center; justify-content: center; align-self: stretch; flex: 0 0 auto;}
.column {padding: 0; position: relative; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; flex: 1; flex-grow: 1;}
.table-cell {width: 100%; height: 82px; padding: 12px 24px; background-color: #f8f8f8; border-bottom: 1px solid #e5e5e9; position: relative; display: flex; align-items: center; gap: 10px; align-self: stretch;}
.text-wrapper-19 {padding: 0; color: #161618; font-size: 18px; font-weight: 600; font-style: normal; text-align: center; letter-spacing: -0.18px; line-height: 139.9999976158142%; position: relative; flex: 1;}
.view-wrapper {width: 100%; padding: 12px 24px; border-bottom: 1px solid #e5e5e9; position: relative; display: flex; align-items: center; gap: 12px; align-self: stretch; flex: 0 0 auto;}
.view-7 {padding: 0; position: relative; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; gap: 8px; flex: 1; flex-grow: 1;}
.view-8 {width: 100%; padding: 0; position: relative; display: flex; align-items: center; justify-content: center; gap: 8px; align-self: stretch; flex: 0 0 auto;}
.text-wrapper-20 {width: fit-content; margin-top: -1.00px; padding: 0; color: #67676f; font-size: 18px; font-weight: 400; font-style: normal; letter-spacing: -0.18px; line-height: 160.0000023841858%; position: relative; white-space: nowrap;}
.text-wrapper-21 {margin-top: -1.00px; padding: 0; color: #242428; font-size: 18px; font-weight: 400; font-style: normal; text-align: right; letter-spacing: -0.18px; line-height: 160.0000023841858%; position: relative; flex: 1;}
.divider-2 {width: 1px; background-color: #e5e5e9; position: relative; align-self: stretch;}
.button-group {width: 100%; padding: 0; position: relative; display: flex; flex-wrap: wrap; align-items: flex-start; gap: 12px 12px; flex: 0 0 auto; align-self: stretch;}
.BUTTON {padding: 10px 16px; background-color: #f2f2f4; border-radius: 8px; border: 0; position: relative; display: inline-flex; align-items: center; justify-content: center; gap: 24px; flex: 0 0 auto; cursor: pointer;}
.view-9 {padding: 0; position: relative; display: inline-flex; align-items: center; gap: 2px; flex: 0 0 auto;}
.text-wrapper-22 {width: fit-content; margin-top: -1.00px; padding: 0; color: #242428; font-size: 16px; font-weight: 400; font-style: normal; letter-spacing: -0.16px; line-height: 150%; position: relative; white-space: nowrap;}
.download {width: 24px; height: 24px; position: relative; aspect-ratio: 1;}

/*:::::::::::::::::::::::::::::::Responsive Style :::::::::::::::::::::::::::::::*/

@media screen and (max-width:1024px) {
    .title-sub-text {padding: 60px 0; font-size: 36px;}
    .view-3 {flex-wrap: wrap; gap: 40px 20px;}
    .div-2 {width: calc(48% - 10px);} /* 2열 배치 */
    .frame-5 {width:calc((100% - 12px) / 2)}
    .view-6:last-of-type {width:100%;}
}

@media screen and (max-width: 767px) {
.title_wrap {padding: 60px 20px 80px;}
    .page-title {font-size: 40px;}
    .visual-sub {font-size: 20px;}
    .title-sub-text {padding: 40px 0; font-size: 28px; line-height: 1.3;}
    .view-3 {flex-direction: column; align-items: center; gap: 40px;}
    .div-2 {width: 100%; max-width: 400px;} /* 1열 배치 및 최대너비 제한 */
    .view-6 {flex-direction: column; gap: 12px;}
    .view-6:last-of-type {width:100%;}
    .frame-5 {width: 100%; max-width:none;} /* 역량 구성표 1열 */
    .img {height: auto; aspect-ratio: 16 / 9;} /* 이미지 비율 유지 */
    .divider {width: 100%; height: 1px; margin: 20px 0;} /* 구분선 가로로 변경 */
    .policy_wrap {padding: 30px 20px;}
    .policy_wrap dt {margin-top: 40px; font-size: 20px;}
    .policy_wrap dd {font-size: 16px;}
    .table {flex-direction: column;}
    .column {width: 100%;}
    .divider-2 {width: 100%; height: 1px;}
    .button-group {flex-direction: column; gap: 8px;}
}
</style>