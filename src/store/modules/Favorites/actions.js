import axios from '@/packages/vue-axios'
import { FETCH_FAVORITES } from './action-types'
import { REQUESTING, DONE, ERROR } from './status-types'
import { SET_FAVORITE, UPDATE_STATUS } from './mutation-types'

export default {
	async [FETCH_FAVORITES] ({ commit, rootState }) {
		let userId = rootState.Tinder.userId

		commit(UPDATE_STATUS, REQUESTING)
		try {
			const { data } = await axios.get('/favourites', {
				params: { sub_id: userId }
			})

			console.log(data)

			data.forEach(async item => {
				const { data: breed } = await axios.get(`/images/${item.image_id}`)

				commit(SET_FAVORITE, breed[0])
			})

			commit(UPDATE_STATUS, DONE)
		} catch (error) {
			commit(UPDATE_STATUS, ERROR)
		}
	}
}
