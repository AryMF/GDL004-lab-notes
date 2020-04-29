import React from 'react';
import styled from 'styled-components';

import ButtonImage from '../ButtonImage/ButtonImage';
// import SearchBar from './SearchBar';
import ToggleSwitch from './ToggleSwitch';
import UserMenu from './UserMenu';

import burguerMenuSVG from '../../assets/icons/burguerMenu.svg';
import logoIcon from '../../assets/images/logoicon.ico';

const HeaderStyle = styled.header`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 64px;
    border-bottom: 1px solid ${(props) => props.theme.colors.highlight};
    display: flex;
    flex-direction: row !important;
    align-items: center;
`;

const DivStyle = styled.div`
    display: flex;
    flex: ${(props) => props.Flex};
    flex-direction: ${(props) => props.Direction};
    justify-content: ${(props) => props.Justify};
    align-items: ${(props) => props.Align};
`;

const ImageStyle = styled.img`
    height:44px;
    width:44px;
    margin: 0px 10px;
`;

const H3Style = styled.h3`
    margin: 0px 5px;
`;

function HeaderBar({ manageMenuState, themeChangerButton }) {
	return (
		<HeaderStyle>
			<DivStyle Flex="1" Direction="row" Justify="flex-start" Align="center">
				<ButtonImage
					altText="Menu"
					imageRoute={burguerMenuSVG}
					handdler={manageMenuState}
					size="46px"
					margin="0px 15px"
				/>
				<ImageStyle src={logoIcon} />
				<H3Style> memento </H3Style>
			</DivStyle>
			{/*
				<SearchBar />
			*/}
			<DivStyle Flex="1" Direction="row" Justify="flex-end" Align="center">
				<ToggleSwitch handdler={themeChangerButton} />
				<UserMenu />
			</DivStyle>
		</HeaderStyle>
	);
}

export default HeaderBar;
