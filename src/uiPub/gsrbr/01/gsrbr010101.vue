<template>
    <div class="brand">
        <section ref="sectionRef" class="sec_brand_visual">
            <div class="sticky">
                <div ref="bgWrapRef" class="bg_wrap">
                    <div class="bg"></div>
                    <div class="visual_inner">
                        <div class="txt_area">
                            <p ref="textParaRef">
                                <span>일상생활의 중심</span>
                                <span>하루의 시작<em class="m_gs25"> GS25</em></span>
                            </p>
                            <div ref="logoWrapRef" class="logo_wrap">
                                <img :src="imgLogo" alt="GS25" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="brand_kv"></section>

        <section ref="aboutSectionRef" class="sec_brand_about">
            <div class="about_inner">
                <p class="pc_txt">
                    <span>대한민국 토종 브랜드의 자존심을 지키고 있는 GS25는</span>
                    <span>'수익을 낼 수 있는 가맹점을 늘린다'는 프랜차이즈 사업의 대원칙을</span>
                    <span>변함없이 지켜온 결과, 개발점 수익성이 가장 높은 국내 최고의 편의점 브랜드로</span>
                    <span>자리매김하였습니다.</span>
                </p>
                <p class="pc_txt">
                    <span>이는 '한국에서 가장 존경받는 기업' 16년 연속 1위,</span>
                    <span>한국서비스 품질지수(KS-SQI) 1위 총 19회 수상 등 공신력 있는 대외 기관의</span>
                    <span>평가 결과로 이어지고 있습니다.</span>
                </p>

                <p class="mo_txt">
                    대한민국 토종 브랜드의<br />
                    자존심을 지키고 있는 GS25는<br />
                    '수익을 낼 수 있는 가맹점을 늘린다'는<br />
                    프랜차이즈 사업의 대원칙을<br />
                    변함없이 지켜온 결과,<br />
                    개발점 수익성이 가장 높은 국내 최고의<br />
                    편의점 브랜드로 자리매김하였습니다.<br />
                </p>
                <p class="mo_txt">
                    이는<br />
                    '한국에서 가장 존경받는 기업' 16년 연속 1위,<br />
                    한국서비스 품질지수(KS-SQI) 1위<br />
                    총 19회 수상 등 공신력 있는 대외 기관의<br />
                    평가 결과로 이어지고 있습니다.<br />
                </p>

            </div>
        </section>

        <section class="sec_brand_str">
            <div class="str_inner">
                <header class="str_header">
                    <h2>당신 곁에는 언제나<br />GS25가 있습니다.</h2>
                    <div class="str_actions">
                        <a
                            href="#none"
                            class="btn_store_find"
                            data-popid="pop_store_find"
                            data-type="lg"
                            data-cont="store_find"
                            @click.prevent="openModal"
                        >매장 찾기</a>
                        <div class="sns_wrap">
                            <a href="#none" class="btn_sns btn_sns_insta" aria-label="인스타그램"></a>
                            <a href="#none" class="btn_sns btn_sns_yt" aria-label="유튜브"></a>
                        </div>
                    </div>
                </header>
                <ul class="brand_acc">
                    <li
                        v-for="(item, i) in strItems"
                        :key="i"
                        class="acc_item"
                        :class="{ is_open: openAcc === i }"
                    >
                        <div class="acc_inner">
                            <div class="acc_body">
                                <button
                                    type="button"
                                    class="acc_btn"
                                    :aria-expanded="openAcc === i"
                                    @click="toggleAcc(i)"
                                    v-html="item.title"
                                ></button>
                                <div
                                    :ref="el => { if (el) descRefs[i] = el }"
                                    class="acc_desc_wrap"
                                >
                                    <p class="acc_desc" v-html="item.desc"></p>
                                </div>
                            </div>
                            <div
                                :ref="el => { if (el) imgRefs[i] = el }"
                                class="acc_img_wrap"
                            >
                                <img :src="item.img" alt="" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>

    <div class="brand_content">
        <Tabs
            :model-value="depth1ActiveIdx"
            tab-class="type_01"
            :tab-items="depth1Tabs"
            :tab-slide="false"
            @change="onDepth1Change"
        />
        <Tabs
            v-if="depth1ActiveIdx === 0"
            v-model="activeTab"
            tab-class="type_02"
            :tab-items="depth2Tabs"
            :tab-slide="false"
        />
        <Tabs
            v-if="depth1ActiveIdx === 2"
            v-model="storeActiveTab"
            tab-class="type_02"
            :tab-items="storeTabs"
            :tab-slide="false"
        />
        <Tabs
            v-if="depth1ActiveIdx === 3"
            v-model="winwinActiveTab"
            tab-class="type_02"
            :tab-items="winwinTabs"
            :tab-slide="false"
        />

        <!-- 탭 0: 차별화 상품 -->
        <div v-show="depth1ActiveIdx === 0 && activeTab === 0" class="brand_panel">
            <PanelHeader :hero="tab0.hero" :hero-alt="tab0.heroAlt" :title="tab0.title" :desc="tab0.subtitle" />

            <ul v-if="tab0.cards && tab0.cards.length && !isMobileView" class="diff_card_grid" role="list">
                <li v-for="(card, c) in tab0.cards" :key="c">
                    <article class="diff_card">
                        <figure>
                            <img :src="card.image" :alt="card.alt || ''" width="460" height="320" />
                        </figure>
                        <div>
                            <h3>{{ card.title }}</h3>
                            <p>{{ card.desc }}</p>
                        </div>
                    </article>
                </li>
            </ul>
            <Swiper
                v-if="tab0.cards && tab0.cards.length && isMobileView"
                class="diff_card_swiper"
                :space-between="8"
                slides-per-view="auto"
            >
                <SwiperSlide v-for="(card, c) in tab0.cards" :key="c">
                    <article class="diff_card">
                        <figure>
                            <img :src="card.image" :alt="card.alt || ''" width="460" height="320" />
                        </figure>
                        <div>
                            <h3>{{ card.title }}</h3>
                            <p>{{ card.desc }}</p>
                        </div>
                    </article>
                </SwiperSlide>
            </Swiper>

            <DiffQrRow v-if="tab0.qr" :title="tab0.qr.title" :desc="tab0.qr.desc" />
        </div>

        <!-- 탭 1: CAFE25 -->
        <div v-show="depth1ActiveIdx === 0 && activeTab === 1" class="brand_panel cafe_panel">
            <PanelHeader :hero="tab1.hero" :hero-alt="tab1.heroAlt" :title="tab1.title" :desc="tab1.subtitle" hero-bg="#fff" />

            <section v-for="(sec, i) in tab1.sections" :key="i">
                <SectionHeader :title="sec.title" :desc="sec.desc" :source="sec.source" />

                <!-- 카드형 -->
                <template v-if="sec.type === 'cards'">
                    <ul v-if="!isMobileView" class="cafe25_card_list" role="list">
                        <li v-for="(card, c) in sec.cards" :key="c">
                            <div>
                                <img :src="card.image" :alt="card.alt || ''" />
                            </div>
                        </li>
                    </ul>
                    <Swiper
                        v-else
                        class="cafe25_card_swiper"
                        :space-between="8"
                        slides-per-view="auto"
                    >
                        <SwiperSlide v-for="(card, c) in sec.cards" :key="c">
                            <div class="cafe25_card_slide">
                                <img :src="card.image" :alt="card.alt || ''" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </template>

                <!-- 이미지형 -->
                <figure v-else-if="sec.type === 'image'" class="cafe25_img_wrap">
                    <img :src="sec.image" :alt="sec.imageAlt || ''" width="938" height="472" />
                </figure>

                <!-- 분할형 (이미지 + 테이블) -->
                <div v-else-if="sec.type === 'split'" class="cafe25_split">
                    <div class="cafe25_split_img">
                        <img :src="isMobileView && sec.imageMo ? sec.imageMo : sec.image" :alt="sec.imageAlt || ''" />
                    </div>
                    <div class="cafe25_split_table">
                        <table class="cafe25_table">
                            <thead>
                                <tr>
                                    <th
                                        v-for="(col, ci) in sec.columns"
                                        :key="ci"
                                        scope="col"
                                        :style="{ width: col.width + 'px', textAlign: col.align }"
                                    ><span>{{ col.label }}</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, ri) in sec.rows" :key="ri">
                                    <td v-for="(col, ci) in sec.columns" :key="ci" :style="{ textAlign: col.align }"><span>{{ row[col.key] }}</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- 테이블형 -->
                <div v-else-if="sec.type === 'table'" class="cafe25_table_wrap">
                    <!-- PC: 기존 테이블 -->
                    <table v-if="!isMobileView" class="cafe25_table">
                        <thead>
                            <tr>
                                <th
                                    v-for="(col, ci) in sec.columns"
                                    :key="ci"
                                    scope="col"
                                    :style="{ width: col.width + 'px', textAlign: col.align }"
                                ><span>{{ col.label }}</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, ri) in sec.rows" :key="ri">
                                <td v-for="(col, ci) in sec.columns" :key="ci" :style="{ textAlign: col.align }">
                                    <img v-if="ci === 0 && row.flag" :src="row.flag" :alt="row.country" class="flag_icon" width="24" height="24" />
                                    <span>{{ row[col.key] }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- Mobile: row별 Swiper -->
                    <template v-if="isMobileView">
                        <Swiper
                            :modules="[Pagination]"
                            :slides-per-view="1"
                            :pagination="{ el: '.cafe25_table_pagination', clickable: true }"
                            class="cafe25_table_swiper"
                        >
                            <SwiperSlide v-for="(row, ri) in sec.rows" :key="ri">
                                <table class="tbl_mo">
                                    <tbody>
                                        <tr v-for="(col, ci) in sec.columns" :key="ci">
                                            <th scope="row" style="width: 96px"><span>{{ col.label }}</span></th>
                                            <td>
                                                <img v-if="ci === 0 && row.flag" :src="row.flag" :alt="row.country" class="flag_icon" width="24" height="24" />
                                                <span>{{ row[col.key] }}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </SwiperSlide>
                        </Swiper>
                        <div class="cafe25_table_pagination"></div>
                    </template>
                </div>
            </section>
        </div>

        <!-- 탭 2: CHICKEN25 -->
        <div v-show="depth1ActiveIdx === 0 && activeTab === 2" class="brand_panel chicken_panel">
            <PanelHeader :hero="tab2.hero" :hero-alt="tab2.heroAlt" :title="tab2.title" :desc="tab2.subtitle" />

            <section v-for="(sec, i) in tab2.sections" :key="i">
                <SectionHeader :title="sec.title" :desc="sec.desc" />

                <FeatureCards v-if="sec.type === 'text_cards'" :items="sec.cards" type="text" />
            </section>

            <ul v-if="tab2.imgGrid && tab2.imgGrid.length && !isMobileView" class="img_grid" role="list">
                <li v-for="(item, i) in tab2.imgGrid" :key="i">
                    <div>
                        <img :src="item.image" :alt="item.alt || ''" />
                    </div>
                </li>
            </ul>
            <Swiper
                v-else-if="tab2.imgGrid && tab2.imgGrid.length && isMobileView"
                class="img_grid_swiper"
                slides-per-view="auto"
                :space-between="8"
            >
                <SwiperSlide v-for="(item, i) in tab2.imgGrid" :key="i">
                    <div class="img_grid_slide">
                        <img :src="item.image" :alt="item.alt || ''" />
                    </div>
                </SwiperSlide>
            </Swiper>

            <DiffQrRow v-if="tab2.qr" :title="tab2.qr.title" :desc="tab2.qr.desc" />
        </div>

        <!-- 탭 3: GOPIZZA -->
        <div v-show="depth1ActiveIdx === 0 && activeTab === 3" class="brand_panel gopizza_panel">
            <PanelHeader :hero="tab3.hero" :hero-alt="tab3.heroAlt" :title="tab3.title" :desc="tab3.subtitle" />

            <section v-for="(sec, i) in tab3.sections" :key="i">
                <SectionHeader :title="sec.title" :desc="sec.desc" />

                <!-- 이미지 2열 -->
                <ul v-if="sec.type === 'img_grid' && !isMobileView" class="img_grid" role="list">
                    <li v-for="(item, gi) in sec.images" :key="gi">
                        <div>
                            <img v-if="item.image" :src="item.image" :alt="item.alt || ''" />
                        </div>
                    </li>
                </ul>
                <Swiper
                    v-else-if="sec.type === 'img_grid' && isMobileView"
                    class="img_grid_swiper"
                    slides-per-view="auto"
                    :space-between="8"
                >
                    <SwiperSlide v-for="(item, gi) in sec.images" :key="gi">
                        <div class="img_grid_slide">
                            <img v-if="item.image" :src="item.image" :alt="item.alt || ''" />
                        </div>
                    </SwiperSlide>
                </Swiper>

                <!-- 단일 이미지 -->
                <figure v-else-if="sec.type === 'image'" class="gopizza_img_wrap">
                    <img v-if="sec.image" :src="sec.image" :alt="sec.imageAlt || ''" />
                </figure>

                <!-- 메뉴 소개 (REGULAR / GRAB 2패널) -->
                <ul v-else-if="sec.type === 'menu'" class="gopizza_menu">
                    <li v-for="(pnl, pi) in sec.panels" :key="pi" class="gopizza_menu_panel">
                        <div>
                            <img v-if="pnl.image" :src="pnl.image" :alt="pnl.size" />
                        </div>
                        <div class="gopizza_menu_info">
                            <div class="gopizza_menu_title">
                                <strong>{{ pnl.size }}</strong>
                                <div>
                                    <span v-for="(tag, ti) in pnl.tags" :key="ti" class="gopizza_menu_tag">{{ tag }}</span>
                                </div>
                            </div>
                            <!-- PC: 기존 테이블 -->
                            <div v-if="!isMobileView" class="com_table_wrap">
                                <table class="com_table com_table_col">
                                    <thead>
                                        <tr>
                                            <th
                                                v-for="(col, ci) in pnl.columns"
                                                :key="ci"
                                                scope="col"
                                                :style="{ textAlign: col.align }"
                                            >{{ col.label }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(row, ri) in pnl.rows" :key="ri">
                                            <td
                                                v-for="(col, ci) in pnl.columns"
                                                :key="ci"
                                                :style="{ textAlign: col.align }"
                                            >
                                                <span v-if="ci === 0" class="gopizza_menu_name">
                                                    {{ row[col.key] }}
                                                    <em v-if="row.badge" class="gopizza_badge_best">{{ row.badge }}</em>
                                                </span>
                                                <span v-else>{{ row[col.key] }}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- Mobile: row별 Swiper -->
                            <template v-if="isMobileView">
                                <Swiper
                                    :modules="[Pagination]"
                                    :slides-per-view="1"
                                    :pagination="{ el: `.gopizza_menu_pagi_${pnl.size.replace(/[^a-z0-9]/gi, '')}`, clickable: true }"
                                    class="cafe25_table_swiper"
                                >
                                    <SwiperSlide v-for="(row, ri) in pnl.rows" :key="ri">
                                        <table class="tbl_mo">
                                            <tbody>
                                                <tr v-for="(col, ci) in pnl.columns" :key="ci">
                                                    <th scope="row" style="width: 136px"><span>{{ col.label }}</span></th>
                                                    <td>
                                                        <span v-if="ci === 0" class="gopizza_menu_name">
                                                            {{ row[col.key] }}
                                                            <em v-if="row.badge" class="gopizza_badge_best">{{ row.badge }}</em>
                                                        </span>
                                                        <span v-else>{{ row[col.key] }}</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </SwiperSlide>
                                </Swiper>
                                <div :class="`gopizza_menu_pagi_${pnl.size.replace(/[^a-z0-9]/gi, '')} gopizza_table_pagination`"></div>
                            </template>
                        </div>
                    </li>
                </ul>

                <!-- 배달·픽업 앱 (2열) -->
                <ul v-else-if="sec.type === 'phone_grid' && !isMobileView" class="img_grid" role="list">
                    <li v-for="(item, ii) in sec.items" :key="ii">
                        <img v-if="item.image" :src="item.image" :alt="item.alt || ''" />
                    </li>
                </ul>
                <Swiper
                    v-else-if="sec.type === 'phone_grid' && isMobileView"
                    class="img_grid_swiper"
                    slides-per-view="auto"
                    :space-between="8"
                >
                    <SwiperSlide v-for="(item, ii) in sec.items" :key="ii">
                        <div class="img_grid_slide">
                            <img v-if="item.image" :src="item.image" :alt="item.alt || ''" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <div class="diff_bottom_row">
                <DiffQrRow v-if="tab3.qr" :title="tab3.qr.title" :desc="tab3.qr.desc" />
                <a v-if="tab3.link" :href="tab3.link.url" class="gopizza_link" target="_blank" rel="noopener noreferrer">
                    <figure aria-hidden="true">
                        <img v-if="isMobileView" :src="imgQrMo" alt="" />
                    </figure>
                    <div>
                        <strong>{{ tab3.link.title }}</strong>
                        <p v-html="isMobileView && tab3.link.descMo ? tab3.link.descMo : tab3.link.desc" />
                    </div>
                </a>
            </div>
        </div>

        <!-- depth1 = 1: 신선강화점 -->
        <div v-if="depth1ActiveIdx === 1" class="brand_panel sinsen_panel">
            <PanelHeader :hero="sinsen.hero" :hero-alt="sinsen.heroAlt" :title="sinsen.title" :desc="sinsen.subtitle" />

            <section v-for="(sec, i) in sinsen.sections" :key="i">
                <SectionHeader :title="sec.title" :desc="sec.desc" :mobile-desc="sec.mobileDesc" />

                <!-- 특징 카드 4열 -->
                <FeatureCards v-if="sec.features" :items="sec.features" type="icon" no-pagination class="sinsen_feature" />

                <!-- 배송 흐름도 -->
                <div v-if="sec.flow" class="info_card info_card_flow">
                    <strong v-if="sec.flowTitle">{{ sec.flowTitle }}</strong>
                    <p v-if="sec.flowNote">{{ sec.flowNote }}</p>
                    <img :src="isMobileView ? imgFlowMo : imgFlow" alt="" class="sinsen_flow_img" />
                </div>

                <!-- 운영 장점 체크리스트 카드 -->
                <div v-if="sec.advantages" class="info_card">
                    <ul class="sinsen_check_list">
                        <li v-for="(item, ii) in sec.advantages.items" :key="ii">
                            <div>
                                <span>{{ item.text }}</span>
                                <span v-if="item.note" class="sinsen_check_note">{{ item.note }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>

        <!-- depth1 = 2: 매장/서비스 -->
        <!-- 생활 서비스 -->
        <div v-show="depth1ActiveIdx === 2 && storeActiveTab === 0" class="brand_panel pop_panel">
            <!-- 3depth 탭 네비 -->
            <nav class="service_tab_wrap" role="tablist" aria-label="생활 서비스">
                <button
                    v-for="(tab, i) in store.tabs[0].serviceTabs"
                    :key="i"
                    type="button"
                    role="tab"
                    :aria-selected="serviceActiveTab === i"
                    class="service_tab_item"
                    :class="{ is_active: serviceActiveTab === i }"
                    @click="serviceActiveTab = i"
                >
                    <span class="service_tab_icon" aria-hidden="true"></span>
                    <span class="service_tab_label">{{ tab.label }}</span>
                </button>
            </nav>

            <!-- 3depth 패널 -->
            <div
                v-for="(tab, i) in store.tabs[0].serviceTabs"
                :key="i"
                v-show="serviceActiveTab === i"
                class="service_panel"
            >
                <!-- 교통카드 충전: LNB + 콘텐츠 2열 레이아웃 -->
                <template v-if="i === 2">
                    <PanelHeader :title="tab.pageTitle" :desc="tab.pageDesc" />
                    <div class="pop_wrap">
                        <nav class="pop_lnb" aria-label="팝카드 메뉴">
                            <ul>
                                <li v-for="(lnb, li) in tab.lnbItems" :key="li">
                                    <button
                                        type="button"
                                        :class="{ is_active: popLnbActiveIdx === li }"
                                        @click="scrollToSection(li)"
                                    >{{ lnb }}</button>
                                </li>
                            </ul>
                        </nav>
                        <div class="pop_content">
                            <Accordion :multiple="true" class="pop_sec_acc">
                                <!-- 팝카드란? -->
                                <AccordionItem item-key="pop0" @opened="onPopCard0Opened">
                                    <template #title>{{ tab.popTitle }}</template>
                                    <section id="pop-sec-0" data-pop-sec="0" class="pop_sec">
                                        <SectionHeader :title="tab.popTitle" :desc="tab.popDesc">
                                            <p class="pop_exclude">{{ tab.popExclude }}</p>
                                        </SectionHeader>
                                        <Swiper
                                            class="pop_card_swiper"
                                            slides-per-view="auto"
                                            :space-between="20"
                                            :observer="true"
                                            :observe-parents="true"
                                            @swiper="onPopCardSwiper"
                                        >
                                            <SwiperSlide v-for="(card, ci) in tab.popCards" :key="ci" class="pop_card_item">
                                                <strong class="pop_card_name">{{ card.name }}</strong>
                                                <figure class="pop_card_thumb">
                                                    <picture>
                                                        <source v-if="card.imgMo" media="(max-width: 768px)" :srcset="card.imgMo" />
                                                        <img :src="card.img" :alt="card.name" />
                                                    </picture>
                                                </figure>
                                                <div class="pop_card_body">
                                                    <p class="pop_card_desc">{{ card.desc }}</p>
                                                    <p v-if="card.note" class="pop_card_note" :class="{ is_warn: card.noteWarn }">{{ card.note }}</p>
                                                    <div v-if="card.logos && card.logos.length" class="pop_card_logos">
                                                        <img
                                                            v-for="(logo, li) in card.logos"
                                                            :key="li"
                                                            :src="logo.src"
                                                            :width="logo.w"
                                                            :height="logo.h"
                                                            alt=""
                                                            class="pop_logo_thumb"
                                                        />
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </section>
                                </AccordionItem>

                                <!-- 교통카드 충전 서비스 -->
                                <AccordionItem item-key="pop-charging" @opened="onChargingOpened">
                                    <template #title>{{ tab.chargingTitle }}</template>
                                    <section class="pop_sec">
                                        <SectionHeader :title="tab.chargingTitle" />
                                        <!-- PC: 기존 flex 레이아웃 -->
                                        <ul class="charging_service_list">
                                            <li v-for="(item, ci) in tab.chargingItems" :key="ci" class="charging_service_item">
                                                <img :src="item.img" :alt="item.name" />
                                            </li>
                                        </ul>
                                        <!-- 모바일: Swiper -->
                                        <Swiper
                                            class="charging_service_swiper"
                                            slides-per-view="auto"
                                            :space-between="8"
                                            :observer="true"
                                            :observe-parents="true"
                                            @swiper="onChargingSwiper"
                                        >
                                            <SwiperSlide v-for="(item, ci) in tab.chargingItems" :key="ci" class="charging_service_item">
                                                <img :src="item.img" :alt="item.name" />
                                            </SwiperSlide>
                                        </Swiper>
                                        <p class="charging_service_note">
                                            <span class="charging_note_label">{{ tab.chargingNote.label }}</span>
                                            {{ tab.chargingNote.text }}
                                        </p>
                                    </section>
                                </AccordionItem>

                                <!-- 교통 사용처 안내 -->
                                <AccordionItem item-key="pop1">
                                    <template #title>{{ tab.lnbItems[1] }}</template>
                                    <section id="pop-sec-1" data-pop-sec="1" class="pop_sec">
                                        <div class="usage_header">
                                            <SectionHeader :title="tab.lnbItems[1]" />
                                            <select
                                                class="usage_select_box"
                                                v-model="trafficSelectVal"
                                                aria-label="교통 사용처 선택"
                                            >
                                                <option value="" disabled>선택하세요</option>
                                                <option v-for="o in tab.trafficSelectOptions" :key="o.value" :value="o.value">{{ o.label }}</option>
                                            </select>
                                        </div>

                                        <div v-if="trafficSelectVal && tab.trafficOptions[trafficSelectVal]" class="usage_group">
                                            <h4 class="usage_group_title">{{ tab.trafficOptions[trafficSelectVal].title }}</h4>
                                            <ul v-if="trafficSelectVal !== 'express' && tab.trafficOptions[trafficSelectVal].bullets?.length" class="list_dotted">
                                                <li v-for="(item, bi) in tab.trafficOptions[trafficSelectVal].bullets" :key="bi">{{ item }}</li>
                                            </ul>
                                            <!-- 고속버스일 때만 로고 표시 -->
                                            <ul v-if="trafficSelectVal === 'express'" class="logo_list">
                                                <li v-for="(logo, li) in tab.trafficOptions[trafficSelectVal].logos" :key="li">
                                                    <img :src="logo" :alt="tab.trafficOptions[trafficSelectVal].bullets[li]" />
                                                </li>
                                            </ul>
                                        </div>
                                    </section>
                                </AccordionItem>

                                <!-- 유통 사용처 안내 -->
                                <AccordionItem item-key="pop2">
                                    <template #title>{{ tab.lnbItems[2] }}</template>
                                    <section id="pop-sec-2" data-pop-sec="2" class="pop_sec">
                                        <div class="usage_header">
                                            <SectionHeader :title="tab.lnbItems[2]" />
                                            <select
                                                class="usage_select_box"
                                                v-model="retailSelectVal"
                                                aria-label="유통 사용처 선택"
                                            >
                                                <option value="" disabled>선택하세요</option>
                                                <option v-for="o in tab.retailSelectOptions" :key="o.value" :value="o.value">{{ o.label }}</option>
                                            </select>
                                        </div>

                                        <div v-if="retailSelectVal && tab.retailOptions[retailSelectVal]" class="usage_group">
                                            <h4 class="usage_group_title">{{ tab.retailOptions[retailSelectVal].title }}</h4>
                                            <p v-if="tab.retailOptions[retailSelectVal].note" class="retail_note">{{ tab.retailOptions[retailSelectVal].note }}</p>
                                            <!-- 로고 그리드 -->
                                            <ul v-if="tab.retailOptions[retailSelectVal].items" class="logo_list">
                                                <li v-for="(item, ri) in tab.retailOptions[retailSelectVal].items" :key="ri">
                                                    <img v-if="item.logo" :src="item.logo" :alt="item.brand" />
                                                    <span v-else class="logo_placeholder"></span>
                                                </li>
                                            </ul>
                                            <!-- 텍스트 목록 -->
                                            <ul v-else-if="tab.retailOptions[retailSelectVal].bullets?.length && !tab.retailOptions[retailSelectVal].bullets[0]?.dt" class="list_dotted">
                                                <li v-for="(bullet, bi) in tab.retailOptions[retailSelectVal].bullets" :key="bi">{{ bullet }}</li>
                                            </ul>
                                            <!-- 정의 목록 (dt/dd) -->
                                            <dl v-else-if="tab.retailOptions[retailSelectVal].bullets?.length" class="usage_def_list">
                                                <template v-for="(bullet, bi) in tab.retailOptions[retailSelectVal].bullets" :key="bi">
                                                    <dt>{{ bullet.dt }}</dt>
                                                    <dd>{{ bullet.dd }}</dd>
                                                </template>
                                            </dl>
                                            <p v-if="tab.retailOptions[retailSelectVal].footnote" class="retail_footnote">{{ tab.retailOptions[retailSelectVal].footnote }}</p>
                                        </div>
                                    </section>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </template>

                <!-- 기프트카드 패널 -->
                <template v-else-if="i === 3">
                    <PanelHeader :hero="tab.hero" :hero-alt="tab.heroAlt" :title="tab.title" :desc="tab.desc" />
                    <section>
                        <SectionHeader :title="tab.advantageTitle" />
                        <div class="gift_advantage_cards">
                            <FeatureCards :items="tab.advantages" />
                        </div>
                    </section>

                    <section>
                        <SectionHeader :title="tab.brandTitle" />
                        <div class="gift_brand_slider">
                            <button type="button" class="gift_brand_nav gift_brand_prev" aria-label="이전">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </button>
                            <Swiper
                                :modules="[Pagination, Navigation]"
                                :slides-per-view="3"
                                :slides-per-group="3"
                                :space-between="14"
                                :breakpoints="{
                                    769: { slidesPerView: 6, slidesPerGroup: 6, spaceBetween: 12 }
                                }"
                                :speed="700"
                                :observer="true"
                                :observe-parents="true"
                                :navigation="{ prevEl: '.gift_brand_prev', nextEl: '.gift_brand_next' }"
                                :pagination="{ el: '.gift_brand_pagination', clickable: true }"
                                class="gift_brand_swiper"
                                @swiper="onGiftSwiper"
                            >
                                <SwiperSlide v-for="(brand, bi) in tab.brands" :key="bi">
                                    <figure class="gift_brand_card">
                                        <img :src="brand.img" :alt="brand.name" />
                                    </figure>
                                </SwiperSlide>
                            </Swiper>
                            <button type="button" class="gift_brand_nav gift_brand_next" aria-label="다음">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </button>
                        </div>
                        <div class="gift_brand_pagination"></div>
                    </section>
                    <section>
                        <SectionHeader :title="tab.purchaseTitle" :desc="tab.purchaseNote" />
                        <div class="gift_purchase_wrap">
                            <figure class="gift_purchase_img">
                                <img :src="tab.purchaseImg" alt="" />
                            </figure>
                            <ol class="gift_purchase_steps">
                                <li v-for="(step, si) in tab.purchaseSteps" :key="si" class="gift_purchase_step">
                                    <div class="gift_step_header">
                                        <em class="gift_step_num">{{ step.num }}</em>
                                        <strong class="gift_step_title" v-html="step.title"></strong>
                                    </div>
                                    <p class="gift_step_desc" v-html="step.desc"></p>
                                </li>
                            </ol>
                        </div>
                    </section>
                    <section>
                        <SectionHeader
                            :title="tab.usageTitle"
                            :desc="tab.usageDesc"
                            desc-tag="div"
                            class="gift_usage_heading"
                        />
                        <div class="gift_usage_wrap">
                            <div class="gift_usage_group">
                                <h3>{{ tab.onlineLabel }}</h3>
                                <Steps type="2" :items="tab.onlineSteps" />
                            </div>
                            <div class="gift_usage_group">
                                <h3>{{ tab.offlineLabel }}</h3>
                                <Steps type="2" :items="tab.offlineSteps" />
                            </div>
                        </div>
                    </section>
                </template>

                <!-- GS25 유심 요금제 패널 -->
                <template v-else-if="i === 4">
                    <PanelHeader :hero="tab.hero" :hero-alt="tab.heroAlt" :title="tab.title" :desc="tab.desc" />
                    <section>
                        <SectionHeader :title="tab.advantageTitle" />
                        <FeatureCards :items="tab.advantages" class="usim_advantage_cards" />
                    </section>
                    <section>
                        <SectionHeader :title="tab.introTitle" />
                        <div class="usim_plan_table_wrap">
                            <table class="usim_plan_table">
                                <thead>
                                    <tr>
                                        <th rowspan="2" scope="col">상품명</th>
                                        <th colspan="3" scope="col">제공량</th>
                                        <th rowspan="2" scope="col">정상 요금</th>
                                        <th rowspan="2" scope="col">프로모션 할인</th>
                                        <th rowspan="2" scope="col">월 기본요금<br />(제휴카드 이용 시)</th>
                                        <th rowspan="2" scope="col">타사 유사<br />요금제</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">데이터</th>
                                        <th scope="col">음성</th>
                                        <th scope="col">문자</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(plan, pi) in tab.plans" :key="pi">
                                        <td>{{ plan.name }}</td>
                                        <td class="usim_plan_data" v-html="plan.data.replace('\n', '<br />')"></td>
                                        <td>{{ plan.voice }}</td>
                                        <td>{{ plan.sms }}</td>
                                        <td>{{ plan.normalPrice }}</td>
                                        <td>{{ plan.discount }}</td>
                                        <td>
                                            {{ plan.monthly }}<br />
                                            <em class="usim_plan_dc">{{ plan.monthlyDc }}</em>
                                        </td>
                                        <td>{{ plan.competitor }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <section>
                        <SectionHeader :title="tab.benefitTitle" />
                        <ul class="usim_benefit_cards">
                            <li v-for="(card, ci) in tab.benefitCards" :key="ci" class="usim_benefit_card">
                                <figure class="usim_benefit_img">
                                    <img v-if="card.img" :src="card.img" :alt="card.imgAlt" />
                                </figure>
                                <div class="usim_benefit_body">
                                    <h4>{{ card.title }}</h4>
                                    <ul class="usim_benefit_list">
                                        <li v-for="(item, ii) in card.items" :key="ii">
                                            <span class="usim_benefit_icon"></span>
                                            <span>{{ item }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <SectionHeader :title="tab.purchaseTitle" />
                        <Steps type="2" :items="tab.purchaseSteps" />
                    </section>

                    <section>
                        <SectionHeader :title="tab.phoneTitle" />
                        <dl class="usim_phone_list">
                            <template v-for="(phone, pi) in tab.phones" :key="pi">
                                <dt>{{ phone.term }}</dt>
                                <dd>{{ phone.desc }}</dd>
                            </template>
                        </dl>
                    </section>

                </template>

                <!-- 하이패스 카드/단말기 패널 -->
                <template v-else-if="i === 5">
                    <PanelHeader :hero="tab.hero" :hero-alt="tab.heroAlt" :title="tab.title" :desc="tab.desc">
                        <ul class="list_caution">
                            <li>* 하이플러스카드에서 출시한 모든 카드를 충전하실 수 있습니다. (http://www.hipluscard.co.kr/)</li>
                            <li>* 하이패스카드(자동충전) 및 단말기를 구매하실 수 있습니다.</li>
                        </ul>
                    </PanelHeader>
                    <section>
                        <SectionHeader :title="tab.hipassStepTitle" />
                        <Steps type="2" :items="tab.hipassSteps" />
                    </section>
                    <section>
                        <SectionHeader :title="tab.hipassChargeTitle" :desc="tab.hipassChargeDesc" />
                    </section>
                    <section>
                        <SectionHeader :title="tab.hipassTerminalTitle" :desc="tab.hipassTerminalDesc" />
                        <div class="hipass_terminal_img">
                            <img :src="tab.hipassTerminalImg" :alt="tab.hipassTerminalImgAlt" />
                        </div>
                    </section>
                </template>

                <!-- 고속도로 미납 통행료 납부 패널 -->
                <template v-else-if="i === 6">
                    <PanelHeader :hero="tab.hero" :hero-alt="tab.heroAlt" :title="tab.title" :desc="tab.desc" />
                    <section class="sec_unpaid_advantage">
                        <SectionHeader :title="tab.serviceTitle" :desc="tab.serviceDesc" />
                        <FeatureCards :items="tab.serviceAdvantages" />
                    </section>
                    <section class="sec_unpaid_method">
                        <SectionHeader :title="tab.unpaidTitle" />
                        <Steps type="2" :items="tab.unpaidSteps" />
                    </section>
                </template>

                <!-- 온라인몰 편의점 결제 패널 (Figma 97:16410, 97:16422) -->
                <template v-else-if="i === 7">
                    <PanelHeader :hero="tab.hero" :hero-alt="tab.heroAlt" :title="tab.title" :desc="tab.desc" />
                    <section class="sec_mall_payment_advantage">
                        <SectionHeader :title="tab.serviceTitle" :desc="tab.serviceDesc" />
                        <FeatureCards :items="tab.serviceAdvantages" />
                    </section>
                    <section class="sec_mall_payment_method">
                        <SectionHeader :title="tab.mallPaymentTitle" />
                        <Steps type="2" :items="tab.mallPaymentSteps" />
                    </section>
                    <section class="sec_mall_sites">
                        <SectionHeader :title="tab.mallSiteTitle">
                            <p v-if="tab.mallSiteNote" class="mall_site_note">{{ tab.mallSiteNote }}</p>
                        </SectionHeader>
                        <!-- PC -->
                        <ul v-if="!isMobileView" class="mall_site_list">
                            <li v-for="(item, si) in tab.mallSiteItems" :key="si">
                                <figure>
                                    <div class="mall_site_thumb">
                                        <img :src="item.img" :alt="item.name" />
                                    </div>
                                    <figcaption>{{ item.name }}</figcaption>
                                </figure>
                            </li>
                        </ul>
                        <!-- 모바일: Swiper -->
                        <Swiper
                            v-else
                            slides-per-view="auto"
                            :space-between="8"
                            class="mall_site_swiper"
                        >
                            <SwiperSlide v-for="(item, si) in tab.mallSiteItems" :key="si">
                                <figure class="mall_site_figure">
                                    <div class="mall_site_thumb">
                                        <img :src="item.img" :alt="item.name" />
                                    </div>
                                    <figcaption>{{ item.name }}</figcaption>
                                </figure>
                            </SwiperSlide>
                        </Swiper>
                    </section>
                </template>

                <!-- 그 외 패널: 기본 구조 -->
                <template v-else>
                    <section>
                        <PanelHeader
                            :hero="tab.hero"
                            :hero-alt="tab.heroAlt"
                            :title="tab.title"
                            :desc="tab.desc"
                        />
                        <div v-if="tab.table" class="com_table_wrap">
                            <table class="com_table">
                                <tbody>
                                    <tr v-for="(row, ri) in tab.table.rows" :key="ri">
                                        <th scope="row">{{ row.head }}</th>
                                        <td>
                                            <div class="cash_table_cell">
                                                <span>{{ row.text }}</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </template>
            </div>
        </div>

        <!-- 택배&픽업 -->
        <div v-show="depth1ActiveIdx === 2 && storeActiveTab === 1" class="brand_panel">
            <nav class="service_tab_wrap" role="tablist" aria-label="택배&픽업 서비스">
                <button
                    v-for="(tab, i) in store.tabs[1].serviceTabs"
                    :key="i"
                    type="button"
                    role="tab"
                    :aria-selected="deliveryActiveTab === i"
                    class="service_tab_item"
                    :class="{ is_active: deliveryActiveTab === i }"
                    @click="deliveryActiveTab = i"
                >
                    <span class="service_tab_icon" aria-hidden="true"></span>
                    <span class="service_tab_label">{{ tab.label }}</span>
                </button>
            </nav>
            <div>
                <template v-for="(tab, i) in store.tabs[1].serviceTabs" :key="i">
                    <div v-show="deliveryActiveTab === i" class="service_panel">
                        <PanelHeader :hero="tab.hero" :hero-alt="tab.heroAlt" :title="tab.title" :desc="tab.desc">
                            <ul v-if="tab.notes && tab.notes.length" class="list_dotted">
                                <li v-for="(note, ni) in tab.notes" :key="ni">
                                    <p>{{ note.text }}</p>
                                    <p v-if="note.sub" class="note_sub">{{ note.sub }}</p>
                                </li>
                            </ul>
                        </PanelHeader>
                        <section v-if="tab.steps && tab.steps.length" class="sec_delivery_service">
                            <SectionHeader :title="tab.stepTitle" />
                            <Steps type="2" :items="tab.steps" />
                        </section>
                        <section v-if="tab.priceTable" class="sec_delivery_price_table">
                            <SectionHeader :title="tab.priceTable.title" />
                            <div class="com_table_wrap">
                                <table class="com_table com_table_col">
                                    <thead>
                                        <tr>
                                            <th v-for="(col, ci) in tab.priceTable.columns" :key="ci" scope="col">{{ col }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(row, ri) in tab.priceTable.rows" :key="ri">
                                            <td v-for="(cell, ci) in row.cells" :key="ci" v-html="cell"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                        <section v-if="tab.infoTable" class="sec_delivery_info_table">
                            <SectionHeader :title="tab.infoTable.title" />
                            <div class="com_table_wrap">
                                <table class="com_table">
                                    <tbody>
                                        <tr v-for="(row, ri) in tab.infoTable.rows" :key="ri">
                                            <th scope="row">{{ row.head }}</th>
                                            <td v-html="row.text"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                        <section v-if="tab.priceItems && tab.priceItems.length" class="sec_delivery_price">
                            <SectionHeader :title="tab.priceTitle" />
                            <div class="info_card">
                                <ul class="sinsen_check_list">
                                    <li v-for="(item, pi) in tab.priceItems" :key="pi">
                                        <div>
                                            <span>{{ item.text }}</span>
                                            <div v-if="item.subs && item.subs.length">
                                                <span v-for="(sub, si) in item.subs" :key="si" style="color: #67676f;">{{ sub }}</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section v-if="tab.cautionItems && tab.cautionItems.length" class="sec_delivery_caution">
                            <SectionHeader :title="tab.cautionTitle" />
                            <FeatureCards type="icon" :items="tab.cautionItems" />
                        </section>
                        <section v-if="tab.periodItems && tab.periodItems.length" class="sec_delivery_period">
                            <SectionHeader :title="tab.periodTitle" />
                            <ul class="list_dotted">
                                <li v-for="(item, pi) in tab.periodItems" :key="pi">
                                    <p>{{ item.text }}</p>
                                </li>
                            </ul>
                        </section>
                        <section v-if="tab.noticeItems && tab.noticeItems.length" class="sec_delivery_notice">
                            <SectionHeader :title="tab.noticeTitle" />
                            <Steps type="2" :items="tab.noticeItems" />
                        </section>
                        <section v-if="tab.chargeItems && tab.chargeItems.length" class="sec_delivery_charge">
                            <SectionHeader :title="tab.chargeTitle" />
                            <ul class="list_dotted">
                                <li v-for="(item, ii) in tab.chargeItems" :key="ii">
                                    <p>{{ item.text }}</p>
                                </li>
                            </ul>
                        </section>
                        <section v-if="tab.methodItems && tab.methodItems.length" class="sec_delivery_method">
                            <SectionHeader :title="tab.methodTitle" />
                            <ul class="list_dotted">
                                <li v-for="(item, ii) in tab.methodItems" :key="ii">
                                    <p>{{ item.text }}</p>
                                </li>
                            </ul>
                        </section>
                        <section v-if="tab.pickupItems && tab.pickupItems.length" class="sec_delivery_pickup">
                            <SectionHeader :title="tab.pickupTitle" />
                            <Steps type="2" :items="tab.pickupItems" />
                        </section>
                        <section v-if="tab.shoppingItems && tab.shoppingItems.length" class="sec_delivery_shopping">
                            <SectionHeader :title="tab.shoppingTitle" />
                            <ul class="list_dotted">
                                <li v-for="(item, ii) in tab.shoppingItems" :key="ii">
                                    <p v-html="item.text"></p>
                                </li>
                            </ul>
                        </section>
                    </div>
                </template>
            </div>
        </div>

        <!-- 공공요금수납 -->
        <div v-show="depth1ActiveIdx === 2 && storeActiveTab === 2" class="brand_panel">
            <PanelHeader
                :hero="store.tabs[2].hero"
                :hero-alt="store.tabs[2].heroAlt"
                :title="store.tabs[2].title"
            >
                <p class="brand_panel_desc">지로고지서에 편의점 수납용 바코드가 있다면 GS25편의점에서 24시간 365일 세금, 4대보험료 및 공과금의 편리한 납부가 가능한 서비스입니다.
                    기존지로 납부 외 휴대폰을 통한 모바일수납도 가능하며,납부공과금에 따라 현금과 계좌이체 및 신용카드까지 다양한 수단으로 납부가능합니다.</p>
            </PanelHeader>
            <section v-if="store.tabs[2].taxGroups && store.tabs[2].taxGroups.length" class="sec_tax_list">
                <SectionHeader :title="store.tabs[2].taxTitle" />
                <div class="tax_group_list">
                    <div v-for="(group, gi) in store.tabs[2].taxGroups" :key="gi" class="tax_group">
                        <h4 class="tax_group_subtitle">{{ group.subtitle }}</h4>
                        <ul v-if="group.isList" class="list_dotted">
                            <li v-for="(item, ii) in group.items" :key="ii"><p>{{ item }}</p></li>
                        </ul>
                        <template v-else>
                            <p v-for="(item, ii) in group.items" :key="ii" class="tax_group_desc">{{ item }}</p>
                        </template>
                    </div>
                </div>
            </section>
        </div>
        <!-- 상품권 판매 -->
        <div v-show="depth1ActiveIdx === 2 && storeActiveTab === 3" class="brand_panel">
            <PanelHeader
                :hero="store.tabs[3].hero"
                :hero-alt="store.tabs[3].heroAlt"
                :title="store.tabs[3].subtitle"
                :desc="store.tabs[3].desc"
            />
            <section v-if="store.tabs[3].voucherItems && store.tabs[3].voucherItems.length" class="sec_voucher">
                <SectionHeader :title="store.tabs[3].voucherTitle" />
                <ul class="voucher_list">
                    <li v-for="(item, vi) in store.tabs[3].voucherItems" :key="vi" class="voucher_item">
                        <div class="voucher_img">
                            <img :src="item.img" :alt="item.name" />
                        </div>
                        <div class="voucher_info">
                            <strong class="voucher_name">{{ item.name }}</strong>
                            <div class="voucher_tags">
                                <span v-for="(tag, ti) in item.tags" :key="ti" class="voucher_tag" :class="`tag_${tag.type}`">{{ tag.text }}</span>
                            </div>
                            <p class="voucher_desc">{{ item.desc }}</p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
        <!-- 상생협력: 운영지원제도 -->
        <div v-show="depth1ActiveIdx === 3 && winwinActiveTab === 0" class="brand_panel">
            <!-- 3depth 탭 네비 -->
            <nav class="service_tab_wrap" role="tablist" aria-label="운영지원제도">
                <button
                    v-for="(tab, i) in winwin.tabs[0].serviceTabs"
                    :key="i"
                    type="button"
                    role="tab"
                    :aria-selected="winwinServiceActiveTab === i"
                    class="service_tab_item"
                    :class="{ is_active: winwinServiceActiveTab === i }"
                    @click="winwinServiceActiveTab = i"
                >
                    <span class="service_tab_icon" aria-hidden="true"></span>
                    <span class="service_tab_label">{{ tab.label }}</span>
                </button>
            </nav>

            <!-- 3depth 패널 -->
            <div
                v-for="(tab, i) in winwin.tabs[0].serviceTabs"
                :key="i"
                v-show="winwinServiceActiveTab === i"
                class="service_panel"
            >
                <PanelHeader :title="tab.title">
                    <ul v-if="tab.notes && tab.notes.length" class="list_caution">
                        <li v-for="(note, ni) in tab.notes" :key="ni">{{ note.text }}</li>
                    </ul> 
                </PanelHeader>
                <ul v-if="tab.items && tab.items.length" class="winwin_item_list">
                    <li v-for="(item, ii) in tab.items" :key="ii" class="winwin_item">
                        <article>
                            <div class="winwin_item_icon" aria-hidden="true"></div>
                            <div class="winwin_item_content">
                                <div class="winwin_item_title">
                                    <span class="winwin_item_num">{{ item.num }}</span>
                                    <strong>
                                        {{ item.title }}
                                        <a v-if="item.link" :href="item.link" target="_blank" class="winwin_item_link" aria-label="링크 바로가기"></a>
                                    </strong>
                                </div>
                                <div class="winwin_item_body">
                                    <p v-if="item.desc" v-html="item.desc"></p>
                                    <ul v-if="item.bullets && item.bullets.length" class="winwin_bullet_list">
                                        <li v-for="(b, bi) in item.bullets" :key="bi">{{ b }}</li>
                                    </ul>
                                </div>
                            </div>
                        </article>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 상생협력: 참여제도 -->
        <div v-show="depth1ActiveIdx === 3 && winwinActiveTab === 1" class="brand_panel">
            <PanelHeader :hero="winwin.tabs[1].hero" :hero-alt="winwin.tabs[1].heroAlt" :title="winwin.tabs[1].title" :desc="winwin.tabs[1].desc" />
            <ul v-if="winwin.tabs[1].items && winwin.tabs[1].items.length" class="winwin_item_list">
                <li v-for="(item, ii) in winwin.tabs[1].items" :key="ii" class="winwin_item">
                    <article>
                        <div class="winwin_item_content">
                            <div class="winwin_item_title">
                                <span class="winwin_item_num">{{ item.num }}</span>
                                <strong>{{ item.title }}</strong>
                            </div>
                            <div class="winwin_item_body">
                                <p v-if="item.desc" class="winwin_item_desc" v-html="item.desc"></p>
                            </div>
                        </div>
                    </article>
                </li>
            </ul>
        </div>

        <!-- depth1 = 4: 밀박스/스낵바 -->
        <div v-if="depth1ActiveIdx === 4" class="brand_panel">
            <PanelHeader :hero="milbox.hero" :hero-alt="milbox.heroAlt" :title="milbox.title" />
            <section v-for="(sec, si) in milbox.sections" :key="si">
                <SectionHeader :title="sec.title" :desc="sec.desc">
                    <p v-if="sec.note" class="sec_note">{{ sec.note }}</p>
                </SectionHeader>
                <FeatureCards v-if="sec.items && sec.items.length" :items="sec.items" type="icon" class="milbox_feature" />
            </section>
        </div>

        <div v-if="!isMobileView" class="diff_actions">
            <Buttons btn-class="btn_back" @click="goBack">{{ langData.backLabel }}</Buttons>
        </div>
    </div>

    <div id="pop_store_find" class="modal_wrap">
        <div class="modal_container"></div>
    </div>
</template>

<script setup>
import { ref, nextTick, watch, onMounted, onUnmounted, onBeforeUnmount } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRouter } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import Tabs from "@/components/Tabs.vue";
import PanelHeader from "@/components/PanelHeader.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import Buttons from "@/components/Buttons.vue";
import DiffQrRow from "@/components/DiffQrRow.vue";
import imgQrMo from "@/assets/images/dummy/qr_app.png";
import Steps from "@/components/Steps.vue";
import FeatureCards from "@/components/FeatureCards.vue";
import Accordion from "@/components/Accordion.vue";
import AccordionItem from "@/components/AccordionItem.vue";
import modal from "@/assets/js/modal";

/* smain 이미지 */
import imgLogo from "@/assets/images/dummy/brand_gs25_logo.png";
import imgAcc01 from "@/assets/images/dummy/brand_accordion_01.png";
import imgAcc02 from "@/assets/images/dummy/brand_accordion_02.png";
import imgAcc03 from "@/assets/images/dummy/brand_accordion_03.png";

/* 탭 0 이미지 */
import imgHero0 from "@/assets/images/dummy/differentiated_bg_01.png";
import imgCard1 from "@/assets/images/dummy/differentiated_product_01.png";
import imgCard2 from "@/assets/images/dummy/differentiated_product_02.png";

/* 탭 1 이미지 */
import imgHero1 from "@/assets/images/dummy/brand_bg_02.png";
import imgCoffeeMachine01 from "@/assets/images/dummy/coffee_machine_01.png";
import imgCoffeeMachine02 from "@/assets/images/dummy/coffee_machine_02.png";
import imgCoffeeMachine03 from "@/assets/images/dummy/coffee_machine_03.png";
import imgFlagBrazil from "@/assets/images/dummy/img_flag_brazil.png";
import imgFlagGuatemala from "@/assets/images/dummy/img_flag_guatemala.png";
import imgFlagColombia from "@/assets/images/dummy/img_flag_colombia.png";
import imgFlagEthiopia from "@/assets/images/dummy/img_flag_ethiopia.png";
import imgFlagPapua from "@/assets/images/dummy/img_flag_papua.png";
import imgCafe25Graph from "@/assets/images/dummy/cafe25_graph.png";
import imgCafeMenu from "@/assets/images/dummy/cafe25_menu.png";
import imgCafeMenuMo from "@/assets/images/dummy/mo/cafe25_menu_mo.png";

/* 탭 2 이미지 */
import imgHero2 from "@/assets/images/dummy/differentiated_bg_03.png";
import imgChickenLeft from "@/assets/images/dummy/chicken25_card_01.png";
import imgChickenRight from "@/assets/images/dummy/chicken25_card_02.png";

/* 탭 3 이미지 */
import imgHero3 from "@/assets/images/dummy/differentiated_bg_04.png";
import imgGoben1 from "@/assets/images/dummy/gopizza_goben_01.png";
import imgGoben2 from "@/assets/images/dummy/gopizza_goben_02.png";
import imgDough from "@/assets/images/dummy/gopizza_dough.png";
import imgMenu1 from "@/assets/images/dummy/gopizza_menu_01.png";
import imgMenu2 from "@/assets/images/dummy/gopizza_menu_02.png";
import imgPhone1 from "@/assets/images/dummy/gopizza_phone_01.png";
import imgPhone2 from "@/assets/images/dummy/gopizza_phone_02.png";

/* 신선강화점 이미지 */
import imgHero4 from "@/assets/images/dummy/brand_bg_05.png";
import imgFlow from "@/assets/images/dummy/sinsen_flow.png";
import imgFlowMo from "@/assets/images/dummy/mo/sinsen_flow_mo.png";

/* 매장/서비스 이미지 */
import imgHero5 from "@/assets/images/dummy/brand_bg_06.png";
import imgHero6 from "@/assets/images/dummy/brand_bg_07.png";
import imgHero7 from "@/assets/images/dummy/brand_bg_08.png"; 
import imgHero8 from "@/assets/images/dummy/brand_bg_09.png"; 
import imgHero9 from "@/assets/images/dummy/brand_bg_10.png"; 
import imgHero10 from "@/assets/images/dummy/brand_bg_11.png"; 
import imgHero11 from "@/assets/images/dummy/brand_bg_12.png"; 
import imgHero12 from "@/assets/images/dummy/brand_bg_13.png"; 
import imgPopCard1 from "@/assets/images/dummy/pop_card_01.png";
import imgPopCard2 from "@/assets/images/dummy/pop_card_02.png";
import imgPopCard3 from "@/assets/images/dummy/pop_card_03.png";
import imgPopCard1Mo from "@/assets/images/dummy/mo/pop_card_01_mo.png";
import imgPopCard2Mo from "@/assets/images/dummy/mo/pop_card_02_mo.png";
import imgPopCard3Mo from "@/assets/images/dummy/mo/pop_card_03_mo.png";
import imgPoint1 from "@/assets/images/dummy/point_01.png";
import imgPoint2 from "@/assets/images/dummy/point_02.png"; 
import imgPoint3 from "@/assets/images/dummy/point_03.png";
import imgPoint4 from "@/assets/images/dummy/point_04.png";
import imgTransService1 from "@/assets/images/dummy/transportation_service_01.png";
import imgTransService2 from "@/assets/images/dummy/transportation_service_02.png";
import imgTransService3 from "@/assets/images/dummy/transportation_service_03.png";
import imgTransService4 from "@/assets/images/dummy/transportation_service_04.png";
import imgBus1 from "@/assets/images/dummy/express_bus_01.png";
import imgBus2 from "@/assets/images/dummy/express_bus_02.png";
import imgBus3 from "@/assets/images/dummy/express_bus_03.png";
import imgBus4 from "@/assets/images/dummy/express_bus_04.png";
import imgBus5 from "@/assets/images/dummy/express_bus_05.png";
import imgBus6 from "@/assets/images/dummy/express_bus_06.png";
import imgBus7 from "@/assets/images/dummy/express_bus_07.png";
import imgBus8 from "@/assets/images/dummy/express_bus_08.png";
import imgBrandUsage1 from "@/assets/images/dummy/brand_usage_01.png";
import imgBrandUsage2 from "@/assets/images/dummy/brand_usage_02.png";
import imgBrandUsage3 from "@/assets/images/dummy/brand_usage_03.png";
import imgBrandUsage4 from "@/assets/images/dummy/brand_usage_04.png";
import imgBrandUsage5 from "@/assets/images/dummy/brand_usage_05.png";
import imgBrandUsage6 from "@/assets/images/dummy/brand_usage_06.png";
import imgBrandUsage7 from "@/assets/images/dummy/brand_usage_07.png";
import imgBrandUsage8 from "@/assets/images/dummy/brand_usage_08.png";
import imgBrandUsage9 from "@/assets/images/dummy/brand_usage_09.png";
import imgGiftCard1 from "@/assets/images/dummy/gift_card_01.png";
import imgGiftCard2 from "@/assets/images/dummy/gift_card_02.png";
import imgGiftCard3 from "@/assets/images/dummy/gift_card_03.png";
import imgGiftCard4 from "@/assets/images/dummy/gift_card_04.png";
import imgGiftCard5 from "@/assets/images/dummy/gift_card_05.png";
import imgGiftCard6 from "@/assets/images/dummy/gift_card_06.png";
import imgGiftPurchase from "@/assets/images/dummy/gift_purchase_bg.png";
import imgRateBenefit1 from "@/assets/images/dummy/rate_benefit_01.png";
import imgRateBenefit2 from "@/assets/images/dummy/rate_benefit_02.png";
import imgHipassTerminal    from "@/assets/images/dummy/hipass_terminal.png";
import imgServiceDesc01    from "@/assets/images/dummy/service_desc_01.png";
import imgServiceDesc02    from "@/assets/images/dummy/service_desc_02.png";
import imgServiceDesc03    from "@/assets/images/dummy/service_desc_03.png";
import imgServiceDesc04    from "@/assets/images/dummy/service_desc_04.png";
import imgServiceDesc05    from "@/assets/images/dummy/service_desc_05.png";
import imgServiceDesc06    from "@/assets/images/dummy/service_desc_06.png";
import imgGiftCerti01 from "@/assets/images/dummy/gift_certi_01.png";
import imgGiftCerti02 from "@/assets/images/dummy/gift_certi_02.png";
import imgGiftCerti03 from "@/assets/images/dummy/gift_certi_03.png";

const router = useRouter();

function openModal(event) {
    const el = event.currentTarget;
    modal.open(el.dataset.popid, el.dataset.type || "default", el);
}

const activeTab = ref(0);

const ph = (n) => Array.from({ length: n }, () => ({ brand: "", logo: null }));

const langData = {
    nav: {
        depth1: [
            { item: "차별화 상품/서비스" },
            { item: "신선강화점" },
            { item: "매장/서비스" },
            { item: "상생협력" },
            { item: "밀박스/스낵바" },
        ],
        depth2: [
            { item: "차별화 상품" },
            { item: "CAFE25" },
            { item: "치킨25" },
            { item: "고피자" },
        ],
        depth2Store: [
            { item: "생활 서비스" },
            { item: "택배&픽업" },
            { item: "공공요금수납" },
            { item: "상품권 판매" },
        ],
        depth2Winwin: [
            { item: "운영지원제도" },
            { item: "참여제도" },
        ],
    },
    tabs: [
        {
            hero: imgHero0,
            heroAlt: "",
            title: "차별화 상품",
            subtitle: "최고급 커피머신과 스페셜티 블렌딩 원두를 사용하여 최상의 커피를 합리적인 가격으로 제공하는 GS25의 차별화 원두커피",
            cards: [
                {
                    image: imgCard1,
                    alt: "",
                    title: "김혜자 도시락",
                    desc: "정성 가득한 한끼를 위한 프리미엄 도시락 라인으로, 높은 고객 만족도를 자랑하는 GS25 대표 차별화 상품입니다.",
                },
                {
                    image: imgCard2,
                    alt: "",
                    title: "넷플릭스 시리즈",
                    desc: "넷플릭스 인기 콘텐츠와 협업한 GS25 단독 콜라보 상품 시리즈로, 트렌디한 소비 경험을 제공합니다.",
                },
            ],
            qr: {
                title: "우리동네GS 앱 다운로드",
                desc: "우리동네GS 앱을 다운로드하고, GS25의 다양한 이벤트와 차별화 상품을 만나보세요. QR코드를 스캔하면 앱 다운로드 페이지로 이동합니다.",
            },
        },
        {
            hero: imgHero1,
            heroAlt: "",
            title: "CAFE25",
            subtitle: "최고급 커피머신과 스페셜티 블렌딩 원두를 사용하여 최상의 커피를 합리적인 가격으로 제공하는 GS25의 차별화 원두커피 전문 존입니다.",
            sections: [
                {
                    type: "cards",
                    title: "커피머신",
                    desc: "소비자가 1,300만원 상당의 스위스 명품 커피 머신 브랜드 프랑케 머신입니다.",
                    cards: [
                        { image: imgCoffeeMachine01, alt: "" },
                        { image: imgCoffeeMachine02, alt: "" },
                        { image: imgCoffeeMachine03, alt: "" },
                    ],
                },
                {
                    type: "table",
                    title: "원두",
                    desc: "국내 NO1. 로스터인 동서식품의 스페셜티 블렌딩 원두입니다. (브라질, 과테말라, 콜롬비아 등 최상위 원두 생산국의 원두 5종 블렌딩)",
                    columns: [
                        { key: "country", label: "원산지",  width: 200, align: "left" },
                        { key: "ratio",   label: "배합비",  width: 160, align: "center" },
                        { key: "process", label: "가공방식", width: 289, align: "center" },
                        { key: "feature", label: "원두특징", width: 289, align: "left" },
                    ],
                    rows: [
                        { flag: imgFlagBrazil,    country: "브라질",      ratio: "35%", process: "Natural", feature: "균형감 있는 향미" },
                        { flag: imgFlagGuatemala, country: "과테말라",     ratio: "30%", process: "Washed",  feature: "뛰어난 바디감" },
                        { flag: imgFlagColombia,  country: "콜롬비아",     ratio: "25%", process: "Washed",  feature: "견과류의 고소함" },
                        { flag: imgFlagEthiopia,  country: "에티오피아",   ratio: "5%",  process: "Washed",  feature: "밝고 경쾌한 산미" },
                        { flag: imgFlagPapua,     country: "파푸아뉴기니", ratio: "5%",  process: "Washed",  feature: "꽃과 허브의 향기" },
                    ],
                },
                {
                    type: "image",
                    title: "전문점 커피보다 맛이 뛰어난 CAFE25",
                    desc: "바리스타협회 평가 결과 커피 프랜차이즈 수준의 커피 맛이 입증되었습니다.",
                    source: "한국커피연합회 관능평가결과(23.05)",
                    image: imgCafe25Graph,
                    imageAlt: "커피 맛 비교 그래프 - GS25가 전문점 커피 수준임을 나타낸 바 차트",
                },
                {
                    type: "split",
                    title: "메뉴 소개",
                    image: imgCafeMenu,
                    imageMo: imgCafeMenuMo,
                    imageAlt: "CAFE25 메뉴 이미지",
                    columns: [
                        { key: "menu",     label: "구분",           width: 260, align: "left" },
                        { key: "volume",   label: "1회 제공량(mL)", width: 220, align: "center" },
                        { key: "caffeine", label: "카페인 함량(mg)", width: 220, align: "center" },
                    ],
                    rows: [
                        { menu: "에스프레소",            volume: "35",  caffeine: "137" },
                        { menu: "카카오에스프레소",       volume: "43",  caffeine: "127" },
                        { menu: "아메리카노",             volume: "200", caffeine: "121" },
                        { menu: "아메리카노 큰컵",        volume: "245", caffeine: "132" },
                        { menu: "아이스아메리카노",       volume: "380", caffeine: "144" },
                        { menu: "아이스아메리카노 큰컵",  volume: "480", caffeine: "140" },
                        { menu: "아이스아메리카노 점보",  volume: "780", caffeine: "180" },
                    ],
                },
            ],
        },
        {
            hero: imgHero2,
            heroAlt: "",
            title: "CHICKEN25",
            subtitle: "최고의 원재료를 사용하여 즉석에서 조리한 튀김을 합리적인 가격으로 제공하는 GS25만의 차별화 먹거리입니다. <br class=\"p_br\" />편의점에서도 치킨25와 함께 전문점 수준의 치킨을 즐길 수 있습니다.",
            sections: [
                {
                    type: "text_cards",
                    title: "엄선된 원재료, 믿을 수 있는 맛",
                    desc: "최고의 원재료로 만들어 안심하고 더 맛있게 즐길 수 있는 고품질의 치킨을 제공합니다.",
                    cards: [
                        {
                            title: "깨끗한 기름으로<br />더 맛있는 튀김",
                            desc: "깨끗하게 관리한 기름을 사용하여 더욱 바삭하고 맛있고,<br />철저한 위생 관리로 안심하고 즐길 수 있는<br />맛있는 치킨을 제공합니다.",
                        },
                        {
                            title: "다양한 메뉴,<br />골라 먹는 재미",
                            desc: "전문점보다 더 풍성하게 준비된 메뉴들로<br /> 다양한 메뉴를 골라 드실 수 있습니다.<br />(한마리, 반마리, 닭다리, 날개, 봉, 꼬치, 핫도그, 튀김만두 등)",
                        },
                        {
                            title: "가까운 곳에서 언제든<br />간편히 구매",
                            desc: "가까운 GS25에서 갓 튀긴 바삭한 치킨을<br />언제든지 간편하게 접할 수 있습니다.<br />우리동네GS앱을 통한 배달/픽업 서비스로<br />인근 GS25에서 더욱 간편한 구매가 가능합니다.",
                        },
                    ],
                },
            ],
            imgGrid: [
                { image: imgChickenLeft, alt: "" },
                { image: imgChickenRight, alt: "" },
            ],
            qr: {
                title: "우리동네GS 앱 다운로드",
                desc: "우리동네GS 앱을 다운로드하고, GS25의 다양한 이벤트와 차별화 상품을 만나보세요.<br />QR코드를 스캔하면 앱 다운로드 페이지로 이동합니다.",
            },
        },
        {
            hero: imgHero3,
            heroAlt: "",
            title: "GOPIZZA",
            subtitle: "한 판의 즐거움! 한 손의 간편함! 고피자는 1인 피자의 선두 브랜드로, 빠르고 맛있는 피자를 제공합니다.<br />이제 가까운 GS25에서도 고피자의 대표 메뉴를 만나볼 수 있습니다.",
            sections: [
                {
                    type: "img_grid",
                    title: "GS25에만 있는 고븐미니 조리 시스템",
                    desc: "매장에서 바로 구워내 더욱 바삭한 식감! 편의점에서 만나는 피자 전문점 퀄리티!<br />초소형, 초고온, 저전력의 고븐미니는 고온에서 짧은 시간의 조리를 할 수 있어 언제 어디서나 갓 구운 피자를 즐길 수 있습니다.",
                    images: [
                        { image: imgGoben1, alt: "" },
                        { image: imgGoben2, alt: "" },
                    ],
                },
                {
                    type: "image",
                    title: "차별화된 도우",
                    desc: "9˚C 저온에서 24시간 숙성한 파베이크 도우를 사용하여 겉바속쫄!<br class=\"p_br\" />고피자의 기술력이 집적된 파베이크 도우는 저온숙성을 거쳐 먹기 좋은 볼륨감과 충분한 수분 함량으로 빠삭하고 쫄깃한 식감을 제공합니다.",
                    image: imgDough,
                    imageAlt: "",
                },
                {
                    type: "menu",
                    title: "메뉴 소개",
                    desc: "고피자의 스테디셀러부터 기대되는 신메뉴까지! GS25에서 REGULAR와 GRAB으로 간편하고 맛있게 즐기세요!<br class=\"p_br\" />REGULAR 사이즈의 경우 피자가 W모양으로 5등분 컷팅되어 한조각씩 간편하게 먹을 수 있습니다.",
                    panels: [
                        {
                            image: imgMenu1,
                            size: "REGULAR (27cm)",
                            tags: ["식사대용", "일반피자 4조각 분량"],
                            columns: [
                                { key: "name",  label: "메뉴명",       align: "left"  },
                                { key: "price", label: "금액(원)",      align: "right" },
                                { key: "kcal",  label: "칼로리(kcal)", align: "right" },
                            ],
                            rows: [
                                { name: "포테이토&베이컨", price: "7,900", kcal: "922",   badge: "BEST" },
                                { name: "체다 페퍼로니",   price: "7,900", kcal: "1,017" },
                                { name: "미트치즈",        price: "7,900", kcal: "945"   },
                                { name: "트리플치즈",      price: "8,500", kcal: "1,009" },
                            ],
                        },
                        {
                            image: imgMenu2,
                            size: "GRAB (20cm)",
                            tags: ["간식용", "일반피자 2조각 분량"],
                            columns: [
                                { key: "name",  label: "메뉴명",       align: "left"  },
                                { key: "price", label: "금액(원)",      align: "right" },
                                { key: "kcal",  label: "칼로리(kcal)", align: "right" },
                            ],
                            rows: [
                                { name: "포테이토&베이컨", price: "3,500", kcal: "357",  badge: "BEST" },
                                { name: "체다 페퍼로니",   price: "3,500", kcal: "355"  },
                                { name: "미트치즈",        price: "3,500", kcal: "341"  },
                                { name: "트리플치즈",      price: "3,500", kcal: "349"  },
                            ],
                        },
                    ],
                },
                {
                    type: "phone_grid",
                    title: "우리동네GS앱에서는 빠른 배달,<br class=\"m_br\" /> 픽업 가능",
                    items: [
                        { image: imgPhone1, alt: "" },
                        { image: imgPhone2, alt: "" },
                    ],
                },
            ],
            qr: {
                title: "우리동네GS 앱 다운로드",
                desc: "우리동네GS 앱을 다운로드하고, GS25의 다양한 이벤트와 차별화 상품을 만나보세요.<br />QR코드를 스캔하면 앱 다운로드 페이지로 이동합니다.",
            },
            link: {
                title: "GOPIZZA 홈페이지 바로가기",
                desc: "GOPIZZA 홈페이지에서 내 주변 매장 찾고 합리적인 가격과 차별화된 맛을 경험해보세요.<br />버튼을 클릭하면 해당 홈페이지로 이동합니다.",
                descMo: "합리적인 가격과 차별화된 맛 GOPIZZA",
                url: "https://gopizza.kr",
            },
        },
    ],
    sinsen: {
        hero: imgHero4,
        heroAlt: "신선강화점",
        title: "신선강화점",
        subtitle: "신선강화점은 1~2인 가구 및 근거리/소용량 쇼핑 증가 트렌드에 맞춰, 24시간 365일 한번에 장보기를 구현한 신선강화형 편의점입니다.<br /><br class=\"m_br\" />편의점의 간편함과 수퍼마켓의 신선함을 결합한 차별화 컨셉 모델로 매일매일 신선한 신선상품(과일, 채소, 정육, 수산)을 제공합니다.",
        sections: [
            {
                title: "신선강화점 특징",
                mobileDesc: "매장에서 바로 구워내 더욱 바삭한 식감! 편의점에서 만나는 피자 전문점 퀄리티!\n초소형, 초고온, 저전력의 고븐미니는 고온에서 짧은 시간의 조리를 할 수 있어 언제 어디서나 갓 구운 피자를 즐길 수 있습니다.",
                features: [
                    { title: "신선한 상품",   desc: "물류부터 진열 판매까지 전 과정 콜드체인 시스템 적용으로 신선도 유지" },
                    { title: "합리적인 가격", desc: "GS 더프레시와의 통합 구매를 통해 합리적인 가격에 판매" },
                    { title: "소용량 소포장", desc: "1인가구 및 2~3인 가구에 적합한 <br />소용량·소포장 상품 구성" },
                    { title: "전용 상품 브랜드", desc: "신선식품 전문 브랜드 <br />신선특별시 운영" },
                ],
            },
            {
                title: "왜 GS25 신선강화점인가?",
                desc: "GSTHEFRESH 통합 구매를 통한 상품 경쟁력을 확보하여 타 편의점 대비 다양한 신선·장보기 상품을 운영합니다. <br /><br class=\"m_br\" />업계 유일의 신선상품 전용 물류센터를 운영중이며, 파트너사에서 점포까지 전 구간 선도관리를 통해 신선상품의 신선도를 유지합니다.",
                flow: true,
                flowTitle: "GS25 신선 배송 방식",
                flowNote: "*신선센터를 거치지 않는 운영 구조에서는 상품 검품, 물류비, 신선도 관리 방식에 차이가 발생할 수 있습니다.",
            },
            {
                title: "신선강화점 운영의 장점",
                advantages: {
                    items: [
                        { text: "전용상품을 통한 다양한 상품 구색(약 400SKU)" },
                        { text: "신선강화점 전용 행사 운영 (신선 & 가공)" },
                        { text: "신선식품에 신선함을 더해주는 전용 장비 운영" },
                        { text: "전자가격표시기를 활용한 신선 가격 대응 자동화" },
                        { text: "마감할인 라벨프린터 운영으로 폐기 최소화" },
                        { text: "내/외부 전용 홍보물을 통한 홍보 강화" },
                        { text: "기존 일반점 → 신선강화점 변경 시 효과성 검증", note: "\u201C도입 후 일평균 매출 기존대비 약 12.6% 증가, 일평균 고객 수 21명 증가\u201D" },
                    ],
                },
            },
        ],
    },
    store: {
        tabs: [
            {
                hero: null,
                heroAlt: "",
                title: "생활 서비스",
                subtitle: "",
                sections: [],
                serviceTabs: [
                    {
                        label:   "현금인출기\n서비스",
                        hero:    imgHero5,
                        heroAlt: "",
                        title:   "현금인출기 서비스",
                        desc:    "현금인출, 계좌 이체 등 금융서비스 외에도 프로스포츠(야구, 축구, 배구, 농구) 정규리그 입장권(즉시 입장), 에버랜드 자유이용권의 발권도 가능합니다.<br />그 밖에 하이패스 충전(신용카드 결제), 알뜰폰 판매 등 다양한 생활 편의 서비스를 제공하고 있습니다.",
                    },
                    {
                        label:   "편의점캐시\n구입/충전",
                        hero:    null,
                        heroAlt: "",
                        title:   "편의점 캐시 구입/충전 서비스",
                        desc:    "편의점캐시는 온라인콘텐츠, 쇼핑몰, 게임캐시, 국제전화카드를 편의점에서 구입/충전 할 수 있는 서비스입니다.",
                        table: {
                            rows: [
                                { head: "게임 · 상품권 · 통신", text: "(알뜰폰/국제전화/모바일 데이터) 등 다양한 서비스를 편의점에서 실시간으로 구입, 충전 할 수 있는 서비스 영수증형 PIN 구입과 국제전화카드 충전 이외에 스마트폰 APP를 통한 실시간 잔액 충전 가능" },
                                { head: "게임캐시",         text: "N코인(엔씨소프트), 넥슨, 월드오브워크레프트, 리그오브레전드, 틴캐시, 한게임, 퍼니카드, 한빛소프트 등" },
                                { head: "상품권",           text: "문화상품권, 스마트문화상품권, 해피머니상품권, 도서문화상품권 등" },
                                { head: "스마트폰 APP충전", text: "넥슨플레이, 컬쳐랜드" },
                                { head: "알뜰폰",           text: "EG CARD, 7mobile, 아이즈, 모빙, M모바일, free C/T, 이야기 모바일 등" },
                                { head: "국제전화카드",     text: "LG U+, Naray, SK broadband" },
                                { head: "통신(데이터)/기타", text: "올레 WiFi, T데이터쿠폰, KT LTE 데이터쿠폰, DAUM캐시" },
                            ],
                        },
                    },
                    {
                        label:    "교통카드\n충전",
                        hero:     null,
                        heroAlt:  "",
                        title:    "",
                        desc:     "",
                        lnbItems: ["팝카드란?", "교통 사용처 안내", "유통 사용처 안내"],
                        trafficSelectOptions: [
                            { value: "subway",  label: "지하철" },
                            { value: "bus",     label: "버스" },
                            { value: "express", label: "고속버스" },
                            { value: "inter",   label: "시외버스" },
                        ],
                        trafficOptions: {
                            express: {
                                title: "고속버스",
                                bullets: ["금호고속", "동부 익스프레스", "동양고속", "속리산고속", "(주)중앙고속", "삼화 고속", "천일 고속", "한일 익스프레스"],
                                logos: [imgBus1, imgBus2, imgBus3, imgBus4, imgBus5, imgBus6, imgBus7, imgBus8],
                            },
                            subway: { title: "지하철", bullets: ["수도권(1~9호선, 수인선, 경춘선, 경의선, 중앙선, 의정부, 분당선, 신분당, 공항, 인천)", "대전(1호선)", "대구(1~2호선)", "부산(1~4호선, 부산-김해경전철)"] },
                            bus:    { title: "버스",   bullets: ["수도권","대전광역시, 세종시", "충남, 충북(충주, 영동, 청주, 옥천, 단양, 제천, 진천, 청원, 괴산, 보은, 음성", "강원(원주, 횡성, 춘천, 강릉)", "부산광역시, 대구광역시, 울산광역시","경남(창원, 통영, 거제, 밀양, 양산, 함안, 사천, 마산, 진해, 진주)","경북(포항, 구미, 경주, 안동, 상주, 문경, 영주, 김천, 경산, 예천)", "전남(목포, 여수, 광양, 순천, 화순, 나주, 장성, 함평, 담양, 보성, 영암, 해남)","전북(군산, 전주, 익산, 군산, 김제, 남원, 고창, 정읍, 진안, 임실, 부안)","제주"] },
                            inter:  { title: "시외버스", bullets: ["수도권(서울시 공항버스 제외)","충남","강원(원주 제외)"] },
                        },
                        retailSelectOptions: [
                            { value: "convenience",   label: "편의점" },
                            { value: "mart",          label: "대형마트/유통점" },
                            { value: "bakery",        label: "베이커리" },
                            { value: "coffee",        label: "커피/아이스크림" },
                            { value: "fastfood",      label: "패스트푸드" },
                            { value: "restaurant",    label: "요식" },
                            { value: "cosmetics",     label: "화장품" },
                            { value: "entertainment", label: "엔터테인먼트" },
                            { value: "pcroom",        label: "PC방" },
                            { value: "university",    label: "대학" },
                            { value: "public",        label: "공공시설" },
                            { value: "tourism",       label: "관광" },
                            { value: "parking",       label: "주차장" },
                            { value: "kiosk",         label: "무인기기" },
                            { value: "etc",           label: "기타" },
                        ],
                        retailOptions: {
                            convenience:   { title: "편의점",          items: ph(7) },
                            mart:          { title: "대형마트/유통점",  note:"마트, 익스프레스의 일부 매장은 향후 서비스 도입 예정", items: ph(4) },
                            bakery:        { title: "베이커리", note:"마트, 백화점, 휴게소 등 일부 입점 매장 제외", items: ph(3) },
                            coffee:        { title: "커피/아이스크림",  note: "마트, 백화점, 휴게소 등 일부 입점 매장 제외", items: [
                                { brand: "스타벅스",   logo: imgBrandUsage1 },
                                { brand: "파스쿠찌",   logo: imgBrandUsage2 },
                                { brand: "베라",       logo: imgBrandUsage3 },
                                { brand: "잠바주스",   logo: imgBrandUsage4 },
                                { brand: "엔젤인어스", logo: imgBrandUsage5 },
                                { brand: "카페띠아모", logo: imgBrandUsage6 },
                                { brand: "자바시티",   logo: imgBrandUsage7 },
                                { brand: "커피베이",   logo: imgBrandUsage8 },
                                { brand: "요거프레소", logo: imgBrandUsage9 },
                            ]},
                            fastfood:      { title: "패스트푸드", note:"마트, 백화점, 휴게소 등 일부 입점 매장 제외", items: ph(3) },
                            restaurant:    { title: "요식", note:"마트, 백화점, 휴게소 등 일부 입점 매장 제외", items: ph(3) },
                            cosmetics:     { title: "화장품", note:"마트, 백화점, 휴게소 등 일부 입점 매장 제외", items: ph(6) },
                            entertainment: { title: "엔터테인먼트", note:"LOTTE CINEMA(피카디리관), MEGABOX(안산관), SK와이번스(연간회원권)", items: ph(3) },
                            pcroom:        { title: "PC방",       bullets: ["T-money PC방"], footnote: "어린이카드는 사용이 제한됨" },
                            university: {
                                title: "대학",
                                bullets: [
                                    { dt: "교내식당", dd: "충남대" },
                                    { dt: "매점", dd: "동국대, 백석대, 정의여중고, 건대부속고, 동덕여대" },
                                    { dt: "OA기기", dd: "동국대, 서울과학기술대, 한양대, 이화여대, 인천대" },
                                    { dt: "셔틀버스", dd: "아주대, 성균관대" },
                                    { dt: "기타", dd: "자판기(중앙대, 건양대, 아주대, 명지대 등), 무인사물함(연세대, 경기대, 명지대 등)" },
                                ],
                            },
                            public:       { title: "공공시설", bullets: [
                                "경륜 / 경정장(서울올림픽기념국민체육진흥공단)",
                                "경마장(한국마사회)",
                                "서초구청 아방세홀 식대 결제",  
                                "서울시청 다산프라자 민원발급 수수료",
                                "서울시 구청 민원결제(전체)",
                                "종로구 자치회관 19개소 (가회동, 삼청동 등)",
                                "중앙우체국(식당결제)",
                                "대전시 공용자전거 타슈 결제",
                                "과천 과학관 식대, 매점, 카페 등 결제",
                                "포항시청 세무과 민원결제(시청, 구청, 읍 / 면 / 동사무소 32개소)",
                                "음식물종량제 : 군포시, 의정부시, 인천남구, 인천서구, 원주시, 포항시, 제주시, 서귀포시, 송파구, 순창군",
                            ] },
                            tourism:       { title: "관광",        bullets: ["한강수상택시","시티투어버스(T-money카드 결제 시 요금 5% 할인혜택)"] },
                            parking:       { title: "주차장", bullets: [
                                "서울특별시 공영주차장",
                                "서울특별시 강남시설관리공단 노외주차장 9개소 : 탄천, 강남구청, 강남교육원, 언북초교, 포이초교, 개포공영, 역삼1로, 역삼10, 대치3동 문화센터",
                                "서울특별시 시설관리공단 환승주차장 (T-money로 지하철 탑승 후 출차시 주차요금 환승할인 혜택가능) : 잠실역, 창동역, 구로디지털단지역, 개화산역, 수서역, 도봉산역, 봉화산역, 수락산역, 한강진역, 화랑대역, 월드컵경기장주차장",
                                "서울특별시 체육시설관리사업소 주차장(잠실종합운동장)",
                                "북서울 꿈의 숲, 인천공항",
                                "수원시 시설관리공단 주차장 : 시청제1지상, 시청제2지상, 선경, 영통구청, 영통공영, 권선공영, 인계공영, 율전공영, 터미널공영, 대황교화물, 화서환승, 성대환승, 꽃뫼환승, 세류역 환승, 광교공영, 만석공원, 백설공영, 영화동, 세류2동, 인계동, 매교동, 탑동, 곡반정동 제1,2",
                                "성남시 시설관리공단 주차장 : 금곡동, 서현동, 정자 환승, 오리 환승, 야탑 제1, 중부초교, 해오름, 대원천, 단대공원, 복정동. 신흥제, 태평제, 아래숯골 등 44개소",
                                "파주시 시설관리공단 주차장 : 금촌2공영, 금촌2-8공영, 금촌3공영",
                                "KTX 철도역사 주차장 (광명역, 천안 / 아산역 등)",
                                "하이파킹 주차장 : 춘천 지하, 대구 두류1번가 지하, 수진역 환승, 죽전 아이원프라자",
                                "기타 : 월드컵경기장, 목동 노상, 응봉동(건물), 삼성동 오크우드, 강북삼성병원, SH공사 주차장, 누리꿈스퀘어 주차장, 서울숲 공원 주차장, 서울무역전시장 주차장, 동원산업 빌딩 지하 주차장, 인천경제통상진흥원 주차장, 지에스파크24㈜ 서울디자인고 주차장",
                                "무인기기",
                            ] },
                            kiosk:         { title: "무인기기",    bullets: ["KTL 공중전화","지하철 무인택배 보관함, 음료 / 스낵 자판기, 도서자판기, 무인사진 촬영기","우체국 무인우편창구 : 서울체신청, 경인체신청, 충청체신청, 경북체신청, 부산체신청"] },
                            etc:           { title: "기타",        bullets: ["고속도로 휴게소 : 진영휴게소, 영천휴게소", "개그스토리 마트 (일부점)","문구점 색연필 (일부점)", "비디오 대여점 영화마을 (일부점)"] },
                        },
                        pageTitle: "교통카드 충전서비스(팝티머니,마이비,캐시비(EZL),한페이)",
                        pageDesc:  "GS25는 대중교통을 이용하는 고객님을 위해 교통카드 충전 서비스를 실행하고있습니다.<br />또한, GS25에서 상품을 구매할 수 있어 결제수단의 편의성을 제공하고있는 유익한 서비스입니다. (복권, 로또, 토토, 택배 등 일부상품제외)",
                        popTitle:   "팝카드란?",
                        popDesc:    "이제 팝 하세요! <br />다양한 결제 수단과 결합하여 혜택은 더 크게, 소비는 더 합리적으로, 사용은 더 편리하게 할 수 있도록 팝카드만의 차별화된 서비스를 제공합니다.",
                        popExclude: "팝카드 사용 제외 매장 : 디몰점, 영풍종로점, 부천세이브존점, 동대문현대시티아울렛점, 서면NC점, 현대시티몰가든파이브점, 모란NC점, 대구이월드점, 동아쇼핑NC점, 이천NC점, 동수원NC점, 야탑NC점",
                        chargingTitle: "교통카드 충전 서비스",
                        chargingItems: [
                            { name: "티머니",     img: imgTransService1 },
                            { name: "캐시비(EZL)", img: imgTransService2 },
                            { name: "한페이",      img: imgTransService3 },
                            { name: "iM유페이",   img: imgTransService4 },
                        ],
                        chargingNote: {
                            label: "충전 및 결제 가능 지역",
                            text:  "티머니/캐시비(EZL) : GS25 전 매장 / 한페이: 전라도, 광주광역시 / iM유페이: 경상북도, 대구광역시",
                        },
                        popCards: [
                            {
                                img:   imgPopCard1,
                                imgMo: imgPopCard1Mo,
                                name:  "팝티머니",
                                desc:  "하나의 카드로 관리가능한 멀티멤버십의 혜택까지!\n팝티머니는 T-money와 팝카드의 기능을 동시에\n사용할 수 있는 차별화된 서비스입니다.",
                                logos: [
                                    { src: imgPoint1, w: 28, h: 36 },
                                    { src: imgPoint2, w: 44, h: 24 },
                                    { src: imgPoint3, w: 29, h: 36 },
                                    { src: imgPoint4, w: 32, h: 32 },
                                ],
                            },
                            {
                                img:      imgPopCard2,
                                imgMo:    imgPopCard2Mo,
                                name:     "멤버십 팝카드",
                                desc:     "멤버십팝카드는 GS ALL 포인트와 팝카드가 결합되어 GS25, GS THE FRESH에서 결제와 동시에 포인트가 적립되고, 600여 온라인쇼핑, 게임 등에서 결제가 가능한 혜택이 많은 선불카드입니다.",
                                note:     "*교통기능 없음",
                                noteWarn: true,
                                logos:    [{ src: imgPoint2, w: 44, h: 24 }],
                            },
                            {
                                img:   imgPopCard3,
                                imgMo: imgPopCard3Mo,
                                name:  "팝 신용/체크 카드",
                                desc:  "팝 신용/체크카드는 고객의 소비생활에\n팝카드의 혜택 및 기능을 추가한 서비스입니다.",
                                logos: [],
                            },
                        ],
                    },
                    {
                        label:          "기프트\n카드",
                        hero:           imgHero6,
                        heroAlt:        "",
                        title:          "기프트카드",
                        desc:           "GS25는 기프트카드를 운영하고 있으며, 전국 어디에서나 충전 및 사용이 가능합니다.<br />다양한 기프트카드를 소중한 친구, 가족, 지인들에게 선물할 수 있습니다. (단,일부 매장에서는 충전 및 사용이 불가합니다.)",
                        brandTitle: "POSA 기프트카드 대표 브랜드",
                        brands: [
                            { img: imgGiftCard1, name: "구글플레이" },
                            { img: imgGiftCard2, name: "KT 와이파이" },
                            { img: imgGiftCard3, name: "틴캐시" },
                            { img: imgGiftCard4, name: "에그머니" },
                            { img: imgGiftCard5, name: "T데이터쿠폰" },
                            { img: imgGiftCard6, name: "해피머니" },
                            { img: imgGiftCard1, name: "문화상품권" },
                            { img: imgGiftCard2, name: "스마트문화상품권" },
                            { img: imgGiftCard3, name: "도서문화상품권" },
                            { img: imgGiftCard4, name: "넥슨캐시" },
                            { img: imgGiftCard5, name: "NC소프트" },
                            { img: imgGiftCard6, name: "한게임" },
                            { img: imgGiftCard1, name: "컬쳐랜드" },
                            { img: imgGiftCard2, name: "퍼니카드" },
                            { img: imgGiftCard3, name: "버거킹" },
                            { img: imgGiftCard4, name: "CGV" },
                            { img: imgGiftCard5, name: "스타벅스" },
                            { img: imgGiftCard6, name: "올레WiFi" },
                        ],
                        purchaseTitle: "POSA 기프트카드 구매방법",
                        purchaseNote:  "기프트 카드별로 사용방법이 다르므로 카드와 카드 캐리어 뒷면에 기재된 사용방법을 참고하시고, 자세한 사항은 카드에 기재된 고객센터로 문의하시기 바랍니다.",
                        purchaseImg:   imgGiftPurchase,
                        purchaseSteps: [
                            { num: "01", title: "판매처 방문",    desc: "가까운 GS25 편의점에 방문하세요." },
                            { num: "02", title: "기프트카드 선택", desc: "원하는 브랜드의 기프트카드를 선택하세요." },
                            { num: "03", title: "사용설명 확인",   desc: "구매하신 카드 뒷면 사용설명을<br class=\"m_br\" />잘 확인하시고 사용하세요." },
                            { num: "04", title: "계산",           desc: "계산대에서 계산을 완료하시면 활성화되어 사용 가능한 상태가 됩니다." },
                        ],
                        usageTitle:   "POSA 기프트카드 사용방법",
                        usageDesc:
                            '<span class="gift_usage_desc_emphasis">기프트카드별로 사용방법이 다르므로 카드와 카드 캐리어 뒷면에 기재된 사용방법을 참고</span>하시고, 자세한 사항은 카드에 기재된 고객센터로 문의하시기 바랍니다.',
                        onlineLabel:  "온라인 사용방법",
                        onlineSteps: [
                            { step: "Step 1", title: "사이트 접속 및 로그인" },
                            { step: "Step 2", title: "캐시충전" },
                            { step: "Step 3", title: "결제수단 선택" },
                            { step: "Step 4", title: "PIN번호 입력" },
                        ],
                        offlineLabel: "오프라인 사용방법",
                        offlineSteps: [
                            { step: "Step 1", title: "매장 방문" },
                            { step: "Step 2", title: "상품 선택" },
                            { step: "Step 3", title: "기프트카드 제시" },
                            { step: "Step 4", title: "결제완료" },
                        ],
                        advantageTitle: "POSA 기프트카드 장점",
                        advantages: [
                            {
                                num:   "01",
                                title: "신용카드와 함께\n지갑속에 쏙!",
                                desc:  "신용카드처럼 작아서 지갑에 보관하기 편리하며, 결제해야만 사용할 수 있기에 판매점의 관리 부담이 적습니다.",
                            },
                            {
                                num:   "02",
                                title: "온/오프라인\n다양한 브랜드 제공",
                                desc:  "외식, 게임, 레저, 영화, 커피, 도서 등 오프라인과 온라인의 다양한 브랜드를 제공하기에 선물 받는 사람의 기호와 특성에 따라 최고의 만족도를 함께 드릴 수 있습니다.",
                            },
                            {
                                num:   "03",
                                title: "가치를 아는 당신의 선택\n고품격 디자인 기프트카드",
                                desc:  "현금이나 기존 상품권과 달리 고품격으로 디자인되어 선물하는 분의 가치와 품격을 높여 드릴 수 있습니다.",
                            },
                            {
                                num:   "04",
                                title: "전국 언제 어디서나\n편리한 구매",
                                desc:  "전국의 대형마트, 대형서점, 편의점, 유명 프랜차이즈 등으로 판매점을 확대할 것이기에 고객과 가장 가까운 곳에서 언제든지 간편하게 카드를 구입할 수 있습니다.",
                            },
                        ],
                    },
                    {
                        label:          "유심\n요금제",
                        hero:           null,
                        heroAlt:        "",
                        title:          "유심 요금제",
                        desc:           "U+ 알뜰모바일과 GS25가 만나 획기적으로 낮춘 휴대폰 요금제로 GS25편의점 및 GS25 온라인사이트에서 유심칩 구매 가능합니다.",
                        advantageTitle: "GS25 요금제 장점",
                        advantages: [
                            { num: "01", title: "간편하게 가입하는 요금제", desc: "가까운 GS25에서 구매 가능 전용 사이트에서<br /> 간편하게 가입하는 요금제" },
                            { num: "02", title: "대한민국 최저가",          desc: "데이터 마음껏 쓰는 대한민국 최저가 요금제!" },
                            { num: "03", title: "약정 조건/위약금 ZERO",    desc: "번호, 휴대폰 모두 그대로, 약정 조건과 위약금 없는 요금제!" },
                        ],
                        phoneTitle: "사용 가능 핸드폰",
                        phones: [
                            { term: "LG U+휴대폰",    desc: "LG U+로 최초 개통한 모든 LTE 휴대폰" },
                            { term: "SKT/KT 휴대폰",  desc: "14년 8월 이후출시된 LTE 휴대폰(갤럭시노트4, AKA 이후 출시 휴대폰)" },
                            { term: "외산휴대폰",      desc: "아이폰6 이후출시 휴대폰, 그외 주파수 850(Band5), 2100(Band1), 2600(Band7) 지원 모델 주파수(LTE 밴드)는 제조사를 통해서 확인 가능" },
                        ],
                        purchaseTitle: "GS25 매장에서 유심 구매/사용 방법",
                        purchaseSteps: [
                            { step: "Step 1", title: "간편하게 가입하는 요금제" },
                            { step: "Step 2", title: "대한민국 최저가" },
                            { step: "Step 3", title: "약정 조건/위약금 ZERO" },
                        ],
                        benefitTitle: "GS25 요금제 혜택",
                        benefitCards: [
                            {
                                img:   imgRateBenefit1,
                                imgAlt: "",
                                title: "통신비 실속 있게 할인 받자!",
                                desc:  "가까운 GS25에서 구매 가능 전용 사이트에서\n간편하게 가입하는 요금제",
                                items: ["가입비 무료", "통신비 최대 할인", "무약정 위약금 없음"],
                            },
                            {
                                img:   imgRateBenefit2,
                                imgAlt: "",
                                title: "다양한 부가서비스 4종 무료",
                                desc:  "가까운 GS25에서 구매 가능 전용 사이트에서\n간편하게 가입하는 요금제",
                                items: ["U+ Zone Wi-Fi로 인터넷을", "U+ Box 내 파일을 클라우드로", "매너콜 전화 온 곳을 문자로", "mVOIP 보이스톡 무료 통화"],
                            },
                        ],
                        introTitle: "GS25 요금제 소개",
                        plans: [
                            {
                                name:         "GS25(15GB+/100분)",
                                data:         "15GB\n<span class=\"usim_plan_data_sub\">(소진시 3Mbps속도로 계속 사용)</span>",
                                voice:        "100분",
                                sms:          "100건",
                                normalPrice:  "47,300원",
                                discount:     "19,800원",
                                monthly:      "27,500원",
                                monthlyDc:    "12,500원",
                                competitor:   "65,890원",
                            },
                            {
                                name:         "GS25(10GB/100분)",
                                data:         "10GB",
                                voice:        "100분",
                                sms:          "100건",
                                normalPrice:  "41,800원",
                                discount:     "20,900원",
                                monthly:      "20,900원",
                                monthlyDc:    "5,900원",
                                competitor:   "45,650원",
                            },
                            {
                                name:         "GS25(6GB/100분)",
                                data:         "6GB",
                                voice:        "100분",
                                sms:          "100건",
                                normalPrice:  "30,000원",
                                discount:     "12,500원",
                                monthly:      "17,500원",
                                monthlyDc:    "2,500원",
                                competitor:   "45,250원",
                            },
                            {
                                name:         "GS25(3GB/150분)",
                                data:         "3GB",
                                voice:        "100분",
                                sms:          "100건",
                                normalPrice:  "20,900원",
                                discount:     "12,100원",
                                monthly:      "12,100원",
                                monthlyDc:    "0원",
                                competitor:   "41,800원",
                            },
                        ],
                    },
                    {
                        label:          "하이패스\n카드/단말기",
                        hero:           null,
                        heroAlt:        "",
                        title:          "하이패스 서비스",
                        desc:           "GS25에서 24시간 하이패스카드를 구매/충전하세요.",
                        hipassStepTitle:    "하이패스카드 구매<br class=\"m_br\" />(셀프형 자동충전카드)",
                        hipassSteps: [
                            {
                                step:    "Step 1",
                                title:   "셀프형 자동충전카드 구매",
                                bullets: [
                                    "가까운 GS25에서 하이패스 카드 구매",
                                    "카드 구입비: 5,000원",
                                ],
                            },
                            {
                                step:    "Step 2",
                                title:   "카드등록 및 결제정보등록",
                                bullets: [
                                    "홈페이지에서 카드번호 및 결제정보등록<br />(계좌 or 신용카드)",
                                    "<span style=\"color: #fb6432\">카드등록 후 24시간 이후 사용 가능</span>",
                                ],
                            },
                            {
                                step:    "Step 3",
                                title:   "하이패스 카드 이용",
                                bullets: [
                                    "하이패스 단말기에 삽입하여 사용",
                                    "등록된 결제방식을 통해 자동 충전됨",
                                ],
                            },
                        ],
                        hipassChargeTitle: "하이패스 카드 충전",
                        hipassChargeDesc: "하이플러스카드에서 출시한 모든 카드 충전가능 ('도로공사', 'EX' 기재된 카드 충전불가)",
                        hipassTerminalTitle: "하이패스단말기 판매",
                        hipassTerminalDesc: "한국도로공사가 인증하고 2년 연속 한국품질만족도 1위 'GPASS' 단말기 판매",
                        hipassTerminalImg:    imgHipassTerminal,
                        hipassTerminalImgAlt: "하이패스 단말기(GPASS) 이미지",
                    },
                    {
                        label:   "고속도로 미납\n통행료 납부",
                        hero:    null,
                        heroAlt: "",
                        title:   "고속도로 미납 통행료 납부",
                        desc:    "국내편의점 중 최초로 고속도로 미납통행료 실시간 조회 및 납부할 수 있는 서비스입니다.",
                        serviceTitle: "서비스 장점",
                        serviceAdvantages: [
                            {
                                num:   "01",
                                title: "보편성",
                                desc:  "은행보다 많고 가까운 집 근처 편의점에서 24시간 결제 가능<br /><span class=\"txt_point\">전국 모든 GS25 점포에서 수납 대행</span><br />(실시간 입금확인, 대면 거래)",
                            },
                            {
                                num:   "02",
                                title: "경제성",
                                desc:  "고객 수수료 별도 부담 없음<br />계좌이체, 무통장입금 발생되는 뱅킹 수수료 없음",
                            },
                            {
                                num:   "03",
                                title: "편리성",
                                desc:  "은행에 가지 않아도, 신용카드가 없어도, 온라인상점에서 주문하면 결제(입금)은 편의점에서 완료<br /><span class=\"txt_point\">거스름돈은 점포에서 바로 수령 가능</span>",
                            },
                            {
                                num:   "04",
                                title: "안전성",
                                desc:  "복잡한 공인인증서나 보안 카드가 필요 없고, 결제정보 노출 방지<br />대면 거래에 따른 전자금융사고 (스미싱)<br />예방",
                            },
                        ],
                        unpaidTitle: "고속도로 미납통행료 납부 방법",
                        unpaidSteps: [
                            { step: "Step 1", title: "GS25 편의점에게<br />납부요청" },
                            { step: "Step 2", title: "차량번호 입력" },
                            { step: "Step 3", title: "개인정보제공동의" },
                            { step: "Step 4", title: "생년월일 입력" },
                            { step: "Step 5", title: "결제(현금/신용카드)" },
                        ],
                    },
                    {
                        label:   "온라인몰\n편의점 결제",
                        hero:    null,
                        heroAlt: "",
                        title:   "온라인몰 편의점 결제",
                        desc:    "온라인몰(쇼핑, 게임, 항공사, 기타)에서 구매할 때 '편의점결제'를 선택하고 문자로 수납번호나 바코드를 받아 GS25에서 현금 결제할 수 있는 서비스입니다.",
                        serviceTitle: "편의점 결제의 장점",
                        serviceAdvantages: [
                            {
                                num:   "01",
                                title: "보편성",
                                desc:  "은행보다 많고 가까운 집 근처 편의점에서 24시간 결제 가능<br /><span class=\"txt_point\">전국 모든 GS25 점포에서 수납 대행</span><br />(실시간 입금확인, 대면 거래)",
                            },
                            {
                                num:   "02",
                                title: "경제성",
                                desc:  "고객 수수료 별도 부담 없음<br />계좌이체, 무통장입금 발생되는 뱅킹 수수료 없음",
                            },
                            {
                                num:   "03",
                                title: "편리성",
                                desc:  "은행에 가지 않아도, 신용카드가 없어도, 온라인상점에서 주문하면 결제(입금)은 편의점에서 완료<br /><span class=\"txt_point\">거스름돈은 점포에서 바로 수령 가능</span>",
                            },
                            {
                                num:   "04",
                                title: "안전성",
                                desc:  "복잡한 공인인증서나 보안 카드가 필요 없고, 결제정보 노출 방지<br />대면 거래에 따른 전자금융사고 (스미싱)<br />예방",
                            },
                        ],
                        mallPaymentTitle: "편의점 결제 이용 방법",
                        mallPaymentSteps: [
                            { step: "Step 1", title: "온라인몰에서<br />상품/서비스 구매" },
                            { step: "Step 2", title: "온라인몰에서<br />상품/서비스 구매" },
                            { step: "Step 3", title: "가까운 GS25에서<br />24시간 결제" },
                            { step: "Step 4", title: "집으로 상품 배송<br />(캐시충전)" },
                        ],
                        mallSiteTitle: "이용 가능한 온라인 및 모바일 사이트",
                        mallSiteNote:  "* 향후 지속 확대예정",
                        mallSiteItems: [
                            { name: "11번가",                  img: imgServiceDesc01 },
                            { name: "스타일쉐어",              img: imgServiceDesc02 },
                            { name: "NC소프트",                img: imgServiceDesc03 },
                            { name: "파워콜 항공/쇼핑",        img: imgServiceDesc04 },
                            { name: "티웨이항공",              img: imgServiceDesc05 },
                            { name: "유니컴즈\n(LG U+ 별정통신사)", img: imgServiceDesc06 },
                        ],
                    },
                ],
            },
            {
                hero:     null,
                heroAlt:  "",
                title:    "택배&픽업",
                subtitle: "",
                sections: [],
                serviceTabs: [
                    {
                        label:   "국내택배",
                        hero:  imgHero7,
                        heroAlt: "",
                        title:   "국내택배 서비스",
                        desc:    "365일 24시간 가까운 GS25에서 택배 접수가 가능합니다.",
                        notes: [
                            {
                                text: "중량 측정을 통한 합리적인 운임을 제공합니다.<br class=\"m_br\" />(최저 3,400원)",
                                sub:  "*25년 4월1일부로 변경",
                            },
                            {
                                text: "접수시점부터 배달완료까지 배송단계 별 SMS 서비스를 제공합니다.",
                            },
                            {
                                text: "GS포스트박스 회원으로 접수 시 다양한 이벤트에 참여 가능하며, 사용량에 따라 등급 별 혜택을 제공합니다.",
                            },
                        ],
                        stepTitle: "국내택배 서비스",
                        steps: [
                            { step: "Step 1", title: "홈페이지/모바일APP<br />택배접수 예약" },
                            { step: "Step 2", title: "홈페이지/모바일APP<br />택배접수 예약" },
                            { step: "Step 3", title: "무인택배장비로 접수<br />(중량측정)" },
                            { step: "Step 4", title: "카운터에서 결제 후<br />물품보관함에 보관" },
                        ],
                        cautionTitle: "국내택배 유의사항",
                        cautionItems: [
                            {
                                // icon: imgCautionSize,
                                icon:    null,
                                iconAlt: "사이즈 아이콘",
                                title:   "사이즈",
                                desc:    "가로 세로 높이의 합 160cm 이내<br />한변의 길이가 1m 이내",
                            },
                            {
                                // icon: imgCautionWeight,
                                icon:    null,
                                iconAlt: "중량 아이콘",
                                title:   "중량",
                                desc:    "20kg 이하",
                            },
                            {
                                // icon: imgCautionPrice,
                                icon:    null,
                                iconAlt: "물품가액 아이콘",
                                title:   "물품가액",
                                desc:    "50만원 이하",
                            },
                        ],
                        priceTitle: "국내택배 이용요금",
                        priceItems: [
                            {
                                text: "최저 3,400원부터 중량 및 거리에 따라 요금 적용",
                                subs: [
                                    "동일권/타권/제주권에 따라 다름",
                                    "서신/서류는 우편법 규정에 의거하여 운임산정",
                                ],
                            },
                            { text: "착불 시 착불수수료(300원) 부과" },
                            { text: "도서지역으로 배송 시 4,000원 부과" },
                            { text: "고액상품(50만원 초과) 배송시 2,500원 부과" },
                        ],
                        periodTitle: "국내택배 이용기간",
                        periodItems: [
                            { text: "평일 17시(시,군,구 일부지역 및 경기 일부지역 15시), 토요일 12시 이전 접수 시 익일 배송" },
                            { text: "일요일 및 공휴일은 접수만 가능" },
                            { text: "점포 별로 마감시간이 다를 수 있음" },
                        ],
                    },
                    {
                        label: "반값택배",
                        hero: imgHero8,
                        heroAlt: "",
                        title: "반값택배 서비스",
                        desc: "편의점 최초! 국내유일 공휴일 배송! 최저가택배 GS25에서 보내고 GS25에서 받아보세요.",
                        notes: [
                            {
                                text: "편의점 최초! 편의점에서 접수하고 편의점에서 수령 가능합니다.",
                            },
                            {
                                text: "거리에 상관없이 무게에 따라 이용 가능합니다.",
                            },
                            {
                                text: "접수시점부터 배달완료까지 배송단계 별 SMS 서비스를 제공합니다.",
                            },
                        ],
                        stepTitle: "반값택배 이용 방법",
                        steps: [
                            { step: "Step 1", title: "홈페이지/모바일APP<br />택배접수 예약", bullets: ["수령점포 선택 입력"] },
                            { step: "Step 2", title: "물품 포장 후<br />GS25 방문", bullets: ["세부 내용 작성", "세부 내용 작성", "<span style=\"color: #fb6432;\">특이사항 기재시 컬러</span>"] },
                            { step: "Step 3", title: "무인택배장비로 접수<br />(중량측정)" },
                            { step: "Step 4", title: "카운터에서 결제 후<br />물품보관함에 보관" },
                        ],
                        priceTable: {
                            title: "반값택배 이용요금",
                            desc:  "운임 결제는 선불만 가능",
                            note:  "향후 지속 확대예정",
                            columns: ["구분", "내륙↔내륙 / 제주↔제주", "제주↔내륙 / 내륙↔도서"],
                            rows: [
                                {
                                    cells: [
                                        "이용요금",
                                        "~500g: 1,900원<br />~1kg: 2,300원<br />~5kg: 2,700원",
                                        "~500g: 3,600원<br />~1kg: 4,000원<br />~5kg: 4,400원",
                                    ],
                                },
                            ],
                        },
                        infoTable: {
                            title: "반값택배 이용안내",
                            rows: [
                                { head: "예약방법",    text: "반값택배 예약 시 도착점을 GS25 편의점으로 선택" },
                                { head: "서비스 지역", text: "GS25 ↔ GS25" },
                                { head: "수령방법",    text: "점포 근무자에게 알림톡으로 전송된 QR코드 제시" },
                                { head: "배송기간",    text: "내륙~내륙, 제주~제주 : 접수일포함 4일 이내, 동일권역 2~3일 이내<br />제주↔내륙 : 접수일 포함 5~7일 내 *주말/공휴일 배송 가능<br />*내륙↔제주 간 반값택배는 접수일 포함 7일 이내 배송 완료 됩니다.<br />*기상 상황으로 선박 운행이 불가하거나, 선박운행 스케줄 변동으로 배송소요일이 추가될 수 있습니다." },
                            ],
                        },
                        cautionTitle: "반값택배 유의사항",
                        cautionItems: [
                            { icon: null, iconAlt: "마감시간 아이콘",   title: "마감시간",          desc: "당일 수거 마감시간 오전 09시" },
                            { icon: null, iconAlt: "규격 아이콘",       title: "규격 초과 시 수거 불가", desc: "세변의 합 80cm 이내" },
                            { icon: null, iconAlt: "중량 아이콘",       title: "중량",              desc: "5kg 이하" },
                            { icon: null, iconAlt: "물품가액 아이콘",   title: "물품가액",          desc: "50만원 이하" },
                        ],
                    },
                    {
                        label: "국제택배",
                        hero:    imgHero9,
                        heroAlt: "",
                        title: "국제택배 서비스",
                        desc: "365일 24시간 가까운 GS25에서 국제택배 접수가 가능 합니다. (SFExpress, 우체국EMS, DHL)",
                        notes: [
                            {
                                text: "GS25 편의점에서 24시간 국제택배 예약/접수가 가능합니다.",
                            },
                            {
                                text: "예약 시 특송사(SF Express, EMS, DHL)를 선택하여 접수 가능합니다.",
                            },
                            {
                                text: "접수시점부터 배달완료까지 배송단계 별 SMS 서비스를 제공합니다.",
                            },
                        ],
                        noticeTitle:"국제택배 이용방법",
                        noticeItems: [
                            { step: "Step 1", title: "홈페이지/모바일APP<br />택배접수 예약", bullets: ["회원, 영문작성"] },
                            { step: "Step 2", title: "물품 포장 후<br />GS25 방문",          bullets: ["세부 내용 작성", "세부 내용 작성", "<span style=\"color: #fb6432;\">특이사항 기재시 컬러</span>"] },
                            { step: "Step 3", title: "무인택배장비로 접수<br />(중량측정)"},
                            { step: "Step 4", title: "카운터에서 결제 후<br />물품보관함에 보관"},
                        ],
                        chargeTitle: "국제택배 이용요금 및 배송 가능 국가",
                        chargeItems: [
                            { text: "서비스 운임 및 배송가능 국가는 각 특송사 별 상이하며, 홈페이지/모바일 APP 예약 시 운임 조회 가능" },
                            { text: "운임 결제는 선불만 가능" },
                            { text: "점포 별로 마감시간이 다를 수 있음" },
                        ],
                        methodTitle: "국제택배 배송방법",
                        methodItems: [
                            { text: "평일 17시(시,군,구 일부지역 및 경기 일부지역 15시), 토요일 12시 이전 접수 시 CJ대한통운 택배를 통해 수거 되며, 익일 각 특송사에 접수되어 해외로 발송" },
                            { text: "일요일 및 공휴일은 접수만 가능" },
                            { text: "점포 별로 마감시간이 다를 수 있음" },
                        ],
                    },
                    {
                        label: "픽업",
                        hero: imgHero10,
                        heroAlt: "",
                        title: "픽업 서비스",
                        desc: "쇼핑몰에서 상품주문 후, 가까운 GS25에서 물건을 찾아가세요.",
                        notes: [
                            {
                                text: "원하는 시간에 지정한 점포에서 수령이 가능합니다. (안심택배)",
                            },
                            {
                                text: "도착 완료 시 SMS 알림 서비스를 제공합니다.",
                            },
                        ],
                        pickupTitle: "픽업 이용방법",
                        pickupItems: [
                            { step: "Step 1", title: "쇼핑몰 배송방법<br />편의점 PICK-UP 선택" },
                            { step: "Step 2", title: "가까운 GS25 선택"},
                            { step: "Step 3", title: "물건 도착 SMS를 받고<br />편의점 방문 수령"},
                        ],
                        shoppingTitle: "픽업서비스 제휴쇼핑몰",
                        shoppingItems: [ { text: "제휴 쇼핑몰은 <a href=\"https://www.cvsnet.co.kr\" target=\"_blank\" rel=\"noopener noreferrer\">www.cvsnet.co.kr</a>에서 확인" } ],
                    },
                    {
                        label:   "쇼핑몰거래",
                        hero:    imgHero10,
                        heroAlt: "",
                        title:   "쇼핑몰 거래 서비스",
                        desc:    "홈쇼핑 반품, 오픈마켓, 온라인 쇼핑몰 등 편리하게 이용하실 수 있는 서비스입니다.",
                        notes: [
                            { text: "365일 24시간 편리한 시간대에 가까운 GS25에 방문하여 이용 가능합니다." },
                        ],
                        pickupTitle: "이용방법",
                        pickupItems: [
                            { step: "Step 1", title: "제휴업체 승인번호 발급 후<br />GS25 방문", bullets: ["회원, 영문작성"]},
                            { step: "Step 2", title: "무인택배장비에서<br />승인번호 입력" },
                            { step: "Step 3", title: "운송장 출력 후<br />접수" },
                        ],
                        shoppingTitle: "이용가능 제휴처",
                        shoppingItems: [ { text: "제휴 쇼핑몰은 <a href=\"https://www.cvsnet.co.kr\" target=\"_blank\" rel=\"noopener noreferrer\">www.cvsnet.co.kr</a>에서 확인" } ],
                    },
                ],
            },
            {
                hero: null,
                heroAlt: "",
                title: "공공요금수납",
                subtitle: "365일 24시간 가까운 GS25에서 택배 접수가 가능합니다.",
                desc: "지로고지서에 편의점 수납용 바코드가 있다면 GS25편의점에서 24시간 365일 세금, 4대보험료 및 공과금의 편리한 납부가 가능한 서비스입니다.",
                sections: [],
                taxTitle: "납부가능 세금 및 공과금",
                taxGroups: [
                    {
                        subtitle: "세금",
                        isList: true,
                        items: [
                            "국세(소득세, 법인세, 부가세, 상속세, 증여세, 개별소비세, 종합부동산세)",
                            "서울, 부산시지방세(취득세, 등록세, 재산세, 자동차세, 주민세, 상하수도요금 버스정용차선위반벌칙금 등)",
                            "기타 지방세(남양, 안양, 안산, 고양, 과천부, 양주, 동두천, 마주, 충전, 제천, 보령시 및 음성군 - 취득세, 등록세, 재산세, 주민세, 자동차세 등)",
                        ],
                    },
                    {
                        subtitle: "4대보험료",
                        items: [
                            "건강보험, 국민연금, 고용보험, 산재보험(사회보험통합 4대보험료)",
                        ],
                    },
                    {
                        subtitle: "공과금",
                        items: [
                            "전기요금, 도시가스요금(서울, 삼천리, 서라벨, 인천, 강남, 경동도시가스), 통신요금(kt, LGU+, SKT), 케이블TV요금(현대HCN, 티브로드, C&M, CMB, 스카이라이프, 아름방송, 충북방송, 남인천방송, 금강방송, 무료방송 등), 신문료(조선일보, 매일경제신문), 한국도로공사 과태료 등",
                        ],
                    },
                ],
            },
            {
                hero: null,
                heroAlt: "",
                title: "상품권 판매",
                subtitle: "상품권 판매 서비스",
                desc: "문화상품권, 금강제화, GS칼텍스 상품권 등을 판매하고 있습니다.",
                sections: [],
                voucherTitle: "상품권 종류",
                voucherItems: [
                    {
                        img: imgGiftCerti01,
                        name: "문화상품권",
                        tags: [
                            { text: "5천원권", type: "blue" },
                            { text: "1만원권", type: "green" },
                        ],
                        desc: "도서음반, 영화티켓구입, 외식(일부), 인터넷(게임, 포털)에서 사용 가능한 상품권",
                    },
                    {
                        img: imgGiftCerti02,
                        name: "금강제화상품권",
                        tags: [
                            { text: "5만원권", type: "orange" },
                            { text: "10만원권", type: "orange" },
                        ],
                        desc: "전국 1300여개 도시 4000여 매장 (~5만원권, 10만원권)/(금강, 버팔로, PGA, LPGA, 금강핸드백 등) 어디서나 사용 가능한 실속 있는 상품권",
                    },
                    {
                        img: imgGiftCerti03,
                        name: "GS칼텍스상품권",
                        tags: [
                            { text: "1만원권", type: "green" },
                            { text: "5만원권", type: "orange" },
                            { text: "10만원권", type: "orange" },
                        ],
                        desc: "주유소,백화점,외식,마트,호텔,여행사 등에서 사용 가능한 상품권",
                    },
                ],
            },
        ],
    },
    winwin: {
        tabs: [
            {
                serviceTabs: [
                    { 
                        label: "점포\n운영지원 혜택",
                        title: "점포 운영지원 혜택",
                        notes: [
                            { text: "※ 해당 혜택 및 제도는 상황에 따라 변경/폐지/추가 될 수 있습니다." },
                        ],
                        items: [
                            {
                                num: "01",
                                title: "인력 지원 제도",
                                desc: "매출 향상, 신상품 도입 등 점포 경쟁력 향상을 위해<br />노력하시는 경영주님을 위한 인센티브 제도",
                            },
                            {
                                num: "02",
                                title: "카운터FF 운영 우수점 지원",
                                desc: "카운터FF 매출 활성화 도모",
                                bullets: ["치킨25 운영비 지원", "카페25 운영비 지원", "위생등급 취득 점포 점수 필터 지원"],
                            },
                            {
                                num: "03",
                                title: "채용 플랫폼 지원",
                                desc: "스토어매니저(근무자) 구인 지원",
                                bullets: ["알바몬 이용 지원", "제휴 플랫폼 지원"],
                            },
                            {
                                num: "04",
                                title: "상생지원 보험",
                                desc: "업계를 선도하는 '다양한 보험 지원'제도",
                                bullets: ["안심상해/횡령", "택배도난/현금도난"],
                            },
                            {
                                num: "05",
                                title: "가맹점 상생대출",
                                desc: "신용/담보대출 우대금리 적용",
                                bullets: ["우리은행 연계 대출", "추가 우대금리 적용"],
                            },
                        ],
                    },
                    {
                        label: "장기운영점 및\n우수점포 혜택",
                        title: "장기운영점 및 우수점포 혜택",
                        items: [
                            { num: "01", title: "10년차 장기운영 지원 혜택", desc: "10주년 운영 경영주님 예우",bullets: ["기념패", "건강검진"] },
                            { num: "02", title: "20년차 장기운영 지원 혜택", desc: "20’s Clubf 가입", bullets: ["기념패", "여행상품권", "건강검진"] },
                            { num: "03", title: "30년차 장기운영 지원 혜택", desc: "30주년 운영 경영주님 점포 세레머니 진행", bullets: ["기념패", "30주년 기념 행사", "여행상품권","건강검진"]},
                            { num: "04", title: "우수점포 경영주 포상", desc: null, bullets: ["우수점포 대상 혜택 지급"] },
                        ],
                    },
                    {
                        label: "점포\n소원 지원",
                        title: "점포 소원 지원",
                        items: [
                            { num: "01", title: "해피콜 센터 운영(24H)", desc: "24시간 소통채널 운영" , bullets: ["시설", "전산", "건의사항", "기타문의"]},
                            { num: "02", title: "무료 법률 상담 서비스", desc: "변호사 무료 법률 자문 상담", bullets: ["민사 / 형사", "가사 / 행정"] },
                            { num: "03", title: "노무상담 콜센터 운영", desc: "전반적인 노무 상담 서비스 제공", bullets: ["채용","4대 보험","전반적인 노무"] },
                        ],
                    },
                    {
                        label: "(경영주/스토어매니저)\n역량 레벨업 지원",
                        title: "(경영주/스토어매니저) 역량 레벨업 지원",
                        items: [
                            { num: "01", title: "GS25 챗봇조이", desc: "GS25 근무 지원을 위한 카카오톡 챗봇 서비스" , bullets: ["365일 24시간 응답", "재고 / 물류 조회", "점포 운영 매뉴얼", "모바일 해피콜 등록"], link: "https://pf.kakao.com/_xmTxexcb?from=qr" },
                            { num: "02", title: "모바일 점포경영", desc: "경영주와 스토어매니저 간 점포 운영 업무에 대한 소통 지원 APP", bullets: ["경영주/스토어매니저 전용 앱", "서비스 체크타임", "소비기한 관리","오늘의 업무 관리", "공지 전달"] },
                            { num: "03", title: "온라인 열린아카데미", desc: "경영주 역량 강화", bullets: ["매월 2회 라이브 교육", "다양한 컨텐츠","사내/외 전문강사"] , link: "https://gs25.getsmart.co.kr/members/login?returnUrl=http%3A%2F%2Fgs25.getsmart.co.kr%2F"},
                            { num: "04", title: "우수점 연구소", desc: "GS25 온라인 소식지", bullets: ["이달의 우수 경영주","성공 사례 안내","운영 Tip 소개"] },
                            { num: "05", title: "신규 경영주 입문교육", desc: null, bullets: ["운영 교육(POS, 점포경영, 시스템","서비스 교육","온라인 교육과정(GS클래스)"] , link: "https://gs25.getsmart.co.kr/members/login?returnUrl=http%3A%2F%2Fgs25.getsmart.co.kr%2F" },
                            { num: "06", title: "스토어매니저 클래스", desc: "근무자 교육 지원", bullets: ["POS 교육","청결 교육","접객서비스 교육"] , link: "http://hpimg.gsretail.com/images/gs25/winwin/web/store_manager_map.html" },
                        ],
                    },
                    {
                        label: "사회공헌\n지원",
                        title: "사회공헌 지원",
                        items: [
                            { num: "01", title: "상생나눔 플랫폼 운영", desc: "사회적 약자를 위한 사회공헌형 점포 운영", bullets: ["내일스토어", "시니어스토어", "늘봄스토어"] },
                            { num: "02", title: "자연재해 피해 위로금", desc: "자연재해 피해를 입은 점포에 위로금 지급", bullets: ["자연재해","화재","가옥/전/답 피해"] },
                            { num: "03", title: "GS 히어로상", desc: "사회적으로 귀감이 되는 경영주,근무자에게 지원", bullets: ["모범상","귀감상","나눔상"] },
                            { num: "04", title: "화재예방 소화기 공유", desc: "점포 인근 화재발생 시 소화기 공유를 통한 화재예방", bullets: ["점포인근 화재발생 시 점포 소화기 공유", "사용 후 교환 지원"] },
                        ],
                    },
                    {
                        label: "경영주\n복지 혜택",
                        title: "경영주 복지 혜택",
                        items: [
                            { num: "01", title: "경조사 지원", desc: "경조금 및 용품 지원", bullets:["경조금 지급", "점포 운영 지원금 지급","장례 용품 지급", "출산 용품 지급"] },
                            { num: "02", title: "명절 및 경조사 자율휴무", desc: "자율 휴무 진행", bullets: ["명절 휴점 및 단축 영업","경조사 휴점 및 단축 영업"] },
                            { num: "03", title: "경영주 복지몰 운영", desc: "경영주 전용 복지몰", bullets: ["합리적 가격", "단독상품", "기획 특가전"] },
                            { num: "04", title: "종합 건강검진 할인", desc: "제휴 건강검진 센터 종합 건강검진 할인가 이용", bullets: ["KMI 센터","협력 병원"] },
                            { num: "05", title: "엔젤 리조트", desc: "엔젤리조트 회원가 이용", bullets: ["한화리조트", "엘리시안 강촌"] },
                            { num: "06", title: "엔젤 렌터카 (장기/중고차)", desc: "GS25 경영주님만을 위한 엔젤 렌터카 (장기/중고차)", bullets: ["제휴가 견적 제공", "빠른 출고/전 차종","전용 상담 채널 운영"] },
                        ],
                    },
                ],
            },
            {
                hero: imgHero11,
                heroAlt: "",
                title: "참여제도",
                desc: "GS25에서는 다양한 의견 수렴, 홍보, 콜센터 지원으로 경영주님에게 도움을 드리고 있습니다.",
                items: [
                    {
                        num: "01",
                        title: "경영주 협의회",
                        desc: "지역별 정기 간담회(격월, 분기별)를 통하여 각종 제도제안 및 이슈사항 협의",
                    },
                    {
                        num: "02",
                        title: "자율분쟁조정위원회",
                        desc: "가맹본부와 경영주 간의 분쟁이 발생 시, 위원장(외부 전문가), 경영주/본부 대표가 자율적 해결/조정안 마련",
                    },
                    {
                        num: "03",
                        title: "24시간 통합 콜센터 운영",
                        desc: "점포 운영의 불편사항에 대한 접수<br />및 상담 창구 운영(24시간 운영)",
                    },
                    {
                        num: "04",
                        title: "경영주 열린제안",
                        desc: "경영주님의 다양한 제안과 아이디어 접수를 통해 생생한 현장의 목소리를 청취하여 점포 운영 및 본부 정책에 개선 반영하고 있습니다.",
                    },
                ],
            },
        ],
    },
    milbox: {
        hero: imgHero12,
        heroAlt: "",
        title: "밀박스/스낵바",
        sections: [
            {
                title: "GS25 기업/단체 대상 정기 배송 서비스란?",
                desc: "대한민국 대표 편의점 GS25가 가진 차별화 경쟁력을 기반으로 한 기업·단체 대상 조식/간식 정기 배송 서비스입니다.<br />사내 식당이 없거나 간식 복지 도입을 고민 중이라면, 아래 서비스를 확인해보세요.",
                items: [
                    { title: "트렌디한 상품" },
                    { title: "합리적인 가격" },
                    { title: "약 1,200개 기업 이용중" },
                ],
            },
        ],
    },
    backLabel: "목록으로 돌아가기",
};

const sinsen = langData.sinsen;
const store = langData.store;
const winwin = langData.winwin;
const milbox = langData.milbox;
const tab0 = langData.tabs[0];
const tab1 = langData.tabs[1];
const tab2 = langData.tabs[2];
const tab3 = langData.tabs[3];

const depth1ActiveIdx = ref(0);
const depth1Tabs = langData.nav.depth1;
const depth2Tabs = langData.nav.depth2;
const storeTabs = langData.nav.depth2Store;
const winwinTabs = langData.nav.depth2Winwin;

const storeActiveTab = ref(0);
const winwinActiveTab = ref(0);
const winwinServiceActiveTab = ref(0);
const giftSwiperInst = ref(null);
const onGiftSwiper = (swiper) => {
    giftSwiperInst.value = swiper;
};
const serviceActiveTab  = ref(0);
const deliveryActiveTab = ref(0);

watch(serviceActiveTab, (idx) => {
    if (idx === 3 && giftSwiperInst.value) {
        nextTick(() => {
            giftSwiperInst.value.update();
        });
    }
});
const popLnbActiveIdx = ref(0);
const trafficSelectVal = ref("subway");
const retailSelectVal = ref("coffee");

/* 팝카드 Swiper — 아코디언 패널 오픈 완료 후 update() 호출 */
const popCardSwiperInst = ref(null);

function onPopCardSwiper(swiper) {
    popCardSwiperInst.value = swiper;
}

function onPopCard0Opened() {
    if (popCardSwiperInst.value) {
        popCardSwiperInst.value.update();
    }
}

/* 교통카드 충전 서비스 Swiper */
const chargingSwiperInst = ref(null);

function onChargingSwiper(swiper) {
    chargingSwiperInst.value = swiper;
}

function onChargingOpened() {
    if (chargingSwiperInst.value) {
        chargingSwiperInst.value.update();
    }
}

const scrollToSection = (idx) => {
    popLnbActiveIdx.value = idx;
    const el = document.getElementById(`pop-sec-${idx}`);
    if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 57;
        window.scrollTo({ top, behavior: "smooth" });
    }
};

const _getIsMobile = () => window.innerWidth <= 768;
const isMobileView = ref(_getIsMobile());
const _onResize = () => { isMobileView.value = _getIsMobile(); };

let popSecObserver = null;
onMounted(() => {
    isMobileView.value = _getIsMobile();
    window.addEventListener("resize", _onResize);

    const targets = document.querySelectorAll("[data-pop-sec]");
    if (!targets.length) return;
    popSecObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    popLnbActiveIdx.value = Number(entry.target.dataset.popSec);
                }
            });
        },
        { threshold: 0.3 }
    );
    targets.forEach((el) => popSecObserver.observe(el));

    gsapCtx = gsap.context(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 769px)", () => {
            const spans = textParaRef.value.querySelectorAll("span");
            const PHASE1_PX = 400;

            ScrollTrigger.create({
                trigger: sectionRef.value,
                start: "top top",
                end: `+=${PHASE1_PX}`,
                scrub: 1.5,
                onUpdate(self) {
                    const p = self.progress;
                    const bw = bgWrapRef.value.offsetWidth;
                    const bh = bgWrapRef.value.offsetHeight;
                    const hInset = p * Math.max(0, (bw - 1420) / 2);
                    const vInset = p * Math.max(0, (bh - 799) / 2);
                    const clip = `inset(${vInset}px ${hInset}px round ${p * 20}px)`;
                    bgWrapRef.value.style.clipPath = clip;
                    bgWrapRef.value.style.webkitClipPath = clip;
                    bgWrapRef.value.classList.toggle("active", p >= 1);
                },
            });

            gsap.set([...spans, logoWrapRef.value], { opacity: 0, y: 40 });

            const textTl = gsap.timeline({ paused: true });
            textTl
                .to(spans, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: "power2.out",
                })
                .to(logoWrapRef.value, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                }, "-=0.3");

            ScrollTrigger.create({
                trigger: sectionRef.value,
                start: `top+=${PHASE1_PX} top`,
                once: false,
                onEnter: () => textTl.play(),
                onLeaveBack: () => textTl.reverse(),
            });

            const aboutSpans = aboutSectionRef.value.querySelectorAll("span");

            gsap.set(aboutSpans, { y: 200, opacity: 0, willChange: "transform, opacity" });

            ScrollTrigger.create({
                trigger: aboutSectionRef.value,
                start: "top 75%",
                once: true,
                onEnter: () => {
                    gsap.to(aboutSpans, {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power3.out",
                        onComplete() {
                            gsap.set(aboutSpans, { willChange: "auto" });
                        },
                    });
                },
            });
        });
    });
});
onUnmounted(() => {
    window.removeEventListener("resize", _onResize);
    if (popSecObserver) popSecObserver.disconnect();
});
onBeforeUnmount(() => {
    if (gsapCtx) gsapCtx.revert();
});

