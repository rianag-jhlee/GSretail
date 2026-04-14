<template>
    <div class="modal_cont gsrbr0204">
        <div class="modal_header">
            {{ t.MainTitle }}
            <a href="#none" @click="closeModal" class="btn_close">닫기</a>
        </div>

        <div class="modal_content">
            <div class="intro_section">
                <h3 class="sub_title">{{ t.SubTitle }}</h3>
                <div class="desc_box">
                    <p class="desc_text" v-html="t.DescText"></p>
                    <p class="desc_info">{{ t.SizeInfo }}</p>
                </div>
                <p class="notice_text">{{ t.NoticeText }}</p>
            </div>

            <div class="consult_grid">
                <div v-for="(region, idx) in t.RegionData" :key="idx" class="region_card">
                    <div class="card_header">
                        <strong class="region_name">{{ region.name }}</strong>
                        <Buttons 
                            type="button" 
                            class="btn_big btn_icon after gray" 
                            @click="handleApply(region.name)"
                        >
                            {{ t.BtnApply }}
                        </Buttons>
                    </div>
                    <p class="region_districts" v-if="region.districts">
                        {{ region.districts }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import modal from "@/assets/js/modal";
import Buttons from "@/components/Buttons.vue";

export default {
    name: "gsrbr0204",
    components: {
        Buttons
    },
    data() {
        return {
            langData: {
                ko: {
                    MainTitle: "입지제안",
                    SubTitle: "입지 1:1 상담",
                    DescText: "GS더프레시 입지에 대한 상담을 지역별 담당자들이 1:1 맞춤 상담 해드립니다.<br/>상담신청을 남겨주시면 담당자가 확인 후 연락드립니다.",
                    SizeInfo: "(규모 : 전용면적 60평 이상)",
                    NoticeText: "*주말/연휴에는 즉시 응답이 어려울 수 있는 점 양해 부탁드립니다.",
                    BtnApply: "상담신청",
                    RegionData: [
                        { name: "서울특별시 서부권", districts: "관악구, 동작구, 영등포구, 은평구, 서대문구, 강서구, 종로구, 중구, 마포구, 용산구, 양천구, 구로구, 금천구" },
                        { name: "서울특별시 동부권", districts: "강동구, 성동구, 송파구, 노원구, 도봉구, 강북구, 광진구, 성북구, 중랑구, 동대문구, 서초구, 강남구" },
                        { name: "경기 서북권", districts: "김포시, 파주시, 고양시, 부천시, 광명시" },
                        { name: "경기 남서권", districts: "수원시, 화성시, 평택시, 오산시, 안성시, 시흥시, 안산시, 의왕시, 안양시, 군포시" },
                        { name: "경기 동북권", districts: "용인시, 성남시, 광주시, 이천시, 여주시, 양주시, 의정부시, 동두천시, 포천시, 연천군, 남양주시, 구리시, 가평군, 양평군, 과천시, 하남시" },
                        { name: "인천광역시", districts: "" },
                        { name: "부산광역시", districts: "" },
                        { name: "경상남도", districts: "" },
                        { name: "경상북도", districts: "" },
                        { name: "대구광역시", districts: "" },
                        { name: "충청남도", districts: "" },
                        { name: "충청북도", districts: "" },
                        { name: "전라남도", districts: "" },
                        { name: "전라북도", districts: "" },
                        { name: "강원도", districts: "" },
                        { name: "대전광역시", districts: "" },
                        { name: "울산광역시", districts: "" },
                        { name: "세종특별자치시", districts: "" }
                    ]
                }
            }
        };
    },
    computed: {
        t() {
            return this.langData.ko;
        }
    },
    methods: {
        closeModal(event) {
            modal.close(event.currentTarget);
        },
        handleApply(regionName) {
            console.log(regionName + " 상담 신청 클릭");
        }
    }
};
</script>

<style scoped>
.modal_header { flex-shrink: 0; display: flex; align-items: center; justify-content: space-between; padding-bottom: 40px; font-family: "Pretendard", Helvetica; font-weight: 700; font-size: 40px; color: #161616; border-bottom: 0; }
.modal_header { display: flex; align-items: center; justify-content: space-between; padding-bottom: 40px; font-family: "Pretendard", Helvetica; font-weight: 700; font-size: 40px; color: #161616; border-bottom: 0; }
.intro_section { margin-bottom: 56px; display: flex; flex-direction: column; gap: 16px; }
.sub_title { font-family: "Pretendard", Helvetica; font-weight: 700; font-size: 32px; color: #161616; }
.desc_box { display: flex; flex-direction: column; gap: 4px; }
.desc_text { font-family: "Pretendard", Helvetica; font-size: 18px; line-height: 1.4; color: #161616; }
.desc_info { font-family: "Pretendard", Helvetica; font-size: 18px; color: #67676f; }
.notice_text { font-family: "Pretendard", Helvetica; font-size: 16px; color: #fb6432; }
.consult_grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px 24px; padding-top: 32px; border-top: 1px solid #161616; }
.region_card { display: flex; flex-direction: column; gap: 16px; padding-bottom: 32px; border-bottom: 1px solid #e5e5e9; }
.card_header { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.region_name { font-family: "Pretendard", Helvetica; font-weight: 700; font-size: 18px; color: #161616; }
.region_districts { font-family: "Pretendard", Helvetica; font-size: 14px; line-height: 1.4; color: #67676f; }
@media screen and (max-width: 1024px) {
    .consult_grid { grid-template-columns: repeat(1, 1fr); } 
    .modal_cont.gsrbr0204 { padding: 30px 20px; } 
}
</style>