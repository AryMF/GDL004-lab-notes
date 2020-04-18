import React, {useCallback} from 'react';
import { withRouter } from 'react-router';
import { Link  } from 'react-router-dom';
import {accountCreationWithEmail} from '../controller/Auth';

import { ThemeProvider } from 'styled-components';
import lightTheme from '../theme/light.theme';
import GlobalStyles from '../styles/globalStyles';
import Container from '../elements/Container.component';
import Form from '../components/loginForm/Form.component';
import Title from '../components/loginForm/Title.component';
import Input from '../components/loginForm/Input.component';
import Button from '../components/loginForm/Button.component';
import DivisorLine from '../components/loginForm/DivisorLine.component';
import SocialButton from '../components/loginForm/SocialButton.component';
import {Google, Github, Twitter} from '@styled-icons/fa-brands'

function SignUp({ history }) {
    const handdleSubmit = useCallback(async ( event ) => {
        event.preventDefault();
        const { email, password, confirmPassword } = event.target.elements;
        {console.log(email.value)}
        try {
            await accountCreationWithEmail(email.value, password.value);
            history.push('/');
        } catch(error) {
            alert(error);
        }
    }, [history]);

    return (
    <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
            <Container>
                <Form>
                    <h4> sign up to </h4>
                    <Title> memento </Title>
                    <form onSubmit={ handdleSubmit }>
                        <Input name='email' placeholder='email' type='email' required></Input>
                        <Input name='password' placeholder='password' type='password' minlength='8' maxlength='10' required></Input>
                        <Input name='confirmPassword' placeholder='confirm password' type='password' required></Input>
                        <Button> sign up </Button>
                    </form>
                    <DivisorLine> or </DivisorLine>
                    <div>
                        <SocialButton onClick={ () => { alert('Google'); }}> <Google />  </SocialButton>
                        <SocialButton onClick={ () => { alert('Github'); }}> <Github />  </SocialButton>
                        <SocialButton onClick={ () => { alert('Twitter'); }}> <Twitter />  </SocialButton>
                    </div>
                    <p> Already a member?<br/><Link to='/login' style={{color: '#28A227'}}>Sign in</Link></p>
                    
                    
                </Form>
            </Container>
    </ThemeProvider>
    );
}

export default SignUp;