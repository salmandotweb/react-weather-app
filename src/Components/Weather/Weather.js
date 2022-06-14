import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import classes from "./Weather.module.css";
import moment from "moment";

const Weather = () => {
	const [data, setData] = useState("");
	const [location, setLocation] = useState("");
	const [error, setError] = useState(false);

	const date = moment().format("MMMM Do YYYY, h:mm a");

	const API_KEY = "10309a7dba2377244800232f238b67b8";

	const fetchData = () => {
		const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lat=35&lon=139&appid=${API_KEY}`;

		fetch(URL)
			.then((response) => response.json())
			.then((res) => handleData(res))
			.catch((error) => {
				console.log(error);
			});
	};

	const handleData = (res) => {
		if (capitalizeFirstLetter(location) === res.name) {
			setLocation("");
			setError(false);
			setData(res);
		} else {
			setLocation(location);
			setError(true);
		}
	};

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	const handleFetch = (e) => {
		if (e.key === "Enter") {
			fetchData();
		}
	};

	return (
		<div className={classes.weather}>
			<div className={classes.left}>
				<div className={classes.logo}>
					<h2>{data ? `the.weather.${data?.sys?.country}` : `the.weather`}</h2>
				</div>
				<div className={classes.weatherDetails}>
					<h1>{data?.main?.temp}</h1>
					<div className={classes.locationDetails}>
						<h3>{data ? data?.name : "Pakistan"}</h3>
						<p>{date}</p>
					</div>
					<div className={classes.weatherIcon}>
						<p>{data ? data?.weather[0]?.main : "-"}</p>
					</div>
				</div>
			</div>
			<div className={classes.right}>
				<div className={classes.searchInputContainer}>
					<div
						className={
							error
								? `${classes.searchInput} ${classes.error}`
								: classes.searchInput
						}>
						<input
							type="search"
							placeholder="Another Location"
							value={location}
							onChange={(e) => setLocation(e.target.value)}
							onKeyPress={handleFetch}
						/>
					</div>
					<div className={classes.searchIcon}>
						<BiSearchAlt />
					</div>
				</div>
				<div className={classes.weatherDetailsContainer}>
					<h4>Weather Details</h4>
					<div className={classes.details}>
						<div className={classes.singleDetail}>
							<p>Cloudy</p>
							<p>{data ? data?.weather[0]?.description : "-"}</p>
						</div>
						<div className={classes.singleDetail}>
							<p>Humidity</p>
							<p>{data ? `${data?.main?.humidity}%` : "-"}</p>
						</div>
						<div className={classes.singleDetail}>
							<p>Wind</p>
							<p>{data ? data?.wind?.speed : "-"}</p>
						</div>
						<div className={classes.singleDetail}>
							<p>Pressure</p>
							<p>{data ? data?.main?.pressure : "-"}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Weather;