/* =====================
   sec_brand_visual / sec_brand_str (smain)
   ===================== */
const sectionRef = ref(null);
const bgWrapRef = ref(null);
const textParaRef = ref(null);
const logoWrapRef = ref(null);
const aboutSectionRef = ref(null);

const strItems = [
    {
        title: "업계 최고<br />점포 당 매출액 달성",
        desc: "점포 경쟁력을<br class=\"m_br\" />강화하고 고객중심의 상품서비스 제공을 통해<br />편의점 업계 최고의 매출액을 달성하고 있습니다.",
        img: imgAcc01,
    },
    {
        title: "GS25만의 차별화된<br class=\"p_br\" /> 상품과<br class=\"m_br\" />서비스 제공",
        desc: "안전하고 맛있는 후레쉬푸드 상품 등 고품질의 먹거리 상품 개발과<br class=\"p_br\" />좋은 품질, 합리적 가격의 PB브랜드 'YOUUS',<br class=\"p_br\" />GS리테일의 전용 어플리케이션 우리동네GS 등 차별화된 상품과 서비스를 통해 고객에게 새로운 가치를 제공하고 있습니다.",
        img: imgAcc02,
    },
    {
        title: "경영주와의 끊임없는 소통과<br class=\"m_br\" />협력을 통한 <br class=\"p_br\" />단단한 파트너십",
        desc: "경영주와 본부의 파트너십 구축을 위해 다양한 소통창구와 상생제도를 도입하여 운영중에 있습니다. Refresh 휴가지원, GS25 20's Club 등을 업계 최초로 개발하여 경영주의 만족과 자부심을 높이고 있습니다.",
        img: imgAcc03,
    },
];

