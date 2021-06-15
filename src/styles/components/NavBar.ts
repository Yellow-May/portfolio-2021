import styled from "styled-components";

export const NavLinks = styled.nav(_props => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: 25,
}));

export const Socials = styled.div(_props => ({
	position: "absolute",
	bottom: 10,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	gap: 16,
}));

interface StyledNavBarProps {
	mobInView?: boolean;
}

export default styled.div<StyledNavBarProps>(props => ({
	position: "fixed",
	top: 0,
	left: props.mobInView ? 0 : "-100%",
	width: "80%",
	height: "100%",
	backgroundColor: "rgba(70, 70, 70, 1)",
	boxShadow: "1px 0px 5px rgba(35, 35, 35, 1)",
	zIndex: -1,
	transition: "0.75s",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: 50,
	paddingTop: 100,

	img: {
		width: 80,
	},

	"@media (min-width: 640px)": {
		position: "static",
	},
}));