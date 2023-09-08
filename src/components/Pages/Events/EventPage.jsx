import React from "react";
import {TechCards ,PreCards,SpecialAttractionCards, FunCards, GamingCards, NeonCards, StrongmanCards} from "./Events";
import styled from 'styled-components';
import SideBar from './SideBar';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
export const EventCategory = styled.h1`
  display:block;
  line-height: 40px;
  margin-right: 1rem;
  font-size: "5em";
  color: #fff;
  text-decoration: none;
  padding-top: 120px ;
  padding-left:5vw ;
  height: 100%;
  border-bottom: 3px solid transparent;
  text-transform: uppercase;

  &:after {
  content: "";
  display: block;
  height: 3px;
  width: 0;
  max-width: 90vw;
  background: transparent;
  transition: width 2s ease, background-color 0.5s ease;
}

 &:hover:after {
  width: 100%;
  background: linear-gradient(to right,#ff2060,cyan);
}

 &.active {
  color: #ffffff;
  border: 1px solid #ffffff;
}


`;

const Page = styled.div`
 background: #222831;
 padding-bottom:70vh ;
`;


export default function Events() {
  // const [searchNote,setsearchNote] = useState('');
  return (
    <>
    <Page>
    <div className="menu"><SideBar/></div>
    <EventCategory id="PreEvents">Pre Events</EventCategory>
    <PreCards/>
    <EventCategory id="SpecialAttractionEvents">Special Attraction Events</EventCategory>
    <SpecialAttractionCards />
    <EventCategory id="TechEvents">Tech Events</EventCategory>
    <TechCards/>
    <EventCategory id="FunEvents">Fun Events</EventCategory>
    <FunCards />
    <EventCategory id="GamingEvents">Gaming Events</EventCategory>
    <GamingCards/>
    <EventCategory id="NeonEvents">Neon Events</EventCategory>
    <NeonCards/>
    <EventCategory id="StrongmanEvents">Strongman Events</EventCategory>
    <StrongmanCards />
    </Page>
    </>
  );
}

