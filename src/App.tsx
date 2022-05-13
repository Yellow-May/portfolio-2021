import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { AppContext } from 'app/store';
import GlobalCss from 'styles/global';
import currentTheme from 'styles/themes';

import Header from 'components/Header';
import Home from 'components/pages/Home';
import Profile from 'components/pages/Profile';
import Projects from 'components/pages/Projects';
import ContactModal from 'components/Contact';

const App = () => {
	const { state } = React.useContext(AppContext);
	const theme = currentTheme(state.themeLight);

	return (
		<ThemeProvider theme={theme}>
			<GlobalCss />
			<ToastContainer hideProgressBar />
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='profile' element={<Profile />} />
				<Route path='projects' element={<Projects />} />
			</Routes>
			<ContactModal />
		</ThemeProvider>
	);
};

export default App;
