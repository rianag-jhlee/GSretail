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
                <li><strong>btn-class</strong> : [사이즈] btn_small / btn_mid / btn_[default] / btn_big / btn_xl(h:64px, p:0 32px) , [타입] fill(배경색) /
                    border(테두리선) ※색상 추가 시 색상 가이드에 따른 [색상클래스] 추가 / 테두리 + 배경 혼합 시 border_[색생클래스]01~</li>
            </ul>

            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <div class="btnBox">
                    <Buttons btn-class="btn_small fill">small(h:30px)</Buttons>
                    <Buttons btn-class="btn_mid fill">mid(h:44px)</Buttons>
                    <Buttons>fill default(h:26px)</Buttons>
                    <Buttons btn-class="btn_big fill">big(h:52px)</Buttons>
                    <Buttons btn-class="btn_big primary">big(h:52px)</Buttons>
                    <Buttons btn-class="btn_big gray">big(h:52px)</Buttons>
                    <Buttons btn-class="btn_icon btn_big before">big(h:52px)</Buttons>
                    <Buttons btn-class="btn_icon btn_big after">big(h:52px)</Buttons>

                    <Buttons btn-class="btn_xl fill">xl(h:64px)</Buttons>
                    <Buttons btn-class="btn_xl primary">xl(h:64px)</Buttons>
                    <Buttons btn-class="btn_xl gray">xl(h:64px)</Buttons>
                    <Buttons btn-class="btn_icon btn_xl before">xl(h:64px)</Buttons>
                    <Buttons btn-class="btn_icon btn_xl after">xl(h:64px)</Buttons>

                    <Buttons btn-class="btn_small border">small(h:30px)</Buttons>
                    <Buttons btn-class="btn_mid border">mid(h:44px)</Buttons>
                    <Buttons btn-class="btn_border">border default(h:26px)</Buttons>
                    <Buttons btn-class="btn_big border">big(h:52px)</Buttons>
                    <Buttons btn-class="btn_xl border">xl(h:64px)</Buttons>
                </div>
            </div>

            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="#none">OPEN</a>
            </p>
            <pre class="code_box">
<code>&lt;!-- FILL --&gt;
&lt;Buttons btn-class="btn_small fill"&gt;small(h:30px)&lt;/Buttons&gt;
&lt;Buttons btn-class="btn_mid fill"&gt;mid(h:44px)&lt;/Buttons&gt;
&lt;Buttons&gt;fill default(h:26px)&lt;/Buttons&gt;
&lt;Buttons btn-class="btn_big fill"&gt;big(h:52px)&lt;/Buttons&gt;
&lt;Buttons btn-class="btn_big primary"&gt;big(h:52px)&lt;/Buttons&gt;
&lt;Buttons btn-class="btn_big gray"&gt;big(h:52px)&lt;/Buttons&gt;
&lt;Buttons btn-class="btn_icon btn_big before"&gt;big(h:52px)&lt;/Buttons&gt;
&lt;Buttons btn-class="btn_icon btn_big after"&gt;big(h:52px)&lt;/Buttons&gt;
&lt;Buttons btn-class="btn_xl fill"&gt;xl(h:64px)&lt;/Buttons&gt;
&lt;Buttons btn-class="btn_xl primary"&gt;xl(h:64px)&lt;/Buttons&gt;
&lt;Buttons btn-class="btn_xl gray"&gt;xl(h:64px)&lt;/Buttons&gt;
&lt;Buttons btn-class="btn_icon btn_xl before"&gt;xl(h:64px)&lt;/Buttons&gt;
&lt;Buttons btn-class="btn_icon btn_xl after"&gt;xl(h:64px)&lt;/Buttons&gt;

