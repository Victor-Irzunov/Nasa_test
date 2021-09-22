import React, { useEffect, useContext, useState } from 'react';
import { getListAsteroids } from '../http/objectAPI';
import { Context } from "../index";
import css from './List.module.css';
import { Spinner } from "react-bootstrap";
import Pages from "../components/Pages";
import Calendar from "../components/Calendar";
import { observer } from "mobx-react-lite";
import asteroids from '../components/images/asteroid.jpg';
import filter from '../components/images/filter.png';
import { useHistory } from 'react-router-dom';
import { DETAILS_ROUTE } from "../utils/consts";

const List = observer(() => {
	const { object } = useContext(Context)
	const history = useHistory()
	const [localStateObject, setLocalStateObject] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [countriesPerPage] = useState(7)
	const [isFilter, setIsFilter] = useState(false)
	const [isFilterArrow, setIsFilterArrow] = useState(false)

	useEffect(() => {
		if (object.date !== '') {
			setIsLoading(true)
			getListAsteroids(object.date)
				.then(data => {
				object.setObjectData(data)
				setLocalStateObject(Object.keys(data.near_earth_objects).reduce((array, key) => {
					return [...data.near_earth_objects[key]]
				}, []))
				setIsLoading(false)
			})
		}
	}, [object.date])

	let currentCountry = []
	if (localStateObject) {
		const lastCountryIndex = currentPage * countriesPerPage
		const firstCountryIndex = lastCountryIndex - countriesPerPage
		currentCountry = localStateObject.slice(firstCountryIndex, lastCountryIndex)
	}

	const paginate = pageNum => setCurrentPage(pageNum)

	function sortingUpDown() {
		setIsFilterArrow(true)
		if (!isFilter) {
			setIsFilter(i => !i)
			return setLocalStateObject(localStateObject.sort((a, b) => a.close_approach_data[0].miss_distance.kilometers - b.close_approach_data[0].miss_distance.kilometers))
		}
		setIsFilter(i => !i)
		return setLocalStateObject(localStateObject.sort((a, b) => b.close_approach_data[0].miss_distance.kilometers - a.close_approach_data[0].miss_distance.kilometers))
	}

	if (localStateObject !== []) {
		localStorage.setItem("objectDataNasa", JSON.stringify([...localStateObject]))
	}

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
						<h2 className={css.title}>List of asteroids</h2>
					<div className={css.main__block_box}>
						<div className={css.block__asteroid}>
							<p className={css.filter}>
								<img src={filter} className={css.filter__img} alt="filter" />
								<span>Sorting by:</span>&ensp;
								{isFilterArrow ?
									<span
										onClick={sortingUpDown}
										className={css.span}
									>
										Distance from the ground
										{isFilter ? <span>↑</span> : <span>↓</span>}
									</span>
									:
									<span
										onClick={sortingUpDown}
										className={css.span}
									>
										Distance from the ground
									</span>
								}
							</p>
							<img src={asteroids} className={css.asteroid} alt="asteroid" />
						</div>
						<div>
							<div className={css.block__list}>
								<div className={css.list}>
									<h6 className={css.title__date}>{object.date}</h6>
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
								{localStateObject &&
									<Pages countriesPerPage={countriesPerPage}
										totalCountries={localStateObject.length}
										paginate={paginate}
										currentPage={currentPage}
									/>
								}
							</div>
						</div>
						</div>
					</div>
			}
		</>
	)
})

export default List;