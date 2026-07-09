<template>
    <div id="wrap">
        <!-- skip menu-->
        <ul id="skip_menu" v-if="!isGuide">
            <li><a href="#content_wrap">본문 바로가기</a></li>
            <li><a href="#gnb_nav">주메뉴 바로가기</a></li>
        </ul>

        <!-- header -->
        <Header v-if="!isGuide" :lang="lang" @change-lang="setLang" />

        <!-- content -->
        <router-view v-slot="{ Component }">
            <component :is="Component" :lang="lang" />
        </router-view>
        <!-- //content -->

        <!-- footer -->
        <!-- 260708 임시(영문 확인용): Footer.vue en 블록 미완성으로 EN 전환 시 크래시 → EN에서 Footer 잠시 숨김. 개발팀이 Footer en 블록 완성하면 이 조건 원복(&& lang !== 'en' 제거). -->
        <Footer v-if="!isGuide && lang !== 'en'" :lang="lang" />
    </div>
</template>

<script>
import Header from "@/inc/Header.vue";
import Footer from "@/inc/Footer.vue";

import { ref, computed } from "vue";
import { useRoute } from "vue-router";

export default {
    name: "App",
    components: { Header, Footer },
    setup() {
        const route = useRoute();
        const isGuide = computed(() => route.path.startsWith("/guide"));

        const lang = ref("ko"); // 기본 국문

        const setLang = (value) => {
            lang.value = value; // 'ko' or 'en'
        };

        return { isGuide, lang, setLang };
    }
};
</script>

<style>
@import "@/assets/css/common.css";
@import "@/assets/css/ui.css";
</style>