&lt;!-- BORDER --&gt;
&lt;Buttons btn-class="btn_small border"&gt;small(h:30px)&lt;/Buttons&gt;
&lt;Buttons btn-class="btn_mid border"&gt;mid(h:44px)&lt;/Buttons&gt;
&lt;Buttons btn-class="btn_border"&gt;border default(h:26px)&lt;/Buttons&gt;
&lt;Buttons btn-class="btn_big border"&gt;big(h:52px)&lt;/Buttons&gt;
&lt;Buttons btn-class="btn_xl border"&gt;xl(h:64px)&lt;/Buttons&gt;</code></pre>
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
                <li><strong>tab-class</strong> : 탭 클래스 지정 // type_01~type_04</li>
                <li><strong>tab-slide</strong> : 탭 슬라이드 여부 true/false // default="false" ※선택된 탭 중앙정렬</li>
                <li><strong>tab-items</strong> : 탭 아이템 목록</li>
                <li><strong>@change</strong> : 탭 클릭 기능</li>
            </ul>

            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <Tabs @change="onTabChange1" v-model="CTabIdx" :tab-items="tabs" tab-class="type_01" :tab-slide="false" />
                <div class="tab_content mt10" v-if="CTabIdx === 0">
                    <Tabs @change="onTabChange2" v-model="SUBTabIdx" :tab-items="tab2" tab-class="type_02" :tab-slide="false" />
                    <div class="sub_cont" v-if="SUBTabIdx === 0">1</div>
                    <div class="sub_cont" v-if="SUBTabIdx === 1">2</div>
                    <div class="sub_cont" v-if="SUBTabIdx === 2">3</div>
                </div>
                <div class="tab_content mt10" v-if="CTabIdx === 1">
                    <Tabs @change="onTabChange2" v-model="SUBTabIdx" :tab-items="tab2" tab-class="type_03" :tab-slide="false" />
                    <div class="sub_cont" v-if="SUBTabIdx === 0">4</div>
                    <div class="sub_cont" v-if="SUBTabIdx === 1">5</div>
                    <div class="sub_cont" v-if="SUBTabIdx === 2">6</div>
                </div>
                <div class="tab_content mt10" v-if="CTabIdx === 2">
                    <Tabs @change="onTabChange2" v-model="SUBTabIdx" :tab-items="tab2" tab-class="type_04" :tab-slide="false" />
                    <div class="sub_cont" v-if="SUBTabIdx === 0">7</div>
                    <div class="sub_cont" v-if="SUBTabIdx === 1">8</div>
                    <div class="sub_cont" v-if="SUBTabIdx === 2">9</div>
                </div>
            </div>

            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="#none">OPEN</a>
            </p>
            <pre class="code_box">
