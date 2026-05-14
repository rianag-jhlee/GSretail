<template>
    <div class="modal_cont">
        <div class="modal_header">
            {{ t.MainTitle }}
            <a href="#none" @click="closeModal" class="btn_close">닫기</a>
        </div>

        <div class="modal_content">

            <div class="pop_space">
                <p class="intro_desc ac">{{ t.intro }}</p>
                
                <section class="section">
                    <strong class="title">{{ t.section1.title }}</strong>
                    <div class="smp_announcement">
                        <dl class="direction_list">
                            <template v-for="(item, index) in t.section1.policies" :key="index">
                                <dt>{{ item.num }}</dt>
                                <dd>{{ item.content }}</dd>
                            </template>
                        </dl>
                    </div>
                </section>

                <section class="section">
                    <p class="desc ar">{{ t.section2.desc }}</p>
                </section>

            </div>
        </div>
    </div>
</template>

<script>
import modal from "@/assets/js/modal";
import Buttons from "@/components/Buttons.vue";

export default {
    name: "gsrsu03030401",
    components: {
        Buttons
    },
    data() {
        return {
            langData: {
                ko: {
                    MainTitle: "안전·보건 경영방침",
                    intro: 'GS리테일은 안전한 근무환경을 조성하여 사고 및 재해를 예방하고,\n모든 구성원(임직원, 협력사), 시민(고객, 일반시민)의 건강한\n삶의 질 향상을 위해 경영방침을 적극 실천한다.',
                    section1: {
                        policies: [
                            { num: '1.', content: '회사는 산업안전보건법과 안전보건관리규정 등 관련 법규를 준수한다.' },
                            { num: '2.', content: '회사는 안전중심의 경영의지와 실적이 최고수준에 도달하도록 노력한다.' },
                            { num: '3.', content: '회사는 안전보건업무를 경영의 한 요소로 인식하여 필요한 자원과 기술을 제공하고 안전·보건활동을 지속적으로 전개한다.' },
                            { num: '4.', content: '회사는 구성원(임직원, 협력사), 시민(고객, 일반시민)의 참여 및 의견을 적극 반영하고 불안전한 행동, 환경 등 사업장의 유해·위험 요소를 지속적으로 점검·제거하여 사고 및 재해를 예방하기 위해 노력한다.' },
                            { num: '5.', content: '회사는 매년 사업장의 안전·보건 관련 법규 준수 상태를 확인하고 필요한 인력, 예산 등을 편성하여 집행한다.' },
                            { num: '6.', content: '회사의 전 구성원은 본부의 안전·보건 활동 계획과 안전·보건 매뉴얼을 준수하여 중대재해 및 산업재해 예방활동에 적극 동참한다.' }
                        ],
                    },
                    section2: {
                        desc: 'GS리테일은 안전한 근무환경을 조성하여 사고 및 재해를 예방하고,\n모든 구성원(임직원, 협력사), 시민(고객, 일반시민)의 건강한\n삶의 질 향상을 위해 경영방침을 적극 실천한다.',
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
/* smp_announcement_pop 스타일 */
.pop_space {font-size:15px; line-height:25px;}
.pop_space .intro_desc {color:#444; font-size:18px; line-height:26px;white-space:pre-line;}
.pop_space .title {display:block;font-size:18px;font-weight:700;padding-bottom:20px}
.pop_space .section {padding:35px 0;border-bottom:1px solid #dfdfdf}
.pop_space .section.first {padding-top:0}
.pop_space .section:last-child {border-bottom:0}
.pop_space .section .desc {font-size:15px;line-height:25px;white-space:pre-line;}
.pop_space .section .smp_announcement>dl {overflow:hidden;margin-top:10px}
.pop_space .section .smp_announcement>dl dt {float:left;background:#0072bc;border-radius:15px;color:#fff;text-align:center;width:42px;font-size:13px;line-height:19px}
.pop_space .section .smp_announcement>dl dd {padding-left:50px;margin-bottom:7px;padding-bottom:7px;line-height:19px;font-size:15px}

/* 모달 레이아웃 */
.modal_cont {background-color: #fff;}
.modal_header {display:flex; justify-content:space-between; align-items:center; padding-bottom:40px; font-size:40px; font-weight:700; border-bottom:0;}
.modal_content {max-height:700px; overflow-y:auto; padding-right:10px;}
.btn-wrap {display:flex; justify-content:flex-end;}

/* 반응형 */
@media screen and (max-width: 767px) {
    .modal_header {font-size:18px; padding-bottom:24px;}
    .pop_space .intro_desc {white-space:unset;}
}
@media screen and (max-width: 420px) {
    .modal_header {font-size:18px; padding-bottom:24px;}
    .pop_space .section .desc {white-space:unset;}
}
</style>