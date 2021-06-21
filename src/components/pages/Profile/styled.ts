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

	Text: styled.p({
		fontSize: 16,
		lineHeight: 2,
	}),

	Divider: styled.span({
		width: "100%",
		margin: "10px",
		borderBottom: "thin solid rgba(165, 165, 165, 1)",
	}),

	Skills: styled.div({
		h3: {
			fontSize: 21,
			textTransform: "uppercase",
			marginBottom: 20,
			letterSpacing: 1.5,
			color: "rgba(255, 255, 255, 1)",
		},

		div: {
			display: "grid",
			gridTemplateColumns: "1fr 1fr",
			placeItems: "center",
			gap: 20,

			a: {
				fontSize: 15,
				color: "lightblue",

				"&:first-child, &:nth-child(n+6)": {
					gridColumn: "span 2",
				},
			},
		},
	}),
};

export default Styled;
