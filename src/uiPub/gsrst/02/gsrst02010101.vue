<template>
    <div class="wrap_gsrst">
        <!-- HEADER -->
        <header class="page_header" :style="{ backgroundImage: `url(${imgBg})` }">
            <div class="header_inner">
                <h2 class="header_title">GS25 창업안내</h2>
            </div>
        </header>

        <!-- BODY -->
        <div class="sec_body">
            <!-- Depth 1: 페이지 탭 (type_01: 하단 보더 언더라인) -->
            <Tabs  :tab-items="depth1Tabs" tab-class="type_01" v-model="activeD1" :tab-slide="true" />

            <!-- Depth 2: 섹션 탭 (type_02: pill 스타일) -->
            <Tabs v-show="activeD1 === 0" :tab-items="depth2Tabs" tab-class="type_02" v-model="activeD2" :tab-slide="true" />
            <Tabs v-show="activeD1 === 1" :tab-items="depth2TabsPrepare" tab-class="type_02" v-model="activeD2" :tab-slide="true" />
            <Tabs v-show="activeD1 === 3" :tab-items="depth2TabsConsult" tab-class="type_02" v-model="activeD2" :tab-slide="true" />

            <!-- GS25 브랜드 소개 -->
            <div class="panel" v-show="activeD1 === 0 && activeD2 === 0">
                <section class="sec_hero" :style="{ backgroundImage: `url(${imgBg2})` }">
                    <header>
                        <span class="tit">{{ brandIntro.badge }}</span>
                        <h3>{{ brandIntro.title }}</h3>
                        <p class="desc" v-html="brandIntro.desc"></p>
                    </header>
                    <ul class="action_list">
                        <li v-for="(item, i) in brandApplyLinks" :key="i">
                            <a :href="item.url">
                                <strong v-html="item.title"></strong>
                                <span v-html="item.desc"></span>
                            </a>
                        </li>
                    </ul>
                    <ul class="metric_list">
                        <li v-for="(item, i) in brandStats" :key="i">
                            <strong>{{ item.value }}</strong>
                            <span>{{ item.label }}</span>
                        </li>
                    </ul>
                </section>
                <section class="sec_num_list">
                    <header class="section_header">
                        <span class="tit">{{ successPointPanel.badge }}</span>
                        <h2 v-html="successPointPanel.title"></h2>
                        <p>{{ successPointPanel.desc }}</p>
                    </header>
                    <NumberedInfoList :items="successPointCards" :show-icon="true" desc-class="num_info_desc_light" />
                </section>
                <section class="sec_band">
                    <div class="inner">
                        <header class="section_header ac">
                            <h2 v-html="brandSolutionPanel.title"></h2>
                            <p>{{ brandSolutionPanel.desc }}</p>
                        </header>
                        <ul class="link_grid">
                            <li v-for="(item, i) in brandSolutionCards" :key="i">
                                <a :href="item.url">
                                    <span class="thumb" aria-hidden="true"></span>
                                    <span class="txt">
                                        <strong>{{ item.title }}</strong>
                                        <span class="desc">{{ item.desc }}</span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>  
            <!-- //GS25 브랜드 소개 -->

            <!-- 차별화된 경쟁력 -->
            <div class="panel" v-if="activeD1 === 0 && activeD2 === 1">
                <section class="sec_overlap">
                    <header class="section_header ac no_desc">
                        <h2 v-html="competitivePanel.title"></h2>
                    </header>
                    <ul class="overlap_grid">
                        <li v-for="(item, i) in competitiveCards" :key="i">
                            <article>
                                <span class="icon" aria-hidden="true"></span>
                                <strong v-html="item.title"></strong>
                            </article>
                        </li>
                    </ul>
                </section>
                <section class="sec_split">
                    <div class="inner">
                        <header class="section_header ac">
                            <span class="tit">{{ storeOpenPanel.badge }}</span>
                            <h2>{{ storeOpenPanel.title }}</h2>
                            <p>{{ storeOpenPanel.desc }}</p>
                        </header>
                        <div class="split_layout">
                            <dl class="info_card is_end">
                                <dt>
                                    <strong>{{ storeOpenCards[0].title }}</strong>
                                    <span class="icon" aria-hidden="true"></span>
                                </dt>
                                <dd>{{ storeOpenCards[0].desc }}</dd>
                            </dl>
                            <figure class="split_media">
                                <img :src="imgStoreOpen" alt="" />
                            </figure>
                            <dl class="info_card is_start">
                                <dt>
                                    <span class="icon" aria-hidden="true"></span>
                                    <strong>{{ storeOpenCards[1].title }}</strong>
                                </dt>
                                <dd>{{ storeOpenCards[1].desc }}</dd>
                            </dl>
                        </div>
                    </div>
                </section>
                <section class="sec_stack">
                    <header class="section_header ac">
                        <span class="tit">{{ productConceptPanel.badge }}</span>
                        <h2>{{ productConceptPanel.title }}</h2>
                        <p>{{ productConceptPanel.desc }}</p>
                    </header>
                    <div class="highlight_block">
                        <header class="sub_header">
                            <h3>{{ megaHitPanel.title }}</h3>
                            <strong>{{ megaHitPanel.subtitle }}</strong>
                            <p v-html="megaHitPanel.desc"></p>
                        </header>
                        <div class="highlight_body">
                            <div v-for="(group, gi) in megaHitGroups" :key="gi">
                                <h4>{{ group.title }}</h4>
                                <ul v-if="!isMobileView" role="list">
                                    <li v-for="(item, i) in group.items" :key="i">
                                        <article>
                                            <figure>
                                                <img :src="item.image" alt="" />
                                                <figcaption>
                                                    <p>{{ item.label }}</p>
                                                    <strong>{{ item.title }}</strong>
                                                </figcaption>
                                            </figure>
                                        </article>
                                    </li>
                                </ul>
                                <Swiper
                                    v-if="isMobileView"
                                    :key="`product-hit-${gi}`"
                                    class="highlight_swiper swiper_edge"
                                    slides-per-view="auto"
                                    :space-between="10"
                                    wrapper-tag="ul"
                                    :observer="true"
                                    :observe-parents="true"
                                    @swiper="(swiper) => onProductHitSwiper(swiper, gi)"
                                >
                                    <SwiperSlide v-for="(item, i) in group.items" :key="i" tag="li">
                                        <article>
                                            <figure>
                                                <img :src="item.image" alt="" />
                                                <figcaption>
                                                    <p>{{ item.label }}</p>
                                                    <strong>{{ item.title }}</strong>
                                                </figcaption>
                                            </figure>
                                        </article>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div class="dual_panel">
                        <article v-for="(item, i) in freshFfCards" :key="i">
                            <header class="sub_header">
                                <span class="tit">{{ item.badge }}</span>
                                <h3>{{ item.title }}</h3>
                                <p>{{ item.desc }}</p>
                            </header>
                            <ul v-if="item.points" class="list_dotted">
                                <li v-for="(point, pi) in item.points" :key="pi">{{ point }}</li>
                            </ul>
                            <div v-if="item.images" class="media_pair">
                                <figure
                                    v-for="(image, vi) in item.images"
                                    :key="vi"
                                    :style="{ backgroundImage: `url(${image})` }"
                                    aria-hidden="true"
                                ></figure>
                            </div>
                            <ul v-if="item.brands" class="stack_list">
                                <li v-for="(brand, bi) in item.brands" :key="bi">
                                    <span class="thumb" :style="{ backgroundImage: `url(${brand.image})` }" aria-hidden="true"></span>
                                    <div>
                                        <strong>{{ brand.title }}</strong>
                                        <p>{{ brand.desc }}</p>
                                    </div>
                                </li>
                            </ul>
                            <Buttons v-if="item.linkText" tag="a" href="#none" btn-class="btn_mid fill btn_icon after primary_green">{{ item.linkText }}</Buttons>
                        </article>
                    </div>
                    <div class="sub_block">
                        <header class="sub_header ac">
                            <h3>{{ conceptStorePanel.title }}</h3>
                            <p>{{ conceptStorePanel.desc }}</p>
                        </header>
                        <Swiper
                            class="sub_swiper swiper_edge"
                            slides-per-view="auto"
                            :space-between="conceptStoreSpaceBetween"
                            wrapper-tag="ul"
                            @swiper="onConceptStoreSwiper"
                        >
                            <SwiperSlide v-for="(item, i) in conceptStoreCards" :key="i" tag="li">
                                <article>
                                    <figure :style="{ backgroundImage: `url(${item.image})` }" aria-hidden="true"></figure>
                                    <span>{{ item.badge }}</span>
                                    <strong>{{ item.title }}</strong>
                                </article>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section class="sec_icon_grid">
                    <div class="inner">
                        <header class="section_header ac">
                            <span class="tit">{{ marketingPanel.badge }}</span>
                            <h2>{{ marketingPanel.title }}</h2>
                            <p>{{ marketingPanel.desc }}</p>
                        </header>
                        <ul class="icon_grid">
                            <li v-for="(item, i) in marketingCards" :key="i">
                                <article>
                                    <span class="icon" aria-hidden="true"></span>
                                    <div>
                                        <em v-if="item.em">{{ item.em }}</em>
                                        <strong>{{ item.title }}</strong>
                                        <p v-if="item.desc">{{ item.desc }}</p>
                                    </div>
                                </article>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="sec_tri_grid">
                    <header class="section_header ac">
                        <span class="tit">{{ operationSupportPanel.badge }}</span>
                        <h2>{{ operationSupportPanel.title }}</h2>
                        <p>{{ operationSupportPanel.desc }}</p>
                    </header>
                    <ul>
                        <li v-for="(card, i) in operationSupportCards" :key="i">
                            <h3>{{ card.title }}</h3>
                            <dl>
                                <template v-for="(item, j) in card.items" :key="j">
                                    <dt>
                                        <span class="icon" aria-hidden="true"></span>
                                        {{ item.term }}
                                    </dt>
                                    <dd>{{ item.desc }}</dd>
                                </template>
                            </dl>
                        </li>
                    </ul>
                </section>
            </div>
            <!-- //차별화된 경쟁력 -->

            <!-- 편의점 창업 이해 -->
            <div class="panel" v-show="activeD1 === 0 && activeD2 === 2">
                <section class="sec_diagram">
                    <header class="section_header ac">
                        <h2>{{ convenienceDefinePanel.title }}</h2>
                        <p>{{ convenienceDefinePanel.desc }}</p>
                    </header>
                    <div class="diagram_shell">
                        <div class="diagram_track">
                            <div class="diagram_ring layer_outer">
                                <div class="diagram_ring layer_mid">
                                    <div class="diagram_ring layer_inner">
                                        <article>
                                            <strong>{{ convenienceEvolutionCore.title }}</strong>
                                            <span>{{ convenienceEvolutionCore.desc }}</span>
                                        </article>
                                    </div>
                                    <article class="node_nested">
                                        <strong>{{ convenienceEvolutionStages[0].title }}</strong>
                                        <p>{{ convenienceEvolutionStages[0].desc }}</p>
                                    </article>
                                </div>
                                <article class="node_ring">
                                    <strong>{{ convenienceEvolutionStages[1].title }}</strong>
                                    <p>{{ convenienceEvolutionStages[1].desc }}</p>
                                </article>
                            </div>
                        </div>
                        <article class="node_aside">
                            <strong>{{ convenienceEvolutionStages[2].title }}</strong>
                            <p v-html="convenienceEvolutionStages[2].desc"></p>
                        </article>
                    </div>
                </section>
                <!-- 프랜차이즈란 -->
                <section class="sec_franchise_define" >
                    <div class="inner">
                        <header class="section_header ac">
                            <span v-show="isMobileView" class="tit">{{ franchiseDefinePanel.badge }}</span>
                            <h2>{{ franchiseDefinePanel.title }}</h2>
                            <p>{{ franchiseDefinePanel.desc }}</p>
                        </header>
                        <article class="franchise_define_card">
                            <header class="sub_header ac">

                                <span class="tit">{{ franchiseDefineCard.chip }}</span>
                                <h3>{{ franchiseDefineCard.title }}</h3>
                                <p>{{ franchiseDefineCard.desc }}</p>
                            </header>
                            <div class="franchise_formula" role="group" aria-label="프랜차이즈 성공 공식">
                                <div>
                                    <span aria-hidden="true"></span>
                                    <p>
                                        <strong v-html="franchiseFormula.franchisee.title"></strong>
                                        <span v-html="franchiseFormula.franchisee.label"></span>
                                    </p>
                                </div>
                                <span aria-hidden="true">+</span>
                                <div>
                                    <span aria-hidden="true"></span>
                                    <p>
                                        <strong v-html="franchiseFormula.franchisor.title"></strong>
                                        <span v-html="franchiseFormula.franchisor.label"></span>
                                    </p>
                                </div>
                                <span aria-hidden="true">=</span>
                                <div>
                                    <span aria-hidden="true"></span>
                                    <p>
                                        <strong>{{ franchiseFormula.result.title }}</strong>
                                        <span>{{ franchiseFormula.result.label }}</span>
                                    </p>
                                </div>
                            </div>
                            <div class="franchise_role_grid">
                                <article v-for="(column, cIdx) in franchiseRoleColumns" :key="cIdx">
                                    <header>
                                        <span aria-hidden="true"></span>
                                        <div>
                                            <h4>{{ column.title }}</h4>
                                            <p v-html="column.label"></p>
                                        </div>
                                    </header>
                                    <ul>
                                        <li v-for="(line, lIdx) in column.lines" :key="lIdx">
                                            <span aria-hidden="true"></span>
                                            <strong>{{ line }}</strong>
                                        </li>
                                    </ul>
                                </article>
                            </div>
                        </article>
                    </div>
                </section>
                <!-- 상담 받고 싶은 지역 -->
                <section class="sec_region_counsel" >
                    <header class="section_header ac">
                        <h2>{{ regionCounselPanel.title }}</h2>
                        <p>{{ regionCounselPanel.lead }}</p>
                    </header>
                    <Tabs
                        :tab-items="regionCounselTabs"
                        tab-class="type_02"
                        v-model="activeRegionTab"
                        :tab-slide="true"
                    />
                    <!-- 지역 선택: 담당자 목록 닫기 시 region_counsel_panel. 지도 API 연동 후 onRegionCounselMapStubClick 제거 -->
                    <div class="region_counsel_board" :class="{ is_staff: regionCounselBoardIsStaff }">
                        <div
                            class="region_counsel_map"
                            role="region"
                            aria-label="지도 연동 예정 영역"
                            :tabindex="regionCounselBoardIsStaff ? -1 : 0"
                            @click="onRegionCounselMapStubClick"
                            @keydown.enter.prevent="onRegionCounselMapStubClick"
                            @keydown.space.prevent="onRegionCounselMapStubClick"
                        ></div>
                        <div class="region_counsel_side">
                            <aside v-show="!regionCounselBoardIsStaff" class="region_counsel_panel">
                                <span class="icon"></span>
                                <p class="tit">{{ regionCounselEmpty.title }}</p>
                                <p class="desc" v-html="regionCounselEmpty.desc"></p>
                                <p class="hint">{{ regionCounselEmpty.hint }}</p>
                            </aside>
                            <div v-show="regionCounselBoardIsStaff" class="region_counsel_staff_body">
                                <header>
                                    <span class="ico_pin" aria-hidden="true"></span>
                                    <h3>{{ regionCounselStaff.regionName }}</h3>
                                    <span class="badge">{{ regionCounselStaff.countLabel }}</span>
                                    <button type="button" class="btn_close" aria-label="닫기" @click="closeRegionCounselStaff">닫기</button>
                                </header>
                                <ul>
                                    <li v-for="(manager, mi) in regionCounselStaff.managers" :key="mi">
                                        <article>
                                            <span class="photo" aria-hidden="true"></span>
                                            <div>
                                                <p class="name">{{ manager.name }}</p>
                                                <p class="area">{{ manager.area }}</p>
                                                <p class="phone">
                                                    <span class="ico_phone" aria-hidden="true"></span>
                                                    <a :href="`tel:${manager.phoneDial}`">{{ manager.phone }}</a>
                                                </p>
                                            </div>
                                        </article>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <!-- //편의점 창업 이해 -->

            <!-- FAQ -->
            <div class="panel" v-show="activeD1 === 0 && activeD2 === 3">
                <section class="sec_startup_faq">
                    <header class="section_header ac no_desc">
                        <h2>{{ startupFaqPanel.title }}</h2>
                    </header>
                    <Accordion class="type_faq faq_acc">
                        <AccordionItem
                            v-for="(item, idx) in startupFaqItems"
                            :key="idx"
                            :item-key="`startup-faq-${idx}`"
                        >
                            <template #title>{{ item.question }}</template>
                            <p>{{ item.answer || startupFaqDummyAnswer }}</p>
                        </AccordionItem>
                    </Accordion>
                </section>
                <section class="sec_gs25_faq">
                    <header class="section_header ac no_desc">
                        <h2>{{ gs25FaqPanel.title }}</h2>
                    </header>
                    <Tabs
                        :tab-items="gs25FaqTabs"
                        tab-class="type_01"
                        v-model="activeGs25FaqTab"
                        :tab-slide="true"
                    />
                    <Accordion class="type_faq faq_acc faq_acc_badge">
                        <AccordionItem
                            v-for="(item, idx) in paginatedGs25FaqItems"
                            :key="`${activeGs25FaqTab}-${activeGs25FaqPage}-${idx}-${item.question}`"
                            :item-key="`gs25-faq-${activeGs25FaqTab}-${activeGs25FaqPage}-${idx}`"
                        >
                            <template #title>
                                <span class="badge">{{ item.category }}</span>
                                <span class="txt">{{ item.question }}</span>
                            </template>
                            <p v-if="item.answer">{{ item.answer }}</p>
                            <p v-else>{{ startupFaqDummyAnswer }}</p>
                            <div v-if="item.answerTable" class="policy_wrap">
                                <p>* 타입별/기간별 개월 수</p>
                                <table>
                                    <colgroup>
                                        <col class="col_label" />
                                        <col class="col_data" />
                                        <col class="col_data" />
                                        <col class="col_data" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th v-for="col in item.answerTable.headers" :key="col" scope="col">{{ col }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="row in item.answerTable.rows" :key="row.label">
                                            <th scope="row">{{ row.label }}</th>
                                            <td v-for="(cell, ci) in row.cells" :key="ci">{{ cell }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </AccordionItem>
                    </Accordion>
                    <Pagination
                        v-if="gs25FaqTotalPages > 1"
                        v-model="activeGs25FaqPage"
                        :total-pages="gs25FaqTotalPages"
                        :visible-pages="gs25FaqTotalPages"
                        :show-ellipsis="false"
                    />
                </section>
            </div>
            <!-- //FAQ -->

            <!-- 창업 절차 -->
            <div class="panel" v-show="activeD1 === 1 && activeD2 === 0">
                <section class="sec_startup_process">
                    <header class="section_header ac txt_blue">
                        <h2>상담 신청부터 개점까지, <br />약 30일이면 나만의 GS25를 오픈할 수 있어요!</h2>
                    </header>
                    <ol class="process_timeline">
                        <li
                            v-for="(step, idx) in startupProcessSteps"
                            :key="idx"
                            :data-theme="step.theme"
                        >
                            <div class="step_meta">
                                <span class="day">{{ step.dayLabel }}</span>
                                <div class="step_track">
                                    <span class="num" aria-hidden="true">{{ step.num }}</span>
                                    <span
                                        v-if="idx < startupProcessSteps.length - 1"
                                        class="step_line"
                                        aria-hidden="true"
                                    ></span>
                                </div>
                            </div>
                            <article>
                                <span class="icon" aria-hidden="true"></span>
                                <div>
                                    <p v-if="step.lead" class="lead">{{ step.lead }}</p>
                                    <h3>{{ step.title }}</h3>
                                    <p class="desc">{{ step.desc }}</p>
                                    <button
                                        v-if="hasProcessMore(step)"
                                        href="#none"
                                        class="link_more"
                                        :class="{ is_open: openProcessMoreIdx === idx }"
                                        :aria-expanded="openProcessMoreIdx === idx ? 'true' : 'false'"
                                        @click.prevent="toggleProcessMore(idx)"
                                    >{{ openProcessMoreIdx === idx ? "접기" : "더 알아보기" }}</button>
                                    <div
                                        v-if="getProcessMoreList(step).length"
                                        :ref="(el) => setProcessMoreRef(el, idx)"
                                        class="process_more acc_panel"
                                    >
                                        <div class="acc_panel_inner">
                                            <div class="acc_panel_cont">
                                                <ul class="list_dotted">
                                                    <li v-for="(text, mi) in getProcessMoreList(step)" :key="mi">{{ text }}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </li>
                    </ol>
                </section>
            </div>
            <!-- //창업 절차 -->
            <!-- 가맹타입 --> 
            <div class="panel" v-show="activeD1 === 1 && activeD2 === 1">
                <section class="sec_franchise_type">
                    <header class="section_header ac">
                        <h2>내 자금과 상황에 딱 맞게! <br />
                            GS25만의 3가지 맞춤형 가맹 타입을 만나보세요</h2>
                    </header>
                    <ul class="franchise_type_list">
                        <li
                            v-for="group in franchiseTypeGroups"
                            :key="group.key"
                            :class="group.themeClass"
                        >
                            <article>
                                <header>
                                    <span class="icon" aria-hidden="true"></span>
                                    <div>
                                        <h3>{{ group.title }}</h3>
                                        <p>{{ group.desc }}</p>
                                    </div>
                                </header>
                                <div class="franchise_type_body">
                                    <div
                                        v-for="(card, ci) in group.cards"
                                        :key="ci"
                                        class="type_card"
                                        :class="card.cardClass"
                                    >
                                        <span class="badge">{{ card.badge }}</span>
                                        <span class="card_icon" aria-hidden="true"></span>
                                        <strong>{{ card.name }}</strong>
                                        <p>{{ card.desc }}</p>
                                    </div>
                                </div>
                            </article>
                        </li>
                    </ul>
                </section>
                <section class="sec_franchise_compare" data-figma-node="739:15141">
                    <header class="section_header ac">
                        <h2>한눈에 비교하고, 나에게 유리한 타입을 찾아보세요!</h2>
                    </header>
                    <div class="franchise_compare_wrap">
                        <table class="franchise_compare_table">
                            <colgroup>
                                <col class="col_group" />
                                <col class="col_label" />
                                <col class="col_gs" />
                                <col class="col_gs" />
                                <col class="col_gs" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th colspan="2" scope="colgroup"><strong>구분</strong></th>
                                    <td scope="col" class="is_gs1">
                                        <strong>GS1</strong> 
                                        <span>직접 임차하고, 수익 배분율이 가장 높아요</span>
                                    </td>
                                    <td scope="col" class="is_gs2">
                                        <strong>GS2</strong>
                                        <span>본사와 임차비용 공동 부담해요</span>
                                    </td>
                                    <td scope="col" class="is_gs3">
                                        <strong>GS3</strong>
                                        <span>임차비용 부담 없이 시작해요</span>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th rowspan="7" scope="rowgroup">투자 금액</th>
                                    <th scope="row">상품 준비금</th>
                                    <td colspan="3">1,400만원</td>
                                </tr>
                                <tr>
                                    <th scope="row">소모품 준비금</th>
                                    <td colspan="3">100만원</td>
                                </tr>
                                <tr>
                                    <th scope="row">가맹비</th>
                                    <td colspan="3">770만원(VAT포함)</td>
                                </tr>
                                <tr>
                                    <th scope="row">공통 투자금액 (상품+소모품+가맹비)</th>
                                    <td colspan="3"><strong>2,270만원</strong></td>
                                </tr>
                                <tr>
                                    <th scope="row">점포 임차비용</th>
                                    <td>경영주 투자</td>
                                    <td>본부 투자</td>
                                    <td>본부 지원</td>
                                </tr>
                                <tr>
                                    <th scope="row">본부 보증금</th>
                                    <td>-</td>
                                    <td><span>전대보증금</span>최소 3,000만원</td>
                                    <td><span>예치보증금</span>최소 3,000만원</td>
                                </tr>
                                <tr>
                                    <th scope="row">시설/인테리어</th>
                                    <td>본부 지원<br /><span>(※ 수익추구 특약: 경영주 투자)</span></td>
                                    <td>본부 지원</td>
                                    <td>본부 지원</td>
                                </tr>
                                <tr class="row_total">
                                    <th colspan="2" scope="row"><strong>총 투자금액</strong></th>
                                    <td><strong class="txt_blue">점포 임차비용 + 공통 투자비 2,270만원</strong></td>
                                    <td><strong class="txt_blue">최소 5,270만원<br /></strong><span>(전대보증금 + 공통 투자비)</span></td>
                                    <td><strong class="txt_blue">최소 5,270만원<br /></strong><span>(예치보증금 + 공통 투자비)</span></td>
                                </tr>
                                <tr>
                                    <th rowspan="6" scope="rowgroup">계약<br class="m_br">조건</th>
                                    <th scope="row"><strong>최종 경영주 수익 배분율</strong></th>
                                    <td><strong class="txt_blue txt_emphasis">최대 71%</strong></td>
                                    <td><strong class="txt_blue txt_emphasis">최대 65%</strong></td>
                                    <td><strong class="txt_blue txt_emphasis">최대 46%</strong></td>
                                </tr>
                                <tr>
                                    <th scope="row">경영주 수익 배분율</th>
                                    <td>66%</td>
                                    <td>60%</td>
                                    <td>41%</td>
                                </tr>
                                <tr>
                                    <th scope="row">24시간 영업장려금</th>
                                    <td>5%</td>
                                    <td>5%</td>
                                    <td>5%</td>
                                </tr>
                                <tr>
                                    <th scope="row">계약기간</th>
                                    <td>5년</td>
                                    <td>4년</td>
                                    <td>4년</td>
                                </tr>
                                <tr>
                                    <th scope="row">담보 설정</th>
                                    <td>5,000만원</td>
                                    <td>2,000만원</td>
                                    <td>2,000만원</td>
                                </tr>
                                <tr>
                                    <th scope="row">각종지원제도</th>
                                    <td colspan="3">상생 인센티브 / 상품 판매·발주 장려금 / 미오출 보상금</td>
                                </tr>
                                <tr>
                                    <th colspan="2" scope="row">수익추구특약</th>
                                    <td><strong>최대 81%</strong><br /><span>(※ GS1 수익배분율 71% + 10%)</span></td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <ul class="list_note">
                        <li>
                            <p>* 수익추구 특약 : 시설 인테리어 및 장비 사용료 경영주 투자, 가맹계약기간 7년</p>
                        </li>
                        <li>
                            <p>* GS3 Type은 가맹계약 체결 전 상호 협의에 따라 수익배분율을 달리 정할 수 있습니다</p>
                        </li>
                        <li>
                            <p class="txt_link">* 신선강화점으로 오픈하는 경우, 상품준비금은 600만원 상향, 담보 설정은 1,000만원 상향됩니다. (<a href="#">신선강화점 자세히 알아보기</a>)</p>
                        </li>
                    </ul>
                </section>
            </div>
            <!-- //가맹타입 -->
            <!-- 창업 혜택 -->
            <div class="panel" v-show="activeD1 === 1 && activeD2 === 2">
                <div class="wrap_tabs_type04">
                    <Tabs
                        v-model="activeD3"
                        :tab-items="depth3TabsBenefit"
                        tab-class="type_04"
                        :tab-slide="true"
                    />
                </div>
                <div v-show="activeD3 === 0" class="panel_third_depth" aria-label="탄탄한 점포">
                    <section>
                        <header class="section_header ac">
                            <h2>{{ benefitStorePanel.title }}</h2>
                            <p>{{ benefitStorePanel.desc }}</p>
                        </header>
                        <ul class="icon_card_list">
                            <li v-for="(item, i) in benefitStoreItems" :key="i">
                                <article>
                                    <span class="icon" aria-hidden="true"></span>
                                    <div>
                                        <dl>
                                            <dt>{{ item.title }}</dt>
                                            <dd>{{ item.desc }}</dd>
                                        </dl>
                                        <ul v-if="item.notes?.length" class="list_note">
                                            <li v-for="(note, ni) in item.notes" :key="ni">
                                                <p>* {{ note.label }}: {{ note.text }}</p>
                                            </li>
                                        </ul>
                                        <div v-if="item.link" class="button_area">
                                            <Buttons
                                                tag="a"
                                                :href="item.link.url"
                                                btn-class="btn_mid primary fill btn_icon after"
                                            >{{ item.link.text }}</Buttons>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        </ul>
                    </section>
                </div>
                <div v-show="activeD3 === 1" class="panel_third_depth" aria-label="든든한 점포 운영">
                    <section class="sec_operation">
                        <header class="section_header ac">
                            <h2>{{ benefitOperationPanel.title }}</h2>
                            <p>{{ benefitOperationPanel.desc }}</p>
                        </header>
                        <div v-for="(group, gi) in benefitOperationGroups" :key="gi" class="icon_card_topic">
                            <header class="sub_header">
                                <h3>{{ group.title }}</h3>
                                <p>{{ group.desc }}</p>
                            </header>
                            <ul class="icon_card_list" :class="`col_0${group.cols}`">
                                <li v-for="(item, i) in group.items" :key="i">
                                    <article>
                                        <span class="icon" aria-hidden="true"></span>
                                        <div>
                                            <dl>
                                                <dt>{{ item.title }}</dt>
                                                <dd>{{ item.desc }}</dd>
                                            </dl>
                                        </div>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div v-show="activeD3 === 2" class="panel_third_depth" aria-label="편안한 경영주 생활">
                    <section class="sec_life">
                        <header class="section_header ac">
                            <h2>{{ benefitLifePanel.title }}</h2>
                            <p>{{ benefitLifePanel.desc }}</p>
                        </header>
                        <div class="icon_card_topic">
                            <div v-for="(row, ri) in benefitLifeRows" :key="ri" class="icon_card_row">
                                <ul class="icon_card_list col_02 type_02">
                                    <li v-for="(item, i) in row" :key="i">
                                        <article>
                                            <span class="icon" aria-hidden="true"></span>
                                            <div>
                                                <dl>
                                                    <dt>{{ item.title }}</dt>
                                                    <dd>{{ item.desc }}</dd>
                                                </dl>
                                            </div>
                                        </article>
                                    </li>
                                </ul>
                            </div>
                            <ul class="list_note">
                                <li><p>{{ benefitLifeNote }}</p></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
            <!-- //창업 혜택 -->

            <!-- 추천 점포 찾기 -->
            <div class="panel pt_64" v-show="activeD1 === 2" aria-label="추천 점포 찾기">
                <section class="sec_store">
                    <p class="tab_intro">안정적인 수입이 기대되는 최적의 입지! 성공 확률을 높이는 GS25 추천 점포를 만나보세요</p>
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
            </div>
            <!-- //추천 점포 찾기 -->

            <!-- 상담 및 신청 -->
            <div class="panel" v-show="activeD1 === 3 && activeD2 === 0" aria-label="창업 상담 신청">
                <section class="sec_consult_startup">
                    <div class="consent_box" aria-label="개인정보 수집·이용 동의">
                        <h3>개개인정보 수집·이용 동의</h3>
                        <ul v-if="startupConsentItems.length" class="consent_list">
                            <li v-for="(item, idx) in startupConsentItems" :key="idx">
                                <p v-html="item"></p>
                            </li>
                        </ul>

                        <div class="consent_notice_area">
                            <p>고객님께서는 본 동의에 거부하실 권리가 있으나, 동의하지 않으실 경우 상담 글 작성이 불가능합니다.</p>
                            <label class="consent_radio">
                                <input
                                    type="checkbox"
                                    :checked="startupConsentAgreed"
                                    @change="onStartupConsentChange"
                                />
                                <span>동의합니다.</span>
                            </label>
                        </div>
                    </div>
                   
                    <div class="apply_form">
                        <div class="form_body">
                            <div class="form_row col_02">
                                <div class="col_item">
                                    <div class="form_label">이름 <span class="form_required">(필수 입력)</span></div>
                                    <div class="form_field">
                                        <Inputs type="text" v-model="startupConsultForm.name" />
                                    </div>
                                </div>
                                <div class="col_item">
                                    <div class="form_label">연락처 <span class="form_required">(필수 입력)</span></div>
                                    <div class="form_field form_field_phone">
                                        <SelectBox :options="phoneOptions" v-model="startupConsultForm.phone1" />
                                        <span class="form_sep">-</span>
                                        <Inputs type="text" v-model="startupConsultForm.phone2" />
                                        <span class="form_sep">-</span>
                                        <Inputs type="text" v-model="startupConsultForm.phone3" />
                                    </div>
                                </div>
                            
                            </div> 
                            <div class="form_row">
                                <div class="form_label">생년월일 <span class="form_required">(필수 입력)</span></div>
                                <div class="form_field form_field_birth">
                                    <SelectBox :options="startupBirthYearOptions" v-model="startupConsultForm.birthYear" initMsg="년도" />
                                    <SelectBox :options="startupBirthMonthOptions" v-model="startupConsultForm.birthMonth" initMsg="월" />
                                    <SelectBox :options="startupBirthDayOptions" v-model="startupConsultForm.birthDay" initMsg="일" />
                                </div>
                            </div>
                            <div class="form_row col_02">
                                <div class="col_item">
                                    <div class="form_label">점포 소유 및 임차 <span class="form_required">(필수 입력)</span></div>
                                    <div class="form_field form_field_radio">
                                        <Inputs
                                            v-for="opt in startupStoreOwnershipOptions"
                                            :key="opt.value"
                                            type="radio"
                                            name="startup_store_ownership"
                                            :value="opt.value"
                                            v-model="startupConsultForm.storeOwnership"
                                            :text="opt.label"
                                        />
                                    </div>
                                </div>
                                <div class="col_item">
                                    <div class="form_label">투자가능금액 (만원)</div>
                                    <div class="form_field">
                                        <Inputs type="text" v-model="startupConsultForm.investAmount" />
                                    </div>
                                </div>
                            
                            </div>
                            <div class="form_row">
                                <div class="form_label">오픈 희망 시기</div>
                                <div class="form_field form_field_open">
                                    <Inputs type="text" v-model="startupConsultForm.openYear" />
                                    <span class="form_unit">년</span>
                                    <Inputs type="text" v-model="startupConsultForm.openMonth" />
                                    <span class="form_unit">월</span>
                                </div>
                            </div>
                            <div class="form_row form_row_radio">
                                <div class="form_label">편의점 근무경험</div>
                                <div class="form_field form_field_radio form_field_experience">
                                    <Inputs
                                        v-for="opt in startupCvsExperienceOptions"
                                        :key="opt.value"
                                        type="checkbox"
                                        name="startup_cvs_experience"
                                        :value="opt.value"
                                        v-model="startupConsultForm.cvsExperience"
                                        :text="opt.label"
                                    />
                                </div>
                            </div>
                            <div class="form_row form_row_textarea">
                                <div class="form_label">문의 내용</div>
                                <div class="form_field">
                                    <Textarea
                                        v-model="startupConsultForm.inquiry"
                                        placeholder="창업 관련 궁금한 사항을 입력해주세요."
                                        :rows="6"
                                    />
                                </div>
                            </div>
                            <div class="form_row form_row_region">
                                <div class="form_label">
                                    <span>관심 지역 <span class="form_required">(필수 입력)</span></span>
                                    <p class="form_label_note">지역 선택 시 담당자가 배정되며, 담당자별로 예약 가능 시간이 다릅니다.</p>
                                </div>
                                <div class="form_field form_field_region">
                                    <SelectBox :options="startupRegionSidoOptions" v-model="startupConsultForm.regionSido" initMsg="시/도 선택" @update:modelValue="startupConsultForm.regionSigungu = ''" />
                                    <SelectBox :options="startupRegionSigunguOptions" v-model="startupConsultForm.regionSigungu" initMsg="구/시 선택" :disabled="!startupConsultForm.regionSido" />
                                </div>
                            </div>
                            <div class="form_row form_row_calendar">
                                <div class="form_label">상담 날짜 선택 <span class="form_required">(필수 입력)</span></div>
                                <div class="form_field form_field_calendar">
                                    <Inputs type="text" v-model="startupConsultForm.consultDate" :is-readonly="true" placeholder="먼저 관심 지역을 선택해주세요." />
                                </div>
                            </div>
                            <div class="form_row form_row_calendar">
                                <div class="form_label">상담 시간 선택 <span class="form_required">(필수 입력)</span></div>
                                <div class="form_field form_field_calendar">
                                    <Inputs type="text" v-model="startupConsultForm.consultTime" :is-readonly="true" placeholder="먼저 관심 지역을 선택해주세요." />
                                </div>
                            </div>
                            <article class="manager_card" aria-label="담당자 정보">
                                <figure class="consult_manager_photo" aria-hidden="true"></figure>
                                <div class="manager_body">
                                    <p class="manager_name">{{ startupConsultManager.name }}</p>
                                    <div class="manager_office">
                                        <span class="manager_icon" aria-hidden="true"></span>
                                        <div class="manager_addr">
                                            <p class="tit">{{ startupConsultManager.office }}</p>
                                            <p class="addr">{{ startupConsultManager.address }}</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <div class="form_row form_row_calendar">
                                <div class="form_label">상담 날짜 선택 <span class="form_required">(필수 입력)</span></div>
                                <ConsultCalendar v-model="startupConsultForm.consultDate" />
                            </div>
                            <div class="form_row form_row_calendar">
                                <div class="form_label">상담 시간 선택 <span class="form_required">(필수 입력)</span></div>
                                <ConsultTimePicker v-model="startupConsultForm.consultTime" />
                            </div>
                        </div>
                        <div class="button_area">
                            <Buttons btn-class="btn_xl primary">상담 예약 신청하기</Buttons>
                        </div>
                    </div>
                  
                </section>
            </div>
            <div class="panel" v-show="activeD1 === 3 && activeD2 === 1" aria-label="창업 설명회 신청">
                <section class="sec_consult_seminar">
                    <div class="seminar_region_pick" aria-label="지역 선택">
                        <div ref="seminarMonthSizerRef" class="seminar_month_sizer" aria-hidden="true">
                            <p v-for="slide in seminarMonthSlides" :key="'sz-' + slide.id" class="seminar_month_title">{{ slide.label }}</p>
                        </div>
                        <header class="seminar_month_head">
                            <button type="button" class="seminar_nav_btn seminar_nav_prev" aria-label="이전 달" :disabled="seminarMonthAtStart" @click.prevent="seminarMonthPrev">
                                <span class="seminar_nav_chevron" aria-hidden="true"></span>
                            </button>
                            <Swiper
                                class="seminar_month_swiper"
                                :style="{ width: `${seminarMonthSwiperPx}px` }"
                                :slides-per-view="1"
                                :space-between="0"
                                @swiper="onSeminarMonthSwiperInit"
                                @slide-change="onSeminarMonthSlideChange"
                            >
                                <SwiperSlide v-for="slide in seminarMonthSlides" :key="slide.id" tag="div">
                                    <p class="seminar_month_title">{{ slide.label }}</p>
                                </SwiperSlide>
                            </Swiper>
                            <button type="button" class="seminar_nav_btn seminar_nav_next" aria-label="다음 달" :disabled="seminarMonthAtEnd" @click.prevent="seminarMonthNext">
                                <span class="seminar_nav_chevron" aria-hidden="true"></span>
                            </button>
                        </header>
                        <ul class="seminar_region_list">
                            <li v-for="card in seminarActiveMonthCards" :key="card.id">
                                <article class="seminar_region_card">
                                    <header class="seminar_region_card_head">
                                        <p class="seminar_region_name">{{ card.regionName }}</p>
                                        <p class="seminar_region_addr">
                                            <span class="seminar_ic_pin" aria-hidden="true"></span>
                                            {{ card.address }}
                                        </p>
                                    </header>
                                    <div class="seminar_slot_list">
                                        <div v-for="(slot, si) in card.slots" :key="si" class="seminar_slot_row" :class="{ is_muted: slot.muted }">
                                            <span class="seminar_ic_time" aria-hidden="true"></span>
                                            <time class="seminar_slot_time" :datetime="slot.datetime">{{ slot.timeLabel }}</time>
                                            <button
                                                v-if="slot.badge && slot.badge.variant === 'closed'"
                                                type="button"
                                                disabled
                                                class="seminar_slot_badge is_closed"
                                            >
                                                {{ slot.badge.label }}
                                            </button>
                                            <button
                                                v-else-if="slot.badge && slot.badge.variant === 'apply' && !isSeminarApplyPicked(seminarCurrentMonthId, card.id, si)"
                                                type="button"
                                                class="seminar_slot_badge is_apply"
                                                @click.prevent="onSeminarApplyClick(seminarCurrentMonthId, card.id, si)"
                                            >
                                                신청
                                            </button>
                                            <button
                                                v-else-if="slot.badge && slot.badge.variant === 'apply' && isSeminarApplyPicked(seminarCurrentMonthId, card.id, si)"
                                                type="button"
                                                disabled
                                                class="seminar_slot_badge is_picked"
                                                aria-pressed="true"
                                            >
                                                선택됨
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        </ul>
                        <div v-if="seminarAppliedSlotKey" class="seminar_wrap">
                            <article class="manager_card type_02" aria-label="담당자 정보">
                                    <div class="manager_header">
                                        <p>선택한 설명회</p>
                                        <strong>부산 영남권 · 2/19(목) 15:00</strong>
                                    </div>
                                    <button type="button" class="btn_close" aria-label="닫기">닫기</button>
                            </article>
                            <div class="consent_box" aria-label="개인정보 수집·이용 동의">
                                    <h3>개인정보 수집·이용 동의</h3>
                                    <ul v-if="InformConsentItems.length" class="consent_list">
                                        <li v-for="(item, idx) in InformConsentItems" :key="idx">
                                            <p v-html="item"></p>
                                        </li>
                                    </ul>

                                    <div class="consent_notice_area">
                                        <p>동의하지 않으실 경우 상담 글 작성이 불가능합니다.</p>
                                        <label class="consent_radio">
                                            <input
                                                type="checkbox"
                                                :checked="startupConsentAgreed"
                                                @change="onStartupConsentChange"
                                            />
                                            <span>동의합니다.</span>
                                        </label>
                                    </div>
                            </div>
                            <div class="apply_form">
                                <div class="form_body">
                                    <div class="form_row col_02">
                                        <div class="col_item">
                                            <div class="form_label">이름 <span class="form_required">(필수 입력)</span></div>
                                            <div class="form_field">
                                                <Inputs type="text" v-model="startupConsultForm.name" />
                                            </div>
                                        </div>
                                        <div class="col_item">
                                            <div class="form_label">연락처 <span class="form_required">(필수 입력)</span></div>
                                            <div class="form_field form_field_phone">
                                                <SelectBox :options="phoneOptions" v-model="startupConsultForm.phone1" />
                                                <span class="form_sep">-</span>
                                                <Inputs type="text" v-model="startupConsultForm.phone2" />
                                                <span class="form_sep">-</span>
                                                <Inputs type="text" v-model="startupConsultForm.phone3" />
                                            </div>
                                        </div>
                                    
                                    </div> 
                                    <div class="form_row">
                                        <div class="form_label">생년월일 <span class="form_required">(필수 입력)</span></div>
                                        <div class="form_field form_field_birth">
                                            <SelectBox :options="startupBirthYearOptions" v-model="startupConsultForm.birthYear" initMsg="년도" />
                                            <SelectBox :options="startupBirthMonthOptions" v-model="startupConsultForm.birthMonth" initMsg="월" />
                                            <SelectBox :options="startupBirthDayOptions" v-model="startupConsultForm.birthDay" initMsg="일" />
                                        </div>
                                    </div>
                                    <div class="form_row col_02">
                                        <div class="col_item">
                                            <div class="form_label">점포 소유 및 임차 <span class="form_required">(필수 입력)</span></div>
                                            <div class="form_field form_field_radio">
                                                <Inputs
                                                    v-for="opt in startupStoreOwnershipOptions"
                                                    :key="opt.value"
                                                    type="radio"
                                                    name="startup_store_ownership"
                                                    :value="opt.value"
                                                    v-model="startupConsultForm.storeOwnership"
                                                    :text="opt.label"
                                                />
                                            </div>
                                        </div>
                                        <div class="col_item">
                                            <div class="form_label">투자가능금액 (만원)</div>
                                            <div class="form_field">
                                                <Inputs type="text" v-model="startupConsultForm.investAmount" />
                                            </div>
                                        </div>
                                    
                                    </div>
                                    <div class="form_row">
                                        <div class="form_label">오픈 희망 시기</div>
                                        <div class="form_field form_field_open">
                                            <Inputs type="text" v-model="startupConsultForm.openYear" />
                                            <span class="form_unit">년</span>
                                            <Inputs type="text" v-model="startupConsultForm.openMonth" />
                                            <span class="form_unit">월</span>
                                        </div>
                                    </div>
                                    <div class="form_row form_row_radio">
                                        <div class="form_label">편의점 근무경험</div>
                                        <div class="form_field form_field_radio form_field_experience">
                                            <Inputs
                                                v-for="opt in startupCvsExperienceOptions"
                                                :key="opt.value"
                                                type="checkbox"
                                                name="startup_cvs_experience"
                                                :value="opt.value"
                                                v-model="startupConsultForm.cvsExperience"
                                                :text="opt.label"
                                            />
                                        </div>
                                    </div>
                                    <div class="form_row form_row_textarea">
                                        <div class="form_label">문의 내용</div>
                                        <div class="form_field">
                                            <Textarea
                                                v-model="startupConsultForm.inquiry"
                                                placeholder="창업 관련 궁금한 사항을 입력해주세요."
                                                :rows="6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="button_area">
                                    <Buttons btn-class="btn_xl primary">상담 예약 신청하기</Buttons>
                                </div>
                            </div>
                        </div> 
                    </div>
                </section>
            </div>
            <div class="panel" v-show="activeD1 === 3 && activeD2 === 2" aria-label="입점 제안/브랜드 전환 상담">
                <section class="sec_consult_entry"></section>
            </div>
            <!-- //상담 및 신청 -->

        </div>
        <ul
            ref="quickMenuRef" 
            class="quick_menu"
            :aria-hidden="!showQuickMenu" 
        >
            <li><button type="button">창업안내</button></li>
            <li><button type="button">입점상담</button></li>
            <li><button type="button">고객센터</button></li>
        </ul>
    </div>
  
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted, onUnmounted, nextTick } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import Tabs from "@/components/Tabs.vue";
import Buttons from "@/components/Buttons.vue";
import NumberedInfoList from "@/components/NumberedInfoList.vue";
import Accordion from "@/components/Accordion.vue";
import AccordionItem from "@/components/AccordionItem.vue";
import Pagination from "@/components/Pagination.vue";
import StoreCard from "@/components/StoreCard.vue";
import StoreCardDetail from "@/components/StoreCardDetail.vue";
import Inputs from "@/components/Inputs.vue";
import SelectBox from "@/components/SelectBox.vue";
import Textarea from "@/components/Textarea.vue";
import ConsultCalendar from "@/components/ConsultCalendar.vue";
import ConsultTimePicker from "@/components/ConsultTimePicker.vue";
import imgBg from "@/assets/images/dummy/gsrst02010101_01.png";
import imgBg2 from "@/assets/images/dummy/gsrst02010101_02.jpg";
import imgStoreOpen from "@/assets/images/dummy/gsrst02010101_03.png";
import imgProduct01 from "@/assets/images/dummy/gsrst02010101_p_01.png"; 
import imgProduct02 from "@/assets/images/dummy/gsrst02010101_p_02.png";
import imgProduct03 from "@/assets/images/dummy/gsrst02010101_p_03.png";
import imgProduct04 from "@/assets/images/dummy/gsrst02010101_p_04.png";
import imgProduct05 from "@/assets/images/dummy/gsrst02010101_p_05.png";
import imgProduct06 from "@/assets/images/dummy/gsrst02010101_p_06.png";
import imgProduct07 from "@/assets/images/dummy/gsrst02010101_p_07.png";
import imgSinsen01 from "@/assets/images/dummy/gsrst02010101_sinsen_01.png";
import imgSinsen02 from "@/assets/images/dummy/gsrst02010101_sinsen_02.png";
import imgCounter01 from "@/assets/images/dummy/gsrst02010101_counter_01.png";
import imgCounter02 from "@/assets/images/dummy/gsrst02010101_counter_02.png";
import imgCounter03 from "@/assets/images/dummy/gsrst02010101_counter_03.png";
import imgStore01 from "@/assets/images/dummy/gsrst02010101_store_01.png";
import imgStore02 from "@/assets/images/dummy/gsrst02010101_store_02.png";
import imgStore03 from "@/assets/images/dummy/gsrst02010101_store_03.png";
import imgStore04 from "@/assets/images/dummy/gsrst02010101_store_04.png";

gsap.registerPlugin(ScrollTrigger);

const activeD1 = ref(0);
const activeD2 = ref(0);
const activeD3 = ref(0);

const mqMobile = window.matchMedia("(max-width: 768px)");
const mqTablet = window.matchMedia("(max-width: 1024px)");
const isMobileView = ref(mqMobile.matches);
const isTabletView = ref(mqTablet.matches);
const isCompetitiveTab = computed(() => activeD1.value === 0 && activeD2.value === 1);
const conceptStoreSpaceBetween = computed(() => (isMobileView.value ? 10 : 20));
const productHitSwiperInsts = ref([]);
let productHitRefreshFrame = 0;

function refreshProductHitSwipers() {
    cancelAnimationFrame(productHitRefreshFrame);
    productHitRefreshFrame = requestAnimationFrame(() => {
        nextTick(() => {
            productHitSwiperInsts.value.forEach((swiper) => {
                swiper?.update?.();
            });
        });
    });
}

function syncMobileView() {
    isMobileView.value = mqMobile.matches;
    isTabletView.value = mqTablet.matches;
    if (!mqMobile.matches) {
        productHitSwiperInsts.value = [];
    } else {
        refreshProductHitSwipers();
    }
    nextTick(manageQuickMenuAnimation);
}

function onProductHitSwiper(swiper, index) {
    productHitSwiperInsts.value[index] = swiper;
    refreshProductHitSwipers();
}

const depth1Tabs = [
    { item: "GS25 창업 알아보기" },
    { item: "창업 준비하기" },
    { item: "추천 점포 찾기" },
    { item: "상담 및 신청" },
    { item: "가맹계약시스템" },
];

const depth2Tabs = [
    { item: "GS25 브랜드 소개" },
    { item: "차별화된 경쟁력" },
    { item: "편의점 창업 이해" },
    { item: "FAQ" },
];

/** activeD1 === 1 (창업 준비하기) 2depth */
const depth2TabsPrepare = [
    { item: "창업 절차" },
    { item: "가맹 타입" },
    { item: "창업 혜택" },
];

/** activeD1 === 3 (상담 및 신청) 2depth */
const depth2TabsConsult = [
    { item: "창업 상담 신청" },
    { item: "창업 설명회 신청" },
    { item: "입점 제안/브랜드 전환 상담" },
];

/** activeD1 === 3, activeD2 === 0 (창업 상담 신청) — 개인정보 동의 목록 */
const startupConsentItems = [
    "- 입력하신 정보는 창업상담을 위해서만 사용합니다. 수집항목, 이용 및 목적, 보유 및 이용기간은 다음과 같으며, 기타 개인정보 취급사항은 홈페이지 하단의 '개인정보 처리방침'을 참고하시기 바랍니다.",
    "- 수집하는 개인정보 항목: 이름, 휴대폰번호, 생년월일,",
    "- 수집 및 목적: 수집한 개인정보를 본인 식별 및 문의사항 확인 및 답변을 위해 활용,",
    "- 보유 및 이용기간: 접수 후 1년",
];

const InformConsentItems =[
    "- 입력하신 정보는 창업상담을 위해서만 사용합니다.",
    "- 수집하는 개인정보 항목: 이름, 이메일, 휴대폰번호, 자택주소(시, 구/군)",
    "- 수집 및 목적: 본인 식별 및 문의사항 확인 및 답변",
    "- 보유 및 이용기간: 접수 후 1년",
]

const startupConsentAgreed = ref(false);

function onStartupConsentChange(event) {
    startupConsentAgreed.value = event.target.checked;
}

/** 창업 설명회 신청 탭 · 월별 지역 카드(Figma node 763:16835) */
const seminarDummyAddress = "서울특별시 강남구 논현로 636, 이디야 빌딩 3층";
const seminarMonthSlides = [
    {
        id: "seminar-m-202602",
        label: "2026년 2월",
        cards: [
            {
                id: "seminar-card-seoul-gb",
                regionName: "서울 수도권",
                address: seminarDummyAddress,
                slots: [
                    { timeLabel: "2/10(화) 14:00", datetime: "2026-02-10T14:00", muted: true, badge: { label: "신청 마감", variant: "closed" } },
                    { timeLabel: "2/10(화) 14:00", datetime: "2026-02-10T14:00", muted: false, badge: { label: "신청", variant: "apply" } },
                ],
            },
            {
                id: "seminar-card-busan-yeongnam",
                regionName: "부산 영남권",
                address: seminarDummyAddress,
                slots: [
                    { timeLabel: "2/10(화) 14:00", datetime: "2026-02-10T14:00", muted: true, badge: { label: "신청 마감", variant: "closed" } },
                    { timeLabel: "2/10(화) 14:00", datetime: "2026-02-10T14:00", muted: false, badge: { label: "신청", variant: "apply" } },
                ],
            },
            {
                id: "seminar-card-daegu-yeongnam",
                regionName: "대구 영남권",
                address: seminarDummyAddress,
                slots: [
                    { timeLabel: "2/10(화) 14:00", datetime: "2026-02-10T14:00", muted: false, badge: { label: "신청", variant: "apply" } },
                    { timeLabel: "2/10(화) 14:00", datetime: "2026-02-10T14:00", muted: false, badge: { label: "신청", variant: "apply" } },
                ],
            },
            {
                id: "seminar-card-gwangju-honam",
                regionName: "광주 호남권",
                address: seminarDummyAddress,
                slots: [
                    { timeLabel: "2/10(화) 14:00", datetime: "2026-02-10T14:00", muted: true, badge: { label: "신청 마감", variant: "closed" } },
                    { timeLabel: "2/10(화) 14:00", datetime: "2026-02-10T14:00", muted: false, badge: { label: "신청", variant: "apply" } },
                ],
            },
        ],
    },
    {
        id: "seminar-m-202603",
        label: "2026년 3월",
        cards: [
            {
                id: "seminar-card-incheon-gb",
                regionName: "인천 수도권",
                address: seminarDummyAddress,
                slots: [
                    { timeLabel: "3/5(목) 10:30", datetime: "2026-03-05T10:30", muted: false, badge: { label: "신청", variant: "apply" } },
                    { timeLabel: "3/12(목) 15:00", datetime: "2026-03-12T15:00", muted: true, badge: { label: "신청 마감", variant: "closed" } },
                ],
            },
            {
                id: "seminar-card-daejeon-chung",
                regionName: "대전 충청권",
                address: seminarDummyAddress,
                slots: [
                    { timeLabel: "3/8(일) 11:00", datetime: "2026-03-08T11:00", muted: false, badge: { label: "신청", variant: "apply" } },
                    { timeLabel: "3/15(일) 11:00", datetime: "2026-03-15T11:00", muted: false, badge: { label: "신청", variant: "apply" } },
                ],
            },
            {
                id: "seminar-card-gangwon",
                regionName: "강원 춘천·원주",
                address: seminarDummyAddress,
                slots: [
                    { timeLabel: "3/18(수) 14:00", datetime: "2026-03-18T14:00", muted: true, badge: { label: "신청 마감", variant: "closed" } },
                    { timeLabel: "3/25(수) 14:00", datetime: "2026-03-25T14:00", muted: false, badge: { label: "신청", variant: "apply" } },
                ],
            },
            {
                id: "seminar-card-jeju",
                regionName: "제주 특별자치도",
                address: seminarDummyAddress,
                slots: [
                    { timeLabel: "3/21(토) 10:00", datetime: "2026-03-21T10:00", muted: false, badge: { label: "신청", variant: "apply" } },
                    { timeLabel: "3/28(토) 10:00", datetime: "2026-03-28T10:00", muted: false, badge: { label: "신청", variant: "apply" } },
                ],
            },
        ],
    },
];

const seminarMonthSwiperInst = ref(null);
const seminarMonthSlideIndex = ref(0);
const seminarMonthSizerRef = ref(null);
const seminarMonthSwiperPx = ref(201);

function seminarMonthMeasureSwiperWidth() {
    nextTick(() => {
        const root = seminarMonthSizerRef.value;
        if (!root) return;
        const titles = root.querySelectorAll(".seminar_month_title");
        let maxW = 0;
        titles.forEach((node) => {
            maxW = Math.max(maxW, Math.ceil(node.getBoundingClientRect().width));
        });
        if (maxW > 0) seminarMonthSwiperPx.value = maxW;
        const s = seminarMonthSwiperInst.value;
        s?.update?.();
        if (s) seminarMonthSyncFromSwiper(s);
    });
}

const seminarMonthAtStart = computed(() => seminarMonthSlideIndex.value <= 0);
const seminarMonthAtEnd = computed(() => seminarMonthSlideIndex.value >= seminarMonthSlides.length - 1);

const seminarActiveMonthCards = computed(() => seminarMonthSlides[seminarMonthSlideIndex.value]?.cards ?? []);

const seminarAppliedSlotKey = ref(null);
const seminarCurrentMonthId = computed(() => seminarMonthSlides[seminarMonthSlideIndex.value]?.id ?? "");

function seminarApplySlotKey(monthId, cardId, si) {
    return `${monthId}::${cardId}::${si}`;
}

function isSeminarApplyPicked(monthId, cardId, si) {
    if (!monthId) return false;
    return seminarAppliedSlotKey.value === seminarApplySlotKey(monthId, cardId, si);
}

function onSeminarApplyClick(monthId, cardId, si) {
    if (!monthId) return;
    seminarAppliedSlotKey.value = seminarApplySlotKey(monthId, cardId, si);
}

function seminarMonthSyncFromSwiper(swiper) {
    if (!swiper || typeof swiper.activeIndex !== "number") return;
    seminarMonthSlideIndex.value = swiper.activeIndex;
}

function onSeminarMonthSwiperInit(swiper) {
    seminarMonthSwiperInst.value = swiper;
    seminarMonthSyncFromSwiper(swiper);
    seminarMonthMeasureSwiperWidth();
}

function onSeminarMonthSlideChange(swiper) {
    seminarMonthSyncFromSwiper(swiper);
}

function seminarMonthPrev() {
    seminarMonthSwiperInst.value?.slidePrev?.();
}

function seminarMonthNext() {
    seminarMonthSwiperInst.value?.slideNext?.();
}

watch(seminarMonthSlideIndex, (n, prev) => {
    if (prev !== undefined && n !== prev) seminarAppliedSlotKey.value = null;
});

watch(
    () => [activeD1.value, activeD2.value],
    ([d1, d2]) => {
        if (d1 !== 3 || d2 !== 1) seminarAppliedSlotKey.value = null;
        else seminarMonthMeasureSwiperWidth();
    }
);

const phoneOptions = [
    { value: "010", label: "010" },
    { value: "011", label: "011" },
    { value: "016", label: "016" },
    { value: "017", label: "017" },
    { value: "018", label: "018" },
    { value: "019", label: "019" },
];

const startupStoreOwnershipOptions = [
    { value: "yes", label: "있음" },
    { value: "no", label: "없음" },
];

const startupCvsExperienceOptions = [
    { value: "none", label: "없음" },
    { value: "gs25_staff", label: "GS25 근무자" },
    { value: "gs25_owner", label: "GS25 경영주" },
    { value: "other_staff", label: "타사 근무자" },
    { value: "other_owner", label: "타사 경영주" },
];

const startupRegionSidoOptions = [
    { value: "서울", label: "서울" },
    { value: "경기", label: "경기" },
    { value: "인천", label: "인천" },
    { value: "충청", label: "충청" },
    { value: "강원", label: "강원" },
    { value: "제주", label: "제주" },
    { value: "전라", label: "전라" },
    { value: "경상", label: "경상" },
];

const startupRegionSigunguMap = {
    서울: [
        { value: "마포구", label: "마포구" },
        { value: "강남구", label: "강남구" },
    ],
    경기: [{ value: "수원시", label: "수원시" }],
};

const startupBirthYearOptions = Array.from({ length: 80 }, (_, i) => {
    const year = new Date().getFullYear() - 18 - i;
    return { value: String(year), label: String(year) };
});

const startupBirthMonthOptions = Array.from({ length: 12 }, (_, i) => {
    const month = String(i + 1);
    return { value: month, label: month };
});

const startupBirthDayOptions = Array.from({ length: 31 }, (_, i) => {
    const day = String(i + 1);
    return { value: day, label: day };
});

const startupConsultForm = reactive({
    name: "",
    phone1: "010",
    phone2: "",
    phone3: "",
    storeOwnership: "",
    investAmount: "",
    openYear: "",
    openMonth: "",
    cvsExperience: [],
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    inquiry: "",
    regionSido: "",
    regionSigungu: "",
    consultDate: "",
    consultTime: "",
});

const startupRegionSigunguOptions = computed(() => startupRegionSigunguMap[startupConsultForm.regionSido] || []);

const startupConsultManager = {
    name: "담당장 : 이은정(02-2006-3565)",
    office: "GS25 서부사무소",
    address: "서울특별시 마포구 월드컵북로 396",
};

/** activeD1 === 1, activeD2 === 2 (창업 혜택) */
const depth3TabsBenefit = [
    { item: "탄탄한 점포" },
    { item: "든든한 점포 운영" },
    { item: "편안한 경영주 생활" },
];

/** 탄탄한 점포 */
const benefitStorePanel = {
    title: "대상별 맞춤 창업 혜택을 드립니다.",
    desc: "창업 준비 전 꼭 확인해보세요~!",
};

const benefitStoreItems = [
    {
        title: "우수 근무자 할인 제도",
        desc: "GS25에서 근무하는 우수 근무자 창업 시 본부 보증금 및 가맹비 일부 할인",
    },
    {
        title: "청년 창업 제도",
        desc: "투자비가 부족한 20대 청년들을 위한 본부 보증금 유예 및 창업활성화 지원금 300만원 제공",
        notes: [
            { label: "대상", text: "1997년~2007년생 (2026년 기준)" },
            { label: "안내", text: "적용 가능 점포는 담당자에게 별도 문의" },
        ],
        link: {
            text: "청년창업 혜택으로 오픈한 경영주님 성공기 보러가기",
            url: "#none",
        },
    },
    {
        title: "다자녀 할인 제도",
        desc: "만 18세 미만 자녀 2인 이상인 경우 가맹비 일부 할인",
    },
    {
        title: "다점포 할인 제도",
        desc: "GS25 경영주님이 추가 점포 창업 시 가맹비 일부 할인",
    },
];

/** 든든한 점포 운영 */
const benefitOperationPanel = {
    title: "업계 최고 수준의 GS25 경영주 상생 혜택",
    desc: "보험, 노무, 인센티브, 채용까지! 경영주님이 운영에만 집중할 수 있도록 GS25가 도와드려요.",
};

const benefitOperationGroups = [
    {
        title: "인센티브 제도",
        desc: "성과가 곧 보상으로! 점포 수익을 극대화할 수 있도록 성과에 따른 인센티브를 지급해요",
        cols: 2,
        items: [
            {
                title: "판매이익 인센티브 제도",
                desc: "FF, FF간편식, 신선, 치킨25 카테고리 수익 활성화를 위해 판매이익의 최대 +10% 본부 지원금 지급",
            },
            {
                title: "구색 강화 인센티브 제도",
                desc: "핵신상품 및 신상품 취급 확대에 따른 본부 지원금 지급",
            },
            {
                title: "수익 개선 인센티브 제도",
                desc: "점포 수익 개선 활동에 따른 본부 지원금 지급",
            },
            {
                title: "서비스 진단 제도",
                desc: "서비스 모니터링 등 진단 우수점 혜택 제공",
            },
        ],
    },
    {
        title: "보험/경조 지원",
        desc: "예기치 못한 순간에도 GS25가 함께해요",
        cols: 3,
        items: [
            {
                title: "경조사 지원",
                desc: "경조금 지급, 장례용품 지급, 점포운영지원금 지급, 출산용품 지급",
            },
            {
                title: "추석 선물 지급",
                desc: "경영주님 직접 선택 가능한 선택형 추석 선물 지급",
            },
            {
                title: "상생지원 보험",
                desc: "단체 안심상해 보험, 횡령, 택배도난, 현금도난, 재산종합 무상 가입",
            },
        ],
    },
    {
        title: "장기운영 혜택",
        desc: "오래 함께한 경영주님에게 더 큰 감사를 전해요",
        cols: 3,
        items: [
            {
                title: "10주년 혜택",
                desc: "기념패, 건강검진권",
            },
            {
                title: "20주년 혜택",
                desc: "기념패, 여행상품권, 건강검진",
            },
            {
                title: "30주년 혜택",
                desc: "기념패, 30주년 행사 지원, 여행상품권, 건강검진권",
            },
        ],
    },
    {
        title: "카운터FF 운영 지원",
        desc: "치킨25, 카페25 운영을 위한 실질적인 지원을 받아보세요",
        cols: 3,
        items: [
            {
                title: "치킨25 운영 지원",
                desc: "판매이익 인센티브 및 통신비용/튀김기름/냄새제거필터/튀김기 청소 일부 지원",
            },
            {
                title: "카페25 운영 지원",
                desc: "부품 수리비 일부 지원",
            },
            {
                title: "위생등급제 우수점 지원",
                desc: "위생등급제도 '매우 우수' 및 '우수' 취득 시 정수필터 비용 전액 또는 일부 지원",
            },
        ],
    },
    {
        title: "노무/법률 지원",
        desc: "채용부터 법률까지, 복잡한 인사노무 문제를 함께 해결해요",
        cols: 2,
        items: [
            {
                title: "노무상담 콜센터 운영",
                desc: "채용, 4대보험 등 노무 전반에 대한 상담 콜센터 서비스 제공",
            },
            {
                title: "노무 프리미엄 서비스",
                desc: "가맹점 전문 노무법인 제휴 할인 혜택 제공",
            },
            {
                title: "무료 법률 상담",
                desc: "민사, 형사, 가사, 행정 등 생활 법률 관련 상담 서비스 제공",
            },
            {
                title: "알바몬 제휴",
                desc: "스토어매니저 빠른 채용을 위한 알바몬 제휴",
            },
        ],
    },
    {
        title: "기타 운영 지원",
        desc: "안정적인 점포 운영을 위해 다양한 부가 지원 혜택을 준비했어요",
        cols: 3,
        items: [
            {
                title: "모바일 성인인증 지원",
                desc: "모바일 성인인증 서비스 이용료 지원",
            },
            {
                title: "가맹점 상생대출",
                desc: "우리은행 연계 추가 우대 금리 적용",
            },
            {
                title: "화재예방 소화기 지원",
                desc: "점포 인근 화재 발생 시 점포 소화기 공유를 통해 사용 후 교환 지원",
            },
            {
                title: "자연재해 피해 위로금 지원",
                desc: "가옥/전/답 자연재해 피해 시 점포 위로금 지원",
            },
            {
                title: "우수점포 경영주 포상",
                desc: "우수점포 대상 혜택 지급",
            },
            {
                title: "GS히어로상",
                desc: "사회적 귀감이 되는 경영주, 스토어매니저 포상",
            },
        ],
    },
];

/** 편안한 경영주 생활 */
const benefitLifePanel = {
    title: "일할 때도, 쉴 때도 든든한 혜택",
    desc: "건강, 복지, 여가까지! 점포 밖에서도 GS25가 함께합니다.",
};

const benefitLifeItems = [
    { title: "경영주 건강 & 심리 헬스케어 서비스", desc: "경영주님 및 직계가족 대상 건강과 심리 등 헬스케어 서비스 제공" },
    { title: "경영주 종합건강검진 할인 (KMI)", desc: "전국 대형 건강 검진센터(KMI) 기업 제휴가 할인 제공" },
    { title: "세이프닥 의료 제휴 할인", desc: "비급여 의료 항목에 대해 기업 제휴 할인 제공" },
    { title: "GS25 경영주 복지몰", desc: "가맹점 경영주님 대상 기업형 복지몰 제공" },
    { title: "삼성전자 소상공인몰", desc: "삼성전자 소상공인몰 제휴 할인혜택 등 제공" },
    { title: "엔젤 리조트", desc: "엔젤리조트 회원가 제공" },
    { title: "LG U+ 인터넷(와이파이) 할인", desc: "점포 매장 설치용 개별 인터넷(와이파이) 할인 혜택 제공" },
    { title: "기타 제휴 할인 혜택", desc: "렌터카, 라식/라섹, 레지던스 숙박 등 제휴업체 할인 혜택 제공" },
];

const benefitLifeNote =
    "* 해당 제도는 '26년에 한하며, 회사 경영여건 및 운영 방침에 따라 일부 변경/삭제 될 수 있습니다.";

const benefitLifeRows = Array.from(
    { length: Math.ceil(benefitLifeItems.length / 2) },
    (_, index) => benefitLifeItems.slice(index * 2, index * 2 + 2),
);

const brandIntro = {
    badge: "4년 연속, 편의점 매출 1위 브랜드 (22년~25년)",
    title: "비교할수록 결국, GS25.",
    desc: "점포당 매출 1위 브랜드<br class='p_br'/>함께 성장하기 위해, 점포의 숫자보다 경영주님의 수익을 먼저<br class='m_br'/>생각합니다.",
};

const brandApplyLinks = [
    {
        title: "창업설명회 신청",
        desc: "창업 전반에 대한 정보를 한 번에 안내드려요",
        url: "#none",
    },
    {
        title: "창업상담 신청",
        desc: "창업에 대한 궁금증을 1:1 상담해 드려요",
        url: "#none",
    },
    {
        title: "입점 제안/<br class='p_br'/>브랜드 전환 문의",
        desc: "보유 자리 입점 제안 또는 브랜드 전환을<br class='m_br'/>상담해드려요",
        url: "#none",
    },
];

const brandStats = [
    { value: "18,000+", label: "전국 점포수" },
    { value: "편의점 매출 1위", label: "점포당 연매출 6.4억+" },
    { value: "460만명", label: "전국 일평균 방문 고객" },
];

const successPointPanel = {
    badge: "SUCCESS POINT",
    title: "경영주님이 편한 GS25<br /><span class='txt_blue'>창업 성공 포인트</span>",
    desc: "GS25와 함께라면, 성공적인 창업이 가능합니다.",
};

const successPointCards = [
    {
        em: "수익성 분석",
        title: "수익성 중심의 신규 점포 오픈",
        desc: "점포 개발 전문가의 데이터와 현장 분석을 통해 수익성이 보이는 점포만 오픈합니다.",
    },
    {
        em: "스마트 운영",
        title: "든든하고 편리한 지원시스템",
        desc: "스마트 운영 시스템과 영업 전문가의 1:1 맞춤관리까지, 첫창업이어도 걱정 마세요",
    },
    {
        em: "차별화 컨셉",
        title: "경쟁력 있는 상품/컨셉",
        desc: "메가히트 상품부터 신선강화형 매장까지 GS25만의 차별화 컨셉으로 매출이 올라갑니다.",
    },
    {
        em: "히트 상품",
        title: "압도적인 마케팅",
        desc: "단골 고객을 만드는 마케팅과 멤버십 ‘우리동네 GS’ 앱부터 100만 구독자 SNS 채널까지, 고객이 다시 찾는 이유를 만듭니다.",
    },
];

const brandSolutionPanel = {
    title: "저도 창업 가능한가요? <br class='m_br'/><span class='txt_blue'>그럼요!</span>",
    desc: "경영주님 상황에 맞는 맞춤 솔루션을 찾아드립니다.",
};

const brandSolutionCards = [
    {
        title: "가맹 타입 소개",
        desc: "나에게 딱 맞는 3가지 타입",
        url: "#none",
    },
    {
        title: "창업 절차 안내",
        desc: "30일이면 창업 완료!",
        url: "#none",
    },
    {
        title: "추천 점포",
        desc: "지역, 상권, 투자비용에 맞는 추천 점포 확인",
        url: "#none",
    },
];

/** Figma 725:14786 — 창업 절차 타임라인 */
const startupProcessSteps = [
    {
        theme: "start",
        dayLabel: "Start",
        num: 1,
        lead: "여정의 시작! 가볍게 문 두드려 보세요.",
        title: "창업 설명회 & 상담 신청",
        desc: "창업 컨설턴트와 1:1 맞춤상담을 받으실 수 있어요",
        moreLink: true,
        moreList: ["'창업 상담신청' 메뉴에서 지역별 담당자와 연락처를 바로 확인할 수 있어요."],
    },
    {
        theme: "d30",
        dayLabel: "D-30",
        num: 2,
        lead: "함께 할 준비가 되셨군요!",
        title: "예비경영주 사전 인터뷰",
        desc: "본사 리더들과 사전 면담을 통해 GS25 창업에 대한 이해도를 확인하고 편의점 운영에 대한 궁금증을 해결해요.",
        moreLink: false,
    },
    {
        theme: "d29",
        dayLabel: "D-29",
        num: 3,
        lead: "내 점포를 함께 찾아볼까요?",
        title: "점포소개 & 점포 상권 분석",
        desc: "희망지역과 투자조건에 맞는 최적의 자리를 찾아드려요.",
        moreLink: false,
    },
    {
        theme: "d28",
        dayLabel: "D-28",
        num: 4,
        lead: "투명하게 모든 정보를 공개합니다.",
        title: "계약 준비 & 정보 공개서 교부",
        desc: "점포가 선정되었다면, 가맹본부에 대한 모든 정보를 미리 확인하실 수 있어요.",
        moreLink: true,
        moreList: ["법률에 따라 정보공개서 서명 후 14일이 지나야 계약이 가능해요."],
    },
    {
        theme: "d14",
        dayLabel: "D-14",
        num: 5,
        lead: "공식적인 파트너가 되는 순간!",
        title: "계약 체결 & 투자금 납입",
        desc: "가맹계약 담당자와 본 계약을 진행하고, 신규점은 착공 준비에 들어가요",
        moreLink: true,
        moreList: ["계약을 위해 본인 명의 휴대폰, 신분증, 투자비 등을 사전에 준비합니다."],
    },
    {
        theme: "d14_7",
        dayLabel: "D-14~7",
        num: 6,
        lead: "GS25의 노하우, 여기서 다 배워요!",
        title: "신규 경영주 교육",
        desc: "총 7일(영업일 기준) 코스로 온라인 강의부터 매장 실습까지, 점포 운영에 필요한 모든 것을 배워요",
        moreLink: true,
        moreList: ["전국의 교육장에서 교육 전문가와 함께 수업이 진행돼요"],
    },
    {
        theme: "d11",
        dayLabel: "D-11",
        num: 7,
        lead: "내 점포가 만들어지고 있어요!",
        title: "신규 점포 공사 & 인허가",
        desc: "평균 9일이면 공사 끝! 각 분야 전문가가 함께 해요.",
        moreLink: true,
        moreList: [
            "시설 공사부터 인테리어까지 전문 담당자가 지원합니다.",
            "사업자 등록증, 담배 소매인 등 점포 운영에 필요한 인허가도 함께 진행해요",
        ],
    },
    {
        theme: "d2_1",
        dayLabel: "D-2~1",
        num: 8,
        lead: "거의 다 왔어요, 마지막 점검!",
        title: "진열 & 최종 검수",
        desc: "경영주님이 검수한 상품을 전문 진열팀이 예쁘게 배치해요",
        moreLink: true,
        moreList: ["개점 하루 전 경영주님의 최종 검수가 진행됩니다."],
    },
    {
        theme: "dday",
        dayLabel: "D-Day",
        num: 9,
        lead: "",
        title: "드디어 개점! 축하합니다!",
        desc: "이제 GS25 경영주님으로 새로운 시작입니다. 앞으로도 GS25가 늘 곁에서 함께합니다!",
        moreLink: false,
    },
];

/** Figma 739:15072 — 가맹 타입 비교 */
const franchiseTypeGroups = [
    {
        key: "profit",
        themeClass: "is_profit",
        title: "수익 추구형",
        desc: "보유한 자리로 높은 수익 배분을 누려보세요.",
        cards: [
            {
                badge: "GS 1 Type",
                cardClass: "is_gs1",
                name: "일반가맹",
                desc: "경영주가 직접 임차하여 운영",
            },
        ],
    },
    {
        key: "stable",
        themeClass: "is_stable",
        title: "안정 추구형",
        desc: "점포가 없어도 OK! 본부 임차로 안정적으로 시작해보세요",
        cards: [
            {
                badge: "GS 2 Type",
                cardClass: "is_gs2",
                name: "전대가맹",
                desc: "본사와 임차비용 공동 부담",
            },
            {
                badge: "GS 3 Type",
                cardClass: "is_gs3",
                name: "위탁가맹",
                desc: "임차비용 부담 없이 시작",
            },
        ],
    },
];

/** moreLink: true(버튼만) | moreList(펼침 목록) — 배열/문자열을 moreLink에 넣은 경우도 호환 */
function getProcessMoreList(step) {
    if (step.moreList?.length) return step.moreList;
    if (Array.isArray(step.moreLink)) return step.moreLink;
    if (typeof step.moreLink === "string") return [step.moreLink];
    return [];
}

function hasProcessMore(step) {
    return step.moreLink === true || getProcessMoreList(step).length > 0;
}

const openProcessMoreIdx = ref(null);
const processMoreRefs = {};
const processMoreTokens = {};

function setProcessMoreRef(el, idx) {
    if (el) processMoreRefs[idx] = el;
    else delete processMoreRefs[idx];
}

function nextProcessMoreToken(idx) {
    processMoreTokens[idx] = (processMoreTokens[idx] || 0) + 1;
    return processMoreTokens[idx];
}

function expandProcessMore(el, myToken, idx) {
    if (el.classList.contains("acc_show") && el.style.height === "auto") return;

    el.classList.add("acc_animating", "acc_show");
    el.style.height = "auto";
    const heightPx = `${el.scrollHeight}px`;
    el.style.height = "0px";

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            if (myToken !== processMoreTokens[idx]) return;
            el.style.height = heightPx;
        });
    });

    const onEnd = (e) => {
        if (e.target !== el || e.propertyName !== "height") return;
        if (myToken !== processMoreTokens[idx]) {
            if (openProcessMoreIdx.value !== idx) {
                el.classList.remove("acc_show", "acc_animating");
                el.style.height = "";
            }
            return;
        }
        el.style.height = "auto";
        el.classList.remove("acc_animating");
    };
    el.addEventListener("transitionend", onEnd, { once: true });
}

