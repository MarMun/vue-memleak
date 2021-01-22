import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CaseOne from '../views/case.one.vue'
import CaseTwo from '../views/case.two.vue'
import CaseThree from '../views/case.three.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/caseone',
    name: 'CaseOne',
    component: CaseOne
  },
  {
    path: '/casetwo',
    name: 'CaseTwo',
    component: CaseTwo
  },
  {
    path: '/casethree',
    name: 'CaseThree',
    component: CaseThree
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
