import { createRouter, createWebHistory } from 'vue-router'

const base = import.meta.env.BASE_URL

const router = createRouter({
  history: createWebHistory(base),
  routes: [
    { path: '/', redirect: '/toggles' },
    { path: '/toggles', component: () => import('../pages/Toggles.vue') },
    { path: '/buttons', component: () => import('../pages/Buttons.vue') },
    { path: '/google', component: () => import('../pages/Google.vue') },
    { path: '/elements', component: () => import('../pages/Elements.vue') }
  ]
})

export default router
