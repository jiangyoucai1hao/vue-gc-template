
const Default = r => require.ensure([], () => r(require('@common_p/default')), 'default'); //首页


export const defaultRouter = [{
  path: '/default',
  name: 'default',
  component: Default,
  props: '',
  meta: {
    title: '首页',
    checkJur:false
  },
}]
