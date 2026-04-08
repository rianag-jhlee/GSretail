<template>
    <div class="inner">
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

        <!-- 탭 0: 차별화 상품 -->
        <div v-show="depth1ActiveIdx === 0 && activeTab === 0" class="brand_panel">
            <PanelHeader :hero="tab0.hero" :hero-alt="tab0.heroAlt" :title="tab0.title" :subtitle="tab0.subtitle" />

            <ul v-if="tab0.cards && tab0.cards.length" class="diff_card_grid" role="list">
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

            <DiffQrRow v-if="tab0.qr" :title="tab0.qr.title" :desc="tab0.qr.desc" />
        </div>

        <!-- 탭 1: CAFE25 -->
        <div v-show="depth1ActiveIdx === 0 && activeTab === 1" class="brand_panel">
            <PanelHeader :hero="tab1.hero" :hero-alt="tab1.heroAlt" :title="tab1.title" :subtitle="tab1.subtitle" hero-bg="#fff" />

            <section v-for="(sec, i) in tab1.sections" :key="i">
                <SectionHeader :title="sec.title" :desc="sec.desc" :source="sec.source" />

                <!-- 카드형 -->
                <ul v-if="sec.type === 'cards'" class="cafe25_card_list" role="list">
                    <li v-for="(card, c) in sec.cards" :key="c">
                        <div>
                            <img :src="card.image" :alt="card.alt || ''" />
                        </div>
                    </li>
                </ul>

                <!-- 이미지형 -->
                <figure v-else-if="sec.type === 'image'" class="cafe25_img_wrap">
                    <img :src="sec.image" :alt="sec.imageAlt || ''" width="938" height="472" />
                </figure>

                <!-- 분할형 (이미지 + 테이블) -->
                <div v-else-if="sec.type === 'split'" class="cafe25_split">
                    <div class="cafe25_split_img">
                        <img :src="sec.image" :alt="sec.imageAlt || ''" />
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
                                    >{{ col.label }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, ri) in sec.rows" :key="ri">
                                    <td v-for="(col, ci) in sec.columns" :key="ci" :style="{ textAlign: col.align }">{{ row[col.key] }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- 테이블형 -->
                <div v-else-if="sec.type === 'table'" class="cafe25_table_wrap">
                    <table class="cafe25_table">
                        <thead>
                            <tr>
                                <th
                                    v-for="(col, ci) in sec.columns"
                                    :key="ci"
                                    scope="col"
                                    :style="{ width: col.width + 'px', textAlign: col.align }"
                                >{{ col.label }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, ri) in sec.rows" :key="ri">
                                <td v-for="(col, ci) in sec.columns" :key="ci" :style="{ textAlign: col.align }">
                                    <img v-if="ci === 0 && row.flag" :src="row.flag" :alt="row.country" class="flag_icon" width="24" height="24" />{{ row[col.key] }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>

        <!-- 탭 2: CHICKEN25 -->
        <div v-show="depth1ActiveIdx === 0 && activeTab === 2" class="brand_panel">
            <PanelHeader :hero="tab2.hero" :hero-alt="tab2.heroAlt" :title="tab2.title" :subtitle="tab2.subtitle" />

            <section v-for="(sec, i) in tab2.sections" :key="i">
                <SectionHeader :title="sec.title" :desc="sec.desc" />

                <ul v-if="sec.type === 'text_cards'" class="chicken25_card_list" role="list">
                    <li v-for="(card, c) in sec.cards" :key="c">
                        <div class="chicken25_card">
                            <h4 v-html="card.title" />
                            <p>{{ card.desc }}</p>
                        </div>
                    </li>
                </ul>
            </section>

            <ul v-if="tab2.imgGrid && tab2.imgGrid.length" class="chicken25_img_grid" role="list">
                <li v-for="(item, i) in tab2.imgGrid" :key="i">
                    <div>
                        <img :src="item.image" :alt="item.alt || ''" />
                    </div>
                </li>
            </ul>

            <DiffQrRow v-if="tab2.qr" :title="tab2.qr.title" :desc="tab2.qr.desc" />
        </div>

        <!-- 탭 3: GOPIZZA -->
        <div v-show="depth1ActiveIdx === 0 && activeTab === 3" class="brand_panel">
            <PanelHeader :hero="tab3.hero" :hero-alt="tab3.heroAlt" :title="tab3.title" :subtitle="tab3.subtitle" />

            <section v-for="(sec, i) in tab3.sections" :key="i">
                <SectionHeader :title="sec.title" :desc="sec.desc" />

                <!-- 이미지 2열 -->
                <ul v-if="sec.type === 'img_grid'" class="gopizza_img_grid" role="list">
                    <li v-for="(item, gi) in sec.images" :key="gi">
                        <div>
                            <img v-if="item.image" :src="item.image" :alt="item.alt || ''" />
                        </div>
                    </li>
                </ul>

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
                                <span v-for="(tag, ti) in pnl.tags" :key="ti" class="gopizza_menu_tag">{{ tag }}</span>
                            </div>
                            <div class="gopizza_table_wrap">
                                <table class="gopizza_table">
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
                        </div>
                    </li>
                </ul>

                <!-- 배달·픽업 앱 (2열) -->
                <ul v-else-if="sec.type === 'phone_grid'" class="gopizza_phone_grid" role="list">
                    <li v-for="(item, ii) in sec.items" :key="ii">
                        <img v-if="item.image" :src="item.image" :alt="item.alt || ''" />
                    </li>
                </ul>
            </section>

            <div class="diff_bottom_row">
                <DiffQrRow v-if="tab3.qr" :title="tab3.qr.title" :desc="tab3.qr.desc" />
                <a v-if="tab3.link" :href="tab3.link.url" class="gopizza_link" target="_blank" rel="noopener noreferrer">
                    <div>
                        <p class="gopizza_link_title">{{ tab3.link.title }}</p>
                        <p v-html="tab3.link.desc" />
                    </div>
                </a>
            </div>
        </div>

        <!-- depth1 = 1: 신선강화점 -->
        <div v-if="depth1ActiveIdx === 1" class="brand_panel">
            <PanelHeader :hero="sinsen.hero" :hero-alt="sinsen.heroAlt" :title="sinsen.title" :subtitle="sinsen.subtitle" />

            <section v-for="(sec, i) in sinsen.sections" :key="i">
                <SectionHeader :title="sec.title" :desc="sec.desc" />

                <!-- 특징 카드 4열 -->
                <ul v-if="sec.features" class="sinsen_feature_list" role="list">
                    <li v-for="(feat, fi) in sec.features" :key="fi">
                        <div class="sinsen_feature_card">
                            <span class="sinsen_feature_icon" aria-hidden="true"></span>
                            <h4>{{ feat.title }}</h4>
                            <p v-html="feat.desc" />
                        </div>
                    </li>
                </ul>

                <!-- 배송 흐름도 -->
                <div v-if="sec.flow" class="sinsen_card sinsen_card_flow">
                    <p v-if="sec.flowNote">{{ sec.flowNote }}</p>
                    <img :src="imgFlow" alt="" class="sinsen_flow_img" />
                </div>

                <!-- 운영 장점 체크리스트 카드 -->
                <div v-if="sec.advantages" class="sinsen_card">
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
        <div v-show="depth1ActiveIdx === 2 && storeActiveTab === 0" class="brand_panel">
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
                    <PanelHeader :title="tab.pageTitle" :subtitle="tab.pageDesc" />
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
                            <!-- 팝카드란? -->
                            <section id="pop-sec-0" data-pop-sec="0" class="pop_sec">
                                <SectionHeader :title="tab.popTitle" :desc="tab.popDesc">
                                    <p class="pop_exclude">{{ tab.popExclude }}</p>
                                </SectionHeader>
                                <ul class="pop_card_list">
                                    <li v-for="(card, ci) in tab.popCards" :key="ci" class="pop_card_item">
                                        <strong class="pop_card_name">{{ card.name }}</strong>
                                        <figure class="pop_card_thumb">
                                            <img :src="card.img" :alt="card.name" />
                                        </figure>
                                        <div class="pop_card_body">
                                            <p class="pop_card_desc" style="white-space:pre-line">{{ card.desc }}</p>
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
                                    </li>
                                </ul>
                            </section>

                            <!-- 교통카드 충전 서비스 -->
                            <section class="pop_sec">
                                <SectionHeader :title="tab.chargingTitle" />
                                <ul class="charging_service_list">
                                    <li v-for="(item, ci) in tab.chargingItems" :key="ci" class="charging_service_item">
                                        <img :src="item.img" :alt="item.name" />
                                    </li>
                                </ul>
                                <p class="charging_service_note">
                                    <span class="charging_note_label">{{ tab.chargingNote.label }}</span>
                                    {{ tab.chargingNote.text }}
                                </p>
                            </section>

                            <!-- 교통 사용처 안내 -->
                            <section id="pop-sec-1" data-pop-sec="1" class="pop_sec">
                                <div class="traffic_sec_header">
                                    <SectionHeader :title="tab.lnbItems[1]" />
                                    <SelectBox
                                        class="traffic_select_box"
                                        v-model="trafficSelectVal"
                                        :options="tab.trafficSelectOptions"
                                        initMsg="선택하세요"
                                    />
                                </div>

                                <!-- 고속버스 -->
                                <div v-if="trafficSelectVal === 'express'" class="traffic_group">
                                    <h4 class="traffic_group_title">{{ tab.trafficExpressBus.title }}</h4>
                                    <ul class="traffic_bullet_list">
                                        <li v-for="(item, bi) in tab.trafficExpressBus.bullets" :key="bi">{{ item }}</li>
                                    </ul>
                                    <ul class="traffic_logo_list">
                                        <li v-for="(logo, li) in tab.trafficExpressBus.logos" :key="li">
                                            <img :src="logo" :alt="tab.trafficExpressBus.bullets[li]" />
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            <!-- 유통 사용처 안내 -->
                            <section id="pop-sec-2" data-pop-sec="2" class="pop_sec">
                                <div class="traffic_sec_header">
                                    <SectionHeader :title="tab.lnbItems[2]" />
                                    <SelectBox
                                        class="traffic_select_box"
                                        v-model="retailSelectVal"
                                        :options="tab.retailSelectOptions"
                                        initMsg="선택하세요"
                                    />
                                </div>

                                <!-- 커피/아이스크림 -->
                                <div v-if="retailSelectVal === 'coffee'" class="traffic_group">
                                    <h4 class="traffic_group_title">{{ tab.retailCoffee.title }}</h4>
                                    <p class="retail_note">{{ tab.retailCoffee.note }}</p>
                                    <ul class="retail_logo_list">
                                        <li v-for="(logo, ri) in tab.retailCoffee.logos" :key="ri">
                                            <img :src="logo" :alt="tab.retailCoffee.brands[ri]" />
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                </template>

                <!-- 기프트카드 패널 -->
                <template v-else-if="i === 3">
                    <PanelHeader :hero="tab.hero" :hero-alt="tab.heroAlt" :title="tab.title" :subtitle="tab.desc" />
                    <section>
                        <SectionHeader :title="tab.advantageTitle" />
                        <FeatureCards :items="tab.advantages" />
                    </section>

                    <section>
                        <SectionHeader :title="tab.brandTitle" />
                        <div class="gift_brand_slider">
                            <button
                                type="button"
                                class="gift_brand_nav gift_brand_prev"
                                aria-label="이전"
                                :disabled="giftIsBeginning"
                                @click="giftSwiperInst?.slidePrev()"
                            ></button>
                            <Swiper
                                :modules="[Pagination]"
                                :space-between="0"
                                :speed="700"
                                :observer="true"
                                :observe-parents="true"
                                :breakpoints="{
                                    0:    { slidesPerView: 2, slidesPerGroup: 2 },
                                    769:  { slidesPerView: 4, slidesPerGroup: 4 },
                                    1025: { slidesPerView: 6, slidesPerGroup: 6 },
                                }"
                                :pagination="{ el: '.gift_brand_pagination', clickable: true }"
                                class="gift_brand_swiper"
                                @swiper="onGiftSwiper"
                                @slide-change="onGiftSlideChange"
                                @breakpoint="onGiftBreakpoint"
                            >
                                <SwiperSlide v-for="(brand, bi) in tab.brands" :key="bi">
                                    <figure class="gift_brand_card">
                                        <img :src="brand.img" :alt="brand.name" />
                                    </figure>
                                </SwiperSlide>
                            </Swiper>
                            <button
                                type="button"
                                class="gift_brand_nav gift_brand_next"
                                aria-label="다음"
                                :disabled="giftIsEnd"
                                @click="giftSwiperInst?.slideNext()"
                            ></button>
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
                                        <strong class="gift_step_title">{{ step.title }}</strong>
                                    </div>
                                    <p class="gift_step_desc">{{ step.desc }}</p>
                                </li>
                            </ol>
                        </div>
                    </section>
                    <section>
                        <SectionHeader :title="tab.usageTitle" :desc="tab.usageDesc" />
                        <div class="gift_usage_wrap">
                            <div class="gift_usage_group">
                                <h3>{{ tab.onlineLabel }}</h3>
                                <Steps type="1" :items="tab.onlineSteps" />
                            </div>
                            <div class="gift_usage_group">
                                <h3>{{ tab.offlineLabel }}</h3>
                                <Steps type="1" :items="tab.offlineSteps" />
                            </div>
                        </div>
                    </section>
                </template>
 

                <!-- GS25 유심 요금제 패널 -->
                <template v-else-if="i === 4">
                    <PanelHeader :hero="tab.hero" :hero-alt="tab.heroAlt" :title="tab.title" :subtitle="tab.desc" />
                    <section>
                        <SectionHeader :title="tab.advantageTitle">
                        </SectionHeader>
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
                        <SectionHeader :title="tab.benefitTitle">
                        </SectionHeader>
                        <ul class="usim_benefit_cards">
                            <li v-for="(card, ci) in tab.benefitCards" :key="ci" class="usim_benefit_card">
                                <figure class="usim_benefit_img">
                                    <img v-if="card.img" :src="card.img" :alt="card.imgAlt" />
                                </figure>
                                <div class="usim_benefit_body">
                                    <h3>{{ card.title }}</h3>
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

                <!-- 그 외 패널: 기본 구조 -->
                <template v-else>
                    <section>
                        <PanelHeader
                            :hero="tab.hero"
                            :hero-alt="tab.heroAlt"
                            :title="tab.title"
                            :subtitle="tab.desc"
                        />
                        <table v-if="tab.table" class="cash_table">
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
                    </section>
                </template>
            </div>
        </div>

        <!-- 택배&픽업 -->
        <div v-show="depth1ActiveIdx === 2 && storeActiveTab === 1" class="brand_panel">

        </div>

        <!-- 공공요금수납 -->
        <div v-show="depth1ActiveIdx === 2 && storeActiveTab === 2" class="brand_panel">

        </div>

        <!-- 상품권 판매 -->
        <div v-show="depth1ActiveIdx === 2 && storeActiveTab === 3" class="brand_panel">

        </div>

        <div class="diff_actions">
            <Buttons btn-class="btn_back" @click="goBack">{{ langData.backLabel }}</Buttons>
        </div>
    </div>
</template>

<script setup>
import { ref, nextTick, watch, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import Tabs from "@/components/Tabs.vue";
import PanelHeader from "@/components/PanelHeader.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import Buttons from "@/components/Buttons.vue";
import SelectBox from "@/components/SelectBox.vue";
import DiffQrRow from "@/components/DiffQrRow.vue";
import Steps from "@/components/Steps.vue";
import FeatureCards from "@/components/FeatureCards.vue";

/* 탭 0 이미지 */
import imgHero0 from "@/assets/images/dummy/differentiated_bg_01.png";
import imgCard1 from "@/assets/images/dummy/differentiated_product_01.png";
import imgCard2 from "@/assets/images/dummy/differentiated_product_02.png";

/* 탭 1 이미지 */
import imgHero1 from "@/assets/images/dummy/differentiated_bg_02.png";
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

/*신선강화점 이미지*/ 
import imgHero4 from "@/assets/images/dummy/brand_bg_05.png";
import imgFlow from "@/assets/images/dummy/sinsen_flow.png";

/*매장/서비스 이미지*/
import imgHero5 from "@/assets/images/dummy/brand_bg_06.png";
import imgHero6 from "@/assets/images/dummy/brand_bg_07.png";   
import imgPopCard1 from "@/assets/images/dummy/pop_card_01.png";
import imgPopCard2 from "@/assets/images/dummy/pop_card_02.png";
import imgPopCard3 from "@/assets/images/dummy/pop_card_03.png";
import imgPoint1 from "@/assets/images/dummy/point_01.png";
import imgPoint2 from "@/assets/images/dummy/point_02.png";
import imgPoint3 from "@/assets/images/dummy/point_03.png";
import imgPoint4 from "@/assets/images/dummy/point_04.png";
import imgTransService1 from "@/assets/images/dummy/transportation_service_01.png";
import imgTransService2 from "@/assets/images/dummy/transportation_service_02.png";
import imgTransService3 from "@/assets/images/dummy/transportation_service_03.png";
import imgTransService4 from "@/assets/images/dummy/transportation_service_04.png";
import imgBus1 from "@/assets/images/dummy/bus_01.png";
import imgBus2 from "@/assets/images/dummy/bus_02.png";
import imgBus3 from "@/assets/images/dummy/bus_03.png";
import imgBus4 from "@/assets/images/dummy/bus_04.png";
import imgBus5 from "@/assets/images/dummy/bus_05.png";
import imgBus6 from "@/assets/images/dummy/bus_06.png";
import imgBus7 from "@/assets/images/dummy/bus_07.png";
import imgBus8 from "@/assets/images/dummy/bus_08.png";
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


const router = useRouter();
const activeTab = ref(0);

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
                desc: "우리동네GS 앱을 다운로드하고, GS25의 다양한 이벤트와 차별화 상품을 만나보세요.<br />QR코드를 스캔하면 앱 다운로드 페이지로 이동합니다.",
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
            subtitle: "최고의 원재료를 사용하여 즉석에서 조리한 튀김을 합리적인 가격으로 제공하는 GS25만의 차별화 먹거리입니다.<br />편의점에서도 치킨25와 함께 전문점 수준의 치킨을 즐길 수 있습니다.",
            sections: [
                {
                    type: "text_cards",
                    title: "엄선된 원재료, 믿을 수 있는 맛",
                    desc: "최고의 원재료로 만들어 안심하고 더 맛있게 즐길 수 있는 고품질의 치킨을 제공합니다.",
                    cards: [
                        {
                            title: "깨끗한 기름으로<br />더 맛있는 튀김",
                            desc: "깨끗하게 관리한 기름을 사용하여 더욱 바삭하고 맛있고, 철저한 위생 관리로 안심하고 즐길 수 있는 맛있는 치킨을 제공합니다.",
                        },
                        {
                            title: "다양한 메뉴,<br />골라 먹는 재미",
                            desc: "전문점보다 더 풍성하게 준비된 메뉴들로 다양한 메뉴를 골라 드실 수 있습니다. (한마리, 반마리, 닭다리, 날개, 봉, 꼬치, 핫도그, 튀김만두 등)",
                        },
                        {
                            title: "가까운 곳에서 언제든<br />간편히 구매",
                            desc: "가까운 GS25에서 갓 튀긴 바삭한 치킨을 언제든지 간편하게 접할 수 있습니다. 우리동네GS앱을 통한 배달/픽업 서비스로 인근 GS25에서 더욱 간편한 구매가 가능합니다.",
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
                    desc: "9˚C 저온에서 24시간 숙성한 파베이크 도우를 사용하여 겉바속쫄!<br />고피자의 기술력이 집적된 파베이크 도우는 저온숙성을 거쳐 먹기 좋은 볼륨감과 충분한 수분 함량으로 빠삭하고 쫄깃한 식감을 제공합니다.",
                    image: imgDough,
                    imageAlt: "",
                },
                {
                    type: "menu",
                    title: "메뉴 소개",
                    desc: "고피자의 스테디셀러부터 기대되는 신메뉴까지! GS25에서 REGULAR와 GRAB으로 간편하고 맛있게 즐기세요!<br />REGULAR 사이즈의 경우 피자가 W모양으로 5등분 컷팅되어 한조각씩 간편하게 먹을 수 있습니다.",
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
                    title: "우리동네GS앱에서는 빠른 배달, 픽업 가능",
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
                url: "https://gopizza.kr",
            },
        },
    ],
    sinsen: {
        hero: imgHero4,
        heroAlt: "신선강화점",
        title: "신선강화점",
        subtitle: "신선강화점은 1~2인 가구 및 근거리/소용량 쇼핑 증가 트렌드에 맞춰, 24시간 365일 한번에 장보기를 구현한 신선강화형 편의점입니다.<br />편의점의 간편함과 수퍼마켓의 신선함을 결합한 차별화 컨셉 모델로 매일매일 신선한 신선상품(과일, 채소, 정육, 수산)을 제공합니다.",
        sections: [
            {
                title: "신선강화점 특징",
                features: [
                    { title: "신선한 상품",   desc: "물류부터 진열 판매까지 전 과정 콜드체인 시스템 적용으로 신선도 유지" },
                    { title: "합리적인 가격", desc: "GS 더프레시와의 통합 구매를 통해 합리적인 가격에 판매" },
                    { title: "소용량 소포장", desc: "1인가구 및 2~3인 가구에 적합한 <br />소용량·소포장 상품 구성" },
                    { title: "전용 상품 브랜드", desc: "신선식품 전문 브랜드 <br />신선특별시 운영" },
                ],
            },
            {
                title: "왜 GS25 신선강화점인가?",
                desc: "GSTHEFRESH 통합 구매를 통한 상품 경쟁력을 확보하여 타 편의점 대비 다양한 신선·장보기 상품을 운영합니다. <br />업계 유일의 신선상품 전용 물류센터를 운영중이며, 파트너사에서 점포까지 전 구간 선도관리를 통해 신선상품의 신선도를 유지합니다.",
                flow: true,
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
                            { value: "express", label: "고속버스" },
                            { value: "subway",  label: "지하철" },
                            { value: "bus",     label: "버스" },
                            { value: "taxi",    label: "택시" },
                            { value: "inter",   label: "시외버스" },
                        ],
                        trafficExpressBus: {
                            title: "고속버스",
                            bullets: ["금호고속", "동부 익스프레스", "동양고속", "속리산고속", "(주)중앙고속", "삼화 고속", "천일 고속", "한일 익스프레스"],
                            logos: [imgBus1, imgBus2, imgBus3, imgBus4, imgBus5, imgBus6, imgBus7, imgBus8],
                        },
                        retailSelectOptions: [
                            { value: "coffee", label: "커피/아이스크림" },
                        ],
                        retailCoffee: {
                            title: "커피/아이스크림",
                            note: "마트, 백화점, 휴게소 등 일부 입점 매장 제외",
                            brands: ["스타벅스", "파스쿠찌", "베라", "잠바주스", "엔젤인어스", "카페띠아모", "자바시티", "커피베이", "요거프레소"],
                            logos: [imgBrandUsage1, imgBrandUsage2, imgBrandUsage3, imgBrandUsage4, imgBrandUsage5, imgBrandUsage6, imgBrandUsage7, imgBrandUsage8, imgBrandUsage9],
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
                                name:     "멥버십 팝카드",
                                desc:     "멤버십팝카드는 GS ALL 포인트와 팝카드가 결합되어 GS25, GS THE FRESH에서 결제와 동시에 포인트가 적립되고, 600여 온라인쇼핑, 게임 등에서 결제가 가능한 혜택이 많은 선불카드입니다.",
                                note:     "*교통기능 없음",
                                noteWarn: true,
                                logos:    [{ src: imgPoint2, w: 44, h: 24 }],
                            },
                            {
                                img:   imgPopCard3,
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
                            { num: "02", title: "기프트카드 선택", desc: "가까운 GS25 편의점에 방문하세요." },
                            { num: "03", title: "사용설명 확인",   desc: "구매하신 카드 뒷면 사용설명을 잘 확인하시고 사용하세요." },
                            { num: "04", title: "계산",           desc: "계산대에서 계산을 완료하시면 활성화되어 사용 가능한 상태가 됩니다." },
                        ],
                        usageTitle:   "POSA 기프트카드 사용방법",
                        usageDesc:    "<span style=\"color:#F95823;font-size:1.8rem\">기프트카드별로 사용방법이 다르므로 카드와 카드 캐리어 뒷면에 기재된 사용방법을 참고</span>하시고, 자세한 사항은 카드에 기재된 고객센터로 문의하시기 바랍니다.",
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
                            { step: "Step 1", title: "텍스트<br />최대2줄" },
                            { step: "Step 2", title: "GS25 편의점에서<br />유심카드 구입" },
                            { step: "Step 3", title: "유심 일련번호 완료 후<br />개통 신청 (또는 전화로 개통 신청)" },
                            { step: "Step 4", title: "해피콜/개통 완료 후<br />휴대폰에 유심을 장착하면 간편 개통 끝!" },
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
                                data:         "15GB\n(소진시 3Mbps속도로 계속 사용)",
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
                        label:   "하이패스\n카드/단말기",
                        hero:    null,
                        heroAlt: "",
                        title:   "하이패스 카드/단말기",
                        desc:    "",
                    },
                    {
                        label:   "고속도로 미납\n통행료 납부",
                        hero:    null,
                        heroAlt: "",
                        title:   "고속도로 미납 통행료 납부",
                        desc:    "",
                    },
                    {
                        label:   "온라인몰\n편의점 결제",
                        hero:    null,
                        heroAlt: "",
                        title:   "온라인몰 편의점 결제",
                        desc:    "",
                    },
                ],
            },
            {
                hero: null,
                heroAlt: "",
                title: "택배&픽업",
                subtitle: "",
                sections: [],
            },
            {
                hero: null,
                heroAlt: "",
                title: "공공요금수납",
                subtitle: "",
                sections: [],
            },
            {
                hero: null,
                heroAlt: "",
                title: "상품권 판매",
                subtitle: "",
                sections: [],
            },
        ],
    },
    backLabel: "목록으로 돌아가기",
};

