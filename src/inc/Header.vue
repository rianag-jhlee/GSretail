<template>
    <header>
        <nav id="gnb_nav">
            <ul class="depth1">
                <li v-for="item1 in menuList" :key="item1.title" @focusin="setFocus($event)"
                    @focusout="removeFocus($event)">

                    <a :href="item1.children && item1.children.length ? item1.path : '#none'"
                        :target="item1.blank ? '_blank' : null">{{ item1.title }}</a>

                    <ul class="depth2" v-if="item1.children && item1.children.length">
                        <li v-for="item2 in item1.children" :key="item2.title">
                            <span v-if="item2.children && item2.children.length">{{ item2.title }}</span>
                            <a v-else :href="item2.path" :target="item2.blank ? '_blank' : null">{{ item2.title }}</a>
                            <ul class="depth3" v-if="item2.children && item2.children.length">
                                <li v-for="item3 in item2.children" :key="item3.title">
                                    <a :href="item3.path" :target="item3.blank ? '_blank' : null">{{ item3.title }}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                </li>
            </ul>
        </nav>
    </header>
</template>

<script>

export default {
    name: 'Header',
    props: {
    },
    data() {
        return {
            menuList: [ //[새창열기] brank : true/false
                {
                    title: 'ABOUT GSR',
                    path: '#none',
                    children: [
                        {
                            title: 'CEO 인사말',
                            path: '#none'
                        }, {
                            title: '회사소개',
                            path: '#none',
                            children: [
                                { title: 'CEO 경영이념/비전', path: '#none' },
                                { title: 'GS Way & GS Value', path: '#none' }
                            ]
                        }, {
                            title: '연혁',
                            path: '#none'
                        }, {
                            title: 'CI/BI',
                            path: '#none'
                        }, {
                            title: '위치',
                            path: '#none'
                        }
                    ]
                },
                {
                    title: 'BRAND',
                    path: '#none',
                    children: [
                        {
                            title: 'GS25',
                            path: '#none',
                            children: [
                                { title: 'GS25 소개 + 이미지', path: '#none' },
                                { title: '홈페이지', path: 'http://gs25.gsretail.com/gscvs/ko/main', blank: true },
                                { title: '공식 인스타그램', path: '#none', blank: true },
                                { title: '공식 유튜브', path: '#none', blank: true }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        /* gnb open */
        handleMouseEnter(e) {
            const li = e.currentTarget;            
            li.classList.add("is-open");
        },
        handleMouseLeave(e) {
            const li = e.currentTarget;
            if (li.contains(e.relatedTarget)) return;
            li.classList.remove("is-open");
        },

        /* gnb open : 접근성 관련 */
        setFocus(e) {
            const li = e.currentTarget;
            const CLOSE_DELAY = 150; // methods 안에서 상수 정의

            // 기존에 타이머가 있으면 clear
            if (li.closeTimer) clearTimeout(li.closeTimer);

            li.closeTimer = setTimeout(() => {
                if (li.contains(document.activeElement)) {
                    li.classList.add("is_open");
                }
                li.closeTimer = null;
            }, CLOSE_DELAY);
        },
        removeFocus(e) {
            const li = e.currentTarget;
            const CLOSE_DELAY = 150; // methods 안에서 상수 정의

            if (li.closeTimer) clearTimeout(li.closeTimer);

            li.closeTimer = setTimeout(() => {
                if (!li.contains(document.activeElement)) {
                    li.classList.remove("is_open");
                }
                li.closeTimer = null;
            }, CLOSE_DELAY);
        }
        /* //gnb open : 접근성 관련 */
    }
}
</script>

<style></style>
