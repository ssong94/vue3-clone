const noLayout = [
  {
    path: '/:catchAll(.*)*',
    name: 'notfound',
    component: () => import('@/views/pages/NotFound.vue')
  }
]

export default noLayout