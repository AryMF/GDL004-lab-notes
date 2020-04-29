import React, { useState, useEffect } from 'react';

import {
	DivTitle, ContainerStyle, InputStyle, ButtonStyle, RowAlignment,
} from './EditableNoteComponents';
import ButtonImage from '../ButtonImage/ButtonImage';
import ResizableInput from './ResizableInput';
import ToolBarNoteEditor from './ToolBarNoteEditor';

import pinSVG from '../../assets/icons/pin.svg';
import pinnedSVG from '../../assets/icons/pinned.svg';

function EditableNote({
	noteInfo, showEditor, inputOnChangeHanddler, pinButtonOnClick, setNoteColor,
	imageButtonHanddler, textAreaOnClick, onKeyDown, createNoteButton,
}) {
	const [defaultRows, setDefaultRows] = useState('1');

	useEffect(() => {
		setDefaultRows(showEditor ? '4' : '1');
	}, [showEditor]);

	return (
		<ContainerStyle>
			<DivTitle display={showEditor ? 'block' : 'none'}>
				<InputStyle
					name="title"
					value={noteInfo.title}
					type="text"
					maxLength="100"
					placeholder="Title"
					onChange={inputOnChangeHanddler}
					onKeyDown={onKeyDown}
				/>
				<ButtonImage
					altText="Pin"
					imageRoute={noteInfo.pinned ? pinnedSVG : pinSVG}
					handdler={pinButtonOnClick}
					size="40px"
					margin="5px"
				/>
			</DivTitle>
			<ResizableInput
				inputTextArea={noteInfo.text}
				defaultRows={defaultRows}
				onClick={textAreaOnClick}
				onInputHanddler={inputOnChangeHanddler}
				onKeyDown={onKeyDown}
			/>
			<RowAlignment display={showEditor ? 'flex' : 'none'}>
				<ButtonStyle onClick={createNoteButton}> Create </ButtonStyle>
				<ToolBarNoteEditor
					noteColor={noteInfo.color}
					setNoteColor={setNoteColor}
					imageButtonHanddler={imageButtonHanddler}
				/>
			</RowAlignment>
		</ContainerStyle>
	);
}

export default EditableNote;
