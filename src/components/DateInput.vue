<template>
    <div
        ref="wrapRef"
        class="date_input_wrap"
        :class="{ err: isError, disabled: disabled }"
    >
        <label v-if="label || $slots.label" :for="fieldId" class="date_input_label">
            <slot name="label">{{ label }}</slot>
        </label>

        <div class="date_input_row">
            <div class="date_input_field">
                <input
                    :id="fieldId"
                    ref="textRef"
                    class="date_input_text"
                    type="text"
                    inputmode="numeric"
                    autocomplete="off"
                    :name="name"
                    :value="modelValue"
                    :placeholder="placeholder"
                    :disabled="disabled"
                    :aria-invalid="isError ? 'true' : 'false'"
                    :aria-describedby="describedBy"
                    @input="onTextInput"
                />
                <button
                    v-if="showCalendarButton"
                    type="button"
                    class="date_input_cal_btn"
                    :disabled="disabled"
                    :aria-label="calendarButtonLabel"
                    :aria-expanded="layerOpen ? 'true' : 'false'"
                    :aria-controls="layerId"
                    @click.stop="toggleLayer"
                >
                    <span class="date_input_cal_icon" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.5" />
                            <path d="M3 10h18" stroke="currentColor" stroke-width="1.5" />
                            <path d="M8 3v4M16 3v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <circle cx="12" cy="15" r="1" fill="currentColor" />
                        </svg>
                    </span>
                </button>
            </div>

            <div
                v-show="showCalendarButton && layerOpen"
                :id="layerId"
                class="date_input_layer"
                role="dialog"
                aria-label="날짜 선택"
            >
                <input
                    ref="nativeDateRef"
                    class="date_input_native"
                    type="date"
                    :value="modelValue"
                    :max="max"
                    :min="min"
                    @change="onNativeChange"
                />
            </div>
        </div>

        <p v-if="hint && !isError" :id="helpId" class="date_input_help">
            {{ hint }}
        </p>
        <p v-if="isError && errorMessage" :id="errId" class="date_input_err" role="alert">
            {{ errorMessage }}
        </p>
    </div>
</template>

<script setup>
import { computed, defineEmits, defineProps, nextTick, onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
    id: { type: String, default: "" },
    name: { type: String, default: "" },
    label: { type: String, default: "" },
    modelValue: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    hint: { type: String, default: "" },
    errorMessage: { type: String, default: "" },
    isError: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    showCalendarButton: { type: Boolean, default: true },
    calendarButtonLabel: { type: String, default: "달력에서 날짜 선택" },
    min: { type: String, default: "" },
    max: { type: String, default: "" },
});

const emit = defineEmits(["update:modelValue"]);

const instanceUid = `di_${Math.random().toString(36).slice(2, 11)}`;
const fieldId = computed(() => (props.id && props.id.length ? props.id : instanceUid));
const helpId = computed(() => `${fieldId.value}_help`);
const errId = computed(() => `${fieldId.value}_err`);
const layerId = computed(() => `${fieldId.value}_layer`);

const describedBy = computed(() => {
    const ids = [];
    if (props.hint && !props.isError) ids.push(helpId.value);
    if (props.isError && props.errorMessage) ids.push(errId.value);
    return ids.length ? ids.join(" ") : undefined;
});

const wrapRef = ref(null);
const textRef = ref(null);
const nativeDateRef = ref(null);
const layerOpen = ref(false);

function onTextInput(e) {
    emit("update:modelValue", e.target.value);
}

function onNativeChange(e) {
    emit("update:modelValue", e.target.value);
    layerOpen.value = false;
    textRef.value?.focus();
}

async function toggleLayer() {
    if (props.disabled) return;
    layerOpen.value = !layerOpen.value;
    await nextTick();
    if (!layerOpen.value || !nativeDateRef.value) return;
    if (props.modelValue) {
        nativeDateRef.value.value = props.modelValue;
    }
    try {
        if (typeof nativeDateRef.value.showPicker === "function") {
            nativeDateRef.value.showPicker();
        }
    } catch {
        /* 일부 환경에서는 무시 */
    }
    nativeDateRef.value.focus();
}

function onDocClick(e) {
    if (!layerOpen.value || !wrapRef.value) return;
    if (!wrapRef.value.contains(e.target)) {
        layerOpen.value = false;
    }
}

onMounted(() => {
    document.addEventListener("click", onDocClick);
});

onUnmounted(() => {
    document.removeEventListener("click", onDocClick);
});
</script>

<style scoped>
.date_input_wrap {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 400px;
    position: relative;
    box-sizing: border-box;
}

.date_input_wrap.disabled {
    opacity: 0.55;
    pointer-events: none;
}

.date_input_label {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
    color: #222;
}

/* 페이지 배경과 구분되는 입력 행 */
.date_input_row {
    position: relative;
    padding: 4px;
    background-color: #f0f2f4;
    border-radius: 8px;
    box-sizing: border-box;
}

.date_input_field {
    display: flex;
    align-items: stretch;
    min-height: 44px;
    background-color: #fff;
    border: 1px solid #d0d4d8;
    border-radius: 6px;
    overflow: hidden;
    box-sizing: border-box;
}

.date_input_wrap.err .date_input_field {
    border-color: #f24f39;
}

.date_input_text {
    flex: 1;
    min-width: 0;
    margin: 0;
    padding: 10px 12px;
    font-size: 16px;
    line-height: 1.4;
    color: #222;
    background: transparent;
    border: 0;
    outline: none;
    box-sizing: border-box;
}

.date_input_text::placeholder {
    color: #999;
}

.date_input_cal_btn {
    flex-shrink: 0;
    width: 44px;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #444;
    background: #f7f8fa;
    border: 0;
    border-left: 1px solid #e5e8eb;
    cursor: pointer;
    box-sizing: border-box;
}

.date_input_cal_btn:hover:not(:disabled),
.date_input_cal_btn:focus-visible {
    color: #12b560;
    background: #eef9f3;
}

.date_input_cal_btn:focus-visible {
    outline: 2px solid #12b560;
    outline-offset: -2px;
}

.date_input_cal_icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.date_input_layer {
    position: absolute;
    left: 4px;
    right: 4px;
    top: calc(100% + 6px);
    z-index: 20;
    padding: 12px;
    background: #fff;
    border: 1px solid #d0d4d8;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
}

.date_input_native {
    width: 100%;
    margin: 0;
    padding: 10px 12px;
    font-size: 16px;
    line-height: 1.4;
    color: #222;
    background: #f7f8fa;
    border: 1px solid #d0d4d8;
    border-radius: 6px;
    box-sizing: border-box;
}

.date_input_help {
    margin: 0;
    font-size: 12px;
    line-height: 1.5;
    color: #666;
}

.date_input_err {
    margin: 0;
    font-size: 12px;
    line-height: 1.5;
    color: #f24f39;
}

@media (max-width: 768px) {
    .date_input_wrap {
        max-width: none;
    }
}
</style>
