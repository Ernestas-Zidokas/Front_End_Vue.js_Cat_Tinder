<template>
  <div class="cat-card">
    <div
      v-touch:swipe.left="nextImage"
      class="cat-card__img"
      :style="{ backgroundImage: `url(${image})` }"
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
			shortText: true,
			isImageLoaded: false,
			photoCount: 0
		}
	},
	computed: {
		name () {
			return this.breed.breeds[0].name
		},
		description () {
			return this.breed.breeds[0].description
		},
		image () {
			return this.breed.images[this.photoCount]
		}
	},
	created () {
		const image = new Image()
		image.onload = () => {
			this.isImageLoaded = true
		}
		image.src = this.breed.url
	},
	methods: {
		toggleMore () {
			this.shortText = !this.shortText
		},
		nextImage () {
			if (this.photoCount >= this.breed.images.length - 1) {
				this.photoCount = 0
			} else {
				this.photoCount++
			}
		}
	}
}
</script>

<style lang='scss'>
	.cat-card {
		&__img {
			display: flex;
			position: relative;
			height: 400px;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			margin: 4px;
			border-radius: 5px;
			&:before {
				content: "";
				position: absolute;
				z-index: 0;
				height: 100%;
				width: 100%;
				background: linear-gradient(0deg, #000000cc 0%, #00000000 30%);
			}
		}

		&__name {
			color: #fff;
			margin: 10px;
			align-self: flex-end;
			z-index: 1;
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