function collapseProcessMore(el, myToken, idx) {
    if (!el.classList.contains("acc_show")) return;

    el.classList.add("acc_animating");
    const h = el.scrollHeight;
    if (h === 0) {
        el.classList.remove("acc_show", "acc_animating");
        el.style.height = "";
        return;
    }
    el.style.height = `${h}px`;

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            if (myToken !== processMoreTokens[idx]) return;
            el.style.height = "0px";
        });
    });

    const onEnd = (e) => {
        if (e.target !== el || e.propertyName !== "height") return;
        if (myToken !== processMoreTokens[idx]) {
            if (openProcessMoreIdx.value !== idx) {
                el.classList.remove("acc_show", "acc_animating");
                el.style.height = "";
            }
            return;
        }
        el.classList.remove("acc_show", "acc_animating");
        el.style.height = "";
    };
    el.addEventListener("transitionend", onEnd, { once: true });
}

function toggleProcessMore(idx) {
    const isOpen = openProcessMoreIdx.value === idx;
    const el = processMoreRefs[idx];

    if (isOpen) {
        openProcessMoreIdx.value = null;
        if (!el) return;
        const myToken = nextProcessMoreToken(idx);
        nextTick(() => collapseProcessMore(el, myToken, idx));
        return;
    }

    const prevIdx = openProcessMoreIdx.value;
    openProcessMoreIdx.value = idx;

    if (prevIdx !== null && prevIdx !== idx) {
        const prevEl = processMoreRefs[prevIdx];
        if (prevEl) {
            collapseProcessMore(prevEl, nextProcessMoreToken(prevIdx), prevIdx);
        }
    }

    nextTick(() => {
        const panel = processMoreRefs[idx];
        if (!panel) return;
        expandProcessMore(panel, nextProcessMoreToken(idx), idx);
    });
}

