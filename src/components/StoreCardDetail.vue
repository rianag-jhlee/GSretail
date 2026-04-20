<template>
    <div class="detail_card">
        <!-- 담당자 -->
        <div class="detail_manager">
            <div class="manager_photo"></div>
            <div class="manager_info">
                <div class="manager_name_wrap">
                    <span class="manager_label">담당자</span>
                    <p class="manager_name">{{ item.managerName || '한승희 창업지원담당' }}</p>
                </div>
                <div class="manager_tel_wrap">
                    <a :href="'tel:' + (item.managerTel || '053-67890123')" class="manager_tel">
                        {{ item.managerTel || '053-67890123' }}
                    </a>
                </div>
            </div>
            <Buttons btn-class="btn_icon btn_xl">무료 상담 신청하기</Buttons>
        </div>

        <!-- 상세 정보 테이블 -->
        <div class="detail_info_table">
            <div class="detail_info_row">
                <div class="detail_info_cell">
                    <span class="detail_info_label">면적</span>
                    <strong class="detail_info_value">{{ item.area }}</strong>
                </div>
                <div class="detail_info_cell">
                    <span class="detail_info_label">투자비</span>
                    <strong class="detail_info_value">{{ item.cost }}</strong>
                </div>
                <div class="detail_info_cell">
                    <span class="detail_info_label">타입</span>
                    <strong class="detail_info_value">{{ item.type }}</strong>
                </div>
                <div class="detail_info_cell">
                    <span class="detail_info_label">유형</span>
                    <strong class="detail_info_value">{{ item.form }}</strong>
                </div>
            </div>
            <div class="detail_info_row detail_info_row_full">
                <span class="detail_info_label">상권 특징</span>
                <p class="detail_info_feature">{{ item.feature }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
import Buttons from "@/components/Buttons.vue";

defineProps({
    item: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped>
.detail_card {
    padding: 32px 40px;
    background: #fff;
    border-radius: 12px;
    border: 1px solid var(--color-brand-primary);
    display: flex;
    flex-direction: column;
    gap: 32px;
}

/* 담당자 */
.detail_manager { display: flex; align-items: center; gap: 28px; }
.manager_photo {
    width: 103px;
    height: 103px;
    border-radius: 50%;
    background: #e5e5e9;
    flex-shrink: 0;
}
.manager_info { min-width: 300px; text-align: left; }
.manager_label { font-size: 1.6rem; font-weight: 700; color: #161616; }
.manager_name { margin-top: 2px;font-size: 2.8rem; font-weight: 700; color: #161616; letter-spacing: -0.01em;  }
.manager_tel_wrap { display: flex; align-items: center; gap: 8px; margin-top: 16px; }
.manager_tel {
    font-size: 2rem;
    color: #15b874;
    letter-spacing: -0.01em;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 12px;
}
.manager_tel::before {
    content: '';
    width: 16px;
    height: 16px;
    background-color: #15b874;
    display: inline-block;
}
.detail_manager :deep([class*="btn_"]) {
    flex-shrink: 0;
}

/* 상세 정보 */
.detail_info_table { border-top: 1px solid #e5e5e9; }
.detail_info_row { display: flex; border-bottom: 1px solid #e5e5e9; }
.detail_info_cell {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 26px;
    padding: 27px 24px;
    min-height: 80px;
}
.detail_info_cell:last-child { border-right: none; }
.detail_info_label {
    font-size: 1.8rem;
    color: #67676f;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}
.detail_info_label::before {
    content: '';
    width: 24px;
    height: 24px;
    background-color: red;
    display: inline-block;
}
.detail_info_value { font-size: 1.8rem; font-weight: 700; color: #161616; }
.detail_info_row_full { padding: 16px 24px; flex-direction: column; gap: 8px; align-items: flex-start; }
.detail_info_row_full .detail_info_label { color: #67676f; }
.detail_info_feature { font-size: 1.8rem; color: #161616; line-height: 1.4; }

@media (max-width: 768px) {
    .detail_card { padding: 20px; gap: 20px; }
    .detail_manager { flex-wrap: wrap; }
    .detail_manager :deep([class*="btn_"]) { width: 100%; margin-left: 0; }
    .detail_info_cell { flex: 1 0 50%; min-height: 60px; padding: 16px; }
}
</style>
