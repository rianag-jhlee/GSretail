<template>
    <div id="wrap">
        <!-- skip menu-->
        <ul id="skip_menu">
            <li><a href="#content_wrap">본문 바로가기</a></li>
            <li><a href="#gnb_nav">주메뉴 바로가기</a></li>
        </ul>

        <!-- header -->
        <Header />

        <!-- content -->
        <router-view></router-view>
        <!-- //content -->

        <!-- footer -->
        <Footer />
    </div>
</template>

<script>
import Header from "@/inc/Header.vue";
import Footer from "@/inc/Footer.vue";

import { onMounted } from "vue";

export default {
    name: "App",
    components: {
        Header,
        Footer,
    },
    setup() {
        onMounted(() => {
        });
    }
};
</script>

<style>
@import "@/assets/css/common.css";
@import "@/assets/css/ui.css";
</style>
