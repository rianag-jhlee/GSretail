<template>
    <div class="modal_cont gsrst010301">
        <!-- 타이틀 -->
        <div class="modal_header">
            사업설명회 신청
            <a href="#none" @click="closeModal" class="btn_close">닫기</a>
        </div>

        <div class="modal_content">
            <!-- 인트로 -->
            <div class="smn_intro">
                <strong>안녕하세요!<br>GS THE FRESH 1:1 상담<br class="m_br">컨설턴트 윤경진 입니다.</strong>
                <p>아래의 상담 신청서를 작성하시면 귀하만의 창업 상담을 받아 보실 수있습니다. <br />
                    담당자와 통화가 원활하지 않는 경우 상담신청 부탁 드립니다. 담당자가 확인 후 연락 드리겠습니다.</p>
            </div>

            <!-- 컨설턴트와 1:1 상담 -->
            <div class="gray_box consult_box">
                <div class="consent_body">
                    <div class="flex_wrap">
                        <div class="consent_img_wrap">
                            <!-- <img src="" alt=""> -->
                        </div>
                        <div class="consent_info">
                            <h3 class="consent_info_title">컨설턴트와 1:1 상담</h3>
                            <p>가맹/창업 컨설턴트가 1:1로 상담해 드립니다.<br />
                                가맹/창업 컨설턴트에게 문의하시면 자세한 상담을 받으실 수 있습니다.</p>
                            <button type="button">윤경진 컨설턴트</button>
                        </div>
                    </div>
                    <div class="consent_notice">
                        <ul class="list_caution">
                            <li>
                                <p>※ 입력하신 정보는 입지상담을 위해서만 사용합니다. 수집항목, 이용 및 목적, 보유 및 이용기간은 다음과 같으며, 기타 개인정보 취급사항은 홈페이지 하단의 "개인정보 처리방침"을 참고하시기 바랍니다.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- 개인정보 동의 -->
            <div class="gray_box consent_box">
                <div class="consent_info">
                    <h3 class="consent_info_title">개인정보 수집·이용 동의</h3>
                    <ul class="consent_info_list">
                        <li>입력하신 정보는 입지상담을 위해서만 사용합니다. 수집항목, 이용 및 목적, 보유 및 이용기간은 다음과 같으며,기타 개인정보 취급사항은 홈페이지 하단의 "개인정보 처리방침"을 참고하시기 바랍니다.</li>
                        <li>수집하는 개인정보 항목: 이름, 이메일, 휴대폰번호</li>
                        <li>수집이용 및 목적: 수집한 개인정보를 본인 식별 및 문의사항 확인 및 답변을 위해 활용</li>
                        <li>보유 및 이용기간: 접수 후 1년</li>
                    </ul>
                    <div class="consent_notice">
                        <p class="consent_notice_text">고객님께서는 본 동의에 거부하실 권리가 있으나, 동의하지 않으실 경우<br class="p_br">사업설명회 신청 글 작성이 불가능합니다.</p>
                        <Inputs type="checkbox" text="동의합니다." v-model="consentAgree" />
                    </div>
                </div>
            </div>

            <div class="middle_bts_wrap">
                <button :class="{ active: hasStore === true }" @click="hasStore = true">내가 소유한 점포가 있다.</button>
                <button :class="{ active: hasStore === false }" @click="hasStore = false">내가 소유한 점포가 없다.</button>
            </div>

            <!-- 고객정보 폼 -->
            <div class="apply_form">
                <div class="form_head">
                    <h3 class="form_head_title">고객정보</h3>
                    <span class="form_required_note">* 필수 입력사항</span>
                </div>
                <div class="form_body">
                    <!-- 이름 -->
                    <div class="form_row">
                        <div class="form_label">이름<span class="form_required">*</span></div>
                        <div class="form_field">
                            <Inputs type="text" />
                        </div>
                    </div>
                    <!-- 이메일 -->
                    <div class="form_row">
                        <div class="form_label">이메일</div>
                        <div class="form_field form_field_email">
                            <Inputs type="text" v-model="consultForm.emailId" />
                            <span class="form_sep">@</span>
                            <Inputs v-if="consultForm.emailDomain === ''" type="text" v-model="consultForm.emailDomainCustom" placeholder="직접입력" />
                            <Inputs v-else type="text" :model-value="consultForm.emailDomain" :is-readonly="true" />
                            <SelectBox :options="emailDomainOptions" v-model="consultForm.emailDomain" />
                        </div>
                    </div>
                    <!-- 연락처 -->
                    <div class="form_row">
                        <div class="form_label">연락처<span class="form_required">*</span></div>
                        <div class="form_field form_field_phone">
                            <SelectBox :options="phoneOptions" v-model="consultForm.phone1" />
                            <span class="form_sep">-</span>
                            <Inputs type="text" v-model="consultForm.phone2" />
                            <span class="form_sep">-</span>
                            <Inputs type="text" v-model="consultForm.phone3" />
                        </div>
                    </div>

                    <!-- 개설희망지역 -->
                    <div class="form_row">
                        <div class="form_label">소유점포 주소 <br class="p_br"/>(과거, 현재 점포소유 <br class="p_br">신청자에 한함)<span class="form_required">*</span></div>
                        <div class="form_field form_field_region">
                            <SelectBox :options="sidoOptions" v-model="consultForm.regionSido" initMsg="시/도 선택" @update:modelValue="consultForm.regionSigungu = ''" />
                            <SelectBox :options="sigunguOptions" v-model="consultForm.regionSigungu" initMsg="구/군 선택" :disabled="!consultForm.regionSido" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- 상담내용 폼 (점포 소유 시에만 표시) -->
            <div class="apply_form" v-show="hasStore === true">
                <div class="form_head">
                    <h3 class="form_head_title">상담내용</h3>
                    <span class="form_required_note">* 필수 입력사항</span>
                </div>
                <div class="form_body">
                    <!-- 소유점포 면적 -->
                    <div class="form_row form_row_area">
                        <div class="form_label">소유점포 면적</div>
                        <div class="form_field form_field_area">
                            <div class="form_sub_group">
                                <span class="form_sub_label">계약면적</span>
                                <div class="form_sub_input_wrap">
                                    <Inputs type="text" v-model="consultForm.areaContract" />
                                    <span class="form_sub_unit">m²</span>
                                </div>
                            </div>
                            <div class="form_sub_group">
                                <span class="form_sub_label">전용면적</span>
                                <div class="form_sub_input_wrap">
                                    <Inputs type="text" v-model="consultForm.areaExclusive" />
                                    <span class="form_sub_unit">m²</span>
                                </div>
                            </div>
                            <span class="area_note">* m² = (기준)평 x 3.3</span>
                        </div>
                    </div>
                    <!-- 수퍼 운영자 일 경우 -->
                    <div class="form_row check_row">
                        <div class="form_label">수퍼 운영자 일 경우</div>
                        <div class="form_field form_field_check">
                            <div class="form_sub_group">
                                <span class="form_sub_label">취급 품목 체크</span>
                                <div class="check_list">
                                    <Inputs v-for="opt in superItemOptions" :key="opt.value"
                                            type="checkbox" :value="opt.value" v-model="consultForm.superItems" :text="opt.label" />
                                </div>
                            </div>
                            <div class="check_etc">
                                <span class="form_sub_label">기타</span>
                                <Inputs type="text" v-model="consultForm.superItemEtc" />
                            </div>
                        </div>
                    </div>
                    <!-- 계약조건 -->
                    <div class="form_row contract_row">
                        <div class="form_label">계약조건</div>
                        <div class="form_field form_field_contract">
                            <div class="form_sub_group">
                                <span class="form_sub_label">계약 기간</span>
                                <div class="form_sub_inputs">
                                    <Inputs type="text" v-model="consultForm.contractStart"/>
                                    <span class="form_sep">~</span>
                                    <Inputs type="text" v-model="consultForm.contractEnd" />
                                </div>
                            </div>
                            <div class="form_sub_group">
                                <span class="form_sub_label">보증금/월임대료</span>
                                <div class="contract_rent">
                                    <div class="form_sub_input_wrap">
                                        <Inputs type="text" v-model="consultForm.deposit" />
                                        <span class="form_sub_unit">만원</span>
                                    </div>
                                    <div class="form_sub_input_wrap">
                                        <Inputs type="text" v-model="consultForm.monthlyRent" />
                                        <span class="form_sub_unit">만원</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 버튼 -->
        </div>
        
        <div class="modal_bottom">
            <Buttons btn-class="btn_big primary">상담신청</Buttons>
            <Buttons btn-class="btn_big gary" @click="closeModal">다시작성</Buttons>
        </div>

    </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import modal from "@/assets/js/modal";
