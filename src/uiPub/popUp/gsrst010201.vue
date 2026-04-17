<template>
    <div class="smn_modal">
        <!-- 타이틀 -->
        <div class="smn_title_row">
            <h2 class="smn_title">사업설명회 신청</h2>
            <button type="button" class="smn_close" aria-label="닫기" @click="closeModal"></button>
        </div>

        <!-- 인트로 -->
        <div class="smn_intro">
            <strong>안녕하세요!<br>GS THE FRESH 1:1 상담 컨설턴트 윤경진 입니다.</strong>
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
            </div>
            <div class="consent_notice">
                <p class="consent_notice_text">고객님께서는 본 동의에 거부하실 권리가 있으나, 동의하지 않으실 경우<br>사업설명회 신청 글 작성이 불가능합니다.</p>
                <label class="consent_radio_label">
                    <input type="radio" class="consent_radio" name="consent_agree" value="agree" v-model="consentAgree" />
                    <span class="consent_radio_text">동의합니다.</span>
                </label>
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
                        <input type="text" class="smn_input" v-model="seminarForm.name" placeholder="" />
                    </div>
                </div>
                <!-- 연락처 -->
                <div class="form_row">
                    <div class="form_label">연락처<span class="form_required">*</span></div>
                    <div class="form_field form_field_phone">
                        <select class="smn_select" v-model="seminarForm.phone1">
                            <option v-for="opt in phoneOptions" :key="opt" :value="opt">{{ opt }}</option>
                        </select>
                        <span class="form_sep">-</span>
                        <input type="text" class="smn_input" maxlength="4" v-model="seminarForm.phone2" placeholder="" />
                        <span class="form_sep">-</span>
                        <input type="text" class="smn_input" maxlength="4" v-model="seminarForm.phone3" placeholder="" />
                    </div>
                </div>
                <!-- 이메일 -->
                <div class="form_row">
                    <div class="form_label">이메일<span class="form_required">*</span></div>
                    <div class="form_field form_field_email">
                        <input type="text" class="smn_input" v-model="seminarForm.emailId" placeholder="" />
                        <span class="form_sep">@</span>
                        <input v-if="seminarForm.emailDomain === '직접입력'" type="text" class="smn_input" v-model="seminarForm.emailDomainCustom" placeholder="직접입력" />
                        <input v-else type="text" class="smn_input" :value="seminarForm.emailDomain" readonly placeholder="" />
                        <select class="smn_select" v-model="seminarForm.emailDomain">
                            <option value="">직접입력</option>
                            <option v-for="opt in emailDomainOptions" :key="opt" :value="opt">{{ opt }}</option>
                        </select>
                    </div>
                </div>
                <!-- 개설희망지역 -->
                <div class="form_row">
                    <div class="form_label">개설희망지역<span class="form_required">*</span></div>
                    <div class="form_field form_field_region">
                        <select class="smn_select" v-model="seminarForm.regionSido">
                            <option value="" disabled>지역선택</option>
                            <option v-for="opt in regionSidoOptions" :key="opt" :value="opt">{{ opt }}</option>
                        </select>
                        <select class="smn_select" v-model="seminarForm.regionSigungu">
                            <option value="" disabled>구/군 선택</option>
                        </select>
                    </div>
                </div>
                <!-- 재직중인 과거직장 -->
                <div class="form_row">
                    <div class="form_label">재직중인 과거직장</div>
                    <div class="form_field">
                        <input type="text" class="smn_input smn_input_wide" v-model="seminarForm.prevJob" placeholder="" />
                    </div>
                </div>
                <!-- 사업설명회 신청 지역 -->
                <div class="form_row form_row_radio">
                    <div class="form_label">사업 설명회<br>신청 지역<span class="form_required">*</span></div>
                    <div class="form_field form_field_radio">
                        <label class="smn_radio_label" v-for="opt in seminarRegionOptions" :key="opt.value">
                            <input type="radio" class="smn_radio" name="seminar_region" :value="opt.value" v-model="seminarForm.seminarRegion" />
                            <span>{{ opt.label }}</span>
                        </label>
                    </div>
                </div>
                <!-- 내용 -->
                <div class="form_row form_row_textarea">
                    <div class="form_label">내용<span class="form_required">*</span></div>
                    <div class="form_field">
                        <textarea class="smn_textarea" v-model="seminarForm.content" placeholder="개설 희망 타입을 적어주세요. (타입 GSF1, GSF2, GSF3)"></textarea>
                    </div>
                </div>
            </div>
        </div>

        <!-- 버튼 -->
        <div class="smn_bottom">
            <button type="button" class="btn_big primary">신청</button>
            <button type="button" class="btn_big gray" @click="closeModal">취소</button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import modal from "@/assets/js/modal";

const consentAgree = ref("");

