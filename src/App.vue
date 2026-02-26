<template>
    <div id="wrap">
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

export default {
    name: "App",
    components: {
        Header,
        Footer,
    },
};
</script>

<style>
@import "@/assets/css/common.css";
</style>
