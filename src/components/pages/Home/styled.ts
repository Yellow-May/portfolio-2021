import styled from "styled-components";

import Container from "../../../styles/components/Container";

export const Section = {
	Wrapper: styled.section({
		overflow: "hidden",
		borderRadius: 5,
	}),

	Header: styled.header(({ theme }) => ({
		height: "15%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 5,
		paddingLeft: 10,
		background: `${theme.color.main}4D`,
		color: theme.color.primary,

		h1: {
			fontSize: 13,
			letterSpacing: 1,
			textTransform: "uppercase",
		},

		button: { fontSize: 11 },

		"@media(min-width: 640px)": { h1: { fontSize: 15 } },
		"@media(min-height: 731px)": { h1: { fontSize: 14 } },
	})),

	Content: styled.div(({ theme }) => ({
		height: "85%",
		padding: "0 10px",
		background: `linear-gradient(${theme.color.main}0F, ${theme.color.main}5D)`,
		alignItems: "center",
	})),
};

export const Content = {
	Profile: styled(Section.Content)(({ theme }) => ({
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		textTransform: "uppercase",
		letterSpacing: 1,
		padding: 10,
		textAlign: "center",

		img: {
			height: "55%",
			borderRadius: "10%",
		},

		h3: {
			fontSize: 14,
			color: theme.color.secondary,
		},

		p: {
			fontSize: 11,
			color: theme.color.primary + "9F",
		},

		"media(min-width: 960px)": {
			padding: "20px 0",

			h3: { fontSize: 16 },
			p: { fontSize: 13 },
		},

		"@media (min-height: 640px)": {
			padding: "20px 0",

			h3: { fontSize: 15 },
			p: { fontSize: 12 },
		},

		"@media (min-height: 731px)": {
			h3: { fontSize: 16 },
			p: { fontSize: 13 },
		},

		"@media (min-height: 960px)": {
			h3: { fontSize: 18 },
			p: { fontSize: 15 },
		},
	})),

	Projects: styled(Section.Content)(({ theme }) => ({
		overflowX: "auto",
		overflowY: "hidden",
		display: "flex",
		gap: 50,
		paddingLeft: 20,

		img: {
			maxWidth: 225,
			borderRadius: 6,
			boxShadow: `0px 0px 1.5px 1.5px ${theme.color.main}4A`,
		},

		"@media (min-width: 960px)": {
			overflowX: "hidden",
			overflowY: "auto",
			flexWrap: "wrap",
			justifyContent: "space-evenly",
			paddingTop: 20,
		},

		"@media (min-height: 640px)": { img: { maxWidth: 250 } },
		"@media (min-height: 731px)": { img: { maxWidth: 300 } },
	})),
};

export default styled(Container)({
	height: "90vh",
	maxHeight: 800,
	display: "grid",
	gridTemplateRows: "1fr 1fr",
	gap: 30,
	paddingTop: 30,
	paddingBottom: 30,

	"@media (max-height: 480px)": { height: 600 },

	"@media (min-width: 960px)": {
		gridTemplateColumns: "3fr 2fr",

		"section:nth-child(2)": { gridColumn: "span 2" },
	},
});
