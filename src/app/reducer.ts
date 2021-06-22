import { CurrentPageTypes, InitialStateProps } from "./store";

export enum Actions {
	CONTACT_OPEN = "CONTACT_OPEN",
	CONTACT_CLOSE = "CONTACT_CLOSE",
	NAVBAR_OPEN = "NAVBAR_OPEN",
	NAVBAR_CLOSE = "NAVBAR_CLOSE",
	CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE",
	TOGGLE_THEME = "TOGGLE_THEME",
}

export interface ActionInterfaceProps {
	type: Actions;
	payload?: CurrentPageTypes;
}

const reducer = (state: InitialStateProps, action: ActionInterfaceProps) => {
	switch (action.type) {
		case Actions.CONTACT_OPEN:
			return { ...state, contactOpen: true };
		case Actions.CONTACT_CLOSE:
			return { ...state, contactOpen: false };
		case Actions.NAVBAR_OPEN:
			return { ...state, navbarOpen: true };
		case Actions.NAVBAR_CLOSE:
			return { ...state, navbarOpen: false };
		case Actions.CHANGE_CURRENT_PAGE:
			return { ...state, currentPage: action.payload || "Home" };
		case Actions.TOGGLE_THEME:
			return { ...state, themeDark: !state.themeDark };
		default:
			return state;
	}
};

export default reducer;
