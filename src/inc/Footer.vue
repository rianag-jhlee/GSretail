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

            <div class="quick" v-if="t.quick">
                <ul>
                    <li v-for="item in t.quick" :key="item.title">
                        <a :href="item.path">{{ item.title }}</a>
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

            <button class="go_top" :class="{ isStatic: isFooterVisible }" @click="scrollTop">Go to top</button>
        </div>
    </footer>
</template>

<script>
import menuEn from "@/assets/language/menu/menu.en.json";
import menuKo from "@/assets/language/menu/menu.ko.json";

export default {
    name: "Footer",

    props: {
        lang: { type: String, default: "ko" }
    },

    data() {
        return {
            isFooterVisible: false,
            observer: null,

            langData: {
                ko: {
                    quick: [
                        { title: "개인정보처리방침", path: "#none" },
                        { title: "점포 창업안내", path: "#none" },
                        { title: "입점상담", path: "#none" },
                        { title: "고객센터", path: "#none" }
                    ],
                    info: {
                        logo: "(주)GS리테일",
                        address: "서울시 강남구 논현로 508(역삼동 679번지 GS타워)",
                        ceo: "대표이사 허서홍",
                        brn: "사업자등록번호 116-81-18746",
                        copyright:
                            "Copyright ⓒ 2021 GS Retail Co.,Ltd. All Rights Reserved."
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
                        logo: "GS Retail Co., Ltd.",
                        address:
                            "508, Nonhyeon-ro, Gangnam-gu, Seoul, Republic of Korea",
                        ceo: "CEO Heo Seo-hong",
                        brn: "Business Registration Number 116-81-18746",
                        copyright:
                            "Copyright ⓒ 2021 GS Retail Co., Ltd. All Rights Reserved."
                    }
                }
            }
        };
    },

    computed: {
        t() {
            return this.langData[this.lang] || this.langData.ko;
        },
        menuList() {
            return this.lang === "en" ? menuEn : menuKo;
        }
    },

    methods: {
        chunk(arr = [], size = 6) {
            const result = [];
            for (let i = 0; i < arr.length; i += size) {
                result.push(arr.slice(i, i + size));
            }
            return result;
        },

        scrollTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    },

    mounted() {
        this.observer = new IntersectionObserver(
            ([entry]) => {
                this.isFooterVisible = entry.isIntersecting;
            },
            { threshold: 0.1 }
        );

        requestAnimationFrame(() => {
            const el = this.$refs.footerEl;

            if (el) {
                this.observer.observe(el);
            }
        });
    },

    beforeUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
};
</script>

<style></style>
