<template>
    <div class="gsrbr08" v-if="t">
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
                        <p>{{ t.SubContent_2 }}</p>
                        <a :href="t.HopageLink" target="_blank">{{ t.HopageText }}</a>
                    </div>
                    <ul>
                        <li class="bi_section">
                            <h4 class="">{{ t.Bi.txt }}</h4>
                            <span><img :src="isMobile ? t.Bi.imgMo : t.Bi.img" :alt="t.Bi.alt"></span>
                        </li>
                        <li class="brand_mark">
                            <div>
                                <strong v-html="t.brand_mark_1.txt"></strong>
                                <p><img :src="isMobile ? t.brand_mark_1.imgMo : t.brand_mark_1.img" :alt="t.brand_mark_1.alt"></p>
                            </div>
                            <div>
                                <strong v-html="t.brand_mark_2.txt"></strong>
                                <p><img :src="isMobile ? t.brand_mark_2.imgMo : t.brand_mark_2.img" :alt="t.brand_mark_2.alt"></p>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li class="bi_color">
                            <h4 class="">{{ t.Color.title }}</h4>
                            <strong>{{ t.Color.sub_txt_1 }}</strong>
                            <div>
                                <dl>
                                    <dt v-html="t.Color.sub_desc_1"></dt>
                                    <dd v-html="t.Color.sub_desc_1_1"></dd>
                                </dl>
                                <dl>
                                    <dt v-html="t.Color.sub_desc_2"></dt>
                                    <dd v-html="t.Color.sub_desc_2_1"></dd>
                                </dl>
                            </div>
                        </li>
                        <li class="supp_color">
                            <strong>{{ t.Supporting_color.title }}</strong>
                            <div>
                                <dl>
                                    <dt v-html="t.Supporting_color.supp_tit1"></dt>
                                    <dd v-html="t.Supporting_color.supp_desc1"></dd>
                                </dl>
                                <dl>
                                    <dt v-html="t.Supporting_color.supp_tit2"></dt>
                                    <dd v-html="t.Supporting_color.supp_desc2"></dd>
                                </dl>
                                <dl>
                                    <dt v-html="t.Supporting_color.supp_tit3"></dt>
                                    <dd v-html="t.Supporting_color.supp_desc3"></dd>
                                </dl>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
            <div class="cont_inner">
                <div class="bottom_btns">
                    <button type="button" class="btn_list_back" @click="handleBack">
                        <span>{{ t.ListBack }}</span>
                    </button>
                </div>
                <a class="btn_big border">{{ t.ListBack }}</a>
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
                        img: require("@/assets/images/dummy/gsrbr08.png"),
                        imgMo: require("@/assets/images/dummy/gsrbr08_mo.png"),
                        alt: "고객의 일상을 더욱 특별하고 재미있게 유어스",
                        subContent_1: "고객의 일상을 ,",
                        subContent_2: "더욱 특별하고 재미있게",
                        subContent_3: "유어스",
                    },
                    HopageLink: `https://www.gsrbr.com/`,
                    HopageText: `홈페이지`,
                    SubTitle: `브랜드 소개`,
                    SubContent_1: `함께 더 재미있는 유어스는 좋은 품질과 합리적인 가치를 기본으로 하며,`,
                    SubContent_2: `오직 GS리테일에서만 만날 수 있는 라이프스타일 PB 브랜드입니다.`,
                    Bi: {
                        txt: `BI 로고`,
                        img: require("@/assets/images/dummy/gsrbr08_bi_logo_1.png"),
                        imgMo: require("@/assets/images/dummy/gsrbr08_bi_logo_1_mo.png"),
                        alt: "Real price BI 이미지"
                    },
                    brand_mark_1: {
                        txt: `기본형<br/> 브랜드마크`,
                        img: require("@/assets/images/dummy/gsrbr08_bi_logo_2.png"),
                        imgMo: require("@/assets/images/dummy/gsrbr08_bi_logo_2_mo.png"),
                        alt: "Real price BI 이미지"
                    },
                    brand_mark_2: {
                        txt: `프리미엄<br/> 브랜드마크`,
                        img: require("@/assets/images/dummy/gsrbr08_bi_logo_3.png"),
                        imgMo: require("@/assets/images/dummy/gsrbr08_bi_logo_3_mo.png"),
                        alt: "Real price BI 이미지"
                    },
                    Color: {
                        title: `BI 색상`,
                        sub_txt_1: `CORE COLORS`,
                        sub_desc_1: `YOUUS<br/> DEEP ORANGE`,
                        sub_desc_1_1 :`<p>PANTONE 7548 C</p><p>C 0 M 82 Y 100 K 0</p><p>R 255 G 77 B 0</p><p>#FF4D00</p>`,
                        sub_desc_2: `YOUUS<br/> LIGHT ORANGE`,
                        sub_desc_2_1 :`<p>PANTONE Orange 1655 C</p><p>C 0 M 20 Y 100 K 0</p><p>R 255 G 198 B 0</p><p>#FFC600</p>`,
                    },
                    Supporting_color: {
                        title: `SUPPORTING COLORS`,
                        supp_tit1: `YOUUS WHITE`,
                        supp_tit2: `YOUUS GOLD`,
                        supp_tit3: `YOUUS BLACK`,
                        supp_desc1:`<p>CMYK  0/0/0/0</p><p>RGB 255/255/255</p><p>#FFFFFF</p>`,
                        supp_desc2:`<p>CMYK  15/18/54/5</p><p>RGB 255/118/48</p><p>#CFBC81</p><p>PANTONE 4004 C</p>`,
                        supp_desc3:`<p>CMYK  0/0/0/100</p><p>RGB 0/0/0</p><p>#000000</p>`,
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
.gsrbr08 { width: 100%; position: relative; display: block; }
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
.body_wrap .cont_area .cont_inner ul {margin-bottom:40px; padding:50px; background:#fff;}
.body_wrap .cont_area .cont_inner h3 + div {margin-bottom:60px; position:relative;}
.body_wrap .cont_area .cont_inner h3 + div a {font-size:16px; position:absolute; right:0; bottom:0; display:flex; align-items:center; gap:8px;}
.body_wrap .cont_area .cont_inner h3 + div a::before {width: 24px; height: 24px; background-color: red; content: ''; display:inline-block;}
.body_wrap .cont_area .cont_inner h3 + div p {color:#161616; font-size:24px; font-weight:600; line-height:1.3;}
.bi_section {margin-top:0px !important;}
.bi_section, .brand_mark {width:100%; margin-top:60px;}
.bi_section span {widows:100%; display:block;}
.bi_section span img {width:100%; display:block; object-fit:cover;}
.brand_mark {display:flex; gap:20px;}
ul li strong {margin-bottom:12px; color:#A4A4B0; font-size:20px; font-weight:700; display:block;}
ul li strong br {display:none;}
.bi_color  div {display:flex; justify-content:space-between; gap:10px}
.bi_color  div dl {width:calc(100% / 2 - 10px); padding:24px; background:#FF4D00; border-radius:10px;}
.bi_color  div dl:last-of-type {background:#FFC600;}
.bi_color  div dl dt {margin-bottom:20px; color:#fff; font-size:20px; font-weight:700;}
:deep(.bi_color) div dl dd p {color:#fff !important; font-size:16px;}
.supp_color {margin-top:60px;}
.supp_color div {display:flex; gap:10px;}
.supp_color div dl {width:calc(100% / 4 - 10px);}
.supp_color div dl dt {margin-bottom:4px; font-size:16px;}
.supp_color div dl dt::before {content:''; width:100%; height:100px; margin-bottom:10px; border-radius:10px; box-sizing:border-box; display:block;}
.supp_color div dl:first-of-type dt:before {background:#fff; border:1px solid #E5E5E9;}
.supp_color div dl:nth-of-type(2) dt:before {background:#CFBC81;}
.supp_color div dl:last-of-type dt:before {background:#000;}
:deep(.supp_color) div dl dd {display:flex; flex-wrap:wrap; gap:10px;}
:deep(.supp_color) div dl:nth-of-type(2) dd p:last-of-type {margin-top:-6px}
.supp_color div dl dd * {color:#7C7C86; font-size:14px;}


/* Bottom Buttons */
.bottom_btns { width: 100%; margin-top: 100px; text-align: left; padding-bottom: 100px; }
.btn_list_back { background: transparent; padding: 0; border: 0; cursor: pointer; }
.btn_list_back span { color: #161616; font-size: 20px; display: flex; align-items: center; gap: 12px; }
.btn_list_back span::before { width: 16px; height: 16px; background-color: red; content: ''; display: inline-block; }
.btn_mid.border {display:none;}
.bottom_btns + .btn_big.border {display:none;}

@media screen and (max-width: 1024px) {
    .body_wrap .cont_area {padding:10.41% 20px;}
    .body_wrap .cont_area .cont_inner ul {flex-direction:column; align-items:flex-start; gap:16px}
    .body_wrap .cont_inner:nth-of-type(2) ul {width:100%; display:flex; flex-direction:column; gap:20px}
    .body_wrap .cont_inner:nth-of-type(2) ul li {width:100%;}
    .body_wrap .cont_inner:nth-of-type(2) ul li img {width:100%; display:block;}
    .body_wrap .cont_area .cont_inner h3 + div a {right:auto; left:0; bottom:-40px;}
    .bi_section {padding:0px;}
    .brand_mark div {width:calc(100% / 2 - 10px);}
}
@media screen and (max-width: 767px) {
    h4 {margin-bottom:30px; font-size:18px;}
    .text_box span {margin-bottom:10px; color:#fff; font-size:28px; font-weight:700; text-align:center; display: block;  }
    .body_wrap .cont_area {padding:60px 0px;}
    .bi_section {padding:0px;}
    :deep(.desc_section h3 br) {display:block !important;}
    .body_wrap .cont_inner h3 {margin-bottom:16px; color:#161616; font-size:24px; font-weight:700;}
    .body_wrap .cont_area .cont_inner ul {padding:30px; display:flex; justify-content:space-between; align-items:flex-start;}
    .body_wrap .cont_area .cont_inner ul li p {color:#161616; font-size:18px; font-weight:400; line-height:1.5;}
    .body_wrap .cont_inner:nth-of-type(2) {padding-top:80px; padding-bottom:80px;}
    .body_wrap .cont_area .cont_inner h3 + div {margin-bottom:80px;}
    .body_wrap .cont_area .cont_inner h3 + div p {font-size:16px; font-weight:400; line-height:1.3;}
    .body_wrap .cont_area .cont_inner h3 + div a {right:auto; left:0; bottom:-40px;}
    ul li strong {font-size:16px;}
    ul li strong br {display:block !important;}
    .desc_section br {display:block;}
    .desc_section p span {font-size:18px !important; font-weight:400 !important;}
    .desc_section p span br { display: none !important;}
    .btn_list_back span {font-size:16px;}
    .bottom_btns {display:none;}
    .bottom_btns + .btn_big.border {margin-top:0px; margin-bottom:80px; display:flex; justify-content: center;}
    :deep(.bi_color) div {flex-direction:column;}
    .bi_color {width:100%;}
    .bi_color div dl {width:100%;}
    .bi_color div dl dt {font-size:16px;}
    :deep(.supp_color) div dl dd {gap:0px;}
    :deep(.supp_color) div dl:nth-of-type(2) dd p:last-of-type {margin-top:0px !important;}
    :deep(.bi_color) div dl dd p {font-size:14px !important;}
    .supp_color div {display:flex; flex-wrap:wrap;}
    .supp_color div dl {width:calc(100% / 2 - 10px);}
}
</style>