import Inputs from "@/components/Inputs.vue";
import SelectBox from "@/components/SelectBox.vue";
import Buttons from "@/components/Buttons.vue";

const consentAgree = ref(false);
const hasStore = ref(null); // null: 미선택 / true: 있다 / false: 없다

const superItemOptions = [
    { value: "농산", label: "농산" },
    { value: "축산", label: "축산" },
    { value: "수산", label: "수산" },
    { value: "공산품", label: "공산품" },
    { value: "조리", label: "조리" },
];

const sidoOptions = [
    { value: "서울", label: "서울특별시" },
    { value: "부산", label: "부산광역시" },
    { value: "대구", label: "대구광역시" },
    { value: "인천", label: "인천광역시" },
    { value: "광주", label: "광주광역시" },
    { value: "대전", label: "대전광역시" },
    { value: "울산", label: "울산광역시" },
    { value: "세종", label: "세종특별자치시" },
    { value: "경기", label: "경기도" },
    { value: "강원", label: "강원특별자치도" },
    { value: "충북", label: "충청북도" },
    { value: "충남", label: "충청남도" },
    { value: "전북", label: "전북특별자치도" },
    { value: "전남", label: "전라남도" },
    { value: "경북", label: "경상북도" },
    { value: "경남", label: "경상남도" },
    { value: "제주", label: "제주특별자치도" },
];

