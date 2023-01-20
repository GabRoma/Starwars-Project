import React, { Component } from "react";
import "../../styles/footer.css";

export const Footer = () => (
	<footer className="footer text-center bg-black">
		<p className="credits pt-1">Made by{" "}
			<a style={{color:"white"}} href="https://github.com/GabRoma" target="_blank">
			Gab Roma <i className="fas fa-rocket"/></a>
		</p>
	</footer>
);