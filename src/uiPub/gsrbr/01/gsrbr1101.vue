<template>
    <div class="gsrbr1101">
        <div class="visual_wrap">
            <div class="cont_inner">
                <div class="intro_content">
                    <div class="text_box">
                        <h2 class="title">{{ t?.MainTitle }}</h2>
                        <div class="desc_box">
                            <p class="summary">{{ t?.MainSummary }}</p>
                            <p class="desc" v-html="t?.MainDesc"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="body_wrap">
            <div class="cont_inner">
                <div class="category_tabs">
                    <Tabs 
                        v-model="CTabIdx" 
                        :tab-items="t?.Tabs1" 
                        tab-class="type_01" 
                        @change="onTabChange1" 
                    />
                    
                    <Tabs 
                        v-if="CTabIdx === 1"
                        v-model="SUBTabIdx" 
                        :tab-items="t?.Tabs2_Mall" 
                        tab-class="type_02" 
                        :tab-slide="true" 
                        class="sub_tabs"
                        @change="onTabChange2" 
                    />
                </div>

                <div class="detail_content">
                    <section v-if="CTabIdx === 0 && t?.SubwayData" class="tab_content subway_content">
                        <div class="inner_cont">
                            <div class="visual_img">
                                <img :src="t.MallData[0].mainImg" alt="지하철 상업시설" />
                            </div>

                            <div class="info_section">
                                <h3 class="content_title">{{ t.SubwayData.title }}</h3>
                                <div class="info_grid">
                                    <div v-for="(info, idx) in t.SubwayData.introList" :key="idx" class="info_item">
                                        <h4 class="sub_title">{{ info.subTitle }}</h4>
                                        <div class="text_list ">
                                            <p class="text_item" v-for="(txt, tIdx) in info.desc" :key="tIdx" v-html="txt"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="route_map_wrap">
                                <div class="route_map_img">
                                    <img :src="t.SubwayData.routeMapImg" alt="신분당선 노선도 및 연락처" />
                                </div>
                            </div>
                            <div class="contact_info_wrap">
                                <div class="contact_left">
                                    <div class="info_item">
                                        <i class="ico_call"><span class="blind">전화번호</span></i>
                                        <span class="val">{{ t.SubwayData.contact.phone }}</span>
                                    </div>
                                    <div class="info_item">
                                        <i class="ico_mail"><span class="blind">이메일</span></i>
                                        <span class="val">{{ t.SubwayData.contact.email }}</span>
                                    </div>
                                </div>
                            </div>

                            <div class="lease_condition_section">
                                <h3 class="content_title">임대조건 안내</h3>
                                <div class="condition_grid">
                                    <div v-for="(cond, cIdx) in t.SubwayData.conditions" :key="cIdx" class="condition_item">
                                        <div class="visual_img_small">
                                            <img :src="cond.img" :alt="cond.name" />
                                        </div>
                                        <h4 class="sub_title">{{ cond.name }}</h4>
                                        <div class="policy_wrap">
                                            <table>
                                                <colgroup><col width="200"><col width="*"></colgroup>
                                                <tr v-for="(row, rIdx) in cond.table" :key="rIdx">
                                                    <th>{{ row.th }}</th>
                                                    <td v-html="row.td"></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section v-if="CTabIdx === 1 && t?.MallData" class="tab_content mall_content" :class="'mall-type-' + SUBTabIdx">
                        <template v-for="(mall, mIdx) in t.MallData" :key="mIdx">
                            <div v-if="SUBTabIdx === mIdx" class="inner_cont">
                                <div class="visual_img">
                                    <img v-if="mall.mainImg" :src="mall.mainImg" :alt="mall.name" />
                                    <div v-else class="no_img">상세 이미지를 준비 중입니다.</div>
                                </div>

                                <div class="info_section">
                                    <h3 class="content_title">{{ mall.contentTitle }}</h3>
                                    <div class="info_box">
                                        <h4 class="sub_title">상업시설 소개</h4>
                                        <div class="text_list ">
                                            <p class="text_item" v-for="(txt, idx) in mall.intro" :key="idx" v-html="txt"></p>
                                        </div>
                                    </div>
                                </div>

                                <div class="map_section">
                                    <div class="map_area">
                                        <iframe :src="mall.mapUrl" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                    <div class="contact_info_wrap">
                                        <div class="contact_left">
                                            <div v-if="mall.contact.phone" class="info_item">
                                                <i class="ico_call"><span class="blind">전화번호</span></i>
                                                <span class="val">{{ mall.contact.phone }}</span>
                                            </div>
                                            <div v-if="mall.contact.email" class="info_item">
                                                <i class="ico_mail"><span class="blind">이메일</span></i>
                                                <span class="val">{{ mall.contact.email }}</span>
                                            </div>
                                        </div>
                                        <div class="sns_right">
                                            <!-- 26.05.11 Edit 이종환 : small 클래스 추가 -->
                                            <a v-if="mall.contact.insta" :href="mall.contact.insta" target="_blank" class="btn_sns small ico_insta">
                                                <span class="blind">인스타그램 바로가기</span>
                                            </a>
                                            <a v-if="mall.contact.homepage" :href="mall.contact.homepage" target="_blank" class="btn_sns small ico_home">
                                                <span class="blind">홈페이지 바로가기</span>
                                            </a>
                                            <!-- //26.05.11 Edit 이종환 : small 클래스 추가 -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </section>
                </div>

                <div class="lease_section">
                    <h4 class="sub_title">{{ t.lease_subtitle }}</h4>
                    <ul class="bullet_01 ">
                        <li>{{ t.lease_subtitle_desc_1 }}</li>
                        <li>{{ t.lease_subtitle_desc_2 }}</li>
                    </ul>
                    <div class="fee_tip_box">
                        <div class="ic_percent">%</div>
                        <div class="tip_txt">
                            <strong class="blue_label">{{ t.fee_tip_title }}</strong>
                            <p class="val_txt">
                                {{ t.fee_tip_desc_1 }}
                            </p>
                            <p class="val_txt">
                                {{ t.fee_tip_desc_2 }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- 26.05.11 Edit 이종환 : 하단 목록 버튼 통일 -->
                <div class="bottom_btns">
                    <button class="btn_back" @click="handleBack">{{ t.backLabel }}</button>
                </div>
                <!-- //26.05.11 Edit 이종환 : 하단 목록 버튼 통일 -->

            </div>
        </div>
    </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";

export default {
    name: "gsrbr1101",
    components: { Tabs },
    props: {
        lang: { type: String, default: "ko" }
    },
    data() {
        return {
            CTabIdx: 0,
            SUBTabIdx: 0,
            langData: {
                ko: {
                    MainTitle: `개발/임대 사업`,
                    MainSummary: `GS리테일의 부동산 개발 및 임대 사업부입니다.`,
                    MainDesc: `상업용 부동산 개발부터 임대, 관리까지 토탈 솔루션을 제공합니다.<br />최적의 입지 분석과 수익성 높은 부동산 포트폴리오를 구축합니다.`,
                    Tabs1: [{ item: "지하철" }, { item: "쇼핑몰" }],
                    Tabs2_Mall: [{ item: "안녕인사동" }, { item: "구로 지밸리몰" }, { item: "판교 파미어스몰" }, { item: "동부산 미식일상" }],
                    SubwayData: {
                        mainImg: require("@/assets/images/dummy/gsrbr1101_subway.png"),
                        title: `신분당선 1, 2단계 임대상가 모집`,
                        introList: [
                            { subTitle: `최단시간 강남접근`, desc: [`01. 강남역 ~ 정자역 16분대 운행 (기존 분당선 대비 약 30분 단축)`, `02. 광역버스 및 자가용 이용 통근자의 교통 체증 난(難) 해소`] },
                            { subTitle: `풍부한 유동성`, desc: [`01. 총 6개역 중 4개 역사가 환승역사 (강남, 양재, 판교, 정자)`, `02. 강남 최고의 오피스/상업 밀집지인 강남역 연결 (일 유동객 35만명)`] },
                            { subTitle: `최적화된 역사 환경`, desc: [`01. 현대적 감각의 인테리어 구현 및 높은 층고(3.6M)로 개방감 확보`] }
                        ],
                        routeMapImg: require("@/assets/images/dummy/gsrbr1101_subway.png"),
                        contact: { phone: `02-2006-3198`, email: `hyungwook.lim@gsretail.com / gunbeom@gsretail.com` },
                        conditions: [
                            {
                                name: `임대상가`, img: require("@/assets/images/dummy/subway_shop.png"),
                                table: [
                                    { th: `월 임대료`, td: `업체 제안 방식` },
                                    { th: `임대 보증금`, td: `월 임대료 * 12개월` },
                                    { th: `계약기간`, td: `1단계 : ~2026.12.31 / 2단계 : ~2028.08.15` },
                                    { th: `면적`, td: `각 역사별 상이` },
                                    { th: `추천업종`, td: `의류, 편의서비스, 생활잡화, 디저트 등` }
                                ]
                            },
                            {
                                name: `키오스크`, img: require("@/assets/images/dummy/subway_kiosk.png"),
                                table: [
                                    { th: `월 집기 사용료`, td: `업체 제안 방식` },
                                    { th: `사용료 납입`, td: `6개월 선납 방식` },
                                    { th: `계약기간`, td: `6개월 단위` },
                                    { th: `예치보증금`, td: `사용료 3개월 분` },
                                    { th: `추천업종`, td: `악세사리, 잡화 등` }
                                ]
                            }
                        ],
                    },
                    lease_subtitle: `임대차 방식`,
                    lease_subtitle_desc_1: `보증금/고정 월세`,
                    lease_subtitle_desc_2: `보증금/변동 월세 (수수료 방식)`,
                    fee_tip_title: `수수료방식이란?`, 
                    fee_tip_desc_1: `월 순매출의 일정 비율을 임대인에게 임대료로 지급하는 방식>예) 월 순매출금액 x 수수료율 (VAT별도)`,    
                    fee_tip_desc_2: `예) 월 순매출금액 x 수수료율 (VAT별도)`,    
                    MallData: [
                        { 
                            name: `안녕인사동`, contentTitle: `안녕인사동 복합상업시설`,
                            intro: [
                                `01. 인사동 쌈지길 맞은편에 위치한 복합문화상업시설로 2019년 10월 그랜드 오픈 후 인사동의 랜드마크로 자리매김함`,
                                `02. 직장인/외국인/가족나들이/관광객 등이 상시 밀집하며, 인사동-익선동으로 이어지는 우수한 도보 접근성 및 신비로운 건물 가시성`,
                                `03. 갤러리, 카페, 식음, 소품 등 다양한 매장이 거리를 형성하고, 전통 문화 지역 특성을 준수하여 고객 경험에 특화된 MD 구성`,
                                `04. 상권 내 차별화된 시설(나인트리 호텔 숙박 연계 및 주차 공간 제공) 등 국내외 방문객의 장시간 체류 가능 (호캉스+몰캉스)`
                            ], 
                            mainImg: require("@/assets/images/dummy/gsrbr1101_mall01.png"),
                            mapUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.1734625641543!2d126.98088067587412!3d37.574532872036556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3ef4127fbcd%3A0xdff366a8dbc227d6!2z7JWI64WV7J247IKs64-Z!5e0!3m2!1sko!2skr!4v1775627958896!5m2!1sko!2skr`,
                            contact: { phone: `02-6954-2991`, email: `anyounginsadong@anyounginsadong.com / ha3kim1@gsretail.com / gsseri@gsretail.com`, insta: `#`, homepage: `` }
                        },
                        { 
                            name: `구로 지밸리몰`, contentTitle: `구로 지밸리 비즈플라자 지밸리몰`,
                            intro: [
                                `01. 구로에서 만나는 최신 트렌드의 HOT 브랜드`,
                                `02. 구로디지털단지 최대 규모의 랜드마크 식음몰`,
                                `03. 가족모임 / 커뮤니티 / 비즈니스 다이닝`,
                                `04. 문화 공연 / 전시 / 커뮤니티가 있는 공간`,
                                `05. 넉넉한 주차, 전면 테라스형 쾌적한 휴식공간`,
                                `06. 생활편의(클리닉, 편의점, 플라워샵) / 리테일 매장 완비`
                            ], 
                            mainImg: require("@/assets/images/dummy/gsrbr1101_mall02.png"),
                            mapUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.9672616045955!2d126.89372737714335!3d37.485098928791544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9e24b5094a57%3A0x548819319c910b57!2z6rWs66Gc7KeA67C466as66qw!5e0!3m2!1sko!2skr!4v1775628029310!5m2!1sko!2skr`,
                            contact: { phone: `02-2008-3199`, email: `masiaveve@gsretail.com`, insta: `#`, homepage: `` }
                        },
                        { 
                            name: `판교 파미어스몰`, contentTitle: `판교 파미어스몰`,
                            intro: [
                                `<b>아이와 함께, 친구와 함께, 연인와 함께,<br/> 판교에서 따로, 또 같이 '파미어스몰'로 여러분을 초대합니다.</br>`,
                                `국내 최고의 자족형 신도시, 판교에 다양한 라이프 스타일이 조화롭게 어우러진 복합 문화 상업 공간, '파미어스몰'`,
                                `파미어스몰은 연면적 약 7만 7천평 규모의 복합시설로 315실의 '나인트리 호텔', 785세대의 '오피스텔', 5개기업의 오피스로 사용되고, 약 8,653평의 저층부에는 극장, 메디컬, 키즈, 쇼핑, 카페, 레스토랑 등 지역 주민들의 풍요로운 하루를 완성할 수 있는 다양한 상업 및 문화시설이 자리잡았습니다.`
                            ], 
                            mainImg: require("@/assets/images/dummy/gsrbr1101_mall03.png"),
                            mapUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.017687225739!2d127.09543847714181!3d37.41305683291176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca7d57f7c5fdb%3A0x3205f726fd596acf!2z7YyM66-47Ja07Iqk66qw!5e0!3m2!1sko!2skr!4v1775628062277!5m2!1sko!2skr`,
                            contact: { phone: `031-755-5878`, email: `egg2bird@gsretail.com`, insta: `#`, homepage: `#` }
                        },
                        { 
                            name: `동부산 미식일상`, contentTitle: `동부산 미식일상`,
                            intro: [
                                `<b>'푸드홀 부산 미식일상'은 동부산 '오시리아 관광단지' 중심에 위치해 있는 F&B Mall로써,<br/> 테마파크 단지 내방객의 휴식을 제공하기 위해 만들어진 시설입니다.</b>`,
                                `오시리아 관광단지는 연간 방문객 1,060만명이 예상되는 사계절 체류형 해양 복합리조트로써, 제 2의 롯데월드와 전 세계 최대 규모의 스카이라인 루지(luge), 아쿠아월드, 호텔, 골프장, 해동용궁사 등으로 이루어져 있습니다. 상업시설은 당사의 미식일상 및 한국 최초의 프리미엄 전문리빙관으로 오픈한 메종 동부산 롯데몰 루지 상업시설로 이루어져 있습니다.`
                            ], 
                            mainImg: require("@/assets/images/dummy/gsrbr1101_mall04.png"),
                            mapUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.5041907160903!2d129.2118041770898!3d35.19390825658788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35688d0870d1aba7%3A0x236d755155fb1b70!2z66-47Iud7J287IOBIO2RuOuTnO2ZgA!5e0!3m2!1sko!2skr!4v1775628088485!5m2!1sko!2skr`,
                            contact: { phone: `031-755-5878`, email: `egg2bird@gsretail.com`, insta: `#`, homepage: `#` }
                        }
                    ],
                    backLabel : '목록으로 돌아가기' //26.05.11 add
                },
            }
        };
    },
    computed: {
        t() {
            return this.langData[this.lang] || this.langData.ko;
        }
    },
    methods: {
        onTabChange1(idx) {
            this.CTabIdx = idx;
            this.SUBTabIdx = 0; 
        },
        onTabChange2(idx) {
            this.SUBTabIdx = idx;
        },
        handleBack() {
            this.$router.back();
        }
    },
};
</script>

<style scoped>
/* 1. 넓이 2. 외부여백 3. 내부여백 4. 폰트 5. 배경 6. 테두리 7. 정렬 8. 위치 9. 블록 10. 변형 */

.gsrbr1101 { width: 100%; position: relative; display: block; }

/* Visual Section */
.visual_wrap { width: 100%; padding: 200px 0; background-color: #f8f8f8; position: relative; }
.intro_content { display: flex; align-items: center; justify-content: space-between; }
.text_box .title { color: #000; font-size: 56px; font-weight: 700; line-height: 1.3; }
.text_box .desc_box { margin-top: 48px; }
.text_box .summary, 
.text_box .desc { color: #161616; font-size: 28px; font-weight: 500; line-height: 1.6; }
.info_grid {margin-top:60px;}
.info_grid .info_item {margin-bottom:40px; flex-direction:column; align-items:flex-start;}

/* Body Section */
.body_wrap { width: 100%; padding: 100px 0 140px; position: relative; }
.sub_tabs { margin-top: 24px; }

/* Content Section */
.detail_content { margin-top: 120px; }
.tab_content { width: 100%; display: block; }
.inner_cont { width: 100%; position: relative; }

.visual_img { width: 100%; height: 340px; background-color: #eee; border-radius: 12px; overflow: hidden; }
.visual_img img { width: 100%; height: 100%; object-fit: cover; }
.visual_img .no_img { display: flex; align-items: center; justify-content: center; height: 100%; color: #999; font-size: 20px; }

.info_section { margin-top: 40px; }
.content_title { color: #161616; font-size: 40px; font-weight: 700; line-height: 1.3; }
.info_box { margin-top: 16px; }
.sub_title { color: #161616; font-size: 24px; font-weight: 700; }
.text_list { margin-top: 16px; }
.text_item {width: 100%; padding-left: 24px; color: #67676f; font-size: 24px; line-height: 1.6; text-indent: -24px;}
.mall-type-2 .text_item, .mall-type-3 .text_item {padding-left:0px; text-indent:0px;}
.mall-type-2 .text_item :deep(b), .mall-type-3 .text_item :deep(b) {font-size:24px; font-weight:700;}

/* Route Map Area (Subway) */
.route_map_wrap { width: 100%; margin-top: 64px; background-color: #f8f8f8; border-radius: 8px; }
.route_map_wrap img {width:100%;}
.stage_labels { width: 100%; margin-bottom: 20px; display: flex; justify-content: space-around; color: #7c7c86; font-size: 16px; font-weight: 700; }
.line_container { width: 100%; display: flex; align-items: center; }
.line_bar { height: 2px; background-color: #af252c; flex: 1; }
.line_bar.gray { background-color: #ccc; }
.station_item { display: flex; flex-direction: column; align-items: center; gap: 10px; }
.station_item .badge { width: 40px; height: 40px; color: #fff; font-size: 20px; font-weight: 700; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.station_item .name { color: #7c7c86; font-size: 14px; white-space: nowrap; }

/* Lease Condition Section (Subway) */
.lease_condition_section { width: 100%; margin-top: 120px; }
.condition_grid { width: 100%; margin-top: 40px; display: flex; gap: 20px; }
.condition_item { flex: 1; }
.visual_img_small { width: 100%; height: 420px; margin-bottom:30px; border-radius: 12px; overflow: hidden; }
.visual_img_small img { width: 100%; height: 100%; object-fit: cover; }
.policy_wrap {margin-top:24px;}
.policy_wrap table { width: 100%; margin-top: 16px; border-top: 1px solid #e5e5e9; }
.policy_wrap table th { padding: 18px 24px; color: #161616; font-size: 1.8rem; font-weight: 700; background-color: #f8f8f8; border-bottom: 1px solid #e5e5e9; border-top:0; border-left:0; border-right:0; text-align:left; }
.policy_wrap table td { padding: 18px 24px; color: #161616; font-size: 1.8rem; border-bottom: 1px solid #e5e5e9; border-left:0; border-right:0;}

/* Map & Contact Area (Mall) */
.map_section { margin-top: 40px; }
.map_area { width: 100%; height: 600px; background-color: #f0f0f0; border: 1px solid #e5e5e9; border-radius: 12px; overflow: hidden; }
.contact_info_wrap { margin-top: 20px; display: flex; align-items: center; justify-content: space-between; }
.contact_left { display: flex; gap: 40px; }
.info_item { display: flex; align-items: center; gap: 8px; }
.info_item i { width: 24px; height: 24px; background-color: red; background-size: contain; background-repeat: no-repeat; display: inline-block; }
.info_item .val { color: #161616; font-size: 1.8rem; }
.sns_right { display: flex; gap: 10px; }
/* common.css로 이동
.btn_sns { width: 40px; height: 40px; background-color: #f8f8f8; background-size: 24px; background-repeat: no-repeat; background-position: center; border-radius: 50%; display: block; }
*/

/* Lease Section (Common) */
.lease_section { width: 100%; margin-top: 80px; }
.bullet_01 {margin-top:16px;}
.bullet_01 li { padding-left: 15px; color: #67676f; font-size: 20px; line-height: 1.6; position: relative; }
.bullet_01 li::before { width: 4px; height: 4px; background-color: #67676f; border-radius: 50%; content: ""; position: absolute; top: 12px; left: 0; }
.fee_tip_box { width: 100%; margin-top: 40px; padding: 40px 64px; background-color: #f8f8f8; border-radius: 8px; display: flex; flex-direction: column; align-items: flex-start; gap: 24px; }
.ic_percent { width: 40px; height: 40px; color: #90909a; font-size: 1.8rem; font-weight: 600; border: 2px solid #90909a; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.blue_label { color: #107af2; font-size: 16px; font-weight: 700; display: block; }
.val_txt { margin-top: 6px; color: #161616; font-size: 20px; font-weight: 700; line-height: 1.4; }

/* Bottom Buttons */
.bottom_btns { width: 100%; margin-top: 100px; text-align: left; }
.btn_list_back { background: transparent; padding: 0; border: 0; cursor: pointer; }
.btn_list_back span { color: #161616; font-size: 20px; display: flex; align-items: center; gap: 12px; }
.btn_list_back span::before { width: 16px; height: 16px; background-color: red; content: ''; display: inline-block; }
.ac { text-align: center; }
.blind { width: 1px; height: 1px; clip: rect(0,0,0,0); overflow: hidden; position: absolute; }

/* Responsive Media Queries */
@media screen and (max-width: 1024px) {
    .visual_wrap { padding: 80px 0; }
    .intro_content { flex-direction: column; align-items: flex-start; gap: 40px; }
    .text_box .title { font-size: 36px; }
    .text_box .desc_box { margin-top: 24px; }
    .text_box .summary, .text_box .desc { font-size: 1.8rem; line-height: 1.5; }
    .body_wrap { padding: 60px 0 80px; }
    .detail_content { margin-top: 60px; }
    .visual_img { height: 220px; }
    .content_title { font-size: 28px; }
    .sub_title { font-size: 20px; }
    .text_item { font-size: 1.8rem; line-height: 1.6; }
    .map_area { height: 400px; }
    .contact_info_wrap { padding: 0; flex-direction: column; align-items: flex-start; gap: 24px; }
    .contact_left { flex-direction: column; gap: 12px; }
    .sns_right { width: 100%; margin-top: 10px; justify-content: flex-start; }
    .lease_section { margin-top: 60px; }
    .fee_tip_box { padding: 32px 24px; flex-direction: column; align-items: flex-start; gap: 16px; }
    .val_txt { font-size: 16px; word-break: keep-all; }
    .bottom_btns { margin-top: 60px; }
    .btn_list_back span { height: 50px; justify-content: center; }
}

@media screen and (max-width: 768px) {
    .text_box .title { font-size: 30px; letter-spacing: -0.5px; }
    .text_item, .mall-type-2 .text_item :deep(b), .mall-type-3 .text_item :deep(b) { font-size: 16px; }
    .mall-type-2 .text_item :deep(b br) , .mall-type-3 .text_item :deep(b br) {display:none;}
    .content_title { font-size: 24px; }
    .condition_grid {flex-direction:column;}

}
</style>