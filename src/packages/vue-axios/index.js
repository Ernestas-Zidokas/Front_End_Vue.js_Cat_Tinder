import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.thecatapi.com/v1',
	headers: { 'x-api-key': 'b15ff810-b400-4d9a-8149-da232c555601' }
})
