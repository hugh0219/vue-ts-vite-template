import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 可选：自定义配置
NProgress.configure({
  easing: 'ease', // 动画曲线
  speed: 500, // 动画速度（ms）
  showSpinner: false, // 是否显示加载图标
  trickleSpeed: 200 // 自动增量间隔（ms）
})

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

router.beforeEach((to, from, next) => {
  console.log(to, from)
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
