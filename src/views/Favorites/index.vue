<template>
  <div class="favorites">
    <h3>Favorites</h3>
    <ul class="favorites__list">
      <li
        v-for="favorite in favorites"
        :key="favorite.id"
        class="favorites__list__item--container"
      >
        <RouterLink
          class="favorites__list__item"
          :to="{ name: 'FavoriteCard', params: { favorite } }"
        >
          <img
            :src="favorite.url"
            :alt="`photo of a ${favorite.breeds[0].name} cat`"
          >
          <h4>{{ favorite.breeds[0].name }}</h4>
          <p class="description">
            {{ favorite.breeds[0].description }}
          </p>
          <BaseButton
            class="remove-favorite"
            @click="deleteFavorite(favorite.favorite_id)"
          >
            💔
          </BaseButton>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import BaseButton from '../../components/BaseButton'
import { FETCH_FAVORITES, DELETE_FAVORITE } from '../../store/modules/Favorites/action-types'
const Favorites = createNamespacedHelpers(
	'Favorites'
)
export default {
	name: 'Favorites',
	components: {
		BaseButton
	},
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
			fetchFavorites: FETCH_FAVORITES,
			deleteFavorite: DELETE_FAVORITE
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
				position: relative;
				display: flex;
				align-items: center;
				border-bottom: 1px solid grey;
				text-decoration: none;
				color: #000;
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
				&--container {
					list-style: none;
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

	.remove-favorite {
		position: absolute;
		top: 0;
		right: 0;
		font-size: 20px;
	}
</style>
