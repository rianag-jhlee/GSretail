import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/", //기본 path이면
        component: () => import("@/components/HelloWorld")// '/views/main.vue' 콤포넌트를 호출
    }, {
        path: "/test", //기본 path이면
        component: () => import("@/components/TestComponent")// '/views/main.vue' 콤포넌트를 호출
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});