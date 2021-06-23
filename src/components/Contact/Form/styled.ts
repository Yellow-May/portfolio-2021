import styled from "styled-components";

export default styled.form({
	width: "90%",
	margin: "auto",
	display: "flex",
	flexDirection: "column",

	legend: {
		textTransform: "uppercase",
		letterSpacing: 1.5,
		fontSize: 18,
		fontWeight: 600,
		marginBottom: 15,
	},

	button: {
		width: "100%",
		marginTop: 10,
		border: "none",
		boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.5)",
		color: "rgba(0, 0, 0, 1)",
		padding: 7.5,
		textTransform: "uppercase",
		letterSpacing: 1,
		fontWeight: 600,
	},

	"@media (min-width: 960px)": {
		width: "60%",
		margin: "auto",
	},
});
