import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ButtonImage from '../../elements/ButtonImage/ButtonImage.component';
import NoteTemplate from './NoteTemplate.container';
import NoteArea from './NoteArea.conteiner';

const InputStyle = styled.input `
    width: 100%;
    min-width: 200px; 
    height: 46px;
    margin: 0px 5px;
    border: none;
    outline: none;
    background-color: transparent;

    ::placeholder {
        color: ${props => props.theme.colors.forestGreen};
    }
`;

const CreateNoteStyle = styled.form `
    max-width: 816px;
    height: fit-content;
    min-height: 48px;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.colors.highlight};
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

const Main = styled.main `
    flex: 4;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

function NoteCreation({arrayOfNotes}) {
    let [mode, setMode] = useState(true);
    let [inputTitle, setInputTitle] = useState('');
    let [inputTextArea, setInputTextArea] = useState('');

    useEffect(() => {
        setInputTitle('');
        setInputTextArea('');
    }, [mode]);

    const addImageHanddler = (e) => {
        e.preventDefault();
        alert('Load image.');
    };

    const inputClickHanddler = (e) => {
        e.preventDefault();
        setMode(false);
        console.log(mode);
    };

    const inputKeyPressHanddler = (e) => {
        console.log(`Key: ${e.key}`);
        if(e.key === 'Escape') {
            setMode(true);
        }
    };

    const createNoteHanddler = (e) => {
        e.preventDefault();
        alert(`inputTitle: ${inputTitle}\n inputTextArea: ${inputTextArea}`);
        setMode(true);
    };

    const titleOnChange = (e) => {
        e.preventDefault();
        setInputTitle(e.target.value);
    };

    const textAreaOnChange = (e) => {
        setInputTextArea(e.target.value);
    };

    return (
        <Main>
            <ContainerStyle>            
                {
                    mode ?
                        <CreateNoteStyle>
                            <InputStyle placeholder='Take a note...'
                            onClick={inputClickHanddler}
                            />
                            <ButtonImage
                                altText='Image'
                                imageRoute={require('../../assets/icons/image.svg')}
                                handdler={addImageHanddler}
                                size='42px'
                                margin='4px'
                            />
                        </CreateNoteStyle>
                    :
                        <CreateNoteStyle>
                            <NoteTemplate
                                containerBorderColor={false}
                                containerMargin='0px'
                                inputMaxLength='100'
                                inputPlaceholder='Title'
                                inputOnInput={titleOnChange}
                                textAreaDefaultRows='4'
                                textAreaPlaceholder='Empty note'
                                textAreaOnInput={textAreaOnChange}
                                textAreaOnKeyDown={inputKeyPressHanddler}
                                createNoteButton = {createNoteHanddler}
                            />
                        </CreateNoteStyle>
                }
            </ContainerStyle>
            <NoteArea arrayOfNotes={arrayOfNotes} />
        </Main>
    );
}

export default NoteCreation;