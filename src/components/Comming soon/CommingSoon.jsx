import React, { useEffect, useRef, useState } from "react";
import "./comingsoon.css";

const Countdown = () => {
	const [timerDays, setTimerDays] = useState("00");
	const [timerHours, setTimerHours] = useState("00");
	const [timerMinutes, setTimerMinutes] = useState("00");
	const [timerSeconds, setTimerSeconds] = useState("00");

	let interval = useRef();

	const startTimer = () => {
		const countdownDate = new Date("October 04, 2023 00:00:00").getTime();

		interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countdownDate - now;

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor(
				(distance % (1000 * 60 * 60)) / (1000 * 60)
			);
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			if (distance < 0) {
				clearInterval(interval.current);
			} else {
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		}, 1000);
	};

	useEffect(() => {
		startTimer();
		return () => {
			clearInterval(interval.current);
		};
	});

	return (
		<section className="Countdown" id="#Countdown">
			<h1 id="coming-soon">COMING SOON</h1>
			<section className="container-count">
				<section className="timer">
					<div className="clock">
						<div className="clock-section">
							<div className="clock-wrap">
								<div className="clock-timer">{timerDays}</div>
								<div className="clock-txt">DAYS</div>
							</div>
							<div className="clock-seperator">:</div>
						</div>
						<div className="clock-section">
							<div className="clock-wrap">
								<div className="clock-timer">{timerHours}</div>
								<div className="clock-txt">HOURS</div>
							</div>
							<div className="clock-seperator">:</div>
						</div>
						<div className="clock-section">
							<div className="clock-wrap">
								<div className="clock-timer">
									{timerMinutes}
								</div>
								<div className="clock-txt">MINUTES</div>
							</div>
							<div className="clock-seperator">:</div>
						</div>
						<div className="clock-section">
							<div className="clock-wrap">
								<div className="clock-timer">
									{timerSeconds}
								</div>
								<div className="clock-txt">SECONDS</div>
							</div>
						</div>
					</div>
				</section>
			</section>
		</section>
	);
};

export default Countdown;