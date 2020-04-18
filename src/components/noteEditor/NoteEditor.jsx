import React, { useState } from 'react';
import styled from 'styled-components';

const NoteEditorContainer = styled.div``;

const InputArea = styled.textarea`
  resize: none;
`;

const NoteEditor = ({ textNoteValue, onChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onFocus = (ev) => {
    console.log('onFocus:', ev);
    setIsExpanded(true);
  };
  const onBlur = (ev) => {
    console.log('onBlur:', ev);
    setIsExpanded(false);
  };

  return (
    <NoteEditorContainer>
      <InputArea
        value={textNoteValue}
        rows={isExpanded ? 10 : 1}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </NoteEditorContainer>
  );
};

{
}

export default NoteEditor;
