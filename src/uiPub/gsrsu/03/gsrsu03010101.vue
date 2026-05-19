<template>
    <div class="main-container" v-if="t">
        <div class="title_wrap ac top_visual">
            <h2 class="page-title">{{ t.MainTitle }}</h2>
            <p class="visual-sub">{{ t.MainsubTitle }}</p>
        </div>

        <section class="section-investor">
            <div class="cont_inner">
                <Tabs  mb120
                    v-model="CTabIdx" 
                    :tab-items="t.Tabs1" 
                    tab-class="type_01" 
                    :tab-slide="true" 
                    @change="onTabChange1" 
                />

                <div class="tab_content_wrap">
                    <article v-if="CTabIdx === 0">
                        <Tabs 
                            v-model="SubTabIdx1" 
                            :tab-items="t.Tabs2_1" 
                            tab-class="type_02" 
                            @change="SubTabIdx2 = 0" 
                            :tab-slide="true" 
                        />

                        <div class="sub_tab_content">
                            <div v-if="SubTabIdx1 === 0" class="winwin_intro">
                                <div class="intro_summary">
                                    <h3 class="text_summary">{{ t.WinWinIntro.Summary }}</h3>
                                </div>

                                <div class="intro_contents">
                                    <section class="intro_section">
                                        <h3 class="section_title">{{ t.WinWinIntro.Philosophy.Title }}</h3>
                                        <div class="philosophy_box mt40">
                                            <ul class="circle_grid">
                                                <li class="item_wrap">
                                                    <div 
                                                        v-for="(item, idx) in t.WinWinIntro.Philosophy.Items" 
                                                        :key="'phil-'+idx" 
                                                        :class="['color_0' + (idx+1)]"
                                                    >
                                                        <strong>{{ item.tit }}</strong>
                                                        <p v-html="item.desc"></p>
                                                    </div>
                                                </li>
                                                <li class="btn-wrap ac mt40">
                                                    <Buttons btn-class="btn_icon_arrow btn_xl border after">
                                                        {{ t.WinWinIntro.Philosophy.Btn }}
                                                    </Buttons>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section class="intro_section">
                                        <h4 class="section_title">{{ t.WinWinIntro.Strategy.Title }}</h4>
                                        <div class="strategy_box mt40">
                                            <figure class="diagram_img mb40">
                                                <img :src="isMobile ? t.WinWinIntro.Strategy.imgMo : t.WinWinIntro.Strategy.img" alt="동반성장 추진전략 다이어그램" />
                                            </figure>
                                            
                                            <!-- <ul class="card_grid">
                                                <li v-for="(card, idx) in t.WinWinIntro.Strategy.Cards" :key="'card-'+idx" class="strategy_card">
                                                    <div class="card_head">
                                                        <span class="num">{{ card.num }}</span>
                                                        <strong>{{ card.tit }}</strong>
                                                    </div>
                                                    <ul class="bullet_01">
                                                        <li v-for="(li, lIdx) in card.list" :key="'li-'+lIdx">{{ li }}</li>
                                                    </ul>
                                                </li>
                                            </ul> -->

                                            <div class="card_grid_container res-swiper-container">
                                                <swiper
                                                    :slides-per-view="'1.1'"
                                                    :space-between="20"
                                                    :breakpoints="{
                                                        768: {
                                                            allowTouchMove: false
                                                        }
                                                    }"
                                                    class="card_grid_swiper"
                                                >
                                                    <swiper-slide 
                                                        v-for="(card, idx) in t.WinWinIntro.Strategy.Cards" 
                                                        :key="'card-'+idx" 
                                                        tag="div"
                                                        class="strategy_card res-slide-item"
                                                    >
                                                        <div class="card_head">
                                                            <span class="num">{{ card.num }}</span>
                                                            <strong>{{ card.tit }}</strong>
                                                        </div>
                                                        <ul class="bullet_01">
                                                            <li v-for="(li, lIdx) in card.list" :key="'li-'+lIdx" v-html="li"></li>
                                                        </ul>
                                                    </swiper-slide>
                                                </swiper>
                                            </div>
                                        </div>
                                    </section>

                                    <section class="intro_section">
                                        <h3 class="section_title">{{ t.WinWinIntro.Index.Title }}</h3>
                                        <div class="index_box mt40">
                                            <figure class="index_visual">
                                                <img :src="isMobile ? t.WinWinIntro.Index.imgMo : t.WinWinIntro.Index.img" alt="동반성장지수 최우수 등급" />
                                            </figure>
                                            <strong>{{ t.WinWinIntro.Index.SubTitle }}</strong>
                                        </div>
                                    </section>
                                </div>
                            </div>
                            
                            <div v-if="SubTabIdx1 === 1">
                                <div class="intro_summary">
                                    <h3 class="text_summary" v-html="t.Partnersupport.Summary"></h3>
                                </div>
                                <Tabs 
                                    v-model="SubTabIdx2" 
                                    :tab-items="t.Tabs3_1" 
                                    tab-class="type_04" 
                                    class="mb40" 
                                    :tab-slide="true" 
                                />
                                <div class="inner_content">

                                    <!-- gsrsu0301010201 -->
                                    <div v-if="SubTabIdx2 === 0" class="finance_support">

                                        <p class="text_summary_sub" v-html="t.Partnersupport.FinanceSupport.Summary"></p>

                                        <section class="support_item">
                                            <div class="wide_info_box">
                                                <figure class="img_frame">
                                                    <img src="@/assets/images/dummy/gsrsu0301010201_1.png" :alt="t.Partnersupport.FinanceSupport.Fund.Title">
                                                </figure>
                                                <div class="text_area">
                                                    <h4>{{ t.Partnersupport.FinanceSupport.Fund.Title }}</h4>
                                                    <p>{{ t.Partnersupport.FinanceSupport.Fund.Desc }}</p>
                                                </div>
                                            </div>

                                            <div class="process_container">
                                                <h3 class="section_title_sub">{{ t.Partnersupport.FinanceSupport.Fund.ProcessTitle }}</h3>
                                                <div class="process_flow">
                                                    <div 
                                                        v-for="(step, idx) in t.Partnersupport.FinanceSupport.Fund.Steps" 
                                                        :key="'step-'+idx" 
                                                        class="step_unit"
                                                    >
                                                        <p class="step_desc" v-html="step.tit"></p>
                                                        <span 
                                                            v-if="idx < t.Partnersupport.FinanceSupport.Fund.Steps.length - 1" 
                                                            class="arrow_next"
                                                        ></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        <section class="support_item grid_column_2">
                                            <div 
                                                v-for="(item, idx) in t.Partnersupport.FinanceSupport.SubFunds" 
                                                :key="'subfund-'+idx" 
                                                class="sub_fund_item"
                                            >
                                                <figure class="img_frame_small">
                                                    <img :src="item.img" :alt="item.tit">
                                                </figure>
                                                <div class="text_area mt32">
                                                    <h4>{{ item.tit }}</h4>
                                                    <p v-html="item.desc"></p>
                                                </div>
                                            </div>
                                        </section>

                                        <section class="support_item card_grid">
                                            <div 
                                                v-for="(card, idx) in t.Partnersupport.FinanceSupport.Cards" 
                                                :key="'fcard-'+idx" 
                                                class="strategy_card"
                                            >
                                                <div class="card_head">
                                                    <strong v-html="card.tit"></strong>
                                                </div>
                                                <p class="card_desc">{{ card.desc }}</p>
                                            </div>
                                        </section>
                                    </div>

                                    <!--gsrsu0301010202 -->
                                    <div v-if="SubTabIdx2 === 1" class="market_support">
                                        <section class="support_item">

                                            <p class="text_summary_sub" v-html="t.MarketSupport.Marketing.Summary"></p>

                                            <div class="div mb40">
                                                <h4>{{ t.MarketSupport.Marketing.Title }}</h4>
                                                <p class="p">{{ t.MarketSupport.Marketing.Desc }}</p>
                                            </div>
                                            
                                            <ul class="brand_grid">
                                                <li v-for="(brand, idx) in t.MarketSupport.Marketing.Brands" :key="'brand-'+idx">
                                                    <figure class="brand_img_box">
                                                        <img :src="brand.img" :alt="brand.name">
                                                    </figure>
                                                    <div class="brand_name mt16">
                                                        <strong>{{ brand.name }}</strong>
                                                    </div>
                                                </li>
                                            </ul>
                                        </section>

                                        <section class="support_item program_grid">
                                            <article v-for="(item, idx) in t.MarketSupport.Programs" :key="'prog-'+idx" class="program_item">
                                                <figure class="program_visual">
                                                    <img :src="item.img" :alt="item.tit">
                                                </figure>
                                                <div class="text_area mt40">
                                                    <h4 class="text-wrapper-4" v-html="item.tit"></h4>
                                                    <p class="text-wrapper-5" v-html="item.desc"></p>
                                                </div>
                                            </article>
                                        </section>
                                    </div>

                                    <!-- gsrsu0301010203 -->
                                    <div v-if="SubTabIdx2 === 2" class="competency_support">

                                        <p class="text_summary_sub" v-html="t.CompetencySupport.Summary"></p>

                                        <section class="support_item">
                                            <div class="div mb40">
                                                <h4 class="section_title_sub">{{ t.CompetencySupport.Education.Title }}</h4>
                                                <p class="p">{{ t.CompetencySupport.Education.Desc }}</p>
                                            </div>
                                            
                                            <ul>
                                                <li>
                                                    <figure class="img_frame">
                                                        <img src="@/assets/images/dummy/gsrsu0301010203_1.png" alt="교육지원 프로세스 다이어그램">
                                                    </figure>
                                                    <figure class="img_frame">
                                                        <img src="@/assets/images/dummy/gsrsu0301010203_2.png" :alt="t.CompetencySupport.Program.Title">
                                                    </figure>
                                                </li>
                                            </ul>
                                            <div class="policy_wrap">
                                                <table>
                                                    <colgroup>
                                                        <col style="width: 20%;">
                                                        <col style="width: 15%;">
                                                        <col style="width: auto;">
                                                    </colgroup>
                                                    <thead>
                                                        <tr>
                                                            <th class="ac" v-for="(tr, idx) in t.CompetencySupport.Education.Table.Thead" :key="idx">{{ tr }}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="(tr, idx) in t.CompetencySupport.Education.Table.Tbody" :key="idx">
                                                            <td class="ac"><strong>{{ tr.name }}</strong></td>
                                                            <td class="ac">{{ tr.period }}</td>
                                                            <td>{{ tr.desc }}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </section>
                                        <section class="support_item">
                                            <div class="div mb40">
                                                <h4 class="section_title_sub">{{ t.CompetencySupport.Program.Title }}</h4>
                                                <p class="p">{{ t.CompetencySupport.Program.Desc }}</p>
                                            </div>

                                            <div class="visual_wrap">
                                                <figure class="img_frame">
                                                    <img src="@/assets/images/dummy/gsrsu0301010203_3.png" :alt="t.CompetencySupport.Program.Title">
                                                </figure>
                                            </div>
                                        </section>

                                    </div>

                                    <!-- gsrsu0301010204 -->
                                    <div v-if="SubTabIdx2 === 3 && t.WelfareSupport" class="welfare_support">
                                        
                                        <p class="text_summary_sub" v-html="t.WelfareSupport.Summary"></p>

                                        <section class="support_item">
                                            <div class="div mb40">
                                                <h4 class="section_title_sub">{{ t.WelfareSupport.Football.Title }}</h4>
                                                <p class="p" v-html="t.WelfareSupport.Football.Desc"></p>
                                            </div>

                                            <div class="visual_wrap">
                                                <figure class="img_frame" style="width:100%; height:340px;">
                                                    <img src="@/assets/images/dummy/gsrsu0301010204.png" :alt="t.WelfareSupport.Football.Title">
                                                </figure>
                                            </div>
                                        </section>
                                    </div>

                                    <!-- gsrsu0301010205 -->
                                    <div v-if="SubTabIdx2 === 4 && t.BroadcastingSupport" class="broadcasting_support">

                                        <p class="text_summary_sub" v-html="t.BroadcastingSupport.Summary"></p>

                                        <section class="support_item">
                                            <div class="div mb40">
                                                <h3 class="section_title_sub mb16">{{ t.BroadcastingSupport.PrepSupport.Title }}</h3>
                                                <p class="p">{{ t.BroadcastingSupport.PrepSupport.Desc }}</p>
                                            </div>
                                            <figure class="img_frame">
                                                <img src="@/assets/images/sub/gsrsu03010101/img_01-02-05-01.png" :alt="t.BroadcastingSupport.PrepSupport.Title">
                                            </figure>
                                        </section>

                                        <section class="support_item small_business">
                                            <figure class="img_frame">
                                                <img src="@/assets/images/dummy/gsrsu0301010205_2.png" :alt="t.BroadcastingSupport.PrioritySupport.Title">
                                            </figure>

                                            <div>
                                                <div 
                                                    v-for="(sub, idx) in t.BroadcastingSupport.PrioritySupport.SubItems" 
                                                    :key="'broad-sub-'+idx"
                                                    class="sub_item"
                                                >
                                                    <h4>{{ sub.Title }}</h4>
                                                    <p class="p" v-html="sub.Desc"></p>
                                                </div>
                                            </div>
                                        </section>
                                    </div>

                                    <!-- gsrsu0301010206 -->
                                    <div v-if="SubTabIdx2 === 5 && t.CommunicationSupport" class="communication_support">
                                            
                                        <p class="text_summary_sub" v-html="t.CommunicationSupport.Summary"></p>

                                        <section class="support_item ">
                                            <figure class="img_frame">
                                                <img src="@/assets/images/dummy/gsrsu0301010206_1.png" alt="파트너사 소통 채널 비주얼">
                                            </figure>
                                        </section>

                                        <section class="support_item">
                                            <div class="div mb40">
                                                <h4 class="section_title_sub">{{ t.CommunicationSupport.Title }}</h4>
                                            </div>

                                            <div class="policy_wrap">
                                                <table>
                                                    <colgroup>
                                                        <col style="width: 250px;">
                                                        <col style="width: 200px;">
                                                        <col style="width: auto;">
                                                    </colgroup>
                                                    <thead>
                                                        <tr>
                                                            <th v-for="th in t.CommunicationSupport.Table.Thead" :key="th">{{ th }}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="(tr, idx) in t.CommunicationSupport.Table.Tbody" :key="idx">
                                                            <td class="ac"><strong>{{ tr.name }}</strong></td>
                                                            <td class="ac">{{ tr.period }}</td>
                                                            <td class="al">{{ tr.desc }}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>

                            <div v-if="SubTabIdx1 === 2">
                                <div class="intro_summary">
                                    <h3 class="text_summary" v-html="t.OwnerSupport.Summary"></h3>
                                </div>

                                <Tabs 
                                    v-model="SubTabIdx2" 
                                    :tab-items="t.Tabs3_2" 
                                    tab-class="type_04" 
                                    class="mb40" 
                                    :tab-slide="true" 
                                />
                                <div class="inner_content">

                                    <!-- gsrsu03010103 -->
                                    <div v-if="SubTabIdx2 === 0 && t.OwnerSupport" class="gs25_owner_support">
                                            
                                        <p class="text_summary_sub" v-html="t.OwnerSupport.Summary"></p>

                                        <section class="support_item">
                                            <div class="div mb40">
                                                <h4 class="section_title_sub">{{ t.OwnerSupport.part_1.MainTitle }}</h4>
                                            </div>
                                            
                                            <ul class="card_grid owner_card_layout">
                                                <li v-for="(item, idx) in t.OwnerSupport.part_1.Features" :key="'owner-feat-'+idx" class="strategy_card">
                                                    <div class="card_head">
                                                        <span class="num">{{ item.num }}</span>
                                                        <strong>{{ item.tit }}</strong>
                                                    </div>
                                                    <p class="card_desc">{{ item.desc }}</p>
                                                </li>
                                            </ul>
                                            <p class="notice_text pc">{{ t.OwnerSupport.part_1.Notice }}</p>
                                        </section>

                                        <section class="support_item">
                                            <div class="div mb40">
                                                <h4 class="section_title_sub">{{ t.OwnerSupport.part_1.OtherTitle }}</h4>
                                            </div>
                                            
                                            <div class="program_grid">
                                                <article v-for="(other, idx) in t.OwnerSupport.part_1.OtherItems" :key="'owner-other-'+idx" class="program_item">
                                                    <figure class="program_visual">
                                                        <img :src="other.img" :alt="other.tit">
                                                    </figure>
                                                    <div class="text_area mt40">
                                                        <h4 class="text-wrapper-4">{{ other.tit }}</h4>
                                                        <p class="p" style="font-size:20px;">{{ other.desc }}</p>
                                                    </div>
                                                </article>
                                            </div>
                                        </section>
                                    </div>

                                    <!-- gsrsu03010103_1 -->
                                    <div v-if="SubTabIdx2 === 1 && t.OwnerSupport.part_2" class="fresh_owner_support">

                                        <p class="text_summary_sub" v-html="t.OwnerSupport.part_2.Summary"></p>

                                        <section class="support_item">
                                            <div class="div mb40">
                                                <h4 class="section_title_sub">{{ t.OwnerSupport.part_2.MainTitle }}</h4>
                                            </div>

                                            <div class="program_grid">
                                                <article 
                                                    v-for="(item, idx) in t.OwnerSupport.part_2.Items" 
                                                    :key="'fresh-owner-'+idx" 
                                                    class="program_item"
                                                >
                                                    <figure class="program_visual">
                                                        <img :src="item.img" :alt="item.tit">
                                                    </figure>
                                                    <div class="text_area mt40">
                                                        <h4 class="text-wrapper-4">{{ item.tit }}</h4>
                                                        <p class="p" style="font-size:20px;">{{ item.desc }}</p>
                                                    </div>
                                                </article>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>

                            <!-- gsrsu03010104 -->
                            <div v-if="SubTabIdx1 === 3 && t.community" class="community_policy">
                                <div class="intro_summary">
                                    <h3 class="text_summary" v-html="t.community.Summary"></h3>
                                </div>

                                <section class="support_item">
                                    <div class="div mb40">
                                        <h4 class="section_title_sub">{{ t.community.Purpose.Title }}</h4>
                                    </div>
                                    
                                    <ul class="card_grid owner_card_layout">
                                        <li v-for="(item, idx) in t.community.Purpose.Items" :key="'purp-'+idx" class="strategy_card">
                                            <div class="card_head">
                                                <span class="num">{{ item.num }}</span>
                                            </div>
                                            <p class="p" style="font-weight:700; font-size:20px;" v-html="item.desc"></p>
                                        </li>
                                    </ul>

                                    <div class="btn-wrap ac mt40">
                                        <Buttons btn-class="btn_icon_arrow btn_xl border after"
                                            @click="openModal" 
                                            data-popid="gsrsu0301010401" 
                                            data-type="lg" 
                                            data-cont="gsrsu0301010401">
                                            {{ t.community.Purpose.BtnText }}
                                        </Buttons>
                                    </div>
                                </section>

                                <section class="support_item">
                                    <div class="div mb40">
                                        <h4 class="section_title_sub">{{ t.community.Goal.Title }}</h4>
                                    </div>

                                    <figure class="diagram_img_wrap">
                                        <img :src="t.community.Goal.DiagramImg" alt="지역 사회 참여 정책의 목표 다이어그램">
                                    </figure>

                                    <ul class="card_grid owner_card_layout">
                                        <li v-for="(item, idx) in t.community.Goal.Items" :key="'goal-'+idx" class="strategy_card">
                                            <div class="card_head">
                                                <span class="num">{{ item.num }}</span>
                                            </div>
                                            <p class="p" style="font-weight:700; font-size:20px;" v-html="item.desc"></p>
                                        </li>
                                    </ul>
                                </section>
                            </div>

                            <!-- gsrsu03010105 -->
                            <div v-if="SubTabIdx1 === 4 && t.supplychain" class="supplychain_policy">
                                <div class="intro_summary">
                                    <h3 class="text_summary" v-html="t.supplychain.Summary"></h3>
                                </div>

                                <section class="support_item">
                                    <div class="policy_box_wrap">
                                        <div class="div mb40">
                                            <h4 class="section_title_sub">{{ t.supplychain.Policy.Title }}</h4>
                                        </div>
                                        
                                        <ul class="policy_list">
                                            <li v-for="(item, idx) in t.supplychain.Policy.Items" :key="'pol-'+idx" class="policy_item">
                                                <span class="label">{{ item.label }}</span>
                                                <p class="desc">{{ item.desc }}</p>
                                            </li>
                                        </ul>

                                        <div class="btn-wrap ac mt60">
                                            <Buttons btn-class="btn_icon_arrow btn_xl border after"
                                                @click="openModal" 
                                                data-popid="gsrsu0301010501" 
                                                data-type="lg" 
                                                data-cont="gsrsu0301010501">
                                                {{ t.supplychain.Policy.BtnText }}
                                            </Buttons>
                                        </div>
                                    </div>
                                </section>

                                <section class="support_item">
                                    <div class="div mb40">
                                        <h4 class="section_title_sub">{{ t.supplychain.System.Title }}</h4>
                                    </div>

                                    <figure class="diagram_img_wrap system_bg">
                                        <img :src="t.supplychain.System.DiagramImg" alt="공급망 지속가능성 관리 체계 R&R 다이어그램">
                                    </figure>
                                </section>
                            </div>
                        </div>
                    </article>

                    <article v-if="CTabIdx === 1">
                        <Tabs 
                            v-model="SubTabIdx1" 
                            :tab-items="t.Tabs2_2" 
                            tab-class="type_02" 
                            :tab-slide="true"
                        />
                        <div class="sub_tab_content">

                            <!-- gsrsu030201 -->
                            <div v-if="SubTabIdx1 === 0" class="csr_outline">
                                <div class="intro_summary">
                                    <h3 class="text_summary" v-html="t.CSR.outline.Summary"></h3>
                                </div>

                                <section class="support_item">
                                    <div class="view_box">
                                        <div class="strategy_header mb40">
                                            <h4 class="text_xl_bold">사회공헌 전략</h4>
                                        </div>
                                        
                                        <div class="strategy_grid ">
                                            <div class="strategy_info">
                                                <span class="label_blue">비전</span>
                                                <p class="text_l_bold">{{ t.CSR.outline.Strategy.Vision }}</p>
                                            </div>
                                            <div class="strategy_info">
                                                <span class="label_blue">미션</span>
                                                <p class="text_l_bold">{{ t.CSR.outline.Strategy.Mission }}</p>
                                            </div>
                                        </div>

                                        <figure class="diagram_canvas ac">
                                            <img :src="t.CSR.outline.Strategy.DiagramImg" alt="사회공헌 전략 다이어그램" class="strategy_main_img">
                                        </figure>
                                    </div>
                                </section>

                                <section class="support_item">
                                    <div class="strategy_header mb40">
                                        <h4 class="text_xl_bold">발자취</h4>
                                    </div>
                                    
                                    <div class="timeline_wrapper">
                                        <div class="timeline_content_area">
                                            <div v-for="(history, hIdx) in t.CSR.outline.History" :key="'hist-'+hIdx" class="history_row">
                                                <div class="history_year">
                                                    <span>{{ history.year }}</span>
                                                </div>
                                                <ul class="history_details">
                                                    <li v-for="(item, iIdx) in history.items" :key="'item-'+iIdx" class="history_item">
                                                        {{ item }}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <!-- gsrsu030202 -->
                            <div v-if="SubTabIdx1 === 1 && t.CSR && t.CSR.vulnerable" class="vulnerable_support">
                                <div class="intro_summary">
                                    <h3 class="text_summary" v-html="t.CSR.vulnerable.Summary"></h3>
                                </div>

                                <section class="support_item">
                                    <div class="program_grid">
                                        <article v-for="(project, pIdx) in t.CSR.vulnerable.Projects" :key="'proj-'+pIdx" class="program_item">
                                            <figure class="program_visual">
                                                <img :src="project.img" :alt="project.tit">
                                            </figure>
                                            <div class="text_area mt40">
                                                <h4 class="text-wrapper-4">{{ project.tit }}</h4>
                                                <p class="p">{{ project.desc }}</p>
                                            </div>
                                        </article>
                                    </div>
                                </section>

                                <section class="support_item">
                                    <div class="div mb40">
                                        <h4 class="section_title_sub">{{ t.CSR.vulnerable.Partners.Title }}</h4>
                                    </div>
                                    <ul class="brand_grid">
                                        <li v-for="(partner, ptnIdx) in t.CSR.vulnerable.Partners.Items" :key="'ptn-'+ptnIdx">
                                            <figure class="brand_img_box">
                                                <img :src="partner.img" :alt="partner.name">
                                            </figure>
                                            <div class="brand_name mt16">
                                                <strong>{{ partner.name }}</strong>
                                            </div>
                                        </li>
                                    </ul>
                                </section>
                            </div>

                            <!-- gsrsu030203 -->
                            <div v-if="SubTabIdx1 === 2 && t.CSR && t.CSR.communitysupport" class="community_support_area">
                                <div class="intro_summary">
                                    <h3 class="text_summary" v-html="t.CSR.communitysupport.Summary"></h3>
                                </div>

                                <section class="support_item">
                                    <div class="program_grid">
                                        <article v-for="(project, pIdx) in t.CSR.communitysupport.Projects" :key="'comm-proj-'+pIdx" class="program_item">
                                            <figure class="program_visual">
                                                <img :src="project.img" :alt="project.tit">
                                            </figure>
                                            <div class="text_area mt40">
                                                <h4 class="text-wrapper-4">{{ project.tit }}</h4>
                                                <p class="p">{{ project.desc }}</p>
                                            </div>
                                        </article>
                                    </div>
                                </section>

                                <section class="support_item">
                                    <div class="div mb40">
                                        <h4 class="section_title_sub">{{ t.CSR.communitysupport.Partners.Title }}</h4>
                                    </div>
                                    <ul class="brand_grid">
                                        <li v-for="(partner, ptnIdx) in t.CSR.communitysupport.Partners.Items" :key="'comm-ptn-'+ptnIdx" style="margin-bottom:40px;">
                                            <figure class="brand_img_box">
                                                <img :src="partner.img" :alt="partner.name">
                                            </figure>
                                            <div class="brand_name mt16">
                                                <strong>{{ partner.name }}</strong>
                                            </div>
                                        </li>
                                    </ul>
                                </section>
                            </div>

                            <!-- gsrsu030204 -->
                            <div v-if="SubTabIdx1 === 3 && t.CSR.broadcasting" class="broadcasting_development">
                                <div class="intro_summary">
                                    <h3 class="text_summary" v-html="t.CSR.broadcasting.Summary"></h3>
                                </div>

                                <section class="support_item">
                                    <div class="program_grid">
                                        <article v-for="(project, pIdx) in t.CSR.broadcasting.Projects" :key="'broad-proj-'+pIdx" class="program_item">
                                            <figure class="program_visual">
                                                <img :src="project.img" :alt="project.tit">
                                            </figure>
                                            <div class="text_area mt40">
                                                <h4 class="text_xl_bold" style="font-size:32px;">{{ project.tit }}</h4>
                                                <p class="p">{{ project.desc }}</p>
                                            </div>
                                        </article>
                                    </div>
                                </section>

                                <section class="support_item">
                                    <div class="div mb40">
                                        <h4 class="section_title_sub">{{ t.CSR.broadcasting.Partners.Title }}</h4>
                                    </div>
                                    <ul class="brand_grid">
                                        <li v-for="(partner, ptnIdx) in t.CSR.broadcasting.Partners.Items" :key="'broad-ptn-'+ptnIdx">
                                            <figure class="brand_img_box">
                                                <img :src="partner.img" :alt="partner.name">
                                            </figure>
                                            <div class="brand_name mt16">
                                                <strong>{{ partner.name }}</strong>
                                            </div>
                                        </li>
                                    </ul>
                                </section>
                            </div>

                            <!-- gsrsu030205 -->
                            <div v-if="SubTabIdx1 === 4 && t.CSR.sharing" class="sharing_angel">
                                <div class="intro_summary">
                                    <h3 class="text_summary" v-html="t.CSR.sharing.Summary"></h3>
                                </div>

                                <div class="sharing_list_wrap">
                                    <div class="program_grid">
                                        <article v-for="(item, idx) in t.CSR.sharing.List" :key="'angel-'+idx" class="program_item sharing_card">
                                            <figure class="program_visual">
                                                <img :src="item.img" :alt="item.tit">
                                            </figure>
                                            <div class="text_area mt32">
                                                <h4 class="text_l_bold">{{ item.tit }}</h4>
                                                <p class="p mb24">{{ item.desc }}</p>
                                                <div class="card_footer">
                                                    <span class="badge_gray">{{ item.badge }}</span>
                                                    <span class="date_text">{{ item.date }}</span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <Pagination v-model="page" :totalPages="32" :visiblePages="10" :showEllipsis="false" @change="handlePage" />
                                </div>
                            </div>
                        </div>
                    </article>

                    <article v-if="CTabIdx === 2">
                        <Tabs 
                            v-model="SubTabIdx1" 
                            :tab-items="t.Tabs2_3" 
                            tab-class="type_02" 
                            :tab-slide="true" 
                            @change="SubTabIdx2 = 0" 
                        />
                        <div class="sub_tab_content">
                            <!-- gsrsu030301 -->
                            <div v-if="SubTabIdx1 === 0 && t.protect.humanrights" class="human_rights_management">
                                <div class="intro_summary">
                                    <h3 class="text_summary" v-html="t.protect.humanrights.Summary"></h3>
                                </div>

                                <!-- 인권경영정책 -->
                                <section class="support_item">
                                    <div class="policy_box_wrap">
                                        <div class="div mb40">
                                            <h4 class="section_title_sub">{{ t.protect.humanrights.Policy.Title }}</h4>
                                        </div>
                                        <div class="GS-universal-wrapper">
                                            <p class="p" v-html="t.protect.humanrights.Policy.Desc"></p>
                                        </div>
                                        <div class="btn-wrap ac mt60">
                                            <Buttons btn-class="btn_icon_arrow btn_xl border after"
                                                @click="openModal" 
                                                data-popid="gsrsu03030101" 
                                                data-type="lg" 
                                                data-cont="gsrsu03030101">
                                                {{ t.protect.humanrights.Policy.BtnText }}
                                            </Buttons>
                                        </div>
                                    </div>
                                </section>

                                <!-- 임직원 인권 목표 -->
                                <section class="support_item">
                                    <div class="div mb40 ac">
                                        <h4 class="section_title_sub">{{ t.protect.humanrights.Goals.Title }}</h4>
                                    </div>
                                    <ul class="card_grid owner_card_layout">
                                        <li v-for="(item, idx) in t.protect.humanrights.Goals.Items" :key="'goal-'+idx" class="strategy_card">
                                            <div class="card_head">
                                                <span class="num">{{ item.num }}</span>
                                            </div>
                                            <strong>{{ item.desc }}</strong>
                                        </li>
                                    </ul>
                                </section>

                                <!-- 인권침해 방지 프로그램 (태블릿 2열, 모바일 1열) -->
                                <section class="support_item">
                                    <div class="div mb40">
                                        <h4 class="section_title_sub">{{ t.protect.humanrights.Programs.Title }}</h4>
                                    </div>
                                    <div class="program_grid">
                                        <article v-for="(item, idx) in t.protect.humanrights.Programs.Items" :key="'prog-'+idx" class="program_item">
                                            <figure class="program_visual">
                                                <img :src="item.img" :alt="item.tit">
                                            </figure>
                                            <div class="text_area">
                                                <strong>{{ item.tit }}</strong>
                                            </div>
                                        </article>
                                    </div>
                                </section>

                                <!-- 인권영향평가 -->
                                <section class="support_item">
                                    <div class="policy_box_wrap">
                                        <div class="wide_info_box">
                                            <figure class="img_frame">
                                                <img :src="t.protect.humanrights.Assessment.img" alt="인권영향평가">
                                            </figure>
                                            <div class="text_area">
                                                <span>{{ t.protect.humanrights.Assessment.Title }}</span>
                                                <p class="p" v-html="t.protect.humanrights.Assessment.Desc"></p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <div v-if="SubTabIdx1 === 1">
                                <Tabs 
                                    v-model="SubTabIdx2" 
                                    :tab-items="t.Tabs3_3" 
                                    tab-class="type_04" 
                                    class="mb40" 
                                    :tab-slide="true" 
                                />
                                <div class="inner_content">
                                    <!-- gsrsu03030201 -->
                                    <div v-if="SubTabIdx2 === 0" class="talent_vision">
                                        <div class="intro_summary">
                                            <h3 class="text_summary_sub">{{ t.protect.talentmanagement.part_1.Summary }}</h3>
                                        </div>

                                        <!-- 상단 핵심 가치 비주얼 (서클 레이아웃) -->
                                        <section class="philosophy_box">
                                            <div>
                                                <h3 class="ac mb60" v-html="t.protect.talentmanagement.part_1.MainTitle"></h3>
                                                <div class="circle_visual_wrap">
                                                    <div class="circle_item value">
                                                        <strong>{{ t.protect.talentmanagement.part_1.Philosophy.Items[0].tit }}</strong>
                                                        <span>{{ t.protect.talentmanagement.part_1.Philosophy.Items[0].sub }}</span>
                                                    </div>
                                                    <div class="circle_item way">
                                                        <strong>{{ t.protect.talentmanagement.part_1.Philosophy.Items[1].tit }}</strong>
                                                        <span>{{ t.protect.talentmanagement.part_1.Philosophy.Items[1].sub }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- 상세 가치 리스트 (화이트 박스) -->
                                            <div class="value_detail_grid">
                                                <div class="detail_card">
                                                    <div class="card_title">GS Value</div>
                                                    <ul class="value_list">
                                                        <li v-for="(item, idx) in t.protect.talentmanagement.part_1.Details.Value" :key="'val-'+idx">
                                                            <strong class="eng">{{ item.tit }}</strong>
                                                            <p>{{ item.desc }}</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="detail_card">
                                                    <div class="card_title">GS Way</div>
                                                    <ul class="way_list">
                                                        <li v-for="(item, idx) in t.protect.talentmanagement.part_1.Details.Way" :key="'way-'+idx">
                                                            <strong>{{ item.tit }}</strong>
                                                            <div class="tags">
                                                                <span v-for="txt in item.list" :key="txt">{{ txt }}</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </section>


                                        <!-- 하단 꿈 실현 섹션 (이미지 + 텍스트) -->
                                        <section class="dream_realization">
                                            <div class="wide_info_box type_bg">
                                                <figure class="img_frame">
                                                    <img src="@/assets/images/dummy/gsrsu03030201_2.png" alt="인재경영 회의">
                                                </figure>
                                                <div class="text_area">
                                                    <h4 v-html="t.protect.talentmanagement.part_1.Description"></h4>
                                                    <ul class="bullet_01 no_type mt32">
                                                        <li v-for="(effort, idx) in t.protect.talentmanagement.part_1.Efforts" :key="'eff-'+idx" class="effort_item">
                                                            <span class="num">{{ idx + 1 }}.</span>
                                                            <span class="desc" v-html="effort"></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </section>
                                    </div>

                                    <!-- gsrsu03030202: 인재육성체계 -->
                                    <div v-if="SubTabIdx2 === 1" class="talent_development">
                                        <div class="intro_summary">
                                            <p class="text_summary_sub" v-html="t.protect.talentmanagement.part_2.Summary"></p>
                                        </div>

                                        <section class="support_item">
                                            <!-- 상단 다이어그램 -->
                                            <figure class="diagram_img_wrap ac">
                                                <img :src="t.protect.talentmanagement.part_2.DiagramImg" alt="GS 인재육성 체계 다이어그램">
                                            </figure>

                                            <!-- 인재육성 카드 그리드 -->
                                            <div class="div mb40">
                                                <h4 class="section_title_sub">{{ t.protect.talentmanagement.part_2.MainTitle }}</h4>
                                            </div>

                                            <div class="card_grid owner_card_layout">
                                                <article 
                                                    v-for="(card, idx) in t.protect.talentmanagement.part_2.Cards" 
                                                    :key="'talent-card-'+idx" 
                                                    class="strategy_card"
                                                >
                                                    <div class="card_head">
                                                        <span class="num">{{ card.num }}</span>
                                                        <strong>{{ card.tit }}</strong>
                                                        <p class="p_desc" v-html="card.desc"></p>
                                                    </div>
                                                    <ul class="bullet_01">
                                                        <li v-for="(li, lIdx) in card.list" :key="'li-'+lIdx">
                                                            {{ li }}
                                                        </li>
                                                    </ul>
                                                </article>
                                            </div>
                                        </section>
                                    </div>

                                    <!-- gsrsu03030203: 인재경영 지표 -->
                                    <div v-if="SubTabIdx2 === 2" class="talent_indicators">
                                        <div class="intro_summary">
                                            <p class="text_summary_sub" v-html="t.protect.talentmanagement.part_3.Summary"></p>
                                        </div>

                                        <!-- 복리후생 섹션 (Work, Engagement, Life, Leisure) -->
                                        <section v-for="(section, sIdx) in t.protect.talentmanagement.part_3.Sections" :key="'sec-'+sIdx" class="icon_wrap support_section">
                                            <div class="section_head">
                                                <h4 class="section_title_sub">{{ section.title }}</h4>
                                                <p class="p" v-html="section.desc"></p>
                                            </div>
                                            
                                            <!-- 디자인에 맞춘 2열 리스트 구조 -->
                                            <div class="support_grid">
                                                <article v-for="(item, iIdx) in section.items" :key="'item-'+iIdx" class="support_item">
                                                    <div class="item_inner">
                                                        <div class="content_box">
                                                            <div class="tit_area">
                                                                <span class="num">{{ item.num }}</span>
                                                                <strong class="tit">{{ item.tit }}</strong>
                                                            </div>
                                                            <p class="desc">{{ item.desc }}</p>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </section>

                                        <!-- 인재경영 관련 인증 및 대외 수상 이력 -->
                                        <section class="support_section award_section">
                                            <h4 class="section_title_sub mb40">{{ t.protect.talentmanagement.part_3.Awards.Title }}</h4>
                                            
                                            <!-- 상단 리스트 영역 -->
                                            <div class="award_list">
                                                <div v-for="(item, idx) in t.protect.talentmanagement.part_3.Awards.List" :key="'award-'+idx" class="award_row">
                                                    <span class="year">{{ item.year }}</span>
                                                    <span class="month">{{ item.month }}</span>
                                                    <span class="desc">{{ item.desc }}</span>
                                                </div>
                                            </div>

                                            <!-- 하단 강조 카드 영역 (요청하신 부분) -->
                                            <div>
                                                <ul class="brand_grid mt60">
                                                    <li>
                                                        <figure class="brand_img_box">
                                                            <img :src="t.protect.talentmanagement.part_3.Awards.Highlight.Img" alt="GPTW 인증 로고">
                                                        </figure>
                                                    </li>
                                                </ul>
                                                <div class="info_box">
                                                    <strong class="tit" v-html="t.protect.talentmanagement.part_3.Awards.Highlight.Tit"></strong>
                                                    <span class="date">{{ t.protect.talentmanagement.part_3.Awards.Highlight.Date }}</span>
                                                </div>
                                            </div>
                                        </section>
                                    </div>

                                    <!-- gsrsu03030204 -->
                                    <div v-if="SubTabIdx2 === 3" class="talent_performance_data">
                                        <div class="intro_summary">
                                            <p class="text_summary_sub">{{ t.protect.talentmanagement.part_4.Summary }}</p>
                                            <p class="GS" v-html="t.protect.talentmanagement.part_4.Desc"></p>
                                        </div>

                                        <div class="policy_wrap mt60">
                                            <table>
                                                <colgroup>
                                                    <col style="width: 100px;">
                                                    <col style="width: auto;">
                                                    <col style="width: 200px;">
                                                    <col style="width: 200px;">
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th v-for="th in t.protect.talentmanagement.part_4.Table.Thead" :key="th" class="ac">{{ th }}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(tr, idx) in t.protect.talentmanagement.part_4.Table.Tbody" :key="'perf-'+idx">
                                                        <td class="ac">{{ tr.num }}</td>
                                                        <td class="al">{{ tr.tit }}</td>
                                                        <td class="ac">
                                                            <!-- item.link를 tr.link로 수정 -->
                                                            <button type="button" class="btn_download_file" @click="handleDownload(tr.link)">
                                                                <span class="file_type_text">{{ t.protect.talentmanagement.part_4.txt }}</span>
                                                            </button>
                                                        </td>
                                                        <td class="ac">{{ tr.date }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <!-- 페이지네이션 (기본 Pagination 컴포넌트 활용) -->
                                        <Pagination v-model="page" :totalPages="5" :visiblePages="5" @change="handlePage" />
                                    </div>
                                </div>
                            </div>

                            <!-- gsrsu030303: 고객만족경영 -->
                            <div v-if="SubTabIdx1 === 2 && t.protect.customer" class="customer_satisfaction">
                                <!-- 상단 요약 -->
                                <div class="intro_summary">
                                    <h3 class="text_summary" v-html="t.protect.customer.Summary"></h3>
                                </div>

                                <!-- 소비자 권익보호 정책 -->
                                <section class="support_item">
                                    <div class="policy_box_wrap">
                                        <div class="title_area mb40">
                                            <h4 class="section_title_sub">{{ t.protect.customer.Policy.Title }}</h4>
                                        </div>
                                        <div class="GS-universal-wrapper">
                                            <p class="p" v-html="t.protect.customer.Policy.Desc"></p>
                                        </div>
                                        <div class="policy_list_container mt40">
                                            <ul class="policy_list">
                                                <li v-for="(item, idx) in t.protect.customer.Policy.Items" :key="'policy-'+idx" class="policy_item">
                                                    <span class="label">{{ item.label }}</span>
                                                    <p class="desc">{{ item.text }}</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="btn-wrap ac mt60">
                                            <Buttons btn-class="btn_icon_arrow btn_xl border after" 
                                                @click="openModal" 
                                                data-popid="gsrsu03030301" 
                                                data-type="lg" 
                                                data-cont="gsrsu03030301">
                                                {{ t.protect.customer.Policy.BtnText }}
                                            </Buttons>
                                        </div>
                                    </div>
                                </section>

                                <!-- 고객만족경영 주요 활동 -->
                                <section class="support_item">
                                    <div class="title_area mb40">
                                        <h4 class="section_title_sub">{{ t.protect.customer.Activities.Title }}</h4>
                                    </div>
                                    <div class="program_grid">
                                        <article v-for="(item, idx) in t.protect.customer.Activities.Items" :key="'activity-'+idx" class="program_item">
                                            <!-- 활동 사진은 img 태그 유지 -->
                                            <figure class="program_visual">
                                                <img :src="item.img" :alt="item.tit">
                                            </figure>
                                            <div class="text_area">
                                                <h4 class="text-wrapper-4">{{ item.tit }}</h4>
                                                <div class="card_desc">
                                                    <p class="sub_tit">{{ item.subTit }}</p>
                                                    <p class="p">{{ item.desc }}</p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </section>

                                <!-- 서비스 우수 직원 추천 -->
                                <section class="support_item">
                                    <div class="recommend_banner_wrap">
                                        <div class="title_area mb40">
                                            <h4 class="section_title_sub">{{ t.protect.customer.Recommend.Title }}</h4>
                                        </div>
                                        <div class="recommend_box">
                                            <div class="text_area">
                                                <strong class="point_tit">{{ t.protect.customer.Recommend.PointTit }}</strong>
                                                <p class="desc" v-html="t.protect.customer.Recommend.Desc"></p>
                                            </div>
                                            <!-- '서비스 우수 직원 추천하기' 버튼 -->
                                            <Buttons btn-class="btn_icon_arrow btn_xl border after">
                                                {{ t.protect.customer.Recommend.BtnText }}
                                            </Buttons>
                                        </div>
                                    </div>
                                </section>

                                <!-- 제품과 서비스 안전 제도 -->
                                <section class="support_item">
                                    <div class="title_area mb40">
                                        <h4 class="section_title_sub" v-html=" t.protect.customer.Safety.Title"></h4>
                                    </div>
                                    <ul class="safety_system_list">
                                        <li v-for="(item, idx) in t.protect.customer.Safety.Items" :key="'safety-'+idx">
                                            <!-- 아이콘 영역만 ::before 사용 (태그 내부 비움) -->
                                            <span class="num">{{ item.step }}</span>
                                            <div class="tit_wrap">
                                                <strong class="tit">
                                                    {{ item.tit }}
                                                    <button class="icon_link_before" 
                                                        @click="openModal" 
                                                        :data-popid="item.popContId" 
                                                        data-type="lg" 
                                                        :data-cont="item.popContId">
                                                    </button>
                                                </strong>
                                                <!-- 링크 아이콘 영역 ::before 사용 -->
                                            </div>
                                            <p class="desc">{{ item.desc }}</p>
                                        </li>
                                    </ul>
                                </section>

                                <!-- 피해 보상 프로그램 -->
                                <section class="support_item">
                                    <div class="title_area mb40">
                                        <h4 class="section_title_sub" v-html="t.protect.customer.Compensation.Title"></h4>
                                    </div>
                                    <div class="compensation_process_wrap">
                                        <div class="process_steps">
                                            <div v-for="(step, idx) in t.protect.customer.Compensation.Steps" :key="'step-'+idx" class="step_box">
                                                <div class="step_info">
                                                    <span class="label">{{ step.label }}</span>
                                                    <p class="desc" v-html="step.desc"></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="btn-wrap ac mt40">
                                            <Buttons btn-class="btn_icon btn_xl primary after">
                                                {{ t.protect.customer.Compensation.BtnText }}
                                            </Buttons>
                                        </div>
                                    </div>
                                </section>

                                <!-- 수상 이력 및 인증 -->
                                <section class="support_item">
                                    <div class="title_area mb40">
                                        <h4 class="section_title_sub" v-html="t.protect.customer.Awards.Title"></h4>
                                    </div>
                                    
                                    <!-- 상단 리스트 영역 -->
                                    <div class="award_list mb80">
                                        <div v-for="(item, idx) in t.protect.customer.Awards.History" :key="'award-'+idx" class="award_row">
                                            <span class="year">{{ item.year }}</span>
                                            <span class="month">{{ item.month }}</span>
                                            <span class="desc">{{ item.desc }}</span>
                                        </div>
                                    </div>

                                    <section class="award_section">
                                        <div v-for="(mark, idx) in t.protect.customer.Awards.Marks" :key="'mark-' + idx" class="mark_item_group">
                                            <ul class="brand_grid mt60">
                                                <li>
                                                    <figure class="brand_img_box">
                                                        <!-- 각 마크의 이미지 바인딩 -->
                                                        <img :src="mark.img" :alt="mark.tit">
                                                    </figure>
                                                </li>
                                            </ul>
                                            <div class="info_box">
                                                <!-- 제목 및 날짜 바인딩 -->
                                                <strong class="tit" v-html="mark.tit"></strong>
                                                <span class="date">{{ mark.date }}</span>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                            </div>

                            <!-- gsrsu030304 -->
                            <section v-if="SubTabIdx1 === 3 && t.protect.safetymanagement" class="safety_management_wrap">
                                <div class="intro_summary">
                                    <h3 class="text_summary" v-html="t.protect.safetymanagement.Summary"></h3>
                                </div>

                                <div class="contents">
                                    <!-- 1. 안전·보건 경영방침 -->
                                    <section class="protection_section mb120">
                                        <div class="policy_card_box">
                                            <div class="section_title_area mb40">
                                                <h4 class="section_title_sub">{{ t.protect.safetymanagement.Policy.Title }}</h4>
                                            </div>
                                            <ul class="policy_list_wrap">
                                                <li v-for="(item, idx) in t.protect.safetymanagement.Policy.Items" :key="'policy-'+idx" class="policy_item">
                                                    <strong class="item_label">{{ item.label }}</strong>
                                                    <p class="item_text">{{ item.text }}</p>
                                                </li>
                                            </ul>
                                            <div class="btn-wrap ac mt40">
                                                <button type="button" class="btn_icon_arrow btn_xl border after" 
                                                    @click="openModal" 
                                                    data-popid="gsrsu03030401" 
                                                    data-type="lg" 
                                                    data-cont="gsrsu03030401">
                                                    {{ t.protect.safetymanagement.Policy.BtnText }}
                                                </button>
                                            </div>
                                        </div>
                                    </section>

                                    <!-- 2. 안전보건 거버넌스 -->
                                    <section class="protection_section mb120">
                                        <div class="section_title_area mb40">
                                            <h4 class="section_title_sub">{{ t.protect.safetymanagement.Governance.Title }}</h4>
                                            <p class="p_desc" v-html="t.protect.safetymanagement.Governance.Desc"></p>
                                        </div>
                                        <figure class="diagram_box_wrap">
                                            <div class="visual_area mb20">
                                                <img :src="isMobile ? t.protect.safetymanagement.Governance.imgMo1 : t.protect.safetymanagement.Governance.img1" alt="플랫폼 BU 안전보건 조직도">
                                            </div>
                                            <div class="notice_wrap mt20">
                                                <p class="notice_text">{{ t.protect.safetymanagement.Governance.Notice }}</p>
                                            </div>
                                        </figure>
                                    </section>

                                    <!-- 3. 안전보건 교육 및 관리 체계 -->
                                    <section class="protection_section mb120">
                                        <div class="section_title_area mb40">
                                            <h4 class="section_title_sub">{{ t.protect.safetymanagement.Safety.Title }}</h4>
                                            <p class="p_desc" v-html="t.protect.safetymanagement.Safety.Desc"></p>
                                        </div>
                                        <ul class="safety_system_grid">
                                            <li v-for="(item, idx) in t.protect.safetymanagement.Safety.Systems" :key="'system-'+idx" class="system_item">
                                                <div class="text_box">
                                                    <span class="num">{{ item.num }}</span>
                                                    <strong class="tit">{{ item.tit }}</strong>
                                                    <span v-if="item.sub" class="sub">{{ item.sub }}</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </section>

                                    <!-- 4. 안전·보건 의견 청취함 (문의 폼) -->
                                    <section class="listening_form_area">
                                        <div class="section_title_area mb40">
                                            <h4 class="section_title_sub">{{ t.protect.safetymanagement.listening.Title }}</h4>
                                            <p class="p_desc" v-html="t.protect.safetymanagement.listening.Desc"></p>
                                        </div>
                                        
                                        <!-- 개인정보 동의 영역 (반복) -->
                                        <div class="consent_container mb40">
                                            <article v-for="(consent, cIdx) in t.protect.safetymanagement.listening.Consents" :key="'consent-'+cIdx" class="consent_box">
                                                <strong class="consent_tit">{{ consent.title }}</strong>
                                                <ul class="consent_list">
                                                    <li v-for="(list, lIdx) in consent.items" :key="'list-'+lIdx">{{ list }}</li>
                                                </ul>
                                                <div class="consent_agree">
                                                    <p class="guide_text" v-html="consent.guide"></p>
                                                    <Inputs type="checkbox" text="동의합니다." />
                                                </div>
                                            </article>
                                        </div>

                                        <article class="noti_non_member">
                                            <span>{{ t.protect.safetymanagement.listening.Nonmember.title }}</span>
                                            <ul class="bullet_01">
                                                <li v-for="(list, lIdx) in t.protect.safetymanagement.listening.Nonmember.items" :key="'list-'+lIdx">{{ list }}</li>
                                            </ul>
                                        </article>

                                        <!-- 문의 폼 입력 영역 (필수 요소만 유지) -->
                                        <div class="form_container">
                                            <article class="listening_form_wrap">
                                                <div class="form_section">
                                                    <div class="form_header">
                                                        <h5 class="form_title">{{ lp.part1.title }}</h5>
                                                        <span class="required_guide">{{ lp.part1.requiredText }}</span>
                                                    </div>
                                                    <div class="form_body">
                                                        <div class="form_row">
                                                            <div class="label_item">
                                                                <span class="label_text">{{ lp.part1.nameLabel }}</span>
                                                                <span class="required_mark">*</span>
                                                            </div>
                                                            <div class="input_item">
                                                                <Inputs type="text" v-model="formData.name" :placeholder="lp.part1.namePlaceholder" />
                                                            </div>
                                                        </div>
                                                        <div class="form_row">
                                                            <div class="label_item">
                                                                <span class="label_text">{{ lp.part1.emailLabel }}</span>
                                                                <span class="required_mark">*</span>
                                                            </div>
                                                            <div class="input_group email">
                                                                <div class="group_wrap">
                                                                    <div class="input_flex_item"><Inputs type="text" v-model="formData.emailId" placeholder="이메일 아이디" /></div>
                                                                    <span class="unit">@</span>
                                                                    <div class="input_flex_item"><Inputs type="text" v-model="formData.emailDomain" placeholder="도메인 입력" /></div>
                                                                </div>
                                                                <SelectBox :options="lp.part1.emailOptions" v-model="formData.emailSelect" initMsg="직접입력" />
                                                            </div>
                                                        </div>
                                                        <div class="form_row">
                                                            <div class="label_item">
                                                                <span class="label_text">{{ lp.part1.telLabel }}</span>
                                                                <span class="required_mark">*</span>
                                                            </div>
                                                            <div class="input_group">
                                                                <div class="input_flex_item">
                                                                    <SelectBox :options="lp.part1.telOptions" v-model="formData.tel1" initMsg="선택" />
                                                                </div>
                                                                <span class="unit">-</span>
                                                                <div class="input_flex_item"><Inputs type="text" v-model="formData.tel2" /></div>
                                                                <span class="unit">-</span>
                                                                <div class="input_flex_item"><Inputs type="text" v-model="formData.tel3" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form_section">
                                                    <div class="form_header">
                                                        <h5 class="form_title">{{ lp.part2.title }}</h5>
                                                        <span class="required_guide">{{ lp.part1.requiredText }}</span>
                                                    </div>
                                                    <div class="form_body">
                                                        <div class="form_row">
                                                            <div class="label_item">
                                                                <span class="label_text">{{ lp.part2.categoryLabel }}</span>
                                                                <span class="required_mark">*</span>
                                                            </div>
                                                            <div class="input_item full">
                                                                <SelectBox :options="lp.part2.categoryOptions" v-model="formData.category" initMsg="사업장 선택" class="w428" />
                                                            </div>
                                                        </div>
                                                        <div class="form_row">
                                                            <div class="label_item">
                                                                <span class="label_text">{{ lp.part2.storeLabel }}</span>
                                                                <span class="required_mark">*</span>
                                                            </div>
                                                            <div class="input_complex">
                                                                <Inputs type="text" v-model="formData.storeName" placeholder="매장명을 입력해주세요" class="w428"/>
                                                                <p class="guide_msg">{{ lp.part2.storeGuide }}</p>
                                                            </div>
                                                        </div>
                                                        <div class="form_row">
                                                            <div class="label_item">
                                                                <span class="label_text">{{ lp.part2.subjectLabel }}</span>
                                                                <span class="required_mark">*</span>
                                                            </div>
                                                            <div class="input_item full">
                                                                <Inputs type="text" v-model="formData.subject" placeholder="제목을 입력해주세요" class="w428"/>
                                                            </div>
                                                        </div>
                                                        <div class="form_row">
                                                            <div class="label_item">
                                                                <span class="label_text">{{ lp.part2.contentLabel }}</span>
                                                                <span class="required_mark">*</span>
                                                            </div>
                                                            <div class="input_complex">
                                                                <Textarea
                                                                    v-model="formData.body"
                                                                    :placeholder="lp.part2.contentPlaceholder"
                                                                    :rows="6"
                                                                    :maxlength="500"
                                                                />
                                                                <p class="guide_msg_multi" v-html="lp.part2.noticeText"></p>
                                                            </div>
                                                        </div>
                                                        <div class="form_row">
                                                            <div class="label_item">
                                                                <span class="label_text">{{ lp.part2.fileLabel }}</span>
                                                            </div>
                                                            <div class="input_complex">
                                                                <Inputs type="file" class="btn_file">파일선택</Inputs>
                                                                <p class="guide_msg">{{ lp.part2.fileNotice }}</p>
                                                            </div>
                                                        </div>
                                                        <div class="form_row">
                                                            <div class="label_item">
                                                                <span class="label_text">{{ lp.part2.replyLabel }}</span>
                                                            </div>
                                                            <div class="input_item full">
                                                                <SelectBox :options="lp.part2.replyOptions" v-model="formData.replyType" initMsg="회신방법 선택" class="w428"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                            <div class="btn-wrap">
                                                <Buttons btn-class="btn_big primary">{{ lp.part2.btnSubmit }}</Buttons>
                                                <Buttons btn-class="btn_big gray">{{ lp.part2.btnCancel }}</Buttons>
                                            </div>
                                        </div>
                                        
                                    </section>
                                </div>
                            </section>

                            <!-- gsrsu030305 -->
                            <section v-if="SubTabIdx1 === 4 && t.protect.informationprotection" class="information_protection_management">
                                <div class="intro_summary">
                                    <h3 class="text_summary" v-html="t.protect.informationprotection.Summary"></h3>
                                </div>

                                <div class="contents">
                                    <section class="protection_section mb120">
                                        <div class="section_title_area mb40">
                                            <h4 class="section_title_sub">{{ t.protect.informationprotection.Governance.Title }}</h4>
                                            <p class="p_desc" v-html="t.protect.informationprotection.Governance.Desc"></p>
                                        </div>
                                        
                                        <figure class="diagram_box_wrap">
                                            <div class="visual_area">
                                                <img 
                                                    :src="isMobile ? t.protect.informationprotection.Governance.imgMo : t.protect.informationprotection.Governance.img" 
                                                    :alt="t.protect.informationprotection.Governance.Title"
                                                >
                                            </div>
                                        </figure>

                                        <div class="committee_detail_area mt80">
                                            <p class="p_desc mb40" v-html="t.protect.informationprotection.Committee.Desc"></p>
                                            <figure class="diagram_box_wrap scroll">
                                                <div class="visual_area scroll_wrap">
                                                    <img 
                                                        :src="isMobile ? t.protect.informationprotection.Committee.imgMo : t.protect.informationprotection.Committee.img" 
                                                        alt="정보보호위원회 구성도"
                                                    >
                                                </div>
                                                <div class="notice_wrap">
                                                    <p class="notice_text">{{ t.protect.informationprotection.Committee.Notice }}</p>
                                                </div>
                                            </figure>
                                        </div>
                                    </section>

                                    <section class="protection_section mb120">
                                        <div class="section_title_area mb40">
                                            <h4 class="section_title_sub">{{ t.protect.informationprotection.Policy.Title }}</h4>
                                            <p class="p_desc" v-html="t.protect.informationprotection.Policy.Desc"></p>
                                        </div>
                                        <figure class="diagram_box_wrap">
                                            <div class="visual_area">
                                                <img 
                                                    :src="isMobile ? t.protect.informationprotection.Policy.imgMo : t.protect.informationprotection.Policy.img" 
                                                    :alt="t.protect.informationprotection.Policy.Title"
                                                >

                                            </div>
                                        </figure>
                                    </section>

                                    <section class="protection_section mb120">
                                        <div class="section_title_area mb40">
                                            <h4 class="section_title_sub">{{ t.protect.informationprotection.Activities.Title }}</h4>
                                            <p class="p_desc">{{ t.protect.informationprotection.Activities.Desc }}</p>
                                        </div>
                                        
                                        <div class="policy_wrap">
                                            <table>
                                                <caption class="blind">정보보호 활동 상세 리스트</caption>
                                                <colgroup>
                                                    <col style="width: auto;">
                                                    <col style="width: auto;">
                                                </colgroup>
                                                <tbody>
                                                    <tr v-for="(item, idx) in t.protect.informationprotection.Activities.Table" :key="'activity-'+idx">
                                                        <th scope="row" class="ac"><strong>{{ item.tit }}</strong></th>
                                                        <td class="al" v-html="item.desc"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div class="btn-wrap ac mt40">
                                            <Buttons btn-class="btn_icon_arrow btn_xl border after">
                                                {{ t.protect.informationprotection.Activities.BtnText }}
                                            </Buttons>
                                        </div>
                                    </section>
                                    <section class="award_section">
                                        <div class="mark_item_group">
                                            <ul class="brand_grid mt60">
                                                <li>
                                                    <figure class="brand_img_box">
                                                        <!-- 각 마크의 이미지 바인딩 -->
                                                        <img :src="t.protect.informationprotection.Certification.Img" alt="ISMS-P 인증">
                                                    </figure>
                                                </li>
                                            </ul>
                                            <div class="info_box">
                                                <!-- 제목 및 날짜 바인딩 -->
                                                <strong class="tit">
                                                    <span v-html="t.protect.informationprotection.Certification.Title"></span>
                                                    (2025.06.18 ~ 2028.06.17)
                                                </strong>
                                                <em v-html="t.protect.informationprotection.Certification.Desc"></em>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </section>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <div id="gsrsu0301010401" class="modal_wrap">
            <div class="modal_container"></div>
        </div>

        <div id="gsrsu0301010501" class="modal_wrap">
            <div class="modal_container"></div>
        </div>

        <div id="gsrsu03030101" class="modal_wrap">
            <div class="modal_container"></div>
        </div>

        <div id="gsrsu03030301" class="modal_wrap">
            <div class="modal_container"></div>
        </div>

        <div id="gsrsu03030302" class="modal_wrap">
            <div class="modal_container"></div>
        </div>

        <div id="gsrsu03030303" class="modal_wrap">
            <div class="modal_container"></div>
        </div>

        <div id="gsrsu03030304" class="modal_wrap">
            <div class="modal_container"></div>
        </div>

        <div id="gsrsu03030401" class="modal_wrap">
            <div class="modal_container"></div>
        </div>

    </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import Buttons from "@/components/Buttons.vue";
import Pagination from "@/components/Pagination.vue";
import Inputs from "@/components/Inputs.vue";
import SelectBox from "@/components/SelectBox.vue"; 
import Textarea from "@/components/Textarea.vue";
import modal from "@/assets/js/modal";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
    name: "gsrsu03010101",
    components: { Tabs, Buttons, Pagination, Inputs, SelectBox, Textarea, Swiper, SwiperSlide },
    props: { lang: { type: String, default: "ko" } },
    data() {
        return {
            formData: {
                name: "",
                emailId: "",
                emailDomain: "",
                emailSelect: "",
                tel1: "",
                tel2: "",
                tel3: "",
                category: "",
                storeName: "",
                subject: "",
                body: "",
                replyType: ""
            },
            isMobile: false, // 모바일 여부 체크 변수
            page: 2,
            CTabIdx: 0,      // 1depth
            SubTabIdx1: 0,   // 2depth
            SubTabIdx2: 0,   // 3depth
            selected: "", //초기 선택값 지정할땐 vaule 값 입력
            langData: {
                ko: {
                    MainTitle: "사회적 책임",
                    MainsubTitle: "Social responsibility",
                    // 1depth
                    Tabs1: [
                        { item: "상생경영" }, 
                        { item: "나눔경영" }, 
                        { item: "권익보호" }
                    ],
                    
                    // 2depth (상생경영 하위)
                    Tabs2_1: [
                        { item: "개요" }, 
                        { item: "파트너사 지원제도" }, 
                        { item: "경영주 지원제도" }, 
                        { item: "지역사회 참여정책" },
                        { item: "공급망 지속가능성 관리정책" }
                    ],
                    // 3depth (파트너사 지원제도 하위)
                    Tabs3_1: [
                        { item: "금융지원" }, 
                        { item: "판로지원" }, 
                        { item: "경쟁력 강화 지원" }, 
                        { item: "복리후생 제도" }, 
                        { item: "방송 편성" }, 
                        { item: "소통제도" }
                    ],
                    // 3depth (경영주 지원제도 하위 - 신규 추가)
                    Tabs3_2: [
                        { item: "GS25 경영주 지원제도" }, 
                        { item: "GS THE FRESH 경영주 지원제도" }
                    ],

                    // 2depth (나눔경영 하위)
                    Tabs2_2: [
                        { item: "개요" }, 
                        { item: "아동/사회 취약계층지원" }, 
                        { item: "지역사회 지원" }, 
                        { item: "방송발전" }, 
                        { item: "숨은나눔천사" }
                    ],

                    // 2depth (권익보호 하위)
                    Tabs2_3: [
                        { item: "인권경영" }, 
                        { item: "인재경영" }, 
                        { item: "고객만족경영" }, 
                        { item: "안전경영" },
                        { item: "정보보호" }
                    ],
                    // 3depth (인재경영 하위)
                    Tabs3_3: [
                        { item: "인재상" }, 
                        { item: "인재육성체계" }, 
                        { item: "인재경영 지표" }, 
                        { item: "인재경영 실적자료" }
                    ],
                    WinWinIntro: {
                        Summary: "GS리테일의 동반성장 철학과 추진전략을 확인하실 수 있습니다.",
                        Philosophy: {
                            Title: "동반성장철학",
                            Btn: "동반성장 활동보기",
                            Items: [
                                { tit: "Win-Win", desc: "어느 일방의 희생이 아닌<br/>상생 협력체계 구축" },
                                { tit: "신뢰", desc: "끊임 없는 소통과 경청을<br/>통한 신뢰를 기반"},
                                { tit: "미래지향", desc: "일회성, 단기적 성과보다<br/>지속 가능한 성장 추구"}
                            ]
                        },
                        Strategy: {
                            Title: "추진전략",
                            Cards: [
                                { num: "01", tit: "공정한 거래문화 정착", list: ["공정거래 법규 준수", "불공정거래 사전예방 시스템", "공정한 거래기회 제공"] },
                                { num: "02", tit: "실질적 경영지원", list: ["금융지원 / 대금조기 지급", "업무역량 지원", "기타/복리후생 지원"] },
                                { num: "03", tit: "지속적 성장추구", list: ["공동상품개발 확대", "브랜드마케팅 지원", "성과공유제 도입/운용"] },
                                { num: "04", tit: "열린소통", list: ["정기적 간담회 운영", "문화교류 (Family-Day)", "파트너사 만족도 개선"] }
                            ],
                            img: require("@/assets/images/dummy/gsrsu03010101_1.png"),
                            imgMo: require("@/assets/images/dummy/gsrsu03010101_1_mo.png"),
                        },
                        Index: {
                            Title: "동반성장지수",
                            SubTitle: "동반성장부문 2023 최우수",
                            img: require("@/assets/images/dummy/gsrsu03010101_2.png"),
                            imgMo: require("@/assets/images/dummy/gsrsu03010101_2_mo.png"),
                        }
                    },
                    Partnersupport : {
                        Summary :"GS리테일은 상생경영을 통해 파트너사와 공동의 발전을 도모하고 있습니다. <br/> 이를 실현하기 위해 아래와 같은 제도를 운영하고 있습니다.",
                        FinanceSupport: {
                            Summary: "파트너사의 지속성장 기반 강화를 위한<br/> 다양한 자금 지원 프로그램을 운영하고 있습니다.",
                            Fund: {
                                Title: "상생펀드",
                                Desc: "파트너사가 경영/운영상의 긴급 자금이 필요할 때 상생펀드를 활용해 저리의 자금을 대출 받을 수 있는 제도입니다.",
                                ProcessTitle: "신청절차",
                                Steps: [
                                    { tit: "추천의뢰<br/>(파트너사→MD)" },
                                    { tit: "추천서 작성<br/>(MD)" },
                                    { tit: "지원신청<br/>(GS리테일→은행)" },
                                    { tit: "대출지원<br/>(은행심사 후 대출실행)"}
                                ]
                            },
                            SubFunds: [
                                { 
                                    tit: "상생파트너론", 
                                    img: require("@/assets/images/dummy/gsrsu0301010201_2.png"),
                                    desc: "파트너사에 상환청구권이 없는 외상매출채권 담보대출로 협력기업의 상환부담을 경감할 수 있는 제도 입니다.<br/>(GS리테일의 1,2,3차 협력기관 / 연 0.60%+가산금리)" 
                                },
                                { 
                                    tit: "친환경농수산펀드/ 농식품창업 아이디어 펀드", 
                                    img: require("@/assets/images/dummy/gsrsu0301010201_3.png"),
                                    desc: "전남창조경제혁신센터와 친환경 농수산 융자지원 업무협약을 체결 후, 전남소재 창업 및 중소기업에 대한 금융지원을 통해 농·수산 식품 산업을 육성하는 제도 입니다." 
                                }
                            ],
                            Cards: [
                                { tit: "네트워크론 / 패밀리론", desc: "기업은행과 협약을 맺고 파트너사와의 거래내역, 보증, 담보 등의 제공 또는 추천을 통해 저리 대출 제공" },
                                { tit: "선급금 지급", desc: "FF 생산공장의 재료 수급과 공급의 안정성 및 설비 관리를 위한 단기자금 조달 등 지원을 위해 파트너사에 선급금 지원" },
                                { tit: "명절 조기 지급 / 100% 현금결제", desc: "파트너사 및 경영주의 원활한 자금 유동성 확보를 위해 년 2회 명절에 물품대금 및 정산금을 조기지급" },
                                { tit: "수수료 환급제도", desc: "GS SHOP은 분기별 목표 대비 실적이 기준에 미치지 못한 협력사를 대상으로 수취 수수료의 일부를 환급하는 제도를 운영" }
                            ]
                        }
                    },
                    MarketSupport: {
                        Marketing: {
                            Summary: "파트너사의 지속성장 기반 강화를 위한<br/> 다양한 자금 지원 프로그램을 운영하고 있습니다.",
                            Title: "마케팅 지원",
                            Desc: "인기 맛집, TV프로그램, 유명연예인 등 고객들에게 소구력이 높은 브랜드를 GS리테일이 자체적으로 유치하고, 해당 브랜드를 파트너사가 공급하는 상품의 브랜드 경쟁력을 높일 수 있도록 무상 사용을 지원하는 제도입니다.",
                            Brands: [
                                { name: "김혜자 도시락", img: require("@/assets/images/dummy/gsrsu0301010202_1.png") },
                                { name: "오모리", img: require("@/assets/images/dummy/gsrsu0301010202_2.png") },
                                { name: "유어스", img: require("@/assets/images/dummy/gsrsu0301010202_3.png") },
                                { name: "리얼프라이스", img: require("@/assets/images/dummy/gsrsu0301010202_4.png") }
                            ]
                        },
                        Programs: [
                            { 
                                tit: "해외수출지원", 
                                img: require("@/assets/images/dummy/gsrsu0301010202_2_1.png"),
                                desc: "GS리테일의 글로벌 인프라와 노하우를 통해 파트너사의 해외 수출을 지원하고 있습니다. <br/>GS리테일의 PB 상품을 비롯하여 편의점 시설·집기류 까지 수출하여 2020년 무역의 날 ‘300만불 수출의 탑’을 수상하기도 했습니다." 
                            },
                            { 
                                tit: "지자체 MOU", 
                                img: require("@/assets/images/dummy/gsrsu0301010202_2_2.png"),
                                desc: "지역 농가 및 어민, 중소 파트너사와의 상생을 위해 충남, 전남(13개 시·군), 밀양시 등 다양한 지자체와 업무협약을 체결해 지역 농축수산물 구매 약정 및 판로를 제공 합니다." 
                            },
                            { 
                                tit: "지정농장/지역농산물 기획전", 
                                img: require("@/assets/images/dummy/gsrsu0301010202_2_3.png"),
                                desc: "지정농장 운영을 통해 농장은 유통망이 갖춰진 GS리테일이라는 안정적인 판로를 공급받고, 상품의 작목·사육 등에만 집중할 수 있으며 GS리테일은 보다 경쟁력 있는 상품을 고객에게 제공하게 됩니다.<br/><br/>지정농장의 투자비 부담 축소를 위한 상생대출 지원, 위생교육 등을 지원하며, 지역 농가 활성화를 위해 지역특산물 판매·기획전을 정기개최 합니다." 
                            },
                            { 
                                tit: "수수료 인하 방송<br/>(TV홈쇼핑 및 DATA홈쇼핑)", 
                                img: require("@/assets/images/dummy/gsrsu0301010202_2_4.png"),
                                desc: "GS SHOP은 신규 아이템 파일럿 테스트 및 기존 방송상품 재고 소진을 ‘I love 중소기업’ 프로그램을 통해 지원합니다. 또한, 모바일/인터넷 판매 협력사 등 신규 소상공인, 영세 기업의 홈쇼핑 시장 진입 기회를 ‘꿈꾸는 가게’ 프로그램을 통해 제공합니다." 
                            }
                        ]
                    },
                    CompetencySupport: {
                        Summary: "파트너사의 경쟁력 강화를 위한 <br/>전문 교육 및 정기세미나 등의 프로그램을 운영하고 있습니다.",
                        Education: {
                            Title: "교육지원",
                            Desc: "외부교육기관 및 GS리테일의 전문부서 등이 파트너사 임직원의 직무역량 향상을 위해 각종 교육 프로그램을 정기적으로 지원하는 제도입니다.",
                            Table: {
                                Thead: ["프로그램명", "시기", "주요내용"],
                                Tbody: [
                                    { name: "안전/위생 교육", period: "반기 1회", desc: "식품 협력사의 품질관리 능력 향상을 위해 식품위생법, 원산지 관리법 등의 교육을 지원합니다." },
                                    { name: "HACCP 아카데미", period: "년 1회", desc: "중소 PB파트너사 대상으로 HACCP 운영 역량 향상을 위해 관련 위생관리 및 법규 교육을 지원함으로써 상생과 안전한 상품 공급을 위한 지원 제도" },
                                    { name: "파트너사 품질/위생 점검", period: "년 1회", desc: "당사에 상품을 납품하는 파트너사 대상으로 사전 위생 심사를 통해 미흡사항에 대한 개선 및 코칭과 컨설팅을 진행합니다." },
                                    { name: "선도·위생관리 코칭 및 지원", period: "상시", desc: "-" }
                                ]
                            }
                        },
                        Program: {
                            Title: "품질, 생산성 등 경쟁력 강화 지원 프로그램",
                            Desc: "GS SHOP은 시험/분석비용 지원, 혁신파트너십 사업, 산업혁신 활동, CCM 인증 컨설팅 지원 등을 통해 중소 파트너사가 품질, 생산성 측면의 경쟁력을 강화할 수 있도록 지원하고 있습니다."
                        }
                    },
                    WelfareSupport: {
                        Summary: "파트너사를 위한 축구경기 관람 등 복리후생 제도를 지원하고 있습니다.",
                        Football: {
                            Title: "FC서울 축구경기 무료관람",
                            Desc: "파트너사 임직원들간의 단합대회 및 가족간의 나들이에 FC서울 홈경기(상암구장)를 무료로 관람할 수 있는 제도로, <br/>일반석 티켓으로 1인 4매 가능하며 매 경기당 선착순 20매 한도 내에서 이용하실 수 있습니다.<br/>경기시작 1주일 이전에 담당MD에게 신청 해주시면 됩니다."
                        }
                    },
                    BroadcastingSupport: {
                        Summary: "GS SHOP은 파트너사를 위한 <br/>방송편성 지원 제도를 운영하고 있습니다.",
                        PrepSupport: {
                            Title: "방송준비 지원",
                            Desc: "방송 경험이 없어 방송 준비를 외주에 맡기거나 매 방송 시마다 샘플준비, 디스플레이 등의 방송 준비를 해야 하는 협력사의 부담을 덜어드리기 위한 제도입니다. GS SHOP의 전문가들이 상품 스타일링부터 디스플레이, 판넬제작 등을 지원하여 방송 준비에 대한 부담을 해소하고 매출 확대에 기여하고자 합니다."
                        },
                        PrioritySupport: {
                            SubItems: [
                                {
                                    Title: "중소기업 편성우대",
                                    Desc: "GS SHOP은 중소기업이 안정적으로 성장할 수 있도록 상품 편성 전반에서 중소기업을 우대하고 있습니다.<br/> TV홈쇼핑과 데이터홈쇼핑 전반에 걸쳐 중소기업 상품의 편성 비중을 확대해, 지속적인 판로 확보와 매출 성장을 지원하고 있습니다.<br/> 또한 고객 유입이 높은 프라임 시간대에도 중소기업 상품을 우선적으로 편성하는 제도를 운영하여, 중소기업 상품이 보다 효과적으로 고객과 만날 수 있는 기회를 제공하고 있습니다. 이를 통해 중소기업의 시장 경쟁력 강화와 동반성장을 도모하고 있습니다."
                                },
                                {
                                    Title: "중소기업 무료판매방송",
                                    Desc: "GS SHOP은 중소기업의 원활한 시장 진입과 판로 확대를 지원하기 위해 무료판매방송을 운영하고 있습니다.<br/><br/>방송 제작 및 편성에 대한 부담을 완화하여, 중소기업 상품이 고객에게 소개될 수 있는 기회를 제공하고 있으며, 이를 통해 중소기업의 안정적인 성장 기반 마련을 지원하고 있습니다."
                                },
                                {
                                    Title: "인서트영상 제작비 지원",
                                    Desc: "GS SHOP은 중소기업의 홈쇼핑 진입 장벽 완화를 위해 신규 중소기업 협력사를 대상으로<br/>홈쇼핑 방송용 인서트영상 제작비를 지원합니다."
                                }
                            ]
                        }
                    },
                    CommunicationSupport: {
                        Summary: "GS리테일은 다양한 소통과 교류의 장을 마련하여 <br/>중소파트너사의 고충 및 건의사항을 수렴하고 적극 개선하고자 소통제도를 운영하고 있습니다.",
                        Title: "주요 프로그램",
                        Table: {
                            Thead: ["프로그램명", "시기", "주요내용"],
                            Tbody: [
                                { name: "파트너사 간담회", period: "분기 1회", desc: "MD팀장 주관하에 각 시기별, 업종별 이슈에 맞추어 상품정책 추진방향을 함께 고민하고 협의해 나가는 소통제도" },
                                { name: "유어스데이", period: "년 1회", desc: "GS리테일의 전체 MD와 파트너사의 임직원 모두가 야외 단체활동을 통해 화합 및 단합의 시간을 가질 수 있는 문화교류 제도" },
                                { name: "Best 파트너사 시상식", period: "년 1회", desc: "한 해 동안 GS리테일과 함께 협력하고 성장해 온 파트너사를 선정하여, 그 노고에 감사하고 축하하는 제도" }
                            ]
                        }
                    },
                    OwnerSupport: {
                        Summary: "GS25 경영주님의 원활한 점포 운영을 위한 <br/>지원 제도 입니다.",
                        // 모든 본문 콘텐츠를 part_1으로 통합
                        part_1: {
                            MainTitle: "GS25 경영주 지원제도",
                            // 인센티브 카드 데이터
                            Features: [
                                { num: "01", tit: "판매이익 인센티브 제도", desc: "Fresh Food / FF간편식 / 신선 / 치킨25" },
                                { num: "02", tit: "경쟁력 향상 인센티브 제도", desc: "구색 강화 인센티브, 수익 개선 인센티브, 서비스 향상 인센티브" },
                                { num: "03", tit: "경조사 지원 제도", desc: "경조금, 점포 운영 지원금, 장례용품, 출산용품, 경조사 자율휴무" },
                                { num: "04", tit: "상생지원 보험", desc: "안심상해, 횡령, 택배도난, 현금도난, 재산종합" },
                                { num: "05", tit: "장기운영 지원 혜택", desc: "10년차, 20년차, 30년차" },
                                { num: "06", tit: "우수점포 경영주 포상", desc: "우수점포 대상 혜택 지급" },
                                { num: "07", tit: "법률/노무 무료 상담", desc: "변호사 무료 법률 상담, 노무 상담 콜센터 운영" },
                                { num: "08", tit: "경영주 복지 / 제휴 혜택", desc: "상생대출, 경영주 복지몰, 종합건강검진 할인, 엔젤리조트, 엔젤 렌터카(장기/중고차)" }
                            ],
                            Notice: "※ 해당 혜택 및 제도는 상황에 따라 변경/폐지/추가 될 수 있습니다.",
                            
                            // 기타 상세 제도 데이터
                            OtherTitle: "기타 제도",
                            OtherItems: [
                                {
                                    tit: "경영주복지몰",
                                    desc: "경영주 복지몰은 GS25 경영주님들을 위한 생필품 복지 매장으로, 국내 5대 쇼핑몰 보다 더 저렴한 가격으로 이용이 가능합니다. 또한, 제휴사를 통해 생필품 외 여행/숙박 등 다양한 할인혜택을 제공해 드립니다.",
                                    img: require("@/assets/images/dummy/gsrsu03010103_1.png")
                                },
                                {
                                    tit: "복리후생",
                                    desc: "장례용품 지원 및 건강검진을 저렴한 가격에 이용하실 수 있도록 하는 지원제도를 비롯해, 경조사 지원 등을 통해 경영주님의 복리후생을 지원하고 있습니다.",
                                    img: require("@/assets/images/dummy/gsrsu03010103_2.png")
                                },
                                {
                                    tit: "경영주 열린제안",
                                    desc: "경영주님의 다양한 제안과 아이디어 접수를 통해 생생한 현장의 목소리를 청취하여 점포 운영 및 본부 정책에 개선 반영하고 있습니다.",
                                    img: require("@/assets/images/dummy/gsrsu03010103_3.png")
                                }
                            ]
                        },
                        // GS THE FRESH 데이터 (part_2로 신규 추가)
                        part_2: {
                            Summary: "GS THE FRESH 경영주님의 원활한 점포 운영을 위한 <br/>지원 제도 입니다.",
                            MainTitle: "GS THE FRESH 경영주 지원제도",
                            Items: [
                                {
                                    tit: "최소 운영 보조",
                                    desc: "계약당시 조건에 따라, 개점일로부터 정해진 기간에 한해 경영주 총수입을 기준으로 하여 일정 금액이 보장될 수 있도록 본부지원금을 통해 최소 운영 보조를 지원하고 있습니다.",
                                    img: require("@/assets/images/dummy/gsrsu03010103_1_1.png")
                                },
                                {
                                    tit: "기타 운영지원 제도",
                                    desc: "부진 점포에 한해, 본사 지원 활동으로 ‘부진점 케어활동’을 진행하며, 상권 특성 및 각종 이슈 사항으로 정착지원금이 필요한 경우 특정점에 한해 ‘신규점 조기 정착 지원금’을 운영합니다. 또한, 필요시 양수도점 매출 향상을 위한 지원금을 지급하고 매년 가맹지원제도를 수립 및 운영하고 있습니다.",
                                    img: require("@/assets/images/dummy/gsrsu03010103_1_2.png")
                                },
                                {
                                    tit: "복리후생",
                                    desc: "경조사 발생시(가맹점 실경영주 기준 결혼 또는 조위 ) 경조금 및 화환 등을 지급하고 있습니다.",
                                    img: require("@/assets/images/dummy/gsrsu03010103_1_3.png")
                                },
                                {
                                    tit: "스토어매니저(근무자) 구인인사이트 지원",
                                    desc: "GS THE FRESH 전용 배너 업체(알바천국) 운영",
                                    img: require("@/assets/images/dummy/gsrsu03010103_1_4.png")
                                }
                            ]
                        }
                    },
                    community: {
                        Summary: "GS리테일은 지역 경제 활성화 및 성장 기반 마련을 목적으로<br/>가이드라인을 구축하고 있습니다.",
                        Purpose: {
                            Title: "지역사회 참여 정책의 목적",
                            Items: [
                                { num: "01", desc: "지역사회와의 연계 활동을 통한 <br/>협력모델 구현" },
                                { num: "02", desc: "지역중소기업, 스타트업, 중소시장 등 <br/>다양한 이해관계자들과 관계 개선" },
                                { num: "03", desc: "지역사회의 중요 이슈를 <br/>해결 지원" }
                            ],
                            BtnText: "전문보기"
                        },
                        Goal: {
                            Title: "지역 사회 참여 정책의 목표",
                            DiagramImg: require("@/assets/images/dummy/gsrsu03010104_diagram.png"),
                            Items: [
                                { num: "01", desc: "고객의 동참을 이끌어내 선한 영향력을 확산한다." },
                                { num: "02", desc: "지역사회의 문제에 공감하고 해결을 지원하기 위해 노력한다." },
                                { num: "03", desc: "미래세대 투자를 고려한 프로그램을 개발한다." }
                            ]
                        }
                    },
                    supplychain: {
                        Summary: "GS리테일은 공급망의 ESG역량과 경쟁력 향상은 물론, 지속가능성과 관련된 리스크와 기회를<br/> 관리하기 위해 공급망 지속가능성 관리정책을 수립하고 실천하고 있습니다.",
                        // 공급망 지속가능성 관리 방침
                        Policy: {
                            Title: "공급망 지속가능성 관리 방침",
                            Items: [
                                { label: "첫째", desc: "공정거래를 준수하여 공정하고 투명한 거래를 하겠습니다." },
                                { label: "둘째", desc: "공급망의 지속가능성 향상을 위해 ESG 교육 및 컨설팅을 비롯한 동반성장 프로그램 지원을 통한 공급망 역량강화를 위해 노력하겠습니다." },
                                { label: "셋째", desc: "공급망 구매 경쟁력 강화를 위해 녹색구매정책에 기반한 녹색구매를 강화하고, 지속적으로 우수 공급사를 발굴하겠습니다." },
                                { label: "넷째", desc: "정기적으로 공급망에 대한 지속가능성을 평가하고, 가이드라인 제공을 통해 공급망을 지원 및 리스크를 관리하겠습니다." },
                                { label: "다섯째", desc: "공급망과의 원활한 소통을 위한 협력사간담회 및 익명제보채널 운영 등을 통해 소통을 강화하겠습니다." }
                            ],
                            BtnText: "전문보기"
                        },
                        // 공급망 지속가능성 관리 체계
                        System: {
                            Title: "공급망 지속가능성 관리 체계",
                            DiagramImg: require("@/assets/images/dummy/gsrsu03010105.png") // 요청하신 파일명 적용
                        }
                    },
                    CSR: {
                        outline: {
                            Summary: "GS리테일은 사회적 책임을 다하고 지역사회와 환경에 기여할 수 있는<br/> 지속적인 목표를 통해 일상에서 함께하는 나눔을 실천합니다.",
                            Strategy: {
                                Title: "사회공헌 전략",
                                Vision: "일상에서 함께하는 나눔 플랫폼, Give & Share",
                                Mission: "유통 플랫폼을 통한 지속 가능한 사회적 가치창출",
                                DiagramImg: require("@/assets/images/dummy/gsrsu030201.png")
                            },
                            History: [
                                {
                                    year: "2025",
                                    items: [
                                        "백혈병소아암환아 치료비 등 지원사업 (2025~)",
                                        "식품 사막화 지역 물품지원 (2024~)",
                                        "이주배경 아동 지원사업 (2024~)",
                                        "저소득학대아동 가족심리 지원사업 (2022~2024)",
                                        "해피스타트 자립준비청년 지원사업 (2022~2024)",
                                        "GS25심장제세동기 설치 (2022)",
                                        "나눔키트 지원 (2020~)",
                                        "수출업사이클링 친구캠페인 (2021~)",
                                        "사랑의 이불 기부 (2022)",
                                        "사랑의 마스크 기부 (2022)"
                                    ]
                                },
                                {
                                    year: "2019",
                                    items: [
                                        "에코크리에이터(2019~)",
                                        "사랑의 떡국 기부(2019)",
                                        "GS25 늘봄스토어 오픈 (장애인훈련형 점포, 2017~ )",
                                        "GS25 내일스토어 오픈 (사회공헌형 편의점, 2017~)",
                                        "독립군 알리기 도시락 (2017~)",
                                        "GS아동안전지킴이 / GS안전지킴이 심폐소생술교육(2017~)",
                                        "러브러브펀드 지역아동센터 식사지원(2016~)",
                                        "해외봉사(2016~2017)",
                                        "사랑의 연탄 기부(2016~2024)",
                                        "저소득 화상환자 지원(2015~)",
                                        "나눔매장 물품 지원(2013~)",
                                        "사랑의 김장기부(2013~)",
                                        "사회적기업 판로지원 사업(2013~2023)",
                                        "FC서울 다문화가정 아동 축구교실 지원(2013~)",
                                        "북드림 도서기부캠페인(2012~2024)"
                                    ]
                                },
                                {
                                    year: "2011",
                                    items: [
                                        "헌혈증 백혈병소아암환아 지원(2010~)",
                                        "푸드뱅크 기부(2011~)",
                                        "태안 기름유출 사고 지원(2008)",
                                        "장학금, 키트 지원(2007~)"
                                    ]
                                },
                                {
                                    year: "2006",
                                    items: [
                                        "GS나누미 봉사단 설립(2006~)",
                                        "무지개상자 아동음악교육 사업(2006~)",
                                        "재해재난 지원 프로세스 구축",
                                        "대한적십자사 헌혈약정식 체결"
                                    ]
                                }
                            ]
                        },
                        vulnerable: {
                            Summary: "아동/청년 및 장애인, 독거 어르신 등의 자립 지원을 위한<br/>사업과 안전 플랫폼의 역할을 실천합니다.",
                            // 주요 사업 리스트 (2열 그리드 활용)
                            Projects: [
                                { 
                                    tit: "저소득/학대 아동 및 가족 심리 지원", 
                                    desc: "저소득, 학대 아동 및 가족을 위한 심리 치료와 전문가 교육으로 아동이 건강하게 자랄 수 있도록 노력합니다.",
                                    img: require("@/assets/images/dummy/gsrsu030202_1.png")
                                },
                                { 
                                    tit: "무지개 상자 오케스트라", 
                                    desc: "악기와 음악 교육으로 정서 함양을 지원하고 있습니다.",
                                    img: require("@/assets/images/dummy/gsrsu030202_2.png")
                                },
                                { 
                                    tit: "몸짱 소방관 달력", 
                                    desc: "몸짱 소방관들의 모습을 담은 달력판매 수익으로 화상 환자를 위한 치료비를 지원합니다.",
                                    img: require("@/assets/images/dummy/gsrsu030202_3.png")
                                },
                                { 
                                    tit: "FC서울 다문화 가정 아동 축구교실", 
                                    desc: "우리 사회 다문화 가정 아동이 건강하게 자랄 수 있도록 축구교실 및 식사 지원 등 다양한 지원활동이 이루어지고 있습니다.",
                                    img: require("@/assets/images/dummy/gsrsu030202_4.png")
                                }
                            ],
                            // 주요 협력기관 (3열 그리드 활용)
                            Partners: {
                                Title: "주요 협력기관",
                                Items: [
                                    { name: "기아대책", img: require("@/assets/images/dummy/gsrsu030202_logo_1.png") },
                                    { name: "서울특별시 소방재난본부", img: require("@/assets/images/dummy/gsrsu030202_logo_2.png") },
                                    { name: "사회복지법인 한림화상재단", img: require("@/assets/images/dummy/gsrsu030202_logo_3.png") }
                                ]
                            }
                        },
                        communitysupport: {
                            Summary: "지역사회봉사, 기부 및 사회적 기업 지원을 통해 <br/>함께하는 나눔을 실천합니다.",
                            // 2열 그리드 활용 (기존 program_grid 스타일 재활용)
                            Projects: [
                                { 
                                    tit: "GS나누미 봉사", 
                                    desc: "2006년부터 전국 70여 개의 봉사처에서 임직원, 경영주, 고객이 함께 나눔을 실천하고 있습니다.",
                                    img: require("@/assets/images/dummy/gsrsu030203_1.png") 
                                },
                                { 
                                    tit: "임원 현충원 봉사", 
                                    desc: "호국보훈의 달엔 임원의 현충원 환경정화 봉사활동과 함께 순국선열의 숭고함을 기립니다.",
                                    img: require("@/assets/images/dummy/gsrsu030203_2.png") 
                                },
                                { 
                                    tit: "연말 테마봉사", 
                                    desc: "매년 연말, 전국 봉사단의 릴레이 봉사로 따뜻한 겨울나기를 위한 하나 된 마음을 전합니다.",
                                    img: require("@/assets/images/dummy/gsrsu030203_3.png") 
                                },
                                { 
                                    tit: "푸드뱅크 기부", 
                                    desc: "GS THE FRESH 식품 기부는 푸드뱅크를 통해 어려운 이웃의 따뜻한 식사로 지원됩니다.",
                                    img: require("@/assets/images/dummy/gsrsu030203_4.png") 
                                },
                                { 
                                    tit: "심폐소생술 교육 / 심장제세동기 지원", 
                                    desc: "위급 상황 발생 시 소중한 생명을 지킬 수 있도록 임직원 심폐소생술 교육 참여 및 대한적십자사와 협업하여 심장제세동기 등을 지원합니다.",
                                    img: require("@/assets/images/dummy/gsrsu030203_5.png") 
                                },
                                { 
                                    tit: "러브러브 펀드", 
                                    desc: "임직원 기금과 회사의 매칭그랜트로 지역아동센터 어린이 식재료와 요기요 상품권 등을 지원합니다.",
                                    img: require("@/assets/images/dummy/gsrsu030203_6.png") 
                                },
                                { 
                                    tit: "북드림캠페인 / 헌혈캠페인", 
                                    desc: "기부받은 도서는 지역아동센터에 전달하고, 헌혈캠페인으로 백혈병 소아암 환아를 지원합니다.",
                                    img: require("@/assets/images/dummy/gsrsu030203_7.png") 
                                },
                                { 
                                    tit: "재해재난 지원", 
                                    desc: "재해재난 발생 시 이재민에게 긴급구호물품이 신속하게 전달될 수 있도록 물류 인프라를 지원합니다.",
                                    img: require("@/assets/images/dummy/gsrsu030203_8.png") 
                                }
                            ],
                            // 주요 협력기관 (brand_grid 스타일 재활용)
                            Partners: {
                                Title: "주요 협력기관",
                                Items: [
                                    { name: "등촌9종합사회복지관", img: require("@/assets/images/dummy/gsrsu030203_logo_1.png") },
                                    { name: "까리따스방배종합사회복지관", img: require("@/assets/images/dummy/gsrsu030203_logo_2.png") },
                                    { name: "홀트일산복지타운/요양원", img: require("@/assets/images/dummy/gsrsu030203_logo_3.png") },
                                    { name: "외 26개 복지관 등등", img: require("@/assets/images/dummy/gsrsu030203_logo_4.png") },
                                    { name: "푸등뱅크", img: require("@/assets/images/dummy/gsrsu030203_logo_5.png") },
                                    { name: "대한적집자사", img: require("@/assets/images/dummy/gsrsu030203_logo_6.png") },
                                    { name: "thankgive", img: require("@/assets/images/dummy/gsrsu030203_logo_7.png") },
                                    { name: "아름다운가게", img: require("@/assets/images/dummy/gsrsu030203_logo_8.png") },
                                    { name: "한국백혈병소아암협회", img: require("@/assets/images/dummy/gsrsu030203_logo_9.png") }
                                ]
                            }
                        },
                        broadcasting: {
                            Summary: "방송 제작 인프라를 활용하여 미디어 소외 계층을 지원하고 <br/>관련 분야의 미래 인재를 육성합니다.",
                            Projects: [
                                { 
                                    tit: "미디어나눔버스 지원", 
                                    desc: "도서·산간 지역민과 노인·장애인 등 취약계층 미디어교육을 지원하기 위해 방송제작 시설과 장비를 탑재한 이동형 스튜디오 차량인 ‘찾아가는 미디어나눔버스’ 운영을 지원하고 있습니다.",
                                    img: require("@/assets/images/dummy/gsrsu030204_1.png")
                                },
                                { 
                                    tit: "콘텐츠리더장학금/소비자리더장학금 지원", 
                                    desc: "GS SHOP 콘텐츠리더장학금과 소비자리더장학금을 지원하여 방송분야와 소비자권익보호를 위한 분야에서 활동할 미래 인재육성을 지원하고 있습니다.",
                                    img: require("@/assets/images/dummy/gsrsu030204_2.png")
                                }
                            ],
                            Partners: {
                                Title: "주요 협력기관",
                                Items: [
                                    { name: "시청자미디어재단", img: require("@/assets/images/dummy/gsrsu030204_logo_1.png") },
                                    { name: "KCOP", img: require("@/assets/images/dummy/gsrsu030204_logo_2.png") }
                                ]
                            }
                        },
                        sharing: {
                            Summary: "GS리테일 숨은 나눔천사의 따뜻한 이야기를 전해드립니다.",
                            List: [
                                {
                                    tit: "GS25 명륜아남점 박우정 스토어매니저",
                                    desc: "신속한 판단과 실행으로 인명을 구한 GS25 명륜아남점 박우정 스토어매니저를 소개합니다.",
                                    date: "2026.02.22",
                                    badge: "GS25",
                                    img: require("@/assets/images/dummy/gsrsu030205_1.png")
                                },
                                {
                                    tit: "GS THE FRESH 상계점 김준영 매니저",
                                    desc: "신속한 판단과 실행으로 인명을 구한 GS THE FRESH 상계점 김준영 매니저를 소개합니다.",
                                    date: "2026.02.22",
                                    badge: "GS THE FRESH",
                                    img: require("@/assets/images/dummy/gsrsu030205_2.png")
                                },
                                {
                                    tit: "편의점 1부문4지역)개발2팀 우찬용 팀장",
                                    desc: "용기있는 행동으로 2번의 선행을 실천한 편의점 1부문4지역)개발2팀 우찬용 팀장을 소개합니다.",
                                    date: "2026.02.22",
                                    badge: "GS25",
                                    img: require("@/assets/images/dummy/gsrsu030205_3.png")
                                },
                                {
                                    tit: "수퍼사업부 가맹4팀 오동흠팀장",
                                    desc: "무더운 날씨에 집에 오랜 시간 갇힌 어르신을 구조한 수퍼사업부 가맹4팀 오동흠 팀장을 소개합니다.",
                                    date: "2026.02.22",
                                    badge: "GS THE FRESH",
                                    img: require("@/assets/images/dummy/gsrsu030205_4.png")
                                },
                                {
                                    tit: "GS THE FRESH 안양메가트리아점 양승용부점장",
                                    desc: "신속한 판단과 실행으로 인명을 구한 수퍼사업부 직영3팀 안양메가트리아점 양승용 부점장을 소개합니다.",
                                    date: "2026.02.22",
                                    badge: "GS THE FRESH",
                                    img: require("@/assets/images/dummy/gsrsu030205_5.png")
                                },
                                {
                                    tit: "GS THE FRESH 안양메가트리아점 양승용부점장",
                                    desc: "신속한 판단과 실행으로 인명을 구한 수퍼사업부 직영3팀 안양메가트리아점 양승용 부점장을 소개합니다.",
                                    date: "2026.02.22",
                                    badge: "GS THE FRESH",
                                    img: require("@/assets/images/dummy/gsrsu030205_6.png")
                                }
                            ]
                        }
                    },
                    protect: {
                        humanrights: {
                            Summary: "GS리테일은 임직원뿐만 아니라, 모든 이해관계자들의 인권을 존중하며 <br/>인간으로서의 가치와 존엄성을 보장하겠습니다.",
                            Policy: {
                                Title: "GS리테일 인권경영정책",
                                Desc: "GS리테일은 세계인권선언(Universal Declaration of Human Rights)과 UNGC 10대 원칙(UN Global Compact), 그리고 국내외 노동 및 인권 관련 표준과 가이드라인을 지지하고 준수하여 회사의 경영활동에서 발생할 수 있는 모든 인권 관련 문제에 대한 방지와 해결을 위해 최선의 노력을 다하겠습니다.<br/><br/>이를 위해, GS리테일 인권경영정책을 수립해 임직원 외 협력사를 포함한 모든 이해관계자의 인권 존중을 실천하고자 합니다.<br/>또한, 협력사의 경우 '협력사 행동강령'에 인권관련 사항 역시 포함하여 인권경영을 실천할 수 있도록 하고 있습니다.",
                                BtnText: "전문보기"
                            },
                            Goals: {
                                Title: "일하기 좋은 직장만들기, 임직원 인권 목표",
                                Items: [
                                    { num: "01", desc: "즐겁고 보람된 일터를 만들어 갑니다." },
                                    { num: "02", desc: "누구나 차별없이 존중받는 근무 환경을 만들어 갑니다." },
                                    { num: "03", desc: "장애인, 취약근로자, 여성 및 임산부 근로자들의 행복하고, 일할 수 있는 근로환경을 제공합니다." },
                                    { num: "04", desc: "GS리테일은 수평적 조직 문화를 통해 누구나 소신있는 발언과 의견을 존중합니다." }
                                ]
                            },
                            Programs: {
                                Title: "인권침해 방지 프로그램 운영",
                                Items: [
                                    { tit: "내부 신고제도 운영 (익명제보)", img: require("@/assets/images/dummy/gsrsu030301_1.png") },
                                    { tit: "고충 상담실 운영", img: require("@/assets/images/dummy/gsrsu030301_2.png") },
                                    { tit: "장애인 직업 훈련형 매장 운영", img: require("@/assets/images/dummy/gsrsu030301_3.png") },
                                    { tit: "조직역량 서베이 운영", img: require("@/assets/images/dummy/gsrsu030301_4.png") },
                                    { tit: "블라인드 채용 운영", img: require("@/assets/images/dummy/gsrsu030301_5.png") },
                                    { tit: "아동 고용(노동) 금지", img: require("@/assets/images/dummy/gsrsu030301_6.png") },
                                    { tit: "작은사랑 나눔회 운영", img: require("@/assets/images/dummy/gsrsu030301_7.png") },
                                    { tit: "심리상담 (EAP)", img: require("@/assets/images/dummy/gsrsu030301_8.png") }
                                ]
                            },
                            Assessment: {
                                Title: "인권영향평가",
                                Desc: "GS리테일은 2021년부터 임직원 대상 인권영향평가를 실시해, 현황 및 개선점을 도출하고 즉시 개선하고자 노력하고 있습니다.<br/><br/> 이외에도 인권 관련 임직원 교육을 실시하고, 인권영향평가 등이 이해관계자를 대상으로 확대될 수 있도록 협업을 계속해 나가겠습니다.",
                                img: require("@/assets/images/dummy/gsrsu030301_2_1.png")
                            }
                        },
                        talentmanagement: {
                            part_1:{
                                Summary: "Value No.1 GS리테일이 함께하고자 하는 인재의 모습입니다.",
                                MainTitle:`“GS Value와 Way를<br/> 잘 실천하는 인재”`,
                                Description: "GS리테일과 함께 할 인재의 모습과<br/> 직원들의 꿈을 실현시키기 위해 인재경영을 실현해 나아가고 있습니다.",
                                Philosophy: {
                                    Items: [
                                        { tit: "GS Value", sub: "우리의 가치관", desc: "Fair, Friendly, Fresh, Fun" },
                                        { tit: "GS Way", sub: "우리의 일하는 방식", desc: "고객 최우선, 성장 마인드, 열린 소통, AX 실행력" }
                                    ]
                                },
                                Details: {
                                    Value: [
                                        { tit: "Fair", desc: "공정함을 지키고 사회와 환경에 기여합니다." },
                                        { tit: "Friendly", desc: "다양성을 인정하고 서로를 존중합니다." },
                                        { tit: "Fresh", desc: "창의와 도전을 장려하여 회사와 개인이 함께 성장합니다." },
                                        { tit: "Fun", desc: "유연하고 자율적인 환경에서 즐겁게 일합니다." }
                                    ],
                                    Way: [
                                        { tit: "고객 최우선", list: ["# 업무의 시작과 끝을 고객으로 연결합니다.", "# 고객을 위해 '되는 방법'을 먼저 찾습니다."] },
                                        { tit: "성장 마인드", list: ["# 작고 빠르게 시도하며 성공 경험을 만듭니다.", "# 매일의 성장과 변화를 추구합니다."] },
                                        { tit: "열린 소통", list: ["# 명확한 목표와 과정 공유로 눈높이를 맞춥니다.", "# 치열하게 논의하고, One Team으로 해냅니다."] },
                                        { tit: "AX 실행력", list: ["# 설득과 결정 모두 데이터가 기준입니다.", "# 디지털/AI툴로 업무 방식을 개선합니다."] }
                                    ]
                                },
                                Efforts: [
                                    "직원들의 안전/보건을 최우선으로 하고,",
                                    "교육훈련프로그램을 통한 인재육성,",
                                    "인권 존중을 통한 배려와 선의의 경쟁,",
                                    "최고의 처우수준과 다양한 복리후생 지원을 통한 자긍심 함양 등<br/> 인재경영을 실현해 나아가고 있습니다."
                                ]
                                
                            
                            },
                            part_2:{
                                Summary: "진심 어린 서비스와 창의적 사고로 고객에게 사랑받는 최고의 전문가 육성을 위하여<br/>핵심가치, 직무역량, 리더십 역량, 자기주도학습 프로그램을 운영하고 있습니다.",
                                MainTitle: "GS 인재육성 체계",
                                DiagramImg: require("@/assets/images/dummy/gsrsu03030202.png"),
                                Cards: [
                                    {
                                        num: "01",
                                        tit: "제도직무 역량",
                                        desc: "직무 수행에 필요한 전문 지식과 실무 역량을 확장하여, <br/>개인의 직무 성장을 체계적으로 이루도록 돕습니다.",
                                        list: ["직무 Academy / GenAI Academy", "직무성장플랜(나의 성장계획 작성)"]
                                    },
                                    {
                                        num: "02",
                                        tit: "리더십 역량",
                                        desc: "리더로서 구성원의 잠재력을 이해하고, 신뢰와 협력을 기반으로 함께 성장하는 리더십을 개발할 수 있도록 지원합니다.",
                                        list: [
                                            "임원 교육, 신임부문장 온보딩 과정 / 팀장 리더십 스쿨 / 신임 팀장 온보딩과정 / BOLD Leader 과정 / BOLD Manager 과정 등",
                                            "조직책임자 리더십 워크숍, 임원/팀장 리더십 진단 및 피드백"
                                        ]
                                    },
                                    {
                                        num: "03",
                                        tit: "GS Way 내재화",
                                        desc: "직무 수행에 필요한 전문 지식과 실무 역량을 확장하여, <br/>개인의 직무 성장을 체계적으로 이루도록 돕습니다.",
                                        list: ["GS Way 내재화 교육 프로그램(리더·구성원)", "GS Way 현업 적용 학습(Post Learning) 및 업무 적용 워크숍"]
                                    },
                                    {
                                        num: "04",
                                        tit: "온보딩",
                                        desc: "각 직책 · 경력 단계별 구성원이 조직과 역할을 이해하고, 성장의 출발점을 형성할 수 있도록 지원합니다.",
                                        list: [
                                            "신임임원/신임팀장/신입사원/경력사원 온보딩 프로그램",
                                            "신입사원/경력사원 리텐션 프로그램",
                                            "GS그룹 신입사원 프로그램"
                                        ]
                                    },
                                    {
                                        num: "05",
                                        tit: "자기주도 학습",
                                        desc: "구성원이 스스로 학습하고 지속적으로 성장할 수 있도록, 학습 인프라와 제도적 지원을 제공합니다.",
                                        list: ["내일On (온라인 연수원) / 전사 인사이트 특강", "자기주도학습 / 어학 / 자격증 / 사외과정 지원제도"]
                                    }
                                ]
                            },
                            part_3: {
                                Summary: "GS리테일은 인재의 가치를 소중히 여기고 있으며, 인재를 위한 다양한 제도를 운영하고 있습니다.",
                                Sections: [
                                    {
                                        title: "Work",
                                        desc: "모든 구성원이 일과 성장에 온전히 집중할 수 있도록 최상의 환경과 자원을 제공합니다.",
                                        items: [
                                            { num: "01", tit: "어학 지원", desc: "구성원의 자기개발을 위한 어학 학습 비용을 지원합니다." },
                                            { num: "02", tit: "자격증 지원", desc: "직무 전문가를 육성하기 위해 자격증학습에 소요되는 비용을 지원합니다." },
                                            { num: "03", tit: "셔틀/통근버스 운영", desc: "구성원의 안전하고 편리한 출근길을 지원합니다." },
                                            { num: "04", tit: "원거리 지원금", desc: "실제 근무 지역과 연고지가 일정 거리 이상일 경우, 주거비 일부를 지원합니다." },
                                            { num: "05", tit: "이동통신비 지원", desc: "업무상 통화할 일이 잦은 구성원을 위해 이동통신비를 지원합니다." },
                                            { num: "06", tit: "시차근무제", desc: "일의 몰입도와 삶의 균형을 위해, 출퇴근 시간을 유연하게 조율합니다." }
                                        ]
                                    },
                                    {
                                        title: "Engagement",
                                        desc: "모든 구성원이 자부심을 가지고 일하며 자신의 역량을 발휘할 수 있도록 아낌없는 지원을 제공합니다.",
                                        items: [
                                            { num: "01", tit: "임직원 할인 제공", desc: "구성원을 위해 GS홈쇼핑 & GS THE FRESH에서 임직원 한정 할인을 제공합니다." },
                                            { num: "02", tit: "축하 선물 지급", desc: "출산 축하 선물 및 다자녀 출산 경조금을 제공합니다." },
                                            { num: "03", tit: "명절 선물 지급", desc: "풍성하고 행복한 명절을 보낼 수 있도록 적극 지원합니다." },
                                            { num: "04", tit: "심리상담 지원", desc: "구성원의 마음이 건강할 수 있도록 근로자 심리 상담을 제공합니다." },
                                            { num: "05", tit: "장기 근속 포상", desc: "장기 근속 구성원에게 감사의 마음을 담아 포상 및 휴가를 제공합니다." }
                                        ]
                                    },
                                    {
                                        title: "Life",
                                        desc: "일과 삶의 조화를 이루며 행복한 삶을 누릴 수 있도록 구성원들의 더 나은 내일을 지원합니다.",
                                        items: [
                                            { num: "01", tit: "보육비 / 유치원 보조비, 자녀 학자금 지원", desc: "구성원 자녀분들은 우리의 미래입니다. GS리테일이 함께 돌보고 지원합니다." },
                                            { num: "02", tit: "사내 어린이집 운영", desc: "GS강서타워 / GS강남타워 사내 어린이집을 운영합니다." },
                                            { num: "03", tit: "재해 지원", desc: "예상치 못한 재해도 GS리테일이 든든히 함께합니다." },
                                            { num: "04", tit: "의료비/건강검진 지원", desc: "구성원의 건강을 위해 예방부터 치료까지 세심하게 케어합니다." },
                                            { num: "05", tit: "아이사랑 휴직", desc: "아이와 함께하는 소중한 시간을 존중합니다." },
                                            { num: "06", tit: "임직원 자녀 입학선물", desc: "임직원 자녀의 새 출발을 축하하며 입학 선물을 전달합니다." },
                                            { num: "07", tit: "경조금 지원", desc: "구성원 경조사 발생 시, GS리테일이 기쁨과 슬픔을 함께 하고자 휴가 및 지원금을 지원합니다." },
                                            { num: "08", tit: "작은사랑나눔회", desc: "구성원의 갑작스러운 어려움에 함께 힘을 보태는 상생 지원 제도입니다." },
                                        ]
                                    },
                                    {
                                        title: "Leisure",
                                        desc: "즐거운 여가 생활이 최고의 성과를 만든다는 믿음으로, 리프레시를 위한 충전의 기회도 마련합니다.",
                                        items: [
                                            { num: "01", tit: "휴양시설 지원", desc: "구성원의 행복한 여행을 위해 휴양시설 할인혜택을 지원합니다." },
                                            { num: "02", tit: "하계휴가 추가 지원", desc: "법정 연차 외에 별도로 부여되는 여름휴가! 일상의 행복을 GS리테일이 응원합니다." },
                                            { num: "03", tit: "휴가(연차) 보상", desc: "잔여 연차 미사용 분에 대해 일부 1.5배 보상을 지원합니다." },
                                            { num: "04", tit: "스포츠티켓 지원", desc: "축구, 야구, 배구 원하는 스포츠를 즐길 수 있도록 아낌없이 지원합니다." },
                                            { num: "05", tit: "인포멀(사내동호회)", desc: "구성원의 상호 이해와 친목도모를 지원합니다." }
                                        ]
                                    }
                                ],
                                Awards: {
                                    Title: "인재경영 관련 인증 및 대외 수상 이력",
                                    List: [
                                        { year: "2025", month: "4월", desc: "장애인 고용 우수기업 선정(강남구청)" },
                                        { year: "2024", month: "11월", desc: "공정채용 우수기업 장관상 수상(고용노동부)" },
                                        { year: "2023", month: "2월", desc: "대한민국 일하기 좋은 기업 인증 획득 (GPTW코리아)" }
                                    ],
                                    Highlight: {
                                        Img: require("@/assets/images/dummy/gsrsu03030203.png"), // GPTW 로고 이미지
                                        Tit: "대한민국 일하기 좋은 기업 인증 획득<br/> (GPTW코리아)",
                                        Date: "2023.02"
                                    }
                                }
                            },
                            part_4: {
                                Summary: "GS리테일의 인재 경영과 관련된 실적 자료들을 열람하실 수 있습니다.",
                                Desc: "본 자료는 이해 관계자 및 기관, 주주들을 위해 공개된 GS리테일의 정보자산, 구성원들의 정보가 포함되어 있으므로<br/>용도 외 활용, 불법 유출 시에는 법에 의해 처벌을 받으실 수 있습니다.",
                                Table: {
                                    Tbody: [
                                        {num: 4, tit: "인권 교육 실적 자료", date: "2021.06.21", url: "/files/human_rights_edu_2021.pdf" },
                                        {num: 3, tit: "퇴직자 지원(창업·재고용) 제도", date: "2021.02.19", url: "/files/retirement_support.pdf" },
                                        {num: 2, tit: "인원, 임금, 교육훈련비 현황", date: "2021.02.19", url: "/files/salary_status.pdf" },
                                        {num: 1, tit: "산업안전보건 교육 자료", date: "2021.02.19", url: "/files/safety_edu.pdf" }
                                    ]
                                },
                                txt:'다운로드'
                            },
                        },
                        customer: {
                            Summary: "고객 한 분 한 분의 만족이 GS리테일의 사명이자 존재 이유입니다.<br/>GS리테일의 고객만족경영은 생활과 문화입니다.",
                            Policy: {
                                Title: "소비자 권익보호 정책",
                                Desc: "GS리테일의 모든 임직원은 소비자의 권익 보호를 위해<br/>이로운 상품과 서비스를 제공하여 신뢰받는 GS리테일이 되고자 다음의 정책을 실천하고 있습니다.",
                                BtnText: "전문보기",
                                Items: [
                                    { label: "첫째", text: "소비자의 합리적인 소비를 위해 충분하고 정확한 정보를 제공하겠습니다." },
                                    { label: "둘째", text: "소비자에게 적합한 상품과 최상의 서비스를 제공하여 고객의 편익을 증진을 위해 노력하겠습니다." },
                                    { label: "셋째", text: "소비자의 권익을 침해하는 불공정 거래행위를 근절하겠습니다." },
                                    { label: "넷째", text: "소비자의 개인정보는 동의절차를 거치며 그 목적에 부합하는 최소한의 정보만 수집하겠습니다." },
                                    { label: "다섯째", text: "소비자의 소리에 귀 기울이고 불편사항은 즉시 시정하여 최상의 상품을 제공하기 위해 노력하겠습니다." }
                                ]
                            },
                            Activities: {
                                Title: "고객만족경영 주요 활동",
                                Items: [
                                    { img: require("@/assets/images/dummy/gsrsu030303_1.png"), tit: "TOTAL 서비스", subTit: "고객관계관리를 통한 근본적 문제 해결", desc: "고객이 입점에서 퇴점까지 각 Value-Chain의 고객기대가치 만족을 위한 활동 및 고객의 소리를 지속 개선합니다." },
                                    { img: require("@/assets/images/dummy/gsrsu030303_2.png"), tit: "가치공유 및 소통", subTit: "가치공유 및 열린 소통 문화 정착", desc: "GS리테일의 모든 리더는 구성원과 매주 모닝톡, 매월 커넥팅데이를 진행합니다." },
                                    { img: require("@/assets/images/dummy/gsrsu030303_3.png"), tit: "서비스 붐업활동", subTit: "고객, 임직원 참여하는 다양한 서비스 프로그램 진행", desc: "매년, 매월 정기적으로 진행하는 서비스붐업활동을 통해 고객지향적인 마인드를 심화합니다." },
                                    { img: require("@/assets/images/dummy/gsrsu030303_4.png"), tit: "내부직원만족", subTit: "다양한 자긍심 함양 프로젝트", desc: "만족한 직원이 만족한 서비스를 제공한다는 철학아래 다양한 자긍심 함양제도를 진행합니다." }
                                ]
                            },
                            Recommend: {
                                Title: "서비스 우수 직원 추천",
                                PointTit: "진심어린 서비스",
                                Desc: "나의 마음(心)을 담아, 고객입장에서 기대에 앞서가는 서비스를 지속적으로 제공하는 것입니다.<br/>고객(동료)에게 진심어린 서비스를 실천한 서비스 우수 직원을 추천해주세요.",
                                BtnText: "서비스 우수 직원 추천하기"
                            },
                            Safety: {
                                Title: "제품과 서비스 안전을 위한<br/> 제도 운영",
                                Items: [
                                    { step: "01", tit: "맛, 신선도 지킴이 안내", desc: "신선, 맛, NO.1을 위한 GS리테일의 선도 지킴이 활동을 확인해보세요.", popContId: "gsrsu03030302"},
                                    { step: "02", tit: "안전, 위생관리 제도", desc: "GS리테일의 안전, 위생관리 제도를 확인해 보세요.", popContId: "gsrsu03030303"},
                                    { step: "03", tit: "위해상품 차단시스템", desc: "안전한 상품을 제공해 드리기 위해 위해상품 차단 시스템에 참여하고 있습니다.", popContId: "gsrsu03030304"}
                                ]
                            },
                            Compensation: {
                                Title: "제품, 고객 서비스<br/> 피해 보상 프로그램 운영",
                                BtnText: "소비자 피해보상 매뉴얼 보기",
                                Steps: [
                                    {label: "Step 1", desc: "제품 이상,<br/>서비스 불만족 접수" },
                                    { label: "Step 2", desc: "사실관계 확인" },
                                    { label: "Step 3", desc: "이상 여부에 따른<br/>보상 정책 적용" }
                                ]
                            },
                            Awards: {
                                Title: "제품과 서비스 인증 및<br/> 대외 수상 이력",
                                History: [
                                    { year: "2019", month: "12월", desc: "대한민국브랜드 대상(산업통상자원부)" },
                                    { year: "", month: "7월", desc: "GS리테일, 한국서비스대상 종합유통부문 최초 명예의 전당 헌액" },
                                    { year: "", month: "6월", desc: "국가서비스대상 신선식품 쇼핑몰 부분 대상" },
                                    { year: "2016", month: "9월", desc: "GS리테일, 한국의 경영대상 명예의 전당 헌액" }
                                ],
                                Marks: [
                                    { img: require("@/assets/images/dummy/gsrsu030303_logo1.png"), tit: "ISO9001 인증획득 <br/>(한국기업인증원)", date: "2021. 05" },
                                    { img: require("@/assets/images/dummy/gsrsu030303_logo2.png"), tit: "대한민국브랜드 대상 <br/>(산업통상자원부)", date: "2019. 12" },
                                    { img: require("@/assets/images/dummy/gsrsu030303_logo3.png"), tit: "GS리테일, 한국서비스대상 <br/>최초 명예의 전당 헌액", date: "2019. 07" },
                                    { img: require("@/assets/images/dummy/gsrsu030303_logo4.png"), tit: "국가서비스대상 <br/>신선식품 쇼핑몰 부분 대상", date: "2019. 06" },
                                    { img: require("@/assets/images/dummy/gsrsu030303_logo5.png"), tit: "GS리테일, 한국의경영대상 <br/>명예의 전당 헌액", date: "2016. 09" }
                                ]
                            }
                        },
                        safetymanagement: {
                            Summary: "GS리테일은 안전한 근무환경을 조성하여 사고 및 재해를 예방하고,<br/> 모든 구성원(임직원, 협력사), 시민(고객, 일반시민)의 건강한 삶의 질 향상을 위해<br/> 경영방침을 적극 실천하고 있습니다.",
                            Policy: {
                                Title: "안전·보건 경영방침",
                                BtnText: "안전·보건 경영방침",
                                Items: [
                                    { label: "첫째", text: "회사는 산업안전보건법과 안전보건관리규정 등 관련 법규를 준수한다." },
                                    { label: "둘째", text: "회사는 안전중심의 경영의지와 실적이 최고 수준에 도달하도록 노력한다." },
                                    { label: "셋째", text: "회사는 안전보건업무를 경영의 한 요소로 인식하여 필요한 자원과 기술을 제공하고 안전·보건활동을 지속적으로 전개한다." },
                                    { label: "넷째", text: "회사는 구성원(임직원, 협력사), 시민(고객, 일반시민)의 참여 및 의견을 적극 반영하고 불안전한 행동, 환경 등 사업장의 유해·위험 요소를 지속적으로 점검·제거하여 사고 및 재해를 예방하기 위해 노력한다." },
                                    { label: "다섯째", text: "회사는 매년 사업장의 안전·보건 관련 법규 준수 상태를 확인하고 필요한 인력, 예산 등을 편성하여 집행한다." },
                                    { label: "여섯째", text: "회사의 전 구성원은 본부의 안전·보건 활동 계획과 안전·보건 매뉴얼을 준수하여 중대재해 및 산업재해 예방활동에 적극 동참한다." }
                                ]
                            },
                            Governance: {
                                Title: "안전보건 거버넌스",
                                Desc: "안전보건에 대한 전문성 강화를 위해 편의점/수퍼 BU와 홈쇼핑 BU에 각각 안전보건경영책임자(CSO)를 선임하였으며,<br/> 안전보건경영책임자 산하에 안전보건에 관한 업무를 총괄 관리하는 전담조직인 안전보건팀과 안전보건파트를 운영하고 있습니다.<br/> 또한 사업장별 안전보건 관리책임자, 관리감독자를 선임하고 유해요인 조사, 위험성 평가 등을 실시하여 안전보건관리체계를 고도화하고 있습니다.",
                                img1: require("@/assets/images/dummy/gsrsu030304_1.png"),
                                imgMo1: require("@/assets/images/dummy/gsrsu030304_1_mo.png"),
                                Notice: "※이사회(ESG위원회) 정기보고"
                            },
                            Safety: {
                                Title: "안전보건 교육 및 관리 체계",
                                Desc: "GS리테일은 임직원들의 최고의 안전보건 상태를 지속하기 위해 안전보건교육을 실시하고 있으며,<br/> 다양한 보건 관리 활동을 통해 사전에 사고를 차단하고 있습니다.",
                                Systems: [
                                    { num: "01", tit: "근골격계 운동", sub: "(매일 비전 미팅시)" },
                                    { num: "02", tit: "심리상담 서비스", sub: "(스트레스 관리)"},
                                    { num: "03", tit: "보건 목표 지수관리"},
                                    { num: "04", tit: "정기/수시 매일 안전 진단"},
                                    { num: "05", tit: "종합검진 실시",},
                                    { num: "06", tit: "금연 활동 지원",},
                                    { num: "07", tit: "위험성 평가 안전 교육 활동",}
                                ]
                            },
                            listening : {
                                Title: "안전·보건 의견 청취함",
                                Desc: "GS리테일은 안전 및 보건에 관한 사항에 대해 구성원의 의견을 성실히 청취합니다.",
                                Consents: [
                                    {
                                        title: "개인정보 제공 동의",
                                        items: [
                                            "입력하신 개인정보는 신속하고 정확한 처리를 위해 안전담당 부서에만 전달되며 문의 내용 확인 및 답변에 사용 됩니다.",
                                            "수집하는 개인정보 항목: 이름, 이메일, 휴대폰번호",
                                            "개인정보의 보유 및 이용기간: 목적 달성 시 지체 없이 파기(최대 1년)"
                                        ],
                                        guide: "고객님께서는 본 동의에 거부하실 권리가 있으나, 동의하지 않으실 경우<br/> 정보가 확인해야 하는 문의에 대해 정확하고 신속한 답변을 받으시는데 어려움이 있습니다.",
                                    },
                                    {
                                        title: "개인정보 수집·이용 동의",
                                        items: [
                                            "수집이용 및 목적: 문의사항 확인 및 답변 활용",
                                            "수집하는 개인정보 항목: 이름, 연락처, 이메일",
                                            "보유 및 이용기간: 접수 후 1년"
                                        ],
                                        guide: "고객님께서는 본 동의에 거부하실 권리가 있으나, 동의하지 않으실 경우<br/> 문의 글 작성이 불가능합니다.",
                                    }
                                ],
                                Nonmember : {
                                    title:"고객님께서는 현재 비회원(비로그인)으로 문의를 접수 중이십니다.",
                                    items: [
                                        "비회원 문의를 하신 경우 답변은 '등록하신 연락처(문자,전화) 또는 이메일을 통해서만' 확인하실 수 있습니다.",
                                        "연락처를 정확하게 입력해주세요. (홈페이지 내에서 이전 문의이력 확인 불가)",
                                        "로그인 후 고객문의를 접수하시면, 마이페이지에서 문의/답변 내역 확인이 가능합니다.(단,정도경영 제외)"
                                    ],
                                },
                                InputWrapcont: {
                                    part1: {
                                        title: "제보자 정보",
                                        requiredText: "* 필수 입력사항",
                                        nameLabel: "이름",
                                        namePlaceholder: "이름을 입력해주세요",
                                        emailLabel: "이메일",
                                        emailOptions: [
                                            { value: 'naver.com', label: 'naver.com' },
                                            { value: 'gmail.com', label: 'gmail.com' }
                                        ],
                                        telLabel: "연락처",
                                        telOptions: [
                                            { value: '010', label: '010' },
                                            { value: '011', label: '011' }
                                        ]
                                    },
                                    part2: {
                                        title: "상담내용",
                                        categoryLabel: "구분",
                                        categoryOptions: [
                                            { value: 'store', label: '편의점/수퍼' },
                                            { value: 'home', label: '홈쇼핑' }
                                        ],
                                        storeLabel: "매장명",
                                        storeGuide: "* 단, 점포명을 모르시는 경우 점포위치를 적어주세요",
                                        subjectLabel: "제목",
                                        contentLabel: "내용",
                                        contentPlaceholder: "입점 관련 궁금한 사항을 입력 해 주세요",
                                        noticeText: "<span>※ 매장 관련 제보내용은 정확한 점포명을 작성해 주셔야 보다 원할한 답변을 받아보실수 있습니다.</span><span>※ 내용 입력 시 개인정보보호를 위해 연락처, 주소 등의 개인정보를 작성하지 않도록 주의 부탁드립니다.</span><span>※ 제보내용에 욕설이나 비속어가 포함되어 있으면 답변 되지 않을 수 있습니다.</span>",
                                        fileLabel: "파일첨부",
                                        fileNotice: "* 여러 개의 파일 업로드 시 zip파일로 압축하여 올려주세요 (*용량제한 20MB)",
                                        replyLabel: "회신방법",
                                        replyOptions: [
                                            { value: 'email', label: '이메일' },
                                            { value: 'sms', label: 'SMS' }
                                        ],
                                        btnSubmit: "신청",
                                        btnCancel: "취소"
                                    }
                                }
                                
                            }
                        },
                        // data() 리턴 객체 내 langData.ko.protect.informationprotection 섹션
                        informationprotection: {
                            Summary: "GS리테일은 정보보호 및 개인정보보호에 대해 매우 중요하게 생각합니다.<br/>전사 차원의 정보보호 거버넌스를 수립하여 운영하며,<br/>이를 통해 고객들에게 안전하고 신뢰성 있는 서비스를 제공하기 위해 항상 노력하고 있습니다.",
                            Governance: {
                                Title: "정보보호 및 개인정보보호 거버넌스 체계",
                                Desc: "GS리테일은 고객 개인정보 보호를 위해 CEO 직속의 거버넌스 체계를 운영하고 있습니다. CISO/CPO는 개인정보보호책임자 및 정보보호최고책임자로서 전사 개인정보 보호를 총괄하며, CISO/CPO 직속 조직을 통해 보안 전략 수립, 보안 기술 운영, 개인정보 보호 업무를 통합적으로 관리·수행하고 있습니다. 해당 조직은 보안전략, 보안기술, 개인정보보호의 3대 기능을 중심으로 전사 정보보호 및 개인정보 보호 체계를 일관되게 운영하고 있습니다.",
                                img: require("@/assets/images/dummy/gsrsu030305_1.png"),
                                imgMo: require("@/assets/images/dummy/gsrsu030305_1_mo.png"),
                            },
                            Committee: {
                                Desc: "GS리테일은 중요 이슈를 관리하기 위해 정보보호위원회를 운영하고 있습니다. <br/>본 위원회는 CEO를 중심으로 각 BU장(임원)으로 구성된 전사 정보보호 및 개인정보보호 거버넌스 기구입니다. 간사 위원으로 CISO/CPO, 준법지원실장이 참여하며, 실무그룹과 정보보안부문이 연계되어 전사 정보보호 및 개인정보보호 거버넌스의 체계적 운영과 의사결정을 지원합니다.",
                                img: require("@/assets/images/dummy/gsrsu030305_2.png"),
                                imgMo: require("@/assets/images/dummy/gsrsu030305_2_mo.png"),
                                CommitteeImg: "gsrsu030305_2",
                                Notice: "※이사회(ESG위원회) 정기보고"
                            },
                            Policy: {
                                Title: "정보보호 및 개인정보보호 정책",
                                Desc: "GS리테일은 정보보호 정책, 정보보호지침, 매뉴얼을 기반으로 개인정보보호 & 정보보안 활동을 정의하고 있으며, 이를 바탕으로 각종 활동을 수행합니다.<br/>사내 게시판 내 정책, 지침 및 매뉴얼을 게재하며, 매년 개인정보보호법 등 관련 법령의 개정을 확인하여 정책, 지침, 매뉴얼을 제·개정하고 있습니다. 또한 GS리테일은 홈페이지 내 ‘알기 쉬운 개인정보처리방침’을 게시하여, 고객의 정보를 보호하고 있는 당사의 방안을 투명하게 공개하고 있습니다.",
                                img: require("@/assets/images/dummy/gsrsu030305_3.png"),
                                imgMo: require("@/assets/images/dummy/gsrsu030305_3_mo.png"),
                            },
                            Activities: {
                                Title: "정보보호활동",
                                Desc: "GS리테일은 정보보호 관리체계에 맞춰 실제 다양한 정보보호 활동을 수행하고 있으며, 정보보호 공시를 통해 이러한 활동을 안내하고 있습니다.",
                                Table: [
                                    { tit: "ISMS-P 인증", desc: "정보보호 및 개인정보보호 관리체계(ISMS-P) 인증을 유지하기 위해 관리,기술적 통제항목 등 다양한 정보보호 감사를 주기적으로 실시하고 있으며, 공신력 있는 기관을 통해 ISMS-P 인증심사를 수검 받고 있습니다." },
                                    { tit: "서비스 보안 검토", desc: "신규 및 변경되는 서비스에 대하여 개발보안 프로세스를 운영하고 있습니다. 서비스 기획 단계에서 중요도평가를 통해 보안요구사항을 정의하고 이를 프로젝트 각 단계에 반영하고 있으며, 오픈 전 보안요구사항에 맞도록 개인정보생명주기, 개발보안, 어플리케이션 보안, 소스코드 및 인프라점검, 웹/앱 취약점 점검 등 전반적인 보안점검을 수행하고 식별된 취약점에 대한 조치를 진행하고 있습니다." },
                                    { tit: "정보보호 교육", desc: "전사 임직원을 대상으로 개인정보보호 교육과, 정보보호 교육을 실시하고 있으며, 위치정보 및 다량의 개인정보를 취급하는 임직원 대상으로 별도의 심화교육을 실시하고 있습니다." },
                                    { tit: "정보호호 인식제고", desc: "임직원의 정보보호 인식을 향상시키기 위해 개인정보보호의 날·정보보호의 날 캠페인을 운영하며, 꼭 지켜야 하는 사항 등에 대해 정기 메일링을 진행하고 있습니다." },
                                    { tit: "모의훈련", desc: "임직원 대상으로 악성메일 모의훈련을 실시하여, 악성메일에 대한 보안인식을 향상시키고 있습니다.<br/>또한, 개인정보 유 노출 사고에 대한 모의훈련을 실시하여, 실제 사고 발생 시 고객분들께 발생하는 개인정보침해를 줄이기 위해 노력하고 있습니다." },
                                    { tit: "위험관리", desc: "정보자산(인프라 등) 및 프로세스 등에서 발행사는 위험을 관리하기 위해 매년 취약점 점검 및 위험평가를 실시하고 있으며, 도출된 위험에 대해 관리할 수 있는 계획을 수립하여 운영하고 있습니다." }
                                ],
                                BtnText: "정보보호 공시 바로가기"
                            },
                            Certification: {
                                Img: require("@/assets/images/dummy/gsrsu030305_logo.png"),
                                Title: "GS리테일 온라인 서비스",
                                date:"(2025.06.18 ~ 2028.06.17)",
                                Desc: "정보보호 관리체계 및 정보보호 활동의 적정성 및 적합성을 객관적으로 입증하기 위해, <br/>정보보호 및 개인정보보호 관리체계(ISMS-P) 인증을 획득하여, 운영하고 있습니다."
                            }
                        }


                    },
                }
            }
        };
    },
    computed: {
        t() {
            return this.langData[this.lang] || this.langData.ko;
        },
        // 바인딩 경로 단축을 위한 헬퍼
        lp() {
            return this.t.protect.safetymanagement.listening.InputWrapcont;
        }
    },
    mounted() {
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkMobile);
    },
    methods: {
        onTabChange1(idx) {
            this.CTabIdx = idx;
            this.SubTabIdx1 = 0;
            this.SubTabIdx2 = 0;
        },
        handlePage(page) {
            console.log("선택된 페이지:", page);
            this.page = page;
        },
        handleDownload(link) {
            if (!link) {
                alert("연결된 파일이 없습니다.");
                return;
            }
            window.open(link, '_blank');
        },
        checkMobile() {
            this.isMobile = window.innerWidth <= 767;
        },
        openModal(event) {
            const el = event.currentTarget;
            const popId = el.dataset.popid;
            const type = el.dataset.type || "default";
            const cont = el.dataset.cont;
            modal.open(popId, type, el, cont);
        }
    }
};
</script>

