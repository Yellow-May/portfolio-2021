import styled from "styled-components";

export default styled.form(({ theme }) => ({
	width: "90%",
	margin: "auto",
	display: "flex",
	flexDirection: "column",

	legend: {
		color: theme.color.primary,
		fontSize: 17,
		fontWeight: 600,
		letterSpacing: 1.5,
		textTransform: "uppercase",
		marginBottom: 15,

		"@media (min-width: 768px)": { fontSize: 19 },
	},

	button: {
		width: "100%",
		marginTop: 10,
		border: "none",
		padding: 7.5,
		textTransform: "uppercase",
		letterSpacing: 1,
		fontWeight: 600,
	},

	"@media (min-width: 960px)": {
		width: "60%",
		margin: "auto",
	},
}));