<code>&lt;template&gt;
    &lt;Tabs @change="탭 클릭 기능" v-model="CTabIdx(초기 선택 탭 index)" :tab-items="탭 아이템 목록" tab-class="탭 클래스" :tab-slide="슬라이드여부" /&gt;

    ============================== 실제 사용 시 =====================================

    &lt;Tabs @change="onTabChange1" v-model="CTabIdx" :tab-items="tabs" tab-class="type_01" :tab-slide="false" /&gt;
    &lt;div class="tab_content mt10" v-if="CTabIdx === 0"&gt;
        &lt;Tabs @change="onTabChange2" v-model="SUBTabIdx" :tab-items="tab2" tab-class="type_01" :tab-slide="false" /&gt;
        &lt;div class="sub_cont" v-if="SUBTabIdx === 0"&gt;1&lt;/div&gt;
        &lt;div class="sub_cont" v-if="SUBTabIdx === 1"&gt;2&lt;/div&gt;
        &lt;div class="sub_cont" v-if="SUBTabIdx === 2"&gt;3&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="tab_content mt10" v-if="CTabIdx === 1"&gt;
        &lt;Tabs @change="onTabChange2" v-model="SUBTabIdx" :tab-items="tab2" tab-class="type_01" :tab-slide="false" /&gt;
        &lt;div class="sub_cont" v-if="SUBTabIdx === 0"&gt;4&lt;/div&gt;
        &lt;div class="sub_cont" v-if="SUBTabIdx === 1"&gt;5&lt;/div&gt;
        &lt;div class="sub_cont" v-if="SUBTabIdx === 2"&gt;6&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="tab_content mt10" v-if="CTabIdx === 2"&gt;
        &lt;Tabs @change="onTabChange2" v-model="SUBTabIdx" :tab-items="tab2" tab-class="type_01" :tab-slide="false" /&gt;
        &lt;div class="sub_cont" v-if="SUBTabIdx === 0"&gt;7&lt;/div&gt;
        &lt;div class="sub_cont" v-if="SUBTabIdx === 1"&gt;8&lt;/div&gt;
        &lt;div class="sub_cont" v-if="SUBTabIdx === 2"&gt;9&lt;/div&gt;
    &lt;/div&gt;
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
            SUBTabIdx: 0, //최초 선택된 서브 탭 index   
            tabs: [ //탭 아이템 배열
                { item: "Tab01" },
                { item: "Tab02" },
                { item: "Tab03" }
            ],
            tab2: [ //탭 아이템 배열
                { item: "sub01" },
                { item: "sub02" },
                { item: "sub03" }
            ],
        };
    },
    methods: {
        onTabChange1(idx) {
            // [수정 핵심] 상위 탭 변경 시 하위 탭 인덱스를 0으로 초기화
            this.CTabIdx = idx;
            this.SUBTabIdx = 0; 
            console.log('Main Tab:', idx);
        },
        onTabChange2(idx) {
            this.SUBTabIdx = idx;
            console.log('Sub Tab:', idx);
        }
    },
}
&lt;/script&gt;</code></pre>
        </section>

        <section>
            <h4>accordion</h4>
            <ul class="explain">
                <li><strong>Accordion</strong> · <code>multiple</code>: <code>false</code>(기본) Single — 하나 열리면 나머지 닫힘 / <code>true</code> Multi — 여러 패널 동시 오픈</li>
                <li><strong>AccordionItem</strong> · <code>item-key</code> 형제 간 고유 값(문자·숫자) 필수 · <code>#title</code> 제목 슬롯 · 기본 슬롯 본문</li>
            </ul>

            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box accordion_guide_box">
                <p class="accordion_guide_label">Single · <code>:multiple="false"</code> (기본)</p>
                <Accordion class="accordion_guide_acc">
                    <AccordionItem item-key="sg1">
                        <template #title>첫 번째 항목</template>
                        <p>한 번에 하나만 열립니다. 다른 항목을 열면 이전 패널은 닫힙니다.</p>
                    </AccordionItem>
                    <AccordionItem item-key="sg2">
                        <template #title>두 번째 항목</template>
                        <p>본문은 문단, 리스트 등 자유롭게 넣을 수 있습니다.</p>
                    </AccordionItem>
                    <AccordionItem item-key="sg3">
                        <template #title>세 번째 항목</template>
                        <p>제목은 <code>#title</code> 슬롯으로 구성합니다.</p>
                    </AccordionItem>
                </Accordion>

                <p class="accordion_guide_label">Multi · <code>:multiple="true"</code></p>
                <Accordion :multiple="true" class="accordion_guide_acc">
                    <AccordionItem item-key="m1">
                        <template #title>동시 오픈 A</template>
                        <p>여러 패널을 동시에 열 수 있습니다.</p>
                    </AccordionItem>
                    <AccordionItem item-key="m2">
                        <template #title>동시 오픈 B</template>
                        <p>각 항목의 <code>item-key</code>는 Accordion 안에서 중복되지 않게 지정합니다.</p>
                    </AccordionItem>
                </Accordion>
            </div>

            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="#none">OPEN</a>
            </p>
            <pre class="code_box">
<code>&lt;template&gt;
    &lt;Accordion&gt;
        &lt;AccordionItem item-key="1"&gt;
            &lt;template #title&gt;제목&lt;/template&gt;
            &lt;p&gt;본문&lt;/p&gt;
        &lt;/AccordionItem&gt;
    &lt;/Accordion&gt;

    &lt;Accordion :multiple="true"&gt;
        &lt;AccordionItem item-key="a"&gt;
            &lt;template #title&gt;Multi 제목&lt;/template&gt;
            &lt;p&gt;본문&lt;/p&gt;
        &lt;/AccordionItem&gt;
    &lt;/Accordion&gt;
&lt;/template&gt;

