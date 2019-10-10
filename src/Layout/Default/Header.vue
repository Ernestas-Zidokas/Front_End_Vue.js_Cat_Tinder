<template>
  <header class="header">
    <nav class="navigation">
      <RouterLink
        class="navigation__link tinderImage"
        exact-active-class="tinderImage--active"
        :to="{ name: 'Tinder' }"
        exact
      />
      <RouterLink
        class="navigation__link favoriteImage"
        exact-active-class="favoriteImage--active"
        :to="{ name: 'Favorites' }"
        exact
      />
    </nav>
  </header>
</template>

<script>
export default {
	name: 'Header'
}
</script>

<style lang='scss'>
	.header {
		text-align: center;
	}

	.navigation {
		display: flex;
		justify-content: space-evenly;
		margin: 10px 0px;
		&__link {
			display: block;
			height: 30px;
			width: 30px;
			background-repeat: no-repeat;
			background-size: cover;
		}
		.tinderImage {
			background-image: url("../../assets/images/cat.png");
			&--active {
				background-image: url("../../assets/images/cat-color.png");
			}
		}

		.favoriteImage {
			background-image: url("../../assets/images/heart.png");
			&--active {
				background-image: url("../../assets/images/heart-color.png");
			}
		}
	}
</style>
