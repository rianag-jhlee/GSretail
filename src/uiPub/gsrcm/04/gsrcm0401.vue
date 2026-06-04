<template>
    <div class="cont_inner">
        <header class="title_wrap">
            <h2>{{ t.pageTitle }}</h2>
        </header>

        <Tabs v-model="cTabIdx" :tab-items="t.tabs" tab-class="type_01" :tab-slide="true" />

        <div v-show="cTabIdx === 0" class="panel" :aria-label="t.tabs[0].item">
            <section class="sec_viewer">
                <h3 class="tit">{{ t.committee.introTitle }}</h3>
                <p class="desc">{{ t.committee.introDesc }}</p>
            </section>

            <section class="sec_viewer">
                <h3 class="tit">{{ t.committee.composeTitle }}</h3>
                <p class="desc">{{ t.committee.composeDesc }}</p>
            </section>

            <section class="sec_viewer sec_duty">
                <h3 class="tit">{{ t.committee.dutyTitle }}</h3>
                <ul>
                    <li v-for="(item, idx) in t.committee.dutyItems" :key="'duty-' + idx">{{ item }}</li>
                </ul>
            </section>

            <section class="sec_viewer">
                <h3 class="tit">{{ t.committee.scheduleTitle }}</h3>
                <p class="desc">{{ t.committee.scheduleDesc }}</p>
                <div class="button_wrap">
                    <Buttons
                        v-for="(btn, bIdx) in t.committee.downloadBtns"
                        :key="'dl-' + bIdx"
                        btn-class="btn_icon btn_big gray after"
                        @click="handleDownload(btn.link)"
                    >
                        {{ btn.text }}
                    </Buttons>
                </div>
            </section>

            <section class="sec_viewer sec_roster">
                <h3 class="tit_md">{{ t.committee.rosterTitle }}</h3>
                <ul>
                    <li v-for="(member, mIdx) in t.committee.members" :key="'member-' + mIdx">
                        <article>
                            <figure>
                                <img v-if="member.img" :src="member.img" :alt="member.name" />
                            </figure>
                            <div class="info">
                                <p>{{ member.role }}</p>
                                <strong>{{ member.name }}</strong>
                                <p class="org">{{ member.org }}</p>
                                <p class="position">{{ member.position }}</p>
                            </div>
                        </article>
                    </li>
                </ul>
            </section>
        </div>

        <div v-show="cTabIdx === 1" class="panel" :aria-label="t.tabs[1].item"></div>

        <div v-show="cTabIdx === 2" class="panel" :aria-label="t.tabs[2].item"></div>
    </div>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";
import Tabs from "@/components/Tabs.vue";
import Buttons from "@/components/Buttons.vue";

const props = defineProps({
    lang: { type: String, default: "ko" },
});

const langData = {
    ko: {
        pageTitle: "GS SHOP 시청자 관련",
        tabs: [
            { item: "시청자위원회" },
            { item: "시청자위원회 회의자료" },
            { item: "시청자의견 반영 결과 보고서" },
        ],
        committee: {
            introTitle: "소개",
            introDesc:
                "GS SHOP 시청자위원회는 방송법 제87조에 따라 설치된 법적 기구로서, 시청자의 권익을보호하고 방송의 공공성을 제도적으로 보완하기 위한 목적으로 운영됩니다.",
            composeTitle: "구성",
            composeDesc:
                "시청자위원은 각계의 시청자를 대표할 수 있는 사람으로서, 방송통신위원회 규칙이 정한 단체의 추천을 받아 시청자위원회의 위원으로 위촉됩니다.",
            dutyTitle: "직무와 권한",
            dutyItems: [
                "방송편성에 관한 의견제시 또는 시정요구",
                "방송 프로그램 내용에 관한 의견 제시 또는 시정요구",
                "GS SHOP의 자체 심의규정에 관한 의견 제시 또는 시정 요구",
                "기타 시청자 권익 보호와 침해 구제에 관한 의견 제시",
            ],
            scheduleTitle: "개최 시기",
            scheduleDesc: "매월 1회 정기 회의 개최",
            downloadBtns: [
                { text: "시청자위원회 운영규칙 다운로드", link: "#none" },
                { text: "시청자위원회 관련법규 다운로드", link: "#none" },
            ],
            rosterTitle: "명단",
            members: [
                { role: "위원장", name: "최정혜", org: "연세대학교", position: "경영대학 교수" },
                { role: "부위원장", name: "한명삼", org: "기아대책", position: "행복한나눔 본부장" },
                { role: "위원", name: "심재웅", org: "숙명여자대학교", position: "미디어학부 교수" },
                { role: "위원", name: "정사강", org: "이화여대", position: "커뮤니케이션 미디어연구소 교수" },
                { role: "위원", name: "신영수", org: "경북대학교", position: "법과대학 교수" },
                { role: "위원", name: "서현선", org: "한양대학교", position: "사회혁신 융합전공 겸임교수" },
                { role: "위원", name: "김민정", org: "충북대학교", position: "사회복지학과 교수" },
                { role: "위원", name: "김다래", org: "한국소비자단체협의회", position: "물가감시센터 팀장" },
                { role: "위원", name: "박상오", org: "법무법인 바른", position: "변호사" },
                { role: "위원", name: "김현호", org: "법무법인 이제", position: "변호사" },
            ],
        },
    },
};

