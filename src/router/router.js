import Vue from 'vue'
import Router from 'vue-router'


import Portfolio from '@/views/public/Portfolio'


// admin
import Admin from '@/views/admin/App'
import AdminLogin from '@/views/admin/Login'
import AdminHome from '@/views/admin/Home'
import AdminContact from '@/views/admin/Contact'
import AdminShowContact from '@/views/admin/ShowContact'

import AdminVisite from '@/views/admin/Visite'



Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Portfolio',
            component: Portfolio
        },
       
          // Admin
        {
            path: '/mavix-admin/login',
            name: 'AdminLogin',
            component: AdminLogin,
            beforeEnter(to,from,next){
                let token = localStorage.getItem('doctor-token')

                if(!token){
                    next()
                }
                else{

                    next('/mavix-admin/home')
                }


            }
        },
         // admin root
         {
            path: '/mavix-admin',
            name: 'Admin',
            component: Admin,
            redirect:'mavix-admin/home',
            beforeEnter(to,from,next){
                let token = localStorage.getItem('doctor-token')

                if(token){
                    next()
                }
                else{

                    next('/mavix-admin/login')
                }


            },
            children:[
                
                
                {
                    path: 'home',
                    name: 'AdminHome',
                    component: AdminHome
                },
                {
                    path: 'contact',
                    name: 'AdminContact',
                    component: AdminContact
                },
                {
                    path: 'contact/:id',
                    name: 'AdminShowContact',
                    component: AdminShowContact
                },
                {
                    path: 'visite',
                    name: 'AdminVisite',
                    component: AdminVisite
                },
                
               
            ]
         }
         ,
        {
            path:'*',
            redirect:'/'
        }

    ],
    mode:"history"
})