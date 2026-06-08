<template>
    <div class="modal_cont gsrbr0601">
        <div class="modal_header">
            {{ t.MainTitle }}
            <a href="#none" @click="closeModal" class="btn_close">닫기</a>
        </div>

        <div class="modal_content">
            준비중
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
                    MainTitle: "사전예약"
                },
                en: {
                    MainTitle: "Pre-Order"
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
/* i {padding:16px 16px 16px 42px; color:#161616; font-size:16px; background:#F8F8F8; border-radius:6px; display:flex; position:relative;}
i::before {content:''; width:20px; height:20px; background:red; position:absolute; top:50%; left:16px; display:inline-block; transform:translateY(-50%);} */
section.gsfresh_event {margin-top:80px;}

/* Notice Bar */
.notice_bar { padding: 16px !important; background: #f8f8f8; border-radius: 6px;  display: flex; align-items: center; gap: 6px;}
.notice_bar p {margin-bottom:0px !important; padding-left: 26px; color: #161616; font-size: 16px; position: relative; }
.notice_bar p::before { content: ''; display: inline-block; position: absolute; top: 0; left: 0; width: 20px; height: 20px; background: url('@/assets/images/common/icon_set_20.png') -935px -24px no-repeat; }

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
    span img {height:200px;}
    :deep(.gs25_event p em), :deep(.gsfresh_event p em) {line-height:1.5;}
    .notice_bar p {font-size:12px !important; font-weight:400 !important;}
    .notice_bar p::before {top:-2px;}
}
</style>