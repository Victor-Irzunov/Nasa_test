import React from "react";
import { useHistory } from 'react-router-dom';
import plane from "../components/images/plane.png"
import css from "./NotFound.module.css"
import {
	LIST_ROUTE
} from '../utils/consts';

const NotFound = () => {
	const history = useHistory()


	return (
		<div className={css.error}>
			<div className={css.sky}>
				<h2><span>4</span><span>0</span><span>4</span></h2>
				<div className={css.grass}></div>
				<img src={plane} className={css.plane} />
			</div>
			<div className={css.field}>
				<h2>Opps...looks like you got lost.</h2>
				<a href="/" onClick={() => {
					history.push(LIST_ROUTE)
				}}>Go Home</a>
			</div>
		</div>
	)
}

export default NotFound;