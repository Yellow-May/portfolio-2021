import styled from "styled-components";

interface StyledSwitchProps {
	checked: boolean;
}

export default styled.div<StyledSwitchProps>(props => ({
	width: 60,
	height: 30,
	borderRadius: 30,
	boxShadow: "-1px -1px 0px rgba(255, 255, 255, 0.25), 1px 1px 0px rgba(0, 0, 0, 0.125)",
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
