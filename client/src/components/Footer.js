import React from "react";
import css from './Footer.module.css';
import nasa from './images/nasa.png';
import Container from "react-bootstrap/esm/Container";

const Footer = () => {
	return (
			<footer className={css.footer}>
				<Container>
					<div className={css.footer__box}>
						<div className={css.footer__info}>
							<a title="Home Page" href="/">
								<img src={nasa} className={css.img__nasa} alt="Nasa" />
							</a>
							<div className={css.footer__status}>
								<span>National&nbsp;Aeronautics and Space&nbsp;Administration</span>
								<span>NASA Official: Brian Dunbar</span>
							</div>
						</div>
						<ul className={css.ul}>
							<li><a href="https://www.nasa.gov/offices/odeo/no-fear-act" rel="noreferrer" target="_blank">No Fear Act</a></li>
							<li><a href="https://www.nasa.gov/FOIA" rel="noreferrer" target="_blank">FOIA</a></li>
							<li><a href="https://www.nasa.gov/about/highlights/HP_Privacy.html" rel="noreferrer" target="_blank">Privacy</a></li>
							<li><a href="https://oig.nasa.gov/" rel="noreferrer" target="_blank">Office of Inspector General</a></li>
							<li><a href="https://osc.gov/" rel="noreferrer" target="_blank">Office of Special Counsel</a></li>
							<li><a href="https://www.nasa.gov/content/agency-financial-reports" rel="noreferrer" target="_blank">Agency Financial Reports</a></li>
							<li><a href="https://www.nasa.gov/about/contact/index.html" rel="noreferrer" target="_blank">Contact NASA</a></li>
						</ul>
					</div>
				</Container>
			</footer>
	)
}

export default Footer;