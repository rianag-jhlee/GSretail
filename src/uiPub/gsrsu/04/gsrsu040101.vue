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
                    <header class="tab_header">
                        <h2> GS리테일은 투명하고, 공정하며, 합리적인 사고와 <br class="p_br" />실행력을 통해 윤리경영을 최우선 기본 가치로 실현합니다.</h2>
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
                    <header class="tab_header">
                        <h2> GS리테일은 투명하고, 공정하며, 합리적인 사고와 <br class="p_br" />실행력을 통해 윤리경영을 최우선 기본 가치로 실현합니다.</h2>
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
                        <ol class="base_list type02">
                            <li v-for="(item, idx) in t.EthicsPracticeItems" :key="item.key" class="base_item">
                                <em>{{ String(idx + 1).padStart(2, "0") }}</em>
                                <strong>{{ item.title }}</strong>
                                <p>{{ item.desc }}</p>
                            </li>
                        </ol>
                        <div class="signature_box">
                            <div>
                                <p>{{ t.EthicsPledgeText }}</p>
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
                                                <ProcessFlowArrow v-if="sIdx < t.WhistleProcessSteps.length - 1" />
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
                                        <div class="common_table_scroll">
                                            <table class="common_table">
                                                <thead>
                                                    <tr>
                                                        <th v-for="col in blk.cols" :key="col" scope="col">{{ col }}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td v-for="(cell, ci) in blk.cells" :key="ci">
                                                            <p class="common_table_sub">{{ cell.sub }}</p>
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
                        <ol class="base_list">
                            <li v-for="(row, idx) in t.WhistleProtectSections" :key="row.key" class="base_item">
                                <em>{{ String(idx + 1).padStart(2, "0") }}</em>
                                <strong>{{ row.title }}</strong>
                                <p v-html="row.desc"></p>
                                <div v-if="row.grayBox" class="gray_box type02">
                                    <strong>{{ row.grayBox.title }}</strong>
                                    <p v-html="row.grayBox.desc"></p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
                <div v-show="CTabIdxEsgArchive === 3" class="panel_inner" :aria-label="t.TabsEsgArchive?.[3]?.item || ''">
                    <template v-if="!isEthicsInquiryOpen">
                        <header class="tab_header">
                            <h2 v-html="t.ReportIntroTitle"></h2>
                            <p>{{ t.ReportIntroDesc }}</p>
                        </header>
                        <section>
                            <ul class="report_channel_list">
                                <li v-for="item in t.ReportChannelItems" :key="item.key" class="report_channel_item">
                                    <article class="report_channel_card">
                                        <figure class="report_channel_thumb" :class="'thumb_' + item.key" aria-hidden="true" />
                                        <div class="report_channel_body">
                                            <h3>{{ item.title }}</h3>
                                            <p v-html="item.desc"></p>
                                            <div class="button_area">
                                                <Buttons
                                                    v-if="item.key === 'ethics'"
                                                    tag="button"
                                                    type="button"
                                                    btn-class="btn_xl border btn_icon after"
                                                    @click="openEthicsInquiry"
                                                >
                                                    {{ item.btnText }}
                                                </Buttons>
                                                <Buttons v-else tag="a" href="#none" btn-class="btn_xl border btn_icon after">{{ item.btnText }}</Buttons>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                            </ul>
                            <p class="report_channel_notice" v-html="t.ReportNotice"></p>
                        </section>
                    </template>
                    <template v-else>
                        <header class="tab_header">
                            <h2>정도경영 목소리</h2>
                            <p>언제나 고객님의 입장이 되어 작은 소리에도 귀를 기울이겠습니다.</p>
                        </header>
                        <section>
                            <header class="sub_header">
                                <h3>정도경영 사이버 신문고</h3>
                                <p class="txt_blue">정도경영 목소리에는 임직원 또는 협력업체 직원의 불공정 행위들 (금품수수, 향응접대, 매출누락, 불공정거래, 기타 부정행위)에 대한 제보뿐만 아니라, 정도경영을 위한 좋은 의견들도 함께 접수하고 있습니다.</p>
                            </header>
                            <ul class="list_dotted">
                                <li>
                                    <p>이곳에서 접수되는 모든 글들은 철저한 보안과 안전 속에서 처리됨을 알려드립니다.</p>
                                </li>
                                <li>
                                    <p>상담이나 제보를 하신 분에 대하여서는 어떠한 불이익도 발생하지 않도록 하겠습니다.</p>
                                </li>
                                <li>
                                    <p>가급적 6하원칙에 입각하여 작성해 주시고, 내용이 부정확한 경우에는 조사대상에서 제외될 수도 있습니다.</p>
                                </li>
                                <li>
                                    <p>허위 사실을 신고하여 개인의 명예를 훼손시키는 행위는 절대 삼가 바랍니다.</p>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <header class="sub_header">
                                <h3>GS리테일 정도경영 제보 대상</h3>
                            </header>
                            <NumberedInfoList
                                class="ethics_target_list"
                                :items="t.EthicsReportTargetItems"
                                :show-icon="true"
                            />
                        </section>
                        <section>
                            <ConsentInfoBox
                                :items="t.EthicsConsentItems"
                                v-model="isEthicsConsentAgreed"
                            />
                            <ConsentInfoBox
                                :items="t.EthicsConsentItems2"
                                v-model="isEthicsConsentAgreed2"
                            />
                            <div class="report_form_wrap">
                                <div class="apply_form">
                                    <div class="form_head">
                                        <h3 class="form_head_title">고객정보</h3>
                                        <span class="form_required_note">* 필수 입력사항</span>
                                    </div>
                                    <div class="form_body">
                                        <div class="form_row">
                                            <div class="form_label">이름<span class="form_required">*</span></div>
                                            <div class="form_field form_field_name">
                                                <Inputs type="text" v-model="ethicsReportForm.name" />
                                            </div>
                                        </div>
                                        <div class="form_row">
                                            <div class="form_label">이메일<span class="form_required">*</span></div>
                                            <div class="form_field form_field_email">
                                                <Inputs type="text" v-model="ethicsReportForm.emailId" />
                                                <span class="form_sep">@</span>
                                                <Inputs type="text" v-model="ethicsReportForm.emailDomain" />
                                                <label class="select">
                                                    <div>
                                                        <select v-model="ethicsReportForm.emailDomainSelect">
                                                            <option v-for="opt in ethicsEmailDomainOptions" :key="opt" :value="opt">{{ opt }}</option>
                                                        </select>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form_row">
                                            <div class="form_label">연락처<span class="form_required">*</span></div>
                                            <div class="form_field form_field_phone">
                                                <label class="select">
                                                    <div>
                                                        <select v-model="ethicsReportForm.phonePrefix">
                                                            <option v-for="opt in ethicsPhonePrefixOptions" :key="opt" :value="opt">{{ opt }}</option>
                                                        </select>
                                                    </div>
                                                </label>
                                                <span class="form_sep">-</span>
                                                <Inputs type="text" v-model="ethicsReportForm.phoneMid" />
                                                <span class="form_sep">-</span>
                                                <Inputs type="text" v-model="ethicsReportForm.phoneTail" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="apply_form">
                                    <div class="form_head">
                                        <h3 class="form_head_title">제보내용</h3>
                                        <span class="form_required_note">* 필수 입력사항</span>
                                    </div>
                                    <div class="form_body">
                                        <div class="form_row">
                                            <div class="form_label">구분<span class="form_required">*</span></div>
                                            <div class="form_field">
                                                <label class="select">
                                                    <div>
                                                        <select v-model="ethicsReportForm.division">
                                                            <option v-for="opt in ethicsDivisionOptions" :key="opt" :value="opt">{{ opt }}</option>
                                                        </select>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form_row">
                                            <div class="form_label">제보구분<span class="form_required">*</span></div>
                                            <div class="form_field">
                                                <label class="select">
                                                    <div>
                                                        <select v-model="ethicsReportForm.reportType">
                                                            <option v-for="opt in ethicsReportTypeOptions" :key="opt" :value="opt">{{ opt }}</option>
                                                        </select>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form_row">
                                            <div class="form_label">매장명<span class="form_required">*</span></div>
                                            <div class="form_field form_field_store">
                                                <Inputs type="text" v-model="ethicsReportForm.storeName" />
                                            </div>
                                        </div>
                                        <div class="form_row">
                                            <div class="form_label">제목<span class="form_required">*</span></div>
                                            <div class="form_field">
                                                <Inputs type="text" v-model="ethicsReportForm.title" />
                                            </div>
                                        </div>
                                        <div class="form_row form_row_content">
                                            <div class="form_label">내용<span class="form_required">*</span></div>
                                            <div class="form_field form_field_content">
                                                <textarea
                                                    v-model="ethicsReportForm.content"
                                                    placeholder="1.누가 :&#10;2.언제 :&#10;3.어디서 :&#10;4.내용 :&#10;5.아는 사람 :&#10;6.확인 방법 :"
                                                />
                                                <p class="form_field_note">※ 내용 입력 시 개인정보보호를 위해 연락처, 주소 등의 개인정보를 작성하지 않도록 주의 부탁드립니다.</p>
                                            </div>
                                        </div>
                                        <div class="form_row">
                                            <div class="form_label">파일첨부</div>
                                            <div class="form_field form_field_file">
                                                <div class="file_row">
                                                    <button type="button" class="btn_file">파일선택</button>
                                                    <span>선택된 파일 없음</span>
                                                </div>
                                                <p class="form_field_note">* 여러 개의 파일 업로드 시 zip파일로 압축하여 올려주세요 (*용량제한 20MB)</p>
                                            </div>
                                        </div>
                                        <div class="form_row">
                                            <div class="form_label">회신방법</div>
                                            <div class="form_field">
                                                <label class="select">
                                                    <div>
                                                        <select v-model="ethicsReportForm.replyType">
                                                            <option v-for="opt in ethicsReplyTypeOptions" :key="opt" :value="opt">{{ opt }}</option>
                                                        </select>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form_action_area">
                                    <Buttons btn-class="btn_big primary">신청</Buttons>
                                    <Buttons tag="button" type="button" btn-class="btn_big gray" @click="closeEthicsInquiry">
                                        취소
                                    </Buttons>
                                </div>
                            </div>
                        </section>
                    </template>
                </div>
            </div>

            <!-- 준법경영 -->
            <div v-show="CTabIdx === 1" class="panel" :aria-label="t.Tabs1?.[1]?.item || ''">
                <div v-show="CTabIdxCompliance === 0" class="panel_inner" :aria-label="t.TabsCompliance?.[0]?.item || ''">
                    <header class="tab_header">
                        <h2 v-html="t.ComplianceProgramHeroTitle"></h2>
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
                    <div class="signature_box type02">
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
                <div v-show="CTabIdxCompliance === 1" class="panel_inner" :aria-label="t.TabsCompliance?.[1]?.item || ''">
                    <!-- 자율준수 관리자 안내 -->
                    <header class="tab_header">
                        <h2>GS리테일은협력사와의 신뢰와 협력을 통해 공동의 발전 도모와 자율준수 프로그램의 <br />
                            적극적 실천을 위해 기준과 절차에 따라 ‘자율준수관리자’를 임명하여 운영하고 있습니다.</h2>
                    </header>
                    <section>
                        <header class="sub_header">
                            <h3>자율준수 관리자 역할</h3>
                        </header>
                        <FeatureCards
                            class="law_feature_cards feature_cards_grid cp_manager_role_cards"
                            type="num"
                            :items="t.ComplianceManagerRoleFeatureItems"
                            :no-swipe="true"
                        />
                    </section>
                    <section>
                        <header class="sub_header">
                            <h3>자율준수 관리자 선임절차</h3>
                        </header>
                        <div class="cp_appoint_board">
                            <div role="list" aria-label="자율준수 관리자 선임 절차" class="process_flow">
                                <template v-for="(step, sIdx) in t.ComplianceAppointmentSteps" :key="step.key">
                                    <article role="listitem">
                                        <h4 v-html="step.title"></h4>
                                        <p>{{ step.note }}</p>
                                    </article>
                                    <ProcessFlowArrow v-if="sIdx < t.ComplianceAppointmentSteps.length - 1" />
                                </template>
                            </div>
                        </div>
                    </section>
                    <section>
                        <header class="sub_header">
                            <h3>자율준수 관리자</h3>
                        </header>
                        <figure class="cp_manager_banner">
                            <figcaption>
                                <strong>GS리테일은<br />공정거래 자율준수 <br />모범기업입니다.</strong>
                                <p>공정거래 자율준수를 통한 올바른 업무 수행을 통해 위험을 줄이고 지속 가능한 <br />성장을 이룰 수 있습니다.<br /><br />
                                    법규 위반으로부터 GS리테일과 임직원을 안전하게 보호하고,<br />
                                    고객과 파트너사 등으로부터 신뢰를 얻어 지속적으로 성장하도록 임직원 여러분의 <br />
                                    적극적인 자율준수 실천을 당부드립니다.
                                </p>
                                <div class="cp_manager_banner_content">
                                    <dl>
                                        <dt>GS리테일 지속가능경영부분</dt>
                                        <dd>상무 <strong>곽창헌</strong></dd>
                                    </dl>
                                    <div>
                                        <img src="@/assets/images/dummy/gsrsu040101_11.png" alt="곽창헌 사인">
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                        <p>
                            GS리테일 임직원 여러분! <br />
                            안녕하십니까. 자율준수 관리자 곽창헌 상무입니다.<br /><br />

                            이윤 극대화를 추구하는 기업활동의 속성에도 불구하고,<br />
                            오늘날에는 사회적 책임의 이행과 공정하고 투명한 경영체계의 확립이 기업의 지속적 성장 가능성을 판가름하는 핵심 요소로 자리 잡았습니다.<br />
                            그렇기에 기업과 구성원이 공정한 경쟁에 관하여 정해진 법규를 스스로 준수하는 것은 선택사항이 아니라 필수 불가결한 사항입니다.<br /><br />

                            공정거래 자율준수 프로그램(CP: Compliance Program)은<br />
                            기업이 공정거래 관련 법규를 스스로 준수하기 위해 운영하는 준법시스템으로서, <br />
                            공정거래 관련 법규 위반을 사전에 예방함은 물론 조기에 위반 여부를 발견하고 시정할 수 있도록 하는 제도입니다.<br /><br />

                            편의점, 수퍼 및 홈쇼핑 사업을 견인하는 우리 GS리테일은 공정한 기업활동에 대한 시대적 요구에 부응하고자<br />
                            1995년부터 이미 투명한 거래 의지를 대내외에 천명하고 공정거래를 자율적으로 실천해 왔으며,<br />
                            자율준수 문화의 정착과 확산에 힘을 쏟고 있는 공정거래 자율준수 모범 기업입니다.<br /><br />

                            공정거래 자율준수 프로그램은 자율준수 관리자와 CP 주관부서만의 업무가 아니라<br />
                            모든 임직원이 일상 업무를 수행함에 있어 지켜야 할 원칙이자 기준입니다.<br />
                            자율준수를 통한 올바른 업무 수행을 통해 위험을 줄이고 지속 가능한 성장을 이룰 수 있습니다.<br /><br />

                            법규 위반으로부터 GS리테일과 임직원을 안전하게 보호하고, 고객과 파트너사 등으로부터 신뢰를 얻어<br />
                            우리 GS리테일이 지속적으로 성장하도록 임직원 여러분의 적극적인 자율준수 실천을 당부 드립니다.<br /><br />
                            자율준수 관리자와 CP 주관부서가 최선을 다해 임직원 여러분을 돕겠습니다.<br /><br />

                            감사합니다.
                        </p>
                    </section>
                </div>
                <div v-show="CTabIdxCompliance === 2" class="panel_inner" :aria-label="t.TabsCompliance?.[2]?.item || ''">
                    <!-- 공정거래 4대 가이드라인 (Figma 491:13910) -->
                    <header class="tab_header">
                        <h2>GS리테일은 투명하고 거래질서 확립과 자율준수 프로그램의 지속적 실천을 위해<br />공정거래 4대 가이드라인을 도입, 적용하고 있습니다.</h2>
                    </header>
                    <section>
                        <FeatureCards
                            class="feature_cards_grid fair_trade_guideline_cards"
                            type="num"
                            :items="t.FairTradeGuidelineItems"
                            :no-swipe="true"
                        >
                            <template #action>
                                <Buttons tag="a" href="#none" btn-class="btn_xl border btn_icon after">{{ t.FairTradeGuidelineDetailBtn }}</Buttons>
                            </template>
                        </FeatureCards>
                    </section>
                </div>
                <div v-show="CTabIdxCompliance === 3" class="panel_inner" :aria-label="t.TabsCompliance?.[3]?.item || ''">
                    <div class="wrap_tabs_type03">
                        <Tabs
                            v-model="CTabIdxFairTradeBiz"
                            :tab-items="t.TabsFairTradeBiz"
                            tab-class="type_03"
                            :tab-slide="true"
                        />
                    </div>
                    <div v-show="CTabIdxFairTradeBiz === 0" class="panel_third_depth" :aria-label="t.TabsFairTradeBiz?.[0]?.item || ''">
                        <section class="fair_trade_work_standard_sec">
                            <Accordion>
                                <AccordionItem v-for="item in t.FairTradeWorkStandardAccordionItems" :key="'sup-' + item.key" :item-key="'sup-' + item.key">
                                    <template #title><strong v-html="item.title" class="acc_tit_txt"></strong></template>
                                    <template v-if="item.key === '01' || item.key === '02' || item.key === '03' || item.key === '04' || item.key === '05' || item.key === '06' || item.key === '07' || item.key === '08'">
                                        <ol class="fair_trade_standard_sections">
                                            <li v-for="section in item.key === '02' ? t.FairTradeSalesIncentiveSections : item.key === '03' ? t.FairTradePromotionCostSharingSections : item.key === '04' ? t.FairInteriorAndPromotionCostSharingSections : item.key === '05' ? t.FairPartnerCompanyManagementSections : item.key === '06' ? t.FairPartnerEmployeeDispatchSections : item.key === '07' ? t.FairPartnerSpecialPurchaseSections : item.key === '08' ? t.FairPartnerReturnRelatedSections : t.FairTradePartnerStandardSections" :key="'sup-sec-' + item.key + '-' + section.no">
                                                <article :class="{ gray_box: section.no === '부칙' || section.no === '부속지침' }">
                                                    <template v-if="section.no === '부칙' || section.no === '부속지침'">
                                                        <ul v-if="section.addendumItems">
                                                            <li v-for="(text, idx) in section.addendumItems" :key="'sup-add-' + item.key + '-' + idx">
                                                                <p>{{ text }}</p>
                                                            </li>
                                                        </ul>
                                                        <p v-if="section.addendumText" v-html="section.addendumText"></p>
                                                    </template>
                                                    <template v-else>
                                                        <h4>{{ section.title ? `${section.no} ${section.title}` : section.no }}</h4>
                                                        <div class="fair_trade_standard_body">
                                                            <p v-if="section.lead">{{ section.lead }}</p>
                                                            <component v-if="section.items" :is="(item.key === '02' && section.no === '05') || section.usePlainList ? 'ul' : 'ol'" :class="(item.key === '02' && section.no === '05') || section.usePlainList ? 'plain_list' : 'num_list'">
                                                                <li v-for="row in section.items" :key="'sup-sec-' + section.no + '-' + row.num">
                                                                    <p v-html="row.title"></p>
                                                                    <dl v-if="row.criteria" class="fair_trade_standard_dl">
                                                                        <template v-for="(crit, rIdx) in row.criteria" :key="'sup-sec-' + section.no + '-' + row.num + '-crit-' + rIdx">
                                                                            <dt v-if="crit.term || crit.text">{{ crit.term || crit.text }}</dt>
                                                                            <dd>
                                                                                <ul v-if="crit.details" class="fair_trade_standard_desc_list">
                                                                                    <li v-for="(detail, ddIdx) in crit.details" :key="'sup-sec-' + section.no + '-' + row.num + '-crit-' + rIdx + '-detail-' + ddIdx">
                                                                                        <template v-if="typeof detail === 'string'">
                                                                                            <span v-html="detail"></span>
                                                                                        </template>
                                                                                        <template v-else>
                                                                                            <p v-if="detail.text" v-html="detail.text"></p>
                                                                                            <p v-if="detail.desc" class="txt_indent_24" v-html="detail.desc"></p>
                                                                                            <ul v-if="detail.children">
                                                                                                <li v-for="(child, cIdx) in detail.children" :key="'sup-sec-' + section.no + '-' + row.num + '-crit-' + rIdx + '-detail-' + ddIdx + '-' + cIdx" v-html="child"></li>
                                                                                            </ul>
                                                                                        </template>
                                                                                    </li>
                                                                                </ul>
                                                                            </dd>
                                                                        </template>
                                                                    </dl>
                                                                    <ul v-if="row.details">
                                                                        <li v-for="(detail, dIdx) in row.details" :key="'sup-sec-' + section.no + '-' + row.num + '-' + dIdx">
                                                                            <template v-if="typeof detail === 'string'">
                                                                                {{ detail }}
                                                                            </template>
                                                                            <template v-else>
                                                                                <p>{{ detail.text }}</p>
                                                                                <ul v-if="detail.children">
                                                                                    <li v-for="(child, cIdx) in detail.children" :key="'sup-sec-' + section.no + '-' + row.num + '-' + dIdx + '-' + cIdx">
                                                                                        <template v-if="typeof child === 'string'">
                                                                                            <span v-html="child"></span>
                                                                                        </template>
                                                                                        <template v-else>
                                                                                            <dl>
                                                                                                <dt v-if="child.text" v-html="child.text"></dt>
                                                                                                <dd>
                                                                                                    <ul v-if="child.children">
                                                                                                        <li v-for="(grandChild, gIdx) in child.children" :key="'sup-sec-' + section.no + '-' + row.num + '-' + dIdx + '-' + cIdx + '-' + gIdx" v-html="grandChild"></li>
                                                                                                    </ul>
                                                                                                </dd>
                                                                                            </dl>
                                                                                        </template>
                                                                                    </li>
                                                                                </ul>
                                                                            </template>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </component>
                                                            <dl v-if="section.criteria" class="fair_trade_standard_dl">
                                                                <template v-for="row in section.criteria" :key="'sup-sec-' + section.no + '-' + row.term">
                                                                    <dt>{{ row.term }}</dt>
                                                                    <dd>
                                                                        <ul v-if="row.details" class="fair_trade_standard_desc_list">
                                                                            <li v-for="detail in row.details" :key="'sup-sec-' + section.no + '-' + row.term + '-' + detail">{{ detail }}</li>
                                                                        </ul>
                                                                        <p v-else>{{ row.desc }}</p>
                                                                    </dd>
                                                                </template>
                                                            </dl>
                                                            <ol v-if="section.definitions" class="num_list">
                                                                <li v-for="row in section.definitions" :key="'sup-sec-' + section.no + '-' + row.term">
                                                                    <p>{{ `${row.desc}` }}</p>
                                                                    <ul v-if="row.details">
                                                                        <li v-for="detail in row.details" :key="'sup-sec-' + section.no + '-' + row.term + '-' + detail">{{ detail }}</li>
                                                                    </ul>
                                                                </li>
                                                            </ol>
                                                        </div>
                                                    </template>


                                                    
                                                </article>
                                            </li>
                                        </ol>
                                    </template>
                                    <p v-else class="fair_trade_work_standard_desc">{{ item.desc }}</p>
                                </AccordionItem>
                            </Accordion>
                        </section>
                    </div>
                    <div v-show="CTabIdxFairTradeBiz === 1" class="panel_third_depth" :aria-label="t.TabsFairTradeBiz?.[1]?.item || ''">
                        <section class="fair_trade_work_standard_sec">
                            <Accordion>
                                <AccordionItem v-for="item in t.FairTradeHomeShoppingAccordionItems" :key="'tv-' + item.key" :item-key="'tv-' + item.key">
                                    <template #title><strong v-html="item.title" class="acc_tit_txt"></strong></template>
                                    <template v-if="item.key === '01' || item.key === '02' || item.key === '03' || item.key === '04' || item.key === '05' || item.key === '06' || item.key === '07' || item.key === '08' || item.key === '09' || item.key === '10' || item.key === '11'">
                                        <ol class="fair_trade_standard_sections">
                                            <li v-for="section in item.key === '01' ? t.FairTradeHomeShoppingCooperationSections : item.key === '02' ? t.FairTradeHomeShoppingTermsSections : item.key === '03' ? t.FairTradeHomeShoppingFixedCommissionSections : item.key === '04' ? t.FairTradeHomeShoppingPromotionSections : item.key === '05' ? t.FairTradeHomeShoppingProductionCostSections : item.key === '06' ? t.FairTradeHomeShoppingReturnSections : item.key === '07' ? t.FairTradeHomeShoppingManagementInfoSections : item.key === '08' ? t.FairTradeHomeShoppingGuidelineComplianceSections : item.key === '09' ? t.FairTradeHomeShoppingProductSelectionSections : item.key === '10' ? t.FairTradeHomeShoppingIntangibleProductSections : item.key === '11' ? t.FairTradeHomeShoppingLinkedProgrammingSections : []" :key="'tv-sec-' + item.key + '-' + section.no">
                                                <article :class="{ gray_box: section.no === '부칙' || section.no === '부속지침' }">
                                                    <template v-if="section.no === '부칙' || section.no === '부속지침'">
                                                        <ul v-if="section.addendumItems">
                                                            <li v-for="(text, idx) in section.addendumItems" :key="'tv-add-' + item.key + '-' + idx">
                                                                <p>{{ text }}</p>
                                                            </li>
                                                        </ul>
                                                        <p v-if="section.addendumText" v-html="section.addendumText"></p>
                                                    </template>
                                                    <template v-else>
                                                        <h4>{{ section.title ? `${section.no} ${section.title}` : section.no }}</h4>
                                                        <div class="fair_trade_standard_body">
                                                            <p v-if="section.lead">{{ section.lead }}</p>
                                                            <component v-if="section.items" :is="section.usePlainList ? 'ul' : 'ol'" :class="section.usePlainList ? 'plain_list' : 'num_list'">
                                                                <li v-for="row in section.items" :key="'tv-sec-' + section.no + '-' + row.num">
                                                                    <p v-html="row.title"></p>
                                                                    <ul v-if="row.details">
                                                                        <li v-for="(detail, dIdx) in row.details" :key="'tv-sec-' + section.no + '-' + row.num + '-' + dIdx">
                                                                            <template v-if="typeof detail === 'string'">
                                                                                {{ detail }}
                                                                            </template>
                                                                            <template v-else>
                                                                                <p>{{ detail.text }}</p>
                                                                                <ul v-if="detail.children">
                                                                                    <li v-for="(child, cIdx) in detail.children" :key="'tv-sec-' + section.no + '-' + row.num + '-' + dIdx + '-' + cIdx">{{ child }}</li>
                                                                                </ul>
                                                                            </template>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </component>
                                                            <dl v-if="section.criteria" class="fair_trade_standard_dl">
                                                                <template v-for="row in section.criteria" :key="'tv-sec-' + section.no + '-' + row.term">
                                                                    <dt>{{ row.term }}</dt>
                                                                    <dd>
                                                                        <ul v-if="row.details" class="fair_trade_standard_desc_list">
                                                                            <li v-for="detail in row.details" :key="'tv-sec-' + section.no + '-' + row.term + '-' + detail">{{ detail }}</li>
                                                                        </ul>
                                                                        <p v-else>{{ row.desc }}</p>
                                                                    </dd>
                                                                </template>
                                                            </dl>
                                                            <ol v-if="section.definitions" class="num_list">
                                                                <li v-for="row in section.definitions" :key="'tv-sec-' + section.no + '-' + row.term">
                                                                    <p>{{ `${row.desc}` }}</p>
                                                                    <ul v-if="row.details">
                                                                        <li v-for="detail in row.details" :key="'tv-sec-' + section.no + '-' + row.term + '-' + detail">{{ detail }}</li>
                                                                    </ul>
                                                                </li>
                                                            </ol>
                                                        </div>
                                                    </template>
                                                </article>
                                            </li>
                                        </ol>
                                    </template>
                                    <p v-else class="fair_trade_work_standard_desc">{{ item.desc }}</p>
                                </AccordionItem>
                            </Accordion>
                        </section>
                    </div>
                   
                </div>
            </div>


        </div>
    </div>
