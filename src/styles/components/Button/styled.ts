import styled from "styled-components";

interface StyledButtonProps {
	variant?: "link" | "text" | "icon";
	active?: boolean;
	floater?: "bottom-right";
}

export default styled.button<StyledButtonProps>(props => ({
	outline: "none",
	cursor: "pointer",
	transition: "0.35s",
	width: props.floater ? 45 : "max-content",
	height: props.floater ? 45 : "",
	position: props.floater ? "fixed" : "static",
	bottom: props.floater === "bottom-right" ? 16 : "",
	right: props.floater === "bottom-right" ? 16 : "",
	borderRadius: props.floater ? "50%" : 5,
	fontSize: props.variant === "icon" ? 16 : 13,
	padding: props.variant === "icon" ? "5px 10px" : "5px 15px",
	textTransform: props.variant === "link" ? "uppercase" : "unset",

	background: props.active ? "rgba(217, 217, 217, 0.125)" : "transparent",
	color: "rgba(255, 255, 255, 1)",
	borderWidth: props.variant ? 0 : 1,
	borderStyle: props.variant ? "" : "solid",
	boxShadow:
		props.variant === "icon"
			? "-1px -1px 0px rgba(255, 255, 255, 0.25), 1px 1px 0px rgba(0, 0, 0, 0.125)"
			: "",

	textDecoration: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: 10,

	"&:hover": {
		background: "rgba(217, 217, 217, 0.125)",
	},
}));
