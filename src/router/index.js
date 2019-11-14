import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue'),
  },
  {
    path: '/passwordreset',
    name: 'passwordreset',
    component: () => import('@/views/PasswordReset.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: "",
        name: "user",
        component: () => import('@/views/Home/User.vue')
      },
      {
        path: "shop",
        name: "shop",
        component: () => import('@/views/Home/Shop.vue')
      },
      {
        path: "mine",
        name: "mine",
        component: () => import('@/views/Home/Mine.vue')
      },
      {
        path: "wallet",
        name: "wallet",
        component: () => import('@/views/Home/Wallet.vue')
      },
      {
        path: "nodelist",
        name: "nodelist",
        component: () => import('@/views/Home/NodeList.vue')
      },
      {
        path: "tutorial",
        name: "tutorial",
        component: () => import('@/views/Home/Tutorial.vue')
      },
      {
        path: "workorder",
        name: "workorder",
        component: () => import('@/views/Home/Wo.vue')
      },

      {
        path: "workorderlist",
        name: "workorderlist",
        component: () => import('@/views/Home/WorkOrderlist.vue')
      },

    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
