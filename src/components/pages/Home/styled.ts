import styled from "styled-components";

import Container from "../../../styles/components/Container";

export default styled(Container)(_props => ({
	display: "grid",
	gridTemplateRows: "repeat(4, 1fr)",
	gap: 20,
	paddingTop: 20,
	paddingBottom: 10,
}));
