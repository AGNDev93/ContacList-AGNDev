import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-white mt-5 mb-0 d-flex justify-content-end">
			{/* <Link to="/ ">
				<span className="navbar-brand mb-0 h1">Agenda</span>
			</Link> */}
			<div className="ml-auto">
				<Link to="/add">
					<button className="btn btn-success mt-2 mb-2 me-5">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
