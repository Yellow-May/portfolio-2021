import styled from "styled-components";

interface StyledHeaderProps {}

export default styled.header<StyledHeaderProps>(_props => ({
	padding: 10,
	backgroundColor: "rgba(35, 35, 35, 1)",
	color: "rgba(255, 255, 255, 1)",
}));
