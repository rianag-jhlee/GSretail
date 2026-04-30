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
                                    <template v-if="item.key === '01'"> 
                                        <ol class="fair_trade_standard_sections">
                                            <li v-for="section in t.FairTradePartnerStandardSections" :key="'sup-sec-' + section.no">
                                                <article :class="{ gray_box: section.no === '부칙' }">
                                                    <template v-if="section.no === '부칙'">
                                                        <p v-html="section.addendumText"></p>
                                                    </template>
                                                    <template v-else>
                                                        <h4>{{ section.title ? `${section.no} ${section.title}` : section.no }}</h4>
                                                        <div class="fair_trade_standard_body">
                                                            <p v-if="section.lead">{{ section.lead }}</p>
                                                            <component v-if="section.items" :is="section.no === '05' ? 'ul' : 'ol'" :class="section.no === '05' ? 'plain_list' : 'num_list'">
                                                                <li v-for="row in section.items" :key="'sup-sec-' + section.no + '-' + row.num">
                                                                    <p v-html="row.title"></p>
                                                                    <ul v-if="row.details">
                                                                        <li v-for="(detail, dIdx) in row.details" :key="'sup-sec-' + section.no + '-' + row.num + '-' + dIdx">
                                                                            <template v-if="typeof detail === 'string'">
                                                                                {{ detail }}
                                                                            </template>
                                                                            <template v-else>
                                                                                <p>{{ detail.text }}</p>
                                                                                <ul v-if="detail.children">
                                                                                    <li v-for="(child, cIdx) in detail.children" :key="'sup-sec-' + section.no + '-' + row.num + '-' + dIdx + '-' + cIdx">{{ child }}</li>
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
                desc: "파트너사의 공정한 선정 · 운영을 위한 실천사항",
            },
            {
                num: "02",
                title: "서면 발급, 보존 가이드 라인",
                desc: "하도급거래에서의 서면발급 및 보존에 관한 가이드라인",
            },
            {
                num: "03",
                title: "하도급 거래 심의위원회 운영 규정",
                desc: "GS리테일 하도급거래 내부 심의위원회 설치·운영을 위한 가이드라인",
            },
            {
                num: "04", 
                title: "규정계약 체결 가이드 라인",
                desc: "대·중소기업간 상생협력을 위한 계약 체결 가이드라인",
            },
       
        ],
        FairTradeWorkStandardAccordionItems: [
            {
                key: "01",
                title: "<span class='acc_num'>1.</span>파트너사 선정, 운영 기준",
                desc: "파트너사의 공정한 선정 및 운영을 위한 기본 원칙입니다.",
            },
            {
                key: "02",
                title: "<span class='acc_num'>2.</span>서면 발급 및 보존 기준",
                desc: "하도급거래에서의 서면 발급 및 보존 절차를 안내합니다.",
            },
            {
                key: "03",
                title: "<span class='acc_num'>3.</span>하도급 거래 심의위원회 운영 기준",
                desc: "하도급거래 심의위원회의 설치, 심의, 의결 절차를 규정합니다.",
            },
            {
                key: "04",
                title: "<span class='acc_num'>4.</span>표준계약 체결 기준",
                desc: "대·중소기업 상생협력을 위한 계약 체결 기준을 안내합니다.",
            },
            {
                key: "05",
                title: "<span class='acc_num'>5.</span>파트너사 경영정보요구 기준",
                desc: "파트너사의 공정한 선정 · 운영을 위한 실천사항",
            },
            {
                key: "06",
                title: "<span class='acc_num'>6.</span>파트너사 종업원 파견 기준",
                desc: "하도급거래에서의 서면발급 및 보존에 관한 가이드라인",
            },
            {
                key: "07",
                title: "<span class='acc_num'>7.</span>파트너사 특약매입거래 기준",
                desc: "GS리테일 하도급거래 내부 심의위원회 설치·운영을 위한 가이드라인",
            },
            {
                key: "08", 
                title: "<span class='acc_num'>8.</span>파트너사 반품관련 기준",
                desc: "대·중소기업간 상생협력을 위한 계약 체결 가이드라인",
            },
        ],
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
.fair_trade_standard_sections > li > article { display: flex; flex-direction: column; gap: 32px; }
.fair_trade_standard_sections > li > article > h4 { font-size: 2rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.fair_trade_standard_body { padding-left: 24px; }
.fair_trade_standard_body > p { margin: 0 0 16px; color: #67676f; font-size: 1.8rem; line-height: 1.4; }
.fair_trade_standard_sections > li > article.gray_box { padding: 20px 40px;  border-radius: 0; }
.fair_trade_standard_sections > li > article.gray_box > p { margin: 0; color: #67676f; font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
.num_list {padding: 0; list-style: none; counter-reset: standard-item; }
.num_list > li { margin-left: 0; padding-left: 32px; color: #67676f; font-size: 1.8rem; line-height: 1.5; position: relative; counter-increment: standard-item; }
.num_list > li::before { content: counter(standard-item); width: 20px; height: 20px; border: 1px solid #67676f; border-radius: 50%; color: #67676f; font-size: 1.2rem; line-height: 1; text-align: center; display: inline-flex; align-items: center; justify-content: center; position: absolute; top: 4px; left: 0; box-sizing: border-box; }
.num_list > li + li { margin-top: 8px; }
.num_list > li > p { color: #67676f; font-size: 1.8rem; font-weight: 400; line-height: 1.4;}
.num_list > li > ul { margin-top: 8px; padding-left: 24px; }
.num_list > li > ul > li { color: #67676f; font-size: 1.8rem; line-height: 1.4; }
.num_list > li > ul > li > p { margin: 0; color: #67676f; font-size: 1.8rem; line-height: 1.4; letter-spacing: -0.01em; }
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
    .fair_trade_standard_sections > li > article.gray_box > p { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
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


