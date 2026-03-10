<template>
    <div class="contents">
        <h2>Contents</h2>

        <div class="index">
            <dl>
                <dt>Layout</dt>
                <dd>
                    <ul>
                        <li>layout(wrap)</li>
                        <li><del>header</del></li>
                        <li><del>footer</del></li>
                        <li><del>headline(h2~5)</del></li>
                        <li><del>breadcrumb</del></li>
                    </ul>
                </dd>
            </dl>

            <dl>
                <dt>Elements</dt>
                <dd>
                    <ul>
                        <li>button</li>
                        <li>tab</li>
                        <li><del>search</del></li>
                        <li><del>pagination</del></li>
                    </ul>
                </dd>
            </dl>

            <dl>
                <dt>Forms</dt>
                <dd>
                    <ul>
                        <li>input</li>
                        <li>radio / check</li>
                        <li>selectbox</li>
                        <li>multi form</li>
                    </ul>
                </dd>
            </dl>

            <dl>
                <dt>List</dt>
                <dd>
                    <ul>
                        <li>board</li>
                        <li>thumb</li>
                        <li>gallery</li>
                    </ul>
                </dd>
            </dl>

            <dl>
                <dt>Popup</dt>
                <dd>
                    <ul>
                        <li>modal</li>
                        <li>toast</li>
                    </ul>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GuideIndex',
    props: {
        path:{
            type:String,
            default:'index'
        }
    }
}
</script>

<style scoped>
    .index {margin-top:-36px; margin-left:-16px; display:flex; flex-wrap:wrap;}
    .index dl {padding-top:36px; padding-left:16px; display:flex; flex:1; flex-direction:column;}
    .index dt {margin-bottom:12px; font-size:1.6rem; font-weight:700;}
    .index dd {padding:12px 16px; background-color:#eee; border-radius:4px; flex:1;}
    .index li {padding-left:10px; position:relative;}
    .index li + li {margin-top:6px;}
    .index li:before {width:4px; border-top:1px solid #222; content:''; position:absolute; top:11px; left:0;}
</style>
