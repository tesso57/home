import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export enum RoutName {
  HOME = "home",
  ABOUT = "about",
  WORKS = "works",
  CONTACT = "contact"
}

const routes: Array<RouteRecordRaw> = [
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  {
    path: "/",
    name: RoutName.HOME,

    component: () => import(/* webpackChunkName: "Main" */ "@/views/Main.vue")
  },
  {
    path: "/about",
    name: RoutName.ABOUT,
    component: () => import(/* webpackChunkName: "Main" */ "@/views/Main.vue")
  },
  {
    path: "/works",
    name: RoutName.WORKS,
    component: () => import(/* webpackChunkName: "Main" */ "@/views/Main.vue")
  },
  {
    path: "/contact",
    name: RoutName.CONTACT,
    component: () => import(/* webpackChunkName: "Main" */ "@/views/Main.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
