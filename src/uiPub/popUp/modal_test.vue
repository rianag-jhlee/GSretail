<template>
    <div class="modal_cont">
        <!-- modal header -->
        <div class="modal_header">Modal Title
            <a href="#none" @click="closeModal" class="btn_close">닫기</a>
        </div>
        <!-- //modal header -->
        <!-- modal content -->
        <div class="modal_content">Modal Content</div>
        <!-- //modal content -->
        <!-- modal bottom -->
        <div class="modal_bottom">
            <a href="#none" class="btn_small black">확인</a>
            <a href="#none" @click="closeModal" class="btn_small white">취소</a>
        </div>
        <!-- //modal bottom -->
    </div>
</template>

<script>
import modal from "@/assets/js/modal";

export default {
    name: "Modal Test",
    components: {
    },
    methods:{
        closeModal(event) {
            modal.close(event.currentTarget);
        }
    },
};
</script>

<style></style>
