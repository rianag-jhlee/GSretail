<template>
    <div class="wrap_gsrst">
        <!-- HEADER -->
        <header class="page_header top_visual" :style="{ backgroundImage: `url(${imgBg})` }">
            <div class="header_inner">
                <h2 class="header_title">GS THE FRESH 창업안내</h2>
            </div>
        </header>

        <!-- BODY -->
        <div class="cont_inner">
            <!-- Depth 1: 페이지 탭 (type_01: 하단 보더 언더라인) -->
            <Tabs :tab-items="depth1Tabs" tab-class="type_01" v-model="activeD1" :tab-slide="true" />

            <!-- Depth 2: 섹션 탭 (type_02: pill 스타일) --> 
            <Tabs v-show="activeD1 === 0" :tab-items="depth2Tabs" tab-class="type_02" v-model="activeD2" :tab-slide="true"/>

            <!-- 가맹 조건 안내 (D2=0) -->
            <div class="panel" v-show="activeD1 === 0 && activeD2 === 0">
                <!-- Depth 3: 타입 탭 -->
                <div class="tab_d3_wrap">
                    <div class="inner">
                        <nav class="tab_type" role="tablist" aria-label="가맹 타입">
                            <button
                                v-for="(tab, i) in depth3Tabs"
                                :key="i"
                                type="button"
                                role="tab"
                                :class="{ active: activeD3 === i }"
                                :aria-selected="activeD3 === i"
                                @click="activeD3 = i"
                            >{{ tab.item }}</button>
                        </nav>
                    </div>
                </div>
                <div class="tab_content_wrap">
                    <!-- GSF1타입 (228:18909) -->
                    <div v-show="activeD3 === 0" class="tab_content" role="tabpanel">
                        <p class="type_info_bar">GSF1타입 - 본부가 임차하여 경영주 운영</p>
                        <div class="type_table_wrap">
                            <table class="type_table">
                                <colgroup>
                                    <col class="col_item_main" />
                                    <col class="col_item_sub" />
                                    <col class="col_cost" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th colspan="2" scope="col">항목</th>
                                        <th scope="col">비용</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th rowspan="5" scope="rowgroup">투자 금액</th>
                                        <th>가맹비</th>
                                        <td>1,100만원 <br class="m_br">(부가세포함)</td>
                                    </tr>
                                    <tr>
                                        <th>초기 상품대</th>
                                        <td>7,000만원</td>
                                    </tr>
                                    <tr>
                                        <th>소모품</th>
                                        <td>700만원</td>
                                    </tr>
                                    <tr>
                                        <th>시설보증금</th>
                                        <td>500만원</td>
                                    </tr>
                                    <tr>
                                        <th>개점투자 계</th>
                                        <td>9,300만원</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">임차비용 부담주체</th>
                                        <td>본부</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">시설투자 부담주체</th>
                                        <td>본부</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">예치보증금</th>
                                        <td>10,000만원 (보증보험 또는 현금)</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">경영주 투자 합계</th>
                                        <td>최소 19,300만원</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">가맹 수수료 <br class="m_br">(부가세별도)</th>
                                        <td>57% 매출총이익 구간별 52% ~ 62%</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">계약기간 <br class="m_br">(최초/재계약)</th>
                                        <td>3년 / 3년 단위</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">담보설정</th>
                                        <td>없음</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">** 최저 <br class="m_br">수입 보조금</th>
                                        <td>영업면적 200평  <br class="m_br">초과 : 18백만/월 영업면적 165평 이상~200평 이하 : 16백만/월 영업면적 165평 미만 : 13백만/월</td>
                                    </tr>
                                </tbody>
                            </table>
                            <ul class="list_caution">
                                <li>
                                    <p>*경영주 총수입(경영주 월매출총이익 + 본부지원금) 기준이며, 인건비 등 영업비용 차감 전 입니다. (개점일로부터 최소 1년만 적용)</p>
                                </li>
                            </ul>
                        </div>
                        <div class="type_graph_wrap">
                            <strong>GSF1타입</strong>
                            <ul class="type_graph_inner">
                                <li class="type_graph_item">
                                    <p>매출이익<br class="p_br" />배분율</p>
                                    <picture>
                                        <source media="(max-width: 768px)" :srcset="imgGph01Mo" />
                                        <img :src="imgGph01" alt="GSF1타입 매출이익 배분율" />
                                    </picture>
                                </li>
                                <li class="type_graph_item">
                                    <p>월매출<br class="p_br" />총 이익 구간</p>
                                    <picture>
                                        <source media="(max-width: 768px)" :srcset="imgGph02Mo" />
                                        <img :src="imgGph02" alt="GSF1타입 월매출 총 이익 구간" />
                                    </picture>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- GSF2타입 / GSF3타입: 추후 구현 -->
                    <div v-show="activeD3 === 1" class="tab_content" role="tabpanel">
                        <p class="type_info_bar">GSF2타입 - 경영주가 총투자비의 51% 부담. 경영주 운영</p>
                        <div class="type_table_wrap">
                            <table class="type_table">
                                <colgroup>
                                    <col class="col_item_main" />
                                    <col class="col_item_sub" />
                                    <col class="col_cost" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th colspan="2" scope="col">항목</th>
                                        <th scope="col">비용</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th rowspan="5" scope="rowgroup">투자 금액</th>
                                        <th>가맹비</th>
                                        <td>1,100만원 <br class="m_br">(부가세 포함)</td>
                                    </tr>
                                    <tr>
                                        <th>초기 상품대</th>
                                        <td>7,000만원</td>
                                    </tr>
                                    <tr>
                                        <th>소모품</th>
                                        <td>700만원</td>
                                    </tr>
                                    <tr>
                                        <th>시설보증금</th>
                                        <td>500만원</td>
                                    </tr>
                                    <tr>
                                        <th>개점투자 계</th>
                                        <td>9,300만원</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">임차비용 부담주체</th>
                                        <td>본부</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">시설투자 부담주체</th>
                                        <td>본부</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">예치보증금</th>
                                        <td>* 점포 총 투자비 X 51% ~ 9,300만원 (현금)</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">경영주 투자 합계</th>
                                        <td>9,300만원 + 예치보증금</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">가맹 수수료 <br class="m_br">(부가세별도)</th>
                                        <td>49% 매출총이익 구간별 49% ~ 55%</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">계약기간 <br class="m_br">(최초/재계약)</th>
                                        <td>3년 / 3년 단위</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">담보설정</th>
                                        <td>없음</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">** 최저 <br class="m_br">수입 보조금</th>
                                        <td>영업면적 200평  <br class="m_br">초과 : 18백만/월 영업면적 165평 이상~200평 이하 : 16백만/월 영업면적 165평 미만 : 13백만/월</td>
                                    </tr>
                                </tbody>
                            </table>
                            <ul class="list_caution">
                                <li><p>*점포 총 투자비는 임차비용, 시설투자비용, 개점투자비의 총 합산액.</p></li>
                                <li><p>**경영주 총수입(경영주 월매출총이익 + 본부지원금) 기준이며, 인건비 등 영업비용 차감 전 입니다. (개점일로부터 최소 1년만 적용)</p></li>
                            </ul>
                        </div>
                        <div class="type_graph_wrap">
                            <strong>GSF2타입</strong>
                            <ul class="type_graph_inner">
                                <li class="type_graph_item">
                                    <p>매출이익<br class="p_br" />배분율</p>
                                    <picture>
                                        <source media="(max-width: 768px)" :srcset="imgGph03Mo" />
                                        <img :src="imgGph03" alt="GSF1타입 매출이익 배분율" />
                                    </picture>
                                </li>
                                <li class="type_graph_item">
                                    <p>월매출<br class="p_br" />총 이익 구간</p>
                                    <picture>
                                        <source media="(max-width: 768px)" :srcset="imgGph04Mo" />
                                        <img :src="imgGph04" alt="GSF1타입 월매출 총 이익 구간" /> 
                                    </picture>
                                </li>
                            </ul>        
                        </div>
                        <ul class="list_caution">
                            <li><p class="txt_warning">*가맹계약 체결 간 가맹점사업자와 가맹본부가 협의에 따라 가맹수수료는 달리 정할 수 있습니다</p></li>
                        </ul>
                    </div>
                    <div v-show="activeD3 === 2" class="tab_content" role="tabpanel">
                        <p class="type_info_bar">GSF3타입 - 경영주가 임차하여 경영주 운영</p>
                        <div class="type_table_wrap">
                            <table class="type_table">
                                <colgroup>
                                    <col class="col_item_main" />
                                    <col class="col_item_sub" />
                                    <col class="col_cost" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th colspan="2" scope="col">항목</th>
                                        <th scope="col">비용</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th rowspan="5" scope="rowgroup">투자 금액</th>
                                        <th>가맹비</th>
                                        <td>1,100만원 <br class="m_br">(부가세 포함)</td>
                                    </tr>
                                    <tr>
                                        <th>초기 상품대</th>
                                        <td>7,000만원</td>
                                    </tr>
                                    <tr>
                                        <th>소모품</th>
                                        <td>700만원</td>
                                    </tr>
                                    <tr>
                                        <th>시설보증금</th>
                                        <td>500만원</td>
                                    </tr>
                                    <tr>
                                        <th>개점투자 계</th>
                                        <td>9,300만원</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">임차비용 부담주체</th>
                                        <td>경영주</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">시설투자 부담주체</th>
                                        <td>본부</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">예치보증금</th>
                                        <td>없음</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">경영주 투자 합계</th> 
                                        <td>9,300만원 + 예치보증금</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">가맹 수수료 <br class="m_br">(부가세별도)</th>
                                        <td>24%</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">계약기간 <br class="m_br">(최초/재계약)</th>
                                        <td>5년 / 5년 단위%</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">담보설정</th>
                                        <td>최소 2억 이상</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2" scope="row">** 최저 <br class="m_br">수입 보조금</th>
                                        <td>해당사항 없음</td>
                                    </tr>
                                </tbody>
                            </table>
                            <ul class="list_caution">
                                <li><p>*경영주 총수입(경영주 월매출총이익 + 본부지원금) 기준이며, 인건비 등 영업비용 차감 전 입니다. <br class="mo"/>(개점일로부터 최소 1년만 적용)</p></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div><!-- /panel D2=0 -->

            <!-- 가맹/창업 절차 -->
            <div class="panel sec_procedure" v-show="activeD1 === 0 && activeD2 === 1">
                <Steps type="2" :items="procedureSteps" :cols="5" row-gap="100px" />
                <div class="link_wrap">
                    <Buttons tag="a" href="#none" btn-class="btn_icon btn_xl">설명회신청 바로가기</Buttons>
                </div>
            </div>
 
            <!-- 창업 전 필수 확인사항 -->
            <div class="panel" v-show="activeD1 === 0 && activeD2 === 2">
                <section class="sec_precaution">
                    <h3 class="precaution_title mo_only">가맹 해약<br class="p_br">수수료</h3>
                    <div class="sec_precaution_inner">
                        <aside class="precaution_intro">
                            <h3 class="pc_only">가맹 해약<br>수수료</h3>
                        </aside>
                        <div class="precaution_main">
                            <div class="precaution_block precaution_block_sm">
                                <h4>GSF1, GSF2 타입</h4>
                                <FeatureCards type="num" :items="precautionCards1" :no-swipe="true" />
                            </div>
                            <div class="precaution_block">
                                <h4>GSF3 타입</h4>
                                <FeatureCards type="num" :items="precautionCards2" :no-swipe="true" />
                            </div>
                        </div>
                    </div>
                    <ul class="list_caution">
                        <li><p>가맹 본부 회계 기준, 감가상각 건으로 별도 보상</p></li>
                        <li><p>* 손해 배상금 별도이며 과거 영업기간이 1년 이하인 경우 해당 영업기간을 적용함.</p></li>
                        <li><p>* '과거 1년간'의 기간은 관리금 중도해약인 경우 중도해약 월로부터 가까운 기간으로 하고, 해지사유 발생인 경우에는 계약 해지 사유가 발생한 달의 직전월의 말일로부터 기 기산함.</p></li>
                    </ul>
                </section>
            </div>

            <!-- 추천 점포 찾기 (activeD1 === 2) -->
            <section class="sec_store panel" v-show="activeD1 === 2">
                <p class="tab_intro">철저한 상권 조사를 바탕으로 가맹/창업을 위한 최적의 점포를 소개합니다.</p>
                <div class="store_search">
                    <!-- 지역 -->
                    <div class="search_group">
                        <span class="search_group_label">지역</span>
                        <div class="chip_list">
                            <button
                                type="button"
                                class="chip"
                                :class="{ active: filterRegion === '' }"
                                @click="filterRegion = ''"
                            >전체</button>
                            <button
                                v-for="r in storeRegions"
                                :key="r.value"
                                type="button"
                                class="chip"
                                :class="{ active: filterRegion === r.value }"
                                @click="filterRegion = r.value"
                            >{{ r.label }}<template v-if="r.count != null"> {{ r.count }}</template></button>
                        </div>
                    </div>
                    <!-- 구분선 -->
                 
                    <!-- 하단 row -->
                    <div class="search_bottom_row">
                        <!-- 가맹타입 -->
                        <div class="search_group">
                            <span class="search_group_label">가맹타입</span>
                            <div class="chip_list">
                                <button
                                    v-for="t in franchiseTypes"
                                    :key="t.value"
                                    type="button"
                                    class="chip"
                                    :class="{ active: filterFranchiseType === t.value }"
                                    @click="filterFranchiseType = filterFranchiseType === t.value ? '' : t.value"
                                >{{ t.label }}</button>
                            </div>
                        </div>
                        <!-- 점포유형/청년창업 -->
                        <div class="search_group">
                            <span class="search_group_label">점포유형/청년창업</span>
                            <div class="chip_list">
                                <button
                                    type="button"
                                    class="chip"
                                    :class="{ active: filterStoreType === '신규점' }"
                                    @click="filterStoreType = filterStoreType === '신규점' ? '' : '신규점'"
                                >신규점</button>
                                <button
                                    type="button"
                                    class="chip"
                                    :class="{ active: filterStoreType === '기존점' }"
                                    @click="filterStoreType = filterStoreType === '기존점' ? '' : '기존점'"
                                >기존점</button>
                                <span class="chip_sep_v"></span>
                                <span class="chip_youth_wrap">
                                    <button
                                        type="button"
                                        class="chip"
                                        :class="{ active: filterYouth }"
                                        @click="filterYouth = !filterYouth"
                                    >청년창업</button>
                                    <button
                                        type="button"
                                        class="youth_info_btn"
                                        @click.stop="youthPopoverVisible = !youthPopoverVisible"
                                        aria-label="청년창업 안내"
                                    >?</button>
                                    <div
                                        v-if="youthPopoverVisible"
                                        class="youth_popover"
                                        role="tooltip"
                                        @click.stop
                                    >   
                                        <strong>청년창업이란?</strong>
                                        <p>20대 청년들을 위해서 투자비 일부를 할인해드리는 제도에요.</p>
                                        <a href="#">청년창업 자세히 보러가기</a>
                                        <button
                                            type="button"
                                            class="youth_popover_close"
                                            @click="youthPopoverVisible = false"
                                            aria-label="닫기"
                                        ></button>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <!-- 검색 -->
                        <div class="search_group search_group_input">
                            <span class="search_group_label">검색</span>
                            <div class="store_search_input_wrap">
                                <input
                                    type="text"
                                    class="store_search_input"
                                    placeholder="지역명, 태그...."
                                    v-model="storeSearchQuery"
                                />
                                <button type="button" class="store_search_btn" aria-label="검색">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 필터 + 테이블 + 페이지네이션 -->
                <div class="store_list_wrap"> 
                    <!-- 상단 바: 총 개수 + 정렬/뷰 토글 -->
                    <div class="store_list_bar">
                        <span class="store_count">총 <strong>{{ storeList.length }} </strong>개 점포</span>
                        <div class="store_bar_right">
                            <div class="store_sort_group">
                                <button
                                    type="button"
                                    class="sort_btn"
                                    :class="{ active: storeSort === 'latest' }"
                                    @click="storeSort = 'latest'"
                                >최신순</button>
                                <button
                                    type="button"
                                    class="sort_btn"
                                    :class="{ active: storeSort === 'cost' }"
                                    @click="storeSort = 'cost'"
                                >투자비 낮은순</button>
                            </div>
                            <div class="store_view_group">
                                <button
                                    type="button"
                                    class="view_btn"
                                    :class="{ active: storeView === 'list' }"
                                    @click="storeView = 'list'"
                                    aria-label="목록형"
                                >
                                </button>
                                <button
                                    type="button"
                                    class="view_btn"
                                    :class="{ active: storeView === 'grid' }"
                                    @click="storeView = 'grid'"
                                    aria-label="격자형"
                                >
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 테이블 뷰 -->
                    <div v-show="storeView === 'list'" class="type_table_wrap type2">
                        <table class="type_table">
                            <colgroup>
                                <col class="col_region"/>
                                <col class="col_type"/>
                                <col class="col_form"/>
                                <col class="col_cost"/>
                                <col class="col_tag"/>
                                <col class="col_area"/>
                                <col class="col_date"/>
                                <col class="col_detail"/>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>지역</th>
                                    <th>타입</th>
                                    <th>유형</th>
                                    <th>투자비</th>
                                    <th>해시태그</th>
                                    <th>면적</th>
                                    <th>등록일</th>
                                    <th>상세</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="item in storeList" :key="item.id">
                                    <tr :class="{ is_open: openTableId === item.id }">
                                        <td>{{ item.region }}</td>
                                        <td>
                                            <span v-for="t in item.type" :key="t" class="type_badge" :class="getBadgeClass(t)">{{ t }}</span>
                                        </td>
                                        <td>{{ item.form }}</td>
                                        <td>{{ item.cost }}</td>
                                        <td class="td_tag">{{ item.tags }}</td>
                                        <td>{{ item.area }}</td>
                                        <td>{{ item.date }}</td>
                                        <td>
                                            <button
                                                type="button"
                                                class="detail_toggle_btn"
                                                @click="openTableId = openTableId === item.id ? null : item.id"
                                            >
                                                {{ openTableId === item.id ? '접기' : '상세' }}
                                            </button>
                                        </td>
                                    </tr>
                                    <!-- 상세 패널 (292:7713) -->
                                    <tr v-if="openTableId === item.id" class="detail_panel_row">
                                        <td colspan="8" class="detail_panel_td">
                                            <div class="detail_panel">
                                                <StoreCardDetail :item="item" />
                                            </div>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>

                    <!-- 모바일 아코디언 뷰 (목록형) -->
                    <div class="store_accordion_list" v-show="storeView === 'list'">
                        <Accordion class="store_acc">
                            <AccordionItem
                                v-for="item in storeList"
                                :key="item.id"
                                :item-key="item.id"
                            >
                                <template #title>
                                    <div class="accordion_head_info">
                                        <p class="accordion_region">{{ item.region }}</p>
                                        <div class="accordion_badges">
                                            <span v-for="t in item.type" :key="t" class="type_badge" :class="getBadgeClass(t)">{{ t }}</span>
                                            <span class="type_badge badge_gray">{{ item.form }}</span>
                                            <span v-if="item.isYouth" class="type_badge badge_gray">청년</span>
                                        </div>
                                    </div>
                                </template>
                                <StoreCardDetail :item="item" />
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <!-- 카드 그리드 뷰 -->
                    <div v-show="storeView === 'grid'" class="store_card_grid_wrap">
                        <template v-for="(row, rowIdx) in storeCardRows" :key="rowIdx">
                            <ul class="store_card_row">
                                <li
                                    v-for="item in row"
                                    :key="item.id"
                                >
                                    <StoreCard
                                        :item="item"
                                        :is-open="openCardId === item.id"
                                        @toggle="toggleCard(item.id)"
                                    />
                                </li>
                            </ul>
                            <!-- 해당 행에 열린 카드가 있으면 detail 패널 표시 -->
                            <div
                                v-if="openCardId && row.some(c => c.id === openCardId)"
                                class="store_card_detail_row"
                            >
                                <StoreCardDetail :item="storeList.find(c => c.id === openCardId)" />
                            </div>
                        </template>
                    </div>

                    <!-- 페이지네이션 -->
                    <div class="store_pagination">
                        <Pagination v-model="storePage" :total-pages="storeTotalPages" :visible-pages="5" />
                    </div>
                </div>
            </section>

            <!-- 사업설명회 (activeD1 === 1) -->
            <section class="sec_seminar panel" v-show="activeD1 === 1">
                <div class="seminar_head">
                    <p>GS THE FRESH(GS수퍼마켓) 가맹 사업에 대한<br class="p_br">자세하고 다양한 정보를 얻을 수 있는 사업설명회에 참여해 보세요.</p>
                    <Buttons btn-class="btn_big fill primary btn_icon after" data-popid="modal_gsrst_seminar" data-type="lg" data-cont="gsrst010201" @click.prevent="openModal">사업 설명회 신청</Buttons>
                </div>
                <ul class="seminar_list">
                    <li v-for="(item, i) in seminarList" :key="i" class="seminar_item">
                        <div class="seminar_item_body">
                            <div class="seminar_map"></div>
                            <div class="seminar_info">
                                <table class="type_table seminar_table">
                                    <colgroup>
                                        <col class="seminar_col_label" />
                                        <col class="seminar_col_value" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th colspan="2" scope="col">{{ item.title }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(row, ri) in item.rows" :key="ri">
                                            <td scope="row">{{ row.label }}</td>
                                            <td>{{ row.value }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>

            
            <!-- 경영주 지원제도 (activeD1 === 3) -->
            <section class="sec_owner_support panel" v-show="activeD1 === 3">
                <p class="tab_intro">GS THE FRESH는 <br class="m_br"/><span>경영주와의 공동의 발전</span>을 위해 <br />
                    다양한 상생 제도를 운영하고 있습니다.</p>
                <PanelHeader
                    :hero="imgBg02"
                    title="운영지원제도"
                    desc="GS THE FRESH 경영주님의 원활한 점포 운영을 위한 지원 제도 입니다."
                />
                <FeatureCards type="num" :items="supportCards" :swiper-space-between="0" />
            </section>
                
                
            <!-- 상담 및 신청 (activeD1 === 4) -->
            <section class="sec_consult panel"  v-show="activeD1 === 4">
                <PanelHeader
                    :hero=null
                    title="컨설턴트와 1:1 상담"
                    desc="가맹/창업 컨설턴트가 1:1로 상담해 드립니다. <br /> 가맹/창업 컨설턴트에게 문의하시면 자세한 상담을 받으실 수 있습니다.">
                    <ul class="caution_list">
                        <li>
                            <p>※ 주말 및 공휴일은 연락이 불가하며 평일 09:00~17:30 사이에 연락 부탁드립니다.</p>
                        </li>
                    </ul>
                </PanelHeader>
                <ul class="consult_card_list">
                    <li v-for="(card, i) in consultCards" :key="i" class="consult_card">
                        <div class="consult_thumb">
                            <!-- <img :src="card.img" :alt="card.name + ' 컨설턴트'" /> -->
                        </div>
                        <div class="consult_body">
                            <div class="label_wrap">
                                <p class="consult_label">컨설턴트</p>
                                <p class="consult_label">{{ card.name }}</p>
                            </div>
                            <p class="consult_label region">{{ card.region }}</p>
                            <p class="consult_note">{{ card.note }}</p>
                            <button type="button" class="consult_tel_btn" @click="toggleConsultTel(i)">연락처 확인하기</button>
                            <p v-show="consultTelOpen[i]" class="consult_tel">{{ card.tel }}</p>
                            <div class="consult_foot">
                                <Buttons btn-class="btn_big border btn_icon after" data-popid="modal_gsrst_consult" data-type="lg" data-cont="gsrst010301" @click.prevent="openModal">상담신청</Buttons>
                            </div>
                        </div>
                    </li>
                </ul>

                <div class="info_banner">
                    <p>'입지' 및 '점포소유' 상담은 입지제안 사이트를 통해 확인 부탁드립니다.</p>
                    <Buttons btn-class="btn_mid border btn_icon after">바로가기</Buttons>
                </div>
            </section>
        </div>
        <!-- [quick_menu · 템플릿] .wrap_gsrst 직하위(cont_inner 밖)에 둠. 푸터는 App.vue router-view 밖이므로 도킹 계산 시 wrap 기준 사용 -->
        <ul
            ref="quickMenuRef"
            class="quick_menu"
            :class="{ is_visible: showQuickMenu }"
            :aria-hidden="!showQuickMenu"
        >
            <li><button type="button">창업안내</button></li>
            <li><button type="button">입점상담</button></li>
            <li><button type="button">고객센터</button></li>
        </ul>
        <!-- //[quick_menu · 템플릿] -->
    </div>

    <!-- 사업설명회 신청 모달 -->
    <div id="modal_gsrst_seminar" class="modal_wrap">
        <div class="modal_container"></div>
    </div>
    <!-- //사업설명회 신청 모달 -->
    <!-- 상담 신청 모달 -->
    <div id="modal_gsrst_consult" class="modal_wrap">
        <div class="modal_container"></div>
    </div>
    <!-- //상담 신청 모달 -->


</template>

<script setup> 
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from "vue";
import Tabs from "@/components/Tabs.vue";
import Pagination from "@/components/Pagination.vue";
import Steps from "@/components/Steps.vue";
import FeatureCards from "@/components/FeatureCards.vue";
import Buttons from "@/components/Buttons.vue";
import StoreCard from "@/components/StoreCard.vue";
import StoreCardDetail from "@/components/StoreCardDetail.vue";
import Accordion from "@/components/Accordion.vue";
import AccordionItem from "@/components/AccordionItem.vue";
import PanelHeader from "@/components/PanelHeader.vue";
import modal from "@/assets/js/modal";
import imgBg from "@/assets/images/dummy/gsrst01010101_bg.png";
import imgBg02 from "@/assets/images/dummy/gsrst01010101_bg_02.png";
import imgGph01 from "@/assets/images/dummy/gsrst01010101_gph_01.png";
import imgGph01Mo from "@/assets/images/dummy/mo/gsrst01010101_gph_01_mo.png";
import imgGph02 from "@/assets/images/dummy/gsrst01010101_gph_02.png";
import imgGph02Mo from "@/assets/images/dummy/mo/gsrst01010101_gph_02_mo.png";
import imgGph03 from "@/assets/images/dummy/gsrst01010101_gph_03.png";
import imgGph03Mo from "@/assets/images/dummy/mo/gsrst01010101_gph_03_mo.png";
import imgGph04 from "@/assets/images/dummy/gsrst01010101_gph_04.png";
import imgGph04Mo from "@/assets/images/dummy/mo/gsrst01010101_gph_04_mo.png";
const activeD1 = ref(0);
const activeD2 = ref(0);
const activeD3 = ref(0);

const depth1Tabs = [
    { item: "GS THE FRESH 창업 알아보기" },
    { item: "사업설명회" },
    { item: "추천 점포 찾기" },
    { item: "경영주 지원제도" },
    { item: "상담 및 신청" },
    { item: "가맹계약시스템" },
];
 
const depth2Tabs = [
    { item: "가맹 조건 안내" },
    { item: "가맹/창업 절차" },
    { item: "창업 전 필수 확인사항" },
];

const depth3Tabs = [
    { item: "GSF1타입" },
    { item: "GSF2타입" },
    { item: "GSF3타입" },
];

const procedureSteps = [
    { step: "Step 1",  title: "사업설명회 참석",   text: "GS THE FRESH 가맹 계약<br />조건안내 및 절차소개",                          numColor: "#15b874" },
    { step: "Step 2",  title: "정보공개서 확인",   text: "가맹본부로부터 정보공개서를 제공받아 GS THE FRESH 사업성 검토",         numColor: "#15b874" },
    { step: "Step 3",  title: "지원서 접수",       text: "지원서 제출은 월~금요일 수시가능<br />(우편 접수 가능)",                    numColor: "#15b874" },
    { step: "Step 4",  title: "경영주 면담",       text: "지원서를 토대로 면담 진행하여<br />사업 타당성 검토함",                     numColor: "#15b874" },
    { step: "Step 5",  title: "점포소개",          text: "예비경영주 희망사항과<br />조건에 부합하는 점포를 소개함",                 numColor: "#15b874" },
    { step: "Step 6",  title: "가맹약정",          text: "소개 점포의 운영의사 최종확인 및<br />약정금 지불",                        numColor: "#15b874" },
    { step: "Step 7",  title: "가맹 본 계약",      text: "본계약금 최종 지불 및<br />본계약서 체결",                                 numColor: "#15b874" },
    { step: "Step 8",  title: "경영주 교육 이수",  text: "점포 현장 OJT,<br />입문 교육(이론/실습)",                                numColor: "#15b874" },
    { step: "Step 9",  title: "GRAND OPEN",       text: "상품 재고조사 후 오픈",                                             numColor: "#15b874" },
    { step: "Step 10", title: "점포운영",          text: "점포 영업 지원 담당 직원의<br />주기적인 방문 및 컨설팅",                 numColor: "#15b874" },
];

const precautionCards1 = [
    { num: "01", title: "중도해약",        desc: "· 과거 1년간의 월평균 매출 총이익 20% × 3개월" },
    { num: "02", title: "해지 사유 발생 시", desc: "· 과거 1년간의 월평균 매출 총이익 20% × 6개월" },
   
];

const precautionCards2 = [
    { num: "03", title: "기타 중도해약", desc: ["· 본부 산정", "· 개점일~ 3년 이내 : 76(74)%의 8개월", "· 3년~5년 이내 : 76(74)%의 4개월", "· 경영주 산정", "· 개점일~ 3년 이내 : 24(26)%의 8개월", "· 3년~5년 이내 : 24(26)%의 4개월"] },
    { num: "04", title: "해지 사유 발생시", desc: ["· 영업의 침해/근무계약 위반, 본부 귀산 등", "· 본부 과태 시 : 76(74)%의 12개월 분", "· 경영주 과태시 : 24(26)%의 12개월"] },
];

const supportCards = [
    { num: "01", title: "최소 운영 보조", desc: "계약양식 조건에 따라, 개점일로부터 정해진 기간에 한해 경영주 총수입을 기준으로 하여 일정 금액이 보장될 수 있도록 본부지원금을 통해 최소 운영 보조를 지원하고 있습니다." },
    { num: "02", title: "복리후생", desc: "경조사 발생시(가맹점 실경영주 기준 결혼 또는 조위) 경조금 및 화환 등을 지급하고 있습니다." },
    { num: "03", title: "스토어매니저(근무자) 구인사이트 지원", desc: "GS THE FRESH 전용 배너 업체(알바천국) 운영" },
    { num: "04", title: "기타 운영지원 제도", desc: "부진 점포에 한해, 본사 지원 활동으로 '보전점 케어활동'을 진행하며, 상권 특성 및 각종 이슈 사항으로 경제적지원금이 필요한 경우 특정점에 한해 '신규점 조기 정착 지원금'을 운영합니다. 또한, 필요시 영수도점 매출 향상을 위한 지원금을 지급하고 매년 가맹지원제도를 수립 및 운영하고 있습니다." },
];

const consultTelOpen = ref([]);
const toggleConsultTel = (i) => {
    const arr = [...consultTelOpen.value];
    arr[i] = !arr[i];
    consultTelOpen.value = arr;
};

const consultCards = [
    { name: "윤경진", region: "수도권", note: "*설명회 및 창업문의", tel: "010-0000-0000", img: require("@/assets/images/dummy/gsrst_smain_01.png"), link: "#none" },
    { name: "이승현", region: "수도권", note: "*설명회 및 창업문의", tel: "010-0000-0000", img: require("@/assets/images/dummy/gsrst_smain_02.png"), link: "#none" },
    { name: "남창호",  region: "수도권", note: "*설명회 및 창업문의", tel: "010-0000-0000", img: require("@/assets/images/dummy/gsrst_smain_01.png"), link: "#none" },
    { name: "남궁신영", region: "충북/강원권", note: "*설명회 및 창업문의", tel: "010-0000-0000", img: require("@/assets/images/dummy/gsrst_smain_02.png"), link: "#none" },
    { name: "김수진", region: "영남/호남권", note: "*설명회 및 창업문의", tel: "010-0000-0000", img: require("@/assets/images/dummy/gsrst_smain_01.png"), link: "#none" },
];


const seminarList = [
    {
        title: "수도 사업설명회",
        rows: [
            { label: "일시",   value: "매월 2회" },
            { label: "대상",   value: "서울, 경기, 인천 GS THE FRESH 창업을 희망하는 분" },
            { label: "준비물", value: "필기도구" },
            { label: "장소",   value: "서울 강남구 논현로508 GS타워 지하 1층" },
            { label: "기타",   value: "문의 02-2006-2954,2933" },
        ],
    },
    {
        title: "중부 사업설명회",
        rows: [
            { label: "일시",   value: "매월 1회" },
            { label: "대상",   value: "충청, 강원, 제주 GS THE FRESH 창업을 희망하는 분" },
            { label: "준비물", value: "필기도구" },
            { label: "장소",   value: "대전 유성구 엑스포로 107 대전컨벤션센터" },
            { label: "기타",   value: "문의 010-2141-2816 (문자 OR 카톡)" },
        ],
    },
    {
        title: "영남/호남 사업설명회",
        rows: [
            { label: "일시",   value: "매월 1회" },
            { label: "대상",   value: "전라도, 경상도 GS THE FRESH 창업을 희망하는 분" },
            { label: "준비물", value: "필기도구" },
            { label: "장소",   value: "부산 연제구 월드컵대로190 신현빌딩2층" },
            { label: "기타",   value: "문의 02-2006-2363" },
        ],
    },
];

function openModal(event) {
    const el = event.currentTarget;
    modal.open(el.dataset.popid, el.dataset.type || "default", el);
}

/* ── 추천 점포 찾기 ── */
const filterRegion = ref('');
const filterFranchiseType = ref('');
const filterStoreType = ref('');
const filterYouth = ref(false);
const storeSearchQuery = ref('');
const youthPopoverVisible = ref(false);

const storeRegions = [
    { value: '서울', label: '서울', count: 4 },
    { value: '경기', label: '경기', count: 4 },
    { value: '인천', label: '인천', count: 4 },
    { value: '부산', label: '부산', count: 4 },
    { value: '대구', label: '대구', count: 4 },
    { value: '대전', label: '대전', count: 4 },
    { value: '광주', label: '광주', count: 4 },
    { value: '울산', label: '울산', count: 4 },
    { value: '세종', label: '세종', count: 1 },
    { value: '강원', label: '강원', count: 4 },
    { value: '충북', label: '충북', count: 4 },
    { value: '충남', label: '충남', count: 4 },
    { value: '전북', label: '전북', count: 4 },
    { value: '전남', label: '전남', count: 4 },
    { value: '경북', label: '경북', count: 4 },
    { value: '경남', label: '경남', count: 4 },
    { value: '제주', label: '제주', count: 2 },
];

const franchiseTypes = [
    { value: 'GS1', label: 'GS1 (경영주 임차)' },
    { value: 'GS2', label: 'GS2 (임차 공동 부담)' },
    { value: 'GS3', label: 'GS3 (임차 본부 부담)' },
];

/* ── 점포 리스트 ── */
const storeSort = ref('latest');
const storeView = ref('list');
const storePage = ref(1);
const storeTotalPages = ref(5);

const storeList = ref([
    { id: 1, region: '대전 동구',   type: ['GS1','GS2'],        form: '기존점',  isYouth: false, cost: '7,200만원',  tags: '#버스정류장 #대로변',   area: '18평', date: '2025.12.24', feature: '신축 아파트 단지 내 상가 1층에 위치하여 입주민 수요가 안정적입니다.' },
    { id: 2, region: '강원 원주시', type: ['GS2', 'GS3'], form: '기존점',  isYouth: true,  cost: '10,500만원', tags: '#버스정류장 #대로변',   area: '22평', date: '2025.12.24', feature: '대형 마트 인접 상권으로 유동 인구가 많아 안정적인 매출이 기대됩니다.' },
    { id: 3, region: '대구 서구',   type: ['GS1'],        form: '기존점',  isYouth: true,  cost: '5,000만원',  tags: '#번화가 #버스정류장',  area: '14평', date: '2025.09.21', feature: '지하철역 출구 인근에 위치하여 출퇴근 고객 수요가 풍부합니다.' },
    { id: 4, region: '대전 동구',   type: ['GS3'],        form: '기존점',  isYouth: false, cost: '7,200만원',  tags: '#버스정류장 #대로변',   area: '18평', date: '2025.12.24', feature: '신축 아파트 단지 내 상가 1층에 위치하여 입주민 수요가 안정적입니다.' },
    { id: 5, region: '인천 연수구', type: ['GS2'],        form: '기존점',  isYouth: false, cost: '8,000만원',  tags: '#주택가 #초등학교인근', area: '20평', date: '2025.11.10', feature: '주거 밀집 지역 내 독점 상권으로 안정적인 고정 고객층이 형성되어 있습니다.' },
    { id: 6, region: '전북 익산시', type: ['GS1', 'GS2'], form: '기존점',  isYouth: true,  cost: '4,500만원',  tags: '#대로변 #유동인구많음', area: '15평', date: '2025.10.05', feature: '도심 중심 상가 위치로 다양한 연령층의 유동 고객이 상시 방문합니다.' },
]);

function getBadgeClass(t) {
    return /^GS\d/i.test(t) ? 'badge_' + t.toLowerCase() : 'badge_gray';
}

function closeYouthPopover() { youthPopoverVisible.value = false; }

const isMobile = ref(false);
const isTablet = ref(false);
const mqMobile = window.matchMedia("(max-width: 768px)");
const mqTablet = window.matchMedia("(max-width: 1024px)");
function onMqTabletChange(e) { isTablet.value = e.matches; }

/* ────────────── [quick_menu · script] GSAP 없이 scroll + fixed/absolute 도킹 ────────────── */

const QUICK_MENU_REVEAL_PX = 100;
const QUICK_MENU_VIEWPORT_BOTTOM_PX = 60;
const QUICK_MENU_FOOTER_GAP_PX = 60;
const showQuickMenu = ref(false);
const quickMenuRef = ref(null);
let quickMenuFooterEl = null;
let quickMenuWrapEl = null;
let quickMenuLastBottomPx = null;
let quickMenuLastTopPx = null;
let quickMenuFooterZone = false;
let quickMenuRefreshTimer = null;   

/** App.vue #wrap 직하위 사이트 푸터만 (폼·컴포넌트 내 footer 태그 제외) */
function getQuickMenuSiteFooter() {
    return document.querySelector("#wrap > footer");
}

function setQuickMenuFixed(menu, bottomPx) {
    menu.style.position = "fixed";
    menu.style.top = "auto";
    menu.style.left = "auto";
    menu.style.right = "";
    menu.style.bottom = `${bottomPx}px`;
    menu.style.transform = "";
}

function setQuickMenuAbsolute(menu, topPx) {
    menu.style.position = "absolute";
    menu.style.top = `${topPx}px`;
    menu.style.bottom = "auto";
    menu.style.left = "auto";
    menu.style.right = "";
    menu.style.transform = "";
}

function updateQuickMenuVisibility() {
    if (mqMobile.matches) {
        showQuickMenu.value = false;
        return;
    }
    const y = window.scrollY ?? document.documentElement.scrollTop;
    showQuickMenu.value = y >= QUICK_MENU_REVEAL_PX;
}

/** 평소 fixed bottom 60 · 푸터 접근 시 wrap 기준 absolute top (GSAP set과 동일 계산) */
function updateQuickMenuBottom(quickMenu) {
    if (!quickMenu || mqMobile.matches) return;
    if (!quickMenuFooterEl) {
        quickMenuFooterEl = getQuickMenuSiteFooter();
    }
    if (!quickMenuWrapEl) {
        quickMenuWrapEl = quickMenu.closest(".wrap_gsrst");
    }
    const footer = quickMenuFooterEl;
    const wrap = quickMenuWrapEl;
    if (!footer || !wrap) {
        if (quickMenuLastBottomPx !== QUICK_MENU_VIEWPORT_BOTTOM_PX) {
            setQuickMenuFixed(quickMenu, QUICK_MENU_VIEWPORT_BOTTOM_PX);
            quickMenuLastBottomPx = QUICK_MENU_VIEWPORT_BOTTOM_PX;
            quickMenuLastTopPx = null;
            quickMenuFooterZone = false;
        }
        return;
    }
    const rect = footer.getBoundingClientRect();
    const vh = window.innerHeight;
    const gap = QUICK_MENU_FOOTER_GAP_PX;
    const scrollY = window.scrollY ?? document.documentElement.scrollTop;
    const footerTopDoc = rect.top + scrollY;
    const wrapTopDoc = wrap.getBoundingClientRect().top + scrollY;
    const quickMenuHeight = quickMenu.offsetHeight;
    const fixedBottomDoc = scrollY + vh - QUICK_MENU_VIEWPORT_BOTTOM_PX;
    const footerLimitDoc = footerTopDoc - gap;
    const shouldDockToFooter = fixedBottomDoc >= footerLimitDoc;

    if (shouldDockToFooter) {
        const absoluteTopPx = Math.round(footerTopDoc - gap - quickMenuHeight - wrapTopDoc);
        quickMenuFooterZone = true;
        if (quickMenuLastTopPx !== absoluteTopPx) {
            setQuickMenuAbsolute(quickMenu, absoluteTopPx);
            quickMenuLastTopPx = absoluteTopPx;
            quickMenuLastBottomPx = null;
        }
        return;
    }

    quickMenuFooterZone = false;
    if (quickMenuLastBottomPx !== QUICK_MENU_VIEWPORT_BOTTOM_PX) {
        setQuickMenuFixed(quickMenu, QUICK_MENU_VIEWPORT_BOTTOM_PX);
        quickMenuLastBottomPx = QUICK_MENU_VIEWPORT_BOTTOM_PX;
        quickMenuLastTopPx = null;
    }
}

function onQuickMenuScroll() {
    updateQuickMenuVisibility();
    if (quickMenuRef.value) {
        updateQuickMenuBottom(quickMenuRef.value);
    }
}

function refreshQuickMenu() {
    if (quickMenuRefreshTimer) {
        window.clearTimeout(quickMenuRefreshTimer);
    }
    quickMenuRefreshTimer = window.setTimeout(() => {
        quickMenuLastBottomPx = null;
        quickMenuLastTopPx = null;
        onQuickMenuScroll();
    }, 120);
}

function resetQuickMenuState() {
    quickMenuFooterEl = null;
    quickMenuWrapEl = null;
    quickMenuLastBottomPx = null;
    quickMenuLastTopPx = null;
    quickMenuFooterZone = false;
    showQuickMenu.value = false;
}

function initQuickMenu() {
    if (mqMobile.matches) return;
    const quickMenu = quickMenuRef.value;
    if (!quickMenu) return;
    resetQuickMenuState();
    quickMenuFooterEl = getQuickMenuSiteFooter();
    quickMenuWrapEl = quickMenu.closest(".wrap_gsrst");
    onQuickMenuScroll();
}

function onMqMobileChangeWithQuickMenu(e) {
    isMobile.value = e.matches;
    if (e.matches) {
        resetQuickMenuState();
    } else {
        nextTick(() => initQuickMenu());
    }
}

/* ────────────── [quick_menu · script] 끝 ────────────── */

watch([activeD1, activeD2], () => {
    refreshQuickMenu();
});

onMounted(() => {
    document.addEventListener("click", closeYouthPopover);
    isMobile.value = mqMobile.matches;
    isTablet.value = mqTablet.matches;
    mqMobile.addEventListener("change", onMqMobileChangeWithQuickMenu);
    mqTablet.addEventListener("change", onMqTabletChange);
    window.addEventListener("resize", refreshQuickMenu);
    window.addEventListener("scroll", onQuickMenuScroll, { passive: true });
    nextTick(() => initQuickMenu());
});
onUnmounted(() => {
    document.removeEventListener("click", closeYouthPopover);
    mqMobile.removeEventListener("change", onMqMobileChangeWithQuickMenu);
    mqTablet.removeEventListener("change", onMqTabletChange);
    window.removeEventListener("resize", refreshQuickMenu);
    window.removeEventListener("scroll", onQuickMenuScroll);
    if (quickMenuRefreshTimer) {
        window.clearTimeout(quickMenuRefreshTimer);
        quickMenuRefreshTimer = null;
    }
    resetQuickMenuState();
});

/* ── 카드 그리드 뷰 ── */
const openCardId = ref(null);
const openTableId = ref(null);

const cardsPerRow = computed(() => isMobile.value ? 1 : isTablet.value ? 3 : 4);

const storeCardRows = computed(() => {
    const rows = [];
    for (let i = 0; i < storeList.value.length; i += cardsPerRow.value) {
        rows.push(storeList.value.slice(i, i + cardsPerRow.value));
    }
    return rows;
});

function toggleCard(id) {
    openCardId.value = openCardId.value === id ? null : id;
}
</script>

<style scoped>
/* 브랜드 색 */
.wrap_gsrst { --color-brand-primary: #15b874; position: relative; }

.wrap_gsrst :deep([class*="btn_"][class*="fill"][class*="primary"]) { color: #fff; background-color: var(--color-brand-primary); }
.txt_warning { color: #ED3030 !important; }
:deep(.m_br) { display: none; }
:deep(.p_br) { display: block; }

/* HEADER */
.page_header { width: 100%; height: 480px; background-size: cover; background-position: center; position: relative; display: flex; align-items: center; justify-content: center; }
.header_inner { position: relative; z-index: 1; text-align: center; }
.header_title { color: #fff; font-size: 7.2rem; font-weight: 700; letter-spacing: -0.02em; line-height: 1.24; }

/* BODY — PC: 좌우 20px / 모바일: 가로 패딩은 tab_page·Tabs 등에서 (아래 모바일 미디어쿼리 참고) */
.cont_inner { max-width: 1460px; margin: 0 auto; padding: 0 20px; box-sizing: border-box; }
/* .sec_body > :deep(.tab_wrap) { padding-left: 20px; padding-right: 20px; box-sizing: border-box; } */

/* depth3 탭 */
.tab_d3_wrap { padding-top: 0; }
.tab_type { display: flex; border: 1px solid #c4c4d0; border-radius: 4px; overflow: hidden; }
.tab_type > button { flex: 1; height: 60px; color: #90909a; font-size: 1.8rem; background-color: #fff; border: none; border-right: 1px solid #c4c4d0; cursor: pointer; transition: background-color 0.2s, color 0.2s; }
.tab_type > button:last-child { border-right: none; }
.tab_type > button.active { background-color: var(--color-brand-primary); color: #fff; border: 0; }

/* 탭 페이지 공통 */
.panel { padding: 64px 0 0; }
.tab_content_wrap { padding-top: 40px; }

/* type_info_bar */
.type_info_bar { padding: 17px 24px; background-color: #e8f8f1; border: 1px solid #d2ede2; border-radius: 6px; color: #11935d; font-size: 1.8rem; line-height: 1.4; }

/* type_table */
.type_table_wrap { margin-top: 20px; overflow-x: auto; border-top: 1px solid #161616; }
.type_table { width: 100%; border-collapse: collapse; }
.type_table .col_item_main { width: 177px; }
.type_table .col_item_sub { width: 177px; }
.type_table .col_cost { width: auto; }
.type_table thead th { padding: 28px 24px; background-color: #f8f8f8; border: 1px solid #e5e5e9; font-size: 1.8rem; text-align: center; line-height: 1.4; }
.type_table tbody th { padding: 12px 24px; background-color: #f8f8f8; border: 1px solid #e5e5e9; font-size: 1.8rem; font-weight: 400; text-align: left; line-height: 1.4; }
.type_table tbody td { border-bottom: 1px solid #e5e5e9; font-size: 1.8rem; text-align: center; padding: 12px 24px; line-height: 1.4; }
.type_table_wrap.type2 .type_table thead th { padding: 18px 20px; line-height: 1.5; border: 0; }
.type_table_wrap.type2 .type_table colgroup col { width: 12.5%; }
.type_table_wrap.type2 .type_table tbody td { height: 82px; padding: 0 13px; }
.td_tag { font-size: 1.6rem; word-break: break-all; }

/* list_caution */
.list_caution { margin-top: 32px; }
.list_caution > li + li { margin-top: 8px; }
.list_caution > li > p { color: #67676F; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }

/* type_graph */
.type_graph_wrap { margin-top: 60px; padding: 64px; background-color: #f8f8f8; border-radius: 12px; }
.type_graph_wrap > strong { display: block; font-size: 3.2rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.type_graph_inner { margin-top: 40px; padding-right: 56px; display: flex; flex-direction: column; align-items: flex-end; gap: 28px; }
.type_graph_item { display: flex; gap: 54px; align-items: center; justify-content: flex-end; }
.type_graph_item:nth-child(2) { justify-self: flex-start; }
.type_graph_item > p { font-size: 2rem; line-height: 1.35; letter-spacing: -0.01em; text-align: right; }
.type_graph_item > picture { flex: 1; display: block; }
.type_graph_item img { display: block; max-width: 100%; }

/* 가맹/창업 절차 */
.link_wrap { margin-top: 40px; display: flex; justify-content: center; }
.link_wrap > a { margin: 0 auto; padding: 18px 32px; color: #fff; font-weight: 700; font-size: 1.8rem; line-height: 1.5; text-align: center; background-color: var(--color-brand-primary); border-radius: 10px; display: inline-block; }
.link_wrap > a.btn_xl { height: 64px; padding: 0 32px; display: inline-flex; align-items: center; justify-content: center; box-sizing: border-box; }

/* 창업 전 필수 확인사항 */
.precaution_title, .precaution_intro > h3 { color: #161616; font-size: 3.2rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.mo_only { display: none; }
.sec_precaution_inner { padding: 64px; background-color: #f8f8f8; border-radius: 12px; display: flex; align-items: flex-start; }
.precaution_intro { flex: 0 1 clamp(200px, 28%, 296px); min-width: 0; max-width: 296px; }
.precaution_intro > h3 { margin-bottom: 16px; }
.precaution_intro > p { color: #67676f; font-size: 1.8rem; line-height: 1.6; letter-spacing: -0.01em; }
.precaution_main { flex: 1; min-width: 0; }
.precaution_block + .precaution_block { margin-top: 56px; }
.precaution_block > h4 { margin-bottom: 40px; color: #161616; font-size: 2.8rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_precaution :deep(.feature_card_item) { background-color: #fff; min-height: 0; }
.precaution_block_sm :deep(.feature_card_item) { min-height: 180px; }
.sec_precaution :deep(.feature_card_num) { color: #15b874; }
.sec_precaution :deep(.feature_card_title) { font-size: 2.4rem; }

/* 사업설명회 */
.seminar_head > h3 { color: #161616; font-size: 4rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.seminar_head > p { color: #161616; font-size: 2.4rem; line-height: 1.5; letter-spacing: -0.01em; }
.seminar_head :deep(.btn_big) { margin-top: 16px; }
.seminar_list { margin-top: 60px; display: flex; flex-direction: column; gap: 60px; }
.seminar_item_body { display: flex; gap: 16px; min-height: 400px; }
.seminar_map { flex: 1; background-color: #d7d7df; border-radius: 16px; min-width: 0; }
.seminar_info { flex: 1; min-width: 0; display: flex; flex-direction: column; overflow: hidden; border-radius: 12px; }
.seminar_table { width: 100%; height: 100%; border: 0; }
.seminar_table col.seminar_col_label { width: clamp(96px, 29%, 200px); }
.seminar_table col.seminar_col_value { width: 71%; }
.seminar_table thead th { padding: 47px 24px; background-color: #f8f8f8; border: 0; font-size: 1.8rem; font-weight: 600; text-align: left; line-height: 1.4; letter-spacing: -0.02em; }
.seminar_table tbody td { padding: 13px 24px; border-bottom: 1px solid #e5e5e9; font-size: 1.8rem; line-height: 1.6; letter-spacing: -0.01em; min-width: 0; text-align: left; }

/* Tablet */
@media (max-width: 1024px) {
    .page_header { height: 360px; }
    .header_title { font-size: 5.2rem; }
    .tab_type > button { font-size: 1.6rem; }
    .type_info_bar { font-size: 1.6rem; }
    .type_table thead th, .type_table tbody th, .type_table tbody td { font-size: 1.6rem; }
    .type_graph_wrap { padding: 48px; }
    .type_graph_wrap > strong { font-size: 2.8rem; }
    .type_graph_item { gap: 32px; }
    .type_graph_item > p { font-size: 1.8rem; }
    .precaution_intro > h3 { font-size: 2.6rem; }
    .sec_precaution_inner { flex-direction: column; padding: 48px; gap: 32px; }
    .precaution_intro { width: 100%; }
    .precaution_intro > p { font-size: 1.6rem; }
    .precaution_block > h4 { font-size: 2.4rem; margin-bottom: 24px; }
    .precaution_block + .precaution_block { margin-top: 40px; }
    .seminar_head > h3 { font-size: 3.2rem; }
    .seminar_head > p { font-size: 2rem; }
    .seminar_table thead th, .seminar_table tbody th, .seminar_table tbody td { font-size: 1.6rem; }
}

/* Mobile */
@media (max-width: 768px) {
    :deep(.m_br) { display: block; }
    :deep(.p_br) { display: none; }
    .page_header { display: none; }
    .sec_body { padding: 24px 0 40px; }
    .header_title { font-size: 3.6rem; }
    /* ul::after 20px spacer, tab_wrap::after 32px 그라데이션은 common.css에서 전역 처리 */
    .panel { padding: 60px 20px 80px; }
    .sec_owner_support.panel { padding-left: 0; padding-right: 0; }
    .tab_content_wrap { padding-top: 40px; }
    .tab_type > button { height: 48px; font-size: 1.4rem; }
    .type_info_bar { height: auto; min-height: 48px; padding: 20px 24px; font-size: 1.4rem; }
    .list_caution { margin-top: 16px; }
    .type_table_wrap { margin-top: 24px; }
    .type_table .col_item_main { width: 42px; }
    .type_table .col_item_sub { width: 120px; }
    .type_table thead th { padding: 18px 0; font-size: 1.6rem; line-height: 1.24; }
    .type_table tbody th, .type_table tbody td { padding: 15px 24px; font-size: 1.6rem; line-height: 1.5; }
    .type_table tbody th:first-child { padding-left: 14px; padding-right: 14px; }
    .type_graph_wrap { margin-top: 80px; padding: 40px 20px; }
    .type_graph_wrap > strong { font-size: 2rem; line-height: 1.32; letter-spacing: -0.01em; }
    .type_graph_inner { margin-top: 30px; padding-right: 0; align-items: flex-start; gap: 20px; }
    .type_graph_item { flex-direction: column; align-items: flex-start; justify-content: flex-start; gap: 16px; }
    .type_graph_item > p { font-size: 1.6rem; text-align: left; }
    .link_wrap > a { width: 100%; padding: 14px 0; font-weight: 400; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .mo_only { display: block; }
    .pc_only { display: none; }
    .precaution_title { font-size: 2.4rem; line-height: 1.35; letter-spacing: -0.01em; }
    .sec_precaution_inner { margin-top: 32px; padding: 30px 20px; gap: 40px; display: block; }
    .precaution_intro { display: none; }
    .precaution_intro > p { font-size: 1.4rem; }
    .precaution_block > h4 { font-size: 2rem; margin-bottom: 24px; }
    .sec_precaution :deep(.feature_card_title) { font-size: 1.8rem; }
    .seminar_info { padding-bottom: 18px; }
    .seminar_head > h3 { font-size: 2.8rem; }
    .seminar_head > p { font-size: 1.8rem; line-height: 1.4; letter-spacing: 0; }
    .seminar_list { gap: 40px; }
    .seminar_item_title { font-size: 2rem; }
    .seminar_item_body { flex-direction: column; height: auto; gap: 16px; }
    .seminar_map { flex: none; height: clamp(183.36px, 50.933vw, 260px); border-radius: 12px; }
    .seminar_table thead th { padding: 21px 24px; font-size: 1.8rem; line-height: 1.5; letter-spacing: 0; font-weight: 700; }
    .seminar_table tbody td { padding: 16px 24px; font-size: 1.6rem; line-height: 1.5; }
    .seminar_table col.seminar_col_label { width: clamp(60.75px, 27%, 118.125px); }
    .seminar_table col.seminar_col_value { width: 73%; }
}

/* 추천 점포 찾기 */
.sec_store { padding-top: 40px; }
.tab_intro { margin-bottom:64px; font-size: 2.4rem; color: #161616; line-height: 1.5; letter-spacing: -0.01em; }
.tab_intro span{ color:#11935D;}
.store_search { background-color: #f8f8f8; border-radius: 12px; padding: 48px 42px; display: flex; flex-direction: column; gap: 0; }
.search_group { display: flex; flex-direction: column; gap: 12px; }
.search_group_label { font-size: 1.6rem; font-weight: 700; color: #161616; line-height: 1.24; }
.chip_list { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.chip { min-width: 78px; height: 40px; padding: 0 18px; border: 1px solid #161616; border-radius: 99px; background-color: transparent; color: #161616; font-size: 1.6rem; font-weight: 400; letter-spacing: -0.01em; cursor: pointer; white-space: nowrap; transition: background-color 0.15s, border-color 0.15s, color 0.15s; }
.chip.active { background-color: #e7f2fe; border-color: #107af2; color: #107af2; }
.search_bottom_row { margin-top: 24px; padding-top: 24px; border-top: 1px solid #D7D7DF; display: flex; align-items: flex-start; gap: 32px; flex-wrap: wrap; }
.chip_sep_v { display: inline-block; width: 1px; height: 24px; background-color: #c4c4d0; flex-shrink: 0; align-self: center; }
.chip_youth_wrap { position: relative; display: inline-flex; align-items: center; }
.youth_info_btn { width: 18px; height: 18px; border: 1.4px solid #242428; border-radius: 50%; background-color: #fff; font-size: 1.3rem; font-weight: 500; color: #000; cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0; position: absolute; top: -11px; right: -12px; line-height: 1; }
.youth_popover { position: absolute; top: calc(100% + 8px); left: -119px; right: -166px; background-color: #fff; border: 1px solid #C6C6C6; border-radius: 16px; padding: 32px; z-index: 10; }
.youth_popover > strong { font-weight: 700; font-size: 1.6rem; line-height: 1.24; }
.youth_popover > p { margin-top: 24px; font-size: 1.6rem; color: #161616; line-height: 1.5; letter-spacing: -0.01em; }
.youth_popover > a { margin-top: 16px; color: #107AF2; font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; text-decoration: underline; display: block; }
.youth_popover_close { width: 20px; height: 20px; background: none; border: none; cursor: pointer; position: absolute; top: 32px; right: 32px; background-color: red; }
.search_group_input { flex: 1; min-width: 280px; }
.store_search_input_wrap { position: relative; }
.store_search_input { width: 100%; height: 40px; padding: 0 16px; border: 1px solid #c4c4d0; border-radius: 12px; background-color: #fff; font-size: 1.6rem; color: #161616; letter-spacing: -0.01em; box-sizing: border-box; outline: none; }
.store_search_input::placeholder { color: #a4a4b0; }
.store_search_input:focus { border-color: #107AF2; }
.store_search_btn { width: 20px; height: 20px; background: none; border: none; cursor: pointer; position: absolute; top: 50%; right: 12px; transform: translateY(-50%); display: flex; align-items: center; justify-content: center; padding: 0; }

/* 점포 리스트 */
.store_list_wrap { margin-top: 32px; }
.store_list_bar { display: flex; align-items: center; justify-content: space-between; height: 40px; }
.store_count { font-size: 1.6rem; color: #67676f; letter-spacing: -0.01em; }
.store_count > strong { font-weight: 700; }
.store_bar_right { display: flex; align-items: center; gap: 8px; }

/* 정렬 버튼 */
.store_sort_group { display: flex; align-items: center; }
.sort_btn { height: 40px; padding: 0 12px; background: #fff; border: 1px solid #90909a; font-size: 1.4rem; font-weight: 700; color: #90909a; cursor: pointer; white-space: nowrap; position: relative; z-index: 0; margin-left: -1px; }
.sort_btn:first-child { margin-left: 0; border-radius: 8px 0 0 8px; }
.sort_btn:last-child { border-radius: 0 8px 8px 0; }
.sort_btn.active { color: #107af2; border-color: #107af2; z-index: 1; }

/* 뷰 토글 버튼 */
.store_view_group { display: flex; gap: 8px; }
.view_btn { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: #fff; border: 1px solid #90909a; border-radius: 8px; color: #107af2; cursor: pointer; }
.view_btn::before { content: ""; width: 20px; height: 20px; background: red; display: inline-block; }
.view_btn.active { border-color: #107af2; color: #107af2; }

/* 타입 뱃지 */
.type_badge { display: inline-block; padding: 3px 6px; border-radius: 4px; font-size: 1.4rem; }
.type_badge + .type_badge { margin-left: 4px; }
.badge_gs1 { background: #e8f8f1; color: #15b874; }
.badge_gs2 { background: #f9f2ea; color: #fb6432; }
.badge_gs3 { background: #faeeee; color: #ed3030; }
.type_badge.badge_gray { background: #f2f2f4; color: #67676f; }

/* 상세 토글 버튼 */
.detail_toggle_btn { display: inline-flex; align-items: center; gap: 4px; background: none; border: none; font-size: 2rem; color: #161616; cursor: pointer; letter-spacing: -0.01em; }
.detail_toggle_btn::after { content: ''; width: 20px; height: 20px; background: red; display: inline-block; transform: rotate(0deg); transform-origin: center; transition: transform 0.2s ease; }
.type_table_wrap.type2 .type_table tbody tr.is_open .detail_toggle_btn::after { transform: rotate(180deg); }

/* 상세 패널 */
.detail_panel_td { padding: 0 !important; height: auto !important; border: none !important; }
.detail_panel { padding: 40px; background: #f8f8f8; border-bottom: 1px solid #D7D7DF; }
.detail_panel :deep(.detail_card) { border: 0; }

/* 모바일 아코디언 */
.store_accordion_list { display: none; }
.store_accordion_list :deep(.board_type_toggle) { border-top: 1px solid #d7d7df; }
.store_accordion_list :deep(dt > a.acc_tit_btn) { min-height: auto; padding: 16px 20px; font-size: inherit; font-weight: inherit; border-bottom: 1px solid #d7d7df; }
.store_accordion_list :deep(dt > a.acc_tit_btn.acc_tit_open) { border: 1px solid #161616; border-bottom: none; }
.store_accordion_list :deep(dt > a.acc_tit_btn::after) { width: 24px; height: 24px; background-color: #161616; transform: rotate(0deg); transform-origin: center; transition: transform 0.2s ease; }
.store_accordion_list :deep(dt > a.acc_tit_btn.acc_tit_open::after) { transform: rotate(180deg); }
.store_accordion_list :deep(dd.acc_panel.acc_show) { border: 1px solid #161616; border-top: none; }
.store_accordion_list :deep(.acc_panel_cont) { padding: 0; }

/* 아코디언 헤드 */
.accordion_head_info { flex: 1; min-width: 0; }
.accordion_region { font-size: 2rem; font-weight: 700; color: #161616; letter-spacing: -0.01em; line-height: 1.35; }
.accordion_badges { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 8px; }

/* 카드 그리드 뷰 */
.store_card_grid_wrap { margin-top: 16px; display: flex; flex-direction: column; gap: 20px; }
.store_card_row { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; align-items: stretch; }
.store_card_row > li { display: flex; flex-direction: column; }

/* 페이지네이션 */
.store_pagination { display: flex; justify-content: center; margin-top: 24px; }

/* 점포 리스트 Tablet */
@media (max-width: 1024px) {
    .store_card_row { grid-template-columns: repeat(3, 1fr); }
}

/* 점포 리스트 Mobile */
@media (max-width: 768px) {
    .store_list_wrap { margin-top: 60px; }
    .tab_intro { margin-bottom:60px; font-size: 1.8rem; line-height: 1.4;}
    .store_count { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .store_count > strong { font-weight: 400; }
    .store_search { padding: 30px 20px; }
    .search_bottom_row { margin-top: 24px; padding-top: 24px; border-top: 1px solid #D7D7DF; flex-direction: column; gap: 50px; }
    .search_group_input { width: 100%; }
    .store_search_input { height: 52px; }
    .youth_popover { left: -20px; right: auto; top: calc(100% + 8px); transform: none; width: calc(100vw - 40px); max-width: 335px; }
    .chip_list { position: relative; }
    .chip_youth_wrap { position: static; }
    .store_list_bar { margin-bottom: 16px; align-items: flex-end; gap: 12px; height: auto; }
    .store_bar_right { justify-content: flex-end; }
    .sort_btn { height: 32px; font-size: 1.3rem; padding: 0 10px; }
    .view_btn { width: 32px; height: 32px; }
    .type_table_wrap.type2 { display: none; }
    .store_accordion_list { margin: 0 -20px; display: block; }
    .store_card_grid_wrap { gap: 8px; }
    .store_card_row { grid-template-columns: 1fr; }
    .detail_panel { padding: 16px; }
    .store_card_detail_row { margin-top: 0; }
    .store_accordion_list :deep(dt > a.acc_tit_btn.acc_tit_open), .store_accordion_list :deep(dt > a.acc_tit_btn.acc_tit_btn) { border: 0; }
    .store_accordion_list :deep(.board_type_toggle) { border-top: 1px solid #161616; }
    .store_accordion_list :deep(.detail_card) { padding: 20px; border-radius: 12px; border: 0; }
    .store_accordion_list :deep(dd.acc_panel > .acc_panel_inner > .acc_panel_cont) { padding: 30px 20px !important; background-color: #F8F8F8 !important; }
    .store_accordion_list :deep(dd.acc_panel.acc_show) { border: 0; }
    .accordion_badges { margin-top: 6px; }
}

/* 상담 및 신청 */
.caution_list { margin-top: 16px; }
.caution_list li p { color: #67676F; font-size: 1.8rem; line-height: 1.4; letter-spacing: -0.01em; }
.consult_card_list { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.consult_card { padding: 32px 24px; background: #F8F8F8; border-radius: 12px; display: flex; gap: 32px; min-width: 0; overflow: hidden; }
.consult_thumb { flex: 1 0 0; min-height: 120px; background-color: #D7D7DF;}
.consult_thumb > img { width: 100%; height: 100%; object-fit: cover; display: block; }
.consult_body { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; }
.consult_body p  { font-family: Pretendard;font-size: 1.8rem;line-height: 1.4;word-break: keep-all; }
.consult_body p.region{margin-top:2px;}
.consult_note { margin-top:2px;color:#67676F;}
.consult_tel_btn { margin-top: 32px; padding: 4px; background: none; border: 0; font-size: 1.6rem; font-weight: 500; color: #15B874; letter-spacing: -0.01em; line-height: 1.5; cursor: pointer; display: inline-flex; align-items: center; gap: 12px; white-space: nowrap; }
.consult_tel_btn::after { content: ""; width: 16px; height: 16px; background-color: #15B874; border-radius: 50%; flex-shrink: 0; display: inline-block; }
.consult_tel { margin-top: 4px; font-size: 1.4rem; font-weight: 500; color: #161616; letter-spacing: -0.01em; }
.consult_foot { margin-top: 18px;  }
.consult_foot button{max-width:123px;}
/* .consult_foot :deep([class*="btn_"]) { width: 100%; max-width: 113px;;} */
.info_banner { margin-top: 64px; padding: 34px 24px; background-color: #F9F2EA; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap:wrap;}
.info_banner > p { display: flex; align-items: flex-start; gap: 12px; font-size: 1.8rem; line-height: 1.4; }
.info_banner > p::before { content: ''; width: 27px; height: 27px; flex-shrink: 0; background-color: #FFB724;  display: block; }
@media (max-width: 1200px) {
    .consult_card_list { grid-template-columns: repeat(2, 1fr); }

}
@media (max-width: 768px) {
    .info_banner{margin-top:32px;padding:20px; gap:12px;}
    .info_banner button{margin-left:32px;}
    .info_banner > p{font-size: 1.4rem;line-height: 1.4;letter-spacing: -0.01em;}
    .info_banner > p::before{width:24px; height:24px;}
    .caution_list li p{font-size: 1.4rem;}
    .consult_card{padding:30px 20px;gap:20px;}
    .consult_card_list { grid-template-columns: 1fr; gap: 20px; }
    .consult_thumb { flex: 0 0 135px; max-height: 180px; }
    .consult_name { font-size: 1.6rem; }
    .consult_foot button{max-width :100%;}
}

/* 경영주 지원제도 — 가로 패딩 없음(Swiper), 텍스트·패널만 20px */
.sec_owner_support.panel { padding-left: 0; padding-right: 0; }
.sec_owner_support .tab_intro { margin-bottom: 24px; padding-left: 20px; padding-right: 20px; box-sizing: border-box; }
.sec_owner_support :deep(.brand_panel_title) { padding: 0 20px 64px; box-sizing: border-box; }

.sec_owner_support :deep(.feature_card_item) { min-height: 480px; background-repeat: no-repeat; background-position: left 32px bottom 32px; background-size: auto; }
.sec_owner_support :deep(.feature_card_item > .feature_card_num) { color:#11935D;}
.sec_owner_support :deep(.feature_card_list > .feature_card_item:nth-child(1)),
.sec_owner_support :deep(.feature_card_swiper .swiper-slide:nth-child(1) .feature_card_item) { background-image: url("@/assets/images/dummy/gsrst_info_01.png"); }
.sec_owner_support :deep(.feature_card_list > .feature_card_item:nth-child(2)),
.sec_owner_support :deep(.feature_card_swiper .swiper-slide:nth-child(2) .feature_card_item) { background-image: url("@/assets/images/dummy/gsrst_info_02.png"); }
.sec_owner_support :deep(.feature_card_list > .feature_card_item:nth-child(3)),
.sec_owner_support :deep(.feature_card_swiper .swiper-slide:nth-child(3) .feature_card_item) { background-image: url("@/assets/images/dummy/gsrst_info_03.png"); }
.sec_owner_support :deep(.feature_card_list > .feature_card_item:nth-child(4)),
.sec_owner_support :deep(.feature_card_swiper .swiper-slide:nth-child(4) .feature_card_item) { background-image: url("@/assets/images/dummy/gsrst_info_04.png"); }
.label_wrap{display:flex; flex-direction:column; gap:2px; }
.consult_tel_btn{margin-top:20px;}
@media (max-width: 768px) {
    /* 가로 스크롤 방지: 네거티브 마진·Swiper overflow·슬라이드·카드 너비 불일치 대응 */
    .sec_owner_support { overflow-x: hidden; }
    /* sec_body/tab_page에 좌우 20px 없음 → 히어로는 네거티브 마진 불필요 */
    .sec_owner_support :deep(.brand_panel_bg) { margin: 0 0 80px; }
    .sec_owner_support :deep(.brand_panel_title) { padding: 0 20px 32px; }
    .sec_owner_support :deep(.feature_card_swiper) { padding: 0 20px;overflow: hidden; }
    .sec_owner_support :deep(.feature_card_swiper .swiper-slide) { width: 85.333vw; box-sizing: border-box; }
    .sec_owner_support :deep(.feature_card_swiper .feature_card_item) { width: 100%; min-width: 0; min-height: 420px !important; box-sizing: border-box; }
    .sec_owner_support :deep(.feature_card_swiper .swiper-slide:not(:last-child)) { margin-right: 20px; }
    .label_wrap{display:flex; flex-direction:row; align-items: center; gap:0;}
    .label_wrap .consult_label + .consult_label{font-weight:700; gap:0;}
    .consult_body p{font-size: 1.6rem;}
    .consult_body p.consult_label.region{margin-top:6px;font-size: 1.4rem;line-height: 1.4;letter-spacing: -0.01em;}
    .consult_body p.consult_note{margin-top:2px;color:#67676F;font-size: 1.4rem;line-height: 1.4;letter-spacing: -0.01em;}
    .consult_foot :deep([class*="btn_"]) {height:38px;}
    .sec_consult :deep(.brand_panel_title){padding-bottom:32px !important;} 
}

/* 상담 및신청 */
.sec_consult :deep(.brand_panel_title) {padding-bottom:64px;}
.sec_consult :deep(.brand_panel_title h2){display:flex; align-items:center; gap:8px;}
.sec_consult :deep(.brand_panel_title h2::after){content:''; display:block; width:40px; height:40px; background-color:#D7D7DF; }

/* quick menu */
.quick_menu{position:fixed; bottom:60px; right:clamp(24px, 4.5313vw, 87px); width:clamp(104px, 6.8229vw, 131px); z-index:100; display:flex; flex-direction:column; gap:clamp(8px, 0.5208vw, 10px); opacity:0; pointer-events:none; transition:opacity 0.35s ease;}
.quick_menu.is_visible{opacity:1; pointer-events:auto;}
.quick_menu li{position:relative; width:100%;}
.quick_menu li button{width:100%; height:clamp(48px, 3.125vw, 60px); padding:clamp(12px, 0.9375vw, 18px) 0; color:#161616; font-size:clamp(1.3rem, 0.8333vw, 1.6rem); font-weight:700; letter-spacing:-0.01em; background:none; background-color:#F2F2F4; border:0; border-radius:99px; text-align:center; display:flex; align-items:center; justify-content:center; gap:clamp(8px, 0.5208vw, 10px);}
.quick_menu li button::before{content:''; width:clamp(16px, 1.0417vw, 20px); height:clamp(19px, 1.25vw, 24px); background-color:#161616; display:block;}


@media (max-width: 768px) {
    .quick_menu{display: none;}
}
</style>
