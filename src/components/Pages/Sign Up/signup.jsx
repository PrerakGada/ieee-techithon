import React, { useState } from "react";
import styled from "styled-components";
import Backgrond from "../../Backgrond/backgrond";
import Button from "./ButtonSignUp";
import Icon from "./IconSignUp";
import Input from "./InputSignUp";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { CustomScrollbars } from "./../Events/SideBar";
import axios from "axios";
import config from "../../../config";

function Signup() {
	const FacebookBackground =
		"linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
	const InstagramBackground =
		"linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
	const TwitterBackground =
		"linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState();
	const [college, setCollege] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	return (
		<Backgrond>
			<MainContainer>
				<WelcomeText>Welcome</WelcomeText>
				<InputContainer>
					<Input
						type="text"
						placeholder="Name"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<Input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						type="number"
						placeholder="Phone Number"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
					<Input
						type="text"
						placeholder="Name of College"
						value={college}
						onChange={(e) => setCollege(e.target.value)}
					/>
					<Input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Input
						type="password"
						placeholder="Confirm Password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</InputContainer>
				<ButtonContainer>
					<Button
						content="Sign Up"
						onClick={() => {
							console.log({
								name: username,
								email,
								password,
								confirmPassword,
							});

							if (!username) return alert("username is required");
							if (!email) return alert("email is required");
							if (!phone) return alert("phone is required");
							if (!college) return alert("college is required");
							if (
								!email.match(
									/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
								)
							)
								return alert("invalid email");
							if (!password) return alert("password is required");
							if (!confirmPassword)
								return alert("confirm password is required");
							if (password != confirmPassword)
								return alert("passwords don't match");

							axios
								.post(
									`${config.backendLocation}/auth/register`,
									{
										username,
										email,
										password,
										phone,
										college,
									}
								)
								.then((res) => {
									console.log(res.data);
									window.location = "/login";
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
				{/* <LoginWith>OR Sign Up WITH</LoginWith>
        <HorizontalRule />
        <IconsContainer>
        <Icon color={FacebookBackground}>
        <FaFacebookF />
        </Icon>
        <Icon color={InstagramBackground}>
        <FaInstagram />
        </Icon>
        <Icon color={TwitterBackground}>
        <FaTwitter />
        </Icon>
      </IconsContainer> */}
				{/* <ForgotPassword>Forgot Password ?</ForgotPassword> */}
			</MainContainer>
		</Backgrond>
	);
}

const MainContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 70vh;
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
		height: 80vh;
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
		height: 70vh;
		top: 10%;
		left: 10%;
	}
	@media only screen and (min-width: 1280px) {
		width: 30vw;
		height: 75vh;
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
	height: 70vh;
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
	padding: 2px;
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

export default Signup;
