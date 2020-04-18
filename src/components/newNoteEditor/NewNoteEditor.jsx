import React, { useState } from 'react';
import styled from 'styled-components';

import { NoteEditor } from '../noteEditor';

const NewNoteEditorContainer = styled.div`
  background-color: green;
`;

const NewNoteEditor = ({ className }) => {
  const [textNoteValue, setTextNoteValue] = useState('');

  const onChange = (ev) => {
    console.log('>>>onChange>', ev.currentTarget.value);
    setTextNoteValue(ev.currentTarget.value);
  };

  return (
    <NewNoteEditorContainer className={className}>
      <NoteEditor value={textNoteValue} onChange={onChange} />
    </NewNoteEditorContainer>
  );
};

export default NewNoteEditor;
