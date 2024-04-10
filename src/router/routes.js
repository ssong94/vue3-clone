import AppLayout from '@/layout/AppLayout.vue';
import noLayout from '@/router/routes/no-layout.js';
import board from './routes/board';

const routes = [
  {
      path: '/',
      component: AppLayout,
      children: [
          {
              path: '/',
              name: 'dashboard',
              component: () => import('@/views/Dashboard.vue')
          },
          ...board
      ]
  },
  ...noLayout
]

export default routes