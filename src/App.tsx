import React from "react";
import { Route, Switch } from "react-router-dom";
import GlobalCss from "./styles/global";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Projects from "./components/pages/Projects";
import Contact from "./components/Contact";

const App = () => {
	return (
		<>
			<GlobalCss />
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/profile' component={Profile} />
				<Route path='/projects' component={Projects} />
				<Route path='/contact' component={Contact} />
			</Switch>
		</>
	);
};

export default App;
