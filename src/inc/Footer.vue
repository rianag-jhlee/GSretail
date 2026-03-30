<template>
    <footer>
        <!-- 국문푸터 -->
        <div v-if="lang === 'ko'">Footer</div>
        
        <!-- 영문푸터 -->
        <div v-else>En Footer</div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        lang: { type: String, default: "ko" }, // ko/en
    }
}
</script>

<style>
</style>
