import React from "react";
import reducer, { ActionTypes } from "./reducer";

export type CurrentPageTypes = "Home" | "Profile" | "Projects";

export interface InitialStateProps {
	themeLight: boolean;
	currentPage: CurrentPageTypes;
	contactOpen: boolean;
}

const initialState: InitialStateProps = {
	themeLight: false,
	currentPage: "Home",
	contactOpen: false,
};

interface ActionsProps {
	openContact: () => void;
	closeContact: () => void;
	changeCurrPage: (payload: CurrentPageTypes) => void;
	toggleTheme: () => void;
}

export const AppContext = React.createContext(
	{} as { state: InitialStateProps; actions: ActionsProps }
);

export const AppProvider: React.FC = ({ children }) => {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	const actions: ActionsProps = {
		openContact: () => dispatch({ type: ActionTypes.CONTACT_OPEN }),
		closeContact: () => dispatch({ type: ActionTypes.CONTACT_CLOSE }),
		changeCurrPage: payload => dispatch({ type: ActionTypes.CHANGE_CURRENT_PAGE, payload }),
		toggleTheme: () => dispatch({ type: ActionTypes.TOGGLE_THEME }),
	};

	return <AppContext.Provider value={{ state, actions }}> {children} </AppContext.Provider>;
};
