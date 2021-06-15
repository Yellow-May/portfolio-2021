import styled from "styled-components";

export const NavLinks = styled.nav(_props => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: 25,

	"@media (min-width: 640px)": {
		position: "absolute",
		left: "50%",
		transform: "translateX(-50%)",
		flexDirection: "row",
		gap: 10,
		padding: "0 40px",
		borderRadius: 30,
		background: "linear-gradient(25deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
	},
}));

export const Socials = styled.div(_props => ({
	position: "absolute",
	bottom: 10,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	gap: 16,

	"@media (min-width: 640px)": {
		left: "50%",
		transform: "translateX(-50%)",
		position: "fixed",
	},
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
	background:
		"linear-gradient(25deg, rgba(0,0,0,0.125), transparent, rgba(255, 255, 255, 0.125), transparent 75%)",
	boxShadow: "1px 0px 5px rgba(35, 35, 35, 1)",
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
		zIndex: 0,
		paddingTop: 0,
		background: "transparent",
		flexDirection: "row",

		img: {
			width: 30,
		},
	},
}));
