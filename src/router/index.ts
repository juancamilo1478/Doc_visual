import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Frecuent_questions from '@/views/Frequent_questions/Frecuent_questions.vue';
import Blog from '@/views/Blogs/Blog.vue';
import Blog_Detail from '@/Modules/Blogs/Blog_Detail.vue';
import Auth from '@/views/Auth/Auth.vue';
import Specialists from '@/views/specialists/Specialists.vue';
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

    },{
      path: '/specialists',
      name: 'specialists',
      component: Specialists,
    }

  ],
})

export default router
