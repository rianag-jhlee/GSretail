<template>
    <div class="store_card" :class="{ is_open: isOpen }">
        <div class="card_head">
            <div class="card_badges">
                <span v-for="t in item.type" :key="t" class="type_badge" :class="getBadgeClass(t)">{{ t }}</span>
                <span class="type_badge badge_gray">{{ item.form }}</span>
                <span v-if="item.isYouth" class="type_badge badge_gray">청년</span>
            </div>
            <span class="card_date">{{ item.date }}</span>
        </div>

        <p class="card_region">{{ item.region }}</p>

        <div class="card_body">
            <p class="card_cost">{{ item.cost }}</p>
            <p class="card_tags">{{ item.tags }}</p>
        </div>

        <button type="button" class="card_detail_btn" @click="$emit('toggle')">
            {{ isOpen ? '접기' : '상세보기' }}
        </button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

function getBadgeClass(t) {
    return /^GS\d/i.test(t) ? 'badge_' + t.toLowerCase() : 'badge_gray';
}

defineProps({
    item: { type: Object, required: true },
    isOpen: { type: Boolean, default: false },
});
defineEmits(['toggle']);
</script>

<style scoped>
/* 카드 */
.store_card { border: 1px solid #d7d7df; border-radius: 12px; padding: 24px; background: #fff; display: flex; flex-direction: column; box-sizing: border-box; transition: border-color 0.15s; }
.store_card.is_open { border-color: var(--color-brand-primary); }

/* 상단 뱃지 + 날짜 */
.card_head { display: flex; align-items: center; justify-content: space-between; }
.card_badges { display: flex; align-items: center; gap: 4px; flex-wrap: wrap; }
.type_badge { display: inline-block; padding: 3px 6px; border-radius: 4px; font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
.badge_gs1 { background: #e8f8f1; color: #15b874; }
.badge_gs2 { background: #f9f2ea; color: #fb6432; }
.badge_gs3 { background: #faeeee; color: #ed3030; }
.badge_gray { background: #f2f2f4; color: #67676f; }
.card_date { font-size: 1.4rem; color: #67676f; letter-spacing: -0.01em; white-space: nowrap; }

/* 지역명 */
.card_region { font-size: 2.8rem; font-weight: 700; color: #161616; letter-spacing: -0.01em; line-height: 1.35; margin-top: 2px; }

/* 투자비 + 태그 */
.card_body { margin-top: 24px; display: flex; flex-direction: column; gap: 2px; flex: 1; }
.card_cost { font-size: 2rem; font-weight: 700; color: #107af2; letter-spacing: -0.01em; }
.card_tags { font-size: 1.4rem; color: #67676f; letter-spacing: -0.01em; line-height: 1.4; }

/* 상세보기 버튼 */
.card_detail_btn { width: 100%; height: 38px; margin-top: 16px; background: #f2f2f4; border: none; border-radius: 4px; display: inline-flex; align-items: center; justify-content: center; gap: 4px; font-size: 1.6rem; color: #161616; cursor: pointer; letter-spacing: -0.01em; transition: background-color 0.15s; }
.card_detail_btn::after { content: ''; width: 16px; height: 16px; background-color: #90909a; flex-shrink: 0; transform-origin: center; transition: transform 0.2s ease; }
.store_card.is_open .card_detail_btn::after { transform: rotate(180deg); }

@media (max-width: 768px) {
    .card_region { font-size: 2.4rem; line-height: 1.35; letter-spacing: -0.01em; }
    .card_cost { font-size: 1.8rem; line-height: 1.5; letter-spacing: -0.01em; }
}
</style>
