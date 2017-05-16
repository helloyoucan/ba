import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		redirect: '/Login'
	}, {
		path: '/Login',
		component: resolve => require(['../components/Login.vue'], resolve)
	}, {
		path: '/Index',
		component: resolve => require(['../components/Index.vue'], resolve),
		children: [{
			path: '/',
			redirect: '/content1'
		}, {
			path: '/content1',
			component: resolve => require(['../components/content/content1.vue'], resolve)
		}, {
			path: '/content2',
			component: resolve => require(['../components/content/content2.vue'], resolve)
		}, {
			path: '/content3',
			component: resolve => require(['../components/content/content3.vue'], resolve)
		}, {
			path: '/content4',
			component: resolve => require(['../components/content/content4.vue'], resolve)
		}, {
			path: '/content5',
			component: resolve => require(['../components/content/content5.vue'], resolve)
		}]

	}, ]
})