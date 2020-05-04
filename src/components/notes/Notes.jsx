/* eslint-disable no-alert */
import React, { useState, useEffect, useContext } from 'react'; // { useContext, useEffect, useState }
import styled from 'styled-components';

import { actualizeDocument, createNoteInDB, dataRetrieve, deleteDocument, } from '../../controller/DatabaseApp';
import { AuthContext } from '../../controller/Auth';

// import NewNoteEditor from '../noteCreation/NoteCreation.container';
import { Modal } from '../Modal/Modal';
import { NoteEditor } from '../NoteEditor';
import { NoteWall } from '../NoteWall';

const NotesContainer = styled.div`
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  flex: 5;
`;

const Notes = ({ sectionActive }) => {
	const { currentUser } = useContext(AuthContext);
	const [notesDataArray, setNotesDataArray] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [noteIndex, setNoteIndex] = useState(-1);

	useEffect(() => {
		const fetchData = () => {
			console.log('***** Fetching data *****');
			dataRetrieve(currentUser.uid).then((arrayOfNotes) => {
				setNotesDataArray(arrayOfNotes);
			}).catch((error) => {
				alert(error);
			});
		};
		fetchData();
	}, [currentUser]);

	const createNote = (_info) => {
		const info = { ..._info };
		createNoteInDB(info).then((docRef) => {
			const newDataArray = [...notesDataArray];
			info.id = docRef.id;
			newDataArray.push(info);
			setNotesDataArray(newDataArray);
		}).catch((error) => {
			alert('Error adding document: ', error);
		});
	};

	const updateNoteInfo = (noteId, _newNoteData, _newDataArray) => {
		actualizeDocument(noteId, _newNoteData)
			.then(() => {
				//Document successfully written
				setNotesDataArray(_newDataArray);
			}).catch((error) => {
				alert('Error saving changes. ', error);
			});
	};

	const editNoteInfo = (newNoteInfo, oldNoteInfo) => {
		const info = {
			color: newNoteInfo.color,
			img: newNoteInfo.img,
			label: oldNoteInfo.label,
			pinned: newNoteInfo.pinned,
			archive: oldNoteInfo.archive,
			deleted: oldNoteInfo.deleted,
			text: newNoteInfo.text,
			title: newNoteInfo.title,
			uid: currentUser.uid,
			id: oldNoteInfo.id,
		};
		// Search note index
		const matchId = (element) => {
			return element.id === oldNoteInfo.id;
		};
		const index = notesDataArray.findIndex(matchId);
		const newDataArray = [...notesDataArray];
		newDataArray[index] = info;
		delete info.id;
		updateNoteInfo(oldNoteInfo.id, info, newDataArray);
	};

	const permanentlyDeleteNote = (index) => {
		deleteDocument(notesDataArray[index].id)
			.then(() => {
				const newDataArray = [...notesDataArray];
				newDataArray.splice(index, 1);
				setNotesDataArray(newDataArray);
			}).catch((error) => {
				alert('Error removing document: ', error);
			});
	};

	const openEditNoteModal = (index) => {
		setNoteIndex(index);
		setIsModalOpen(true);
	};
	const closeEditNoteModal = () => {
		setNoteIndex(-1);
		setIsModalOpen(false);
	};

	return (
		<NotesContainer>
			{sectionActive === 0 ? <NoteEditor createNote={createNote} /> : null }
			<NoteWall
				updateNoteInfo={updateNoteInfo}
				permanentlyDeleteNote={permanentlyDeleteNote}
				arrayOfNotes={notesDataArray}
				sectionActive={sectionActive}
				editInModal={openEditNoteModal}
			/>
			{isModalOpen && (
				<Modal
					onClose={closeEditNoteModal}
					style={{ width: 400, textAlign: 'center' }}
				>
					<NoteEditor
						isModal
						exitModal={closeEditNoteModal}
						noteData={notesDataArray[noteIndex]}
						createNote={editNoteInfo}
					/>
				</Modal>
			)}
		</NotesContainer>
	);
};

export default Notes;
