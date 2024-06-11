import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'

const routes = [
	{ path: '/', name: 'home', component: Home },
	{ path: '/product', name: 'product', component: Product },
	{ path: '/product/:id', name: 'productDetail', component: () => import('@/views/OnlyProduct.vue') }
]

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes,
})

export default router;
