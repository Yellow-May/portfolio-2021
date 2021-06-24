import styled from "styled-components";
import Container from "../../../styles/components/Container";

const Styled = {
	Wrapper: styled(Container)(({ theme }) => ({
		padding: "30px 0",
		overflow: "hidden",
		color: theme.color.secondary,
	})),

	Header: styled.h1({
		marginBottom: 20,
		textTransform: "uppercase",
		letterSpacing: 1.5,
		fontSize: 18,

		"@media (min-width: 768px)": { fontSize: 21 },
	}),

	Filters: styled.div(({ theme }) => ({
		display: "flex",
		alignItems: "center",
		overflow: "auto",
		padding: 10,
		marginBottom: 50,
		gap: 30,
		borderBottom: `thin solid ${theme.color.accentII}`,
	})),

	FilterButton: styled.div(({ theme }) => ({
		position: "relative",

		input: {
			position: "absolute",
			width: "100%",
			height: "100%",
			cursor: "pointer",
			opacity: 0,

			"&:checked + span": { color: theme.color.primary },
		},

		span: {
			textTransform: "uppercase",
			fontSize: 12,
			whiteSpace: "nowrap",
		},

		"@media (min-width: 768px)": { span: { fontSize: 14 } },
	})),

	DataArea: styled.div({
		display: "grid",
		gap: 80,

		"@media(min-width: 768px)": { gap: 100 },
	}),

	DataCard: styled.div(({ theme }) => ({
		background: `linear-gradient( transparent, ${theme.color.main}2F )`,
		boxShadow: `0px 2px 2px ${theme.color.accentII}`,
		borderRadius: 7,
		overflow: "hidden",

		"@media(min-width: 768px)": {
			display: "grid",
			gridTemplateColumns: "1fr 1fr",
		},
	})),

	DataCardImg: styled.div({
		marginBottom: 10,

		img: { width: "100%" },

		"@media(min-width: 768px)": {
			marginBottom: 0,
			marginRight: 20,

			img: { height: "100%" },
		},
	}),

	DataCardContent: styled.div(({ theme }) => ({
		padding: 10,
		display: "flex",
		flexDirection: "column",
		gap: 15,

		h3: { fontSize: 17 },

		p: {
			fontSize: 14,
			color: theme.color.primary,

			span: { fontWeight: 600, color: theme.color.secondary },
		},

		dl: {
			dt: { fontSize: 14, fontWeight: 600 },

			dd: {
				marginLeft: 30,
				display: "flex",
				alignItems: "center",
				marginBottom: 5,
				fontSize: 12,
				color: theme.color.primary,
			},
		},

		"@media(min-width: 768px)": {
			justifyContent: "space-between",

			h3: { fontSize: 20 },
			p: { fontSize: 16 },

			dl: {
				dt: { fontSize: 15 },
				dd: { fontSize: 13 },
			},
		},
	})),
};

export default Styled;
