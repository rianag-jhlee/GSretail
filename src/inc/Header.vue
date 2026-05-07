<template>
    <header id="header">
        <div class="inner">
            <h1><a href="/">GS리테일</a></h1>

            <nav id="gnb_nav">
                <ul class="depth1">
                    <li v-for="item1 in chunkedMenuList" :key="item1.title" @focusin="setFocus($event)"
                        @focusout="removeFocus($event)" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">

                        <a :href="getLink(item1)" :target="item1.blank ? '_blank' : null">{{ item1.title }}</a>

                        <div class="depth2_wrap" v-if="item1.chunkedChildren && item1.chunkedChildren.length">
                            <ul class="depth2" v-for="(group, idx) in item1.chunkedChildren" :key="idx">
                                <li v-for="item2 in group" :key="item2.title">
                                    <!-- 3Depth 미노출로 span 제거 <span v-if="item2.children && item2.children.length">{{ item2.title }}</span> -->
                                    <a :href="getLink(item2)" :target="item2.blank ? '_blank' : null">{{
                                        item2.title }}</a>

                                    <ul class="depth3" v-if="item2.children && item2.children.length">
                                        <li v-for="item3 in item2.children" :key="item3.title">
                                            <a :href="getLink(item3)" :target="item3.blank ? '_blank' : null">{{
                                                item3.title }}</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>

            <!-- quick : 국문에서만 노출 -->
            <div class="quick_wrap">
                <ul class="quick">
                    <li v-for="item1 in quickMenu" :key="item1.title">
                        <strong v-if="item1.children && item1.children.length" @click="toggleMenu($event)">{{
                            item1.title }}</strong>
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
                    <li><button @click="changeLang('ko')" :class="{ 'current': currentLang === 'ko' }">KO</button></li>
                    <li><button @click="changeLang('en')" :class="{ 'current': currentLang === 'en' }">EN</button></li>
                </ul>
                <!-- //select language -->
            </div>
            <!-- //quick -->

            <!-- 26-04-30 이종환 Add -->
            <button class="btn_allMenu" @click="mo_menuToggle();">전체메뉴</button>
            <!-- //26-04-30 이종환 Add -->
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
            return item.blank ? item.path : `/${item.path}`;
        };

        // ✅ PC 여부 체크 함수 (768px 초과 시 true)
        const isDesktop = () => window.innerWidth > 768;

        // 기존 hover/focus 기능
        const handleMouseEnter = (e) => {
            // 768px 이하(모바일)이면 로직 실행 안 함
            if (!isDesktop()) return;

            e.currentTarget.classList.add("is-open");
            const header = document.getElementById("header");
            if (header) header.classList.add('add_bg');
        }
        const handleMouseLeave = (e) => {
            // 768px 이하(모바일)이면 로직 실행 안 함
            if (!isDesktop()) return;

            const li = e.currentTarget;
            if (!li.contains(e.relatedTarget)) {
                li.classList.remove("is-open");
            }

            const header = document.getElementById("header");
            if (header) header.classList.remove('add_bg');
        };

        // quick menu
        const quickMenu = computed(() => {
            return props.lang === "en" ? quickEn : quickKo;
        });

        // const openMenu = ref(null);
        const toggleMenu = (e) => {
            if (e.currentTarget.parentElement.classList.contains("is-open")) {
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
        // ✅ 현재 선택된 언어 상태 관리 (기본값 props.lang)
        const currentLang = ref(props.lang);

        // language change
        const changeLang = (lang) => {
            // 1. Vue 상태 업데이트 (원본 버튼의 클래스 변경)
            currentLang.value = lang;
            emit("change-lang", lang);

            // 2. [추가] 복제된 버튼들(GNB 내부) 클래스 수동 업데이트
            // resize로 인해 생성된 복제본(.is-cloned) 내부의 버튼들을 찾아 클래스를 직접 수정합니다.
            const clonedLanguageWrap = document.querySelector("#gnb_nav .quick_wrap.is-cloned .language");
            if (clonedLanguageWrap) {
                const buttons = clonedLanguageWrap.querySelectorAll("button");
                buttons.forEach((btn) => {
                    // 버튼 텍스트가 클릭한 언어와 일치하면 current 추가, 아니면 제거
                    if (btn.textContent.toLowerCase().trim() === lang.toLowerCase()) {
                        btn.classList.add("current");
                    } else {
                        btn.classList.remove("current");
                    }
                });
            }
        };

        /* header scroll show/hide */
        let lastScrollY = 0;

        const handleScroll = () => {
            const header = document.getElementById("header");
            const currentScrollY = window.scrollY;

            if (!header) return;

            // 1. [추가] 최상단 바운스 방지: 스크롤 위치가 0보다 작으면(iOS 반동) 무조건 노출
            if (currentScrollY <= 0) {
                header.classList.remove("hide");
                lastScrollY = currentScrollY;
                return;
            }

            const scrollHeight = document.documentElement.scrollHeight;
            const innerHeight = window.innerHeight;
            const buffer = 20;

            // 2. [추가] 스크롤 감도 설정: 최소 5px 이상 움직였을 때만 동작 (미세한 반동 무시)
            const tolerance = 5;
            const diff = currentScrollY - lastScrollY;

            const isBottom = innerHeight + currentScrollY >= scrollHeight - buffer;

            if (isBottom) {
                header.classList.remove("hide");
            } else if (Math.abs(diff) > tolerance) { // 설정한 감도보다 더 많이 움직였을 때만 실행
                if (currentScrollY > lastScrollY) {
                    // 아래로 스크롤 중
                    header.classList.add("hide");
                } else {
                    // 위로 스크롤 중
                    header.classList.remove("hide");
                }
            }

            lastScrollY = currentScrollY;
        };

        // 2depth 아이템을 3개씩 나누는 함수
        const chunkArray = (array, size) => {
            const result = [];
            for (let i = 0; i < array.length; i += size) {
                result.push(array.slice(i, i + size));
            }
            return result;
        };

        // 2depth가 그룹화된 메뉴 리스트
        const chunkedMenuList = computed(() => {
            return menuList.value.map(item => {
                if (item.children && item.children.length > 0) {
                    return {
                        ...item,
                        // children을 3개씩 묶은 이차원 배열로 변환
                        chunkedChildren: chunkArray(item.children, 3)
                    };
                }
                return item;
            });
        });

        /* mo 전체메뉴 펼침/닫힘 */
        const mo_menuToggle = () => {
            const header = document.getElementById("header");
            const body = document.body;

            if (header.classList.contains('mo_open')) {
                // ✅ 메뉴 닫기
                header.classList.remove('mo_open');

                // 1. 고정 해제 및 저장했던 위치로 복구
                const scrollY = body.style.top;
                body.style.removeProperty('overflow');
                body.style.removeProperty('position');
                body.style.removeProperty('top');
                body.style.removeProperty('width');

                // 2. 원래 스크롤 위치로 이동 (단위 제거 필요)
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            } else {
                // ✅ 메뉴 열기
                // 1. 현재 스크롤 위치 저장
                const currentScrollY = window.scrollY;

                // 2. 바디 고정 (현재 위치에서 멈추게 함)
                body.style.position = 'fixed';
                body.style.top = `-${currentScrollY}px`;
                body.style.width = '100%';
                body.style.overflow = 'hidden';

                header.classList.add('mo_open');
            }
        };

        /* resize */
        const handleResize = () => {
            const width = window.innerWidth;
            const gnbNav = document.getElementById("gnb_nav");
            const quickWrap = document.querySelector(".quick_wrap");

            // 중복 방지를 위해 이미 복제된 요소가 있는지 체크
            const clonedQuick = gnbNav?.querySelector(".quick_wrap.is-cloned");

            if (width <= 768) {
                // ✅ 768px 이하: GNB 안에 없으면 복제해서 추가
                if (gnbNav && quickWrap && !clonedQuick) {
                    const clone = quickWrap.cloneNode(true);
                    clone.classList.add("is-cloned"); // 식별을 위한 클래스 추가
                    gnbNav.appendChild(clone);
                }
            } else {
                // ✅ 768px 초과: 복제된 소스가 있으면 삭제
                if (clonedQuick) {
                    clonedQuick.remove();
                }
            }

            // 이전 답변에서 드린 header hide 로직 호출 (필요 시)
            // handleScroll(); 
        };

        onMounted(() => {
            window.addEventListener("scroll", handleScroll);
            window.addEventListener("resize", handleResize);
            handleResize(); // 초기 로드 시 1회 실행

            // ✅ 복제된 요소의 클릭 이벤트를 처리하기 위한 이벤트 위임
            const gnbNav = document.getElementById("gnb_nav");
            if (gnbNav) {
                gnbNav.addEventListener("click", (e) => {
                    // 1. 언어 변경 버튼 (KO/EN) 클릭 시
                    if (e.target.tagName === 'BUTTON' && e.target.closest('.language')) {
                        const langText = e.target.textContent.toLowerCase().trim(); // "ko" 또는 "en"
                        changeLang(langText);
                    }

                    // 2. 퀵메뉴 아코디언 (strong) 클릭 시
                    if (e.target.tagName === 'STRONG' && e.target.closest('.quick')) {
                        // 원본 toggleMenu와 유사한 로직 실행
                        const parent = e.target.parentElement;
                        if (parent.classList.contains("is-open")) {
                            parent.classList.remove("is-open");
                        } else {
                            parent.classList.add("is-open");
                        }
                    }
                });
            }
        });

        onUnmounted(() => {
            window.removeEventListener("resize", handleResize);
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
            currentLang,

            toggleMenu,
            chunkedMenuList, // 템플릿에서 사용할 새로운 변수
            mo_menuToggle,
            handleResize,
        };
    },
};
</script>

<style></style>