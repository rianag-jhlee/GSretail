<template>
    <div class="modal_cont">
        <div class="modal_header">
            {{ t.MainTitle }}
            <a href="#none" @click="closeModal" class="btn_close">닫기</a>
        </div>

        <div class="modal_content">

            <div class="sust_purc_policy_popup">
                <!-- 1. 목적 -->
                <div class="section first">
                    <p class="title">{{ t.section1.title }}</p>
                    <p>{{ t.section1.content }}</p>
                </div>

                <!-- 2. 정의 -->
                <div class="section">
                    <p class="title">{{ t.section2.title }}</p>
                    <ul class="txt_idn">
                        <li v-for="(item, index) in t.section2.items" :key="index">
                            <strong class="s_title">{{ item.label }}</strong>
                            <p class="desc">{{ item.content }}</p>
                        </li>
                    </ul>
                </div>

                <!-- 3. 적용대상 -->
                <div class="section">
                    <p class="title">{{ t.section3.title }}</p>
                    <ul class="txt_idn">
                        <li v-for="(item, index) in t.section3.items" :key="index">
                            <strong class="s_title">{{ item.label }}</strong>
                            <p class="desc" v-html="item.content"></p>
                        </li>
                    </ul>
                </div>

                <!-- 4. 지속가능한 구매 방침 -->
                <div class="section">
                    <p class="title">{{ t.section4.title }}</p>
                    <p class="intro_text">{{ t.section4.intro }}</p>
                    <p v-for="(policy, index) in t.section4.items" :key="index" class="dot">
                        <span class="bold">{{ policy.step }}</span> {{ policy.text }}
                    </p>
                </div>

                <!-- 5. 지속가능한 구매 절차 -->
                <div class="section">
                    <h2 class="title">{{ t.section5.title }}</h2>
                    <ul class="conti_step_list_orange">
                        <li v-for="(step, index) in t.section5.steps" :key="index">
                            <span class="num">{{ step.id }}</span>
                            <span class="txt" v-html="step.title"></span>
                            <ul class="list">
                                <li v-for="(detail, dIndex) in step.details" :key="dIndex">
                                {{ detail }}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import modal from "@/assets/js/modal";
import Buttons from "@/components/Buttons.vue";

export default {
    name: "gsrsu02010301",
    components: {
        Buttons
    },
    data() {
        return {
            langData: {
                ko: {
                    MainTitle: "GS리테일 지속가능한 구매방침",
                    section1: {
                        title: '1. 목적',
                        content: 'GS리테일의 지속가능구매방침은 지속가능한 소모품/원재료 구매를 적극 장려 및 촉진함으로써 자원의 낭비와 환경오염을 방지하고 온실가스 감축에 기여하여 국민경제의 지속가능한 발전에 이바지함을 목적으로 한다.'
                    },
                    section2: {
                        title: '2. 정의',
                        items: [
                            { label: '1) 지속가능한 구매: 소모품', content: '친환경/녹색제품 관련 국내법에서 정의하는 제품 혹은 이에 준하는 친환경/녹색 국내·외 인증을 취득한 제품을 최우선으로 구매/사용하는 것을 의미한다.' },
                            { label: '2) 지속가능한 구매: 원재료', content: '원재료 관련 국내·외 글로벌 인증을 취득한 원재료의 구매/소싱을 통해 책임감 있는 구매 활동을 이행하는 것을 의미한다.' }
                        ]
                    },
                    section3: {
                        title: '3. 적용대상',
                        items: [
                            { label: '1) 소모품', content: '점포 등에서 활용하는 일련의 시설 관련 소모품 및 집기<br>사무실 등에서 업무용으로 사용하는 사무용품 (책상, 의자, 복사기, 단순소모품 등)<br>인테리어 건축 자재 (목재, 페인트 등)' },
                            { label: '2) 원재료', content: '유통/판매되는 원재료(농/축/수산물, 유제품 등) 및 가공식품에 활용되는 모든 원재료' }
                        ]
                    },
                    section4: {
                        title: '4. 지속가능한 구매 방침',
                        intro: '녹색구매활동을 통한 ESG 경영을 적극적으로 실천하기 위해 아래 방침을 준수한다.',
                        items: [
                            { step: '첫째,', text: '적극적인 녹색구매활동을 통해 환경경영을 정착하고 확대하여 친환경의 가치를 고객에게 제공하는 등 친환경 선도 기업으로 사회적 책임과 역할을 다한다.' },
                            { step: '둘째,', text: '당사의 녹색구매방침을 파트너사/협력사에게 공유 및 장려한다.' },
                            { step: '셋째,', text: '모든 구매활동은 녹색구매를 우선으로 검토한다. 단, 녹색구매가 불가능한 경우(공급불가, 품질저하, 친환경/녹색 제품 부재 등)는 예외로 한다.' },
                            { step: '넷째,', text: '녹색구매활동에 대해 정기적인 모니터링 및 평가를 실시하며 개선필요 시 보완한다.' }
                        ]
                    },
                    section5: {
                        title: '5. 지속가능한 구매 절차',
                        steps: [
                            { id: '01', title: '1단계<br>녹색구매 검토', details: ['구매필요 품목 중 녹색구매에 포함되는 인증 제품 여부 파악'] },
                            { id: '02', title: '2단계<br>녹색제품 도입 가능성 검토', details: ['도입하고자 하는 녹색제품의 시범 운영 실시', '시범 운영 결과 보고 및 운영안 협의'] },
                            { id: '03', title: '3단계<br>녹색구매 이행/계약', details: ['녹색구매제품 계약 체결 및 발주'] },
                            { id: '04', title: '4단계<br>실적관리 및 공시', details: ['구매 제품별 품질, 서비스 등에 대한 모니터링 및 점검', '점검에 따른 보완/실적 관리'] }
                        ]
                    }
                }
            }
        };
    },
    computed: { 
        t() { 
            // langData가 없거나, 해당 언어 데이터가 없을 경우를 모두 대비
            const data = this.langData[this.lang] || this.langData.ko;
            return data || {}; 
        } 
    },
    methods: {
        closeModal(event) { modal.close(event.currentTarget); }
    }
};
</script>

