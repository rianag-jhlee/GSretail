<template>
    <div class="main-container">
        <div class="title_wrap ac">
            <h2 class="page-title">{{ t.MainTitle }}</h2>
        </div>

        <section class="section-partnership">
            <div class="cont_inner">
                <Tabs 
                    v-model="MainTabIdx" 
                    :tab-items="t.MainTabs" 
                    tab-class="type_01" 
                    :tab-slide="true"
                    @change="onMainTabChange"
                />
                <div class="tab_content_wrap mt100" v-if="MainTabIdx === 0">
                    <div class="partnership_intro mb100">
                        <h3 class="section-sub-title mb16">{{ t.IntroTitle }}</h3>
                        <p class="intro_desc">{{ t.IntroDesc }}</p>
                    </div>

                    <div class="guide_step_area mb100">
                        <h4 class="guide_title mb40">{{ t.GuideTitle }}</h4>
                        <ul class="step_list">
                            <li v-for="(step, idx) in t.StepList" :key="'step-' + idx">
                                <div class="step_info">
                                    <span class="step_label">Step {{ idx + 1 }}</span>
                                    <strong class="step_text">{{ step.title }}</strong>
                                </div>
                            </li>
                        </ul>
                    </div>


                    <div class="sub_tab_wrap ac mb40">
                        <Tabs 
                            v-model="SubTabIdx" 
                            :tab-items="t.SubTabs" 
                            tab-class="type_02" 
                            :tab-slide="true"
                            @change="onSubTabChange" 
                            v-if="MainTabIdx === 0"
                        />
                    </div>

                    <!-- gsrse01 -->
                    <section class="notice_list_area mb100" v-if="SubTabIdx === 0">
                        <h4 class="guide_title mb40">{{ t.SubTabs[0].item }}</h4>
                        <div class="policy_wrap">
                            <table class="base_table">
                                <tbody>
                                    <tr v-for="(item, idx) in t.NoticeList" :key="'notice-'+idx">
                                        <td class="ac color_gray">{{ item.id }}</td>
                                        <td class="al title_cell">
                                            <a href="javascript:void(0);" class="link_title">{{ item.title }}</a>
                                        </td>
                                        <td class="ac color_gray date_cell">{{ item.date }}</td>
                                        <td class="ac color_gray view_cell">{{ t.ViewCountText }} {{ item.views }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="pagination_area mt64">
                            <Pagination v-model="currentPage" :total-pages="5" @change="onPageChange" />
                        </div>
                        <div class="bottom_link_btns">
                            <a 
                                v-for="(link, idx) in t.SystemLinks" 
                                :key="'link-' + idx"
                                :href="link.url" 
                                target="_blank" 
                                class="btn_system_link"
                            >
                                {{ link.title }}
                            </a>
                        </div>
                    </section>

                    <!-- gsrse02 -->    
                    <section class="gsrse02 mb100" v-if="SubTabIdx === 1">
                        <article class="guide_view mb100">
                            <div class="guide_header mb40">
                                <h4 class="text-wrapper mb12">{{ t.ProcessTitle }}</h4>
                                <ul class="div_desc" v-html="t.ProcessDesc"></ul>
                            </div>
                            <div class="img_box">
                                <img 
                                    :src="isMobile ? require('@/assets/images/dummy/gsrse01_01_mo.png') : require('@/assets/images/dummy/gsrse01_01.png')" 
                                    :alt="t.ProcessTitle" 
                                    class="full_img" 
                                />
                            </div>
                        </article>

                        <article class="guide_view mb100">
                            <div class="guide_header mb40">
                                <h4 class="text-wrapper mb12">{{ t.ContractSiteTitle }}</h4>
                                <ul class="bullet_01">
                                    <li v-for="(desc, dIdx) in t.ContractSiteDesc" :key="'site-desc-'+dIdx">{{ desc }}</li>
                                </ul>
                            </div>

                            <div class="auth_table_area pc">
                                <h5 class="text-wrapper-2 mb24">{{ t.AuthTableTitle }}</h5>
                                <div class="policy_wrap">
                                    <table class="base_table">
                                        <thead>
                                            <tr>
                                                <th scope="col" v-for="h in t.AuthTableHeader" :key="h">{{ h }}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(row, rIdx) in t.AuthAgencies" :key="'auth-'+rIdx">
                                                <td>{{ row.name1 }}</td>
                                                <td class="ac"><a :href="row.url1" target="_blank" class="link_url">{{ row.url1 }}</a></td>
                                                <td class="ac">{{ row.name2 }}</td>
                                                <td class="ac"><a :href="row.url2" target="_blank" class="link_url">{{ row.url2 }}</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="auth_table_area mo">
                                <h5 class="text-wrapper-2 mb24">{{ t.AuthTableTitle }}</h5>
                                <div class="auth_header">
                                    <span>{{t.AuthTableHeader_mo[0]}}</span>
                                    <span>{{t.AuthTableHeader_mo[1]}}</span>
                                </div>
                                <div class="auth_card_list">
                                    <div class="auth_card_item" v-for="(row, rIdx) in t.AuthAgencies_mo" :key="'auth-mo-' + rIdx">
                                        <div class="auth_row">
                                            <span class="agency_name">{{ row.name1 }}</span>
                                            <a :href="row.url1" target="_blank" class="btn_go_link">바로가기</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article class="guide_view mb100">
                            <h4 class="text-wrapper mb40">{{ t.RelatedSitesTitle }}</h4>
                            <div class="card_grid">
                                <div class="info_card" v-for="(card, cIdx) in t.RelatedSites" :key="'site-'+cIdx">
                                    <div class="card_head mb16">
                                        <span class="card_num">{{ card.num }}</span>
                                        <strong class="card_name">{{ card.name }}</strong>
                                    </div>
                                    <p class="card_desc">{{ card.desc }}</p>
                                </div>
                            </div>
                        </article>

                        <article class="help_desk_area">
                            <div class="guide_header mb40">
                                <h4 class="text-wrapper mb12">{{ t.HelpDeskTitle }}</h4>
                                <p class="div_desc">{{ t.HelpDeskDesc }}</p>
                            </div>
                            <ul>
                                <li v-for="(help, hIdx) in t.HelpDeskItems" :key="'help-'+hIdx">
                                    <div class="info">
                                        <span class="brand">{{ help.brand }}</span>
                                        <strong class="tel">{{ help.tel }}</strong>
                                        <p class="note">※ {{ help.note }}</p>
                                        <a :href="help.link" class="btn_big border btn_icon after mt20">
                                            {{ t.BtnGoDetail }}
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </article>
                    </section>

                    <!-- gsrst03 -->  
                    <section class="gsrst03 mb100" v-if="SubTabIdx === 2">
                        <div class="faq_frame">
                            <h4 class="text-wrapper mb40">{{ t.SubTabs[2].item }}</h4>
                            
                            <div class="faq_view">
                                <Accordion :multiple="false" class="accordion_wrap">
                                    <AccordionItem 
                                        v-for="(faq, fIdx) in t.FaqList" 
                                        :key="'faq-' + fIdx"
                                        :item-key="String(fIdx)"
                                    >
                                        <template #title>
                                            <div class="q_box">
                                                {{ faq.question }}
                                            </div>
                                        </template>

                                        <div class="a_box" v-html="faq.answer"></div>
                                    </AccordionItem>
                                </Accordion>

                                <div class="pagination_area mt64">
                                    <Pagination v-model="currentPage" :total-pages="5" @change="onPageChange" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import Pagination from "@/components/Pagination.vue";
import Accordion from "@/components/Accordion.vue";
import AccordionItem from "@/components/AccordionItem.vue";

export default {
    name: "gsrst01",
    components: { Tabs, Pagination, Accordion, AccordionItem },
    props: { lang: { type: String, default: "ko" } },
    data() {
        return {
            MainTabIdx: 0,
            SubTabIdx: 0,
            currentPage: 1,
            langData: {
                ko: {
                    MainTitle: "입점상담",
                    MainTabs: [{ item: "GS25/GS THE FRESH/지원부문" }, { item: "GS SHOP" }],
                    SubTabs: [{ item: "공지사항" }, { item: "입점 안내" }, { item: "자주하는 질문 FAQ" }],
                    IntroTitle: "입점상담 신청 ",
                    IntroDesc: "GS25/GS THE FRESH/지원부문 입점에 관한 상담을 신청하고 결과를 확인하세요.",
                    GuideTitle: "입점 상담 가이드",
                    StepList: [{ title: "신규업체 등록" }, { title: "입점상담 신청" }, { title: "담당MD 상담" }, { title: "입점계약 진행" }],
                    NoticeList: [
                        { id: 1, title: "2026년 GS25 입점 상담 안내", date: "2026.02.10", views: "1234" },
                        { id: 2, title: "GS THE FRESH 신규 입점 지역 안내", date: "2026.02.10", views: "1234" }
                    ],
                    // 입점 안내 섹션 데이터 바인딩
                    ProcessTitle: "입점 절차 안내",
                    ProcessDesc: "<li>입점상담부터 계약체결에 이르기까지의 입점절차 안내 입니다.</li><li>GS리테일과 거래를 원하는 모든 파트너사들이 공정한 절차를 통해 입점상담을 진행할 수 있도록 아래 절차대로 입점과정이 진행됩니다.</li>",
                    ContractSiteTitle: "전자계약 사이트 안내",
                    ContractSiteDesc: [
                        "GS리테일은 전자문서 시대에 발 맞추어 거래의 공정성 및 투명성과 신뢰성을 확보코자 온라인 상담에 이어 계약시에도 인감과 동일한 효력이 있는 전자서명을 시행하고 있습니다.",
                        "접속시 업체정보가 등록이 되신 기존 파트너회사는 상담시스템에서 재방문 로그인으로 접속 하시거나 또는 바로 전자계약 메뉴를 선택하시고 접속하여 사용하실 수 있습니다."
                    ],
                    AuthTableTitle: "전자인증 공인기관",
                    AuthTableHeader: ["상호", "사이트명", "상호", "사이트명"],
                    AuthAgencies: [
                        { name1: "한국정보인증", url1: "https://www.signgate.com", name2: "한국전산원", url2: "http://sign.nca.or.kr/" },
                        { name1: "한국증권전산", url1: "http://www.signkorea.com/", name2: "한국전자인증", url2: "http://gca.crosscert.com/" },
                        { name1: "금융결제원", url1: "http://www.yessign.or.kr/", name2: "한국무역정보통신", url2: "http://www.tradesign.net/" }
                    ],
                    AuthTableHeader_mo: ["상호", "사이트"],
                    AuthAgencies_mo: [
                        { name1: "한국정보인증", url1: "https://www.signgate.com", name2: "한국전산원", url2: "http://sign.nca.or.kr/" },
                        { name1: "한국증권전산", url1: "http://www.signkorea.com/", name2: "한국전자인증", url2: "http://gca.crosscert.com/" },
                        { name1: "금융결제원", url1: "http://www.yessign.or.kr/", name2: "한국무역정보통신", url2: "http://www.tradesign.net/" }
                    ],
                    RelatedSitesTitle: "기타 관련 사이트 안내",
                    RelatedSites: [
                        { num: "01", name: "전자인증 공인기관", desc: "GS리테일이 공정하고 투명하며 합리적인 가격으로 상품과 서비스를 구매 및 도입하기 위한 인터넷 구매시스템 사이트 입니다." },
                        { num: "02", name: "eSCM21", desc: "데이콤망을 이용하여 GS리테일과 거래하는 파트너사와의 업무처리(수/발주, 대금결제, 세금계산서, 재고/판매정보등)를 인터넷 사이트를 통해 접속 처리하여 효율적인 업무를 지원하는 사이트 입니다." }
                    ],
                    HelpDeskTitle: "HELP DESK",
                    HelpDeskDesc: "협력사 상담 지원센터 관련하여 궁금하거나 불편한 사항이 있으면 아래 연락처로 연락 주시면 친절하게 안내해 드리겠습니다.",
                    HelpDeskItems: [
                        { brand: "GS25", tel: "1644-5425", note: "GS25 창업상담 문의", link: "#", imgName: "gsrst01_gs25.png" },
                        { brand: "GS THE FRESH (GS수퍼마켓)", tel: "1833-9779", note: "GS THE FRESH 가맹상담 문의", link: "#", imgName: "gsrst01_fresh.png" }
                    ],
                    BtnGoDetail: "바로가기",
                    FaqList: [
                        { 
                            question: "입점 비용은 얼마인가요?", 
                            answer: "입점 비용은 브랜드, 면적, 지역에 따라 상이합니다. <br/>상담 신청을 통해 정확한 비용을 안내받으실 수 있습니다.",
                            isOpen: true // 첫 번째 항목 기본 오픈
                        },
                        { 
                            question: "기존 매장 리뉴얼도 가능한가요?", 
                            answer: "네, 기존 매장 리뉴얼 상담도 가능합니다. 상세 내용은 담당 MD와 상담해 주세요.",
                            isOpen: false 
                        },
                        { 
                            question: "입점 후 운영 지원은 어떻게 받나요?", 
                            answer: "정기적인 보수 교육 및 운영 가이드를 제공하며, 담당 SV가 배정되어 지원합니다.",
                            isOpen: false 
                        },
                        { 
                            question: "계약 기간은 어떻게 되나요?", 
                            answer: "기본 계약 기간은 브랜드별로 상이하며, 일반적으로 2년 단위로 갱신됩니다.",
                            isOpen: false 
                        },
                        { 
                            question: "입점 상담 취소는 가능한가요?", 
                            answer: "신청 완료 후에도 마이페이지 또는 상담 조회 메뉴에서 취소 요청이 가능합니다.",
                            isOpen: false 
                        }
                    ],
                    ViewCountText: "조회",
                    ExternalMoveText: "GS SHOP 입점 상담 페이지로 이동 중입니다.",
                    SystemLinks: [
                        { title: "GS리테일 전자계약 시스템", url: "https://partner.gsretail.com:7300/web/main/index.jsp" },
                        { title: "GS리테일 협력업체 포털", url: "https://gs.escm21.net/escm21/home/index.jsp" }
                    ],
                    GsShopUrl: "https://withgs.gsshop.com/sug/suggest"
                }
            }
        };
    },
    computed: {
        t() { return this.langData[this.lang] || this.langData.ko; }
    },
    // 2. 라이프사이클 훅 추가: 리사이즈 이벤트 감지
    mounted() {
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
    },
    beforeUnmount() { // Vue 3 기준 (Vue 2라면 beforeDestroy)
        window.removeEventListener('resize', this.checkMobile);
    },
    methods: {
        checkMobile() {
            // 3. 모바일 기준값(767px) 체크 로직
            this.isMobile = window.innerWidth <= 767;
        },
        onMainTabChange(idx) {
            // GS SHOP 탭(인덱스 1) 클릭 시 외부 페이지 오픈
            if (idx === 1) {
                window.open(this.t.GsShopUrl, "_blank");
                // 화면상에서는 다시 GS25 탭으로 되돌리거나 현재 상태 유지 (기획에 따라 조절)
                this.$nextTick(() => {
                    this.MainTabIdx = 0;
                });
            } else {
                this.MainTabIdx = idx;
            }
        },
        onSubTabChange(idx) { this.SubTabIdx = idx; },
        onPageChange(page) { this.currentPage = page; }
    }
};
</script>

<style scoped>
/* 1. 공통 레이아웃 및 간격 */
.main-container { width: 100%; position: relative; }
.title_wrap { width: 100%; height: 480px; padding: 10.91% 0 11.25%; background: url('/src/assets/images/dummy/gsrst01_bg.png') no-repeat center / cover; text-align: center; position: relative; display: block;}
.page-title { color: #FFFFFF; font-size: 72px; font-weight: 700; letter-spacing: -1.44px; }
.cont_inner { width: 100%; max-width: 1420px; margin: 0 auto; padding-bottom: 200px; }
.mo {display:none;}
.pc {display:block;}

/* 2. 텍스트 스타일 가이드 */
.section-sub-title { font-size: 40px; font-weight: 700; color: #161616; }
.intro_desc { font-size: 24px; color: #161616; line-height: 1.5; }
.text-wrapper { font-size: 28px; font-weight: 700; color: #161616; }
.text-wrapper-2 { font-size: 24px; font-weight: 700; color: #161616; }
.text-wrapper-8 { font-size: 28px; font-weight: 700; color: #000; }
.div_desc { font-size: 20px; line-height: 1.4; color: #161616; }
.div_desc :deep(li) { font-size: 20px; line-height: 1.4; color: #161616; }

/* 3. 가이드 Step 리스트 (ul/li 최적화) */
.guide_title { font-size: 28px; font-weight: 700; color: #161616; }
.step_list { display: flex; align-items: center;}
.step_list li {padding: 56px 64px; background-color: #f8f8f8; border-radius: 8px;  flex: 1; display: flex; align-items: center; }
.step_list li::before { content:''; width:40px; height:40px; margin-right:24px; background:red; display:inline-block; flex-shrink:0; } /* 아이콘 영역 */
.step_info { display: flex; flex-direction: column; gap: 6px; }
.step_label { font-size:18px; font-weight: 700; color: #107af2; }
.step_text { font-size: 20px; font-weight: 700; color: #161616; }

/* 4. 테이블 리스트 (공지사항 등) */
.policy_wrap table { width: 100%; border-collapse: collapse; border-top:0;}
.policy_wrap th {border-top-color: #E5E5E9;}
.policy_wrap th, .policy_wrap td { padding: 18px 24px; border-bottom: 1px solid #E5E5E9; font-size: 1.8rem; vertical-align: middle; }
.policy_wrap td a {font-size:18px;}
.policy_wrap thead th { background-color: #F8F8F8; color: #161616; font-weight: 700; }
.policy_wrap td { height: 82px; color: #161616; border-left: 0; border-right: 0; }
.policy_wrap th { border-left: 0; border-right: 0; }
.notice_list_area .policy_wrap tbody tr:first-of-type td {border-top:1px solid #161616;}

/* 5. 입점 안내 상세 컨텐츠 (Table, Bullet, Card) */
.full_img { width: 100%; height: auto; display: block; }

.auth_table { width: 100%; border-collapse: collapse; border-top: 2px solid #161616; }
.auth_table th, .auth_table td { padding: 16px; border-bottom: 1px solid #e5e5e9; font-size: 1.8rem; vertical-align: middle; }
.auth_table th { background: #f8f8f8; font-weight: 700; color: #161616; }
.bg_light { background: #fbfbfb; font-weight: 700; }
.link_url { color: #161616; text-decoration: none; word-break: break-all; }

.card_grid {display:flex; gap:20px}
.info_card {width:340px; padding: 32px 32px 56px; background: #f8f8f8; border-radius: 12px; }
.card_num { font-size: 1.8rem; font-weight: 700; color: #107af2; display: block; margin-bottom: 4px; }
.card_name { font-size: 20px; font-weight: 700; color: #161616; }
.card_desc { font-size: 16px; line-height: 1.5; color: #67676f; margin-top: 12px; }

/* 6. HELP DESK (ul/li 및 가상요소 최적화) */
.help_desk_area { width: 100%; }
.help_desk_area ul { display: flex; gap:20px; list-style: none; padding: 0; }
.help_desk_area ul li {width:calc(100% / 2 - 10px); padding: 32px; background-color: #f8f8f8; border-radius: 10px; position: relative; }

/* li::before를 이용한 브랜드 로고 처리 */
.help_desk_area ul li::before { content: ''; width: 160px; height: 160px; margin-right:40px; background-repeat: no-repeat; background-position: center; background-size: contain; display:inline-block; flex-shrink: 0; }
.help_desk_area ul li:nth-child(1)::before { background-image: url('@/assets/images/dummy/gsrst01_gs25.png'); }
.help_desk_area ul li:nth-child(2)::before { background-image: url('@/assets/images/dummy/gsrst01_fresh.png'); }

.help_desk_area .info {vertical-align:top; display:inline-block;}
.help_desk_area .brand { font-size: 1.8rem; font-weight: 700; color: #161616; }
.help_desk_area .tel { font-size: 28px; font-weight: 700; color: #161616; margin: 4px 0; display: block; }
.help_desk_area .note { font-size: 16px; color: #67676f; }

/* 7. 하단 공통 배너 (사용자 수정 CSS 반영) */
.bottom_link_btns { margin-top: 60px; display: flex; gap: 20px; }
.bottom_link_btns a { padding: 94px 32px 32px; color:#161616; font-size:18px; font-weight:700; background-color: #f8f8f8; border-radius: 10px; text-decoration: none; transition: background-color 0.2s; position:relative; flex: 1; display: flex; align-items: center; justify-content: center; }
.bottom_link_btns a::before, .bottom_link_btns a::after { content:''; width:40px; height:40px; background:red; display:inline-block; } /* 아이콘 가상요소 */
.bottom_link_btns a::before { position:absolute; top:32px; left:50%; transform:translateX(-50%); }
.bottom_link_btns a::after { width:16px; height:16px; margin-left:8px; }
.bottom_link_btns a:hover { color:#fff; background:#15B874; }

/* 8. 버튼 및 FAQ 공통 */
.board_type_toggle {border-top:1px solid #161616;}
.board_type_toggle dt > a.acc_tit_btn {padding:20px !important;}
.btn_group { display: flex; gap: 8px; }
.faq_list_wrap { border-top: 1px solid #161616; }
.faq_item { border-bottom: 1px solid #e5e5e9; }
.faq_q { padding: 24px 20px; display: flex; align-items: center; gap: 16px; cursor: pointer; }
.q_mark { font-size: 24px; font-weight: 700; color: #107af2; }
.q_box {font-size:18px; display:flex;}
.q_box::before {content:'Q'; margin-right:16px;}
.q_text { font-size: 1.8rem; font-weight: 700; color: #161616; }
.a_box {padding:0px 30px 24px; color:#67676F; font-size:18px;}
.faq_a { padding: 0 20px 24px 52px; background: #fafafa; }
.a_text { font-size: 1.8rem; line-height: 1.6; color: #67676f; }
.pagination_area { display: flex; justify-content: center; }

/* 9. 반응형 미디어 쿼리 */
@media screen and (max-width: 1024px) {
    .step_list {flex-wrap:wrap;}
    .step_list li {width:50%; padding:40px 30px; flex: none;}
    .cont_inner { padding: 0 20px; }
    .bottom_link_btns, .help_desk_area ul { flex-direction: column; grid-template-columns: 1fr; }
    .help_desk_area ul li { width:100%; padding:20px; flex-direction:column;}
    .policy_wrap th, .policy_wrap td, .policy_wrap td a {font-size: 16px !important; }
}
@media screen and (max-width: 767px) {
    .mo {display:block;}
    .pc {display:none;}
    .cont_inner {padding: 80px 20px 200px;}
    :deep(.tab_wrap) ul.type_02 {padding-left:0px !important;}
    .text-wrapper { font-size: 24px;}
    .title_wrap  {display:none;}
    .section-sub-title, .guide_title {font-size:24px;}
    .intro_desc {font-size:18px;}
    .step_list {flex-direction: column; align-items: flex-start; padding:0; }
    .div_desc :deep(li), .bullet_01 li, .div_desc { font-size:18px;}
    .step_list li {width:100%;}
    .step_text {font-size:18px;}
    .notice_list_area .base_table tbody tr td:first-of-type {display:none;}
    /* 기존 테이블 레이아웃 해제 */
    .notice_list_area .base_table tbody, .notice_list_area .base_table tr, .notice_list_area .base_table td {display: block; width: 100%; height:auto; border: 0;}
    .notice_list_area .base_table tr {padding:12px 10px; border-bottom: 1px solid #EEE; display: flex; flex-wrap: wrap;}
    /* 제목 셀: 상단 전체 너비 차지 */
    .notice_list_area .policy_wrap tbody tr:first-of-type td {border-top:0;}
    .notice_list_area .base_table {border-top:1px solid #161616;}
    .notice_list_area .base_table .title_cell {padding: 0 0 8px 0; order: 1;}
    .notice_list_area .base_table .title_cell .link_title {color: #161616; font-size:16px !important; font-weight: 500; line-height: 1.4;}
    .notice_list_area .base_table .date_cell, .notice_list_area .base_table .view_cell {width: 50%; padding: 0; color: #999; font-size: 12px !important; text-align: left !important; order: 2;}
    .notice_list_area .base_table .view_cell {color:#67676F; text-align:right !important; order: 3;}
    .notice_list_area .base_table .view_cell::before {margin-right: 4px;}
    .help_desk_area ul li { width:100%; padding:20px; display:flex; flex-direction:row; gap:20px; align-items:center;}
    .help_desk_area ul li::before {width:100px; margin-right:0;}
    .help_desk_area .info .brand { font-size:14px;}
    .help_desk_area .info .tel { font-size:20px;}
    .help_desk_area .info .note { font-size:12px;}
    .help_desk_area .info .btn_big {height:38px; font-size:16px;}
    .faq_a { padding-left: 20px; }
    .card_grid {flex-direction:column;}
    .card_grid .info_card {width:100%;}
    .policy_wrap th, .policy_wrap td, .policy_wrap td a {font-size: 16px !important; }
}
</style>