import { createRouter, createWebHistory } from 'vue-router'
import TasksList from '../views/TasksList.vue'
import About from '../views/About.vue'
import TaskDetails from '../views/task/Details.vue'

const routes = [
  {
    path: '/',
    name: 'TasksList',
    component: TasksList,
    // if page exists parse the string to an integer otherwise return 1
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/tasks/:id',
    name: 'TaskDetails',
    props: true,
    component: TaskDetails
  }
  // },
  // {
  //   path: '/tasks/:page',
  //   component: TasksList,
  //   props: route => ({ page: parseInt(route.query.page) || 1 })
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
