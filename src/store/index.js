import Vue from 'vue'
import Vuex from 'vuex'
import search from './../utils/search'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		search: {
			errors: [],
			args: {
				size: 5,
				page: 1,
				q: null
			},
			loading: false,
			results: [],
		}
	},
	mutations: {
		fetchRequest(state) {
			state.search.loading = true;
		},
		fetchSuccess (state, payload) {
			// loading search
			state.search.loading = false;
			state.search.results = payload.data;
		},
		fetchError(state) {
			state.search.loading = false;
		},
		updateArgs (state, args={}) {
			if (args.args && args.args.q) {
				state.search.args = {...state.search.args, ...args.args};
			}
		}
	},
	actions: {
		updateArgs({commit}, args) {
			return new Promise((resolve, reject) => {
				commit('updateArgs', {args:args});
				resolve()
			})
		},
		update({dispatch, commit, state}, args={}) {
			dispatch('updateArgs', args).then(() => {
				dispatch('fetch')
			})
		},
		fetch ({ commit, state }) {
			commit('fetchRequest');
			search.get(state.search.args).then(
				(results) => {
					commit('fetchSuccess', {data:results.data.hits.hits});
			 	},
				(errors) => {
					commit('fetchError');
				}
		 );
		}
	}
})
