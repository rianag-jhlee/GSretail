<script setup>
import { defineEmits, defineProps } from "vue";

defineProps({
    items: { type: Array, default: () => [] },
    modelValue: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue"]);

const onAgreeChange = (event) => {
    emit("update:modelValue", event.target.checked);
};
</script>

<template>
    <section class="consent_box" aria-label="개인정보 제공 동의">
        <h3>개인정보 제공 동의</h3>

        <ul v-if="items && items.length" class="consent_list">
            <li v-for="(item, idx) in items" :key="idx">
                <p v-html="item"></p>
            </li>
        </ul>

        <div class="consent_notice_area">
            <p>
                고객님께서는 본 동의에 거부하실 권리가 있으나, 동의하지 않으실 경우<br />
                정보가 확인해야 하는 문의에 대해 정확하고 신속한 답변을 받으시는데 어려움이 있습니다.
            </p>
            <label class="consent_radio">
                <input
                    type="checkbox"
                    :checked="modelValue"
                    @change="onAgreeChange"
                />
                <span>동의합니다.</span>
            </label>
        </div>
    </section>
</template>

<style scoped>
.consent_box { width: 100%; padding: 32px; background-color: #f8f8f8; border-radius: 12px; }
.consent_box > h3 { font-size: 2.4rem; font-weight: 700; line-height: 1.35; letter-spacing: -0.01em; }
.consent_list { margin-top: 24px; }
.consent_list > li { padding-left: 10px; position: relative; }
.consent_list > li + li { margin-top: 8px; }
.consent_list > li::before { width: 4px; height: 4px; background-color: #67676f; border-radius: 50%; position: absolute; top: 10px; left: 0; content: ""; display: block; }
.consent_list > li > p { color: #67676f; font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
.consent_notice_area { margin-top: 24px; padding-top: 24px; border-top: 1px solid #d7d7df; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.consent_notice_area > p { color: #161616; font-size: 1.6rem; font-weight: 700; line-height: 1.24; letter-spacing: 0; }
.consent_radio { display: inline-flex; align-items: center; gap: 8px; cursor: pointer; }
.consent_radio > input { width: 24px; height: 24px; margin: 0; padding: 0; background-color: #ffffff; border: 1px solid #c4c4d0; border-radius: 8px; position: relative; appearance: none; }
.consent_radio > input:checked { background-color: #107af2; border-color: #107af2; }
.consent_radio > input:checked::after { width: 10px; height: 10px; background-color: #ffffff; border-radius: 50%; position: absolute; top: 50%; left: 50%; content: ""; transform: translate(-50%, -50%); }
.consent_radio > span { color: #161616; font-size: 1.8rem; line-height: 1.4; letter-spacing: 0; }

@media (max-width: 768px) {
    .consent_box { padding: 24px 20px; }
    .consent_box > h3 { font-size: 2rem; line-height: 1.35; }
    .consent_list { margin-top: 16px; }
    .consent_list > li::before { width: 2px; height: 2px; top: 8px; }
    .consent_list > li > p { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .consent_notice_area { margin-top: 16px; padding-top: 16px; display: flex; flex-direction: column; align-items: flex-start; gap: 12px; }
    .consent_notice_area > p { font-size: 1.4rem; line-height: 1.4; letter-spacing: -0.01em; }
    .consent_radio > span { font-size: 1.6rem; line-height: 1.5; letter-spacing: -0.01em; }
}
</style>
