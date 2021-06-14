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
	color: "rgba(30, 150, 252, 1)",
	borderWidth: 1,
	borderStyle: "inset",
	borderColor: "rgba(30, 150, 252, 1)",

	display: "flex",
	alignItems: "center",
}));
