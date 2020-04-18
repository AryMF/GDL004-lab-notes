import React, {useState} from 'react';
import styled from 'styled-components';
import database from '../controller/FirebaseApp';
import {dataRetrive} from '../controller/DatabaseApp';

import {ThemeProvider} from 'styled-components';
import lightTheme from '../theme/light.theme';
import oldTheme from '../theme/old.theme';
import GlobalStyles from '../styles/globalStyles';
import Container from '../elements/Container.component';

import HeaderBar from '../components/navBar/HeaderBar.container';
import SideMenu from '../components/sideMenu/SideMenu.container';
import NoteCreation from '../components/noteCreation/NoteCreation.container';
import NoteArea from '../components/noteCreation/NoteArea.conteiner';

//background-color: lightseagreen;
const DivStyle = styled.div `
    position: absolute;
    top: 64px;
    width: 100vw;
    height: calc(100vh - 64px);
    display: flex;
    flex-direction: row;
`;
//background-color: lightpink;
const Main = styled.main `
    flex: 4;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

function Home(props) {
    let [arrayOfNotes, setNumberOfNotes] = useState(dataRetrive('001'));

    return (
    <ThemeProvider theme={oldTheme}>
        <GlobalStyles />
            <Container>
                <HeaderBar></HeaderBar>
                <DivStyle>
                    <SideMenu/>
                    <label> {arrayOfNotes.length} </label>
                    <NoteCreation arrayOfNotes={arrayOfNotes}/>
                </DivStyle>
            </Container>
    </ThemeProvider>
    );
}

export default Home;