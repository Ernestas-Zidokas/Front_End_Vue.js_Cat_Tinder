import {
	UPDATE_STATUS,
	SET_BREED,
	SET_PREV_BREED,
	SET_USER_ID,
	SET_FAVORITE
} from './mutation-types'

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
	},
	[SET_USER_ID] (state, id) {
		state.userId = id
	}
}
