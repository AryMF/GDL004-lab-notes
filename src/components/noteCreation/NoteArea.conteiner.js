import React, {useState} from 'react';
import styled from 'styled-components';

import NoteTemplate from './NoteTemplate.container';

const ContainerStyle = styled.div `
    width: calc(100% - 60px);
    height: fit-content;
    background-color: transparent;
    padding: 15px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))
`;

const ButtonStyle = styled.button `
    width: 120px;
    height: 48px;
    border: 1px solid green;
    border-radius: 24px;
    background-color: transparent;
`;

const TempDiv = styled.div `
    width: calc(100% - 60px);
    height: fit-content;
    border: 2px solid gray;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function NoteArea({arrayOfNotes}){
    let [numberOfChilds, setNumberOfChilds] = useState(arrayOfNotes);

    let notes = [];
    for(let i=0; i < numberOfChilds.length; i++) {
        notes.push(<NoteTemplate/>);
    }

    const handdlerClick = (e) => {
        e.preventDefault();
        setNumberOfChilds(numberOfChilds += 1 );
    }
    return (
        <ContainerStyle>
            {notes}
        </ContainerStyle>
    );
}

export default NoteArea;

/*
<TempDiv >
    <ButtonStyle onClick={handdlerClick} > Create note </ButtonStyle>
    <ContainerStyle>
        {notes}
    </ContainerStyle>
</TempDiv>
*/

/*
<TempDiv >
    Hello World!            
</TempDiv>
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
*/