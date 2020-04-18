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

const Notes = ({ arrayOfNotes }) => {
  console.log('>>>>>>arrayOfNotes', arrayOfNotes);

  return (
    <>
      <NewNoteEditor />
      <NoteWall arrayOfNotes={arrayOfNotes} />
    </>
  );
};

export default Notes;
