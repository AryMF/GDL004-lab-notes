import React from 'react';
import styled from 'styled-components';

import ButtonImage from '../ButtonImage/ButtonImage';
import archiveSVG from '../../assets/icons/archive.svg';
import trashSVG from '../../assets/icons/trash.svg';
import undoSVG from '../../assets/icons/undo.svg';

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
	archiveButtonHanddler, deleteButtonHanddler, permanentlyDeleteButtonHanddler,
}) {
	let buttonsToShow;

	if (archiveButtonHanddler) {
		buttonsToShow = (
			<ButtonImage
				altText="Unarchive"
				imageRoute={archiveSVG}
				handdler={archiveButtonHanddler}
				size="40px"
				margin="0px 5px"
			/>
		);
	} else {
		buttonsToShow = (
			<div>
				<ButtonImage
					altText="Restore"
					imageRoute={undoSVG}
					handdler={deleteButtonHanddler}
					size="40px"
					margin="0px 5px"
				/>
				<ButtonImage
					altText="Delete forever"
					imageRoute={trashSVG}
					handdler={permanentlyDeleteButtonHanddler}
					size="40px"
					margin="0px 5px"
				/>
			</div>
		);
	}
	return (
		<ToolBarStyle>
			{buttonsToShow}
		</ToolBarStyle>
	);
}

export default ToolBar;
