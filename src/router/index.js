import { createRouter, createWebHistory } from 'vue-router'

// const About = () => import("../views/about/index.vue")
// const Articles = () => import("../views/articles/index.vue")
// const Collections = () => import("../views/collections/index.vue")
// const Home = () => import("../views/home/index.vue")
// const Life = () => import("../views/life/index.vue")
// const Message = () => import("../views/message/index.vue")

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import("../views/Home/index.vue")
    },
    {
      path: '/home',
      name: 'home',
      component: () => import("../views/Home/index.vue")
    },
    {
      path: '/about',
      name: 'about',
      component: () => import("../views/About/index.vue")
    },
    {
      path: '/articles',
      name: 'articles',
      component: () => import("../views/Articles/index.vue")
    },
    {
      path: '/collections',
      name: 'collections',
      component: () => import("../views/Collections/index.vue")
    },
    {
      path: '/life',
      name: 'life',
      component: () => import("../views/Life/index.vue")
    },
    {
      path: '/message',
      name: 'message',
      component: () => import("../views/Message/index.vue")
    }
  ]
})

export default router
