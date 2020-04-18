import React from 'react';
import styled from 'styled-components';

const TextAreaStyle = styled.textarea `
    font-size: 18px;
    width: calc(100% - 15px);
    resize: none;
    border: none;
    outline: none;
    margin: 5px;
    background-color: transparent;
`;

function ResizableInput ({onInputHanddler, onKeyDown}) {
    const rowSize = 22;
    const defaultRows = 4;
    const maxRows = 10;

    const handdlerChange = (e) => {
        e.preventDefault();
        e.target.rows = defaultRows;
        let actualNumberOfRows = e.target.scrollHeight / rowSize;

        //onKeyDown(e);
        console.log(`actualNumberOfRows ${actualNumberOfRows}`);
        let numberOfRowsToSet = actualNumberOfRows > defaultRows ? actualNumberOfRows + 1 : defaultRows;
        e.target.rows = numberOfRowsToSet < maxRows 
            ? numberOfRowsToSet
            : maxRows
        ;
        onInputHanddler(e);
    }

    return (
        <TextAreaStyle placeholder='Empty note' rows={defaultRows} onInput={handdlerChange} onKeyDown={onKeyDown} />
    );
}
//onKeyDown={handdlerChange}
export default ResizableInput ;