const cTabIdx = ref(0);

const t = computed(() => langData[props.lang] || langData.ko);

function handleDownload(link) {
    if (link && link !== "#none") {
        window.open(link, "_blank");
    }
}
</script>

<style scoped>
.title_wrap { padding: 200px 0 100px; display: flex; flex-direction: column; }
.title_wrap > h2 { color: #161616; font-size: 7.2rem; font-weight: 700; line-height: 1.24; letter-spacing: -0.02em; text-align: center; }
.panel { padding-top: 80px; }
.sec_viewer + .sec_viewer { margin-top: 100px; }
.sec_viewer > h3.tit { margin: 0 0 16px; color: #161616; font-size: 4.8rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.sec_viewer > h3.tit_md { margin: 0 0 24px; color: #161616; font-size: 4rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
.sec_viewer > p.desc { margin: 0; color: #161616; font-size: 2.4rem; font-weight: 400; line-height: 1.5; letter-spacing: -0.01em; }
.sec_duty > ul { width: 100%; margin: 0; padding: 32px; list-style: none; background-color: #f8f8f8; border-radius: 12px; display: flex; flex-direction: column; gap: 16px; }
.sec_duty > ul > li { padding-left: 24px; color: #161616; font-size: 1.8rem; font-weight: 400; line-height: 1.4; letter-spacing: 0; position: relative; }
.sec_duty > ul > li::before { width: 16px; height: 16px; background: url("@/assets/images/common/icon_bullet_checkmark.png") 0 0 no-repeat; position: absolute; top: 4px; left: 0; content: ""; }
.sec_viewer > .button_wrap { width: 100%; margin: 16px 0 0; padding: 0; display: flex; flex-wrap: wrap; gap: 8px; }
.sec_roster > ul { width: 100%; margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); row-gap: 40px; column-gap: 28px;}
.sec_roster > ul > li { min-width: 0; padding-right: 28px; border-right: 1px solid #f2f2f4; }
.sec_roster > ul > li:nth-child(4n) { padding-right: 0; border-right: none; }
.sec_roster > ul > li > article { height: 100%; display: flex; flex-direction: column; }
.sec_roster > ul > li > article > figure { width: 100%; height: 160px; margin: 0; padding: 0; background-color: #f2f2f4; border-radius: 12px; overflow: hidden; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.sec_roster > ul > li > article > figure > img { width: 100%; height: 100%; object-fit: cover; }
.sec_roster > ul > li > article > .info { min-width: 0; display: flex; flex-direction: column; }
.sec_roster > ul > li > article > .info > p { margin: 32px 0 0; color: #161616; font-size: 1.6rem; font-weight: 700; line-height: 1.24; letter-spacing: 0; }
.sec_roster > ul > li > article > .info > strong { margin: 2px 0 0; color: #161616; font-size: 2.8rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.sec_roster > ul > li > article > .info > p.org { margin: 16px 0 0; color: #242428; font-size: 2rem; font-weight: 400; line-height: 1.35; letter-spacing: -0.01em; }
.sec_roster > ul > li > article > .info > p.org + p.position { margin: 0; color: #242428; font-size: 2rem; font-weight: 400; line-height: 1.35; letter-spacing: -0.01em; }
@media screen and (max-width: 1024px) {
    .sec_roster > ul { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .sec_roster > ul > li { padding-right: 28px; border-right: 1px solid #f2f2f4; }
    .sec_roster > ul > li:nth-child(4n) { padding-right: 28px; border-right: 1px solid #f2f2f4; }
    .sec_roster > ul > li:nth-child(2n) { padding-right: 0; border-right: none; }
}
@media screen and (max-width: 768px) {
    .title_wrap { display: none;}
    .panel { padding-top:60px; }
    .sec_viewer + .sec_viewer { margin-top: 80px; }
    .sec_viewer > h3.tit { margin-bottom: 8px; font-size: 2.4rem; line-height: 1.35;}
    .sec_viewer > p.desc { font-size: 1.8rem; line-height: 1.4; letter-spacing: 0; }
    .sec_duty > ul { padding: 32px; gap: 4px; }
    .sec_duty > ul > li { padding-left:20px; font-size: 1.4rem;line-height: 1.4;letter-spacing: -0.01em;}
    .sec_viewer > .button_wrap { margin-top: 24px; }
    .sec_viewer > .button_wrap :deep(.btn_big) { }
    
    .sec_roster > ul { grid-template-columns: 1fr; row-gap: 20px; }
    .sec_roster > ul > li { padding-right: 0; border-right: none; }
    .sec_roster > ul > li > article { min-height: 160px; flex-direction: row; align-items:flex-end; gap: 32px; }
    .sec_roster > ul > li > article > figure { width: 152px; height: 160px; }
    .sec_roster > ul > li > article > .info { flex: 1; }
    .sec_roster > ul > li > article > .info > p { margin: 0; font-size: 1.6rem; line-height: 1.24; }
    .sec_roster > ul > li > article > .info > strong { margin: 3px 0 0; font-size: 2.8rem; line-height: 1.35; }
    .sec_roster > ul > li > article > .info > p.org { margin: 3px 0 0; color: #242428; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .sec_roster > ul > li > article > .info > p.org + p.position { margin: 0; color: #242428; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
}
</style>
