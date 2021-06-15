import styled from "styled-components";

interface StyledButtonProps {
	variant?: "text" | "link" | "icon";
}

export default styled.button<StyledButtonProps>(props => ({
	outline: "none",
	cursor: "pointer",
	transition: "0.35s",
	borderRadius: 5,
	width: "max-content",
	fontSize: props.variant === "icon" ? 16 : 13,
	padding: props.variant === "icon" ? "5px 10px" : "5px 15px",
	textTransform: props.variant === "link" ? "uppercase" : "unset",

	background: "transparent",
	color: "rgba(255, 255, 255, 1)",
	borderWidth: props.variant === "link" && "text" ? 0 : 1,
	borderStyle: props.variant === "icon" ? "outset" : "solid",

	display: "flex",
	alignItems: "center",

	"&:hover": {
		background: "rgba(217, 217, 217, 0.25)",
	},
}));