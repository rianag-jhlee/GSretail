<template>
    <div class="breadcrumb">
        <ul>
            <!-- home -->
            <li class="home">
                <a href="/">Home</a>
            </li>

            <!-- depth1 -->
            <li v-if="depth1" class="depth_1">
                <button v-if="depth1.children?.length">{{ depth1.text }}</button>
                <a v-else :href="depth1.link">{{ depth1.text }}</a>

                <ul v-if="depth1.children?.length">
                    <li v-for="child in depth1.children" :key="child.link">
                        <a :href="child.link">{{ child.text }}</a>
                    </li>
                </ul>
            </li>

            <!-- depth2 -->
            <li v-if="depth2" class="depth_2">
                <button v-if="depth2.children?.length">{{ depth2.text }}</button>
                <a v-else :href="depth2.link">{{ depth2.text }}</a>

                <ul v-if="depth2.children?.length">
                    <li v-for="child in depth2.children" :key="child.link">
                        <a :href="child.link">{{ child.text }}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import $ from "jquery";

export default {
    name: "Breadcrumb",

    props: {
        items: {
            type: Array,
            default: () => []
        }
    },

    computed: {
        depth1() {
            return this.items[0] || null;
        },
        depth2() {
            return this.items[1] || null;
        }
    },

    mounted() {
        const $breadcrumb = $(this.$el);

        $breadcrumb.find("button").each(function () {
            $(this).on("click", function (e) {
                e.stopPropagation();

                const $btn = $(this);
                const $ul = $btn.siblings("ul");

                $ul.stop(true, true).slideToggle(200);

                $btn.closest("li").siblings("li").find("ul").stop(true, true).slideUp(200);
            });
            
            $(this).siblings('ul').find('a').on("click", function (e) {
                $(this).closest('ul').siblings('button').text($(this).text());

                $(this).closest('ul').stop(true, true).slideUp(200);
            });
        });

        $("body").on("click.breadcrumb", function () {
            $breadcrumb.find("ul ul").slideUp(200);
        });

        $breadcrumb.on("click", function (e) {
            e.stopPropagation();
        });
    },

    beforeUnmount() {
        $("body").off("click.breadcrumb");
    }
};
</script>

<style scoped></style>