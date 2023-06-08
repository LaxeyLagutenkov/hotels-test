import {createRouter, createWebHistory, type RouteRecordRaw, type RouterOptions} from "vue-router";
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/hotels',
    name: 'hotels',
    component: () => import('@/views/HotelsView.vue')
  }
];

const router = createRouter(<RouterOptions>{
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
