import axios from '@/packages/vue-axios'
import { FETCH_BREED, GET_PREV_BREED, SAVE_FAVORITE } from './action-types'
import { REQUESTING, ERROR, DONE } from './status-types'
import { UPDATE_STATUS, SET_BREED, SET_FAVORITE } from './mutation-types'

export default {
	async [FETCH_BREED] ({ commit, rootState }) {
		const randomNr = Math.floor(Math.random() * (67 - 1) + 1)

		commit(UPDATE_STATUS, REQUESTING)
		try {
			const { data } = await axios.get('/breeds', {
				params: { page: randomNr, limit: 1 }
			})
			const { data: breed } = await axios.get('/images/search', {
				params: { breed_id: data[0].id }
			})

			commit(SET_BREED, breed)
			commit(UPDATE_STATUS, DONE)
		} catch (error) {
			commit(UPDATE_STATUS, ERROR)
		}
	},

	[GET_PREV_BREED] ({ commit, state }) {
		commit(SET_BREED, state.prevBreed)
	},

	async [SAVE_FAVORITE] ({ commit, state }) {
		let id = state.breed[0].id

		try {
			await axios.post('/favourites', {
				image_id: id,
				sub_id: state.userId
			})

			commit(`Favorites/${SET_FAVORITE}`, state.breed[0], { root: true })
		} catch (error) {
			commit(UPDATE_STATUS, ERROR)
		}
	}
}
