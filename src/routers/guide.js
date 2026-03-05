export const guideRoutes = [
    {
        path: '/guide',
        component: () => import("@/guide/guide_wrap"),
        name: "Guide_wrap",
        children: [
            { path: '', component: () => import("@/guide/index") },
            { path: 'layout', component: () => import("@/guide/layout") },
            { path: 'popup', component: () => import("@/guide/popup") },
        ]
    },
];