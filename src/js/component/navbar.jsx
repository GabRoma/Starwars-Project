import React from "react";
import { Link } from "react-router-dom";

//a 

export const Navbar = () => {
	return (
		<nav className="navbar navbar-black bg-black p-2">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png" width="90" height="54"/></span>
			</Link>
			<div className="ml-auto">
				<button className="btn btn-outline-warning nav-item dropdown p-0">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
		  Favorites
          </a>
          <ul className="dropdown-menu">
			<li>sample 1</li>
			<li>sample 2</li>
			</ul></button>
			</div>
		</nav>
	);
};
