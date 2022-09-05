import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CaseOne from '../views/case.one.vue'
import CaseTwo from '../views/case.two.vue'
import CaseThree from '../views/case.three.vue'
import CaseFour from '../views/case.four.vue'
import CaseFourWrapped from '../views/case.four.wrapped.vue'

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
  },
  {
    path: '/casefour/:itemCount?',
    props: true,
    name: 'CaseFour',
    component: CaseFour
  },
  {
    path: '/casefourwrapped',
    name: 'CaseFourWrapped',
    component: CaseFourWrapped
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
