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

        <!-- 상세 정보 -->
        <div class="detail_info_table">
            <ul class="detail_info_row">
                <li class="detail_info_cell">
                    <span class="detail_info_label">면적</span>
                    <strong class="detail_info_value">{{ item.area }}</strong>
                </li>
                <li class="detail_info_cell">
                    <span class="detail_info_label">투자비</span>
                    <strong class="detail_info_value">{{ item.cost }}</strong>
                </li>
                <li class="detail_info_cell">
                    <span class="detail_info_label">타입</span>
                    <strong class="detail_info_value">{{ Array.isArray(item.type) ? item.type.join(', ') : item.type }}</strong>
                </li>
                <li class="detail_info_cell">
                    <span class="detail_info_label">유형</span>
                    <strong class="detail_info_value">{{ item.form }}</strong>
                </li>
                <li class="detail_info_cell detail_info_cell_full">
                    <span class="detail_info_label">상권 특징</span>
                    <p class="detail_info_feature">{{ item.feature }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
import Buttons from "@/components/Buttons.vue";

defineProps({
    item: { type: Object, required: true },
});
</script>

<style scoped>
/* 카드 */
.detail_card { padding: 32px 40px; background: #fff; border-radius: 12px; border: 1px solid var(--color-brand-primary); display: flex; flex-direction: column; gap: 32px; }

/* 담당자 */
.detail_manager { display: flex; align-items: center; gap: 28px; }
.manager_photo { width: 103px; height: 103px; border-radius: 50%; background: #e5e5e9; flex-shrink: 0; }
.manager_info { min-width: 300px; text-align: left; }
.manager_label { font-size: 1.6rem; font-weight: 700; color: #161616; }
.manager_name { margin-top: 2px; font-size: 2.8rem; font-weight: 700; color: #161616; letter-spacing: -0.01em; }
.manager_tel_wrap { margin-top: 16px; display: flex; align-items: center; gap: 8px; }
.manager_tel { font-size: 2rem; color: #15b874; letter-spacing: -0.01em; text-decoration: none; display: inline-flex; align-items: center; gap: 12px; }
.manager_tel::before { content: ''; width: 16px; height: 16px; background-color: #15b874; display: inline-block; }
.detail_manager :deep([class*="btn_"]) { flex-shrink: 0; }

/* 상세 정보 */
.detail_info_table { border-top: 1px solid #e5e5e9; }
.detail_info_row { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; border-bottom: 1px solid #e5e5e9; }
.detail_info_cell { flex: 1; display: flex; align-items: center; gap: 26px; padding: 27px 24px; min-height: 80px; }
.detail_info_label { font-size: 1.8rem; color: #67676f; white-space: nowrap; display: inline-flex; align-items: center; gap: 8px; }
.detail_info_label::before { content: ''; width: 24px; height: 24px; background-color: red; display: inline-block; }
.detail_info_value { font-size: 1.8rem; font-weight: 700; color: #161616; }
.detail_info_cell_full { flex: 1 0 100%; flex-direction: column; gap: 8px; align-items: flex-start; padding: 16px 24px; }
.detail_info_feature { font-size: 1.8rem; color: #161616; line-height: 1.4; }

@media (max-width: 768px) {
    .detail_card { padding: 22px 20px; }
    .detail_manager { flex-wrap: wrap; column-gap: 24px; row-gap: 16px; }
    .manager_photo { width: 80px; height: 80px; }
    .manager_info { min-width: 0; }
    .manager_label { font-weight: 400; font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .manager_name { font-size: 1.8rem; line-height: 1.35; }
    .manager_tel { font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .detail_manager :deep([class*="btn_"]) { width: 100%; height: 44px; margin-left: 0; font-size: 1.6rem; }
    .detail_info_table { border-top: 0; }
    .detail_info_row { flex-wrap: wrap; }
    .detail_info_cell { flex: 1 0 100%; min-height: 56px; padding: 18px 0; gap: 10px; border-top: 1px solid #e5e5e9; }
    .detail_info_cell_full { padding: 16px 0; gap: 8px; }
    .detail_info_label { min-width: 80px; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .detail_info_label::before { width: 20px; height: 20px; }
    .detail_info_value { font-weight: 700; font-size: 1.6rem; line-height: 1.24; }
    .detail_info_feature { padding-left:32px;font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
    .manager_tel_wrap {margin-top:12px;}
}
</style>
