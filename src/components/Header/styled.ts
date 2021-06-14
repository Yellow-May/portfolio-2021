import styled from "styled-components";

interface StyledHeaderProps {}

export default styled.header<StyledHeaderProps>(_props => ({
	padding: "10px 0",
	backgroundColor: "rgba(35, 35, 35, 1)",
	color: "rgba(255, 255, 255, 1)",
	boxShadow: "0 2px 5px rgba(70, 70, 70, 1)",

	"div:first-child": {
		display: "flex",
		justifyContent: "space-between",
	},
}));
