import React from 'react';
import Modal from 'react-modal';
import { AppContext } from 'app/store';

import Styled from './styled';
import ContactForm from './Form';
import Button from 'styles/components/Button';
import { FaTimes } from 'react-icons/fa';
import { customStyles, details } from './data';

Modal.setAppElement('#root');

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
			<Styled.Wrapper>
				<Button variant='icon' title='close Contact Modal' handleClick={actions.closeContact}>
					<FaTimes color='red' />
				</Button>

				<h1>Contact Details</h1>

				<Styled.Divider></Styled.Divider>

				{details.map((Detail, index) => (
					<Styled.Detail key={index}>
						<Detail.Fc size={18} /> <span>{Detail.text}</span>
					</Styled.Detail>
				))}

				<Styled.Divider></Styled.Divider>

				<ContactForm />
			</Styled.Wrapper>
		</Modal>
	);
};

export default ContactModal;
