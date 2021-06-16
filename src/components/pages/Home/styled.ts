import styled from "styled-components";

import Container from "../../../styles/components/Container";

export default styled(Container)(_props => ({
	display: "grid",
	gridTemplateRows: "repeat(3, 1fr)",
	gap: 20,
	paddingTop: 20,
	paddingBottom: 10,

	"@media (min-width: 640px)": {
		gap: 5,
	},

	"@media (max-height: 480px)": {
		height: "600px",
	},
}));
