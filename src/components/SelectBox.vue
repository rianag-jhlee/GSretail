<template>
    <label class="select">
        <div>
            <select :class="{ changed }" :value="modelValue" @change="onChange" :disabled="isDisabled">
                <!-- placeholder -->
                <!-- <option value="" disabled :hidden="modelValue !== ''"> -->
                <option value="" disabled hidden>
                    {{ initMsg }}
                </option>

                <!-- options -->
                <option v-for="(select, i) in options" :key="i" :value="select.val">
                    {{ select.txt }}
                </option>
            </select>
        </div>
    </label>
</template>

<script>
export default {
    name: "SelectBox",

    props: {
        initMsg: {
            type: String,
            default: "선택하세요."
        },
        options: {
            type: Array,
            default: () => []
        },
        modelValue: {
            type: [String, Number],
            default: ""
        },
        isDisabled: {
            type: Boolean,
            default: false
        }
    },

    emits: ["update:modelValue", "change"],

    data() {
        return {
            changed: false
        };
    },

    watch: {
        modelValue(v) {
            this.changed = v !== "" && v !== null;
        }
    },

    methods: {
        onChange(e) {
            const value = e.target.value;

            this.changed = true;

            // v-model 업데이트
            this.$emit("update:modelValue", value);

            // 필요하면 change 이벤트도 전달
            this.$emit("change", value);
        }
    }
};
</script>

<style scoped></style>