const openAcc = ref(-1);
const descRefs = [];
const imgRefs = [];
const tokens = strItems.map(() => 0);

function _animateOpen(el, myToken, index) {
    if (el.classList.contains("acc_show") && el.style.height === "auto") return;
    el.classList.add("acc_animating", "acc_show");
    el.style.height = "auto";
    const heightPx = `${el.scrollHeight}px`;
    el.style.height = "0px";
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            if (myToken !== tokens[index]) return;
            el.style.height = heightPx;
        });
    });
    el.addEventListener("transitionend", function onEnd(e) {
        if (e.target !== el || e.propertyName !== "height") return;
        el.removeEventListener("transitionend", onEnd);
        if (myToken !== tokens[index]) return;
        el.style.height = "auto";
        el.classList.remove("acc_animating");
    });
}

function _animateClose(el, myToken, index) {
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
            if (myToken !== tokens[index]) return;
            el.style.height = "0px";
        });
    });
    el.addEventListener("transitionend", function onEnd(e) {
        if (e.target !== el || e.propertyName !== "height") return;
        el.removeEventListener("transitionend", onEnd);
        if (myToken !== tokens[index]) return;
        el.classList.remove("acc_show", "acc_animating");
        el.style.height = "";
    });
}

function toggleAcc(index) {
    const prev = openAcc.value;
    if (prev === index) {
        openAcc.value = -1;
        const t = ++tokens[index];
        _animateClose(descRefs[index], t, index);
        _animateClose(imgRefs[index], t, index);
        return;
    }
    if (prev !== -1) {
        const t = ++tokens[prev];
        _animateClose(descRefs[prev], t, prev);
        _animateClose(imgRefs[prev], t, prev);
    }
    openAcc.value = index;
    const t = ++tokens[index];
    _animateOpen(descRefs[index], t, index);
    // DOM에 is_open 클래스가 적용된 후 이미지 높이를 측정해야 scrollHeight가 올바르게 반환됨
    nextTick(() => {
        _animateOpen(imgRefs[index], t, index);
    });
}

