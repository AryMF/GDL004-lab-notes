import React from 'react';
import database from '../controller/FirebaseApp';

import {ThemeProvider} from 'styled-components';
import lightTheme from '../theme/light.theme.js';
import GlobalStyles from '../styles/globalStyles.js';
import Container from '../elements/Container.component.js';
import Form from '../components/loginForm/Form.component.js';
import Title from '../components/loginForm/Title.component.js';
import Button from '../components/loginForm/Button.component.js';
import DivisorLine from '../components/loginForm/DivisorLine.component.js';

function TempLogout(props) {
    return (
    <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
            <Container>
                <Form>
                    <h4> bienvenido a </h4>
                    <Title> memento </Title>                    
                    <DivisorLine> or </DivisorLine>                    
                    <Button onClick = {() => database.auth().signOut()}> log out </Button>
                </Form>
            </Container>
    </ThemeProvider>
    );
}

export default TempLogout;