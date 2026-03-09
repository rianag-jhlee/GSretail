<template>
    <div class="contents">

        <h2>Elements</h2>

        <section>
            <h4>button</h4>
            <ul class="explain">
                <li><strong>tab :</strong> : a / button 테그 선택 // default="button"</li>
                <li><strong>size</strong> : class = btn_small / btn_mid / btn_[default] / btn_big</li>
                <li><strong>type</strong> : class = fill(배경색) / border(테두리선) ※색상 추가 시 색상 가이드에 따른 [색상클래스] 추가 / 테두리 + 배경
                    혼합 시 border_[색생클래스]01~</li>
            </ul>

            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <div class="btnBox">
                    <Buttons btn-class="btn_small fill" tag="a">small(h:20px)</Buttons>
                    <Buttons>default(fill h:26px)</Buttons>
                    <Buttons btn-class="btn_mid fill">mid(h:24px)</Buttons>
                    <Buttons btn-class="btn_fill">fill(h:26px)</Buttons>
                    <Buttons btn-class="btn_big fill">big(h:42px)</Buttons>
                    <!-- <a href="#none" class="btn_small fill">small(h:20px)</a>
                    <a href="#none" class="btn_mid fill">mid(h:24px)</a>
                    <a href="#none" class="btn_fill">fill(h:26px)</a>
                    <a href="#none" class="btn_big fill">big(h:42px)</a>

                    <a href="#none" class="btn_small border">small(h:20px)</a>
                    <a href="#none" class="btn_mid border">mid(h:24px)</a>
                    <a href="#none" class="btn_border">border(h:26px)</a>
                    <a href="#none" class="btn_big border">big(h:42px)</a> -->
                </div>
            </div>

            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="#none">OPEN</a>
            </p>
            <pre class="code_box">
<code>&lt;!-- FILL --&gt;
&lt;a href="#none" class="btn_small fill"&gt;small(h:20px)&lt;/a&gt;
&lt;a href="#none" class="btn_mid fill"&gt;mid(h:24px)&lt;/a&gt;
&lt;a href="#none" class="btn_fill"&gt;fill(h:26px)&lt;/a&gt;
&lt;a href="#none" class="btn_big fill"&gt;big(h:42px)&lt;/a&gt;

&lt;!-- BORDER --&gt;
&lt;a href="#none" class="btn_small border"&gt;small(h:20px)&lt;/a&gt;
&lt;a href="#none" class="btn_mid border"&gt;mid(h:24px)&lt;/a&gt;
&lt;a href="#none" class="btn_border"&gt;border(h:26px)&lt;/a&gt;
&lt;a href="#none" class="btn_big border"&gt;big(h:42px)&lt;/a&gt;</code></pre>
        </section>

        <section>
            <h4>tab</h4>
            <ul class="explain">
                <li><strong>tab-class</strong> : 탭 클래스 지정 // type_01~</li>
                <li><strong>:tab-slide</strong> : 탭 슬라이드 여부 // default="false" ※선택된 탭 중앙정렬</li>
                <li><strong>:tab-items</strong> : 탭 아이템 목록</li>
                <li><strong>@change</strong> : 탭 클릭 기능</li>
            </ul>

            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <Tabs @change="onTabChange1" v-model="CTabIdx" :tab-items="tabs" tab-class="type_01" :tab-slide="true" />
            </div>

            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="#none">OPEN</a>
            </p>
            <pre class="code_box">
<code>&lt;template&gt;
    &lt;Tabs @change="탭 클릭 기능" v-model="초기 선택 탭 index" :tab-items="탭 아이템 목록" tab-class="탭 클래스" :tab-slide="슬라이드여부" /&gt;
&lt;/template&gt;

&lt;script&gt;
import Tabs from "@/components/Tabs.vue";

export default {
    name: "Tabs",
    components: {
        Tabs,
    },
    data() {
        return {
            CTabIdx: 0, //최초 선택된 탭 index
            tabs: [ //탭 아이템 배열
                { item: "Tab01" },
                { item: "Tab02" }
            ]
        };
    },
    methods: {
        onTabChange1(idx) { //탭 클릭 기능
            console.log(idx);
        },
    },
}
&lt;/script&gt;</code></pre>
        </section>

        <section>
            <h4>search</h4>
            <ul class="explain">
                <li><strong>tab-class</strong> : 탭 클래스 지정 // type_01~</li>
            </ul>

            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <!-- <Buttons /> -->
            </div>

            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="#none">OPEN</a>
            </p>
            <pre class="code_box"><code></code></pre>
        </section>

    </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import Buttons from "@/components/Buttons.vue";

export default {
    name: "Elements",
    components: {
        Tabs,
        Buttons
    },
    data() {
        return {
            CTabIdx: 0,
            tabs: [
                { item: "Tab01" },
                { item: "Tab02" },
                { item: "Tab03" },
                { item: "Tab04" },
                { item: "Tab05" },
                { item: "Tab06" },
                { item: "Tab07" },
                { item: "Tab08" },
                { item: "Tab09" },
                { item: "Tab10" }
            ]
        };
    },
    methods: {
        onTabChange1(idx) {
            console.log(idx);
        },
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
}
</script>

<style scoped>
.tab_wrap {margin-bottom:0;}
</style>
