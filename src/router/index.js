import Vue from 'vue'
import Router from 'vue-router'
import Form from '../components/Form'
import Admin from '../components/Admin'



Vue.use(Router)

export default new Router({
    routes: [
      {path:'/',name:'Form',component: Form},
      {path:'/dashboard',name:'Admin',component: Admin}
    ],
    mode: 'history',
    linkActiveClass: "is-active",
    linkExactActiveClass: "is-active"
})
