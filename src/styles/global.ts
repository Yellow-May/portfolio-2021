import { createGlobalStyle } from "styled-components";

export default createGlobalStyle(_props => ({
	"*,*::before,*::after": {
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
	},
}));
