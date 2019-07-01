import Vue from 'vue'
import Router from 'vue-router'
import Axios from 'axios'

import FavoriteCharPage from './pages/fav/FavoriteCharPage'
import FavoriteLocPage from './pages/fav/FavoriteLocPage'
import HomePage from './pages/home/HomePage'
import LocationsPage from './pages/Locations/LocationsPage'
import DetailLocationPage from './pages/Locations/DetailLocationPage'

Vue.use(Router)

//création des routes
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/favChar',
            name: 'favoritesChar',
            component: FavoriteCharPage
        },
        {
            path: '/favLoc',
            name: 'favoritesLoc',
            component: FavoriteLocPage
        },
        {
            path: '/locations',
            name: 'Locations',
            component: LocationsPage
        }
        ,
        {
            path: '/location/:id',
            name: 'location',
            component: DetailLocationPage
        },
    ]
})