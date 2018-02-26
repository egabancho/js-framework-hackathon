import Vue from 'vue'
import Vuex from 'vuex'
import search from './../utils/search'
import router from './../router'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		search: {
			errors: [],
			args: {
				size: 5,
				q: null,
				page: 1
			},
			loading: false,
			results: [],
			total: 0,
		}
	},
	getters: {
		getCurrentQuery(state) {
			return state.search.args.q
		},
		 getCurrentPage(state) {
			 return parseInt(state.search.args.page)
		 },
		 getSize(state) {
				return `${state.search.args.size}`
		 }
	},
	mutations: {
		fetchRequest(state) {
			state.search.loading = true;
			state.search.results = [];
		},
		fetchSuccess (state, payload) {
			// loading search
			state.search.loading = false;
			state.search.results = payload.data;
			state.search.total = payload.total;
		},
		fetchError(state, payload) {
			state.search.loading = false;
			state.search.errors.push(paload.data);
		},
		updateArgs (state, args={}) {
			if (args.args) {
				if (args.args.page) {
					args.args.page = parseInt(args.args.page)
				}
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
    updateURL({commit, state}) {
		  return new Promise((resolve, reject) => {
        router.push({query: state.search.args})
        resolve()
      })
    },
		update({dispatch}, args={}) {
			dispatch('updateArgs', args).then(() => {
      	dispatch('updateURL').then(() => {
          dispatch('fetch')
        })
      })
    },
		fetch ({ commit, state }) {
			commit('fetchRequest');
			search.get(state.search.args).then(
				(results) => {
					commit('fetchSuccess', {data: results.data.hits.hits, total: results.data.hits.total});
			 	},
				(errors) => {
					commit('fetchError', {data:errors});
				}
		 );
		}
	}
})
