import React from 'react';
import styled from 'styled-components';

const NoteWallContainer = styled.div`
  height: 999999px;
  background-color: pink;
`;

const NoteWall = ({ arrayOfNotes }) => {
  console.log('>>>NoteWall', arrayOfNotes);
  return (
    <NoteWallContainer contentEditable={true}>
      NoteWall Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Expedita, consectetur reiciendis! Eligendi totam ab eveniet recusandae
      libero commodi dicta, animi in veniam sunt mollitia est repudiandae minima
      distinctio vitae porro. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Quis, ad. Ratione porro doloribus dolorem, autem non sed tempore
      ducimus assumenda suscipit quia! Dicta laboriosam ea vel reprehenderit
      rerum numquam saepe. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Quod, cumque. Molestias corporis ducimus doloremque est ipsam ab
      possimus blanditiis natus, labore qui, odio magni deleniti nesciunt
      eligendi reprehenderit iusto excepturi? Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Placeat necessitatibus quis ex sit qui
      tempore, dolore repellendus in, quas debitis repudiandae numquam aut neque
      cum suscipit consequatur accusamus alias. Corrupti!
    </NoteWallContainer>
  );
};

export default NoteWall;
