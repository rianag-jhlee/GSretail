<template>
    <div class="input_wrap" :class="[`type-${type}`, { err: isError, disabled: isDisabled }]">
        <!-- checkbox / radio -->
        <label v-if="isCheckType" :class="['check', { check_ani: isswitch }]">
            <input :id="id" :name="name" :type="type" v-model="model" :disabled="isDisabled" />
            <em class="label">{{ text }}</em>
        </label>

        <!-- text/password/number -->
        <div v-else class="label_wrap">
            <label class="input">

                <i v-if="showPlaceholder">
                    {{ placeholder }}
                </i>

                <input ref="inputRef" :id="id" :name="name" :type="currentType" v-model="model" :readonly="isReadonly"
                    :disabled="isDisabled" @focus="isFocused = true" @blur="isFocused = false" />

                <!-- clear -->
                <Buttons v-if="showClear" btn-class="icon_del" :class="{ active: hasValue }" @click.prevent="clear">전체삭제</Buttons>

                <!-- password toggle -->
                <button v-if="isPassword" :class="[passwordClass, { active: hasValue }]"
                    @click.prevent="togglePassword" />

            </label>

            <!-- error message -->
            <em v-if="isError" class="err_txt">
                {{ errText }}
            </em>
            <!-- //error message -->
        </div>

    </div>
</template>

<script>
import Buttons from "@/components/Buttons.vue";

export default {
    name: "Inputs",

    components: {
        Buttons
    },

    props: {
        id: {
            type: String,
            default: ""
        },

        name: {
            type: String,
            default: ""
        },

        type: {
            type: String,
            default: "text"
        },

        modelValue: {
            type: [String, Number, Boolean],
            default: ""
        },

        text: {
            type: String,
            default: ""
        },

        placeholder: {
            type: String,
            default: ""
        },

        errText: {
            type: String,
            default: ""
        },

        isError: {
            type: Boolean,
            default: false
        },

        isReadonly: {
            type: Boolean,
            default: false
        },

        isDisabled: {
            type: Boolean,
            default: false
        },

        isswitch: {
            type: Boolean,
            default: false
        }
    },

    emits: ["update:modelValue"],

    data() {
        return {
            model: this.modelValue,
            isFocused: false,
            showPassword: false
        };
    },

    watch: {
        model(v) {
            this.$emit("update:modelValue", v);
        },

        modelValue(v) {
            this.model = v;
        }
    },

    computed: {
        isPassword() {
            return this.type === "password";
        },

        isCheckType() {
            return this.type === "checkbox" || this.type === "radio";
        },

        currentType() {
            if (!this.isPassword) return this.type;
            return this.showPassword ? "text" : "password";
        },

        hasValue() {
            return this.model !== null && this.model !== "";
        },

        showPlaceholder() {
            return this.placeholder && !this.hasValue && !this.isFocused;
        },

        showClear() {
            return !this.isPassword && this.hasValue && !this.isReadonly;
        },

        passwordClass() {
            return this.showPassword ? "icon_text" : "icon_pass";
        }
    },

    methods: {
        clear() {
            this.model = "";
        },

        togglePassword() {
            this.showPassword = !this.showPassword;
        }
    }
};
</script>

<style scoped>
</style>