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
	padding: props.variant === "icon" ? "5px 10px" : "7.5px 20px",
	textTransform: props.variant === "link" ? "uppercase" : "unset",

	background: props.active
		? `linear-gradient(transparent, ${props.theme.color.accentII}80)`
		: !props.variant
		? props.theme.color.primary + "A0"
		: "transparent",
	color: props.variant ? props.theme.color.primary : props.theme.color.main,
	border: "none",
	boxShadow:
		props.variant === "icon"
			? "-1.5px -1.5px 0px rgba(255,255,255,0.25), 1.5px 1.5px 0px rgba(0,0,0,0.25)"
			: "",

	textDecoration: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: 10,

	"&:hover": {
		background: `${props.theme.color.accentII}25`,
	},
}));