const phoneOptions = ["010", "011", "016", "017", "018", "019"];
const emailDomainOptions = ["naver.com", "gmail.com", "daum.net", "kakao.com", "hanmail.net"];
const regionSidoOptions = ["서울", "경기", "인천", "충청", "강원", "제주", "전라", "경상"];
const seminarRegionOptions = [
    { value: "수도", label: "수도 (서울, 경기, 인천)" },
    { value: "중부", label: "중부 (충청, 강원, 제주)" },
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

function closeModal(event) {
    modal.close(event.currentTarget);
}
</script>

<style scoped>
/* 모달 래퍼 */
.smn_modal {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

/* 타이틀 */
.smn_title_row {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
.smn_intro > strong {
    display: block;
    color: #161616;
    font-size: 3.2rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    line-height: 1.3;
}
.smn_intro > p {
    margin-top: 12px;
    color: #161616;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: -0.01em;
    line-height: 1.35;
}

/* 개인정보 동의 */
.consent_box {
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
    padding-left: 14px;
    color: #67676f;
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: -0.01em;
    line-height: 1.5;
    position: relative;
}
.consent_info_list > li::before {
    width: 4px;
    height: 4px;
    background-color: #67676f;
    border-radius: 50%;
    content: "";
    position: absolute;
    top: 0.7em;
    left: 2px;
}
.consent_notice {
    padding: 24px 32px;
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
}
.consent_radio {
    width: 24px;
    height: 24px;
    appearance: none;
    border: 2px solid #d7d7df;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    flex-shrink: 0;
    transition: border-color 0.2s, background-color 0.2s;
    position: relative;
}
.consent_radio:checked { border-color: #107af2; background-color: #107af2; }
.consent_radio:checked::after {
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 50%;
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
    white-space: nowrap;
}

/* 신청 폼 */
.apply_form { margin-top: 8px; }
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
.form_body { border-top: 1px solid #e5e5e9; }
.form_row {
    min-height: 52px;
    padding: 12px 0;
    border-bottom: 1px solid #e5e5e9;
    display: grid;
    grid-template-columns: 142px 1fr;
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
    padding: 4px 0;
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
}
.form_sep {
    color: #67676f;
    font-size: 1.6rem;
    flex-shrink: 0;
}

/* 입력 요소 */
.smn_input {
    height: 52px;
    padding: 0 16px;
    background-color: #fff;
    border: 1px solid #c4c4d0;
    border-radius: 12px;
    color: #161616;
    font-size: 1.6rem;
    letter-spacing: -0.01em;
    min-width: 0;
}
.smn_input_wide { flex: 1; }
.smn_select {
    height: 52px;
    padding: 0 36px 0 16px;
    background-color: #fff;
    border: 1px solid #c4c4d0;
    border-radius: 12px;
    color: #161616;
    font-size: 1.6rem;
    letter-spacing: -0.01em;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M4 6l4 4 4-4' stroke='%2390909a' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    cursor: pointer;
    min-width: 0;
}

/* 연락처 */
.form_field_phone .smn_select { width: 100px; }
.form_field_phone .smn_input  { width: 120px; }

/* 이메일 */
.form_field_email .smn_input  { flex: 1; min-width: 120px; }
.form_field_email .smn_select { width: 140px; }

/* 개설희망지역 */
.form_field_region .smn_select { flex: 1; min-width: 120px; }

/* 사업설명회 신청 지역 */
.form_field_radio { gap: 24px; padding: 8px 0; }
.smn_radio_label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    white-space: nowrap;
}
.smn_radio {
    width: 24px;
    height: 24px;
    appearance: none;
    border: 2px solid #c4c4d0;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    flex-shrink: 0;
    transition: border-color 0.2s;
    position: relative;
}
.smn_radio:checked { border-color: #107af2; }
.smn_radio:checked::after {
    width: 12px;
    height: 12px;
    background-color: #717171;
    border-radius: 50%;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.smn_radio_label > span {
    color: #161616;
    font-size: 1.8rem;
    line-height: 1.4;
}

/* textarea */
.smn_textarea {
    width: 100%;
    height: 160px;
    padding: 14px 16px;
    background-color: #fff;
    border: 1px solid #c4c4d0;
    border-radius: 12px;
    color: #161616;
    font-size: 1.6rem;
    letter-spacing: -0.01em;
    line-height: 1.5;
    resize: none;
}

/* 버튼 영역 */
.smn_bottom {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
}

/* 모바일 */
@media (max-width: 768px) {
    .smn_title { font-size: 2.8rem; }
    .smn_intro > strong { font-size: 2.4rem; }
    .smn_intro > p { font-size: 1.6rem; }
    .form_row { grid-template-columns: 1fr; }
    .form_label { padding-bottom: 8px; }
    .form_field_phone .smn_select { width: 88px; }
    .form_field_phone .smn_input  { flex: 1; width: auto; }
    .form_field_radio { flex-direction: column; gap: 12px; }
}
</style>
