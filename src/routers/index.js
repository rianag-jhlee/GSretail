import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import("@/uiPub/main_wrap"),
        name: "main",
        children: [
            {
                path: '/',
                component: () => import("@/uiPub/gsr00/gsr-00-00-00")
            },
        ],
    },
    {//sub
        path: '/sub',//임시 path
        component: () => import("@/uiPub/sub_wrap"),
        name: "sub",
        children: [
            {
                path: '/sub',//임시 path
                component: () => import("@/uiPub/gsr01/gsr-01-00-00")
            },
        ],
    },
    // {//board
    //     path: '/board',
    //     component: () => import("@/uiPub/board_wrap"),
    //     name: "board",
    //     children: [
    //         {
    //             path: '/',
    //             component: () => import("@/uiPub/gsr00/gsr-00-00-00")
    //         },
    //     ],
    // },

];

export const router = createRouter({
    history: createWebHistory(),
    routes
});