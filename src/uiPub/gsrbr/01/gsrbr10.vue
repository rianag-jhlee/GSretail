<template>
    <div class="gsrbr10" v-if="t">
        <section class="visual_section" ref="visualSection">
            <div class="visual_img" ref="visualImg">
                <img :src="isMobile ? t.Visual.imgMo : t.Visual.img" :alt="t.Visual.alt" />
            </div>
            <div class="visual_content">
                <div class="text_box cont_inner">
                    <span>{{ t.Visual.subContent_1 }}</span>
                    <span>{{ t.Visual.subContent_2 }}</span>
                    <span>{{ t.Visual.subContent_3 }}</span>
                </div>
            </div>
        </section>

        <section class="body_wrap">
            <div class="cont_area">
                <div class="cont_inner">
                    <h3>{{ t.SubTitle }}</h3>
                    <ul>
                        <li>
                            <p>{{ t.SubContent_1 }}</p>
                            <p>{{ t.SubContent_2 }}</p>
                        </li>
                        <li>
                            <a :href="t.HopageLink" class="btn_website" target="_blank">{{ t.HopageText }}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="cont_inner">

                <!-- 26.05.11 Edit 이종환 : 하단 목록 버튼 통일 -->
                <div class="bottom_btns">
                    <button class="btn_back" @click="handleBack">{{ t.ListBack }}</button>
                </div>
                <!-- //26.05.11 Edit 이종환 : 하단 목록 버튼 통일 -->
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "gsrbr10",
    props: {
        lang: { type: String, default: "ko" }
    },
    data() {
        return {
            isMobile: false,
            langData: {
                ko: {
                    Visual: { // 대문자 유지
                        img: require("@/assets/images/dummy/gsrbr10.png"),
                        imgMo: require("@/assets/images/dummy/gsrbr10_mo.png"),
                        alt: "GS THE FRESH 메인 비주얼",
                        subContent_1: "산책하며",
                        subContent_2: "돈버는 즐거움",
                        subContent_3: "우리동네 딜리버리",
                    },
                    SubTitle: `누구나 가볍게 참여 쉬운 배달 서비스`,
                    SubContent_1: `별도의 장비 없이, 청년부터 어르신까지 손쉽게 시작할 수 있는 도보 배달 서비스.`,
                    SubContent_2: `내가 원하는 시간에, 내가 아는 동네에서, 가볍게 배달하고 수입을 만들어보세요.`,
                    HopageLink: `https://www.gsrbr.com/`,
                    HopageText: `홈페이지`,
                    ListBack:`목록으로 돌아가기`
                }
            }
        };
    },
    computed: {
        t() {
            // 안전하게 데이터 반환
            return this.langData[this.lang] || this.langData.ko;
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
        checkMobile() {
            this.isMobile = window.innerWidth < 768;
        },
        handleBack() {
            this.$router.back();
        }
    },
};
</script>

<style scoped>
.gsrbr10 { width: 100%; position: relative; display: block; }
.cont_inner { width: 100%; max-width: 1420px; margin: 0 auto; padding: 0 20px; }

/* Visual Section */
.visual_section { width:100%; position: relative; overflow: hidden; }
.visual_img { width: 100%; height: auto; }
.visual_img img { width: 100%; display: block; }
.visual_content { position: absolute; top: 50%; left: 0; transform: translateY(-50%); width: 100%; z-index: 2; }
.text_box span {margin-bottom:10px; color:#fff; font-size:72px; font-weight:700; display: block;  }

/* body_wrap Section */
.body_wrap .cont_area {padding:10.41%; background:#F8F8F8;}
.body_wrap .cont_area .cont_inner h3 {margin-bottom:16px; color:#161616; font-size:48px; font-weight:700;}
.body_wrap .cont_area .cont_inner ul {display:flex; justify-content:space-between; align-items:flex-end;}
.body_wrap .cont_area .cont_inner ul li {}
.body_wrap .cont_area .cont_inner ul li p {color:#161616; font-size:24px; font-weight:600; line-height:1.;}
.body_wrap .cont_area .cont_inner ul li a {color:#161616; font-size:18px; display:flex; align-items:center;}

/* Bottom Buttons */
.btn_list_back { background: transparent; padding: 0; border: 0; cursor: pointer; }
.btn_list_back span { color: #161616; font-size: 20px; display: flex; align-items: center; gap: 12px; }
.btn_list_back span::before { width: 16px; height: 16px; background-color: red; content: ''; display: inline-block; }
.btn_mid.border {display:none;}
@media screen and (max-width: 1160px) {
    .body_wrap .cont_area .cont_inner ul {flex-direction:column; align-items:flex-start; gap:16px}
}
@media screen and (max-width: 1024px) {}
@media screen and (max-width: 767px) {
    .text_box span {margin-bottom:10px; color:#fff; font-size:32px; font-weight:700; text-align:center; display: block;  }
    .body_wrap .cont_area {padding:140px 0px;}
    .body_wrap .cont_area .cont_inner h3 {margin-bottom:16px; color:#161616; font-size:24px; font-weight:700;}
    .body_wrap .cont_area .cont_inner ul {display:flex; justify-content:space-between; align-items:flex-start;}
    .body_wrap .cont_area .cont_inner ul li p {color:#161616; font-size:18px; font-weight:400; line-height:1.5;}
    .body_wrap .cont_area .cont_inner ul li a {color:#161616; font-size:14px; display:flex;}
    .body_wrap .cont_area .cont_inner ul li a::before {width: 24px; height: 24px; background-color: red; content: ''; display: inline-block; margin-right: 8px;}
    .btn_list_back span {font-size:16px;}
    .btn_big.border {margin-top:80px; margin-bottom:80px; display:flex; justify-content: center;}
}
</style>