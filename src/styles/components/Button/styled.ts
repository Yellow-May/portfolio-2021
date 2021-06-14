import styled from "styled-components";

interface StyledButtonProps {}

export default styled.button<StyledButtonProps>(props => ({
	outline: "none",
	cursor: "pointer",
	transition: "0.35s",
	borderRadius: 5,
	padding: "5px 15px",
	fontSize: 16,

	background: "none",
	color: "rgba(255, 255, 255, 1)",
	borderWidth: 1,
	borderStyle: "inset",

	display: "flex",
	alignItems: "center",
}));
