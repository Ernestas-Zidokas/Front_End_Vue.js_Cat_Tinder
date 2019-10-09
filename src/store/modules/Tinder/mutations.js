import { UPDATE_STATUS, SET_BREEDS } from './mutation-types'

export default {
	[SET_BREEDS] (state, breeds) {
		state.breeds = breeds
	},
	[UPDATE_STATUS] (state, status) {
		state.status = status
	}
}