let gsapCtx = null;

const depth1Routes = ["/gsrbr010101", null, null, null, null];

function onDepth1Change(idx) {
    depth1ActiveIdx.value = idx;
    const route = depth1Routes[idx];
    if (route) router.push(route);
}

function goBack() {
    if (window.history.length > 1) {
        router.back();
    } else {
        router.push("/");
    }
}
</script>

<style scoped>
/* =====================
   sec_brand_visual
   ===================== */
@media (max-width: 768px){
    .cafe25_split_img >img{
        width: 100%;
    }
}

.cafe_panel :deep(.brand_panel_bg > img) {
    object-position: center bottom;
}
.chicken_panel .img_grid_swiper {
   margin-top:120px;
}

@media (max-width: 768px) {
    .chicken_panel .img_grid_swiper {
        margin-top:60px;
    }
}
.gopizza_panel .img_grid,
.gopizza_panel .img_grid_swiper{
    margin-top: 0;
    padding:0;
}


@media (max-width: 768px) {
    :deep(.brand_panel_bg > img){
        object-fit: none;
    }
    .cafe_panel :deep(.brand_panel_bg > img) {
        object-position: -348px center;
    }
    .chicken_panel :deep(.brand_panel_bg > img) {
        object-position: -385px center;
    }
    .gopizza_panel :deep(.brand_panel_bg > img) {
        object-position: -591px bottom;
    } 
    .gopizza_panel :deep(.diff_bottom_row){
        margin-top:120px;
    }
    .sinsen_panel :deep(.brand_panel_bg > img) {
        object-position: -797px bottom; 
    }

}

