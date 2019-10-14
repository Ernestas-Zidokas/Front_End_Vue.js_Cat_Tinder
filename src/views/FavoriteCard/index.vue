<template>
  <div
    v-if="favorite"
    class="favorite-card"
  >
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
			favorite: null,
			photoCount: 0
		}
	},
	computed: {
		breeds () {
			return this.favorite.breeds[0]
		},
		info () {
			return [
				{ title: 'Affection', level: this.starLevel(this.breeds.affection_level) },
				{ title: 'Child friendly', level: this.starLevel(this.breeds.child_friendly) },
				{ title: 'Dog friendly', level: this.starLevel(this.breeds.dog_friendly) },
				{ title: 'Energy level', level: this.starLevel(this.breeds.energy_level) },
				{ title: 'Grooming', level: this.starLevel(this.breeds.grooming) },
				{ title: 'Intelligence', level: this.starLevel(this.breeds.intelligence) },
				{ title: 'Shedding level', level: this.starLevel(this.breeds.shedding_level) },
				{ title: 'Social needs', level: this.starLevel(this.breeds.social_needs) },
				{ title: 'Vocalisation', level: this.starLevel(this.breeds.vocalisation) }
			]
		},
		usefullLinks () {
			return [this.breeds.vetstreet_url, this.breeds.vcahospitals_url, this.breeds.wikipedia_url].filter(link => link)
		},
		name () {
			return this.breeds.name
		},
		description () {
			return this.breeds.description
		},
		weight () {
			return this.breeds.weight.metric
		},
		lifeSpan () {
			return this.breeds.life_span
		},
		temperament () {
			return this.breeds.temperament
		}
	},
	activated () {
		this.favorite = this.$route.params.favorite
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
