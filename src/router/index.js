import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/views/app/Index.vue'
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    redirect: { name: 'Tasks' },
    children: [
      {
        path: '/tasks',
        name: 'Tasks',
        component: () => import(/* webpackChunkName: "Tasks" */ '@/views/app/pages/Tasks.vue'),
      },
      {
        path: '/tasks/new',
        name: 'TaskNew',
        component: () => import(/* webpackChunkName: "TaskNew" */ '@/views/app/pages/TaskNew.vue')
      },
	  {
        path: '/tasks/:id',
		props: true,
        name: 'Task',
        component: () => import(/* webpackChunkName: "Task" */ '@/views/app/pages/Task.vue'),
      },
	  {
        path: '/users',
        name: 'Users',
        component: () => import(/* webpackChunkName: "Users" */ '@/views/app/pages/Users.vue')
      },
      {
        path: '/users/new',
        name: 'UserNew',
        component: () => import(/* webpackChunkName: "UserNew" */ '@/views/app/pages/User.vue')
      },
      {
        path: '/users/:id',
        name: 'User',
        component: () => import(/* webpackChunkName: "User" */ '@/views/app/pages/User.vue')
      },
	  {
        path: '/aboutme',
        name: 'AboutMe',
        component: () => import(/* webpackChunkName: "AboutMe" */ '@/views/app/pages/AboutMe.vue')
      },
	  {
        path: '/description',
        name: 'Description',
        component: () => import(/* webpackChunkName: "Description" */ '@/views/app/pages/Description.vue')
      },
    ]
	
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'is-active',
  linkExactActiveClass: '',
  routes
})

export default router