const sigunguMap = {
    서울: ["종로구","중구","용산구","성동구","광진구","동대문구","중랑구","성북구","강북구","도봉구","노원구","은평구","서대문구","마포구","양천구","강서구","구로구","금천구","영등포구","동작구","관악구","서초구","강남구","송파구","강동구"],
    부산: ["중구","서구","동구","영도구","부산진구","동래구","남구","북구","해운대구","사하구","금정구","강서구","연제구","수영구","사상구","기장군"],
    대구: ["중구","동구","서구","남구","북구","수성구","달서구","달성군","군위군"],
    인천: ["중구","동구","미추홀구","연수구","남동구","부평구","계양구","서구","강화군","옹진군"],
    광주: ["동구","서구","남구","북구","광산구"],
    대전: ["동구","중구","서구","유성구","대덕구"],
    울산: ["중구","남구","동구","북구","울주군"],
    세종: ["세종시"],
    경기: ["수원시","성남시","의정부시","안양시","부천시","광명시","평택시","동두천시","안산시","고양시","과천시","구리시","남양주시","오산시","시흥시","군포시","의왕시","하남시","용인시","파주시","이천시","안성시","김포시","화성시","광주시","양주시","포천시","여주시","연천군","가평군","양평군"],
    강원: ["춘천시","원주시","강릉시","동해시","태백시","속초시","삼척시","홍천군","횡성군","영월군","평창군","정선군","철원군","화천군","양구군","인제군","고성군","양양군"],
    충북: ["청주시","충주시","제천시","보은군","옥천군","영동군","증평군","진천군","괴산군","음성군","단양군"],
    충남: ["천안시","공주시","보령시","아산시","서산시","논산시","계룡시","당진시","금산군","부여군","서천군","청양군","홍성군","예산군","태안군"],
    전북: ["전주시","군산시","익산시","정읍시","남원시","김제시","완주군","진안군","무주군","장수군","임실군","순창군","고창군","부안군"],
    전남: ["목포시","여수시","순천시","나주시","광양시","담양군","곡성군","구례군","고흥군","보성군","화순군","장흥군","강진군","해남군","영암군","무안군","함평군","영광군","장성군","완도군","진도군","신안군"],
    경북: ["포항시","경주시","김천시","안동시","구미시","영주시","영천시","상주시","문경시","경산시","군위군","의성군","청송군","영양군","영덕군","청도군","고령군","성주군","칠곡군","예천군","봉화군","울진군","울릉군"],
    경남: ["창원시","진주시","통영시","사천시","김해시","밀양시","거제시","양산시","의령군","함안군","창녕군","고성군","남해군","하동군","산청군","함양군","거창군","합천군"],
    제주: ["제주시","서귀포시"],
};

