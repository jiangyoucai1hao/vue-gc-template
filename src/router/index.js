import Vue from 'vue'
import Router from 'vue-router'

import {defaultRouter} from '@/router/default';

const Default = r => require.ensure([], () => r(require('@common_p/default')), 'default'); //首页

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:  Default,
      meta: {
        title: '首页',
        // checkJur:false,//无需校验权限
      }
    },
    ...defaultRouter,
    {
      path: '/common',
      component:  Default,
      children: [
        //放在首页里会自动加上头部左菜单
        // ...mainRouter,
      ]
    },
  ]
});
