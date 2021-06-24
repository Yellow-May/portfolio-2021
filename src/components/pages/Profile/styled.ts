import styled from "styled-components";
import Container from "../../../styles/components/Container";

const Styled = {
	Wrapper: styled(Container)({
		padding: "30px 0",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		gap: 20,
	}),

	Img: styled.img({
		width: 125,
		borderRadius: "25%",
	}),

	Text: styled.p(({ theme }) => ({
		fontSize: 16,
		lineHeight: 2,
		color: theme.color.secondary,
	})),

	Divider: styled.span(({ theme }) => ({
		width: "100%",
		margin: "15px",
		borderBottom: `thin solid ${theme.color.accentII}`,
	})),

	Skills: styled.div(({ theme }) => ({
		h3: {
			fontSize: 21,
			textTransform: "uppercase",
			marginBottom: 25,
			letterSpacing: 1.5,
			color: theme.color.secondary,
		},

		div: {
			display: "grid",
			gridTemplateColumns: "1fr 1fr",
			placeItems: "center",
			gap: 20,

			a: {
				fontSize: 14,
				color: theme.color.primary,

				"&:first-child, &:nth-child(n+6)": {
					gridColumn: "span 2",
				},
			},
		},
	})),
};

export default Styled;
