import Tinder from './modules/Tinder'
import Favorites from './modules/Favorites'

export default {
	strict: process.env.NODE_ENV !== 'production',
	modules: { Tinder, Favorites },
	state: {},
	getters: {},
	actions: {},
	mutations: {}
}
