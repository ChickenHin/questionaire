import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import New from '@/components/New.vue'
import List from '@/components/List.vue'
import Do from '@/components/Do.vue'
import Edit from '@/components/Edit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/new',
      name: 'new',
      component: New
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/do:id',
      name: 'do',
      component: Do
    },
    {
      path: '/edit:id',
      name: 'edit',
      component: Edit
    }
  ]
})
