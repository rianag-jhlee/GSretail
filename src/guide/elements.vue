<template>
    <div class="contents">

        <h2>Elements</h2>

        <section>
            <h4>button</h4>
            <ul class="explain">
                <li><strong>a / button</strong> : 테그와 상관없이 사용 가능.</li>
                <li><strong>size</strong> : class = btn_small / btn_mid / btn_[default] / btn_big</li>
                <li><strong>type</strong> : class = fill(배경색) / border(테두리선) ※색상 추가 시 색상 가이드에 따른 [색상클래스] 추가 / 테두리 + 배경
                    혼합 시 border_[색생클래스]01~</li>
            </ul>

            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <div class="btnBox">
                    <a href="#none" class="btn_small fill">small(h:20px)</a>
                    <a href="#none" class="btn_mid fill">mid(h:24px)</a>
                    <a href="#none" class="btn_fill">fill(h:26px)</a>
                    <a href="#none" class="btn_big fill">big(h:42px)</a>

                    <a href="#none" class="btn_small border">small(h:20px)</a>
                    <a href="#none" class="btn_mid border">mid(h:24px)</a>
                    <a href="#none" class="btn_border">border(h:26px)</a>
                    <a href="#none" class="btn_big border">big(h:42px)</a>
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
                <li><strong>more 버튼 추가 시</strong> :  more-txt="더보기" more-link="/more"</li>
            </ul>

            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <Tabs @change="onTabChange1" v-model="CTabIdx" :tab-items="tabs" tab-class="tab_type_default" tab-type="slide" />
            </div>

            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="#none">OPEN</a>
            </p>
            <pre class="code_box">
<code></code></pre>
        </section>

    </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";

export default {
    name: "Elements",
    props: ["openModal"],
    components: {
        Tabs,
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
                { item: "Tab10" },
                { item: "Tab11" },
                { item: "Tab12" },
                { item: "Tab13" },
                { item: "Tab14" },
                { item: "Tab15" },
                { item: "Tab16" },
                { item: "Tab17" },
                { item: "Tab18" },
                { item: "Tab19" }
            ],
        };
    },
    methods: {
        onTabChange1(idx) {
            console.log("기본 탭 변경:", idx);
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

<style scoped></style>
