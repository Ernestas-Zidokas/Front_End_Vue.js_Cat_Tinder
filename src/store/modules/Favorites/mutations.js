import { SET_FAVORITE, UPDATE_STATUS, REMOVE_FROM_FAVORITES } from './mutation-types'

export default {
	[SET_FAVORITE] (state, payload) {
		state.favorites = [...state.favorites, payload]
	},
	[UPDATE_STATUS] (state, status) {
		state.status = status
	},
	[REMOVE_FROM_FAVORITES] (state, id) {
		state.favorites = state.favorites.filter(item => item.favorite_id !== id)
	}
}
