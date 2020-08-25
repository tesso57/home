import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export enum RouteName {
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
    name: RouteName.HOME,
    component: () => import(/* webpackChunkName: "home" */ "@/views/home.vue")
  },
  {
    path: "/about",
    name: RouteName.ABOUT,
    component: () => import(/* webpackChunkName: "about" */ "@/views/about.vue")
  },
  {
    path: "/works",
    name: RouteName.WORKS,
    component: () => import(/* webpackChunkName: "works" */ "@/views/works.vue")
  },
  {
    path: "/contact",
    name: RouteName.CONTACT,
    component: () =>
      import(/* webpackChunkName: "contact" */ "@/views/contact.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
