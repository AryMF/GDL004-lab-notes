import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import ButtonImage from '../../elements/ButtonImage/ButtonImage.component';
import ResizableInput from './elements/ResizableInput.component';
import ToolBarNoteEditor from './elements/ToolBarNoteEditor';

import pinSVG from '../../assets/icons/pin.svg';
import pinnedSVG from '../../assets/icons/pinned.svg';

const DivTitle = styled.div `
	background-color: transparent;
	display: ${props => props.display};
`;

const ContainerStyle = styled.article `
    width: 100%;
    height: fit-content;
    border: none;
    border-radius: 10px;
    margin: '0px';
`;

const InputStyle = styled.input `
    font-size: large;
    height: 46px;
    width: calc(100% - 68px);
    border: none;
    outline: none;
    margin: 5px;
    background-color: transparent;
`;

const ButtonStyle = styled.button `
    height: 36px;
    width: 120px;
    border: 2px solid ${props => props.theme.colors.forestGreen};
    border-radius: 20px;
    margin: 0px 0px 10px 10px;
    font-size: 22px;
    background-color: transparent;

    :hover {
        background-color: ${props => props.theme.colors.forestGreen};
        color: snow;
    }
`;

const RowAlignment = styled.div `
    display: ${props => props.display};
    flex-direction: row;
    justify-content: start;
    align-items: center;
`;

const EditableNote = ({
	showEditor, pinned, pinButtonOnClick, noteColor, setNoteColor, imageButtonHanddler,
	inputTitle, inputTextArea, inputOnInput, textAreaOnClick, textAreaOnInput, onKeyDown, createNoteButton
}) => {
	let [defaultRows, setDefaultRows] = useState('1');

	useEffect( () => {
		setDefaultRows(showEditor ? '4' : '1');
	}, [showEditor])

    return (
        <ContainerStyle>
                <DivTitle display={showEditor ? 'block' : 'none'}>
					<InputStyle
						value={inputTitle}
						type="text"
						maxLength='100'
						placeholder='Title'
						onInput={inputOnInput}
						onKeyDown={onKeyDown}
					/>
					<ButtonImage
						altText='Pin'
						imageRoute={pinned ? pinnedSVG : pinSVG}
						handdler={pinButtonOnClick}
						size='40px'
						margin='5px'
					/>
				</DivTitle>
                <ResizableInput
					defaultRows={defaultRows}
					onClick={textAreaOnClick}
                    onInputHanddler={textAreaOnInput}
					onKeyDown={onKeyDown}
					inputTextArea={inputTextArea}
                />
                <RowAlignment display={showEditor ? 'flex' : 'none'}>
                	<ButtonStyle onClick={createNoteButton}> Create </ButtonStyle>
                	<ToolBarNoteEditor noteColor={noteColor} setNoteColor={setNoteColor} imageButtonHanddler={imageButtonHanddler} />
                </RowAlignment>
        </ContainerStyle>
    );
}

export default EditableNote;
