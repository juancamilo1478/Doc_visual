import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Frecuent_questions from '@/views/Frequent_questions/Frecuent_questions.vue';
import Blog from '@/views/Blogs/Blog.vue';
import Blog_Detail from '@/Modules/Blogs/Blog_Detail.vue';
import Auth from '@/views/Auth/Auth.vue';
import Specialists from '@/views/specialists/Specialists.vue';
import SpecialistDetail from '@/Modules/Specialists/SpecialistDetail.vue';
import Purpose from '@/views/Purpose/Purpose.vue';
import Price from '@/views/Price/Price.vue';
import panel_user from '@/views/Panel_User/panel_user.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/questions',
      name: 'questions',
      component: Frecuent_questions,
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: Blog,
    },
    {
      path: '/blogs/:id',
      name: 'BlogDetail',
      component: Blog_Detail,
      props: true // Esto permite pasar el parámetro como prop
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,

    }, {
      path: '/specialists',
      name: 'specialists',
      component: Specialists,
    }, {
      path: '/specialist/:id',
      name: 'specialistdetail',
      component: SpecialistDetail,
      props: true // Esto permite pasar el parámetro como prop
    },{
      path:'/price',
      name:'price',
      component: Price 
    },{
      path:'/purpose',
      name:'purpose',
      component:Purpose
    },{
      path:'/paneluser',
      name:'paneluser',
      component:panel_user
    }

  ],
})

export default router
