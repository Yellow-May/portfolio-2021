import styled from "styled-components";

import Container from "../../../styles/components/Container";

export const Section = {
	Wrapper: styled.section({
		boxShadow: "1px 2px 3px rgba(0,0,0,0.4)",
		overflowX: "hidden",
	}),

	Header: styled.header({
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 5,
		borderBottom: "thin solid",

		h1: {
			fontSize: 18,
			textTransform: "uppercase",
		},

		button: {
			fontSize: 12,
		},
	}),

	Content: styled.div({
		height: "78%",
		overflowX: "scroll",
		padding: "5px 0",
		paddingLeft: 5,
	}),
};

export default styled(Container)(_props => ({
	display: "grid",
	gridTemplateRows: "repeat(3, 1fr)",
	gap: 20,
	paddingTop: 20,
	paddingBottom: 10,
	position: "relative",

	"@media (min-width: 640px)": {
		gap: 5,
	},

	"@media (max-height: 480px)": {
		height: "600px",
	},
}));