const competitivePanel = {
    title: "수익성 중심 점포 오픈부터 스마트한 시스템과 밀착 지원까지<br /><span class='txt_blue'>1등 브랜드로 창업을 시작하세요.</span>",
};

const competitiveCards = [
    { title: "수익성 중심의<br />점포 오픈" },
    { title: "고객에게 사랑받는<br />상품/컨셉" },
    { title: "압도적인<br />마케팅 & 멤버십" },
    { title: "스마트한 시스템과<br />밀착 지원" },
];

const storeOpenPanel = {
    badge: "점포개발",
    title: "수익성 중심의 신규 점포 오픈",
    desc: "점포 수 확장에만 집중하지 않아요. 경영주님과 본사 모두 수익성이 보이는 자리에 오픈합니다.",
};

const storeOpenCards = [
    {
        title: "데이터 중심의 상권 분석",
        desc: "업계 최고 수준 지리정보 시스템과 빅데이터를 활용한 정교한 상권 분석을 진행합니다.",
    },
    {
        title: "현장 검증을 통한 상권의 활동성 분석",
        desc: "점포개발전문가(RFC)의 현장 검증 및 체계적인 분석을 통해 수익성 있는 점포를 개발합니다.",
    },
];

const productConceptPanel = {
    badge: "상품 & 컨셉",
    title: "경쟁력 있는 상품과 차별화 컨셉",
    desc: "신선강화 매장부터 뷰티·주류 특화 매장까지, GS25만의 차별화된 컨셉으로 점포 수익성을 강화합니다.",
};

const megaHitPanel = {
    title: "메가 히트 상품",
    subtitle: "매주 신상품 출시!",
    desc: "스테디 셀러부터 SNS 인기 상품까지,<br />고객 발길을 사로잡습니다.",
};

const megaHitGroups = [
    {
        title: "스테디 셀러",
        items: [
            { label: "가성비 도시락의 상징", title: "혜자로운 도시락", image: imgProduct01 },
            { label: "누적 판매량 1억개 돌파", title: "오모리 김치찌개 라면", image: imgProduct02 },
            { label: "GS25 전용 브랜드에서 해외 진출까지", title: "유어스(YOUUS)", image: imgProduct03 },
            { label: "바리스타가 평가한 1위 커피", title: "카페25", image: imgProduct04 },
        ],
    },
    {
        title: "SNS 인기 상품",
        items: [
            { label: "가성비 도시락의 상징", title: "흑백요리사 협업,모찌롤", image: imgProduct05 },
            { label: "누적 판매량 1억개 돌파", title: "아이스브릴레 시리즈", image: imgProduct06 },
            { label: "GS25 전용 브랜드에서 해외 진출까지", title: "맛삼촌 딸기 샌드위치", image: imgProduct07 },
        ],
    },
];

const freshFfCards = [
    {
        badge: "GS25 Only",
        title: "신성강화점",
        desc: "편의점의 편리함 + 슈퍼의 신선함, 두 마리 토끼를 잡는 원스톱 장보기 매장",
        points: [
            "365일, 24시간 언제 어디서나 신선식품 장보는 편의점",
            "1~2인 가구를 위한 소용량 소포장 장보기 상품 판매",
        ],
        images: [imgSinsen01, imgSinsen02],
        linkText: "신선강화점 자세히 알아보기",
    },
    {
        badge: "카운터 FF",
        title: "카운터 FF로 매출을 더하다",
        desc: "편의점에서 즐기는 전문점 퀄리티!",
        brands: [
            {
                title: "CAFE25",
                desc: "최고급 커피머신과 원두를 사용한 커피를 합리적인 가격으로 제공하는 GS25의 원두커피",
                image: imgCounter01,
            },
            {
                title: "CHICKEN25",
                desc: "편의점에서도 즉석에서 조리한 전문점 수준의 치킨을 즐길수 있는 치킨25",
                image: imgCounter02,
            },
            {
                title: "GO PIZZA",
                desc: "언제 어디서나 갓 구운 피자를 만나는 전문점 퀄리티의 고피자",
                image: imgCounter03,
            },
        ],
    },
];

const conceptStorePanel = {
    title: "상권 맞춤형 컨셉 스토어",
    desc: "지역 상권과 고객 특성에 맞춰 최적화된 컨셉으로 차별화된 매장을 운영합니다.",
};

const conceptStoreCards = [
    { badge: "#리조트특화 #주류특화", title: "GS25 전주본점", image: imgStore01 },
    { badge: "#리조트특화 #주류특화", title: "GS25 전주본점", image: imgStore02 },
    { badge: "#리조트특화 #주류특화", title: "GS25 전주본점", image: imgStore03 },
    { badge: "#리조트특화 #주류특화", title: "GS25 전주본점", image: imgStore04 },
];

const conceptStoreSwiperInst = ref(null);

function onConceptStoreSwiper(swiper) {
    conceptStoreSwiperInst.value = swiper;
}

watch([isCompetitiveTab, isMobileView], ([isActive]) => {
    if (!isActive) return;
    nextTick(() => {
        conceptStoreSwiperInst.value?.update?.();
        if (isMobileView.value) {
            refreshProductHitSwipers();
        }
    });
});

const marketingPanel = {
    badge: "마케팅 & 멤버십",
    title: "단골 고객을 만드는 마케팅과 멤버십",
    desc: "‘우리동네 GS’ 앱부터 100만 구독자 SNS 채널까지, 고객이 다시 찾는 이유를 만듭니다.",
};

const marketingCards = [
    {
        em: "국내 편의점 다운로드수 1위 어플",
        title: "우리동네 GS",
        desc: "증정상품 보관부터 5천여종의 와인과 주류 주문까지",
    },
    {
        em: "국내 편의점 다운로드수 1위 어플",
        title: "GS ALL 멤버십",
        desc: "GS25, GS더프레시, GS SHOP 모두 적립/사용 가능",
    },
    {
        em: "국내 편의점 다운로드수 1위 어플",
        title: "멤버십 카드 / 선불카드",
        desc: "통신사 멤버십 카드 할인, GS ALL 포인트 적립, 팝카드 행사 등",
    },
    {
        em: "각 100만 팔로워·구독자 돌파",
        title: "GS25 인스타그램 / 유튜브 채널",
        desc: "신상품 소식, 이벤트, 토크 컨텐츠로 고객 접점 확대",
    },
];

const operationSupportPanel = {
    badge: "운영 지원",
    title: "든든한 운영 지원 & 스마트 인프라",
    desc: "창업이 처음이라도 걱정하지 마세요. 점포 오픈부터 안정적인 운영까지, GS25가 함께합니다.",
};

const operationSupportCards = [
    {
        title: "신규 창업자를 위한 '밀착 케어' 시스템",
        items: [
            { term: "맞춤형 컨설팅", desc: "창업 컨설턴트와 상담을 통한 최적의 점포 매칭" },
            { term: "원스톱 오픈 지원", desc: "시설/인테리어, 신규 경영주 교육, 창업대출 연계, 인허가 안내 등 복잡한 절차 지원" },
            { term: "현장 밀착 케어", desc: "오픈 후 4일간 담당자 밀착 근무로 초기 정착 지원" },
            { term: "사후 적응 관리", desc: "적응이 어려운 경우 안심동행서비스 제공으로 운영 안정화" },
        ],
    },
    {
        title: "스마트한 점포 운영 시스템",
        items: [
            { term: "AI 자동발주", desc: "내 점포 판매 데이터와 결품 이력을 분석을 통한 발주 최적화" },
            { term: "모바일 관리 시스템", desc: "언제 어디서나 발주·매출 실시간 확인" },
            { term: "직관적인 POS", desc: "누구나 배우기 쉽고 간편한 결제 시스템" },
            { term: "사후 적응 관리", desc: "누구나 배우기 쉽고 간편한 결제 시스템" },
        ],
    },
    {
        title: "오픈 후에도 지속되는 운영 지원",
        items: [
            { term: "1:1 전담 관리", desc: "영업 전문가의 현장 방문 및 맞춤형 솔루션 제공" },
            { term: "24시간 콜센터", desc: "24시간, 연중무휴 공백 없는 지원" },
            { term: "카카오톡 챗봇 지원", desc: "경영주,근무자 업무지원을 위한 카카오톡 챗봇조이 운영" },
            { term: "교육 플랫폼 지원", desc: "점포 운영 능력 향상과 소통을 위한 온라인 아카데미 운영" },
        ],
    },
];

const convenienceDefinePanel = {
    title: "편의점이란?",
    desc: "편의점은 단순한 소매점이 아니에요. 동네 아지트이자 생활 인프라로, 해마다 꾸준히 성장하고 있는 든든한 사업입니다.",
};

const convenienceEvolutionCore = {
    title: "기존 소매점",
    desc: "(단순판매)",
};

const convenienceEvolutionStages = [
    {
        title: "편의의 중심",
        desc: "시간, 거리, 쇼핑, 가격 구매의 편리성 제공",
    },
    {
        title: "생활의 중심",
        desc: "공공요금, 택배/픽업, 의약품 판매 등",
    },
    {
        title: "라이프스타일 플랫폼",
        desc: "커피구독 서비스, 전동킥보드/전기차 충전,<br />아동/여성안전 지킴이, 우리 동네GS APP",
    },
];

/**  프랜차이즈란 */
const franchiseDefinePanel = {
    badge:"점포개발",
    title: "프랜차이즈란?",
    desc: "쉽게 말해, 본부와 가맹점이 서로 힘을 합쳐 함께 성장하는 파트너십이에요. 혼자가 아니라 함께이기 때문에 더 든든합니다.",
};

