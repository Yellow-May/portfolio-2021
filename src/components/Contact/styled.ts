import styled from "styled-components";

const Styled = {
	Wrapper: styled.div({
		width: "100%",
		minHeight: "100%",
		background:
			"linear-gradient(25deg, rgba(77, 77, 0, 1), rgba(217, 217, 0, 1), rgba(77, 77, 0, 1))",
		color: "rgba(0, 0, 0, 1)",
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
			fontSize: 21,
			marginBottom: 15,
			letterSpacing: 1,
			textTransform: "uppercase",
		},
	}),

	Detail: styled.div({
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
		marginBottom: 10,

		span: {
			fontSize: 14,
		},
	}),

	Divider: styled.span({
		display: "block",
		width: "100%",
		borderBottom: "thin solid rgba(165, 165, 165, 1)",
		margin: "15px 0",
	}),
};

export default Styled;
