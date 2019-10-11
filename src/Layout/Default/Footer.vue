<template>
  <footer class="footer">
    <div class="footer__left-buttons">
      <BaseButton
        :secondary="true"
        class="footer__button"
        @click="getPrevBreed"
      >
        ↩️
      </BaseButton>
      <BaseButton
        class="footer__left-buttons--button"
        @click="dislike"
      >
        ❌
      </BaseButton>
    </div>
    <BaseButton
      class="footer__left-buttons--button"
      @click="like"
    >
      ❤️
    </BaseButton>
  </footer>
</template>

<script>
import BaseButton from '../../components/BaseButton'
import { createNamespacedHelpers } from 'vuex'
import { FETCH_BREED, GET_PREV_BREED, SAVE_FAVORITE } from '../../store/modules/Tinder/action-types'
import { SET_PREV_BREED } from '../../store/modules/Tinder/mutation-types'
const Tinder = createNamespacedHelpers(
	'Tinder'
)
export default {
	name: 'Footer',
	components: {
		BaseButton
	},
	computed: {
		dislike () {
			return () => {
				this.setPrevBreed()
				this.fetchBreed()
			}
		},
		like () {
			return () => {
				this.saveFavorite()
				this.fetchBreed()
			}
		}
	},
	methods: {
		...Tinder.mapActions({
			fetchBreed: FETCH_BREED,
			getPrevBreed: GET_PREV_BREED,
			saveFavorite: SAVE_FAVORITE
		}),
		...Tinder.mapMutations({
			setPrevBreed: SET_PREV_BREED
		})
	}
}
</script>

<style lang='scss'>
	.footer {
		display: flex;
		justify-content: space-around;
	}
</style>
