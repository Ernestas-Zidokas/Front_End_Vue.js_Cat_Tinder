const FavoriteCard = () => import('../views/FavoriteCard')

export default [
	{
		path: '/favorite-card',
		name: 'FavoriteCard',
		component: FavoriteCard,
		meta: {
			noFooter: true,
			noKeepAlive: true
		}
	}
]
