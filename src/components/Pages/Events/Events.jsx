import React, { useState, useEffect } from "react";
import Card from "../../Cards/Card";
import { EventsData } from "./EventData";
import styled from "styled-components";
import axios from "axios";
import config from "../../../config";
import { events } from "@react-three/fiber";

export const specialEvents = EventsData.filter(
	(EventsData) => EventsData.category === "SPECIAL ATTRACTION EVENTS"
);
export const PreEvents = EventsData.filter(
	(EventsData) => EventsData.category === "PRE EVENTS"
);
export const TechEvents = EventsData.filter(
	(EventsData) => EventsData.category === "TECHNICAL EVENTS"
);
export const FunEvents = EventsData.filter(
	(EventsData) => EventsData.category === "FUN EVENTS"
);
export const GamingEvents = EventsData.filter(
	(EventsData) => EventsData.category === "GAMING EVENTS"
);
export const NeonEvents = EventsData.filter(
	(EventsData) => EventsData.category === "NEON EVENTS"
);
export const StrongmanEvents = EventsData.filter(
	(EventsData) => EventsData.category === "STRONGMAN EVENTS"
);

export function CreateCard(Events) {
	return (
		<>
			<Card
				id={Events._id}
				name={Events.name}
				disc={Events.description}
				key={Events._id}
				time={Events.time}
				date={Events.date}
				prize={Events.prize}
				pricing={Events.pricing}
				price={Events.price}
			/>
		</>
	);
}

export const CardGrid = styled.div`
	display: grid;
	grid-template-columns: auto auto auto auto;
	column-gap: 60px;
	row-gap: 140px;
	margin-left: 100px;
	margin-top: 10px;
	z-index: 50;
	/* height: 50vh; */

	@media only screen and (max-width: 500px) {
		display: grid;
		grid-template-columns: auto;
		column-gap: 10px;
		row-gap: 140px;
		/* width: 400px; */
		margin-left: 60px;
		margin-top: 10px;
		z-index: 50;
	}
	/* ipad mini*/
	@media only screen and (min-width: 768px) and (max-width: 1024px) {
		display: grid;
		grid-template-columns: auto auto;
		column-gap: 50px;
		row-gap: 140px;
		width: 400px;
		margin-left: 70px;
		margin-top: 10px;
		z-index: 50;
	}
	@media only screen and (min-width: 1024px) and (max-width: 1424px) {
		display: grid;
		grid-template-columns: auto auto auto;
		column-gap: 50px;
		row-gap: 140px;
		width: 400px;
		margin-left: 70px;
		margin-top: 10px;
		z-index: 50;
	}
`;

export function SpecialAttractionCards() {
	const [eventList, setEventList] = useState([]);
	useEffect(() => {
		axios.get(`${config.backendLocation}/event`).then((res) => {
			setEventList(
				res.data.filter(
					(event) => event.category == "SPECIAL ATTRACTIONS"
				)
			);
		});
	}, []);

	return (
		<>
			<CardGrid>{eventList.map(CreateCard)}</CardGrid>
		</>
	);
}

export function PreCards() {
	const [eventList, setEventList] = useState([]);
	useEffect(() => {
		axios.get(`${config.backendLocation}/event`).then((res) => {
			setEventList(
				res.data.filter((event) => event.category == "PRE-EVENTS")
			);
		});
	}, []);

	return (
		<>
			<CardGrid>{eventList.map(CreateCard)}</CardGrid>
		</>
	);
}

export function TechCards() {
	const [eventList, setEventList] = useState([]);
	useEffect(() => {
		axios.get(`${config.backendLocation}/event`).then((res) => {
			setEventList(
				res.data.filter((event) => event.category == "TECHNICAL EVENTS")
			);
		});
	}, []);

	return (
		<>
			<CardGrid>{eventList.map(CreateCard)}</CardGrid>
		</>
	);
}

export function FunCards() {
	const [eventList, setEventList] = useState([]);
	useEffect(() => {
		axios.get(`${config.backendLocation}/event`).then((res) => {
			setEventList(
				res.data.filter((event) => event.category == "FUN EVENTS")
			);
		});
	}, []);

	return (
		<>
			<CardGrid>{eventList.map(CreateCard)}</CardGrid>
		</>
	);
}

export function GamingCards() {
	const [eventList, setEventList] = useState([]);
	useEffect(() => {
		axios.get(`${config.backendLocation}/event`).then((res) => {
			setEventList(
				res.data.filter((event) => event.category == "GAMING EVENTS")
			);
		});
	}, []);

	return (
		<>
			<CardGrid>{eventList.map(CreateCard)}</CardGrid>
		</>
	);
}
export function NeonCards() {
	const [eventList, setEventList] = useState([]);
	useEffect(() => {
		axios.get(`${config.backendLocation}/event`).then((res) => {
			setEventList(
				res.data.filter((event) => event.category == "NEON EVENTS")
			);
		});
	}, []);

	return (
		<>
			<CardGrid>{eventList.map(CreateCard)}</CardGrid>
		</>
	);
}

export function StrongmanCards() {
	const [eventList, setEventList] = useState([]);
	useEffect(() => {
		axios.get(`${config.backendLocation}/event`).then((res) => {
			setEventList(
				res.data.filter((event) => event.category == "STRONGMAN EVENTS")
			);
		});
	}, []);

	return (
		<>
			<CardGrid>{eventList.map(CreateCard)}</CardGrid>
		</>
	);
}
