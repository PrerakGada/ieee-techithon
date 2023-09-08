import React, { useState } from "react";
import styled from "styled-components";
import Backgrond from "../../Backgrond/backgrond";
import Button from "./Button";
import Icon from "./Icon";
import Input from "./Input";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import axios from "axios";
import config from "../../../config";
function Login() {
	const FacebookBackground =
		"linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
	const InstagramBackground =
		"linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
	const TwitterBackground =
		"linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Backgrond>
			<MainContainer>
				<WelcomeText>Welcome</WelcomeText>
				<InputContainer>
					<Input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</InputContainer>
				<ButtonContainer>
					<Button
						content="Sign In"
						onClick={() => {
							console.log({
								email,
								password,
							});

							if (!email) return alert("email is required");
							if (!password) return alert("password is required");

							axios
								.post(`${config.backendLocation}/auth/login`, {
									email,
									password,
								})
								.then((res) => {
									console.log(res.data);
									localStorage.token = res.data.token;
									window.location = "/";
								})
								.catch((err) => {
									console.error(err);
									try {
										alert(err.response.data.msg);
									} catch {
										alert(
											"Something went wrong. Please tryt again"
										);
									}
								});
						}}
					/>
				</ButtonContainer>
			</MainContainer>
		</Backgrond>
	);
}

const MainContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	min-height: 50vh;
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
	overflow-y: auto;
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
		height: 60vh;
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
	height: 30vh;
	width: 100%;
`;

const ButtonContainer = styled.div`
	margin: 1rem 0 2rem 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LoginWith = styled.h5`
	cursor: pointer;
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
	justify-content: space-evenly;
	margin: 2rem 0 3rem 0;
	width: 80%;
`;

const ForgotPassword = styled.h4`
	cursor: pointer;
`;

export default Login;
