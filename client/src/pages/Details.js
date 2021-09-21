import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import { Spinner } from "react-bootstrap";
import { Context } from "../index";
import asteroids2 from '../components/images/asteroid2.jpg';
import css from "./Details.module.css";

const Details = () => {
	const { object } = useContext(Context)
	const { id } = useParams()
	const [localStateObject, setLocalStateObject] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setLocalStateObject(Object.keys(object.objectData.near_earth_objects).reduce((array, key) => {
			return [...array, [...object.objectData.near_earth_objects[key]]]
		}, []))
		setIsLoading(false)
	}, [])

	if (isLoading) {
		return <Spinner animation={"grow"} />
	}

	return (
		<div className={css.details__block}>
			<Container>
				<h2>{`Information about an asteroid with an id=${id}`}</h2>
				{localStateObject !== [] && localStateObject[0].map(obj => {
					if (obj.id === id) return (
						<div className={css.details__box}>
						<div>
						<ul>
							<li>name: {obj.name}</li>
							<li>absolute_magnitude_h: {obj.absolute_magnitude_h}</li>
							<li>estimated_diameter (kilometers):
								<ul>
									<li>
										estimated_diameter_max: {obj.estimated_diameter.kilometers.estimated_diameter_max}
									</li>
									<li>
										estimated_diameter_min: {obj.estimated_diameter.kilometers.estimated_diameter_min}
									</li>
								</ul>
							</li>
							<li>
								is potentially hazardous asteroid: {obj.is_potentially_hazardous_asteroid === true ? 'Yes' : 'No'}
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
						<img src={asteroids2} className={css.asteroid} />
					</div>
					</div>
					)
				})}
			</Container>
		</div>
	);
};

export default Details;