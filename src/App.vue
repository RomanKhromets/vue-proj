<template>
  <div id="app">
	<router-view></router-view>
  </div>
</template>

<script>

import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import CommentsList from './pages/CommentsList.vue';
import CurrentComment from './pages/CurrentComment.vue';

Vue.use(VueRouter);

const routes = [
	{ path: '/', component: Home},
	{ path: '/comments', component: CommentsList},
	{ path: '/comments/:id', component: CurrentComment}
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

export default {
  name: 'app',
  router
}
	
</script>

<style>
	
	@font-face {
	   font-family: sofiaproLight;
	   src: url(../public/assets/fonts/sofiaproLight.otf);
	}
	@font-face {
	   font-family: sofiaproMedium;
	   src: url(../public/assets/fonts/sofiaproMedium.ttf);
	}	
	@font-face {
	   font-family: sofiaproRegular;
	   src: url(../public/assets/fonts/sofiaproRegular.ttf);
	}

</style>
