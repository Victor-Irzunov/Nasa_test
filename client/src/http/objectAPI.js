import { $requestApi } from "./index";

export const getListAsteroids = async () => {
	const {data} = await $requestApi.get('feed?start_date=2021-09-19&end_date=2021-09-20&api_key=nYqTiFg6NY0idL2gAnqxMg4St0BStuHCHGWlqNoI')
	return data
}
