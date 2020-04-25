import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { dataRetrieve } from '../../controller/DatabaseApp';
import { AuthContext } from '../../controller/Auth';


//import NewNoteEditor from '../noteCreation/NoteCreation.container';
import { NoteEditor } from '../noteEditor';
import { NoteWall } from '../noteWall';
import {EditNoteModal} from '../editNoteModal';

/*
# Notes
@lastEdited by @escusado

This React Functional Component calls for the
  - NewNoteEditor
  - NoteWall

# Problem Spec
  - Note Creation (Using Generic Note Editor)
    - Expand inline with controls
      - Color change
      - Priority control
  - Note display (Wall)
    - Note prioritization (Top)
    - Note color change
  - Note Edit
    - Modal (Using Generic Note Editor)
  - Note Remove

# Implementation Notes
 - Note Editor component should be usable
   at new note creation and at note edition

## Future Improvements
  - Note Editing can be Inline in the future
  - Allow image note support

*/

const NotesContainer = styled.div`
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  flex: 5;
`;

const Notes = () => {
	const [firstRender, setFirstRender] = useState(true);
	const {currentUser} = useContext(AuthContext);
	const [arrayOfNotes, setNumberOfNotes] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [indexNoteToEdit, setIndexNoteToEdit]  = useState(-1);

	useEffect(() => {
		const example = [];
		dataRetrieve(currentUser.uid).then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				let note = doc.data();
				note.id = doc.id;
				example.push(note);
			});
			setNumberOfNotes(example);
		  })
		  .catch(function(error) {
			alert('[Notes.jx] Error getting documents:', error);
		  });
	}, [useState]);

	const openNoteEditor = (index) => {
		setShowModal(true);
		setIndexNoteToEdit(index);
	}


	return (
	<NotesContainer>
		<NoteEditor arrayOfNotes={arrayOfNotes} setNumberOfNotes={setNumberOfNotes}/>
		<NoteWall arrayOfNotes={arrayOfNotes} setNumberOfNotes={setNumberOfNotes} openNoteEditor={openNoteEditor}/>
		<EditNoteModal arrayOfNotes={arrayOfNotes} setNumberOfNotes={setNumberOfNotes} showModal={showModal} setShowModal={setShowModal} indexNoteToEdit={indexNoteToEdit} />
	</NotesContainer>
	);
};

export default Notes;
