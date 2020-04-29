import React, { useState } from 'react';
import styled from 'styled-components';

import NoteTemplate from './NoteTemplate';
import DeletedNoteTemplate from './DeletedNoteTemplate';

const SectionLabel = styled.label`
	text-align: left;
`;

const PinnedNoteWallContainer = styled.div`
	height: fit-content;
	background-color: transparent;
	padding: 15px;
	margin-bottom: 30px;
	display: ${(props) => props.display};
	grid-gap: 20px;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

const NoteWallContainer = styled.div`
	height: fit-content;
	background-color: transparent;
	padding: 15px;
	display: grid;
	grid-gap: 20px;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

const NotesScroller = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
	padding: 10px;
	overflow: auto;
	flex: 1;
	background-color: transparent;
`;

function NoteWall({
	updateNoteInfo, arrayOfNotes, sectionActive, permanentlyDeleteNote,
	editInModal,
}) {
	const normalNotes = [];
	const pinnedNotes = [];
	const archiveNotes = [];
	const trashNotes = [];


	const changeConfiguration = (index, props) => {
		const {
			pinned, archive, deleted, color,
		} = props;
		const newDataArray = [...arrayOfNotes];
		const newNoteDate = { ...newDataArray[index] };
		const noteId = newNoteDate.id;
		delete newNoteDate.id;

		if (pinned === true || pinned === false) {
			newNoteDate.pinned = pinned;
			newDataArray[index].pinned = pinned;
		}

		if (archive === true || archive === false) {
			newNoteDate.archive = archive;
			newDataArray[index].archive = archive;
		}

		if (deleted === true || deleted === false) {
			newNoteDate.deleted = deleted;
			newDataArray[index].deleted = deleted;
		}

		if (color >= 0) {
			newNoteDate.color = color;
			newDataArray[index].color = color;
		}

		updateNoteInfo(noteId, newNoteDate, newDataArray);
	};

	arrayOfNotes.forEach((element, index) => {
		const template = (
			<NoteTemplate
				key={element.id}
				data={element}
				pinButtonHanddler={() => { changeConfiguration(index, { pinned: !element.pinned }); }}
				archiveButtonHanddler={() => { changeConfiguration(index, { archive: !element.archive }); }}
				deleteButtonHanddler={() => { changeConfiguration(index, { deleted: !element.deleted }); }}
				colorButtonHanddler={changeConfiguration}
				noteIndex={index}
				editButtonHanddler={() => { editInModal(index); }}
			/>
		);

		const deletedNoteTemplate = (
			<DeletedNoteTemplate
				key={element.id}
				data={element}
				archiveButtonHanddler={() => { changeConfiguration(index, { archive: !element.archive }); }}
				deleteButtonHanddler={() => { changeConfiguration(index, { deleted: !element.deleted }); }}
				permanentlyDeleteButtonHanddler={() => { permanentlyDeleteNote(index); }}
				noteIndex={index}
			/>
		);

		if (element.deleted === true) {
			trashNotes.push(deletedNoteTemplate);
		} else if (element.archive === true) {
			archiveNotes.push(deletedNoteTemplate);
		} else {
			if (element.pinned === true) {
				pinnedNotes.push(template);
			}

			if (element.pinned === false) {
				normalNotes.push(template);
			}
		}
	});

	return (
		<NotesScroller>
			{sectionActive === 0
				? (
					<div>
						<SectionLabel>
							{pinnedNotes.length > 0 ? 'Pinned' : ''}
						</SectionLabel>
						<PinnedNoteWallContainer display={pinnedNotes.length > 0 ? 'grid' : 'none'}>
							{pinnedNotes}
						</PinnedNoteWallContainer>
						<SectionLabel>
							{pinnedNotes.length > 0 ? 'Others' : ''}
						</SectionLabel>
					</div>
				)
				: null}
			<NoteWallContainer>
				{sectionActive === 0 ? normalNotes : null}
				{sectionActive === 1 ? archiveNotes : null}
				{sectionActive === 2 ? trashNotes : null}
			</NoteWallContainer>
		</NotesScroller>
	);
}

export default NoteWall;
