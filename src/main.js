/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2019-12-25 14:57:19
 * @LastEditors  : ShiYangquan
 * @LastEditTime : 2020-01-16 16:39:27
 */
import Vue from 'vue'
import VueRouter from 'vue-router';
import routes from './routes';
import App from './App.vue'
import Utils from './utils/index';

import $ from 'jquery'
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js' 
import 'font-awesome/css/font-awesome.min.css'

import AppLayout from './components/appLayout';
Vue.component(AppLayout.name, AppLayout);

Vue.use(Utils);
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  base:'/webapps/',
	routes: routes
});

Vue.$router = router;
Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
