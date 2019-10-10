const Favorites = () => import('@/views/Favorites')

export default [
	{
		path: '/favorites',
		name: 'Favorites',
		component: Favorites,
		meta: {
			noFooter: true
		}
	}
]
