import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { dataRetrive } from '../controller/DatabaseApp';
import SideMenu from '../components/sideMenu/SideMenu.container';
import lightTheme from '../theme/light.theme';
import oldTheme from '../theme/old.theme';
import GlobalStyles from '../styles/globalStyles';
import Container from '../elements/Container.component';

import HeaderBar from '../components/navBar/HeaderBar.container';

import NoteArea from '../components/noteCreation/NoteArea.conteiner';
import { Notes } from '../components/notes';

const MainStage = styled.div`
  position: absolute;
  top: 64px;
  width: 100vw;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: row;
`;

function Home(props) {
  const [arrayOfNotes, setNumberOfNotes] = useState(dataRetrive('001'));

  return (
    <ThemeProvider theme={oldTheme}>
      <GlobalStyles />
      <Container>
        <HeaderBar />
        <MainStage>
          <SideMenu />
          <Notes arrayOfNotes={arrayOfNotes} />
        </MainStage>
      </Container>
    </ThemeProvider>
  );
}

export default Home;
