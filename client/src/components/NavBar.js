import React from "react";
import { useHistory } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import css from './NavBar.module.css';
import nasa from './images/nasa.png';
import {
	LIST_ROUTE
} from '../utils/consts';


const NavBar = () => {
	const history = useHistory()

	

	return (
		<Navbar className={css.navBar}>
			<Container>
				<Navbar.Brand href="/" onClick={() => {
					history.push(LIST_ROUTE)
				}}>
					<img src={nasa} className={css.img__nasa} alt='nasa' />
				</Navbar.Brand>
				<Nav className="me-auto">

					<Nav.Link onClick={() => {
						history.push(LIST_ROUTE)
					}} className={css.nav}>List</Nav.Link>
					<Nav.Link
						href={'https://www.nasa.gov/multimedia/imagegallery/iotd.html'}
						target="_blank"
						rel="noreferrer"
						className={css.nav}>
						Galleries
					</Nav.Link>
					<Nav.Link
						href={'https://www.nasa.gov/multimedia/nasatv/index.html#public'}
						target="_blank"
						rel="noreferrer"
						className={css.nav}>
						NASA TV
					</Nav.Link>

				</Nav>
			</Container>
		</Navbar>
	)
}

export default NavBar;