</template>

<script setup>
import { computed, defineProps, ref, watch } from "vue";
import Tabs from "@/components/Tabs.vue";
import FeatureCards from "@/components/FeatureCards.vue";
import Accordion from "@/components/Accordion.vue";
import AccordionItem from "@/components/AccordionItem.vue";
import Buttons from "@/components/Buttons.vue";
import Inputs from "@/components/Inputs.vue";
import CardItem from "@/components/CardItem.vue";
import NumberedInfoList from "@/components/NumberedInfoList.vue";
import ConsentInfoBox from "@/components/ConsentInfoBox.vue";
import ProcessFlowArrow from "@/components/ProcessFlowArrow.vue";
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
const CTabIdxFairTradeBiz = ref(0);
const isEthicsInquiryOpen = ref(false);
const isEthicsConsentAgreed = ref(false);
const isEthicsConsentAgreed2 = ref(false);
const ethicsEmailDomainOptions = ["직접입력", "naver.com", "gmail.com", "hanmail.net"];
const ethicsPhonePrefixOptions = ["010", "011", "016", "017", "018", "019"];
const ethicsDivisionOptions = ["사업부 선택", "GS25", "GS THE FRESH", "GS SHOP", "기타"];
const ethicsReportTypeOptions = ["제보구분 선택", "부정행위", "불공정거래", "인권침해", "기타"];
const ethicsReplyTypeOptions = ["이메일", "전화"];
const ethicsReportForm = ref({
    name: "",
    emailId: "",
    emailDomain: "",
    emailDomainSelect: "직접입력",
    phonePrefix: "010",
    phoneMid: "",
    phoneTail: "",
    division: "사업부 선택",
    reportType: "제보구분 선택",
    storeName: "",
    title: "",
    content: "",
    replyType: "이메일",
});

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
        TabsFairTradeBiz: [
            { item: "수퍼, 편의점, 전문점" },
            { item: "TV홈쇼핑" },
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
        ComplianceManagerRoleFeatureItems: [
            { num: "01", title: "법규준수 여부에 대한 감독/감사를 실시합니다." },
            { num: "02", title: "자율준수편람 제작 및 운영을 합니다." },
            { num: "03", title: "자율준수 교육을 지휘/감독합니다." },
        ],
        ComplianceAppointmentSteps: [
            { key: "ap1", iconKey: "recommend", title: "자율준수 관리자<br />후보 추천", note: "제척/기피 요건" },
            { key: "ap2", iconKey: "verify", title: "자율준수 관리자<br />역량 검증", note: "반부패도 검증, 업무 역량 검증" },
            { key: "ap3", iconKey: "appoint", title: "선임, 임명", note: "임기 3년" },
            { key: "ap4", iconKey: "notify", title: "임직원 안내", note: "임무 수행" },
        ],
        FairTradeGuidelineDetailBtn: "자세히 보기",
        FairTradeGuidelineItems: [
            {
                num: "01",
                title: "파트너사 선정, 운영 가이드 라인",
               
            },
            {
                num: "02",
                title: "서면 발급, 보존 가이드 라인",
              
            },
            {
                num: "03",
                title: "하도급 거래 심의위원회 운영 규정",
                
            },
            {
                num: "04", 
                title: "계약 체결가이드 라인",
               
            },
       
        ],
        FairTradeWorkStandardAccordionItems: [
            {
                key: "01",
                title: "<span class='acc_num'>1.</span>파트너사 선정, 운영 기준",             
            },
            {
                key: "02",
                title: "<span class='acc_num'>2.</span>판매장려금 결정, 변경에 대한 기준",              
            },
            {
                key: "03",
                title: "<span class='acc_num'>3.</span>판매촉진행사 진행 및 비용분담 기준",              
            },
            {
                key: "04",
                title: "<span class='acc_num'>4.</span>인테리어 및 홍보물 비용분담 기준",  
            },
            {
                key: "05",
                title: "<span class='acc_num'>5.</span>파트너사 경영정보요구 기준",
            },
            {
                key: "06",
                title: "<span class='acc_num'>6.</span>파트너사 종업원 파견 기준",
            },
            {
                key: "07",
                title: "<span class='acc_num'>7.</span>파트너사 특약매입거래 기준",
            },
            {
                key: "08", 
                title: "<span class='acc_num'>8.</span>파트너사 반품관련 기준",
            },
        ],
        FairTradeHomeShoppingAccordionItems: [
            { key: "01", title: "<span class='acc_num'>1.</span>협력사와의 공정거래를 위한 기준과 절차" },
            { key: "02", title: "<span class='acc_num'>2.</span>거래조건 결정 기준과 절차" },
            { key: "03", title: "<span class='acc_num'>3.</span>정액수수료 방송 운영기준과 절차" },
            { key: "04", title: "<span class='acc_num'>4.</span>판매촉진행사 진행 기준과 절차" },
            { key: "05", title: "<span class='acc_num'>5.</span>방송제작비 등 분담 기준과 절차" },
            { key: "06", title: "<span class='acc_num'>6.</span>직매입 상품 등의 반품 기준과 절차" },
            { key: "07", title: "<span class='acc_num'>7.</span>경영정보 제공 요구 금지 기준" },
            { key: "08", title: "<span class='acc_num'>8.</span>홈쇼핑 불공정거래행위에 대한 위법성 심사지침 준수 기준" },
            { key: "09", title: "<span class='acc_num'>9.</span>상품선정 및 방송편성 기준과 절차" },
            { key: "10", title: "<span class='acc_num'>10.</span>무형상품 선정 기준과 절차" },
            { key: "11", title: "<span class='acc_num'>11.</span>연계편성의 부당한 강요행위 금지 기준" },
        ],
        FairTradeHomeShoppingCooperationSections: [
            {
                no: "01",
                title: "목적",
                lead: "이 기준은 주식회사 지에스리테일(이하 ‘GS SHOP’)의 TV홈쇼핑 및 데이터홈 쇼핑 방송(이하 통칭하여 ‘방송’)을 위한 협력사와의 거래 과정에서, 협력사와 GS SHOP 간의 정당하고 공정한 거래조건이 보장되도록 하고, GS SHOP과 협력사가 지속적으로 협력하는 관계를 유지하기 위해 GS SHOP 임직원이 준수해야 할 기본적인 사항들을 규정하기 위해 작성된 것이다.",
            },
            {
                no: "02",
                title: "기본 원칙",
                items: [
                    { num: "1", title: "GS SHOP 임직원은 협력사와의 상담 또는 거래 과정에서 항상 이 기준을 숙지하고 준수하여야 한다." },
                    { num: "2", title: "GS SHOP 임직원은 이 기준 외에도 협력사와의 거래에 있어 「독점규제 및 공정거래에 관한 법률」, 「대규모유통업에서의 거래 공정화에 관한 법 률」 등 공정거래 관련 법령(이하 통칭하여 ‘공정거래 관련 법령’)에 규정 된 사항을 엄격히 준수하여야 한다." },
                    { num: "3", title: "이 기준 및 부속 지침은 GS SHOP을 통해 방송을 진행하는 협력사 및 해 당 협력사와의 거래에 한하여 적용하기로 한다." },
                    { num: "4", title: "이 기준은 공식 홈페이지(http://www.gsretail.com) 또는 GS SHOP 투명거 래시스템(http://withgs.gsshop.com) 게시판 등을 통해 공지하고, 협력사의 GS SHOP 방송을 위한 개별 입점 상담 시에도 공개함을 원칙으로 한다." },
                    { num: "5", title: "GS SHOP은 협력사 교육을 통하여 이 기준을 지속적으로 고지하고 공유 하기로 한다." },
                ],
            },
            {
                no: "03",
                title: "상품 및 협력사의 선정",
                definitions: [
                    { term: "1", desc: "GS SHOP은 온라인 또는 오프라인을 통해 협력사로부터 제안 받은 상품에 대해 공정하고 투명한 절차에 따라 상품 및 협력사를 선정한다." },
                    { term: "2", desc: "제1항을 준수하기 위한 구체적 기준 및 절차는 별도 기준인 「상품 선정 및 방송 편성 기준과 절차」에서 정한다." },
                ],
            },
            {
                no: "04",
                title: "판매수수료의 결정",
                items:[
                    {num:"1", title:"상품 판매수수료는 협력사와 상호 신뢰의 원칙에 따라 공정하고 투명한 기준에 따라 산정되어야 한다."},
                    {num:"2", title:"GS SHOP은 협력사와의 상품 판매수수료 조건을 정액수수료 형태로 정하고자 하는 경우 대상 상품 및 편성 비율 등을 제한적으로 운영하여야 하며, 중소기업 협력사에 대한 보호 장치를 마련해야 한다."},
                    {num:"3", title:"제1항 및 제2항을 준수하기 위한 구체적 기준 및 절차는 별도의 지침으로 정한다."},
                ]
            },
            {
                no: "05",
                title: "판매촉진행사의 진행 및 비용 분담",
                items: [
                    { num: "1", title: "판매촉진행사는 협력사와 사전에 상호 합의한 후 진행하여야 하며, 진행시 공정거래 관련 법령을 준수하여 진행한다." },
                    { num: "2", title: "제1항을 준수하기 위한 구체적 기준 및 절차는 별도의 지침으로 정한다." },
                ],
            },
            {
                no: "06",
                title: "방송제작비의 분담",
                items: [
                    { num: "1", title: "상품 판매 방송의 제작비는 GS SHOP이 전액 부담함을 원칙으로 한다. 단, 협력사의 요청에 따라 판매전문가, 모델, 협력사가 사전에 제작한 자체 영상물 등을 추가로 사용할 경우 사전 합의를 통해 소요 비용을 분담 할 수 있다." },
                    { num: "2", title: "제1항을 준수하기 위한 구체적 기준 및 절차는 별도의 지침으로 정한다." },
                ],
            },
            {
                no: "07",
                title: "불공정거래행위의 금지",
                items: [
                    {
                        num: "1",
                        title: "GS SHOP은 협력사와의 거래 과정에서 다음 각 호의 사항들을 준수하고, 협력사에 대해 우월적 지위를 남용하여 부당한 강요나 그 밖의 불공정한 거래를 조장하는 행위를 하지 않는다. 이러한 불공정거래행위에 대한 구체적인 기준은 공정거래 관련 법령에서 정한 사항에 따른다.",
                        details: [
                            "1. 서면 계약 체결, 교부, 보존 의무",    
                            "2. 상품 대금의 감액 금지",
                            "3. 상품 판매 대금 지급 의무",
                            "4. 부당한 상품 수령 거부, 지체 금지",
                            "5. 부당한 상품 반품 금지",
                            "6. 판매촉진비용 등의 부당한 강요 금지",
                            "7. 배타적 거래 강요금지",
                            "8. 경영정보 제공 요구 금지",
                            "9. 부당한 경제적 이익 요구 및 수령 금지",
                            "10. 부당한 계약 변경 등 불이익 제공 금지",
                            "11. 보복 조치 금지",
                            "12. 경영활동 간섭 금지",
                        ],
                    },
                    { num: "2", title: "제1항 제5호를 준수하기 위한 구체적 기준은 별도의 지침으로 정한다." },
                    { num: "3", title: "제1항 제8호를 준수하기 위한 구체적 기준은 별도의 지침으로 정한다." },
                    { num: "4", title: "제1항의 내용과 더불어 공정거래위원회가 홈쇼핑 방송 거래 영역에서의 특정한 불공정거래행위에 관하여 규정한 위법성 심사지침 상의 내용을 준수하기 위한 구체적 기준은 별도의 지침으로 정한다." },
                ],
            },
            {
                no: "08",
                title: "이해관계자 거래 배제",
                items: [
                    { num: "1", title: "협력사 임직원 등이 GS SHOP 임직원의 직계가족, 친인척 등 이해관계자인 경우, GS SHOP은 관련 임직원이 해당 협력사의 상품 선정 및 거래 조건 결정 절차 등에 직·간접적으로 관여하는 것을 금지한다." },
                    {
                        num: "2",
                        title: "제1항의 이해관계자의 기준은 다음 각 호와 같다.",
                        details: [
                            {
                                text: "민법 제777조에 의거한 친족",
                                children: [
                                    "가. 8촌 이내의 혈족",
                                    "나. 4촌 이내의 인척 (인척의 범위는 민법 제769조를 따름)",
                                    "다. 배우자",
                                ],
                            },
                            "2. GS SHOP에 근무 이력이 있는 자",
                            "3. GS 그룹 계열사 관계자",
                        ],
                    },
                    { num: "3", title: "제1항에도 불구하고 협력사 임직원 등과 이해관계 있는 임직원이 협력사의 상품 선정 및 거래 조건 결정 절차 등에 관여한 것으로 밝혀진 경우 관련 임직원을 배제한 상태에서 상품 선정 및 거래 조건을 재검토한다." },
                ],
            },
            {
                no: "09",
                title: "특정 협력사의 독점 방지",
                items: [
                    {
                        num: "1",
                        title: "GS SHOP은 유통단계 축소를 통한 중소기업 보호를 위해 제조사 직접 납품을 원칙으로 한다. 단, 제조사가 물류, A/S 접수 및 처리 등 통상적으로 납품에 필요한 행위를 수행할 능력을 갖추지 못하여 이를 대행할 협력사(이하 ‘대행 협력사’)를 통하여 입점하고자 할 경우에는 예외로 한다.",
                    },
                    { 
                        num: "2", 
                        title: "제1항의 단서와 관련하여 GS SHOP은 특정 대행 협력사가 납품을 독점하지 않도록 하고, 동일 상품에 대해 복수의 대행 협력사의 제안이 있을 경우에는 협력사의 선정에 관한 기준에 입각하여 공정하고 투명한 경쟁을 통해 협력사를 선정한다." 
                    },
                ],
            },
            {
                no: "10",
                title: "상품 판매 중단 등 기준",
                items: [
                    { num: "1", title: "GS SHOP은 협력사의 상품 판매 중단, 협력사와의 거래를 중단 또는 종료하려는 경우 그 사유 및 절차를 명확히 정하고 이를 준수하여야 하며, 그 과정에서 협력사에게 부당한 피해가 발생하지 않도록 노력하여야 한다." },
                    { num: "2", title: "제1항의 구체적 사유 및 절차는 별도 기준인 「상품 선정 및 방송 편성 기준과 절차」에서 정한다." },
                ],
            },
            {
                no: "11",
                title: "신고, 불만 접수 및 처리",
                items: [
                    { num: "1", title: "GS SHOP은 협력사와의 거래 중 발생한 협력사의 민원과 불만을 해소할 수 있도록 최선을 다하고 재발 방지를 위해 노력해야 한다." },
                    { num: "2", title: "협력사는 GS SHOP 임직원이 이 기준 및 부속 지침을 위반하거나 GS SHOP과의 거래 중 불공정한 처우 등으로 인해 불만이 발생한 경우, 공식 홈페이지 또는 투명거래시스템 등에서 제공하는 신고 채널(레드휘슬 등)을 통해 위반 사항을 신고하거나 불만 사항을 접수할 수 있다." },
                    { num: "3", title: "GS SHOP은 제2항에 따라 접수된 신고 건에 대해 GS SHOP의 감사업무담당부서, 법무 또는 컴플라이언스업무 담당부서 등(이하 ‘감사업무 담당부서 등’)의 실사 및 감사를 통해 사실 관계를 신속히 확인하여야 한다." },
                    { num: "4", title: "GS SHOP은 사실 관계에 대한 조사가 종료되면, 해당 협력사에 조사된 사실 관계, 관련 임직원에 대한 제재 조치, 협력사 피해 구제책, 재발 방 지 대책 등을 포함한 신고 사건 처리 결과를 통보해야 한다." },
                    { num: "5", title: "GS SHOP은 이 조에 따라 협력사의 신고 업무를 처리하는 과정이나 그 이후에도 협력사 및 협력사 관계자의 정보와 인적 사항 등을 비밀 정보로 보호하고, 협력사가 신고로 인해 부당하게 차별 대우를 받거나 거래 중단 등의 보복 조치가 발생하지 않도록 해야 한다." },
                ],
            },
            {
                no: "12",
                title: "제재",
                items: [
                    { num: "1", title: "GS SHOP의 감사업무 담당부서 등은 협력사의 신고를 통해 또는 직권으로 GS SHOP 임직원이 이 기준, 공정거래 관련 법령, 윤리규범 및 실천지침, 기타 사규 등을 위반한 사실을 인지한 경우 즉시 해당 임직원의 위반 행위를 조사하여야 하고, 사실로 확인된 경우 윤리위원회에 보고하여야 하며, 해당 위원회에서 해당 임직원에 대한 제재 여부 및 수준을 최종 결정한다." },
                    { num: "2", title: "GS SHOP은 임직원의 위반 행위가 사기, 횡령, 배임, 뇌물수수, 부정청탁 및 금품수수 등에 해당하여 형사 책임을 부담하여야 하는 사안인 경우 객관적인 사실 관계의 조사 및 재발 방지 등을 위해 해당 임직원을 수사기관에 형사 고발 조치할 수 있다." },
                ],
            },
            {
                no: "부속지침",
                title: "",
                addendumItems: [
                    "지침1. 거래조건 결정 기준과 절차",
                    "지침2. 정액수수료 방송 운영 기준과 절차",
                    "지침3. 판매촉진행사 진행 기준과 절차",
                    "지침4. 방송제작비 등 분담 기준과 절차",
                    "지침5. 직매입 상품 등의 반품 기준과 절차",
                    "지침6. 경영정보 제공 요구 금지 기준",
                    "지침7. 홈쇼핑 불공정거래 행위에 대한 위법성 심사 지침 준수 기준",
                ],
                addendumText: "부칙(2018.04.01.)<br />제1조 (시행일)<br />이 기준은 2016. 5. 9. 제정, 시행한다.<br />이 기준은 2017. 1. 1. 개정, 시행한다.<br />이 기준은 2018. 8. 2. 개정, 시행한다.<br />이 기준은 2020. 12. 30. 개정, 시행한다. <br />이 기준은 2021. 11. 15. 개정, 시행한다.<br />이 기준은 2025. 8. 1. 개정, 시행한다.",
            },
        ],
        FairTradeHomeShoppingTermsSections: [
            {
                no: "01",
                title: "목적",
                lead: "이 지침은 상위 기준인 「협력사와의 공정한 거래를 위한 기준과 절차」에서 정한 사항 중 협력사와의 거래 조건 결정 기준 및 절차에 관한 세부적인 준수 사항을 제시함으로써, 판매수수료 등 거래 조건의 결정 과정에서 협력사가 주식회사 지에스리테일(이하 ‘GS SHOP’)로부터 정당하고 공정한 거래환경을 제공받을 수 있도록 하고, GS SHOP과 협력사가 지속적으로 상호 협력하는 관계를 구축하기 위해 작성한 것이다.",
            },
            {
                no: "02",
                title: "기본 원칙",
                items: [
                    { num: "1", title: "GS SHOP 임직원은 협력사와의 상담 또는 거래 과정에서 항상 이 지침을 숙지하고 준수하여야 한다." },
                    { num: "2", title: "GS SHOP 임직원은 이 지침 외에도 협력사와의 거래에 있어 「독점규제 및 공정거래에 관한 법률」, 「대규모유통업에서의 거래 공정화에 관한 법률」 등 공정거래 관련 법령에 규정된 사항을 엄격히 준수하여야 한다." },
                    { num: "3", title: "이 지침은 GS SHOP을 통해 방송을 진행하는 협력사 및 해당 협력사와의 거래에 한하여 적용하기로 한다." },
                    { num: "4", title: "이 지침은 공식 홈페이지(http://www.gsretail.com) 또는 GS SHOP 투명거래시스템(http://withgs.gsshop.com) 게시판 등을 통해 공지하고, 협력사의 GS SHOP 방송을 위한 개별 입점 상담 시에도 공개함을 원칙으로 한다." },
                    { num: "5", title: "GS SHOP은 협력사 교육을 통하여 이 지침을 지속적으로 고지하고 공유하기로 한다." },
                    { num: "6", title: "GS SHOP은 동종의 상품군에서는 협력사가 대기업 또는 중소기업이라는 이유로 판매수수료 등을 포함한 어떠한 거래 조건의 차별도 두지 아니한다." },
                ],
            },
            {
                no: "03",
                title: "협의 절차",
                items: [
                    { num: "1", title: "GS SHOP은 온라인 또는 오프라인을 통해 협력사로부터 제안 받은 상품에 대해 별도 기준인 「상품선정 및 방송편성 기준과 절차」에 따라 GS SHOP 의 방송을 위한 상품을 선정한다." },
                    { num: "2", title: "제1항에 따른 기준에 부합된 상품에 대해서는 품질 안전 담당부서를 통해 상품군별로 정해진 지침에 의거한 품질 검사를 거쳐야 한다." },
                    { num: "3", title: "품질 검사 합격 후에는 협력사와 상품 구성, 판매가 등 방송 대상 상품의 판매 조건에 대해 구체적으로 협의해야 한다." },
                    { num: "4", title: "방송 10~5일 전에는 협력사와 GS SHOP의 MD, PD가 상품 정보를 공유하고, 상호 간의 판매수수료, 공급 수량 등 거래 조건을 구체적으로 협의 해야 한다." },
                    { num: "5", title: "방송 5일 전까지 협력사와 GS SHOP의 MD, PD가 모여 방송 진행 컨셉 등을 협의하고, 최종 판매수수료, 공급 수량 등 거래 조건을 확정한다." },
                    { num: "6", title: "담당 MD 등은 협력사와 최종 합의된 내용에 대해서는 내부 전결 규정에 의거하여 보고하고 최종 결재를 득한다." },
                    { num: "7", title: "판매수수료 등에 대해서는 상호 이익이 될 수 있도록 협력사와 충분한 협의 절차를 진행하고 합리적으로 산정되어야 하며, 부당하게 일방에 의해 결정되거나 정당한 사유 없이 결정된 판매수수료 등의 거래 조건을 변경해서는 아니 된다." },
                ],
            },
            {
                no: "04",
                title: "계약 체결 절차",
                definitions: [
                    { term: "1", desc: "GS SHOP은 계약 체결 전이라도 상호 협의된 사항에 대해서는 상호 신뢰 원칙에 따라 준수하여야 한다. 단, 협력사에게 계약 체결 및 서면 교부 이전에 협력사로 하여금 상품을 제조·주문하게 하거나 납품할 상품을 위한 설비·장치를 준비하도록 요구하여서는 아니 된다." },
                    { term: "2", desc: "GS SHOP은 상호 간에 최종 합의된 판매수수료 등의 거래 조건을 기재한 방송 조건에 관한 합의서를 전자계약 형태로 체결한 후 투명거래시스템으로 교부한다. 계약 체결 및 교부는 원칙적으로 방송일 기준 3일 전까지 완료되어야 하고, 합의서의 교부는 계약 체결 즉시 이행한다." },
                    { term: "3", desc: "제2항에도 불구하고 현저한 시황 변동 등 불가피한 사유가 있는 경우에는 방송 전까지 계약 사항을 변경할 수 있으나 사전에 협력사와 합의되어야 하며 협력사로부터 변경 의사 및 사유를 확인하기 위한 신청서를 받아야 한다." },
                    { term: "4", desc: "제3항에 따른 계약 사항 변경 변경 시 담당 MD는 변경 합의 전 담당 부서장에게 변경 사실 및 사유를 보고하고 담당 부서장은 그 사유나 변경 절차의 타당성을 검토하여야 하며, 변경 계약을 체결하는 즉시 협력사에 변경된 합의서를 교부하여야 한다." },
                    { term: "5", desc: "계약의 내용에는 거래와 관련하여 분쟁의 대상이 될 수 있는 다음 각 호의 사항들을 포함하여야 한다.",
                      details:[
                            "1. 거래형태, 거래품목 및 위탁 판매수량, 거래가격, 거래기간, 납품조건, 대금지급방법, 대금결제기간 및 판촉비용의 부담 여부 및 부담 조건, 반품 조건, 판매수수료, 판매장려금 부담 여부 및 부담 조건",
                            "2. 판매방송일정, 방송제작비용, 상품전문가/모델 등의 출연 여부, 일정 및 출연 비용 부담 여부 및 부담 조건, 소비자의 주문 및 반품 상품에 대한 배송 조건, 소비자의 구매 취소 및 반품 상품의 처리 조건 등"
                        ]
                      },
                    { term: "6", desc: "GS SHOP은 협력사와의 계약이 끝난 날부터 5년간 양 당사자 사이의 거래에 관한 서류를 보존하여야 한다." },
                ],
            },
            {
                no: "05",
                title: "계약 이행 절차",
                lead: "직매입거래에서 “회사”는 “파트너사”로부터 납품받은 상품에 대한 소유권을 취득하며, 상품판매에 대한 권한을 가짐과 동시에 판매부진에 따른 재고책임을 부담하므로 다음과 같은 유형의 장려금은 장려금으로 허용하지 않는다.",
                items: [
                    { num: "1", title: "GS SHOP은 협력사의 계약 합의 여부를 확인한 후 합의된 거래 조건에 따라 방송 및 판매를 진행한다." },
                    { num: "2", title: "MD는 방송 후 계약 내용대로 대금이 정산되었는지 여부를 반드시 확인하여야 한다. 당초 계약 내용과 달리 대금이 정산되었을 경우에는 해당 MD는 지체 없이 협력사에 통지하고 계약 내용대로 수정 이행해야 한다." },
                    { num: "3", title: "GS SHOP은 계약서에 기재된 판매수수료율 및 거래 조건을 준수하고 어떠한 경우에도 방송 중 또는 그 이후에 거래 조건을 변경하거나 소급 적용하지 않는다." },
                    { num: "4", title: "GS SHOP은 협력사와 사전에 합의하지 않거나 계약서에 정하지 않은 각종 명목의 수수료나 비용을 협력사에게 요구하거나 일절 부담시키지 않으며, 그 밖에 경제적 불이익을 전가하지 않는다." },
                ],
            },
            {
                no: "06",
                title: "판매수수료 결정",
                items: [
                    { num: "1", title: "GS SHOP은 협력사와 다음 각 호의 사항을 고려하여 협력사 상품의 판매수수료를 협의·결정한다.",
                    details:[
                            "1. 품질",
                            "2. 유사상품(군)의 평균 판매수수료율",
                            "3. 협력사의 매출 추이, 상품 카테고리의 시황 및 유통채널 내 경쟁 상황",
                            "4. 예상 판매실적 및 GS SHOP 전체 매출에의 기여도",
                            "5. A/S 및 배송 등 관련 비용(설치상품인 경우 설치비용 등)",
                            "6. 거래 이행의 안정성과 신뢰도",
                            "7. 브랜드 인지도",
                            "8. 시장성",
                            "9. 기존 상품과의 차별성",
                            "10. 기타 상품의 특성에 따른 고려 사항"
                        ]
                     },
                    { num: "2", title: "판매수수료는 협력사와 상호 신뢰의 원칙 하에 공정하고 투명한 절차에 따라 산정되어야 한다." },
                    { num: "3", title: "협력사와의 공정거래협약 등 상생 협력을 위해 해당 상품이 다음 각 호에 해당하는 경우에는 협력사의 이익 등을 우선적으로 고려함을 원칙으로 한다.",
                        details:[
                            "1.「중소기업기본법」 제2조 및 동법 시행령 제3조에 의거한 중소기업이 제조하거나 공급·판매하는 상품",
                            "2. 장애인/노인 등 사회적 소외계층이 공급하는 상품 또는 소외계층을 주 대상으로 하는 상품",
                            "3. 농축산어민이 최종 생산자이거나 농축산어민이 직접 공급하는 상품"
                        ]
                     },
                ],
            },
            {
                no: "07",
                title: "정액수수료 운영",
                items: [
                    { num: "1", title: "정액수수료라 함은 「방송법」 시행령 별표2의 3에 규정된 바와 같이 상품 판매액과 관계 없는 수익배분방식(상품 판매액과 관계 없는 수익배분방식과 그 외의 수익배분방식을 혼합한 수익배분방식을 포함)을 말한다." },
                    { num: "2", title: "정액수수료를 적용하는 상품의 유형, 편성 시간과 비율, 중소기업 협력사의 정액수수료로 인한 피해 방지 방안 등 정액수수료 방송의 구체적 운영 기준은 별도의 지침으로 정한다." },
                ],
            },
            {
                no: "08",
                title: "불공정거래행위 금지",
                lead: "GS SHOP은 협력사와의 거래 조건을 결정함에 있어 이 지침에 의무 또는 금지 사항으로 명시되어 있지 아니하더라도 협력사에 대해 거래상 지위를 남용하여 불이익을 주거나 그 밖에 불공정한 거래 조건을 강요하는 행위를 하여서는 아니 된다."
            },
            {
                no: "09",
                title: "신고, 불만 접수 및 처리",
                lead: "협력사는 GS SHOP이 협력사와 거래 조건을 협의·결정하는 과정에서 이 지침을 위반하거나 기타 거래 조건의 결정과 관련하여 GS SHOP에 불만이 발생한 경우 GS SHOP에 위반 사항을 신고하거나 불만을 접수할 수 있고, 이 경우 GS SHOP은 상위 기준인 「협력사와의 공정거래를 위한 기준과 절차」에 규정된 절차에 따라 처리하여야 한다."
            },
            {
                no: "10",
                title: "제재",
                lead: "GS SHOP 임직원이 이 지침에서 규정한 사항을 위반한 사실이 확인된 경우 상위 기준인 「협력사와의 공정거래를 위한 기준과 절차」에 규정된 절차에 따라 해당 임직원에 대한 제재 절차를 진행하여야 한다."
            },
            {
                no: "부칙",
                title: "",
                addendumText: "부칙(2018.04.01.)<br />제1조 (시행일)<br />이 기준은 2016. 5. 9. 제정, 시행한다.<br />이 기준은 2017. 1. 1. 개정, 시행한다.<br />이 기준은 2018. 8. 2. 개정, 시행한다.<br />이 기준은 2020. 12. 30. 개정, 시행한다. <br />이 기준은 2021. 11. 15. 개정, 시행한다.<br />이 기준은 2025. 8. 1. 개정, 시행한다.",
            },
        ],
        FairTradeHomeShoppingFixedCommissionSections: [],
        FairTradeHomeShoppingPromotionSections: [],
        FairTradeHomeShoppingProductionCostSections: [],
        FairTradeHomeShoppingReturnSections: [],
        FairTradeHomeShoppingManagementInfoSections: [],
        FairTradeHomeShoppingGuidelineComplianceSections: [],
        FairTradeHomeShoppingProductSelectionSections: [],
        FairTradeHomeShoppingIntangibleProductSections: [],
        FairTradeHomeShoppingLinkedProgrammingSections: [],
        // 1. 파트너사 선정 및 운용기준
        FairTradePartnerStandardSections: [
            {
                no: "01",
                title: "목적",
                lead: "이 기준은 주식회사 지에스리테일(이하“회사”라 함)과 동반자적 입장에서 파트너사(이하“파트너사”라 함) 선정 및 운용과정에 대한 투명성과 공정성을 제고하여 합리적이며 공정한 거래질서를 확립시키고, 소비자에게 안전한 상품을 제공하는 사회적 책임을 다함에 목적이 있다.",
            },
            {
                no: "02",
                title: "준수의무",
                items: [
                    { num: "1", title: "“회사”의 임직원은 “파트너사”와의 거래에 있어서 이 기준 이외에도 『독점규제 및 공정 거래에 관한 법률』과 『대규모유통업에서의 거래 공정화에 관한 법률(이하 ‘대규모유통업법’ 이라 함)』 등 관계 법령을 엄격히 준수하여야 한다." },
                    { num: "2", title: "이 기준은 “파트너사”가 상시 확인할 수 있도록 “회사” 홈페이지 등에 게시하고, 내부직원에 대해서는 정기적으로 교육하여 준수할 수 있도록 한다." },
                ],
            },
            {
                no: "03",
                title: "용어의 정의",
                definitions: [
                    { term: "1", desc: "“파트너사”란 “회사”와 상품 공급 거래 등의 대상업체로 예정되거나, 거래중인 사업자를 의미한다." },
                    { term: "2", desc: "“파트너사Pool”이란 “회사”가 정한 기준에 따라 마스터에 등록하여 관리·운용하는 “파트너사” 그룹을 의미한다." },
                    { term: "3", desc: "“파트너사 선정”은 “회사”의 “파트너사Pool”에 등록하는 것을 의미한다." },
                    { term: "4", desc: "“파트너사 운용”이란 “회사”가 “파트너사”로 선정 및 등록된 업체에 대한 거래 개시 부여, 등록 취소 등 “파트너사Pool”을 일정한 기준에 따라 관리하는 것을 의미한다." },
                ],
            },
            {
                no: "04",
                title: "파트너사 선정기준",
                lead: "“회사”는 “파트너사” 선정 시 거래 개시를 위한 선정 기준에 공정성을 기하여야 하며, 고객 및 제3자에 대한 신뢰 및 건전성을 확보하기 위해 아래의 사항을 기준으로 “파트너사”를 선정한다.",
                criteria: [
                    { term: "1. 전문성", details: ["가. 상품개발력", "나. 가격경쟁력", "다. 판촉능력", "라. 업력"] },
                    { term: "2. 공신력", details: ["가. 신용평가", "나. 현금흐름", "다. 담보능력", "라. 거래실적"] },
                    { term: "3. ESG 기준", details: ["가. 환경", "나. 안전보건", "다. 노동 및 인권", "라. 윤리규범", "마. 반부패/준법경영"] },
                    { term: "4. 기타 상품 특성에 따른 기준(위생, 인증, 배송능력 등)", desc: "" },
                ],
            },
            {
                no: "05",
                title: "파트너사 신청절차",
                lead: "“파트너사” 선정절차는 다음 각 호의 순서에 따라 공정하고 투명하게 진행한다.",
                items: [
                    { num: "1", title: "1. “회사” 홈페이지(www.gsretail.com) 입점상담 페이지를 통해 입점신청서, 기업소개서, 상품제안서 등 서류를 첨부하여 상담 신청" },
                    { num: "2", title: "2. 상담 신청 접수일로부터 10 영업일 이내에 서류심사 결과 통보" },
                    { num: "3", title: "3. 서류심사 통과 시, 상담일정 협의하여 상담 진행" },
                    { num: "4", title: "4. 제출서류, 상담결과 등을 공정하게 정량 평가하여 최종 입점 여부 결정" },
                    { num: "5", title: "5. 입점이 결정된 “파트너사”에게 거래 약정 체결에 필요한 사항과 절차 및 일정 안내" },
                    { num: "6", title: "6. 상호 협의 하에 계약서를 작성" },
                ],
            },
            {
                no: "06",
                title: "거래개시",
                items: [
                    { num: "1", title: "“파트너사”와 공정한 거래를 개시하기 위해서는 거래 관련 제반사항에 대하여 상호 충분한 협의 후 물품공급계약서를 체결하여야 한다." },
                    { num: "2", title: "거래는 물품공급계약서에 기명 날인 또는 서명(전자서명 포함)하여 그 서면(전자문서 포함)을 “파트너사”에 준 때에 개시한다." },
                    { num: "3", title: "“회사”는 계약기간 도중에 거래조건을 변경하지 않는다." },
                    { num: "4", title: "“회사”는 구두발주를 하지 않는다." },
                ],
            },
            {
                no: "07",
                title: "불공정거래행위의 금지",
                items: [
                    {
                        num: "1",
                        title: "“회사”는“파트너사”와 거래 시 다음 각 호의 사항을 준수하며, 우월적인 지위를 이용하여 “파트너사”에게 불공정한 거래를 강요하지 않는다. <br />이 기준은 공정거래 관련 법령에 정한 사항에 따른다.",
                        details: [
                            "1. 서면계약 체결 의무",    
                            "2. 상품대금 감액금지",
                            "3. 상품판매대금 지급의무",
                            "4. 부당한 상품 수령 거부 및 수령 지체 금지",
                            "5. 부당한 상품 반품 금지",
                            "6. 판촉비용 등의 부당 강요 금지",
                            "7. 배타적 거래 강요금지",
                            "8. 경영정보 제공 요구 금지",
                            "9. 경영활동 간섭 금지",
                            "10. 부당한 경제상의 이익 수령 금지",
                            "11. 부당한 계약 변경 등 불이익 제공 금지",
                            "12. “파트너사”에게 특정 벤더를 지정하여 거래하도록 요구하는 행위 금지",
                            "13. “파트너사”에게 특정 벤더를 이용하지 않으면 불이익을 주는 행위 금지",
                        ],
                    },
                    { num: "2", title: "“회사”는 “파트너사”의 부득이한 사정을 제외하고는 직매입을 원칙으로 한다." },
                    { num: "3", title: "최저임금 인상, 원재료 가격 상승 등으로 납품하는 상품의 공급원가가 변동되어 납품가격 조정이 불가피한 경우에는 “파트너사”는 “회사”에 납품가격의 조정을 신청할 수 있다." },
                    { num: "4", title: "“파트너사”는 “회사”의 담당MD가 불공정한 거래를 요구할 경우에는 “회사”의 홈페이지 내 정도경영 제보 페이지에 제보를 할 수 있다." },
                    { num: "5", title: "“파트너사”에게 부당하게 재고 부담을 전가하는 판매분 매입 거래는 원칙적으로 금지된다. 다만, 상품의 특성, “파트너사”의 필요 등을 고려하여 “파트너사”에게 부당하게 재고부담을 전가하기 위한 목적이 아니라고 인정되는 경우에는 예외적으로 인정될 수 있다." },
                ],
            },
            {
                no: "08",
                title: "이해관계자 거래 배제",
                items: [
                    { num: "1", title: "“파트너사” 임직원 등이 “회사” 임직원의 친인척 등 이해관계자인 경우 “회사”는 관련 임직원이 해당 “파트너사”의 상품 선정 및 거래조건 협상 절차 등에 직·간접적으로 관여하지 않도록 배제한다." },
                    {
                        num: "2",
                        title: "제1항의 이해관계자의 기준은 아래와 같다.",
                        details: [
                            {
                                text: "1. 민법 제777조에 따른 다음 각 목의 친족",
                                children: [
                                    "가. 8촌 이내의 혈족",
                                    "나. 4촌 이내의 인척(인척의 범위는 민법 제769조에 따름)",
                                    "다. 배우자",
                                ],
                            },
                            "2. “회사”에 근무이력이 있는 임직원 등 기존 퇴사자",
                            "3. GS그룹 계열사 관계자",
                        ],
                    },
                    { num: "3", title: "“최저임금 인상, 원재료 가격 상승 등으로 납품하는 상품의 공급원가가 변동되어 납품가격 조정이 불가피한 경우에는 “파트너사”는 “회사”에 납품가격의 조정을 신청할 수 있다." },
                    { num: "4", title: "“파트너사”는 “회사”의 담당MD가 불공정한 거래를 요구할 경우에는 “회사”의 홈페이지 내 정도경영 제보 페이지에 제보를 할 수 있다." },
                    { num: "5", title: "“파트너사”에게 부당하게 재고 부담을 전가하는 판매분 매입 거래는 원칙적으로 금지된다. 다만, 상품의 특성, “파트너사”의 필요 등을 고려하여 “파트너사”에게 부당하게 재고부담을 전가하기 위한 목적이 아니라고 인정되는 경우에는 예외적으로 인정될 수 있다." },
                ],
            },
            {
                no: "09",
                title: "거래 종료",
                items: [
                    {
                        num: "1",
                        title: "“회사”와 “파트너사”는 다음 각 호의 어느 하나에 해당하는 경우 물품공급 계약을 중단 혹은 종료할 수 있다.",
                        details: [
                            "1. 양 당사자의 서면상 합의가 있는 경우",
                            "2. “회사” 또는 “파트너사”가 발행한 어음·수표가 지급 거절되거나, “회사” 또는 “파트너사” 자신에 의한 회생·파산 절차의 신청이 있거나, 채권자의 신청에 의해 동 절차가 개시된 경우",
                            "3. 기업구조조정촉진법상 부실징후기업으로 판단되어 이에 관한 절차가 개시된 경우",
                            "4. “회사” 또는 “파트너사”의 주요 재산(이 계약에 따라 “파트너사”가 “회사”에 대하여 가지는 납품대금 청구 채권을 포함한다)에 대하여 강제경매 등이 실행되어 더 이상의 이 계약 이행이 곤란하게 된 경우",
                            "5. 관계기관에 의하여 영업정지, 영업허가취소 등의 처분을 받은 경우",
                            "6. “파트너사”가 납품한 상품이 관계법령에 저촉되거나, “파트너사”가 라이선스권자와 체결한 라이선스계약이 종료되어 해당 상품의 납품 또는 판매가 불가능하게 된 경우",
                            "7. 물품공급계약에 명시된 브랜드나 거래 품목의 생산이 중단 또는 종료된 경우",
                            {
                                text: "8. 기타 다음 각 목의 예와 같이 원활한 계약이행을 현저히 저해하는 사유가 발생한 경우",
                                children: [
                                    "가. 공급상품의 생산이 장기간 중단되거나 종료된 경우",
                                    "나. 원산지 표기 오류인 경우",
                                    "다. “파트너사”의 관리소홀로 인한 품질 불량이 3회 이상 적발이 될 경우",
                                    "라. 상품의 판매실적이 현저히 저조한 경우",
                                    "마. “회사” 또는 “파트너사”가 물품공급계약의 중요한 사항을 위반하여 상대방이 14일 이상의 기간을 정하여 시정을 요구하였으나 시정이 이루어지지 않은 경우",
                                    "바. 기타 물품공급계약서 기재된 계약의 해지 및 해제의 사유에 해당할 경우",
                                ],
                            },
                        ],
                    },
                    { num: "2", title: "제1항에 의하여 거래가 중지 또는 종료가 되었다 하더라도 “파트너사”로부터 공급받는 물품에 대해서는 반품을 하여서는 안 된다. 단, 법령에서 허용하는 반품 사유에 해당하는 경우에는 예외로 한다." },
                ],
            },
            {
                no: "10",
                title: "거래 종료 절차",
                items: [
                    { num: "1", title: "“회사”가 “파트너사”와의 거래를 종료할 경우에는 서면으로 종료에 대한 명확한 사유를 기재하여 전달하여야 하며, 계약기간 만료로 인한 거래종료의 경우 계약기간 만료일로부터 30일 전까지 계약갱신 거절사유를 구체적으로 적시하여 서면으로 통지하여야 한다." },
                    { num: "2", title: "“회사”는 “파트너사”의 귀책 사유로 인하여 거래를 종료할 경우에는 “파트너사”가 소명할 수 있는 기회를 주어야 한다." },
                    { num: "3", title: "“회사”와 “파트너사”는 거래 종료에 따른 대금 정산 등의 절차를 성실히 이행한다." },
                ],
            },
            {
                no: "11",
                title: "불공정행위 접수 및 처리",
                items: [
                    { num: "1", title: "“파트너사”는 “회사”의 임직원이 이 기준을 위반하여 불공정한 처우에 따른 불이익을 받았을 경우 “회사”의 홈페이지 내 정도경영 제보 페이지에 제보할 수 있으며, “회사”는 제보 내용을 규정된 절차에 따라 처리하여야 한다." },
                    { num: "2", title: "“회사”는 “파트너사”의 제보 업무를 처리하는 과정에서 “파트너사”관련 정보와 인적사항 등을 보호하며, 제보로 인하여 부당하게 차별 대우를 받거나 거래 중단 등의 행위가 발생되지 않도록 해야 한다." },
                    { num: "3", title: "“회사”는 “파트너사”와 거래 중 발생한 제반 민원사항에 대한 재발방지를 위하여 최선을 다한다." },
                ],
            },
            {
                no: "12",
                title: "제재",
                items: [
                    { num: "1", title: "“회사”의 임직원은 업무를 수행함에 있어 이 기준을 준수하여야 하며, 당사자의 고의 또는 중대한 과실로 이 기준을 위반한 사실이 확인된 경우에는 “회사”의 윤리 규범 등에 따라 제재조치를 진행하여야 한다." },
                    { num: "2", title: "“회사”의 임직원이 사기, 횡령, 배임, 금전 수수, 부정 청탁 등에 해당할 경우 “회사”는 해당 임직원을 형사고발할 수 있다." },
                ],
            },
            {
                no: "부칙",
                title: "",
                addendumText: "부칙(2018.04.01.)<br />이 기준은 2018.04. 01. 제정·시행한다.<br /><br />부칙(2024.06.11.)<br />이 기준은 2024.06.11. 개정·시행한다.",
            },
        ],
        // 2. 판매장려금 결정, 변경에 대한 기준
        FairTradeSalesIncentiveSections: [
            {
                no: "01",
                title: "목적",
                lead: "이 기준은 주식회사 지에스리테일(이하 “회사”라 한다)과 파트너사 등(이하 “파트너사”라 한다) 간에 거래관계에 있어 판매장려금의 합리적 인정범위에 대한 판단 기준을 명확히 함으로서 불공정한 행위를 예방하고, 관련법령을 준수하여 “파트너사”와 공정한 거래관계를 확립하고자 함을 목적으로 한다.",
            },
            {
                no: "02",
                title: "준수의무",
                items: [
                    { num: "1", title: "“회사”의 임직원은 “파트너사”와의 거래에 있어서 이 기준 이외에도 『대규모유통업에서의 거래공정화에 관한 법률(이하 ‘대규모유통업법’이라 함)』과 『대규모유통업 분야에서 판매장려금의 부당성 심사에 관한 지침』 등 관계 법령을 엄격히 준수하여야 한다." },
                    { num: "2", title: "이 기준은 “파트너사”가 상시 확인할 수 있도록 “회사” 홈페이지 등에 게시하고, 내부직원에 대해서는 정기적으로 교육하여 준수할 수 있도록 한다." },
                ],
            },
            {
                no: "03",
                title: "기본원칙",
                items: [
                    { num: "1", title: "판매장려금은 “파트너사”가 “회사”에게 판매장려금을 지급하여 상품에 대한 소비자 수요를 늘려 판매를 증진시킴으로써, 판매성과에 대한 이익을 공유하는 것을 원칙으로 한다." },
                    { num: "2", title: "판매장려금의 약정은 “회사”와 “파트너사” 모두의 이익에 기여하여야 하며 판매장려금 지급 대상 기간 중 “회사”가 받은 판매장려금액과 해당 기간 중 “파트너사”의 납품액 증가로 인한 이익 간에는 합리적인 비례관계가 있어야 한다." },
                ],
            },
            {
                no: "04",
                title: "용어의 정의",
                definitions: [
                    { term: "1", desc: "“판매장려금”이란 직매입거래에서 상품의 판매촉진을 위하여 연간거래 물품공급계약에 명시된 조건에 따라 “파트너사”가 “회사”에 지급하는 경제적 이익을 의미한다." },
                    { term: "2", desc: "“성과장려금”이란 “회사”와 “파트너사”가 합의하여 전년동기 대비 납품액(납품단가*납품물량) 신장목표를 달성하였을 때, “회사”가 “파트너사”로부터 지급받는 형태의 판매장려금을 의미한다." },
                    { term: "3", desc: "“신상품장려금”이란 “회사”가 “파트너사”의 신상품을 매장에 진열해 주는 대가로 “파트너사”로부터 받는 형태의 판매장려금을 의미한다. 이 때 신상품인지의 여부는 업계의 거래관행 등을 고려하여 출시 후 6개월 이내의 상품을 원칙으로 하며, 실질적으로 기존 상품과 상품코드가 바뀐 것에 불과한 리뉴얼 상품은 신상품에 해당되지 않는다." },
                    { term: "4", desc: "“진열장려금”이란 “회사”가 “파트너사”의 상품을 매출증가 가능성이 큰 매대에 진열해주는 서비스에 대한 대가로 “파트너사”로부터 받는 형태의 판매장려금을 의미한다." },
                ],
            },
            {
                no: "05",
                title: "허용되지 않는 판매장려금",
                lead: "직매입거래에서 “회사”는 “파트너사”로부터 납품받은 상품에 대한 소유권을 취득하며, 상품판매에 대한 권한을 가짐과 동시에 판매부진에 따른 재고책임을 부담하므로 다음과 같은 유형의 장려금은 장려금으로 허용하지 않는다.",
                items: [
                    { num: "1", title: "1. “기본장려금”이란 “회사”가 “파트너사”로부터 “파트너사”의 매출증가여부와 상관없이 상품매입금액의 일정비율 또는 일정금액을 받는 형태의 장려금을 의미한다." },
                    { num: "2", title: "2. “무반품장려금”이란 “회사”가 직매입한 상품을 반품하지 않는 것을 조건으로 “파트너사”로부터 수취하는 장려금을 의미한다." },
                    { num: "3", title: "3. “시장판매가격 대응장려금”이란 “회사”가 “파트너사”로부터 기 납품받은 상품의 판매가격을 인하하기 위한 목적으로 받는 형태의 장려금을 의미한다." },
                    { num: "4", title: "4. “재고소진 장려금”이란 “회사”가 직매입한 상품의 재고를 소진시킬 목적으로 재고분의 일정 비율에 해당하는 금액을 “파트너사”로부터 받는 형태의 장려금을 의미한다." },
                    { num: "5", title: "5. “폐점장려금”이란 “회사”가 점포 폐점 시 덤핑, 가격할인 등을 통해 남아 있는 상품을 소진하는 과정에서 발생하는 비용을 보전하기 위해 “파트너사”로부터 받는 형태의 장려금을 의미한다." },
                ],
            },
            {
                no: "06",
                title: "판매장려금의 결정 및 변경",
                items: [
                    { num: "1", title: "“회사”는 상품의 판매촉진을 위하여 “파트너사”와 공정하게 체결한 물품공급계약에 따라 “파트너사”로부터 판매장려금을 수령할 수 있다." },
                    { num: "2", title: "판매장려금은 지급목적에 부합하는 기준에 따라 “회사”와 “파트너사”가 협의를 통하여 물품공급계약 및 개별약정서식에 의해 결정한다." },
                    { num: "3", title: "예측하지 못한 매출액의 급격한 증감 및 시장상황의 변동 등의 사유로 “파트너사”의 요청 또는 “회사”와 “파트너사” 간의 합의가 있을 경우 물품공급계약의 판매장려금 항목을 변경 또는 폐지하거나, 기존 판매장려금의 지급조건을 변경할 수 있다. 이 경우 제2항의 결정 절차와 동일한 방식으로 변경한다." },
                ],
            },
            {
                no: "07",
                title: "판매장려금의 절차적 요건",
                items: [
                    {
                        num: "1",
                        title: "“회사”는 “파트너사”로부터 판매장려금을 수령하는 경우 다음 각 호의 약정사항을 계약 체결 이전에 서면으로 제공하여 사전에 충분히 협의한다.",
                        details: [
                            "1. 판매장려금의 종류 및 명칭",    
                            "2. 판매장려금의 지급목적, 지급시기 및 지급횟수",
                            "3. 판매장려금의 비율 또는 액수",
                            "4. 판매장려금의 결정기준 및 결정절차",
                            "5. 판매장려금의 변경사유, 변경기준 및 변경절차",
                        ],
                    },
                    { num: "2", title: "“회사”와 “파트너사”는 강요에 의한 것이 아닌 자유로운 의사합치에 의해 판매장려금에 관한 약정을 체결한다." },
                    { num: "3", title: "“회사”와 “파트너사”는 판매장려금 약정사항을 연간거래 기본계약 내용에 포함시키고 해당 계약 서면을 날인 후 즉시 교부한다." },
                ],
            },
            {
                no: "08",
                title: "금지행위",
                items: [
                    { num: "1", title: "“회사”가 연간거래 물품공급계약시 약정되지 아니하거나 약정된 범위를 초과하여 판매장려금을 “파트너사”로부터 받는 행위" },
                    { num: "2", title: "“회사”가 판매장려금의 종류 및 명칭, 판매장려금의 지급목적, 지급시기 및 지급횟수, 판매장려금의 비율 또는 액수 등을 구체적으로 기재함이 없이 추후에 개별적으로 판매장려금 약정을 체결할 수 있다고 포괄적으로 규정한 후 수시로 판매장려금을 수취하는 행위" },
                    { num: "3", title: "“회사”가 계약기간 도중 판매장려금률 또는 액수를 “파트너사”의 의사와 무관하게 일방적으로 인상하는 행위" },
                    { num: "4", title: "“회사”가 연간거래 기본계약 체결 시 판매장려금 항목과 비율을 협의 절차없이 일방적으로 정하여 통보하고 판매장려금을 수취하는 행위" },
                    { num: "5", title: "“회사”가 진열장려금과 관련하여 “파트너사”의 해당 상품이 진열될 위치 및 기간, 위치 별 판매장려금률 또는 금액 등 판매장려금 결정 및 변경 기준을 사전에 명확히 구체적으로 규정함이 없이 자신이 정한 규정에 따라 일방적으로 판매장려금을 수취하는 행위" },
                    { num: "6", title: "“회사”의 제안내용을 “파트너사”가 수용하지 않을 경우 거래중단 등 불이익을 받을 수 있음을 직간접적으로 암시하는 등 “파트너사”의 자율적인 의사가 제한된 상태에서 판매장려금 약정을 체결하는 경우" },
                ],
            },
            {
                no: "09",
                title: "불공정행위 접수 및 처리",
                items: [
                    { num: "1", title: "“파트너사”는 “회사”의 임직원이 이 기준을 위반하여 불공정한 처우에 따른 불이익을 받았을 경우 “회사”의 홈페이지 내 정도경영 제보 페이지에 제보할 수 있으며, “회사”는 제보 내용을 규정된 절차에 따라 처리하여야 한다." },
                    { num: "2", title: "“회사”는 “파트너사”의 제보 업무를 처리하는 과정에서 “파트너사”관련 정보와 인적사항 등을 보호하며, 제보로 인하여 부당하게 차별 대우를 받거나 거래 중단 등의 행위가 발생되지 않도록 해야 한다." },
                    { num: "3", title: "“회사”는 “파트너사”와 거래 중 발생한 제반 민원 사항에 대한 재발방지를 위하여 최선을 다한다." },
                ],
            },
            {
                no: "10",
                title: "제재",
                items: [
                    { num: "1", title: "“회사”의 임직원은 업무를 수행함에 있어 이 기준을 준수하여야 하며, 당사자의 고의 또는 중대한 과실로 이 기준을 위반한 사실이 확인된 경우에는 “회사”의 윤리 규범 등에 따라 제재조치를 진행하여야 한다." },
                    { num: "2", title: "“회사”의 임직원이 사기, 횡령, 배임, 금전수수, 부정청탁 등에 해당할 경우 “회사”는 해당 임직원을 형사고발할 수 있다." },
                ],
            },
            {
                no: "부칙",
                title: "",
                addendumText: "부칙(2018.04.01.)<br />이 기준은 2018.04. 01. 제정·시행한다.<br /><br />부칙(2024.06.11.)<br />이 기준은 2024.06.11. 개정·시행한다.",
            },
        ],
        // 3. 판매촉진행사 진행 및 비용분담 기준
        FairTradePromotionCostSharingSections: [
            {
                no: "01",
                title: "목적",
                lead: "이 기준은 주식회사 지에스리테일(이하 “회사”라 한다)과 동반자적 입장에서 파트너사(이하 “파트너사”라 한다)와 판매촉진행사를 진행함에 있어 발생할 수 있는 부당한 행위를 예방하고, 관련 법령을 준수하여 “파트너사”와 공정한 거래 관계를 확립하고자 함을 목적으로 한다.",
            },
            {
                no: "02",
                title: "준수의무",
                items: [
                    { num: "1", title: "“회사”의 임직원은 “파트너사”와의 거래에 있어서 이 기준 이외에도 『독점규제 및 공정거래에 관한 법률』(이하 ‘공정거래법‘이라 함)과 『대규모유통업에서의 거래 공정화에 관한 법률(이하 ‘대규모유통업법’이라 함)』 등 관계 법령을 엄격히 준수하여야 한다." },
                    { num: "2", title: "이 기준은 “파트너사”가 상시 확인할 수 있도록 “회사” 홈페이지 등에 게시하고, 내부직원에 대해서는 정기적으로 교육하여 준수할 수 있도록 한다." },
                ],
            },
            {
                no: "03",
                title: "용어의 정의",
                definitions: [
                    { term: "1", desc: "“판매촉진행사”란 상품에 대한 수요를 늘려 판매를 증진시킬 목적으로 행하는 행사 또는 활동을 의미하며, 세부목적은 다음 각 호와 같다.", details: ["1. 신상품/신규입점상품의 홍보 및 매출확대", "2. 경쟁사의 경쟁상품과 차별화된 추가 혜택 제공을 통한 매출 확대", "3. 관련 상품군 내 해당기간 판촉활동을 통한 매출증대 및 MS(점유율) 확대"] },
                    { term: "2", desc: "“합의서”란 “회사”와 “파트너사”가 합의된 내용을 문서화한 것을 의미한다" },
                    { term: "3", desc: "“판촉부담비율”이란 “회사”와 “파트너사”가 판촉행사에 필요한 비용의 부담 비율을 의미한다." },
                ],
            },
            {
                no: "04",
                title: "판매촉진행사 진행요건",
                items: [
                    { num: "1", title: "판매촉진행사를 진행하고자 할 경우 “회사”는 행사 진행 전 “파트너사”로부터 제안서를 수취하여야 한다." },
                    { num: "2", title: "양 당사자는 판매촉진행사를 하기 위해서 행사시작 최소 15일 이전에 협의를 완료한다." },
                    { num: "3", title: "양 당사자는 판매촉진행사 계획 수립 시 컨셉, 카테고리, 기간, 방법 등을 충분히 협의하여 진행하며, 일방이 정당한 사유 없이 협의에 의해 결정된 판매촉진행사 등의 거래조건을 변경하여서는 안된다." },
                ],
            },
            {
                no: "05",
                title: "판매촉진행사 진행 절차",
                items: [
                    {
                        num: "1",
                        title: "양 당사자는 판매촉진행사 진행 전 다음 각 호의 사항을 기재한 서면에 기명날인 또는 서명하여 약정하고, 기명날인 또는 서명 즉시 그 서면을 각 1부씩 교부한다.",
                        details: [
                            "1. 판매촉진행사명, 성격, 기간",
                            "2. 판매촉진행사를 통하여 판매할 상품의 품목",
                            "3. 판매촉진행사에 소요될 것으로 예상되는 비용의 규모 및 사용내역",
                            "4. 해당 판매촉진행사를 통하여 “회사”와 “파트너사”가 직접적으로 얻을 것으로 예상되는 경제적 이익의 비율",
                            "5. 판매촉진행사에 소요되는 모든 비용의 분담비율 또는 액수",
                        ],
                    },
                    { num: "2", title: "판매촉진행사 진행 여부나 상호 비용 분담 비율 등에 대해서는 상호 이익이 될 수 있도록 “파트너사”와 충분한 협의를 거쳐 합리적으로 산정하여야 하며, 부당하게 일방에 의해 결정되거나 정당한 사유 없이 결정된 판매촉진행사 조건을 변경해서는 아니 된다." },
                    { num: "3", title: "“회사”는 판매촉진행사관련 제반 서류를 “파트너사”와 거래 종결 후 5년간 보존하여야 한다." },
                ],
            },
            {
                no: "06",
                title: "판매촉진행사 계약이행절차",
                items: [
                    { num: "1", title: "판매촉진행사 합의 후 “회사”의 담당MD는 판매촉진행사가 합의된 내용으로 진행이 되고 있는지 확인할 의무가 있다." },
                    { num: "2", title: "판매촉진행사가 합의된 내용대로 이행이 되지 않을 경우 “파트너사”에 통지하여야 하며, “파트너사”에 손해가 가지 않도록 적절한 조치를 취하고, “파트너사”에 손해가 발생할 경우 관련 법 규정에 따라 손해를 배상할 수 있다." },
                    { num: "3", title: "“회사”는 “파트너사”와 사전에 합의되지 않거나 계약서에 기재되지 않은 명목의 판매촉진행사 비용이나 경제적인 불이익을 “파트너사”에 전가할 수 없다." },
                ],
            },
            {
                no: "07",
                title: "비용 분담",
                items: [
                    { num: "1", title: "“회사”와 “파트너사”는 판매촉진행사를 통한 직접적으로 얻을 것으로 예상되는 경제적 이익의 비율에 따라 판매촉진비용의 분담비율을 정한다." },
                    { num: "2", title: "“회사”와 “파트너사”가 예상되는 경제적 이익을 산정할 수 없는 경우에는 양당사자의 예상이익이 동일한 것으로 추정한다." },
                    { num: "3", title: "“파트너사”의 판매촉진비용 분담비율은 50%를 초과할 수 없다. 다만, “파트너사”의 자발적 요청에 의해 다른 “파트너사”와 차별화되는 판매촉진행사를 진행할 경우 상호 협의하여 분담비율을 정할 수 있다." },
                    { num: "4", title: "“회사”가 행사 기간, 주제, 홍보, 고객지원방안 등 판촉 행사를 기획하더라도, 참여업체를 공개모집하고 “파트너사”가 자율적으로 참여 여부를 결정하여 자기 상품의 할인 품목, 할인 폭을 스스로 결정하는 경우에는 제3항 단서의 요건을 충족한 것으로 본다." },
                    { num: "5", title: "판매촉진비용은 판매촉진행사가 종료된 월의 판매마감일 익월 매입대금 지급일에 정산하며, “회사”가 “파트너사”에 지급하는 매입대금에서 “파트너사”가 부담하는 판매촉진비용을 공제하는 정산방식을 원칙으로 한다. 이 경우 “회사”는 공제 내역을 “파트너사”에게 지급 전일까지 서면으로 통지한다." },
                ],
            },
            {
                no: "08",
                title: "불공정거래행위 등의 금지",
                items: [
                    {
                        num: "1",
                        title: "“회사”는 판매촉진비용과 관련하여 다음 각 호의 행위를 하지 않는다.",
                        details: [
                            "1. 서면 약정을 체결하지 않고 판매촉진행사를 진행하는 행위",
                            "2. 사전 약정 없이 판매촉진비용을 “파트너사”에게 전가하는 행위",
                            "3. 분담비율에 대한 약정없이 판매촉진비용을 “파트너사”에게 부담시키는 행위",
                        ],
                    },
                    { num: "2", title: "“회사”는 “파트너사”와 판매촉진행사를 협의 진행함에 있어 이 규정에 의무 또는 금지 사항으로 명시되어 있지 아니하더라도 “파트너사”에 대해 거래상 지위를 남용하여 불이익을 주거나, 그 밖에 불공정한 거래 조건을 강요하는 행위 및 정당한 사유 없이 “파트너사”의 의사에 반하여 판매촉진행사에 참여하게 하여서는 아니 된다." },
                ],
            },
            {
                no: "09",
                title: "불공정행위 접수 및 처리",
                items: [
                    { num: "1", title: "“파트너사”는 “회사”의 임직원이 이 기준을 위반하여 불공정한 처우에 따른 불이익을 받았을 경우 “회사”의 홈페이지 내 정도경영 제보 페이지에 제보할 수 있으며, “회사”는 제보 내용을 규정된 절차에 따라 처리하여야 한다." },
                    { num: "2", title: "“회사”는 “파트너사”의 제보 업무를 처리하는 과정에서 “파트너사”관련 정보와 인적사항 등을 보호하며, 제보로 인하여 부당하게 차별 대우를 받거나 거래 중단 등의 행위가 발생되지 않도록 해야 한다." },
                    { num: "3", title: "“회사”는 “파트너사”와 거래 중 발생한 제반 민원 사항에 대한 재발방지를 위하여 최선을 다한다." },
                ],
            },
            {
                no: "10",
                title: "제재",
                items: [
                    { num: "1", title: "“회사”의 임직원은 업무를 수행함에 있어 이 기준을 준수하여야 하며, 당사자의 고의 또는 중대한 과실로 이 기준을 위반한 사실이 확인된 경우에는 “회사”의 윤리 규범 등에 따라 제재조치를 진행하여야 한다." },
                    { num: "2", title: "“회사”의 임직원이 사기, 횡령, 배임, 금전수수, 부정청탁 등에 해당할 경우 “회사”는 해당 임직원을 형사고발할 수 있다." },
                ],
            },
            {
                no: "부칙",
                title: "",
                addendumText: "부칙(2018.04.01.)<br />이 기준은 2018.04. 01. 제정·시행한다.<br /><br />부칙(2024.06.11.)<br />이 기준은 2024.06.11. 개정·시행한다.",
            },
        ],
        // 4. 인테리어 및 홍보물 비용분담 기준
        FairInteriorAndPromotionCostSharingSections:[
            {
                no: "01",
                title: "목적",
                lead: "이 기준은 주식회사 지에스리테일(이하 “회사”라 함)과 파트너사(이하 “파트너사”라 함) 등과의 거래관계에 있어, 매장 인테리어 및 홍보물 등을 제작하는 과정에서 발생할 수 있는 불공정한 행위를 예방하고, 관련 법령을 준수하여 “파트너사”와 공정한 거래관계를 확립하고자 함을 목적으로 한다.",
            },
            {
                no: "02",
                title: "준수의무",
                items: [
                    { num: "1", title: "“회사”의 임직원은 “파트너사”와의 거래에 있어서 이 기준 이외에도 『독점규제 및 공정 거래에 관한 법률』(이하 “공정거래법”이란 함)과 『대규모유통업에서의 거래 공정화에 관한 법률(이하 “대규모유통업법”이라 함)』 등 관계 법령을 엄격히 준수하여야 한다." },
                    { num: "2", title: "이 기준은 “파트너사”가 상시 확인할 수 있도록 “회사” 홈페이지 등에 게시하고, 내부 직원에 대해서는 정기적으로 교육하여 준수할 수 있도록 한다." },
                ],
            },
            {
                no: "03",
                title: "용어의 정의",
                definitions: [
                    { term: "1", desc: "“매장 인테리어”란 “파트너사”가 “회사” 내 매장에 인테리어, 매장 내 집기 등의 설치·개량·개선에 투입된 비용, 기타 당해 매장에서의 상품 소매를 위해 필요한 설비를 하는데 필요한 모든 비용을 의미한다."},
                    { term: "2", desc: "“홍보물”이란 “회사”와 “파트너사”가 상품의 홍보를 위하여 제작한 것을 의미한다." },
                    { term: "3", desc: "“비용분담”이란 “회사”와 “파트너사”가 매장 인테리어 또는 홍보물 등 제작함에 있어 필요한 비용의 분담을 의미한다." },
                ],
            },
            {
                no: "04",
                title: "매장 인테리어 요건 및 절차",
                items: [
                    { num: "1", title: "매장 인테리어는 “파트너사”가 점포 내 매장에 대해 설비 비용을 지출한 것이어야 한다." },
                    { num: "2", title: "“대규모유통업법” 제16조에서 매장 설비비용 보상제도는 “회사”와의 거래를 위해 초기 비용을 지출한 “파트너사”의 계약기간 동안의 기대이익을 보호하기 위한 것이어야 한다." },
                    {
                        num: "3",
                        title: "보상의무에 대한 요건은 각 호와 같다.",
                        details: [
                            "1. “회사”가 “파트너사”에게 계약기간 도중 거래의 거절 또는 중단을 요청하는 경우. 단, “파트너사”의 채무불이행 또는 귀책사유로 인한 계약해지의 경우에는 그러하지 아니하다.",
                            "2. 양당사자가 합의 또는 쌍방 귀책사유에 의한 계약해지를 하는 경우.",
                            "3. 계약기간 도중 “회사”의 필요에 의하여 리뉴얼을 하거나 매장의 위치·면적·시설을 변경하는 행위를 하는 경우.",
                            "4. 자연재해 등 불가항력으로 인하여 거래가 중단되는 경우에는 보상의무가 발생하지 않는다.",
                            "5. 보상에 대한 산식은 다음과 같다.",
                            " “파트너사”의 매장 설비비용 지출총액* X [(계약기간 마지막날 – 거래중단 등 발생일) / 계약기간]",
                            " * “회사”와 “파트너사”가 계약 체결 시점에 협의하여 작성한 서류의 기재사항에 따름",
                        ],
                    },
                ],
            },
            {
                no: "05",
                title: "홍보물 등 요건 및 절차",
                items: [
                    {num: "1", title: "홍보물 등은 판매촉진을 목적으로 제작하는 것을 목적으로 한다.",},
                    {num: "2", title: "홍보물 등의 비용은 “회사”가 부담함을 원칙으로 하며, 회사의 홍보물 제작 양식이 아닌 별도의 양식을 요청하는 경우에는 “파트너사”가 별도의 비용을 부담할 수 있다." },
                ],
            },
            {
                no: "06",
                title: "불공정행위 접수 및 처리",
                items: [
                    {num:"1", title: "“파트너사”는 “회사”의 임직원이 이 기준을 위반하여 불공정한 처우에 따른 불이익을 받았을 경우 “회사”의 홈페이지 내 정도경영 제보 페이지에 제보할 수 있으며, “회사”는 제보 내용을 규정된 절차에 따라 처리하여야 한다."},
                    {num:"2", title: "“회사”는 “파트너사”의 제보 업무를 처리하는 과정에서 “파트너사”관련 정보와 인적사항 등을 보호하며, 제보로 인하여 부당하게 차별 대우를 받거나 거래 중단 등의 행위가 발생되지 않도록 해야 한다."},
                    {num:"3", title: "회사”는 “파트너사”와 거래 중 발생한 제반 민원 사항에 대한 재발방지를 위하여 최선을 다한다."}
                ]
            },
            {
                no: "07",
                title: "제재",
                items: [
                    { num: "1", title: "“회사”의 임직원은 업무를 수행함에 있어 이 기준을 준수하여야 하며, 당사자의 고의 또는 중대한 과실로 이 기준을 위반한 사실이 확인된 경우에는 “회사”의 윤리 규범 등에 따라 제재조치를 진행하여야 한다." },
                    { num: "2", title: "“회사”의 임직원이 사기, 횡령, 배임, 금전수수, 부정청탁 등에 해당할 경우 “회사”는 해당 임직원을 형사고발할 수 있다." },
                ],
            },
            {
                no: "부칙",
                title: "",
                addendumText: "부칙(2018.04.01.)<br />이 기준은 2018.04. 01. 제정·시행한다.<br /><br />부칙(2024.06.11.)<br />이 기준은 2024.06.11. 개정·시행한다.",
            },
        ],
        //5. 파트너사 경영정보요구 기준
        FairPartnerCompanyManagementSections:[
            {
                no: "01",
                title: "목적",
                lead: "이 기준은 주식회사 지에스리테일(이하 “회사”라 함)이 파트너사(이하 “파트너사”라 함)와 거래(직매입, 특약매입, 위수탁거래 등을 모두 포함함)하는 과정에서 “파트너사”에 대하여 부당하게 경영정보를 요구하는 행위를 금지하고, 관련 법령을 준수함으로서, “파트너사”와 공정한 거래관계를 확립하고자 함을 목적으로 한다.",
            },
            {
                no: "02",
                title: "기본원칙",
                items: [
                    { num: "1", title: "“회사”의 임직원은 “파트너사”와의 거래에 있어서 이 기준 이외에도 『독점규제 및 공정거래에 관한 법률』과 『대규모유통업에서의 거래 공정화에 관한 법률(이하 ‘대규모유통업법’이라 함)』 등 관계 법령을 엄격히 준수하여야 한다." },
                    { num: "2", title: "이 기준은 “파트너사”가 상시 확인할 수 있도록 “회사” 홈페이지 등에 게시하고, 내부직원에 대해서는 정기적으로 교육하여 준수할 수 있도록 한다." },
                ],
            },
            {
                no: "03",
                title: "용어의 정의",
                definitions: [
                    { term: "1", desc: "“파트너사”란 거래형태에 상관없이 “회사”와 상품공급거래, 물품납품거래, 서비스 등 제공하는 사업자로서 납품업자뿐만 아니라 일반적인 거래상대방도 포함한다."},
                    { term: "2", desc: "“경영정보”란 “파트너사”가 다른 사업자에게 공급하는 상품의 공급조건이나, 다른 사업자의 매장에 들어가기 위한 입점조건 및 “파트너사”나 “파트너사”의 거래 상대방에 관한 정보를 포함한다." },
                ],
            },
            {
                no: "04",
                title: "경영정보 요구의 금지",
                lead: "“회사”는 “파트너사”에 대하여 거래개시 전후를 불문하고 다음 각 호에 해당하는 경영정보를 부당하게 요구해서는 아니 된다.",
                usePlainList: true,
                items: [
                    { num: "1", title: "1. “파트너사”가 다른 사업자에게 공급하는 상품의 공급조건에 관한 정보 (공급가격, 공급물량, 공급시기 및 방법, 대금지급시기 및 방법, 반품조건 등)" },
                    { num: "2", title: "2. “파트너사”가 공급하거나 판매하는 상품의 원가에 관한 정보" },
                    { num: "3", title: "3. “파트너사”가 다른 사업자에게 판매하는 상품의 매출관련정보 (거래처별 매출액, 기간별 판매량 등)" },
                    { num: "4", title: "4. “파트너사”가 다른 사업자와 진행하는 판매촉진행사에 관한 정보 (거래처별 판매촉진행사의 시기, 횟수, 행사내용 및 거래조건 등)" },
                    { num: "5", title: "5. “파트너사”가 다른 사업자와 거래에 사용하는 전산망에 접속하기 위한 정보 (다른 사업자와의 거래에 사용되는 전산망에 접속하는 아이디, 비밀번호 등)" },
                    { num: "6", title: "6. 기타 위 각 호에 준하는 정보로서 “파트너사”에게 불이익을 줄 수 있는 경영정보" },
                ],
            },
            {
                no: "05",
                title: "예외사항",
                items: [
                    {
                        num: "1",
                        title: "제4조에도 불구하고, “회사”는 “파트너사”에 대하여 정당한 절차를 통하여 다음 각 호의 사항을 기재하여 각각 기명날인한 서면을 제공한 경우 경영정보의 제공을 요구할 수 있다.",
                        details: [
                            "1. 경영정보 제공을 요구하는 목적",
                            "2. 비밀유지방법 등 요구 대상 정보의 비밀유지에 관한 사항 및 비밀 침해시 손해배상에 관한 사항",
                            "3. 경영정보의 요구일자, 제공일자 및 방법",
                            "4. 경영정보 제공 요구가 불가피함을 객관적으로 증명할 수 있는 사항",
                        ],
                    },
                    {
                        num: "2",
                        title: "다음 각 호의 정보는 공개되어 있거나, “파트너사”와의 거래 개시 또는 유지를 위하여 필요한 정보로서 원칙적으로 “파트너사”에 요구할 수 있는 정보로 본다.",
                        details: [
                            "1. 대외적으로 공개되어 있는 “파트너사”의 일반현황 (대표자 경력, 직원수, 취급상품명 등)",
                            "2. “파트너사”의 재무제표",
                            "3. “파트너사”의 연간 전체 매출액(단, 거래처별, 채널별 매출액은 제외)",
                            "4. 위 제1호부터 제3호에 준하는 것으로 “파트너사”에게 불이익을 줄 가능성이 없는 정보",
                        ],
                    },
                    { num: "3", title: "“회사”가 “파트너사”에 정당한 절차를 거쳐 경영정보를 요구하는 경우에도, 필요한 최소한의 범위에서 요청하여야 하고, 수령한 경영정보는 요구 목적의 범위 내에서만 사용하여야 한다." },
                ],
            },
            {
                no: "06",
                title: "기타 불공정한 거래행위의 금지",
                lead: "“회사”는 “파트너사”에 대해 경영정보 등을 요구함에 있어, 이 규정에 의무 또는 금지사항으로 명시되어 있지 아니하더라도, “파트너사”가 경영정보 등을 제공하지 않는다는 이유로 “파트너사”에 대해 불이익을 주거나, 사업활동을 방해하는 등의 불공정한 거래행위를 하여서는 아니된다.",
            },
            {
                no: "07",
                title: "불공정행위 접수 및 처리",
                items: [
                    { num: "1", title: "“파트너사”는 “회사”의 임직원이 이 기준을 위반하여 불공정한 처우에 따른 불이익을 받았을 경우 “회사”의 홈페이지 내 정도경영 제보 페이지에 제보할 수 있으며, “회사”는 제보 내용을 규정된 절차에 따라 처리하여야 한다." },
                    { num: "2", title: "“회사”는 “파트너사”의 제보 업무를 처리하는 과정에서 “파트너사”관련 정보와 인적사항 등을 보호하며, 제보로 인하여 부당하게 차별 대우를 받거나 거래 중단 등의 행위가 발생되지 않도록 해야 한다." },
                    { num: "3", title: "“회사”는 “파트너사”와 거래 중 발생한 제반 민원 사항에 대한 재발방지를 위하여 최선을 다한다." },
                ],
            },
            {
                no: "08",
                title: "제재",
                items: [
                    { num: "1", title: "“회사”의 임직원은 업무를 수행함에 있어 이 기준을 준수하여야 하며, 당사자의 고의 또는 중대한 과실로 이 기준을 위반한 사실이 확인된 경우에는 “회사”의 윤리 규범 등에 따라 제재조치를 진행하여야 한다." },
                    { num: "2", title: "회사”의 임직원이 사기, 횡령, 배임, 금전수수, 부정청탁 등에 해당할 경우 “회사”는 해당 임직원을 형사고발할 수 있다." },
                ],
            },
            {
                no: "부칙",
                title: "",
                addendumText: "부칙(2018.04.01.)<br />이 기준은 2018.04. 01. 제정·시행한다.<br /><br />부칙(2024.06.11.)<br />이 기준은 2024.06.11. 개정·시행한다.",
            },

        ],
        // 6. 파트너사 종업원 파견 기준
        FairPartnerEmployeeDispatchSections: [
            {
                no: "01",
                title: "목적",
                lead: "이 기준은 주식회사 지에스리테일(이하 “회사”라 함)이 파트너사(이하 “파트너사”라 함)등으로부터 종업원이나 그 밖에 “파트너사”에 고용된 인력(이하 ‘종업원’이라 함)을 파견 받아 “회사”의 사업장에 근무하게 하는 과정에서 발생할 수 있는 부당한 행위를 예방하고, 관련 법령을 준수하여 “파트너사”와 공정한 거래관계를 확립하고자 함을 목적으로 한다.",
            },
            {
                no: "02",
                title: "준수의무",
                items: [
                    { num: "1", title: "“회사”의 임직원은 “파트너사”와의 거래에 있어서 이 기준 이외에도 『대규모유통업에서의 거래 공정화에 관한 법률(이하 ‘대규모유통업법’이라 함)』과 『대규모유통업 분야에서 납품업자 등의 종업원 파견 및 사용에 관한 가이드 라인』 등 관계 법령을 엄격히 준수하여야 한다." },
                    { num: "2", title: "이 기준은 “파트너사”가 상시 확인할 수 있도록 “회사” 홈페이지 등에 게시하고, 내부직원에 대해서는 정기적으로 교육하여 준수할 수 있도록 한다." },
                ],
            },
            {
                no: "03",
                title: "용어의 정의",
                definitions: [
                    { term: "1", desc: "“파트너사”라 함은 “회사”와의 상품공급거래, 물품납품거래 등의 대상업체로 예정되거나 거래중인 사업자로서 납품업자뿐만 아니라 일반적인 거래상대방도 포함한다."},
                    { term: "2", desc: "“특약매입거래”란 “회사”가 매입한 상품 중 판매되지 아니한 상품을 반품할 수 있는 조건으로 납품업자로부터 상품을 외상매입하고, 상품판매 후 일정률이나 일정액의 판매수익을 공제한 상품판매대금을 납품업자에게 지급하는 형태의 거래를 말한다." },
                    { term: "3", desc: "“판매장려금”이란 명칭에 상관없이 직매입거래에서 상품의 판매촉진을 위하여 연간 거래기본계약에 명시된 조건에 따라 납품업자가 “회사”에게 지급하는 경제적 이익을 말한다." },
                ],
            },
            {
                no: "04",
                title: "종업원의 파견",
                items: [
                    { num: "1", title: "“회사”는 “파트너사” 등으로부터 종업원을 파견 받아 “회사”의 매장에서 근무하게 하는 행위를 원칙적으로 금지한다." },
                    {
                        num: "2",
                        title: "다만, 다음 각 호의 어느 하나에 해당하는 경우로서 “파트너사”와 사전에 파견조건을 서면으로 약정하고 파견된 종업원을 해당종업원을 고용한 “파트너사”가 납품하는 상품의 판매 및 관리 업무에 종사하게 하는 경우에는 그러하지 아니한다.",
                        details: [
                            "1. “회사”가 파견된 종업원의 인건비를 비롯한 식비, 교통비 등 각종 실비와 그 밖에 “회사” 매장에서 파견종업원이 상품판매 및 관련업무에 종사하는데 드는 비용을 부담하는 경우",
                            "2. “파트너사”가 종업원 파견에 따른 예상 이익과 비용의 내역 및 산출 근거를 객관적, 구체적으로 작성하여 명시한 서면에 따라 “회사”에게 자발적으로 자신이 고용한 종업원의 파견을 요청하는 경우",
                            "3. 특수한 판매 기법 또는 능력을 지닌 숙련된 종업원을 파견 받는 경우",
                            "4. 특약매입거래를 하는 “파트너사”의 제품을 상시적으로 운영하는 매장의 형태로 운영 시 해당 상품의 특성상 전문지식이 중요하다고 공정거래위원회가 정하여 고시하는 상품류를 판매·관리하기 위하여 종업원을 파견 받는 경우",
                        ],
                    },
                    {
                        num: "3",
                        title: "다음 각 호의 어느 하나에 해당하는 행위는 파견허용사유에 포함하지 아니한다.",
                        details: [
                            "1. 파견비용 부담조건으로 파견을 받았으나, 파견 인력에 지급하는 비용부담을 이유로 “파트너사”에게 상품매입원가의 인하를 요구하거나, 판매장려금 또는 광고비를 추가로 수취하는 행위",
                            "2. 파견비용 부담조건으로 파견을 받았으나, 약정서에 기재된 판매활동을 수행함에 있어 소요되는 진열대 등의 설치비용, 샘플상품 비용 등 “회사”가 부담해야 할 비용 중 일부를 “파트너사”에게 부담시키는 행위",
                            "3. “파트너사”의 자발적 요청 이전에, 협조요청 등의 명목으로 종업원을 파견하여 줄 것을 구두나 유선 또는 이메일 등으로 비공식적으로 요구하고, 사후에 “파트너사”로부터 파견 요청서를 제출하게 하는 행위",
                            "4. “파트너사”에 종업원 파견을 요구하면서 이를 거절할 경우 거래개시거절, 거래지속중단 등 불이익을 부여하거나, 이를 암시함으로써 “파트너사”가 그 요구에 응할 수밖에 없는 경우",
                            "5. 파견에 따른 제반비용을 부담하거나 “파트너사”가 자발적으로 파견을 요청하는 경우에 해당되지 않음에도 불구하고, 상품의 특성이나 판매업무와 관련된 소정의 교육만으로도 가능한 단순 상품판매 업무의 수행을 위해 종업원을 파견 받는 행위",
                            "6. 특별한 기술이 필요하지 않은 고객에 대한 관심제고 수준의 단순 판촉업무에 숙련된 종업원을 요구하여 판촉사원을 파견 받는 행위",
                            "7. 특수한 판매기법이나 능력과 무관한 판매대금 수령 등 단순판매보조업무의 수행을 위해 숙련된 종업원을 요구하여 파견 받는 행위",
                            "8. “회사” 차원의 판촉행사기간에 행사보조업무의 수행을 위한 임시행사요원을 추가로 요구하여 파견 받는 경우",
                        ],
                    },
                ],
            },
            {
                no: "05",
                title: "서면약정",
                items: [
                    {
                        num: "1",
                        title: "“회사”는 “파트너사”로부터 종업원을 파견 받을 시 파견조건을 사전에 서면으로 약정하고, 동서면에 “회사”와 “파트너사”가 각각 서명 또는 기명날인 하여야 한다.",
                    },
                    {
                        num: "2",
                        title: "제1항의 서면에 포함되어야 하는 사항은 다음 각 호와 같다.",
                        details: [
                            "1. 종업원의 수",
                            "2. 종업원의 근무기간 및 근무시간",
                            "3. 종업원이 종사할 업무내용",
                            "4. 종업원의 인건비 분담 여부 및 조건",
                        ],
                    },
                    {
                        num: "3",
                        title: "다음 각 호의 어느 하나에 해당하는 경우는 대규모유통업법의 위반행위로 간주한다.",
                        details: [
                            {
                                text: "1. 종업원을 파견 받은 이후에 서면 약정하는 경우",
                                children: [
                                    "가. 단기 판촉행사라는 이유로 서면 약정 없이 “파트너사”에게 판촉사원 파견을 추가로 요구하고, 사후에 “파트너사”로부터 파견요청서와 서면 약정서(기명날인포함)를 징구하는 경우",
                                    "나. 종업원을 최초로 파견 받은 시기와 약정한 시기가 상이하고, 약정 이전 시기부터 소급하여 적용하거나 약정 일자를 최초 파견 시기 이전으로 수정하여 기재하는 경우",
                                    "다. 파견종업원의 인원 수 등 파견조건약정을 사후로 유보하는 경우",
                                    "라. 파견조건을 명시한 서면의 마련은 종업원 파견 이전에 이루어졌으나, 한 당사자 또는 양 당사자의 서명 또는 기명날인은 파견 이후에 이루어진 경우",
                                ],
                            },
                            {
                                text: "2. 서면에 포함되어야 하는 사항 일부 또는 전부에 대해 약정을 체결하지 않은 경우",
                                children: [
                                    "가. 파견조건을 사전에 서면으로 약정하지 않고 구두, 이메일, 파견요청 문서 등으로 종업원 파견을 요청하여 파견 받는 경우",
                                    "나. “파트너사”가 자발적으로 종업원 파견을 요청했다는 이유로 사전에 서면약정을 체결하지 않는 경우",
                                    "다. 종업원의 근무시간 및 근무기간, 업무내용에 대해서는 명확히 약정하였으나, 종업원수는 예측이 어렵다는 이유로 약정서에 명시하지 않는 경우",
                                ],
                            },
                            {
                                text: "3. 서면에 포함되어야 하는 사항 일부 또는 전부에 대해 불명확하게 약정하는 경우",
                                children: [
                                    "가. 파견조건에 관한 예측이 가능한 상시 근무 판매사원을 파견 받으면서 파견 인원 및 근무시간 등을 명확히 약정하지 않는 경우",
                                    "나. 상품매출변동, 단기 판촉행사 등 필요한 종업원수가 최대10명 등으로 예상 가능한 경우에도“5명~30명” 또는“30명이하” 등 포괄적으로 약정하는 경우",
                                    "다. 종업원의 근무기간을 “상반기중” 또는 “3분기 중” 등으로 모호하게 규정하여 “파트너사” 가 파견기간을 예측하기 어려운 경우",
                                    "라. “파트너사”는 구체적 파견 조건이 명시되지 않은 서면에 서명 또는 기명날인 만하고, 구체적인 파견 조건은 “회사”가 사후에 일방적으로 기재하는 경우",
                                ],
                            },
                            {
                                text: "4. 약정한 서면이 불완전한 경우",
                                children: [
                                    "가. 파견 조건을 명시한 서면은 마련되었으나, 한 당사자 또는 양 당사자 모두의 서명 또는 기명날인이 누락된 경우",
                                    "나. 전자서면을 통해 약정을 체결할 때, “파트너사”의 서명을 “회사”가 보관하고 있다가 이를 약정서에 기재하는 경우",
                                ],
                            },
                            "5. “파트너사”에게 약정 서면을 교부하지 않는 경우"
                        ],
                    },
                    { 
                        num:"4",
                        title:"“회사”와 “파트너사”가 종업원 파견조건을 약정한 서면은 체결 즉시 “파트너사”에 교부하여야 하며, 해당 서면은 약정이 끝난 날부터 5년간 보존하여야 한다."
                    }
                ],
            },
            {
                no: "06",
                title: "파견종업원의 업무범위",
                items: [
                    { num: "1", title: "파견종업원은 해당 인원을 고용한 “파트너사”가 납품하는 상품의 판매 및 관리업무에만 종사하여야 한다." },
                    { num: "2", title: "다음 각 호의 어느 하나에 해당하는 행위는 파견종업원의 업무범위에 해당하지 아니한다.",
                        details: [
                            "1. 파견된 종업원을 계산대에서 현금출납보조업무, 포장 업무 등에 종사시키는 행위",
                            "2. 파견된 종업원에게 통로·화장실 등 매장 공용공간 청소, 매장 공용공간에서 매장 전체 차원의 고객응대 및 안내 업무 등을 하도록 지시하는 행위",
                            "3. 파견된 종업원을 상품하역, 창고반입업무, 쇼핑카트 회수·정리, 주차장관리 및 주차지원 업무에 종사시키는 행위",
                            "4. 파견된 종업원에게 “파트너사” 자사상품 뿐 아니라 다른 “파트너사”가 납품하는 상품의 판매 및 재고파악 및 관리, 진열업무 등을 맡기는 행위",
                            "5. “회사” 고유업무의 일환으로 수행하는 정기재고조사 업무 등의 원활한 수행을 위해 파견 종업원으로 하여금 “파트너사” 자사상품의 재고를 파악하도록 하는 행위",
                        ],
                    },
                ],
            },
            {
                no: "07",
                title: "파트너사의 종업원 파견요청",
                lead: "“회사”의 “파트너사” 등은 제4조 제2항 제2호에 따라 “파트너사”의 입장에서 상품의 홍보 및 매출 증대를 위하여 이익이 될 것으로 판단하고 “파트너사”의 종업원을 “회사”에 파견 요청하려는 경우에는 상품 계약을 체결하기 전에 종업원 파견에 따른 예상 이익과 비용의 내역 및 산출 근거를 객관적 · 구체적으로 기재한 종업원 파견요청서를 “회사”에 제출하여야 한다.",
            },
            {
                no: "08",
                title: "불공정행위 접수 및 처리",
                items: [
                    { num: "1", title: "“파트너사”는 “회사”의 임직원이 이 기준을 위반하여 불공정한 처우에 따른 불이익을 받았을 경우 “회사”의 홈페이지 내 정도경영 제보 페이지에 제보할 수 있으며, “회사”는 제보 내용을 규정된 절차에 따라 처리하여야 한다." },
                    { num: "2", title: "“회사”는 “파트너사”의 제보 업무를 처리하는 과정에서 “파트너사”관련 정보와 인적사항 등을 보호하며, 제보로 인하여 부당하게 차별 대우를 받거나 거래 중단 등의 행위가 발생되지 않도록 해야 한다." },
                    { num: "3", title: "“회사”는 “파트너사”와 거래 중 발생한 제반 민원사항에 대한 재발방지를 위하여 최선을 다한다." },
                ],
            },
            {
                no: "09",
                title: "제재",
                items: [
                    { num: "1", title: "“회사”의 임직원은 업무를 수행함에 있어 이 기준을 준수하여야 하며, 당사자의 고의 또는 중대한 과실로 이 기준을 위반한 사실이 확인된 경우에는 “회사”의 윤리 규범 등에 따라 제재조치를 진행하여야 한다." },
                    { num: "2", title: "“회사”의 임직원이 사기, 횡령, 배임, 금전수수, 부정청탁 등에 해당할 경우 “회사”는 해당 임직원을 형사고발할 수 있다." },
                ],
            },
            {
                no: "부칙",
                title: "",
                addendumText: "부칙(2018.04.01.)<br />이 기준은 2018.04. 01. 제정·시행한다.<br /><br />부칙(2024.06.11.)<br />이 기준은 2024.06.11. 개정·시행한다.",
            },
        ],
        // 7. 파트너사 특약매입거래 기준
        FairPartnerSpecialPurchaseSections: [
            {
                no: "01",
                title: "목적",
                lead: "이 기준은 주식회사 지에스리테일(이하 “회사”라 함)과 파트너사(이하 “파트너사”라 함)간 특약매입거래 과정에서 발생할 수 있는 각종 비용 분담에 대한 기준을 마련하고, 관련 판매촉진행사를 진행하는 과정에서 발생할 수 있는 불공정한 거래행위를 예방하고, 관련 법령을 준수함으로서, “파트너사”와 공정한 거래관계를 확립하고자 함을 목적으로 한다.",
            },
            {
                no: "02",
                title: "기본원칙",
                items: [
                    { num: "1", title: "“회사”의 임직원은 “파트너사”와의 거래에 있어서 이 기준 이외에도 『대규모유통업에서의 거래공정화에 관한 법률(이하 ‘대규모유통업법’이라 함)』과 『대규모유통업 분야의 특약매입거래에 관한 부당성 심사지침』 등 관계 법령을 엄격히 준수하여야 한다." },
                    { num: "2", title: "이 기준은 “파트너사”가 상시 확인할 수 있도록 “회사” 홈페이지 등에 게시하고, 내부 직원에 대해서는 정기적으로 교육하여 준수할 수 있도록 한다." },
                ],
            },
            {
                no: "03",
                title: "용어의 정의",
                definitions: [
                    { term: "1", desc: "“파트너사”라 함은 “회사”와의 상품공급거래, 물품 납품거래 등의 대상업체로 예정되거나 거래중인 사업자로서 납품업자뿐만 아니라 일반적인 거래상대방도 포함한다."},
                    { term: "2", desc: "“특약매입거래”란 “회사”가 매입한 상품 중 판매되지 아니한 상품을 반품할 수 있는 조건으로 납품업자로부터 상품을 외상매입하고, 상품판매 후 일정률이나 일정액의 판매수익을 공제한 상품판매대금을 납품업자에게 지급하는 형태의 거래를 말한다." },
                    { term: "3", desc: "“판매촉진행사”란 명칭이나 형식에 상관없이 상품에 대한 수요를 늘려 판매를 증진시킬 목적으로 행하는 모든 행사 또는 활동을 말하며, 세부 목적은 다음 각 호와 같다.",
                      details:[
                          "1. 신상품/신규입점상품의 홍보 및 매출확대",
                          "2. 경쟁사의 경쟁상품과 차별화된 추가 혜택 제공을 통한 매출 확대",
                          "3. 관련 상품군내 해당기간 판촉활동을 통한매출증대 및 MS(점유율) 확대"
                      ]
                    },
                ],
            },
            {
                no: "04",
                title: "거래 과정",
                items: [
                    { num: "1", title: "“회사”는 “파트너사”와 특약매입거래 계약을 체결한 즉시 “파트너사”에게 계약 사항이 명시된 서면을 주어야 하며, 이 서면에는 “회사”와 “파트너사”가 각각 서명 또는 기명날인 하여야 한다." },
                    { num: "2",title: "“회사”는 제1항의 서면을 “파트너사”에게 줄 때까지 납품할 상품을 제조·주문하여서는 아니된다."},
                    { num: "3", title: "특약매입거래는 계약체결 시 판매수수료와 반품조건, 판촉비용 등을 “회사”와 “파트너사”간 협의로 통하여 구체적으로 약정하고 계약서에 명시하여야 한다."},
                    { num: "4", title: "특약매입거래 체결 당시 “회사”와 “파트너사” 간 예상하지 못한 비용이 발생할 경우 그에 따른 추가 비용은 “회사”와 “파트너사”간 협의하여 결정한다."},
                ],
            },
            {
                no: "05",
                title: "역할분담",
                items: [
                    {
                        num: "1",
                        title: "“회사”는 “파트너사”를 통해 납품 받은 상품의 소유권을 취득하며, “회사” 명의로 판매한 판매대금을 수령한 후 월별로 판매수익을 집계하여, 사전에 약정된 판매수수료를 공제한 금액을 “파트너사”에 지급한다.",
                    },
                    {
                        num: "2",
                        title: "“회사”는 전체 점포차원에서 집객 및 수요창출을 위한 광고, 홍보, 판촉행사 기획 등의 활동을 실시한다.",
                    },
                    {
                        num: "3",
                        title: "“파트너사”는 점포 내에 있는 납품상품의 판매촉진을 위하여 판촉사원을 파견하여 상품에 대한 판매활동과 매장 내에서 상품에 대한 진열·보관 등의 업무를 수행한다.",
                    },
                    { 
                        num:"4",
                        title:"“파트너사”는 이 과정에서 해당 “파트너사”의 상품재고를 관리하고 미판매 상품을 “회사”와 협의하여 회수(반품)한다."
                    }
                ],
            },
            {
                no: "06",
                title: "비용 분담",
                lead: "“회사”와 “파트너사” 간 특약매입거래 과정에서 발생하는 비용을 분담하는 기준은 다음과 같다.",
                usePlainList: true,
                items: [
                    {
                        num: "1",
                        title: "1. 상품 입고 및 관리 단계",
                        criteria: [
                            {
                                details: [
                                    {
                                        text: "가. 상품에 대한 재산보장보험 비용",
                                        desc: "화재 홍수 등 천재지변과 도난 등에 의해 보유 상품이 피해를 입을 경우를 대비하여 가입하는 재산보장보험 비용은 “회사”가 부담한다.",
                                    },
                                    {
                                        text: "나. 상품보관 비용",
                                        desc: "상품에 대한 검품 · 검수 후 창고 등 시설에 상품을 보관할 때 발생하는 비용은 “회사”가 부담한다.",
                                    },
                                    {
                                        text: "다. 상품 멸실·훼손 비용부담",
                                        desc: "납품한 상품에 대하여 “회사”가 검품·검수 이후 상품이 멸실 또는 훼손되는 경우, 발생하는 비용은 “회사”가 부담하는 것을 원칙으로 한다. 단, “파트너사”나 “파트너사”로부터 파견된 판촉사원에게 명백한 귀책사유가 있는 경우에는 “파트너사”가 상품의 멸실·훼손 비용을 부담한다.",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        num: "2",
                        title: "2. 매장 운영 및 관리 단계",
                        criteria: [
                            {
                                details: [
                                    {
                                        text: "가. 매장 인테리어 비용",
                                        desc: "매장 집기 등을 교체하는 경우 발생하는 인테리어 비용은 “회사”가 부담한다",
                                    },
                                    {
                                        text: "나. 판촉사원 비용 및 규모",
                                        desc: "파견된 판촉사원의 인건비, 식비·교통비 등의 실비 및 상품 판매 및 관련 업무에 종사하는데 드는 비용은 “회사”와 “파트너사”가 협의하여 분담하며, 매장에 파견할 판촉사원 규모는 “파트너사”가가 자율적으로 결정하도록 한다.",
                                    },
                                    {
                                        text: "다. 매장관리비용",
                                        desc: "“파트너사”가 납품한 상품을 판매하는 과정에서 발생하는 전기료, 대금결제 장비 사용료 등과 같은 각종 관리 비용은 “회사”가 부담한다.",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        num: "3",
                        title: "3. 광고 및 판매촉진 활동 단계",
                        criteria: [
                            {
                                details: [
                                    {
                                        text: "가. 매장 차원에서의 광고 비용",
                                        children:[
                                            "1) “회사” 브랜드 이미지 제고를 위한 광고 비용은 “회사”가 부담한다.",
                                            "2) 매장 차원에서 집객을 위한 전단지 등의 광고 비용은 “회사”가 부담한다.",
                                            "3) “회사”가 전체 매장 단위로 통일적으로 연출하는 POP. 포스터 등의 홍보·광고 장식· 제작물 비용은 “회사”가 부담한다."  ]
                                    },
                                    {
                                        text: "나. 매장 차원에서의 판매촉진행사 비용",
                                        desc:"“회사”가 주체가 되어 전체 매장 또는 개별 매장 차원에서 진행하는 판매촉진행사에 소요되는 비용은 “회사”가 부담한다."
                                    },
                                    {
                                        text: "다. “회사”와 “파트너사” 간 공동 판매촉진행사 비용",
                                        desc:"“회사”와 “파트너사”가 공동으로 진행하는 판매촉진행사에 소요되는 비용은 직접적인 예상이익 비율에 따라 분담하되, 비율을 산정할 수 없는 경우에는 “회사”와 “파트너사”의 예상이익이 동일한 것으로 추정한다. 단, “파트너사”의 분담비율이 50%를 초과하여서는 아니 된다."
                                    },
                                    {
                                        text: "라. “파트너사”의 자발적인 판매촉진행사 비용",
                                        desc:"“파트너사”가 자발적으로 “회사”에게 요청하여 다른 업체와 차별화되는 판매촉진행사를 실시하려는 경우 소요되는 비용은 “회사”와 “파트너사”가 상호 협의하여 분담한다."
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                no: "07",
                title: "판촉사원 업무 범위",
                items: [
                    {num: "1", title: "“파트너사”가 파견한 판촉사원은 “회사” 매장의 영업시간 동안 근무한다."},
                    {num: "2", title: "판촉사원은 해당 인원을 고용한 “파트너사”가 납품하는 상품의 판매 및 관리 업무에만 종사하여야 하며, 다른 “파트너사”가 납품하는 상품의 판매 및 관리 업무 및 현금출납 보조업무, 주차지원 업무 등 “회사” 고유 업무에 종사시켜서는 아니 된다."},
                    {num: "3", title: "판촉사원은 고객이 통상적으로 제공받을 것으로 기대한 수준 이상의 서비스 품질이 유지될 수 있도록 노력하여야 한다."}
                ]
            },
            {
                no: "08",
                title: "판매촉진행사 참여",
                items: [
                    { num: "1", title: "“회사”는 판매촉진행사에 “파트너사”의 의사에 반하여 강제적으로 “파트너사”를 참여시켜서는 아니 된다." },
                    { num: "2", title: "판매촉진행사 참여의 강제성 여부는 다음 각 호의 사항을 종합적으로 고려하여 판단한다.",
                        details:[
                            "1. “파트너사”의 실질적이고 자발적인 참여의사",
                            "2. 판매촉진행사 불참 시 제재 수단의 존부 또는 불이익 부여 여부",
                            "3. 판매촉진행사의 성격 및 거래상 우월적 지위의 정도",
                            "4. “파트너사”의 거래의존도",
                            "5. “회사”와 “파트너사”의 거래관계의 지속성",
                            "6. 거래상품의 특성",
                        ]
                    },
                ],
            },
            {
                no: "09",
                title: "불공정행위 접수 및 처리",
                items: [
                    { num: "1", title: "“파트너사”는 “회사”의 임직원이 이 기준을 위반하여 불공정한 처우에 따른 불이익을 받았을 경우 “회사”의 홈페이지 내 정도경영 제보 페이지에 제보할 수 있으며, “회사”는 제보 내용을 규정된 절차에 따라 처리하여야 한다." },
                    { num: "2", title: "“회사”는 “파트너사”의 제보 업무를 처리하는 과정에서 “파트너사”관련 정보와 인적사항 등을 보호하며, 제보로 인하여 부당하게 차별 대우를 받거나 거래 중단 등의 행위가 발생되지 않도록 해야 한다." },
                    { num: "3", title: "“회사”는 “파트너사”와 거래 중 발생한 제반 민원 사항에 대한 재발방지를 위하여 최선을 다한다." },
                ],
            },
            {
                no: "10",
                title: "불공정행위 접수 및 처리",
                items: [
                    { num: "1", title: "“회사”의 임직원은 업무를 수행함에 있어 이 기준을 준수하여야 하며, 당사자의 고의 또는 중대한 과실로 이 기준을 위반한 사실이 확인된 경우에는, “회사”의 윤리규범 등에 따라 제재조치를 진행하여야 한다." },
                    { num: "2", title: "“회사”의 임직원이 사기, 횡령, 배임, 금전수수, 부정청탁 등에 해당할 경우 “회사”는 해당 임직원을 형사고발할 수 있다." },
                ],
            },
            {
                no: "부칙",
                title: "",
                addendumText: "부칙(2018.04.01.)<br />이 기준은 2018.04. 01. 제정·시행한다.<br /><br />부칙(2024.06.11.)<br />이 기준은 2024.06.11. 개정·시행한다.",
            },
        ],
        // 8. 파트너사 반품관련 기준
        FairPartnerReturnRelatedSections: [
            {
                no: "01",
                title: "목적",
                lead: "이 기준은 주식회사 지에스리테일(이하 “회사”라 함)과 파트너사(이하 “파트너사”라 함)간 거래에 있어 반품처리에 대한 기준을 명확히 규정하여, 반품과정에서 발생할 수 있는 불공정한 거래행위를 예방하고, 관련 법령을 준수함으로서, “파트너사”와 공정한 거래관계를 확립하고자 함을 목적으로 한다.",
            },
            {
                no: "02",
                title: "기본원칙",
                items: [
                    { num: "1", title: "“회사”의 임직원은 “파트너사”와의 거래에 있어서 이 기준 이외에도 『대규모유통업에서의 거래공정화에 관한 법률(이하 ‘대규모유통업법’이라 함)』과 『대규모유통업자의 반품행위에 대한 위법성 심사지침』 등 관계 법령을 엄격히 준수하여야 한다." },
                    { num: "2", title: "이 기준은 “파트너사”가 상시 확인할 수 있도록 “회사” 홈페이지 등에 게시하고, 내부직원에 대해서는 정기적으로 교육하여 준수할 수 있도록 한다." },
                ],
            },
            {
                no: "03",
                title: "용어의 정의",
                definitions: [
                    { term: "1", desc: "“납품”이란 거래형태에 상관없이 “회사”가 판매할 상품을 “회사”에 공급하는 행위를 말한다. 또한, “회사”가 이미 판매한 상품을 “파트너사”가 소비자에게 직접 공급하는 행위도 “회사”와 “파트너사”의 관계에서는 납품으로 본다."},
                    { term: "2", desc: "“반품”이란 “회사”가 납품받은 상품을 “파트너사”에게 실질적으로 되돌려주는 모든 행위를 말한다. 또한, “파트너사”의 다른 상품과 바꾸면서 당초 납품 받은 상품을 되돌려주는 경우 등 형식에 상관없이 당초에 납품 받은 상품이 “파트너사”에게 되돌아간 경우에는 반품된 것으로 본다." },
                    { term: "3", desc: "“직매입거래”란 “회사”가 “파트너사”로부터 상품을 매입하는 형태의 거래를 말한다. 매입한 상품 중 소비자에게 판매되지 아니한 상품에 대한 재고는 “회사”가 부담한다."},
                    { term: "4", desc: "“특약매입거래”란 “회사”가 소비자에게 판매되지 아니한 상품을 반품할 수 있는 조건으로 “파트너사”로부터 상품을 외상매입하는 형태의 거래를 말한다. 상품판매 후 “회사”는 일정율이나 일정액의 판매수익을 공제한 상품판매 대금을 “파트너사”에게 지급하는 형태의 거래를 말한다."},
                    { term: "5", desc: "“위수탁거래”란 “회사”가 “파트너사”로부터 납품 받은 상품을 자기명의로 판매하고, 상품판매 후 일정율이나 일정액의 수수료를 공제한 상품판매대금을 “파트너사”에게 지급하는 형태의 거래를 말한다." },
                ],
            },
            {
                no: "04",
                title: "반품의 조건",
                items: [
                    { num: "1", title: "“회사”는 정당한 사유 없이 납품 받은 상품의 전부 또는 일부를 “파트너사”에게 반품하여서는 아니된다." },
                    { num: "2",title: "제1항에도 불구하고 다음 각 호의 어느 하나에 해당하는 경우에는 예외적으로 반품을 할 수 있다.", 
                      details:[
                          "1. 특약매입거래의 경우로서 계약체결 시 반품조건을 구체적으로 약정하고 그 반품조건을 명시한 서면을 “파트너사”에게 준 경우에 그 반품조건에 해당하면 반품할 수 있다. “회사”는 구체적인 반품조건을 “회사”의 표준 물품공급계약서(특약매입)에 반영하여 활용할 수 있다.",
                          "2. 위수탁거래의 경우는 별도의 제한없이 상품판매 후 남은 재고상품을 반품할 수 있다.",
                          "3. 납품받은 상품의 “파트너사”의 책임있는 사유로 인하여 오손, 훼손되었거나 상품에 하자가 있는 경우에는 반품할 수 있다.",
                          "4. 납품받은 상품이 계약한 상품과 다른 경우로서, 상품의 원산지, 유통기한, 크기 등 중요한 제품의 특성이 당초 계약한 내용과 다른 경우에는 상품을 반품할 수 있다.",
                          "5. “회사”가 반품으로 인하여 생기는 손실을 스스로 부담하고, 해당 “파트너사”에게 반품의 동의를 얻는 경우에는 상품을 반품할 수 있다.",
                          "6. 직매입거래의 경우로서 일정한 기간이나 계절에 집중적으로 판매되는 상품(이하 “시즌상품”이라 함)에 대하여 계약 체결 시 반품조건을 구체적으로 약정하고, 그 반품조건이 명시된 서면을 “파트너사”에 준 경우에는 상품을 반품할 수 있다.",
                          "7. 직매입거래의 경우로서 “파트너사”가 반품이 자기에게 직접적으로 이익이 된다는 객관적인 근거자료를 첨부한 서면으로 반품일 이전에 자발적으로 반품을 요청한 경우에는 상품을 반품할 수 있다.",
                          "8. 가맹점사업자가 폐업하면서 “회사”에 반품한 상품에 대해서는, “회사”가 다시 “파트너사”에게 반품할 수 있다. 이 경우 재판매가 불가능한 상품은 반품할 수 없다.",
                          "9. 그 밖에 직매입거래의 경우로서 정당한 사유가 있는 경우에는 상품을 반품할 수 있다. 이 경우 정당한 사유의 판단은 납품거래의 형태와 특성, 반품의 의도와 목적, “파트너사”에 미치는 효과 등을 종합적으로 고려하여 개별적, 구체적으로 판단한다."

                      ]},
                    { num: "3", title: "제2항의 반품은 해당 거래분야에서 합리적이라고 인정되는 기간내에 반품하여야 하며, 다음 각 호의 경우 해당 거래분야에서 합리적이라고 인정되는 기간이라고 추정한다.",
                        details:[
                          "1. 제2항 제3호 및 제4호의 경우 납품일로부터 10 영업일 이내. 다만, 납품일에 제2항 제3호 및 제4호에 해당하는 사유를 외견상 즉시 발견할 수 없는 합리적인 사유가 있는 경우에는 상호 별도의 합의로 그 기간을 연장할 수 있다.",
                          "2. 제2항 제3호 및 제4호에 따른 상품이 농ㆍ수ㆍ축산물인 경우 납품한 시점부터 2일 이내",
                          "3. 제2항 제6호의 경우 판매시즌 종료일로부터 30일 이내. 다만, “회사” 또는 “파트너사”의 사유로 30일을 초과될 것으로 예상될 경우에는 판매시즌 종료일 15일 이전 상호 서면 합의로 그 기간을 연장할 수 있다."]
                    },
                ],
            },
            {
                no: "05",
                title: "반품 세부 절차",
                items: [
                    {
                        num: "1",
                        title: "직매입거래 상품의 반품의 경우 오손·훼손 또는 하자가 있는 상품, 계약한 상품과 다른 상품이 납품된 경우에는 즉시 “파트너사”에 통보하여 관련 사실을 상호 확인한 후 반품 절차를 진행하여야 한다.",
                    },
                    {
                        num: "2",
                        title: "제1항에 따른 확인 결과 상품의 오손·훼손이 “회사”의 고의 또는 과실로 인해 발생한 경우에는 반품을 할 수 없다. 단, 이 경우에도 “회사”가 상품의 오손·훼손 및 반품에 따른 “파트너사”의 모든 손실을 부담하면서 “파트너사”의 동의를 얻은 후 반품하는 경우에는 가능하다.",
                    },
                    {
                        num: "3",
                        title: "특약매입거래나 위수탁거래의 경우 상품 판매를 마감한 이후 판매되지 않은 상품을 “파트너사”와 합의한 기간 이내에 “파트너사”에게 반품하여야 한다.",
                    },
                    { 
                        num:"4",
                        title:"납품받은 상품이 오손·훼손 또는 하자가 있어 반품하는 경우 상품에 하자 등이 발견되면 해당 하자 등이 발생한 원인이 “회사” 또는 “파트너사” 중 누구에게 있는지 객관적인 근거를 통해 상호 확인한 후 “파트너사”에게 귀책사유가 있는 경우에만 반품하여야 한다."
                    }
                ],
            },
            {
                no: "06",
                title: "서면의 교부와 보존",
                items: [
                    {
                        num: "1",
                        title: "회사”와 “파트너사”는 상품의 반품조건에 대해 상호 합의한 경우, 이를 적은 서면을 “파트너사”에게 주어야 하며, 서면에는 “회사”와 “파트너사”가 각각 서명 또는 기명날인하여야 한다.",
                    },
                    {
                        num: "2",
                        title: "합의서면은 『전자거래 기본법』에 따른 전자문서의 형태로 교부할 수 있으며, 『전자서명법』에 따른 공인전자서명 등으로 서명하는 것도 가능하다.",
                    },
                    {
                        num: "3",
                        title: "“회사”는 반품조건을 적은 서면을 납품업자에게 교부하기 전까지는, 원칙적으로 “파트너사”에게 상품을 제조하게 하거나 주문하여서는 아니된다. 다만, 반품조건을 적은 서면을 교부하기 이전이라도 “회사”가 서명 또는 기명날인 한 서면으로 상품의 제조나 주문을 요구하는 것은 가능하다.",
                    },
                    {
                        num: "4",
                        title: "“회사”는 “파트너사”와의 계약이 끝나는 날부터 5년간 다음의 사항이 적힌 서류를 보존해야 한다.",
                        details:[
                            "1. 반품 조건",
                            "2. 반품된 상품의 목록",
                            "3. 반품된 상품의 수량",
                            "4. 반품된 상품의 거래형태(직매입, 특약매입, 위수탁거래)",
                            "5. 반품된 상품의 반품일자",
                            "6. 반품된 상품과 관련된 납품대금",
                            "7. 반품된 상품의 반품사유",
                            "8. “파트너사”가 “회사”에게 서면으로 반품을 요청하면서, 해당반품이 자신에게 직접적으로 이익이 된다는 사실을 증명하는 객관적이 근거자료를 제출한 경우, “파트너사”가 제출한 서면과 근거자료",
                        ]
                    },

                ],
            },
            {
                no: "07",
                title: "기타 불공정한 거래행위의 금지",
                lead: "“회사”는 “파트너사”와 반품 관련 업무를 처리함에 있어 이 규정에 의무 또는 금지사항으로 명시되어 있지 아니하더라도, “파트너사”에 대하여 거래상 지위를 남용하여 불이익을 주거나, 그 밖에 불공정한 거래조건을 강요하는 행위를 하여서는 아니된다.",
            },
            {
                no: "08",
                title: "불공정행위 접수 및 처리",
                items: [
                    { num: "1", title: "“파트너사”는 “회사”의 임직원이 이 기준을 위반하여 불공정한 처우에 따른 불이익을 받았을 경우 “회사”의 홈페이지 내 정도경영 제보 페이지에 제보할 수 있으며, “회사”는 제보 내용을 규정된 절차에 따라 처리하여야 한다." },
                    { num: "2", title: "“회사”는 “파트너사”의 제보 업무를 처리하는 과정에서 “파트너사”관련 정보와 인적사항 등을 보호하며, 제보로 인하여 부당하게 차별 대우를 받거나 거래 중단 등의 행위가 발생되지 않도록 해야 한다."},
                    { num: "3", title: "“회사”는 “파트너사”와 거래 중 발생한 제반 민원 사항에 대한 재발방지를 위하여 최선을 다한다."},
                ],
            },
            {
                no: "09",
                title: "제재",
                items: [
                    { num: "1", title: "“회사”의 임직원은 업무를 수행함에 있어 이 기준을 준수하여야 하며, 당사자의 고의 또는 중대한 과실로 이 기준을 위반한 사실이 확인된 경우에는 “회사”의 윤리 규범 등에 따라 제재조치를 진행하여야 한다." },
                    { num: "2", title: "“회사”의 임직원이 사기, 횡령, 배임, 금전수수, 부정청탁 등에 해당할 경우 “회사”는 해당 임직원을 형사고발할 수 있다." },
                ],
            },
            {
                no: "부칙",
                title: "",
                addendumText: "부칙(2018.04.01.)<br />이 기준은 2018.04. 01. 제정·시행한다.<br /><br />부칙(2024.06.11.)<br />이 기준은 2024.06.11. 개정·시행한다.",
            },
        ],
        ComplianceManagerBannerP1:
            "자율준수 관리자는 공정거래 자율준수 프로그램(CP)의 효과적 운영을 위해 이사회 등 최고 의사결정기구에서 임명됩니다.",
        ComplianceManagerBannerP2:
            "임명된 관리자는 CP 기준과 절차에 따라 전 구성원의 법규 준수를 지원하고, 자율준수 활동이 현장에서 실현될 수 있도록 역할을 수행합니다.",
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
        EthicsReportTargetItems: [
            {
                num: "01",
                title: "불량한 직무수행",
                desc: "업무 소홀/미흡 및 겸업 (투잡 등)<br />기준 위반",
            },
            {
                num: "02",
                title: "금전/선물 등 수수 및 접대",
                desc: "당사 임직원과 금전/선물 등을<br />주거나 받거나, 접대를 하는 등의 행위",
            },
            {
                num: "03",
                title: "금전 거래 및 공동 투자",
                desc: "당사 임직원이 금전 거래를<br />하는 등의 행위",
            },
            {
                num: "04",
                title: "불공정 거래 및 부정 청탁",
                desc: "신규점포 오픈 시 기준<br />미준수 및 불공정 행위",
            },
            {
                num: "05",
                title: "불합리한 업무 관행/제도 개선 건의",
                desc: "불필요한 업무 개선 요청",
            },
            {
                num: "06",
                title: "성희롱 및 직장내 괴롭힘",
                desc: "",
            },
        ],
        EthicsConsentItems: [
            "- 입력하신 정보는 신속하고 정확한 처리를 위해 관련 부서(담당자)에게 전달되며 문의 및 컴플레인 응대를 위해서 사용됩니다.",
            "- 제공받는 자: 고객님이 문의 신청한 GS리테일 점포 관리자, GS리테일 자회사, GS리테일에 입점 된 상품 제조사의 관리자(처리자)",
            "- 이용 목적: 문의사항 확인 및 답변을 위해 활용",
            "- 개인정보 항목: 이름, 연락처, 이메일",
            "- 보유 및 이용기간: 접수 후 1년",
        ],
        EthicsConsentItems2: [
            "- 입력하신 정보는 문의사항에 대한 확인을 위해서만 사용합니다. 수집항목, 이용 및 목적, 보유 및 이용기간은 다음과 같으며, 기타 개인정보 취급사항은 홈페이지 하단의 '개인정보 처리방침'을 참고하시기 바랍니다.",
            "- 수집하는 개인정보 항목: 이름, 연락처, 이메일",
            "- 수집이용 및 목적: 수집한 개인정보를 본인 식별, 문의사항 확인 및 답변을 위해 활용",
            "- 보유 및 이용기간: 접수 후 1년",
        ],
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

watch(CTabIdxCompliance, () => {
    CTabIdxFairTradeBiz.value = 0;
});

const resetEthicsInquiryState = () => {
    isEthicsInquiryOpen.value = false;
    isEthicsConsentAgreed.value = false;
    isEthicsConsentAgreed2.value = false;
};

const onTabChange1 = (idx) => {
    CTabIdx.value = idx;
    CTabIdxEsgArchive.value = 0;
    CTabIdxEsgSystem.value = 0;
    CTabIdxCompliance.value = 0;
    resetEthicsInquiryState();
};

const goToWhistleTab = (idx) => {
    CTabIdxEsgSystem.value = idx;
};

const openEthicsInquiry = () => {
    isEthicsInquiryOpen.value = true;
};

const closeEthicsInquiry = () => {
    resetEthicsInquiryState();
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
.panel,
.panel_third_depth { padding-top: 80px; }
/* v-html 삽입 노드에는 scoped data 속성이 없으므로 :deep 필요 */
:deep(.txt_blue){color:#107AF2 !important;}
:deep(.txt_warn){color:#FB6432 !important;}
section + section{padding-top:120px;}
.sub_header{margin-bottom:40px;}
.sub_header h3 { font-weight: 700; font-size: 4rem; line-height: 1.35; letter-spacing: -0.01em; }
.sub_header p { margin-top: 16px; font-size: 2.4rem; line-height: 1.5; letter-spacing: -0.01em; }
.tab_header{margin-bottom:80px; padding: 20px 0; text-align: center;}
.tab_header > h2{font-weight: 700;font-size: 3.2rem;line-height: 1.3;letter-spacing: -0.01em;}
.tab_header > p{margin-top: 16px; font-size: 2.4rem; line-height: 1.5; letter-spacing: -0.01em;}
.list_dotted > li { padding-left: 12px; position: relative }
.list_dotted > li + li { margin-top: 8px }
.list_dotted > li::before { content: ""; width: 4px; height: 4px; background-color:#67676F; border-radius: 50%; position: absolute; top: 11px; left: 0 }
.list_dotted > li > p { margin: 0; color: #67676F; font-size: 1.8rem; line-height: 1.4 }
@media (max-width: 768px) {
  .list_dotted > li { padding-left: 6px }
  .list_dotted > li::before { top: 9px; width:2px; height:2px }
  .list_dotted > li + li { margin-top: 8px }
  .list_dotted > li > p { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em }
}

:deep(.feature_cards_grid.feature_card_list) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
    align-items: stretch;
}
:deep(.feature_cards_grid.fair_trade_guideline_cards.feature_card_list) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
:deep(.feature_cards_grid.fair_trade_guideline_cards.feature_card_list .feature_card_item) {min-height:288px;}
.fair_trade_guideline_cards :deep(.feature_card_action) { margin-top: 40px; }

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
.cp_manager_role_cards :deep(.feature_card_item) { min-height: 140px; }
.fair_trade_work_standard_sec :deep(dl.board_type_toggle) { border-top: 1px solid #161616; }
.fair_trade_work_standard_sec :deep(dl.board_type_toggle > dd) { border-bottom: 1px solid #d7d7df; }
.fair_trade_work_standard_sec :deep(dt > a.acc_tit_btn) { min-height: 80px; padding: 24px 20px; font-weight: 700; font-size: 2.4rem; line-height: 1.35; letter-spacing: -0.01em; }
.fair_trade_work_standard_sec :deep(dt > a.acc_tit_btn .acc_tit_txt) {  font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; display: inline-flex; align-items: center; }
.fair_trade_work_standard_sec :deep(dt > a.acc_tit_btn .acc_num) { margin-right: 8px; padding:2px 9px; font-weight: 700; font-size: 1.8rem; line-height: 1.5; letter-spacing: 0; }
.fair_trade_standard_sections { margin: 0; padding: 16px 32px 40px; display:flex; flex-direction:column; gap:32px;}
.fair_trade_standard_sections > li { list-style: none; }
.fair_trade_standard_sections > li > article { display: flex; flex-direction: column; gap: 16px; }
.fair_trade_standard_sections > li > article > h4 { font-size: 2rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.fair_trade_standard_body { padding-left: 24px; }
.fair_trade_standard_body > p { margin: 0 0 16px; color: #67676f; font-size: 1.8rem; line-height: 1.4; }
.fair_trade_standard_sections > li > article.gray_box { padding: 20px 40px;  border-radius: 0; }
.fair_trade_standard_sections > li > article.gray_box p { margin: 0; color: #67676f; font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
.num_list {padding: 0; list-style: none; counter-reset: standard-item; }
.num_list > li { margin-left: 0; padding-left: 32px; color: #67676f; font-size: 1.8rem; line-height: 1.5; position: relative; counter-increment: standard-item; }
.num_list > li::before { content: counter(standard-item); width: 20px; height: 20px; border: 1px solid #67676f; border-radius: 50%; color: #67676f; font-size: 1.2rem; line-height: 1; text-align: center; display: inline-flex; align-items: center; justify-content: center; position: absolute; top: 4px; left: 0; box-sizing: border-box; }
.num_list > li + li { margin-top: 8px; }
.num_list > li > p { color: #67676f; font-size: 1.8rem; font-weight: 400; line-height: 1.4;}
.num_list > li > ul { margin-top: 8px; padding-left: 24px; }
.num_list > li > ul > li { color: #67676f; font-size: 1.8rem; line-height: 1.4; }
.num_list > li > ul > li > p { margin: 0; color: #67676f; font-size: 1.8rem; line-height: 1.4; letter-spacing: -0.01em; }
.txt_indent_24 { padding-left: 24px; }
.num_list > li > ul > li > ul {padding-left:24px;}
.num_list > li > ul > li > ul > li {color: #67676f; font-size: 1.8rem; line-height: 1.4; letter-spacing: -0.01em; list-style: none; }
.plain_list {padding: 0; }
.plain_list > li { color: #67676f; font-size: 1.8rem; line-height: 1.5; letter-spacing: -0.01em; list-style: none; }
.plain_list > li > p { margin: 0; color: #67676f; font-size: 1.8rem; line-height: 1.5; letter-spacing: -0.01em; }
.fair_trade_standard_dl { border:0;}
.fair_trade_standard_dl > dt { margin-top: 16px; color: #67676f; font-size: 1.8rem; font-weight: 400; line-height: 1.4; letter-spacing: 0; }
.fair_trade_standard_dl > dd { margin: 0; border:0; color: #67676f; font-size: 1.8rem; line-height: 1.4; letter-spacing: 0; }
.fair_trade_standard_dl dd + dt{margin-top: 16px;}
.fair_trade_standard_dl > dd > ul{padding-left:24px;}
.fair_trade_standard_dl > dd > ul > li > ul{padding-left:24px;}
.fair_trade_standard_dl > dd > p { margin: 0; color: #67676f; font-size: 1.8rem; line-height: 1.4; letter-spacing: 0; }

.fair_trade_standard_desc_list { margin: 0; padding: 0; }
.fair_trade_standard_desc_list > li { list-style: none; color: #67676f; font-size: 1.8rem; line-height: 1.4; letter-spacing: 0; }
/* 준법경영 > 자율준수 관리자 선임절차: width=height clamp로 원형 고정(PC~태블릿), 768 이하 세로 */

/* 준법경영 > 자율준수 관리자 배너 (Figma 491:13873) */
.cp_manager_banner { width: 100%; min-height: 588px; padding:67px 130px; background: url(@/assets/images/dummy/gsrsu040101_10.png) no-repeat center center / cover; display: flex; justify-content: flex-end; align-items: center; }
.cp_manager_banner figcaption { max-width:621px; margin-left:auto; }
.cp_manager_banner figcaption > strong{font-size: 4rem;line-height: 1.3;letter-spacing: -0.01em;}
.cp_manager_banner figcaption p{margin-top:40px;font-size: 2rem;line-height: 1.35;letter-spacing: -0.01em;}
.cp_manager_banner_content { margin-top:40px; display: flex; gap: 17px; align-items: center; }
.cp_manager_banner + p{margin-top:64px;font-size: 2.4rem;line-height: 1.5;letter-spacing: -0.01em;}
.cp_manager_banner_content dl dt, .cp_manager_banner_content dl dd{font-size: 1.4rem;line-height: 1.4;letter-spacing: -0.01em;}

.cp_manager_banner_content dl dd strong{
font-size: 1.6rem;
font-weight: 700;
line-height: 1.24;
}
.cp_manager_banner_content >div{flex: 0 1 auto;}
.cp_appoint_board .process_flow { display: flex; gap: 20px; align-items: center; width: 100%; box-sizing: border-box; flex-wrap: wrap; }
.cp_appoint_board .process_flow > article { flex: 0 1 220px; aspect-ratio: 1; min-width: 0; 
   background-color: #f8f8f8; border-radius: 999px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; overflow: hidden; }
.cp_appoint_board .process_flow > article > h4 {  color: #000000; font-size:2rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.cp_appoint_board .process_flow > article > h4 + p { margin: 12px 0 0; color: #000000; font-size:1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; word-break: keep-all; }
.purpose_feature_cards :deep(.feature_card_title) {
    color: #107af2;
}
:deep(.ethics_target_list.num_info_list) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 64px 60px;
}
.ethics_target_list :deep(.num_info_item) {
    padding: 0;
    border-bottom: 0;
}
.ethics_target_list :deep(.num_info_title) {
    margin-bottom: 24px;
}
.ethics_target_list :deep(.num_info_num) {
    font-size: 2.8rem;
    line-height: 1.35;
    letter-spacing: -0.01em;
}
.ethics_target_list :deep(.num_info_title > strong) {
    font-size: 2.4rem;
    line-height: 1.35;
    letter-spacing: -0.01em;
}
.ethics_target_list :deep(.num_info_body > p) {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.24;
    letter-spacing: 0;
}

.report_form_wrap .apply_form .form_field > :deep(.select),
.report_form_wrap .apply_form .form_field > :deep(.input_wrap) {
    width: 428px;
    max-width: 428px;
}
.report_form_wrap .apply_form .form_field_phone label.select,
.report_form_wrap .apply_form .form_field_phone > :deep(.input_wrap) {
    width: 134px;
    max-width: 134px;
}
.report_form_wrap .apply_form .form_field_name > :deep(.input_wrap){
    width: 205px;
    max-width: 205px;
}
.report_form_wrap .apply_form .form_field_email > :deep(.input_wrap:nth-child(1)) {
    width: 205px;
    max-width: 205px;
}
.report_form_wrap .apply_form .form_field_email > :deep(.input_wrap:nth-child(3)),
.report_form_wrap .apply_form .form_field_email label.select {
    width: 180px;
    max-width: 180px;
}

.report_form_wrap .apply_form .form_field_content > textarea {
    width: 600px;
    min-height: 170px;
    padding: 12px 16px;
    border: 1px solid #c4c4d0;
    border-radius: 12px;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
    resize: none;
}
.report_form_wrap .apply_form .form_field_content > textarea::placeholder{
    color: #A4A4B0;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
}
.report_form_wrap .apply_form .form_row_content {
    align-items: start;
}
.report_form_wrap .apply_form .form_row_content .form_label {
    padding-top: 68px;
}
.report_form_wrap .apply_form .form_field_file .file_row {
    display: flex;
    align-items: center;
    gap: 10px;
}
.report_form_wrap .apply_form .form_field_file .file_row > span {
    color: #161616;
    font-size: 1.4rem;
    line-height: 1.4;
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
    /* :deep(.feature_cards_grid.feature_card_list) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    } */
    :deep(.ethics_target_list.num_info_list) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 40px 20px;
    }
}
@media screen and (max-width: 768px) {
    :deep(.feature_cards_grid.feature_card_list) {
        grid-template-columns: 1fr;
    }
    :deep(.feature_cards_grid.fair_trade_guideline_cards.feature_card_list){
        grid-template-columns: 1fr;
    }
    .fair_trade_work_standard_sec { margin-top: 32px; }
    .fair_trade_work_standard_sec :deep(dt > a.acc_tit_btn) { min-height: 64px; padding: 0 20px; font-size: 1.8rem; line-height: 1.4; letter-spacing: -0.01em; }
    .fair_trade_work_standard_sec :deep(dt > a.acc_tit_btn .acc_tit_txt) { font-size: 1.8rem; line-height: 1.4; letter-spacing: -0.01em; }
    /* .fair_trade_standard_sections { margin: 12px 20px 20px; } */
    .fair_trade_standard_sections > li > article { gap: 20px; }
    .fair_trade_standard_sections > li > article > h4 { font-size: 1.8rem; line-height: 1.4; letter-spacing: -0.01em; }
    .fair_trade_standard_body { padding-left: 20px; }
    .fair_trade_standard_body { gap: 20px; }
    .fair_trade_standard_body > p { margin: 0; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .fair_trade_standard_sections > li > article.gray_box { padding: 16px 20px; }
    .fair_trade_standard_sections > li > article.gray_box p { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .num_list > li { padding-left: 28px; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .num_list > li::before { width: 18px; height: 18px; font-size: 1.1rem; top: 2px; }
    .num_list > li > strong { font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .num_list > li > ul > li { margin-left: 16px; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .num_list > li > ul > li > p { font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .num_list > li > ul > li > ul > li {font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .plain_list { padding-left: 0; }
    .plain_list > li { font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .plain_list > li > p { font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .fair_trade_standard_dl > dt { font-size: 1.6rem; line-height: 1.4; letter-spacing: 0; }
    .fair_trade_standard_dl > dd { font-size: 1.6rem; line-height: 1.4; letter-spacing: 0; }
    .fair_trade_standard_dl > dd > p { font-size: 1.6rem; line-height: 1.4; letter-spacing: 0; }
    .fair_trade_standard_desc_list > li { font-size: 1.6rem; line-height: 1.4; letter-spacing: 0; }
    /* .fair_trade_guideline_cards :deep(.feature_card_action) a {
        width: 100%;
        min-width: 0;
    } */
    .ethics_target_list :deep(.num_info_icon) {
        width: 60px;
        height: 60px;
    }
    .ethics_target_list :deep(.num_info_title) {
        margin-bottom: 6px;
    }
    .ethics_target_list :deep(.num_info_num) {
        font-size: 1.6rem;
        line-height: 1.24;
        letter-spacing: 0;
    }
    .ethics_target_list :deep(.num_info_title > strong) {
        font-size: 1.8rem;
        line-height: 1.5;
        letter-spacing: 0;
    }
    .ethics_target_list :deep(.num_info_body > p) {
        font-size: 1.4rem;
        line-height: 1.4;
        letter-spacing: -0.01em;
    }
    .report_form_wrap .apply_form .form_field > :deep(.input_wrap),
    .report_form_wrap .apply_form .form_field_phone label.select,
    .report_form_wrap .apply_form .form_field_phone > :deep(.input_wrap),
    .report_form_wrap .apply_form .form_field_email > :deep(.input_wrap:nth-child(1)),
    .report_form_wrap .apply_form .form_field_email > :deep(.input_wrap:nth-child(3)),
    .report_form_wrap .apply_form .form_field_email label.select {
        width: 100%;
        max-width: 100%;
    }
    .report_form_wrap .apply_form .form_field_content > textarea {
        width: 100%;
    }
    .report_form_wrap .apply_form .form_row_content .form_label {
        padding-top: 0;
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
.gray_box p{margin-top:40px;}
.gray_box > .button_area{width: 100%; display: flex; justify-content: center;}
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
.base_list.type02 { padding: 64px; background-color: #f8f8f8; border-radius: 20px;}
.base_list.type02 .base_item:first-child {padding-top: 0;}
.base_list.type02 .base_item:last-child {padding-bottom: 0; border-bottom: 0; }
.panel_third_depth .base_list .base_item:first-child{border-top: 1px solid #E5E5E9;}
.signature_box { margin-top: 40px; padding: 40px 64px; border: 1px solid #E5E5E9; border-radius: 12px; display: flex; align-items: flex-end; justify-content: space-between;}
.signature_box > div {flex:1;}
.signature_box p {font-weight: 700;font-size: 2rem;line-height: 1.35;letter-spacing: -0.01em;}
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

/* 정도경영 > 제도 > 제보 이용 안내 */
.base_item .gray_box{margin-top:20px; padding:56px 64px;}
.base_item .gray_box .process_flow{display: flex; gap: 20px; align-items: center;}
.base_item .gray_box .process_flow p {margin:0;padding:20px;color:#107AF2; font-weight: 700;font-size: 1.6rem;line-height: 1.24;text-align: center; border-radius: 99px; background-color:#E7F2FE; flex:0 1 300px;}
.panel_third_depth .reward_criteria {
    width: 100%;
    margin-top: 16px;
}
.base_item .gray_box.type02{
    padding:40px 64px; border-radius: 0;
}
.base_item .gray_box.type02 strong{
    color: #67676F;
font-size: 2rem;
line-height: 1.35;
letter-spacing: -0.01em;


}
.panel_third_depth .common_table_scroll {
    width: 100%;
    margin-top: 20px;
    padding:0 20px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

.panel_third_depth .common_table {
    width: 100%;
    min-width: 640px;
    border-collapse: collapse;
    table-layout: fixed;
    position: relative;
}
.panel_third_depth .common_table:before{
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
.panel_third_depth .common_table th,
.panel_third_depth .common_table td {
    border-bottom: 1px solid #e5e5e9;
    vertical-align: top;
    text-align: left;
}

.panel_third_depth .common_table th {
    padding:27px 24px;
    background-color: #f8f8f8;
    color: #161616;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.5;
}
.panel_third_depth .common_table th + th{
    border-left: 1px solid #e5e5e9;
}


.panel_third_depth .common_table td{
    padding:21px 24px;
}
.panel_third_depth .common_table td p {
    margin: 0;
    font-size: 1.8rem;
    line-height: 1.4;
}
.panel_third_depth .common_table td p + p {
    margin-top: 12px;
}
.panel_third_depth .common_table_sub {
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
/* .base_list .gray_box {
    margin-top: 24px;
}
.base_list .gray_box > strong {
    color: #67676f;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.01em;
    display: block;
}
.ba.base_list .gray_box > p {
    margin-top: 16px;
    color: #67676f;
    font-size: 2rem;
    line-height: 1.35;
    letter-spacing: -0.01em;
} */

/* 정도경영 > 제보 (Figma 474:29330) */
.report_intro_desc {
    margin-bottom: 80px;
    font-size: 2.4rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
    text-align: center;
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
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.report_channel_thumb.thumb_voice {
    background-image: url(@/assets/images/dummy/gsrsu040101_07.png);
}
.report_channel_thumb.thumb_ethics {
    background-image: url(@/assets/images/dummy/gsrsu040101_08.png);
}
.report_channel_thumb.thumb_redwhistle {
    background-image: url(@/assets/images/dummy/gsrsu040101_09.png);
} 
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

.signature_box.type02{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    flex-wrap: wrap;
}
.signature_box.type02 strong {
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 1.35;
    letter-spacing: -0.01em;
    display: block;
}

.signature_box.type02 .button_area {
    margin-top: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-end;
}
.panel_inner header.sub_header p:only-child {
    margin-top: 0;
}
@media screen and (max-width: 768px) {
    .p_br{display:none;}
    .content { width: 100vw; max-width: 100%; padding: 0 20px 100px; }
    .panel,
    .panel_third_depth {padding-top: 48px;}
    .title_wrap { display: none; }
    .page_title { font-size: 4rem; }
    .visual_sub { font-size: 2rem; }
    .tab_header{margin-bottom:56px; padding: 0; text-align: left;}
    .tab_header > h2 {font-size: 1.8rem; line-height: 1.4; text-align: left;}
    .tab_header > p {font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em;}
    .sub_header{margin-bottom:32px;}
    .sub_header h3 { font-size: 2.4rem; text-align: left; }
    .sub_header p { margin-top: 12px; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    section + section{padding-top:80px;}
    .gray_box{padding: 40px;}
    .gray_box p{margin-top: 32px; }
    :deep(.feature_cards_grid.feature_card_list) { gap: 12px; }
    .button_area [class*="btn_"] {width:auto; flex:1 1 auto;}
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
    .base_list.type02 { padding: 32px; border-radius: 12px; }
    .signature_box { margin-top: 24px; padding: 24px 20px; border-radius: 12px; display: flex; flex-direction: column; align-items: flex-start; gap: 16px; }
    .signature_box p { font-size: 1.6rem; line-height: 1.5; }
    .signature_box.type02{justify-content: flex-start;align-items: flex-start;}
    .signature_box.type02 strong{font-size: 2rem;}
    .base_item .button_area,
    .signature_box.type02 .button_area {width: 100%; display: flex; flex-direction: column; gap: 8px;}
    .base_item .button_area :deep([class*="btn_"]),
    .signature_box.type02 .button_area :deep([class*="btn_"]) {width: 100%;}
    .signature_box dl { width: 100%; margin-top: 20px; }
    .signature_box dl > dt { font-size: 1.4rem; line-height: 1.5; }
    .signature_box dl > dd { font-size: 1.4rem; line-height: 1.5; }
    .signature_box dl > dd { margin-top: 2px; }
    .signature_box span { width: 100%; font-size: 1.4rem; line-height: 1.4; text-align: right; }
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
        padding: 40px 24px;
        /* padding: clamp(24px, 6.4vw, 40px) clamp(16px, 5.33vw, 24px); */
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
 
    .cp_appoint_board .process_flow { flex-direction: column; }
    .cp_manager_banner { padding: 40px 20px;justify-content: flex-start; }
    .cp_manager_banner > figcaption { width: 100%; max-width: none; min-width: 0; }
    .cp_manager_banner > figcaption > strong{font-size: 2.4rem;}
    .cp_manager_banner > figcaption > p { font-size: 1.6rem; }
    .cp_manager_banner > figcaption > p + p { margin-top: 12px; font-size: 1.6rem; }
    .cp_manager_banner + p{margin-top:40px;font-size: 1.6rem;line-height: 1.5;letter-spacing: -0.01em;}
    .panel_third_depth .common_table th,
    .panel_third_depth .common_table td {
        padding: 16px 12px;
    }
    .panel_third_depth .common_table th {
        font-size: 1.6rem;
    }
    .panel_third_depth .common_table td p {
        font-size: 1.6rem;
    }
    .panel_third_depth .common_table_sub {
        font-size: 1.4rem;
    }

    .panel_third_depth .reward_report_btn {
        margin-top: 32px;
    }
    .base_list .gray_box {
        padding: 24px 20px;
    }
    .base_list .gray_box > strong{
        font-size: 1.8rem;
    }
    .base_list .gray_box > p {
        margin-top: 12px;
        font-size: 1.4rem;
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

   
}
</style>


