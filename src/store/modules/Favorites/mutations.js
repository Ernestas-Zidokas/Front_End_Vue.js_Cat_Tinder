import { SET_FAVORITE, UPDATE_STATUS } from './mutation-types'

export default {
	[SET_FAVORITE] (state, payload) {
		state.favorites = [...state.favorites, payload]
	},
	[UPDATE_STATUS] (state, status) {
		state.status = status
	}
}
