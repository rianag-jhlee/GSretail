<template>
    <div class="modal_cont">
        <div class="modal_header">
            {{ t.MainTitle }}
            <a href="#none" @click="closeModal" class="btn_close">닫기</a>
        </div>

        <div class="modal_content">

            <div class="pop_space">
                <p class="intro_desc">{{ t.intro }}</p>

                <div class="pop_guide_wrap">

                    <!-- I. 목적 -->
                    <section class="section">
                        <strong class="title">{{ t.section1.title }}</strong>
                        <p class="desc">{{ t.section1.desc }}</p>
                    </section>

                    <!-- II. 용어의 정의 -->
                    <section class="section">
                        <strong class="title">{{ t.section2.title }}</strong>
                        <ol>
                            <li v-for="(item, index) in t.section2.items" :key="index">
                                <p class="desc">{{ item.content }}</p>
                            </li>
                        </ol>
                    </section>

                    <!-- III. 실천사항 -->
                    <section class="section">
                        <strong class="title">{{ t.section3.title }}</strong>
                        
                        <!-- 1. 선정 기준/절차 -->
                        <div class="smp_announcement">
                            <strong class="title_b">{{ t.section3.step1.title }}</strong>
                            
                            <!-- 가. 공개 관련 -->
                            <div class="sub_content_block">
                                <strong class="title_b">{{ t.section3.step1.partA.label }}</strong>
                                <ol class="row">
                                    <li v-for="(row, idx) in t.section3.step1.partA.rows" :key="idx">
                                        {{ row }}
                                    </li>
                                </ol>
                            </div>

                            <!-- 나. 구체성 -->
                            <div class="sub_content_block">
                                <strong class="title_b">{{ t.section3.step1.partB.label }}</strong>
                                <p class="desc">{{ t.section3.step1.partB.desc }}</p>
                            </div>

                            <!-- 다. 공정성 (절차 이미지 포함) -->
                            <div class="sub_content_block">
                                <strong class="title_b">{{ t.section3.step1.partC.label }}</strong>
                                <p class="desc">{{ t.section3.step1.partC.desc }}</p>
                                
                                <div class="process_box">
                                    <strong class="title_b">{{ t.section3.step1.partC.tit}}</strong>
                                    <figure class="image_wrap">
                                        <img :src="t.section3.step1.partC.image.src" :alt="t.section3.step1.partC.image.alt" style="max-width:670px">
                                    </figure>

                                    <strong class="title_b">{{ t.section3.step1.partC.tit2}}</strong>
                                    <ol class="row">
                                        <li v-for="(crit, idx) in t.section3.step1.partC.rows" :key="idx">
                                            {{ crit }}
                                        </li>
                                    </ol>
                                </div>
                                
                                <p class="desc">{{ t.section3.step1.partC.desc2 }}</p>
                            </div>

                            <!-- 라. 공평한 거래개시 기회 부여 -->
                            <div class="sub_content_block">
                                <strong class="title_b">{{ t.section3.step1.partD.label }}</strong>
                                <p class="desc">{{ t.section3.step1.partD.desc }}</p>
                            </div>

                            <!-- 마. 파트너사 등록취소 기준 및 절차의 공개성 -->
                            <div class="sub_content_block">
                                <strong class="title_b">{{ t.section3.step1.partE.label }}</strong>
                                <p class="desc">{{ t.section3.step1.partE.desc }}</p>
                            </div>

                            <!-- 바. 파트너사 등록취소 기준의 구체성 및 명확성 -->
                            <div class="sub_content_block">
                                <strong class="title_b">{{ t.section3.step1.partF.label }}</strong>
                                <p class="desc">{{ t.section3.step1.partF.desc }}</p>
                            </div>

                            <!-- 사. 등록취소 기준 -->
                            <div class="sub_content_block">
                                <strong class="title_b">{{ t.section3.step1.partG.label }}</strong>
                                <p class="desc">{{ t.section3.step1.partG.desc }}</p>
                                
                                <div class="cancel_criteria">
                                    <strong class="title_b">{{ t.section3.step1.partG.cancelLabel }}</strong>
                                    <ol class="row">
                                        <li v-for="(row, idx) in t.section3.step1.partG.cancelRows" :key="'can'+idx">
                                            {{ row }}
                                        </li>
                                    </ol>
                                    <strong class="title_b">{{ t.section3.step1.partG.unfairLabel }}</strong>
                                    <ol class="row">
                                        <li v-for="(row, idx) in t.section3.step1.partG.unfairRows" :key="'un'+idx">
                                            {{ row }}
                                        </li>
                                    </ol>
                                </div>
                                <p class="desc">{{ t.section3.step1.partG.finalDesc }}</p>
                            </div>
                        </div>

                        <p class="desc">{{ t.section3.finalNote }}</p>
                    </section>

                    <!-- 부칙 -->
                    <section class="section addendum">
                        <strong>{{ t.addendum.title }}</strong>
                        <div class="addendum_box">
                            <strong>{{ t.addendum.article }}</strong>
                            <p v-for="(line, idx) in t.addendum.lines" :key="idx" class="desc">
                                {{ line }}
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import modal from "@/assets/js/modal";
import Buttons from "@/components/Buttons.vue";