<style scoped>
    .main-container { width: 100%; position: relative; background-color: #ffffff; }    
    img {max-width:100%;}
    /* Visual Area */
    .title_wrap { display: block; width: 100%; height: 480px; padding: 160px 0; background: url('/src/assets/images/dummy/gsrsu03010101_bg.png') no-repeat center / cover; position: relative; }
    .page-title { color: #FFFFFF; font-size: 72px; font-weight: 700; letter-spacing: -1.44px; }
    .visual-sub { margin-top: 10px; color: #FFFFFF; font-size: 32px; font-weight: 700; }
    /* Typography */
    h3 { color: #161616; font-size: 40px; font-weight: 700; line-height: 1.3; }
    h4 { color: #161616; font-size: 32px; font-weight: 700; line-height: 1.3; margin-bottom: 12px; }
    p { color: #161616; font-size: 20px; line-height: 1.45; word-break: keep-all; }
    .sub_tab_content {min-height: 300px; margin-top:100px; }
    .inner_content {padding-top:40px; border-radius: 10px; }
    .tab_content_wrap {margin-top:20px !important;}
    :deep(.section_title_sub) br {display:none;}
    .date {font-size:16px;}

    .support_item {border:1px solid red;}
    .support_item + .support_item {margin-top:120px;}

    .finance_support .process_container {margin-top:60px;}
    .finance_support h3 {margin-bottom:40px;}

    /* 상생경영 개요 특화 스타일 */
    .text_summary { font-size: 32px; font-weight: 700; color: #161616; padding: 20px 0; }
    .philosophy_box { padding: 60px; background: #F8F8F8; border-radius: 12px; }
    .circle_grid { display: flex; justify-content: center; flex-direction:column; gap: 40px; background: #fff; padding: 60px 0; border-radius: 12px; list-style: none; }
    .item_wrap {width: 100%; display: flex; justify-content: center; gap: 40px; }
    .item_wrap div { width: 300px; height: 300px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 32px; color: #fff; opacity: 0.8; }

    .item_wrap div  img { width: 60px; height: 60px; margin-bottom: 8px; }
    
    .item_wrap div strong { font-size: 24px; margin-bottom: 8px; font-weight: 700; display:flex; flex-direction:column; align-items:center; gap:8px;}
    .item_wrap div strong::before {content:''; width:60px; height:60px; background-repeat:no-repeat; display:block;}
    .item_wrap .color_01 strong::before {background:url('@/assets/images/sub/icon_su03_01-01-01_60.png') 0 0;}
    .item_wrap .color_02 strong::before {background:url('@/assets/images/sub/icon_su03_01-01-02_60.png') 0 0;}
    .item_wrap .color_03 strong::before {background:url('@/assets/images/sub/icon_su03_01-01-03_60.png') 0 0;}

    .item_wrap div p { font-size: 1.8rem; color: #fff; text-align: center; line-height: 1.4; }
    .item_wrap div.color_01 { background-color: #107AF2; }
    .item_wrap div.color_02 { background-color: #15B874; }
    .item_wrap div.color_03 { background-color: #FB6432; }
    .item_wrap div img { width: 60px; height: 60px; margin-bottom: 8px; }
    .item_wrap div p { font-size: 1.8rem; color: #fff; text-align: center; line-height: 1.4; }
    .card_grid { display: flex; gap: 20px; flex-wrap:wrap; }
    .strategy_card { min-width: calc(25% - 15px); padding: 32px 32px 56px; background: #F8F8F8; border-radius: 12px; flex: 1;}
    .card_head { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
    .card_head .num { font-size: 1.8rem; font-weight: 700; color: #107AF2; }
    .card_head strong { font-size: 20px; color: #161616; }
    .index_visual { position: relative; width: 100%; border-radius: 12px; overflow: hidden; }
    .index_visual img { width: 100%; height: 100%; object-fit: cover; }
    .index_badge { position: absolute; top: 65px; right: 50px; width: 210px; height: 210px; background: rgba(159, 202, 250, 0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
    .badge_inner { text-align: center; }
    .category { display: inline-block; padding: 4px 12px; background: #107AF2; color: #fff; border-radius: 99px; font-size: 14px; font-weight: 700; margin-bottom: 10px; }
    .result { color: #107AF2; }
    .result .year { display: block; font-size: 24px; font-weight: 700; }
    .result strong { font-size: 32px; font-weight: 700; }
    .index_title strong { font-size: 28px; color: #161616; }
    .btn_xl {font-weight:700;}
    .bullet_01 li {font-size:16px;}
    .index_box strong {margin-top:20px; font-size:2.8rem; font-weight:700; display:block;}

    .strategy_box figure.diagram_img {display:flex; justify-content:center;}

    /* 금융지원 */
    .text_summary_sub { margin-bottom:80px; font-size: 28px; font-weight: 700; color: #90909A; border:1px solid green;}
    .section_title_sub {margin-bottom:16px; font-size: 40px; font-weight: 700; color: #161616; }
    .wide_info_box { display: flex; gap: 40px; align-items: center; }
    .img_frame {height: 360px; max-height:100%; border-radius: 12px; overflow: hidden; }
    .img_frame img { width: 100%; height: 100%; object-fit: cover; }
    .text_area { flex: 1; }
    .process_flow { display: flex; align-items: center; justify-content: center; background: #fff; padding: 60px 0; border-radius: 12px; gap:80px; }
    .step_unit { position: relative; width: 220px; height:220px; padding:40px; background:#F8F8F8; border-radius:50%; display: flex; flex-direction: column; align-items: center; gap: 12px; }
    .circle_icon { width: 100px; height: 100px; background: #F8F8F8; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
    .circle_icon img { width: 40px; }
    .step_desc { font-size: 16px; font-weight: 700; text-align: center; color: #000; line-height: 1.2; display:flex; align-items:center; flex-direction:column;}
    .step_desc::before {content:''; width:80px; height:80px; margin-bottom:12px; display:block; background-repeat:no-repeat;}
    .arrow_next { width: 40px; height:40px; background:url('@/assets/images/sub/arrow_su03_01-02-01_40.png') 50% 50% no-repeat; position:absolute; right:-60px; top:50%; transform:translateY(-50%);}
    .grid_column_2 { display: flex; gap: 40px; }
    .grid_column_2 .sub_item {width:50%;}
    .sub_fund_item { flex: 1; }
    .img_frame_small { width: 100%; height: 360px; border-radius: 12px; overflow: hidden; }
    .img_frame_small img { width: 100%; height: 100%; object-fit: cover; }

    .process_flow .step_unit:nth-child(1) .step_desc:before {background:url('@/assets/images/sub/icon_su03_01-02-01_80.png') 0 0;}
    .process_flow .step_unit:nth-child(2) .step_desc:before {background:url('@/assets/images/sub/icon_su03_01-02-02_80.png') 0 0;}
    .process_flow .step_unit:nth-child(3) .step_desc:before {background:url('@/assets/images/sub/icon_su03_01-02-03_80.png') 0 0;}
    .process_flow .step_unit:nth-child(4) .step_desc:before {background:url('@/assets/images/sub/icon_su03_01-02-04_80.png') 0 0;}

    /* 하단 카드 보정 */
    .card_desc { font-size: 16px; color: #67676F; line-height: 1.5; margin-top: 8px; }

    /* 판로지원 전용 스타일 */
    .brand_grid { display: flex; gap: 20px; list-style: none; }
    .brand_grid li { flex: 1; text-align: center; }
    .brand_img_box { width: 100%; height: 240px; background: #F8F8F8; border-radius: 12px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
    .brand_img_box img { max-width: 150px; object-fit: contain; }
    .brand_name  {text-align:left;}
    .brand_name strong { font-size: 20px; color: #161616; font-weight: 700; }
    .program_grid { display: flex; flex-wrap: wrap; gap: 80px 40px; }
    .program_item { width: calc(50% - 20px); }
    .program_visual { width: 100%; height: 340px; border-radius: 12px; overflow: hidden; }
    .program_visual img { width: 100%; height: 100%; object-fit: cover; }

    /* 테이블 공통 스타일 */
    .policy_wrap { width: 100%; margin-top:40px; overflow-x: auto;}
    .policy_wrap table { width: 100%; min-width:1000px; border-collapse: collapse; table-layout: fixed; }
    .policy_wrap th { padding: 16px 24px; color: #161616; font-size: 1.8rem; font-weight: 600; }
    .policy_wrap td { padding: 16px 24px; color: #161616; font-size: 1.8rem; line-height: 1.5; }
    .policy_wrap th:first-child, .policy_wrap td:first-child { border-left: none; }
    .policy_wrap th:last-child, .policy_wrap td:last-child { border-right: none; }
    .policy_wrap td strong { font-weight: 600; }
    .competency_support ul li {display:flex; justify-content:space-between; gap:20px;}
    .competency_support .visual_wrap .img_frame {width:48.59%; background:#F8F8F8; position: relative; display:flex; align-items:center; justify-content:center; overflow: hidden; }
    .competency_support .visual_wrap .img_frame img {width:auto; height:auto;}
    .competency_support .section_title_sub {margin-bottom: 16px; color: #161616; font-size: 40px; font-weight: 700; line-height: 1.3; letter-spacing: -0.4px;}
    .competency_support .p {color: #161616; font-size: 24px; font-weight: 400; line-height: 1.5; letter-spacing: -0.24px;}


    /* 방송편성 */
    .broadcasting_support .small_business {display:flex; gap:2.816%;}
    .broadcasting_support .small_business figure {width:35.21%; height:auto;}
    .broadcasting_support .small_business figure + div {width:61.97%;}
    .broadcasting_support .small_business figure + div .sub_item {margin-bottom:40px;}
    .broadcasting_support .small_business figure + div .sub_item:last-of-type {margin-bottom:0;}

    /* 소통제도 */
    .communication_support .support_item:last-of-type {margin-top:80px;}

    /* 경영주 지원제도 */
    .notice_text {margin-top:20px; color:#67676F; font-size:16px;}
    .owner_card_layout {display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;}
    .owner_card_layout .strategy_card {min-width: auto; padding: 32px 32px 48px; height: 100%; display: flex; flex-direction: column;}
    .diagram_img_wrap {margin:100px 0; text-align:center;}

    /* 공급망 지속가능성 정책 한 줄 규칙 수정 */
    .policy_box_wrap { padding: 60px; background-color: #F8F8F8; border-radius: 20px; }
    .policy_list { display: flex; flex-direction: column; gap: 24px; }
    .policy_item { display: flex; align-items: flex-start; gap: 12px; }
    .policy_item .label { font-size: 20px; font-weight: 700; color: #161616; white-space: nowrap; min-width: 60px; }
    .policy_item .desc { font-size: 20px; font-weight: 400; color: #161616; line-height: 1.45; }
    .supplychain_policy .system_bg {margin-top:0; padding: 60px; background-color: #F8F8F8; border-radius: 12px; display: flex; justify-content: center; align-items: center; }
    .supplychain_policy .system_bg img {padding:60px 95px; background:#fff;}

    /* 공통 폰트 및 컬러 변수 활용 */
    .csr_outline .view_box { padding: 60px; background-color: #F8F8F8; border-radius: 20px; }
    .csr_outline .text_xl_bold { font-size: 40px; font-weight: 700; color: #161616; }
    .csr_outline .text_l_bold { font-size: 28px; font-weight: 700; color: #161616; }
    .csr_outline .label_blue { font-size: 20px; font-weight: 700; color: #107AF2; margin-bottom: 8px; display: block; }
    .strategy_grid { margin-bottom:80px; display: flex; gap: 24px; }
    .strategy_info { flex: 1; border-radius: 12px; }
    .diagram_canvas { background-color: #ffffff; border-radius: 12px; padding: 60px 0; display: flex; justify-content: center; }
    .strategy_main_img { width: 100%; max-width: 780px; height: auto; }
    .timeline_wrapper { display: flex; gap: 48px; position: relative; margin-top: 40px; }
    .timeline_axis { width: 24px; position: relative; }
    .axis_svg { width: 100%; height: auto; }
    .timeline_content_area { flex: 1; display: flex; flex-direction: column; }
    .history_row {padding-bottom: 100px; display: flex; gap: 32px; position:relative; }
    .history_row::before {content:''; width:1px; height:100%; background:#107AF2; position:absolute; bottom:0; top:0; left:12px; display: block;}
    .history_row::after {content:''; width:24px; height:24px; background:url('@/assets/images/sub/icon_history_dot.png') 50% 50% no-repeat; position:absolute; bottom:0; top:0; display:block;}
    .history_row:last-child { padding-bottom: 0; }
    .history_row:last-child::before {display:none;}
    .history_year { width: 80px; margin-left:60px; font-size: 32px; font-weight: 700; color: #000;}
    .history_details { flex: 1; list-style: none; padding: 0; }
    .history_item {padding-bottom:40px; color:#161616; font-size:20px; font-weight:400;} /* 가이드상의 여백 유지 */f

    /* 아동/사회 취약계층지원, 방송발전 */
    .vulnerable_support .program_item .text_area {text-align: left;}
    .vulnerable_support .section_title_sub {margin-bottom: 40px; font-size: 40px; font-weight: 700;}
    .vulnerable_support .brand_img_box, .broadcasting_development .brand_img_box {background-color: #F8F8F8;}
    .vulnerable_support .brand_grid li {max-width:340px;}
    .community_support_area .brand_grid, .broadcasting_development .brand_grid {display: flex; flex-wrap: wrap; gap: 40px 20px;}
    .community_support_area .brand_grid li, .broadcasting_development .brand_grid li {width: calc(25% - 15px); flex: none; text-align: left;}

    /* 숨은나눔천사 특화 스타일 */
    .sharing_card { width: calc(33.333% - 27px); } /* 3열 그리드 */
    .sharing_card .text_l_bold { font-size: 20px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
    .sharing_card .p { font-size: 1.8rem; color: #161616; min-height: 50px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
    .sharing_card .program_visual {height:auto;}
    .card_footer { display: flex; align-items: center; gap: 8px; margin-top: 12px; }
    .badge_gray { padding: 4px 8px; background: #F2F2F4; color: #67676F; border-radius: 4px; font-size: 14px; }
    .date_text { font-size: 16px; color: #67676F; }

    /* 인권경영 */
    .human_rights_management .GS-universal-wrapper .p {color: #161616; font-size: 20px; line-height: 1.45;}
    .human_rights_management .program_grid .program_item { width: calc(25% - 30px);}
    .human_rights_management .program_visual { height: 240px;}
    .human_rights_management .text_area {margin-top:24px;}
    .human_rights_management strong  {font-size:20px; display:block;}
    .human_rights_management .text_area span {margin-bottom:12px; font-size:32px; font-weight:700; display:block;}
    .human_rights_management .owner_card_layout {grid-template-columns: repeat(4, 1fr);}

    /* 인재육성체계 */
    .p_desc {font-size:16px;}

    /* 인재경영실적자료 */
    .talent_performance_data .text_summary_sub {margin-bottom:16px;}
    .talent_performance_data .intro_summary .GS {color:#90909A; font-size: 20px; line-height: 1.5;}
    .talent_performance_data .policy_wrap table {border-top: 1px solid #161616;}
    .talent_performance_data .policy_wrap th {background-color: #fff; border-bottom: 1px solid #E5E5E5;}
    .talent_performance_data .policy_wrap td {border-right:0; border-left:0; border-bottom: 1px solid #E5E5E5; padding: 24px;}

    /* 인재상 전용 스타일 (한 줄 정리 버전) */
    .talent_vision .philosophy_box {display:flex; flex-direction:column; align-items:center;}
    .talent_vision .philosophy_box > div:first-of-type {margin-bottom:40px; display:flex; align-items:center; justify-content:space-around; gap:65px;}
    .talent_vision .circle_visual_wrap { display: flex; justify-content: center; align-items: center; gap: -40px; }
    .talent_vision .circle_item { width: 320px; height: 320px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #fff; mix-blend-mode: multiply; }
    .talent_vision .circle_item.value { background-color: #4A90E2; margin-right: -40px; }
    .talent_vision .circle_item.way { background-color: #50C878; }
    .talent_vision .circle_item strong { font-size: 44px; font-weight: 700; }
    .talent_vision .circle_item span { font-size: 1.8rem; margin-top: 8px; opacity: 0.9; }
    .value_detail_grid {width:100%; padding:40px 0; background:#fff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); display:flex; justify-content:space-evenly;}
    .card_title { font-size: 28px; font-weight: 700; margin-bottom: 32px; padding-bottom: 16px; border-bottom: 2px solid #E5E5E9; }
    .value_list li, .way_list li { margin-bottom: 24px; display: flex; align-items: flex-start; }
    .way_list li {gap:30px;}
    .value_list strong, .way_list strong { min-width: 100px; font-size: 20px; font-weight: 700; color: #161616; }
    .value_list p { font-size: 16px; color: #67676F; }
    .way_list .tags { display: flex; flex-direction: column; gap: 4px; }
    .way_list .tags span { font-size: 16px; color: #67676F; }
    .dream_realization {margin-top:120px;}
    .dream_realization .type_bg { background: #F8F8F8; padding: 60px; border-radius: 20px; }
    .bullet_01.no_type {list-style: none;padding: 0;}
    .effort_item {display: flex; align-items: flex-start;}
    .effort_item .num {flex-shrink:0; width: 25px; font-size: 1.8rem; color: #161616;}
    .effort_item .desc {font-size: 1.8rem; color: #161616; line-height: 1.5; word-break: keep-all;}

    /* 인재경영지표 */
    /* 섹션 공통 */
    .talent_indicators .support_section .section_head {margin-bottom:40px;}
    .talent_indicators .support_section + .support_section {margin-top:100px;}
    .talent_indicators .section_title_sub { font-size: 32px; font-weight: 700; margin-bottom: 10px; }
    /* 2열 그리드 레이아웃 */
    .talent_indicators .support_grid {display: grid; grid-template-columns: repeat(2, 1fr); row-gap: 60px;}
    .talent_indicators .support_item {min-height: 80px; padding-left: 100px; padding-bottom:80px; border-bottom:1px solid #E5E5E9; position: relative; }
    .talent_indicators .support_item + .support_item {margin-top:0;}
    /* .talent_indicators .support_item:nth-last-child(-n+2) {border-bottom: 0; padding-bottom: 0;} */

    .talent_indicators .support_item:before {content: ''; width: 80px; height: 80px; background: #F2F2F4; border-radius: 50%; position: absolute; left: 0; top: 0;}
    .talent_indicators .support_item:after {width:40px; height:40px; background:url('@/assets/images/sub/icon_cont_40.png') no-repeat; content:''; position:absolute; top:20px; left:20px; display:block;}

    .talent_indicators .icon_wrap.support_section:nth-of-type(1) .support_item:nth-of-type(1):after {background-color:red; background-image:none;}
    .talent_indicators .icon_wrap.support_section:nth-of-type(1) .support_item:nth-of-type(2):after {background-position:-980px -266px;}
    .talent_indicators .icon_wrap.support_section:nth-of-type(1) .support_item:nth-of-type(3):after {background-color:red; background-image:none;}
    .talent_indicators .icon_wrap.support_section:nth-of-type(1) .support_item:nth-of-type(4):after {background-position:-100px -103px;}
    .talent_indicators .icon_wrap.support_section:nth-of-type(1) .support_item:nth-of-type(5):after {background-color:red; background-image:none;}
    .talent_indicators .icon_wrap.support_section:nth-of-type(1) .support_item:nth-of-type(6):after {background-position:-260px -266px;}

    .talent_indicators .icon_wrap.support_section:nth-of-type(2) .support_item:nth-of-type(1):after {background-position:-420px -346px;}
    .talent_indicators .icon_wrap.support_section:nth-of-type(2) .support_item:nth-of-type(2):after {background-position:-580px -20px;}
    .talent_indicators .icon_wrap.support_section:nth-of-type(2) .support_item:nth-of-type(3):after {background-position:-20px -266px;}
    .talent_indicators .icon_wrap.support_section:nth-of-type(2) .support_item:nth-of-type(4):after {background-color:red; background-image:none;}
    .talent_indicators .icon_wrap.support_section:nth-of-type(2) .support_item:nth-of-type(5):after {background-position:-900px -20px;}

    .talent_indicators .icon_wrap.support_section:nth-of-type(3) .support_item:nth-of-type(1):after {background-color:red; background-image:none;}
    .talent_indicators .icon_wrap.support_section:nth-of-type(3) .support_item:nth-of-type(2):after {background-color:red; background-image:none;}
    .talent_indicators .icon_wrap.support_section:nth-of-type(3) .support_item:nth-of-type(3):after {background-color:red; background-image:none;}
    .talent_indicators .icon_wrap.support_section:nth-of-type(3) .support_item:nth-of-type(4):after {background-color:red; background-image:none;}
    .talent_indicators .icon_wrap.support_section:nth-of-type(3) .support_item:nth-of-type(5):after {background-color:red; background-image:none;}
    .talent_indicators .icon_wrap.support_section:nth-of-type(3) .support_item:nth-of-type(6):after {background-color:red; background-image:none;}
    .talent_indicators .icon_wrap.support_section:nth-of-type(3) .support_item:nth-of-type(7):after {background-color:red; background-image:none;}
    .talent_indicators .icon_wrap.support_section:nth-of-type(3) .support_item:nth-of-type(8):after {background-color:red; background-image:none;}
    
    .talent_indicators .item_inner .tit_area { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
    .talent_indicators .item_inner .num { color: #107AF2; font-weight: 700; font-size: 1.8rem; }
    .talent_indicators .item_inner .tit { font-size: 20px; font-weight: 600; color: #000; }
    .talent_indicators .item_inner .desc { font-size: 16px; color: #666; line-height: 1.5; }

    /* 수상 이력 리스트 (하단) */
    .award_list {margin-top:20px;}
    .award_row {padding: 20px 0; font-size: 1.8rem; display: flex; align-items:center;}
    .award_row .year { width: 130px; font-size:32px; font-weight: 700; }
    .award_row .month { width: 70px; color: #90909A;  font-size:20px; }
    .award_row .name { flex: 1; color: #161616; font-size:20px; }
    .award_section .brand_grid li {max-width:340px;}
    .award_section .info_box {margin-top:24px; display:flex; flex-direction:column; gap:12px;}
    .award_section .info_box .tit {color:#161616; font-size:20px; font-weight:700;}
    .award_section .info_box .data {color:#161616; font-size:16px;;}
    .award_section .info_box em {font-size:16px;}


    /* 고객만족경영 */
    .customer_satisfaction .text_area {margin-top:32px;}
    .customer_satisfaction strong {margin-bottom:12px; font-size:32px; font-weight:700; display:inline-block;}
    .customer_satisfaction .sub_tit {margin-bottom:12px; font-size:20px; font-weight:700;}
    .customer_satisfaction .recommend_box {padding:60px; background:#E7F2FE; border-radius:20px; display:flex; align-items:center; justify-content:space-between;}
    .customer_satisfaction .safety_system_list {padding:60px 0px; border-radius:20px; display:flex; align-items:center; justify-content:space-between; gap:60px;}
    .customer_satisfaction .safety_system_list li {width:33.333%; padding-left:104px; position:relative;}
    .customer_satisfaction .safety_system_list li::before {content:''; width:80px; height:80px; background:red; position:absolute; top:0; left:0;}
    .customer_satisfaction .safety_system_list .num {color:#107AF2; font-size:2.8rem; font-weight:700; }
    .customer_satisfaction .safety_system_list .tit_wrap {margin-top:10px;}
    .customer_satisfaction .safety_system_list .tit_wrap strong {font-size:24px; font-weight:700; position:relative;}
    .customer_satisfaction .safety_system_list .tit_wrap strong button {width:24px; height:24px; background:red; position:absolute; right:-35px; top:50%; transform: translateY(-50%);}
    .customer_satisfaction .safety_system_list .tit_wrap .desc {color:#67676F; font-size:16px; font-weight:700;}
    .customer_satisfaction .compensation_process_wrap .process_steps {padding:56px 64px; background:#F8F8F8; border-radius:12px; display:flex; gap:20px;}
    .customer_satisfaction .compensation_process_wrap .process_steps .step_box {width:33.333%; padding-top:60px; position:relative;}
    .customer_satisfaction .compensation_process_wrap .process_steps .step_info span {color:#107AF2; font-size:18px; font-weight:700; display:flex;}
    .customer_satisfaction .compensation_process_wrap .process_steps .step_info span::before {content:''; width:40px; height:40px; display:inline-block; background:red; position:absolute; top:0; left:0;}
    .customer_satisfaction .compensation_process_wrap .process_steps .step_info p {margin-top:8px; font-size:20px; font-weight:700;}
    .customer_satisfaction .award_section {display:flex; flex-wrap:wrap; gap: 40px 20px;}
    .customer_satisfaction .award_section .mark_item_group {width: calc(25% - 15px); box-sizing: border-box;}


    /* 안전경영 */
    .safety_management_wrap .policy_card_box { background-color: #f8f8f8; padding: 60px; border-radius: 20px; }
    .safety_management_wrap .section_title_sub { font-size: 40px; font-weight: 700; color: #161616; letter-spacing: -0.4px; }
    .safety_management_wrap .p_desc { font-size: 24px; font-weight: 400; color: #161616; line-height: 1.5; word-break: keep-all; }
    .safety_management_wrap .policy_list_wrap { display: flex; flex-direction: column; gap: 24px; }
    .safety_management_wrap .policy_item { display: flex; align-items: flex-start; gap: 8px; }
    .safety_management_wrap .item_label { font-size: 20px; font-weight: 700; color: #161616; white-space: nowrap; }
    .safety_management_wrap .item_text { font-size: 20px; color: #161616; line-height: 1.35; }
    .safety_management_wrap .diagram_box_wrap { width: 100%; padding: 60px 0; background-color: #f8f8f8; border-radius: 12px; display: flex; flex-direction: column; align-items: center; }
    .safety_management_wrap .notice_text { font-size: 14px; color: #67676f; }
    .safety_management_wrap .safety_system_grid { display: flex; flex-wrap:wrap; border-bottom: 1px solid #e5e5e9; }
    .safety_management_wrap .system_item:first-of-type, .safety_management_wrap .system_item:nth-of-type(2)  {padding-top:0;}
    .safety_management_wrap .system_item {width:50%; padding: 64px 0 64px 104px; border-bottom: 1px solid #e5e5e9; position:relative; display: flex; align-items: center; gap: 24px;}
    .safety_management_wrap .system_item:last-of-type {border-bottom:0}
    .safety_management_wrap .text_box::before {content:'';  width: 80px; height: 80px; background-color: red; position:absolute; top:64px; left:0; }
    .safety_management_wrap .system_item:first-of-type .text_box::before {top:0px;}
    .safety_management_wrap .system_item:nth-of-type(2) .text_box::before {top:0px;}
    .safety_management_wrap .system_item .num { font-size: 28px; font-weight: 700; color: #107af2; display: block; }
    .safety_management_wrap .system_item .tit { font-size: 28px; font-weight: 700; color: #161616; }
    .safety_management_wrap .system_item .sub { font-size: 20px; color: #67676f; margin-top: 8px; display: block; }
    .input_wrap {display:flex; align-items:center; justify-content:flex-end;}
    .noti_non_member {padding:24px; background:#F9F2EA; border-radius:12px;}
    .noti_non_member span {margin-bottom:12px; padding-left:34px; font-size:18px; position:relative; display:block;}
    .noti_non_member span::before {content:''; width:24px; height:24px; background:red; display:inline-block; position:absolute; top:0; left:0px;}
    .noti_non_member ul {padding-left:34px;}
    .listening_form_area .consent_box { background-color: #f8f8f8; padding: 32px; border-radius: 12px;}
    .listening_form_area .consent_tit {margin-bottom: 24px; font-size: 24px; font-weight: 700; display: block; }
    .listening_form_area .consent_list {padding-bottom:24px;}
    .listening_form_area .consent_list li { font-size: 16px; color: #67676f; margin-bottom: 8px; position: relative; padding-left: 12px; }
    .listening_form_area .consent_list li::before { content: ""; position: absolute; left: 0; top: 10px; width: 4px; height: 1px; background-color: #67676f; }
    .listening_form_area .form_table { border-top: 1px solid #242428; }
    .listening_form_area .form_row { display: flex; align-items: center; }
    .listening_form_area .form_row .label { width: 134px; padding: 24px; font-size: 16px; color: #161616; }
    .listening_form_area .required { color: #fb6432; }
    .listening_form_area input, .listening_form_area textarea { width: 100%; padding: 14px 16px; border: 1px solid #c4c4d0; border-radius: 12px; font-size: 16px; }
    .listening_form_area textarea { height: 160px; resize: none; }
    .listening_form_area .consent_agree {padding-top:24px; border-top:1px solid #D7D7DF; display:flex; justify-content:space-between; align-items:center;}
    .listening_form_area .consent_agree p {font-size:16px; font-weight:700;}
    .listening_form_area article {margin-bottom:40px;}
    .listening_form_wrap .form_header { display: flex; align-items: center; justify-content: space-between; padding-bottom: 16px; border-bottom: 1px solid #242428; }
    .listening_form_wrap .form_title { font-size: 24px; font-weight: 700; color: #161616; }
    .listening_form_wrap .required_guide { font-size: 14px; color: #fb6432; }
    .form_section:first-of-type {margin-bottom:64px;}
    .listening_form_wrap .form_body {padding:10px 0 12px; border-bottom: 1px solid #e5e5e9; }
    .listening_form_wrap .form_row { display: flex; align-items: flex-start; gap: 8px; padding: 12px 0; }
    .listening_form_wrap .label_item { display: flex; width: 134px; align-items: center; gap: 4px; padding-top: 14px; }
    .listening_form_wrap .label_text { font-size: 16px; color: #161616; }
    .listening_form_wrap .required_mark { color: #fb6432; font-size: 16px; }
    .listening_form_wrap .input_group { display: flex; align-items: center; gap: 8px;}
    .listening_form_wrap .input_group .group_wrap { display: flex; align-items: center; gap: 8px;}
    .listening_form_wrap .input_flex_item { flex: 1; min-width: 0; }
    .listening_form_wrap .unit { color: #67676f; font-size: 16px; padding: 0 4px; }
    .listening_form_wrap .input_complex { display: flex; flex-direction: column; gap: 8px;}
    .listening_form_wrap .input_complex .textarea_wrap {max-width:600px;}
    .listening_form_wrap .guide_msg { font-size: 14px; color: #67676f; }
    .listening_form_wrap :deep(.guide_msg_multi) span { font-size: 12px; color: #67676f; line-height: 18px; margin-top: 8px; }
    .listening_form_wrap .file_upload_group { display: flex; align-items: center; gap: 10px; }
    .listening_form_wrap .btn_file { height: 38px; padding: 0 12px; font-size: 16px; cursor: pointer; }
    .listening_form_wrap .file_name { font-size: 14px; color: #161616; }
    .form_container .btn-wrap {display:flex; justify-content:flex-end; gap:8px;}
    .form_container .btn-wrap * {width:134px;}
    .w428 {width:428px; display:inline-block;}

    /* 정보보호 */
    .blind { position: absolute; width: 1px; height: 1px; clip: rect(0, 0, 0, 0); overflow: hidden; }
    .information_protection_management .text_summary {font-size: 32px; font-weight: 700; color: #161616; letter-spacing: -0.32px; line-height: 1.3; }
    .information_protection_management .contents { width: 100%; display: flex; flex-direction: column; align-items: flex-start; }
    .information_protection_management .protection_section {display: flex; flex-direction: column; }
    .information_protection_management .section_title_sub {font-size: 40px; font-weight: 700; color: #161616; letter-spacing: -0.4px; line-height: 1.3; }
    .information_protection_management .p_desc {font-size: 24px; font-weight: 400; color: #161616; letter-spacing: -0.24px; line-height: 1.5; }
    .information_protection_management .diagram_box_wrap { width: 100%; padding: 60px 0; background-color: #f8f8f8; border-radius: 12px; display: flex; flex-direction: column; align-items: center; }
    .information_protection_management .diagram_box_wrap.scroll { width: 100%; max-width:100%; background:#fff; overflow: hidden; }
    .information_protection_management .visual_area img { max-width: 100%; height: auto; }
    .information_protection_management .notice_text { font-size: 14px; color: #67676f; }
    .information_protection_management .policy_wrap { width: 100%; border-top: 2px solid #161616; }
    .information_protection_management .policy_wrap table { margin-top:0; }
    .information_protection_management .policy_wrap th { border-top:0; }
    .information_protection_management table th { font-size: 1.8rem; font-weight: 700; color: #161616; padding: 24px;}
    .information_protection_management table td { font-size: 1.8rem; color: #161616; line-height: 1.6; padding: 24px;}


    .intro_section + .intro_section {margin-top:120px;}

    .intro_summary {margin-bottom:100px; text-align:center;}


    @media screen and (max-width: 1024px) {
        .item_wrap {flex-direction:column; align-items:center;}
        .card_grid {flex-wrap:wrap;}
        :deep(.section_title_sub) br {display:block;}
        .strategy_card {width: calc(50% - 10px); flex: none;}
        .wide_info_box { flex-direction: column; align-items: flex-start; }
        .process_flow {flex-direction:column; flex-wrap: wrap; gap: 80px 20px; }
        .arrow_next {right:auto; top:auto; bottom:-60px; transform:translateY(0) rotate(90deg);}
        .customer_satisfaction strong {font-size:20px;}
        .customer_satisfaction strong + p {font-size:16px;}
        span.label, p.desc {font-size:16px !important;}
        .num {font-size:16px !important;}
        /* 마케팅 지원: 태블릿 2열 */
        .brand_grid { flex-wrap: wrap; }
        .brand_grid li { flex: none; width: calc(50% - 10px); }
        .grid_column_2 .sub_item {width:100%;}
        .owner_card_layout { grid-template-columns: repeat(2, 1fr); }
        .owner_card_layout .strategy_card {width:auto;}
        .supplychain_policy .policy_box_wrap { padding: 40px; }
        .supplychain_policy .system_bg { padding: 40px; }
        .strategy_info_grid { flex-direction: column; }
        .strategy_info_grid .p_bold { font-size: 22px; }
        .strategy_grid { flex-direction: column; gap: 40px; }
        .timeline_wrapper { gap: 20px; }
        .history_row { gap: 20px; }
        .history_year { font-size: 24px; width: 60px; }
        .sharing_card {width: calc(50% - 20px);}
        .human_rights_management .program_grid .program_item {width: calc(50% - 20px);}
        .human_rights_management .wide_info_box .img_frame {width: 100%; flex: none;}
        .human_rights_management .owner_card_layout {grid-template-columns: repeat(2, 1fr);}
        .talent_vision .circle_item { width: 240px; height: 240px; } 
        .value_detail_grid {display:grid; grid-template-columns: 1fr; padding: 20px; }
        .talent_vision .philosophy_box > div:first-of-type {flex-direction:column;}
        .talent_vision .circle_item strong { font-size: 32px; } 
        .talent_indicators .support_grid {grid-template-columns: 1fr; row-gap: 40px;}
        .talent_indicators .support_item {padding-bottom:0px;}
        .award_section .brand_grid li {width:100%; max-width:100%;}
        .customer_satisfaction .recommend_box {padding:20px; flex-direction:column;}
        .btn_icon {width:100%;}
        .customer_satisfaction .recommend_box .btn_icon {margin-top:40px; display:block;}
        .customer_satisfaction .safety_system_list{padding:0;}
        .customer_satisfaction .safety_system_list li, .customer_satisfaction .compensation_process_wrap .process_steps .step_box {width:100%;}
        .customer_satisfaction .safety_system_list li::before {width:60px; height:60px;}
        .customer_satisfaction .safety_system_list .tit_wrap strong {font-size:18px;}
        .customer_satisfaction .safety_system_list, .process_steps {flex-direction:column;}
        .customer_satisfaction .award_section .mark_item_group {width: calc(33.333% - 14px);}
        .customer_satisfaction .brand_img_box img {width: 100%; max-width: 160px; margin: 0 auto;}
        .award_row .year, .award_row .month {width:60px;}
        .award_row .desc {width:calc(100% - 60px - 60px); display:inline-block;}
        .award_row .year,.award_row .month, .award_row .desc {font-size:14px;}
        .information_protection_management .diagram_box_wrap {padding:20px 0;}
        .information_protection_management .text_summary { font-size: 26px; } 
        .information_protection_management .section_title_sub { font-size: 32px; } 
        .information_protection_management .p_desc { font-size:18px; } 
        .information_protection_management th strong { font-size:18px; } 
        .information_protection_management td { font-size:16px !important; } 
        .information_protection_management .policy_wrap table {min-width:auto !important;}
        .information_protection_management .policy_wrap colgroup col:first-child { width: 100px !important; } 
        .information_protection_management .mark_item_group { flex-direction: column; align-items: flex-start; gap: 20px; } 
        .information_protection_management .brand_img_box { width: 100%; height: auto; padding: 40px 0; }
        .information_protection_management .notice_wrap {width:100%;}
        .information_protection_management .notice_text {margin-left:20px; margin-right:auto;}

        .listening_form_wrap .form_row {flex-direction:column;}
    }

    @media screen and (max-width: 767px) {
        .title_wrap {display:none;}
        h3, h4 { font-size:20px !important; }
        h4 + p, .p {font-size:16px !important;}
        .sub_tab_content {margin-top:0px;}
        :deep(.text_summary) {padding: 60px 0 20px;}
        :deep(.text_summary) br {display:none;}
        .strategy_card {width: 100%; min-width:none; flex-direction:column;}
        .philosophy_box {padding:20px;}
        .philosophy_box .btn_icon {width:90%;}
        .item_wrap div {width:200px; height:200px;}
        .item_wrap div p {font-size:16px !important;}

        .item_wrap div strong::before {width:40px; height:40px;}
        .item_wrap div strong {font-size:1.8rem;}
        .item_wrap .color_01 strong::before {background:url('@/assets/images/sub/icon_su03_01-01-01_40.png') 0 0;}
        .item_wrap .color_02 strong::before {background:url('@/assets/images/sub/icon_su03_01-01-02_40.png') 0 0;}
        .item_wrap .color_03 strong::before {background:url('@/assets/images/sub/icon_su03_01-01-03_40.png') 0 0;}

        .img_frame { width: 100%; flex: none; height: auto; aspect-ratio: 690/360; }
        .grid_column_2 { flex-direction: column; }
        /* .brand_grid {gap:10px;} */
        /* 프로그램 그리드: 모바일 1열 */
        .program_item { width: 100%; }
        .program_visual { height: auto; aspect-ratio: 16/9; }
        /* 모바일에서 테이블 가독성을 위해 최소폭 지정 */
        .policy_wrap table { min-width: 600px; }
        .policy_wrap th, .policy_wrap td { font-size: 16px; padding: 12px 16px; }
        .competency_support ul li {flex-direction:column;}
        .dream_realization .type_bg {padding:32px 20px;}
        
        /* 하단 섹션 이미지/텍스트 정렬 보정 */
        .wide_info_box { flex-direction: column; }
        .wide_info_box .img_frame { width: 100%; flex: none; }
        :deep(.sub_item) p br {display:none;}
        .owner_card_layout { grid-template-columns: 1fr; }
        .gs25_owner_support .program_item, .community_support_area .brand_grid li, .broadcasting_development .brand_grid li, .human_rights_management .program_grid .program_item { width: 100% !important; }
        .human_rights_management .program_visual {height: auto; aspect-ratio: 16/11;}
        .policy_box_wrap { padding: 32px 20px; }
        .policy_item { flex-direction: column; gap: 4px; }
        .policy_item .label { font-size: 1.8rem; min-width: auto; }
        .policy_item .desc { font-size: 16px; }
        .supplychain_policy .system_bg { padding: 20px; }
        .csr_outline .view_box { padding: 30px 20px; }
        .csr_outline .text_l_bold { font-size: 20px; white-space: normal; }
        .history_item { font-size: 16px; line-height: 1.4; height: auto; padding: 0  0 12px 0; }
        .history_year { font-size: 20px; line-height: 1.4; width: 50px; }
        .vulnerable_support .brand_grid li {max-width:100%}
        .community_support_area .brand_grid {gap:0px 20px;}
        .human_rights_management .owner_card_layout {grid-template-columns: repeat(1, 1fr);}
        .talent_performance_data .policy_wrap table {min-width: 500px;}
        .talent_performance_data .intro_summary .GS {font-size: 16px;}
        .talent_performance_data .intro_summary :deep(.GS) br {display:none;}
        .talent_performance_data .policy_wrap tr td:last-of-type {display:none;}
        .talent_performance_data .policy_wrap table colgroup col:last-of-type {display:none;}
        .value_detail_grid { padding: 0;} 
        .detail_card { padding: 24px; }
        .customer_satisfaction .award_section .mark_item_group {width: calc(50% - 10px);}
        .customer_satisfaction .brand_img_box img {width:50%;}
        .award_section .info_box .tit {font-size:16px; text-align:center;}
        :deep(.award_section) .info_box .tit br {display:none;}
        .award_section .info_box .date {font-size:14px; text-align:center;}
        .customer_satisfaction .compensation_process_wrap .process_steps {padding:40px;}
        .customer_satisfaction .compensation_process_wrap .process_steps .step_box {padding-top:0; padding-left:60px;}
        .information_protection_management .award_section .info_box .tit, .information_protection_management .award_section .info_box .date  {text-align:left;}
        .information_protection_management .award_section .info_box .tit span {font-size:16px; font-weight:700;}
        .information_protection_management .award_section .info_box .tit {font-size:14px; font-weight:400; display:flex; flex-direction:column;}
        .input_item, .input_complex, .input_wrap, .w428 {width:100%;}
        .form_body .form_row:first-of-type {padding-top:0px;}
        .listening_form_area .consent_box {padding:30px 20px;}
        .listening_form_wrap .input_group.email {flex-direction:column;}
        .listening_form_wrap .input_group.email .select {width:100%;}
        .safety_management_wrap .system_item {width:100%;}
        .safety_management_wrap .system_item {padding: 24px 0 24px 76px;}
        .safety_management_wrap .text_box::before {width:60px; height:60px; top:50%; transform:translateY(-50%);}
        .system_item:first-of-type .text_box::before {transform:translateY(0%);}
        .safety_management_wrap .system_item:nth-of-type(2) .text_box::before {top:50%}
        .safety_management_wrap .system_item:nth-of-type(2) {padding-top:24px;}
        .safety_management_wrap .system_item .num { font-size: 16px;}
        .safety_management_wrap .system_item .tit { font-size: 1.8rem;}
        .safety_management_wrap .system_item .sub { font-size: 16px;}
        .safety_management_wrap .text_summary, .safety_management_wrap .section_title_sub {font-size:20px !important;}
        .safety_management_wrap .consent_agree  {flex-direction:column;}
        .safety_management_wrap .policy_card_box {padding:32px 20px;}
        .safety_management_wrap .policy_list_wrap { display: flex;}
        .safety_management_wrap .policy_item { display: flex; flex-direction:row; align-items: flex-start; gap: 8px; }
        .safety_management_wrap .item_label {font-size:16px; font-weight: 700; color: #161616; white-space: nowrap; }
        .safety_management_wrap .item_text { font-size:16px;}
        .safety_management_wrap .p_desc, .safety_management_wrap .consent_tit {font-size:18px;}
        .safety_management_wrap .consent_list li, .safety_management_wrap .consent_agree p, .listening_form_wrap .guide_msg_multi {font-size:14px;}
        .listening_form_wrap .input_complex .textarea_wrap {max-width:600px;}
        :deep(.guide_msg_multi) span {margin-bottom:8px; display:block;}
        :deep(.guide_msg_multi) span:last-of-type {margin-bottom:0;}
        :deep(.check) em {font-size:16px !important;}
        .guide_text + .input_wrap {justify-content:flex-start;}
        .form_container .btn-wrap {display:flex; justify-content:flex-start; gap:8px;}
        .form_container .btn-wrap * {width:50%;}
        .information_protection_management .visual_area.scroll_wrap {width: 100%; overflow-x: auto;  overflow-y: hidden; display: block; -webkit-overflow-scrolling: touch;}
        .information_protection_management .visual_area.scroll_wrap img {min-width: 700px; width: auto;max-width: none;  display: block;}
        .information_protection_management .diagram_box_wrap.scroll {max-width:335px;}
        .noti_non_member span {font-size:14px;}
        .noti_non_member ul {padding-left:0;}
        .noti_non_member ul li {font-size:12px;}


        .index_box strong {font-size:2rem;}

        .intro_section + .intro_section {margin-top:80px;}

        .process_flow {gap:60px 20px;}
        .step_unit {width:200px; height:200px;}
        .step_desc::before {width:60px; height:60px;}
        .arrow_next {width:20px; height:20px; background-image:url('@/assets/images/sub/arrow_su03_01-02-01_20.png'); bottom:-40px; transform:rotate(0deg);}

        .process_flow .step_unit:nth-child(1) .step_desc:before {background:url('@/assets/images/sub/icon_su03_01-02-01_60.png') 0 0;}
        .process_flow .step_unit:nth-child(2) .step_desc:before {background:url('@/assets/images/sub/icon_su03_01-02-02_60.png') 0 0;}
        .process_flow .step_unit:nth-child(3) .step_desc:before {background:url('@/assets/images/sub/icon_su03_01-02-03_60.png') 0 0;}
        .process_flow .step_unit:nth-child(4) .step_desc:before {background:url('@/assets/images/sub/icon_su03_01-02-04_60.png') 0 0;}


        .support_item + .support_item {margin-top:80px;}
        .finance_support h3 {margin-bottom:20px;}
        .text_summary_sub {margin-bottom:40px; font-size:1.6rem; line-height:124%;}

            /* 방송편성 */
        .broadcasting_support .small_business {flex-direction:column;}
        .broadcasting_support .small_business figure {width:100%; height:335px; margin-bottom:32px;}
        .broadcasting_support .small_business figure + div {width:100%;}
        .broadcasting_support .small_business figure + div .sub_item {margin-bottom:32px;}
        .broadcasting_support .small_business figure + div .sub_item:last-of-type {margin-bottom:0;}
    }
</style>