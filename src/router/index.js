import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
const home=()=>import('../views/home/home.vue')
const my=()=>import('../views/my/my.vue')
const app=()=>import('../views/app/app.vue')
const people=()=>import('../views/people/people.vue')
Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: home
  },
  {
    path: '/app',
    name: 'app',
    component: app
  },
  {
    path: '/people',
    name: 'people',
    component: people
  },
  {
    path: '/my',
    name: 'my',
    component: my
  },
  {
    path: '',
    redirect:'/home'
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