&lt;script setup&gt;
import Accordion from "@/components/Accordion.vue";
import AccordionItem from "@/components/AccordionItem.vue";
&lt;/script&gt;</code></pre>
        </section>

        <section>
            <h4>card</h4>
            <ul class="explain">
                <li><strong>CardItem</strong> · 이미지(<code>#image</code>) + 제목(<code>#title</code>) + 본문(기본 슬롯) · 쓰지 않는 영역은 슬롯 자체를 생략</li>
                <li>이미지는 부모에서 <code>import</code> 후 <code>&lt;img&gt;</code>로 <code>#image</code>에 전달 · 루트는 <code>article.card_item</code></li>
                <li>목록은 <code>ul</code> + <code>li</code>로 감싸 <code>role="list"</code> 유지 · 실제 페이지에서는 <code>v-for</code>로 데이터 배열과 매핑하면 됨</li>
            </ul>

            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <ul class="card_list" role="list">
                    <li
                        v-for="card in cardGuideList"
                        :key="card.key"
                    >
                        <CardItem>
                            <template v-if="card.image" #image>
                                <img :src="card.image" :alt="card.imgAlt || ''" />
                            </template>
                            <template v-if="card.title" #title>{{ card.title }}</template>
                            <p v-if="card.desc">{{ card.desc }}</p>
                        </CardItem>
                    </li>
                </ul>
            </div>

            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="#none">OPEN</a>
            </p>
            <pre class="code_box" v-pre>
<code>&lt;template&gt;
    &lt;ul class="card_list" role="list"&gt;
        &lt;li v-for="card in cards" :key="card.id"&gt;
            &lt;CardItem&gt;
                &lt;template v-if="card.image" #image&gt;
                    &lt;img :src="card.image" :alt="card.imgAlt || ''" /&gt;
                &lt;/template&gt;
                &lt;template v-if="card.title" #title&gt;{{ card.title }}&lt;/template&gt;
                &lt;p v-if="card.desc"&gt;{{ card.desc }}&lt;/p&gt;
            &lt;/CardItem&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";
import CardItem from "@/components/CardItem.vue";
import thumb from "@/assets/images/news_01.png";

const cards = ref([
    { id: 1, image: thumb, imgAlt: "", title: "제목", desc: "본문" },
]);
&lt;/script&gt;</code></pre>
        </section>

    </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import Buttons from "@/components/Buttons.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import Accordion from "@/components/Accordion.vue";
import AccordionItem from "@/components/AccordionItem.vue";
import CardItem from "@/components/CardItem.vue";
import cardGuideImg1 from "@/assets/images/guide/main_bg_01.png";
import cardGuideImg2 from "@/assets/images/guide/main_bg_02.png";
import cardGuideImg3 from "@/assets/images/guide/main_bg_03.png";

export default {
    name: "Elements",
    components: {
        BreadCrumb,
        Tabs,
        Buttons,
        Accordion,
        AccordionItem,
        CardItem,
    },
    data() {
        return {
            /*카드 가이드 목록*/ 
            cardGuideList: [
                {
                    key: 1,
                    image: cardGuideImg1,
                    imgAlt: "",
                    title: "이미지·제목·본문 전체",
                    desc: "카드 본문입니다. 문단·리스트 등 자유롭게 넣을 수 있습니다.",
                },
                {
                    key: 2,
                    image: cardGuideImg2,
                    imgAlt: "",
                    title: "제목만 (본문 없음)",
                    desc: null,
                },
                {
                    key: 3,
                    image: cardGuideImg3,
                    imgAlt: "",
                    title: null,
                    desc: "제목 없이 본문만 있는 카드입니다.",
                },
                {
                    key: 4,
                    image: cardGuideImg1,
                    imgAlt: "이미지 단독 카드",
                    title: null,
                    desc: null,
                },
            ],

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
            CTabIdx: 0, //최초 선택된 탭 index
            SUBTabIdx: 0, //최초 선택된 서브 탭 index   
            tabs: [ //탭 아이템 배열
                { item: "Tab01" },
                { item: "Tab02" },
                { item: "Tab03" }
            ],
            tab2: [ //탭 아이템 배열
                { item: "sub01" },
                { item: "sub02" },
                { item: "sub03" }
            ],
        };
    },
    methods: {
        /* tab 관련 함수 */
        onTabChange1(idx) {
            // [수정 핵심] 상위 탭 변경 시 하위 탭 인덱스를 0으로 초기화
            this.CTabIdx = idx;
            this.SUBTabIdx = 0; 
            console.log('Main Tab:', idx);
        },
        onTabChange2(idx) {
            this.SUBTabIdx = idx;
            console.log('Sub Tab:', idx);
        }
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

.accordion_guide_box {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 720px;
}

.accordion_guide_label {
    margin: 0;
    font-size: 13px;
    font-weight: 600;
    color: #666;
}

.accordion_guide_acc {
    width: 100%;
}


/* 카드 가이드: ul.card_list + CardItem */
.card_list {
    display: grid;
    width: 100%;
    max-width: 1200px;
    margin: 0;
    padding: 0;
    list-style: none;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
    box-sizing: border-box;
}

.card_list > li {
    margin: 0;
    padding: 0;
    min-width: 0;
}

@media (max-width: 1024px) {
    .card_list {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 768px) {
    .card_list {
        grid-template-columns: minmax(0, 1fr);
        gap: 16px;
    }
}

</style>
