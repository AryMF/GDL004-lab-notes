import React, {useState, useEffect, useContext} from 'react';
import styled, { ThemeContext } from 'styled-components';

import {createNoteInDB} from '../../controller/DatabaseApp';
import { AuthContext } from '../../controller/Auth';

import EditableNote from './EditableNote';

const CreateNoteStyle = styled.div `
    max-width: 816px;
    height: fit-content;
    min-height: 48px;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.colors.highlight};
	background-color: ${props => props.backgroundColor};
    display: flex;
    flex: 2;
    flex-direction: row !important;
`;

const ContainerStyle = styled.div `
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
    background-color: transparent;
`;

const NewNoteEditor = ({}) => {
	let [showEditor, setShowEditor] = useState(false);
	const themeContext = useContext(ThemeContext);
	const {currentUser} = useContext(AuthContext);
	let [backgroundColor, setBackgroundColor] = useState(themeContext.colors.noteTheme[0]);
    let [inputTitle, setInputTitle] = useState('');
	let [inputTextArea, setInputTextArea] = useState('');
	let [pin, setPin] = useState(false);
	let [noteColor, setNoteColor] = useState(0);
	let [imageURL, setImageURL] = useState(null);

    const imageButtonHanddler = (e) => {
        setImageURL(imageURL ? null : 'imagen.jpg');
    };

    const textAreaClickHanddler = (e) => {
        e.preventDefault();
        setShowEditor(true);
    };

	const onKeyPressHanddler = (e) => {
        if(e.key === 'Escape') {
			e.target.blur();
			setShowEditor(false);
        }
    };

    const titleOnChange = (e) => {
        setInputTitle(e.target.value);
    };

    const textAreaOnChange = (e) => {
        setInputTextArea(e.target.value);
	};

	useEffect(() => {
        setInputTitle('');
		setInputTextArea('');
		setNoteColor(0);
		setImageURL(null);
	}, [showEditor]);

	useEffect(() => {
		setBackgroundColor(themeContext.colors.noteTheme[noteColor]);
	}, [noteColor]);

	const createNoteHanddler = (e) => {
        if(inputTitle != '' || inputTextArea != '' || imageURL != null) {
			let info = {
				color: noteColor,
				img: imageURL,
				label: null,
				pinned: pin,
				text: inputTextArea,
				title: inputTitle,
				uid: currentUser.uid,
			}
			createNoteInDB(info).then(function(docRef) {
				setShowEditor(false);
            })
            .catch(function(error) {
				alert("Error adding document: ", error);
            });
		}
    };

    return (
		<ContainerStyle>
			<CreateNoteStyle backgroundColor={backgroundColor}>
				<EditableNote
					inputTitle={inputTitle}
					inputTextArea={inputTextArea}
					showEditor={showEditor}
					pinned={pin}
					pinButtonOnClick={() => setPin(!pin)}
					noteColor={noteColor}
					setNoteColor={setNoteColor}
					imageButtonHanddler={imageButtonHanddler}
					inputOnInput={titleOnChange}
					textAreaOnInput={textAreaOnChange}
					textAreaOnClick={textAreaClickHanddler}
					onKeyDown={onKeyPressHanddler}
					createNoteButton = {createNoteHanddler}
				/>
			</CreateNoteStyle>
		</ContainerStyle>
    );
}

export default NewNoteEditor;

//<NoteArea arrayOfNotes={arrayOfNotes} />
