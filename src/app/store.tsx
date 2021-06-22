import React from "react";
import reducer, { ActionInterfaceProps } from "./reducer";

export type CurrentPageTypes = "Home" | "Profile" | "Projects";

export interface InitialStateProps {
	themeLight: boolean;
	currentPage: CurrentPageTypes;
	navbarOpen: boolean;
	contactOpen: boolean;
}

const initialState: InitialStateProps = {
	themeLight: false,
	currentPage: "Home",
	navbarOpen: false,
	contactOpen: false,
};

export const AppContext = React.createContext(
	{} as { state: InitialStateProps; dispatch: (value: ActionInterfaceProps) => void }
);

export const AppProvider: React.FC = ({ children }) => {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	return <AppContext.Provider value={{ state, dispatch }}> {children} </AppContext.Provider>;
};
