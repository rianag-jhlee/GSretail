<template>
    <div id="container">
        <BreadCrumb />
        <div id="content_wrap">
            <router-view />
        </div>
    </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';

export default {
    name: 'App',
    components: {
        BreadCrumb
    },
    data() {
        return {}
    },
    mounted(){
    }
}
</script>

<style scoped>
</style>