<style scoped>
/* sust_purc_policy_popup 스타일 */
.sust_purc_policy_popup {font-size:15px; line-height:25px;}
.sust_purc_policy_popup .section {border-top:1px solid #dfdfdf; padding:30px 0}
.sust_purc_policy_popup .section.first {padding-top:0px; border-top:0}
.sust_purc_policy_popup .title {font-size:18px; font-weight:bold; padding:0 0 5px 0;}
.sust_purc_policy_popup ul .s_title {font-weight:bold;}
.sust_purc_policy_popup ul.txt_idn > li + li {padding-top:30px}
.conti_step_list_orange {overflow:hidden; display:flex; gap:10px; flex-wrap:wrap;}
.conti_step_list_orange>li {flex: 0 0 calc(25% - 10px);position:relative;height:268px;border:3px solid #ebebeb;border-radius:8px;text-align:center;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
.conti_step_list_orange>li:after {content:"";display:inline-block;height:100%;vertical-align:middle}
.conti_step_list_orange>li .num {position:absolute;top:-3px;left:20px;padding-top:6px;font-size:16px;font-weight:700;color:#f26522;border-top:3px solid #f26522}
.conti_step_list_orange>li .txt {display:block;font-size:15px;line-height:22px;padding:38px 0 15px 0;font-weight:700}
.conti_step_list_orange>li ul.list {font-size:14px;text-align:left!important;padding-bottom:0;padding:0 11px;line-height:22px}
.sust_purc_policy_popup .dot,
.conti_step_list_orange>li ul li {position:relative;padding-left:10px;padding-top:0px}
.sust_purc_policy_popup .dot:before,
.conti_step_list_orange>li ul li:before {content:'';position:absolute;top:10px;left:0;width:4px;height:4px;border-radius:50%;background:#f26522}

/* 모달 레이아웃 */
.modal_cont {background-color: #fff;}
.modal_header {display:flex; justify-content:space-between; align-items:center; padding-bottom:40px; font-size:40px; font-weight:700; border-bottom:0;}
.modal_content {max-height:700px; overflow-y:auto; padding-right:10px;}
.btn-wrap {display:flex; justify-content:flex-end;}

/* 반응형 */
@media screen and (max-width: 767px) {
    .modal_header {font-size:18px;}
    .conti_step_list_orange>li {flex: 0 0 calc(50% - 10px);}
}
</style>