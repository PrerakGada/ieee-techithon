import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Register from "./../Pages/Register/Register";

// export function Header() {
//   return (
//     <header>
//        <nav id="main-navbar" className="navbar">
//         <h1 className="logo">Techithon</h1>
//         <nav>
//           <ul>
//             <li>
//               <a href="/home">Home</a>
//             </li>
//             <li>
//               <a href="/home">Events</a>
//             </li>
//             <li>
//               <a href="/home">About Us</a>
//             </li>
//             <li>
//               <a href="/home">Login</a>
//             </li>
//           </ul>
//         </nav>
//       </nav>
//     </header>

//   );
// }

export function Header() {
	const [click, setClick] = React.useState(false);
	const handleClick = () => setClick(!click);
	const Close = () => setClick(false);

	return (
		<div>
			<div
				className={click ? "main-container" : ""}
				onClick={() => Close()}
			/>
			<nav className="navbar" onClick={(e) => e.stopPropagation()}>
				<div className="nav-container">
					<img
						src="IEEE_Atharva_logo_-removebg.png"
						alt="IEEE"
						height="50px"
						width="120px"
					></img>
					<h1
						className="nav-logo"
						onClick={() => (window.location = "/")}
					>
						Techithon
					</h1>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<span
								style={{
									color: "white",
									cursor: "pointer",
								}}
								onClick={() => (window.location = "/")}
							>
								Home
							</span>
						</li>
						<li className="nav-item">
							<Link
								to="/about"
								className="nav-links"
								onClick={click ? handleClick : null}
							>
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/events"
								className="nav-links"
								onClick={click ? handleClick : null}
							>
								Events
							</Link>
						</li>
						{localStorage.token ? (
							<li className="nav-item">
								<span
									className="nav-links"
									onClick={() => {
										localStorage.clear();
										window.location = "/";
									}}
								>
									Logout
								</span>
							</li>
						) : (
							<>
								<li className="nav-item">
									<Link
										to="/login"
										className="nav-links"
										onClick={click ? handleClick : null}
									>
										Login
									</Link>
								</li>
								<li className="nav-item">
									<Link
										to="/signup"
										className="nav-links"
										onClick={click ? handleClick : null}
									>
										Signup
									</Link>
								</li>
							</>
						)}
					</ul>
					<div className="nav-icon" onClick={handleClick}>
						<i className={click ? "fa fa-times" : "fa fa-bars"}></i>
					</div>
				</div>
			</nav>
		</div>
	);
}
