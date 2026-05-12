<template>
    <div class="gsrbr07" v-if="t">
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
                    <div>
                        <p>{{ t.SubContent_1 }}</p>
                        <p v-html="t.SubContent_2"></p>
                        <a :href="t.HopageLink" target="_blank">{{ t.HopageText }}</a>
                    </div>
                    <ul>
                        <li class="bi_section">
                            <h4 class="">{{ t.Bi.txt }}</h4>
                            <span><img :src="isMobile ? t.Bi.imgMo : t.Bi.img" :alt="t.Bi.alt"></span>
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
    name: "gsrbr08",
    props: {
        lang: { type: String, default: "ko" }
    },
    data() {
        return {
            isMobile: false,
            langData: {
                ko: {
                    Visual: { // 대문자 유지
                        img: require("@/assets/images/dummy/gsrbr07.png"),
                        imgMo: require("@/assets/images/dummy/gsrbr07_mo.png"),
                        alt: "모바일 팝으로 GS 브랜드를 더 편리하게 결제하세요!",
                        subContent_1: "모바일 팝으로",
                        subContent_2: "GS 브랜드를 더 편리하게",
                        subContent_3: "결제하세요!",
                    },
                    HopageLink: `https://www.gsrbr.com/`,
                    HopageText: `홈페이지`,
                    SubTitle: `브랜드 소개`,
                    SubContent_1: `결제, 교통, 포인트 적립을 하나의 카드로 간편하게. `,
                    SubContent_2: `다양한 결제 수단과 결합된 팝카드만의 차별화된 혜택으로 더 크게 적립하고,<br/> 더 합리적으로 소비하세요.`,
                    Bi: {
                        txt: `BI 로고`,
                        img: require("@/assets/images/dummy/gsrbr07_bi.png"),
                        imgMo: require("@/assets/images/dummy/gsrbr07_bi_mo.png"),
                        alt: "Real price BI 이미지"
                    },
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
.gsrbr07 { width: 100%; position: relative; display: block; }
.cont_inner { width: 100%; max-width: 1420px; margin: 0 auto; padding: 0 20px; }
img {width:100%;}
h4 {margin-bottom:40px; font-size:32px;}

/* Visual Section */
.visual_section { width:100%; position: relative; overflow: hidden; }
.visual_img { width: 100%; height: auto; }
.visual_img img { width: 100%; display: block; }
.visual_content { position: absolute; top: 50%; left: 0; transform: translateY(-50%); width: 100%; z-index: 2; }
.text_box span {margin-bottom:10px; color:#fff; font-size:72px; font-weight:700; display: block;  }

/* body_wrap Section */
.body_wrap .cont_area {padding:10.41%; background:#F8F8F8;}
.body_wrap .cont_inner h3 {margin-bottom:16px; color:#161616; font-size:48px; font-weight:700;}
.body_wrap .cont_area .cont_inner ul {margin-bottom:40px; padding:50px; background:#fff; border-radius:12px;}
.body_wrap .cont_area .cont_inner h3 + div {margin-bottom:60px; position:relative;}
.body_wrap .cont_area .cont_inner h3 + div a {font-size:16px; position:absolute; right:0; bottom:0; display:flex; align-items:center; gap:8px;}
.body_wrap .cont_area .cont_inner h3 + div a::before {width: 24px; height: 24px; background-color: red; content: ''; display:inline-block;}
.body_wrap .cont_area .cont_inner h3 + div p {color:#161616; font-size:24px; font-weight:600; line-height:1.3;}
.bi_section {margin-top:0px !important;}
.bi_section {width:100%; margin-top:60px;}
.bi_section span {widows:100%; display:block;}
.bi_section span img {width:100%; display:block; object-fit:cover;}
ul li strong {margin-bottom:12px; color:#A4A4B0; font-size:20px; font-weight:700; display:block;}
ul li strong br {display:none;}


/* Bottom Buttons */
.bottom_btns { width: 100%; margin-top: 100px; text-align: left; padding-bottom: 100px; }
.btn_list_back { background: transparent; padding: 0; border: 0; cursor: pointer; }
.btn_list_back span { color: #161616; font-size: 20px; display: flex; align-items: center; gap: 12px; }
.btn_list_back span::before { width: 16px; height: 16px; background-color: red; content: ''; display: inline-block; }
.btn_mid.border {display:none;}
.bottom_btns + .btn_big.border {display:none;}

@media screen and (max-width: 1024px) {
    .body_wrap .cont_area {padding:10.41% 20px;}
    .body_wrap .cont_inner:nth-of-type(2) ul {width:100%; display:flex; flex-direction:column; gap:20px}
    .body_wrap .cont_inner:nth-of-type(2) ul li {width:100%;}
    .body_wrap .cont_inner:nth-of-type(2) ul li img {width:100%; display:block;}
    .body_wrap .cont_area .cont_inner h3 + div a {right:auto; left:0; bottom:-40px;}
    .bi_section {padding:0px;}
}
@media screen and (max-width: 767px) {
    h4 {margin-bottom:30px; font-size:18px;}
    .text_box span {margin-bottom:10px; color:#fff; font-size:28px; font-weight:700; text-align:center; display: block;  }
    .body_wrap .cont_area {padding:60px 0px;}
    .bi_section {padding:0px;}
    .body_wrap .cont_inner h3 {margin-bottom:16px; color:#161616; font-size:24px; font-weight:700;}
    .body_wrap .cont_area .cont_inner ul {padding:30px; display:flex; justify-content:space-between; align-items:flex-start;}
    .body_wrap .cont_area .cont_inner ul li p {color:#161616; font-size:18px; font-weight:400; line-height:1.5;}
    .body_wrap .cont_inner:nth-of-type(2) {padding-top:80px; padding-bottom:80px;}
    .body_wrap .cont_area .cont_inner h3 + div {margin-bottom:80px;}
    .body_wrap .cont_area .cont_inner h3 + div p {font-size:16px; font-weight:400; line-height:1.3;}
    .body_wrap .cont_area :deep(.cont_inner) h3 + div p br {display:none;}
    .body_wrap .cont_area .cont_inner h3 + div a {right:auto; left:0; bottom:-40px;}
    ul li strong {font-size:16px;}
    ul li strong br {display:block !important;}
    .btn_list_back span {font-size:16px;}
    .bottom_btns {display:none;}
    .bottom_btns + .btn_big.border {margin-top:0px; margin-bottom:80px; display:flex; justify-content: center;}
}
</style>