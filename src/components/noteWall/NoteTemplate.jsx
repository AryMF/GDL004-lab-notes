import React from 'react';
import styled from 'styled-components';

import ButtonImage from '../ButtonImage/ButtonImage';
import ToolBar from './ToolBarNoteTemplate';

import pinSVG from '../../assets/icons/pin.svg';
import pinnedSVG from '../../assets/icons/pinned.svg';

const ContainerStyle = styled.article`
    width: 100%;
    height: fit-content;
    border: 2px solid ${(props) => (props.containerBorderColor ? 'transparent' : props.theme.colors.highlight)};
    border-radius: 10px;
	background-color: ${(props) => props.theme.colors.noteTheme[props.colorIndex]};
`;

const TitleLabel = styled.label`
    font-size: medium;
	font-weight: bold;
	text-align: left;
    height: 46px;
    flex: 1;
    margin: 5px;
    background-color: transparent;
`;

const DivTitle = styled.div`
	background-color: transparent;
	display: flex;
`;

const TextLabel = styled.label`
	font-size: medium;
    height: fit-content;
    margin: 5px;
    background-color: transparent;
`;

const RowAlignment = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
	margin: 10px 0px 0px;
`;

function NoteTemplate({
	data, pinButtonHanddler, archiveButtonHanddler, colorButtonHanddler,
	noteIndex, deleteButtonHanddler, editButtonHanddler,
}) {
	return (
		<ContainerStyle colorIndex={data.color} containerBorderColor={data.color !== 0 ? true : false}>
			<DivTitle>
				<TitleLabel>
					{data.title.substring(0, 50)}
				</TitleLabel>
				<ButtonImage
					altText="Pin"
					imageRoute={data.pinned ? pinnedSVG : pinSVG}
					handdler={pinButtonHanddler}
					size="40px"
					margin="5px"
				/>
			</DivTitle>
			<TextLabel>
				{data.text.substring(0, 280)}
			</TextLabel>
			<RowAlignment>
				<ToolBar
					archiveButtonHanddler={archiveButtonHanddler}
					deleteButtonHanddler={deleteButtonHanddler}
					colorButtonHanddler={colorButtonHanddler}
					noteColor={data.color}
					noteIndex={noteIndex}
					editButtonHanddler={editButtonHanddler}
				/>
			</RowAlignment>
		</ContainerStyle>
	);
}

export default NoteTemplate;
