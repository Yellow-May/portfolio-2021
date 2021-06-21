import styled from "styled-components";

interface StyledHeaderProps {}

export default styled.header<StyledHeaderProps>(_props => ({
	padding: "10px 0",
	backgroundColor: "rgba(35, 35, 35, 1)",
	color: "rgba(255, 255, 255, 1)",
	boxShadow: "0 1px 5px rgba(0, 0, 0, 1)",
	position: "relative",

	"& > div:first-child": {
		display: "flex",
		justifyContent: "space-between",
	},

	"@media (min-width: 640px)": {
		padding: "15px 0",

		"& > div:first-child > button": {
			display: "none",
		},

		"@media (max-height: 480px)": {
			padding: "10px 0",
		},
	},
}));
