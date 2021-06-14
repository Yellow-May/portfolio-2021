import styled from "styled-components";

interface StyledButtonProps {}

export default styled.button<StyledButtonProps>(_props => ({
	outline: "none",
	cursor: "pointer",
	transition: "0.35s",
	borderRadius: 5,
	padding: "5px 15px",

	background: "none",
	color: "rgba(30, 150, 252, 1)",
	borderWidth: "thin",
	borderColor: "rgba(30, 150, 252, 1)",
}));
