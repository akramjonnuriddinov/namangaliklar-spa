import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('../views/HomeView.vue')
    },
    {
      path: "/list",
      name: "list",
      component: () => import('../views/ListView.vue')
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import('../views/ContactView.vue')
    },
    {
      path: "/eko",
      name: "eko",
      component: () => import('../views/EkoView.vue')
    }
  ]
})

export default router
