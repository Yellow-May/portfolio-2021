import { createGlobalStyle } from "styled-components";

export default createGlobalStyle(_props => ({
	"*,*::before,*::after": {
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
	},

	body: {
		backgroundColor: "rgba(49, 49, 49, 1)",

		"#root": {
			minHeight: "100vh",
		},

		".ReactModal__Overlay": {
			opacity: 0,
			transition: "opacity 0.25s ease-in-out",

			"&--after-open": { opacity: 1 },

			"&--before-close": { opacity: 0 },
		},
	},
}));
