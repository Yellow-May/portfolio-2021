import { TiLocationOutline, TiMail, TiPhoneOutline } from "react-icons/ti";

export const customStyles = {
	overlay: {
		background: "#9A9A9A9A",
	},
	content: {
		width: "90%",
		left: "50%",
		transform: "translateX(-50%)",
		padding: 0,
		border: "none",
		background: "transparent",
	},
};

export const details = [
	{ Fc: TiLocationOutline, text: "Umuahia, Abia State, Nigeria" },
	{ Fc: TiPhoneOutline, text: "+234 90710 67543" },
	{ Fc: TiMail, text: "onyekwerechidip@gmail.com" },
];
