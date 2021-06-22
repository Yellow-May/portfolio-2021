import React from "react";
import Modal from "react-modal";
import { AppContext } from "../../app/store";
import Button from "../../styles/components/Button";

Modal.setAppElement("#root");

const customStyles = {
	overlay: {
		background: "rgba(165, 165, 165, 0.5)",
	},
	content: {
		top: "50%",
		left: "50%",
		width: "90%",
		transform: "translate(-50%, -50%)",
	},
};

const ContactModal = () => {
	const { state, actions } = React.useContext(AppContext);

	return (
		<Modal
			isOpen={state.contactOpen}
			onRequestClose={actions.closeContact}
			shouldCloseOnOverlayClick={true}
			closeTimeoutMS={1000}
			style={customStyles}
			contentLabel='Testing'>
			<Button onClick={actions.closeContact}>Close Modal</Button>
		</Modal>
	);
};

export default ContactModal;
