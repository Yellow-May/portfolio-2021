import React from "react";
import Modal from "react-modal";
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

const Contact = () => {
	const [open, setopen] = React.useState(false);
	const openModal = () => setopen(true);
	const closeModal = () => setopen(false);

	return (
		<div>
			<Button onClick={openModal}>Open Modal</Button>

			<Modal
				isOpen={open}
				onRequestClose={closeModal}
				shouldCloseOnOverlayClick={true}
				closeTimeoutMS={1000}
				style={customStyles}
				contentLabel='Testing'>
				<Button onClick={closeModal}>Close Modal</Button>
			</Modal>
		</div>
	);
};

export default Contact;
