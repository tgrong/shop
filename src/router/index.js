import { createRouter, createWebHistory } from 'vue-router';

// 配置组件对应路径
const routes = [
    {
        path: '/list',
        name: 'list',
        component: () => import('../views/list.vue'),
        meta: {
            isNoLogin: true
        },
        children: [
            {
                path: 'grade',
                name: 'grade',
                component: () => import('../views/grade.vue'),
                children: [
                    {
                        path: 'cls',
                        name: 'cls',
                        component: () => import('../views/cls.vue')
                    }
                ]
            }
        ]
    },
    {
        path: '/list/:gradeId',
        name: 'list2',
        component: () => import('../views/list.vue')
    },
    {
        path: '/stulist',
        name: 'stulist',
        component: () => import('../views/ch8/stuList.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/dispstu/:id',
        name: 'dispstu',
        component: () => import('../views/ch8/dispStu.vue')
    },
    {
        path: '/s-1',
        name: 's-1',
        component: () => import('../components/ch10/useStore.vue')
    },
    {
        path: '/error',
        redirect: '/list',
    },
    // {
    //     path: '/error',
    //     redirect: {
    //         name: 'list',
    //         query: {
    //             from: 'redirect',
    //         }
    //     }
    // }
    // {
    //     path: '/error',
    //     redirect: () => {
    //         // 从当前登录用户信息中获取角色Id
    //         const { roleId } = loginInfo

    //         // 根据不同角色进行跳转
    //         switch (roleId) {
    //             // 管理员
    //             case 1:
    //                 return '/admin'

    //             // 普通用户
    //             case 2:
    //                 return '/home'

    //             // 其他
    //             default:
    //                 return '/login'
    //         }
    //     }
    // }
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('../views/404.vue'),
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach((to, from) => {
    // const loginUser = localStorage.getItem("loginUser")
    // if (!loginUser) return '/login'
})

export default router