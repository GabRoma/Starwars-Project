import React, { Component } from "react";
import "../../styles/footer.css";

export const Footer = () => (
	<footer className="footer text-center bg-black">
		<p className="credits">Made by{" "}
			<a style={{color:"white"}} href="https://github.com/GabRoma">
			<i className="far fa-starfighter"/>Gab Roma</a>
		</p>
	</footer>
);