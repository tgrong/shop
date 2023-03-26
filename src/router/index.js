import { createRouter, createWebHistory } from 'vue-router';

// 配置组件对应路径
const routes = [
    {
        path: '/list',
        name: 'list',
        component: () => import('../views/list.vue'),
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
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router