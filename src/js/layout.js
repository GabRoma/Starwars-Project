//layout
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo";
import { CharacterView } from "./views/characterview";
import { PlanetView } from "./views/planetview";
import { ShipView } from "./views/shipview";
import { Form } from "./views/login";
import { Signup } from "./views/signup";
import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import injectContext from "./store/appContext";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="wrapper bg-dark h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Form/>}/>
						<Route path="/home" element={<Home />} />
						<Route path="/signup" element={<Signup/>}/>
						<Route path="/demo" element={<Demo />} />
						<Route path="/characterview/:theid" element={<CharacterView />} />
						<Route path="/planetview/:theid" element={<PlanetView/>}/>
						<Route path="/shipview/:theid" element={<ShipView/>}></Route>
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer/>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
