import React, { useState } from 'react';
import styled from 'styled-components';

import { NoteEditor } from '../noteEditor';

const NewNoteEditorContainer = styled.div`
  background-color: transparent;
`;

const NewNoteEditor = ({ className }) => {
  const [textNoteValue, setTextNoteValue] = useState('');
  const [mode, setMode] = useState(false);

  const onChange = (ev) => {
    console.log('>>>onChange>', ev.currentTarget.value);
    setTextNoteValue(ev.currentTarget.value);
  };

  const onFocus = () => {
    setMode(true);
  }
  const onBlur = () => {
    setMode(false);
  }

  return (
    <NewNoteEditorContainer
      className={className}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <NoteEditor value={textNoteValue} onChange={onChange} mode={mode}/>
    </NewNoteEditorContainer>
  );
};

export default NewNoteEditor;
