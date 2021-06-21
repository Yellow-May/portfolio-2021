import styled from "styled-components";

export default styled.div({
	margin: "auto",
	width: "90vw",

	"@media (min-width: 640px)": { width: "85vw" },

	"@media (min-width: 1024px)": { width: "80vw" },
});