export default {
    name: "gsrsu04020301",
    components: {
        Buttons
    },
    data() {
        return {
            langData: {
                ko: {
                    MainTitle: "파트너사 선정·운영 가이드 라인",
                    intro: '2021.04.\nGS리테일\n\n 파트너사의 공정한 선정·운영을 위한 실천사항',
                    section1: {
                        title: "Ⅰ. 목적",
                        desc: '- 이 실천사항은 공정거래위원회의 "파트너사의 공정한 선정 ·운영을 위한 실천사항" 을 준용하여 GS리테일(이하 “회사”) 의 파트너사 선정 및 운영과정에 대한 투명성 과 공정성을 제고하여 공정한 하도급거래질서 확립에 이바지하하고, 하도급법 위반 행위의 사전예방을 위한 일반적인 사항을 정하는데 그 목적이 있다.'
                    },
                    section2: {
                        title: "Ⅱ. 용어의 정의",
                        items: [
                            { content: "1. “파트너사” 당사의 제조·건설·용역위탁 거래 등의 대상업체로 예정되거나 거래중인 사업자로서 하도급법에서 규정하는 파트너사 뿐만 아니라 일반적인 수탁사업자도 포함한다." },
                            { content: "2. “파트너사 풀(Pool)” 당사가 일정한 기준에 의하여 등록하여 관리·운영하는 파트너사 그룹을 의미한다." },
                            { content: "3. “파트너사 선정” 회사의 파트너사 풀에 등록하는 것을 의미한다." },
                            { content: "4. “파트너사 운영” 회사가 파트너사로 선정·등록된 업체에 대한 거래개시 기회 부여, 등록취소 등 파트너사 풀을 일정한 기준에 따라 관리하는 것을 의미한다." }
                        ]
                    },
                    section3: {
                        title: "Ⅲ. 파트너사 선정·운용 실천사항",
                        step1: {
                            title: "1. 파트너사 선정 기준, 절차",
                            partA: {
                                label: "가. 파트너사 선정기준, 절차 및 결과의 공개",
                                rows: [
                                    "① 파트너사 선정기준 및 절차에 관한 사항은 파트너사 등록유효기간 만료 30일전 또는 등록(갱신등록 포함)심사 개시 30일전에 사업장, 전자매체 등에 15일 이상 공개한다.",
                                    "② 파트너사 선정기준을 변경할 경우에는 갱신등록 대상업체에 대하여 45일전에 그 사항을 서면(전자문서 포함, 이하 같음)으로 개별 통지한다.",
                                    "③ 파트너사 선정일로부터 15일 이내에 그 결과를 서면으로 개별 통지하여야 하며, 미선정업체에 대하여는 그 사유를 명기하여 서면으로 통지한다."
                                ]
                            },
                            partB: {
                                label: "나. 선정기준의 구체성 및 명확성",
                                desc: "- 회사는 파트너사 선정기준을 구체적이고 명확하게 하여 자의적으로 해석할 우려가 없도록 한다."
                            },
                            partC: {
                                label: "다. 선정기준 및 절차의 공정성",
                                desc1: "(1) 파트너사 선정 절차는 기준은 하기와 같다.",
                                tit: "▶ 선정 절차",
                                image: {
                                    src: require("@/assets/images/dummy/pop_guide_step.png"),
                                    alt: '선정절차'
                                },
                                tit2: "▶ 선정 기준",
                                rows: [
                                    "① 신용평가기관의 신용등급이 B이상",
                                    "② 식품 제조업인 경우 HACCP인증 기업"
                                ],
                                desc2: "(2) 파트너사 등록을 위한 신청 및 접수 기간은 15일 이상으로 한다.\n(3) 회사의 귀책사유로 파트너사 선정에서 제외되었다고 판단하는 업체에 대하여는 미선정 통지를 받은 날로부터 15일 이상의 기간 동안 이의신청 기회를 부여한다.\n(4) 정당한 이유없이 기존 등록업체와 신규 등록업체 간의 선정기준에 차별을 두지 않는다."
                            },
                            partD: {
                                label: "라. 공평한 거래개시 기회 부여",
                                desc: "- 파트너사로 선정·등록된 사업자에 대해서는 정당한 이유없이 거래개시를 위한 입찰 참가기회 등을 제한하거나 차별하지 않는다."
                            },
                            partE: {
                                label: "마. 파트너사 등록취소 기준 및 절차의 공개성",
                                desc: "- 파트너사 선정기준 및 절차를 사업장, 전자매체 등에 15일 이상 공개한다."
                            },
                            partF: {
                                label: "바. 파트너사 등록취소 기준의 구체성 및 명확성",
                                desc: "- 당사는 파트너사 등록취소 기존을 구체적이고 명확하게하여 자의적으로 해석할 우려가 없도록 한다."
                            },
                            partG: {
                                label: "사. 파트너사 등록취소 기준 및 절차의 공정성",
                                desc: "(1) 파트너사 등록취소 기준은 객관적이고 적절한 사유에 근거하여 등록 취소할 수 있다.",
                                cancelLabel: "[회사와 거래 중인 파트너사의 등록취소 기준]",
                                cancelRows: [
                                    "① 당해 하도급거래와 관련하여 파트너사의 중대하고 명백한 귀책사유가 발생한 경우",
                                    "② 부도, 휴업, 폐업 등으로 정상적인 경영이 불가능한 경우",
                                    "③ 하도급법 등 관련 법규를 위반한 경우",
                                    "④ 관련 법규에 의한 면허가 취소된 경우",
                                    "⑤ 회사 평가기준에 따른 불량업체에 해당하는 경우"
                                ],
                                unfairLabel: "[회사와 거래 중인 파트너사의 부당한 등록 취소]",
                                unfairRows: [
                                    "① 원가절감계획, 납품단가인하요청 등 회사가 일방적으로 제시한 사항에 대한 비협조를 이유로 등록 취소하는 경우",
                                    "② 경쟁사업자의 파트너사로 중복등록된 것을 이유로 등록 취소하는 경우",
                                    "③ 파트너사의 귀책사유가 없음에도 불구하고 회사가 미발주 또는 미 위탁함으로써 거래실적이 없는 경우에 이를 이유로 등록 취소하는 경우",
                                    "④ 파트너사의 임직원 인사에 대한 원사업자의 지시에 불응함을 이유로 등록 취소하는 경우"
                                ],
                                finalDesc: "(2) 파트너사 등록을 취소할 경우에는 서면으로 그 사유를 기재하여 통지하여야 하고, 해당 사업자가 통지를 받은 날로부터 15일 이상의 기간 내에 이의를 제기할 수 있으며, 당사의 귀책사유로 등록이 취소된 경우에는 즉시 재등록 조치를 취한다."
                            }
                        },
                        finalNote: "아. 회사는 임직원이 고의 또는 중대한 과실로 실천사항을 준수하지 않는 경우에는 그에 상응하는 제재조치를 취한다."
                    },
                    addendum: {
                        title: "[부칙]",
                        article: "제 1조[시행일]",
                        lines: ["- 이 지침은 2020년 4월 1일부터 시행한다.", "- 이 지침은 2021년 4월 1일부터 시행한다."]
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
.pop_space .intro_desc {color:#444; font-size:18px; line-height:26px;white-space:pre-line;background:url('@/assets/images/dummy/pop_guide_tit.png') no-repeat right top;}
.pop_guide_wrap {font-size:15px; line-height:25px;}
.pop_guide_wrap .title {display:block;font-size:18px;font-weight:700;padding-bottom:20px}
.pop_guide_wrap .title_b {display:block;font-size:15px;font-weight:normal;margin-bottom:20px;}
.pop_guide_wrap .section {padding:20px 0;}
.pop_guide_wrap .section:last-child {border-bottom:0}
.pop_guide_wrap .section .desc {font-size:15px;line-height:25px;white-space:pre-line;}
.pop_guide_wrap .section .smp_announcement>dl {overflow:hidden;margin-top:10px}
.pop_guide_wrap .section .smp_announcement>dl dt {float:left;background:#0072bc;border-radius:15px;color:#fff;text-align:center;width:42px;font-size:13px;line-height:19px}
.pop_guide_wrap .section .smp_announcement>dl dd {padding-left:50px;margin-bottom:7px;padding-bottom:7px;line-height:19px;font-size:15px}
.pop_guide_wrap .image_wrap {margin:30px 0; text-align: center;}
.pop_guide_wrap .image_wrap img {width:100%}
.pop_guide_wrap .row {padding-left:20px;color: #666666}
.pop_guide_wrap .sub_content_block {margin-bottom:25px;}
.pop_guide_wrap .sub_content_block .title_b {margin-bottom:0;}
.pop_guide_wrap .cancel_criteria {margin-bottom:25px;}
.pop_guide_wrap .section.addendum strong {font-weight:normal}

/* 모달 레이아웃 */
.modal_cont {background-color: #fff;}
.modal_header {display:flex; justify-content:space-between; align-items:center; padding-bottom:40px; font-size:40px; font-weight:700; border-bottom:0;}
.modal_content {max-height:700px; overflow-y:auto; padding-right:10px;}
.btn-wrap {display:flex; justify-content:flex-end;}

/* 반응형 */
@media screen and (max-width: 767px) {
    .modal_header {font-size:18px; padding-bottom:24px;}
    .pop_space .intro_desc {padding-top:80px; background-position:center top;}
}
</style>