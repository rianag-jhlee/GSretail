import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("@/views/gsr00/gsr-00-00-00")
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});