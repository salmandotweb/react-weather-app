import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import classes from "./Weather.module.css";

const Weather = () => {
	return (
		<div className={classes.weather}>
			<div className={classes.left}>
				<div className={classes.logo}>
					<h2>the.weather</h2>
				</div>
				<div className={classes.weatherDetails}>
					<h1>08</h1>
					<div className={classes.locationDetails}>
						<h3>London</h3>
						<p>06:09-Sunday,6 Oct '22</p>
					</div>
					<div className={classes.weatherIcon}>
						<p>Rainy</p>
					</div>
				</div>
			</div>
			<div className={classes.right}>
				<div className={classes.searchInputContainer}>
					<input type="search" placeholder="Another Location" />
					<div className={classes.searchIcon}>
						<BiSearchAlt />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Weather;
