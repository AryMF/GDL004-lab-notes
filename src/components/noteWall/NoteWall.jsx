import React, {useState} from 'react';
import styled from 'styled-components';

import { actualizeDocument } from '../../controller/DatabaseApp';

import NoteTemplate from './elements/NoteTemplate';


const SectionLabel = styled.label `
	text-align: left;
`;
const PinnedNoteWallContainer = styled.div`
	height: fit-content;
	background-color: transparent;
	padding: 15px;
	margin-bottom: 30px;
	display: ${props => props.display};
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

const NoteWall = ({arrayOfNotes, setNumberOfNotes, openNoteEditor}) => {
	let normalNotes = [];
	let pinnedNotes = [];

	const changeConfiguration = (index, props) => {
		const {pinned, archive, deleted, color} = props;
		let tempDataArray = [...arrayOfNotes];
		const newData = Object.assign({}, tempDataArray[index]);
		delete newData.id;

		console.log(pinned, archive, deleted, color);

		if(pinned === true || pinned === false) {
			newData.pinned = pinned;
			tempDataArray[index].pinned = pinned;
		}

		if(archive === true || archive === false) {
			newData.archive = archive;
			tempDataArray[index].archive = archive;
		}

		if(deleted === true || deleted === false) {
			newData.deleted = deleted;
			tempDataArray[index].deleted = deleted;
		}

		if(color >= 0) {
			newData.color = color;
			tempDataArray[index].color = color;
		}
		console.log(newData);
		actualizeDocument(tempDataArray[index].id, newData)
			.then(() => {
				//Document successfully written
				setNumberOfNotes(tempDataArray);
			}).catch((error) => {
				alert('Error saving changes. ', error);
			});
	}

	arrayOfNotes.forEach( (element, index) => {
		let template = <NoteTemplate
			key={element.id}
			data={element}
			pinButtonHanddler={() => {changeConfiguration(index, {pinned: !element.pinned})}}
			archiveButtonHanddler={() => {changeConfiguration(index, {archive: !element.archive})}}
			deleteButtonHanddler={() => {changeConfiguration(index, {deleted: !element.deleted})}}
			colorButtonHanddler={changeConfiguration}
			noteIndex={index}
			editButtonHanddler={() => {openNoteEditor(index)}}
		/>;
		if(element.pinned === true){
			pinnedNotes.push(template);
		} else {
			normalNotes.push(template);
		}
	});


	return (
		<NotesScroller>
			<SectionLabel>{pinnedNotes.length > 0 ? 'Pinned' : ''}</SectionLabel>
			<PinnedNoteWallContainer display={pinnedNotes.length > 0 ? 'grid' : 'none'}>
				{pinnedNotes}
			</PinnedNoteWallContainer>
			<SectionLabel>{pinnedNotes.length > 0 ? 'Others' : ''}</SectionLabel>
			<NoteWallContainer>
				{normalNotes}
			</NoteWallContainer>
		</NotesScroller>
	);
};

export default NoteWall;
