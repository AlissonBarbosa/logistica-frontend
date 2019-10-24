import Vue from 'vue'
import VueRouter from 'vue-router'

import Entry from '@/components/entry/Entry'
import Delivery from '@/components/delivery/Delivery'
import AdminPages from '@/components/admin/AdminPages'

Vue.use(VueRouter)

const routes = [{
    name: 'entry',
    path: '/entrada',
    component: Entry
}, {
    name: 'delivery',
    path: '/saida',
    component: Delivery
}, {
    name: 'admin',
    path: '/admin',
    component: AdminPages
}]

export default new VueRouter({
    mode: 'history',
    routes
})