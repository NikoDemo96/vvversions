import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";




export const Navbar = () => {
	const location = useLocation()
	const {store, actions} = useContext(Context);
	const navigate = useNavigate()
	const handleLogout = () => {
	const response = actions.logout()
	if (response) navigate("/")
	}
	return (
		<nav className={location.pathname==`/register`? `invisible` : location.pathname==`/about`? `invisible`: `navbar navbarhome` }>
			<div className="container">
				
				<Link to="/">
					<span className="navbar-brand mb-0 h1">VVVERSIONS</span>
				</Link>
				<div className="ml-auto">
					<Link to="/register">
						<button  disabled={location.pathname==`/register`? true : false } className={location.pathname==`/register`? "invisible" : "botonregister text-white me-3"}>  Register</button>
					</Link>
					<Link to="/user/login">
						<button className="botonlogin text-white me-3">Sign In</button>
					</Link>
					<button onClick={handleLogout} className="border border-0 bg-black logout ">Log out</button>
				</div>
			</div>
		</nav>
		
	);
};
