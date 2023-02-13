import {createRouter,createWebHashHistory,RouteRecordRaw} from "vue-router";


const routes:RouteRecordRaw[]=[
    {
        path:'',
        name:'index',
        component:()=>import('./pages/index.vue'),
        redirect:{
          name:'index-home'
        },
        children:[
            {
                path:'/home',
                name:'index-home',
                component:()=>import('./pages/home/index.vue'),
                redirect:{
                    name:'index-home-popular'
                },
                children:[
                    {
                        path:'/popular',
                        name:'index-home-popular',
                        component:()=>import('./pages/home/popular.vue')
                    },
                    {
                        path:'/following',
                        name:'index-home-following',
                        component:()=>import('./pages/home/following.vue')
                    },
                ]
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