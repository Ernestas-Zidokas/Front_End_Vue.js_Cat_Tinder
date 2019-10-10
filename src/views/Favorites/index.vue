<template>
  <div class="favorites">
    <h3>Favorites</h3>
    {{ favorites }}
    <ul class="favorites__list">
      <!-- <li
        v-for="favorite in favorites"
        :key="favorite.id"
        class="favorites__list__item"
      >
        <img
          :src="favorite.url"
          alt=""
        >
        <h4>{{ favorite.breeds[0].name }}</h4>
        <p class="description">
          {{ favorite.breeds[0].description }}
        </p>
      </li> -->
    </ul>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { FETCH_FAVORITES } from '../../store/modules/Favorites/action-types'
const Favorites = createNamespacedHelpers(
	'Favorites'
)
export default {
	name: 'Favorites',
	computed: {
		...Favorites.mapGetters({
			favorites: 'favorites'
		})
	},
	created () {
		this.fetchFavorites()
	},
	methods: {
		...Favorites.mapActions({
			fetchFavorites: FETCH_FAVORITES
		})
	}
}
</script>

<style lang='scss'>
	.favorites {
		h3 {
			text-align: center;
		}

		&__list {
			padding: 20px;

			&__item {
				display: flex;
				align-items: center;
				list-style: none;
				border-bottom: 1px solid grey;
				img {
					width: 80px;
					min-width: 80px;
					height: 80px;
					object-fit: cover;
					border-radius: 50%;
				}

				img,
				h4,
				p {
					margin: 10px;
				}
			}
		}
	}
	.description {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
</style>
