/* eslint-disable react/button-has-type */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ToolBar from './ToolBarDeletedNoteTemplate';
import { Modal } from '../Modal/Modal';

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

const WarningContainer = styled.div`
  background: whitesmoke;
  border-radius: 5px;
  padding: 20px;
`;

function NoteTemplate({
	data, archiveButtonHanddler, deleteButtonHanddler, permanentlyDeleteButtonHanddler,
}) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	// const [deleteNote, setDeleteNote] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const confirmDeleteAction = () => {
		setIsModalOpen(false);
		permanentlyDeleteButtonHanddler();
	};

	return (
		<ContainerStyle colorIndex={data.color} containerBorderColor={data.color !== 0 ? true : false}>
			<DivTitle>
				<TitleLabel>
					{data.title.substring(0, 50)}
				</TitleLabel>
			</DivTitle>
			<TextLabel>
				{data.text.substring(0, 280)}
			</TextLabel>
			<RowAlignment>
				<ToolBar
					archiveButtonHanddler={data.archive ? archiveButtonHanddler : null}
					deleteButtonHanddler={!data.archive ? deleteButtonHanddler : null}
					permanentlyDeleteButtonHanddler={!data.archive ? openModal : null}
				/>
			</RowAlignment>
			{isModalOpen && (
				<Modal
					onClose={() => setIsModalOpen(false)}
					style={{ width: 400, textAlign: 'center' }}
				>
					<WarningContainer>
						<h2> Delete note forever? </h2>
						<button onClick={confirmDeleteAction} style={{ margin: '15px' }}> Confirm </button>
						<button onClick={() => { setIsModalOpen(false); }} style={{ margin: '15px' }}> Cancel </button>
					</WarningContainer>

				</Modal>
			)}
		</ContainerStyle>
	);
}

export default NoteTemplate;
