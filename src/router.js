import Vue from 'vue'
import Router from 'vue-router'
import Axios from 'axios'

import FavoritePage from './pages/fav/FavoritePage'
import HomePage from './pages/home/HomePage'
import LocationsPage from './pages/Locations/LocationsPage'
//import UserPage from './pages/user/UserPage'
Vue.prototype.$http = Axios
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
        },
        {
            path: '/locations',
            name: 'Locations',
            component: LocationsPage
        }
        /*,
        {
            path: '/user/:id',
            name: 'user',
            component: UserPage
        },*/
    ]
})