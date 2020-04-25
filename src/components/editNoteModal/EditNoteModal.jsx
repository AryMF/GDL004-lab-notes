import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { NoteEditor } from '../noteEditor';

const ModalContainer = styled.div `
	position: absolute;
	top: -64px;
	left: 0px;
	height: 100vh;
	width: 100vw;
	z-index: 10;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.4);

	display: ${props => props.display};
	justify-content: center;
	align-items: center;
`;


const EditNoteModal = ({arrayOfNotes, setNumberOfNotes, showModal, setShowModal, indexNoteToEdit}) => {
	const exitModal = () => {
		setShowModal(false);
	}
	const exitModalOnOutsideClick = (e) => {
		if(e.target.getAttribute('data-flag')) {
			setShowModal(false);
		}
	}
	return (
		<ModalContainer display={showModal ? 'flex' : 'none'} onClick={exitModalOnOutsideClick} data-flag={true} >
			<NoteEditor arrayOfNotes={arrayOfNotes} setNumberOfNotes={setNumberOfNotes} isModal={true} indexNoteToEdit={indexNoteToEdit} exitModal={exitModal}/>
		</ModalContainer>
	);
}

export default EditNoteModal;
