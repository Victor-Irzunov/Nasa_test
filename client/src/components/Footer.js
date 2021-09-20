import React from "react";
import css from './Footer.module.css';
import nasa from './images/nasa.png';
import Container from "react-bootstrap/esm/Container";

const Footer = () => {
	return (
			<footer className={css.footer}>
				<Container>
					<div id="footer">
						<div id="footer-info">
							<a class="logo" title="Home Page" href="/">
								<img src={nasa} className={css.img__nasa} alt="Nasa" />
							</a>
							<div id="status">
								<span>National&nbsp;Aeronautics and Space&nbsp;Administration</span>
								<span>NASA Official: Brian Dunbar</span>
							</div>
						</div>
						<ul id="footer-links">
							<li><a href="https://www.nasa.gov/offices/odeo/no-fear-act">No Fear Act</a></li>
							<li><a href="https://www.nasa.gov/FOIA">FOIA</a></li>
							<li><a href="https://www.nasa.gov/about/highlights/HP_Privacy.html">Privacy</a></li>
							<li><a href="https://oig.nasa.gov/">Office of Inspector General</a></li>
							<li><a href="https://osc.gov/">Office of Special Counsel</a></li>
							<li><a href="https://www.nasa.gov/content/agency-financial-reports">Agency Financial Reports</a></li>
							<li><a href="https://www.nasa.gov/about/contact/index.html">Contact NASA</a></li>
						</ul>
					</div>
				</Container>
			</footer>
	)
}

export default Footer;