import React from "react";
import GlobalCss from "./styles/global";
import Header from "./components/Header";
import Home from "./components/pages/Home";

const App = () => {
	return (
		<>
			<GlobalCss />
			<Header />
			<Home />
		</>
	);
};

export default App;
