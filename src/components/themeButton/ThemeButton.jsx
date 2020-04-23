import React, {useState, useContext, useEffect} from 'react';
import styled, { ThemeContext } from 'styled-components';

import ButtonImage from '../../elements/ButtonImage/ButtonImage.component';
import themeSVG from '../../assets/icons/theme.svg';
import selectedSVG from '../../assets/icons/accept.svg';

const ImageStyle = styled.img `
    height:24px;
    width:24px;
	display: ${props => props.display};
`;

const ColorButton = styled.button `
	width: 40px;
	height: 40px;
	border: ${props => props.border ? '1.5px solid' + props.theme.colors.highlight : 'none'};
	border-radius: 50%;
	margin: 5px;
	background-color: ${props => props.colorPos};
`;

const Dropdown = styled.div `
	display: ${props => props.display};
	position: relative;
	top: 2px;
	right: 0px;
	width: 250px;
	height: fit-content;
	background-color: ${props => props.theme.colors.background};
	flex-direction: row;
	flex-flow: wrap;
`;

const ThemeButtonContainer = styled.div `
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	height: fit-content;
	width: 40px;
	background-color: transparent;
`;

const ThemeButton = ({noteColor, setNoteColor}) => {
	const themeContext = useContext(ThemeContext);
	let [display, setDisplay] = useState(false);
	let [selectedColor, setSelectedColor] = useState(noteColor);

	const onMouseEnterHanddler = (e) => {
		e.preventDefault();
		setDisplay(true);
	}

	const onMouseLeaveHanddler = (e) => {
		e.preventDefault();
		setDisplay(false);
	}

	const onClickHanddler = (index) => (e) => {
		setNoteColor(index);
		setSelectedColor(index);
	}

	/*useEffect(() => {
		console.log(`Selected color ~ `, selectedColor);
	}, [selectedColor]);*/

	const colorButtons = themeContext.colors.noteTheme.map( (element, index) => {
		return (
			<ColorButton
				key={element}
				colorPos={element}
				border={index == 0 ? true : false}
				onClick={onClickHanddler(index)}
			>
				 <ImageStyle src={selectedSVG} display={ index == selectedColor ? 'block' : 'none'} />
			</ColorButton>
		);
	});

	return (
		<ThemeButtonContainer
			onMouseEnter={onMouseEnterHanddler}
			onMouseLeave={onMouseLeaveHanddler}
		>
			<ButtonImage
				altText='Change color'
				imageRoute={themeSVG}
				size='40px'
				margin='0px 5px'
			/>
			<Dropdown display={display ? 'flex' : 'none'}>
				{colorButtons}
			</Dropdown>
		</ThemeButtonContainer>
	);
}

export default ThemeButton;