const franchiseDefineCard = {
    chip: "GS25 Franchise",
    title: "프랜차이즈의 성공",
    desc: "가맹본부와 가맹점이 함께 만드는 상생의 파트너십",
};

const franchiseFormula = {
    franchisee: { title: "성실한 운영", label: "가맹점 (Franchisee)" },
    franchisor: { title: "체계적 지원", label: "가맹본부 (Franchisor)" },
    result: { title: "함께 성장", label: "GS25 Franchise" },
};

/** 역할 2열 카드 */
const franchiseRoleColumns = [
    {
        title: "점포 운영",
        label: "가맹점<br class='m_br' />(Franchisee)",
        lines: [
            "내 가게를 책임감 있게 운영해요",
            "고객에게 친절한 점포를 만들어요",
            "GS25 브랜드 가치를 함께 지켜요",
            "상품 관리와 진열을 신경 써요",
        ],
    },
    {
        title: "운영 지원",
        label: "가맹본부<br class='m_br' />(Franchisor)",
        lines: [
            "성공 창업을 위한 전략을 세워요",
            "교육과 노하우를 아낌없이 전해요",
            "설비 설치와 상품 공급을 책임져요",
            "매출 올리는 마케팅을 지원해요",
        ],
    },
];

/** 창업 FAQ */
const startupFaqPanel = {
    title: "창업 FAQ TOP 5",
};
const startupFaqDummyAnswer =
    "답변 내용이 들어오는 부분입니다. 답변 내용이 들어오는 부분 입니다. 답변 내용이 들어오는 부분 입니다.";
const startupFaqItems = [
    {
        question: "편의점 자리는 직접 알아봐야 하나요?",
        answer:
            "직접 알아보시는 경우도 있고, 회사가 추천해 드리기도 해요!\n가맹 희망자분이 개점 희망하는 후보지가 있는 경우 점포개발 담당자를 통해 검토가 가능합니다.\n희망하시는 위치가 없는 경우 경영주님의 희망 조건에 따라 점포를 추천해드립니다.",
    },
    {
        question: "편의점 운영해본 경험이 없는데, 창업이 가능할까요?",
        answer:
            "물론이죠! 점포 오픈 전, 점포 운영 전반에 대한 이론 및 실습 교육을 체계적으로 진행하여 안정적인 운영 기반을 마련해 드립니다.\n오픈 이후에도 개점 담당 직원이 일정 기간 점포에 동행 근무하며 초기 운영 적응을 지원해 드리므로, 신규 경영주님도 안심하고 점포를 운영하실 수 있어요.\n 또한, 본사 영업 전문가(OFC)가 정기적으로 점포를 방문하여 매출 향상, 운영 개선 등 전반적인 점포 운영을 지속적으로 지원하고 있습니다.",
    },
    {
        question: "점포 유형에 신규점과 기존점 차이는 무엇인가요?",
        answer:
            "신규점은 현재 GS25 매장이 없는 곳에서 새로 오픈하여 운영하는 점포를 의미해요.\n기존점은 기존 GS25 매장을 새로운 경영주님께서 인수하여 운영하는 매장을 의미합니다.",
    },
    {
        question: "24시간 영업은 필수인가요?",
        answer:
            "계약을 맺기 전에는 점포 상황에 따라 영업시간을 서로 협의할 수 있어요.\n다만, 오픈 후부터는 최초 계약 체결시 합의된 영업 시간은 준수해 주셔야 합니다.\n또한 계약 기간 중이라도, 부득이한 사정이 있거나 심야 시간대 매출이 너무 적어 손해가 계속되는 경우에는 경영주님이 회사에 요청하고,\n회사가 동의하면 24시간 운영을 하지 않을 수도 있습니다.\n단, 24시간 운영을 하지 않는 경우에는 24시간 운영 점포에 지급되는 장려금(지원금)은 받을 수 없습니다.",
    },
    {
        question: "근무자 채용은 직접 해야하나요?",
        answer:
            "가맹점은 경영주님이 직접 운영하는 독립된 사업장입니다.\n따라서 점포 운영에 대한 권한과 책임은 경영주님께 있습니다.\n직원 채용, 근무 스케줄 관리, 급여 지급 등도 모두 경영주님의 역할입니다.\n다만, 채용을 쉽고 빠르게 할 수 있도록 알바몬d 사이트를 지원해드리고 있습니다. 해당 비용은 본부에서 부담하고 있으며 무료로 이용 가능합니다.",
    }
    
];

/** GS25 답변 */
const GS25_FAQ_PAGE_SIZE = 6;
const activeGs25FaqTab = ref(0);
const activeGs25FaqPage = ref(1);
const gs25FaqTabFilters = [null, "가맹조건", "창업문의", "운영문의", "폐점,계약해지"];

const gs25FaqPanel = {
    title: "편의점 창업에 대한 모든 궁금증, GS25가 명쾌하게 답변해 드립니다.",
};
const gs25FaqTabs = [
    { item: "전체" },
    { item: "가맹조건" },
    { item: "창업문의" },
    { item: "운영문의" },
    { item: "폐점,계약해지" },
];
const gs25FaqItems = [
    {
        category: "가맹조건",
        question: "담보는 무엇인가요?",
        answer: "GS25는 가맹계약에 따라 점포에 상품을 먼저 공급해 드리고 있어요.\n경영주님이 상품을 판매한 뒤, 그 매출을 회사에 보내 정산하고 수익을 나누는 구조입니다.\n만약 매출을 보내지 못하는 상황이 생기면, 이미 공급된 상품 대금은 회사의 손실로 남게 됩니다. 그래서 이런 상황에 대비해 ‘담보’를 설정하게 됩니다.\n쉽게 말해, 혹시 모를 상황에 대비한 안전장치라고 생각하시면 됩니다.",
    },
    {
        category: "가맹조건",
        question: "담보의 종류는 어떻게 되나요? 꼭 현금이 있어야 할까요?",
        answer:
            "담보 설정 방법은 크게 3가지입니다. 3가지 중에 가능한 방법으로 선택하시면 돼요!\n\n1️⃣ 근저당\n→ 집이나 건물 같은 부동산에 담보를 설정하는 방식입니다.\n(해당 부동산에 충분한 가치가 있어야 가능합니다.)\n\n2️⃣ 질권\n→ 은행 예금에 담보를 설정하는 방식입니다.\n(예금을 담보로 묶어두는 개념입니다.)\n\n3️⃣ 보증보험\n→ 보증보험사에 일정 수수료를 내면, 보증보험사가 약정 금액에 대해 일정 기간 대신 보증을 서주는 방식입니다.",
    },
    {
        category: "창업문의",
        question: "편의점 자리는 직접 알아봐야 하나요?",
        answer:
            "직접 알아보시는 경우도 있고, 회사가 추천해 드리기도 해요!\n가맹 희망자분이 개점 희망하는 후보지가 있는 경우 점포개발 담당자를 통해 검토가 가능합니다.\n희망하시는 위치가 없는 경우 경영주님의 희망 조건에 따라 점포를 추천해드립니다.",
    },
    {
        category: "창업문의",
        question: "편의점 운영해본 경험이 없는데, 창업이 가능할까요?",
        answer: "물론이죠! 점포 오픈 전, 점포 운영 전반에 대한 이론 및 실습 교육을 체계적으로 진행하여 안정적인 운영 기반을 마련해 드립니다.\n오픈 이후에도 개점 담당 직원이 일정 기간 점포에 동행 근무하며 초기 운영 적응을 지원해 드리므로, 신규 경영주님도 안심하고 점포를 운영하실 수 있어요.\n또한, 본사 영업 전문가(OFC)가 정기적으로 점포를 방문하여 매출 향상, 운영 개선 등 전반적인 점포 운영을 지속적으로 지원하고 있습니다.",
    },
    {
        category: "창업문의",
        question: "외국인도 창업이 가능한가요?",
        answer: "네! 외국인분도 본인 명의 휴대폰이 있으면 창업이 가능합니다\n다만, 가지고 계신 비자로 사업자 등록이 가능한지 유무를 사전에 꼭 확인하셔야 하며, 각 지역 세무서에 문의해 주세요.",
    },
    {
        category: "창업문의",
        question: "수익이 보장되나요?",
        answer: "모든 점포는 계약 조건, 매출 등이 다르므로 경영주님의 수익(정산금)은 점포마다 상이합니다.\n수익배분율과 기타 가맹계약 조건을 기준으로 최종 수익이 산정되므로 수익을 보장하지는 않습니다.\n점포의 매출이 상승하면 경영주님 수익도 상승하게 됩니다.",
    },
    {
        category: "창업문의",
        question: "점포 유형에 신규점과 기존점 차이는 무엇인가요?",
        answer: "신규점은 현재 GS25 매장이 없는 곳에서 새로 오픈하여 운영하는 점포를 의미해요.\n기존점은 기존 GS25 매장을 새로운 경영주님께서 인수하여 운영하는 매장을 의미합니다.",
    },
    {
        category: "창업문의",
        question: "창업할 때 대출을 지원해주는 제도가 있나요?",
        answer: "신규 경영주님께 지원되는 대출 제도는 운영하고 있지 않습니다.\n다만, 점포 운영 중인 경영주님들을 대상으로 GS25 점포를 추가 창업 시, 우리은행과 연계하여 우대금리를 적용하는 상생대출 제도를 지원하고 있습니다.",
    },
    {
        category: "창업문의",
        question: "신규 경영주 교육은 꼭 들어야 하나요?",
        answer: "네. GS25 점포 운영이 처음이신 경우, 신규 경영주 입문과정(이론 및 실습 교육)을 필수로 이수하셔야 해요.\n총 2주간의 창업 교육(영업일 기준 7일 코스)을 수료하고, 최종 테스트까지 완료하셔야 오픈이 가능합니다.",
    },
    {
        category: "창업문의",
        question: "가맹계약자와 실운영자가 달라도 괜찮은가요?",
        answer: "네, 가능합니다! 가맹계약자와 실운영자가 다른 경우, 계약 시 점포운영 위임 합의서를 통해 가맹계약자와 실운영자의 합의가 이루어짐을 확인하고 운영할 수 있습니다.",
    },
    {
        category: "창업문의",
        question: "교육은 경영주만 참석 가능한가요?",
        answer: "아닙니다! 조력자 포함하여 최대 3인까지 신청하실 수 있어요. 다만, 교육장 수용 인원이 한정적이므로, 교육 차수에 따라 참가 가능 인원이 조정될 수 있습니다. 이 경우 조력자는 입과하지 못하고, 경영주만 입과할 수도 있습니다.",
    },
    {
        category: "창업문의",
        question: "가맹비를 할인받을 수 있는 방법은 없나요?",
        answer: "다양한 가맹비 할인 제도가 있습니다! 예를 들어 미성년자 자녀 2명 이상이 있다면 다자녀 할인으로, GS25 근무 경험이 있으시면 우수근무자 추천 제도로 가맹비 할인이 가능합니다. 창업혜택 – ‘대상별 창업혜택’에서 확인하실 수 있어요.",
    },
    {
        category: "가맹조건",
        question: "소모품비는 뭐예요?",
        answer: "점포 오픈 시, 점포운영에 필요한 종이봉투, 쓰레기통, 유니폼 등의 소모품을 뜻합니다.",
    },
    {
        category: "폐점,계약해지",
        question: "가맹 계약이 종료되면 회수 가능한 금액은 얼마인가요?",
        answer: "본부임차점의 경우 본부 보증금으로 최초 납부한 금액(전대/예치보증금) 전액과 상품대 일부 회수가 가능하며, 가맹비는 소멸되는 비용입니다.",
    },
    {
        category: "운영문의",
        question: "영업비가 뭐예요? 회사가 부담하는 비용인가요?",
        answer: "편의점을 영업하는데 제반되는 모든 비용을 말합니다. 폐기 금액, 전기료, 관리비, 인건비 등이 있으며 사용하시는 만큼 비용으로 지출되는 경영주님 부담입니다.",
    },
    {
        category: "운영문의",
        question: "세금은 얼마 나오나요?",
        answer: "점포마다 발생하는 매출액이 상이하며 개인별로 상황이 다르기 때문에 정확한 금액을 예측하기는 어렵습니다. 다만, 점포별로 본부 세무대리인을 연결해드리고 있습니다. 개인의 상황에 맞는 세무 관련 상담을 받으실 수 있어요.",
    },
    {
        category: "운영문의",
        question: "GS25를 운영하면서 다른 브랜드의 편의점을 또 운영할 수 있나요?",
        answer: "신의성실에 입각하여 동일 업종에 종사하지 못하십니다. 단, 회사의 동의를 얻은 경우는 예외로 합니다.",
    },
    {
        category: "운영문의",
        question: "GS25 점포를 2개 이상 운영할 수 있나요? 별도의 혜택이 있나요?",
        answer: "네 가능합니다! 타업종 대비 낮은 투자비와 안정적인 창업이 가능하다는 점에서 다점포(2개 이상)를 운영하시는 경영주님들이 많이 계십니다.\n기존 GS25를 운영하고 계시는 경영주님이 추가 점포를 운영할 경우 가맹비 770만원(VAT 포함) 중 330만원(VAT포함)을 할인해드립니다.",
    },
    {
        category: "운영문의",
        question: "유통기한이 지난 상품은 어떻게 하나요?",
        answer: "상품은 크게 반품이 가능한 상품과 점포에서 직접 폐기해야 하는 상품으로 나뒝니다.\n먼저 도시락·김밥·샌드위치 같은 신선식품(F/F 상품)은 유통기한이 지나면 반품이 되지 않으며, 점포에서 폐기하셔야 합니다.\n다만, 품 종류에 따라 회사에서 폐기 비용의 일부를 지원해 드리는 경우도 있습니다.\n그리고 과자·라면·음료 같은 일반 상품은 대부분 반품이 가능합니다.\n(단, 주류 등 일부 상품은 제외됩니다.)",
    },
    {
        category: "운영문의",
        question: "상품 주문은 회사가 대신해주나요?",
        answer: "상품 주문(발주)의 권한은 경영주님에게 있습니다.\n각 점포의 상황이나 경영주님의 선택에 따라 상품 주문, 재고 관리 등이 이루어집니다.",
    },
    {
        category: "운영문의",
        question: "GS25점포 인근에 또 GS25가 출점할 수 있나요?",
        answer: "도보거리 250m 이내에는 출점하지 않습니다.\n단, 예외 조항에 한하여 경영주님에게 동의를 득한 후 출점하거나, 기존 점포의 타입변경 등 몇가지 사안에서는 동의 없이도 출점하는 경우가 있습니다.",
    },
    {
        category: "운영문의",
        question: "24시간 영업은 필수인가요?",
        answer: "계약을 맺기 전에는 점포 상황에 따라 영업시간을 서로 협의할 수 있어요.\n다만, 오픈 후부터는 최초 계약 체결시 합의된 영업 시간은 준수해 주셔야 합니다.\n또한 계약 기간 중이라도, 부득이한 사정이 있거나 심야 시간대 매출이 너무 적어 손해가 계속되는 경우에는 경영주님이 회사에 요청하고, 회사가 동의하면\n24시간 운영을 하지 않을 수도 있습니다.\n단, 24시간 운영을 하지 않는 경우에는 24시간 운영 점포에 지급되는 장려금(지원금)은 받을 수 없습니다.",
    },
    {
        category: "운영문의",
        question: "근무자 채용은 직접 해야하나요?",
        answer: "가맹점은 경영주님이 직접 운영하는 독립된 사업장입니다.\n따라서 점포 운영에 대한 권한과 책임은 경영주님께 있습니다.\n직원 채용, 근무 스케줄 관리, 급여 지급 등도 모두 경영주님의 역할입니다.\n다만, 채용을 쉽고 빠르게 할 수 있도록 알바몬d 사이트를 지원해드리고 있습니다. 해당 비용은 본부에서 부담하고 있으며 무료로 이용 가능합니다.",
    },
    {
        category: "운영문의",
        question: "경영주가 꼭 근무를 해야 하나요?",
        answer: "경영주님의 근무 여부와 근무 시간은 상황에 맞게 직접 정하실 수 있어요.\n다만, 경영주님이 매장에 자주 나오실수록 서비스와 매장 관리(청결, 진열 등)가 더 좋아지는 경우가 많습니다.\n그만큼 고객 만족도가 높아지고, 매출에도 긍정적인 영향을 줄 수 있습니다.",
    },
    {
        category: "폐점,계약해지",
        question: "가맹계약이 종료되면 점포의 시설 및 집기는 '경영주' 소유인가요?",
        answer: "아닙니다.\n가맹계약이 종료되면, 매장에 설치된 집기·설비 등 모든 시설은 회사에 반납하셔야 합니다.\n가맹계약 기간 동안에는 해당 설비를 무상으로 대여해 드립니다.\n다만, GS1타입(수익추구 특약)의 경우에는 유상 대여 방식이 적용됩니다.",
    },
    {
        category: "폐점,계약해지",
        question: "가맹계약 중 가맹계약 해지가 가능한가요?", 
        answer: "네, 중도 해지는 가능합니다.\n다만, 계약을 종료하려면 최소 90일 전에 서면(문서)으로 회사에 미리 알려주셔야 해요.\n또한 계약을 중도에 해지할 경우에는\n해약 수수료, 시설 잔여 금액(감가상각 후 남은 금액), 폐점 수수료 등의 비용이 발생할 수 있습니다.\n※ 발생 비용은 계약 타입에 따라 다를 수 있어요.",
    },
    {
        category: "폐점,계약해지",
        question: "가맹계약 중도 해지시 위약금은 어떻게 산정되나요?",
        answer: "계약 타입과 운영 년수에 따라 해약 수수료가 산정됩니다.\n* 해약수수료 산정 방식\nGS1 타입: 직전 1년간의(영업기간 1년 미만일 경우에는 그 영업기간 중) 평균 월 매출총이익의 가맹수수료율 x 타입별/기간별 개월 수\nGS2, GS3 타입: 직전 1년간의(영업기간 1년 미만일 경우에는 그 영업기간 중) 평균 월 매출총이익의 35% x 타입별/기간별 개월 수",
        answerTable: {
            headers: ["구분", "개점 후 3년 미만", "3년 ~ 4년", "4년 ~ 5년"],
            rows: [
                { label: "GS1", cells: ["6개월", "4개월", "2개월"] },
                { label: "GS2", cells: ["4개월", "2개월", "—"] },
                { label: "GS3", cells: ["4개월", "2개월", "—"] },
            ],
        },
    },
    {
        category: "가맹조건",
        question: "안심운영 제도가 뭐에요?",
        answer: "쉽게 정리하면\n'지켜 운영했는데 수입이 일정 기준보다 부족하면 회사가 일부 보전해주는 제도이지만, 순이익을 보장해주는 제도는 아니다'라고 이해하시면 됩니다.\n계약 내용을 잘 지키고, 연중무휴로 하루 18시간 이상 매장을 운영하시면\n회사에서 최소 운영비 기준을 정해 경영주님의 수입이 그 기준에 못 미칠 경우, 부족한 금액을 일정 부분 지원해드립니다.\n다만, 이 지원금은 임차료(GS1), 전대료(GS2타입,회사와 계약된 매장 사용료), 인건비, 전기료, 관리비 등을 빼기 전 금액을 기준으로 계산합니다.\n즉, 경영주님의 순이익을 보장하는 제도는 아닙니다.\n또한, 상생 인센티브는 안심 운영 지원 계산에 포함되지 않습니다.",
    },
    {
        category: "가맹조건",
        question: "계약기간은 몇 년인가요?",
        answer: "기본 계약기간은 GS1타입 5년, GS2,GS3타입 4년이며,\nGS1타입 수익추구특약은 7년 계약인 대신, 추가혜택(수익배분율 10%)을 지급하고 있습니다.\n그리고 기본 계약기간이 끝나면, 다시 계약을 맺으면서 계약 조건을 협의하게 됩니다.",
    },
    {
        category: "가맹조건",
        question: "경영주의 수익은 어떻게 산정되나요?",
        answer: "경영주님의 수익 정산은 매달 이루어집니다.\n한 달 총 매출에서 상품 매출 원가와 가맹본부 수수료를 제외하면, 경영주님의 기본 수입이 됩니다.\n여기에 본부에서 주는 24시간 운영 지원금(24시간 운영점만 5% 지급)과 상생 인센티브 등 추가 지원금을 더하면 경영주님의 총수입이 됩니다.\n총수입에서 임차료, 인건비, 전기료, 관리비 등 점포 영업비를 빼면 경영주님의 최종 순수익이 됩니다.\n가맹본부 수수료는 가맹 타입별로 다르게 책정됩니다.",
    },
    {
        category: "창업문의",
        question: "정보 공개서가 무엇인가요?",
        answer: "정보공개서는 가맹본부의 사업 현황, 영업 조건, 본부의 지원 등에 관한 정보를 담은 문서입니다.\nGS25 가맹본부는 「가맹사업거래의 공정화에 관한 법률」에 따라, 가맹계약을 체결하기 전에 경영주님께 정보공개서를 제공합니다.\n정보공개서를 확인한 날로부터 14일이 지나야 가맹계약을 체결할 수 있습니다.\n단, 가맹거래사나 변호사의 자문을 받은 경우에는 7일로 단축됩니다.",
    },
    {
        category: "가맹조건",
        question: "점포 소개나 경영주 소개시 혜택이 있나요?",
        answer: "GS25 경영주님이 새로운 입지나 신규 경영주를 소개하여 점포가 오픈되면, 감사의 마음으로 소정의 소개비를 드립니다.",
    }
];

const filteredGs25FaqItems = computed(() => {
    const filter = gs25FaqTabFilters[activeGs25FaqTab.value];
    if (!filter) return gs25FaqItems;
    return gs25FaqItems.filter((item) => item.category === filter);
});

const gs25FaqTotalPages = computed(() =>
    Math.max(1, Math.ceil(filteredGs25FaqItems.value.length / GS25_FAQ_PAGE_SIZE))
);

const paginatedGs25FaqItems = computed(() => {
    const start = (activeGs25FaqPage.value - 1) * GS25_FAQ_PAGE_SIZE;
    return filteredGs25FaqItems.value.slice(start, start + GS25_FAQ_PAGE_SIZE);
});

watch(activeD1, () => {
    activeD2.value = 0;
    activeD3.value = 0;
});

watch(activeD2, () => {
    activeD3.value = 0;
});

watch(activeGs25FaqTab, () => {
    activeGs25FaqPage.value = 1;
});

watch(gs25FaqTotalPages, (total) => {
    if (activeGs25FaqPage.value > total) activeGs25FaqPage.value = total;
});

/** 추천 점포 찾기 */
const filterRegion = ref("");
const filterFranchiseType = ref("");
const filterStoreType = ref("");
const filterYouth = ref(false);
const storeSearchQuery = ref("");
const youthPopoverVisible = ref(false);

const storeRegions = [
    { value: "서울", label: "서울", count: 4 },
    { value: "경기", label: "경기", count: 4 },
    { value: "인천", label: "인천", count: 4 },
    { value: "부산", label: "부산", count: 4 },
    { value: "대구", label: "대구", count: 4 },
    { value: "대전", label: "대전", count: 4 },
    { value: "광주", label: "광주", count: 4 },
    { value: "울산", label: "울산", count: 4 },
    { value: "세종", label: "세종", count: 1 },
    { value: "강원", label: "강원", count: 4 },
    { value: "충북", label: "충북", count: 4 },
    { value: "충남", label: "충남", count: 4 },
    { value: "전북", label: "전북", count: 4 },
    { value: "전남", label: "전남", count: 4 },
    { value: "경북", label: "경북", count: 4 },
    { value: "경남", label: "경남", count: 4 },
    { value: "제주", label: "제주", count: 2 },
];

const franchiseTypes = [
    { value: "GS1", label: "GS1 (경영주 임차)" },
    { value: "GS2", label: "GS2 (임차 공동 부담)" },
    { value: "GS3", label: "GS3 (임차 본부 부담)" },
];

const storeSort = ref("latest");
const storeView = ref("list");
const storePage = ref(1);
const storeTotalPages = ref(5);

const storeList = ref([
    { id: 1, region: "대전 동구", type: ["GS1", "GS2"], form: "기존점", isYouth: false, cost: "7,200만원", tags: "#버스정류장 #대로변", area: "18평", date: "2025.12.24", feature: "신축 아파트 단지 내 상가 1층에 위치하여 입주민 수요가 안정적입니다." },
    { id: 2, region: "강원 원주시", type: ["GS2", "GS3"], form: "기존점", isYouth: true, cost: "10,500만원", tags: "#버스정류장 #대로변", area: "22평", date: "2025.12.24", feature: "대형 마트 인접 상권으로 유동 인구가 많아 안정적인 매출이 기대됩니다." },
    { id: 3, region: "대구 서구", type: ["GS1"], form: "기존점", isYouth: true, cost: "5,000만원", tags: "#번화가 #버스정류장", area: "14평", date: "2025.09.21", feature: "지하철역 출구 인근에 위치하여 출퇴근 고객 수요가 풍부합니다." },
    { id: 4, region: "대전 동구", type: ["GS3"], form: "기존점", isYouth: false, cost: "7,200만원", tags: "#버스정류장 #대로변", area: "18평", date: "2025.12.24", feature: "신축 아파트 단지 내 상가 1층에 위치하여 입주민 수요가 안정적입니다." },
    { id: 5, region: "인천 연수구", type: ["GS2"], form: "기존점", isYouth: false, cost: "8,000만원", tags: "#주택가 #초등학교인근", area: "20평", date: "2025.11.10", feature: "주거 밀집 지역 내 독점 상권으로 안정적인 고정 고객층이 형성되어 있습니다." },
    { id: 6, region: "전북 익산시", type: ["GS1", "GS2"], form: "기존점", isYouth: true, cost: "4,500만원", tags: "#대로변 #유동인구많음", area: "15평", date: "2025.10.05", feature: "도심 중심 상가 위치로 다양한 연령층의 유동 고객이 상시 방문합니다." },
]);

function getBadgeClass(t) {
    return /^GS\d/i.test(t) ? "badge_" + t.toLowerCase() : "badge_gray";
}

function closeYouthPopover() {
    youthPopoverVisible.value = false;
}

const openCardId = ref(null);
const openTableId = ref(null);

const cardsPerRow = computed(() => (isMobileView.value ? 1 : isTabletView.value ? 3 : 4));

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

const regionCounselPanel = {
    title: "지금 바로 상담을 받고 싶으신가요?",
    lead: "지도에서 원하시는 지역을 클릭하시면 해당 지역 담당자 정보를 바로 확인하실 수 있습니다.",
};
const regionCounselEmpty = {
    title: "지역을 선택해주세요",
    desc: "지도에서 점포를 오픈하고 싶은 지역을 클릭하면<br class='p_br'/>해당 지역 담당자 정보를 확인하실 수 있습니다.",
    hint: "(서울/경기는 상단의 '수도권 상세' 탭 또는 지도에서 클릭하세요)",
};
const regionCounselTabs = [
    { item: "전국" },
    { item: "수도권 상세 - 서울" },
    { item: "수도권 상세 - 경기" },
];
const activeRegionTab = ref(0);
/** true: region_counsel_side에 담당자 목록 / false: 지역 선택 전 안내 패널 */
const regionCounselBoardIsStaff = ref(false);

function closeRegionCounselStaff() {
    regionCounselBoardIsStaff.value = false;
}
/** 지도 API 연동 전 퍼블용: 지도 영역 클릭 시 담당자 UI 표시(API 연동 시 삭제·지도 콜백으로 대체) */
function onRegionCounselMapStubClick() {
    if (regionCounselBoardIsStaff.value) return;
    regionCounselBoardIsStaff.value = true;
}

/** 지역 선택 후 담당자 목록(샘플) */
const regionCounselStaff = {
    regionName: "서울",
    countLabel: "6명",
    managers: [
        { name: "신윤정", area: "강북구, 노원구, 도봉구, 동대문구, 성북구", phone: "02-488-9605", phoneDial: "024889605" },
        { name: "신윤정", area: "강북구, 노원구, 도봉구, 동대문구, 성북구", phone: "02-488-9605", phoneDial: "024889605" },
        { name: "신윤정", area: "강북구, 노원구, 도봉구, 동대문구, 성북구", phone: "02-488-9605", phoneDial: "024889605" },
        { name: "신윤정", area: "강북구, 노원구, 도봉구, 동대문구, 성북구", phone: "02-488-9605", phoneDial: "024889605" },
    ],
};


const QUICK_MENU_REVEAL_PX = 100;
const QUICK_MENU_VIEWPORT_BOTTOM_PX = 60;
const QUICK_MENU_FOOTER_GAP_PX = 60;
const showQuickMenu = ref(false);
const quickMenuRef = ref(null);
let quickMenuGsapCtx = null;
let quickMenuFooterEl = null;
let quickMenuWrapEl = null;
let quickMenuLastBottomPx = null;
let quickMenuLastTopPx = null;
let quickMenuFooterZone = false;
let quickMenuResizeTimer = null;

