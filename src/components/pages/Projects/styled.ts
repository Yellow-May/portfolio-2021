import styled from "styled-components";
import Container from "../../../styles/components/Container";

const Styled = {
	Wrapper: styled(Container)({
		padding: "30px 0",
		overflow: "hidden",
		position: "relative",
	}),

	Header: styled.h1({
		marginBottom: 20,
		textTransform: "uppercase",
		letterSpacing: 1.5,
		fontSize: 20,
	}),

	Filters: styled.div({
		display: "flex",
		alignItems: "center",
		overflow: "auto",
		padding: 10,
		marginBottom: 50,
		gap: 30,
		borderBottom: "thin outset rgba(35, 35, 35, 1)",
	}),

	FilterButton: styled.div({
		position: "relative",

		input: {
			position: "absolute",
			width: "100%",
			height: "100%",
			cursor: "pointer",
			opacity: 0,

			"&:checked + span": {
				color: "rgba(255, 255, 255, 1)",
			},
		},

		span: {
			textTransform: "uppercase",
			fontSize: 14,
			whiteSpace: "nowrap",
		},
	}),

	DataArea: styled.div({
		display: "grid",
		gap: 50,

		"@media(min-width: 640px)": { gap: 100 },
	}),

	DataCard: styled.div({
		boxShadow: "1px 1px 3px rgba(35, 35, 35, 1)",

		"@media(min-width: 640px)": {
			display: "grid",
			gridTemplateColumns: "1fr 1fr",
		},
	}),

	DataCardImg: styled.div({
		position: "relative",
		marginBottom: 10,

		"&::before": {
			content: "''",
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "98.5%",
			backgroundColor: "rgba(0, 0, 0, 0.1)",
		},

		img: {
			width: "100%",
		},

		"@media(min-width: 640px)": {
			marginBottom: 0,
			marginRight: 20,

			"&::before": { height: "100%" },
			img: { height: "100%" },
		},
	}),

	DataCardContent: styled.div({
		padding: 10,
		display: "flex",
		flexDirection: "column",
		gap: 15,
		color: "rgba(217, 217, 0, 1)",

		h3: { fontSize: 18 },

		p: { fontSize: 14, span: { fontWeight: 600 } },

		dl: {
			dt: { fontSize: 14, fontWeight: 600 },

			dd: {
				marginLeft: 30,
				display: "flex",
				alignItems: "center",
				marginBottom: 5,
				fontSize: 12,
			},
		},

		"@media(min-width: 640px)": {
			justifyContent: "space-between",

			h3: { fontSize: 21 },

			p: { fontSize: 16 },

			dl: {
				dt: { fontSize: 15 },

				dd: { fontSize: 13 },
			},
		},
	}),
};

export default Styled;
