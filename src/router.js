import Vue from 'vue'
import Router from 'vue-router'

import FavoritePage from './pages/fav/FavoritePage'
import HomePage from './pages/home/HomePage'
//import UserPage from './pages/user/UserPage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/fav',
            name: 'favorites',
            component: FavoritePage
        }/*,
        {
            path: '/user/:id',
            name: 'user',
            component: UserPage
        },*/
    ]
})