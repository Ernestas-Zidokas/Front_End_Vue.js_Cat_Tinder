import axios from '@/packages/vue-axios'
import { FETCH_FAVORITES, DELETE_FAVORITE } from './action-types'
import { REQUESTING, DONE, ERROR } from './status-types'
import { SET_FAVORITE, UPDATE_STATUS, REMOVE_FROM_FAVORITES } from './mutation-types'

export default {
	async [FETCH_FAVORITES] ({ commit, rootState }) {
		let userId = rootState.Tinder.userId
		commit(UPDATE_STATUS, REQUESTING)

		try {
			const { data } = await axios.get('/favourites', {
				params: { sub_id: userId }
			})

			data.forEach(async item => {
				const { data: breed } = await axios.get(`/images/${item.image_id}`)

				const { data: images } = await axios.get('/images/search', {
					params: { breed_id: breed.breeds[0].id, page: 1, limit: 5 }
				})

				let info = { ...images[0], images: [], favorite_id: item.id }
				images.map(({ url }) => {
					info.images = [...info.images, url]
				})

				commit(SET_FAVORITE, info)
			})

			commit(UPDATE_STATUS, DONE)
		} catch (error) {
			commit(UPDATE_STATUS, ERROR)
		}
	},
	async [DELETE_FAVORITE] ({ commit }, id) {
		commit(UPDATE_STATUS, REQUESTING)

		try {
			await axios.delete(`/favourites/${id}`)

			commit(REMOVE_FROM_FAVORITES, id)
			commit(UPDATE_STATUS, DONE)
		} catch (error) {
			commit(UPDATE_STATUS, ERROR)
		}
	}
}
