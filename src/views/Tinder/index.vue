<template>
  <div>
    <CatCard
      v-if="!isRequesting && breed"
      :breed="breed"
    />
    <template v-else>
      <LoaderSpinner />
      <PlaceholderCatCard />
    </template>
  </div>
</template>

<script>
import uniqid from 'uniqid'
import CatCard from '../../components/CatCard'
import PlaceholderCatCard from '../../components/PlaceholderCatCard'
import LoaderSpinner from '../../components/LoaderSpinner'
import { createNamespacedHelpers } from 'vuex'
import { REQUESTING } from '../../store/modules/Tinder/status-types'

import { FETCH_BREED } from '../../store/modules/Tinder/action-types'
import { SET_USER_ID } from '../../store/modules/Tinder/mutation-types'
const Tinder = createNamespacedHelpers(
	'Tinder'
)
export default {
	name: 'Tinder',
	components: {
		CatCard,
		LoaderSpinner,
		PlaceholderCatCard
	},
	computed: {
		...Tinder.mapGetters({
			breed: 'breed',
			status: 'status'
		}),
		isRequesting () {
			return this.status === REQUESTING
		}
	},
	created () {
		if (!localStorage.getItem('user-id')) {
			localStorage.setItem('user-id', uniqid())
		}
		this.setUserId(localStorage.getItem('user-id'))
		this.fetchBreed()
	},
	methods: {
		...Tinder.mapActions({
			fetchBreed: FETCH_BREED
		}),
		...Tinder.mapMutations({
			setUserId: SET_USER_ID
		})
	}

}
</script>

<style>
</style>
