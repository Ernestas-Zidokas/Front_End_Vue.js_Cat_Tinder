import axios from '@/packages/vue-axios'
import { FETCH_BREED, GET_PREV_BREED, SAVE_FAVORITE } from './action-types'
import { REQUESTING, ERROR, DONE } from './status-types'
import { UPDATE_STATUS, SET_BREED } from './mutation-types'
import { SET_FAVORITE } from '../Favorites/mutation-types'

export default {
	async [FETCH_BREED] ({ commit }) {
		const randomNr = Math.floor(Math.random() * (67 - 1) + 1)

		commit(UPDATE_STATUS, REQUESTING)
		try {
			const { data } = await axios.get('/breeds', {
				params: { page: randomNr, limit: 1 }
			})

			const { data: breed } = await axios.get('/images/search', {
				params: { breed_id: data[0].id, page: 1, limit: 5 }
			})

			let info = [{ ...breed[0], images: [] }]
			breed.map(({ url }) => {
				info[0].images = [...info[0].images, url]
			})

			commit(SET_BREED, info)
			commit(UPDATE_STATUS, DONE)
		} catch (error) {
			commit(UPDATE_STATUS, ERROR)
		}
	},

	[GET_PREV_BREED] ({ commit, state }) {
		if (state.prevBreed.length > 0) {
			commit(SET_BREED, state.prevBreed)
		}
	},

	async [SAVE_FAVORITE] ({ commit, state }) {
		let id = state.breed[0].id

		try {
			const { data } = await axios.post('/favourites', {
				image_id: id,
				sub_id: state.userId
			})

			state.breed[0].favorite_id = data.id
			commit(`Favorites/${SET_FAVORITE}`, state.breed[0], { root: true })
		} catch (error) {
			commit(UPDATE_STATUS, ERROR)
		}
	}
}
