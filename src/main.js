// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router/index.js'
import Browser from '@/utils/Browser'

Vue.config.productionTip = false


Browser.initEnv().then(env => {

  new Vue({
    el: '#app',
    router,
    data: {
    },
    components: {
      App
    },
    template: '<App/>',
  });
});
