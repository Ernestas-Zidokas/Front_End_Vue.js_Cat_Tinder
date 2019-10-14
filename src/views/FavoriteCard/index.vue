<template>
  <div class="favorite-card">
    <div
      class="favorite-card__img"
      :style="{ backgroundImage: `url(${favorite.url})` }"
    >
      <h3 class="favorite-card__name">
        {{ name }}
      </h3>
    </div>
    <p>{{ description }}</p>
    <ul>
      <li>Weight: {{ weight }} kg</li>
      <li>Life span: {{ lifeSpan }} years</li>
      <li>Temparament: {{ temperament }} </li>
      <li
        v-for="(data, index) in info"
        :key="index"
      >
        <span>{{ data.title }}:</span>
        <img
          v-for="(star, i) in data.level"
          :key="i"
          class="star"
          :src="star"
        >
      </li>
    </ul>
    <ul>
      Usefull information:
      <li
        v-for="(link, index) in usefullLinks"
        :key="index"
      >
        <a
          :href="`${link}`"
          target="_blank"
        >{{ link }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import star from '../../assets/images/star.png'
import starColor from '../../assets/images/star-color.png'

export default {
	name: 'FavoriteCard',
	data () {
		return {
			favorite: null
		}
	},
	computed: {
		info () {
			return [
				{ title: 'Affection', level: this.starLevel(this.affection) },
				{ title: 'Child friendly', level: this.starLevel(this.childFriendly) },
				{ title: 'Dog friendly', level: this.starLevel(this.dogFriendly) },
				{ title: 'Energy level', level: this.starLevel(this.energyLevel) },
				{ title: 'Grooming', level: this.starLevel(this.grooming) },
				{ title: 'Intelligence', level: this.starLevel(this.intelligence) },
				{ title: 'Shedding level', level: this.starLevel(this.sheddingLevel) },
				{ title: 'Social needs', level: this.starLevel(this.socialNeeds) },
				{ title: 'Vocalisation', level: this.starLevel(this.vocalisation) }
			]
		},
		usefullLinks () {
			return [this.vetstreet, this.vcahospitals, this.wikipedia]
		},
		name () {
			return this.favorite.breeds[0].name
		},
		description () {
			return this.favorite.breeds[0].description
		},
		weight () {
			return this.favorite.breeds[0].weight.metric
		},
		lifeSpan () {
			return this.favorite.breeds[0].life_span
		},
		temperament () {
			return this.favorite.breeds[0].temperament
		},
		affection () {
			return this.favorite.breeds[0].affection_level
		},
		childFriendly () {
			return this.favorite.breeds[0].child_friendly
		},
		dogFriendly () {
			return this.favorite.breeds[0].dog_friendly
		},
		energyLevel () {
			return this.favorite.breeds[0].energy_level
		},
		grooming () {
			return this.favorite.breeds[0].grooming
		},
		intelligence () {
			return this.favorite.breeds[0].intelligence
		},
		sheddingLevel () {
			return this.favorite.breeds[0].shedding_level
		},
		socialNeeds () {
			return this.favorite.breeds[0].social_needs
		},
		vocalisation () {
			return this.favorite.breeds[0].vocalisation
		},
		vcahospitals () {
			return this.favorite.breeds[0].vcahospitals_url
		},
		vetstreet () {
			return this.favorite.breeds[0].vetstreet_url
		},
		wikipedia () {
			return this.favorite.breeds[0].wikipedia_url
		}

	},
	created () {
		this.favorite = this.$route.params.favorite
	},
	mounted () {
		console.log(this.favorite)
	},
	methods: {
		starLevel (level) {
			return [...Array(5)].map((item, index) => {
				if (index + 1 <= level) {
					return starColor
				}
				return star
			})
		}
	}
}
</script>

<style lang='scss'>
	.favorite-card {
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
	}

	.star {
		height: 20px;
	}
</style>
