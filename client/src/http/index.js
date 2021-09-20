import axios from 'axios'

const $requestApi = axios.create({
	baseURL: "https://api.nasa.gov/neo/rest/v1/"
})

export {
	$requestApi
}