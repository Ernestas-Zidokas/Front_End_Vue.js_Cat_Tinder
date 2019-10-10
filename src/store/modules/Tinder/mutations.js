import { UPDATE_STATUS, SET_BREED, SET_PREV_BREED } from './mutation-types'

export default {
	[SET_BREED] (state, breed) {
		state.breed = breed
	},
	[SET_PREV_BREED] (state) {
		if (!state.prevBreed.length) {
			state.prevBreed = state.breed
		}

		if (state.prevBreed.length) {
			if (state.prevBreed[0].id !== state.breed[0].id) {
				state.prevBreed = state.breed
			}
		}
	},
	[UPDATE_STATUS] (state, status) {
		state.status = status
	}
}
