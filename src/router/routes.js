
const routes = [
  {
    path: '/login',
    component: () => import('src/layouts/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Auth.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'inventory', component: () => import('pages/Inventory.vue') },
      { path: 'orders', component: () => import('pages/Orders.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
