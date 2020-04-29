import React from 'react';
import styled from 'styled-components';

const TextAreaStyle = styled.textarea`
    font-size: 18px;
    width: calc(100% - 15px);
    resize: none;
    border: none;
    outline: none;
    margin: 5px;
    background-color: transparent;

	::placeholder{
		color: ${(props) => (props.rows === '1'
		? props.theme.colors.forestGreen
		: props.theme.colors.highlight)};
	}
`;

function ResizableInput({
	defaultRows, inputTextArea, onClick, onInputHanddler, onKeyDown,
}) {
	const rowSize = 22;
	const maxRows = 10;

	const handdlerChange = (e) => {
		e.preventDefault();
		e.target.rows = defaultRows;
		const actualNumberOfRows = e.target.scrollHeight / rowSize;

		const numberOfRowsToSet = actualNumberOfRows > defaultRows
			? actualNumberOfRows + 1
			: defaultRows;

		e.target.rows = numberOfRowsToSet < maxRows
			? numberOfRowsToSet
			: maxRows;

		onInputHanddler(e);
	};

	return (
		<TextAreaStyle
			name="text"
			value={inputTextArea}
			placeholder="Take a note..."
			rows={defaultRows}
			onClick={onClick}
			onChange={handdlerChange}
			onKeyDown={onKeyDown}
		/>
	);
}

export default ResizableInput;
