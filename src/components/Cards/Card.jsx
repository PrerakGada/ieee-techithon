import React from "react";
import "../Cards/Cards.css";
import Tilt from "react-vanilla-tilt";
import { Link, useNavigate } from "react-router-dom";

function Card(props) {
	const navigate = useNavigate();
	const toRegister = () => {
		navigate("/reg", { state: props });
	};
	return (
		<>
			{/* <div className="card">
            <h2>{heading}</h2>
            <div className="disc">{disc}</div>
            <button className='btn' >Register</button>
        </div> */}
			{/* <div className="card">
        <h2>Heading</h2>
        <div className="disc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tenetur dignissimos minus error laboriosam. Facere amet nemo laboriosam aliquid soluta, expedita similique tempora .</div>
        <button className='btn' >Register</button>
      </div> */}
			<Tilt
				options={{ scale: 2, max: 25 }}
				style={{ height: 300, width: 300 }}
			>
				<div className="card" id={props.name} name={props.name}>
					<h2>{props.name}</h2>
					<div className="disc">
						<p>{props.disc}</p>
						{props.date && <h3>Date: {props.date}</h3>}
						<h3>Prize Worth: ₹{props.prize}</h3>
						<h3>Registration: ₹{props.price} {props.pricing}</h3>
					</div>
					<button
						className="btn10"
						onClick={() => {
							toRegister();
						}}
					>
						Register
					</button>
				</div>
			</Tilt>
		</>
	);
}

export default Card;
