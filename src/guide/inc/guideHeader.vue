<template>
    <header>
        <router-link to="/guide">
            <h1>GSRetail Published Guide</h1>
        </router-link>

        <nav>
            <ul class="depth1">
                <li v-for="(i, index) in menu" :key="i.item" :class="{ current: $route.path.startsWith(i.link) }">
                    <router-link :to="i.link">
                        {{ i.item }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            menu: [
                { item: "Layout", link: "/guide/layout" },
                { item: "Elements", link: "/guide/elements" },
                { item: "Form", link: "/guide/form" },
                { item: "List", link: "/guide/list" },
                { item: "Popup", link: "/guide/popup" },
            ],
        };
    },
};
</script>

<style scoped>
    header {padding:10px 20px; text-align:center;}
    header h1 {padding-bottom:20px; color:#3366cc; font-size:2.4rem;}
    header nav {margin:0 -20px; border-top:1px solid #dfdfdf; border-bottom:1px solid #dfdfdf; justify-content:center;}
    header .depth1 > li {flex:1;}
    header .depth1 > li > a {padding:8px 6px; color:#fff; font-size:1.3rem; font-weight:700; background-color:#3366cc; position:relative; display:block;}
    header nav li.current a {color:#222; background-color:#fff;}
    header .depth1 > li + li > a:before {height:8px; margin-top:-4px; border-left:1px solid #dfdfdf; content:''; position:absolute; top:50%; left:0; display:block;}
    header nav li.current a:before, header nav li.current + li a:before {display:none;}
</style>
