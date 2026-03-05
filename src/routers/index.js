// routers/index.js

import { createWebHistory, createRouter } from "vue-router";
import { guideRoutes } from "./guide";

const routes = [
    // ✅ guide 라우트 병합
    ...guideRoutes,

    {
        path: '/',
        component: () => import("@/uiPub/main_wrap"),
        children: [
            {
                path: '',
                component: () => import("@/uiPub/gsr00/gsr-00-00-00")
            },
        ],
    },
    {
        path: '/sub',
        component: () => import("@/uiPub/sub_wrap"),
        children: [
            {
                path: '',
                component: () => import("@/uiPub/gsr01/gsr-01-00-00")
            },
        ],
    },
];

export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});