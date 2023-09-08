import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import config from "../../config";

function Ticket() {
	const [user, setUser] = useState();
	const [events, setEvents] = useState([]);

	useEffect(() => {
		axios
			.get(`${config.backendLocation}/user/self`, {
				headers: { token: localStorage.token },
			})
			.then((res) => {
				setUser(res.data);
				// setInterval(() => {
				// 	window.print();
				// 	window.location = "/";
				// }, 3000);
			});

		axios
			.get(`${config.backendLocation}/register`, {
				headers: { token: localStorage.token },
			})
			.then((res) => {
				setEvents(res.data);
			});
	}, []);

	return (
		<>
			{user && (
				<div className="ticket" id="ticket">
					Name: {user.username}
					<br />
					Email: {user.email}
					<br />
					<img
						className="qr"
						src={`https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=${user._id}`}
					/>
					<br />
					Events:
					<ul>
						{events.map((event, i) => (
							<li key={i}>{event.name}</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
}

export default Ticket;
