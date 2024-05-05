const routes = [
  {
    path: '/',
    component: () => import('pages/HomePage.vue')
  },
  {
    path: '/news',
    component: () => import('pages/News.vue')
  },
  {
    path: '/podcasts',
    component: () => import('pages/Podcasts.vue')
  },
  {
    path: '/resources',
    component: () => import('pages/Resources.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
