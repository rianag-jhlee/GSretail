<template>
    <div class="modal_cont gsrbr0601">
        <div class="modal_header">
            {{ t.MainTitle }}
            <a href="#none" @click="closeModal" class="btn_close">닫기</a>
        </div>

        <div class="modal_content">
            <section class="gs25_event">
                <h4>{{ t.sub_Title1 }}</h4>
                <span>{{t.sub_desc1 }}</span>
                <span><img :src="isMobile ? t.sub1.imgMo : t.sub1.img" :alt="t.sub1.alt"></span>
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
                    MainTitle: "재고찾기",
                    sub_Title1: "품절 걱정 끝! 전국 매장 실시간 재고 확인",
                    sub_desc1:"전국 GS25 · GS THE FRESH 매장별,\n 원하는 상품의 실시간 재고 현황 및 잔여 수량을 간편하게 확인할 수 있습니다.",
                    sub1 : {
                        img: require("@/assets/images/dummy/gsrbr0403.png"),
                        imgMo: require("@/assets/images/dummy/gsrbr0403_mo.png"),
                        alt:`재고찾기 헛걸음 방지! 재고 찾기 서비스`
                    },
                },
                en: {
                    MainTitle: "Stock Finder",
                    sub_Title1: "No more worrying about sold-out items! Real-time stock checks at stores nationwide"/* 260604 번역 */,
                    sub_desc1:"For each GS25 and GS THE FRESH store nationwide,\n you can easily check the real-time stock status and remaining quantity of the products you want."/* 260604 번역 */,
                    sub1 : {
                        img: require("@/assets/images/dummy/gsrbr0403.png"),
                        imgMo: require("@/assets/images/dummy/gsrbr0403_mo.png"),
                        alt:`No more wasted trips checking for stock! The Find Stock service`/* 260604 번역 */
                    },
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
h4 {color:#161616; font-size:32px; font-weight:700;}
span {margin:16px 0 40px; color:#161616; font-size:18px; white-space:pre-line; display:block;}
span img {max-width:100%; object-fit:cover;}


/* 반응형 */

@media screen and (max-width: 1024px) {
    .modal_header { font-size: 32px; }
}

@media screen and (max-width: 767px) {
    .modal_header { font-size:18px; }
    /* 모바일 2열 유지 및 간격 조정 */
    h4 {color:#161616; font-size:28px; font-weight:700;}
    span {margin:16px 0 40px; color:#161616; font-size:16px; display:block;}
}
</style>