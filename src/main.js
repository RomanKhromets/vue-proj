import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import Home from './pages/Home.vue';
import CommentsList from './pages/CommentsList.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
	{ path: '/', component: Home},
	{ path: '/comments', component: CommentsList}
];

const router = new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
		if (to.hash) {
			return {
				selector: to.hash
			}	 
		}
	}
});

new Vue({
	router,
  render: h => h(App)
}).$mount('#app');