.sec_brand_visual {
    position: relative;
    height: calc(100vh + 800px);
}

.sticky {
    --base-ratio: 0.75;
    --base-size: 1536;
    --base-percent: 100vw;
    width: 100%;
    height: calc(100vh + max(calc(2px * var(--base-ratio)), calc(calc(2 / var(--base-size)) * var(--base-percent))));
    position: -webkit-sticky;
    position: sticky;
    top: max(calc(1 / var(--base-size) * var(--base-percent) * -1));
    left: 0;
    overflow: hidden;
}

@media (max-width: 768px) {
    .sec_brand_visual {
        height: 100vh;
    }

    .sticky {
        height: 100vh;
        top: 0;
    }
}

.bg_wrap {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    overflow: hidden;
    clip-path: inset(0% round 0px);
    -webkit-clip-path: inset(0% round 0px);
}

.bg_wrap > .bg {
    width: 100%;
    height: 100%;
    background-image: url(@/assets/images/dummy/brand_main_bg.jpg);
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transform: scale(1.2);
    transition: transform 0.7s ease-out;
}

@media (max-width: 768px) {
    .bg_wrap > .bg {
        background-image:
            linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
            url(@/assets/images/dummy/brand_main_bg.jpg);
        transform: scale(1.25);
        background-position: 54% 50px;
    }
}
.bg_wrap.active > .bg {
    transform: scale(1);
}

