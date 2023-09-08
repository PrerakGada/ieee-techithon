import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Backgrond from "../../Backgrond/backgrond";
import Button from "./ButtonReg";
import Input from "./InputReg";
import Select from "react-select";
import "../About/about.css";
import { EventsData } from "../Events/EventData";
import { useLocation } from "react-router-dom";
import axios from "axios";
import config from "../../../config";

// import DD from './DropDownMenu';
export default function Register() {
	const location = useLocation();
	console.log(location.state);

	const techCompanies = EventsData.map(function (element) {
		return { label: element.name, value: element.id };
	});
	const customStyles = {
		control: (base, state) => ({
			...base,
			background: "#101010",
			border: "none",
			// background: rgba(34,40,49, 0.45),
			// color: 'black',
			// match with the menu
			width: "350px",
			height: "50px",

			// background: 'tranparent',
			borderRadius: "20px",
			// Overwrittes the different states of border
			// borderColor: state.isFocused ? "yellow" : "green",
			// Removes weird border around container
			boxShadow: state.isFocused ? null : null,
			"&:hover": {
				borderColor: state.isFocused ? "none" : "none",
			},
		}),
		option: (provided, state) => ({
			...provided,
			borderBottom: "1px dotted pink",
			color: state.isSelected ? "white" : "white",
			// borderRadius: '20px',
			// padding: 20,
			background: "#101010",
		}),
		menu: (base) => ({
			...base,
			// override border radius to match the box
			borderRadius: 0,
			// kill the gap
			marginTop: 0,
		}),
		menuList: (base) => ({
			...base,
			// kill the white space on first and last option
			padding: 0,
		}),
	};

	useEffect(() => {
		if (!localStorage.token) window.location = "/login";
	}, []);

	const initPayment = (data, eventName) => {
		console.log(eventName);
		const options = {
			key: config.razorpayKey,
			amount: data.amount,
			currency: data.currency,
			name: eventName,
			description: "Event Registration",
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = `${config.backendLocation}/register/verify/${location.state.id}`;
					const { data } = await axios.post(verifyUrl, response, {
						headers: { token: localStorage.token },
					});
					console.log(data);
					window.location = "/";
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async () => {
		console.log(location.state);
		if (location.state.price == 0) {
			console.log("free");
			axios
				.post(
					`${config.backendLocation}/register/free/${location.state.id}`,
					{},
					{ headers: { token: localStorage.token } }
				)
				.then((res) => {
					console.log(res.data);
					window.location = "/";
				});
		} else {
			try {
				const { data } = await axios.post(
					`${config.backendLocation}/register/order/${location.state.id}`,
					{},
					{ headers: { token: localStorage.token } }
				);
				console.log(data);
				initPayment(data.data, location.state.name);
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<Backgrond>
			<MainContainer>
				<WelcomeText>{location.state.name}</WelcomeText>
				<Discription>
					<h3>EVENT:{location.state.name}</h3>
					<Dis>{location.state.disc}</Dis>
					{/* <h3>Time:{location.state.time}</h3> */}
					<h3>Date:{location.state.date}</h3>
					<h3>
						Amount To Be Paid: ₹{location.state.price}{" "}
						{location.state.pricing}
					</h3>
				</Discription>
				{/* <h2 class >Entry Fees: {}</h2> */}
				<ButtonContainer>
					<Button
						content="Register"
						onClick={handlePayment}
						// onClick={() => {
						// 	console.log(location.state.id);

						// 	axios
						// 		.post(
						// 			`${config.backendLocation}/register`,
						// 			{
						// 				eventId: location.state.id,
						// 			},
						// 			{ headers: { token: localStorage.token } }
						// 		)
						// 		.then((res) => {
						// 			console.log(res.data);
						// 			alert("succesfully registered");
						// 			window.location = "/ticket";
						// 		})
						// 		.catch((err) => {
						// 			console.error(err);
						// 			try {
						// 				alert(err.response.data.msg);
						// 			} catch {
						// 				alert(
						// 					"Something went wrong. Please tryt again"
						// 				);
						// 			}
						// 		});
						// }}
					/>
				</ButtonContainer>
			</MainContainer>
		</Backgrond>
	);
}

const Discription = styled.div`
	display: flex;
	align-items: left;
	flex-direction: column;
	padding: 40px;
`;
const Dis = styled.a`
	font-size: 13px;
	text-transform: none;
	letter-spacing: 3px;
`;

const MainContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 50vh;
	width: 30vw;
	position: absolute;
	z-index: 50;
	background: rgba(34, 40, 49, 0.45);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(8.5px);
	-webkit-backdrop-filter: blur(8.5px);
	border-radius: 10px;
	color: #ffffff;
	text-transform: uppercase;
	letter-spacing: 0.4rem;
	overflow: auto;
	@media only screen and (max-width: 320px) {
		width: 80vw;
		height: 70vh;
		top: 10%;
		left: 2%;
		hr {
			margin-bottom: 0.3rem;
		}
		h4 {
			font-size: small;
		}
	}
	@media only screen and (min-width: 360px) {
		width: 80vw;
		height: 70vh;
		top: 10%;

		h4 {
			font-size: small;
		}
	}
	@media only screen and (min-width: 411px) {
		width: 80vw;
		height: 70vh;
		top: 10%;
		left: 10%;
	}
	@media only screen and (min-width: 768px) {
		width: 80vw;
		height: 70vh;
		top: 10%;
		left: 10%;
	}
	@media only screen and (min-width: 1024px) {
		width: 70vw;
		height: 60vh;
		top: 10%;
		left: 10%;
	}
	@media only screen and (min-width: 1280px) {
		width: 30vw;
		height: 60vh;
		top: 10%;
		left: 10%;
	}
`;

const WelcomeText = styled.h2`
	margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	height: 40%;
	width: 100%;
`;

const ButtonContainer = styled.div`
	margin: 1rem 0 2rem 0;
	width: 100%;
	/* margin-top: 200px;   */
	display: flex;
	align-items: center;
	justify-content: center;
	bottom: 30px;
`;

const LoginWith = styled.h5`
	cursor: pointer;
	margin-top: -10px;
`;

const HorizontalRule = styled.hr`
	width: 90%;
	height: 0.3rem;
	border-radius: 0.8rem;
	border: none;
	background: linear-gradient(to right, #1f3c67 10%, #00adb5 79%);
	background-color: #ebd0d0;
	margin: 1.5rem 0 1rem 0;
	backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
	display: flex;
	margin-top: -50px;
	justify-content: space-evenly;
	margin: 2rem 0 3rem 0;
	width: 80%;
`;

const ForgotPassword = styled.h4`
	cursor: pointer;
`;