const sinsen = langData.sinsen;
const store = langData.store;
const tab0 = langData.tabs[0];
const tab1 = langData.tabs[1];
const tab2 = langData.tabs[2];
const tab3 = langData.tabs[3];

const depth1ActiveIdx = ref(0);
const depth1Tabs = langData.nav.depth1;
const depth2Tabs = langData.nav.depth2;
const storeTabs = langData.nav.depth2Store;

const storeActiveTab = ref(0);
const giftSwiperInst = ref(null);
const giftIsBeginning = ref(true);
const giftIsEnd = ref(false);
const updateGiftNavState = (swiper) => {
    giftIsBeginning.value = swiper.isBeginning;
    giftIsEnd.value = swiper.isEnd;
};
const onGiftSwiper = (swiper) => {
    giftSwiperInst.value = swiper;
};
const onGiftSlideChange = (swiper) => updateGiftNavState(swiper);
const onGiftBreakpoint = (swiper) => updateGiftNavState(swiper);
const serviceActiveTab = ref(0);

watch(serviceActiveTab, (idx) => {
    if (idx === 3 && giftSwiperInst.value) {
        nextTick(() => {
            giftSwiperInst.value.update();
            updateGiftNavState(giftSwiperInst.value);
        });
    }
});
const popLnbActiveIdx = ref(0);
const trafficSelectVal = ref("express");
const retailSelectVal = ref("coffee");

