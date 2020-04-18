import React from 'react';
import styled from 'styled-components';

import NoteCreation from '../noteCreation/NoteCreation.container';
import { NewNoteEditor } from '../newNoteEditor';
import { NoteWall } from '../noteWall';

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
  background-color: cyan;
  display: flex;
  flex-direction: column;
`;

const NewNoteEditorStyled = styled(NewNoteEditor)`
  background-color: yellow;
`;

const NotesScroller = styled.div`
  padding: 10px;
  overflow: auto;
  flex: 1;
  background-color: red;
`;

const Notes = ({ arrayOfNotes }) => {
  console.log('>>>>>>arrayOfNotes', arrayOfNotes);

  return (
    <NotesContainer>
      <NewNoteEditorStyled />
      <NotesScroller>
        <NoteWall arrayOfNotes={arrayOfNotes} />
      </NotesScroller>
    </NotesContainer>
  );
};

export default Notes;
