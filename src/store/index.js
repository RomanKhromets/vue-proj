import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
	},
	mutations: {
		
	}, 
	actions: {
		
	}
});

export default {
	store,
	methods: {
		goHome() {
			this.$router.push("/");
		}
	}
}