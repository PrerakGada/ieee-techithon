import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../../config";
import "./SideNavBar.css";
import styled from "styled-components";
import { EventsData } from "./EventData";
import {
	SpecialAttractionEvents,
	PreEvents,
	TechEvents,
	FunEvents,
	GamingEvents,
	NeonEvents,
	StrongmanEvents,
} from "./Events";
import { Scrollbars } from "react-custom-scrollbars";

const renderThumb = ({ style, ...props }) => {
	const thumbStyle = {
		borderRadius: 6,
		backgroundColor: "rgba(0, 0, 0, 0.8)",
	};
	return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

export const CustomScrollbars = (props) => (
	<Scrollbars
		renderThumbHorizontal={renderThumb}
		renderThumbVertical={renderThumb}
		{...props}
	/>
);

const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: top;
	background-color: #393e46;
	opacity: 0.8;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
	height: 100vh;
	text-align: left;
	padding: 2rem;
	position: absolute;
	top: -10px;
	left: 0;
	z-index: 20;
	transition: transform 0.3s ease-in-out;
	min-width: 20vw;
	overflow-y: auto;

	@media (max-width: 576px) {
		min-width: 100vw;
		/* width: 100%; */
	}

	a {
		font-size: 1rem;
		text-transform: uppercase;
		padding: 2rem 0;
		font-weight: bold;
		letter-spacing: 0.2rem;
		color: #effffa;
		text-decoration: none;
		transition: color 0.3s linear;

		@media (max-width: 576px) {
			font-size: 1.5rem;
			text-align: center;
		}

		&:hover {
			color: #0095b7;
		}
	}
`;

const Menu = ({ open }) => {
	const [specialEvents, setSpecialEvents] = useState([]);
	useEffect(() => {
		axios.get(`${config.backendLocation}/event`).then((res) => {
			setSpecialEvents(res.data);
		});
	}, []);

	return (
		<StyledMenu open={open}>
			<CustomScrollbars>
				<Dropdown
					data={specialEvents}
					link={"#SpecialAttractionEvents"}
					category={"Special Attraction Events"}
				/>
				<Dropdown
					data={PreEvents}
					link={"#PreEvents"}
					category={"Pre Events"}
				/>
				<Dropdown
					data={TechEvents}
					link={"#TechEvents"}
					category={"Tech Events"}
				/>
				<Dropdown
					data={FunEvents}
					link={"#FunEvents"}
					category={"Fun Events"}
				/>
				<Dropdown
					data={GamingEvents}
					link={"#GamingEvents"}
					category={"Gaming Events"}
				/>
				<Dropdown
					data={NeonEvents}
					link={"#NeonEvents"}
					category={"Neon Events"}
				/>
				<Dropdown
					data={StrongmanEvents}
					link={"#StrongmanEvents"}
					category={"Strongman Events"}
				/>
			</CustomScrollbars>
		</StyledMenu>
	);
};

const Dropdown = (props) => {
	const [isOpen, setOpen] = useState(false);
	const toggleDropdown = () => setOpen(!isOpen);
	const items = props.data;
	return (
		<div className="dropdown">
			<div className="dropdown-header" onClick={toggleDropdown}>
				<a href={props.link}>{props.category}</a>
				<i
					className={`fa fa-chevron-right icon ${isOpen && "open"}`}
				></i>
			</div>
			<div className={`dropdown-body ${isOpen && "open"}`}>
				{items.map((item) => (
					<div className="dropdown-item">
						<a href={item.link}>{item.name}</a>
					</div>
				))}
			</div>
		</div>
	);
};

const StyledBurger = styled.button`
	position: absolute;
	top: 5%;
	left: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 2rem;
	height: 2rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 30;

	&:focus {
		outline: none;
	}

	div {
		width: 2rem;
		height: 0.25rem;
		background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;

		:first-child {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}

		:nth-child(2) {
			opacity: ${({ open }) => (open ? "0" : "1")};
			transform: ${({ open }) =>
				open ? "translateX(20px)" : "translateX(0)"};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;

const Burger = ({ open, setOpen }) => {
	return (
		<StyledBurger open={open} onClick={() => setOpen(!open)}>
			<div />
			<div />
			<div />
		</StyledBurger>
	);
};

const SideBar = () => {
	const [open, setOpen] = React.useState(false);
	const node = React.useRef();
	return (
		<div>
			<div ref={node}>
				<Burger open={open} setOpen={setOpen} />
				<Menu open={open} setOpen={setOpen} />
			</div>
		</div>
	);
};
export default SideBar;

const useOnClickOutside = (ref, handler) => {
	React.useEffect(() => {
		const listener = (event) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			handler(event);
		};
		document.addEventListener("mousedown", listener);

		return () => {
			document.removeEventListener("mousedown", listener);
		};
	}, [ref, handler]);
};
