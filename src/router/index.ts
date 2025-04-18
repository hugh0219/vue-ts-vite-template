import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  // 会话页面
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/agents-talk',
    name: 'desktop-agents-talk',
    component: () => import('@/views/agent-talk/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
