import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { AppContext } from "./app/store";
import GlobalCss from "./styles/global";
import currentTheme from "./styles/themes";

import Header from "./components/Header";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Projects from "./components/pages/Projects";
import ContactModal from "./components/Contact";

const App = () => {
	const { state } = React.useContext(AppContext);
	const theme = currentTheme(state.themeLight);

	return (
		<ThemeProvider theme={theme}>
			<GlobalCss />
			<ToastContainer hideProgressBar />
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/profile' component={Profile} />
				<Route path='/projects' component={Projects} />
			</Switch>
			<ContactModal />
		</ThemeProvider>
	);
};

export default App;
