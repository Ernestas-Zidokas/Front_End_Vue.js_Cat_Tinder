<template>
  <div class="cat-card">
    <div
      class="cat-card__img"
      :style="{ backgroundImage: `url(${breed.url})` }"
    >
      <h3 class="cat-card__name">
        {{ name }}
      </h3>
    </div>
    <p
      :class="['cat-card__description',{ 'cat-card__description--short': shortText }]"
      @click="toggleMore"
    >
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
	name: 'CatCard',
	props: {
		breed: {
			type: Object,
			default: null
		}
	},
	data () {
		return {
			shortText: true
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
	mounted () {
		console.log(this.breed)
	},
	methods: {
		toggleMore () {
			this.shortText = !this.shortText
		}
	}
}
</script>

<style lang='scss'>
	.cat-card {
		&__img {
			display: flex;
			height: 400px;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			margin: 4px;
			border-radius: 5px;
		}

		&__name {
			color: #fff;
			margin: 10px;
			align-self: flex-end;
		}

		&__description {
			cursor: pointer;
			margin: 10px;

			&--short {
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
		}
	}
</style>
