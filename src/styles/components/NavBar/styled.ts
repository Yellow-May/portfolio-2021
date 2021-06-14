import styled from "styled-components";

interface StyledNavBarProps {
	mobInView?: boolean;
}

export default styled.nav<StyledNavBarProps>(props => ({
	position: "fixed",
	top: 0,
	left: props.mobInView ? 0 : "-100%",
	width: "95%",
	height: "100%",
	backgroundColor: "rgba(70, 70, 70, 1)",
	boxShadow: "1px 0px 5px rgba(35, 35, 35, 1)",
	zIndex: -1,
	transition: "0.75s",

	"@media (min-width: 640px)": {
		position: "static",
	},
}));
