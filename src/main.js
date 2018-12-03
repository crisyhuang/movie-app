import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import './common/css/index.css'
import Index from './components/index/index'
import Hot from './components/hot/hot'
import Net from './components/net/net'
import Focus from './components/focus/focus'
import Beauty from './components/beauty/beauty'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true;

const routes = [
    {path: '/', redirect: '/index'},
    {path: '/index', component: Index},
    {path: '/hot', component: Hot},
    {path: '/net', component: Net},
    {path: '/focus', component: Focus},
    {path: '/beauty', component: Beauty}
];

const router = new VueRouter({
    routes,
    linkActiveClass: 'active'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
    router
}).$mount('#app')
