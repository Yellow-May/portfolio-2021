import styled from "styled-components";

interface StyledSwitchProps {
	checked: boolean;
}

export default styled.div<StyledSwitchProps>(props => ({
	width: 60,
	height: 30,
	borderRadius: 30,
	boxShadow: " 2px 2px 2px rgba(255, 255, 255, 0.25)",
	position: "relative",
	cursor: "pointer",

	span: {
		position: "absolute",
		width: 30,
		height: 30,
		top: 0,
		left: props.checked ? 30 : 0,
		borderRadius: "inherit",
		transition: "0.35s",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
}));
