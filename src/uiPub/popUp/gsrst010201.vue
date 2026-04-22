<template>
    <div class="smn_modal">
        <!-- 타이틀 -->
        <div class="smn_title_row">
            <h2 class="smn_title">사업설명회 신청</h2>
            <button type="button" class="smn_close" aria-label="닫기" @click="closeModal"></button>
        </div>

        <div class="modal_content smn_body">
            <!-- 인트로 -->
            <div class="smn_intro">
                <p>사업설명회 신청을 하시려면 아래 내용을 입력해 주시기 바랍니다.</p>
            </div>

            <!-- 개인정보 동의 -->
            <div class="consent_box">
                <div class="consent_info">
                    <h3 class="consent_info_title">개인정보 수집·이용 동의</h3>
                    <ul class="consent_info_list">
                        <li>입력하신 정보는 사업설명회에 의한 확인을 위해서만 사용합니다. 수집항목, 이용 및 목적, 보유 및 이용기간은 다음과 같습니다.<br>기타 개인정보 취급사항은 홈페이지 하단의 "개인정보 취급방침"을 참고하시기 바랍니다.</li>
                        <li>수집하는 개인정보 항목 : 이름, 연락처, E-mail, 지역</li>
                        <li>수집이용 및 목적: 수집된 개인정보를 통한 사업 및 문의사항 확인 및 답변을 위하여 활용</li>
                        <li>보유 및 이용기간: 개인정보 수집 및 이용 목적이 달성된 후에는 예외없이 정보를 파기 합니다.</li>
                    </ul>
                    <div class="consent_notice">
                        <p class="consent_notice_text">고객님께서는 본 동의에 거부하실 권리가 있으나, 동의하지 않으실 경우<br class="p_br">사업설명회 신청 글 작성이 불가능합니다.</p>
                        <label class="consent_radio_label">
                            <input type="radio" class="consent_radio" name="consent_agree" value="agree" v-model="consentAgree" @click="consentAgree = consentAgree === 'agree' ? '' : 'agree'" />
                            <span class="consent_radio_text">동의합니다.</span>
                        </label>
                    </div>
                </div>
            </div>

            <!-- 신청 폼 -->
            <div class="apply_form">
                <div class="form_head">
                    <h3 class="form_head_title">신청하기</h3>
                    <span class="form_required_note">* 필수 입력사항</span>
                </div>
                <div class="form_body">
                    <!-- 이름 -->
                    <div class="form_row">
                        <div class="form_label">이름<span class="form_required">*</span></div>
                        <div class="form_field">
                            <Inputs type="text" v-model="seminarForm.name" />
                        </div>
                    </div>
                    <!-- 연락처 -->
                    <div class="form_row">
                        <div class="form_label">연락처<span class="form_required">*</span></div>
                        <div class="form_field form_field_phone">
                            <SelectBox :options="phoneOptions" v-model="seminarForm.phone1" />
                            <span class="form_sep">-</span>
                            <Inputs type="text" v-model="seminarForm.phone2" />
                            <span class="form_sep">-</span>
                            <Inputs type="text" v-model="seminarForm.phone3" />
                        </div>
                    </div>
                    <!-- 이메일 -->
                    <div class="form_row">
                        <div class="form_label">이메일<span class="form_required">*</span></div>
                        <div class="form_field form_field_email">
                            <Inputs type="text" v-model="seminarForm.emailId" />
                            <span class="form_sep">@</span>
                            <Inputs v-if="seminarForm.emailDomain === ''" type="text" v-model="seminarForm.emailDomainCustom" placeholder="직접입력" />
                            <Inputs v-else type="text" :model-value="seminarForm.emailDomain" :is-readonly="true" />
                            <SelectBox :options="emailDomainOptions" v-model="seminarForm.emailDomain" initMsg="직접입력" />
                        </div>
                    </div>
                    <!-- 개설희망지역 -->
                    <div class="form_row">
                        <div class="form_label">개설희망지역<span class="form_required">*</span></div>
                        <div class="form_field form_field_region">
                            <SelectBox :options="regionSidoOptions" v-model="seminarForm.regionSido" initMsg="지역선택" />
                            <SelectBox :options="[]" v-model="seminarForm.regionSigungu" initMsg="구/군 선택" />
                        </div>
                    </div>
                    <!-- 재직중인 과거직장 -->
                    <div class="form_row">
                        <div class="form_label">재직중인 과거직장</div>
                        <div class="form_field">
                            <Inputs type="text" v-model="seminarForm.prevJob" />
                        </div>
                    </div>
                    <!-- 사업설명회 신청 지역 -->
                    <div class="form_row form_row_radio">
                        <div class="form_label">사업 설명회 신청<br class="p_br">지역<span class="form_required">*</span></div>
                        <div class="form_field form_field_radio">
                            <Inputs
                                v-for="opt in seminarRegionOptions"
                                :key="opt.value"
                                type="radio"
                                name="seminar_region"
                                :value="opt.value"
                                v-model="seminarForm.seminarRegion"
                                :text="opt.label"
                            />
                        </div>
                    </div>
                    <!-- 내용 -->
                    <div class="form_row form_row_textarea">
                        <div class="form_label">내용<span class="form_required">*</span></div>
                        <div class="form_field">
                            <Textarea
                                v-model="seminarForm.content"
                                :placeholder="contentPlaceholder"
                                :rows="6"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <!-- 버튼 -->
        </div>
        
        <div class="smn_bottom">
            <Buttons btn-class="btn_big fill primary">신청</Buttons>
            <Buttons btn-class="btn_big gary" @click="closeModal">취소</Buttons>
        </div>

    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from "vue";
