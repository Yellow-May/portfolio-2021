import { CurrentPageTypes, InitialStateProps } from "./store";

export enum ActionsProps {
	CONTACT_OPEN = "CONTACT_OPEN",
	CONTACT_CLOSE = "CONTACT_CLOSE",
	NAVBAR_OPEN = "NAVBAR_OPEN",
	NAVBAR_CLOSE = "NAVBAR_CLOSE",
	CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE",
	TOGGLE_THEME = "TOGGLE_THEME",
}

export interface ActionInterfaceProps {
	type: ActionsProps;
	payload?: CurrentPageTypes;
}

const reducer = (state: InitialStateProps, action: ActionInterfaceProps) => {
	switch (action.type) {
		case ActionsProps.CONTACT_OPEN:
			return { ...state, contactOpen: true };
		case ActionsProps.CONTACT_CLOSE:
			return { ...state, contactOpen: false };
		case ActionsProps.NAVBAR_OPEN:
			return { ...state, navbarOpen: true };
		case ActionsProps.NAVBAR_CLOSE:
			return { ...state, navbarOpen: false };
		case ActionsProps.CHANGE_CURRENT_PAGE:
			return { ...state, currentPage: action.payload || "Home" };
		case ActionsProps.TOGGLE_THEME:
			return { ...state, themeDark: !state.themeDark };
		default:
			return state;
	}
};

export default reducer;
