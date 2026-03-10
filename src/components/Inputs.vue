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
                <Buttons v-if="showClear" btn-class="icon_del" @click.prevent="clear">전체삭제</Buttons>

                <button v-if="showClear" class="icon_del" :class="{ active: hasValue }" @click.prevent="clear" />

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
.input_wrap {
    flex: 1;
}

.input_wrap input[type='text']:disabled {
    background-color: #eee !important;
    border-color: #ddd !important;
}

/* check */
.input_wrap .check {
    min-height: 20px;
    padding-left: 26px;
    line-height: 1;
    position: relative;
    display: inline-block;
    cursor: pointer;
}

.input_wrap .check>* {
    line-height: 1.4;
    vertical-align: middle;
    display: inline-block;
}

.input_wrap .check input {
    margin: 0 0 0 1px;
    position: absolute;
}

.input_wrap .check .label:before,
.input_wrap .check .label:after {
    content: '';
    position: absolute;
    display: inline-block;
}

.input_wrap .check input[type='radio'],
.input_wrap .check input[type='checkbox'] {
    opacity: 0;
}

/* radio */
.input_wrap .check input[type='radio'],
.input_wrap .check input[type='radio']+.label:before {
    width: 20px;
    height: 20px;
    background-color: #ddd;
    border-radius: 50%;
    box-sizing: border-box;
    top: 0;
    left: 0;
}

.input_wrap .check input[type='radio']:checked+.label:before {
    background-color: #00bc70;
}

.input_wrap .check input[type='radio']+.label:after,
.input_wrap .check input[type='radio']:checked+.label:after {
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 50%;
    box-sizing: border-box;
    top: 6px;
    left: 6px;
}

/* checkbox */
.input_wrap .check input[type='checkbox'],
.input_wrap .check input[type='checkbox']+.label:before {
    width: 20px;
    height: 20px;
    background-color: #ddd;
    box-sizing: border-box;
    top: 0;
    left: 0;
    transition: all 0.2s;
}

.input_wrap .check input[type='checkbox']+.label:after {
    width: 6px;
    height: 9px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    top: 4px;
    left: 7px;
    transform: rotate(45deg);
}

.input_wrap .check input[type='checkbox']:checked,
.input_wrap .check input[type='checkbox']:checked+.label:before {
    background-color: #00bc70;
}

.input_wrap .check input[type='checkbox']:disabled,
.input_wrap .check input[type='checkbox']:disabled+.label:before {
    background-color: #f5f5f5;
    cursor: default;
}

/* check_ani */
.input_wrap .check_ani {
    position: relative;
    display: inline-block;
}

.input_wrap .check_ani input {
    margin: 0 0 0 1px;
    position: absolute;
    opacity: 0;
}

.input_wrap .check_ani input[type='checkbox']+.label:after {
    width: 16px;
    height: 16px;
    background-color: #fff;
    border-radius: 50%;
    content: '';
    position: absolute;
    top: 50%;
    left: 2px;
    z-index: 1;
    display: block;
    transform: translateY(-50%);
    transition: all 0.2s;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
}

.input_wrap .check_ani input[type='checkbox']:checked+.label:before {
    background-color: #12b560;
}

.input_wrap .check_ani input[type='checkbox']:checked+.label:after {
    left: 17px;
}

.input_wrap .check_ani .label {
    min-height: 20px;
    padding-left: 48px;
    font-size: 16px;
    position: relative;
    display: block;
}

.input_wrap .check_ani .label:before {
    width: 35px;
    height: 20px;
    background-color: #dcdcdc;
    border-radius: 60px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
}

/* label.input */
.input_wrap label.input,
.input_wrap label.select>div {
    position: relative;
    display: block;
}

.input_wrap label.input i {
    color: #aaa;
    font-size: 16px;
    font-style: normal;
    line-height: 18px;
    position: absolute;
    top: 20px;
    left: 15px;
    display: block;
    transform: translateY(-50%);
}

.input_wrap label.input i.hide {
    display: none;
}

.input_wrap label.input input[type='text'],
.input_wrap label.input input[type='password'],
.input_wrap label.input input[type='number'] {
    width: 100%;
    font-size: 16px;
    line-height: 18px;
}

.input_wrap label.input * {
    flex: 1 auto;
}

/* checkbox02 */
.input_wrap.checkbox02 .check {
    padding: 0;
}

.input_wrap.checkbox02 input[type='checkbox'] {
    opacity: 0;
}

.input_wrap.checkbox02 input[type='checkbox']+.label {
    width: 110px;
    height: 35px;
    padding: 0;
    text-align: center;
    font-size: 16px;
    line-height: 33px;
    border: 1px solid #ccc;
    border-radius: 17px;
}

.input_wrap.checkbox02 input[type='checkbox']:checked+.label {
    color: #fff;
    border-color: #12b560;
    background-color: #12b560;
}

.input_wrap.checkbox02 input[type='checkbox']+.label:before,
.input_wrap.checkbox02 input[type='checkbox']+.label:after {
    content: none;
}

/* round_square */
.input_wrap.round_square .check {
    padding: 0;
}

.input_wrap.round_square input[type='checkbox'],
.input_wrap.round_square input[type='radio'] {
    opacity: 0;
}

.input_wrap.round_square input[type='checkbox']+.label,
.input_wrap.round_square input[type='radio']+.label {
    height: 30px;
    padding: 0 20px;
    text-align: center;
    font-size: 14px;
    line-height: 29px;
    color: #aaa;
    border-radius: 5px;
    background-color: #f5f5f5;
}

.input_wrap.round_square input[type='checkbox']:checked+.label,
.input_wrap.round_square input[type='radio']:checked+.label {
    color: #fff;
    border-color: #12b560;
    background-color: #12b560;
}

.input_wrap.round_square input[type='checkbox']+.label:before,
.input_wrap.round_square input[type='radio']+.label:before,
.input_wrap.round_square input[type='checkbox']+.label:after,
.input_wrap.round_square input[type='radio']+.label:after {
    content: none;
}

/* label_wrap */
.label_wrap {
    position: relative;
    flex: 1;
}

.label_wrap button[class*='icon_'] {
    width: 24px;
    height: 24px;
    font-size: 0;
    /* background-image: url('@/assets/images/common/icon_split.png');
  background-repeat: no-repeat;
  background-size: 250px auto; */
    border-radius: 50%;
    position: absolute;
    top: 9px;
    right: 15px;
    z-index: 1;
    display: none;
}

.label_wrap button[class*='icon_']+button[class*='icon_'] {
    margin-right: 34px;
}

.label_wrap button[class*='icon_'].active {
    display: block;
}

.label_wrap button.icon_del {
    background-position: 0 0;
}

.label_wrap button.icon_pass {
    background-position: -80px 0;
}

.label_wrap button.icon_text {
    background-position: -40px 0;
}

/* error */
.err input[type='text'] {
    border-color: #ff0000;
}
</style>