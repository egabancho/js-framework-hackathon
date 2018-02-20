import Vue from 'vue'
import Vuex from 'vuex'
import search from './../utils/search'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		search: {
			errors: [],
			args: {},
			loading: false,
			results: [],
		}
	},
	mutations: {
		fetch (state, data={}) {
			search.get(data).then((results) => {
				state.search.results = results.data;
			});
		},
	},
	actions: {
		updateQuery({commit}, e) {
			console.log('IM INSIDE DARTA', e.target.value);
		},
		fetch ({ commit }, data) {
			return new Promise((resolve, reject) => {
			 commit('fetch', data);
			 resolve()
			})
		}
	}
})
