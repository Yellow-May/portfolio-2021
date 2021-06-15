import React from "react";
import GlobalCssReset from "./styles/global";
import Header from "./components/Header";
import Home from "./components/pages/Home";

const App = () => {
	return (
		<>
			<GlobalCssReset />
			<Header />
			<Home />
		</>
	);
};

export default App;
