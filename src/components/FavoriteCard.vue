<template>
  <div class="favorite-card">
    <div
      class="favorite-card__img"
      :style="{ backgroundImage: `url(${breed.url})` }"
    >
      <h3 class="favorite-card__name">
        {{ name }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
	name: 'FavoriteCard',
	props: {
		breed: {
			type: Object,
			default: null
		}
	},
	computed: {
		name () {
			return this.breed.breeds[0].name
		},
		description () {
			return this.breed.breeds[0].description
		},
		alt () {
			return `photo of a ${name} cat`
		}
	},
	methods: {

	}
}
</script>

<style lang='scss'>
</style>
