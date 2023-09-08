import React from "react";
import "../Cards/Cards.css";
import Card from "./Card";
import { EventsData } from "../Pages/Events/EventData";
import { CreateCard } from "../Pages/Events/Events";
import { CardGrid } from "../Pages/Events/Events";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { styled } from "styled-components";
import axios from "axios";
import config from "../../config";

const PriorityEvents = EventsData.filter(
	(EventsData) => EventsData.priority === true
);

export default function EventCards() {
	return (
		<>
			<CardGrid>{PriorityEvents.map(CreateCard)}</CardGrid>
		</>
	);
}

function NumCard() {
	const [windowDimensions, setWindowDimensions] = useState(window.innerWidth);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	const num = windowDimensions > 500 ? 3 : 1;
	return num;
}

export function Eventcarousel() {
	const [eventList, setEventList] = useState([]);
	useEffect(() => {
		axios.get(`${config.backendLocation}/event`).then((res) => {
			setEventList(res.data);
		});
	}, []);

	return (
		<>
			<Swiper
				slidesPerView={NumCard()}
				spaceBetween={30}
				slidesPerGroup={NumCard()}
				loop={true}
				loopFillGroupWithBlank={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper"
			>
				{eventList.map(CarouselCard)}
			</Swiper>
		</>
	);
}

function CarouselCard(Events) {
	return (
		<SwiperSlide>
			<Card
				id={Events._id}
				_id={Events._id}
				name={Events.name}
				disc={Events.disc}
				key={Events._id}
				prize={Events.prize}
				// time={Events.time}
				date={Events.date}
				venue={Events.venue}
				price={Events.price}
        pricing={Events.pricing}
			/>
		</SwiperSlide>
	);
}
