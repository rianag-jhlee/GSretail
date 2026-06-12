<template>
    <header id="header" :class="{ sub_header: isSubPage }"><!-- 26.06.04 Edit 이종환 : sub페이지의 경우 h1숨김, 이전버튼 노출 기능 위한 sub_header 클래스 추가 -->
        <div class="inner">
            <h1><a href="/">GS리테일</a></h1>
            
            <!-- mo 이전 버튼 -->
            <div class="btn_prev_wrap">
                <button>이전</button>
                <strong>페이지명</strong>
            </div>
            <!-- //mo 이전 버튼 -->

            <nav id="gnb_nav">
                <ul class="depth1">
                    <!-- 26.06.12 Edit 정다희 : chunkedMenuList → menuList 변경 (depth2 3개씩 묶기 로직 삭제) -->
                    <!-- [개발] 현재 페이지 1depth — URL/라우트(또는 페이지 파라미터) 기준 해당 li에 class="current" 추가 (is-open과 동일 활성 스타일, ui.css 참고) -->
                    <!-- 예) <li class="current" ...> 또는 :class="{ current: isCurrentDepth1(item1) }" -->
                    <li v-for="item1 in menuList" :key="item1.title" @focusin="setFocus($event)"
                        @focusout="removeFocus($event)" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">

                        <!-- <a :href="getLink(item1)" :target="item1.blank ? '_blank' : null">{{ item1.title }}</a> -->
                        <!-- 26.06.01 Edit 이종환 : 모바일에서 depth1에 하위메뉴가 있으면 링크 없애고 하위메뉴 펼침닫힘 기능 -->
                        <!-- 26.06.12 Edit 정다희 : chunkedChildren → children 변경 -->
                        <a
                            :href="!isDesktop() && item1.children?.length
                                ? '#'
                                : getLink(item1)"
                            :target="item1.blank ? '_blank' : null"
                            @click="!isDesktop() && item1.children?.length ? toggleMenu($event) : null"
                        >
                            {{ item1.title }}
                        </a>

                        <!-- 26.06.12 Edit 정다희 : depth2_wrap을 a 밖 li 형제로 분리 (a 중첩 방지) -->
                        <!-- 26.06.12 Edit 정다희 : depth2_wrap 내 ul.depth2 단일 구조 (children 직접 순회) -->
                        <div class="depth2_wrap" v-if="item1.children && item1.children.length">
                            <ul class="depth2">
                                <!-- [개발] 현재 페이지 2depth — 해당 li에 class="current" 추가 시 1depth와 동일 color:#107af2 적용 -->
                                <li v-for="item2 in item1.children" :key="item2.title">
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

                        <!-- 26.06.12 delete 정다희 : depth2 3개씩 묶기 로직 삭제
                        <div class="depth2_wrap" v-if="item1.chunkedChildren && item1.chunkedChildren.length">
                            <ul class="depth2" v-for="(group, idx) in item1.chunkedChildren" :key="idx">
                                <li v-for="item2 in group" :key="item2.title">
                                    <a :href="getLink(item2)" :target="item2.blank ? '_blank' : null">{{ item2.title }}</a>
                                    <ul class="depth3" v-if="item2.children && item2.children.length">
                                        <li v-for="item3 in item2.children" :key="item3.title">
                                            <a :href="getLink(item3)" :target="item3.blank ? '_blank' : null">{{ item3.title }}</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        -->
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
        /* 26.06.01 Add 이종환 : 반응형으로 리사이징 isDesktop 체크 */
        const windowWidth = ref(window.innerWidth);
        const isDesktop = () => windowWidth.value > 768;
        /* //26.06.01 Add 이종환 : 반응형으로 리사이징 isDesktop 체크 */

        // 26.06.12 Add 정다희 : 2depth 풀폭 패널 — 활성 1depth li 왼쪽 정렬 (Figma 878:4160, --menu-left)
        const setDepth2Position = (li) => {
            const depth2 = li.querySelector(".depth2_wrap");
            if (depth2) depth2.style.setProperty("--menu-left", `${li.getBoundingClientRect().left}px`);
        };
        // 26.06.12 Add 정다희 : 열린 메뉴 전체 좌표 재계산 (리사이즈·스크롤·초기 로드 시)
        const updateOpenDepth2Position = () => {
            document.querySelectorAll("#gnb_nav ul.depth1 > li.is-open").forEach(setDepth2Position);
        };

        // 기존 hover/focus 기능
        const handleMouseEnter = (e) => {
            // 768px 이하(모바일)이면 로직 실행 안 함
            if (!isDesktop()) return;

            const li = e.currentTarget;
            li.classList.add("is-open");
            setDepth2Position(li); // 26.06.12 Add 정다희 : 호버 시 2depth 패널 --menu-left 설정
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

        // 26.06.12 Edit 정다희 : 키보드 focusin — closeTimer로 focusout/focusin 순서 깜빡임 방지 + 2depth 좌표 설정
        const setFocus = (e) => {
            const li = e.currentTarget;
            const FOCUS_DELAY = 150; // focusout 직후 activeElement 이동 대기 (BreadCrumb.vue 동일 패턴)
            if (li.closeTimer) clearTimeout(li.closeTimer);
            li.closeTimer = setTimeout(() => {
                if (li.contains(document.activeElement)) {
                    li.classList.add("is-open");
                    setDepth2Position(li); // Tab 포커스로 열 때도 --menu-left 정렬
                }
                li.closeTimer = null;
            }, FOCUS_DELAY);
        };

        // 26.06.12 Edit 정다희 : 키보드 focusout — li 밖으로 포커스가 나갔을 때만 is-open 제거
        const removeFocus = (e) => {
            const li = e.currentTarget;
            const FOCUS_DELAY = 150;
            if (li.closeTimer) clearTimeout(li.closeTimer);
            li.closeTimer = setTimeout(() => {
                if (!li.contains(document.activeElement)) li.classList.remove("is-open");
                li.closeTimer = null;
            }, FOCUS_DELAY);
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
            const visual = document.querySelector('.top_visual');
            const currentScrollY = window.scrollY;

            if (!header) return;

            // 1. [추가] 특정 영역(visual) 기준 검정색 테마 적용
            if (visual) {
                const head_black_threshold = visual.offsetHeight - (header.offsetHeight * 0.5);
                if (currentScrollY > head_black_threshold) {
                    header.classList.add("head_black");
                } else {
                    header.classList.remove("head_black");
                }
            } else {
                header.classList.add("head_black");
            }

            // 2. [추가] 최상단 바운스 방지: 스크롤 위치가 0보다 작으면(iOS 반동) 무조건 노출
            if (currentScrollY <= 0) {
                header.classList.remove("hide");
                lastScrollY = currentScrollY;
                return;
            }

            const scrollHeight = document.documentElement.scrollHeight;
            const innerHeight = window.innerHeight;
            const buffer = 20;

            // 3. [추가] 스크롤 감도 설정: 최소 5px 이상 움직였을 때만 동작 (미세한 반동 무시)
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

            // 26.06.12 Add 정다희 : 스크롤 후에도 열린 2depth 패널 좌표 유지
            if (window.innerWidth > 768) updateOpenDepth2Position();
        };

        // 26.06.12 delete 정다희 : depth2 3개씩 묶기 로직 삭제
        /*
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
        */

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

            windowWidth.value = window.innerWidth; //26.06.01 Add 이종환 : 반응형으로 리사이징 isDesktop 체크

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

            // 26.06.12 Add 정다희 : 리사이즈 시 열린 2depth 패널 좌표 재계산
            if (width > 768) updateOpenDepth2Position();

            // 이전 답변에서 드린 header hide 로직 호출 (필요 시)
            // handleScroll(); 
        };

        /* 퍼블 테스트용 : 파라미터를 이용한 sub page h1, 이전버튼 노출 숨김 처리 */
        const isSubPage = computed(() => {
            return window.location.pathname !== "/";
        });
        /* //퍼블 테스트용 : 파라미터를 이용한 sub page h1, 이전버튼 노출 숨김 처리 */

        onMounted(() => {
            window.addEventListener("scroll", handleScroll);
            window.addEventListener("resize", handleResize);
            handleResize(); // 초기 로드 시 1회 실행

            // 26.06.12 Add 정다희 : 폰트/레이아웃 로드 후 2depth 좌표 보정
            if (window.innerWidth > 768) {
                setTimeout(updateOpenDepth2Position, 100);
            }

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

            /* 26.06.04 Add 이종환 : mo header 상단 비주얼 확인하여 head_black 클래스 추가/제거 */
            const width = window.innerWidth;

            if(width <= 768){
                setTimeout(() => {
                    const header = document.getElementById("header");
                    const visual = document.querySelector(".top_visual");

                    const isVisible =
                        visual &&
                        window.getComputedStyle(visual).display !== "none";

                    isSubPage.value = !isVisible;

                    if(!isVisible){
                        header.classList.add('head_black');
                    }

                    console.log("visual:", visual);
                    console.log("display:", visual ? window.getComputedStyle(visual).display : "not found");
                    console.log("isVisible:", isVisible);
                    console.log("isSubPage:", isSubPage.value);
                }, 100);
                console.log('mo');
            }
            /* //26.06.04 Add 이종환 : mo header 상단 비주얼 확인하여 head_black 클래스 추가/제거 */
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
            // 26.06.12 delete 정다희 : depth2 3개씩 묶기 로직 삭제
            // chunkedMenuList, // 템플릿에서 사용할 새로운 변수
            mo_menuToggle,
            handleResize,

            isDesktop,

            isSubPage //[퍼블테스트용] 파라미터로 서브 구분
        };
    },
};
</script>

<style></style>