const scrollToSection = (idx) => {
    popLnbActiveIdx.value = idx;
    const el = document.getElementById(`pop-sec-${idx}`);
    if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 57;
        window.scrollTo({ top, behavior: "smooth" });
    }
};

let popSecObserver = null;
onMounted(() => {
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
});
onUnmounted(() => {
    if (popSecObserver) popSecObserver.disconnect();
});

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
img {
    width: 100%;
    display: block;
}

button {
    background-color: #fff;
}

.traffic_select_box :deep(select) {
    width: 180px;
    padding: 10px 20px;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
    background-color: #f8f8f8;
    border: 0;
    border-radius: 6px;
}
.tab_wrap {
    margin-bottom: 0;
}

.tab_wrap + .tab_wrap {
    margin-top: 24px;
    margin-bottom: 24px;
}

.inner {
    max-width: 1460px;
    margin: 0 auto;
    padding: 109px 20px 200px;
}

.brand_panel {
    padding-top: 40px;
    padding-bottom: 100px;
}

.brand_panel section {
    padding-bottom: 120px;
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
    aspect-ratio: 460 / 320;
    margin: 0;
    padding: 0;
    background-color: #e8e8ec;
    overflow: hidden;
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

.cafe25_split_img {
    padding: 45px 75px;
    background-color: #0e376b;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cafe25_split_img > img {
    max-height: 358px;
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

.cafe25_table th,
.cafe25_table td {
    height: 56px;
    padding: 0 24px;
    color: #161618;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.01em;
    border-bottom: 1px solid #e5e5e9;
    vertical-align: middle;
    white-space: nowrap;
}

.cafe25_table th:first-child,
.cafe25_table td:first-child {
    border-left: 0;
}

.cafe25_table th:last-child,
.cafe25_table td:last-child {
    border-right: 0;
}

.cafe25_table th:first-child {
    border-radius: 10px 0 0 0;
}

.cafe25_table th:last-child {
    border-radius: 0 10px 0 0;
}

.cafe25_table th {
    font-weight: 600;
    background-color: #f8f8f8;
    border-top: 0;
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

.chicken25_img_grid {
    margin-bottom: 40px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, calc((100% - 20px) / 2));
    gap: 20px;
}

.chicken25_img_grid > li {
    min-width: 0;
    border-radius: 12px;
    overflow: hidden;
}

.chicken25_img_grid img {
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
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

.gopizza_menu_tag {
    color: #67676f;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.01em;
}

.gopizza_menu_tag + .gopizza_menu_tag::before {
    content: "";
    width: 1px;
    height: 8px;
    margin-right: 8px;
    background-color: #d7d7df;
    display: inline-block;
}

.gopizza_table_wrap {
    overflow-x: auto;
}

.gopizza_table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
}

.gopizza_table th,
.gopizza_table td {
    padding: 0 16px;
    border-bottom: 1px solid #e5e5e9;
}

.gopizza_table th:first-child,
.gopizza_table td:first-child {
    border-left: 0;
}

.gopizza_table th:last-child,
.gopizza_table td:last-child {
    border-right: 0;
}

.gopizza_table th:first-child {
    border-radius: 10px 0 0 0;
}

.gopizza_table th:last-child {
    border-radius: 0 10px 0 0;
}

.gopizza_table thead th {
    height: 64px;
    color: #161618;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: -0.02em;
    background-color: #f8f8f8;
    border-top: 0;
}

.gopizza_table tbody td {
    height: 64px;
    color: #161618;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.01em;
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

.gopizza_phone_grid {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, calc((100% - 20px) / 2));
    gap: 20px;
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
    flex: 1;
    gap: 20px;
}

.gopizza_link > div {
    min-width: 0;
    padding: 7px 0;
    flex: 1;
}

.gopizza_link_title {
    margin: 0 0 6px;
    color: #161618;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: -0.01em;
    display: flex;
    align-items: center;
    gap: 6px;
}

.gopizza_link > div > p + p {
    margin: 0;
    color: #67676f;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.02em;
}

/* ── 신선강화점 ── */
.sinsen_feature_list {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.sinsen_feature_list > li {
    min-width: 0;
}

.sinsen_feature_card {
    height: 240px;
    padding: 32px 32px 60px;
    background-color: #f8f8f8;
    border-radius: 12px;
}

.sinsen_feature_icon {
    width: 40px;
    height: 40px;
    margin-bottom: 12px;
    background-color: #d7d7df;
    border-radius: 8px;
    display: block;
}

.sinsen_feature_card > h4 {
    margin: 0 0 16px;
    color: #161618;
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

.sinsen_feature_card > p {
    margin: 0;
    color: #67676f;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.01em;
}

.sinsen_card {
    max-width: 940px;
    padding: 32px;
    background-color: #f8f8f8;
    border-radius: 12px;
}

.sinsen_card > p {
    margin-bottom: 32px;
    color: #67676f;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.01em;
}

.sinsen_flow_img {
    margin-top: 24px;
    display: block;
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

/* ── 생활 서비스 3depth 탭 ── */
.service_tab_wrap {
    margin-bottom: 80px;
    border-radius: 12px;
    display: flex;
    overflow-x: auto;
}

.service_tab_item {
    min-width: 177.5px;
    padding: 24px 8px;
    background-color: transparent;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
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
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: -0.01em;
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

.pop_card_list {
    display: flex;
    gap: 20px;
}

.pop_card_item {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.pop_card_thumb {
    width: 100%;
    display: block;
}

.pop_card_thumb > img {
    width: auto;
    height: auto;
}

.pop_card_body {
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    flex: 1;
}

.pop_card_name {
    margin-bottom: 12px;
    color: #161616;
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: -0.01em;
    display: block;
}

.pop_card_desc {
    color: #67676f;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
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

.pop_logo_thumb {
    width: auto;
    display: block;
}

/* ── 교통카드 충전 서비스 (50:9900) ── */
.charging_service_list {
    display: flex;
    gap: 20px;
}

.charging_service_item {
    border-radius: 12px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.charging_service_item > img {
    width: 100%;
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

.charging_note_label {
    padding-right: 8px;
    color: #7c7c86;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -0.01em;
}

/* ── 교통 사용처 안내 (50:10103) ── */
.traffic_sec_header {
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    gap: 20px;
}

.traffic_sec_header :deep(header) {
    margin-bottom: 0;
}

.traffic_sec_header :deep(h3) {
    margin: 0;
}

.traffic_group_title {
    margin: 0 0 8px;
    color: #161616;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.01em;
}

.traffic_bullet_list {
    margin: 0 0 24px;
    padding: 0;
    list-style: none;
}

.traffic_bullet_list > li {
    padding: 0 0 0 12px;
    color: #67676f;
    font-size: 1.8rem;
    line-height: 1.6;
    letter-spacing: -0.01em;
    position: relative;
}

.traffic_bullet_list > li::before {
    content: "";
    width: 4px;
    height: 4px;
    background-color: #67676f;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    transform: translateY(-50%);
}

.traffic_logo_list {
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
}

.traffic_logo_list > li {
    width: calc(100% / 8);
    height: 56px;
    border-radius: 8px;
    overflow: hidden;
}

.traffic_logo_list > li > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
}

/* ── 유통 사용처 안내 (50:10253) ── */
.retail_note {
    margin: 0 0 24px;
    color: #f95823;
    font-size: 1.4rem;
    line-height: 1.4;
    letter-spacing: -0.01em;
}

.retail_logo_list {
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
}

.retail_logo_list > li {
    width: calc(100% / 6);
    height: 56px;
    overflow: hidden;
}

.retail_logo_list > li > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
}

/* 교통카드 충전 LNB 레이아웃 */
.pop_wrap {
    position: relative;
    display: flex;
    align-items: flex-start;
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

/* 편의점캐시 테이블 */
.cash_table {
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid #e5e5e9;
}

.cash_table th,
.cash_table td {
    color: #161618;
    border-bottom: 1px solid #e5e5e9;
    vertical-align: middle;
}

.cash_table th {
    width: 200px;
    padding: 0 24px;
    color: #161618;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.6;
    letter-spacing: -0.01em;
    background-color: #f8f8f8;
    text-align: left;
    white-space: nowrap;
}

.cash_table th span,
.cash_table td span {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.01em;
}

.cash_table td {
    padding: 18px 24px;
}

.cash_table_cell {
    display: flex;
    align-items: flex-start;
    gap: 12px;
}


/* ── 유심 요금제 혜택 ── */
.usim_benefit_note {
    margin: 8px 0 0;
    color: #f95823;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.02em;
}

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

.usim_benefit_body > h3 {
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
.usim_benefit_body h3{
    margin-bottom: 24px;
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

@media (max-width: 768px) {
    .usim_benefit_cards {
        flex-direction: column;
    }

    .usim_benefit_img {
        height: 220px;
    }

    .usim_benefit_body {
        padding: 24px 20px;
    }

    .usim_benefit_body > h3 {
        font-size: 2rem;
    }

    .usim_benefit_list > li > span:last-child {
        font-size: 1.6rem;
    }
}

/* ── 사용 가능 핸드폰 ── */
.usim_phone_list {
    margin: 0;
    padding: 0;
}

.usim_phone_list dt {
    padding: 20px 0 6px;
    color: #161616;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: -0.01em;
}

.usim_phone_list dd {
    margin: 0;
    padding: 0 0 20px;
    color: #67676f;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0;
}

@media (max-width: 768px) {
    .usim_phone_list dt {
        font-size: 1.6rem;
    }

    .usim_phone_list dd {
        font-size: 1.5rem;
    }
}

/* ── 유심 요금제 소개 ── */
.usim_plan_table_wrap {
    overflow-x: auto;
}

.usim_plan_table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #e5e5e9;
    table-layout: fixed;
}

.usim_plan_table th {
    padding: 16px 12px;
    background-color: #f8f8f8;
    border: 1px solid #e5e5e9;
    color: #161616;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -0.01em;
    text-align: center;
    vertical-align: middle;
}

.usim_plan_table td {
    padding: 16px 12px;
    border: 1px solid #e5e5e9;
    color: #161616;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.01em;
    text-align: center;
    vertical-align: middle;
}

.usim_plan_data {
    font-size: 1.4rem;
}

.usim_plan_dc {
    color: #107AF2;
    font-size: 1.6rem;
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
.usim_advantage_note {
    margin: 8px 0 0;
    color: #f95823;
    font-size: 1.4rem;
    line-height: 1.4;
    letter-spacing: -0.01em;
}

/* ── 기프트카드 사용방법 ── */
.gift_usage_wrap {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.gift_usage_group > h3 {
    margin-bottom: 16px;
    color: #161616;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.01em;
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
    list-style: none;
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

.gift_step_desc {
    margin: 0;
    padding-left: 38px;
    color: #67676f;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
}

/* ── 기프트카드 대표 브랜드 슬라이더 ── */
.swiper-wrapper {
    padding: 24px 0;
}
.gift_brand_slider {
    position: relative;
    display: flex;
    align-items: center;
    gap: 20px;
}

.gift_brand_swiper {
    min-width: 0;
    flex: 1;
    overflow: hidden;
}

.gift_brand_card {
    margin: 0;
    padding: 0;
}

.gift_brand_card > img {
    width: 100%;
    max-width: 140px;
    height: auto;
    margin: 0 auto;
    border-radius: 4px;
    aspect-ratio: 140 / 214;
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

.gift_brand_nav {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.gift_brand_nav::before {
    content: "";
    width: 8px;
    height: 8px;
    border-top: 2px solid #161616;
    border-right: 2px solid #161616;
    display: block;
}

.gift_brand_prev::before {
    transform: rotate(-135deg) translateX(-2px);
}

.gift_brand_next::before {
    transform: rotate(45deg) translateX(-2px);
}

.gift_brand_nav:disabled {
    opacity: 0.3;
    cursor: default;
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

.gift_brand_pagination :deep(.swiper-pagination-bullet-active) {
    background-color: #161616;
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

    .charging_service_item {
        flex: 1 1 calc((100% - 20px) / 2);
    }

    .traffic_logo_list > li {
        width: calc(100% / 4);
    }

    .retail_logo_list > li {
        width: calc(100% / 3);
    }

    .gift_brand_nav {
        width: 32px;
        height: 32px;
    }

    .gift_brand_card > figcaption {
        font-size: 1.4rem;
    }
}

@media (max-width: 768px) {
    .inner {
        padding: 24px 20px 60px;
    }

    .diff_card_grid {
        grid-template-columns: minmax(0, 1fr);
    }

    .diff_card > div {
        min-height: 0;
        padding: 24px;
    }

    .diff_card > div > h3 {
        font-size: 2.2rem;
    }

    .cafe25_card_list {
        grid-template-columns: minmax(0, 1fr);
    }

    .cafe25_split {
        flex-direction: column;
    }

    .cafe25_split > div {
        width: 100%;
    }

    .chicken25_card_list {
        grid-template-columns: minmax(0, 1fr);
    }

    .chicken25_img_grid {
        grid-template-columns: minmax(0, 1fr);
    }

    .gopizza_img_grid {
        grid-template-columns: minmax(0, 1fr);
    }

    .gopizza_img_grid > li > div {
        height: 260px;
    }

    .gopizza_img_wrap {
        height: 260px;
    }

    .gopizza_phone_grid {
        grid-template-columns: minmax(0, 1fr);
    }

    .diff_bottom_row {
        flex-direction: column;
        gap: 20px;
    }

    .sinsen_feature_list {
        grid-template-columns: repeat(2, 1fr);
    }

    .sinsen_check_list > li {
        flex-wrap: wrap;
    }

    .service_tab_item {
        min-width: 120px;
        padding: 16px 8px;
    }

    .pop_wrap {
        flex-direction: column;
    }

    .pop_lnb {
        width: 100%;
    }

    .pop_lnb > ul {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
    }

    .pop_lnb > ul > li {
        flex: none;
    }

    .pop_lnb > ul > li > button {
        min-height: 44px;
        padding: 8px 12px;
        font-size: 1.6rem;
        border: 1px solid #e5e5e9;
        border-radius: 4px;
    }

    .pop_lnb > ul > li > button.is_active {
        border-color: #109f4c;
        background-color: #f0faf4;
    }

    .pop_card_list {
        flex-wrap: wrap;
    }

    .pop_card_item {
        flex: 1 1 100%;
    }

    .charging_service_list {
        flex-wrap: wrap;
    }

    .charging_service_item {
        flex: 1 1 calc(50% - 10px);
    }

    .traffic_sec_header {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }

    .traffic_logo_list > li {
        width: calc(100% / 2);
    }

    .retail_logo_list > li {
        width: calc(100% / 2);
    }


    .gift_brand_slider {
        gap: 12px;
    }

    .gift_brand_nav {
        width: 28px;
        height: 28px;
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
</style>