<template>
  <CatCard
    v-if="breed"
    :breed="breed"
  />
</template>

<script>
import CatCard from '../../components/CatCard'
import { createNamespacedHelpers } from 'vuex'
import { FETCH_BREEDS } from '../../store/modules/Tinder/action-types'
import { REQUESTING } from '../../store/modules/Tinder/status-types'
const Tinder = createNamespacedHelpers(
	'Tinder'
)
export default {
	name: 'Tinder',
	components: {
		CatCard
	},
	computed: {
		...Tinder.mapGetters({
			breed: 'breed'
		}),
		isRequesting () {
			return this.status === REQUESTING
		}
	},
	created () {
		this.fetchBreeds()
	},
	methods: {
		...Tinder.mapActions({
			fetchBreeds: FETCH_BREEDS
		})
	}

}
</script>

<style>
</style>
