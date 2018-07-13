import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Teacher from '@/components/teacher/Index.vue'
import TeacherClass from '@/components/teacher/Class.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/teacher',
      name: 'Teacher',
      component: Teacher
    },
    {
      path: '/teacher/class',
      name: 'TeacherClass',
      component: TeacherClass
    },
  ]
})