.bg_wrap > .bg::before,
.bg_wrap > .bg::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: 0.7s;
}

.bg_wrap > .bg::before {
    background-color: #00000066;
    z-index: 2;
}

.bg_wrap > .bg::after {
    background: linear-gradient(180deg, rgba(0, 0, 0, .3) 0, rgba(0, 0, 0, .3) 48.27%, rgba(0, 0, 0, 0) 90.33%);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    z-index: 1;
}

.bg_wrap.active > .bg::before,
.bg_wrap.active > .bg::after {
    opacity: 1;
    visibility: visible;
}

.bg_wrap > .visual_inner {
    /* width: 1420px;
    height: 799px; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bg_wrap .visual_inner > .txt_area {
    position: relative;
    z-index: 3;
    text-align: center;
}

.txt_area > p {
    width: 100%;
    margin-bottom: 48px;
    overflow: hidden;
}

.txt_area > p > span {
    color: #fff;
    font-size: 5.6rem;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.01em;
    word-break: keep-all;
    word-wrap: break-word;
    display: block;
}

.txt_area > .logo_wrap {
    overflow: hidden;
}

.txt_area > .logo_wrap > img {
    width: auto;
    margin: 0 auto;
    display: block;
}

.m_gs25 {
    font-style: normal;
    display: none;
}

/* =====================
   sec_brand_about
   ===================== */
.sec_brand_about {
    padding: 200px 0;
    background-color: #f8f8f8;
}

.sec_brand_about .mo_txt {
    display: none;
}

.sec_brand_about .pc_txt {
    overflow: hidden;
}

.sec_brand_about > .about_inner {
    width: 940px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.sec_brand_about > .about_inner > .pc_txt {
    overflow: hidden;
}

.sec_brand_about > .about_inner > .pc_txt > span {
    color: #161616;
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.01em;
    will-change: transform, opacity;
    display: block;
}

/* =====================
   sec_brand_str
   ===================== */
/* .sec_brand_str {
    padding: 200px 0;
} */

.sec_brand_str > .str_inner {
    width: 1420px;
    margin: 0 auto;
    padding:200px 0;
}

.str_header {
    padding-bottom: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.str_header > h2 {
    color: #161616;
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.01em;
}

.str_header > .str_actions {
    display: flex;
    align-items: center;
    gap: 24px;
}

.btn_store_find {
    padding: 4px;
    color: #161616;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.4;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
}

.btn_store_find::before {
    content: "";
    width: 24px;
    height: 24px;
    background-color: #aca9a9;
    flex-shrink: 0;
    display: block;
}

.sns_wrap {
    display: flex;
    align-items: center;
    gap: 6px;
}

.btn_sns {
    width: 56px;
    height: 56px;
    background-color: #F8F8F8;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn_sns::before {
    content: "";
    background-color: #161616;
    border-radius: 4px;
    display: block;
}

/* .btn_sns_insta::before {
    width: 18px;
    height: 18px;
}

.btn_sns_yt::before {
    width: 22px;
    height: 16px;
} */

/* =====================
   Accordion 커스텀
   ===================== */
.brand_acc {
    margin: 0;
    padding: 0;
    background-color: #f8f8f8;
    border-radius: 12px;
    list-style: none;
    overflow: hidden;
}

.acc_item {
    border-bottom: 1px solid #e5e5e9;
}

.acc_inner {
    padding: 40px 64px;
    display: grid;
    grid-template-columns: 1fr 0;
    align-items: start;
}

.acc_item.is_open .acc_inner {
    grid-template-columns: 1fr 1fr;
}

.acc_body {
    min-width: 0;
}

.acc_btn {
    width: 100%;
    padding: 0;
    color: #161616;
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.01em;
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
}

.acc_btn:focus-visible {
    outline: 2px solid #111;
    outline-offset: 2px;
}

.acc_btn::after {
    content: "";
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    background-color:#161616;
    display:block;
}

.acc_item.is_open .acc_btn::after {
    opacity: 0;
}

.acc_desc_wrap {
    overflow: hidden;
    height: 0;
    box-sizing: border-box;
    transition: height 0.35s ease;
}

.acc_desc {
    padding-top: 16px;
    color: #67676f;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

:deep(.p_br) {
    display: block;
}
:deep(.m_br) {
    display: none;
}

.acc_img_wrap {
    overflow: hidden;
    height: 0;
    transition: height 0.65s ease;
}

.acc_img_wrap > img {
    width: auto;
    margin-left: auto;
    border-radius: 12px;
    display: block;
    object-fit: cover;
}

@media (max-width: 1024px) {
    .sec_brand_about > .about_inner {
        width: 100%;
        padding: 0 40px;
        box-sizing: border-box;
    }

    .sec_brand_str > .str_inner {
        width: 100%;
        padding: 100px 40px;
        box-sizing: border-box;
    }

    .acc_inner {
        padding: 28px 40px;
    }

    .acc_item.is_open .acc_inner {
        grid-template-columns: 1fr 280px;
        column-gap: 28px;
    }

    .acc_img_wrap > img {
        width: 100%;
    }
}

@media (max-width: 768px) {
    .bg_wrap > .visual_inner {
        width: calc(100% - 40px); /* 좌우 20px 여백 */
        height: auto;
        top: 358px;
        bottom: 318px;
        transform: translateX(-50%); /* 수평 중앙만 유지 */
    }
    .btn_store_find{
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 1.4;
        letter-spacing: -0.01em;
        
    }
    .btn_store_find::before {
        width: 20px;
        height: 20px;
    }
    .txt_area > p{
        margin-bottom: 0;
    }
    .txt_area > p > span, .txt_area > p > span em{
        color:#fff;
        font-size: 3.2rem;
        line-height: 1.3;
        letter-spacing: -0.01em;
        text-align: center;
    }
    .txt_area > .logo_wrap {
        display: none;
    }

    .m_gs25 {
        display: inline;
    }

    .txt_area > p > span:first-child::after {
        content: ",";
    }

    .sec_brand_about .mo_txt {
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 1.24;
        letter-spacing: 0%;
        display: block;
    }

    .sec_brand_about .pc_txt {
        display: none;
    }

    .sec_brand_about {
        padding: 140px 0;
    }

    .sec_brand_about > .about_inner {
        padding: 0 20px;
        gap: 40px;
    }

    .sec_brand_about > .about_inner > .pc_txt > span {
        font-size: 1.8rem;
    }

    .sec_brand_str {
        padding: 140px 0;
    }

    .sec_brand_str > .str_inner {
        padding: 0 20px;
    }

    .str_header {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        padding-bottom: 40px;
    }

    .str_header > h2 {
        font-size: 2.8rem;
        line-height: 1.35;
        letter-spacing: -0.01em;
    }

    .str_header > .str_actions {
        gap:14px;
        flex: none;
        justify-content: flex-start;
    }
    .sns_wrap{
        gap:16px
    }
    .btn_sns{
        width: 40px;
        height: 40px;
    }
    .acc_btn {
        font-size: 1.8rem;
        line-height: 1.5;
        letter-spacing: -0;
    }

    .acc_inner {
        padding: 24px;
    }

    .acc_desc{
        font-size: 1.6rem;
        line-height: 1.5;
    }

    .acc_item.is_open .acc_inner {
        grid-template-columns: 1fr;
        column-gap: 0;
        row-gap:40px;
    }



    :deep(.p_br) {
        display: none;
    }

    :deep(.m_br) {
        display: inline;
    }
}

.brand_panel_desc {
    margin-top: 16px;
    font-size: 2rem;
    line-height: 1.35;
    letter-spacing: -0.01em;
    color:#67676F;
}
.list_dotted > li {
    padding-left: 12px;
    position: relative;
}

.list_dotted > li + li {
    margin-top: 8px;
}

.list_dotted > li::before {
    content: "";
    width: 4px;
    height: 4px;
    background-color: #161616;
    border-radius: 50%;
    position: absolute;
    top: 11px;
    left: 0;
}

.list_dotted > li > p {
    margin: 0;
    color: #161616;
    font-size: 1.8rem; 
    line-height: 1.4;
}

@media (max-width: 768px) {   
    .list_dotted > li > p {
        font-size: 1.6rem;
        line-height: 1.5;
        letter-spacing: -0.01em;
    }
}
.list_dotted > li > p :deep(a) {
    color: #107af2;
    font-size: 1.8rem;
    line-height: 1.4;
    text-decoration: underline;
}
img {
    display: block;
}

button {
    background-color: #fff;
}

.usage_select_box {
    width: 180px;
    padding: 11px 44px 11px 16px;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
    background-color: #F8F8F8;
    border: 0;
    border-radius: 6px;
    appearance: none;
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 7.5L10 12.5L15 7.5' stroke='%23111111' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
    background-size: 20px 20px;
    cursor: pointer;
}

@media (max-width: 768px){
    .usage_select_box  {
        width: 100%;
        font-size: 1.4rem;
        line-height: 1.4;
    }
}
.tab_wrap {
    margin-bottom: 0;
}

.tab_wrap + .tab_wrap {
    margin-top: 24px;
    margin-bottom: 24px;
}

.brand_content {
    max-width: 1420px;
    margin: 0 auto;
    padding: 0 80px 200px;
}

@media (max-width: 1280px) {
    .brand_content {
        padding-left: 40px;
        padding-right: 40px;
    }
}

.brand_panel {
    padding-top: 40px;
    padding-bottom: 145px;
}

.brand_panel section {
    padding-bottom: 120px;
}



@media (max-width: 768px) {
    .brand_panel section {
        padding: 0 20px 80px;
    }

}

.brand_panel section:last-of-type {
    padding-bottom: 0;
}

/* ── 탭 0: 차별화 상품 ── */
.diff_card_grid {
    margin: 0 0 40px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 460px));
    gap: 20px;
}

.diff_card {
    margin: 0;
    padding: 0;
    background-color: #fff;
    border-radius: 12px;
    overflow: hidden;
}

.diff_card > figure {
    margin: 0;
    padding: 0;
    background-color: #e8e8ec;
    overflow: hidden;
}

@media (max-width: 768px) {
    .diff_card > figure {
        height:220px;
    }
}

.diff_card > figure > img {
    height: 100%;
    object-fit: cover;
}

.diff_card > div {
    min-height: 200px;
    padding: 32px;
    background-color: #f8f8f8;
}

.diff_card > div > h3 {
    margin: 0 0 16px;
    color: #161618;
    font-size: 2.8rem;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

.diff_card > div > p {
    margin: 0;
    color: #67676f;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.01em;
}

/* ── 탭 1: CAFE25 ── */
.cafe25_card_list {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, calc((100% - 40px) / 3));
    gap: 20px;
}

.cafe25_card_list > li {
    min-width: 0;
    overflow: hidden;
}

.cafe25_card_list > li > div {
    width: 100%;
}

.cafe25_img_wrap {
    max-width: 938px;
    margin: 0;
    padding: 0;
    background-color: #f8f8f8;
    border-radius: 12px;
    overflow: hidden;
}

.cafe25_split {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}

.cafe25_split > div {
    width: calc(50% - 10px);
    min-width: 0;
}



.cafe25_split_table {
    overflow-x: auto;
}

.cafe25_table_wrap {
    overflow-x: auto;
}

.cafe25_table {
    border-collapse: collapse;
    table-layout: fixed;
}

.tbl_mo {
    width: 100%;
    border-collapse: collapse;
}

.tbl_mo th,
.tbl_mo td {
    height: 56px;
    text-align: left;
    border-bottom: 1px solid #E5E5E9;
    vertical-align: middle;
}

.tbl_mo th {
    padding: 18px 24px;
    background-color: #F8F8F8;
}

.tbl_mo th > span {
    color: #161618;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.24;
    letter-spacing: 0;
}

.tbl_mo td {
    padding: 16px 20px;
}

.tbl_mo td > span {
    color: #161616;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.24;
    letter-spacing: 0;
}

.tbl_mo td .flag_icon {
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
}

.tbl_mo tr:first-child th,
.tbl_mo tr:first-child td {
    border-top: 1px solid #E5E5E9;
}

.cafe25_table_pagination,
.gopizza_table_pagination {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;
}

.cafe25_table_pagination :deep(.swiper-pagination-bullet),
.gopizza_table_pagination :deep(.swiper-pagination-bullet) {
    width: 6px;
    height: 6px;
    background-color: #D7D7DF;
    border-radius: 50%;
    opacity: 1;
    cursor: pointer;
    display: block;
}

.cafe25_table_pagination :deep(.swiper-pagination-bullet-active),
.gopizza_table_pagination :deep(.swiper-pagination-bullet-active) {
    background-color: #161616;
}

.cafe25_table th,
.cafe25_table td {
    height: 56px;
    padding: 0 24px;
    border-bottom: 1px solid #e5e5e9;
    vertical-align: middle;
    white-space: nowrap;
}

.cafe25_table th > span,
.cafe25_table td > span {
    color: #161618;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.01em;
}

.cafe25_table th:first-child,
.cafe25_table td:first-child {
    border-left: 0;
}

.cafe25_table th:last-child,
.cafe25_table td:last-child {
    border-right: 0;
}

.cafe25_table th {
    background-color: #f8f8f8;
    border-top: 0;
}

.cafe25_table th > span {
    font-weight: 600;
}

@media (max-width: 768px) {
    .cafe25_table th,
    .cafe25_table td {
        padding: 16px 24px;
    }
    .cafe25_table th > span,
    .cafe25_table td > span {
        font-size: 1.6rem;
        line-height: 1.5;
        letter-spacing: -0.01em;
    }
    .cafe25_table th > span {
        font-weight: 700;
    }
}

.cafe25_table > tbody > tr > td > .flag_icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
    object-fit: cover;
}

/* ── 탭 2: CHICKEN25 ── */
.chicken25_card_list {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, calc((100% - 40px) / 3));
    gap: 20px;
}
.chicken25_card_list > li {
    min-width: 0;
}

