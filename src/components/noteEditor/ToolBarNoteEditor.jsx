import React from 'react';
import styled from 'styled-components';

import ButtonImage from '../ButtonImage/ButtonImage';
import ThemeButton from '../ThemeButton/ThemeButton';

import imageSVG from '../../assets/icons/image.svg';

const ToolBarStyle = styled.div`
    background-color: transparent;
    width: calc( 100% - 1px);
    height: 48px;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: right;
    align-items: top;
`;

function ToolBar({ noteColor, setNoteColor, imageButtonHanddler }) {
	return (
		<ToolBarStyle>
			<ButtonImage
				altText="Add image"
				imageRoute={imageSVG}
				handdler={imageButtonHanddler}
				size="40px"
				margin="0px 5px"
			/>
			<ThemeButton noteColor={noteColor} setNoteColor={setNoteColor} />
		</ToolBarStyle>
	);
}

export default ToolBar;
