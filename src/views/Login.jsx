import React, {useCallback} from 'react';
import { withRouter } from 'react-router';
import { Link  } from 'react-router-dom';
import database from '../controller/FirebaseApp';
import {signInWithEmail} from '../controller/Auth';

import {ThemeProvider} from 'styled-components';
import oldTheme from '../theme/old.theme';
import GlobalStyles from '../styles/globalStyles';
import Container from '../elements/Container.component';
import Form from '../components/loginForm/Form.component';
import Title from '../components/loginForm/Title.component';
import Input from '../components/loginForm/Input.component';
import Button from '../components/loginForm/Button.component';
import DivisorLine from '../components/loginForm/DivisorLine.component';
import SocialButton from '../components/loginForm/SocialButton.component';
import {Google, Github, Twitter} from '@styled-icons/fa-brands'

function Login({history}) {
    const handdleSubmit = useCallback(async ( event ) => {
        event.preventDefault();
        const { email, password, confirmPassword } = event.target.elements;
        {console.log(email.value)}
        try {
            await signInWithEmail(email.value, password.value);
            history.push('/');
        } catch(error) {
            alert(error);
        }
    }, [history]);

    return (
    <ThemeProvider theme={oldTheme}>
        <GlobalStyles />
            <Container>
                <Form>
                    <h4> sign in to </h4>
                    <Title> memento </Title>
                    <form onSubmit={ handdleSubmit }>
                        <Input name='email' placeholder='email'></Input>
                        <Input name='password' placeholder='password' type='password'></Input>
                        <Button> log in </Button>
                    </form>
                    <DivisorLine> or </DivisorLine>
                    <div>
                        <SocialButton onClick={ () => { alert('Google'); }}> <Google />  </SocialButton>
                        <SocialButton onClick={ () => { alert('Github'); }}> <Github />  </SocialButton>
                        <SocialButton onClick={ () => { alert('Twitter'); }}> <Twitter />  </SocialButton>
                    </div>
                    <p> Not a membre yet?<br/><Link to='/signup' style={{color: '#28A227'}}>Create Account</Link></p>


                </Form>
            </Container>
    </ThemeProvider>
    );
}

export default Login;