function updateQuickMenuBottom(quickMenu) {
    if (!quickMenu) return;
    if (!quickMenuFooterEl) {
        quickMenuFooterEl = document.querySelector("footer");
    }
    if (!quickMenuWrapEl) {
        quickMenuWrapEl = quickMenu.closest(".wrap_gsrst");
    }
    const footer = quickMenuFooterEl;
    const wrap = quickMenuWrapEl;
    if (!footer || !wrap) {
        if (quickMenuLastBottomPx !== QUICK_MENU_VIEWPORT_BOTTOM_PX) {
            gsap.set(quickMenu, { position: "fixed", top: "auto", bottom: QUICK_MENU_VIEWPORT_BOTTOM_PX });
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
        if (!quickMenuFooterZone) {
            gsap.set(quickMenu, { clearProps: "transform" });
            quickMenuFooterZone = true;
        }
        if (quickMenuLastTopPx !== absoluteTopPx) {
            gsap.set(quickMenu, { position: "absolute", top: absoluteTopPx, bottom: "auto" });
            quickMenuLastTopPx = absoluteTopPx;
            quickMenuLastBottomPx = null;
        }
        return;
    }

    if (quickMenuFooterZone) {
        quickMenuFooterZone = false;
    }
    if (quickMenuLastBottomPx !== QUICK_MENU_VIEWPORT_BOTTOM_PX) {
        gsap.set(quickMenu, { position: "fixed", top: "auto", bottom: QUICK_MENU_VIEWPORT_BOTTOM_PX });
        quickMenuLastBottomPx = QUICK_MENU_VIEWPORT_BOTTOM_PX;
        quickMenuLastTopPx = null;
    }
}

function refreshQuickMenuScrollTrigger() {
    if (quickMenuResizeTimer) {
        window.clearTimeout(quickMenuResizeTimer);
    }
    quickMenuResizeTimer = window.setTimeout(() => {
        ScrollTrigger.refresh();
        if (quickMenuRef.value) {
            quickMenuLastBottomPx = null;
            quickMenuLastTopPx = null;
            updateQuickMenuBottom(quickMenuRef.value);
        }
    }, 120);
}

function initQuickMenuGsap() {
    const quickMenu = quickMenuRef.value;
    if (!quickMenu) return;
    quickMenuFooterEl = document.querySelector("footer");
    quickMenuWrapEl = quickMenu.closest(".wrap_gsrst");
    quickMenuLastBottomPx = null;
    quickMenuLastTopPx = null;
    quickMenuFooterZone = false;

    quickMenuGsapCtx = gsap.context(() => {
        gsap.fromTo(
            quickMenu,
            { opacity: 0, pointerEvents: "none" },
            {
                opacity: 1,
                pointerEvents: "auto",
                duration: 0.5,
                scrollTrigger: {
                    trigger: "body",
                    start: `${QUICK_MENU_REVEAL_PX}px top`,
                    toggleActions: "play reverse play reverse",
                    onUpdate: () => {
                        const y = window.scrollY ?? document.documentElement.scrollTop;
                        showQuickMenu.value = y >= QUICK_MENU_REVEAL_PX;
                    }
                }
            }
        );

        ScrollTrigger.create({
            trigger: "body",
            start: "top top",
            end: "max",
            onUpdate: () => {
                updateQuickMenuBottom(quickMenu);
            }
        });
    });
    ScrollTrigger.refresh();
    const y0 = window.scrollY ?? document.documentElement.scrollTop;
    showQuickMenu.value = y0 >= QUICK_MENU_REVEAL_PX;
    updateQuickMenuBottom(quickMenu);
}

function manageQuickMenuAnimation() {
    if (isMobileView.value) {
        quickMenuGsapCtx?.revert();
        quickMenuGsapCtx = null;
        showQuickMenu.value = false;
        return;
    }
    if (!quickMenuGsapCtx) {
        initQuickMenuGsap();
    }
}

function onWindowResize() {
    refreshProductHitSwipers();
    refreshQuickMenuScrollTrigger();
}

onMounted(() => {
    document.addEventListener("click", closeYouthPopover);
    syncMobileView();
    mqMobile.addEventListener("change", syncMobileView);
    mqTablet.addEventListener("change", syncMobileView);
    window.addEventListener("resize", onWindowResize);
});
onUnmounted(() => {
    document.removeEventListener("click", closeYouthPopover);
    cancelAnimationFrame(productHitRefreshFrame);
    mqMobile.removeEventListener("change", syncMobileView);
    mqTablet.removeEventListener("change", syncMobileView);
    window.removeEventListener("resize", onWindowResize);
    if (quickMenuResizeTimer) {
        window.clearTimeout(quickMenuResizeTimer);
        quickMenuResizeTimer = null;
    }
    quickMenuGsapCtx?.revert();
    quickMenuGsapCtx = null;
    quickMenuFooterEl = null;
    quickMenuWrapEl = null;
    quickMenuLastBottomPx = null;
    quickMenuLastTopPx = null;
    quickMenuFooterZone = false;
    showQuickMenu.value = false;
});
</script>


<style scoped>
img { width: 100%; height: auto; display: block; object-fit: cover; }
:deep(.m_br) { display: none; }
:deep(.p_br) { display: block; }
:deep(.primary_green) { background-color: #15B874; }
:deep(.txt_blue) { color: #107af2; }
.wrap_gsrst { position: relative; overflow-x: clip; }

.page_header { width: 100%; height: 480px; background-size: cover; background-position: center; position: relative; display: flex; align-items: center; justify-content: center; }
.header_inner { text-align: center; position: relative; z-index: 1; }
.header_title { color: #fff; font-size: 7.2rem; font-weight: 700; line-height: 1.24; letter-spacing: -0.02em; }

header > .tit { width: fit-content; padding: 8px 16px; color: #107af2; font-size: 1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; background-color: #e7f2fe; border: 1px solid #107af2; border-radius: 99px; display: block; }
header.ac > .tit { margin-right: auto; margin-left: auto; }
.sub_header { margin-bottom: 64px; }
.sub_header > h3 { font-size: 3.2rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.sub_header > .tit { padding: 4px 12px; }
.sub_header > .tit + h3 { margin-top: 16px; }
.sub_header > strong { margin-top: 16px; display: block; }
.sub_header> p { margin-top: 16px; font-size: 2.4rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.sec_body { max-width: 1460px; margin: 0 auto; padding: 0 20px; }
.section_header { margin-bottom: 64px; }
.section_header.ac { text-align: center; }
.section_header > .tit + h2 { margin-top: 16px; }
.section_header > h2 { font-size: 4rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.section_header > p { margin-top: 16px; font-size: 2.4rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
section + section { padding-top: 100px; }
section p { font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
.panel_third_depth { padding-top: 80px; }
.panel { padding: 100px 0 200px; }
.panel.pt_64 { padding-top: 64px;}

.sec_hero { min-height: 700px; padding: 97px 100px 77px; background-size: cover; background-position: center; border-radius: 20px; position: relative; display: flex; flex-direction: column; overflow: hidden; }
.sec_hero::before { width: 100%; height: 100%; background-color: rgba(0,0,0,0.6); position: absolute; top: 0; left: 0; content: ''; }
.sec_hero > header, .sec_hero > .action_list, .sec_hero > .metric_list { position: relative; z-index: 1; }
.sec_hero > header > .tit { width: fit-content; margin: 0; padding: 8px 16px; color: #fff; font-size: 1.4rem; font-weight: 500; line-height: 1.4; letter-spacing: -0.01em; background-color: rgba(255,255,255,0.2); border: 0; border-radius: 99px; }
.sec_hero > header > h3 { margin: 8px 0 0; color: #fff; font-size: 5.6rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.sec_hero > header > .desc { color: #fff; font-size: 1.8rem; font-weight: 700; line-height: 1.5; letter-spacing: 0; }
.sec_hero > .action_list { width: 100%; max-width: 540px; margin-top: 24px; display: flex; flex-direction: column; gap: 10px; }
.sec_hero > .action_list > li > a { width: 100%; min-height: 51px; padding: 12px 20px; color: #fff; background-color: rgba(16,122,242,0.8); border-radius: 12px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.sec_hero > .action_list > li:last-child > a { min-height: 64px; align-items: center; }
.sec_hero > .action_list > li > a > strong { flex: 0 0 114px; font-size: 1.8rem; font-weight: 700; line-height: 1.5; letter-spacing: 0; }
.sec_hero > .action_list > li:last-child > a > strong { flex-basis: 114px; font-size: 1.6rem; line-height: 1.24; }
.sec_hero > .action_list > li > a > span { min-width: 0; flex: 1; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.sec_hero > .action_list > li > a::after { width: 16px; height: 16px; flex-shrink: 0; background-color: #fff; content: ''; }
.sec_hero > .metric_list { width: 100%; max-width: 647px; margin-top: 50px; display: flex; gap: 10px; }
.sec_hero > .metric_list > li { min-width: 0; min-height: 95px; flex: 1; padding: 20px 32px; background-color: rgba(255,255,255,0.22); border-radius: 16px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; }
.sec_hero > .metric_list > li > strong { color: #fff; font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_hero > .metric_list > li > span { color: rgba(255,255,255,0.8); font-size: 1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; }

.sec_num_list :deep(.num_info_list) { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 40px; }
.sec_num_list :deep(.num_info_item) { padding: 0; border-bottom: 0; }
.sec_num_list :deep(.num_info_num) { margin-bottom: 8px; font-size: 1.8rem; line-height: 1.5; letter-spacing: 0; }
.sec_num_list :deep(.num_info_item article) { display: flex; flex-direction: column; gap: 24px; }
.sec_num_list :deep(.num_info_icon) { width: 80px; height: 80px; }
.sec_num_list :deep(.num_info_title) { margin-bottom: 8px; }
.sec_num_list :deep(.num_info_title > strong) { font-size: 2.8rem; line-height: 1.35; letter-spacing: -0.01em; }
.sec_num_list :deep(.num_info_body > p) { font-size: 2rem; line-height: 1.35; letter-spacing: -0.01em; }

section > .inner { margin-inline: calc(50% - 50vw); padding: 80px calc(50vw - 50%); background-color: #f8f8f8; }
.sec_band > .inner > .link_grid { display: flex; align-items: stretch; gap: 20px; }
.sec_band > .inner > .link_grid > li { min-width: 0; flex: 1; display: flex; }
.sec_band > .inner > .link_grid > li > a { width: 100%; min-height: 144px; padding: 32px 24px; background-color: #fff; border-radius: 12px; display: flex; align-items: center; gap: 20px; }
.sec_band > .inner > .link_grid > li > a > .thumb { width: 80px; height: 80px; flex-shrink: 0; background-color: #f8f8f8; border-radius: 12px; }
.sec_band > .inner > .link_grid > li > a > .txt { min-width: 0; flex: 1; }
.sec_band > .inner > .link_grid > li > a > .txt > strong { font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; display: block; }
.sec_band > .inner > .link_grid > li > a > .txt > .desc { margin-top: 6px; color: #67676f; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; display: block; }
.sec_band > .inner > .link_grid > li > a::after { width: 24px; height: 24px; flex-shrink: 0; background-color: #161616; content: ''; }

.sec_overlap > .overlap_grid { width: 100%; max-width: 1040px; margin: 0 auto; display: flex; justify-content: center; }
.sec_overlap > .overlap_grid > li { max-width: 100%; min-width: 0; flex: 0 1 260px; position: relative; }
.sec_overlap > .overlap_grid > li + li { margin-left: -30px; }
.sec_overlap > .overlap_grid > li:nth-child(1) { z-index: 1; }
.sec_overlap > .overlap_grid > li:nth-child(2) { z-index: 2; }
.sec_overlap > .overlap_grid > li:nth-child(3) { z-index: 3; }
.sec_overlap > .overlap_grid > li:nth-child(4) { z-index: 4; }
.sec_overlap > .overlap_grid > li > article { width: 100%; height: auto; aspect-ratio: 1; border-radius: 50%; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; }
.sec_overlap > .overlap_grid > li > article > .icon { width: 40px; height: auto; max-width: 100%; aspect-ratio: 1; background-color: #d0d0d8; }
.sec_overlap > .overlap_grid > li > article > strong { font-size: 2rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_overlap > .overlap_grid > li:nth-child(1) > article { background-color: rgba(255,118,48,0.12); }
.sec_overlap > .overlap_grid > li:nth-child(1) > article > strong { color: #f6671e; }
.sec_overlap > .overlap_grid > li:nth-child(2) > article { background-color: rgba(139,144,148,0.18); }
.sec_overlap > .overlap_grid > li:nth-child(2) > article > strong { color: #5a6670; }
.sec_overlap > .overlap_grid > li:nth-child(3) > article { background-color: rgba(21,80,244,0.11); }
.sec_overlap > .overlap_grid > li:nth-child(3) > article > strong { color: #1550f4; }
.sec_overlap > .overlap_grid > li:nth-child(4) > article { background-color: rgba(16,158,105,0.12); }
.sec_overlap > .overlap_grid > li:nth-child(4) > article > strong { color: #099762; }

.sec_split > .inner > .split_layout { display: flex; align-items: center; justify-content: center; gap: 40px; }
.sec_split > .inner > .split_layout > .info_card { width: 100%; max-width: 500px; min-height: 164px; margin: 0; padding: 32px 24px; background-color: #fff; border-radius: 20px; }
.sec_split > .inner > .split_layout > .info_card > dt { display: flex; align-items: center; gap: 8px; }
.sec_split > .inner > .split_layout > .info_card > dt > .icon { width: 32px; height: 32px; flex-shrink: 0; background-color: #d0d0d8; }
.sec_split > .inner > .split_layout > .info_card > dt > strong { font-size: 2rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_split > .inner > .split_layout > .info_card > dd { margin: 20px 0 0; color: #67676f; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.sec_split > .inner > .split_layout > .info_card.is_end > dt { justify-content: flex-end; }
.sec_split > .inner > .split_layout > .info_card.is_end > dd { text-align: right; }
.sec_split > .inner > .split_layout > .info_card.is_start > dt { justify-content: flex-start; }
.sec_split > .inner > .split_layout > .info_card.is_start > dd { text-align: left; }
.sec_split > .inner > .split_layout > .split_media { width: 100%; max-width: 340px; aspect-ratio: 1; border-radius: 50%; overflow: hidden; }

.sec_stack > .highlight_block { padding: 64px; background-color: #f8f8f8; border-radius: 12px; display: flex; align-items: flex-start; }
.sec_stack > .highlight_block > .sub_header { width: 100%; max-width: 296px; flex-shrink: 0; }
.sec_stack > .highlight_block > .sub_header strong { font-size: 1.8rem; line-height: 1.5; letter-spacing: -0.01em; }
.sec_stack > .highlight_block > .sub_header p { color: #67676F; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
.sec_stack > .highlight_block > .highlight_body { min-width: 0; flex: 1; display: flex; flex-direction: column; gap: 56px; }
.sec_stack > .highlight_block > .highlight_body > div > h4 { margin-bottom: 24px; font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_stack > .highlight_block > .highlight_body > div > ul { margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 20px; }
.sec_stack > .highlight_block > .highlight_body > div > ul > li { min-width: 0; flex: 0 0 234px; }
.sec_stack > .highlight_block > .highlight_body > div > ul > li article figure img { border-radius: 12px 12px 0 0; }
.sec_stack > .highlight_block > .highlight_body > div > ul > li article figcaption { padding: 24px; background-color: #fff; border-radius: 0 0 12px 12px; }
.sec_stack > .highlight_block > .highlight_body > div > ul > li article figcaption p { color: #67676F; font-size: 1.2rem; line-height: 1.2; }
.sec_stack > .highlight_block > .highlight_body > div > ul > li article figcaption strong { margin-top: 4px; font-size: 1.8rem; line-height: 1.5; display: block; }
.sec_stack > .highlight_block > .highlight_body > div > ul > li > article, .sec_stack > .highlight_block > .highlight_body > div > .highlight_swiper :deep(.swiper-slide) > article { height: 100%; background-color: #fff; border-radius: 12px; display: flex; flex-direction: column; overflow: hidden; }
.sec_stack > .highlight_block > .highlight_body > div > ul > li > article > figure, .sec_stack > .highlight_block > .highlight_body > div > .highlight_swiper :deep(.swiper-slide) > article > figure { width: 100%; height: 100%; margin: 0; display: flex; flex-direction: column; }
.sec_stack > .highlight_block > .highlight_body > div > ul > li > article > figure > img, .sec_stack > .highlight_block > .highlight_body > div > .highlight_swiper :deep(.swiper-slide) > article > figure > img { width: 100%; height: 200px; display: block; object-fit: contain; }
.sec_stack > .highlight_block > .highlight_body > div > ul > li > article > figure > figcaption, .sec_stack > .highlight_block > .highlight_body > div > .highlight_swiper :deep(.swiper-slide) > article > figure > figcaption { padding: 20px 24px; }
.sec_stack > .highlight_block > .highlight_body > div > ul > li > article > figure > figcaption > p, .sec_stack > .highlight_block > .highlight_body > div > .highlight_swiper :deep(.swiper-slide) > article > figure > figcaption > p { color: #67676f; font-size: 1.2rem; font-weight: 400; line-height: 1.2; letter-spacing: 0; text-align: center; }
.sec_stack > .highlight_block > .highlight_body > div > ul > li > article > figure > figcaption > strong, .sec_stack > .highlight_block > .highlight_body > div > .highlight_swiper :deep(.swiper-slide) > article > figure > figcaption > strong { font-size: 1.8rem; font-weight: 700; line-height: 1.5; letter-spacing: 0; text-align: center; display: block; }

.sec_stack > .dual_panel { margin-top: 60px; display: flex; gap: 40px; }
.sec_stack > .dual_panel > article { min-width: 0; flex: 1; padding: 64px; border: 1px solid #d7d7df; border-radius: 12px; }
.sec_stack > .dual_panel > article .sub_header { margin-bottom: 32px; }
.sec_stack > .dual_panel > article .sub_header h3 { margin-top: 8px; }
.sec_stack > .dual_panel > article .sub_header p { margin-top: 8px; color: #67676F; font-size: 1.8rem; line-height: 1.4; letter-spacing: 0; }
.sec_stack > .dual_panel > article > .media_pair { margin-top: 24px; display: flex; gap: 20px; }
.sec_stack > .dual_panel > article > .media_pair > figure { min-width: 0; aspect-ratio: 271 / 212; flex: 1; margin: 0; background-color: #d9d9d9; background-size: cover; background-position: center; background-repeat: no-repeat; border-radius: 12px; overflow: hidden; }
.sec_stack > .dual_panel > article > .stack_list { margin-top: 24px; display: flex; flex-direction: column; gap: 12px; }
.sec_stack > .dual_panel > article > .stack_list > li { padding: 20px 24px; background-color: #f8f8f8; border-radius: 12px; display: flex; align-items: flex-start; gap: 20px; }
.sec_stack > .dual_panel > article > .stack_list > li > .thumb { width: 77px; height: 77px; flex-shrink: 0; background-color: #d9d9d9; background-size: cover; background-position: center; background-repeat: no-repeat; border-radius: 12px; }
.sec_stack > .dual_panel > article > .stack_list > li > div { min-width: 0; flex: 1; }
.sec_stack > .dual_panel > article > .stack_list > li > div > strong { font-size: 1.8rem; font-weight: 700; line-height: 1.5; letter-spacing: 0; }
.sec_stack > .dual_panel > article > .stack_list > li > div > p { margin-top: 2px; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.sec_stack > .dual_panel > article > .btn_mid { margin-top: 24px; }

.sec_stack > .sub_block { margin-top: 60px; }
.sec_stack > .sub_block > .sub_swiper { margin-top: 40px; overflow: hidden; }
.sec_stack > .sub_block > .sub_swiper :deep(.swiper-wrapper) { align-items: stretch; }
.sec_stack > .sub_block > .sub_swiper :deep(.swiper-slide) { width: 360px; height: auto; }
.sec_stack > .sub_block > .sub_swiper :deep(.swiper-slide) > article > figure { width: 100%; aspect-ratio: 360/240; margin: 0; background-size: cover; background-position: center; background-repeat: no-repeat; border-radius: 12px; overflow: hidden; }
.sec_stack > .sub_block > .sub_swiper :deep(.swiper-slide) > article > span { width: fit-content; margin-top: 16px; padding: 3px 6px; color: #67676f; font-size: 1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; background-color: #f2f2f4; border-radius: 4px; display: inline-block; }
.sec_stack > .sub_block > .sub_swiper :deep(.swiper-slide) > article > strong { margin-top: 6px; font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; display: block; }

.sec_icon_grid > .inner > .icon_grid { margin: 0; padding: 0; display: grid; align-items: stretch; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }
.sec_icon_grid > .inner > .icon_grid > li { height: 100%; }
.sec_icon_grid > .inner > .icon_grid > li > article { height: 100%; min-height: 157px; padding: 32px; background-color: #fff; border-radius: 20px; display: grid; align-content: start; grid-template-columns: 80px 1fr; column-gap: 20px; }
.sec_icon_grid > .inner > .icon_grid > li > article > .icon { width: 80px; height: 80px; background-color: #f2f2f4; border-radius: 50%; grid-column: 1; grid-row: 1; }
.sec_icon_grid > .inner > .icon_grid > li > article > div { min-width: 0; display: flex; flex-direction: column; grid-column: 2; grid-row: 1; }
.sec_icon_grid > .inner > .icon_grid > li > article > div > em { margin: 0; color: #67676f; font-size: 1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; font-style: normal; }
.sec_icon_grid > .inner > .icon_grid > li > article > div > strong { color: #161616; font-size: 2.8rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; display: block; }
.sec_icon_grid > .inner > .icon_grid > li > article > div > p { margin-top: 8px; color: #67676f; font-size: 2rem; font-weight: 400; line-height: 1.35; letter-spacing: -0.01em; }

.sec_tri_grid > ul { display: grid; align-items: stretch; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
.sec_tri_grid > ul > li { height: 100%; padding: 60px 40px; border: 1px solid #D7D7DF; border-radius: 12px; }
.sec_tri_grid > ul > li > h3 { font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_tri_grid > ul > li > dl { margin: 40px 0 0; }
.sec_tri_grid > ul > li > dl > dt { font-size: 1.8rem; font-weight: 700; line-height: 1.5; letter-spacing: 0; display: flex; align-items: center; gap: 8px; }
.sec_tri_grid > ul > li > dl > dt > .icon { width: 24px; height: 24px; flex-shrink: 0; background-color: #d9d9d9; }
.sec_tri_grid > ul > li > dl > dd { margin: 4px 0 0; padding-left: 32px; color: #161616; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.sec_tri_grid > ul > li > dl > dd + dt { margin-top: 56px; }

.sec_diagram > .diagram_shell { min-width: 0; padding: clamp(16px, 1.667vw, 32px); background-color: #107af2; border: 1px solid #d7d7df; border-radius: 9999px; display: flex; align-items: center; gap: clamp(24px, 3.125vw, 60px); }
.sec_diagram > .diagram_shell > .diagram_track { width: 100%; min-width: 0; flex: 1 1 0; }
.sec_diagram > .diagram_shell > .diagram_track .diagram_ring { min-width: 0; border-radius: clamp(20px, 8vw, 999px); display: flex; align-items: center; justify-content: center; }
.sec_diagram > .diagram_shell > .diagram_track > .diagram_ring.layer_outer { width: 100%; max-width: min(100%, 940px); min-width: 0; min-height: clamp(140px, 12.76vw, 245px); padding: clamp(14px, 1.667vw, 32px); background-color: #9fcafa; border-radius: 999px; display: flex; flex-wrap: wrap; align-items: center; align-content: center; justify-content: center; gap: clamp(12px, 1.25vw, 24px); container-type: inline-size; }
.sec_diagram > .diagram_shell > .diagram_track > .diagram_ring.layer_outer > .diagram_ring.layer_mid { width: min(100%, 59.04cqw); max-width: 100%; min-width: 0; min-height: clamp(110px, 9.43vw, 181px); padding: clamp(12px, 1.667vw, 32px); background-color: #cfe4fc; border-radius: 999px; display: flex; flex-wrap: wrap; align-items: center; align-content: center; justify-content: center; gap: clamp(10px, 1.042vw, 20px); container-type: inline-size; }
.sec_diagram > .diagram_shell > .diagram_track > .diagram_ring.layer_outer > .diagram_ring.layer_mid > .diagram_ring.layer_inner { width: min(100%, 39.64cqw); max-width: 100%; min-width: 0; min-height: clamp(88px, 6.09vw, 117px); padding: clamp(12px, 1.667vw, 32px); background-color: #fff; border-radius: 999px; display: flex; align-items: center; justify-content: center; }
.sec_diagram > .diagram_shell > .diagram_track > .diagram_ring.layer_outer > .diagram_ring.layer_mid > .diagram_ring.layer_inner > article { width: 100%; text-align: center; }
.sec_diagram > .diagram_shell > .diagram_track > .diagram_ring.layer_outer > .diagram_ring.layer_mid > .diagram_ring.layer_inner > article > strong { color: #67676f; font-size: clamp(1.4rem, 1.05vw, 1.8rem); font-weight: 700; line-height: 1.5; letter-spacing: 0; display: block; }
.sec_diagram > .diagram_shell > .diagram_track > .diagram_ring.layer_outer > .diagram_ring.layer_mid > .diagram_ring.layer_inner > article > span { color: #67676f; font-size: clamp(1.2rem, 0.73vw, 1.4rem); font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; display: block; }
.sec_diagram > .diagram_shell > .diagram_track > .diagram_ring.layer_outer > .diagram_ring.layer_mid > article.node_nested { max-width: 100%; min-width: 0; flex: 1 1 clamp(120px, 12vw, 200px); text-align: center; }
.sec_diagram > .diagram_shell > .diagram_track > .diagram_ring.layer_outer > .diagram_ring.layer_mid > article.node_nested > strong { color: #107af2; font-size: clamp(1.4rem, 1.05vw, 1.8rem); font-weight: 700; line-height: 1.5; letter-spacing: 0; display: block; }
.sec_diagram > .diagram_shell > .diagram_track > .diagram_ring.layer_outer > .diagram_ring.layer_mid > article.node_nested > p { margin-top: 2px; color: #107af2; font-size: clamp(1.2rem, 0.73vw, 1.4rem); font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; }
.sec_diagram > .diagram_shell > .diagram_track > .diagram_ring.layer_outer > article.node_ring { max-width: 100%; min-width: 0; flex: 1 1 clamp(140px, 14vw, 240px); text-align: center; }
.sec_diagram > .diagram_shell > .diagram_track > .diagram_ring.layer_outer > article.node_ring > strong { color: #0a4991; font-size: clamp(2rem, 1.67vw, 2.4rem); font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; display: block; }
.sec_diagram > .diagram_shell > .diagram_track > .diagram_ring.layer_outer > article.node_ring > p { margin-top: 2px; color: #0a4991; font-size: clamp(1.4rem, 0.83vw, 1.6rem); font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.sec_diagram > .diagram_shell > article.node_aside { width: clamp(200px, 16.25vw, 312px); min-width: 0; flex: 0 1 auto; text-align: center; }
.sec_diagram > .diagram_shell > article.node_aside > strong { color: #fff; font-size: clamp(2.4rem, 2.08vw, 3.2rem); font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; display: block; }
.sec_diagram > .diagram_shell > article.node_aside > p { margin-top: clamp(4px, 0.42vw, 8px); color: #fff; font-size: clamp(1.4rem, 0.83vw, 1.6rem); font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.sec_diagram > .diagram_shell article strong, .sec_diagram > .diagram_shell article span, .sec_diagram > .diagram_shell article p { word-break: keep-all; }

.sec_franchise_define .franchise_define_card { padding: 64px 80px; background-color: #fff; border-radius: 12px; }
.sec_franchise_define .franchise_define_card .sub_header { margin-bottom: 40px; }
.sec_franchise_define .franchise_define_card .sub_header .tit + h3 { margin-top: 8px; }
.sec_franchise_define .franchise_define_card .sub_header h3 + p { margin-top: 8px; color: #67676F; font-size: 1.8rem; line-height: 1.4; }

.sec_franchise_define .franchise_formula { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 32px; }
.sec_franchise_define .franchise_formula > div { width: 320px; height: 136px; flex-shrink: 0; padding: 0 28px; border-radius: 999px; display: flex; align-items: center; justify-content: flex-start; gap: 16px; }
.sec_franchise_define .franchise_formula > div:nth-child(1), .sec_franchise_define .franchise_formula > div:nth-child(3) { background-color: #cfe4fc; }
.sec_franchise_define .franchise_formula > div:nth-child(5) { background-color: #107af2; }
.sec_franchise_define .franchise_formula > div > span { width: 72px; height: 72px; flex-shrink: 0; background-color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; }

.sec_franchise_define .franchise_formula > div > p { min-width: 0; margin: 0; text-align: left; }
.sec_franchise_define .franchise_formula > div:nth-child(1) > p > strong, .sec_franchise_define .franchise_formula > div:nth-child(3) > p > strong { color: #0d62c2; font-size: 2.8rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; display: block; }
.sec_franchise_define .franchise_formula > div:nth-child(1) > p > span, .sec_franchise_define .franchise_formula > div:nth-child(3) > p > span { margin-top: 4px; color: #0d62c2; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; display: block; }
.sec_franchise_define .franchise_formula > div:nth-child(5) > p > strong { color: #fff; font-size: 2.8rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; display: block; }
.sec_franchise_define .franchise_formula > div:nth-child(5) > p > span { margin-top: 4px; color: #fff; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; display: block; }
.sec_franchise_define .franchise_formula > span { flex-shrink: 0; color: #107af2; font-size: 5.6rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.sec_franchise_define .franchise_role_grid { margin: 40px auto 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 40px; }
.sec_franchise_define .franchise_role_grid > article { padding: 32px; background-color: #f8f8f8; border-radius: 20px; }
.sec_franchise_define .franchise_role_grid > article > header { padding: 0 0 34px; border-bottom: 1px solid #e5e5e9; display: flex; align-items: center; gap: 20px; }
.sec_franchise_define .franchise_role_grid > article > header > span { width: 60px; height: 60px; flex-shrink: 0; border-radius: 50%; display: block; }
.sec_franchise_define .franchise_role_grid > article:nth-child(1) > header > span { background-color: #107af2; }
.sec_franchise_define .franchise_role_grid > article:nth-child(2) > header > span { background-color: #15b874; }
.sec_franchise_define .franchise_role_grid > article > header > div { min-width: 0; flex: 1 1 auto; }
.sec_franchise_define .franchise_role_grid > article > header > div > h4 { margin: 0; color: #161616; font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_franchise_define .franchise_role_grid > article > header > div > p { color: #67676f; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
.sec_franchise_define .franchise_role_grid > article > ul { padding: 32px 24px; display: flex; flex-direction: column; gap: 24px; }
.sec_franchise_define .franchise_role_grid > article > ul > li { display: flex; align-items: center; gap: 12px; }
.sec_franchise_define .franchise_role_grid > article > ul > li > span { width: 24px; height: 24px; flex-shrink: 0; background-color: #d0d0d8; display: block; }
.sec_franchise_define .franchise_role_grid > article > ul > li > strong { color: #161616; font-size: 2rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_franchise_define .franchise_role_grid strong, .sec_franchise_define .franchise_role_grid p { word-break: keep-all; }

.sec_region_counsel :deep(.tab_wrap ul.type_02) { justify-content: center; }
.sec_region_counsel :deep(.tab_wrap ul.type_02 li .item) { color: #161616; font-size: 1.8rem; font-weight: 400; line-height: 1.4; background-color: #fff; border: 1px solid #161616; }
.sec_region_counsel :deep(.tab_wrap ul.type_02 li.current .item) { color: #fff; background-color: #161616; }

.sec_region_counsel > .section_header { margin: 0 0 40px; }
.sec_region_counsel :deep(.tab_wrap) { margin: 0 0 64px; }
.sec_region_counsel .region_counsel_note { margin: 0 0 28px; color: #67676f; font-size: 1.8rem; font-weight: 400; line-height: 1.4; letter-spacing: 0; display: flex; align-items: flex-start; gap: 4px; }
.sec_region_counsel .region_counsel_note > span { flex-shrink: 0; }
.sec_region_counsel .region_counsel_board { width: 100%; display: grid; align-items: stretch; grid-template-columns: 1fr 1fr; gap: 20px; }
.sec_region_counsel .region_counsel_board > .region_counsel_map, .sec_region_counsel .region_counsel_board > .region_counsel_side { width: 100%; height: 620px; min-width: 0; min-height: 620px; border: 1px solid #d7d7df; border-radius: 12px; overflow: hidden; box-sizing: border-box; }
.sec_region_counsel .region_counsel_board:not(.is_staff) .region_counsel_map { cursor: pointer; }
.sec_region_counsel .region_counsel_map { background-color: #f2f8fd; }
.sec_region_counsel .region_counsel_side { min-width: 0; min-height: 0; padding: 40px; display: flex; flex-direction: column; }
.sec_region_counsel .region_counsel_panel { min-height: 0; flex: 1 1 auto; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.sec_region_counsel .region_counsel_panel > span.icon { width: 40px; height: 40px; background-color: #67676f; display: block; }
.sec_region_counsel .region_counsel_panel > p.tit { margin: 24px 0 0; color: #161616; font-size: 2rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_region_counsel .region_counsel_panel > p.desc { margin: 8px 0 0; color: #67676f; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.sec_region_counsel .region_counsel_panel > p.hint { margin: 8px 0 0; color: #107af2; font-size: 1.2rem; font-weight: 400; line-height: 1.2; letter-spacing: 0; }
.sec_region_counsel .region_counsel_staff_body { min-height: 0; flex: 1 1 auto; display: flex; flex-direction: column; overflow: hidden; }
.sec_region_counsel .region_counsel_staff_body > header { flex-shrink: 0; margin: 0 0 32px; display: flex; align-items: center; gap: 8px; }
.sec_region_counsel .region_counsel_staff_body > header > .ico_pin { width: 32px; height: 32px; flex-shrink: 0; background-color: #161616; display: block; }
.sec_region_counsel .region_counsel_staff_body > header > h3 { margin: 0; color: #161616; font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_region_counsel .region_counsel_staff_body > header > .badge { padding: 2px 10px; color: #107af2; font-size: 1.4rem; font-weight: 700; line-height: 1.4; letter-spacing: -0.01em; background-color: #e7f2fe; border-radius: 99px; display: inline-block; }
.sec_region_counsel .region_counsel_staff_body > header > .btn_close { width: 20px; height: 20px; margin-left: auto; text-indent: -9999px; background-color: #161616; border-radius: 0; }
.sec_region_counsel .region_counsel_staff_body > ul { min-height: 0; flex: 1 1 auto; display: flex; flex-direction: column; gap: 10px; overflow-y: auto; }
.sec_region_counsel .region_counsel_staff_body > ul > li > article { padding: 24px; background-color: #f8f8f8; border-radius: 12px; display: flex; align-items: flex-start; gap: 24px; }
.sec_region_counsel .region_counsel_staff_body > ul > li > article > div { min-width: 0; flex: 1 1 auto; }
.sec_region_counsel .region_counsel_staff_body .photo { width: 90px; height: 90px; flex-shrink: 0; background-color: #d7d7df; border-radius: 50%; display: block; }
.sec_region_counsel .region_counsel_staff_body .name { margin: 0; color: #161616; font-size: 2rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_region_counsel .region_counsel_staff_body .area { margin: 2px 0 0; color: #67676f; font-size: 1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; }
.sec_region_counsel .region_counsel_staff_body .phone { margin: 8px 0 0; display: flex; align-items: center; gap: 8px; }
.sec_region_counsel .region_counsel_staff_body .ico_phone { width: 16px; height: 16px; flex-shrink: 0; background-color: #a8c8ee; display: block; }
.sec_region_counsel .region_counsel_staff_body .phone a { color: #107af2; font-size: 1.6rem; font-weight: 700; line-height: 1.24; letter-spacing: 0; }

.sec_diagram header { margin-bottom: 40px; }
.sec_startup_process { width: 100%; max-width: 1420px; margin: 0 auto; }
.sec_startup_process .section_header.txt_blue > h2 { color: #107af2; }
.sec_startup_process .process_timeline { display: flex; flex-direction: column; align-items: center; gap: 40px; }
.sec_startup_process .process_timeline > li { width: 100%; position: relative; display: flex; align-items: stretch; justify-content: center; gap: 80px; }
.sec_startup_process .process_timeline > li > .step_meta { width: 174px; flex-shrink: 0; display: flex; align-self: stretch; justify-content: flex-end; gap: 16px; transform: translateY(71.5px); }
.sec_startup_process .process_timeline > li > .step_meta > .day { height: 48px; min-width: 110px; flex-shrink: 0; color: #107af2; font-size: 2.4rem; font-weight: 700; line-height: 48px; letter-spacing: -0.01em; background: #fff; text-align: right; z-index: 2; }
.sec_startup_process .process_timeline > li > .step_meta > .step_track { width: 48px; flex-shrink: 0; margin-bottom: -40px; display: flex; flex-direction: column; align-items: center; align-self: stretch; }
.sec_startup_process .process_timeline > li > .step_meta > .step_track > .num { width: 48px; height: 48px; flex-shrink: 0; color: #fff; font-size: 2.8rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; background-color: #107af2; border-radius: 50%; position: relative; z-index: 1; display: flex; align-items: center; justify-content: center; }
.sec_startup_process .process_timeline > li > .step_meta > .step_track > .step_line { width: 1px; min-height: 0; flex: 1 1 auto; background-color: #c4c4d0; }
.sec_startup_process .process_timeline > li > article { width: 100%; max-width: 700px; flex: 0 1 700px; padding: 32px 40px; background-color: #fff; border: 1px solid #e5e5e9; border-radius: 20px; display: flex; align-items: flex-start; gap: 12px; transition: border-color 0.25s ease, box-shadow 0.25s ease; box-shadow: none; }
.sec_startup_process .process_timeline > li > article > .icon { width: 60px; height: 60px; flex-shrink: 0; background-color: #e7f2fe; border-radius: 50%; display: block; }
.sec_startup_process .process_timeline > li > article > div { min-width: 0; flex: 1 1 auto; }
.sec_startup_process .process_timeline > li > article > div > .lead { margin: 0 0 2px; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.sec_startup_process .process_timeline > li > article > div > h3 { margin: 0 0 2px; color: #161616; font-size: 2.8rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_startup_process .process_timeline > li > article > div > .desc { margin: 0; color: #67676f; font-size: 1.8rem; font-weight: 400; line-height: 1.4; letter-spacing: 0; }
.sec_startup_process .process_timeline > li > article >  div > .link_more { margin-top: 12px; color: #107af2; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; background: transparent; display: inline-flex; align-items: center; gap: 4px; }
.sec_startup_process .process_timeline > li > article > div > .link_more::after { width: 16px; height: 16px; flex-shrink: 0; background: url('@/assets/images/common/ico_arrow.png') no-repeat; display: block; transition: transform 0.2s ease; content: ''; }
.sec_startup_process .process_timeline > li > article > div > .link_more.is_open::after { transform: rotate(180deg); }
.sec_startup_process .process_timeline > li > article > div > .process_more.acc_panel { height: 0; overflow: hidden; transition: height 0.35s ease; box-sizing: border-box; }
.sec_startup_process .process_timeline > li > article > div > .process_more.acc_panel > .acc_panel_inner > .acc_panel_cont { margin-top: 12px; padding: 10px 16px; background-color: #f8f8f8; border-radius: 12px; }
.sec_startup_process .process_timeline > li > article > div > .process_more.acc_panel > .acc_panel_inner > .acc_panel_cont > .list_dotted > li { padding-left: 12px; color: #67676f; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.sec_startup_process .process_timeline > li > article > div > .process_more.acc_panel > .acc_panel_inner > .acc_panel_cont > .list_dotted > li + li { margin-top: 4px; }
.sec_startup_process .process_timeline > li > article > div > .process_more.acc_panel > .acc_panel_inner > .acc_panel_cont > .list_dotted > li::before { width: 4px; height: 4px; background-color: #666; top: 9px; }
.sec_startup_process .process_timeline > li:not([data-theme="dday"]) > article:hover { box-shadow: 2px 4px 6px 0 rgba(0, 0, 0, 0.25); }
.sec_startup_process .process_timeline > li[data-theme="start"] > article:hover { border-color: #107af2; }
.sec_startup_process .process_timeline > li[data-theme="d30"] > article:hover { border-color: #42c68f; }
.sec_startup_process .process_timeline > li[data-theme="d29"] > article:hover { border-color: #15b874; }
.sec_startup_process .process_timeline > li[data-theme="d28"] > article:hover { border-color: #11935d; }
.sec_startup_process .process_timeline > li[data-theme="d14"] > article:hover { border-color: #4095f5; }
.sec_startup_process .process_timeline > li[data-theme="d14_7"] > article:hover { border-color: #107af2; }
.sec_startup_process .process_timeline > li[data-theme="d11"] > article:hover { border-color: #0d62c2; }
.sec_startup_process .process_timeline > li[data-theme="d2_1"] > article:hover { border-color: #15b874; }

.sec_startup_process .process_timeline > li[data-theme="start"] > .step_meta > .day { color: #107af2; }
.sec_startup_process .process_timeline > li[data-theme="start"] > .step_meta > .step_track > .num { background-color: #107af2; }
.sec_startup_process .process_timeline > li[data-theme="start"] > article > div > .lead { color: #107af2; }
.sec_startup_process .process_timeline > li[data-theme="d30"] > .step_meta > .day { color: #42c68f; }
.sec_startup_process .process_timeline > li[data-theme="d30"] > .step_meta > .step_track > .num { background-color: #42c68f; }

.sec_startup_process .process_timeline > li[data-theme="d30"] > article > .icon { background-color: #e8f8f1; }
.sec_startup_process .process_timeline > li[data-theme="d30"] > article > div > .lead { color: #15b874; }
.sec_startup_process .process_timeline > li[data-theme="d29"] > .step_meta > .day { color: #15b874; }
.sec_startup_process .process_timeline > li[data-theme="d29"] > .step_meta > .step_track > .num { background-color: #15b874; }
.sec_startup_process .process_timeline > li[data-theme="d29"] > article > .icon { background-color: #e8f8f1; }
.sec_startup_process .process_timeline > li[data-theme="d29"] > article > div > .lead { color: #11935d; }
.sec_startup_process .process_timeline > li[data-theme="d28"] > .step_meta > .day { color: #11935d; }
.sec_startup_process .process_timeline > li[data-theme="d28"] > .step_meta > .step_track > .num { background-color: #11935d; }
.sec_startup_process .process_timeline > li[data-theme="d28"] > article > .icon { background-color: #e8f8f1; }
.sec_startup_process .process_timeline > li[data-theme="d28"] > article > div > .lead { color: #0d6e46; }
.sec_startup_process .process_timeline > li[data-theme="d14"] > .step_meta > .day { color: #4095f5; }
.sec_startup_process .process_timeline > li[data-theme="d14"] > .step_meta > .step_track > .num { background-color: #4095f5; }
.sec_startup_process .process_timeline > li[data-theme="d14"] > article > div > .lead { color: #107af2; }
.sec_startup_process .process_timeline > li[data-theme="d14_7"] > .step_meta > .day { color: #107af2; }
.sec_startup_process .process_timeline > li[data-theme="d14_7"] > .step_meta > .step_track > .num { background-color: #107af2; }
.sec_startup_process .process_timeline > li[data-theme="d14_7"] > article > div > .lead { color: #0d62c2; }
.sec_startup_process .process_timeline > li[data-theme="d11"] > .step_meta > .day { color: #0d62c2; }
.sec_startup_process .process_timeline > li[data-theme="d11"] > .step_meta > .step_track > .num { background-color: #0d62c2; }
.sec_startup_process .process_timeline > li[data-theme="d11"] > article > div > .lead { color: #0a4991; }
.sec_startup_process .process_timeline > li[data-theme="d2_1"] > .step_meta > .day { color: #15b874; }
.sec_startup_process .process_timeline > li[data-theme="d2_1"] > .step_meta > .step_track > .num { background-color: #15b874; }
.sec_startup_process .process_timeline > li[data-theme="d2_1"] > article > .icon { background-color: #e8f8f1; }
.sec_startup_process .process_timeline > li[data-theme="d2_1"] > article > div > .lead { color: #11935d; }
.sec_startup_process .process_timeline > li[data-theme="dday"] > .step_meta > .day { color: #fb6432; font-size: 2.4rem; line-height: 1.35; }
.sec_startup_process .process_timeline > li[data-theme="dday"] > .step_meta > .step_track > .num { background-color: #fb6432; }
.sec_startup_process .process_timeline > li[data-theme="dday"] > article { background-color: #fb6432; border-color: #fb6432; }
.sec_startup_process .process_timeline > li[data-theme="dday"] > article > .icon { background-color: #fff; }
.sec_startup_process .process_timeline > li[data-theme="dday"] > article > div > h3 { color: #fff; }
.sec_startup_process .process_timeline > li[data-theme="dday"] > article > div > .desc { color: #fff; }

.sec_franchise_type { width: 100%; max-width: 1420px; margin: 0 auto; }
.sec_franchise_type > .franchise_type_list { display: flex; align-items: stretch; gap: 20px; }
.sec_franchise_type > .franchise_type_list > li { max-width: 700px; min-width: 0; flex: 1 1 0; }
.sec_franchise_type > .franchise_type_list > li > article { height: 100%; border-radius: 20px 20px 0 0; display: flex; flex-direction: column; overflow: hidden; }
.sec_franchise_type > .franchise_type_list > li > article > header { padding: 32px 40px 40px; display: flex; flex-direction: column; align-items: center; gap: 20px; }
.sec_franchise_type > .franchise_type_list > li > article > header > .icon { width: 80px; height: 80px; flex-shrink: 0; border-radius: 50%; display: block; }
.sec_franchise_type > .franchise_type_list > li > article > header > div { width: 100%; text-align: center; }
.sec_franchise_type > .franchise_type_list > li > article > header > div > h3 { margin: 0; color: #fff; font-size: 3.2rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.sec_franchise_type > .franchise_type_list > li > article > header > div > p { margin: 4px 0  0; color: #fff; font-size: 1.8rem; font-weight: 400; line-height: 1.4; letter-spacing: 0; }
.sec_franchise_type > .franchise_type_list > li.is_profit > article > header { background-color: #fc835b; }
.sec_franchise_type > .franchise_type_list > li.is_profit > article > header > .icon { background-color: #fee0d6; }
.sec_franchise_type > .franchise_type_list > li.is_stable > article > header { background-color: #4095f5; }
.sec_franchise_type > .franchise_type_list > li.is_stable > article > header > .icon { background-color: #e7f2fe; }
.sec_franchise_type > .franchise_type_list > li > article > .franchise_type_body { flex: 1 1 auto; padding: 32px 40px; background-color: #fff; border-radius: 0 0 20px 20px; display: flex; gap: 20px; }
.sec_franchise_type > .franchise_type_list > li.is_profit > article > .franchise_type_body { border: 2px solid #fc835b; }
.sec_franchise_type > .franchise_type_list > li.is_stable > article > .franchise_type_body { border: 2px solid #4095f5; }
.sec_franchise_type > .franchise_type_list > li > article > .franchise_type_body > .type_card { min-width: 0; flex: 1 1 0; padding: 32px 24px; border-radius: 16px; text-align: center; display: flex; flex-direction: column; align-items: center; }
.sec_franchise_type > .franchise_type_list > li > article > .franchise_type_body > .type_card > .badge { padding: 4px 16px; color: #fff; font-size: 1.8rem; font-weight: 700; line-height: 1.5; letter-spacing: 0; border-radius: 99px; }
.sec_franchise_type > .franchise_type_list > li > article > .franchise_type_body > .type_card > .card_icon { width: 40px; height: 40px; flex-shrink: 0; margin-top: 20px; background-color: #d9d9d9; border-radius: 50%; display: block; }
.sec_franchise_type > .franchise_type_list > li > article > .franchise_type_body > .type_card > strong { margin-top: 16px; color: #161616; font-size: 2rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_franchise_type > .franchise_type_list > li > article > .franchise_type_body > .type_card > p { margin: 4px 0 0; color: #67676f; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.sec_franchise_type > .franchise_type_list > li > article > .franchise_type_body > .type_card.is_gs1 { background-color: #f9f2ea; }
.sec_franchise_type > .franchise_type_list > li > article > .franchise_type_body > .type_card.is_gs1 > .badge { background-color: #fc835b; }
.sec_franchise_type > .franchise_type_list > li > article > .franchise_type_body > .type_card.is_gs2 { background-color: #e7f2fe; }
.sec_franchise_type > .franchise_type_list > li > article > .franchise_type_body > .type_card.is_gs2 > .badge { background-color: #4095f5; }
.sec_franchise_type > .franchise_type_list > li > article > .franchise_type_body > .type_card.is_gs3 { background-color: #e8f8f1; }
.sec_franchise_type > .franchise_type_list > li > article > .franchise_type_body > .type_card.is_gs3 > .badge { background-color: #42c68f; }

.sec_franchise_compare { width: 100%; max-width: 1420px; margin: 0 auto; }
.sec_franchise_compare > .franchise_compare_wrap { margin-top: 40px; overflow-x: auto; }
.sec_franchise_compare .franchise_compare_table { width: 100%; min-width: 1000px; border-top: 1px solid #161616; border-collapse: collapse; table-layout: fixed; }
.sec_franchise_compare .franchise_compare_table col.col_group { width: 8.7%; }
.sec_franchise_compare .franchise_compare_table col.col_label { width: 22.1%; }
.sec_franchise_compare .franchise_compare_table col.col_gs { width: 23.1%; }
.sec_franchise_compare .franchise_compare_table th, .sec_franchise_compare .franchise_compare_table td { padding: 16px 24px; color: #161616; font-size: 1.8rem; font-weight: 400; line-height: 1.4; letter-spacing: 0; word-break: keep-all; border: 1px solid #e5e5e9; text-align: center; vertical-align: middle; }
.sec_franchise_compare .franchise_compare_table thead th { font-weight: 600; background-color: #f8f8f8; }
.sec_franchise_compare .franchise_compare_table thead td.is_gs1 > strong { color: #fb6432; }
.sec_franchise_compare .franchise_compare_table thead td.is_gs2 > strong { color: #107af2; }
.sec_franchise_compare .franchise_compare_table thead td.is_gs3 > strong { color: #15b874; }
.sec_franchise_compare .franchise_compare_table thead td > strong { font-size: 1.8rem; font-weight: 600; line-height: 1.4; letter-spacing: -0.01em; display: block; }
.sec_franchise_compare .franchise_compare_table tbody th[scope="rowgroup"] { font-weight: 400; background-color: #f8f8f8; }
.sec_franchise_compare .franchise_compare_table tbody th[scope="row"] { font-weight: 400; background-color: #f8f8f8; }
.sec_franchise_compare .franchise_compare_table tbody td .txt_emphasis { font-size: 2rem; }
.sec_franchise_compare .franchise_compare_table td > span { margin-top: 4px; color: #67676f; font-size: 1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; display: block; }
.list_note { margin-top: 32px; }
.list_note > li + li { margin-top: 8px; }
.list_note > li > p { margin: 0; color: #67676F; font-size: 2rem; font-weight: 400; line-height: 1.35; letter-spacing: -0.01em; }
.list_note > li > p.txt_link { color: #161616; }
.list_note > li > p > a { color: #107AF2; text-decoration: underline; }
.sec_operation .section_header, .sec_life .section_header { margin-bottom: 80px; }
.icon_card_row:first-child .icon_card_list.type_02 > li > article { padding: 0 0 72px; }
.icon_card_list.type_02 { border-bottom: 1px solid #E5E5E9; }
.icon_card_row .icon_card_list.type_02 > li > article { padding: 64px 0; border: 0; }
.icon_card_topic .sub_header { margin-bottom: 32px; }
.icon_card_topic + .icon_card_topic { margin-top: 80px; }
.icon_card_list { display: flex; flex-direction: column; gap: 20px; }
.icon_card_list.col_02 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
.icon_card_list.col_03 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); }
.icon_card_list.col_02 > li, .icon_card_list.col_03 > li { min-width: 0; }
.icon_card_list.col_02 > li > article, .icon_card_list.col_03 > li > article { height: 100%; }
.icon_card_list > li > article { padding: 32px; background-color: #fff; border: 1px solid #e5e5e9; border-radius: 20px; display: flex; align-items: flex-start; gap: 20px; }
.icon_card_list > li > article > .icon { width: 80px; height: 80px; flex-shrink: 0; background-color: #f2f2f4; border-radius: 50%; display: block; }
.icon_card_list > li > article > div { min-width: 0; flex: 1 1 auto; }
.icon_card_list > li > article > div > dl { margin: 0; }
.icon_card_list > li > article > div > dl > dt { margin: 0; }
.icon_card_list > li > article > div > dl > dd { margin: 0; }
.icon_card_list > li > article > div > dl > dt { color: #161616; font-size: 2.8rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.icon_card_list > li > article > div > dl > dt + dd { margin-top: 8px; color: #67676f; font-size: 2rem; font-weight: 400; line-height: 1.35; letter-spacing: -0.02em; }
.icon_card_list > li > article > div > ul.list_note { margin: 18px 0 0; }
.icon_card_list > li > article > div > ul.list_note > li > p {  color: #fb6432; font-size: 1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; }
.button_area{display:flex; justify-content: center;}
.icon_card_list > li > article > div > .button_area .btn_mid { margin-top: 18px; }

.sec_franchise_compare .franchise_compare_table tbody .note { color: #67676F; font-size: 1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; }

.sec_startup_faq .section_header.ac, .sec_gs25_faq .section_header.ac { text-align: left !important; }

:deep(.faq_acc.board_type_toggle.type_faq) { width: 100%; border-top: 1px solid #161616; }
:deep(.faq_acc.board_type_toggle.type_faq dt > a.acc_tit_btn) { min-height: 80px; padding: 24px 20px 24px 60px; color: #161616; font-size: 2.4rem; font-weight: 400; line-height: 1.35; letter-spacing: -0.01em; border-bottom: 1px solid #d7d7df; }
:deep(.faq_acc.board_type_toggle.type_faq dt > a.acc_tit_btn::before) { width: 32px; height: 32px; font-size: 1.8rem; font-weight: 400; line-height: 1.5; top: 50%; left: 20px; transform: translateY(-50%); }
:deep(.faq_acc.board_type_toggle.type_faq dt > a.acc_tit_open) { font-weight: 700; border-bottom: 0; }
:deep(.faq_acc.board_type_toggle.type_faq dt > a.acc_tit_open::before) { font-weight: 700; }
:deep(.faq_acc.board_type_toggle.type_faq dd.acc_panel .acc_panel_cont) { padding: 16px 32px 40px; color: #67676f; font-size: 2rem; font-weight: 400; line-height: 1.35; letter-spacing: -0.01em; }
:deep(.faq_acc.board_type_toggle.type_faq > dd.acc_panel:last-of-type.acc_show) { border-bottom: 1px solid #D7D7DF; }
:deep(.faq_acc.board_type_toggle.type_faq dd.acc_panel .acc_panel_cont p) { margin: 0; white-space: pre-line; }

:deep(.faq_acc_badge.board_type_toggle.type_faq dt > a.acc_tit_btn) { display: flex; align-items: center; gap: 8px; }
:deep(.faq_acc_badge.board_type_toggle.type_faq dt > a.acc_tit_btn > .badge) { flex-shrink: 0; padding: 4px 12px; color: #67676f; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; background-color: #f2f2f4; border-radius: 99px; }
:deep(.faq_acc_badge.board_type_toggle.type_faq dt > a.acc_tit_btn > .txt) { min-width: 0; flex: 1; }

.sec_gs25_faq :deep(.tab_wrap) { margin-bottom: 24px; overflow: hidden; }
.sec_gs25_faq :deep(.tab_wrap ul.type_01) { padding-left: 0; flex-wrap: nowrap; gap: 0; }
.sec_gs25_faq :deep(.tab_wrap ul.type_01 li) { border-bottom: 0; }
.sec_gs25_faq :deep(.tab_wrap ul.type_01 li .item) { min-height: 60px; padding: 17px 12px; color: #90909a; font-size: 1.8rem; font-weight: 400; line-height: 1.4; letter-spacing: 0; background-color: #fff; border: 1px solid #c4c4d0; border-left: 0; text-align: center; display: flex; align-items: center; justify-content: center; }
.sec_gs25_faq :deep(.tab_wrap ul.type_01 li:first-child .item) { border-left: 1px solid #c4c4d0; }
.sec_gs25_faq :deep(.tab_wrap ul.type_01 li.current) { border-bottom: 0; }
.sec_gs25_faq :deep(.tab_wrap ul.type_01 li.current .item) { color: #fff; background-color: #107af2; border-color: #107af2; }
.sec_gs25_faq :deep(.faq_acc dd.acc_panel .acc_panel_cont .policy_wrap) { margin-top: 24px; }
.sec_gs25_faq :deep(.faq_acc dd.acc_panel .acc_panel_cont .policy_wrap > p) { margin: 0 0 12px; font-size: 1.6rem; font-weight: 700; line-height: 1.5; letter-spacing: -0.01em; white-space: normal; }
.sec_gs25_faq :deep(.faq_acc dd.acc_panel .acc_panel_cont .policy_wrap table colgroup > col.col_label) { width: auto; min-width: 120px; }
.sec_gs25_faq :deep(.faq_acc dd.acc_panel .acc_panel_cont .policy_wrap table colgroup > col.col_data) { width: 33.3333%; }

.quick_menu { width: clamp(104px, 6.8229vw, 131px); position: fixed; right: clamp(24px, 4.5313vw, 87px); bottom: 60px; z-index: 100; display: flex; flex-direction: column; gap: clamp(8px, 0.5208vw, 10px); pointer-events: none; opacity: 0; }
.quick_menu li { width: 100%; position: relative; }
.quick_menu li button { width: 100%; height: clamp(48px, 3.125vw, 60px); padding: clamp(12px, 0.9375vw, 18px) 0; font-size: clamp(1.3rem, 0.8333vw, 1.6rem); font-weight: 700; letter-spacing: -0.01em; background: none; background-color: #f2f2f4; border: 0; border-radius: 99px; text-align: center; display: flex; align-items: center; justify-content: center; gap: clamp(8px, 0.5208vw, 10px); }
.quick_menu li button::before { width: clamp(16px, 1.0417vw, 20px); height: clamp(19px, 1.25vw, 24px); background-color: #161616; display: block; content: ''; }

/* 추천 점포 찾기 */
.sec_store :deep(.detail_card) { --color-brand-primary: #107AF2; }
.sec_store :deep(.store_card) { --color-brand-primary: #107AF2; }
.sec_store :deep(.detail_card [class*="btn_"][class*="fill"][class*="primary"]) { color: #fff; background-color: #107AF2; }
.tab_intro { margin-bottom: 64px; font-size: 2.4rem; color: #161616; line-height: 1.5; letter-spacing: -0.01em; }
.tab_intro span { color: #11935D; }
.store_search { padding: 48px 42px; background-color: #f8f8f8; border-radius: 12px; display: flex; flex-direction: column; gap: 0; }
.search_group { display: flex; flex-direction: column; gap: 12px; }
.search_group_label { color: #161616; font-size: 1.6rem; font-weight: 700; line-height: 1.24; }
.chip_list { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.chip { min-width: 78px; height: 40px; padding: 0 18px; color: #161616; font-size: 1.6rem; font-weight: 400; letter-spacing: -0.01em; background-color: transparent; border: 1px solid #161616; border-radius: 99px; white-space: nowrap; cursor: pointer; transition: background-color 0.15s, border-color 0.15s, color 0.15s; }
.chip.active { color: #107af2; background-color: #e7f2fe; border-color: #107af2; }
.search_bottom_row { margin-top: 24px; padding-top: 24px; border-top: 1px solid #D7D7DF; display: flex; flex-wrap: wrap; align-items: flex-start; gap: 32px; }
.chip_sep_v { width: 1px; height: 24px; background-color: #c4c4d0; flex-shrink: 0; align-self: center; display: inline-block; }
.chip_youth_wrap { position: relative; display: inline-flex; align-items: center; }
.youth_info_btn { width: 18px; height: 18px; color: #000; font-size: 1.3rem; font-weight: 500; line-height: 1; background-color: #fff; border: 1.4px solid #242428; border-radius: 50%; flex-shrink: 0; position: absolute; top: -11px; right: -12px; display: flex; align-items: center; justify-content: center; cursor: pointer; }
.youth_popover { padding: 32px; background-color: #fff; border: 1px solid #C6C6C6; border-radius: 16px; position: absolute; top: calc(100% + 8px); left: -119px; right: -166px; z-index: 10; }
.youth_popover > strong { font-size: 1.6rem; font-weight: 700; line-height: 1.24; }
.youth_popover > p { margin-top: 24px; color: #161616; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
.youth_popover > a { margin-top: 16px; color: #107AF2; font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; text-decoration: underline; display: block; }
.youth_popover_close { width: 20px; height: 20px; background: none; background-color: red; border: none; position: absolute; top: 32px; right: 32px; cursor: pointer; }
.search_group_input { min-width: 280px; flex: 1; }
.store_search_input_wrap { position: relative; }
.store_search_input { width: 100%; height: 40px; padding: 0 16px; color: #161616; font-size: 1.6rem; letter-spacing: -0.01em; background-color: #fff; border: 1px solid #c4c4d0; border-radius: 12px; box-sizing: border-box; outline: none; }
.store_search_input::placeholder { color: #a4a4b0; }
.store_search_input:focus { border-color: #107AF2; }
.store_search_btn { width: 20px; height: 20px; padding: 0; background: none; border: none; position: absolute; top: 50%; right: 12px; transform: translateY(-50%); display: flex; align-items: center; justify-content: center; cursor: pointer; }
.type_table_wrap { margin-top: 20px; border-top: 1px solid #161616; overflow-x: auto; }
.type_table { width: 100%; border-collapse: collapse; }
.type_table thead th { padding: 28px 24px; font-size: 1.8rem; line-height: 1.4; text-align: center; background-color: #f8f8f8; border: 1px solid #e5e5e9; }
.type_table tbody td { padding: 12px 24px; font-size: 1.8rem; line-height: 1.4; text-align: center; border-bottom: 1px solid #e5e5e9; }
.type_table_wrap.type2 .type_table thead th { padding: 18px 20px; line-height: 1.5; border: 0; }
.type_table_wrap.type2 .type_table colgroup col { width: 12.5%; }
.type_table_wrap.type2 .type_table tbody td { height: 82px; padding: 0 13px; }
.td_tag { font-size: 1.6rem; word-break: break-all; }
.store_list_wrap { margin-top: 32px; }
.store_list_bar { height: 40px; display: flex; align-items: center; justify-content: space-between; }
.store_count { color: #67676f; font-size: 1.6rem; letter-spacing: -0.01em; }
.store_count > strong { font-weight: 700; }
.store_bar_right { display: flex; align-items: center; gap: 8px; }
.store_sort_group { display: flex; align-items: center; }
.sort_btn { height: 40px; margin-left: -1px; padding: 0 12px; color: #90909a; font-size: 1.4rem; font-weight: 700; background: #fff; border: 1px solid #90909a; white-space: nowrap; position: relative; z-index: 0; cursor: pointer; }
.sort_btn:first-child { margin-left: 0; border-radius: 8px 0 0 8px; }
.sort_btn:last-child { border-radius: 0 8px 8px 0; }
.sort_btn.active { color: #107af2; border-color: #107af2; z-index: 1; }
.store_view_group { display: flex; gap: 8px; }
.view_btn { width: 40px; height: 40px; color: #107af2; background: #fff; border: 1px solid #90909a; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; }
.view_btn::before { width: 20px; height: 20px; background: red; display: inline-block; content: ""; }
.view_btn.active { color: #107af2; border-color: #107af2; }
.type_badge { padding: 3px 6px; font-size: 1.4rem; border-radius: 4px; display: inline-block; }
.type_badge + .type_badge { margin-left: 4px; }
.badge_gs1 { color: #15b874; background: #e8f8f1; }
.badge_gs2 { color: #fb6432; background: #f9f2ea; }
.badge_gs3 { color: #ed3030; background: #faeeee; }
.type_badge.badge_gray { color: #67676f; background: #f2f2f4; }
.detail_toggle_btn { color: #161616; font-size: 2rem; letter-spacing: -0.01em; background: none; border: none; display: inline-flex; align-items: center; gap: 4px; cursor: pointer; }
.detail_toggle_btn::after { width: 20px; height: 20px; background: red; transform: rotate(0deg); transform-origin: center; transition: transform 0.2s ease; display: inline-block; content: ""; }
.type_table_wrap.type2 .type_table tbody tr.is_open .detail_toggle_btn::after { transform: rotate(180deg); }
.detail_panel_td { padding: 0 !important; height: auto !important; border: none !important; }
.detail_panel { padding: 40px; background: #f8f8f8; border-bottom: 1px solid #D7D7DF; }
.detail_panel :deep(.detail_card) { border: 0; }
.store_accordion_list { display: none; }
.store_accordion_list :deep(.board_type_toggle) { border-top: 1px solid #d7d7df; }
.store_accordion_list :deep(dt > a.acc_tit_btn) { min-height: auto; padding: 16px 20px; font-size: inherit; font-weight: inherit; border-bottom: 1px solid #d7d7df; }
.store_accordion_list :deep(dt > a.acc_tit_btn.acc_tit_open) { border: 1px solid #161616; border-bottom: none; }
.store_accordion_list :deep(dt > a.acc_tit_btn::after) { width: 24px; height: 24px; background-color: #161616; transform: rotate(0deg); transform-origin: center; transition: transform 0.2s ease; }
.store_accordion_list :deep(dt > a.acc_tit_btn.acc_tit_open::after) { transform: rotate(180deg); }
.store_accordion_list :deep(dd.acc_panel.acc_show) { border: 1px solid #161616; border-top: none; }
.store_accordion_list :deep(.acc_panel_cont) { padding: 0; }
.accordion_head_info { min-width: 0; flex: 1; }
.accordion_region { color: #161616; font-size: 2rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.accordion_badges { margin-top: 8px; display: flex; flex-wrap: wrap; gap: 4px; }
.store_card_grid_wrap { margin-top: 16px; display: flex; flex-direction: column; gap: 20px; }
.store_card_row { margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; align-items: stretch; }
.store_card_row > li { display: flex; flex-direction: column; }
.store_pagination { margin-top: 24px; display: flex; justify-content: center; }


/* 상담 및 신청 */
.sec_consult_startup{max-width:1000px; margin: 0 auto;}
.seminar_wrap{max-width:1000px; margin:80px auto 0;  }
.consent_box { width: 100%; padding: 32px; background-color: #f8f8f8; border-radius: 12px; }
.consent_box + .consent_box { margin-top: 40px; }
.consent_box > h3 { font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.consent_list { margin-top: 24px; }
.consent_list > li { padding-left: 10px; position: relative; }
.consent_list > li + li { margin-top: 8px; }
.consent_list > li > p { color: #67676f; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
.consent_notice_area { margin-top: 24px; padding-top: 24px; border-top: 1px solid #d7d7df; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.consent_notice_area > p { color: #161616; font-size: 1.6rem; font-weight: 700; line-height: 1.24; letter-spacing: 0; }
.consent_radio { display: inline-flex; align-items: center; gap: 8px; cursor: pointer; }
.consent_radio > input { width: 24px; height: 24px; margin: 0; padding: 0; background-color: #ffffff; border: 1px solid #c4c4d0; border-radius: 8px; position: relative; appearance: none; }
.consent_radio > input:checked { background-color: #107af2; border-color: #107af2; }
.consent_radio > input:checked::after { width: 10px; height: 10px; background-color: #ffffff; border-radius: 50%; position: absolute; top: 50%; left: 50%; content: ""; transform: translate(-50%, -50%); }
.consent_radio > span { color: #161616; font-size: 1.8rem; line-height: 1.4; letter-spacing: 0; }
.apply_form {border-top:1px solid #242428;}
.apply_form .form_body {padding-top:25px; padding-bottom:40px; border-bottom:0;}
.apply_form .form_body .form_row { min-height: auto; padding: 12px 0; display: grid; grid-template-columns: minmax(0, 1fr); align-items: start; gap: 0; }
.apply_form .button_area :deep(.primary){width:100%; max-width:250px;}
.apply_form .form_body .form_row .form_label { margin-bottom: 12px; font-weight:400}
.apply_form .form_body .form_row .form_field { width: 100%; }
.apply_form .form_body .form_row_radio, .apply_form .form_body .form_row_textarea,
.apply_form .form_body .form_row_textarea .form_field,
.apply_form .form_body .form_row_calendar :deep(.consult_calendar),
.apply_form .form_body .form_row_calendar :deep(.consult_time_picker) { width: 100%; max-width: 1000px; }
.apply_form .form_body .form_row_textarea .form_field :deep(Textarea){resize:none;}
.apply_form .form_body .form_row.col_02 { width: 100%; max-width:720px;  padding: 12px 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));  gap: 20px; align-items: start; }
.apply_form .form_body .form_row.col_02 .col_item { min-width: 0; }
.apply_form .form_body .form_label { margin-bottom: 12px; }
.apply_form .form_body .form_row.col_02 .col_item .form_field { width: 100%; }
.apply_form .form_body .form_row.col_02 .col_item .forn_field_radio{padding:12px 0;}
.apply_form .form_field { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; min-width: 0; }
.apply_form .form_field_phone .select{flex:1;}
.apply_form .form_field_birth { flex-wrap: nowrap; }
.apply_form .form_field_birth :deep(.select) { max-width:150px;flex: 1; min-width: 0; }
.apply_form .form_field_open :deep(.input_wrap){max-width: 150px;}
.apply_form .form_row_region :deep(.select){max-width:220px; flex: 1; min-width: 0; }
.apply_form .form_field_experience { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 8px; }
@media (min-width: 769px) {
    .apply_form .form_field_experience :deep(.input_wrap) { width: auto !important; max-width: none; flex: 0 0 auto; }
    .apply_form .form_field_experience :deep(.input_wrap .check) { min-height: 52px; padding: 13px 16px !important; display: inline-flex !important; align-items: center; gap: 8px; background-color: #ffffff; border: 1px solid #90909a; border-radius: 10px; box-sizing: border-box; cursor: pointer; position: relative; }
    .apply_form .form_field_experience :deep(.input_wrap .check input[type="checkbox"]) { position: absolute; width: 1px; height: 1px; margin: 0; opacity: 0; }
    .apply_form .form_field_experience :deep(.input_wrap .check input[type="checkbox"] + .label) { padding: 0 !important; display: inline-flex !important; align-items: center; gap: 8px; color: #161616; font-size: 1.8rem; font-weight: 400; line-height: 1.39; letter-spacing: 0; white-space: nowrap; }
    .apply_form .form_field_experience :deep(.input_wrap .check input[type="checkbox"] + .label::before) { content: "" !important; width: 20px !important; height: 20px !important; margin: 0 !important; background-color: #d9d9d9 !important; border: 0 !important; border-radius: 4px !important; box-sizing: border-box !important; position: static !important; top: auto !important; left: auto !important; display: block !important; flex-shrink: 0; }
    .apply_form .form_field_experience :deep(.input_wrap .check input[type="checkbox"] + .label::after) { content: none !important; display: none !important; }
    .apply_form .form_field_experience :deep(.input_wrap .check input[type="checkbox"]:checked + .label::before) { background-color: #107af2 !important; }
    .apply_form .form_field_experience :deep(.input_wrap .check:has(input[type="checkbox"]:checked)) { border-color: #107af2; }
}
.apply_form .form_field_calendar :deep(.input_wrap){max-width:700px;}
.form_label_note { margin-top: 4px; color: #67676f; font-size: 1.2rem; line-height: 1.2; }
.manager_card { width: 100%; max-width: 740px; margin: 12px 0; padding: 40px; background-color: #e7f2fe; border: 1px solid #107af2; border-radius: 12px; display: flex; align-items: center; gap: 32px; box-sizing: border-box; }
.manager_card.type_02{max-width:100%;display:flex; justify-content: space-between;}
.manager_card .manager_header > p{color:#67676F;font-size: 1.6rem;line-height: 1.5;letter-spacing: -0.01em;}
.manager_card .manager_header > strong{margin-top:2px; font-size: 2.8rem;line-height: 1.35;letter-spacing: -0.01em;display:block;}
.manager_card .manager_header + .btn_close{width:20px; height:20px; text-indent:-9999px;background-color:#161616}
.consult_manager_photo { width: 80px; height: 80px; margin: 0; background-color: #c4c4d0; border-radius: 50%; flex-shrink: 0; }
.manager_body { min-width: 0; flex: 1; }
.manager_name { margin: 0; color: #161616; font-size: 1.8rem; font-weight: 700; line-height: 1.5; letter-spacing: 0; }
.manager_office { margin-top: 8px; display: flex; align-items: flex-start; gap: 4px; }
.manager_icon { width: 16px; height: 16px; margin-top: 2px; background-color: #161616; border-radius: 2px; flex-shrink: 0; }
.manager_addr { min-width: 0; }
.manager_addr > .tit { margin: 0; color: #161616; font-size: 1.4rem; font-weight: 700; line-height: 1.4; letter-spacing: -0.01em; }
.manager_addr > .addr { margin: 2px 0 0; color: #67676f; font-size: 1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; }

/* 창업 설명회 신청 · 지역 선택 (763:16835) */
.seminar_region_pick { position: relative; }
.seminar_month_sizer { margin: 0; padding: 0; position: absolute; left: -99999px; top: 0; pointer-events: none; visibility: visible; white-space: nowrap; display: flex; flex-direction: column; align-items: flex-start; gap: 0; }
.seminar_month_sizer .seminar_month_title { flex-shrink: 0; white-space: nowrap; }
.seminar_region_pick > .seminar_month_head { width: 100%; margin: 0 0 40px 0; display: flex; align-items: center; justify-content: center; gap:40px; }
.seminar_month_head > .seminar_nav_btn { width: 44px; height: 44px; margin: 0; padding: 0; border: 1px solid #d7d7df; border-radius: 999px; background: #ffffff; cursor: pointer; flex-shrink: 0; box-sizing: border-box; display: inline-flex; align-items: center; justify-content: center; opacity: 1; }
.seminar_month_head > .seminar_nav_btn:not(:disabled):hover { border-color: #161616; }
.seminar_month_head > .seminar_nav_btn:disabled { opacity: 0.35; }
.seminar_nav_chevron {width:20px; height:20px; background-color:#161616;}
.seminar_month_head > .seminar_month_swiper { max-width: calc(100% - 168px); margin: 0; flex: 0 0 auto; min-width: 0; overflow: hidden; box-sizing: border-box; }
.seminar_month_swiper :deep(.swiper-slide) { display: flex; align-items: center; justify-content: center; box-sizing: border-box; }
.seminar_month_title { margin: 0; color: #161616; font-size: 4rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.025em; text-align: center; overflow-wrap: anywhere; word-break: keep-all; }
.seminar_region_pick > .seminar_region_list { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 20px; align-items: stretch; }
.seminar_region_list > li { min-width: 0; box-sizing: border-box; }
@media (max-width: 1419px) {
    .seminar_region_pick > .seminar_region_list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
.seminar_region_card { width: 100%; max-width: 100%; min-height: 246px; padding: 24px; border: 1px solid #d7d7df; border-radius: 12px; background: #ffffff; display: flex; flex-direction: column; gap: 24px; box-sizing: border-box; }
.seminar_region_card_head > .seminar_region_name { margin: 0; color: #161616; font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.seminar_region_card_head > .seminar_region_addr { margin: 8px 0 0 0; color: #67676f; font-size: 1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; display: flex; align-items: center; gap: 4px; }
.seminar_ic_pin { width: 16px; height: 16px;background-color:#000; }
.seminar_slot_list { display: flex; flex-direction: column; gap: 10px; flex: 1; }
.seminar_slot_row { height: 52px; padding:12px 16px; border-radius: 12px; background-color: #f8f8f8; box-sizing: border-box; display: flex; align-items: center; gap: 4px; }
.seminar_ic_time { width: 16px; height: 16px;background-color:#000; }
.seminar_slot_row > .seminar_slot_time { margin:0; color: inherit; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; flex: 0 1 auto; min-width: 0; }
.seminar_slot_row > button.seminar_slot_badge { width: auto; height: auto; margin: 0 0 0 auto; padding: 4px 12px; color: inherit; font-family: inherit; font-size: 1.4rem; font-weight: 700; line-height: 1.4; letter-spacing: -0.01em; border: none; border-radius: 999px; background: transparent; appearance: none; flex-shrink: 0; cursor: pointer; box-sizing: border-box; display: inline-flex; align-items: center; justify-content: center; }
.seminar_slot_row > button.seminar_slot_badge:disabled { cursor: default; }
.seminar_slot_row > .seminar_slot_badge.is_closed { background: #e5e5e9; color: #67676f; }
.seminar_slot_row > .seminar_slot_badge.is_apply { background: #107af2; color: #ffffff; }
.seminar_slot_row > .seminar_slot_badge.is_picked { background: #15b874; color: #ffffff; }
.seminar_slot_row:not(.is_muted) > .seminar_slot_time { color: #161616; }
.seminar_slot_row:not(.is_muted) > .seminar_ic_time { color: #67676f; opacity: 0.9; }
.seminar_slot_row.is_muted > .seminar_ic_time,
.seminar_slot_row.is_muted > .seminar_slot_time { color: #67676f; text-decoration: line-through; }

@media (max-width: 1024px) { 
    .sec_num_list :deep(.num_info_list) { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 40px 20px; }
    .store_card_row { grid-template-columns: repeat(3, 1fr); }
    .sec_band > .inner > .link_grid { flex-direction: column; }
    .sec_overlap .section_header h2 { font-size: 2.4rem; }
    .sec_stack > .dual_panel { flex-direction: column; }
    .sec_tri_grid > ul { grid-template-columns: 1fr; gap: 20px; }
    .sec_franchise_define .franchise_define_card { width: 100%; max-width: 100%; min-width: 0; padding: 40px 24px; box-sizing: border-box; }
    .sec_franchise_define .franchise_formula { width: 100%; max-width: 100%; min-width: 0; display: grid; flex-wrap: unset; align-items: center; justify-content: unset; justify-items: stretch; grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr); grid-template-rows: auto auto auto; gap: 16px 8px; }
    .sec_franchise_define .franchise_formula > div:nth-child(1) { min-width: 0; justify-self: stretch; grid-column: 1; grid-row: 1; }
    .sec_franchise_define .franchise_formula > span:nth-child(2) { min-width: 0; align-self: center; justify-self: center; grid-column: 2; grid-row: 1; }
    .sec_franchise_define .franchise_formula > div:nth-child(3) { min-width: 0; justify-self: stretch; grid-column: 3; grid-row: 1; }
    .sec_franchise_define .franchise_formula > span:nth-child(4) { min-width: 0; justify-self: center; grid-column: 1 / -1; grid-row: 2; }
    .sec_franchise_define .franchise_formula > div:nth-child(5) { width: 100%; max-width: none; min-width: 0; justify-self: stretch; grid-column: 1 / -1; grid-row: 3; }
    .sec_franchise_define .franchise_formula > div { width: 100%; height: 136px; max-width: 100%; min-height: 136px; flex-shrink: unset; padding: 0 28px; flex-direction: row; align-items: center; justify-content: flex-start; gap: 16px; box-sizing: border-box; }
    .sec_franchise_define .franchise_formula > div:nth-child(5) { max-width: none; }
    .sec_franchise_define .franchise_formula > div > span { width: 72px; height: 72px; }
    .sec_franchise_define .franchise_formula > div:nth-child(1) > p, .sec_franchise_define .franchise_formula > div:nth-child(3) > p { text-align: left; }
    .sec_franchise_define .franchise_role_grid { margin-top: 32px; }
    .sec_franchise_type > .franchise_type_list { flex-direction: column; }
    .sec_franchise_type > .franchise_type_list > li { max-width: none; }
}

@media (max-width: 768px) { :deep(.m_br) { display: block; }
    :deep(.p_br) { display: none; }
    section + section { padding-top: 80px; }
    .list_dotted > li { padding-left: 6px; }
    .list_dotted > li::before { width: 2px; height: 2px; top: 9px; }
    .list_dotted > li + li { margin-top: 5px; }
    .list_note{margin-top: 16px;}
    .list_note li >  p{font-size: 1.4rem;line-height: 1.4;letter-spacing: -0.01em;}
    .page_header { display: none; }

    .sec_body { padding: 24px 0 40px; }
    .panel { padding: 60px 20px 80px; }
    .panel.pt_64 { padding-top: 60px;}
    .panel_third_depth { padding-top: 32px; }
    .section_header, .sub_header { margin-bottom: 32px; }
    .section_header > .tit { margin-bottom: 12px; padding: 4px 12px; }
    .section_header > h2, .sub_header > h3 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -0.01em; }
    .section_header > p, .sub_header > p { font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .section_header > p { margin-top: 12px; }
    .section_header.no_desc { margin-bottom: 24px; }
    section p { font-size: 1.4rem; line-height: 1.4; }
    :deep(.faq_acc.board_type_toggle.type_faq dt > a.acc_tit_btn) { min-height: 64px; padding: 8px 0 8px 40px; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
    :deep(.faq_acc.board_type_toggle.type_faq dt > a.acc_tit_btn::before) { font-size: 1.8rem; line-height: 1.5; left: 0; }
    :deep(.faq_acc.board_type_toggle.type_faq dt > a.acc_tit_open) { font-weight: 700; border-bottom: 0; }
    :deep(.faq_acc.board_type_toggle.type_faq dt > a.acc_tit_open::before) { font-weight: 700; }
    :deep(.faq_acc.board_type_toggle.type_faq dd.acc_panel .acc_panel_cont) { padding: 12px 12px 24px 20px; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }

    .sec_gs25_faq :deep(.tab_wrap) { margin-bottom: 24px; overflow: visible; }
    .sec_gs25_faq :deep(.tab_wrap.tabSlide) { overflow: visible; }
    .sec_gs25_faq :deep(.tab_wrap.tabSlide ul.type_01) { padding-left: 0; flex-wrap: wrap; gap: 10px 8px; transform: none !important; transition: none; }
    .sec_gs25_faq :deep(.tab_wrap ul.type_01) { padding-left: 0; flex-wrap: wrap; justify-content: flex-start; gap: 10px 8px; }
    .sec_gs25_faq :deep(.tab_wrap ul.type_01::after) { min-width: 0; display: none; content: none; }
    .sec_gs25_faq :deep(.tab_wrap)::after { display: none; }
    .sec_gs25_faq :deep(.tab_wrap ul.type_01 li) { flex: 0 0 auto; border-bottom: 0; }
    .sec_gs25_faq :deep(.tab_wrap ul.type_01 li.current) { border-bottom: 0; }
    .sec_gs25_faq :deep(.tab_wrap ul.type_01 li .item) { height: 40px; min-height: 40px; padding: 8px 16px; color: #161616; font-size: 1.6rem; font-weight: 400; line-height: 24px; letter-spacing: -0.01em; white-space: nowrap; background-color: #fff; border: 1px solid #161616; border-left: 1px solid #161616; border-radius: 99px; text-align: center; display: inline-flex; align-items: center; justify-content: center; box-sizing: border-box; }
    .sec_gs25_faq :deep(.tab_wrap ul.type_01 li:first-child .item) { border-left: 1px solid #161616; }
    .sec_gs25_faq :deep(.tab_wrap ul.type_01 li.current .item) { color: #107af2; background-color: #e7f2fe; border-color: #107af2; }
    :deep(.faq_acc_badge.board_type_toggle.type_faq dt > a.acc_tit_btn > .badge) { padding: 4px 8px; font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .sec_gs25_faq :deep(.pagination) { margin-top: 40px; }
    section > .inner { padding-top: 40px; padding-bottom: 40px; }
    .sec_region_counsel :deep(.tab_wrap ul.type_02) { padding-left: 0; justify-content: flex-start; }
    .sec_region_counsel :deep(.tab_wrap ul.type_02 li .item) { font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .sec_region_counsel :deep(.tab_wrap ul.type_02 li .item)::after { min-width: 0; }

    .sec_hero { max-height: none; min-height: 640px; padding: 50px 20px; border-radius: 20px; gap: 0; }
    .sec_hero > header { text-align: center; }
    .sec_hero > header > .tit { margin: 0 auto; padding: 8px 16px; font-size: 1.2rem; font-weight: 500; line-height: 1.4; letter-spacing: -0.01em; }
    .sec_hero > header > h3 { margin: 8px 0 0; font-size: 3rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
    .sec_hero > header > .desc { margin-top: 4px; font-size: 1.6rem; font-weight: 700; line-height: 1.24; letter-spacing: 0; }
    .sec_hero > .action_list { width: 100%; max-width: none; margin-top: 50px; gap: 10px; }
    .sec_hero > .action_list > li > a { min-height: 62px; padding: 12px 16px; padding-right: 40px; position: relative; flex-direction: column; align-items: flex-start; justify-content: center; gap: 4px; }
    .sec_hero > .action_list > li:last-child > a { min-height: 76px; align-items: flex-start; }
    .sec_hero > .action_list > li > a > strong { width: 100%; flex: none; font-size: 1.6rem; font-weight: 700; line-height: 1.24; letter-spacing: 0; }
    .sec_hero > .action_list > li:last-child > a > strong { flex-basis: auto; font-size: 1.6rem; line-height: 1.24; }
    .sec_hero > .action_list > li > a > span { width: 100%; font-size: 1.2rem; font-weight: 400; line-height: 1.2; letter-spacing: 0; }
    .sec_hero > .action_list > li > a::after { position: absolute; top: 50%; right: 16px; transform: translateY(-50%); }
    .sec_hero > .metric_list { width: 100%; max-width: none; margin-top: 24px; flex-direction: row; gap: 10px; }
    .sec_hero > .metric_list > li { min-width: 0; min-height: 103px; flex: 1; padding: 16px 10px; gap: 3px; }
    .sec_hero > .metric_list > li > strong { font-size: 1.6rem; font-weight: 700; line-height: 1.24; letter-spacing: 0; }
    .sec_hero > .metric_list > li > span { font-size: 1.2rem; font-weight: 400; line-height: 1.2; letter-spacing: 0; }

    .sec_num_list .section_header > h2 + p { color: #67676f; font-size: 1.8rem; line-height: 1.4; letter-spacing: 0; }
    .sec_num_list :deep(.num_info_list) { grid-template-columns: 1fr; gap: 40px; }
    .sec_num_list :deep(.num_info_item > article) { flex-direction: row; align-items: flex-start; gap: 16px; }
    .sec_num_list :deep(.num_info_icon) { width: 60px; height: 60px; }
    .sec_num_list :deep(.num_info_content) { min-width: 0; flex: 1; }
    .sec_num_list :deep(.num_info_num) { margin-bottom: 6px; font-size: 1.6rem; line-height: 1.24; letter-spacing: 0; }
    .sec_num_list :deep(.num_info_title) { margin-bottom: 6px; }
    .sec_num_list :deep(.num_info_title > strong) { font-size: 2rem; line-height: 1.35; }
    .sec_num_list :deep(.num_info_body > p) { font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }

    .sec_band > .inner { padding: 40px 20px; }
    .sec_band > .inner > .link_grid { margin-top: 32px; gap: 10px; }
    .sec_band > .inner > .link_grid > li > a { min-height: 0; padding: 16px; gap: 16px; }
    .sec_band > .inner > .link_grid > li > a > .thumb { width: 64px; height: 64px; }
    .sec_band > .inner > .link_grid > li > a > .txt > strong { font-size: 1.8rem; line-height: 1.5; letter-spacing: 0; }
    .sec_band > .inner > .link_grid > li > a > .txt > .desc { font-size: 1.4rem; line-height: 1.4; }

    .sec_overlap > .overlap_grid { width: 100%; max-width: 335px; margin: 0 auto; flex-wrap: wrap; align-content: flex-start; justify-content: flex-start; gap: 0; }
    .sec_overlap > .overlap_grid > li { width: auto; flex: 0 1 calc((100% + 25px) / 2); }
    .sec_overlap > .overlap_grid > li + li { margin-left: 0; }
    .sec_overlap > .overlap_grid > li:nth-child(even) { margin-left: -25px; }
    .sec_overlap > .overlap_grid > li:nth-child(n+3) { margin-top: -20px; }
    .sec_overlap > .overlap_grid > li > article > strong { font-size: 1.6rem; line-height: 1.24; letter-spacing: 0; }

    .sec_split > .inner > .split_layout { flex-direction: column; align-items: center; gap: 20px; }
    .sec_split > .inner > .split_layout > .info_card { width: 100%; max-width: none; min-height: 0; padding: 24px 16px; border-radius: 20px; }
    .sec_split > .inner > .split_layout > .info_card > dt { justify-content: flex-start !important; }
    .sec_split > .inner > .split_layout > .info_card.is_end > dt > .icon { order: -1; }
    .sec_split > .inner > .split_layout > .info_card > dt > strong { font-size: 1.8rem; line-height: 1.5; letter-spacing: 0; }
    .sec_split > .inner > .split_layout > .info_card > dd { margin: 12px 0 0; text-align: left !important; }
    .sec_split > .inner > .split_layout > .split_media { width: 220px; max-width: 100%; aspect-ratio: 1; }
    .sec_split > .inner > .split_layout > .split_media > img { width: 100%; height: 100%; display: block; object-fit: cover; }

    .sec_stack > .highlight_block { padding: 32px 20px; flex-direction: column; }
    .sec_stack > .highlight_block > .sub_header { width: 100%; max-width: none; }
    .sec_stack > .highlight_block > .sub_header > strong { margin-top: 16px; font-size: 1.6rem; line-height: 1.24; letter-spacing: 0; }
    .sec_stack > .highlight_block > .sub_header > p { margin-top: 5px; font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .sec_stack > .dual_panel { margin-top: 32px; gap: 32px; }
    .sec_stack > .dual_panel > article .sub_header { margin-bottom: 16px; }
    .sec_stack > .dual_panel > article .sub_header p, .sec_stack > .dual_panel > article > ul > li { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .sec_stack > .highlight_block > .highlight_body { width: 100%; gap: 40px; }
    .sec_stack > .highlight_block > .highlight_body > div { width: 100%; min-width: 0; }
    .sec_stack > .highlight_block > .highlight_body > div > h4 { font-size: 2rem; line-height: 1.35; letter-spacing: -0.01em; }
    .sec_stack .swiper_edge { width: calc(100% + 40px); margin: 0 -20px; padding: 0 20px; }
    .sec_stack > .highlight_block .swiper_edge { overflow: hidden; touch-action: pan-x; }

    .sec_stack > .highlight_block > .highlight_body > div > .highlight_swiper :deep(.swiper-wrapper) { align-items: stretch; }
    .sec_stack > .highlight_block > .highlight_body > div > .highlight_swiper :deep(.swiper-slide) { width: 62.4vw; height: auto; flex-shrink: 0; }
    .sec_stack > .highlight_block > .highlight_body > div > .highlight_swiper :deep(.swiper-slide) > article { width: 100%; min-height: 285px; background-color: #fff; border-radius: 12px; display: flex; flex-direction: column; overflow: hidden; }
    .sec_stack > .highlight_block > .highlight_body > div > .highlight_swiper :deep(.swiper-slide) > article > figure { width: 100%; margin: 0; background-color: #fff; display: flex; flex-direction: column; }
    .sec_stack > .highlight_block > .highlight_body > div > .highlight_swiper :deep(.swiper-slide) > article > figure > img { width: 100%; height: 200px; background-color: #fff; border-radius: 12px 12px 0 0; display: block; object-fit: contain; }
    .sec_stack > .highlight_block > .highlight_body > div > .highlight_swiper :deep(.swiper-slide) > article > figure > figcaption { min-height: 85px; padding: 20px 24px; background-color: #fff; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; box-sizing: border-box; }
    .sec_stack > .highlight_block > .highlight_body > div > .highlight_swiper :deep(.swiper-slide) > article > figure > figcaption > p { margin: 0; color: #67676f; font-size: 1.2rem; font-weight: 400; line-height: 1.2; letter-spacing: 0; }
    .sec_stack > .highlight_block > .highlight_body > div > .highlight_swiper :deep(.swiper-slide) > article > figure > figcaption > strong { margin-top: 4px; color: #161616; font-size: 1.8rem; font-weight: 700; line-height: 1.5; letter-spacing: 0; display: block; }
    .sec_stack > .dual_panel > article { padding: 32px 20px; }

    .sec_icon_grid > .inner > .icon_grid { grid-template-columns: 1fr; gap: 10px; }
    .sec_icon_grid > .inner > .icon_grid > li { height: auto; }
    .sec_icon_grid > .inner > .icon_grid > li > article { height: auto; min-height: 0; padding: 16px; border-radius: 12px; grid-template-columns: 60px 1fr; column-gap: 12px; }
    .sec_icon_grid > .inner > .icon_grid > li > article > .icon { width: 60px; height: 60px; }
    .sec_icon_grid > .inner > .icon_grid > li > article > div > strong { font-size: 2rem; line-height: 1.35; letter-spacing: -0.01em; }
    .sec_icon_grid > .inner > .icon_grid > li > article > div > p { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }

    .sec_tri_grid > ul { gap: 10px; }
    .sec_tri_grid > ul > li { height: auto; padding: 24px 16px; }
    .sec_tri_grid > ul > li > h3 { font-size: 2rem; line-height: 1.35; letter-spacing: -0.01em; }
    .sec_tri_grid > ul > li > dl { margin: 32px 0 0; }
    .sec_tri_grid > ul > li > dl > dt { font-size: 1.6rem; line-height: 1.24; }
    .sec_tri_grid > ul > li > dl > dd { font-size: 1.4rem; line-height: 1.4; }
    .sec_tri_grid > ul > li > dl > dd + dt { margin-top: 32px; }

    .sec_diagram .section_header p { color: #67676F; }
    .sec_diagram > .diagram_shell { width: 100%; max-width: 335px; margin: 0 auto; padding: 100px 24px 24px; border-radius: 999px; flex-direction: column; align-items: stretch; gap: 24px; }
    .sec_diagram > .diagram_shell > .diagram_track { width: 100%; min-width: 0; flex: 0 0 auto; order: 1; }
    .sec_diagram > .diagram_shell > .diagram_track .diagram_ring { border-radius: 999px; }
    .sec_diagram > .diagram_shell > article.node_aside { width: 100%; max-width: none; flex: 0 0 auto; text-align: center; order: 0; }
    .sec_diagram > .diagram_shell > article.node_aside > strong { color: #fff; font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.24px; display: block; }
    .sec_diagram > .diagram_shell > article.node_aside > p { margin-top: 6px; color: #fff; font-size: 1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.14px; }
    .sec_diagram > .diagram_shell > .diagram_track > .diagram_ring.layer_outer { width: 100%; max-width: none; min-height: 541px; padding: 50px 24px 24px; border-radius: 999px; flex-direction: column; flex-wrap: nowrap; align-items: center; align-content: center; gap: 24px; container-type: normal; }
    .sec_diagram > .diagram_shell > .diagram_track > .diagram_ring.layer_outer > article.node_ring { width: 100%; max-width: 239px; flex: 0 0 auto; text-align: center; order: 0; }
    .sec_diagram > .diagram_shell > .diagram_track > .diagram_ring.layer_outer > article.node_ring > strong { color: #0a4991; font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.24px; display: block; }
    .sec_diagram > .diagram_shell > .diagram_track > .diagram_ring.layer_outer > article.node_ring > p { margin-top: 6px; color: #0a4991; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.16px; }
    .sec_diagram > .diagram_shell > .diagram_track > .diagram_ring.layer_outer > .diagram_ring.layer_mid { width: 100%; max-width: 239px; min-height: 381px; padding: 50px 24 24px; border-radius: 999px; order: 1; flex-direction: column; flex-wrap: nowrap; align-items: center; gap: 24px; container-type: normal; }
    .sec_diagram > .diagram_shell > .diagram_track > .diagram_ring.layer_outer > .diagram_ring.layer_mid > .diagram_ring.layer_inner { width: 100%; max-width: 191px; min-height: 210px; padding: 24px; border-radius: 999px; order: 2; }
    .sec_diagram > .diagram_shell > .diagram_track > .diagram_ring.layer_outer > .diagram_ring.layer_mid > .diagram_ring.layer_inner > article > strong { color: #67676f; font-size: 1.8rem; font-weight: 700; line-height: 1.5; letter-spacing: 0; display: block; }
    .sec_diagram > .diagram_shell > .diagram_track > .diagram_ring.layer_outer > .diagram_ring.layer_mid > .diagram_ring.layer_inner > article > span { margin-top: 6px; color: #67676f; font-size: 1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.14px; display: block; }
    .sec_diagram > .diagram_shell > .diagram_track > .diagram_ring.layer_outer > .diagram_ring.layer_mid > article.node_nested { width: 100%; max-width: 191px; flex: 0 0 auto; text-align: center; }
    .sec_diagram > .diagram_shell > .diagram_track > .diagram_ring.layer_outer > .diagram_ring.layer_mid > article.node_nested > strong { color: #107af2; font-size: 1.8rem; font-weight: 700; line-height: 1.5; letter-spacing: 0; display: block; }
    .sec_diagram > .diagram_shell > .diagram_track > .diagram_ring.layer_outer > .diagram_ring.layer_mid > article.node_nested > p { margin-top: 6px; color: #107af2; font-size: 1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.14px; }

    .sec_franchise_define .franchise_define_card { padding: 24px 16px; border-radius: 12px; }
    .sec_franchise_define .franchise_define_card .sub_header { margin-bottom: 20px; }
    .sec_franchise_define .franchise_define_card .sub_header > .tit { min-height: 28px; padding: 4px 12px; font-size: 1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; }
    .sec_franchise_define .franchise_define_card .sub_header > .tit + h3 { margin-top: 8px; }
    .sec_franchise_define .franchise_define_card .sub_header > h3 + p { margin-top: 8px; color: #67676f; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }

    .sec_franchise_define .franchise_formula { width: 100%; max-width: 100%; min-width: 0; display: grid; flex-wrap: unset; align-items: center; justify-content: unset; justify-items: stretch; grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr); grid-template-rows: auto auto auto; column-gap: 1.5px; row-gap: 0; }
    .sec_franchise_define .franchise_formula > div:nth-child(1) { min-width: 0; justify-self: stretch; grid-column: 1; grid-row: 1; }
    .sec_franchise_define .franchise_formula > span:nth-child(2) { min-width: 0; color: #107af2; font-size: 2.8rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; align-self: center; justify-self: center; grid-column: 2; grid-row: 1; }
    .sec_franchise_define .franchise_formula > div:nth-child(3) { min-width: 0; justify-self: stretch; grid-column: 3; grid-row: 1; }
    .sec_franchise_define .franchise_formula > span:nth-child(4) { min-width: 0; margin-top: 12px; color: #107af2; font-size: 2.8rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; justify-self: center; grid-column: 1 / -1; grid-row: 2; }
    .sec_franchise_define .franchise_formula > div:nth-child(5) { width: 100%; height: auto; max-width: none; min-width: 0; min-height: 88px; padding: 12px 16px; flex-direction: row; align-items: center; justify-content: center; justify-self: stretch; grid-column: 1 / -1; grid-row: 3; gap: 16px; box-sizing: border-box; }
    .sec_franchise_define .franchise_formula > div:nth-child(1), .sec_franchise_define .franchise_formula > div:nth-child(3) { width: 100%; height: auto; max-width: none; aspect-ratio: 1 / 1; flex-shrink: unset; padding: 8px; flex-direction: column; align-items: center; justify-content: center; gap: 8px; box-sizing: border-box; }
    .sec_franchise_define .franchise_formula > div > span { width: 40px; height: 40px; flex-shrink: 0; }
    .sec_franchise_define .franchise_formula > div:nth-child(5) > span { width: 50px; height: 50px; border-radius: 99px; }
    .sec_franchise_define .franchise_formula > div:nth-child(1) > p, .sec_franchise_define .franchise_formula > div:nth-child(3) > p { text-align: center; }
    .sec_franchise_define .franchise_formula > div:nth-child(1) > p > strong, .sec_franchise_define .franchise_formula > div:nth-child(3) > p > strong { font-size: 1.8rem; line-height: 1.5; letter-spacing: 0; }
    .sec_franchise_define .franchise_formula > div:nth-child(1) > p > span, .sec_franchise_define .franchise_formula > div:nth-child(3) > p > span { margin-top: 0; font-size: 1.2rem; line-height: 1.2; letter-spacing: 0; }
    .sec_franchise_define .franchise_formula > div:nth-child(5) > p { text-align: left; }
    .sec_franchise_define .franchise_formula > div:nth-child(5) > p > strong { font-size: 2.4rem; line-height: 1.35; letter-spacing: -0.01em; }
    .sec_franchise_define .franchise_formula > div:nth-child(5) > p > span { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .sec_franchise_define .franchise_role_grid { width: 100%; max-width: none; margin: 20px auto 0; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 11px; }
    .sec_franchise_define .franchise_role_grid > article { padding: 20px 10px; }
    .sec_franchise_define .franchise_role_grid > article > header { padding: 0 0 24px; align-items: flex-start; gap: 8px; }
    .sec_franchise_define .franchise_role_grid > article > header > span { width: 32px; height: 32px; }
    .sec_franchise_define .franchise_role_grid > article > header > div > h4 { font-size: 1.6rem; line-height: 1.24; letter-spacing: 0; }
    .sec_franchise_define .franchise_role_grid > article > header > div > p { margin-top: 0; color: #67676f; font-size: 1.2rem; line-height: 1.2; letter-spacing: 0; }
    .sec_franchise_define .franchise_role_grid > article > ul { padding: 24px 0 0; gap: 24px; }
    .sec_franchise_define .franchise_role_grid > article > ul > li { align-items: center; gap: 8px; }
    .sec_franchise_define .franchise_role_grid > article > ul > li > span { width: 20px; height: 20px; }
    .sec_franchise_define .franchise_role_grid > article > ul > li > strong { color: #161616; font-size: 1.2rem; font-weight: 400; line-height: 1.2; letter-spacing: 0; }
    .sec_stack > .dual_panel > article > .btn_mid { width: 100%; height: 44px; }
    .sec_stack > .dual_panel > article > .stack_list { gap: 12px; }
    .sec_stack > .dual_panel > article > .stack_list > li { padding: 16px; gap: 12px; }
    .sec_stack > .dual_panel > article > .stack_list > li > .thumb { width: 60px; height: 60px; }
    .sec_stack > .dual_panel > article > .stack_list > li > div > strong { font-size: 1.6rem; line-height: 1.24; }
    .sec_stack > .dual_panel > article > .stack_list > li > div > p { margin-top: 2px; font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .sec_stack > .dual_panel > article > .media_pair > figure { aspect-ratio: 141/111; }

    .sec_stack > .sub_block > .sub_swiper :deep(.swiper-slide) > article > figure { aspect-ratio: 320/213; }
    .sec_stack > .sub_block > .sub_swiper :deep(.swiper-slide) { width: 85.333vw; height: auto; flex-shrink: 0; }
    .sec_stack > .sub_block > .sub_swiper :deep(.swiper-slide) > article > strong { margin-top: 4px; font-size: 2rem; line-height: 1.325; letter-spacing: -0.01em; }
    .sec_stack > .sub_block > .sub_swiper :deep(.swiper-slide) > article > span { padding: 6px; font-size: 1.2rem; line-height: 1.2; }

    .sec_region_counsel > .section_header { margin-bottom: 24px; }
    .sec_region_counsel :deep(.tab_wrap) { margin-bottom: 32px; }
    .sec_region_counsel .region_counsel_board { grid-template-columns: 1fr; gap: 10px; }
    .sec_region_counsel .region_counsel_board > .region_counsel_map { height: auto; max-height: none; min-height: 297px; overflow: hidden; }
    .sec_region_counsel .region_counsel_board > .region_counsel_side { height: auto; max-width: none; min-height: 297px; padding: 20px; box-sizing: border-box; }
    .sec_region_counsel .region_counsel_board.is_staff > .region_counsel_side { min-height: 506px; padding: 20px 0 0; border: 0; display: flex; flex-direction: column; overflow: hidden; }
    .sec_region_counsel .region_counsel_panel > span.icon { width: 32px; height: 32px; }
    .sec_region_counsel .region_counsel_panel > p.tit { margin-top: 16px; font-size: 1.8rem; line-height: 1.5; letter-spacing: -0.01em; }
    .sec_region_counsel .region_counsel_panel > p.desc { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .sec_region_counsel .region_counsel_staff_body { min-height: 0; flex: 1 1 auto; }
    .sec_region_counsel .region_counsel_staff_body > header { flex-shrink: 0; margin: 0 0 24px; padding: 0 20px; gap: 8px; }
    .sec_region_counsel .region_counsel_staff_body > header > .ico_pin { width: 32px; height: 32px; }
    .sec_region_counsel .region_counsel_staff_body > header > h3 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -0.01em; }
    .sec_region_counsel .region_counsel_staff_body > header > .badge { padding: 2px 10px; font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .sec_region_counsel .region_counsel_staff_body > header > .btn_close { width: 20px; height: 20px; }
    .sec_region_counsel .region_counsel_staff_body > ul { max-height: 430px; min-height: 0; flex: 1 1 auto; padding: 0; gap: 10px; overflow-y: auto; }
    .sec_region_counsel .region_counsel_staff_body > ul > li > article { padding: 16px; border-radius: 12px; align-items: center; gap: 12px; }
    .sec_region_counsel .region_counsel_staff_body .photo { width: 60px; height: 60px; }
    .sec_region_counsel .region_counsel_staff_body .name { font-size: 1.6rem; font-weight: 700; line-height: 1.24; letter-spacing: 0; }
    .sec_region_counsel .region_counsel_staff_body .area { margin-top: 2px; font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .sec_region_counsel .region_counsel_staff_body .phone { margin-top: 6px; gap: 8px; }
    .sec_region_counsel .region_counsel_staff_body .phone a { font-size: 1.4rem; font-weight: 400; line-height: 1.4; letter-spacing: -0.01em; }

    .sec_startup_process .process_timeline { align-items: stretch; gap: 20px; }
    .sec_startup_process .process_timeline > li { align-items: stretch; justify-content: flex-start; gap: 10px; }
    .sec_startup_process .process_timeline > li > .step_meta { width: 60px; position: relative; flex-direction: column; align-items: center; align-self: stretch; justify-content: flex-start; gap: 4px; transform: translateY(10px); }
    .sec_startup_process .process_timeline > li > .step_meta > .day { width: 100%; height: auto; min-width: 0; flex-shrink: 0; font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; background: #fff; text-align: center; z-index: 2; order: 2; }
    .sec_startup_process .process_timeline > li > .step_meta > .step_track { width: 100%; flex: 0 0 auto; margin-bottom: 0; padding-bottom: 0; order: 1; }
    .sec_startup_process .process_timeline > li > .step_meta > .step_track > .num { width: 32px; height: 32px; font-size: 2rem; line-height: 1.35; }
    .sec_startup_process .process_timeline > li > .step_meta > .step_track > .step_line { width: 1px; height: auto; flex: none; background-color: #c4c4d0; position: absolute; top: 32px; bottom: -20px; left: 50%; transform: translateX(-50%); }
    .sec_startup_process .process_timeline > li > article { width: auto; max-width: none; min-width: 0; flex: 1 1 auto; padding: 24px 16px; border-radius: 16px; gap: 0; }
    .sec_startup_process .process_timeline > li > article > .icon { display: none; }
    .sec_startup_process .process_timeline > li > article > div > .lead { margin-bottom: 4px; font-size: 1.2rem; line-height: 1.2; letter-spacing: 0; }
    .sec_startup_process .process_timeline > li > article > div > h3 { margin-bottom: 4px; font-size: 1.8rem; line-height: 1.5; letter-spacing: 0; }
    .sec_startup_process .process_timeline > li > article > div > .desc { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .sec_startup_process .process_timeline > li > article > div > .link_more { margin-top: 12px; font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .sec_startup_process .process_timeline > li > article > div > .process_more.acc_panel > .acc_panel_inner > .acc_panel_cont > .list_dotted > li { padding-left: 9px; font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .sec_startup_process .process_timeline > li > article > div > .process_more.acc_panel > .acc_panel_inner > .acc_panel_cont > .list_dotted > li::before { width: 3px; height: 3px; top: 8px; }
    .sec_startup_process .process_timeline > li[data-theme="dday"] > .step_meta > .day { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .sec_startup_process .process_timeline > li[data-theme="dday"] > article { border-radius: 20px; gap: 12px; }
    .sec_startup_process .process_timeline > li[data-theme="dday"] > article > .icon { width: 40px; height: 40px; display: block; }

    .sec_franchise_type > .franchise_type_list { flex-direction: column; gap: 20px; }
    .sec_franchise_type > .franchise_type_list > li { max-width: none; }
    .sec_franchise_type > .franchise_type_list > li.is_profit { order: 1; }
    .sec_franchise_type > .franchise_type_list > li.is_stable { order: 2; }
    .sec_franchise_type > .franchise_type_list > li > article > header { padding: 24px; gap: 16px; }
    .sec_franchise_type > .franchise_type_list > li > article > header > .icon { width: 60px; height: 60px; }
    .sec_franchise_type > .franchise_type_list > li > article > header > div > h3 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -0.01em; }
    .sec_franchise_type > .franchise_type_list > li > article > header > div > p { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .sec_franchise_type > .franchise_type_list > li > article > .franchise_type_body { padding: 24px; gap: 10px; }
    .sec_franchise_type > .franchise_type_list > li > article > .franchise_type_body > .type_card { padding: 20px 12px; border-radius: 16px; }
    .sec_franchise_type > .franchise_type_list > li > article > .franchise_type_body > .type_card > .badge { padding: 4px 16px; font-size: 1.6rem; line-height: 1.24; letter-spacing: -0.01em; }
    .sec_franchise_type > .franchise_type_list > li > article > .franchise_type_body > .type_card > .card_icon { width: 32px; height: 32px; margin-top: 12px; }
    .sec_franchise_type > .franchise_type_list > li > article > .franchise_type_body > .type_card > strong { margin-top: 12px; font-size: 1.6rem; line-height: 1.24; }
    .sec_franchise_type > .franchise_type_list > li > article > .franchise_type_body > .type_card > p { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }

    .sec_franchise_compare > .franchise_compare_wrap { margin-top: 32px; margin-right: -20px; margin-left: -20px; padding: 0 20px; overflow-x: auto; -webkit-overflow-scrolling: touch; }
    .sec_franchise_compare .franchise_compare_table { min-width: 852px; }
    .sec_franchise_compare .franchise_compare_table col.col_group { width: 7%; }
    .sec_franchise_compare .franchise_compare_table col.col_label { width: 17.6%; }
    .sec_franchise_compare .franchise_compare_table col.col_gs { width: 25.1%; }
    .sec_franchise_compare .franchise_compare_table th,
    .sec_franchise_compare .franchise_compare_table td { padding: 12px 16px; font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .sec_franchise_compare .franchise_compare_table thead th > strong { font-size: 1.4rem; font-weight: 700; line-height: 1.4; letter-spacing: -0.01em; }
    .sec_franchise_compare .franchise_compare_table thead td > strong { font-size: 1.6rem; font-weight: 700; line-height: 1.24; letter-spacing: 0; }
    .sec_franchise_compare .franchise_compare_table thead td > span { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .sec_franchise_compare .franchise_compare_table tbody th[scope="rowgroup"] { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .sec_franchise_compare .franchise_compare_table tbody td .txt_emphasis { font-size: 1.6rem; line-height: 1.24; letter-spacing: 0; }

    .sec_operation .section_header, .sec_life .section_header { margin-bottom: 60px; }
    .sec_life .icon_card_list.col_02 { gap: 0; }
    .icon_card_topic .sub_header { margin-bottom: 24px; }
    .icon_card_topic + .icon_card_topic { margin-top: 60px; }
    .icon_card_list { gap: 10px; }
    .icon_card_list.col_02, .icon_card_list.col_03 { grid-template-columns: 1fr; }
    .icon_card_list > li > article { padding: 16px; border-radius: 12px; gap: 12px; }
    .icon_card_list > li > article > .icon { width: 60px; height: 60px; }
    .icon_card_list > li > article > div > dl > dt { font-size: 1.8rem; line-height: 1.5; letter-spacing: 0; }
    .icon_card_list > li > article > div > dl > dt + dd { margin-top: 8px; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .icon_card_list > li > article > div > ul.list_note > li > p {  font-size: 1.2rem; line-height: 1.2; letter-spacing: 0; }
    .icon_card_list > li > article > div > .button_area { display: flex; justify-content: flex-end; }
    .icon_card_list > li > article > div > .button_area .btn_mid { width: 230px; height: 62px; margin-top: 16px; margin-left: auto; padding: 7px 12px; justify-content: flex-end; }
    .icon_card_list.type_02 { border: 0; }
    .icon_card_row:first-child .icon_card_list.type_02 > li > article { padding: 24px 0; }
    .icon_card_row:first-child .icon_card_list.type_02 > li:first-child > article:first-child { padding: 0 0 24px; }
    .icon_card_row .icon_card_list.type_02 > li > article { padding: 24px 0; border: 0; border-bottom: 1px solid #E5E5E9; border-radius: 0; }

    .store_list_wrap { margin-top: 60px; }
    .tab_intro { margin-bottom: 60px; font-size: 1.8rem; line-height: 1.4; }
    .store_count { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .store_count > strong { font-weight: 400; }
    .store_search { padding: 30px 20px; }
    .search_bottom_row { margin-top: 24px; padding-top: 24px; border-top: 1px solid #D7D7DF; flex-direction: column; gap: 50px; }
    .search_group_input { width: 100%; }
    .store_search_input { height: 52px; }
    .youth_popover { width: calc(100vw - 40px); max-width: 335px; top: calc(100% + 8px); right: auto; left: -20px; transform: none; }
    .chip_list { position: relative; }
    .chip_youth_wrap { position: static; }
    .store_list_bar { height: auto; margin-bottom: 16px; align-items: flex-end; gap: 12px; }
    .store_bar_right { justify-content: flex-end; }
    .sort_btn { height: 32px; padding: 0 10px; font-size: 1.3rem; }
    .view_btn { width: 32px; height: 32px; }
    .type_table_wrap.type2 { display: none; }
    .store_accordion_list { margin: 0 -20px; display: block; }
    .store_card_grid_wrap { gap: 8px; }
    .store_card_row { grid-template-columns: 1fr; }
    .detail_panel { padding: 16px; }
    .store_card_detail_row { margin-top: 0; }
    .store_accordion_list :deep(dt > a.acc_tit_btn.acc_tit_open), .store_accordion_list :deep(dt > a.acc_tit_btn.acc_tit_btn) { border: 0; }
    .store_accordion_list :deep(.board_type_toggle) { border-top: 1px solid #161616; }
    .store_accordion_list :deep(.detail_card) { padding: 20px; border: 0; border-radius: 12px; }
    .store_accordion_list :deep(dd.acc_panel > .acc_panel_inner > .acc_panel_cont) { padding: 30px 20px !important; background-color: #F8F8F8 !important; }
    .store_accordion_list :deep(dd.acc_panel.acc_show) { border: 0; }
    .accordion_badges { margin-top: 6px; }
    .sec_diagram header { margin-bottom: 32px; }


    /* 상담 및 신청청 */
    .consent_box { padding: 24px 20px; }
    .consent_box > h3 { font-size: 2rem; line-height: 1.35; }
    .consent_list { margin-top: 16px; }
    .consent_list > li > p { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .consent_notice_area { margin-top: 16px; padding-top: 16px; display: flex; flex-direction: column; align-items: flex-start; gap: 12px; }
    .consent_notice_area > p { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .consent_radio > span { font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .apply_form .form_field_experience { gap: 20px; align-items: center; }
    .apply_form .form_field_experience :deep(.input_wrap) { width: auto !important; flex: 0 0 auto; max-width: none; }
    .apply_form .form_field_experience :deep(.input_wrap .check) { min-height: 24px; padding: 0 0 0 32px !important; margin: 0; border: 0; background-color: transparent; border-radius: 0; display: inline-block !important; }
    .apply_form .form_field_experience :deep(.input_wrap .check input[type="checkbox"] + .label) { padding: 0 !important; display: inline-block !important; color: #161616; font-size: 1.6rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; white-space: nowrap; }
    .apply_form .form_field_experience :deep(.input_wrap .check input[type="checkbox"] + .label::before) { content: "" !important; width: 24px !important; height: 24px !important; margin: 0 !important; background-color: #ffffff !important; border: 1px solid #c4c4d0 !important; border-radius: 8px !important; box-sizing: border-box !important; position: absolute !important; top: 0 !important; left: 0 !important; display: block !important; }
    .apply_form .form_field_experience :deep(.input_wrap .check input[type="checkbox"] + .label::after) { width: 6px !important; height: 9px !important; border: 2px solid #ffffff !important; border-top: 0 !important; border-left: 0 !important; top: 5px !important; left: 9px !important; transform: rotate(45deg) !important; background: none !important; border-radius: 0 !important; }
    .apply_form .form_field_experience :deep(.input_wrap .check input[type="checkbox"]:checked + .label::before) { background-color: #107af2 !important; border-color: #107af2 !important; }
    .apply_form .form_field_experience :deep(.input_wrap .check input[type="checkbox"]:checked + .label::after) { content: "" !important; display: block !important; }
    .sec_consult_startup { max-width: none; }
    .apply_form .form_body{padding: 30px 0;}
    .apply_form .form_body > .form_row:first-child > .col_item:first-child{padding:0 0 20px 0;}
    .apply_form .form_body .form_row.col_02 .col_item .forn_field_radio{padding:0;}
    .apply_form .form_body .form_row.col_02 { max-width: none; padding:0; grid-template-columns: 1fr; gap: 0; }
    .apply_form .form_body .form_row .form_label { font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .apply_form .form_body .form_row_calendar :deep(.consult_calendar),
    .apply_form .form_body .form_row_calendar :deep(.consult_time_picker) { max-width: none; }
    .apply_form .form_field :deep(.input_wrap),
    .apply_form .form_field :deep(.select) { width: 100%; max-width: none; }
    .apply_form .form_row_textarea .form_field :deep(.textarea_wrap) { width: 100%; max-width: none; }
    .apply_form .form_field_birth :deep(.select) { max-width: none; flex: 1; min-width: 0; }
    .apply_form .form_field_open :deep(.input_wrap) { max-width: none; flex: 1; min-width: 0; }
    .apply_form .form_field_region { flex-direction: column; align-items: stretch; }
    .apply_form .form_row_region :deep(.select) { max-width: none; flex: 1 1 100%; width: 100%; }
    .apply_form .form_field_calendar :deep(.input_wrap) { max-width: none; }
    .manager_card { max-width: none; margin-top: 0; padding: 16px; gap: 16px; }
    .consult_manager_photo { width: 50px; height: 50px; }
    .manager_name { font-size: 1.6rem; line-height: 1.24; }
    .apply_form .form_body .form_row{padding:20px 0;}
    .apply_form .form_body .form_row.col_02 .col_item{padding:20px 0px;}
    .apply_form .button_area{ padding-top:40px; border-top:1px solid #E5E5E9; }
    .apply_form .button_area :deep(.primary){width:100%; max-width:100%; }
    .seminar_wrap{margin-top:40px;}
    .manager_card .manager_header > p{font-size: 1.4rem;line-height: 1.4;letter-spacing: -0.01em;}
    .manager_card .manager_header > strong{font-size: 1.8rem;line-height: 1.5 ;letter-spacing: 0%;
}
    .seminar_region_pick > .seminar_region_list { grid-template-columns: 1fr; }
    .seminar_region_card { width: 100%; max-width: 100%; }
    .seminar_month_title{font-size: 2.4rem;line-height: 1.35;}
    .seminar_region_pick > .seminar_month_head{margin: 0 0 24px 0;}
    .seminar_month_head > .seminar_nav_btn{width:40px; height:40px;}
    .seminar_region_card{padding:16px;}
    .seminar_region_card_head > .seminar_region_name{font-size: 2rem;line-height: 1.35;letter-spacing: -0.01em;}
    .seminar_region_card_head > .seminar_region_addr{
font-size: 1.4rem;
line-height: 1.4;
letter-spacing: -0.01em;
}
    /* 우측 하단 sticky 메뉴 */
    .quick_menu { display: none; }
}
</style>
