<template>
    <footer ref="footerEl">
        <div class="inner">
            <nav>
                <dl v-for="item in menuList" :key="item.title">
                    <dt><a href="#none">{{ item.title }}</a></dt>
                    <dd>
                        <ul v-for="(group, i) in chunk(item.children || [])" :key="i">
                            <li v-for="s_item in group" :key="s_item.title">
                                <a :href="s_item.path">{{ s_item.title }}</a>
                            </li>
                        </ul>
                    </dd>
                </dl>
            </nav>

            <div class="quick" v-if="t.quick" ref="quickWrap">
                <ul ref="quickList" :style="quickStyle">
                    <li v-for="item in t.quick" :key="item.title">
                        <button v-if="item.pop" @click="openModal" 
                            :data-popid="item.popId" 
                            :data-type="item.popType" 
                            :data-cont="item.path">{{ item.title }}</button>
                        <a v-else :href="item.path" :target="item.blank ? '_blank' : '_self'">{{ item.title }}</a>
                    </li>
                </ul>
            </div>

            <div class="info">
                <div>
                    <strong>{{ t.info.logo }}</strong>
                    <span>{{ t.info.address }}</span>
                    <span>{{ t.info.ceo }}</span>
                    <span>{{ t.info.brn }}</span>
                </div>
                <p>{{ t.info.copyright }}</p>
            </div>

            <button class="go_top" :class="{ hide: isTop, isStatic: isFooterVisible }" @click="scrollTop">Go to
                top</button>
        </div>
    </footer>

    <!-- 입지제안 팝업 -->
    <div id="gsrbr0204" class="modal_wrap">
        <div class="modal_container"></div>
    </div>
    <!-- //입지제안 팝업 -->
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onBeforeUnmount } from "vue";
import menuEn from "@/assets/language/menu/menu.en.json";
import menuKo from "@/assets/language/menu/menu.ko.json";

import modal from "@/assets/js/modal";

// =====================
// props
// =====================
const props = defineProps({
    lang: { type: String, default: "ko" }
});

// =====================
// refs
// =====================
const footerEl = ref(null);
const quickWrap = ref(null);
const quickList = ref(null);

// =====================
// state
// =====================
const isFooterVisible = ref(false);
const isTop = ref(true);

const quickX = ref(0);
const isQuickSlide = ref(false);

const observer = ref(null);

// =====================
// language data
// =====================
const langData = {
    ko: {
        quick: [
            { title: "개인정보처리방침", path: "#none" },
            { title: "채용안내", path: "https://gsretail.recruiter.co.kr/career/home", blank: true },
            { title: "입점상담", path: "gsrse01" },
            { title: "멤버십/홈페이지문의", path: "#none" },
            { title: "입지제안", path: "gsrbr0204", pop:true, popId:"gsrbr0204", popType:'lg' },
            { title: "임대상가안내", path: "#none" },
            { title: "정도경영제보", path: "#none" },
            { title: "고객센터", path: "#none" },
            { title: "GS SHOP 시청자 관련", path: "#none" }
        ],
        info: {
            logo: "(주)GS리테일",
            address: "서울시 강남구 논현로 508, 13층 (역삼동, GS강남타워)",
            ceo: "대표이사 허서홍",
            brn: "사업자등록번호 116-81-18746",
            copyright: "Copyright ⓒGS Retail. All rights reserved."
        }
    },
    en: {
        quick: [
            { title: "Privacy Policy", path: "#none" },
            { title: "Store Franchise", path: "#none" },
            { title: "Partnership", path: "#none" },
            { title: "Customer Center", path: "#none" }
        ],
        info: {
            logo: "GS Retail",
            address: "Seoul, Korea",
            ceo: "CEO Heo Seo-hong",
            brn: "116-81-18746",
            copyright: "Copyright ⓒ GS Retail"
        }
    }
};

// =====================
// computed
// =====================
const t = computed(() => langData[props.lang] || langData.ko);

const menuList = computed(() =>
    props.lang === "en" ? menuEn : menuKo
);

const quickStyle = computed(() => ({
    transform: `translateX(${quickX.value}px)`
}));

// =====================
// chunk (FIX: 에러 해결 핵심)
// =====================
const chunk = (arr = [], size = 6) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};

// =====================
// scroll
// =====================
const handleScroll = () => {
    isTop.value = window.scrollY < 50;
};

const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// =====================
// quick slide
// =====================
const checkQuickSlide = () => {
    isQuickSlide.value = window.innerWidth <= 1024;
};

const initQuickSlide = () => {
    const wrap = quickWrap.value;
    const list = quickList.value;

    if (!wrap || !list) return;

    let startX = 0;
    let baseX = 0;

    const getLimit = () => wrap.offsetWidth - list.scrollWidth;

    // touch
    const onTouchStart = (e) => {
        startX = e.touches[0].clientX;
        baseX = quickX.value;
    };

    const onTouchMove = (e) => {
        if (!isQuickSlide.value) return;

        const delta = e.touches[0].clientX - startX;
        let next = baseX + delta;

        const minX = getLimit();
        quickX.value = Math.min(0, Math.max(minX, next));
    };

    // mouse
    let dragging = false;
    let mx = 0;
    let bx = 0;

    const onMouseDown = (e) => {
        if (!isQuickSlide.value) return;

        dragging = true;
        mx = e.clientX;
        bx = quickX.value;
    };

    const onMouseMove = (e) => {
        if (!dragging || !isQuickSlide.value) return;

        const delta = e.clientX - mx;
        let next = bx + delta;

        const minX = getLimit();
        quickX.value = Math.min(0, Math.max(minX, next));
    };

    const onMouseUp = () => {
        dragging = false;
    };

    list.addEventListener("touchstart", onTouchStart, { passive: true });
    list.addEventListener("touchmove", onTouchMove, { passive: true });

    list.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
};

/* modal */
const openModal=event => {
    const el = event.currentTarget;
    const popId = el.dataset.popid;
    const type = el.dataset.type || "default";
    const cont = el.dataset.cont;
    modal.open(popId, type, el, cont);
}

// =====================
// lifecycle
// =====================
onMounted(() => {
    observer.value = new IntersectionObserver(([entry]) => {
        isFooterVisible.value = entry.isIntersecting;
    }, { threshold: 0.1 });

    nextTick(() => {
        if (footerEl.value) {
            observer.value.observe(footerEl.value);
        }

        checkQuickSlide();
        initQuickSlide();
    });

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkQuickSlide);
});

onBeforeUnmount(() => {
    observer.value?.disconnect();
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", checkQuickSlide);
});
</script>

<style></style>
