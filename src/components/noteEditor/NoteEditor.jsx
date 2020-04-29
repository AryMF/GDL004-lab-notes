import React, { useState, useEffect, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { AuthContext } from '../../controller/Auth';

import EditableNote from './EditableNote';

const CreateNoteStyle = styled.div`
    max-width: 816px;
    height: fit-content;
    min-height: 48px;
    border-radius: 10px;
	border: 2px solid ${(props) => props.theme.colors.highlight};
	box-shadow: 1px 1px 3px 0px rgba(150,150,150,1);
	background-color: ${(props) => props.backgroundColor};
    display: flex;
    flex: 2;
    flex-direction: row !important;
`;

const ContainerStyle = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
    background-color: transparent;
`;

function NewNoteEditor({
	createNote, exitModal, isModal, noteData,
}) {
	const [showEditor, setShowEditor] = useState(isModal); //  ? true : false
	const themeContext = useContext(ThemeContext);
	const [backgroundColor, setBackgroundColor] = useState(themeContext.colors.noteTheme[0]);
	const { currentUser } = useContext(AuthContext);
	const {
		title = '',
		text = '',
		pinned = false,
		color = 0,
		image = null,
	} = noteData || {};
	const [noteInfo, setNoteInfo] = useState({
		title,
		text,
		pinned,
		color,
		image,
	});

	const imageButtonHanddler = () => {
		const newInfo = { ...noteInfo };
		newInfo.image = newInfo.image ? null : 'imagen.jpg';
		setNoteInfo(newInfo);
	};

	const textAreaClickHanddler = (ev) => {
		ev.preventDefault();
		setShowEditor(true);
	};

	const onKeyPressHanddler = (ev) => {
		if (ev.key === 'Escape') {
			ev.target.blur();
			setShowEditor(false);
			if (isModal) {
				exitModal();
			}
		}
	};

	const inputOnChangeHanddler = (ev) => {
		ev.preventDefault();
		const newInfo = { ...noteInfo };
		newInfo[ev.target.name] = ev.target.value;
		setNoteInfo(newInfo);
	};

	const setPin = () => {
		const newInfo = { ...noteInfo };
		newInfo.pinned = !noteInfo.pinned;
		setNoteInfo(newInfo);
	};

	const setNoteColor = (colorIndex) => {
		const newInfo = { ...noteInfo };
		newInfo.color = colorIndex;
		setNoteInfo(newInfo);
	};

	useEffect(() => {
		setNoteInfo({
			title,
			text,
			pinned,
			color,
			image,
		});
	}, [showEditor]);

	useEffect(() => {
		setBackgroundColor(themeContext.colors.noteTheme[noteInfo.color]);
	}, [noteInfo, themeContext.colors.noteTheme]);

	const createNoteHanddler = () => {
		if (noteInfo.inputTitle !== '' || noteInfo.inputTextArea !== '' || noteInfo.imageURL !== null) {
			const info = {
				color: noteInfo.color,
				img: noteInfo.image,
				label: null,
				pinned: noteInfo.pinned,
				archive: false,
				deleted: false,
				text: noteInfo.text,
				title: noteInfo.title,
				uid: currentUser.uid,
			};
			createNote(info, noteData);
			setShowEditor(false);
			if (isModal) {
				exitModal();
			}
		}
	};

	return (
		<ContainerStyle>
			<CreateNoteStyle backgroundColor={backgroundColor}>
				<EditableNote
					noteInfo={noteInfo}
					showEditor={showEditor}
					inputOnChangeHanddler={inputOnChangeHanddler}
					pinButtonOnClick={setPin}
					setNoteColor={setNoteColor}
					imageButtonHanddler={imageButtonHanddler}
					textAreaOnClick={textAreaClickHanddler}
					onKeyDown={onKeyPressHanddler}
					createNoteButton={createNoteHanddler}
				/>
			</CreateNoteStyle>
		</ContainerStyle>
	);
}

export default NewNoteEditor;
