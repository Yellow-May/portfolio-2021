import styled from "styled-components";

import Container from "../../../styles/components/Container";

export const Section = {
	Wrapper: styled.section({
		overflow: "hidden",
		borderRadius: 5,
	}),

	Header: styled.header({
		height: "15%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 5,
		paddingLeft: 10,
		background:
			"linear-gradient(65deg, rgba(21, 21, 21, 1), rgba(35, 35, 35, 1), rgba(21, 21, 21, 1))",
		color: "rgba(255, 255, 255, 1)",

		h1: {
			fontSize: 17,
			textTransform: "uppercase",
		},

		button: { fontSize: 11 },
	}),

	Content: styled.div({
		height: "85%",
		overflowX: "auto",
		overflowY: "hidden",
		padding: "0 10px",
		background: "linear-gradient( rgba(32, 32, 32, 0.125), rgba(32, 32, 32, 0.5) )",
		alignItems: "center",
	}),
};

export const Content = {
	Profile: styled(Section.Content)({
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		textTransform: "uppercase",
		letterSpacing: 1,
		textAlign: "center",
		padding: 0,

		img: {
			height: "55%",
			borderRadius: "10%",
			boxShadow: "2px 2px 3px 2px rgba(5, 5, 5, 0.125)",
		},

		h3: {
			fontSize: 15,
			color: "rgba(217, 217, 217, 1)",
		},

		p: {
			fontSize: 12,
			color: "rgba(165, 165, 165, 1)",
		},

		"media(min-width: 960px)": {
			h3: { fontSize: 16 },
			p: { fontSize: 13 },
		},

		"@media (min-height: 1024px)": {
			h3: { fontSize: 20 },
			p: { fontSize: 16 },
		},
	}),

	Projects: styled(Section.Content)({
		display: "flex",
		gap: 50,
		paddingLeft: 20,

		div: {
			minWidth: 225,
			height: 150,
			position: "relative",

			"&::before": {
				content: "''",
				position: "absolute",
				width: "100%",
				height: 150,
				background: "rgba(0, 0, 0, 0.125)",
			},

			img: {
				width: "100%",
				height: "90%",
			},

			p: {
				fontSize: 12,
				color: "rgba(165, 165, 165, 1)",
				padding: "5px 0",
				overflow: "hidden",
				textOverflow: "ellipsis",
				whiteSpace: "nowrap",
			},
		},

		"@media (min-width: 960px)": {
			overflowX: "hidden",
			overflowY: "auto",
			flexWrap: "wrap",
			paddingTop: 20,

			div: { width: 220 },
		},

		"@media (min-height: 1024px)": {
			div: { p: { fontSize: 18 } },
		},

		"@media (min-height: 800px)": {
			div: {
				minWidth: 275,
				height: 175,

				"&::before": { height: 175 },
			},
		},
	}),
};

export default styled(Container)({
	height: "90vh",
	display: "grid",
	gridTemplateRows: "1fr 1fr",
	gap: 40,
	paddingTop: 40,
	paddingBottom: 40,

	"@media (max-height: 480px)": { height: 600 },

	"@media (min-height: 1024px)": { maxHeight: 960 },

	"@media (min-width: 640px)": {
		gridTemplateColumns: "1fr 1fr",

		"section:nth-child(2)": { gridColumn: "span 2" },
	},
});
