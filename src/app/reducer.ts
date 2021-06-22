import { CurrentPageTypes, InitialStateProps } from "./store";

export enum ActionTypes {
	CONTACT_OPEN = "CONTACT_OPEN",
	CONTACT_CLOSE = "CONTACT_CLOSE",
	NAVBAR_OPEN = "NAVBAR_OPEN",
	NAVBAR_CLOSE = "NAVBAR_CLOSE",
	CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE",
	TOGGLE_THEME = "TOGGLE_THEME",
}
interface ActionInterfaceProps {
	type: ActionTypes;
	payload?: CurrentPageTypes;
}

const reducer = (state: InitialStateProps, action: ActionInterfaceProps) => {
	switch (action.type) {
		case ActionTypes.CONTACT_OPEN:
			return { ...state, contactOpen: true };
		case ActionTypes.CONTACT_CLOSE:
			return { ...state, contactOpen: false };
		case ActionTypes.NAVBAR_OPEN:
			return { ...state, navbarOpen: true };
		case ActionTypes.NAVBAR_CLOSE:
			return { ...state, navbarOpen: false };
		case ActionTypes.CHANGE_CURRENT_PAGE:
			return { ...state, currentPage: action.payload || "Home" };
		case ActionTypes.TOGGLE_THEME:
			return { ...state, themeLight: !state.themeLight };
		default:
			return state;
	}
};

export default reducer;
