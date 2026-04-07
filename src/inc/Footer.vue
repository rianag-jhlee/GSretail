<template>
    <footer>
        <div>{{ t.info.address }}</div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        lang: { type: String, default: "ko" }, // ko/en
    },
    data() {
        return {
            langData: {
                ko: {
                    info: {
                        address: "서울시 강남구 논현로 508(역삼동 679번지 GS타워)"
                    }
                },
                en: {
                    info: {
                        address: "508, Nonhyeon-ro, Gangnam-gu, Seoul, Republic of Korea"
                    }
                }
            }
        };
    },
    computed: {
        t() {
            return this.langData[this.lang] || this.langData.ko;
        }
    }
};
</script>

<style>
</style>
