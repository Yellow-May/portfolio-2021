import styled from "styled-components";

const Styled = {
	Wrapper: styled.header({
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
	}),

	NavBar: styled.div<{ mobInView: boolean }>(props => ({
		position: "fixed",
		zIndex: 1,
		top: 0,
		left: props.mobInView ? 0 : "-100%",
		width: "90%",
		height: "100%",
		background:
			"linear-gradient(25deg, rgba(0, 0, 0, 1), transparent, rgba(0, 0, 0, 1), transparent, rgba(0, 0, 0, 1))",
		boxShadow: "1px 0px 5px rgba(35, 35, 35, 1)",
		transition: "0.75s",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: 50,
		paddingTop: 100,
		overflow: "hidden",

		"&::before": {
			content: "''",
			position: "absolute",
			zIndex: -1,
			top: 0,
			left: 0,
			width: "110%",
			height: "100%",
			background: "linear-gradient(90deg, rgba(0, 0, 0, 0.5), transparent)",
		},

		img: {
			width: 80,
		},

		"@media (min-width: 640px)": {
			position: "static",
			zIndex: 0,
			paddingTop: 0,
			background: "transparent",
			flexDirection: "row",

			"&::before": { content: "none" },

			img: {
				width: 30,
			},
		},
	})),

	NavLinks: styled.nav({
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
	}),

	Socials: styled.div({
		position: "absolute",
		bottom: 10,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: 16,

		button: {
			fontSize: 20,
		},

		"@media (min-width: 640px)": {
			flexDirection: "column",
			left: "1vw",
			position: "fixed",
		},

		"@media (max-height: 480px)": {
			button: {
				fontSize: 16,
			},
		},
	}),
};

export default Styled;
