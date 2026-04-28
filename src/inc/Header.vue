<template>
    <header id="header">
        <div class="inner">
            <h1><a href="/">GS리테일</a></h1>

            <nav id="gnb_nav">
                <ul class="depth1">
                    <li v-for="item1 in menuList" :key="item1.title" @focusin="setFocus($event)"
                        @focusout="removeFocus($event)" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                        <!-- 1depth -->
                        <a :href="getLink(item1)" :target="item1.blank ? '_blank' : null">{{ item1.title }}</a>

                        <!-- 2depth -->
                        <ul class="depth2" v-if="item1.children && item1.children.length">
                            <li v-for="item2 in item1.children" :key="item2.title">
                                <span v-if="item2.children && item2.children.length">{{ item2.title }}</span>
                                <a v-else :href="getLink(item2)" :target="item2.blank ? '_blank' : null">{{ item2.title
                                }}</a>

                                <!-- 3depth -->
                                <ul class="depth3" v-if="item2.children && item2.children.length">
                                    <li v-for="item3 in item2.children" :key="item3.title">
                                        <a :href="getLink(item3)" :target="item3.blank ? '_blank' : null">{{ item3.title
                                        }}</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <!-- quick : 국문에서만 노출 -->
            <div class="quick_wrap">
                <ul class="quick">
                    <li v-for="item1 in quickMenu" :key="item1.title">
                        <strong v-if="item1.children && item1.children.length" @click="toggleMenu($event)">{{ item1.title }}</strong>
                        <a v-else :href="item1.path" :target="item1.blank ? '_blank' : null">{{ item1.title }}</a>
                        <ul v-if="item1.children && item1.children.length">
                            <li v-for="item2 in item1.children" :key="item2.title">
                                <strong v-if="item2.children && item2.children.length">{{ item2.title }}</strong>
                                <a v-else :href="getLink(item2)" :target="item2.blank ? '_blank' : null">{{ item2.title
                                }}</a>
                                <!-- 3depth -->
                                <ul class="depth3" v-if="item2.children && item2.children.length">
                                    <li v-for="item3 in item2.children" :key="item3.title">
                                        <a :href="getLink(item3)" :target="item3.blank ? '_blank' : null">{{ item3.title
                                        }}</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>

                <!-- select language -->
                <ul class="language">
                    <li><button @click="changeLang('ko')">KO</button></li>
                    <li><button @click="changeLang('en')">EN</button></li>
                </ul>
                <!-- //select language -->
            </div>
            <!-- //quick -->
        </div>
    </header>
</template>

<script>
import menuEn from "@/assets/language/menu/menu.en.json";
import quickEn from "@/assets/language/menu/quick.en.json";

import menuKo from "@/assets/language/menu/menu.ko.json";
import quickKo from "@/assets/language/menu/quick.ko.json";
import { ref, onMounted, onUnmounted, computed } from "vue";

export default {
    name: "Header",
    components: {
    },
    props: {
        lang: { type: String, default: "ko" }, // ko/en
    },
    emits: ["change-lang"], // language change for publish
    setup(props, { emit }) {
        // 메뉴 목록 computed
        const menuList = computed(() => {
            return props.lang === "en" ? menuEn : menuKo;
        });

        // 링크 처리: blank 또는 lang 기반 경로
        const getLink = (item) => {


            if (!item.path || item.path === "#none" || item.path === "#") return "#";
            return item.blank ? item.path : `/${props.lang}${item.path}`;
        };

        // 기존 hover/focus 기능
        const handleMouseEnter = (e) => e.currentTarget.classList.add("is-open");
        const handleMouseLeave = (e) => {
            const li = e.currentTarget;
            if (!li.contains(e.relatedTarget)) li.classList.remove("is-open");
        };

        // quick menu
        const quickMenu = computed(() => {
            return props.lang === "en" ? quickEn : quickKo;
        });

        // const openMenu = ref(null);
        const toggleMenu = (e) => {
            if(e.currentTarget.parentElement.classList.contains("is-open")){
                e.currentTarget.parentElement.classList.remove("is-open");
            } else {
                e.currentTarget.parentElement.classList.add("is-open");
            }
        }

        const setFocus = (e) => {
            const li = e.currentTarget;
            if (li.closeTimer) clearTimeout(li.closeTimer);
            li.closeTimer = setTimeout(() => {
                if (li.contains(document.activeElement)) li.classList.add("is_open");
                li.closeTimer = null;
            }, 150);
        };

        const removeFocus = (e) => {
            const li = e.currentTarget;
            if (li.closeTimer) clearTimeout(li.closeTimer);
            li.closeTimer = setTimeout(() => {
                if (!li.contains(document.activeElement)) li.classList.remove("is_open");
                li.closeTimer = null;
            }, 150);
        };

        // language change for publish
        const changeLang = (lang) => {
            emit("change-lang", lang);
        };

        /* header scroll show/hide */
        let lastScrollY = 0;

        const handleScroll = () => {
            const header = document.getElementById("header");
            const currentScrollY = window.scrollY;

            if (!header) return;

            const scrollHeight = document.documentElement.scrollHeight;
            const innerHeight = window.innerHeight;

            // ✅ 여유값 (10~50px 정도 추천)
            const buffer = 20;

            const isBottom =
                innerHeight + currentScrollY >= scrollHeight - buffer;

            if (isBottom) {
                header.classList.remove("hide");
            } else if (currentScrollY > lastScrollY) {
                header.classList.add("hide");
            } else {
                header.classList.remove("hide");
            }

            lastScrollY = currentScrollY;
        };

        onMounted(() => {
            window.addEventListener("scroll", handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener("scroll", handleScroll);
        });

        return {
            menuList,
            quickMenu,
            getLink,
            handleMouseEnter,
            handleMouseLeave,
            setFocus,
            removeFocus,

            changeLang, //language change

            toggleMenu,
        };
    },
};
</script>

<style></style>