import React from "react";
import AboutUsCard from "./AboutUsCard";
import "./about.css";
import { AboutData } from "./aboutData";

const Top = AboutData.filter((EventsData) => EventsData.category === "top");
const Head = AboutData.filter((EventsData) => EventsData.category === "head");
const Assit = AboutData.filter((EventsData) => EventsData.category === "asst");

function CreateCard(Members) {
  return (
    <AboutUsCard
      name={Members.name}
      post={Members.post}
      key={Members.id}
      instagram={Members.instagram}
      linkdin={Members.linkdin}
      img={Members.img}
    />
  );
}

function TopCards() {
  return (
    <>
      <div className="ourTeamBlock">{Top.map(CreateCard)}</div>
    </>
  );
}

function HeadCards() {
  return (
    <>
      <div className="ourTeamBlock">{Head.map(CreateCard)}</div>
    </>
  );
}

function AssitCards() {
  return (
    <>
      <div className="ourTeamBlock">{Assit.map(CreateCard)}</div>
    </>
  );
}

export default function About() {
  return (
    <>
      <div className="about-ieee">
        <div className="boxone">
          <img
            src="IEEE_Atharva_logo_-removebg.png"
            className="iee"
            alt="IEEE-Atharva-Logo"
          ></img>
          <img src="logo.png" alt="Logo" className="alca"></img>
          <img src="ACE.png" alt="Atharva-Logo" className="ace"></img>
          <img src="background.jpg" alt="poster" className="bgimg"></img>
        </div>
        <div className="boxtwo">
          <h1>ABOUT IEEE TECHITHON</h1>
          <p>
            The Atharva College Of Engineering's Annual Technical Fest - IEEE
            TECHITHON, promotes engineering undergrads to demonstrate their
            technical prowess and develop new innovations. The major goal is to
            cultivate a drive for technical proficiency, logical cognition,
            logical reasoning and intelligent decision-making.A city-wide
            platform for all Technology Fans to display their skills and produce
            amazing products. IEEE TECHITHON '22 is a culmination of the work
            done by Young Tech Wizards.
          </p>
        </div>
      </div>
      <div className="gridDisplay">
        <h1 className="title">Our Team</h1>
        <TopCards />
        <h1 className="head">Heads</h1>
        <HeadCards />
        <h1 className="ah">Assitant Heads</h1>
        <AssitCards />
      </div>
    </>
  );
}
