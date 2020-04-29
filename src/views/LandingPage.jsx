import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { accountCreationWithEmail, signInWithEmail, signInWithProvider } from '../controller/Auth';

import * as theme from '../theme/theme';
import { LoginForm } from '../components/Form';

function LandingPage({ history }) {
	const [showloginForm, setShowloginForm] = useState(true);

	const createAccountWithEmail = async (email, password) => {
		try {
			await accountCreationWithEmail(email, password);
			history.push('/home');
		} catch (error) {
			alert(error);
		}
	};

	const loginWithEmail = async (email, password) => {
		try {
			await signInWithEmail(email, password);
			history.push('/home');
		} catch (error) {
			alert(error);
		}
	};

	const loginWithProvider = (provider) => {
		signInWithProvider(provider);
	};

	const changeFormToShow = () => {
		setShowloginForm(!showloginForm);
	};

	return (
		<ThemeProvider theme={showloginForm === true ? theme.old : theme.light}>
			{showloginForm === true
				? (
					<LoginForm
						loginWithEmail={loginWithEmail}
						loginWithProvider={loginWithProvider}
						changeFormToShow={changeFormToShow}
					/>
				)
				: (
					<LoginForm
						isSignUp
						loginWithEmail={createAccountWithEmail}
						loginWithProvider={loginWithProvider}
						changeFormToShow={changeFormToShow}
					/>
				)}
		</ThemeProvider>
	);
}

export default LandingPage;
