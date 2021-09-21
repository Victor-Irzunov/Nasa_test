import React, { useState, useContext } from "react";
import { Context } from "../index"
import { propTypes } from "react-bootstrap/esm/Image";
import './Calendar.css';

const Calendar = () => {
	const { object } = useContext(Context)
	const [date, setDate] = useState('')

	return (
		<div className="calendar__block">
			<h5>Get a list of asteroids based on the date of their closest approach to Earth:</h5>
			<form>
				<div>
					<div className="wrapper">
						<input type="checkbox" id="click" />
						<label className="btn__1" htmlFor="click">Get data</label>
						<div className="field">
							<input type="date" value={date}
								onChange={e => setDate(e.target.value)} />
							<label htmlFor="click" className="btn__2" onClick={() => {
								object.setIsDisplay(true)
								object.setDate(date)
							}}>Get data</label>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Calendar;