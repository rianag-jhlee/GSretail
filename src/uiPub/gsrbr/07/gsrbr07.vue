<template>
    <div class="gsrbr07" v-if="t">
        <section class="visual_section top_visual" ref="visualSection">
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
                        <p v-html="t.SubContent_1"></p>
                        <!-- <p v-html="t.SubContent_2"></p> -->
                        <a :href="t.HopageLink" class="btn_website" target="_blank">{{ t.HopageText }}</a><!-- 26.05.12 Edit 이종환 : 클래스 추가 -->
                    </div>
                    <ul>
                        <li class="bi_section">
                            <h4 class="">{{ t.Bi.txt }}</h4>
                            <span><img :src="isMobile ? t.Bi.imgMo : t.Bi.img" :alt="t.Bi.alt"></span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- <div class="cont_inner"> -->
                <!-- 26.05.11 Edit 이종환 : 하단 목록 버튼 통일 -->
                <div class="bottom_btns">
                    <button class="btn_back" @click="handleBack">{{ t.ListBack }}</button>
                </div>
                <!-- //26.05.11 Edit 이종환 : 하단 목록 버튼 통일 -->
            <!-- </div> -->
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
                    HopageLink: `http://www.popcard.co.kr/popcard/ko/main`,
                    HopageText: `홈페이지`,
                    SubTitle: `멤버십팝카드 소개`,
                    SubContent_1: `GS ALL 멤버십(GS ALL 포인트)카드와 팝카드가 결합되어 GS25, GS THE FRESH에서 결제와 동시에<br/> 포인트가 적립되고 800여 온라인 사용처(쇼핑, 게임 등)에서 결제가<br/> 가능한 혜택이 많은 선불카드입니다.<br/> (교통기능은 없으며, 회원등록을 하셔야 적립된 포인트 사용이 가능합니다.) `,
                    // SubContent_2: `다양한 결제 수단과 결합된 팝카드만의 차별화된 혜택으로 더 크게 적립하고,<br/> 더 합리적으로 소비하세요.`,
                    Bi: {
                        txt: `BI 로고`,
                        img: require("@/assets/images/dummy/gsrbr07_bi.png"),
                        imgMo: require("@/assets/images/dummy/gsrbr07_bi_mo.png"),
                        alt: "Real price BI 이미지"
                    },
                    ListBack:`목록으로 돌아가기`
                },
                en: {
                    Visual: { // 대문자 유지
                        img: require("@/assets/images/dummy/gsrbr07.png"),
                        imgMo: require("@/assets/images/dummy/gsrbr07_mo.png"),
                        alt: "Pay more conveniently across GS brands with Mobile POP!"/* 260604 번역 */,
                        subContent_1: "With Mobile POP"/* 260604 번역 */,
                        subContent_2: "GS brands made more convenient"/* 260604 번역 */,
                        subContent_3: "Make your payment!"/* 260604 번역 */,
                    },
                    HopageLink: `http://www.popcard.co.kr/popcard/ko/main`,
                    HopageText: `Homepage`,
                    SubTitle: `Membership POP Card Introduction`/* 260604 번역 */,
                    SubContent_1: `The GS ALL Membership (GS ALL Points) card and POP Card are combined so that at GS25 and GS THE FRESH, simultaneously with payment<br/> Points are earned, and payment can be made at over 800 online merchants (shopping, games, etc.)<br/> It is a prepaid card with many available benefits.<br/> (There is no transit function, and you must register as a member to use accumulated points.) `/* 260604 번역 */,
                    // SubContent_2: `다양한 결제 수단과 결합된 팝카드만의 차별화된 혜택으로 더 크게 적립하고,<br/> 더 합리적으로 소비하세요.`,
                    Bi: {
                        txt: `BI Logo`/* 260604 번역 */,
                        img: require("@/assets/images/dummy/gsrbr07_bi.png"),
                        imgMo: require("@/assets/images/dummy/gsrbr07_bi_mo.png"),
                        alt: "REAL price BI Image"/* 260604 번역 */
                    },
                    ListBack:`Back to Brand List`
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
img {width:100%;}
h4 {margin-bottom:40px; font-size:32px;}

/* Visual Section */
.visual_section { width:100%; position: relative; overflow: hidden; }
.visual_img { width: 100%; height: auto; }
.visual_img img { width: 100%; display: block; }
.visual_content { position: absolute; top: 50%; left: 0; transform: translateY(-50%); width: 100%; z-index: 2; }
.text_box span {margin-bottom:10px; color:#fff; font-size:72px; font-weight:700; display: block;  }

/* body_wrap Section */
.body_wrap .cont_area {padding:10.41% 0; background:#F8F8F8;}
.body_wrap .cont_inner h3 {margin-bottom:16px; color:#161616; font-size:48px; font-weight:700;}
.body_wrap .cont_area .cont_inner ul {margin-bottom:40px; padding:50px; background:#fff; border-radius:12px;}
.body_wrap .cont_area .cont_inner h3 + div {margin-bottom:60px; position:relative;}
.body_wrap .cont_area .cont_inner h3 + div a {position:absolute; right:0; bottom:0;}
.body_wrap .cont_area .cont_inner h3 + div p {color:#161616; font-size:24px; font-weight:600; line-height:1.3;}
.bi_section {margin-top:0px !important;}
.bi_section {width:100%; margin-top:60px;}
.bi_section span {widows:100%; display:block;}
.bi_section span img {width:100%; display:block; object-fit:cover;}
ul li strong {margin-bottom:12px; color:#A4A4B0; font-size:20px; font-weight:700; display:block;}
ul li strong br {display:none;}


/* Bottom Buttons */
.bottom_btns { max-width: 1460px; margin: 100px auto 0; padding:0 20px; text-align: left;}

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
    .body_wrap .cont_area .cont_inner h3 + div a {font-size:1.4rem; right:auto; left:0; bottom:-40px;}
    ul li strong {font-size:16px;}
    ul li strong br {display:block !important;}
    .btn_list_back span {font-size:16px;}
    .bottom_btns {display:none;}
}
</style>