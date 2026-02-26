<template>
    <header>
        <nav>
            <ul>
                <li v-for="item1 in menuList" :key="item1.title">
                    <!-- 자식 메뉴 존재 여부에 따라 다르게 렌더 -->
                    <strong v-if="item1.children && item1.children.length">{{ item1.title }}</strong>
                    <a v-else :href="item1.path" :target="item1.blank ? '_blank' : null">{{ item1.title }}</a>
                    <!-- //자식 메뉴 존재 여부에 따라 다르게 렌더 -->

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
                                { title: '홈페이지', path: 'http://gs25.gsretail.com/gscvs/ko/main', blank:true },
                                { title: '공식 인스타그램', path: '#none', blank:true },
                                { title: '공식 유튜브', path: '#none', blank:true }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style>
</style>
