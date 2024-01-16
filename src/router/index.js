// index.js
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> */}
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProductPage from '../views/ProductPage.vue';
import StatPage from '../views/StatPage.vue';
import BookmarkPage from '../views/BookmarkPage.vue';
import FilesPage from '../views/FilesPage.vue';
import BannerPage from '../views/BannerPage.vue';

const routes = [
  { path: '/homepage', component: HomePage },
  { path: '/productpage', component: ProductPage },
  { path: '/statpage', component: StatPage },
  { path: '/bookmarkpage', component: BookmarkPage },
  { path: '/filespage', component: FilesPage },
  { path: '/bannerpage', component: BannerPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
