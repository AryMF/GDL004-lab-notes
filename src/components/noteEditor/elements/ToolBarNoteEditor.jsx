import React, {useState} from 'react';
import styled from 'styled-components';

import ButtonImage from '../../../elements/ButtonImage/ButtonImage.component';
import ThemeButton from '../../themeButton/ThemeButton';


import imageSVG from '../../../assets/icons/image.svg';

const ToolBarStyle = styled.div `
    background-color: transparent;
    width: calc( 100% - 1px);
    height: 48px;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: right;
    align-items: top;
`;

const Dropdown = styled.div `
	position: relative;
	top: 2px;
	right: 0px;
	width: 200px;
	height: fit-content;
	background-color: pink;
	z-index: 10;
	display: ${props => props.display};
`;
const DivTemp = styled.div `
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	height: fit-content;
	width: 40px;
	background-color: transparent;
`;

const ToolBar = ({noteColor, setNoteColor, imageButtonHanddler}) => {
  return (
      <ToolBarStyle>
          <ButtonImage
              altText='Add image'
              imageRoute={imageSVG}
              handdler={imageButtonHanddler}
              size='40px'
              margin='0px 5px'
          />
          <ThemeButton noteColor={noteColor} setNoteColor={setNoteColor} />
      </ToolBarStyle>
  );
}

export default ToolBar;
