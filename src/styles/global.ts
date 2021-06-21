import { createGlobalStyle } from "styled-components";

export default createGlobalStyle(_props => ({
	"*,*::before,*::after": {
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
	},

	body: {
		backgroundColor: "rgba(52, 52, 52, 1)",
		overflow: "hidden",

		"#root": {
			minHeight: "100vh",
		},
	},
}));
