import React, {useState} from 'react';
import styled from 'styled-components';
import {closeSession} from '../../controller/Auth';

import ButtonImage from '../../elements/ButtonImage/ButtonImage.component';
import avatarSVG from '../../assets/images/avatar.png';

const ImageStyle = styled.img `
    height:64px;
    width:64px;
`;

const LogoutButton= styled.button `
    margin: 20px;
    height: 42px;
    width: 122px;
    background: transparent;
    border: 2px solid ${props => props.theme.colors.forestGreen};
    border-radius: 20px;
    font-size: 22px;

    :hover {
        background-color: ${props => props.theme.colors.forestGreen};
        color: #ffffff;
    }
`;

//TODO: Fix bug: When de dropmenu is open the icon 'Avatar' moves out of the screen.
const Dropdown = styled.div `
	display: ${props => props.display};
	position: absolute;
	top: 64px;
	right: 0px;
	width: 250px;
	height: 250px;
	background-color: ${props => props.theme.colors.background};
	flex-direction: column;
	align-items: center;
	z-index: 10;
`;

const UserMenuButtonContainer = styled.div `
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	height: ${props => props.size};
	width: fit-content;
	background-color: transparent;
`;

const UserMenu = () => {
	let [display, setDisplay] = useState(false);

	const onMouseEnterHanddler = (e) => {
		e.preventDefault();
		setDisplay(true);
	}

	const onMouseLeaveHanddler = (e) => {
		e.preventDefault();
		setDisplay(false);
	}

	return (
		<UserMenuButtonContainer
			size={display ? '300px' : 'fit-content'}
			onMouseEnter={onMouseEnterHanddler}
			onMouseLeave={onMouseLeaveHanddler}
		>
			<ButtonImage
				altText='User menu'
				imageRoute={avatarSVG}
				size='46px'
				margin='0px 10px'

			/>
			<Dropdown display={display ? 'flex' : 'none'}>
				<ImageStyle src={avatarSVG}/>
				<label> email direction </label>
				<LogoutButton onClick = {closeSession}> log out </LogoutButton>
			</Dropdown>
		</UserMenuButtonContainer>
	);
}

export default UserMenu;
