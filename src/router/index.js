import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Hi from '@/components/Hi';
import IndexPage from '@/pages/index';
import DetailPage from '@/pages/detail';
import DetailAnaPage from '@/pages/detail/analysis';
import DetailCouPage from '@/pages/detail/count';
import DetailForPage from '@/pages/detail/forecast';
import DetailPubPage from '@/pages/detail/publish';
import OrderListPage from '@/pages/orderList';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'analysis',
          component: DetailAnaPage
        },
        {
          path: 'count',
          component: DetailCouPage
        },
        {
          path: 'forecast',
          component: DetailForPage
        },
        {
          path: 'publish',
          component: DetailPubPage
        }
      ]
    },
    {
      path: '/orderList',
      component: OrderListPage
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello,
      children: [
        {
          path: 'Hi',
          component: Hi
        }
      ]
    }
  ]
});
