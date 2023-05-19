import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/home/index.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/home/index.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/about/index.vue"),
    },
    {
      path: "/articles",
      name: "articles",
      component: () => import("../views/articles/index.vue"),
    },
    {
      path: "/collections",
      name: "collections",
      component: () => import("../views/collections/index.vue"),
    },
    {
      path: "/life",
      name: "life",
      component: () => import("../views/life/index.vue"),
      children: [
        {
          path: "/daily",
          name: "daily",
          component: () => import("../views/life/cpns/daily.vue"),
        },
        {
          path: "/music",
          name: "music",
          component: () => import("../views/life/cpns/music.vue"),
        },
      ],
    },
    {
      path: "/phone",
      name: "phone",
      component: () => import("../views/life/cpns/phone.vue"),
    },
    {
      path: '/albumdetails/:albumId',
      component: () => import("../components/album-details/index.vue")

    },
    {
      path: "/lover",
      name: "lover",
      component: () => import("../views/life/cpns/lover.vue"),
    },

    {
      path: "/message",
      name: "message",
      component: () => import("../views/message/index.vue"),
    },
    {
      path: "/articledetails/:articleId",
      component: () => import("../components/article-details/index.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../components/not-found/index.vue"),
    },
  ],
});

export default router;