import modal from "@/assets/js/modal";
import Inputs from "@/components/Inputs.vue";
import SelectBox from "@/components/SelectBox.vue";
import Textarea from "@/components/Textarea.vue";
import Buttons from "@/components/Buttons.vue";

const consentAgree = ref("");

const phoneOptions = [
    { value: "010", label: "010" },
    { value: "011", label: "011" },
    { value: "016", label: "016" },
    { value: "017", label: "017" },
    { value: "018", label: "018" },
    { value: "019", label: "019" },
];
const emailDomainOptions = [
    { value: "naver.com", label: "naver.com" },
    { value: "gmail.com", label: "gmail.com" },
    { value: "daum.net",  label: "daum.net" },
    { value: "kakao.com", label: "kakao.com" },
    { value: "hanmail.net", label: "hanmail.net" },
];
const regionSidoOptions = [
    { value: "서울", label: "서울" },
    { value: "경기", label: "경기" },
    { value: "인천", label: "인천" },
    { value: "충청", label: "충청" },
    { value: "강원", label: "강원" },
    { value: "제주", label: "제주" },
    { value: "전라", label: "전라" },
    { value: "경상", label: "경상" },
];
const seminarRegionOptions = [
    { value: "수도",     label: "수도 (서울, 경기, 인천)" },
    { value: "중부",     label: "중부 (충청, 강원, 제주)" },
    { value: "영남호남", label: "영남/호남 (전라, 경상)" },
];



const seminarForm = reactive({
    name: "",
    phone1: "010",
    phone2: "",
    phone3: "",
    emailId: "",
    emailDomain: "",
    emailDomainCustom: "",
    regionSido: "",
    regionSigungu: "",
    prevJob: "",
    seminarRegion: "",
    content: "",
});

const isMobile = ref(false);
const mq = window.matchMedia("(max-width: 768px)");
function onMqChange(e) { isMobile.value = e.matches; }
onMounted(() => { isMobile.value = mq.matches; mq.addEventListener("change", onMqChange); });
onUnmounted(() => { mq.removeEventListener("change", onMqChange); });

const contentPlaceholder = computed(() =>
    isMobile.value
        ? "개설 희망 타입을 적어주세요.\n(타입 GSF1, GSF2, GSF3)"
        : "개설 희망 타입을 적어주세요. (타입 GSF1, GSF2, GSF3)"
);

function closeModal(event) {
    modal.close(event.currentTarget);
}
</script>

