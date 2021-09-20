import React, { useEffect } from 'react';
import { getListAsteroids } from '../http/objectAPI';

const List = () => {

	useEffect(() => {
		getListAsteroids().then(data => {
			console.log('--------: ', data)
		})
	}, [])



	return (
		<div>
			ListListListListListListListList
		</div>
	)
}

export default List;