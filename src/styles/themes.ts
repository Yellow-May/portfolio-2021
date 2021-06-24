import { DefaultTheme } from "styled-components";

export const currentTheme = (themeLight: boolean) => {
	let defaultTheme = {
		color: {
			main: "#000000",
			primary: "#FFFF00",
			secondary: "#D9D9D9",
			accentI: "#434343",
			accentII: "#969696",
		},
	} as DefaultTheme;

	if (themeLight) {
		defaultTheme.color.main = "#E6E6E6";
		defaultTheme.color.primary = "#0000FF";
		defaultTheme.color.secondary = "#4F4F4F";
		defaultTheme.color.accentI = "#FFFFFF";
		defaultTheme.color.accentII = "#A1A1A1";
	}

	return defaultTheme;
};

export default currentTheme;
