import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import {
	ImageStyle, ColorButton, Dropdown, ThemeButtonContainer,
} from './ThemeButtonComponents';
import ButtonImage from '../ButtonImage/ButtonImage';

import themeSVG from '../../assets/icons/theme.svg';
import selectedSVG from '../../assets/icons/accept.svg';

const ThemeButton = ({
	noteColor, setNoteColor, noteIndex,
}) => {
	const themeContext = useContext(ThemeContext);
	const [showMenu, setShowMenu] = useState(false);
	const [selectedColor, setSelectedColor] = useState(noteColor);

	const onMouseEnterHanddler = (event) => {
		event.preventDefault();
		setShowMenu(true);
	};

	const onMouseLeaveHanddler = (event) => {
		event.preventDefault();
		setShowMenu(false);
	};

	const onClickHanddler = (index) => (event) => {
		setSelectedColor(index);
		if (noteIndex) {
			setNoteColor(noteIndex, { color: index });
		} else {
			setNoteColor(index);
		}
	};

	const colorButtons = themeContext.colors.noteTheme.map((element, index) => {
		return (
			<ColorButton
				key={element}
				colorPos={element}
				border={index === 0} // ? true : false
				onClick={onClickHanddler(index)}
			>
				<ImageStyle src={selectedSVG} display={index === selectedColor ? 'block' : 'none'} />
			</ColorButton>
		);
	});

	return (
		<ThemeButtonContainer
			onMouseEnter={onMouseEnterHanddler}
			onMouseLeave={onMouseLeaveHanddler}
		>
			<Dropdown
				display={showMenu ? 'flex' : 'none'}
			>
				{colorButtons}

			</Dropdown>
			<ButtonImage
				altText="Change color"
				imageRoute={themeSVG}
				size="40px"
				margin="0px 5px"
			/>

		</ThemeButtonContainer>
	);
}

export default ThemeButton;
