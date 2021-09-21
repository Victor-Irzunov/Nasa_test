import { $requestApi } from "./index";

export const getListAsteroids = async (date) => {
	const {data} = await $requestApi.get(`feed?start_date=${date}&end_date=${date}&api_key=nYqTiFg6NY0idL2gAnqxMg4St0BStuHCHGWlqNoI`)
	return data
}
