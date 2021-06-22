import React from "react";
import { AppContext } from "../../../app/store";
import { Actions } from "../../../app/reducer";

import Styled from "./styled";
import Button from "../../../styles/components/Button";

import profile from "../../../assets/images/profile.jpg";
import { listitems } from "./data";

const Profile = () => {
	const { dispatch } = React.useContext(AppContext);

	return (
		<Styled.Wrapper as='main'>
			<Styled.Img src={profile} alt='Onyekwere Precious' />
			<Styled.Text>
				Hello There 👋 <br /> My name is Onyekwere Chidiebube Precious <br /> A Frontend Web
				Developer/ Designer
			</Styled.Text>
			<Styled.Divider></Styled.Divider>
			<Styled.Skills>
				<h3>Web Dev. Skills</h3>
				<div>
					{listitems.map((Item, index) => (
						<Button as='a' href={Item.link} variant='link' key={index}>
							<Item.Fc /> {Item.text}
						</Button>
					))}
				</div>
			</Styled.Skills>
			<Styled.Divider></Styled.Divider>
			<Styled.Text>Contact me for collaborations, contracts and hire</Styled.Text>
			<Button
				title='Open Contact Modal'
				onClick={() => dispatch({ type: Actions.CONTACT_OPEN })}>
				Contact me
			</Button>
		</Styled.Wrapper>
	);
};

export default Profile;
