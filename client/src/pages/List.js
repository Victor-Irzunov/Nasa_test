import React, { useEffect, useContext, useState } from 'react';
import { getListAsteroids } from '../http/objectAPI';
import { Context } from "../index"
import css from './List.module.css'
import { Spinner } from "react-bootstrap"
import Pages from "../components/Pages"
import Calendar from "../components/Calendar"
import { observer } from "mobx-react-lite"
import asteroids from '../components/images/asteroid.jpg';
import { useHistory } from 'react-router-dom';
import { DETAILS_ROUTE } from "../utils/consts"

const List = observer(() => {
	const { object } = useContext(Context)
	const history = useHistory()
	const [localStateObject, setLocalStateObject] = useState([])

	const [isLoading, setIsLoading] = useState(false)

	const [currentPage, setCurrentPage] = useState(1)
	const [countriesPerPage] = useState(7)


	useEffect(() => {
		if (object.date !== '') {
			setIsLoading(true)
			getListAsteroids(object.date).then(data => {
				console.log("🚀  _ file: List.js _ line 26 _ getListAsteroids _ data", data)
				object.setObjectData(data)
				setLocalStateObject(Object.keys(data.near_earth_objects).reduce((array, key) => {
					return [...array, [...data.near_earth_objects[key]]]
				}, []))
				setIsLoading(false)
			})
		}
	}, [object.date])

	let currentCountry = []
	if (localStateObject[0]) {
		const lastCountryIndex = currentPage * countriesPerPage
		const firstCountryIndex = lastCountryIndex - countriesPerPage
		currentCountry = localStateObject[0].slice(firstCountryIndex, lastCountryIndex)
	}
	const paginate = pageNum => setCurrentPage(pageNum)


	if (isLoading) {
		return <Spinner animation={"grow"} />
	}

	return (
		<>
			{
				!object.isDisplay
					?
					<Calendar />
					:
					<div className={css.main__block}>
						<div className={css.block__asteroid}>
							<img src={asteroids} className={css.asteroid} />
						</div>
						<div>
							<h2 className={css.title}>List of asteroids</h2>
							<div className={css.block__list}>

								<div className={css.list}>
									<h5 className={css.title__date}>{object.date}</h5>
									<ul>
										{currentCountry.map(obj => {
											return (
												<li key={obj.name} onClick={() => history.push(DETAILS_ROUTE + '/' + obj.id)}>
													<span>{obj.name}</span>
												</li>
											)
										})
										}
									</ul>
								</div>
								{localStateObject[0] &&
									<Pages countriesPerPage={countriesPerPage}
										totalCountries={localStateObject[0].length}
										paginate={paginate}
										currentPage={currentPage}
									/>
								}
							</div>
						</div>
					</div>
			}
		</>
	)
})

export default List;