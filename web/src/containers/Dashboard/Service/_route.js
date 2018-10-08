import Layout from '@/containers/_layouts/Fragment.layout'
import defaultRoute from './_Default/_route'
import createRoute from './Create/_route'

export default {
    path: 'service',
    component: Layout,
    children: [
        defaultRoute,
        createRoute,
    ]
}