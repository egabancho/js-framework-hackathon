import Vue from 'vue'
import Vuex from 'vuex'
import search from './../utils/search'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 0,
		search: {
			errors: [],
			args: {},
			loading: false,
			results: [],
		}
	},
	mutations: {
		fetch (state) {
			search.get().then((results) => {
				console.log('RESULTS', results.data[0].metadata)
				state.search.results = results.data;
			});
		},
	},
	actions: {
		//
		fetch ({ commit }) {
			return new Promise((resolve, reject) => {
			 commit('fetch')
			 resolve()
			})
		}
	}
})
