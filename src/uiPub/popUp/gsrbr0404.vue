<template>
    <div class="modal_cont gsrbr0601">
        <div class="modal_header">
            {{ t.MainTitle }}
            <a href="#none" @click="closeModal" class="btn_close">닫기</a>
        </div>

        <div class="modal_content">
            <section class="gs25_event">
                <span><img :src="isMobile ? t.sub1.imgMo : t.sub1.img" :alt="t.sub1.alt"></span>
                <h4>{{ t.sub_Title1 }}</h4>
                <span>{{t.sub_desc1 }}</span>
                <p v-html="t.sub_detail_1"></p>
                <ul class="event_icon_list">
                    <li v-for="(img, idx) in t.iconsrc" :key="idx">
                        <p class="img_box"><img :src="img" :alt="t.icontxt[idx]"></p>
                        <em>{{ t.icontxt[idx] }}</em>
                    </li>
                </ul>
                <i>{{t.app_desc}}</i>
            </section>
            <section class="gsfresh_event">
                <span><img :src="isMobile ? t.sub2.imgMo : t.sub2.img" :alt="t.sub2.alt"></span>
                <h4>{{ t.sub_title2 }}</h4>
                <span>{{ t.sub_desc2 }}</span>
                <p v-html="t.sub_detail_2"></p>
            </section>
        </div>
    </div>
</template>

<script>
import modal from "@/assets/js/modal";

export default {
    name: "gsrbr0404",
    components: {
    },
    data() {
        return {
            langData: {
                ko: {
                    MainTitle: "행사/이벤트",
                    sub_Title1: "GS25",
                    sub_desc1:"'우리동네GS'에서만 만나볼 수 있는 파격 혜택!",
                    sub_detail_1:`<em>1+1, 2+1, 덤증정, POP할인 상품들을 우리동네GS앱에서도 구매하실 수 있습니다.</em><em>온라인앱 전용 행사 상품들도 빨빠르게 확인하세요!</em>`,
                    sub1 : {
                        img: require("@/assets/images/dummy/gsrbr0404_1.png"),
                        imgMo: require("@/assets/images/dummy/gsrbr0404_1_mo.png"),
                        alt:`GS25 우리동네GS'에서만 만나볼 수 있는 파격 혜택!`
                    },
                    sub2 : {
                        img: require("@/assets/images/dummy/gsrbr0404_2.png"),
                        imgMo: require("@/assets/images/dummy/gsrbr0404_2_mo.png"),
                        alt:`GS THE FRESH 매주 달라지는 행사 미리보기`
                    },
                    iconsrc:[
                        require("@/assets/images/dummy/gsrbr0404_icon_1.png"),
                        require("@/assets/images/dummy/gsrbr0404_icon_2.png"),
                        require("@/assets/images/dummy/gsrbr0404_icon_3.png"),
                        require("@/assets/images/dummy/gsrbr0404_icon_4.png"),
                    ],
                    icontxt: [`1+1`, `2+1`, `덤증정`, `가격할인`],
                    sub_title2: "GS THE FRESH",
                    sub_desc2:"매주 달라지는 행사 미리보기",
                    sub_detail_2:`<em>단골 매장에서 진행하는 주간 행사와 추천 상품을 확인할 수 있습니다.</em>`,
                    app_desc:`온라인앱 전용 행사 상품들도 발 빠르게 확인하세요!`
                }
            }
        };
    },
    computed: {
        t() { return this.langData[this.lang] || this.langData.ko; }
    },
    mounted() {
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkMobile);
    },
    methods: {
        checkMobile() { this.isMobile = window.innerWidth < 768; },
        closeModal(event) { modal.close(event.currentTarget); },
    }
};
</script>

<style scoped>
.modal_header { flex-shrink: 0; display: flex; align-items: center; justify-content: space-between; padding-bottom: 40px; font-family: "Pretendard", Helvetica; font-weight: 700; font-size: 40px; color: #161616; border-bottom: 0; }
.modal_content { flex: 1; overflow-y: auto; padding-right: 10px; }
h3 { margin-bottom: 60px; color: #161616; font-size: 32px; font-weight: 700; }
h4 {margin-top:24px; color:#161616; font-size:32px; font-weight:700;}
span {margin:8px 0; color:#161616; font-size:18px; font-weight:700; display:block;}
span img {max-width:100%; object-fit:cover;}
section > p {display:flex; flex-direction:column; gap:4px;}
:deep(.gs25_event p em), :deep(.gsfresh_event p em) { color:#67676F; font-size:16px;}
.event_icon_list { display: flex; flex-wrap: wrap; gap: 8px; width: 100%; margin-top: 40px; margin-bottom: 24px; list-style: none; }
.event_icon_list li { display: flex; flex-direction: column; align-items: center; justify-content: space-between; width: calc((100% - (8px * 3)) / 4); }
.event_icon_list li .img_box { display: flex; align-items: center; justify-content: center; width: 100%; height: 142px; padding: 20px; background: #F8F8F8; border-radius: 12px; text-align: center; }
.event_icon_list li .img_box img { max-width: 64px; max-height: 64px; object-fit: contain; }
.event_icon_list li em { margin-top: 8px; color: #67676F; font-size: 16px; font-style: normal; }
i {padding:16px 16px 16px 42px; color:#161616; font-size:16px; background:#F8F8F8; border-radius:6px; display:flex; position:relative;}
i::before {content:''; width:20px; height:20px; background:red; position:absolute; top:50%; left:16px; display:inline-block; transform:translateY(-50%);}
section.gsfresh_event {margin-top:80px;}

/* 반응형 */

@media screen and (max-width: 1024px) {
    .modal_header { font-size: 32px; }
    /* 태블릿 환경 필요시 2열 조정 */
    .event_icon_list li { width: calc((100% - 8px) / 2); }
}

@media screen and (max-width: 767px) {
    .modal_header { font-size:18px; }
    /* 모바일 2열 유지 및 간격 조정 */
    .event_icon_list { gap: 12px 8px; }
    .event_icon_list li { width: calc((100% - 8px) / 2); }
    .event_icon_list li .img_box {padding: 33px; }
    h4 {margin-top:24px; color:#161616; font-size:24px; font-weight:700;}
    span {margin:8px 0; color:#161616; font-size:18px; font-weight:700; display:block;}
    :deep(.gs25_event p em), :deep(.gsfresh_event p em) {line-height:1.5;}
    i {font-size:12px;}
}
</style>