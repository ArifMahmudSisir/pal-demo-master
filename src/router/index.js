import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/pages/Products.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('@/pages/Events.vue')
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import('@/pages/Blogs.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/pages/News.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/pages/Contact.vue')
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('@/pages/PrivacyPolicy.vue')
  },

  // Realist & sub-categories (README onujayi path thik kora hoyeche)
  {
    path: '/products/realist',
    component: () => import('@/pages/products/Realist.vue'),
    name: 'Realist'
  },
  {
    path: '/products/realist/ozone',
    component: () => import('@/pages/products/Realist/Ozone.vue'),
    name: 'RealistOzone'
  },
  {
    path: '/products/realist/ozone/rmo',
    component: () => import('@/pages/products/Realist/ozone/Rmo.vue'),
    name: 'RealistOzoneRmo'
  },
  {
    path: '/products/realist/ozone/rogozone',
    component: () => import('@/pages/products/Realist/ozone/RogOzone.vue'),
    name: 'RealistOzoneRogOzone'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router