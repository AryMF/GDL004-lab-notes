import React from 'react';
import styled from 'styled-components';

import ButtonImage from '../ButtonImage/ButtonImage';
import ThemeButton from '../ThemeButton/ThemeButton';

import trashSVG from '../../assets/icons/trash.svg';
import archiveSVG from '../../assets/icons/archive.svg';
// import imageSVG from '../../assets/icons/image.svg';
import editSVG from '../../assets/icons/edit.svg';

const ToolBarStyle = styled.div`
    background-color: transparent;
    width: calc( 100% - 1px);
    height: 48px;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: right;
    align-items: center;
`;

function ToolBar({
	archiveButtonHanddler, deleteButtonHanddler, noteColor, colorButtonHanddler,
	noteIndex, editButtonHanddler,
}) {
	return (
		<ToolBarStyle>
			<ButtonImage
				altText="Options"
				imageRoute={trashSVG}
				handdler={deleteButtonHanddler}
				size="40px"
				margin="0px 5px"
			/>
			<ButtonImage
				altText="Archive"
				imageRoute={archiveSVG}
				handdler={archiveButtonHanddler}
				size="40px"
				margin="0px 5px"
			/>
			{/*
			<ButtonImage
				altText="Add image"
				imageRoute={imageSVG}
				handdler={() => {alert('Hacer algo.')}}
				size="40px"
				margin="0px 5px"
			/>
			*/}
			<ButtonImage
				altText="Edit"
				imageRoute={editSVG}
				handdler={editButtonHanddler}
				size="40px"
				margin="0px 5px"
			/>
			<ThemeButton noteColor={noteColor} setNoteColor={colorButtonHanddler} noteIndex={noteIndex}/>
		</ToolBarStyle>
	);
}

export default ToolBar;
