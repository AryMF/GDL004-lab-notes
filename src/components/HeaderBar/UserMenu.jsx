import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AuthContext, closeSession } from '../../controller/Auth';

import ButtonImage from '../ButtonImage/ButtonImage';
import avatarSVG from '../../assets/images/avatar.png';

const ImageStyle = styled.img`
    height:64px;
    width:64px;
`;

const LogoutButton = styled.button`
    margin: 20px;
    height: 42px;
    width: 122px;
    background: transparent;
    border: 2px solid ${(props) => props.theme.colors.forestGreen};
    border-radius: 20px;
    font-size: 22px;

    :hover {
        background-color: ${(props) => props.theme.colors.forestGreen};
        color: #ffffff;
    }
`;

const Dropdown = styled.div`
	display: ${(props) => props.display};
	position: absolute;
	top: 50px;
	right: 0px;
	width: 250px;
	height: fit-content;
	border: 1px solid ${(props) => props.theme.colors.highlight};
	padding: 10px;
	background-color: ${(props) => props.theme.colors.background};
	flex-direction: column;
	align-items: center;
	z-index: 10;
`;

const UserMenuButtonContainer = styled.div`
	display: flex;
	flex-direction: column-reverse;
	align-items: flex-end;
	height: fit-content;
	width: fit-content;
	background-color: transparent;
`;

function UserMenu() {
	const { currentUser } = useContext(AuthContext);
	const avatarImage = currentUser.photoURL || avatarSVG;
	const [display, setDisplay] = useState(false);

	const onMouseEnterHanddler = (e) => {
		e.preventDefault();
		setDisplay(true);
	};

	const onMouseLeaveHanddler = (e) => {
		e.preventDefault();
		setDisplay(false);
	};

	return (
		<UserMenuButtonContainer
			onMouseEnter={onMouseEnterHanddler}
			onMouseLeave={onMouseLeaveHanddler}
		>
			<ButtonImage
				altText="User menu"
				imageRoute={avatarImage}
				size="46px"
				margin="0px 10px"

			/>
			<Dropdown display={display ? 'flex' : 'none'}>
				<br />
				<ImageStyle src={avatarImage} />
				<br />
				<h4>
					{currentUser.displayName}
				</h4>
				<p>
					{currentUser.email}
				</p>
				<LogoutButton onClick={closeSession}> log out </LogoutButton>
			</Dropdown>
		</UserMenuButtonContainer>
	);
}

export default UserMenu;
