import styled from "styled-components";

const Styled = {
	Wrapper: styled.div(({ theme }) => ({
		width: "100%",
		minHeight: "100%",
		background: theme.color.main,
		color: theme.color.secondary,
		textAlign: "center",
		padding: "20px 0",

		">button": {
			position: "absolute",
			top: 0,
			right: 0,
			borderRadius: "none",
			boxShadow: "none",
		},

		h1: {
			fontSize: 18,
			letterSpacing: 1,
			textTransform: "uppercase",
		},

		"@media (min-width: 768px)": { h1: { fontSize: 21 } },
	})),

	Detail: styled.div(({ theme }) => ({
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
		color: theme.color.primary,
		marginBottom: 10,
		fontSize: 14,

		span: { color: theme.color.secondary },

		"@media (min-width: 768px)": { fontSize: 16 },
	})),

	Divider: styled.span(({ theme }) => ({
		display: "block",
		width: "100%",
		borderBottom: `thin solid ${theme.color.accentII}`,
		margin: "15px 0",
	})),
};

export default Styled;