<style scoped>
/* 모달 래퍼 */
.smn_modal { --color-brand-primary: #15b874; }
.smn_modal :deep([class*="btn_"][class*="primary"]) { color: #fff; background-color: var(--color-brand-primary); }
.modal_content{border-bottom:1px solid #E5E5E9;}
/* 타이틀 */
.smn_title_row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    min-height: 92px;
    margin: 0;
    padding: 0;
}
.smn_title {
    color: #161616;
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    line-height: 1.3;
}


.smn_close {
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    flex-shrink: 0;
    position: relative;
}


.smn_close::before,
.smn_close::after {
    width: 22px;
    border-top: 2px solid #161616;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
}
.smn_close::before { transform: translate(-50%, -50%) rotate(45deg); }
.smn_close::after  { transform: translate(-50%, -50%) rotate(-45deg); }

/* 인트로 */
.smn_intro > p {
    color: #161616;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: -0.01em;
    line-height: 1.35;
}

/* 개인정보 동의 */
.consent_box {
    margin-top:40px;
    border-radius: 12px;
    background-color: #f8f8f8;
    overflow: hidden;
}
.consent_info { padding: 32px; }
.consent_info_title {
    color: #161616;
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    line-height: 1.35;
}
.consent_info_list {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.consent_info_list > li {
    padding-left: 10px;
    color: #67676f;
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: -0.01em;
    line-height: 1.5;
    position: relative;
}
/* 첫 줄 기준 세로 중앙 (여러 줄이어도 첫 줄에만 맞춤) */
.consent_info_list > li::before {
    content: "";
    width:4px;
    height:1px;
    background-color: #67676F;
    position: absolute;
    left: 0;
    top: 0.5lh;
}
.consent_notice {
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid #d7d7df;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
}
.consent_notice_text {
    color: #161616; 
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.24;
}
.consent_radio_label {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    cursor: pointer;
    white-space: nowrap;
}
.consent_radio {
    width: 24px;
    height: 24px;
    padding: 0;
    appearance: none;
    border: 0;
    border-radius: 8px;
    background-color: #fff;
    cursor: pointer;
    flex-shrink: 0;
    position: relative;
    transition: border-color 0.2s, background-color 0.2s;
}
.consent_radio:checked {
    border-color: #107af2;
    background-color: #107af2;
}
.consent_radio:checked::after {
    width: 13px;
    height: 8px;
    background-color: #fff;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.consent_radio_text {
    color: #161616;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.4;
}
/* 신청 폼 */
.apply_form { margin-top: 40px; }
.form_head {
    height: 48px;
    padding-bottom: 16px;
    border-bottom: 1px solid #242428;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.form_head_title {
    color: #161616;
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    line-height: 1.35;
}
.form_required_note {
    color: #fb6432;
    font-size: 1.4rem;
    line-height: 1.4;
}
.form_body { padding:12px 0;border-top: 1px solid #e5e5e9; }
.form_row {
    min-height: 52px;
    padding: 12px 0;
    display: grid;
    grid-template-columns: 134px 1fr;
    align-items: center;
    gap: 0 8px;
}
.form_row_radio,
.form_row_textarea { align-items: start; }
.form_label {
    color: #161616;
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: -0.01em;
    line-height: 1.5;
}
.form_required {
    margin-left: 2px;
    color: #fb6432;
}
.form_field {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    min-width: 0;
}
/* 단일 input이 꽉 채우도록 */
.form_field > :deep(.input_wrap) { flex: 1; min-width: 0; }

.form_sep {
    color: #67676f;
    font-size: 1.6rem;
    flex-shrink: 0;
}

/* 연락처 */
.form_field_phone :deep(.select) { width: 134px; flex-shrink: 0;}
.form_field_phone :deep(.select select) { width: 100%;font-size:1.6rem  }
.form_field_phone > :deep(.input_wrap) { max-width:134px;flex: 1; min-width: 80px; }

/* 이메일 */
/* 이메일 (순서: 로컬 205px / 도메인 180px / 셀렉트 180px) */
.form_field_email { align-items: center; }
.form_field_email > :deep(.input_wrap:nth-child(1)) { flex: 0 0 205px; width: 205px; min-width: 0; }
.form_field_email > :deep(.input_wrap:nth-child(3)) { flex: 0 0 180px; width: 180px; min-width: 0; }
.form_field_email :deep(.select) { flex: 0 0 180px; width: 180px; min-width: 0; }
.form_field_email :deep(.select select) { width: 100%; font-size: 1.6rem; }

/* 개설희망지역 */
.form_field_region { flex-wrap: nowrap; }
.form_field_region :deep(.select) { flex: 1; min-width: 0; }
.form_field_region :deep(.select select) { width: 100%; font-size:1.6rem; }

/* 사업설명회 신청 지역 라디오 */
.form_field_radio {padding:13px 0; gap:8px; }
.form_field_radio :deep(.input_wrap) { width: auto; flex: 0 0 auto; }
.form_field_radio :deep(.check) { gap: 8px; white-space: nowrap; cursor: pointer; }
.form_field_radio :deep(.label) { font-size: 1.8rem; color: #161616; }

/* textarea */
.form_row_textarea .form_field { display: block; }
.form_field > :deep(.textarea_wrap) { width: 100%; }

/* 버튼 영역 */
.smn_bottom {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
}


.smn_bottom {
    margin-top:40px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.smn_bottom > :deep(.btn_big) {
  width: 134px;
  text-align: center;
  font-size: 1.6rem;
  line-height: 1.5;
 letter-spacing: -0.01em;

}

/* 모바일 */
@media (max-width: 768px) {
    .modal_wrap .modal_container{padding-bottom:32px;}
    .smn_title_row { min-height: 60px; margin:0 -20px; padding:17px 20px; border-bottom:1px solid #C4C4D0;}
    .smn_title { font-size: 1.8rem; line-height: 1.4; }
    .smn_close { width: 24px;height: 24px; }
    .smn_intro {display: none;;}


    /* 개인정보 동의 */
    .consent_info { padding:30px 20px; }
    .consent_info_list > li{font-size:1.4rem;line-height:1.4;letter-spacing:-0.01em;}
    .consent_info_title{font-weight: 700;font-size: 1.8rem;line-height: 1.5;}
    .consent_notice { flex-direction: column; align-items: flex-start; gap: 16px; }
    .consent_notice_text{font-size: 1.4rem; line-height: 1.4;}

    /* 폼 레이아웃: 레이블 + 필드 세로 배치 */
    .form_head { height: auto; padding-bottom: 12px; }
    .form_head_title { font-size: 2rem; }
    .form_body{padding:30px 0;}
    .form_row {padding:20px 0; grid-template-columns: 1fr; gap: 0; }
    .form_row:first-child {padding-top:0;}
    .form_row:last-child {padding-bottom:0;}

    /* 연락처: select 너비 축소, input max-width 해제 */
    .form_field_phone > :deep(.input_wrap) { max-width: none; flex: 1; }

    /* 이메일: 고정 너비 해제 → flex로 유연하게, SelectBox 다음 줄 */
    .form_field_email > :deep(.input_wrap:nth-child(1)) { flex: 1; min-width: 80px; }
    .form_field_email > :deep(.input_wrap:nth-child(3)) { flex: 1; min-width: 60px; }
    .form_field_email :deep(.select) { flex: 1 0 100%; width: 100%; }
   
    /* 개설희망지역: 한 줄씩 */
    .form_field_region { flex-wrap: wrap; }
    .form_field_region :deep(.select) { flex: 1 0 100%; width: 100%; }

    .form_label{margin-bottom: 12px;}

    /* 라디오 */
    .consent_radio{width:20px; height: 20px;;}
    .consent_radio_text{font-size: 1.6rem;}
    .form_field_radio { flex-direction: column; gap: 20px; align-items: flex-start; }
    .form_field_radio label{font-size: 1.6rem;letter-spacing: -0.01em;line-height: 1.5;}
    .smn_bottom{justify-content: center;}
    .smn_bottom > :deep(.btn_big) {width:100%;flex:1;}
}
</style>
