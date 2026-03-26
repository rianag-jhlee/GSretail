<template>
    <div class="contents">

        <h2>Elements</h2>

        <section>
            <h4>Headline (H2 ~ 5)</h4>
            <ul class="explain">
                <li><strong>h2 ~ h3</strong> : 탭, 버튼 등이 포함될 수 있으므로, h2 : "tit_wrap" / h3 : "subtit_wrap"로 감싼 후 사용</li>
                <li><strong>h4 ~ h5</strong> : 단일테그로 사용</li>
            </ul>

            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <div class="title_wrap">
                    <h2>Headline2</h2>
                    <p class="explain">h2 설명글</p>
                </div>

                <div class="subtit_wrap">
                    <h3>Headline3</h3>
                </div>

                <h4>Headline4</h4>

                <h5>Headline5</h5>
            </div>

            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="#none">OPEN</a>
            </p>
            <pre class="code_box">
<code>&lt;!-- h2 --&gt;
&lt;div class="title_wrap"&gt;
    &lt;h2&gt;Headline2&lt;/h2&gt;
&lt;/div&gt;

&lt;!-- h3 --&gt;
&lt;div class="subtit_wrap"&gt;
    &lt;h3&gt;Headline3&lt;/h3&gt;
&lt;/div&gt;

&lt;!-- h4 --&gt;
&lt;h4&gt;Headline4&lt;/h4&gt;

&lt;!-- h5 --&gt;
&lt;h5&gt;Headline5&lt;/h5&gt;</code></pre>
        </section>

        <section>
            <h4>button</h4>
            <ul class="explain">
                <li><strong>tag :</strong> : a / button 테그 선택 // default="button"</li>
                <li><strong>btn-class</strong> : [사이즈] btn_small / btn_mid / btn_[default] / btn_big , [타입] fill(배경색) /
                    border(테두리선) ※색상 추가 시 색상 가이드에 따른 [색상클래스] 추가 / 테두리 + 배경 혼합 시 border_[색생클래스]01~</li>
            </ul>

            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <div class="btnBox">
                    <Buttons btn-class="btn_small fill">small(h:20px)</Buttons>
                    <Buttons btn-class="btn_mid fill">mid(h:24px)</Buttons>
                    <Buttons>fill default(h:26px)</Buttons>
                    <Buttons btn-class="btn_big fill">big(h:42px)</Buttons>

                    <Buttons btn-class="btn_small border">small(h:20px)</Buttons>
                    <Buttons btn-class="btn_mid border">mid(h:24px)</Buttons>
                    <Buttons btn-class="btn_border">border default(h:26px)</Buttons>
                    <Buttons btn-class="btn_big border">big(h:42px)</Buttons>
                </div>
            </div>

            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="#none">OPEN</a>
            </p>
            <pre class="code_box">
<code>&lt;!-- FILL --&gt;
&lt;Buttons btn-class="btn_small fill"&gt;small(h:20px)&lt;/Buttons&gt;
&lt;Buttons btn-class="btn_mid fill"&gt;mid(h:24px)&lt;/Buttons&gt;
&lt;Buttons&gt;fill default(h:26px)&lt;/Buttons&gt;
&lt;Buttons btn-class="btn_big fill"&gt;big(h:42px)&lt;/Buttons&gt;

&lt;!-- BORDER --&gt;
&lt;Buttons btn-class="btn_small border"&gt;small(h:20px)&lt;/Buttons&gt;
&lt;Buttons btn-class="btn_mid border"&gt;mid(h:24px)&lt;/Buttons&gt;
&lt;Buttons btn-class="btn_border"&gt;border default(h:26px)&lt;/Buttons&gt;
&lt;Buttons btn-class="btn_big border"&gt;big(h:42px)&lt;/Buttons&gt;</code></pre>
        </section>

        <section>
            <h4>breadcrumb</h4>

            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <BreadCrumb :items="breadcrumb" />
            </div>

            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="#none">OPEN</a>
            </p>
            <pre class="code_box">
<code>&lt;template&gt;
    &lt;BreadCrumb :items="breadcrumb" /&gt;
&lt;/template&gt;

&lt;script&gt;
import Tabs from "@/components/BreadCrumb.vue";

data() {
    return {
        /* breadcrumb 관련 */
        breadcrumb: [
            {
                text: "1Depth",
                link: "#none",
                children: [
                    { text: "1Depth-1", link: "#none" },
                    { text: "1Depth-2", link: "#none" }
                ]
            },
            {
                text: "2Depth",
                link: "#none",
                children: [
                    { text: "2Depth-1", link: "#none" },
                    { text: "2Depth-2", link: "#none" }
                ]
            }
        ]
    }
}
&lt;/script&gt;</code></pre>
        </section>

        <section>
            <h4>tab</h4>
            <ul class="explain">
                <li><strong>tab-class</strong> : 탭 클래스 지정 // type_01~</li>
                <li><strong>tab-slide</strong> : 탭 슬라이드 여부 true/false // default="false" ※선택된 탭 중앙정렬</li>
                <li><strong>tab-items</strong> : 탭 아이템 목록</li>
                <li><strong>@change</strong> : 탭 클릭 기능</li>
            </ul>

            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <Tabs @change="onTabChange1" v-model="CTabIdx" :tab-items="tabs" tab-class="type_01" :tab-slide="false" />
            </div>

            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="#none">OPEN</a>
            </p>
            <pre class="code_box">
<code>&lt;template&gt;
    &lt;Tabs @change="탭 클릭 기능" v-model="CTabIdx(초기 선택 탭 index)" :tab-items="탭 아이템 목록" tab-class="탭 클래스" :tab-slide="슬라이드여부" /&gt;
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

    </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import Buttons from "@/components/Buttons.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";

export default {
    name: "Elements",
    components: {
        BreadCrumb,
        Tabs,
        Buttons
    },
    data() {
        return {
            /* breadcrumb 관련 */
            breadcrumb: [
                {
                    text: "1Depth",
                    link: "#none",
                    children: [
                        { text: "1Depth-1", link: "#none" },
                        { text: "1Depth-2", link: "#none" }
                    ]
                },
                {
                    text: "2Depth",
                    link: "#none",
                    children: [
                        { text: "2Depth-1", link: "#none" },
                        { text: "2Depth-2", link: "#none" }
                    ]
                }
            ],

            /* tab관련 */
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
.tab_wrap {
    margin-bottom: 0;
}
</style>
