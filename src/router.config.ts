import {createRouter,createWebHashHistory,RouteRecordRaw} from "vue-router";


const routes:RouteRecordRaw[]=[
    {
        path:'',
        name:'index',
        component:()=>import('./pages/index.vue'),
        children:[
            {
                path:'',
                name:'index-home',
                component:()=>import('./pages/home/index.vue')
            },
            {
                path:'/user',
                name:'index-user',
                component:()=>import('./pages/user/index.vue')
            },
            {
                path:'/search',
                name:'index-search',
                component:()=>import('./pages/search/index.vue')
            },

        ]
    },
]

const router=createRouter({
    history:createWebHashHistory(),
    routes
})

export default router