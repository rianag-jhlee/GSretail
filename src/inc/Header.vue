<template>
    <header id="header">
        <div class="inner">
            <h1><img class="CI" src="@/assets/images/common/h1_logo.png" /></h1>

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
            <div class="quick">
                <ul v-if="lang != 'en'"><!-- 영문에서 노출 안되도록 -->
                    <li><a href="#none" target="_blank">채용안내</a></li>
                    <li><a href="#none" target="_blank">입점상담</a></li>
                    <li><a href="#none" target="_blank">제휴/협력문의</a></li>
                    <li><a href="#none" target="_blank">고객센터</a></li>
                    <li><a href="#none">GS리테일</a>
                        <ul>
                            <li>
                                <strong>온라인 브랜드</strong>
                                <a href="#none">GS SHOP</a>
                                <a href="#none">팝카드</a>
                                <a href="#none">우리동네 딜리버리</a>
                            </li>
                            <li>
                                <strong>오프라인 브랜드</strong>
                                <a href="#none">GS25</a>
                                <a href="#none">GS THE FRESH</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <!-- select language -->
                <Inputs type="checkbox" isswitch="true" text="ENG" v-model="onChangeLang" /><!-- language test -->
                <!-- <dl class="language">
                    <dt><button >{{ lang === 'ko' ? 'language' : 'EN' }}</button></dt>
                    <dd><a :href="lang === 'ko' ? 'http://www.gsretail.com/gsretail/en/global/gsretail-main' : 'http://www.gsretail.com/gsretail/ko/company'" target="_blank">{{ lang === 'ko' ? 'GS리테일 ENG' : 'KO' }}</a></dd>
                </dl> -->
                <!-- //select language -->
            </div>
            <!-- //quick -->
        </div>
    </header>
</template>

<script>
import Inputs from "@/components/Inputs.vue";

import menuEn from "@/assets/language/menu/menu.en.json";
import menuKo from "@/assets/language/menu/menu.ko.json";
import { computed } from "vue";

export default {
    name: "Header",
    components: {
        Inputs,
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
        const onChangeLang = computed({
            get: () => props.lang === "en",
            set: (val) => emit("change-lang", val ? "en" : "ko")
        });

        return {
            menuList,
            getLink,
            handleMouseEnter,
            handleMouseLeave,
            setFocus,
            removeFocus,

            onChangeLang, //language change
        };
    },
};
</script>

<style></style>