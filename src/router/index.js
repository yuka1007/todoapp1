import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import createPersistedState from 'vuex-persistedstate'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default new Vuex.Store({
  modules: {
    userInfo: User,
  },
  plugins: [createPersistedState(
    {
      key: 'yourkey',  // 設定しなければ'vuex'
      paths: ['userInfo'],  // 保存するモジュール：設定しなければ全部。
      storage: window.sessionStorage,  // 設定しなければlocalStorage
    }
  )],
})