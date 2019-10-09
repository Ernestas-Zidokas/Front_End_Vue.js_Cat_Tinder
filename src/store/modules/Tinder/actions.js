import axios from '@/packages/vue-axios'
import { FETCH_BREEDS } from './action-types'
import { REQUESTING, ERROR, DONE } from './status-types'
import { UPDATE_STATUS, SET_BREEDS } from './mutation-types'

export default {
	async [FETCH_BREEDS] ({ commit, state }) {
		const randomNr = Math.floor(Math.random() * (67 - 1) + 1)

		if (!state.breeds.length) {
			commit(UPDATE_STATUS, REQUESTING)
			try {
				const { data } = await axios.get('/breeds', {
					params: { page: randomNr, limit: 1 }
				})
				const { data: breed } = await axios.get('/images/search', {
					params: { breed_id: data[0].id }
				})

				commit(SET_BREEDS, breed)
				commit(UPDATE_STATUS, DONE)
			} catch (error) {
				commit(UPDATE_STATUS, ERROR)
			}
		}
	}
}
