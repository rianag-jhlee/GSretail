<template>
    <div class="contents">

        <h2>Form</h2>

        <section>
            <h4>Inputs</h4>
            <ul class="explain">
                <li><strong>type</strong> : text/password/check/radio/switch 선택 // default="text"</li>
                <li><strong>isswitch</strong> : true/false ※checkbox의 스위치 형태 // default="false"</li>
            </ul>

            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>

            <ul class="toolbar">
                <li><button class="current" @click="tool_select('text')">Text</button></li>
                <li><button @click="tool_select('text_err')">Text Error</button></li>
                <li><button @click="tool_select('error')">Error Message</button></li>
                <li><button @click="tool_select('pw')">Password</button></li>
                <li><button @click="tool_select('check')">Checkbox</button></li>
                <li><button @click="tool_select('radio')">Radio</button></li>
                <li><button @click="tool_select('isswitch')">Switch</button></li>
            </ul>
            <div class="design_box">
                <Inputs :type="input_opt.type" :isswitch="input_opt.isswitch" :placeholder="input_opt.Placeholder" text="Label" :isDisabled="_disabled" :isError="input_opt.isError" :errText="input_opt.err_text" :class="input_opt.class" />
            </div>

            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="#none">OPEN</a>
            </p>
            <pre class="code_box"><code>&lt;Inputs {{ input_opt.opt }} /&gt;</code></pre>
        </section>

        <section>
            <h4>Select</h4>
            <ul class="explain">
                <li><strong>type</strong> : text/password/check/radio/switch 선택 // default="text"</li>
                <li><strong>isswitch</strong> : true/false ※checkbox의 스위치 형태 // default="false"</li>
            </ul>

            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>

            <div class="design_box">
                <SelectBox :options="options" v-model="selected" initMsg="선택해주세요" />
            </div>

            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="#none">OPEN</a>
            </p>
            <pre class="code_box"><code>&lt;SelectBox :options="[
    { val: '', txt: '선택하세요' },
    { val: 'A', txt: '옵션 A' },
    { val: 'B', txt: '옵션 B' }
]" v-model="selected" initMsg="선택해주세요" /&gt;

&lt;script&gt;
    data() {
        return {
            selected: ""
        };
    }
&lt;/script&gt;</code></pre>
        </section>

    </div>
</template>

<script>
import Inputs from "@/components/Inputs.vue";
import SelectBox from "@/components/SelectBox.vue";

export default {
    name: "form",
    components: {
        Inputs,
        SelectBox,
    },

    data() {
        return {
            // 현재 선택된 버튼 index
            selectedIndex: 0,

            // Inputs 옵션 상태
            input_opt: {
                type: "text",
                isswitch: false,
                Placeholder: "문구를 입력해주세요",
                isError: false,
                err_text: "",
                class: "",
                opt: 'type="text" placeholder="문구를 입력해주세요"',
            },

            // toolbar 버튼 리스트
            toolbarButtons: [
                "text",
                "text_err",
                "error",
                "pw",
                "check",
                "radio",
                "isswitch",
            ],

            /* select */
            selected: "",
            selected2: "",
            options: [
                { val: "opt1", txt: "text 01" },
                { val: "opt2", txt: "text 02" },
                { val: "opt3", txt: "text 03" },
                { val: "opt4", txt: "text 04" },
                { val: "opt5", txt: "text 05" },
                { val: "opt6", txt: "text 06" },
            ],
        };
    },
    mounted() {
        /* 소스보기 */
        $('.tit_wrap a').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active').parent().siblings('.code_box').slideUp();
            } else {
                $(this).addClass('active').parent().siblings('.code_box').slideDown();
            }
        });
    },
    methods: {
        tool_select(type, index) {
            // 선택된 버튼 index
            this.selectedIndex = index;

            // 기본 초기화
            this.input_opt.isswitch = false;
            this.input_opt.isError = false;
            this.input_opt.err_text = "";
            this.input_opt.class = "";
            this.input_opt.Placeholder = "문구를 입력해주세요";

            switch (type) {
                case "text":
                    this.input_opt.type = "text";
                    this.input_opt.opt = `type="${this.input_opt.type}" placeholder="${this.input_opt.Placeholder}"`;
                    break;

                case "text_err":
                    this.input_opt.type = "text";
                    this.input_opt.isError = true;
                    this.input_opt.opt = `type="${this.input_opt.type}" placeholder="${this.input_opt.Placeholder}" isError="true"`;
                    break;

                case "error":
                    this.input_opt.type = "text";
                    this.input_opt.isswitch = false;
                    this.input_opt.isError = true;
                    this.input_opt.err_text = "에러 노출 문구";
                    this.input_opt.opt = `type="${this.input_opt.type}" placeholder="${this.input_opt.Placeholder}" isError="${this.input_opt.isError}" errText="${this.input_opt.err_text}"`;
                    break;

                case "pw":
                    this.input_opt.type = "password";
                    this.input_opt.Placeholder = "비밀번호를 입력해주세요";
                    this.input_opt.opt = `type="${this.input_opt.type}" placeholder="${this.input_opt.Placeholder}"`;
                    break;

                case "check":
                    this.input_opt.type = "checkbox";
                    this.input_opt.opt = `type="${this.input_opt.type}" text="Label"`;
                    break;

                case "radio":
                    this.input_opt.type = "radio";
                    this.input_opt.opt = `type="${this.input_opt.type}" text="Label"`;
                    break;

                case "isswitch":
                    this.input_opt.type = "checkbox";
                    this.input_opt.isswitch = true;
                    this.input_opt.opt = `type="${this.input_opt.type}" isswitch="${this.input_opt.isswitch}" text="Label"`;
                    break;
            }
        },
    },
};
</script>

<style scope>
</style>