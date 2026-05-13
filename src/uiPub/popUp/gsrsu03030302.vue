<template>
    <div class="modal_cont">
        <div class="modal_header">
            {{ t.MainTitle }}
            <a href="#none" @click="closeModal" class="btn_close">닫기</a>
        </div>

        <div class="modal_content">

            <div class="pop_space">
                <p class="intro_desc">{{ t.intro }}</p>

                <section class="fresh_guide_list">
                    <ol>
                        <li v-for="(step, index) in t.steps" :key="index">
                            <div>
                                <strong class="title">{{ step.title }}</strong>
                                <p class="desc">{{ step.content }}</p>
                            </div>
                        </li>
                    </ol>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import modal from "@/assets/js/modal";
import Buttons from "@/components/Buttons.vue";

export default {
    name: "gsrsu03030302",
    components: {
        Buttons
    },
    data() {
        return {
            langData: {
                ko: {
                    MainTitle: "맛, 선도 지킴이",
                    intro: '녹색구매활동을 통한 ESG 경영을 적극적으로 실천하기 위해 아래 방침을 준수한다.',
                    steps: [
                        { title: '첫째,', content: '적극적인 녹색구매활동을 통해 환경경영을 정착하고 확대하여 친환경의 가치를 고객에게 제공하는 등 친환경 선도 기업으로 사회적 책임과 역할을 다한다.' },
                        { title: '둘째,', content: '당사의 녹색구매방침을 파트너사/협력사에게 공유 및 장려한다.' },
                        { title: '셋째,', content: '모든 구매활동은 녹색구매를 우선으로 검토한다. 단, 녹색구매가 불가능한 경우(공급불가, 품질저하, 친환경/녹색 제품 부재 등)는 예외로 한다.' },
                        { title: '넷째,', content: '녹색구매활동에 대해 정기적인 모니터링 및 평가를 실시하며 개선필요 시 보완한다.' }
                    ]
                }
            }
        };
    },
    computed: { 
        t() { 
            // langData가 없거나, 해당 언어 데이터가 없을 경우를 모두 대비
            const data = this.langData[this.lang] || this.langData.ko;
            return data || {}; 
        } 
    },
    methods: {
        closeModal(event) { modal.close(event.currentTarget); }
    }
};
</script>

<style scoped>
.pop_space .intro_desc {color:#444; font-size:18px; line-height:26px;}
.fresh_guide_list {margin-top:35px;}
.fresh_guide_list ol li{height:140px;padding-left:145px;border-top:1px solid #DFDFDF}
.fresh_guide_list ol li:after{content:"";display:inline-block;height:100%;vertical-align:middle}
.fresh_guide_list ol li:first-child{background-image:url('@/assets/images/dummy/fresh_guide_img01.png'); background-repeat:no-repeat; background-position:0 center}
.fresh_guide_list ol li:nth-child(2){background-image:url('@/assets/images/dummy/fresh_guide_img02.png'); background-repeat:no-repeat; background-position:0 center}
.fresh_guide_list ol li:nth-child(3){background-image:url('@/assets/images/dummy/fresh_guide_img03.png'); background-repeat:no-repeat; background-position:0 center}
.fresh_guide_list ol li:nth-child(4){background-image:url('@/assets/images/dummy/fresh_guide_img04.png'); background-repeat:no-repeat; background-position:0 center}
.fresh_guide_list ol li:nth-child(5){background-image:url('@/assets/images/dummy/fresh_guide_img05.png'); background-repeat:no-repeat; background-position:0 center}
.fresh_guide_list ol li {display:flex;align-items:center;}
.fresh_guide_list ol li .title {margin-bottom:10px;font-size:18px;font-weight:700;color:#222}
.fresh_guide_list ol li .desc {font-size:15px;color:#444;line-height:25px}

/* 모달 레이아웃 */
.modal_cont {background-color: #fff;}
.modal_header {display:flex; justify-content:space-between; align-items:center; padding-bottom:40px; font-size:40px; font-weight:700; border-bottom:0;}
.modal_content {max-height:700px; overflow-y:auto; padding-right:10px;}
.btn-wrap {display:flex; justify-content:flex-end;}

/* 반응형 */
@media screen and (max-width: 767px) {
    .modal_header {font-size:18px; padding-bottom:24px;}
    .fresh_guide_list {margin-top:25px;}
    .fresh_guide_list ol li {height:auto; padding-top:20px;margin-top:20px;padding-left:90px;background-size:auto 80px;}
    .fresh_guide_list ol li .title {font-size:16px;}
}
</style>