import React from 'react';
import styled from 'styled-components';

import ButtonImage from '../../elements/ButtonImage/ButtonImage.component';
import TextAreaStyle from './elements/ResizableInput.component';
import ToolBar from './elements/ToolBar.component';

const ContainerStyle = styled.article `
    width: 100%;
    height: fit-content;
    border: 2px solid ${props => props.containerBorderColor ? 'transparent' : props.theme.colors.highlight};
    border-radius: 10px;
    margin: ${props => props.containerMargin};
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
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
`;

function NoteTemplate({
    containerBorderColor,
    containerMargin,
    inputMaxLength,
    inputPlaceholder,
    inputOnInput,
    textAreaDefaultRows,
    textAreaPlaceholder,
    textAreaOnInput,
    textAreaOnKeyDown,
    createNoteButton,
}) {
    let createNote;
    if(createNoteButton){
        createNote = <ButtonStyle onClick={createNoteButton}> Create </ButtonStyle>;
    }

    return (
        <ContainerStyle containerBorderColor={containerBorderColor} containerMargin={containerMargin}>
            <div>
                <InputStyle 
                    type="text"
                    maxLength={inputMaxLength}
                    placeholder={inputPlaceholder}
                    onInput={inputOnInput}
                />
                <ButtonImage 
                    altText='Pin'
                    imageRoute={require('../../assets/icons/pin.svg')}
                    handdler={() => { alert('Pin note.') }}
                    size='40px'
                    margin='5px'
                />
                <TextAreaStyle 
                    placeholder={textAreaPlaceholder}
                    rows={textAreaDefaultRows}
                    onInputHanddler={textAreaOnInput}
                    onKeyDown={textAreaOnKeyDown}
                />
                <RowAlignment>
                    {createNote}
                    <ToolBar/>
                </RowAlignment>
            </div>
        </ContainerStyle>
    );
}

export default NoteTemplate;