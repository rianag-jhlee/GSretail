<template>
    <div>
        <p>{{ t.Title }}</p>
        <strong>{{ t.GreetingTxt }}</strong>
        <div v-html="t.MixType"></div>
    </div>
</template>

<script>
export default {
    name: "gsrmain",
    props: {
        lang: { type: String }, // ko/en
    },
    data() {
        return {
            langData: {
                ko: {
                    Title: "제목입니다",
                    GreetingTxt: "안녕하세요",
                    MixType: "안녕하세요. <strong>대표</strong>입니다."
                },
                en: {
                    Title: "This is a title",
                    GreetingTxt: "Hello"
                }
            }
        };
    },
    computed: {
        t() {
            return this.langData[this.lang] || this.langData.ko;
        }
    },
    mounted() {
    }
};
</script>

<style></style>