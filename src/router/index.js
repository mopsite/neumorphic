import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/neumorphic/'),
  routes: [
    { path: '/', redirect: '/toggles' },
    { path: '/toggles', component: () => import('../pages/Toggles.vue') },
    { path: '/buttons', component: () => import('../pages/Buttons.vue') },
    { path: '/google', component: () => import('../pages/Google.vue') },
    { path: '/elements', component: () => import('../pages/Elements.vue') }
  ]
})

export default router
