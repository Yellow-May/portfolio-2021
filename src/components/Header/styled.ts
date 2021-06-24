import styled from "styled-components";

const Styled = {
	Wrapper: styled.header(({ theme }) => ({
		padding: "10px 0",
		background: theme.color.main,
		color: theme.color.primary,
		boxShadow: `0 1.5px 1.5px ${theme.color.secondary}3F`,
		position: "relative",

		"& > div:first-child": {
			display: "flex",
			justifyContent: "space-between",
		},

		"@media (min-width: 768px)": {
			padding: "15px 0",

			"& > div:first-child > button": { display: "none" },

			"@media (max-height: 480px)": { padding: "10px 0" },
		},
	})),

	NavBar: styled.div<{ mobInView: boolean }>(({ theme, mobInView }) => ({
		position: "fixed",
		zIndex: 1,
		top: 0,
		left: mobInView ? 0 : "-100%",
		width: "90%",
		height: "100%",
		background: `${theme.color.main}BD`,
		boxShadow: "inherit",
		transition: "0.75s",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: 50,
		paddingTop: 100,
		overflow: "hidden",

		img: { width: 80 },

		"@media (min-height: 731px)": {
			gap: 75,

			img: { width: 90 },
		},

		"@media (min-width: 768px)": {
			position: "static",
			zIndex: 0,
			paddingTop: 0,
			background: "transparent",
			boxShadow: "none",
			flexDirection: "row",

			img: { width: 30 },
		},
	})),

	NavLinks: styled.nav(({ theme }) => ({
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: 20,

		button: {
			padding: "10px 25px",
			borderRadius: 25,
			fontWeight: 600,

			"&:hover": {
				background: `linear-gradient(transparent, ${theme.color.accentI}80)`,
			},
		},

		"@media (min-height: 731px)": { gap: 40, button: { fontSize: 16 } },

		"@media (min-width: 768px)": {
			position: "absolute",
			left: "50%",
			transform: "translateX(-50%)",
			flexDirection: "row",
			gap: 10,
			padding: "0 40px",
			borderRadius: 30,
			background: `linear-gradient(${theme.color.accentI}80, transparent)`,

			button: { fontSize: 11 },
		},
	})),

	Socials: styled.div({
		position: "absolute",
		bottom: 10,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: 16,

		a: { fontSize: 20 },

		"@media (min-width: 768px)": {
			flexDirection: "column",
			left: "1vw",
			position: "fixed",

			a: { fontSize: 22 },
		},
	}),
};

export default Styled;