.chicken25_card {
    height: 264px;
    padding: 32px;
    background-color: #f8f8f8;
    border-radius: 12px;
}

.chicken25_card > h4 {
    margin: 0 0 16px;
    color: #161618;
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

.chicken25_card > p {
    margin: 0;
    color: #67676f;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.01em;
}

.img_grid {
    margin-top: 120px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, calc((100% - 20px) / 2));
    gap: 20px;
}

.img_grid > li {
    min-width: 0;
    border-radius: 12px;
    overflow: hidden;
}

.img_grid img {
    width: 100%;
    object-fit: cover;
}

/* ── 탭 3: GOPIZZA ── */
.gopizza_img_grid {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, calc((100% - 20px) / 2));
    gap: 20px;
}

.gopizza_img_grid > li {
    min-width: 0;
}

.gopizza_img_grid > li > div {
    height: 440px;
    border-radius: 12px;
    overflow: hidden;
}

.gopizza_img_grid img {
    height: 100%;
    object-fit: cover;
}

.gopizza_img_wrap {
    height: 440px;
    margin: 0;
    padding: 0;
    border-radius: 12px;
    overflow: hidden;
}

.gopizza_img_wrap > img {
    height: 100%;
    object-fit: cover;
}

.gopizza_menu {
    display: flex;
    gap: 20px;
}

.gopizza_menu_panel {
    min-width: 0;
    flex: 1;
}


.gopizza_menu_panel img{
    width: 100%;
    border-radius: 12px;
    object-fit: cover;
}

@media (max-width: 768px) {
    .gopizza_menu_panel + .gopizza_menu_panel{
        margin-top:100px;
    }
    .gopizza_menu_panel img{
        min-height: 240px;
    }
}

.gopizza_menu_info {
    padding-top: 24px;
}