const sigunguOptions = computed(() => {
    const list = sigunguMap[consultForm.regionSido] || [];
    return list.map(v => ({ value: v, label: v }));
});

const consultForm = reactive({
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
    areaContract: "",
    areaExclusive: "",
    superItems: [],
    superItemEtc: "",
    contractStart: "",
    contractEnd: "",
    deposit: "",
    monthlyRent: "",
});

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

function closeModal(event) {
    modal.close(event.currentTarget);
}
</script>

<style scoped>
:deep(.m_br) { display: none; }
:deep(.p_br) { display: block; }
.smn_intro strong { color: #161616; font-size: 3.2rem; line-height: 1.3; letter-spacing: -0.01em; }
.smn_intro > p { margin-top: 16px; color: #161616; font-size: 2rem; font-weight: 400; letter-spacing: -0.01em; line-height: 1.35; }
.consent_body { padding: 32px; }
.flex_wrap { display: flex; align-items: flex-start; gap: 20px; }
.consent_img_wrap { width: 114px; height: 152px; border: 1px solid #000; flex-shrink: 0; overflow: hidden; }
.consent_img_wrap > img { width: 100%; height: 100%; object-fit: cover; display: block; }
.consult_box .consent_info { padding: 0; display: flex; flex-direction: column; gap: 24px; }
.consult_box .consent_info_title { font-size: 2.4rem; font-weight: 700; letter-spacing: -0.01em; line-height: 1.35; color: #161616; }
.consult_box .consent_info > p { font-size: 1.6rem; font-weight: 400; letter-spacing: -0.01em; line-height: 1.5; color: #161616; }
.consult_box .consent_info > button { width: fit-content; padding: 4px 12px; background: #e8f8f1; border: 1px solid #15b874; border-radius: 100px; color: #15b874; font-size: 1.4rem; font-weight: 500; letter-spacing: -0.01em; line-height: 1.4; cursor: default; }
.consult_box .consent_notice { border-top: 1px solid #e5e5e9; }
.list_caution { list-style: none; margin: 0; padding: 0; }
.list_caution > li > p { color: #67676f; font-size: 1.6rem; font-weight: 400; letter-spacing: -0.01em; line-height: 1.5; }
.gray_box { margin-top: 40px; border-radius: 12px; background-color: #f8f8f8; overflow: hidden; }
.consent_info { padding: 32px; }
.consent_info_title { font-size: 2.4rem; font-weight: 700; letter-spacing: -0.01em; line-height: 1.35; color: #161616; }
.consent_info_list { margin-top: 24px; display: flex; flex-direction: column; gap: 8px; }
.consent_info_list > li { padding-left: 10px; color: #67676f; font-size: 1.6rem; font-weight: 400; letter-spacing: -0.01em; line-height: 1.5; position: relative; }
.consent_info_list > li::before { content: ""; width: 4px; height: 1px; background-color: #67676f; position: absolute; left: 0; top: 0.5lh; }
.consent_notice { margin-top: 24px; padding-top: 24px; border-top: 1px solid #d7d7df; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.consent_notice_text { font-size: 1.6rem; font-weight: 700; line-height: 1.24; color: #161616; }
.consent_notice > :deep(.input_wrap) { width: auto !important; flex: 0 1 auto;}
.consent_notice :deep(.label) { font-size: 1.8rem; color: #161616; }
.middle_bts_wrap { margin-top: 40px; display: flex; gap: 8px; }
.middle_bts_wrap > button { height: 52px; padding: 0 16px; background: #fff; border: 1px solid #90909a; border-radius: 10px; font-size: 1.8rem; font-weight: 700; cursor: pointer; transition: border-color 0.15s, color 0.15s; color: #161616; }
.middle_bts_wrap > button:hover, .middle_bts_wrap > button.active { border-color: #107af2; color: #107af2; }
.form_field > :deep(.input_wrap) { flex: 1; min-width: 0; max-width: 205px; }
.form_field_phone :deep(.select) { width: 134px; flex-shrink: 0; }
.form_field_phone :deep(.select select) { width: 100%; font-size: 1.6rem; }
.form_field_phone > :deep(.input_wrap) { max-width: 134px; flex: 1; min-width: 80px; }
.form_field_email > :deep(.input_wrap:nth-child(1)) { flex: 0 0 205px; width: 205px; min-width: 0; }
.form_field_email > :deep(.input_wrap:nth-child(3)) { flex: 0 0 180px; width: 180px; min-width: 0; }
.form_field_email :deep(.select) { flex: 0 0 180px; width: 180px; min-width: 0; }
.form_field_email :deep(.select select) { width: 100%; font-size: 1.6rem; }
.form_field_region :deep(.select) { flex: 1; min-width: 0; max-width: 220px; }
.form_field_region :deep(.select select) { width: 100%; font-size: 1.6rem; }
.form_field_area .form_sub_input_wrap :deep(.input_wrap) { width: 160px; }
.check_list :deep(.input_wrap) { width: auto; flex:none;}

.check_etc .form_sub_label { min-width: 28px; }
.check_etc :deep(.input_wrap) { flex: 1; max-width: 428px; }
.form_sub_inputs :deep(.input_wrap) { width: 134px; }
.contract_rent .form_sub_input_wrap :deep(.input_wrap) { width: 134px; }
.modal_bottom { margin-top: 40px; flex-shrink: 0; display: flex; align-items: center; justify-content: flex-end; gap: 8px; }
.modal_bottom > :deep(.btn_big) { width: 134px; text-align: center; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }

@media (max-width: 768px) {
    :deep(.m_br) { display: block; }
    :deep(.p_br) { display: none; }
    .modal_content { padding: 40px 0; }
    .smn_intro > p { margin-top: 12px; }
    .consent_info { padding: 30px 20px; }
    .consent_info_list > li { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .consent_info_title { font-weight: 700; font-size: 1.8rem; line-height: 1.5; }
    .consent_notice { flex-direction: column; align-items: flex-start; gap: 16px; }
    .consent_notice_text { font-size: 1.4rem; line-height: 1.4; }
    .form_field_phone > :deep(.input_wrap) { max-width: none; flex: 1; }
    .form_field_email > :deep(.input_wrap:nth-child(1)) { flex: 1; min-width: 80px; }
    .form_field_email > :deep(.input_wrap:nth-child(3)) { flex: 1; min-width: 60px; }
    .form_field_email :deep(.select) { flex: 1 0 100%; width: 100%; }
    .form_field_region :deep(.select) { flex: 1 0 100%; width: 100%; max-width: 100%; }
    .consent_notice :deep(.label) { font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .modal_bottom { margin-top: 0; justify-content: center; }
    .modal_bottom > :deep(.btn_big) { width: 100%; flex: 1; }
    .modal_bottom :deep(.primary) { background-color: var(--color-brand-primary); }
    .smn_intro strong { font-weight: 700; font-size: 2rem; line-height: 1.35; letter-spacing: -0.01em; }
    .smn_intro > p { margin-top: 12px; font-size: 1.8rem; line-height: 1.4; letter-spacing: 0; }
    .gray_box { margin-top: 32px; }
    .gray_box + .gray_box { margin-top: 60px; }
    .consent_body { padding: 30px 20px; }
    .consent_img_wrap { width: 90px; height: 120px; }
    .consult_box .consent_info_title { font-size: 1.8rem; line-height: 1.5; letter-spacing: 0; }
    .consult_box .consent_info { gap: 6px; }
    .consult_box .consent_info > p { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .consult_box .consent_info > button { margin-top: 6px; }
    .consent_notice { margin-top: 24px; padding-top: 24px; }
    .consult_box .consent_notice { margin-top: 16px; padding-top: 16px; }
    .list_caution > li > p { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .middle_bts_wrap { gap: 6px; }
    .middle_bts_wrap > button { padding: 0 5px; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .form_field_area .form_sub_input_wrap { width: 100%; }
    .form_field_area .form_sub_input_wrap :deep(.input_wrap) { width: 100%; }
    .form_field > :deep(.input_wrap) { max-width: 100%; }
    .form_sub_inputs :deep(.input_wrap) { width: 100%; }
}
</style>
