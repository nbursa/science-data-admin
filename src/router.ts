import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from './views/DashboardPage.vue'
import HomePage from './views/HomePage.vue'
import ArticlePage from './views/ArticlePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/dashboard', component: DashboardPage },
  { path: '/:category/:articleId', name: 'ArticlePage', component: ArticlePage, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