.gopizza_menu_title {
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.gopizza_menu_title > strong {
    color: #161618;
    font-size: 2.4rem;
    font-weight: 700; 
    line-height: 1.35;
    letter-spacing: -0.01em;
}

@media (max-width: 768px) {
    .gopizza_menu_title{
        gap:4px;
        flex-direction: column;
        align-items: flex-start;
    }
    .gopizza_menu_title > strong {
        font-size: 1.8rem;
        line-height: 1.5;
        letter-spacing: 0%;
    }
}

.gopizza_menu_tag {
    color: #67676f;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.01em;
}
.gopizza_menu_tag + .gopizza_menu_tag{
    margin-left: 8px;
}   
.gopizza_menu_tag + .gopizza_menu_tag::before {
    content: "";
    width: 1px;
    height: 8px;
    margin-right: 8px;
    background-color: #d7d7df;
    display: inline-block;
}

/* ── 공통 테이블 ── */
.com_table_wrap {
    overflow-x: auto;
}

.com_table {
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid #e5e5e9;
}

.com_table th,
.com_table td {
    padding: 0 24px;
    color: #161618;
    font-size: 1.8rem;
    line-height: 1.6;
    letter-spacing: -0.01em;
    border-bottom: 1px solid #e5e5e9;
    vertical-align: middle;
}

.com_table thead th {
    height: 64px;
    font-weight: 600;
    background-color: #f8f8f8;
}

.com_table tbody th {
    width: 136px;
    min-width: 136px;
    max-width: 136px;
    font-weight: 700;
    background-color: #f8f8f8;
    text-align: left;
    white-space: normal;
    word-break: keep-all;
    vertical-align: top;
    padding-top: 18px;
    padding-bottom: 18px;
}

.com_table tbody td {
    padding: 18px 24px;
    font-weight: 400;
    text-align: left;
}

.com_table_col thead th,
.com_table_col tbody td {
    text-align: center;
}


.gopizza_menu_name {
    display: flex;
    align-items: center;
    gap: 6px;
}

.gopizza_badge_best {
    padding: 2px 6px;
    color: #fb4516;
    font-size: 1.1rem;
    font-weight: 600;
    font-style: normal;
    letter-spacing: -0.02em;
    background-color: #ffe9e3;
    border-radius: 4px;
}


.diff_bottom_row {
    display: flex;
    gap: 32px;
}

.diff_bottom_row > .diff_qr_row {
    flex: 1;
}

.gopizza_link {
    min-width: 0;
    display: flex;
    align-items: center;
    flex: 1;
    gap: 20px;
    text-decoration: none;
}

.gopizza_link > figure {
    width: 90px;
    height: 90px;
    margin: 0;
    padding: 8px;
    background-color: #fff;
    border: 1px solid #e5e5e9;
    border-radius: 10px;
    flex-shrink: 0;
    display: none;
    }

.gopizza_link > figure > img {
    width: 100%;
    display: block;
}

.gopizza_link > div {
    min-width: 0;
    padding: 7px 0;
    flex: 1;
}

.gopizza_link > div > strong {
    margin: 0 0 6px;
    color: #161618;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: -0.01em;
    display:flex;
    gap:8px;
    align-items: center;
}

.gopizza_link > div > strong:after{
    content:"";
    width:20px;
    height:20px;
    background-color:red;
}

.gopizza_link > div > p {
    margin: 0;
    color: #67676f;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.02em;
}

/* ── 신선강화점 ── */
.sinsen_feature :deep(.feature_card_item) {
    min-height: 240px;
}

.info_card {
    max-width: 940px;
    padding: 32px;
    background-color: #f8f8f8;
    border-radius: 12px;
}

.info_card strong{
    margin-bottom:8px;
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.35;
    letter-spacing: -0.01em;
    display: block;
}
@media (max-width: 768px) {
    .info_card strong{
        font-size: 18px;
        line-height: 150%;
        letter-spacing: 0%;
    }

}
@media (max-width: 768px) {
    .sinsen_feature :deep(.feature_card_item) {
        min-height: 227px;
    }
}
.info_card span{
font-size: 1.8rem;
line-height: 1.4;
}
@media (max-width: 768px) {
    .info_card span {
    font-size: 1.4rem; 
    letter-spacing: -0.01em;

    }
}
.info_card > p {
    margin-bottom: 32px;
    color: #67676f;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.01em;
}

@media (max-width: 768px) {
    .info_card > p {
     margin-bottom:12px;
    }
}

.sinsen_flow_img {
    width: 100%;
    margin-top: 24px;
    display: block;
    border-radius: 10px;
}

@media (max-width: 768px) {
    .sinsen_flow_img {
       height:130px;
    }
}

/* 운영 장점 체크리스트 */
.sinsen_check_list > li {
    padding-bottom: 12px;
    color: #161618;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.01em;
    display: flex;
    align-items: baseline;
    gap: 8px;
}

.sinsen_check_list > li:last-child {
    padding-bottom: 0;
}

.sinsen_check_list > li::before {
    content: "";
    width: 16px;
    height: 16px;
    background-color: #107af2;
    border-radius: 50%;
    position: relative;
    top: 2px;
    flex-shrink: 0;
}

.sinsen_check_list > li > div {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.sinsen_check_note {
    color: #67676f;
}

.sinsen_check_subs {
    margin-top: 4px;
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.sinsen_check_subs > span {
    color: #67676f;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
}

.chicken_panel :deep(.feature_card_item) {
    min-height: 238px; 
   
}


/* ── 생활 서비스 3depth 탭 ── */
.service_tab_wrap {
    margin-bottom: 80px;
    min-width: 0;
    display: flex;
    overflow-x: auto;
}

.service_tab_item {
    padding: 24px 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    flex: 0 0 max(177.5px, calc(100% / 8));
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}

.service_tab_icon {
    width: 48px;
    height: 48px;
    background-color: #d7d7df;
    border-radius: 8px;
    display: block;
    flex-shrink: 0;
}

.service_tab_item.is_active .service_tab_icon {
    background-color: #107af2;
}

.service_tab_label {
    color: #7c7c86;
    font-size: 1.8rem; 
    font-weight: 700;
    line-height: 1.5;
    text-align: center;
    white-space: pre-line;
}

.service_tab_item.is_active .service_tab_label {
    color: #107af2;
}

.service_panel {
    min-height: 200px;
}

/* section 안에 SectionHeader만 있을 때 header 여백 제거 */
.service_panel section:has(> header:only-child) :deep(header) {
    margin-bottom: 0;
    padding: 0;
}

.pop_exclude {
    margin-top: 8px;
    color: #f95823;
    font-size: 1.4rem;
    line-height: 1.4;
    letter-spacing: -0.01em;
}

.pop_card_item {
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

/* 데스크탑: Swiper 비활성화 → 기존 flex 레이아웃처럼 표시 */
@media (min-width: 769px) {
    .pop_card_swiper {
        overflow: visible;
    }

    .pop_card_swiper :deep(.swiper-wrapper) {
        gap: 20px;
        transform: none !important;
    }

    .pop_card_swiper :deep(.swiper-slide) {
        width: auto !important;
        height: auto !important;
        flex: 1;
    }
}

.pop_card_thumb {
    width: 100%;
    display: block;
}

.pop_card_thumb  img {
    width: auto;
    height: auto;
}

.pop_card_body {
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    flex: 1;
}

@media (max-width: 768px) {
    .pop_card_body {
        min-height: 196px;
        padding-right: 8px;
    }
}

.pop_card_name {
    margin-bottom: 12px;
    color: #161616;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.01em;
    display: block;
}

@media (max-width: 768px) {
    .pop_card_name {
        margin-bottom: 12px;
        font-size: 1.6rem;
        line-height: 1.24;
        letter-spacing: 0;

    }
}
.pop_card_desc {
    color: #67676f;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
    white-space: pre-line;
}

@media (max-width: 768px) {
    .pop_card_desc {
        font-size: 1.4rem;
        line-height: 1.4;

    }
}

.pop_card_note {
    margin-top: 8px;
    color: #67676f;
    font-size: 1.4rem;
    line-height: 1.4;
    letter-spacing: -0.02em;
}

.pop_card_note.is_warn {
    color: #f95823;
}

.pop_card_logos {
    margin-top: auto;
    padding-top: 16px;
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
}

@media (max-width: 768px) {
    .pop_card_logos {
        padding-top: 0;
    }
}
.pop_logo_thumb {
    width: auto;
    display: block;
}

/* ── pop_sec 아코디언 (데스크탑: 항상 펼침 / 모바일: 아코디언) ── */

/* 데스크탑: 아코디언 트리거 숨김, 패널 항상 오픈 */
@media (min-width: 769px) {
    .pop_sec_acc :deep(.acc_tit_btn) {
        display: none;
    }
    .pop_sec_acc :deep(.acc_panel) {
        height: auto !important;
        overflow: visible;
    }
    /* acc_item이 기존 section의 역할: 구분선 제거, 섹션 간격 부여 */
    .pop_sec_acc :deep(.acc_item) {
        border: none;
        padding-bottom: 120px;
    }
    .pop_sec_acc :deep(.acc_item:last-child) {
        padding-bottom: 0;
    }
    /* acc_panel_cont 기본 패딩 초기화 (간격은 acc_item이 담당) */
    .pop_sec_acc :deep(.acc_panel_cont) {
        padding: 0;
    }
}

/* 모바일: 아코디언 활성화 */
@media (max-width: 768px) {
    /* 패널 내부 여백 */
    .pop_sec_acc :deep(.acc_panel_cont .pop_sec) {
        padding: 0 !important;
    }
    /* 교통·유통 사용처 안내 섹션 패딩 */
    .pop_sec_acc :deep(.acc_panel_cont #pop-sec-1),
    .pop_sec_acc :deep(.acc_panel_cont #pop-sec-2) {
        padding: 12px 32px 24px !important;
    }
    /* 팝카드란? SectionHeader 패딩 (첫 번째 아이템만) */
    .pop_sec_acc :deep(#pop-sec-0 > header) {
        padding: 12px 32px 24px;
    }
    /* 첫 번째 아이템도 h3 제목은 숨김 (AccordionItem 타이틀이 대신함) */
    .pop_sec_acc :deep(#pop-sec-0 > header > h3) {
        display: none;
    }
    /* 나머지 아이템 SectionHeader 숨김 */
    .pop_sec_acc :deep(.pop_sec:not(#pop-sec-0) > header),
    .pop_sec_acc :deep(.pop_sec > .usage_header > header) {
        display: none;
    }
}


/* ── 교통카드 충전 서비스 (50:9900) ── */
/* PC: flex 리스트 표시 / Swiper 숨김 */
.charging_service_list { 
    display: flex;
    gap: 20px;
}
.charging_service_swiper {
    display: none; 
}

/* 모바일: 리스트 숨김 / Swiper 표시 */
@media (max-width: 768px) {
    .charging_service_list {
        display: none;
    }
    .charging_service_swiper {
        display: block;
        overflow: hidden;
        margin-top: 24px;
        padding: 0 32px;
    }
    .charging_service_swiper :deep(.swiper-slide) {
        width: 28vw !important;
        height: 28vw !important;
        flex: none;
    }
}

.charging_service_item {
    max-width: 220px;
    aspect-ratio: 1 / 1;
    border-radius: 12px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F8F8F8;
}

@media (max-width: 768px) {
    .charging_service_item {
        max-width: none;
        width: 100%;
        height: 100%;
        aspect-ratio: unset;
    }
}

.charging_service_item > img {
    max-width: 80%;
    max-height: 80%;
    width: auto;
    height: auto;
    display: block;
}

.charging_service_note {
    margin-top: 16px;
    color: #67676f;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
}

@media (max-width: 768px) {
    .charging_service_note {
        margin-top:24px;
        margin-bottom: 8px;
        padding:0 32px 24px;
        font-size: 1.6rem;
        line-height: 1.5;
        letter-spacing: -0.01em;
    }
}

.charging_note_label {
    padding-right: 8px;
    color: #7c7c86;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: -0.01em;
}

@media (max-width: 768px){
    .charging_note_label{
        font-size: 1.4rem; 
        line-height: 1.4;
        margin-top: 8px;
    }
}
/* ── 교통 사용처 안내 (50:10103) ── */
.usage_header {
    display: flex; 
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;
}
@media (max-width: 768px){
    .usage_header{
       margin-bottom: 24px;
       display: block;
    }
}

.usage_header :deep(header) {
    margin-bottom: 0;
    padding-bottom: 0;
}

.usage_header :deep(h3) {
    margin: 0;
}

.usage_group_title {
    margin: 0 0 8px;
    color: #161616;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

@media (max-width: 768px){
    .usage_group_title{
        margin-bottom: 24px;
        font-size: 1.8rem;
        line-height: 1.5;
        letter-spacing: 0%;
    }
    .usage_group_title:has(+ .retail_note) {
        margin-bottom: 8px;
    }
}

.retail_footnote {
    margin: 6px 0 0;
    color: #fb6432;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.01em;
}

.usage_def_list {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 4px 16px;
}

.usage_def_list > dt {
    color: #161616;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.6;
    letter-spacing: -0.01em;
}

@media (max-width: 768px){
    .usage_def_list {
        gap: 8px 16px;
    }
    .usage_def_list > dt {
        font-size: 1.4rem;
        line-height: 1.4;
        letter-spacing: -0.01em;
        min-width:60px;
    }
}

.usage_def_list > dd {
    margin: 0;
    color: #67676f;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.01em;
}

@media (max-width: 768px){
    .usage_def_list > dd {
        font-size: 1.4rem;
        line-height: 1.4;
        letter-spacing: -0.01em;
    }
}


.usage_group .list_dotted > li {
    padding: 0 0 0 12px;
    color: #67676f;
    font-size: 1.8rem;
    line-height: 1.6;
    letter-spacing: -0.01em;
    position: relative; 
}

@media (max-width: 768px){
    .usage_group .list_dotted > li {
        font-size: 1.4rem;
        line-height: 1.4;

} 
}

.usage_group .list_dotted > li::before {
    content: "";
    width: 4px;
    height: 4px;
    background-color: #67676f;
    border-radius: 50%;
    position: absolute;
    top: 0.8em; /* 첫 번째 줄 중앙: line-height(1.6) / 2 */
    left: 0;
    display: block;
    transform: translateY(-50%);
}

@media (max-width: 768px) {
    .usage_group .list_dotted > li::before {
        top: 0.7em; /* 첫 번째 줄 중앙: line-height(1.4) / 2 */
    }
}


.retail_note {
    margin: 0 0 24px;
    color: #f95823;
    font-size: 1.4rem;
    line-height: 1.4;
    letter-spacing: -0.01em;
}

.logo_list {
    padding: 0;
    gap: 12px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
}

.logo_list > li {
    height: 56px;
    min-width: 0;
    padding: 6px 12px;
    border: 1px solid #e5e5e9;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo_list > li > img {
    max-width: 100%;
    width: auto;
    height: auto;
    display: block;
}

.logo_placeholder {
    width: 100%;
    height: 100%;
    background-color: #d7d7df;
    border-radius: 4px;
    display: block;
}

/* 교통카드 충전 LNB 레이아웃 */
.pop_wrap {
    position: relative;
    display: flex;
    align-items: flex-start;
}


@media (max-width: 768px) {
    .pop_panel :deep(.brand_panel_title) {
        padding-bottom: 24px;
    }
}

.pop_lnb {
    width: 240px;
    position: sticky;
    top: 40px;
    left: 0;
    flex-shrink: 0;
}

.pop_lnb > ul > li > button {
    width: 100%;
    min-height: 64px;
    padding: 17px 0;
    color: #161616;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.01em;
    box-sizing: border-box;
    text-align: left;
}

.pop_content {
    flex: 1;
    min-width: 0;
}

/* ── 하이패스 카드/단말기 ── */
.list_caution {
    margin: 8px 0 0;
    padding: 0;
}

.list_caution > li {
    color: #161616;
    font-size: 1.8rem;
    line-height: 1.4;
    letter-spacing: -0.01em;
    color:#67676F;
}

@media (max-width: 768px) {    
    .list_caution > li {
        font-size: 1.4rem;
        line-height: 1.4;
        letter-spacing: -0.01em;
    }
}


/* ── 상생협력 운영지원제도 카드 그리드 ── */
.winwin_item_list {
    margin: 0;
    padding: 0;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.winwin_item {
    padding: 64px 0;
    border-bottom: 1px solid #e5e5e9;
}

/* 첫 번째 줄: 상단 여백 제거 */
.winwin_item:nth-child(-n+2) {
    padding-top: 0;
}

/* 마지막 줄 보더 제거 — 홀수/짝수 아이템 모두 대응 */
.winwin_item:last-child,
.winwin_item:nth-last-child(2):nth-child(odd) {
    border-bottom: none;
}

.winwin_item > article {
    display: flex;
    gap: 24px;
    align-items: flex-start;
}

.winwin_item_icon {
    width: 80px;
    height: 80px;
    background-color: #f2f2f4;
    border-radius: 50%;
    flex-shrink: 0;
}

.winwin_item_content {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.winwin_item_title {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

/* 번호·제목 공통 폰트 */
.winwin_item_num,
.winwin_item_title > strong {
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

.winwin_item_num {
    color: #107af2;
}

.winwin_item_title > strong {
    color: #161616;
    display: flex;
    align-items: center;
    gap: 8px;
}

.winwin_item_link {
    width: 24px;
    height: 24px;
    background-color: #d0d0d8;
    border-radius: 4px;
    flex-shrink: 0;
    display: inline-block;
}

.winwin_item_body > p {
    margin-top: 8px;
    color: #67676f;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

.winwin_item_body > p.winwin_item_desc {
    margin-top: 0;
    font-weight: 400;
}

.sec_note {
    margin: 8px 0 0;
    color: #f95823;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.02em;
}

.milbox_feature :deep(.feature_card_item) {
    min-height: 171px;
    max-width: 340px;
}

@media (max-width: 768px) {
    .milbox_feature :deep(.feature_card_item) {
        min-height: 0;
        max-width: 100%;
    }
}

.winwin_bullet_list {
    margin: 16px 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.winwin_bullet_list > li {
    padding-left: 12px;
    color: #67676f;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.4;
    position: relative;
}

.winwin_bullet_list > li::before {
    width: 4px;
    height: 4px;
    background-color: #67676f;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    left: 0;
    content: "";
    display: block;
}

@media (max-width: 768px) {
    .winwin_item_list {
        grid-template-columns: 1fr;
    }

    /* PC에서 제거된 2번째 아이템 상단 여백 복원 */
    .winwin_item:nth-child(2) {
        padding-top: 64px;
    }

    /* PC에서 제거된 보더 복원 */
    .winwin_item:nth-last-child(2):nth-child(odd) {
        border-bottom: 1px solid #e5e5e9;
    }

    .winwin_item_num,
    .winwin_item_title > strong {
        font-size: 2.4rem;
    }

}

/* ── 택배&픽업 — 안내 목록 ── */
/* PanelHeader 슬롯 내 list_dotted — 회색 계열 별도 스타일 */
.brand_panel_title .list_dotted {
    margin: 16px 0 0;
}

.brand_panel_title .list_dotted > li::before {
    background-color: #67676f;
}

.brand_panel_title .list_dotted > li > p {
    color: #67676f;
    font-size: 2rem;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

.note_sub,
.brand_panel_title .list_dotted > li > p.note_sub {
    color: #f95823;
}

@media (max-width: 768px) {
    .brand_panel_title .list_dotted > li > p {
        font-size: 1.4rem;
        line-height: 1.4;
        letter-spacing: -0.01em;

    }
}
/* ── 택배&픽업 — 이용요금 테이블 ── */
.price_table_note {
    margin: 4px 0 0;
    color: #f95823;
    font-size: 1.4rem;
    line-height: 1.4;
    letter-spacing: -0.02em;
}


/* ── 택배&픽업 — 이용요금 ── */
/* .delivery_price_box 기본 박스 스타일은 .info_card로 통합 */

.delivery_price_list {
    margin: 0;
    padding: 0;
    
}

.delivery_price_list > li {
    padding-left: 28px;
    position: relative;
}

.delivery_price_list > li + li {
    margin-top: 16px;
}

.delivery_price_list > li::before {
    content: "";
    width: 5px;
    height: 10px;
    border-right: 2px solid #107af2;
    border-bottom: 2px solid #107af2;
    position: absolute;
    top: 3px;
    left: 4px;
    transform: rotate(45deg);
    display: block;
}

.delivery_price_list > li > p {
    margin: 0;
    color: #161616;
    font-size: 1.8rem;
    line-height: 1.4;
    letter-spacing: -0.01em;
}

.delivery_price_subs {
    margin: 6px 0 0;
    padding: 0;
    
}

.delivery_price_subs > li {
    color: #67676f;
    font-size: 1.8rem;
    line-height: 1.4;
    letter-spacing: -0.01em;
}

/* ── 고속도로 미납 통행료 납부 · 온라인몰 편의점 결제 공통 ── */
.sec_unpaid_advantage :deep(.feature_card_item),
.sec_mall_payment_advantage :deep(.feature_card_item) {
    min-height: 260px;
}

.sec_delivery_caution :deep(.feature_card_item) {
    min-height: 216px;
}
:deep(.txt_point) {
    color: #fb6432;
}

@media (max-width: 768px) {
    .sec_unpaid_advantage :deep(.feature_card_item) {
        min-height: 244px;
    }
    .sec_mall_payment_advantage :deep(.feature_card_item) {
        min-height: 244px;
    }
}

/* ── 온라인몰 편의점 결제 — 이용 가능 사이트 ── */
.mall_site_note {
    margin: 0;
    color: #f95823;
    font-size: 1.4rem;
    line-height: 1.5;
    letter-spacing: -0.02em;
}

.mall_site_list {
    margin: 0;
    padding: 0;
    
    display: flex;
    gap: 20px;
}

.mall_site_list > li {
    flex: 1;
}

.mall_site_list > li > figure {
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.mall_site_thumb {
    width: 100%;
    height: 200px;
    background-color: #f8f8f8;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mall_site_thumb > img {
    width: auto;
    max-width: 100%;
}

.mall_site_list > li > figure > figcaption {
    color: #67676f;
    font-size: 1.8rem;
    line-height: 1.4;
    letter-spacing: -0.01em;
    white-space: pre-line;
    text-align: center;
}

@media (max-width: 1024px) {
    .mall_site_list {
        flex-wrap: wrap;
        gap: 16px;
    }

    .mall_site_list > li {
        flex: 1 1 calc((100% - 32px) / 3);
    }
}

@media (max-width: 768px) {
    /* 모바일: Swiper 슬라이드 */
    .mall_site_swiper {
        overflow: visible;
    }


    .mall_site_swiper :deep(.swiper-slide) {
        width: 29.5vw;
    }

    .mall_site_swiper :deep(.swiper-slide:nth-child(1)) .mall_site_thumb > img { width: 60px; }
    .mall_site_swiper :deep(.swiper-slide:nth-child(2)) .mall_site_thumb > img { width: 56px; }
    .mall_site_swiper :deep(.swiper-slide:nth-child(3)) .mall_site_thumb > img { width: 62px; }
    .mall_site_swiper :deep(.swiper-slide:nth-child(4)) .mall_site_thumb > img { width: 26px; }
    .mall_site_swiper :deep(.swiper-slide:nth-child(5)) .mall_site_thumb > img { width: 82px; }
    .mall_site_swiper :deep(.swiper-slide:nth-child(6)) .mall_site_thumb > img { width: 26px; }

    .mall_site_figure {
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .mall_site_figure > figcaption {
        color: #67676f;
        font-size: 1.4rem;
        line-height: 1.4;
        letter-spacing: -0.01em;
        text-align: center;
        white-space: pre-line;
    }

    .mall_site_swiper .mall_site_thumb {
        height: 104px;
    }
}

/* ── 편의점캐시 테이블 ── */

.cash_table_cell {
    display: flex;
    align-items: flex-start;
    gap: 12px;
}

/* ── 유심 요금제 혜택 ── */
.usim_benefit_cards {
    display: flex;
    gap: 20px;
}

.usim_benefit_card {
    overflow: hidden;
    border-radius: 12px;
    display: flex;
    flex: 1;
    flex-direction: column;
}

.usim_benefit_img {
    width: 100%;
    height: 340px;
    margin: 0;
    background-color: #c4c4c4;
    overflow: hidden;
}

.usim_benefit_img > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.usim_benefit_body {
    padding: 32px 0;
    flex: 1;
}

.usim_benefit_body > h4 {
    margin-bottom: 24px;
    color: #161616;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

.usim_benefit_body > p {
    color: #67676f;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.01em;
    white-space: pre-line;
}

.usim_benefit_list {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.usim_benefit_list > li {
    display: flex;
    gap: 8px;
    align-items: center;
}

.usim_benefit_icon {
    width: 16px;
    height: 16px;
    background-color: #0059fe;
    border-radius: 50%;
    flex-shrink: 0;
}

.usim_benefit_list > li > span:last-child {
    color: #161616;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.4;
}
.hipass_terminal_img > img {
    width: auto;
    max-width: 100%;
    height: auto;
    display: block;
}

@media (max-width: 768px) {
    .hipass_terminal_img > img {
        width: 100%;
    }

    .usim_benefit_cards {
        flex-direction: column;
        gap:40px;
    }

    .usim_benefit_img {
        height: 220px;
    }

    .usim_benefit_body {
        padding: 24px 0;
    }

    .usim_benefit_body > h4 {
        margin-bottom:8px;
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 1.5;
        letter-spacing: 0;

    }

    .usim_benefit_list > li > span:last-child {
        font-size: 1.6rem;
        line-height: 1.5;
        letter-spacing: 0;
    }
}

/* ── 사용 가능 핸드폰 ── */
.usim_phone_list {
    margin: 0;
    padding: 0;
}

.usim_phone_list dt {
    margin-bottom:6px;
    color: #161616;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: -0.01em;
}



.usim_phone_list dd {
    margin-bottom: 32px;
    color: #67676f;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0;
}
   
@media (max-width: 768px) {
    .usim_phone_list dt {
        margin-bottom:8px;
        font-size: 1.8rem;
        line-height: 1.5;
        letter-spacing: 0;
        
    }

    .usim_phone_list dd {
        margin-bottom:12px;
        font-size: 1.6rem;
        line-height: 1.5;
        letter-spacing: 0;
    }
}

/* ── 유심 요금제 소개 ── */
.usim_plan_table_wrap {
    overflow-x: auto;
}

.usim_plan_table {
    width: 100%;
    min-width: 860px;
    border-collapse: collapse;
}

.usim_plan_table th {
    padding: 14.5px 24px;
    background-color: #f8f8f8;
    border-right: none;
    border-bottom: 1px solid #e5e5e9;
    color: #161616;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -0.01em;
    word-break: keep-all;
    overflow-wrap: break-word;
    text-align: center;
    vertical-align: middle;
}

/* 2행 th(데이터·음성·문자) 패딩 축소 */
.usim_plan_table thead tr:nth-child(2) th {
    padding: 10.5px 24px;
}

/* 상품명 오른쪽 / 제공량 오른쪽 세로선 (rowspan=2 ↔ 제공량 그룹 경계) */
.usim_plan_table thead tr:nth-child(1) th:first-child,
.usim_plan_table thead tr:nth-child(1) th[colspan="3"] {
    border-right: 1px solid #e5e5e9;
}

/* 문자 오른쪽 세로선 (제공량 그룹 ↔ 정상 요금 경계) */
.usim_plan_table thead tr:nth-child(2) th:last-child {
    border-right: 1px solid #e5e5e9;
}

.usim_plan_table td {
    padding: 15px 24px;
    border-right: none;
    border-bottom: 1px solid #e5e5e9;
    color: #161616;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.01em;
    word-break: keep-all;
    overflow-wrap: break-word;
    text-align: center;
    vertical-align: middle;
}

/* 상품명·문자 열 세로선 tbody에서 유지 */
.usim_plan_table tbody td:first-child,
.usim_plan_table tbody td:nth-child(4) {
    border-right: 1px solid #e5e5e9;
}

.usim_plan_data_sub {
    font-size: 1.4rem;
}

.usim_plan_dc {
    color: #107af2;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
}

@media (max-width: 768px) {
    .usim_plan_table th,
    .usim_plan_table td {
        padding: 10px 8px;
        font-size: 1.3rem;
    }

    .usim_plan_dc {
        font-size: 1.3rem;
    }
}

/* ── 유심 요금제 장점 ── */
.usim_advantage_cards :deep(.feature_card_item) {
    min-height: 212px;
}

.gift_advantage_cards :deep(.feature_card_item) {
    min-height: 271px;
}

/* ── 기프트카드 사용방법 ── */
.gift_usage_wrap {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.gift_usage_group > h3 {
    margin-bottom: 24px;
    color: #161616;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.01em;
}
 
@media (max-width: 768px) {
    .gift_usage_group > h3 {
        font-size: 1.8rem;
        line-height: 1.5;
        letter-spacing: 0%;

    }
}

/* ── 기프트카드 구매방법 ── */
.gift_purchase_wrap {
    display: flex;
    gap: 40px;
    align-items: flex-start;
}

.gift_purchase_img {
    width: calc(50% - 10px);
    margin: 0;
    padding: 0;
    border-radius: 12px;
    flex-shrink: 0;
    overflow: hidden;
}

.gift_purchase_img > img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
}

.gift_purchase_steps {
    width: calc(50% - 10px);
    margin: 0;
    padding: 20px 0 0;
    
}

.gift_purchase_step {
    padding-bottom: 40px;
}

.gift_purchase_step:last-child {
    padding-bottom: 0;
}

.gift_step_header {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.gift_step_num {
    color: #107af2;
    font-size: 2.4rem;
    font-weight: 600;
    font-style: normal;
    letter-spacing: -0.01em;
}

.gift_step_title {
    color: #161616;
    font-size: 2.4rem;
    font-weight: 600;
    letter-spacing: -0.01em;
}

@media (max-width: 768px) {
    .gift_step_header{
        gap:6px;
        margin-bottom: 4px;
    }
    .gift_step_title{
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 1.5;
        letter-spacing: 0%;
    }
    .gift_step_desc {
        padding-left:36px;
        font-size: 1.6rem;
        line-height: 1.5;
        letter-spacing: -0.01em;
    }
    .gift_step_num{
        font-size: 1.8rem;
        line-height: 1.5;
        letter-spacing: 0;
    }


}

.gift_step_desc {
    margin: 0;
    padding-left: 38px;
    color: #67676f;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
}

:deep(.gift_usage_heading .gift_usage_desc_emphasis) {
    color: #f95823;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.01em;
}

@media (max-width: 768px) {
    :deep(.gift_usage_heading .gift_usage_desc_emphasis) {
        font-size: 1.6rem;
        line-height: 1.5;
        letter-spacing: -0.01em;
    }
}

/* ── 기프트카드 대표 브랜드 슬라이더 ── */
.gift_brand_swiper :deep(.swiper-wrapper) {
    padding: 24px 0;
}

@media (max-width: 768px) {
    .gift_brand_swiper :deep(.swiper-wrapper) {
        padding: 0 0 24px;
    }
}

.gift_brand_slider {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
}

/* 모바일: 3장 뷰 너비 */
.gift_brand_swiper {
    width: 100%;
    max-width: calc(106px * 3 + 14px * 2);
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
}

/* PC: 6장 뷰 너비, 슬라이더가 flex:1로 남은 공간 차지 */
@media (min-width: 769px) {
    .gift_brand_swiper {
        max-width: none;
        flex: 1;
        min-width: 0;
    }
}

/* 네비게이션 버튼 */
.gift_brand_nav {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid #d7d7df;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #111;
    transition: border-color 0.2s;
}
.gift_brand_nav:hover {
    border-color: #111;
}
.gift_brand_nav.swiper-button-disabled {
    opacity: 0.3;
    cursor: default;
}

/* 모바일: 네비게이션 버튼 숨김 */
@media (max-width: 768px) {
    .gift_brand_nav {
        display: none;
    }
    .gift_brand_slider {
        display: block;
    }
}

.gift_brand_swiper :deep(.swiper-slide) {
    width: 106px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
}

.gift_brand_card {
    margin: 0;
    padding: 0;
}

.gift_brand_card > img {
    width: 106px;
    height: 165px;
    max-width: 106px;
    margin: 0 auto;
    border-radius: 4px;
    display: block;
    object-fit: cover;
}

.gift_brand_card > figcaption {
    margin-top: 8px;
    color: #161618;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
    text-align: center;
}

.gift_brand_pagination {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 16px;
}


.gift_brand_pagination :deep(.swiper-pagination-bullet) {
    width: 8px;
    height: 8px;
    background-color: #d7d7df;
    border-radius: 50%;
    opacity: 1;
    cursor: pointer;
    display: block;
}

@media (max-width: 768px) {
    .gift_brand_pagination {
        margin-top: 16px;
        gap: 10px;
    }

    .gift_brand_pagination :deep(.swiper-pagination-bullet) {
        width: 6px;
        height:6px;
    }
}


.gift_brand_pagination :deep(.swiper-pagination-bullet-active) {
    background-color: #161616;
}

.usim_hiplus_list > li {
    color: #67676f;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.01em;
}
/* ── 반응형 ── */
@media (max-width: 1024px) {
    .cafe25_card_list {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .chicken25_card_list {
        grid-template-columns: repeat(2, calc((100% - 20px) / 2));
    }

    .gopizza_menu {
        flex-direction: column;
    }

    .logo_list {
        grid-template-columns: repeat(3, 1fr);
    }

    .gift_brand_card > figcaption {
        font-size: 1.4rem;
    }

    /* 브랜드 콘텐츠 수직 간격 축소 */
    .brand_content {
        padding-bottom: 120px;
    }
    .brand_panel {
        padding-bottom: 80px;
    }
    .brand_panel section {
        padding-bottom: 80px;
    }

    /* 탭 아이콘 크기 축소 */
    .service_tab_item {
        flex: 0 0 max(120px, calc(100% / 8));
        padding: 20px 0;
        gap: 12px;
    }
    .service_tab_icon {
        width: 40px;
        height: 40px;
    }
    .service_tab_label {
        font-size: 1.4rem;
    }

    /* 팝카드 LNB 폭 축소 */
    .pop_lnb {
        width: 160px;
    }
    .pop_lnb > ul > li > button {
        font-size: 1.6rem;
        min-height: 52px;
    }

    /* 차별화 상품 그리드 */
    .diff_card_grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    /* 팝카드 섹션 간격 축소 */
    /* .pop_sec_acc :deep(.acc_item) {
        padding-bottom: 80px;
    } */

    /* usage_header 간격 */
    .usage_header {
        gap: 12px;
        margin-bottom: 24px;
    }
    .usage_select_box {
        width: 160px;
    }
}

/* ── 태블릿 전용 (769px ~ 1024px) ── */
@media (min-width: 769px) and (max-width: 1024px) {
    /* 팝 wrap 수직 정렬 및 gap */
    .pop_wrap {
        gap: 24px;
    }

    /* pop_card_swiper 슬라이드 간격 축소 */
    .pop_card_swiper :deep(.swiper-wrapper) {
        gap: 16px;
    }

    /* 기프트 브랜드 슬라이더 버튼 크기 축소 */
    .gift_brand_nav {
        width: 40px;
        height: 40px;
    }
    .gift_brand_slider {
        gap: 12px;
    }
}

@media (max-width: 768px) {
    .brand_content {
        padding: 24px 0 60px;
        overflow-x: clip;
    }

    .diff_card_swiper {
        padding: 0 20px;
        overflow: visible;
    }

    /* .diff_card_swiper .swiper-slide {
        width: 87.2vw;
    } */

    .diff_card > div {
        min-height: 163px;
        padding: 20px;
    }
    .diff_card > div > p{
        font-size: 1.4rem;
        line-height: 1.4;
        letter-spacing: -0.01em;

    }

    .diff_card > div > h3 {
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 1.5;
        letter-spacing: 0%;
        margin-bottom: 8px;
    }

    .cafe25_img_wrap {
        max-width: none;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
    }

    .cafe25_img_wrap > img {
        max-width: none;
        display: block;
    }

    .cafe25_card_swiper {
        overflow: visible;
        margin-bottom: 20px;
    }

    .cafe25_card_swiper .swiper-slide {
        width: 42vw;
    }

    .cafe25_card_slide {
        width: 42vw;
        height: 42vw;
        overflow: hidden;
        border-radius: 12px;
    }

    .cafe25_card_slide > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .cafe25_split {
        flex-direction: column;
    }

    .cafe25_split > div {
        width: 100%;
    }
    .cafe25_split > img{
        width: 100%;
    }
    .brand_panel:first-of-type section:not(:first-of-type) :deep(header) {
        padding-bottom: 40px;
    }

    .chicken25_card_list {
        grid-template-columns: minmax(0, 1fr);
    }

    .img_grid_swiper {
        padding: 0 20px;
        overflow: visible;
    }

    .img_grid_swiper :deep(.swiper-slide) {
        width: 84vw;
    }

    .img_grid_slide {
        width: 84vw;
        overflow: hidden;
        border-radius: 12px;
    }

    .img_grid_slide > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .gopizza_img_wrap {
        height: 260px;
    }

    .diff_bottom_row {
        flex-direction: column;
        gap: 20px;
    }

    .gopizza_link {
        padding: 0 16px;
        position: relative;
        gap: 12px;
    }

    .gopizza_link > figure {
        width: 48px;
        height: 48px;
        padding: 0;
        border: 0;
        display:block;
    }

    .gopizza_link > figure > img {
        height: 48px;
    }

    .gopizza_link > div {
        padding: 0;
    }

    .gopizza_link > div > strong {
        font-size: 1.6rem;

    }
    .gopizza_link > div > strong:after{
        display:none;
    }
    .gopizza_link::after {
        content: "";
        width: 16px;
        height: 16px;
        position: absolute;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
        background-color: #e5e5e9;
    }

    .sinsen_check_list > li {
        padding-bottom: 4px;
    }

    .service_tab_item {
        padding: 16px 8px;
        flex: 0 0 120px;
    }


    .pop_lnb {
        display:none;
    }

    /* 모바일: Swiper 활성화 — 300px 슬라이드, 8px 간격 */
    .pop_card_swiper {
        padding: 12px 32px 40px;
        overflow: hidden;
    }

    .pop_card_swiper :deep(.swiper-slide) {
        width: 56vw !important;
        height: auto !important;
        flex: none;
    }

 
    .logo_list {
        grid-template-columns: repeat(2, 1fr);
    }

    .gift_brand_card > img {
        width: 100%;
        height: auto;
        max-width: 100%;
        aspect-ratio: 106 / 165;
    }

    .gift_brand_card > figcaption {
        font-size: 1.2rem;
    }

    .gift_purchase_wrap {
        flex-direction: column;
    }

    .gift_purchase_img {
        width: 100%;
    }

    .gift_purchase_steps {
        width: 100%;
    }
}

/* 공공요금수납 납부가능 세금 및 공과금 */
.tax_group_list {
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.tax_group_list .list_dotted > li p{
    color:#67676F;
}
.tax_group_subtitle {
    margin-bottom: 16px;
    font-size: 2.4rem;
    font-weight: 700;
    color: #161616;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

.tax_group_desc {
    font-size: 1.8rem;
    color: #67676f;
    line-height: 1.4;
}

/* 상품권 판매 */
.voucher_list {
    display: flex;
    gap: 20px;
    
}

.voucher_item {
    max-width: 340px;
    flex: 1;
}

.voucher_img {
    height: 200px;
    background-color: #f8f8f8;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.voucher_img > img {
 width: auto;
}

.voucher_info {
    margin-top: 24px;
}

.voucher_name {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: #000;
}

.voucher_tags {
    margin-top: 10px;
    display: flex;
    gap: 6px;
    letter-spacing: -0.01em;
    line-height: 1.4;
}

.voucher_tag {
    padding: 2px 8px;
    font-size: 1.4rem;
    border-radius: 4px;
}

.tag_blue {
    background-color: #e7f2fe;
    color: #0d62c2;
}

.tag_green {
    background-color: #dff5ec;
    color: #0d6e46;
}

.tag_orange {
    background-color: #f9f2ea;
    color: #ca5028;
}

.voucher_desc {
    margin-top: 10px;
    font-size: 1.6rem;
    color: #67676f;
    line-height: 1.5;
}

@media (max-width: 768px) {
    .sec_tax_list {
        margin-top: 40px;
    }

    .tax_group_subtitle {
        font-size: 2rem;
    }

    .sec_voucher {
        margin-top: 40px;
    }

    .voucher_list {
        flex-direction: column;
        gap: 32px;
    }
    .winwin_item_body > p{
        margin-top: 0;
    }
}
</style>
