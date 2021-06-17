import styled from "styled-components";

import Container from "../../../styles/components/Container";

export const Section = {
	Wrapper: styled.section({
		boxShadow: "1px 2px 3px rgba(0,0,0,0.4)",
		overflow: "hidden",
		borderRadius: 5,
	}),

	Header: styled.header({
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 5,
		backgroundColor: "rgba(45, 45, 45, 1)",
		color: "rgba(217, 217, 217, 1)",

		h1: {
			fontSize: 18,
			textTransform: "uppercase",
		},

		button: {
			fontSize: 12,
		},

		"@media (min-width: 1024px)": {
			padding: 10,

			h1: {
				fontSize: 22,
			},

			button: {
				fontSize: 15,
			},
		},
	}),

	Content: styled.div({
		height: "82%",
		overflowX: "auto",
		overflowY: "hidden",
		padding: "0 10px",
		backgroundColor: "rgba(70,70,70,1)",
	}),
};

export const Content = {
	About: styled(Section.Content)({
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: 20,

		img: {
			width: 100,
			height: 100,
			borderRadius: "10%",
			boxShadow: "2px 2px 3px 1px rgba(255, 255, 255, 0.125)",
		},

		div: {
			h3: {
				fontSize: 16,
				marginBottom: 10,
			},

			p: {
				fontSize: 14,
			},

			"@media (min-width: 640px)": {
				h3: {
					fontSize: 20,
				},

				p: {
					fontSize: 16,
				},
			},
		},

		"@media (min-width: 1024px)": {
			img: {
				width: 175,
				height: 175,
			},
		},

		"@media (min-height: 960px)": {
			img: {
				width: 175,
				height: 175,
			},
		},
	}),

	Skills: styled(Section.Content)({
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		padding: 10,

		"@media (min-width: 640px)": {
			padding: 20,
		},

		"@media (min-width: 1024px)": {
			padding: 30,
		},
	}),

	Projects: styled(Section.Content)({
		display: "grid",
		gridTemplateColumns: "repeat(5, 1fr)",
		alignItems: "center",
		gap: 30,

		div: {
			minWidth: 100,
			height: 100,
			fontSize: 11,
			color: "rgba(217, 217, 217, 1)",

			img: {
				width: "100%",
				height: "90%",
			},

			p: {
				padding: "5px 0",
				overflow: "hidden",
				textOverflow: "ellipsis",
				whiteSpace: "nowrap",
			},

			"@media (min-width: 640px)": {
				fontSize: 12,
			},
		},

		"@media (min-height: 960px)": {
			div: {
				minWidth: 175,
				height: 175,
			},
		},

		"@media (min-width: 1024px)": {
			gap: 50,

			div: {
				minWidth: 180,
				height: 180,
			},
		},
	}),
};

export default styled(Container)(_props => ({
	display: "grid",
	gridTemplateRows: "repeat(3, 1fr)",
	gap: 20,
	paddingTop: 20,
	paddingBottom: 10,
	position: "relative",

	"@media (max-height: 480px)": {
		height: "600px",
	},

	"@media (min-width: 1024px)": {
		gridTemplateRows: "1fr 1fr",
		gridTemplateColumns: "1fr 1fr",

		"section:nth-child(3)": {
			gridColumn: "span 2",
		},
	},
}));
