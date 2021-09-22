import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import { Spinner } from "react-bootstrap";
import asteroids2 from '../components/images/asteroid2.jpg';
import css from "./Details.module.css";

const Details = () => {
	const { id } = useParams()
	const [localStateObject, setLocalStateObject] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (localStorage["objectDataNasa"]) {
			let getLocalStorage = JSON.parse(localStorage.getItem("objectDataNasa"))
			setLocalStateObject(getLocalStorage)
		}
		setIsLoading(false)
	}, [])
	
	if (isLoading) {
		return <Spinner animation={"grow"} />
	}

	return (
		<div className={css.details__block}>
			<Container>
				<h2>{`Information about an asteroid with an id=${id}`}</h2>
				{localStateObject !== [] && localStateObject.map(obj => {
					if (obj.id === id) {
						return (
							<div className={css.details__box} key={obj.id}>
								<div>
									<ul>
										<li>name: <span>{obj.name}</span></li>
										<li>absolute_magnitude_h: <span>{obj.absolute_magnitude_h}</span></li>
										<li>estimated_diameter (kilometers):
											<ul>
												<li>
													estimated_diameter_max: <span>{obj.estimated_diameter.kilometers.estimated_diameter_max}</span>
												</li>
												<li>
													estimated_diameter_min: <span>{obj.estimated_diameter.kilometers.estimated_diameter_min}</span>
												</li>
											</ul>
										</li>
										<li>
											is potentially hazardous asteroid: <span>{obj.is_potentially_hazardous_asteroid === true ? 'Yes' : 'No'}</span>
										</li>
										<li>
											nasa_jpl_url: <a href={obj.nasa_jpl_url}>{obj.nasa_jpl_url}</a>
										</li>
										<li>
											link self: <a href={obj.links.self}>{obj.links.self}</a>
										</li>
									</ul>
								</div>
								<div className={css.block__asteroid}>
									<img src={asteroids2} className={css.asteroid} alt="asteroid" />
								</div>
							</div>
						)
					}
				})}
			</Container>
		</div>
	);
};
export default Details;









		// setLocalStateObject(Object.keys(object.objectData.near_earth_objects).reduce((array, key) => {
		// 	return [...object.objectData.near_earth_objects[key]]
		// }, []))