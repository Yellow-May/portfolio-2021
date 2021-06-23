import styled from "styled-components";

interface StyledInputProps {
	error?: boolean;
	textarea?: boolean;
}

export default styled.div<StyledInputProps>(props => ({
	width: "100%",
	height: "auto",
	margin: "8px 0",
	textAlign: "left",

	label: {
		color: "rgba(72, 72, 72, 1)",
		fontSize: 14,
		fontWeight: 600,
		paddingLeft: 5,
		marginBottom: 5,
	},

	"input, textarea": {
		width: "100%",
		height: props.textarea ? 80 : 35,
		outline: "none",
		border: "none",
		borderRadius: 5,
		background: "rgba(217, 217, 217, 1)",
		boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.5)",
		paddingLeft: 10,
		fontSize: 14,
		letterSpacing: 1,
		marginBottom: 2,

		"&:focus": {
			boxShadow: props.error
				? "1px 1px 2px 1px rgba(255, 0, 0, 0.5)"
				: "1px 1px 2px 1px rgba(0, 0, 0, 0.5)",
		},
	},

	span: {
		paddingLeft: 5,
		fontSize: 12,
		color: "red",
	},
}));
