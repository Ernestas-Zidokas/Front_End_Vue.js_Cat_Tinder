import axios from '@/packages/vue-axios'
import { FETCH_BREED, GET_PREV_BREED } from './action-types'
import { REQUESTING, ERROR, DONE } from './status-types'
import { UPDATE_STATUS, SET_BREED } from './mutation-types'

export default {
	async [FETCH_BREED] ({ commit }) {
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
	}
}
