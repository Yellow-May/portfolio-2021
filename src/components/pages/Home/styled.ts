import styled from "styled-components";

import Container from "../../../styles/components/Container";

export const Section = {
	Wrapper: styled.section({
		boxShadow: "1px 2px 3px rgba(0, 0, 0, 0.25)",
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
			"linear-gradient(65deg, rgba(35, 35, 35, 1), rgba(45, 45, 45, 1), rgba(35, 35, 35, 1))",
		color: "rgba(217, 217, 217, 1)",

		h1: {
			fontSize: 18,
			textTransform: "uppercase",
		},

		button: {
			fontSize: 12,
		},
	}),

	Content: styled.div({
		height: "85%",
		overflowX: "auto",
		overflowY: "hidden",
		padding: "0 10px",
		backgroundColor: "rgba(72, 72, 72, 1)",
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
			fontSize: 16,
			color: "rgba(217, 217, 217, 1)",
		},

		p: {
			fontSize: 12,
			color: "rgba(165, 165, 165, 1)",
		},

		"media(min-width: 960px)": {
			h3: { fontSize: 18 },

			p: { fontSize: 14 },
		},

		"@media (min-height: 1024px)": {
			h3: { fontSize: 22 },

			p: { fontSize: 18 },
		},
	}),

	Projects: styled(Section.Content)({
		display: "flex",
		gap: 50,
		paddingLeft: 20,

		div: {
			height: 150,

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

		"@media (min-height: 1024px)": {
			div: {
				width: 225,
				height: 225,

				p: {
					fontSize: 18,
				},
			},
		},
	}),
};

export default styled(Container)(_props => ({
	display: "grid",
	gridTemplateRows: "1fr 1fr",
	gap: 40,
	paddingTop: 40,
	paddingBottom: 40,
	position: "relative",

	"@media (max-height: 480px)": {
		height: "600px",
	},

	"@media (min-width: 640px)": {
		gridTemplateColumns: "1fr 1fr",

		"section:nth-child(2)": {
			gridColumn: "span 2",
		},
	},
}));
