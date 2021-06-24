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
		color: props.theme.color.secondary,
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
		background: props.theme.color.accentII,
		color: "#000000",
		paddingLeft: 10,
		fontSize: 14,
		letterSpacing: 1,
		marginBottom: 2,

		"&:focus": {
			boxShadow: props.error
				? "1.5px 1.5px 1.5px rgba(255, 0, 0, 0.5)"
				: `1.5px 1.5px 1.5px ${props.theme.color.secondary}`,
		},
	},

	span: {
		paddingLeft: 5,
		fontSize: 12,
		letterSpacing: 1,
		color: "red",
	},

	"@media (min-width: 768px)": {
		"label, input, textarea": { fontSize: 15 },

		label: { marginBottom: 8 },

		span: { fontSize: 13 },
	},
}));
